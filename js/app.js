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
const pauseBtn = $('pauseBtn');
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
const streakValue = $('streakValue');
const bestStreakValue = $('bestStreakValue');
const correctValue = $('correctValue');
const answeredValue = $('answeredValue');
const accuracyValue = $('accuracyValue');
const playCard = $('playCard');
const modeBadge = $('modeBadge');
const questionSubtopic = $('questionSubtopic');
const methodHint = $('methodHint');
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
    <button type="button" data-tool="variable" data-insert="x" aria-label="Insert x">x</button>
    <button type="button" data-tool="power" data-insert="²" aria-label="Insert squared">²</button>
    <button type="button" data-tool="power" data-insert="³" aria-label="Insert cubed">³</button>
    <button type="button" data-tool="integer-only" data-insert="⁴" aria-label="Insert power four">⁴</button>
    <button type="button" data-tool="integer-only" data-insert="×" aria-label="Insert multiplication sign">×</button>
    <small>Use the power buttons, or type powers with <strong>^</strong>.</small>
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
  if (!question || !['algebra', 'integers'].includes(state.topic)) return false;
  const accepted = Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [];
  const expected = [question.answer, question.displayAnswer, ...accepted].join(' ');
  return /[a-z0-9](?:\^-?\d+|[⁰¹²³⁴⁵⁶⁷⁸⁹])/.test(expected);
}

