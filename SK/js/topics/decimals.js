'use strict';

TOPIC_CONFIGS.decimals = {
  title: 'Decimals',
  pageTitle: 'Knowledge Practice — Decimals',
  knowledgeMapTitle: 'Decimals Practice Structure',
  intro: 'The 100 decimal knowledge points are organised into 15 connected practice sections. The numbering is continuous and does not skip.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    {
      id: 'decimalPlaceValue', practiceNumber: 1, label: 'Decimal Place Value',
      description: 'Read, write, partition and understand decimals to thousandths.',
      knowledgePoints: [
        { id: 'wholeDecimalParts', number: 1, label: 'Whole and Decimal Parts' },
        { id: 'tenths', number: 2, label: 'Tenths' },
        { id: 'hundredths', number: 3, label: 'Hundredths' },
        { id: 'thousandths', number: 4, label: 'Thousandths' },
        { id: 'readDecimals', number: 5, label: 'Read Decimals' },
        { id: 'writeDecimals', number: 6, label: 'Write Decimals' },
        { id: 'expandedForm', number: 7, label: 'Expanded Form' },
        { id: 'digitValue', number: 8, label: 'Value of a Digit' },
        { id: 'zeroPlaceholder', number: 9, label: 'Zero as a Placeholder' },
        { id: 'equivalentDecimals', number: 10, label: 'Equivalent Decimals' }
      ]
    },
    {
      id: 'compareOrderDecimals', practiceNumber: 2, label: 'Compare and Order Decimals',
      description: 'Locate, compare and order positive and negative decimals.',
      knowledgePoints: [
        { id: 'decimalNumberLine', number: 11, label: 'Decimals on a Number Line' },
        { id: 'compareDecimals', number: 12, label: 'Compare Decimals' },
        { id: 'orderDecimals', number: 13, label: 'Order Decimals' },
        { id: 'decimalBetween', number: 14, label: 'Find a Decimal Between Two Numbers' },
        { id: 'negativeDecimals', number: 15, label: 'Negative Decimals' }
      ]
    },
    {
      id: 'roundEstimateDecimals', practiceNumber: 3, label: 'Rounding and Estimation',
      description: 'Round decimals, estimate calculations and judge whether answers are reasonable.',
      knowledgePoints: [
        { id: 'roundWhole', number: 16, label: 'Round to the Nearest Whole Number' },
        { id: 'round1dp', number: 17, label: 'Round to 1 Decimal Place' },
        { id: 'round2dp', number: 18, label: 'Round to 2 Decimal Places' },
        { id: 'round3dp', number: 19, label: 'Round to 3 Decimal Places' },
        { id: 'estimateDecimalCalculations', number: 20, label: 'Estimate Decimal Calculations' },
        { id: 'reasonableDecimalAnswer', number: 21, label: 'Check Whether an Answer Is Reasonable' }
      ]
    },
    {
      id: 'addSubtractDecimals', practiceNumber: 4, label: 'Add and Subtract Decimals',
      description: 'Align place values, add zeros where helpful and use inverse operations.',
      knowledgePoints: [
        { id: 'addSameDp', number: 22, label: 'Add Decimals with the Same Number of Decimal Places' },
        { id: 'addDifferentDp', number: 23, label: 'Add Decimals with Different Decimal Places' },
        { id: 'subtractSameDp', number: 24, label: 'Subtract Decimals with the Same Number of Decimal Places' },
        { id: 'subtractDifferentDp', number: 25, label: 'Subtract Decimals with Different Decimal Places' },
        { id: 'addZerosBeforeCalculating', number: 26, label: 'Add Zeros Before Calculating' },
        { id: 'missingDecimalAddSubtract', number: 27, label: 'Missing Numbers in Decimal Addition and Subtraction' },
        { id: 'inverseDecimalCheck', number: 28, label: 'Use Inverse Operations to Check Answers' }
      ]
    },
    {
      id: 'powersOfTen', practiceNumber: 5, label: 'Powers of Ten',
      description: 'Multiply and divide by powers of ten and predict how the answer changes.',
      knowledgePoints: [
        { id: 'multiply101001000', number: 29, label: 'Multiply by 10, 100 and 1000' },
        { id: 'divide101001000', number: 30, label: 'Divide by 10, 100 and 1000' },
        { id: 'multiplyDecimalPowers', number: 31, label: 'Multiply by 0.1, 0.01 and 0.001' },
        { id: 'divideDecimalPowers', number: 32, label: 'Divide by 0.1, 0.01 and 0.001' },
        { id: 'predictAnswerSize', number: 33, label: 'Predict the Size of the Answer' }
      ]
    },
    {
      id: 'multiplyDecimals', practiceNumber: 6, label: 'Multiply Decimals',
      description: 'Multiply decimals accurately and place the decimal point using estimation.',
      knowledgePoints: [
        { id: 'decimalTimesWhole', number: 34, label: 'Decimal × Whole Number' },
        { id: 'wholeTimesDecimal', number: 35, label: 'Whole Number × Decimal' },
        { id: 'decimalTimesDecimal', number: 36, label: 'Decimal × Decimal' },
        { id: 'multiplyTenths', number: 37, label: 'Multiplication Involving Tenths' },
        { id: 'multiplyHundredths', number: 38, label: 'Multiplication Involving Hundredths' },
        { id: 'productDecimalPoint', number: 39, label: 'Place the Decimal Point in the Product' },
        { id: 'estimateBeforeMultiplying', number: 40, label: 'Estimate Before Multiplying' }
      ]
    },
    {
      id: 'divideDecimals', practiceNumber: 7, label: 'Divide Decimals',
      description: 'Divide by whole numbers and decimals, including tenths and hundredths.',
      knowledgePoints: [
        { id: 'decimalDivideWhole', number: 41, label: 'Decimal ÷ Whole Number' },
        { id: 'wholeDivideDecimal', number: 42, label: 'Whole Number ÷ Decimal' },
        { id: 'decimalDivideDecimal', number: 43, label: 'Decimal ÷ Decimal' },
        { id: 'divideByTenths', number: 44, label: 'Division by Tenths' },
        { id: 'divideByHundredths', number: 45, label: 'Division by Hundredths' },
        { id: 'addZerosDuringDivision', number: 46, label: 'Add Zeros During Division' },
        { id: 'makeDivisorWhole', number: 47, label: 'Make the Divisor a Whole Number' },
        { id: 'quotientDecimalPoint', number: 48, label: 'Place the Decimal Point in the Quotient' },
        { id: 'estimateBeforeDividing', number: 49, label: 'Estimate Before Dividing' }
      ]
    },
    {
      id: 'mixedDecimalOperations', practiceNumber: 8, label: 'Mixed Decimal Operations',
      description: 'Use all four operations, brackets and the correct order of operations.',
      knowledgePoints: [
        { id: 'mixedAddSubtractDecimals', number: 50, label: 'Mixed Addition and Subtraction' },
        { id: 'mixedMultiplyDivideDecimals', number: 51, label: 'Mixed Multiplication and Division' },
        { id: 'fourOperationsDecimals', number: 52, label: 'Four Operations with Decimals' },
        { id: 'decimalOrderOperations', number: 53, label: 'Order of Operations with Decimals' },
        { id: 'decimalBrackets', number: 54, label: 'Brackets with Decimal Calculations' },
        { id: 'missingDecimalOperations', number: 55, label: 'Missing Operations and Missing Numbers' }
      ]
    },
    {
      id: 'fractionsDecimalsPercentages', practiceNumber: 9, label: 'Fractions, Decimals and Percentages',
      description: 'Convert, compare and order fractions, decimals and percentages.',
      knowledgePoints: [
        { id: 'decimalToFraction', number: 56, label: 'Decimal to Fraction' },
        { id: 'simplifyDecimalFraction', number: 57, label: 'Simplify a Fraction Converted from a Decimal' },
        { id: 'fractionToDecimalPowersTen', number: 58, label: 'Fraction to Decimal with Denominator 10, 100 or 1000' },
        { id: 'fractionToDecimalDivision', number: 59, label: 'Fraction to Decimal Using Division' },
        { id: 'decimalToPercentage', number: 60, label: 'Decimal to Percentage' },
        { id: 'percentageToDecimal', number: 61, label: 'Percentage to Decimal' },
        { id: 'compareFdp', number: 62, label: 'Compare Fractions, Decimals and Percentages' },
        { id: 'orderFdp', number: 63, label: 'Order Fractions, Decimals and Percentages' }
      ]
    },
    {
      id: 'decimalMoney', practiceNumber: 10, label: 'Decimal Money',
      description: 'Write, calculate and solve problems involving dollars and cents.',
      knowledgePoints: [
        { id: 'moneyDecimalFormat', number: 64, label: 'Money Written as Decimals' },
        { id: 'addSubtractMoney', number: 65, label: 'Add and Subtract Money' },
        { id: 'multiplyDivideMoney', number: 66, label: 'Multiply and Divide Money' },
        { id: 'calculateChange', number: 67, label: 'Calculate Change' }
      ]
    },
    {
      id: 'decimalMeasurementsTime', practiceNumber: 11, label: 'Decimal Measurements and Time',
      description: 'Convert decimal length, mass, capacity, mixed units and decimal hours.',
      knowledgePoints: [
        { id: 'decimalLengthConversions', number: 68, label: 'Decimal Length Conversions' },
        { id: 'decimalMassConversions', number: 69, label: 'Decimal Mass Conversions' },
        { id: 'decimalCapacityConversions', number: 70, label: 'Decimal Capacity Conversions' },
        { id: 'mixedToDecimalUnits', number: 71, label: 'Mixed Units to Decimal Units' },
        { id: 'decimalToMixedUnits', number: 72, label: 'Decimal Units to Mixed Units' },
        { id: 'decimalToSmallerUnit', number: 73, label: 'Convert a Decimal Measurement to a Smaller Unit' },
        { id: 'decimalTimeHours', number: 74, label: 'Decimal Time and Hours' }
      ]
    },
    {
      id: 'patternsBasicWordProblems', practiceNumber: 12, label: 'Patterns and Basic Word Problems',
      description: 'Continue decimal patterns and solve one-step decimal application problems.',
      knowledgePoints: [
        { id: 'decimalSequences', number: 75, label: 'Decimal Sequences' },
        { id: 'missingDecimalSequenceTerm', number: 76, label: 'Find the Missing Term in a Decimal Sequence' },
        { id: 'decimalAddSubtractWords', number: 77, label: 'Add and Subtract Decimal Word Problems' },
        { id: 'decimalMultiplyWords', number: 78, label: 'Multiply Decimal Word Problems' },
        { id: 'decimalDivideWords', number: 79, label: 'Divide Decimal Word Problems' },
        { id: 'moneyWordProblems', number: 80, label: 'Money Word Problems' },
        { id: 'measurementWordProblems', number: 81, label: 'Measurement Word Problems' }
      ]
    },
    {
      id: 'ratesMultiStepDecimals', practiceNumber: 13, label: 'Rates and Multi-Step Problems',
      description: 'Solve unit-price, rate, reverse, multi-step and information-selection problems.',
      knowledgePoints: [
        { id: 'decimalUnitPrice', number: 82, label: 'Unit Price Problems' },
        { id: 'decimalRateProblems', number: 83, label: 'Decimal Rate Problems' },
        { id: 'totalFromDecimalPart', number: 84, label: 'Find the Total from a Decimal Part' },
        { id: 'decimalPartOfAmount', number: 85, label: 'Find a Decimal Part of an Amount' },
        { id: 'reverseDecimalProblems', number: 86, label: 'Reverse Decimal Problems' },
        { id: 'multiStepDecimalProblems', number: 87, label: 'Multi-Step Decimal Problems' },
        { id: 'chooseDecimalOperation', number: 88, label: 'Choose the Correct Operation' },
        { id: 'unnecessaryDecimalInformation', number: 89, label: 'Identify Unnecessary Information' },
        { id: 'roundFinalDecimalAnswer', number: 90, label: 'Round the Final Answer as Required' }
      ]
    },
    {
      id: 'calculatorAnswerFormat', practiceNumber: 14, label: 'Calculator and Answer Format',
      description: 'Enter calculations, interpret long answers and use correct decimal formatting.',
      knowledgePoints: [
        { id: 'enterDecimalCalculator', number: 91, label: 'Enter Decimal Calculations Correctly' },
        { id: 'interpretLongCalculatorAnswer', number: 92, label: 'Interpret a Long Calculator Answer' },
        { id: 'roundCalculatorAnswer', number: 93, label: 'Round a Calculator Answer to a Required Decimal Place' },
        { id: 'useTrailingZeros', number: 94, label: 'Use Trailing Zeros When Required' },
        { id: 'correctDecimalUnits', number: 95, label: 'Write Money and Measurements with Correct Units' }
      ]
    },
    {
      id: 'advancedDecimals', practiceNumber: 15, label: 'Advanced Decimals',
      description: 'Recognise, write, convert and compare terminating and recurring decimals.',
      knowledgePoints: [
        { id: 'terminatingDecimals', number: 96, label: 'Terminating Decimals' },
        { id: 'recurringDecimals', number: 97, label: 'Recurring Decimals' },
        { id: 'recurringNotation', number: 98, label: 'Recurring Decimal Notation' },
        { id: 'recurringToFraction', number: 99, label: 'Convert Simple Recurring Decimals to Fractions' },
        { id: 'compareTerminatingRecurring', number: 100, label: 'Compare Terminating and Recurring Decimals' }
      ]
    }
  ],
  teacherNote: 'All 15 decimal practice sections are connected, covering knowledge points 1–100.'
};

