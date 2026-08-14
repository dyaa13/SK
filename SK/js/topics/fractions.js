'use strict';

TOPIC_CONFIGS.fractions = {
  title: 'Fractions',
  pageTitle: 'Knowledge Practice — Fractions',
  knowledgeMapTitle: 'Fractions Practice Structure',
  intro: 'The fraction question bank is organised into 15 practice sections and 75 detailed knowledge points. Each listed point connects to one specific question type in the bank.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    {
      id: 'fractionParts',
      practiceNumber: 1,
      label: 'Fraction Parts and Vocabulary',
      description: 'Identify, name, interpret and write the parts of a fraction.',
      knowledgePoints: [
        { id: 'f001', number: 1, label: 'Identify the Numerator' },
        { id: 'f002', number: 2, label: 'Identify the Denominator' },
        { id: 'f003', number: 3, label: 'Name the Top Number' },
        { id: 'f004', number: 4, label: 'Name the Bottom Number' },
        { id: 'f005', number: 5, label: 'Meaning of the Numerator' },
        { id: 'f006', number: 6, label: 'Meaning of the Denominator' },
        { id: 'f007', number: 7, label: 'Read the Number of Equal Parts' },
        { id: 'f008', number: 8, label: 'Read the Number of Selected Parts' },
        { id: 'f009', number: 9, label: 'Write a Fraction from Numerator and Denominator' },
        { id: 'f010', number: 10, label: 'Write a Fraction from Equal and Selected Parts' }
      ]
    },
    {
      id: 'fractionTypes',
      practiceNumber: 2,
      label: 'Fraction Types and Validity',
      description: 'Classify proper and improper fractions, use boundary rules and recognise valid fractions.',
      knowledgePoints: [
        { id: 'f011', number: 11, label: 'Classify Proper and Improper Fractions' },
        { id: 'f012', number: 12, label: 'Classify Equal Numerator and Denominator' },
        { id: 'f013', number: 13, label: 'Greatest Numerator for a Proper Fraction' },
        { id: 'f014', number: 14, label: 'Smallest Numerator for an Improper Fraction' },
        { id: 'f015', number: 15, label: 'Smallest Denominator for a Proper Fraction' },
        { id: 'f016', number: 16, label: 'Greatest Denominator for an Improper Fraction' },
        { id: 'f017', number: 17, label: 'Denominator Cannot Be Zero' },
        { id: 'f018', number: 18, label: 'Decide Whether a Fraction Is Valid' },
        { id: 'f019', number: 19, label: 'Fractions with a Zero Numerator' },
        { id: 'f020', number: 20, label: 'Correct Numerator and Denominator Errors' },
        { id: 'f021', number: 21, label: 'Complete Proper and Improper Fraction Rules' }
      ]
    },
    {
      id: 'equivalentSimplify',
      practiceNumber: 3,
      label: 'Equivalent and Simplified Fractions',
      description: 'Complete equivalent fractions and reduce fractions using common factors.',
      knowledgePoints: [
        { id: 'f022', number: 22, label: 'Find a Missing Numerator in Equivalent Fractions' },
        { id: 'f023', number: 23, label: 'Find a Missing Denominator in Equivalent Fractions' },
        { id: 'f024', number: 24, label: 'Find the Equivalent-Fraction Scale Factor' },
        { id: 'f025', number: 25, label: 'Check Whether Two Fractions Are Equivalent' },
        { id: 'f026', number: 26, label: 'Simplify a Fraction to Lowest Terms' },
        { id: 'f027', number: 27, label: 'Find the Missing Common Divisor' },
        { id: 'f028', number: 28, label: 'Find the Greatest Common Factor' }
      ]
    },
    {
      id: 'compareConvert',
      practiceNumber: 4,
      label: 'Compare and Convert Fractions',
      description: 'Compare fractions and convert between mixed numbers and improper fractions.',
      knowledgePoints: [
        { id: 'f029', number: 29, label: 'Compare Fractions with the Same Denominator' },
        { id: 'f030', number: 30, label: 'Compare Fractions with the Same Numerator' },
        { id: 'f031', number: 31, label: 'Compare Fractions with Different Denominators' },
        { id: 'f032', number: 32, label: 'Recognise Equivalent Fractions when Comparing' },
        { id: 'f033', number: 33, label: 'Convert a Mixed Number to an Improper Fraction' },
        { id: 'f034', number: 34, label: 'Convert an Improper Fraction to a Mixed Number' },
        { id: 'f035', number: 35, label: 'Find a Missing Improper-Fraction Numerator' }
      ]
    },
    {
      id: 'addFractionsDetailed',
      practiceNumber: 5,
      label: 'Add Fractions',
      description: 'Add fractions with equal, related and unrelated denominators.',
      knowledgePoints: [
        { id: 'f036', number: 36, label: 'Add Fractions with the Same Denominator' },
        { id: 'f037', number: 37, label: 'Add Fractions with Related Denominators' },
        { id: 'f038', number: 38, label: 'Add Fractions with Unrelated Denominators' }
      ]
    },
    {
      id: 'subtractFractionsDetailed',
      practiceNumber: 6,
      label: 'Subtract Fractions',
      description: 'Subtract fractions with equal, related and unrelated denominators.',
      knowledgePoints: [
        { id: 'f039', number: 39, label: 'Subtract Fractions with the Same Denominator' },
        { id: 'f040', number: 40, label: 'Subtract Fractions with Related Denominators' },
        { id: 'f041', number: 41, label: 'Subtract Fractions with Unrelated Denominators' }
      ]
    },
    {
      id: 'multiplyFractionsDetailed',
      practiceNumber: 7,
      label: 'Multiply Fractions',
      description: 'Multiply fractions, whole numbers and fractions using simplification where useful.',
      knowledgePoints: [
        { id: 'f042', number: 42, label: 'Multiply Two Fractions' },
        { id: 'f043', number: 43, label: 'Multiply a Whole Number by a Fraction' },
        { id: 'f044', number: 44, label: 'Multiply Fractions Using Cross-Cancellation' }
      ]
    },
    {
      id: 'divideFractionsDetailed',
      practiceNumber: 8,
      label: 'Divide Fractions',
      description: 'Divide fractions and whole numbers using reciprocals.',
      knowledgePoints: [
        { id: 'f045', number: 45, label: 'Divide Two Fractions' },
        { id: 'f046', number: 46, label: 'Divide a Fraction by a Whole Number' },
        { id: 'f047', number: 47, label: 'Divide a Whole Number by a Fraction' }
      ]
    },
    {
      id: 'mixedAddSubtract',
      practiceNumber: 9,
      label: 'Add and Subtract Mixed Numbers',
      description: 'Add and subtract mixed numbers with and without regrouping.',
      knowledgePoints: [
        { id: 'f048', number: 48, label: 'Add Mixed Numbers with the Same Denominator' },
        { id: 'f049', number: 49, label: 'Subtract Mixed Numbers without Borrowing' },
        { id: 'f050', number: 50, label: 'Subtract Mixed Numbers with Borrowing' },
        { id: 'f051', number: 51, label: 'Add Mixed Numbers with Different Denominators' }
      ]
    },
    {
      id: 'mixedMultiplyDivide',
      practiceNumber: 10,
      label: 'Multiply and Divide Mixed Numbers',
      description: 'Convert mixed numbers to improper fractions before multiplying or dividing.',
      knowledgePoints: [
        { id: 'f052', number: 52, label: 'Multiply a Mixed Number by a Whole Number' },
        { id: 'f053', number: 53, label: 'Multiply a Mixed Number by a Fraction' },
        { id: 'f054', number: 54, label: 'Multiply Two Mixed Numbers' },
        { id: 'f055', number: 55, label: 'Divide a Mixed Number by a Whole Number' },
        { id: 'f056', number: 56, label: 'Divide a Mixed Number by a Fraction' },
        { id: 'f057', number: 57, label: 'Divide Two Mixed Numbers' }
      ]
    },
    {
      id: 'fractionPartWhole',
      practiceNumber: 11,
      label: 'Fraction of a Number and Finding the Whole',
      description: 'Find fractional parts and recover the original whole from a known part.',
      knowledgePoints: [
        { id: 'f058', number: 58, label: 'Find a Fraction of a Whole Number' },
        { id: 'f059', number: 59, label: 'Find a Unit Fraction of a Whole Number' },
        { id: 'f060', number: 60, label: 'Find the Whole from a Unit Fraction' },
        { id: 'f061', number: 61, label: 'Find the Whole from a Fractional Part' }
      ]
    },
    {
      id: 'wordPartWholeRemainingDetailed',
      practiceNumber: 12,
      label: 'Word Problems: Part, Whole and Remaining',
      description: 'Find fractional parts, original totals and remaining quantities in context.',
      knowledgePoints: [
        { id: 'f062', number: 62, label: 'Find a Fraction of a Group of Items' },
        { id: 'f063', number: 63, label: 'Find a Fraction of a Measurement' },
        { id: 'f064', number: 64, label: 'Find the Whole from a Known Fractional Part' },
        { id: 'f065', number: 65, label: 'Find Remaining Items after a Fraction Is Used' },
        { id: 'f066', number: 66, label: 'Find a Remaining Measurement after a Fraction Is Used' }
      ]
    },
    {
      id: 'wordCompareMultiStepDetailed',
      practiceNumber: 13,
      label: 'Word Problems: Compare and Multi-Step',
      description: 'Compare fractional amounts and use a changing remaining whole in later steps.',
      knowledgePoints: [
        { id: 'f067', number: 67, label: 'Compare Fractional Amounts from Different Wholes' },
        { id: 'f068', number: 68, label: 'Find a Second Group from the Remaining Amount' },
        { id: 'f069', number: 69, label: 'Find What Remains after Two Fractional Steps' }
      ]
    },
    {
      id: 'wordDivisionRelationships',
      practiceNumber: 14,
      label: 'Word Problems: Division and Relationships',
      description: 'Use fraction division and express relationships between parts and wholes.',
      knowledgePoints: [
        { id: 'f070', number: 70, label: 'Share a Fractional Amount Equally' },
        { id: 'f071', number: 71, label: 'Find the Number of Equal Fractional Groups' },
        { id: 'f072', number: 72, label: 'Express One Amount as a Fraction of Another' },
        { id: 'f073', number: 73, label: 'Find a Fraction of a Fraction' }
      ]
    },
    {
      id: 'wordCombinedReverseDetailed',
      practiceNumber: 15,
      label: 'Word Problems: Combined and Reverse',
      description: 'Combine several fractions of one whole and work backwards from a final remainder.',
      knowledgePoints: [
        { id: 'f074', number: 74, label: 'Find the Remainder after Several Parts of One Whole' },
        { id: 'f075', number: 75, label: 'Work Back from a Final Remainder' }
      ]
    }
  ],
  teacherNote: 'All 75 detailed fraction knowledge points are connected. Each point represents one specific question type rather than a broad mixed question bank.'
};

/* ===== KNOWLEDGE POINT 1: PARTS OF A FRACTION ===== */

function fractionTermAnswers(term) {
  return term === 'numerator'
    ? ['numerator', 'the numerator', 'top number', 'the top number']
    : ['denominator', 'the denominator', 'bottom number', 'the bottom number'];
}

function classificationAnswers(kind) {
  return kind === 'proper'
    ? ['proper', 'proper fraction', 'a proper fraction']
    : ['improper', 'improper fraction', 'an improper fraction'];
}

function partsQuestion(subtopic, text, answer, options = {}) {
  return {
    knowledgePoint: 'partsOfFraction',
    subtopic,
    text,
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: options.answerType ?? 'rational',
    hint: options.hint ?? ''
  };
}

