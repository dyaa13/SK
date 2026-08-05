'use strict';

const identityOverlay = $('identityOverlay');
const studentNameInput = $('studentNameInput');
const studentNameError = $('studentNameError');
const continueBtn = $('continueBtn');
const changeStudentBtn = $('changeStudentBtn');
const studentNameDisplay = $('studentNameDisplay');
const totalStars = $('totalStars');
const pageTitle = $('pageTitle');
const topicSelect = $('topicSelect');
const groupPicker = $('groupPicker');
const groupSummary = $('groupSummary');
const groupCheckboxes = $('groupCheckboxes');
const selectionHelp = $('selectionHelp');
const selectAllBtn = $('selectAllBtn');
const clearBtn = $('clearBtn');
const doneBtn = $('doneBtn');
const levelSelect = $('levelSelect');
const timeSelect = $('timeSelect');
const startBtn = $('startBtn');
const reviewBtn = $('reviewBtn');
const testBtn = $('testBtn');
const printBtn = $('printBtn');
const finishBtn = $('finishBtn');
const frameworkStatusText = $('frameworkStatusText');
const frameworkStatusFill = $('frameworkStatusFill');
const knowledgeMapTitle = $('knowledgeMapTitle');
const knowledgeMapIntro = $('knowledgeMapIntro');
const knowledgeGrid = $('knowledgeGrid');
const timerValue = $('timerValue');
const scoreValue = $('scoreValue');
const correctValue = $('correctValue');
const answeredValue = $('answeredValue');
const accuracyValue = $('accuracyValue');
const playCard = $('playCard');
const modeBadge = $('modeBadge');
const questionSubtopic = $('questionSubtopic');
const questionText = $('questionText');
const answerInput = $('answerInput');
const submitBtn = $('submitBtn');

let algebraInputTools = null;

function insertIntoAnswerInput(text) {
  if (answerInput.disabled) return;
  const start = Number.isInteger(answerInput.selectionStart) ? answerInput.selectionStart : answerInput.value.length;
  const end = Number.isInteger(answerInput.selectionEnd) ? answerInput.selectionEnd : start;
  answerInput.setRangeText(text, start, end, 'end');
  answerInput.focus();
}

function ensureAlgebraInputTools() {
  if (algebraInputTools) return algebraInputTools;

  const style = document.createElement('style');
  style.id = 'algebraInputToolsStyle';
  style.textContent = `
    .algebra-input-tools{display:none;align-items:center;gap:7px;flex-wrap:wrap;margin:9px 0 0;padding:8px 10px;border:1px solid #c9d8ee;border-radius:10px;background:#f7faff}
    .algebra-input-tools.visible{display:flex}
    .algebra-input-tools button{min-width:40px;height:36px;padding:0 11px;border:1px solid #8aa7d4;border-radius:8px;background:#fff;color:#0b3278;font-size:20px;font-weight:800;cursor:pointer}
    .algebra-input-tools button:hover{background:#eaf2ff}
    .algebra-input-tools button:focus-visible{outline:3px solid rgba(28,104,210,.25);outline-offset:1px}
    .algebra-input-tools small{flex:1 1 210px;color:#52617a;font-size:13px;line-height:1.35}
  `;
  document.head.appendChild(style);

  algebraInputTools = document.createElement('div');
  algebraInputTools.id = 'algebraInputTools';
  algebraInputTools.className = 'algebra-input-tools';
  algebraInputTools.setAttribute('aria-label', 'Algebra answer input tools');
  algebraInputTools.innerHTML = `
    <button type="button" data-insert="x" aria-label="Insert x">x</button>
    <button type="button" data-insert="²" aria-label="Insert squared">²</button>
    <button type="button" data-insert="³" aria-label="Insert cubed">³</button>
    <small>Use the ² or ³ button, or type <strong>x^2</strong> or <strong>x^3</strong>.</small>
  `;

  const answerRow = answerInput.closest('.answer-row');
  if (answerRow) answerRow.insertAdjacentElement('afterend', algebraInputTools);
  else answerInput.insertAdjacentElement('afterend', algebraInputTools);

  algebraInputTools.querySelectorAll('button[data-insert]').forEach(button => {
    button.addEventListener('click', () => insertIntoAnswerInput(button.dataset.insert || ''));
  });

  return algebraInputTools;
}

