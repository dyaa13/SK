'use strict';

const TOPIC_CONFIGS = {};
const TOPIC_BANKS = {};

const STORAGE_PREFIX = 'dyaaKnowledgePractice';
const LAST_STUDENT_KEY = `${STORAGE_PREFIX}:lastStudent`;

// Use the same Google Apps Script Results endpoint as the shared DYAA practice site.
const CLOUD_RECORD_URL =
  'https://script.google.com/macros/s/AKfycbzmwxvMt73TGqnPOHw9jVYxFKlWNpPJUSfuAWKU9BAhGRo-p5aXnd9gP6a7fjpHDsWeSQ/exec';
const CLASS_TOKEN = 'dyaa-shared-class-2026';

const state = {
  topic: 'fractions',
  selectedGroups: [],
  level: 'core',
  duration: 300,
  remaining: 300,
  running: false,
  locked: false,
  timerId: null,
  score: 0,
  currentStreak: 0,
  bestStreak: 0,
  questionStartedAt: 0,
  correct: 0,
  answered: 0,
  current: null,
  recentKeys: [],
  studentName: '',
  totalStars: 0,
  mistakeBank: []
};

const $ = id => document.getElementById(id);

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[randInt(0, items.length - 1)];
}

function chance(probability) {
  return Math.random() < probability;
}

function gcd(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

function simplifyFraction(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    throw new Error('Invalid fraction.');
  }
  let n = Math.trunc(numerator);
  let d = Math.trunc(denominator);
  if (d < 0) { n *= -1; d *= -1; }
  const factor = gcd(n, d);
  return { n: n / factor, d: d / factor };
}

function fractionHtml(numerator, denominator) {
  const n = String(numerator);
  const d = String(denominator);
  return `<span class="fraction" aria-label="${n} over ${d}"><span class="top">${n}</span><span class="bottom">${d}</span></span>`;
}

function simplifiedFractionHtml(numerator, denominator) {
  const f = simplifyFraction(numerator, denominator);
  return fractionHtml(f.n, f.d);
}

function mixedHtml(whole, numerator, denominator) {
  return `<span class="mixed-number"><span class="whole">${whole}</span>${fractionHtml(numerator, denominator)}</span>`;
}