function identifyNumeratorQuestion() {
  const denominator = randInt(3, 18);
  const numerator = randInt(1, denominator + 5);
  return partsQuestion(
    'Numerator and Denominator',
    `In ${fractionHtml(numerator, denominator)}, what is the numerator?`,
    numerator,
    { hint: 'The numerator is the top number.' }
  );
}

function identifyDenominatorQuestion() {
  const denominator = randInt(2, 18);
  const numerator = randInt(1, denominator + 5);
  return partsQuestion(
    'Numerator and Denominator',
    `In ${fractionHtml(numerator, denominator)}, what is the denominator?`,
    denominator,
    { hint: 'The denominator is the bottom number.' }
  );
}

function nameTopNumberQuestion() {
  const denominator = randInt(3, 16);
  const numerator = randInt(1, denominator + 4);
  return partsQuestion(
    'Fraction Vocabulary',
    `In ${fractionHtml(numerator, denominator)}, what is the top number called?`,
    'numerator',
    {
      displayAnswer: 'numerator',
      acceptedAnswers: fractionTermAnswers('numerator'),
      answerType: 'text',
      hint: 'The top number is the numerator.'
    }
  );
}

function nameBottomNumberQuestion() {
  const denominator = randInt(2, 16);
  const numerator = randInt(1, denominator + 4);
  return partsQuestion(
    'Fraction Vocabulary',
    `In ${fractionHtml(numerator, denominator)}, what is the bottom number called?`,
    'denominator',
    {
      displayAnswer: 'denominator',
      acceptedAnswers: fractionTermAnswers('denominator'),
      answerType: 'text',
      hint: 'The bottom number is the denominator.'
    }
  );
}

function numeratorMeaningQuestion() {
  const denominator = randInt(3, 16);
  const numerator = randInt(1, denominator - 1);
  return partsQuestion(
    'Meaning of the Numerator',
    `A whole is divided into ${denominator} equal parts and ${numerator} parts are selected. What is the numerator?`,
    numerator,
    { hint: 'The numerator tells how many parts are selected or taken.' }
  );
}

function denominatorMeaningQuestion() {
  const denominator = randInt(3, 18);
  const numerator = randInt(1, denominator - 1);
  return partsQuestion(
    'Meaning of the Denominator',
    `${numerator} parts are selected from a whole divided into ${denominator} equal parts. What is the denominator?`,
    denominator,
    { hint: 'The denominator tells how many equal parts make the whole.' }
  );
}

function equalPartsFromFractionQuestion() {
  const denominator = randInt(3, 20);
  const numerator = randInt(1, denominator - 1);
  return partsQuestion(
    'Meaning of the Denominator',
    `The fraction is ${fractionHtml(numerator, denominator)}. Into how many equal parts is the whole divided?`,
    denominator,
    { hint: 'Read the denominator, the bottom number.' }
  );
}

function selectedPartsFromFractionQuestion() {
  const denominator = randInt(3, 20);
  const numerator = randInt(1, denominator - 1);
  return partsQuestion(
    'Meaning of the Numerator',
    `The fraction is ${fractionHtml(numerator, denominator)}. How many equal parts are selected?`,
    numerator,
    { hint: 'Read the numerator, the top number.' }
  );
}

function writeFractionFromNamesQuestion() {
  const denominator = randInt(3, 18);
  const numerator = randInt(1, denominator + 4);
  const answer = `${numerator}/${denominator}`;
  return partsQuestion(
    'Writing a Fraction',
    `Write the fraction with numerator ${numerator} and denominator ${denominator}.`,
    answer,
    {
      displayAnswer: answer,
      acceptedAnswers: [answer],
      answerType: 'fraction-structure',
      hint: 'Put the numerator on top and the denominator on the bottom.'
    }
  );
}

function writeFractionFromPartsQuestion() {
  const denominator = randInt(3, 20);
  const numerator = randInt(1, denominator - 1);
  const answer = `${numerator}/${denominator}`;
  return partsQuestion(
    'Writing a Fraction',
    `A whole has ${denominator} equal parts and ${numerator} of them are selected. Write the fraction.`,
    answer,
    {
      displayAnswer: answer,
      acceptedAnswers: [answer],
      answerType: 'fraction-structure',
      hint: 'Selected parts go on top; total equal parts go on the bottom.'
    }
  );
}

function classifyFractionQuestion() {
  const denominator = randInt(2, 30);
  const isProper = chance(0.5);
  const numerator = isProper
    ? randInt(1, denominator - 1)
    : randInt(denominator, denominator + 14);
  const kind = isProper ? 'proper' : 'improper';
  return partsQuestion(
    'Proper and Improper Fractions',
    `Is ${fractionHtml(numerator, denominator)} a proper fraction or an improper fraction?`,
    kind,
    {
      displayAnswer: `${kind} fraction`,
      acceptedAnswers: classificationAnswers(kind),
      answerType: 'text',
      hint: isProper
        ? 'A proper fraction has a numerator smaller than its denominator.'
        : 'An improper fraction has a numerator greater than or equal to its denominator.'
    }
  );
}

function classifyEqualNumbersQuestion() {
  const number = randInt(2, 35);
  return partsQuestion(
    'Proper and Improper Fractions',
    `Is ${fractionHtml(number, number)} a proper fraction or an improper fraction?`,
    'improper',
    {
      displayAnswer: 'improper fraction',
      acceptedAnswers: classificationAnswers('improper'),
      answerType: 'text',
      hint: 'When the numerator equals the denominator, the fraction is improper.'
    }
  );
}

function greatestProperNumeratorQuestion() {
  const denominator = randInt(3, 40);
  return partsQuestion(
    'Proper Fraction Boundary',
    `What is the greatest whole-number numerator that makes ${fractionHtml('?', denominator)} a proper fraction?`,
    denominator - 1,
    { hint: 'For a proper fraction, the numerator must be smaller than the denominator.' }
  );
}

function smallestImproperNumeratorQuestion() {
  const denominator = randInt(2, 40);
  return partsQuestion(
    'Improper Fraction Boundary',
    `What is the smallest whole-number numerator that makes ${fractionHtml('?', denominator)} an improper fraction?`,
    denominator,
    { hint: 'An improper fraction begins when the numerator equals the denominator.' }
  );
}

function smallestProperDenominatorQuestion() {
  const numerator = randInt(2, 36);
  return partsQuestion(
    'Proper Fraction Boundary',
    `A fraction has numerator ${numerator}. What is the smallest whole-number denominator that makes it a proper fraction?`,
    numerator + 1,
    { hint: 'The denominator must be greater than the numerator.' }
  );
}

function greatestImproperDenominatorQuestion() {
  const numerator = randInt(2, 38);
  return partsQuestion(
    'Improper Fraction Boundary',
    `A fraction has numerator ${numerator}. What is the greatest positive whole-number denominator that still makes it an improper fraction?`,
    numerator,
    { hint: 'For an improper fraction, the numerator is greater than or equal to the denominator.' }
  );
}

function denominatorCannotBeZeroQuestion() {
  const numerator = randInt(1, 18);
  const otherValues = [randInt(1, 5), randInt(6, 10), randInt(11, 18)];
  const options = [0, ...otherValues].sort(() => Math.random() - 0.5).join(', ');
  return partsQuestion(
    'Valid Fractions',
    `For a fraction with numerator ${numerator}, which of these numbers cannot be the denominator: ${options}?`,
    0,
    { hint: 'A denominator can never be zero.' }
  );
}

function validOrInvalidQuestion() {
  const numerator = randInt(0, 18);
  const isValid = chance(0.55);
  const denominator = isValid ? randInt(1, 18) : 0;
  const answer = isValid ? 1 : 2;
  return partsQuestion(
    'Valid Fractions',
    `Is ${fractionHtml(numerator, denominator)} a valid fraction?<br><b>1 = valid &nbsp;&nbsp; 2 = invalid</b>`,
    answer,
    {
      displayAnswer: isValid ? '1 (valid)' : '2 (invalid)',
      hint: isValid
        ? 'The denominator is not zero, so the fraction is valid. Enter 1.'
        : 'A fraction with denominator zero is undefined and invalid. Enter 2.'
    }
  );
}

function zeroNumeratorQuestion() {
  const denominator = randInt(2, 40);
  return partsQuestion(
    'Valid Fractions',
    `Is ${fractionHtml(0, denominator)} a valid fraction?<br><b>1 = valid &nbsp;&nbsp; 2 = invalid</b>`,
    1,
    {
      displayAnswer: '1 (valid)',
      hint: 'A numerator may be zero. Only the denominator is forbidden from being zero. Enter 1.'
    }
  );
}

function correctNamingErrorQuestion() {
  const denominator = randInt(3, 18);
  const numerator = randInt(1, denominator + 4);
  const askDenominator = chance(0.5);
  if (askDenominator) {
    return partsQuestion(
      'Correcting Fraction Vocabulary',
      `A student says the denominator of ${fractionHtml(numerator, denominator)} is ${numerator}. What is the correct denominator?`,
      denominator,
      { hint: 'The denominator is the bottom number.' }
    );
  }
  return partsQuestion(
    'Correcting Fraction Vocabulary',
    `A student says the numerator of ${fractionHtml(numerator, denominator)} is ${denominator}. What is the correct numerator?`,
    numerator,
    { hint: 'The numerator is the top number.' }
  );
}

function relationRuleQuestion() {
  const askProper = chance(0.5);
  const denominator = randInt(3, 32);
  const numerator = askProper
    ? randInt(1, denominator - 1)
    : randInt(denominator, denominator + 12);
  const answer = askProper ? 'proper' : 'improper';
  const condition = askProper
    ? 'smaller than'
    : 'greater than or equal to';
  return partsQuestion(
    'Proper and Improper Fraction Rules',
    `In ${fractionHtml(numerator, denominator)}, the numerator is ${condition} the denominator. Complete the rule: the fraction is ______.`,
    answer,
    {
      displayAnswer: `${answer} fraction`,
      acceptedAnswers: classificationAnswers(answer),
      answerType: 'text',
      hint: askProper
        ? 'Numerator < denominator means proper.'
        : 'Numerator ≥ denominator means improper.'
    }
  );
}

function partsOfFractionGenerator() {
  const foundationQuestions = [
    identifyNumeratorQuestion,
    identifyDenominatorQuestion,
    nameTopNumberQuestion,
    nameBottomNumberQuestion,
    numeratorMeaningQuestion,
    denominatorMeaningQuestion,
    equalPartsFromFractionQuestion,
    selectedPartsFromFractionQuestion,
    writeFractionFromNamesQuestion,
    writeFractionFromPartsQuestion
  ];

  const coreQuestions = [
    identifyNumeratorQuestion,
    identifyDenominatorQuestion,
    numeratorMeaningQuestion,
    denominatorMeaningQuestion,
    writeFractionFromNamesQuestion,
    writeFractionFromPartsQuestion,
    classifyFractionQuestion,
    classifyEqualNumbersQuestion,
    greatestProperNumeratorQuestion,
    smallestImproperNumeratorQuestion,
    denominatorCannotBeZeroQuestion,
    validOrInvalidQuestion,
    zeroNumeratorQuestion,
    correctNamingErrorQuestion
  ];

  const challengeQuestions = [
    writeFractionFromNamesQuestion,
    classifyFractionQuestion,
    classifyEqualNumbersQuestion,
    greatestProperNumeratorQuestion,
    smallestImproperNumeratorQuestion,
    smallestProperDenominatorQuestion,
    greatestImproperDenominatorQuestion,
    denominatorCannotBeZeroQuestion,
    validOrInvalidQuestion,
    zeroNumeratorQuestion,
    correctNamingErrorQuestion,
    relationRuleQuestion
  ];

  const bank = state.level === 'foundation'
    ? foundationQuestions
    : state.level === 'challenge'
      ? challengeQuestions
      : coreQuestions;

  return pick(bank)();
}