function questionNeedsPowerInput(question) {
  if (!question || state.topic !== 'algebra') return false;
  const accepted = Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [];
  const expected = [question.answer, question.displayAnswer, ...accepted].join(' ');
  return /[a-z](?:\^-?\d+|[⁰¹²³⁴⁵⁶⁷⁸⁹])/.test(expected);
}

function updateAlgebraInputTools() {
  const tools = ensureAlgebraInputTools();
  const visible = state.running && !state.locked && !answerInput.disabled && questionNeedsPowerInput(state.current);
  tools.classList.toggle('visible', visible);
  tools.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

const feedback = $('feedback');
const hint = $('hint');
const summaryCard = $('summaryCard');
const summaryScore = $('summaryScore');
const summaryCorrect = $('summaryCorrect');
const summaryAnswered = $('summaryAnswered');
const summaryAccuracy = $('summaryAccuracy');
const playAgainBtn = $('playAgainBtn');
const reviewCard = $('reviewCard');
const reviewTable = $('reviewTable');
const closeReviewBtn = $('closeReviewBtn');
const clearMistakesBtn = $('clearMistakesBtn');
const savedCountTop = $('savedCountTop');
const teacherNote = $('teacherNote');

function renderTopicOptions() {
  topicSelect.innerHTML = Object.entries(TOPIC_CONFIGS)
    .map(([id, config]) => `<option value="${id}">${config.title}</option>`)
    .join('');
  topicSelect.value = state.topic;
}

function renderLevels() {
  const config = currentConfig();
  levelSelect.innerHTML = config.levels
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join('');
  if (!config.levels.some(([value]) => value === state.level)) {
    state.level = config.levels[0][0];
  }
  levelSelect.value = state.level;
}

function groupDescription(group) {
  return group.knowledgePoints.map(point => `${point.number}. ${point.label}`).join(' · ');
}

function renderGroupPicker() {
  const config = currentConfig();
  groupCheckboxes.innerHTML = config.groups.map(group => {
    const readiness = groupReadiness(group.id);
    const checked = state.selectedGroups.includes(group.id) ? 'checked' : '';
    return `
      <label class="group-option">
        <input type="checkbox" value="${group.id}" ${checked}>
        <span>
          <strong>Practice ${group.practiceNumber}: ${group.label}</strong>
          <small>${groupDescription(group)}</small>
        </span>
        <span class="bank-status ${readiness.status}">${readiness.ready}/${readiness.total} added</span>
      </label>`;
  }).join('');

  groupCheckboxes.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', syncSelectedGroups);
  });
}

function renderKnowledgeMap() {
  const config = currentConfig();
  knowledgeMapTitle.textContent = config.knowledgeMapTitle;
  knowledgeMapIntro.textContent = config.intro;

  knowledgeGrid.innerHTML = config.groups.map(group => {
    const readiness = groupReadiness(group.id);
    const selected = state.selectedGroups.includes(group.id);
    return `
      <article class="knowledge-card ${readiness.status === 'ready' ? 'ready' : ''} ${selected ? 'selected' : ''}" data-group="${group.id}">
        <div class="knowledge-card-header">
          <span class="practice-number">${group.practiceNumber}</span>
          <div>
            <h3>${group.label}</h3>
            <p class="group-description">${group.description}</p>
          </div>
        </div>
        <ul class="knowledge-list">
          ${group.knowledgePoints.map(point => `
            <li><span class="kp-number">${point.number}</span><span>${point.label}</span><span class="kp-bank-state ${knowledgePointIsReady(group.id, point.id) ? 'ready' : 'pending'}">${knowledgePointIsReady(group.id, point.id) ? 'Ready' : 'Pending'}</span></li>
          `).join('')}
        </ul>
        <div class="card-footer">
          <span>${group.knowledgePoints.length} small knowledge point${group.knowledgePoints.length === 1 ? '' : 's'}</span>
          <span class="bank-status ${readiness.status}">${readiness.ready}/${readiness.total} banks connected</span>
        </div>
      </article>`;
  }).join('');
}

function syncSelectedGroups() {
  state.selectedGroups = [...groupCheckboxes.querySelectorAll('input:checked')].map(input => input.value);
  updateSelectionUI();
  renderKnowledgeMap();
}