const DECIMAL_GROUP = {
  wholeDecimalParts: 'decimalPlaceValue', tenths: 'decimalPlaceValue', hundredths: 'decimalPlaceValue', thousandths: 'decimalPlaceValue', readDecimals: 'decimalPlaceValue', writeDecimals: 'decimalPlaceValue', expandedForm: 'decimalPlaceValue', digitValue: 'decimalPlaceValue', zeroPlaceholder: 'decimalPlaceValue', equivalentDecimals: 'decimalPlaceValue',
  decimalNumberLine: 'compareOrderDecimals', compareDecimals: 'compareOrderDecimals', orderDecimals: 'compareOrderDecimals', decimalBetween: 'compareOrderDecimals', negativeDecimals: 'compareOrderDecimals',
  roundWhole: 'roundEstimateDecimals', round1dp: 'roundEstimateDecimals', round2dp: 'roundEstimateDecimals', round3dp: 'roundEstimateDecimals', estimateDecimalCalculations: 'roundEstimateDecimals', reasonableDecimalAnswer: 'roundEstimateDecimals',
  addSameDp: 'addSubtractDecimals', addDifferentDp: 'addSubtractDecimals', subtractSameDp: 'addSubtractDecimals', subtractDifferentDp: 'addSubtractDecimals', addZerosBeforeCalculating: 'addSubtractDecimals', missingDecimalAddSubtract: 'addSubtractDecimals', inverseDecimalCheck: 'addSubtractDecimals',
  multiply101001000: 'powersOfTen', divide101001000: 'powersOfTen', multiplyDecimalPowers: 'powersOfTen', divideDecimalPowers: 'powersOfTen', predictAnswerSize: 'powersOfTen',
  decimalTimesWhole: 'multiplyDecimals', wholeTimesDecimal: 'multiplyDecimals', decimalTimesDecimal: 'multiplyDecimals', multiplyTenths: 'multiplyDecimals', multiplyHundredths: 'multiplyDecimals', productDecimalPoint: 'multiplyDecimals', estimateBeforeMultiplying: 'multiplyDecimals',
  decimalDivideWhole: 'divideDecimals', wholeDivideDecimal: 'divideDecimals', decimalDivideDecimal: 'divideDecimals', divideByTenths: 'divideDecimals', divideByHundredths: 'divideDecimals', addZerosDuringDivision: 'divideDecimals', makeDivisorWhole: 'divideDecimals', quotientDecimalPoint: 'divideDecimals', estimateBeforeDividing: 'divideDecimals',
  mixedAddSubtractDecimals: 'mixedDecimalOperations', mixedMultiplyDivideDecimals: 'mixedDecimalOperations', fourOperationsDecimals: 'mixedDecimalOperations', decimalOrderOperations: 'mixedDecimalOperations', decimalBrackets: 'mixedDecimalOperations', missingDecimalOperations: 'mixedDecimalOperations',
  decimalToFraction: 'fractionsDecimalsPercentages', simplifyDecimalFraction: 'fractionsDecimalsPercentages', fractionToDecimalPowersTen: 'fractionsDecimalsPercentages', fractionToDecimalDivision: 'fractionsDecimalsPercentages', decimalToPercentage: 'fractionsDecimalsPercentages', percentageToDecimal: 'fractionsDecimalsPercentages', compareFdp: 'fractionsDecimalsPercentages', orderFdp: 'fractionsDecimalsPercentages',
  moneyDecimalFormat: 'decimalMoney', addSubtractMoney: 'decimalMoney', multiplyDivideMoney: 'decimalMoney', calculateChange: 'decimalMoney',
  decimalLengthConversions: 'decimalMeasurementsTime', decimalMassConversions: 'decimalMeasurementsTime', decimalCapacityConversions: 'decimalMeasurementsTime', mixedToDecimalUnits: 'decimalMeasurementsTime', decimalToMixedUnits: 'decimalMeasurementsTime', decimalToSmallerUnit: 'decimalMeasurementsTime', decimalTimeHours: 'decimalMeasurementsTime',
  decimalSequences: 'patternsBasicWordProblems', missingDecimalSequenceTerm: 'patternsBasicWordProblems', decimalAddSubtractWords: 'patternsBasicWordProblems', decimalMultiplyWords: 'patternsBasicWordProblems', decimalDivideWords: 'patternsBasicWordProblems', moneyWordProblems: 'patternsBasicWordProblems', measurementWordProblems: 'patternsBasicWordProblems',
  decimalUnitPrice: 'ratesMultiStepDecimals', decimalRateProblems: 'ratesMultiStepDecimals', totalFromDecimalPart: 'ratesMultiStepDecimals', decimalPartOfAmount: 'ratesMultiStepDecimals', reverseDecimalProblems: 'ratesMultiStepDecimals', multiStepDecimalProblems: 'ratesMultiStepDecimals', chooseDecimalOperation: 'ratesMultiStepDecimals', unnecessaryDecimalInformation: 'ratesMultiStepDecimals', roundFinalDecimalAnswer: 'ratesMultiStepDecimals',
  enterDecimalCalculator: 'calculatorAnswerFormat', interpretLongCalculatorAnswer: 'calculatorAnswerFormat', roundCalculatorAnswer: 'calculatorAnswerFormat', useTrailingZeros: 'calculatorAnswerFormat', correctDecimalUnits: 'calculatorAnswerFormat',
  terminatingDecimals: 'advancedDecimals', recurringDecimals: 'advancedDecimals', recurringNotation: 'advancedDecimals', recurringToFraction: 'advancedDecimals', compareTerminatingRecurring: 'advancedDecimals'
};

function decimalQuestion(pointId, subtopic, text, answer, options = {}) {
  return {
    group: DECIMAL_GROUP[pointId],
    knowledgePoint: pointId,
    subtopic,
    text: `<span class="decimal-question-content">${text}</span>`,
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: options.answerType ?? 'rational',
    hint: options.hint ?? ''
  };
}

function decimalLevelMax(base, core, challenge) {
  return state.level === 'foundation' ? base : state.level === 'challenge' ? challenge : core;
}

function power10(places) { return 10 ** places; }