/* ===== KNOWLEDGE POINT 2: EQUIVALENT FRACTIONS ===== */

function equivalentQuestion(subtopic, text, answer, options = {}) {
  return {
    knowledgePoint: 'equivalentFractions',
    subtopic,
    text,
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: options.answerType ?? 'rational',
    hint: options.hint ?? 'Multiply or divide the numerator and denominator by the same number.'
  };
}

function equivalentMissingNumeratorQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 10 : 15);
  const numerator = randInt(1, denominator - 1);
  const factor = randInt(2, state.level === 'challenge' ? 9 : 6);
  return equivalentQuestion(
    'Missing Numerator',
    `${fractionHtml(numerator, denominator)} = ${fractionHtml('?', denominator * factor)}. Find the missing numerator.`,
    numerator * factor
  );
}

function equivalentMissingDenominatorQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 10 : 15);
  const numerator = randInt(1, denominator - 1);
  const factor = randInt(2, state.level === 'challenge' ? 9 : 6);
  return equivalentQuestion(
    'Missing Denominator',
    `${fractionHtml(numerator, denominator)} = ${fractionHtml(numerator * factor, '?')}. Find the missing denominator.`,
    denominator * factor
  );
}

function equivalentScaleFactorQuestion() {
  const denominator = randInt(3, 12);
  const numerator = randInt(1, denominator - 1);
  const factor = randInt(2, state.level === 'challenge' ? 10 : 6);
  return equivalentQuestion(
    'Scale Factor',
    `${fractionHtml(numerator, denominator)} = ${fractionHtml(numerator * factor, denominator * factor)}. What number were both parts multiplied by?`,
    factor
  );
}

function equivalentCheckQuestion() {
  const denominator = randInt(3, 12);
  const numerator = randInt(1, denominator - 1);
  const factor = randInt(2, 7);
  const isEquivalent = chance(0.55);
  const secondNumerator = numerator * factor + (isEquivalent ? 0 : pick([-1, 1]));
  const secondDenominator = denominator * factor;
  const answer = isEquivalent ? 1 : 2;
  return equivalentQuestion(
    'Check Equivalent Fractions',
    `Are ${fractionHtml(numerator, denominator)} and ${fractionHtml(secondNumerator, secondDenominator)} equivalent?<br><b>1 = yes &nbsp;&nbsp; 2 = no</b>`,
    answer,
    {
      displayAnswer: isEquivalent ? '1 (yes)' : '2 (no)',
      hint: 'Equivalent fractions have the same value. Multiply both parts by the same number.'
    }
  );
}

function equivalentFractionsGenerator() {
  const foundation = [
    equivalentMissingNumeratorQuestion,
    equivalentMissingDenominatorQuestion,
    equivalentScaleFactorQuestion
  ];
  const core = [...foundation, equivalentCheckQuestion];
  const challenge = [
    equivalentMissingNumeratorQuestion,
    equivalentMissingDenominatorQuestion,
    equivalentScaleFactorQuestion,
    equivalentCheckQuestion
  ];
  return pick(state.level === 'foundation' ? foundation : state.level === 'challenge' ? challenge : core)();
}

/* ===== KNOWLEDGE POINT 3: SIMPLIFY FRACTIONS ===== */

function coprimeProperFraction(maxDenominator = 12) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const d = randInt(3, maxDenominator);
    const n = randInt(1, d - 1);
    if (gcd(n, d) === 1) return { n, d };
  }
  return { n: 1, d: 2 };
}

function simplifyQuestion(subtopic, text, answer, options = {}) {
  return {
    knowledgePoint: 'simplifyFractions',
    subtopic,
    text,
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? [String(answer)],
    answerType: options.answerType ?? 'fraction-structure',
    hint: options.hint ?? 'Divide the numerator and denominator by their greatest common factor.'
  };
}

function simplifyFractionQuestion() {
  const base = coprimeProperFraction(state.level === 'challenge' ? 16 : 12);
  const factor = randInt(2, state.level === 'foundation' ? 6 : 10);
  const answer = `${base.n}/${base.d}`;
  return simplifyQuestion(
    'Simplify to Lowest Terms',
    `Simplify ${fractionHtml(base.n * factor, base.d * factor)}.`,
    answer,
    { displayAnswer: answer }
  );
}

function simplifyMissingDivisorQuestion() {
  const base = coprimeProperFraction(12);
  const factor = randInt(2, state.level === 'challenge' ? 10 : 7);
  return simplifyQuestion(
    'Divide by the Common Factor',
    `${fractionHtml(base.n * factor, base.d * factor)} = ${fractionHtml(`${base.n * factor} ÷ ?`, `${base.d * factor} ÷ ?`)} = ${fractionHtml(base.n, base.d)}. What is the missing divisor?`,
    factor,
    {
      displayAnswer: String(factor),
      acceptedAnswers: null,
      answerType: 'rational',
      hint: 'The same common factor is used for the numerator and denominator.'
    }
  );
}

function greatestCommonFactorQuestion() {
  const base = coprimeProperFraction(12);
  const factor = randInt(2, state.level === 'challenge' ? 10 : 7);
  const numerator = base.n * factor;
  const denominator = base.d * factor;
  return simplifyQuestion(
    'Greatest Common Factor',
    `What is the greatest common factor of ${numerator} and ${denominator}?`,
    factor,
    {
      displayAnswer: String(factor),
      acceptedAnswers: null,
      answerType: 'rational',
      hint: 'Find the greatest number that divides both numbers exactly.'
    }
  );
}

function simplifyFractionsGenerator() {
  const bank = state.level === 'foundation'
    ? [simplifyFractionQuestion, simplifyMissingDivisorQuestion]
    : [simplifyFractionQuestion, simplifyMissingDivisorQuestion, greatestCommonFactorQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 6: COMPARE FRACTIONS ===== */

function compareQuestion(subtopic, leftN, leftD, rightN, rightD) {
  const leftValue = leftN / leftD;
  const rightValue = rightN / rightD;
  const symbol = Math.abs(leftValue - rightValue) < 1e-12 ? '=' : leftValue > rightValue ? '>' : '<';
  return {
    knowledgePoint: 'compareFractions',
    subtopic,
    text: `Compare ${fractionHtml(leftN, leftD)} and ${fractionHtml(rightN, rightD)}.<br><b>Type &gt;, &lt; or =</b>`,
    answer: symbol,
    displayAnswer: `${leftN}/${leftD} ${symbol} ${rightN}/${rightD}`,
    acceptedAnswers: [symbol],
    answerType: 'text',
    hint: 'For different denominators, compare the cross products.'
  };
}

function compareSameDenominatorQuestion() {
  const denominator = randInt(4, 15);
  let a = randInt(1, denominator - 1);
  let b = randInt(1, denominator - 1);
  while (b === a) b = randInt(1, denominator - 1);
  return compareQuestion('Same Denominator', a, denominator, b, denominator);
}

function compareSameNumeratorQuestion() {
  const numerator = randInt(1, 8);
  let d1 = randInt(numerator + 1, 15);
  let d2 = randInt(numerator + 1, 15);
  while (d2 === d1) d2 = randInt(numerator + 1, 15);
  return compareQuestion('Same Numerator', numerator, d1, numerator, d2);
}

function compareDifferentDenominatorsQuestion() {
  const maxDenominator = state.level === 'challenge' ? 16 : 12;
  let leftD, rightD, leftN, rightN;
  do {
    leftD = randInt(3, maxDenominator);
    rightD = randInt(3, maxDenominator);
    leftN = randInt(1, leftD - 1);
    rightN = randInt(1, rightD - 1);
  } while (leftD === rightD || Math.abs(leftN / leftD - rightN / rightD) < 1e-12);
  return compareQuestion('Different Denominators', leftN, leftD, rightN, rightD);
}

function compareEquivalentFractionsQuestion() {
  const base = coprimeProperFraction(10);
  const factor = randInt(2, 6);
  return compareQuestion('Equivalent Fractions', base.n, base.d, base.n * factor, base.d * factor);
}

function compareFractionsGenerator() {
  const foundation = [compareSameDenominatorQuestion, compareSameNumeratorQuestion];
  const core = [...foundation, compareDifferentDenominatorsQuestion, compareEquivalentFractionsQuestion];
  const challenge = [compareDifferentDenominatorsQuestion, compareEquivalentFractionsQuestion, compareSameNumeratorQuestion];
  return pick(state.level === 'foundation' ? foundation : state.level === 'challenge' ? challenge : core)();
}

/* ===== KNOWLEDGE POINT 9: MIXED NUMBERS AND IMPROPER FRACTIONS ===== */

function mixedConversionQuestion(subtopic, text, answer, options = {}) {
  return {
    knowledgePoint: 'mixedImproperConversion',
    subtopic,
    text,
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? [String(answer)],
    answerType: options.answerType ?? 'fraction-structure',
    hint: options.hint ?? ''
  };
}

function mixedToImproperQuestion() {
  const denominator = randInt(2, state.level === 'challenge' ? 12 : 9);
  const numerator = randInt(1, denominator - 1);
  const whole = randInt(1, state.level === 'foundation' ? 5 : 9);
  const improperNumerator = whole * denominator + numerator;
  const answer = `${improperNumerator}/${denominator}`;
  return mixedConversionQuestion(
    'Mixed Number to Improper Fraction',
    `Convert ${mixedHtml(whole, numerator, denominator)} to an improper fraction.`,
    answer,
    {
      displayAnswer: answer,
      hint: 'Multiply the whole number by the denominator, then add the numerator.'
    }
  );
}

function improperToMixedQuestion() {
  const denominator = randInt(2, state.level === 'challenge' ? 12 : 9);
  const numerator = randInt(1, denominator - 1);
  const whole = randInt(1, state.level === 'foundation' ? 5 : 9);
  const improperNumerator = whole * denominator + numerator;
  const answer = `${whole} ${numerator}/${denominator}`;
  return mixedConversionQuestion(
    'Improper Fraction to Mixed Number',
    `Convert ${fractionHtml(improperNumerator, denominator)} to a mixed number.`,
    answer,
    {
      displayAnswer: answer,
      acceptedAnswers: [answer],
      answerType: 'text',
      hint: 'Divide the numerator by the denominator. Use the quotient as the whole number and the remainder as the new numerator.'
    }
  );
}

function missingImproperNumeratorQuestion() {
  const denominator = randInt(2, 9);
  const numerator = randInt(1, denominator - 1);
  const whole = randInt(1, 7);
  const answer = whole * denominator + numerator;
  return mixedConversionQuestion(
    'Build the Improper Fraction',
    `${mixedHtml(whole, numerator, denominator)} = ${fractionHtml('?', denominator)}. Find the missing numerator.`,
    answer,
    {
      displayAnswer: String(answer),
      acceptedAnswers: null,
      answerType: 'rational',
      hint: 'Whole × denominator + numerator.'
    }
  );
}

function mixedImproperConversionGenerator() {
  const foundation = [mixedToImproperQuestion, improperToMixedQuestion];
  const core = [...foundation, missingImproperNumeratorQuestion];
  const challenge = [mixedToImproperQuestion, improperToMixedQuestion, missingImproperNumeratorQuestion];
  return pick(state.level === 'foundation' ? foundation : state.level === 'challenge' ? challenge : core)();
}


/* ===== SHARED HELPERS FOR FRACTION CALCULATIONS ===== */

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function fractionAnswer(numerator, denominator, preferMixed = false) {
  const simplified = simplifyFraction(numerator, denominator);
  const n = simplified.n;
  const d = simplified.d;

  if (d === 1) return String(n);

  if (preferMixed && Math.abs(n) > d) {
    const sign = n < 0 ? '-' : '';
    const absoluteNumerator = Math.abs(n);
    const whole = Math.floor(absoluteNumerator / d);
    const remainder = absoluteNumerator % d;
    return remainder === 0
      ? `${sign}${whole}`
      : `${sign}${whole} ${remainder}/${d}`;
  }

  return `${n}/${d}`;
}

function calculationQuestion({
  knowledgePoint,
  subtopic,
  text,
  numerator,
  denominator,
  preferMixed = false,
  hint = ''
}) {
  const answer = fractionAnswer(numerator, denominator, preferMixed);
  return {
    knowledgePoint,
    subtopic,
    text,
    answer,
    displayAnswer: answer,
    answerType: 'rational',
    hint
  };
}

function differentDenominators(maxDenominator = 12, requireUnrelated = false) {
  const choices = [2, 3, 4, 5, 6, 8, 9, 10, 12].filter(value => value <= maxDenominator);
  let d1 = pick(choices);
  let d2 = pick(choices);

  for (let attempt = 0; attempt < 50; attempt++) {
    d1 = pick(choices);
    d2 = pick(choices);
    if (d1 === d2) continue;
    if (requireUnrelated && (d1 % d2 === 0 || d2 % d1 === 0)) continue;
    return [d1, d2];
  }

  return [3, 4];
}


function simplestProperNumerators(denominator, minimum = 1, maximum = denominator - 1) {
  const values = [];
  const lower = Math.max(1, minimum);
  const upper = Math.min(denominator - 1, maximum);

  for (let numerator = lower; numerator <= upper; numerator++) {
    if (gcd(numerator, denominator) === 1) values.push(numerator);
  }

  return values;
}

function randomSimplestProperNumerator(denominator, minimum = 1, maximum = denominator - 1) {
  const values = simplestProperNumerators(denominator, minimum, maximum);
  if (values.length > 0) return pick(values);
  return 1;
}

function randomSimplestPair(denominator, condition = () => true) {
  const values = simplestProperNumerators(denominator);
  const pairs = [];

  for (const first of values) {
    for (const second of values) {
      if (condition(first, second)) pairs.push([first, second]);
    }
  }

  if (pairs.length > 0) return pick(pairs);
  return [values[0] || 1, values[0] || 1];
}

function formatFractionQuestionText(text, showMixedNumberInputNote = false) {
  const instruction = ' Give your answer in simplest form.';
  const outerStart = '<span style="display:inline-block;max-width:100%;">';
  const outerEnd = '</span>';
  const mixedNumberInputNote = showMixedNumberInputNote
    ? '<span style="display:block;margin-top:.28em;font-size:.62em;line-height:1.25;">For a mixed number, type one space between the whole number and the fraction, e.g. 2 1/3.</span>'
    : '';

  if (text.includes(instruction)) {
    const calculation = text.replace(instruction, '');
    return `${outerStart}<span style="display:block;white-space:nowrap;">${calculation}</span><span style="display:block;margin-top:.35em;font-size:.72em;line-height:1.25;">Give your answer in simplest form.</span>${mixedNumberInputNote}${outerEnd}`;
  }

  return `${outerStart}${text}${mixedNumberInputNote}${outerEnd}`;
}

function formattedFractionGenerator(generator) {
  return function generateFormattedFractionQuestion() {
    const question = generator();
    const answerText = String(question.displayAnswer ?? question.answer ?? '').trim();
    const answerIsMixedNumber = /^-?\d+\s+\d+\/\d+$/.test(answerText);
    question.text = formatFractionQuestionText(question.text, answerIsMixedNumber);
    return question;
  };
}

/* ===== KNOWLEDGE POINT 4: ADD FRACTIONS ===== */

function addSameDenominatorQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 10 : 14);
  const keepProper = state.level === 'foundation' || chance(0.55);
  const [a, b] = randomSimplestPair(
    denominator,
    (first, second) => !keepProper || first + second < denominator
  );

  return calculationQuestion({
    knowledgePoint: 'addFractions',
    subtopic: 'Same Denominator',
    text: `Calculate ${fractionHtml(a, denominator)} + ${fractionHtml(b, denominator)}. Give your answer in simplest form.`,
    numerator: a + b,
    denominator,
    preferMixed: a + b > denominator,
    hint: 'Keep the denominator and add the numerators. Then simplify.'
  });
}