function updateSelectionUI() {
  const config = currentConfig();
  const selected = state.selectedGroups;
  const readySelected = getSelectedReadyEntries();
  const allPoints = config.groups.flatMap(group => group.knowledgePoints.map(point => ({ group, point })));
  const readyTotal = allPoints.filter(({ group, point }) => knowledgePointIsReady(group.id, point.id)).length;
  const totalPoints = allPoints.length;

  if (selected.length === 0) {
    groupSummary.textContent = 'Select at least one practice point';
  } else if (selected.length === config.groups.length) {
    groupSummary.textContent = 'All practice points selected';
  } else if (selected.length <= 2) {
    groupSummary.textContent = selected
      .map(id => config.groups.find(group => group.id === id)?.label || id)
      .join(', ');
  } else {
    groupSummary.textContent = `${selected.length} practice points selected`;
  }

  selectionHelp.classList.toggle('error', selected.length === 0 || readySelected.length === 0);
  if (selected.length === 0) {
    selectionHelp.textContent = 'Select at least one practice point.';
  } else if (readySelected.length === 0) {
    selectionHelp.textContent = 'The structure is ready. These selected question banks have not been added yet.';
  } else {
    selectionHelp.textContent = `${readySelected.length} selected knowledge-point bank${readySelected.length === 1 ? '' : 's'} ready for questions.`;
  }

  const canRun = readySelected.length > 0 && !state.running;
  startBtn.disabled = !canRun;
  testBtn.disabled = !canRun;
  printBtn.disabled = !canRun;
  startBtn.textContent = canRun
    ? `Start ${Math.round(state.duration / 60)}-Minute ${config.title} Practice`
    : readyTotal === 0
      ? 'Question banks will be added next'
      : 'Select a connected question bank';

  frameworkStatusText.textContent = `${readyTotal} of ${totalPoints} knowledge-point banks connected across ${config.groups.length} practice points`;
  frameworkStatusFill.style.width = `${totalPoints ? (readyTotal / totalPoints) * 100 : 0}%`;
}

function updateDashboard() {
  timerValue.textContent = formatTime(state.remaining);
  scoreValue.textContent = state.score;
  correctValue.textContent = state.correct;
  answeredValue.textContent = state.answered;
  accuracyValue.textContent = state.answered ? `${Math.round(state.correct / state.answered * 100)}%` : '—';
  totalStars.textContent = state.totalStars;
  savedCountTop.textContent = state.mistakeBank.length;
  reviewBtn.disabled = state.mistakeBank.length === 0 || state.running;
}

function configureTopic() {
  const config = currentConfig();
  pageTitle.textContent = config.pageTitle;
  state.selectedGroups = config.groups.map(group => group.id);
  renderLevels();
  renderGroupPicker();
  renderKnowledgeMap();
  teacherNote.innerHTML = `<strong>Teacher note:</strong> ${config.teacherNote}`;
  updateAlgebraInputTools();
  updateSelectionUI();
  updateDashboard();
}

function showQuestion() {
  const question = generateQuestion();
  state.current = question;
  rememberQuestion(question);

  const group = currentConfig().groups.find(item => item.id === question.group);
  modeBadge.textContent = group ? `Practice ${group.practiceNumber}: ${group.label}` : question.group;
  questionSubtopic.textContent = question.subtopic || '';
  questionText.innerHTML = question.text;
  answerInput.value = '';
  answerInput.disabled = false;
  submitBtn.disabled = false;
  feedback.textContent = '';
  feedback.className = 'feedback';
  hint.textContent = '';
  state.locked = false;
  updateAlgebraInputTools();
  answerInput.focus();
}

function startPractice() {
  if (getSelectedReadyEntries().length === 0) return;

  state.running = true;
  state.locked = false;
  state.duration = Number(timeSelect.value);
  state.remaining = state.duration;
  state.score = 0;
  state.correct = 0;
  state.answered = 0;
  state.current = null;
  state.recentKeys = [];

  summaryCard.classList.add('hidden');
  reviewCard.classList.add('hidden');
  finishBtn.classList.remove('hidden');
  startBtn.disabled = true;
  testBtn.disabled = true;
  printBtn.disabled = true;
  topicSelect.disabled = true;
  levelSelect.disabled = true;
  timeSelect.disabled = true;
  groupCheckboxes.querySelectorAll('input').forEach(input => { input.disabled = true; });

  updateDashboard();
  showQuestion();

  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    updateDashboard();
    if (state.remaining <= 0) finishPractice();
  }, 1000);
}

