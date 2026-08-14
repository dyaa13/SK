'use strict';

/* Game start/finish, summaries, review mode and mistake-bank rendering.
   Split from DYAAPS.html without changing the original logic. */

function startGame() {
  clearInterval(state.timerId);

  syncSelectedSkillsFromUI();

  if (getActiveSkills().length === 0) {
    skillPicker.open = true;
    updateSkillSelectionUI();
    return;
  }

  state.level = levelSelect.value;
  state.duration = Number(timeSelect.value);
  state.remaining = state.duration;
  state.pauseSnapshot = null;
  state.heroKey = heroSelect.value;
  state.running = true;
  state.paused = false;
  state.locked = false;
  state.reviewMode = false;
  state.score = 0;
  state.correct = 0;
  state.answered = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.missionRewarded = false;
  state.roundMistakes = [];
  clearRecentQuestions();
  testPanel.classList.remove('show');

  resetSkillStats();

  state.mission = createMission();
  missionText.textContent = state.mission.text;
  summary.style.display = 'none';
  reviewList.style.display = 'none';
  practiceRecords.style.display = 'none';
  playArea.classList.remove('hidden');
  summaryTitle.textContent = `${currentProblemLevelName()} Practice Complete!`;
  pauseBtn.textContent = 'Pause';

  setControlsForGame(true);
  updateStatus();
  showQuestion();

  state.timerId = setInterval(timerTick, 1000);
  saveProgress();
}

function togglePause() {
  // Pause is disabled during review and during the short answer-feedback lock.
  if (!state.running || state.reviewMode || state.locked) return;

  if (!state.paused) {
    state.pauseSnapshot = {
      answerValue: answerInput.value,
      questionStartedAt: state.questionStartedAt,
      pauseStartedAt: performance.now()
    };

    state.paused = true;
    pauseBtn.textContent = 'Resume';
    setControlsForGame(true);

    questionText.textContent = 'Paused';
    modeBadge.textContent = 'Paused';
    feedback.textContent = '';
    feedback.className = 'feedback';
    hint.textContent = 'Press Resume to continue the same question.';
    return;
  }

  const snapshot = state.pauseSnapshot || {};
  const resumedAt = performance.now();

  state.paused = false;
  pauseBtn.textContent = 'Pause';
  setControlsForGame(true);

  // Re-render the current question without generating a new one.
  showQuestion(true);
  answerInput.value = snapshot.answerValue || '';

  if (Number.isFinite(snapshot.questionStartedAt)) {
    const pausedFor = Number.isFinite(snapshot.pauseStartedAt)
      ? resumedAt - snapshot.pauseStartedAt
      : 0;
    state.questionStartedAt = snapshot.questionStartedAt + pausedFor;
  }

  state.pauseSnapshot = null;
  answerInput.focus();
}