function addRelatedDenominatorsQuestion() {
  const smallDenominator = randInt(2, state.level === 'foundation' ? 6 : 9);
  const factor = randInt(2, state.level === 'challenge' ? 5 : 4);
  const largeDenominator = smallDenominator * factor;
  const a = randomSimplestProperNumerator(smallDenominator);
  const b = randomSimplestProperNumerator(largeDenominator);
  const commonNumerator = a * factor + b;

  return calculationQuestion({
    knowledgePoint: 'addFractions',
    subtopic: 'Different Denominators',
    text: `Calculate ${fractionHtml(a, smallDenominator)} + ${fractionHtml(b, largeDenominator)}. Give your answer in simplest form.`,
    numerator: commonNumerator,
    denominator: largeDenominator,
    preferMixed: commonNumerator > largeDenominator,
    hint: 'Rewrite both fractions with the same denominator, then add.'
  });
}

function addUnrelatedDenominatorsQuestion() {
  const [d1, d2] = differentDenominators(state.level === 'challenge' ? 12 : 10, true);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);
  const commonDenominator = lcm(d1, d2);
  const numerator = n1 * (commonDenominator / d1) + n2 * (commonDenominator / d2);

  return calculationQuestion({
    knowledgePoint: 'addFractions',
    subtopic: 'Different Denominators',
    text: `Calculate ${fractionHtml(n1, d1)} + ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator,
    denominator: commonDenominator,
    preferMixed: numerator > commonDenominator,
    hint: 'Find a common denominator before adding.'
  });
}

function addFractionsGenerator() {
  const bank = state.level === 'foundation'
    ? [addSameDenominatorQuestion, addRelatedDenominatorsQuestion]
    : state.level === 'challenge'
      ? [addRelatedDenominatorsQuestion, addUnrelatedDenominatorsQuestion, addSameDenominatorQuestion]
      : [addSameDenominatorQuestion, addRelatedDenominatorsQuestion, addUnrelatedDenominatorsQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 5: SUBTRACT FRACTIONS ===== */

function subtractSameDenominatorQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 10 : 15);
  const [smaller, larger] = randomSimplestPair(
    denominator,
    (first, second) => second > first
  );

  return calculationQuestion({
    knowledgePoint: 'subtractFractions',
    subtopic: 'Same Denominator',
    text: `Calculate ${fractionHtml(larger, denominator)} − ${fractionHtml(smaller, denominator)}. Give your answer in simplest form.`,
    numerator: larger - smaller,
    denominator,
    hint: 'Keep the denominator and subtract the numerators. Then simplify.'
  });
}

function subtractRelatedDenominatorsQuestion() {
  const smallDenominator = randInt(2, state.level === 'foundation' ? 6 : 9);
  const factor = randInt(2, state.level === 'challenge' ? 5 : 4);
  const largeDenominator = smallDenominator * factor;
  const n1 = randomSimplestProperNumerator(smallDenominator);
  const n2 = randomSimplestProperNumerator(largeDenominator, 1, n1 * factor - 1);

  return calculationQuestion({
    knowledgePoint: 'subtractFractions',
    subtopic: 'Different Denominators',
    text: `Calculate ${fractionHtml(n1, smallDenominator)} − ${fractionHtml(n2, largeDenominator)}. Give your answer in simplest form.`,
    numerator: n1 * factor - n2,
    denominator: largeDenominator,
    hint: 'Rewrite both fractions with the same denominator, then subtract.'
  });
}

function subtractUnrelatedDenominatorsQuestion() {
  const [d1, d2] = differentDenominators(state.level === 'challenge' ? 12 : 10, true);
  let n1 = randomSimplestProperNumerator(d1);
  let n2 = randomSimplestProperNumerator(d2);
  let leftD = d1;
  let rightD = d2;

  if (n1 * rightD < n2 * leftD) {
    [n1, n2] = [n2, n1];
    [leftD, rightD] = [rightD, leftD];
  }

  return subtractUnrelatedDenominatorsQuestionFromValues(n1, leftD, n2, rightD);
}

function subtractUnrelatedDenominatorsQuestionFromValues(n1, d1, n2, d2) {
  const commonDenominator = lcm(d1, d2);
  const numerator = n1 * (commonDenominator / d1) - n2 * (commonDenominator / d2);

  if (numerator <= 0) return subtractUnrelatedDenominatorsQuestion();

  return calculationQuestion({
    knowledgePoint: 'subtractFractions',
    subtopic: 'Different Denominators',
    text: `Calculate ${fractionHtml(n1, d1)} − ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator,
    denominator: commonDenominator,
    hint: 'Find a common denominator before subtracting.'
  });
}