function scaledNumber(integer, places) { return integer / power10(places); }

function formatScaled(integer, places, fixed = false) {
  const value = (integer / power10(places)).toFixed(places);
  if (fixed) return value;
  return value.replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
}

function formatNumber(value, maxPlaces = 6) {
  const rounded = Number(Number(value).toFixed(maxPlaces));
  return String(rounded);
}

function money(value) { return `$${Number(value).toFixed(2)}`; }

function recurringHtml(nonRecurring, recurring) {
  return `<span class="recurring-decimal">${nonRecurring}<span style="text-decoration:overline">${recurring}</span></span>`;
}

function compareSymbol(a, b) { return Math.abs(a - b) < 1e-10 ? '=' : a > b ? '>' : '<'; }

function chooseTextQuestion(pointId, subtopic, text, answer, acceptedAnswers = null, hint = '') {
  return decimalQuestion(pointId, subtopic, text, answer, {
    answerType: 'text', displayAnswer: String(answer), acceptedAnswers, hint
  });
}

function oneTwoQuestion(pointId, subtopic, text, correctNumber, hint = '') {
  return decimalQuestion(pointId, subtopic, `${text}<br><small>Type <strong>1</strong> or <strong>2</strong>.</small>`, correctNumber, { hint });
}

/* Practice 1: Decimal Place Value */
function q1WholeDecimalParts() {
  const whole = randInt(1, decimalLevelMax(40, 300, 3000));
  const decimalDigits = randInt(1, 999).toString().padStart(3, '0');
  const shown = `${whole}.${decimalDigits}`;
  if (chance(0.5)) return decimalQuestion('wholeDecimalParts', 'Whole and Decimal Parts', `What is the whole-number part of <strong>${shown}</strong>?`, whole, { hint: 'The whole-number part is to the left of the decimal point.' });
  return decimalQuestion('wholeDecimalParts', 'Whole and Decimal Parts', `How many digits are shown after the decimal point in <strong>${shown}</strong>?`, 3, { hint: 'Count the digits to the right of the decimal point.' });
}
function q2Tenths() {
  const whole = randInt(0, 50), t = randInt(1, 9), h = randInt(0, 9);
  const shown = `${whole}.${t}${h}`;
  return chance(0.5)
    ? decimalQuestion('tenths', 'Tenths', `What digit is in the tenths place in <strong>${shown}</strong>?`, t, { hint: 'The tenths digit is the first digit after the decimal point.' })
    : decimalQuestion('tenths', 'Tenths', `Write <strong>${t} tenths</strong> as a decimal.`, t / 10, { displayAnswer: `0.${t}` });
}
function q3Hundredths() {
  const whole = randInt(0, 50), t = randInt(0, 9), h = randInt(1, 9);
  const shown = `${whole}.${t}${h}`;
  return chance(0.5)
    ? decimalQuestion('hundredths', 'Hundredths', `What digit is in the hundredths place in <strong>${shown}</strong>?`, h, { hint: 'The hundredths digit is the second digit after the decimal point.' })
    : decimalQuestion('hundredths', 'Hundredths', `Write <strong>${h} hundredths</strong> as a decimal.`, h / 100, { displayAnswer: `0.0${h}` });
}
function q4Thousandths() {
  const whole = randInt(0, 20), a = randInt(0, 9), b = randInt(0, 9), c = randInt(1, 9);
  const shown = `${whole}.${a}${b}${c}`;
  return chance(0.5)
    ? decimalQuestion('thousandths', 'Thousandths', `What digit is in the thousandths place in <strong>${shown}</strong>?`, c, { hint: 'The thousandths digit is the third digit after the decimal point.' })
    : decimalQuestion('thousandths', 'Thousandths', `Write <strong>${c} thousandths</strong> as a decimal.`, c / 1000, { displayAnswer: `0.00${c}` });
}
function q5ReadDecimals() {
  const whole = randInt(1, 20), t = randInt(1, 9), h = randInt(0, 9);
  const shown = `${whole}.${t}${h}`;
  const correctFirst = chance(0.5);
  const option1 = correctFirst ? `${whole} point ${t} ${h}` : `${whole} point ${t + '' + h}`;
  const option2 = correctFirst ? `${whole} point ${t + '' + h}` : `${whole} point ${t} ${h}`;
  return oneTwoQuestion('readDecimals', 'Read Decimals', `How should <strong>${shown}</strong> be read digit by digit?<br><strong>1.</strong> ${option1}<br><strong>2.</strong> ${option2}`, correctFirst ? 1 : 2, 'Read each digit separately after the decimal point.');
}
function q6WriteDecimals() {
  const whole = randInt(0, 40), t = randInt(0, 9), h = randInt(0, 9), useHundredths = chance(0.5);
  if (useHundredths) {
    const n = t * 10 + h;
    return decimalQuestion('writeDecimals', 'Write Decimals', `Write <strong>${whole} and ${n} hundredths</strong> as a decimal.`, whole + n / 100, { displayAnswer: `${whole}.${String(n).padStart(2, '0')}` });
  }
  return decimalQuestion('writeDecimals', 'Write Decimals', `Write <strong>${whole} and ${t} tenths</strong> as a decimal.`, whole + t / 10, { displayAnswer: `${whole}.${t}` });
}
function q7ExpandedForm() {
  const whole = randInt(1, 100), t = randInt(1, 9), h = randInt(0, 9), th = randInt(0, 9);
  const value = whole + t / 10 + h / 100 + th / 1000;
  return decimalQuestion('expandedForm', 'Expanded Form', `Write as one decimal:<br><strong>${whole} + ${t / 10} + ${h / 100} + ${th / 1000}</strong>`, value, { displayAnswer: formatNumber(value, 3), hint: 'Add the ones, tenths, hundredths and thousandths.' });
}
function q8DigitValue() {
  const whole = randInt(1, 200), t = randInt(1, 9), h = randInt(1, 9), th = randInt(1, 9);
  const shown = `${whole}.${t}${h}${th}`;
  const options = [{ digit: t, value: t / 10, place: 'tenths' }, { digit: h, value: h / 100, place: 'hundredths' }, { digit: th, value: th / 1000, place: 'thousandths' }];
  const selected = pick(options);
  return decimalQuestion('digitValue', 'Value of a Digit', `In <strong>${shown}</strong>, what is the value of the digit <strong>${selected.digit}</strong> in the ${selected.place} place?`, selected.value, { displayAnswer: formatNumber(selected.value, 3) });
}
function q9ZeroPlaceholder() {
  const d = randInt(1, 9);
  const correct = chance(0.5);
  const number = correct ? `3.0${d}` : `3.${d}0`;
  const statement = `In <strong>${number}</strong>, the digit ${d} is in the hundredths place.`;
  return oneTwoQuestion('zeroPlaceholder', 'Zero as a Placeholder', `${statement}<br><strong>1.</strong> True<br><strong>2.</strong> False`, correct ? 1 : 2, 'Zeros hold place value.');
}
function q10EquivalentDecimals() {
  const base = randInt(1, 99) / 10;
  const shownA = base.toFixed(1);
  const correct = chance(0.65);
  const shownB = correct ? base.toFixed(pick([2, 3])) : (base + pick([0.01, 0.1])).toFixed(2);
  return oneTwoQuestion('equivalentDecimals', 'Equivalent Decimals', `Are <strong>${shownA}</strong> and <strong>${shownB}</strong> equivalent?<br><strong>1.</strong> Yes<br><strong>2.</strong> No`, correct ? 1 : 2, 'Adding zeros at the end of a decimal does not change its value.');
}

/* Practice 2: Compare and Order */
function q11DecimalNumberLine() {
  const whole = randInt(-5, 12), tenths = randInt(1, 9);
  const value = whole + tenths / 10;
  return decimalQuestion('decimalNumberLine', 'Decimals on a Number Line', `A point is ${tenths} tenths to the right of <strong>${whole}</strong> on a number line. What number is it?`, value, { displayAnswer: formatNumber(value, 1) });
}
function q12CompareDecimals() {
  const places = pick([1, 2, 3]);
  let aInt = randInt(1, decimalLevelMax(99, 999, 9999));
  let bInt = randInt(1, decimalLevelMax(99, 999, 9999));
  const a = scaledNumber(aInt, places), b = scaledNumber(bInt, places);
  return chooseTextQuestion('compareDecimals', 'Compare Decimals', `Compare <strong>${formatScaled(aInt, places)}</strong> and <strong>${formatScaled(bInt, places)}</strong>.<br>Type <strong>&gt;</strong>, <strong>&lt;</strong> or <strong>=</strong>.`, compareSymbol(a, b), null, 'Compare digits from left to right using place value.');
}
function q13OrderDecimals() {
  const values = [...new Set([randInt(10, 99), randInt(10, 99), randInt(10, 99), randInt(10, 99)])];
  while (values.length < 4) values.push(randInt(10, 99));
  const nums = values.slice(0, 4).map(n => n / 10);
  const sorted = [...nums].sort((a, b) => a - b);
  const askLargest = chance(0.5);
  return decimalQuestion('orderDecimals', 'Order Decimals', `Which number is ${askLargest ? 'largest' : 'smallest'}?<br><strong>${nums.map(n => n.toFixed(1)).join(', ')}</strong>`, askLargest ? sorted[3] : sorted[0], { displayAnswer: (askLargest ? sorted[3] : sorted[0]).toFixed(1) });
}
function q14DecimalBetween() {
  const base = randInt(1, 90) / 10;
  const low = base, high = base + 0.2;
  const middle = base + 0.1;
  const distractors = [base - 0.1, high + 0.1];
  const options = [middle, ...distractors].sort(() => Math.random() - 0.5);
  const index = options.findIndex(x => Math.abs(x - middle) < 1e-9) + 1;
  return decimalQuestion('decimalBetween', 'Find a Decimal Between Two Numbers', `Which number lies between <strong>${low.toFixed(1)}</strong> and <strong>${high.toFixed(1)}</strong>?<br>${options.map((x, i) => `<strong>${i + 1}.</strong> ${x.toFixed(1)}`).join(' &nbsp; ')}`, index, { hint: 'A number between the endpoints must be greater than the first and less than the second.' });
}
function q15NegativeDecimals() {
  const a = -randInt(1, 99) / 10, b = -randInt(1, 99) / 10;
  return chooseTextQuestion('negativeDecimals', 'Negative Decimals', `Compare <strong>${a.toFixed(1)}</strong> and <strong>${b.toFixed(1)}</strong>.<br>Type <strong>&gt;</strong>, <strong>&lt;</strong> or <strong>=</strong>.`, compareSymbol(a, b), null, 'On a number line, the number farther right is greater.');
}