function submitAnswer() {
  if (!state.running || state.locked || !state.current) return;
  const raw = answerInput.value.trim();
  if (!raw) {
    feedback.textContent = 'Enter an answer first.';
    feedback.className = 'feedback incorrect';
    return;
  }

  state.locked = true;
  state.answered += 1;
  const correct = answersMatch(raw, state.current);

  if (correct) {
    state.correct += 1;
    state.score += 10;
    state.totalStars += 1;
    feedback.textContent = 'Correct!';
    feedback.className = 'feedback correct';
  } else {
    state.score = Math.max(0, state.score - 2);
    feedback.textContent = `Not quite. Correct answer: ${state.current.displayAnswer}`;
    feedback.className = 'feedback incorrect';
    hint.textContent = state.current.hint || '';
    saveMistake(state.current, raw);
  }

  saveProgress();
  updateDashboard();
  answerInput.disabled = true;
  submitBtn.disabled = true;
  updateAlgebraInputTools();

  setTimeout(() => {
    if (state.running) showQuestion();
  }, correct ? 650 : 1500);
}

function createPracticeSessionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function loadPendingCloudRecords() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey('pendingCloudRecords')) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Could not load pending Google Sheet results.', error);
    return [];
  }
}

function savePendingCloudRecords(records) {
  try {
    localStorage.setItem(storageKey('pendingCloudRecords'), JSON.stringify(records));
    return true;
  } catch (error) {
    console.warn('Could not save the Google Sheet upload queue.', error);
    return false;
  }
}

function selectedPracticeLabels() {
  const config = currentConfig();
  return state.selectedGroups
    .map(groupId => config.groups.find(group => group.id === groupId))
    .filter(Boolean)
    .map(group => `Practice ${group.practiceNumber}: ${group.label}`);
}

function buildPracticeRecord() {
  return {
    sessionId: createPracticeSessionId(),
    student: state.studentName,
    completedAt: new Date().toISOString(),
    topic: currentConfig().title,
    year: currentConfig().title,
    skills: selectedPracticeLabels(),
    difficulty: state.level,
    durationSeconds: state.duration,
    answered: state.answered,
    correct: state.correct,
    accuracy: state.answered ? Math.round(state.correct / state.answered * 100) : 0,
    score: state.score,
    bestStreak: 0
  };
}

function buildCloudRecordPayload(record) {
  return {
    classToken: CLASS_TOKEN,
    student: record.student,
    completedAt: record.completedAt,
    year: record.year,
    topic: record.topic,
    skills: Array.isArray(record.skills) ? record.skills.join(', ') : String(record.skills || ''),
    practicePoints: Array.isArray(record.skills) ? record.skills.join(', ') : String(record.skills || ''),
    difficulty: record.difficulty,
    durationMinutes: Math.round(Number(record.durationSeconds || 0) / 60),
    answered: record.answered,
    correct: record.correct,
    accuracy: record.accuracy,
    score: record.score,
    bestStreak: record.bestStreak,
    sessionId: record.sessionId
  };
}

async function uploadPracticeRecordToCloud(record) {
  if (!navigator.onLine) throw new Error('The browser is offline.');

  await fetch(CLOUD_RECORD_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(buildCloudRecordPayload(record))
  });
}

let cloudUploadInProgress = false;

async function retryPendingPracticeUploads() {
  if (cloudUploadInProgress || !navigator.onLine || !state.studentName) return false;

  const pending = loadPendingCloudRecords();
  if (!pending.length) return true;

  cloudUploadInProgress = true;
  const remaining = [...pending];

  try {
    while (remaining.length) {
      await uploadPracticeRecordToCloud(remaining[0]);
      remaining.shift();
      savePendingCloudRecords(remaining);
    }
    return true;
  } catch (error) {
    console.warn('Google Sheet upload is pending and will be retried later.', error);
    return false;
  } finally {
    cloudUploadInProgress = false;
  }
}

function showCloudResultStatus(message, isPending = false) {
  let status = document.getElementById('cloudResultStatus');
  if (!status) {
    status = document.createElement('p');
    status.id = 'cloudResultStatus';
    status.style.margin = '14px 0 0';
    status.style.fontWeight = '800';
    status.style.color = isPending ? '#9a5b00' : '#176b3a';
    summaryCard.insertBefore(status, playAgainBtn);
  }
  status.style.color = isPending ? '#9a5b00' : '#176b3a';
  status.textContent = message;
}