function subtractFractionsGenerator() {
  const bank = state.level === 'foundation'
    ? [subtractSameDenominatorQuestion, subtractRelatedDenominatorsQuestion]
    : state.level === 'challenge'
      ? [subtractRelatedDenominatorsQuestion, subtractUnrelatedDenominatorsQuestion, subtractSameDenominatorQuestion]
      : [subtractSameDenominatorQuestion, subtractRelatedDenominatorsQuestion, subtractUnrelatedDenominatorsQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 7: MULTIPLY FRACTIONS ===== */

function multiplyTwoFractionsQuestion() {
  const max = state.level === 'foundation' ? 8 : state.level === 'challenge' ? 14 : 10;
  const d1 = randInt(2, max);
  const d2 = randInt(2, max);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);

  return calculationQuestion({
    knowledgePoint: 'multiplyFractions',
    subtopic: 'Fraction × Fraction',
    text: `Calculate ${fractionHtml(n1, d1)} × ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator: n1 * n2,
    denominator: d1 * d2,
    hint: 'Multiply the numerators and multiply the denominators. Then simplify.'
  });
}

function multiplyWholeByFractionQuestion() {
  const denominator = randInt(2, state.level === 'challenge' ? 12 : 9);
  const numerator = randomSimplestProperNumerator(denominator);
  const whole = randInt(2, state.level === 'foundation' ? 6 : 10);

  return calculationQuestion({
    knowledgePoint: 'multiplyFractions',
    subtopic: 'Whole Number × Fraction',
    text: `Calculate ${whole} × ${fractionHtml(numerator, denominator)}. Give your answer in simplest form.`,
    numerator: whole * numerator,
    denominator,
    preferMixed: whole * numerator > denominator,
    hint: `Write ${whole} as ${whole}/1, then multiply.`
  });
}

function multiplyCrossCancelQuestion() {
  const max = state.level === 'challenge' ? 14 : 10;
  let leftNumerator = 2;
  let leftDenominator = 3;
  let rightNumerator = 3;
  let rightDenominator = 4;

  for (let attempt = 0; attempt < 80; attempt++) {
    const d1 = randInt(3, max);
    const d2 = randInt(3, max);
    const n1 = randomSimplestProperNumerator(d1);
    const n2 = randomSimplestProperNumerator(d2);

    if (gcd(n1, d2) > 1 || gcd(n2, d1) > 1) {
      leftNumerator = n1;
      leftDenominator = d1;
      rightNumerator = n2;
      rightDenominator = d2;
      break;
    }
  }

  return calculationQuestion({
    knowledgePoint: 'multiplyFractions',
    subtopic: 'Simplify Before Multiplying',
    text: `Calculate ${fractionHtml(leftNumerator, leftDenominator)} × ${fractionHtml(rightNumerator, rightDenominator)}. Give your answer in simplest form.`,
    numerator: leftNumerator * rightNumerator,
    denominator: leftDenominator * rightDenominator,
    preferMixed: leftNumerator * rightNumerator > leftDenominator * rightDenominator,
    hint: 'Cancel common factors before multiplying to keep the numbers small.'
  });
}

function multiplyFractionsGenerator() {
  const bank = state.level === 'foundation'
    ? [multiplyTwoFractionsQuestion, multiplyWholeByFractionQuestion]
    : state.level === 'challenge'
      ? [multiplyTwoFractionsQuestion, multiplyWholeByFractionQuestion, multiplyCrossCancelQuestion]
      : [multiplyTwoFractionsQuestion, multiplyWholeByFractionQuestion, multiplyCrossCancelQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 8: DIVIDE FRACTIONS ===== */

function divideTwoFractionsQuestion() {
  const max = state.level === 'foundation' ? 8 : state.level === 'challenge' ? 12 : 10;
  const d1 = randInt(2, max);
  const d2 = randInt(2, max);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);

  return calculationQuestion({
    knowledgePoint: 'divideFractions',
    subtopic: 'Fraction ÷ Fraction',
    text: `Calculate ${fractionHtml(n1, d1)} ÷ ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator: n1 * d2,
    denominator: d1 * n2,
    preferMixed: n1 * d2 > d1 * n2,
    hint: 'Keep the first fraction, change ÷ to ×, and flip the second fraction.'
  });
}

function divideFractionByWholeQuestion() {
  const denominator = randInt(2, state.level === 'challenge' ? 12 : 9);
  const numerator = randomSimplestProperNumerator(denominator);
  const whole = randInt(2, state.level === 'foundation' ? 6 : 9);

  return calculationQuestion({
    knowledgePoint: 'divideFractions',
    subtopic: 'Fraction ÷ Whole Number',
    text: `Calculate ${fractionHtml(numerator, denominator)} ÷ ${whole}. Give your answer in simplest form.`,
    numerator,
    denominator: denominator * whole,
    hint: `Write ${whole} as ${whole}/1, then multiply by its reciprocal.`
  });
}

function divideWholeByFractionQuestion() {
  const denominator = randInt(2, state.level === 'challenge' ? 10 : 8);
  const numerator = randomSimplestProperNumerator(denominator);
  const whole = randInt(1, state.level === 'challenge' ? 8 : 6);

  return calculationQuestion({
    knowledgePoint: 'divideFractions',
    subtopic: 'Whole Number ÷ Fraction',
    text: `Calculate ${whole} ÷ ${fractionHtml(numerator, denominator)}. Give your answer in simplest form.`,
    numerator: whole * denominator,
    denominator: numerator,
    preferMixed: true,
    hint: `Write ${whole} as ${whole}/1, then multiply by the reciprocal.`
  });
}

function divideFractionsGenerator() {
  const bank = state.level === 'foundation'
    ? [divideTwoFractionsQuestion, divideFractionByWholeQuestion]
    : state.level === 'challenge'
      ? [divideTwoFractionsQuestion, divideFractionByWholeQuestion, divideWholeByFractionQuestion]
      : [divideTwoFractionsQuestion, divideFractionByWholeQuestion, divideWholeByFractionQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 10: ADD / SUBTRACT MIXED NUMBERS ===== */

function mixedValue(whole, numerator, denominator) {
  return { n: whole * denominator + numerator, d: denominator };
}

function addMixedSameDenominatorQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 8 : 10);
  const w1 = randInt(1, 6);
  const w2 = randInt(1, 6);
  const [n1, n2] = randomSimplestPair(denominator);
  const left = mixedValue(w1, n1, denominator);
  const right = mixedValue(w2, n2, denominator);

  return calculationQuestion({
    knowledgePoint: 'addSubtractMixedNumbers',
    subtopic: 'Add Mixed Numbers',
    text: `Calculate ${mixedHtml(w1, n1, denominator)} + ${mixedHtml(w2, n2, denominator)}. Give your answer in simplest form.`,
    numerator: left.n + right.n,
    denominator,
    preferMixed: true,
    hint: 'Add the whole numbers and fractions. Regroup if the fractional part is improper.'
  });
}

function subtractMixedNoBorrowQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 8 : 10);
  const w2 = randInt(1, 5);
  const w1 = randInt(w2 + 1, w2 + 6);
  const [n2, n1] = randomSimplestPair(denominator, (first, second) => second > first);
  const left = mixedValue(w1, n1, denominator);
  const right = mixedValue(w2, n2, denominator);

  return calculationQuestion({
    knowledgePoint: 'addSubtractMixedNumbers',
    subtopic: 'Subtract Without Borrowing',
    text: `Calculate ${mixedHtml(w1, n1, denominator)} − ${mixedHtml(w2, n2, denominator)}. Give your answer in simplest form.`,
    numerator: left.n - right.n,
    denominator,
    preferMixed: true,
    hint: 'Subtract the whole numbers and fractions separately.'
  });
}

function subtractMixedWithBorrowingQuestion() {
  const denominator = randInt(3, state.level === 'challenge' ? 12 : 9);
  const w2 = randInt(1, 5);
  const w1 = randInt(w2 + 1, w2 + 6);
  const [n1, n2] = randomSimplestPair(denominator, (first, second) => second > first);
  const left = mixedValue(w1, n1, denominator);
  const right = mixedValue(w2, n2, denominator);

  return calculationQuestion({
    knowledgePoint: 'addSubtractMixedNumbers',
    subtopic: 'Subtract With Borrowing',
    text: `Calculate ${mixedHtml(w1, n1, denominator)} − ${mixedHtml(w2, n2, denominator)}. Give your answer in simplest form.`,
    numerator: left.n - right.n,
    denominator,
    preferMixed: true,
    hint: `Rename 1 whole as ${denominator}/${denominator}, then subtract.`
  });
}

function addMixedDifferentDenominatorsQuestion() {
  const [d1, d2] = differentDenominators(state.level === 'challenge' ? 12 : 10, false);
  const w1 = randInt(1, 5);
  const w2 = randInt(1, 5);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);
  const commonDenominator = lcm(d1, d2);
  const numerator = (w1 + w2) * commonDenominator
    + n1 * (commonDenominator / d1)
    + n2 * (commonDenominator / d2);

  return calculationQuestion({
    knowledgePoint: 'addSubtractMixedNumbers',
    subtopic: 'Different Denominators',
    text: `Calculate ${mixedHtml(w1, n1, d1)} + ${mixedHtml(w2, n2, d2)}. Give your answer in simplest form.`,
    numerator,
    denominator: commonDenominator,
    preferMixed: true,
    hint: 'Use a common denominator for the fractional parts, then add.'
  });
}

function addSubtractMixedNumbersGenerator() {
  const bank = state.level === 'foundation'
    ? [addMixedSameDenominatorQuestion, subtractMixedNoBorrowQuestion]
    : state.level === 'challenge'
      ? [subtractMixedWithBorrowingQuestion, addMixedDifferentDenominatorsQuestion, addMixedSameDenominatorQuestion]
      : [addMixedSameDenominatorQuestion, subtractMixedNoBorrowQuestion, subtractMixedWithBorrowingQuestion, addMixedDifferentDenominatorsQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 11: MULTIPLY MIXED NUMBERS ===== */

function multiplyMixedByWholeQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 7 : 10);
  const numerator = randomSimplestProperNumerator(denominator);
  const wholePart = randInt(1, 5);
  const multiplier = randInt(2, state.level === 'foundation' ? 5 : 8);
  const mixed = mixedValue(wholePart, numerator, denominator);

  return calculationQuestion({
    knowledgePoint: 'multiplyMixedNumbers',
    subtopic: 'Mixed Number × Whole Number',
    text: `Calculate ${mixedHtml(wholePart, numerator, denominator)} × ${multiplier}. Give your answer in simplest form.`,
    numerator: mixed.n * multiplier,
    denominator,
    preferMixed: true,
    hint: 'Convert the mixed number to an improper fraction before multiplying.'
  });
}