/* Practice 3: Rounding and Estimation */
function roundingQuestion(pointId, places, label) {
  const extra = places + 1;
  const integer = randInt(1, decimalLevelMax(999, 99999, 999999));
  const value = integer / power10(extra);
  const rounded = Number(value.toFixed(places));
  return decimalQuestion(pointId, label, `Round <strong>${value.toFixed(extra)}</strong> to ${places === 0 ? 'the nearest whole number' : `${places} decimal place${places === 1 ? '' : 's'}`}.`, rounded, { displayAnswer: places === 0 ? String(rounded) : rounded.toFixed(places) });
}
function q16RoundWhole() { return roundingQuestion('roundWhole', 0, 'Round to the Nearest Whole Number'); }
function q17Round1dp() { return roundingQuestion('round1dp', 1, 'Round to 1 Decimal Place'); }
function q18Round2dp() { return roundingQuestion('round2dp', 2, 'Round to 2 Decimal Places'); }
function q19Round3dp() { return roundingQuestion('round3dp', 3, 'Round to 3 Decimal Places'); }
function q20EstimateDecimalCalculations() {
  const a = randInt(15, 199) / 10, b = randInt(15, 199) / 10, op = chance(0.5) ? '+' : '−';
  const estimate = op === '+' ? Math.round(a) + Math.round(b) : Math.round(a) - Math.round(b);
  return decimalQuestion('estimateDecimalCalculations', 'Estimate Decimal Calculations', `Estimate <strong>${a.toFixed(1)} ${op} ${b.toFixed(1)}</strong> by rounding each number to the nearest whole number first.`, estimate, { hint: 'Round both numbers before calculating.' });
}
function q21ReasonableDecimalAnswer() {
  const a = randInt(12, 98) / 10, b = randInt(12, 98) / 10;
  const correctProduct = Number((a * b).toFixed(2));
  const shown = chance(0.5) ? correctProduct : Number((correctProduct * 10).toFixed(2));
  const isReasonable = shown === correctProduct;
  return oneTwoQuestion('reasonableDecimalAnswer', 'Check Whether an Answer Is Reasonable', `A student says <strong>${a.toFixed(1)} × ${b.toFixed(1)} = ${shown}</strong>.<br>Is the answer reasonable?<br><strong>1.</strong> Yes<br><strong>2.</strong> No`, isReasonable ? 1 : 2, 'Estimate the factors first and check the size of the product.');
}

/* Practice 4: Add and Subtract */
function decimalAddQuestion(pointId, samePlaces) {
  const p1 = pick([1, 2]), p2 = samePlaces ? p1 : (p1 === 1 ? 2 : 1);
  const aInt = randInt(10, decimalLevelMax(200, 2000, 10000)), bInt = randInt(10, decimalLevelMax(200, 2000, 10000));
  const a = scaledNumber(aInt, p1), b = scaledNumber(bInt, p2), ans = a + b;
  return decimalQuestion(pointId, 'Add Decimals', `Calculate <strong>${formatScaled(aInt, p1)} + ${formatScaled(bInt, p2)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 4), hint: 'Line up the decimal points.' });
}
function decimalSubtractQuestion(pointId, samePlaces) {
  const p1 = pick([1, 2]), p2 = samePlaces ? p1 : (p1 === 1 ? 2 : 1);
  let a = scaledNumber(randInt(50, decimalLevelMax(300, 3000, 15000)), p1);
  let b = scaledNumber(randInt(10, decimalLevelMax(200, 2000, 10000)), p2);
  if (b > a) [a, b] = [b, a];
  const ans = a - b;
  return decimalQuestion(pointId, 'Subtract Decimals', `Calculate <strong>${formatNumber(a, 3)} − ${formatNumber(b, 3)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 4), hint: 'Line up the decimal points and add placeholder zeros if needed.' });
}
function q22AddSameDp() { return decimalAddQuestion('addSameDp', true); }
function q23AddDifferentDp() { return decimalAddQuestion('addDifferentDp', false); }
function q24SubtractSameDp() { return decimalSubtractQuestion('subtractSameDp', true); }
function q25SubtractDifferentDp() { return decimalSubtractQuestion('subtractDifferentDp', false); }
function q26AddZerosBeforeCalculating() {
  const n = randInt(10, 999) / 10;
  const shown = n.toFixed(1), answer = n.toFixed(2);
  return chooseTextQuestion('addZerosBeforeCalculating', 'Add Zeros Before Calculating', `Write <strong>${shown}</strong> with exactly <strong>2 decimal places</strong>.`, answer, [answer], 'Add one zero at the end without changing the value.');
}
function q27MissingDecimalAddSubtract() {
  const a = randInt(10, 500) / 10, b = randInt(10, 500) / 10, sum = a + b;
  return chance(0.5)
    ? decimalQuestion('missingDecimalAddSubtract', 'Missing Numbers', `<strong>${a.toFixed(1)} + □ = ${sum.toFixed(1)}</strong><br>Find the missing number.`, b, { displayAnswer: b.toFixed(1) })
    : decimalQuestion('missingDecimalAddSubtract', 'Missing Numbers', `<strong>${sum.toFixed(1)} − □ = ${a.toFixed(1)}</strong><br>Find the missing number.`, b, { displayAnswer: b.toFixed(1) });
}
function q28InverseDecimalCheck() {
  const a = randInt(10, 300) / 10, b = randInt(10, 300) / 10, total = a + b;
  return decimalQuestion('inverseDecimalCheck', 'Inverse Operations', `<strong>${a.toFixed(1)} + ${b.toFixed(1)} = ${total.toFixed(1)}</strong>.<br>Use subtraction to find <strong>${total.toFixed(1)} − ${a.toFixed(1)}</strong>.`, b, { displayAnswer: b.toFixed(1), hint: 'Subtraction checks addition.' });
}

/* Practice 5: Powers of Ten */
function q29Multiply101001000() {
  const factor = pick([10, 100, 1000]), places = pick([1, 2, 3]), nInt = randInt(1, 9999), n = scaledNumber(nInt, places);
  return decimalQuestion('multiply101001000', 'Multiply by Powers of Ten', `Calculate <strong>${formatScaled(nInt, places)} × ${factor}</strong>.`, n * factor, { displayAnswer: formatNumber(n * factor, 6) });
}
function q30Divide101001000() {
  const divisor = pick([10, 100, 1000]), n = randInt(1, decimalLevelMax(999, 9999, 99999));
  return decimalQuestion('divide101001000', 'Divide by Powers of Ten', `Calculate <strong>${n} ÷ ${divisor}</strong>.`, n / divisor, { displayAnswer: formatNumber(n / divisor, 6) });
}
function q31MultiplyDecimalPowers() {
  const factor = pick([0.1, 0.01, 0.001]), n = randInt(1, decimalLevelMax(999, 9999, 99999)) / 10;
  return decimalQuestion('multiplyDecimalPowers', 'Multiply by Decimal Powers', `Calculate <strong>${formatNumber(n, 1)} × ${factor}</strong>.`, n * factor, { displayAnswer: formatNumber(n * factor, 6), hint: 'Multiplying by a number less than 1 makes a positive number smaller.' });
}
function q32DivideDecimalPowers() {
  const divisor = pick([0.1, 0.01, 0.001]), n = randInt(1, decimalLevelMax(999, 9999, 99999)) / 100;
  return decimalQuestion('divideDecimalPowers', 'Divide by Decimal Powers', `Calculate <strong>${formatNumber(n, 2)} ÷ ${divisor}</strong>.`, n / divisor, { displayAnswer: formatNumber(n / divisor, 6), hint: 'Dividing by a number less than 1 makes a positive number larger.' });
}
function q33PredictAnswerSize() {
  const n = randInt(2, 50), factor = pick([10, 100, 0.1, 0.01]);
  const larger = factor > 1;
  return oneTwoQuestion('predictAnswerSize', 'Predict the Size of the Answer', `Without calculating, will <strong>${n} × ${factor}</strong> be larger or smaller than ${n}?<br><strong>1.</strong> Larger<br><strong>2.</strong> Smaller`, larger ? 1 : 2, 'Compare the multiplier with 1.');
}