function updateAlgebraInputTools() {
  const tools = ensureAlgebraInputTools();
  const visible = state.running && !state.locked && !answerInput.disabled && questionNeedsPowerInput(state.current);
  const integerMode = state.topic === 'integers';
  tools.querySelectorAll('[data-tool="variable"]').forEach(button => { button.style.display = integerMode ? 'none' : ''; });
  tools.querySelectorAll('[data-tool="integer-only"]').forEach(button => { button.style.display = integerMode ? '' : 'none'; });
  const note = tools.querySelector('small');
  if (note) {
    note.innerHTML = integerMode
      ? 'Use ², ³ or ⁴, or type powers with <strong>^</strong>. Use × or * between prime factors.'
      : 'Use the ² or ³ button, or type <strong>x^2</strong> or <strong>x^3</strong>.';
  }
  tools.classList.toggle('visible', visible);
  tools.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

const feedback = $('feedback');
const hint = $('hint');
const summaryCard = $('summaryCard');
const summaryTitle = $('summaryTitle');
const summaryScore = $('summaryScore');
const summaryBestStreak = $('summaryBestStreak');
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


const GENERAL_METHOD_HINTS = {
  fractions: {
    fractionParts: 'Identify what the numerator and denominator represent, then use the correct part of the fraction.',
    fractionTypes: 'Compare the numerator and denominator, and remember the denominator cannot be zero.',
    equivalentSimplify: 'Multiply or divide the numerator and denominator by the same number; simplify using their greatest common factor.',
    compareConvert: 'Use a common denominator to compare, or convert between mixed and improper forms first.',
    addFractionsDetailed: 'Find a common denominator → rewrite the fractions → add the numerators → simplify.',
    subtractFractionsDetailed: 'Find a common denominator → rewrite the fractions → subtract the numerators → simplify.',
    multiplyFractionsDetailed: 'Multiply the numerators → multiply the denominators → simplify; cancel common factors first when helpful.',
    divideFractionsDetailed: 'Keep the first fraction → flip the second fraction → multiply → simplify.',
    mixedAddSubtract: 'Work with the whole-number and fraction parts, use a common denominator, then simplify the final answer.',
    mixedMultiplyDivide: 'Convert mixed numbers to improper fractions → multiply or divide → simplify → convert back if needed.',
    fractionPartWhole: 'To find a fraction of a number: divide by the denominator, then multiply by the numerator. To find the whole, work backwards.',
    wordPartWholeRemainingDetailed: 'Identify the whole, the part and what remains → write the fraction relationship → calculate.',
    wordCompareMultiStepDetailed: 'Underline the quantities being compared → solve one step at a time → check the final amount.',
    wordDivisionRelationships: 'Translate the relationship into multiplication or division, then solve for the unknown quantity.',
    wordCombinedReverseDetailed: 'Work backwards from the final information, undoing each operation in reverse order.'
  },
  decimals: {
    decimalPlaceValue: 'Line up the decimal places and use place value: ones, tenths, hundredths, thousandths.',
    compareOrderDecimals: 'Line up decimal points, add trailing zeros if useful, then compare digits from left to right.',
    roundEstimateDecimals: 'Find the rounding digit → look one place to the right → 5 or more round up, otherwise keep it.',
    addSubtractDecimals: 'Line up the decimal points → add zeros if needed → calculate column by column.',
    powersOfTen: 'Move the decimal point: ×10/100/1000 moves right; ÷10/100/1000 moves left.',
    multiplyDecimals: 'Multiply as whole numbers first → count total decimal places → place the decimal point in the product.',
    divideDecimals: 'Make the divisor a whole number by moving both decimals equally → divide normally.',
    mixedDecimalOperations: 'Use the order of operations and keep decimal points aligned for addition or subtraction.',
    fractionsDecimalsPercentages: 'Convert everything to one form first, then compare or calculate.',
    decimalMoney: 'Write money with two decimal places, line up decimal points, then calculate.',
    decimalMeasurementsTime: 'Use the conversion factor first, then multiply or divide in the correct direction.',
    patternsBasicWordProblems: 'Find the pattern or identify the operation needed, then apply it step by step.',
    ratesMultiStepDecimals: 'Find the unit rate or one-step value first, then scale to the required amount.',
    calculatorAnswerFormat: 'Calculate carefully, then round or format the answer exactly as requested.',
    advancedDecimals: 'Break the problem into smaller operations, estimate first, then check the decimal size.'
  },
  percentages: {
    percentageFoundations: 'Remember percent means “out of 100”; use benchmark percentages such as 50%, 25%, 10% and 1%.',
    fractionDecimalPercent: 'Percent ↔ decimal: divide or multiply by 100. Convert fractions by division or an equivalent denominator of 100.',
    percentageOfAmount: 'Convert the percentage to a fraction or decimal → multiply by the amount.',
    whatPercentage: 'Write part ÷ whole → multiply by 100%.',
    findWhole: 'Write percentage × whole = known part, then divide by the percentage as a decimal.',
    increaseDecrease: 'Find the percentage change, then add it for an increase or subtract it for a decrease.',
    percentageChange: 'Find the change → divide by the original amount → multiply by 100%.',
    reversePercentages: 'Write the final amount as a percentage of the original, then divide to find 100%.',
    discountTaxShopping: 'Find the discount or tax first, then subtract or add it to the original price.',
    profitLoss: 'Profit/loss = selling price − cost price; percentage is based on the cost price.',
    successiveChanges: 'Apply each percentage change one after another; do not simply add the percentages.',
    interestGrowth: 'Find the growth for one period, then apply it to the new amount for each following period.',
    percentageApplications: 'Identify the original amount, percentage and final amount → choose the missing relationship → solve.',
    ratiosRatesData: 'Convert the data to a common form, then use part ÷ whole × 100% where needed.',
    estimationEquations: 'Estimate first, then form the percentage equation and solve for the unknown.'
  },
  ratios: {
    understandingRatios: 'Identify the two quantities in the stated order and compare them using the same units.',
    writingRatios: 'Write the quantities in the order asked, using a colon, then simplify if required.',
    simplifyingWholeRatios: 'Find the greatest common factor and divide every part of the ratio by it.',
    simplifyingFractionRatios: 'Clear decimals or fractions first, then divide all parts by their common factor.',
    differentUnits: 'Convert both quantities to the same unit before writing or simplifying the ratio.',
    equivalentRatios: 'Multiply or divide every part of the ratio by the same number.',
    comparingRatios: 'Make one part equal, or convert each ratio to a unit rate, then compare.',
    ratioAndWhole: 'Add the ratio parts → find the value of one part → scale to the required amount.',
    sharingRatio: 'Add the ratio parts → divide the total by that sum → multiply by each ratio part.',
    ratioConversionsRecipes: 'Find the scale factor from the original quantity to the new quantity, then multiply every part by it.',
    scalesCombinedRatios: 'Use the scale factor or match the shared quantity before combining ratios.',
    changingRatios: 'Write the original amounts from the ratio, apply the change, then form the new ratio and simplify.',
    totalsDifferences: 'Use the ratio parts with the given total or difference to find one part, then find each quantity.',
    ratioContexts: 'Identify what each ratio part represents, find one part, then answer the question in context.',
    geometryMultiStep: 'Translate the geometry information into ratio parts, solve one part first, then complete the remaining steps.'
  },
  algebra: {
    algebraLanguage: 'Identify the variable, coefficient, constant and operation shown in the expression.',
    writingExpressions: 'Translate the words in order: choose the variable → apply multiplication/division → then addition/subtraction.',
    contextExpressions: 'Let the unknown be a variable, then turn each relationship in the story into an algebraic expression.',
    substitution: 'Replace each variable with its value → use brackets for negatives → calculate using order of operations.',
    collectingTerms: 'Group like terms with the same variable and power → add or subtract their coefficients.',
    multiplyDivideTerms: 'Multiply or divide the number coefficients and then combine the variable factors.',
    indexLaws: 'For the same base: multiply → add powers; divide → subtract powers; power of a power → multiply powers.',
    singleBrackets: 'Multiply the term outside the bracket by every term inside the bracket.',
    doubleBrackets: 'Multiply every term in the first bracket by every term in the second → collect like terms.',
    factorising: 'Find the greatest common factor of all terms → place it outside brackets → divide each term by it.',
    oneStepEquations: 'Undo the single operation using the inverse operation on both sides.',
    multiStepEquations: 'Simplify if needed → undo addition/subtraction → undo multiplication/division → check.',
    bothSidesEquations: 'Move variable terms to one side and constants to the other → simplify → solve.',
    inequalities: 'Solve like an equation, but reverse the inequality sign if multiplying or dividing by a negative number.',
    formulaeSequences: 'For formulae, substitute known values and solve. For sequences, find the term-to-term rule first.'
  },
  whole_numbers: {
    wholeFoundations: 'Read the number carefully and use counting, odd/even or whole-number facts.',
    placeValue: 'Identify each digit by its place: ones, tens, hundreds, thousands and beyond.',
    numberRepresentation: 'Break the number into place values, or combine the place-value parts to rebuild it.',
    compareOrderLines: 'Compare digits from the highest place value first, or use their positions on a number line.',
    roundingEstimation: 'Find the rounding place → look one digit to the right → round up for 5–9.',
    addition: 'Line up place values → add from right to left → regroup when needed.',
    subtraction: 'Line up place values → subtract from right to left → exchange when needed.',
    multiplication: 'Use place value or long multiplication: multiply by each digit, shift the second row, then add.',
    divisionRemainders: 'Use short/long division: divide → multiply → subtract → bring down; interpret any remainder.',
    mentalStrategies: 'Look for friendly numbers: partition, compensate, double/halve, or use known facts.',
    mixedOperations: 'Use brackets first, then multiplication/division, then addition/subtraction.',
    factorsMultiples: 'Factors divide exactly; multiples come from repeated multiplication. Use divisibility rules to check quickly.',
    patternsApplications: 'Find the rule or relationship first, then apply it consistently to the missing value or context.'
  },
  integers: {
    negativeFoundations: 'Use the sign and its distance from zero: negative values are below or left of zero.',
    integerNumberLine: 'Right means increase; left means decrease. Count the signed steps from the starting integer.',
    compareAbsolute: 'On a number line, the number farther right is greater; absolute value is distance from zero.',
    integerAddition: 'Same signs: add and keep the sign. Different signs: subtract absolute values and keep the sign of the larger absolute value.',
    integerSubtraction: 'Change subtraction to adding the opposite, then use the integer addition rule.',
    integerMultiplyDivide: 'Same signs give a positive answer; different signs give a negative answer.',
    integerMixed: 'Use order of operations and apply the sign rule at every step.',
    primeComposite: 'A prime has exactly two positive factors: 1 and itself. A composite has more than two.',
    primeFactorisation: 'Split the number into factors repeatedly until every factor is prime.',
    hcfLcm: 'HCF uses common prime factors with the smallest powers; LCM uses all required prime factors with the largest powers.',
    squaresCubesPowers: 'The exponent tells how many times the base is multiplied by itself.',
    roots: 'A root reverses a power: square root undoes squaring; cube root undoes cubing.',
    negativePowers: 'Apply the exponent before an outside negative sign; brackets make the negative part of the base.',
    integerCoordinates: 'Read x first, then y; signs tell left/right and down/up.',
    integerApplications: 'Translate each real-life change into a signed operation, then calculate in order.'
  },
  angles: {
    angleFoundations: 'Identify the vertex and arms, then think about the amount of turn measured in degrees.',
    angleTypes: 'Compare the angle with 90°, 180° and 360° to classify it.',
    turnsRotation: 'Quarter turn = 90°, half turn = 180°, three-quarter turn = 270°, full turn = 360°.',
    measureEstimate: 'Estimate first, then choose the correct degree scale and check whether the angle size is reasonable.',
    complementary: 'Complementary angles add to 90° → subtract the known angle from 90°.',
    straightLine: 'Angles on a straight line add to 180° → subtract the known angle(s) from 180°.',
    aroundPoint: 'Angles around a point add to 360° → subtract the known angle(s) from 360°.',
    verticalOpposite: 'Vertically opposite angles are equal; adjacent angles on a straight line add to 180°.',
    triangleAngles: 'Angles in a triangle add to 180° → subtract the known angles.',
    specialTriangles: 'Use the triangle type: equilateral angles are 60°; isosceles base angles are equal; right triangle contains 90°.',
    quadrilateralAngles: 'Interior angles of a quadrilateral add to 360° → use shape properties and subtract known angles.',
    parallelLines: 'Corresponding and alternate angles are equal; co-interior angles add to 180°.',
    clockReasoning: 'Each hour mark is 30°. Count the hour gaps, then choose the smaller or reflex angle as asked.'
  },
  linear_equation_word_problems: {
    chooseUnknown: 'Read what the question asks → choose one unknown quantity → write “Let x = …”.',
    contextExpressions: 'Let one quantity be x, then express every related quantity using x.',
    findEquality: 'Find the sentence that says two totals or quantities are equal; that becomes the equation.',
    writeEquation: 'Choose x → write the related expressions → connect the two equal quantities with =.',
    simpleNumberProblems: 'Translate the words into an equation → undo operations in reverse order → solve.',
    numberRelationships: 'Let the simpler number be x → express the other number from the relationship → use the total/difference.',
    consecutiveIntegers: 'Use x, x+1, x+2 for consecutive integers; use steps of 2 for consecutive even or odd integers.',
    ageProblems: 'Let x be a present age → adjust every person by the same number of years for past/future → form the equation.',
    moneyShopping: 'Write total cost = fixed cost + (number × unit price), then solve for the unknown.',
    perimeterGeometry: 'Express the unknown side(s) with x → write the perimeter formula → solve.',
    ratioSharing: 'Represent ratio parts as multiples of x, add them to the total, then solve for x.',
    distanceSpeedTime: 'Use distance = speed × time; express the unknown part with x and form one equation.',
    percentageEquations: 'Convert the percentage to a decimal or fraction, then write percentage × original = known amount.',
    averageTotal: 'Use total = mean × number of values; write the missing value as x.',
    multiStepWordProblems: 'Choose x → express related quantities → find the equality → write and solve the equation → check the answer in context.'
  },
  measurement_geometry: {
    lengthMetric: 'Use metric place relationships and convert everything to the same unit before comparing or calculating.',
    massCapacity: 'Convert to the same unit first: 1000 g = 1 kg and 1000 mL = 1 L.',
    mixedUnits: 'Convert mixed measurements to one unit, calculate, then convert back if the question asks.',
    perimeterBasics: 'Perimeter is the distance around a shape → add all outside side lengths.',
    missingPerimeterSides: 'Write the total perimeter → subtract the known sides → use equal-side properties if needed.',
    rectangleSquareArea: 'Rectangle area = length × width; square area = side × side.',
    triangleArea: 'Triangle area = base × perpendicular height ÷ 2.',
    parallelogramTrapezium: 'Parallelogram area = base × perpendicular height; trapezium area = (parallel sides added) × height ÷ 2.',
    compositeArea: 'Split the shape into simple shapes or subtract a missing part → find each area → combine.',
    areaApplications: 'Find the required area first, then use coverage or cost per square unit.',
    volumePrisms: 'Volume of a rectangular prism = length × width × height; keep all dimensions in the same unit.',
    missingVolumeDimensions: 'Use volume = length × width × height → divide by the known dimensions to find the missing one.',
    surfaceArea: 'Find the area of each exposed face, then add all face areas.',
    measurementApplications: 'Decide whether the problem needs length, area or volume → convert units → apply the correct formula.',
    multiStepMeasurement: 'Find any missing length first → convert units → apply the geometry formula → complete the final context step.'
  },
  statistics: {
    readingTables: 'Read the correct row and column first, then compare, add or subtract only the needed values.',
    frequencyTables: 'Frequency tells how many times each value occurs; use value × frequency for totals.',
    rawData: 'Sort or tally the raw values first, then count each value carefully.',
    mean: 'Add all the values → divide by the number of values.',
    missingMean: 'Find the required total using mean × number of values → subtract the known values.',
    median: 'Put the values in order → take the middle value, or average the two middle values.',
    mode: 'Count how often each value appears → the most frequent value is the mode.',
    range: 'Range = largest value − smallest value.',
    mixedStatistics: 'Sort the data first, then calculate each requested measure using its own rule.',
    compareDataSets: 'Compare the centres (mean/median) and the spread (range); use both pieces of information.',
    changedData: 'Use totals to track how adding, removing or correcting a value changes the mean and other statistics.',
    multiStepStatistics: 'Convert means to totals first, follow each data change, then recalculate the required statistic.'
  },
  time_timetables: {
    timeUnits: 'Use 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day and 7 days = 1 week.',
    readingTime: 'Read the hour and minutes carefully; “past” counts after the hour and “to” counts to the next hour.',
    amPm: 'Use the context: am is midnight to before noon; pm is noon to before midnight.',
    hour24: 'For pm times after 12 noon, add 12 to the hour; for 24-hour times above 12, subtract 12 and use pm.',
    convertingTime: 'Convert to one unit first using 60 minutes per hour and 60 seconds per minute.',
    duration: 'Count from the start time to the finish time, often by jumping to the next full hour first.',
    finishTime: 'Start at the given time and add the duration in hours and minutes.',
    startTime: 'Work backwards from the finish time by subtracting the duration.',
    crossingMidnight: 'Count to midnight first, then continue from 00:00 or 12:00 am.',
    dates: 'Use the correct number of days in each month and move forward or backward one day at a time across month boundaries.',
    calendarReasoning: 'Use groups of 7 days; complete weeks keep the same weekday, then use the remainder.',
    readingTimetables: 'Find the correct service row, then compare departure and arrival times carefully.',
    journeyWaiting: 'Separate travel time, walking/transfer time and waiting time, then combine only the times asked for.',
    realLifeTime: 'Create a simple timeline: start → activities/breaks → finish, and include or exclude breaks as asked.',
    multiStepTime: 'Work one stage at a time on a timeline; for deadlines, work backwards from the required arrival time.'
  }
};

function getGeneralMethodHint(question) {
  if (!question) return 'Read the question → identify what is known → choose the correct rule → calculate → check.';
  const topicHints = GENERAL_METHOD_HINTS[state.topic] || {};
  return topicHints[question.group]
    || question.hint
    || 'Read the question → identify what is known → choose the correct rule → calculate → check.';
}


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
  timerValue.textContent = state.reviewMode ? 'Review' : formatTime(state.remaining);
  scoreValue.textContent = state.score;
  streakValue.textContent = state.currentStreak;
  bestStreakValue.textContent = state.bestStreak;
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
  const configuredDefaults = Array.isArray(config.defaultSelectedGroups)
    ? config.defaultSelectedGroups
    : config.groups.map(group => group.id);
  const validGroupIds = new Set(config.groups.map(group => group.id));
  state.selectedGroups = configuredDefaults.filter(groupId => validGroupIds.has(groupId));
  renderLevels();
  renderGroupPicker();
  renderKnowledgeMap();
  teacherNote.innerHTML = `<strong>Teacher note:</strong> ${config.teacherNote}`;
  updateAlgebraInputTools();
  updateSelectionUI();
  updateDashboard();
}