function queuePracticeRecordUpload(record) {
  const pending = loadPendingCloudRecords();
  if (!pending.some(item => item.sessionId === record.sessionId)) {
    pending.push(record);
    savePendingCloudRecords(pending);
  }

  if (!navigator.onLine) {
    showCloudResultStatus('Result saved. It will be sent to the Google Sheet when this device is online.', true);
    return;
  }

  showCloudResultStatus('Sending result to the Google Sheet…', true);
  retryPendingPracticeUploads().then(sent => {
    showCloudResultStatus(
      sent
        ? 'Result sent to your teacher’s Google Sheet.'
        : 'Result saved. The Google Sheet upload will retry automatically.',
      !sent
    );
  });
}

function finishPractice() {
  if (!state.running) return;
  state.running = false;
  clearInterval(state.timerId);
  state.timerId = null;

  finishBtn.classList.add('hidden');
  topicSelect.disabled = false;
  levelSelect.disabled = false;
  timeSelect.disabled = false;
  groupCheckboxes.querySelectorAll('input').forEach(input => { input.disabled = false; });
  answerInput.disabled = true;
  submitBtn.disabled = true;
  updateAlgebraInputTools();

  summaryScore.textContent = state.score;
  summaryCorrect.textContent = state.correct;
  summaryAnswered.textContent = state.answered;
  summaryAccuracy.textContent = state.answered ? `${Math.round(state.correct / state.answered * 100)}%` : '—';
  summaryCard.classList.remove('hidden');

  if (state.answered > 0) {
    queuePracticeRecordUpload(buildPracticeRecord());
  } else {
    showCloudResultStatus('No result was sent because no questions were answered.', true);
  }

  updateSelectionUI();
  updateDashboard();
}

function validateGeneratedQuestion(question) {
  const issues = [];
  if (!question || typeof question !== 'object') issues.push('Generator did not return an object.');
  if (!question?.text) issues.push('Missing question text.');
  if (!question?.group || !currentConfig().groups.some(group => group.id === question.group)) issues.push('Unknown group.');
  if (question?.answer == null) issues.push('Missing answer.');
  return issues;
}

function testQuestionBanks() {
  if (getSelectedReadyEntries().length === 0) return;
  const counts = new Map();
  const issues = [];
  for (let i = 0; i < 100; i++) {
    try {
      const q = generateQuestion();
      const key = questionKey(q);
      counts.set(key, (counts.get(key) || 0) + 1);
      validateGeneratedQuestion(q).forEach(issue => issues.push(`Question ${i + 1}: ${issue}`));
    } catch (error) {
      issues.push(`Question ${i + 1}: ${error.message}`);
    }
  }
  const unique = counts.size;
  const repeats = [...counts.values()].filter(count => count > 1).reduce((sum, count) => sum + count - 1, 0);
  alert(`100-question test complete.\n\nValid: ${100 - issues.length}\nUnique: ${unique}\nRepeated generations: ${repeats}\nIssues: ${issues.length}${issues.length ? `\n\n${issues.slice(0, 8).join('\n')}` : ''}`);
}