function multiplyMixedByFractionQuestion() {
  const d1 = randInt(2, state.level === 'challenge' ? 10 : 8);
  const n1 = randomSimplestProperNumerator(d1);
  const w1 = randInt(1, 5);
  const d2 = randInt(2, state.level === 'challenge' ? 10 : 8);
  const n2 = randomSimplestProperNumerator(d2);
  const mixed = mixedValue(w1, n1, d1);

  return calculationQuestion({
    knowledgePoint: 'multiplyMixedNumbers',
    subtopic: 'Mixed Number × Fraction',
    text: `Calculate ${mixedHtml(w1, n1, d1)} × ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator: mixed.n * n2,
    denominator: d1 * d2,
    preferMixed: true,
    hint: 'Convert the mixed number to an improper fraction, then multiply and simplify.'
  });
}

function multiplyTwoMixedNumbersQuestion() {
  const d1 = randInt(2, state.level === 'challenge' ? 9 : 7);
  const d2 = randInt(2, state.level === 'challenge' ? 9 : 7);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);
  const w1 = randInt(1, 4);
  const w2 = randInt(1, 4);
  const left = mixedValue(w1, n1, d1);
  const right = mixedValue(w2, n2, d2);

  return calculationQuestion({
    knowledgePoint: 'multiplyMixedNumbers',
    subtopic: 'Mixed Number × Mixed Number',
    text: `Calculate ${mixedHtml(w1, n1, d1)} × ${mixedHtml(w2, n2, d2)}. Give your answer in simplest form.`,
    numerator: left.n * right.n,
    denominator: d1 * d2,
    preferMixed: true,
    hint: 'Convert both mixed numbers to improper fractions before multiplying.'
  });
}

function multiplyMixedNumbersGenerator() {
  const bank = state.level === 'foundation'
    ? [multiplyMixedByWholeQuestion, multiplyMixedByFractionQuestion]
    : state.level === 'challenge'
      ? [multiplyMixedByFractionQuestion, multiplyTwoMixedNumbersQuestion]
      : [multiplyMixedByWholeQuestion, multiplyMixedByFractionQuestion, multiplyTwoMixedNumbersQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 12: DIVIDE MIXED NUMBERS ===== */

function divideMixedByWholeQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 8 : 10);
  const numerator = randomSimplestProperNumerator(denominator);
  const wholePart = randInt(1, 6);
  const divisor = randInt(2, state.level === 'foundation' ? 5 : 8);
  const mixed = mixedValue(wholePart, numerator, denominator);

  return calculationQuestion({
    knowledgePoint: 'divideMixedNumbers',
    subtopic: 'Mixed Number ÷ Whole Number',
    text: `Calculate ${mixedHtml(wholePart, numerator, denominator)} ÷ ${divisor}. Give your answer in simplest form.`,
    numerator: mixed.n,
    denominator: denominator * divisor,
    preferMixed: true,
    hint: 'Convert the mixed number to an improper fraction, then multiply by the reciprocal.'
  });
}

function divideMixedByFractionQuestion() {
  const d1 = randInt(2, state.level === 'challenge' ? 10 : 8);
  const n1 = randomSimplestProperNumerator(d1);
  const w1 = randInt(1, 5);
  const d2 = randInt(2, state.level === 'challenge' ? 10 : 8);
  const n2 = randomSimplestProperNumerator(d2);
  const mixed = mixedValue(w1, n1, d1);

  return calculationQuestion({
    knowledgePoint: 'divideMixedNumbers',
    subtopic: 'Mixed Number ÷ Fraction',
    text: `Calculate ${mixedHtml(w1, n1, d1)} ÷ ${fractionHtml(n2, d2)}. Give your answer in simplest form.`,
    numerator: mixed.n * d2,
    denominator: d1 * n2,
    preferMixed: true,
    hint: 'Convert the mixed number to an improper fraction, then multiply by the reciprocal.'
  });
}

function divideTwoMixedNumbersQuestion() {
  const d1 = randInt(2, state.level === 'challenge' ? 9 : 7);
  const d2 = randInt(2, state.level === 'challenge' ? 9 : 7);
  const n1 = randomSimplestProperNumerator(d1);
  const n2 = randomSimplestProperNumerator(d2);
  const w1 = randInt(2, 5);
  const w2 = randInt(1, Math.min(w1, 4));
  const left = mixedValue(w1, n1, d1);
  const right = mixedValue(w2, n2, d2);

  return calculationQuestion({
    knowledgePoint: 'divideMixedNumbers',
    subtopic: 'Mixed Number ÷ Mixed Number',
    text: `Calculate ${mixedHtml(w1, n1, d1)} ÷ ${mixedHtml(w2, n2, d2)}. Give your answer in simplest form.`,
    numerator: left.n * d2,
    denominator: d1 * right.n,
    preferMixed: true,
    hint: 'Convert both mixed numbers to improper fractions. Then keep, change and flip.'
  });
}

function divideMixedNumbersGenerator() {
  const bank = state.level === 'foundation'
    ? [divideMixedByWholeQuestion, divideMixedByFractionQuestion]
    : state.level === 'challenge'
      ? [divideMixedByFractionQuestion, divideTwoMixedNumbersQuestion]
      : [divideMixedByWholeQuestion, divideMixedByFractionQuestion, divideTwoMixedNumbersQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 13: FIND A FRACTION OF A NUMBER ===== */

function fractionOfNumberQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 10 : 12);
  const numerator = randomSimplestProperNumerator(denominator);
  const groups = randInt(2, state.level === 'challenge' ? 15 : 10);
  const whole = denominator * groups;
  const answer = numerator * groups;

  return {
    knowledgePoint: 'fractionOfNumber',
    subtopic: 'Fraction of a Whole Number',
    text: `Find ${fractionHtml(numerator, denominator)} of ${whole}.`,
    answer,
    displayAnswer: String(answer),
    answerType: 'rational',
    hint: `Divide ${whole} by ${denominator}, then multiply by ${numerator}.`
  };
}

function unitFractionOfNumberQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 12 : 15);
  const answer = randInt(2, state.level === 'challenge' ? 18 : 12);
  const whole = denominator * answer;

  return {
    knowledgePoint: 'fractionOfNumber',
    subtopic: 'Unit Fraction of a Number',
    text: `Find ${fractionHtml(1, denominator)} of ${whole}.`,
    answer,
    displayAnswer: String(answer),
    answerType: 'rational',
    hint: `Divide ${whole} by ${denominator}.`
  };
}

function fractionOfNumberGenerator() {
  const bank = state.level === 'foundation'
    ? [unitFractionOfNumberQuestion, fractionOfNumberQuestion]
    : [fractionOfNumberQuestion, unitFractionOfNumberQuestion];
  return pick(bank)();
}

/* ===== KNOWLEDGE POINT 14: FIND THE WHOLE FROM A FRACTIONAL PART ===== */

function findWholeFromUnitFractionQuestion() {
  const denominator = randInt(2, state.level === 'foundation' ? 10 : 14);
  const part = randInt(2, state.level === 'challenge' ? 18 : 12);
  const whole = denominator * part;

  return {
    knowledgePoint: 'findWholeFromPart',
    subtopic: 'Find the Whole from a Unit Fraction',
    text: `${fractionHtml(1, denominator)} of a number is ${part}. Find the whole number.`,
    answer: whole,
    displayAnswer: String(whole),
    answerType: 'rational',
    hint: `If one ${denominator}th is ${part}, multiply ${part} by ${denominator}.`
  };
}

function findWholeFromPartQuestion() {
  const denominator = randInt(3, state.level === 'foundation' ? 9 : 12);
  const numerator = randomSimplestProperNumerator(denominator, 2);
  const groupValue = randInt(2, state.level === 'challenge' ? 15 : 10);
  const part = numerator * groupValue;
  const whole = denominator * groupValue;

  return {
    knowledgePoint: 'findWholeFromPart',
    subtopic: 'Find the Whole from a Fractional Part',
    text: `${fractionHtml(numerator, denominator)} of a number is ${part}. Find the whole number.`,
    answer: whole,
    displayAnswer: String(whole),
    answerType: 'rational',
    hint: `First divide ${part} by ${numerator} to find one part. Then multiply by ${denominator}.`
  };
}

function findWholeFromPartGenerator() {
  const bank = state.level === 'foundation'
    ? [findWholeFromUnitFractionQuestion, findWholeFromPartQuestion]
    : [findWholeFromPartQuestion, findWholeFromUnitFractionQuestion];
  return pick(bank)();
}


/* ===== FRACTION WORD PROBLEMS: KNOWLEDGE POINTS 2–14 ===== */

function wordProblemText(text) {
  return `<span style="display:block;max-width:1100px;font-size:.62em;line-height:1.42;">${text}</span>`;
}

function positiveRationalHtml(numerator, denominator, preferMixed = true) {
  const simplified = simplifyFraction(numerator, denominator);
  const n = simplified.n;
  const d = simplified.d;

  if (d === 1) return String(n);
  if (preferMixed && n > d) {
    const whole = Math.floor(n / d);
    const remainder = n % d;
    return remainder === 0 ? String(whole) : mixedHtml(whole, remainder, d);
  }
  return fractionHtml(n, d);
}

function wordProblemQuestion({
  knowledgePoint,
  subtopic,
  text,
  answer,
  displayAnswer = null,
  unit = '',
  hint = ''
}) {
  const answerText = String(answer);
  const shown = displayAnswer ?? (unit ? `${answerText} ${unit}` : answerText);
  return {
    knowledgePoint,
    subtopic,
    text: wordProblemText(text),
    answer,
    displayAnswer: shown,
    answerType: 'rational',
    hint
  };
}

function wordProblemFractionPool() {
  const foundation = [
    [1, 2], [1, 3], [2, 3], [1, 4], [3, 4],
    [1, 5], [2, 5], [3, 5], [4, 5]
  ];
  const core = foundation.concat([
    [1, 6], [5, 6], [1, 8], [3, 8], [5, 8], [7, 8]
  ]);
  const challenge = core.concat([
    [2, 7], [3, 7], [4, 7], [5, 7], [2, 9], [4, 9], [5, 9], [7, 10]
  ]);
  return state.level === 'foundation' ? foundation : state.level === 'challenge' ? challenge : core;
}

function wordProblemDenominators() {
  return [...new Set(wordProblemFractionPool().map(([, denominator]) => denominator))];
}

function wordProblemProperFraction(allowUnit = true) {
  const pool = wordProblemFractionPool().filter(([numerator]) => allowUnit || numerator > 1);
  const [numerator, denominator] = pick(pool.length ? pool : wordProblemFractionPool());
  return { n: numerator, d: denominator };
}

function wordProblemStepFraction() {
  const pool = wordProblemFractionPool().filter(([numerator, denominator]) => {
    if (state.level === 'challenge') return true;
    const maximumDenominator = state.level === 'foundation' ? 5 : 8;
    return denominator <= maximumDenominator && numerator / denominator <= 0.75;
  });
  const [numerator, denominator] = pick(pool.length ? pool : [[1, 2], [1, 3], [1, 4]]);
  return { n: numerator, d: denominator };
}

/* Knowledge Point 2: Find a Fraction of an Amount */

function wordFractionOfAmountItemsQuestion() {
  const fraction = wordProblemProperFraction(true);
  const groups = randInt(3, state.level === 'challenge' ? 16 : 12);
  const whole = fraction.d * groups;
  const answer = fraction.n * groups;
  const context = pick([
    { place: 'A library', noun: 'new books', selected: 'fiction books' },
    { place: 'A class', noun: 'students', selected: 'students who brought lunch' },
    { place: 'A shop', noun: 'notebooks', selected: 'blue notebooks' },
    { place: 'A garden', noun: 'flowers', selected: 'red flowers' },
    { place: 'A box', noun: 'beads', selected: 'green beads' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFractionOfAmount',
    subtopic: 'Find a Fraction of an Amount',
    text: `${context.place} has ${whole} ${context.noun}. ${fractionHtml(fraction.n, fraction.d)} of them are ${context.selected}. How many ${context.selected} are there?`,
    answer,
    unit: context.selected,
    hint: `Divide ${whole} by ${fraction.d}, then multiply by ${fraction.n}.`
  });
}

function wordFractionOfAmountMeasureQuestion() {
  const fraction = wordProblemProperFraction(true);
  const groups = randInt(3, state.level === 'challenge' ? 18 : 12);
  const whole = fraction.d * groups;
  const answer = fraction.n * groups;
  const fractionText = fractionHtml(fraction.n, fraction.d);
  const context = pick([
    {
      text: `A ribbon is ${whole} cm long. ${fractionText} of it is coloured blue. How many centimetres are coloured blue?`,
      unit: 'cm'
    },
    {
      text: `A walking track is ${whole} m long. ${fractionText} of it is uphill. How many metres are uphill?`,
      unit: 'm'
    },
    {
      text: `A tank holds ${whole} L when full. It is ${fractionText} full. How many litres of water are in the tank?`,
      unit: 'L'
    }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFractionOfAmount',
    subtopic: 'Find a Fraction of an Amount',
    text: context.text,
    answer,
    unit: context.unit,
    hint: `Find one ${fraction.d}th first, then multiply by ${fraction.n}.`
  });
}

function wordFractionOfAmountGenerator() {
  return pick([wordFractionOfAmountItemsQuestion, wordFractionOfAmountMeasureQuestion])();
}

/* Knowledge Point 3: Find the Whole from a Part */

function wordFindWholeFromPartQuestion() {
  const fraction = wordProblemProperFraction(state.level === 'foundation');
  const onePart = randInt(3, state.level === 'challenge' ? 18 : 12);
  const knownPart = fraction.n * onePart;
  const whole = fraction.d * onePart;
  const context = pick([
    {
      text: `In a class, ${knownPart} students walk to school. This is ${fractionHtml(fraction.n, fraction.d)} of the class. How many students are in the class altogether?`,
      unit: 'students'
    },
    {
      text: `A bag contains ${knownPart} red marbles. These make up ${fractionHtml(fraction.n, fraction.d)} of all the marbles. How many marbles are in the bag altogether?`,
      unit: 'marbles'
    },
    {
      text: `A shelf has ${knownPart} fiction books. These make up ${fractionHtml(fraction.n, fraction.d)} of all the books. How many books are on the shelf altogether?`,
      unit: 'books'
    },
    {
      text: `In a club, ${knownPart} members chose tennis. This is ${fractionHtml(fraction.n, fraction.d)} of the club. How many members are in the club altogether?`,
      unit: 'members'
    }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFindWholeFromPart',
    subtopic: 'Find the Whole from a Part',
    text: context.text,
    answer: whole,
    unit: context.unit,
    hint: `Divide ${knownPart} by ${fraction.n} to find one equal part, then multiply by ${fraction.d}.`
  });
}

function wordFindWholeFromPartGenerator() {
  return wordFindWholeFromPartQuestion();
}

/* Knowledge Point 4: Find What Remains */

function wordFindRemainingItemsQuestion() {
  const used = wordProblemProperFraction(true);
  const groups = randInt(4, state.level === 'challenge' ? 18 : 12);
  const whole = used.d * groups;
  const usedAmount = used.n * groups;
  const remaining = whole - usedAmount;
  const context = pick([
    { noun: 'stickers', action: 'are used' },
    { noun: 'apples', action: 'are sold' },
    { noun: 'tickets', action: 'are given away' },
    { noun: 'pencils', action: 'are packed' },
    { noun: 'cards', action: 'are removed' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFindRemaining',
    subtopic: 'Find What Remains',
    text: `There are ${whole} ${context.noun}. ${fractionHtml(used.n, used.d)} of them ${context.action}. How many ${context.noun} remain?`,
    answer: remaining,
    unit: context.noun,
    hint: `The remaining fraction is ${used.d - used.n}/${used.d}. Find that fraction of ${whole}.`
  });
}

function wordFindRemainingMeasureQuestion() {
  const used = wordProblemProperFraction(true);
  const groups = randInt(4, state.level === 'challenge' ? 18 : 12);
  const whole = used.d * groups;
  const remaining = (used.d - used.n) * groups;
  const context = pick([
    { item: 'A roll of ribbon', unit: 'm', action: 'is cut off' },
    { item: 'A water tank', unit: 'L', action: 'is used' },
    { item: 'A bag of flour', unit: 'kg', action: 'is used' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFindRemaining',
    subtopic: 'Find What Remains',
    text: `${context.item} contains ${whole} ${context.unit}. ${fractionHtml(used.n, used.d)} of it ${context.action}. How many ${context.unit} remain?`,
    answer: remaining,
    unit: context.unit,
    hint: `Subtract the used fraction from 1, then find the remaining fraction of ${whole}.`
  });
}

function wordFindRemainingGenerator() {
  return pick([wordFindRemainingItemsQuestion, wordFindRemainingMeasureQuestion])();
}

/* Knowledge Point 5: Compare Fractional Amounts */

function wordCompareAmountsQuestion() {
  let first;
  let second;
  let firstWhole;
  let secondWhole;
  let firstAmount;
  let secondAmount;

  for (let attempt = 0; attempt < 80; attempt++) {
    first = wordProblemProperFraction(true);
    second = wordProblemProperFraction(true);
    firstWhole = first.d * randInt(4, state.level === 'challenge' ? 16 : 12);
    secondWhole = second.d * randInt(4, state.level === 'challenge' ? 16 : 12);
    firstAmount = first.n * (firstWhole / first.d);
    secondAmount = second.n * (secondWhole / second.d);
    if (firstAmount !== secondAmount && Math.abs(firstAmount - secondAmount) <= 30) break;
  }

  const difference = Math.abs(firstAmount - secondAmount);
  const context = pick([
    { groupA: 'Class A', groupB: 'Class B', noun: 'students', action: 'bring lunch from home' },
    { groupA: 'Shelf A', groupB: 'Shelf B', noun: 'books', action: 'are fiction books' },
    { groupA: 'Box A', groupB: 'Box B', noun: 'marbles', action: 'are blue' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordCompareAmounts',
    subtopic: 'Compare Fractional Amounts',
    text: `${context.groupA} has ${firstWhole} ${context.noun}, and ${fractionHtml(first.n, first.d)} ${context.action}. ${context.groupB} has ${secondWhole} ${context.noun}, and ${fractionHtml(second.n, second.d)} ${context.action}. How many more ${context.noun} are there in one group than in the other?`,
    answer: difference,
    unit: context.noun,
    hint: 'Calculate both fractional amounts first, then subtract the smaller amount from the larger amount.'
  });
}

function wordCompareAmountsGenerator() {
  return wordCompareAmountsQuestion();
}

/* Knowledge Point 6: Multi-Step Fraction Problems */

function wordMultiStepGroupsQuestion() {
  let first;
  let second;
  let multiplier;
  const maximumWhole = state.level === 'foundation' ? 120 : state.level === 'challenge' ? 240 : 180;

  for (let attempt = 0; attempt < 100; attempt++) {
    first = wordProblemStepFraction();
    second = wordProblemStepFraction();
    const maximumMultiplier = Math.floor(maximumWhole / (first.d * second.d));
    if (maximumMultiplier >= 2) {
      multiplier = randInt(2, Math.min(maximumMultiplier, 7));
      break;
    }
  }

  first ||= { n: 1, d: 3 };
  second ||= { n: 1, d: 4 };
  multiplier ||= 4;
  const whole = first.d * second.d * multiplier;
  const firstAmount = whole / first.d * first.n;
  const afterFirst = whole - firstAmount;
  const secondAmount = afterFirst / second.d * second.n;
  const finalAmount = afterFirst - secondAmount;

  return wordProblemQuestion({
    knowledgePoint: 'wordMultiStep',
    subtopic: 'Multi-Step Fraction Problems',
    text: `There are ${whole} students. ${fractionHtml(first.n, first.d)} play football. Then ${fractionHtml(second.n, second.d)} of the remaining students play tennis. How many students play neither sport?`,
    answer: finalAmount,
    unit: 'students',
    hint: 'Find the football group, subtract it, then use the remaining students as the new whole.'
  });
}

function wordMultiStepRemainingQuestion() {
  let first;
  let second;
  let multiplier;
  const maximumWhole = state.level === 'foundation' ? 120 : state.level === 'challenge' ? 240 : 180;

  for (let attempt = 0; attempt < 100; attempt++) {
    first = wordProblemStepFraction();
    second = wordProblemStepFraction();
    const maximumMultiplier = Math.floor(maximumWhole / (first.d * second.d));
    if (maximumMultiplier >= 2) {
      multiplier = randInt(2, Math.min(maximumMultiplier, 7));
      break;
    }
  }

  first ||= { n: 1, d: 3 };
  second ||= { n: 1, d: 4 };
  multiplier ||= 4;
  const whole = first.d * second.d * multiplier;
  const firstUsed = whole / first.d * first.n;
  const afterFirst = whole - firstUsed;
  const secondUsed = afterFirst / second.d * second.n;
  const finalAmount = afterFirst - secondUsed;
  const context = pick([
    { noun: 'stickers', firstAction: 'are sold', secondAction: 'are given away' },
    { noun: 'books', firstAction: 'are borrowed', secondAction: 'are moved to another shelf' },
    { noun: 'apples', firstAction: 'are sold', secondAction: 'are used for pies' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordMultiStep',
    subtopic: 'Multi-Step Fraction Problems',
    text: `A shop starts with ${whole} ${context.noun}. ${fractionHtml(first.n, first.d)} ${context.firstAction}. Then ${fractionHtml(second.n, second.d)} of the remaining ${context.noun} ${context.secondAction}. How many ${context.noun} are left?`,
    answer: finalAmount,
    unit: context.noun,
    hint: 'Complete the first step, mark the new remaining whole, and then complete the second step.'
  });
}

function wordMultiStepGenerator() {
  return pick([wordMultiStepGroupsQuestion, wordMultiStepRemainingQuestion])();
}

/* Knowledge Point 9: Share a Fraction Equally */

function wordShareFractionEquallyQuestion() {
  const share = wordProblemProperFraction(true);
  const shares = randInt(2, state.level === 'challenge' ? 8 : 6);
  const totalNumerator = share.n * shares;
  const answer = fractionAnswer(share.n, share.d, false);
  const totalHtml = positiveRationalHtml(totalNumerator, share.d, true);
  const context = pick([
    { item: 'dough', unit: 'kg', groups: 'bags' },
    { item: 'juice', unit: 'L', groups: 'bottles' },
    { item: 'ribbon', unit: 'm', groups: 'pieces' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordShareFractionEqually',
    subtopic: 'Share a Fraction Equally',
    text: `${totalHtml} ${context.unit} of ${context.item} is shared equally among ${shares} ${context.groups}. How much is in each ${context.groups.slice(0, -1)}? Give your answer in simplest form.`,
    answer,
    displayAnswer: `${answer} ${context.unit}`,
    hint: `Divide the total amount by ${shares}.`
  });
}

function wordShareFractionEquallyGenerator() {
  return wordShareFractionEquallyQuestion();
}

/* Knowledge Point 10: Find the Number of Groups */

function wordFindNumberOfGroupsQuestion() {
  const piece = wordProblemProperFraction(true);
  const groups = randInt(3, state.level === 'challenge' ? 12 : 9);
  const totalNumerator = piece.n * groups;
  const totalHtml = positiveRationalHtml(totalNumerator, piece.d, true);
  const pieceHtml = fractionHtml(piece.n, piece.d);
  const context = pick([
    { item: 'ribbon', unit: 'm', result: 'pieces' },
    { item: 'dough', unit: 'kg', result: 'portions' },
    { item: 'juice', unit: 'L', result: 'bottles' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFindNumberOfGroups',
    subtopic: 'Find the Number of Groups',
    text: `There is ${totalHtml} ${context.unit} of ${context.item}. Each ${context.result.slice(0, -1)} uses ${pieceHtml} ${context.unit}. How many equal ${context.result} can be made?`,
    answer: groups,
    unit: context.result,
    hint: 'Divide the total amount by the size of one group.'
  });
}

function wordFindNumberOfGroupsGenerator() {
  return wordFindNumberOfGroupsQuestion();
}

/* Knowledge Point 11: What Fraction Is One Amount? */

function wordWhatFractionQuestion() {
  const denominator = pick(wordProblemDenominators());
  const numerator = randomSimplestProperNumerator(denominator);
  const scale = randInt(3, state.level === 'challenge' ? 15 : 10);
  const part = numerator * scale;
  const whole = denominator * scale;
  const answer = `${numerator}/${denominator}`;
  const context = pick([
    { noun: 'students', action: 'walk to school' },
    { noun: 'books', action: 'are fiction books' },
    { noun: 'marbles', action: 'are red' },
    { noun: 'flowers', action: 'are tulips' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordWhatFraction',
    subtopic: 'What Fraction Is One Amount?',
    text: `There are ${whole} ${context.noun}. ${part} of them ${context.action}. What fraction of the ${context.noun} ${context.action}? Give your answer in simplest form.`,
    answer,
    hint: `Write part over whole: ${part}/${whole}, then simplify.`
  });
}

function wordWhatFractionGenerator() {
  return wordWhatFractionQuestion();
}

/* Knowledge Point 12: Find a Fraction of a Fraction */

function wordFractionOfFractionQuestion() {
  const first = wordProblemProperFraction(true);
  const second = wordProblemProperFraction(true);
  const answer = fractionAnswer(first.n * second.n, first.d * second.d, false);
  const context = pick([
    {
      whole: 'flowers', firstGroup: 'tulips', secondGroup: 'red tulips',
      sentence: `${fractionHtml(first.n, first.d)} of the flowers are tulips. ${fractionHtml(second.n, second.d)} of the tulips are red.`
    },
    {
      whole: 'students', firstGroup: 'music students', secondGroup: 'piano students',
      sentence: `${fractionHtml(first.n, first.d)} of the students study music. ${fractionHtml(second.n, second.d)} of the music students study piano.`
    },
    {
      whole: 'books', firstGroup: 'story books', secondGroup: 'adventure story books',
      sentence: `${fractionHtml(first.n, first.d)} of the books are story books. ${fractionHtml(second.n, second.d)} of the story books are adventure stories.`
    }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordFractionOfFraction',
    subtopic: 'Find a Fraction of a Fraction',
    text: `${context.sentence} What fraction of all the ${context.whole} are ${context.secondGroup}? Give your answer in simplest form.`,
    answer,
    hint: 'The second fraction describes part of the first group, so multiply the two fractions.'
  });
}

function wordFractionOfFractionGenerator() {
  return wordFractionOfFractionQuestion();
}

/* Knowledge Point 13: Several Parts of One Whole */

function wordSeveralPartsQuestion() {
  let first;
  let second;
  let commonDenominator;
  let usedNumerator;
  let multiplier;
  const maximumWhole = state.level === 'foundation' ? 120 : state.level === 'challenge' ? 240 : 180;

  for (let attempt = 0; attempt < 100; attempt++) {
    first = wordProblemStepFraction();
    second = wordProblemStepFraction();
    commonDenominator = lcm(first.d, second.d);
    usedNumerator = first.n * (commonDenominator / first.d) + second.n * (commonDenominator / second.d);
    const maximumMultiplier = Math.floor(maximumWhole / commonDenominator);
    if (usedNumerator < commonDenominator && maximumMultiplier >= 3) {
      multiplier = randInt(3, Math.min(maximumMultiplier, 8));
      break;
    }
  }

  first ||= { n: 1, d: 3 };
  second ||= { n: 1, d: 4 };
  commonDenominator ||= 12;
  usedNumerator ||= 7;
  multiplier ||= 5;
  const whole = commonDenominator * multiplier;
  const remaining = (commonDenominator - usedNumerator) * multiplier;
  const context = pick([
    { noun: 'students', first: 'choose science', second: 'choose art', remaining: 'choose neither subject' },
    { noun: 'books', first: 'are fiction', second: 'are non-fiction', remaining: 'are in another category' },
    { noun: 'tickets', first: 'are sold online', second: 'are sold at the office', remaining: 'remain unsold' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordSeveralParts',
    subtopic: 'Several Parts of One Whole',
    text: `There are ${whole} ${context.noun}. ${fractionHtml(first.n, first.d)} ${context.first}, and ${fractionHtml(second.n, second.d)} ${context.second}. How many ${context.noun} ${context.remaining}?`,
    answer: remaining,
    unit: context.noun,
    hint: 'Add the two used fractions, subtract the result from 1, and then find the remaining amount.'
  });
}

function wordSeveralPartsGenerator() {
  return wordSeveralPartsQuestion();
}

/* Knowledge Point 14: Work Back from a Final Remainder */

function wordWorkBackRemainderQuestion() {
  let first;
  let second;
  let multiplier;
  const maximumOriginal = state.level === 'foundation' ? 120 : state.level === 'challenge' ? 240 : 180;

  for (let attempt = 0; attempt < 100; attempt++) {
    first = wordProblemStepFraction();
    second = wordProblemStepFraction();
    const maximumMultiplier = Math.floor(maximumOriginal / (first.d * second.d));
    if (maximumMultiplier >= 2) {
      multiplier = randInt(2, Math.min(maximumMultiplier, 7));
      break;
    }
  }

  first ||= { n: 1, d: 3 };
  second ||= { n: 1, d: 4 };
  multiplier ||= 4;
  const original = first.d * second.d * multiplier;
  const afterFirst = original / first.d * (first.d - first.n);
  const finalAmount = afterFirst / second.d * (second.d - second.n);
  const context = pick([
    { item: 'water in a tank', unit: 'L', action1: 'is used', action2: 'of the remainder is used' },
    { item: 'stickers in a box', unit: 'stickers', action1: 'are sold', action2: 'of the remainder are given away' },
    { item: 'books on a shelf', unit: 'books', action1: 'are borrowed', action2: 'of the remainder are moved' }
  ]);

  return wordProblemQuestion({
    knowledgePoint: 'wordWorkBackRemainder',
    subtopic: 'Work Back from a Final Remainder',
    text: `First, ${fractionHtml(first.n, first.d)} of the ${context.item} ${context.action1}. Then ${fractionHtml(second.n, second.d)} ${context.action2}. Finally, ${finalAmount} ${context.unit} remain. How much was there at first?`,
    answer: original,
    unit: context.unit,
    hint: 'Find the fraction that remains after both steps, then use the final amount to work back to the original whole.'
  });
}

function wordWorkBackRemainderGenerator() {
  return wordWorkBackRemainderQuestion();
}

function detailedFractionPointGenerator(pointId, generator, formatQuestion = true) {
  const preparedGenerator = formatQuestion ? formattedFractionGenerator(generator) : generator;
  return function generateDetailedFractionPoint() {
    const question = preparedGenerator();
    return {
      ...question,
      knowledgePoint: pointId
    };
  };
}

TOPIC_BANKS.fractions = {
  fractionParts: {
    f001: detailedFractionPointGenerator('f001', identifyNumeratorQuestion),
    f002: detailedFractionPointGenerator('f002', identifyDenominatorQuestion),
    f003: detailedFractionPointGenerator('f003', nameTopNumberQuestion),
    f004: detailedFractionPointGenerator('f004', nameBottomNumberQuestion),
    f005: detailedFractionPointGenerator('f005', numeratorMeaningQuestion),
    f006: detailedFractionPointGenerator('f006', denominatorMeaningQuestion),
    f007: detailedFractionPointGenerator('f007', equalPartsFromFractionQuestion),
    f008: detailedFractionPointGenerator('f008', selectedPartsFromFractionQuestion),
    f009: detailedFractionPointGenerator('f009', writeFractionFromNamesQuestion),
    f010: detailedFractionPointGenerator('f010', writeFractionFromPartsQuestion)
  },
  fractionTypes: {
    f011: detailedFractionPointGenerator('f011', classifyFractionQuestion),
    f012: detailedFractionPointGenerator('f012', classifyEqualNumbersQuestion),
    f013: detailedFractionPointGenerator('f013', greatestProperNumeratorQuestion),
    f014: detailedFractionPointGenerator('f014', smallestImproperNumeratorQuestion),
    f015: detailedFractionPointGenerator('f015', smallestProperDenominatorQuestion),
    f016: detailedFractionPointGenerator('f016', greatestImproperDenominatorQuestion),
    f017: detailedFractionPointGenerator('f017', denominatorCannotBeZeroQuestion),
    f018: detailedFractionPointGenerator('f018', validOrInvalidQuestion),
    f019: detailedFractionPointGenerator('f019', zeroNumeratorQuestion),
    f020: detailedFractionPointGenerator('f020', correctNamingErrorQuestion),
    f021: detailedFractionPointGenerator('f021', relationRuleQuestion)
  },
  equivalentSimplify: {
    f022: detailedFractionPointGenerator('f022', equivalentMissingNumeratorQuestion),
    f023: detailedFractionPointGenerator('f023', equivalentMissingDenominatorQuestion),
    f024: detailedFractionPointGenerator('f024', equivalentScaleFactorQuestion),
    f025: detailedFractionPointGenerator('f025', equivalentCheckQuestion),
    f026: detailedFractionPointGenerator('f026', simplifyFractionQuestion),
    f027: detailedFractionPointGenerator('f027', simplifyMissingDivisorQuestion),
    f028: detailedFractionPointGenerator('f028', greatestCommonFactorQuestion)
  },
  compareConvert: {
    f029: detailedFractionPointGenerator('f029', compareSameDenominatorQuestion),
    f030: detailedFractionPointGenerator('f030', compareSameNumeratorQuestion),
    f031: detailedFractionPointGenerator('f031', compareDifferentDenominatorsQuestion),
    f032: detailedFractionPointGenerator('f032', compareEquivalentFractionsQuestion),
    f033: detailedFractionPointGenerator('f033', mixedToImproperQuestion),
    f034: detailedFractionPointGenerator('f034', improperToMixedQuestion),
    f035: detailedFractionPointGenerator('f035', missingImproperNumeratorQuestion)
  },
  addFractionsDetailed: {
    f036: detailedFractionPointGenerator('f036', addSameDenominatorQuestion),
    f037: detailedFractionPointGenerator('f037', addRelatedDenominatorsQuestion),
    f038: detailedFractionPointGenerator('f038', addUnrelatedDenominatorsQuestion)
  },
  subtractFractionsDetailed: {
    f039: detailedFractionPointGenerator('f039', subtractSameDenominatorQuestion),
    f040: detailedFractionPointGenerator('f040', subtractRelatedDenominatorsQuestion),
    f041: detailedFractionPointGenerator('f041', subtractUnrelatedDenominatorsQuestion)
  },
  multiplyFractionsDetailed: {
    f042: detailedFractionPointGenerator('f042', multiplyTwoFractionsQuestion),
    f043: detailedFractionPointGenerator('f043', multiplyWholeByFractionQuestion),
    f044: detailedFractionPointGenerator('f044', multiplyCrossCancelQuestion)
  },
  divideFractionsDetailed: {
    f045: detailedFractionPointGenerator('f045', divideTwoFractionsQuestion),
    f046: detailedFractionPointGenerator('f046', divideFractionByWholeQuestion),
    f047: detailedFractionPointGenerator('f047', divideWholeByFractionQuestion)
  },
  mixedAddSubtract: {
    f048: detailedFractionPointGenerator('f048', addMixedSameDenominatorQuestion),
    f049: detailedFractionPointGenerator('f049', subtractMixedNoBorrowQuestion),
    f050: detailedFractionPointGenerator('f050', subtractMixedWithBorrowingQuestion),
    f051: detailedFractionPointGenerator('f051', addMixedDifferentDenominatorsQuestion)
  },
  mixedMultiplyDivide: {
    f052: detailedFractionPointGenerator('f052', multiplyMixedByWholeQuestion),
    f053: detailedFractionPointGenerator('f053', multiplyMixedByFractionQuestion),
    f054: detailedFractionPointGenerator('f054', multiplyTwoMixedNumbersQuestion),
    f055: detailedFractionPointGenerator('f055', divideMixedByWholeQuestion),
    f056: detailedFractionPointGenerator('f056', divideMixedByFractionQuestion),
    f057: detailedFractionPointGenerator('f057', divideTwoMixedNumbersQuestion)
  },
  fractionPartWhole: {
    f058: detailedFractionPointGenerator('f058', fractionOfNumberQuestion),
    f059: detailedFractionPointGenerator('f059', unitFractionOfNumberQuestion),
    f060: detailedFractionPointGenerator('f060', findWholeFromUnitFractionQuestion),
    f061: detailedFractionPointGenerator('f061', findWholeFromPartQuestion)
  },
  wordPartWholeRemainingDetailed: {
    f062: detailedFractionPointGenerator('f062', wordFractionOfAmountItemsQuestion, false),
    f063: detailedFractionPointGenerator('f063', wordFractionOfAmountMeasureQuestion, false),
    f064: detailedFractionPointGenerator('f064', wordFindWholeFromPartQuestion, false),
    f065: detailedFractionPointGenerator('f065', wordFindRemainingItemsQuestion, false),
    f066: detailedFractionPointGenerator('f066', wordFindRemainingMeasureQuestion, false)
  },
  wordCompareMultiStepDetailed: {
    f067: detailedFractionPointGenerator('f067', wordCompareAmountsQuestion, false),
    f068: detailedFractionPointGenerator('f068', wordMultiStepGroupsQuestion, false),
    f069: detailedFractionPointGenerator('f069', wordMultiStepRemainingQuestion, false)
  },
  wordDivisionRelationships: {
    f070: detailedFractionPointGenerator('f070', wordShareFractionEquallyQuestion, false),
    f071: detailedFractionPointGenerator('f071', wordFindNumberOfGroupsQuestion, false),
    f072: detailedFractionPointGenerator('f072', wordWhatFractionQuestion, false),
    f073: detailedFractionPointGenerator('f073', wordFractionOfFractionQuestion, false)
  },
  wordCombinedReverseDetailed: {
    f074: detailedFractionPointGenerator('f074', wordSeveralPartsQuestion, false),
    f075: detailedFractionPointGenerator('f075', wordWorkBackRemainderQuestion, false)
  }
};