function showQuestion(reuseCurrent = false) {
  if (!state.running || state.paused) return;

  state.locked = false;

  if (state.reviewMode) {
    if (!reuseCurrent) {
      const item = state.reviewQueue[state.reviewIndex];
      if (!item) {
        finishReview();
        return;
      }
      state.current = {
        ...item.question,
        _reviewItem: item
      };
    }

    if (!state.current) return;
    modeBadge.textContent = 'Mistake Review';
    questionSubtopic.textContent = state.current.subtopic || state.current.group || '';
  } else {
    if (!reuseCurrent) {
      const question = generateQuestion();
      state.current = question;
      rememberQuestion(question);
    }

    if (!state.current) return;
    const group = currentConfig().groups.find(item => item.id === state.current.group);
    modeBadge.textContent = group ? `Practice ${group.practiceNumber}: ${group.label}` : state.current.group;
    questionSubtopic.textContent = state.current.subtopic || '';
  }

  methodHint.textContent = `Hint: ${getGeneralMethodHint(state.current)}`;
  questionText.innerHTML = state.current.text;
  answerInput.value = '';
  answerInput.disabled = false;
  submitBtn.disabled = false;
  pauseBtn.disabled = state.reviewMode;
  feedback.textContent = '';
  feedback.className = 'feedback';
  hint.textContent = state.reviewMode
    ? 'Try the saved question again. One correct answer removes it from Saved Mistakes.'
    : '';
  if (!reuseCurrent) state.questionStartedAt = performance.now();
  updateAlgebraInputTools();
  answerInput.focus();
}