/* Practice 6: Multiply Decimals */
function q34DecimalTimesWhole() {
  const a = randInt(11, decimalLevelMax(99, 999, 9999)) / 10, b = randInt(2, 12), ans = a * b;
  return decimalQuestion('decimalTimesWhole', 'Decimal × Whole Number', `Calculate <strong>${a.toFixed(1)} × ${b}</strong>.`, ans, { displayAnswer: formatNumber(ans, 3) });
}
function q35WholeTimesDecimal() {
  const a = randInt(2, 25), b = randInt(11, decimalLevelMax(99, 999, 9999)) / 10, ans = a * b;
  return decimalQuestion('wholeTimesDecimal', 'Whole Number × Decimal', `Calculate <strong>${a} × ${b.toFixed(1)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 3) });
}
function q36DecimalTimesDecimal() {
  const p1 = pick([1, 2]), p2 = pick([1, 2]);
  const aInt = randInt(2, decimalLevelMax(99, 399, 999)), bInt = randInt(2, decimalLevelMax(99, 399, 999));
  const a = scaledNumber(aInt, p1), b = scaledNumber(bInt, p2), ans = a * b;
  return decimalQuestion('decimalTimesDecimal', 'Decimal × Decimal', `Calculate <strong>${formatScaled(aInt, p1)} × ${formatScaled(bInt, p2)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 6) });
}
function q37MultiplyTenths() {
  const a = randInt(11, 99) / 10, b = randInt(1, 9) / 10, ans = a * b;
  return decimalQuestion('multiplyTenths', 'Multiplication Involving Tenths', `Calculate <strong>${a.toFixed(1)} × ${b.toFixed(1)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 3) });
}
function q38MultiplyHundredths() {
  const a = randInt(11, 999) / 100, b = randInt(1, 99) / 100, ans = a * b;
  return decimalQuestion('multiplyHundredths', 'Multiplication Involving Hundredths', `Calculate <strong>${formatNumber(a, 2)} × ${formatNumber(b, 2)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 6) });
}
function q39ProductDecimalPoint() {
  const a = randInt(12, 98) / 10, b = randInt(2, 9) / 10, ans = a * b;
  const digits = String(Math.round(ans * 100)).padStart(2, '0');
  return decimalQuestion('productDecimalPoint', 'Place the Decimal Point', `The digits in the answer to <strong>${a.toFixed(1)} × ${b.toFixed(1)}</strong> are <strong>${digits}</strong>.<br>Place the decimal point correctly.`, ans, { displayAnswer: formatNumber(ans, 2), hint: 'Estimate first, then place the decimal point.' });
}
function q40EstimateBeforeMultiplying() {
  const a = randInt(15, 95) / 10, b = randInt(15, 95) / 10, estimate = Math.round(a) * Math.round(b);
  return decimalQuestion('estimateBeforeMultiplying', 'Estimate Before Multiplying', `Estimate <strong>${a.toFixed(1)} × ${b.toFixed(1)}</strong> by rounding each factor to the nearest whole number.`, estimate);
}

/* Practice 7: Divide Decimals */
function q41DecimalDivideWhole() {
  const divisor = randInt(2, 12), quotient = randInt(2, 200) / 10, dividend = quotient * divisor;
  return decimalQuestion('decimalDivideWhole', 'Decimal ÷ Whole Number', `Calculate <strong>${formatNumber(dividend, 2)} ÷ ${divisor}</strong>.`, quotient, { displayAnswer: formatNumber(quotient, 2) });
}
function q42WholeDivideDecimal() {
  const cases = [
    [0.2, 5], [0.4, 5], [0.5, 2], [0.8, 5], [1.25, 4], [1.5, 2], [2.5, 2]
  ];
  const [divisor, step] = pick(cases);
  const quotient = step * randInt(1, 10);
  const dividend = divisor * quotient;
  return decimalQuestion('wholeDivideDecimal', 'Whole Number ÷ Decimal', `Calculate <strong>${formatNumber(dividend, 2)} ÷ ${divisor}</strong>.`, quotient);
}
function q43DecimalDivideDecimal() {
  const divisor = randInt(2, 25) / 10, quotient = randInt(2, 30) / 10, dividend = divisor * quotient;
  return decimalQuestion('decimalDivideDecimal', 'Decimal ÷ Decimal', `Calculate <strong>${formatNumber(dividend, 3)} ÷ ${formatNumber(divisor, 1)}</strong>.`, quotient, { displayAnswer: formatNumber(quotient, 2) });
}
function q44DivideByTenths() {
  const divisor = randInt(1, 9) / 10, quotient = randInt(2, 30), dividend = divisor * quotient;
  return decimalQuestion('divideByTenths', 'Division by Tenths', `Calculate <strong>${formatNumber(dividend, 2)} ÷ ${divisor.toFixed(1)}</strong>.`, quotient);
}
function q45DivideByHundredths() {
  const divisor = randInt(1, 20) / 100, quotient = randInt(2, 30), dividend = divisor * quotient;
  return decimalQuestion('divideByHundredths', 'Division by Hundredths', `Calculate <strong>${formatNumber(dividend, 3)} ÷ ${divisor.toFixed(2)}</strong>.`, quotient);
}
function q46AddZerosDuringDivision() {
  const divisor = pick([4, 8, 20, 25]), quotient = randInt(1, 40) / 10, dividend = divisor * quotient;
  return decimalQuestion('addZerosDuringDivision', 'Add Zeros During Division', `Calculate <strong>${formatNumber(dividend, 1)} ÷ ${divisor}</strong>.<br>Add zeros after the decimal point if needed.`, quotient, { displayAnswer: formatNumber(quotient, 2) });
}
function q47MakeDivisorWhole() {
  const cases = [[0.3, 10], [0.04, 100], [1.25, 100], [0.006, 1000]];
  const [divisor, factor] = pick(cases);
  return decimalQuestion('makeDivisorWhole', 'Make the Divisor a Whole Number', `What should both numbers be multiplied by to make the divisor <strong>${divisor}</strong> a whole number?`, factor, { hint: 'Multiply the dividend and divisor by the same power of 10.' });
}
function q48QuotientDecimalPoint() {
  const divisor = randInt(2, 9), quotient = randInt(11, 99) / 10, dividend = divisor * quotient;
  const digits = String(Math.round(quotient * 10));
  return decimalQuestion('quotientDecimalPoint', 'Place the Decimal Point', `The digits in the answer to <strong>${formatNumber(dividend, 1)} ÷ ${divisor}</strong> are <strong>${digits}</strong>.<br>Place the decimal point correctly.`, quotient, { displayAnswer: quotient.toFixed(1) });
}
function q49EstimateBeforeDividing() {
  const divisor = randInt(2, 9), quotient = randInt(2, 15), dividend = divisor * quotient + pick([-0.2, -0.1, 0.1, 0.2]);
  return decimalQuestion('estimateBeforeDividing', 'Estimate Before Dividing', `Estimate <strong>${formatNumber(dividend, 1)} ÷ ${divisor}</strong> using the nearest compatible whole number.`, quotient, { hint: `Use ${divisor * quotient} as a nearby compatible number.` });
}

/* Practice 8: Mixed Operations */
function q50MixedAddSubtractDecimals() {
  const a = randInt(20, 200) / 10, b = randInt(10, 100) / 10, c = randInt(10, 100) / 10, ans = a + b - c;
  return decimalQuestion('mixedAddSubtractDecimals', 'Mixed Addition and Subtraction', `Calculate <strong>${a.toFixed(1)} + ${b.toFixed(1)} − ${c.toFixed(1)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 2) });
}
function q51MixedMultiplyDivideDecimals() {
  const a = randInt(2, 20) / 10, b = randInt(2, 9), c = randInt(2, 9), product = a * b * c;
  return decimalQuestion('mixedMultiplyDivideDecimals', 'Mixed Multiplication and Division', `Calculate <strong>${formatNumber(product, 2)} ÷ ${c} × ${b}</strong>.`, a * b * b, { displayAnswer: formatNumber(a * b * b, 3) });
}
function q52FourOperationsDecimals() {
  const a = randInt(20, 100) / 10, b = randInt(10, 50) / 10, c = randInt(2, 9), d = randInt(1, 5) / 10;
  const ans = a + b - c * d;
  return decimalQuestion('fourOperationsDecimals', 'Four Operations with Decimals', `Calculate <strong>${a.toFixed(1)} + ${b.toFixed(1)} − ${c} × ${d.toFixed(1)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 2), hint: 'Do multiplication before addition and subtraction.' });
}
function q53DecimalOrderOperations() {
  const a = randInt(10, 80) / 10, b = randInt(2, 9), c = randInt(1, 9) / 10, ans = a + b * c;
  return decimalQuestion('decimalOrderOperations', 'Order of Operations', `Calculate <strong>${a.toFixed(1)} + ${b} × ${c.toFixed(1)}</strong>.`, ans, { displayAnswer: formatNumber(ans, 2), hint: 'Multiply before adding.' });
}
function q54DecimalBrackets() {
  const a = randInt(10, 50) / 10, b = randInt(10, 50) / 10, c = randInt(2, 9), ans = (a + b) * c;
  return decimalQuestion('decimalBrackets', 'Brackets with Decimal Calculations', `Calculate <strong>(${a.toFixed(1)} + ${b.toFixed(1)}) × ${c}</strong>.`, ans, { displayAnswer: formatNumber(ans, 2), hint: 'Calculate inside the brackets first.' });
}
function q55MissingDecimalOperations() {
  const a = randInt(10, 90) / 10, b = randInt(10, 90) / 10;
  const ops = [
    { symbol: '+', value: a + b }, { symbol: '−', value: a - b }, { symbol: '×', value: a * b }
  ];
  const chosen = pick(ops);
  return chooseTextQuestion('missingDecimalOperations', 'Missing Operations', `Which operation completes the statement?<br><strong>${a.toFixed(1)} □ ${b.toFixed(1)} = ${formatNumber(chosen.value, 2)}</strong><br>Type <strong>+</strong>, <strong>−</strong> or <strong>×</strong>.`, chosen.symbol, chosen.symbol === '−' ? ['-', '−'] : [chosen.symbol]);
}