function printQuestions() {
  if (getSelectedReadyEntries().length === 0) return;
  const questions = [];
  for (let i = 0; i < 50; i++) questions.push(generateQuestion());

  const windowRef = window.open('', '_blank');
  if (!windowRef) {
    alert('Please allow pop-ups to prepare the printable worksheet.');
    return;
  }

  const config = currentConfig();
  const questionHtml = questions.map((q, index) => `<div class="q"><b>${index + 1}.</b><span>${q.text}</span></div>`).join('');
  const answerHtml = questions.map((q, index) => `<div class="a"><b>${index + 1}.</b><span>${q.displayAnswer}</span></div>`).join('');
  windowRef.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>DYAA ${config.title} Practice</title><style>
    @page{size:A4;margin:12mm}body{font-family:Arial,sans-serif;color:#14213d;margin:0}h1{color:#082b74;margin:0 0 4px}.meta{color:#52617a;margin-bottom:14px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 18px}.q,.a{display:grid;grid-template-columns:26px 1fr;gap:5px;min-height:46px;padding:7px;border-bottom:1px solid #d8e1ef;font-size:16px}.answers{break-before:page}.fraction{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1}.fraction .top{border-bottom:1px solid;padding:0 3px 2px}.fraction .bottom{padding:2px 3px 0}</style></head><body>
    <h1>DYAA — ${config.title} Practice</h1><div class="meta">Name: __________________________ &nbsp;&nbsp; Date: ______________</div><div class="grid">${questionHtml}</div>
    <section class="answers"><h1>Answer Key</h1><div class="grid">${answerHtml}</div></section>
    <script>window.onload=()=>window.print()<\/script></body></html>`);
  windowRef.document.close();
}

function renderReview() {
  reviewTable.innerHTML = state.mistakeBank.length === 0
    ? '<div class="review-empty">No saved mistakes yet.</div>'
    : state.mistakeBank.map(item => `
      <div class="review-item">
        <div><strong>${item.question.subtopic || item.question.group}</strong><small>${item.question.text}</small></div>
        <div><small>Your answer: ${item.lastAnswer}</small><strong>${item.question.displayAnswer}</strong></div>
      </div>`).join('');
  reviewCard.classList.remove('hidden');
  reviewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function acceptStudentName() {
  const name = normaliseStudentName(studentNameInput.value);
  if (name.length < 2) {
    studentNameError.textContent = 'Please enter your name.';
    return;
  }
  state.studentName = name;
  localStorage.setItem(LAST_STUDENT_KEY, name);
  studentNameDisplay.textContent = name;
  identityOverlay.classList.add('hidden');
  studentNameError.textContent = '';
  loadProgress();
  updateDashboard();
  retryPendingPracticeUploads();
}

continueBtn.addEventListener('click', acceptStudentName);
studentNameInput.addEventListener('keydown', event => { if (event.key === 'Enter') acceptStudentName(); });
changeStudentBtn.addEventListener('click', () => {
  if (state.running) return;
  identityOverlay.classList.remove('hidden');
  studentNameInput.value = state.studentName;
  studentNameInput.focus();
});

topicSelect.addEventListener('change', () => {
  state.topic = topicSelect.value;
  loadProgress();
  configureTopic();
});
levelSelect.addEventListener('change', () => { state.level = levelSelect.value; });
timeSelect.addEventListener('change', () => {
  state.duration = Number(timeSelect.value);
  if (!state.running) state.remaining = state.duration;
  updateSelectionUI();
  updateDashboard();
});
selectAllBtn.addEventListener('click', () => {
  state.selectedGroups = currentConfig().groups.map(group => group.id);
  renderGroupPicker();
  updateSelectionUI();
  renderKnowledgeMap();
});
clearBtn.addEventListener('click', () => {
  state.selectedGroups = [];
  renderGroupPicker();
  updateSelectionUI();
  renderKnowledgeMap();
});
doneBtn.addEventListener('click', () => { groupPicker.open = false; });
startBtn.addEventListener('click', startPractice);
finishBtn.addEventListener('click', finishPractice);
submitBtn.addEventListener('click', submitAnswer);
answerInput.addEventListener('keydown', event => { if (event.key === 'Enter') submitAnswer(); });
testBtn.addEventListener('click', testQuestionBanks);
printBtn.addEventListener('click', printQuestions);
reviewBtn.addEventListener('click', renderReview);
closeReviewBtn.addEventListener('click', () => reviewCard.classList.add('hidden'));
clearMistakesBtn.addEventListener('click', () => {
  if (!confirm('Clear all saved mistakes for this student and topic?')) return;
  state.mistakeBank = [];
  saveProgress();
  renderReview();
  updateDashboard();
});
playAgainBtn.addEventListener('click', () => {
  summaryCard.classList.add('hidden');
  playCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.addEventListener('click', event => {
  if (groupPicker.open && !groupPicker.contains(event.target)) groupPicker.open = false;
});

window.addEventListener('online', retryPendingPracticeUploads);

renderTopicOptions();
configureTopic();
state.duration = Number(timeSelect.value);
state.remaining = state.duration;
updateDashboard();

const previousStudent = localStorage.getItem(LAST_STUDENT_KEY) || '';
studentNameInput.value = previousStudent;
setTimeout(() => studentNameInput.focus(), 50);