function startPractice() {
  if (getSelectedReadyEntries().length === 0) return;

  state.running = true;
  state.paused = false;
  state.pauseSnapshot = null;
  state.reviewMode = false;
  state.reviewQueue = [];
  state.reviewIndex = 0;
  state.locked = false;
  state.duration = Number(timeSelect.value);
  state.remaining = state.duration;
  state.score = 0;
  state.currentStreak = 0;
  state.bestStreak = 0;
  state.questionStartedAt = 0;
  state.correct = 0;
  state.answered = 0;
  state.current = null;
  state.recentKeys = [];

  summaryCard.classList.add('hidden');
  reviewCard.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  pauseBtn.textContent = 'Pause';
  pauseBtn.disabled = false;
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
    if (!state.running || state.paused || state.reviewMode) return;
    state.remaining -= 1;
    updateDashboard();
    if (state.remaining <= 0) finishPractice();
  }, 1000);
}

function markReviewCorrect(item) {
  if (!item) return;
  const index = state.mistakeBank.findIndex(existing => existing.key === item.key);
  if (index < 0) return;

  // Save immediately. This keeps the mistake removed even if the student
  // chooses Finish Early before the rest of the review queue is completed.
  state.mistakeBank.splice(index, 1);
  saveProgress();
  updateDashboard();
}