function weakestArea() {
  const entries = Object.entries(state.skillStats)
    .filter(([, values]) => values.total > 0)
    .map(([skill, values]) => ({
      skill,
      accuracy: Math.round(
        (values.correct / values.total) * 100
      ),
      total: values.total
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  return entries[0] || null;
}

function getStarRating() {
  const accuracy = getAccuracy();

  if (state.year === 4) {
    if (state.correct >= 20 && accuracy >= 90) return 3;
    if (state.correct >= 12 && accuracy >= 75) return 2;
    return 1;
  }

  if (state.year === 5) {
    if (state.correct >= 16 && accuracy >= 85) return 3;
    if (state.correct >= 10 && accuracy >= 70) return 2;
    return 1;
  }

  if (state.year === 6) {
    const thresholds = state.duration === 60
      ? { three: 5, two: 3 }
      : state.duration === 180
        ? { three: 11, two: 7 }
        : { three: 18, two: 11 };

    if (state.correct >= thresholds.three && accuracy >= 85) return 3;
    if (state.correct >= thresholds.two && accuracy >= 70) return 2;
    return 1;
  }

  if (state.correct >= 18 && accuracy >= 90) return 3;
  if (state.correct >= 10 && accuracy >= 75) return 2;
  return 1;
}

function buildBadges() {
  const output = [];

  if (state.correct >= 10) output.push('⚡ Rapid Thinker');
  if (state.bestStreak >= 5) output.push('🔥 Hot Streak');

  if (getAccuracy() >= 90 && state.answered >= 8) {
    output.push('🎯 Accuracy Star');
  }

  if (state.roundMistakes.length === 0 && state.answered >= 5) {
    output.push('💎 Clean Round');
  }

  if (missionComplete()) {
    output.push('🏆 Mission Complete');
  }

  return output;
}

function finishGame() {
  if (!state.running || state.reviewMode) return;

  clearInterval(state.timerId);
  state.running = false;
  state.paused = false;
  state.remaining = Math.max(0, state.remaining);

  setControlsForGame(false);
  playArea.classList.add('hidden');
  summary.style.display = 'block';

  if (missionComplete() && !state.missionRewarded) {
    state.totalStars += 5;
    state.missionRewarded = true;
  }

  if (state.score > state.bestScore) {
    state.bestScore = state.score;
  }

  const stars = getStarRating();
  const weak = weakestArea();

  summaryTitle.textContent = `${currentProblemLevelName()} Practice Complete!`;
  summaryStars.textContent =
    '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  summaryScore.textContent = `${state.score} points`;
  endCorrect.textContent = state.correct;
  endAnswered.textContent = state.answered;
  endAccuracy.textContent = `${getAccuracy()}%`;
  endStreak.textContent = state.bestStreak;

  summaryFocus.textContent = weak
    ? `Next focus: ${currentLabels()[weak.skill]} — ${weak.accuracy}% accuracy in this session.`
    : 'Complete more questions to receive a focus recommendation.';

  const earnedBadges = buildBadges();

  badges.innerHTML = (
    earnedBadges.length
      ? earnedBadges
      : ['🌱 Keep Growing']
  )
    .map(text => `<span class="badge">${text}</span>`)
    .join('');

  summaryMessage.textContent =
    `${state.roundMistakes.length} mistake${state.roundMistakes.length === 1 ? '' : 's'} saved from this round. `
    + (
      missionComplete()
        ? 'Mission complete — 5 bonus stars earned!'
        : 'Try again to complete the mission.'
    );

  reviewRoundBtn.disabled = state.roundMistakes.length === 0;

  if (savePracticeRecord()) {
    summaryMessage.textContent +=
      " Result saved locally and sent to your teacher.";
  }

  saveProgress();
  updateStatus();
  launchConfetti(stars === 3 ? 48 : 28);
  playSound('finish');
}

function startReview(items, source) {
  const reviewItems = Array.isArray(items)
    ? items.filter(item => item && item.q)
    : [];

  if (!reviewItems.length) {
    showReward('No mistakes are available to review.');
    return;
  }

  clearInterval(state.timerId);

  // Clone the queue before review starts so removing a correctly reviewed
  // question from the saved bank cannot disturb the current review order.
  state.reviewQueue = reviewItems.map(
    item => JSON.parse(JSON.stringify(item))
  );
  state.reviewMode = true;
  state.reviewSource = source;
  state.reviewIndex = 0;
  state.current = null;
  state.running = true;
  state.paused = false;
  state.pauseSnapshot = null;
  state.locked = false;
  state.score = 0;
  state.correct = 0;
  state.answered = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.roundMistakes = [];

  summary.style.display = 'none';
  reviewList.style.display = 'none';
  practiceRecords.style.display = 'none';
  playArea.classList.remove('hidden');
  missionText.textContent =
    'Review each saved mistake once. A correct answer removes it from the saved mistakes.';

  setControlsForGame(true);
  showQuestion();

  // Make the first review question visible immediately after pressing the button.
  if (typeof playArea.scrollIntoView === 'function') {
    playArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function finishReview() {
  state.running = false;
  state.reviewMode = false;
  state.paused = false;
  state.pauseSnapshot = null;

  setControlsForGame(false);
  playArea.classList.add('hidden');
  summary.style.display = 'block';

  summaryTitle.textContent =
    `${currentProblemLevelName()} Mistake Review Complete!`;
  summaryStars.textContent =
    state.correct === state.answered && state.answered
      ? '⭐⭐⭐'
      : '⭐⭐☆';
  summaryScore.textContent =
    `${state.correct}/${state.answered} reviewed correctly`;
  endCorrect.textContent = state.correct;
  endAnswered.textContent = state.answered;
  endAccuracy.textContent = `${getAccuracy()}%`;
  endStreak.textContent = state.bestStreak;
  summaryFocus.textContent =
    `${state.mistakeBank.length} ${currentProblemLevelName()} saved mistake${state.mistakeBank.length === 1 ? ' remains' : 's remain'} to master.`;
  badges.innerHTML =
    '<span class="badge">🧠 Mistake Detective</span>';
  summaryMessage.textContent =
    'Each saved mistake is removed as soon as you answer it correctly in review. If it is still wrong, it stays in the bank for another review later.';
  reviewRoundBtn.disabled = true;

  saveProgress();
  updateStatus();
  launchConfetti(24);
  playSound('finish');
}

function renderMistakeListIfOpen() {
  if (reviewList.style.display !== 'block') return;
  renderMistakeList();
}

function renderMistakeList() {
  if (!state.mistakeBank.length) {
    reviewTable.innerHTML =
      `<div class="review-empty">No saved ${currentProblemLevelName()} mistakes. Great work!</div>`;
    return;
  }

  reviewTable.innerHTML = state.mistakeBank
    .map((mistake, index) => {
      const label =
        currentLabels()[mistake.q.skill] || mistake.q.skill;

      return `
        <div class="review-row">
          <div>
            <b>${index + 1}. ${escapeHtml(label)}</b><br>
            ${formatMathHtml(mistake.q.text)}
          </div>
          <div>
            <b>Your last answer</b><br>
            ${escapeHtml(mistake.lastAnswer || '—')}
          </div>
          <div>
            <b>Correct answer</b><br>
            ${escapeHtml(displayCorrect(mistake.q))}<br>
            <span class="small-text">One correct review removes this question.</span>
          </div>
        </div>
      `;
    })
    .join('');
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[character]
  );
}

function formatMathHtml(value) {
  return escapeHtml(cleanDisplayNumbers(value)).replace(
    /\^(-?\d+|\?)/g,
    '<sup>$1</sup>'
  );
}

function setMathDisplay(element, value) {
  element.innerHTML = `<span class="math-expression">${formatMathHtml(value)}</span>`;
}

function toggleMistakeList() {
  reviewList.style.display =
    reviewList.style.display === 'block'
      ? 'none'
      : 'block';

  if (reviewList.style.display === 'block') {
    renderMistakeList();
    reviewList.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function clearMistakes() {
  if (!state.mistakeBank.length) return;

  if (
    confirm(
      `Clear all saved ${currentProblemLevelName()} mistakes?`
    )
  ) {
    state.mistakeBank = [];
    saveProgress();
    updateMistakeCounts();
    renderMistakeList();
  }
}