/* Practice 9: Fractions, Decimals and Percentages */
function fractionAnswerOptions(n, d) {
  const f = simplifyFraction(n, d);
  return { answer: `${f.n}/${f.d}`, display: fractionHtml(f.n, f.d) };
}
function q56DecimalToFraction() {
  const places = pick([1, 2, 3]), int = randInt(1, power10(places) - 1), f = fractionAnswerOptions(int, power10(places));
  return decimalQuestion('decimalToFraction', 'Decimal to Fraction', `Write <strong>${formatScaled(int, places, true)}</strong> as a fraction in simplest form.`, f.answer, { displayAnswer: f.display });
}
function q57SimplifyDecimalFraction() {
  const places = pick([2, 3]), int = randInt(2, power10(places) - 1), f = fractionAnswerOptions(int, power10(places));
  return decimalQuestion('simplifyDecimalFraction', 'Simplify a Decimal Fraction', `Convert <strong>${formatScaled(int, places, true)}</strong> to a fraction and simplify it fully.`, f.answer, { displayAnswer: f.display });
}
function q58FractionToDecimalPowersTen() {
  const d = pick([10, 100, 1000]), n = randInt(1, d - 1), ans = n / d;
  return decimalQuestion('fractionToDecimalPowersTen', 'Fraction to Decimal', `Write ${fractionHtml(n, d)} as a decimal.`, ans, { displayAnswer: formatNumber(ans, 3) });
}
function q59FractionToDecimalDivision() {
  const pairs = [[1,2],[3,4],[1,5],[3,8],[7,20],[9,25],[11,40],[17,50]];
  const [n, d] = pick(pairs), ans = n / d;
  return decimalQuestion('fractionToDecimalDivision', 'Fraction to Decimal Using Division', `Use division to write ${fractionHtml(n, d)} as a decimal.`, ans, { displayAnswer: formatNumber(ans, 4) });
}
function q60DecimalToPercentage() {
  const int = randInt(1, 999), places = pick([2, 3]), decimal = int / power10(places), percent = decimal * 100;
  return decimalQuestion('decimalToPercentage', 'Decimal to Percentage', `Write <strong>${formatNumber(decimal, places)}</strong> as a percentage.<br>Enter the number only.`, percent, { displayAnswer: `${formatNumber(percent, 3)}%` });
}
function q61PercentageToDecimal() {
  const percent = randInt(1, 250), decimal = percent / 100;
  return decimalQuestion('percentageToDecimal', 'Percentage to Decimal', `Write <strong>${percent}%</strong> as a decimal.`, decimal, { displayAnswer: formatNumber(decimal, 2) });
}
function q62CompareFdp() {
  const d = pick([4, 5, 8, 10]), n = randInt(1, d - 1), a = n / d;
  const b = Number((a + pick([-0.1, 0, 0.1])).toFixed(3));
  return chooseTextQuestion('compareFdp', 'Compare Fractions, Decimals and Percentages', `Compare ${fractionHtml(n, d)} and <strong>${formatNumber(b, 3)}</strong>.<br>Type <strong>&gt;</strong>, <strong>&lt;</strong> or <strong>=</strong>.`, compareSymbol(a, b));
}
function q63OrderFdp() {
  const values = [0.25, 0.4, 0.6, 0.75, 0.8];
  const picked = [...values].sort(() => Math.random() - 0.5).slice(0, 3);
  const forms = [
    `${Math.round(picked[0] * 100)}%`,
    formatNumber(picked[1], 2),
    simplifiedFractionHtml(Math.round(picked[2] * 20), 20)
  ];
  const smallest = Math.min(...picked);
  const index = picked.indexOf(smallest) + 1;
  return decimalQuestion('orderFdp', 'Order Fractions, Decimals and Percentages', `Which value is smallest?<br><strong>1.</strong> ${forms[0]} &nbsp; <strong>2.</strong> ${forms[1]} &nbsp; <strong>3.</strong> ${forms[2]}`, index, { hint: 'Convert all three values to decimals before comparing.' });
}

/* Practice 10: Money */
function q64MoneyDecimalFormat() {
  const dollars = randInt(1, 99), cents = randInt(0, 99), answer = `$${dollars}.${String(cents).padStart(2, '0')}`;
  return chooseTextQuestion('moneyDecimalFormat', 'Money Written as Decimals', `Write <strong>${dollars} dollars and ${cents} cents</strong> using the correct money format.`, answer, [answer], 'Money is written with a dollar sign and exactly two decimal places.');
}
function q65AddSubtractMoney() {
  const a = randInt(100, 5000) / 100, b = randInt(50, 3000) / 100;
  if (chance(0.5)) {
    const ans = a + b;
    return decimalQuestion('addSubtractMoney', 'Add and Subtract Money', `Calculate <strong>${money(a)} + ${money(b)}</strong>.<br>Enter the amount in dollars.`, ans, { displayAnswer: money(ans) });
  }
  const high = Math.max(a, b), low = Math.min(a, b), ans = high - low;
  return decimalQuestion('addSubtractMoney', 'Add and Subtract Money', `Calculate <strong>${money(high)} − ${money(low)}</strong>.<br>Enter the amount in dollars.`, ans, { displayAnswer: money(ans) });
}
function q66MultiplyDivideMoney() {
  const price = randInt(50, 2000) / 100, count = randInt(2, 12);
  if (chance(0.6)) {
    const ans = price * count;
    return decimalQuestion('multiplyDivideMoney', 'Multiply and Divide Money', `${count} identical items cost <strong>${money(price)}</strong> each. What is the total cost?`, ans, { displayAnswer: money(ans) });
  }
  const total = price * count;
  return decimalQuestion('multiplyDivideMoney', 'Multiply and Divide Money', `<strong>${money(total)}</strong> is shared equally among ${count} people. How much does each person pay?`, price, { displayAnswer: money(price) });
}
function q67CalculateChange() {
  const paid = pick([10, 20, 50, 100]), costCents = randInt(100, paid * 100 - 1), cost = costCents / 100, change = paid - cost;
  return decimalQuestion('calculateChange', 'Calculate Change', `An item costs <strong>${money(cost)}</strong>. It is paid for with <strong>${money(paid)}</strong>. How much change is given?`, change, { displayAnswer: money(change) });
}

/* Practice 11: Measurements and Time */
function q68DecimalLengthConversions() {
  if (chance(0.5)) {
    const metres = randInt(1, 999) / 100;
    return decimalQuestion('decimalLengthConversions', 'Decimal Length Conversions', `Convert <strong>${formatNumber(metres, 2)} m</strong> to centimetres.`, metres * 100, { displayAnswer: `${formatNumber(metres * 100, 2)} cm` });
  }
  const cm = randInt(1, 9999);
  return decimalQuestion('decimalLengthConversions', 'Decimal Length Conversions', `Convert <strong>${cm} cm</strong> to metres.`, cm / 100, { displayAnswer: `${formatNumber(cm / 100, 2)} m` });
}
function q69DecimalMassConversions() {
  if (chance(0.5)) {
    const kg = randInt(1, 9999) / 1000;
    return decimalQuestion('decimalMassConversions', 'Decimal Mass Conversions', `Convert <strong>${formatNumber(kg, 3)} kg</strong> to grams.`, kg * 1000, { displayAnswer: `${formatNumber(kg * 1000, 1)} g` });
  }
  const g = randInt(1, 9999);
  return decimalQuestion('decimalMassConversions', 'Decimal Mass Conversions', `Convert <strong>${g} g</strong> to kilograms.`, g / 1000, { displayAnswer: `${formatNumber(g / 1000, 3)} kg` });
}
function q70DecimalCapacityConversions() {
  if (chance(0.5)) {
    const litres = randInt(1, 9999) / 1000;
    return decimalQuestion('decimalCapacityConversions', 'Decimal Capacity Conversions', `Convert <strong>${formatNumber(litres, 3)} L</strong> to millilitres.`, litres * 1000, { displayAnswer: `${formatNumber(litres * 1000, 1)} mL` });
  }
  const ml = randInt(1, 9999);
  return decimalQuestion('decimalCapacityConversions', 'Decimal Capacity Conversions', `Convert <strong>${ml} mL</strong> to litres.`, ml / 1000, { displayAnswer: `${formatNumber(ml / 1000, 3)} L` });
}
function q71MixedToDecimalUnits() {
  const whole = randInt(1, 20), smaller = randInt(1, 999), unit = pick(['kg', 'L', 'm']);
  const decimal = whole + smaller / 1000;
  const smallUnit = unit === 'kg' ? 'g' : unit === 'L' ? 'mL' : 'mm';
  return decimalQuestion('mixedToDecimalUnits', 'Mixed Units to Decimal Units', `Convert <strong>${whole} ${unit} ${smaller} ${smallUnit}</strong> to ${unit}.`, decimal, { displayAnswer: `${formatNumber(decimal, 3)} ${unit}` });
}
function q72DecimalToMixedUnits() {
  const whole = randInt(1, 20), smaller = randInt(1, 999), unit = pick(['kg', 'L', 'm']), decimal = whole + smaller / 1000;
  const smallUnit = unit === 'kg' ? 'g' : unit === 'L' ? 'mL' : 'mm';
  return decimalQuestion('decimalToMixedUnits', 'Decimal Units to Mixed Units', `<strong>${formatNumber(decimal, 3)} ${unit} = ${whole} ${unit} + □ ${smallUnit}</strong><br>Find the missing number.`, smaller, { displayAnswer: `${smaller} ${smallUnit}` });
}
function q73DecimalToSmallerUnit() {
  const unit = pick(['kg', 'L', 'm']), decimal = randInt(1, 9999) / 1000;
  const smallUnit = unit === 'kg' ? 'g' : unit === 'L' ? 'mL' : 'mm';
  return decimalQuestion('decimalToSmallerUnit', 'Convert to a Smaller Unit', `Convert <strong>${formatNumber(decimal, 3)} ${unit}</strong> to ${smallUnit}.`, decimal * 1000, { displayAnswer: `${formatNumber(decimal * 1000, 1)} ${smallUnit}` });
}
function q74DecimalTimeHours() {
  const whole = randInt(0, 5), quarter = pick([0.25, 0.5, 0.75]), hours = whole + quarter, minutes = whole * 60 + quarter * 60;
  return decimalQuestion('decimalTimeHours', 'Decimal Time and Hours', `Convert <strong>${hours} hours</strong> to minutes.`, minutes, { displayAnswer: `${minutes} minutes`, hint: 'Multiply decimal hours by 60.' });
}