function parseRational(raw) {
  const text = String(raw ?? '')
    .trim()
    .replace(/[−–—]/g, '-')
    .replace(/,/g, '')
    .replace(/\s*\/\s*/g, '/');

  if (!text) return null;

  const mixed = text.match(/^([+-]?\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const numerator = Number(mixed[2]);
    const denominator = Number(mixed[3]);
    if (denominator === 0) return null;
    const sign = whole < 0 ? -1 : 1;
    return sign * (Math.abs(whole) + numerator / denominator);
  }

  const fraction = text.match(/^([+-]?\d+)\/(\d+)$/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    if (denominator === 0) return null;
    return Number(fraction[1]) / denominator;
  }

  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function answersMatch(userAnswer, question) {
  const accepted = Array.isArray(question.acceptedAnswers)
    ? question.acceptedAnswers
    : [question.answer];

  if (question.answerType === 'text') {
    const user = String(userAnswer).trim().toLowerCase().replace(/\s+/g, ' ');
    return accepted.some(answer => String(answer).trim().toLowerCase().replace(/\s+/g, ' ') === user);
  }

  if (question.answerType === 'fraction-structure') {
    const normalise = value => {
      let text = String(value).trim().replace(/\s+/g, '').replace(/[−–—]/g, '-');
      if (['algebra', 'linear_equation_word_problems'].includes(state.topic)) text = text.toLowerCase();
      return text;
    };
    const user = normalise(userAnswer);
    return accepted.some(answer => normalise(answer) === user);
  }

  const userValue = parseRational(userAnswer);
  if (userValue === null) return false;

  return accepted.some(answer => {
    const value = typeof answer === 'number' ? answer : parseRational(answer);
    return value !== null && Math.abs(userValue - value) < 1e-9;
  });
}

function makeQuestion({
  group,
  knowledgePoint = '',
  subtopic,
  text,
  answer,
  displayAnswer = null,
  acceptedAnswers = null,
  answerType = 'rational',
  hint = '',
  level = state.level
}) {
  return {
    group,
    knowledgePoint,
    subtopic,
    text,
    answer,
    displayAnswer: displayAnswer ?? String(answer),
    acceptedAnswers,
    answerType,
    hint,
    level
  };
}

function questionKey(question) {
  return [state.topic, question.group, question.knowledgePoint || '', question.subtopic, question.text, question.displayAnswer].join('|');
}

function currentConfig() {
  return TOPIC_CONFIGS[state.topic];
}

function currentBanks() {
  return TOPIC_BANKS[state.topic] || {};
}

function knowledgePointIsReady(groupId, pointId) {
  return typeof currentBanks()[groupId]?.[pointId] === 'function';
}

function readyKnowledgePoints(groupId) {
  const group = currentConfig().groups.find(item => item.id === groupId);
  if (!group) return [];
  return group.knowledgePoints.filter(point => knowledgePointIsReady(groupId, point.id));
}

function groupReadiness(groupId) {
  const group = currentConfig().groups.find(item => item.id === groupId);
  if (!group) return { ready: 0, total: 0, status: 'pending' };
  const ready = readyKnowledgePoints(groupId).length;
  const total = group.knowledgePoints.length;
  return {
    ready,
    total,
    status: ready === 0 ? 'pending' : ready === total ? 'ready' : 'partial'
  };
}

function groupIsReady(groupId) {
  return groupReadiness(groupId).ready > 0;
}

function getSelectedReadyEntries() {
  const config = currentConfig();
  const entries = [];
  for (const groupId of state.selectedGroups) {
    const group = config.groups.find(item => item.id === groupId);
    if (!group) continue;
    for (const point of group.knowledgePoints) {
      const generator = currentBanks()[groupId]?.[point.id];
      if (typeof generator === 'function') {
        entries.push({ group, point, generator });
      }
    }
  }
  return entries;
}

function generateQuestion(groupId = null, pointId = null) {
  const allReady = getSelectedReadyEntries();
  const candidates = allReady.filter(entry =>
    (!groupId || entry.group.id === groupId) &&
    (!pointId || entry.point.id === pointId)
  );
  const pool = candidates.length > 0 ? candidates : allReady;
  if (pool.length === 0) throw new Error('No connected knowledge-point bank is selected.');

  let fallback = null;
  for (let attempt = 0; attempt < 60; attempt++) {
    const selected = pick(pool);
    const raw = selected.generator();
    const question = makeQuestion({
      ...raw,
      group: raw.group || selected.group.id,
      knowledgePoint: raw.knowledgePoint || selected.point.id,
      subtopic: raw.subtopic || selected.point.label
    });
    fallback = question;
    const key = questionKey(question);
    if (!state.recentKeys.includes(key)) return question;
  }
  return fallback;
}

function rememberQuestion(question) {
  state.recentKeys.push(questionKey(question));
  if (state.recentKeys.length > 12) state.recentKeys.shift();
}

function normaliseStudentName(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function storageKey(type) {
  const student = encodeURIComponent(state.studentName.toLowerCase());
  return `${STORAGE_PREFIX}:${state.topic}:${student}:${type}`;
}

function loadProgress() {
  try {
    state.totalStars = Number(localStorage.getItem(storageKey('stars'))) || 0;
    const mistakes = JSON.parse(localStorage.getItem(storageKey('mistakes')) || '[]');
    state.mistakeBank = Array.isArray(mistakes) ? mistakes : [];
  } catch {
    state.totalStars = 0;
    state.mistakeBank = [];
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey('stars'), String(state.totalStars));
    localStorage.setItem(storageKey('mistakes'), JSON.stringify(state.mistakeBank.slice(0, 120)));
  } catch (error) {
    console.warn('Could not save local progress.', error);
  }
}

function saveMistake(question, userAnswer) {
  const key = questionKey(question);
  const existing = state.mistakeBank.find(item => item.key === key);
  if (existing) {
    existing.lastAnswer = String(userAnswer);
    existing.wrongCount = (existing.wrongCount || 1) + 1;
    existing.updated = Date.now();
  } else {
    state.mistakeBank.unshift({
      key,
      question,
      lastAnswer: String(userAnswer),
      wrongCount: 1,
      updated: Date.now()
    });
  }
  saveProgress();
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.trunc(seconds));
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}