function markReviewWrong(item, userAnswer) {
  if (!item) return;
  const index = state.mistakeBank.findIndex(existing => existing.key === item.key);
  if (index >= 0) {
    state.mistakeBank[index].lastAnswer = String(userAnswer);
    state.mistakeBank[index].wrongCount = (state.mistakeBank[index].wrongCount || 1) + 1;
    state.mistakeBank[index].updated = Date.now();
  }
  saveProgress();
  updateDashboard();
}

function submitAnswer() {
  if (!state.running || state.paused || state.locked || !state.current) return;
  const raw = answerInput.value.trim();
  if (!raw) {
    feedback.textContent = 'Enter an answer first.';
    feedback.className = 'feedback incorrect';
    return;
  }

  state.locked = true;
  pauseBtn.disabled = true;
  state.answered += 1;
  const correct = answersMatch(raw, state.current);

  if (correct) {
    state.correct += 1;
    state.currentStreak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak);

    const basePoints = 10;
    const answerTimeMs = state.questionStartedAt ? performance.now() - state.questionStartedAt : Infinity;
    const speedBonus = answerTimeMs < 5000 ? 3 : 0;
    const streakBonus = state.currentStreak >= 3 ? 3 : 0;
    const pointsEarned = basePoints + speedBonus + streakBonus;

    state.score += pointsEarned;
    state.totalStars += 1;

    const bonuses = [];
    if (speedBonus) bonuses.push('Speed +3');
    if (streakBonus) bonuses.push(`Streak ${state.currentStreak} +3`);
    feedback.textContent = state.reviewMode
      ? 'Correct review — removed from Saved Mistakes.'
      : bonuses.length
        ? `Correct! +${basePoints} · ${bonuses.join(' · ')}`
        : `Correct! +${basePoints}`;
    feedback.className = 'feedback correct';

    if (state.reviewMode) markReviewCorrect(state.current._reviewItem);
  } else {
    state.currentStreak = 0;
    feedback.textContent = `Not quite. Correct answer: ${state.current.displayAnswer}`;
    feedback.className = 'feedback incorrect';
    hint.textContent = state.current.hint || '';

    if (state.reviewMode) markReviewWrong(state.current._reviewItem, raw);
    else saveMistake(state.current, raw);
  }

  saveProgress();
  updateDashboard();
  answerInput.disabled = true;
  submitBtn.disabled = true;
  updateAlgebraInputTools();

  setTimeout(() => {
    if (!state.running || state.paused) return;

    if (state.reviewMode) {
      state.reviewIndex += 1;
      if (state.reviewIndex >= state.reviewQueue.length) finishReview();
      else showQuestion();
    } else {
      showQuestion();
    }
  }, correct ? 700 : 1400);
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
    bestStreak: state.bestStreak
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
  if (!state.running || state.reviewMode) return;
  state.running = false;
  state.paused = false;
  state.pauseSnapshot = null;
  clearInterval(state.timerId);
  state.timerId = null;

  pauseBtn.classList.add('hidden');
  pauseBtn.textContent = 'Pause';
  finishBtn.classList.add('hidden');
  topicSelect.disabled = false;
  levelSelect.disabled = false;
  timeSelect.disabled = false;
  groupCheckboxes.querySelectorAll('input').forEach(input => { input.disabled = false; });
  answerInput.disabled = true;
  submitBtn.disabled = true;
  updateAlgebraInputTools();

  summaryTitle.textContent = 'Practice Complete';
  summaryScore.textContent = state.score;
  summaryBestStreak.textContent = state.bestStreak;
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