/* Practice 12: Patterns and Basic Word Problems */
function q75DecimalSequences() {
  const start = randInt(1, 100) / 10, step = pick([0.1, 0.2, 0.25, 0.5, 1.5]);
  const terms = [0,1,2,3].map(i => start + i * step), next = start + 4 * step;
  return decimalQuestion('decimalSequences', 'Decimal Sequences', `Find the next term:<br><strong>${terms.map(x => formatNumber(x, 2)).join(', ')}, …</strong>`, next, { displayAnswer: formatNumber(next, 2) });
}
function q76MissingDecimalSequenceTerm() {
  const start = randInt(1, 100) / 10, step = pick([0.2, 0.4, 0.5, 1.25]);
  const terms = [start, start + step, start + 2 * step, start + 3 * step];
  return decimalQuestion('missingDecimalSequenceTerm', 'Missing Sequence Term', `Find the missing term:<br><strong>${formatNumber(terms[0],2)}, ${formatNumber(terms[1],2)}, □, ${formatNumber(terms[3],2)}</strong>`, terms[2], { displayAnswer: formatNumber(terms[2], 2) });
}
function q77DecimalAddSubtractWords() {
  const a = randInt(100, 3000) / 100, b = randInt(50, 1500) / 100;
  if (chance(0.5)) return decimalQuestion('decimalAddSubtractWords', 'Add and Subtract Word Problems', `Mia walked <strong>${formatNumber(a,2)} km</strong> in the morning and <strong>${formatNumber(b,2)} km</strong> in the afternoon. How far did she walk altogether?`, a + b, { displayAnswer: `${formatNumber(a + b, 2)} km` });
  const total = a + b;
  return decimalQuestion('decimalAddSubtractWords', 'Add and Subtract Word Problems', `A container held <strong>${formatNumber(total,2)} L</strong>. After <strong>${formatNumber(b,2)} L</strong> was used, how much remained?`, a, { displayAnswer: `${formatNumber(a,2)} L` });
}
function q78DecimalMultiplyWords() {
  const price = randInt(50, 800) / 100, count = randInt(2, 12), total = price * count;
  return decimalQuestion('decimalMultiplyWords', 'Multiply Decimal Word Problems', `Each notebook costs <strong>${money(price)}</strong>. How much do ${count} notebooks cost?`, total, { displayAnswer: money(total) });
}
function q79DecimalDivideWords() {
  const groups = randInt(2, 12), each = randInt(5, 80) / 10, total = groups * each;
  return decimalQuestion('decimalDivideWords', 'Divide Decimal Word Problems', `<strong>${formatNumber(total,1)} L</strong> of juice is poured equally into ${groups} containers. How many litres are in each container?`, each, { displayAnswer: `${formatNumber(each,1)} L` });
}
function q80MoneyWordProblems() {
  const price = randInt(100, 3000) / 100, paid = Math.ceil(price / 10) * 10 + 10, change = paid - price;
  return decimalQuestion('moneyWordProblems', 'Money Word Problems', `A book costs <strong>${money(price)}</strong>. Noah pays with <strong>${money(paid)}</strong>. How much change should he receive?`, change, { displayAnswer: money(change) });
}
function q81MeasurementWordProblems() {
  const length = randInt(100, 2000) / 100, used = randInt(20, Math.floor(length * 100 - 10)) / 100, left = length - used;
  return decimalQuestion('measurementWordProblems', 'Measurement Word Problems', `A ribbon is <strong>${formatNumber(length,2)} m</strong> long. <strong>${formatNumber(used,2)} m</strong> is cut off. How much ribbon remains?`, left, { displayAnswer: `${formatNumber(left,2)} m` });
}

/* Practice 13: Rates and Multi-Step */
function q82DecimalUnitPrice() {
  const count = randInt(2, 12), unitPrice = randInt(50, 1000) / 100, total = count * unitPrice;
  return decimalQuestion('decimalUnitPrice', 'Unit Price Problems', `${count} identical items cost <strong>${money(total)}</strong> altogether. What is the price of one item?`, unitPrice, { displayAnswer: money(unitPrice) });
}
function q83DecimalRateProblems() {
  const hours = randInt(2, 8), speed = randInt(50, 300) / 10, distance = hours * speed;
  return decimalQuestion('decimalRateProblems', 'Decimal Rate Problems', `A cyclist travels at <strong>${formatNumber(speed,1)} km/h</strong> for ${hours} hours. How far does the cyclist travel?`, distance, { displayAnswer: `${formatNumber(distance,1)} km` });
}
function q84TotalFromDecimalPart() {
  const part = pick([0.2, 0.25, 0.4, 0.5, 0.75]), whole = randInt(2, 20) * 20, amount = part * whole;
  return decimalQuestion('totalFromDecimalPart', 'Find the Total from a Decimal Part', `<strong>${formatNumber(part,2)}</strong> of a group is <strong>${amount}</strong> people. How many people are in the whole group?`, whole, { hint: 'Divide the known part by the decimal fraction.' });
}
function q85DecimalPartOfAmount() {
  const part = pick([0.1, 0.2, 0.25, 0.4, 0.5, 0.75]), whole = randInt(2, 20) * 20, answer = part * whole;
  return decimalQuestion('decimalPartOfAmount', 'Find a Decimal Part of an Amount', `Find <strong>${formatNumber(part,2)}</strong> of <strong>${whole}</strong>.`, answer);
}
function q86ReverseDecimalProblems() {
  const remainingFraction = pick([0.5, 0.6, 0.75, 0.8]), whole = randInt(2, 20) * 20, remaining = remainingFraction * whole, used = 1 - remainingFraction;
  return decimalQuestion('reverseDecimalProblems', 'Reverse Decimal Problems', `<strong>${formatNumber(used,2)}</strong> of a tank was used. <strong>${remaining} L</strong> remained. How many litres were in the tank at first?`, whole, { displayAnswer: `${whole} L` });
}
function q87MultiStepDecimalProblems() {
  const price = randInt(100, 1000) / 100, count = randInt(2, 8), fee = randInt(50, 500) / 100, total = price * count + fee;
  return decimalQuestion('multiStepDecimalProblems', 'Multi-Step Decimal Problems', `${count} tickets cost <strong>${money(price)}</strong> each. A booking fee of <strong>${money(fee)}</strong> is added. What is the total cost?`, total, { displayAnswer: money(total) });
}
function q88ChooseDecimalOperation() {
  const type = randInt(1, 4);
  const prompts = {
    1: 'Find the total cost of 6 items that each cost $2.40.',
    2: 'Find how much remains after 1.35 L is used from 4.80 L.',
    3: 'Share 7.2 kg equally among 6 boxes.',
    4: 'Find the total distance of 3.6 km and 2.4 km.'
  };
  const correct = {1: 3, 2: 2, 3: 4, 4: 1}[type];
  return decimalQuestion('chooseDecimalOperation', 'Choose the Correct Operation', `${prompts[type]}<br><strong>1.</strong> Add &nbsp; <strong>2.</strong> Subtract &nbsp; <strong>3.</strong> Multiply &nbsp; <strong>4.</strong> Divide`, correct);
}
function q89UnnecessaryDecimalInformation() {
  const price = (randInt(100, 900) / 100).toFixed(2), count = randInt(2, 8), colourCount = randInt(2, 6);
  return decimalQuestion('unnecessaryDecimalInformation', 'Identify Unnecessary Information', `A shop sells pencils for <strong>$${price}</strong> each. Ava buys <strong>${count}</strong> pencils. The pencils come in <strong>${colourCount}</strong> colours. Which piece of information is not needed to find the total cost?<br><strong>1.</strong> Price per pencil &nbsp; <strong>2.</strong> Number bought &nbsp; <strong>3.</strong> Number of colours`, 3);
}
function q90RoundFinalDecimalAnswer() {
  const distance = randInt(100, 999) / 100, time = randInt(2, 9), value = distance / time, rounded = Number(value.toFixed(2));
  return decimalQuestion('roundFinalDecimalAnswer', 'Round the Final Answer', `A vehicle travels <strong>${distance.toFixed(2)} km</strong> in ${time} hours. Find the average distance per hour and round your answer to <strong>2 decimal places</strong>.`, rounded, { displayAnswer: `${rounded.toFixed(2)} km/h` });
}

/* Practice 14: Calculator and Answer Format */
function q91EnterDecimalCalculator() {
  const correct = randInt(1, 3);
  const options = [
    '3.6 + 2.45',
    '36 + 245',
    '3.6 + 245'
  ];
  const reordered = [...options];
  if (correct !== 1) [reordered[0], reordered[correct - 1]] = [reordered[correct - 1], reordered[0]];
  return decimalQuestion('enterDecimalCalculator', 'Enter Decimal Calculations Correctly', `Which calculator entry correctly adds <strong>3.6</strong> and <strong>2.45</strong>?<br>${reordered.map((x, i) => `<strong>${i + 1}.</strong> ${x}`).join('<br>')}`, correct);
}
function q92InterpretLongCalculatorAnswer() {
  const numerator = randInt(10, 99), denominator = pick([3, 6, 7, 9, 11]), raw = numerator / denominator, rounded = Number(raw.toFixed(2));
  return decimalQuestion('interpretLongCalculatorAnswer', 'Interpret a Long Calculator Answer', `A calculator shows <strong>${raw.toFixed(8)}</strong>. Write the value to <strong>2 decimal places</strong>.`, rounded, { displayAnswer: rounded.toFixed(2) });
}
function q93RoundCalculatorAnswer() {
  const raw = randInt(100000, 999999) / 100000, places = pick([1, 2, 3]), rounded = Number(raw.toFixed(places));
  return decimalQuestion('roundCalculatorAnswer', 'Round a Calculator Answer', `Round the calculator answer <strong>${raw.toFixed(5)}</strong> to <strong>${places} decimal place${places === 1 ? '' : 's'}</strong>.`, rounded, { displayAnswer: rounded.toFixed(places) });
}
function q94UseTrailingZeros() {
  const whole = randInt(1, 50), tenths = randInt(0, 9), answer = `${whole}.${tenths}0`;
  return chooseTextQuestion('useTrailingZeros', 'Use Trailing Zeros', `Write <strong>${whole}.${tenths}</strong> with exactly <strong>2 decimal places</strong>.`, answer, [answer], 'The final zero is required because the question asks for two decimal places.');
}
function q95CorrectDecimalUnits() {
  const type = randInt(1, 4);
  const prompts = {
    1: ['The mass of a school bag is 3.4 ___.', 'kg'],
    2: ['A bottle holds 1.5 ___.', 'L'],
    3: ['A pencil is 14.2 ___ long.', 'cm'],
    4: ['A bus journey lasts 1.5 ___.', 'hours']
  };
  const [text, unit] = prompts[type];
  return chooseTextQuestion('correctDecimalUnits', 'Correct Units', `${text}<br>Type the most suitable unit.`, unit, [unit, unit.toLowerCase()]);
}