function setSetupDisabled(disabled) {
  topicSelect.disabled = disabled;
  levelSelect.disabled = disabled;
  timeSelect.disabled = disabled;
  groupCheckboxes.querySelectorAll('input').forEach(input => { input.disabled = disabled; });
  startBtn.disabled = disabled || getSelectedReadyEntries().length === 0;
  testBtn.disabled = disabled || getSelectedReadyEntries().length === 0;
  printBtn.disabled = disabled || getSelectedReadyEntries().length === 0;
}

function startReview() {
  if (state.running || state.mistakeBank.length === 0) return;

  clearInterval(state.timerId);
  state.timerId = null;
  state.reviewMode = true;
  state.reviewSource = 'saved';
  state.reviewQueue = state.mistakeBank.map(item => JSON.parse(JSON.stringify(item)));
  state.reviewIndex = 0;
  state.running = true;
  state.paused = false;
  state.pauseSnapshot = null;
  state.locked = false;
  state.score = 0;
  state.currentStreak = 0;
  state.bestStreak = 0;
  state.correct = 0;
  state.answered = 0;
  state.current = null;

  summaryCard.classList.add('hidden');
  reviewCard.classList.add('hidden');
  pauseBtn.classList.add('hidden');
  finishBtn.classList.remove('hidden');
  finishBtn.textContent = 'Finish Early';
  setSetupDisabled(true);

  updateDashboard();
  showQuestion();
  playCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function finishReview() {
  if (!state.running || !state.reviewMode) return;

  state.running = false;
  state.reviewMode = false;
  state.paused = false;
  state.pauseSnapshot = null;
  state.locked = false;
  clearInterval(state.timerId);
  state.timerId = null;

  pauseBtn.classList.add('hidden');
  pauseBtn.textContent = 'Pause';
  finishBtn.classList.add('hidden');
  answerInput.disabled = true;
  submitBtn.disabled = true;
  updateAlgebraInputTools();
  setSetupDisabled(false);

  summaryTitle.textContent = 'Mistake Review Complete';
  summaryScore.textContent = state.score;
  summaryBestStreak.textContent = state.bestStreak;
  summaryCorrect.textContent = state.correct;
  summaryAnswered.textContent = state.answered;
  summaryAccuracy.textContent = state.answered ? `${Math.round(state.correct / state.answered * 100)}%` : '—';
  summaryCard.classList.remove('hidden');

  saveProgress();
  updateSelectionUI();
  updateDashboard();
  renderReview(false);
}

function togglePause() {
  if (!state.running || state.reviewMode || state.locked) return;

  if (!state.paused) {
    state.pauseSnapshot = {
      answerValue: answerInput.value,
      questionStartedAt: state.questionStartedAt,
      pauseStartedAt: performance.now()
    };
    state.paused = true;
    pauseBtn.textContent = 'Resume';
    answerInput.disabled = true;
    submitBtn.disabled = true;
    updateAlgebraInputTools();
    methodHint.textContent = '';
    questionText.textContent = 'Paused';
    modeBadge.textContent = 'Take a break';
    feedback.textContent = '';
    hint.textContent = 'Press Resume to continue the same question.';
    return;
  }

  const snapshot = state.pauseSnapshot || {};
  const resumedAt = performance.now();
  state.paused = false;

  // Re-render the exact same question. Do not generate a new one.
  showQuestion(true);
  answerInput.value = snapshot.answerValue || '';

  if (Number.isFinite(snapshot.questionStartedAt)) {
    const pausedFor = Number.isFinite(snapshot.pauseStartedAt)
      ? resumedAt - snapshot.pauseStartedAt
      : 0;
    state.questionStartedAt = snapshot.questionStartedAt + pausedFor;
  }

  state.pauseSnapshot = null;
  pauseBtn.textContent = 'Pause';
  pauseBtn.disabled = false;
  answerInput.focus();
}

function renderReview(scrollIntoView = true) {
  reviewTable.innerHTML = state.mistakeBank.length === 0
    ? '<div class="review-empty">No saved mistakes yet. Great work!</div>'
    : state.mistakeBank.map(item => `
      <div class="review-item">
        <div><strong>${item.question.subtopic || item.question.group}</strong><small>${item.question.text}</small></div>
        <div><small>Last answer: ${item.lastAnswer}</small><strong>Correct answer: ${item.question.displayAnswer}</strong></div>
      </div>`).join('');
  reviewCard.classList.remove('hidden');
  if (scrollIntoView) reviewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
pauseBtn.addEventListener('click', togglePause);
finishBtn.addEventListener('click', () => {
  if (state.reviewMode) finishReview();
  else finishPractice();
});
submitBtn.addEventListener('click', submitAnswer);
answerInput.addEventListener('keydown', event => { if (event.key === 'Enter') submitAnswer(); });
testBtn.addEventListener('click', testQuestionBanks);
printBtn.addEventListener('click', printQuestions);
reviewBtn.addEventListener('click', startReview);
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