/* Practice 15: Advanced Decimals */
function q96TerminatingDecimals() {
  const terminating = chance(0.5);
  const shown = terminating ? pick(['0.25', '1.375', '2.04', '0.625']) : pick(['0.333…', '1.272727…', '0.1666…', '2.090909…']);
  return oneTwoQuestion('terminatingDecimals', 'Terminating Decimals', `Is <strong>${shown}</strong> a terminating decimal?<br><strong>1.</strong> Yes<br><strong>2.</strong> No`, terminating ? 1 : 2, 'A terminating decimal ends after a finite number of decimal places.');
}
function q97RecurringDecimals() {
  const recurring = chance(0.5);
  const shown = recurring ? pick(['0.333…', '0.272727…', '1.1666…']) : pick(['0.75', '1.204', '3.625']);
  return oneTwoQuestion('recurringDecimals', 'Recurring Decimals', `Is <strong>${shown}</strong> a recurring decimal?<br><strong>1.</strong> Yes<br><strong>2.</strong> No`, recurring ? 1 : 2, 'A recurring decimal has a digit or block of digits that repeats forever.');
}
function q98RecurringNotation() {
  const recurring = pick(['3', '6', '27', '45']);
  const html = recurringHtml('0.', recurring);
  return chooseTextQuestion('recurringNotation', 'Recurring Decimal Notation', `In ${html}, which digit or block repeats forever?`, recurring, [recurring]);
}
function q99RecurringToFraction() {
  const cases = [
    { html: recurringHtml('0.', '3'), answer: '1/3', display: fractionHtml(1,3) },
    { html: recurringHtml('0.', '6'), answer: '2/3', display: fractionHtml(2,3) },
    { html: recurringHtml('0.', '27'), answer: '3/11', display: fractionHtml(3,11) },
    { html: recurringHtml('0.', '09'), answer: '1/11', display: fractionHtml(1,11) }
  ];
  const item = pick(cases);
  return decimalQuestion('recurringToFraction', 'Recurring Decimal to Fraction', `Write ${item.html} as a fraction in simplest form.`, item.answer, { displayAnswer: item.display });
}
function q100CompareTerminatingRecurring() {
  const recurring = recurringHtml('0.', '3'), terminating = pick([0.3, 0.34, 0.33]);
  const recurringValue = 1 / 3;
  return chooseTextQuestion('compareTerminatingRecurring', 'Compare Terminating and Recurring Decimals', `Compare ${recurring} and <strong>${terminating}</strong>.<br>Type <strong>&gt;</strong>, <strong>&lt;</strong> or <strong>=</strong>.`, compareSymbol(recurringValue, terminating));
}

TOPIC_BANKS.decimals = {
  decimalPlaceValue: {
    wholeDecimalParts: q1WholeDecimalParts, tenths: q2Tenths, hundredths: q3Hundredths, thousandths: q4Thousandths, readDecimals: q5ReadDecimals, writeDecimals: q6WriteDecimals, expandedForm: q7ExpandedForm, digitValue: q8DigitValue, zeroPlaceholder: q9ZeroPlaceholder, equivalentDecimals: q10EquivalentDecimals
  },
  compareOrderDecimals: {
    decimalNumberLine: q11DecimalNumberLine, compareDecimals: q12CompareDecimals, orderDecimals: q13OrderDecimals, decimalBetween: q14DecimalBetween, negativeDecimals: q15NegativeDecimals
  },
  roundEstimateDecimals: {
    roundWhole: q16RoundWhole, round1dp: q17Round1dp, round2dp: q18Round2dp, round3dp: q19Round3dp, estimateDecimalCalculations: q20EstimateDecimalCalculations, reasonableDecimalAnswer: q21ReasonableDecimalAnswer
  },
  addSubtractDecimals: {
    addSameDp: q22AddSameDp, addDifferentDp: q23AddDifferentDp, subtractSameDp: q24SubtractSameDp, subtractDifferentDp: q25SubtractDifferentDp, addZerosBeforeCalculating: q26AddZerosBeforeCalculating, missingDecimalAddSubtract: q27MissingDecimalAddSubtract, inverseDecimalCheck: q28InverseDecimalCheck
  },
  powersOfTen: {
    multiply101001000: q29Multiply101001000, divide101001000: q30Divide101001000, multiplyDecimalPowers: q31MultiplyDecimalPowers, divideDecimalPowers: q32DivideDecimalPowers, predictAnswerSize: q33PredictAnswerSize
  },
  multiplyDecimals: {
    decimalTimesWhole: q34DecimalTimesWhole, wholeTimesDecimal: q35WholeTimesDecimal, decimalTimesDecimal: q36DecimalTimesDecimal, multiplyTenths: q37MultiplyTenths, multiplyHundredths: q38MultiplyHundredths, productDecimalPoint: q39ProductDecimalPoint, estimateBeforeMultiplying: q40EstimateBeforeMultiplying
  },
  divideDecimals: {
    decimalDivideWhole: q41DecimalDivideWhole, wholeDivideDecimal: q42WholeDivideDecimal, decimalDivideDecimal: q43DecimalDivideDecimal, divideByTenths: q44DivideByTenths, divideByHundredths: q45DivideByHundredths, addZerosDuringDivision: q46AddZerosDuringDivision, makeDivisorWhole: q47MakeDivisorWhole, quotientDecimalPoint: q48QuotientDecimalPoint, estimateBeforeDividing: q49EstimateBeforeDividing
  },
  mixedDecimalOperations: {
    mixedAddSubtractDecimals: q50MixedAddSubtractDecimals, mixedMultiplyDivideDecimals: q51MixedMultiplyDivideDecimals, fourOperationsDecimals: q52FourOperationsDecimals, decimalOrderOperations: q53DecimalOrderOperations, decimalBrackets: q54DecimalBrackets, missingDecimalOperations: q55MissingDecimalOperations
  },
  fractionsDecimalsPercentages: {
    decimalToFraction: q56DecimalToFraction, simplifyDecimalFraction: q57SimplifyDecimalFraction, fractionToDecimalPowersTen: q58FractionToDecimalPowersTen, fractionToDecimalDivision: q59FractionToDecimalDivision, decimalToPercentage: q60DecimalToPercentage, percentageToDecimal: q61PercentageToDecimal, compareFdp: q62CompareFdp, orderFdp: q63OrderFdp
  },
  decimalMoney: {
    moneyDecimalFormat: q64MoneyDecimalFormat, addSubtractMoney: q65AddSubtractMoney, multiplyDivideMoney: q66MultiplyDivideMoney, calculateChange: q67CalculateChange
  },
  decimalMeasurementsTime: {
    decimalLengthConversions: q68DecimalLengthConversions, decimalMassConversions: q69DecimalMassConversions, decimalCapacityConversions: q70DecimalCapacityConversions, mixedToDecimalUnits: q71MixedToDecimalUnits, decimalToMixedUnits: q72DecimalToMixedUnits, decimalToSmallerUnit: q73DecimalToSmallerUnit, decimalTimeHours: q74DecimalTimeHours
  },
  patternsBasicWordProblems: {
    decimalSequences: q75DecimalSequences, missingDecimalSequenceTerm: q76MissingDecimalSequenceTerm, decimalAddSubtractWords: q77DecimalAddSubtractWords, decimalMultiplyWords: q78DecimalMultiplyWords, decimalDivideWords: q79DecimalDivideWords, moneyWordProblems: q80MoneyWordProblems, measurementWordProblems: q81MeasurementWordProblems
  },
  ratesMultiStepDecimals: {
    decimalUnitPrice: q82DecimalUnitPrice, decimalRateProblems: q83DecimalRateProblems, totalFromDecimalPart: q84TotalFromDecimalPart, decimalPartOfAmount: q85DecimalPartOfAmount, reverseDecimalProblems: q86ReverseDecimalProblems, multiStepDecimalProblems: q87MultiStepDecimalProblems, chooseDecimalOperation: q88ChooseDecimalOperation, unnecessaryDecimalInformation: q89UnnecessaryDecimalInformation, roundFinalDecimalAnswer: q90RoundFinalDecimalAnswer
  },
  calculatorAnswerFormat: {
    enterDecimalCalculator: q91EnterDecimalCalculator, interpretLongCalculatorAnswer: q92InterpretLongCalculatorAnswer, roundCalculatorAnswer: q93RoundCalculatorAnswer, useTrailingZeros: q94UseTrailingZeros, correctDecimalUnits: q95CorrectDecimalUnits
  },
  advancedDecimals: {
    terminatingDecimals: q96TerminatingDecimals, recurringDecimals: q97RecurringDecimals, recurringNotation: q98RecurringNotation, recurringToFraction: q99RecurringToFraction, compareTerminatingRecurring: q100CompareTerminatingRecurring
  }
};
