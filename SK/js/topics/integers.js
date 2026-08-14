'use strict';

const INTEGER_LABELS = [
  'Meaning of a Negative Integer',
  'Positive Integers, Negative Integers and Zero',
  'Read Signed Integers',
  'Write Signed Integers',
  'Identify the Sign of an Integer',
  'Opposite Integers',
  'Additive Inverses',
  'Understand That Zero Is Neither Positive nor Negative',
  'Distinguish a Negative Sign from a Subtraction Sign',
  'Negative Integers in Real-Life Contexts',
  'Locate Positive Integers on a Number Line',
  'Locate Negative Integers on a Number Line',
  'Locate Zero on a Number Line',
  'Read a Number-Line Scale',
  'Find a Missing Number-Line Value',
  'Move Right on a Number Line',
  'Move Left on a Number Line',
  'Find the Integer Before or After a Given Integer',
  'Find Integers Between Two Values',
  'Describe Movement on a Number Line',
  'Compare Two Positive Integers',
  'Compare Two Negative Integers',
  'Compare a Positive and a Negative Integer',
  'Use >, < and = with Integers',
  'Order Integers from Smallest to Largest',
  'Order Integers from Largest to Smallest',
  'Meaning of Absolute Value',
  'Find the Absolute Value of an Integer',
  'Compare Absolute Values',
  'Find the Distance Between Two Integers',
  'Add a Positive Integer and a Negative Integer',
  'Add Two Negative Integers',
  'Add a Positive and a Negative Integer',
  'Add Integers with Equal Absolute Values',
  'Add Zero to an Integer',
  'Add Integers Using a Number Line',
  'Add Three Integers',
  'Find a Missing Addend',
  'Find a Missing Integer in an Addition Equation',
  'Addition Word Problems with Negative Integers',
  'Subtract with a Negative Starting Integer',
  'Subtract a Negative Integer',
  'Subtract a Positive Integer from a Negative Integer',
  'Subtract a Negative Integer from a Positive Integer',
  'Subtract a Negative Integer from a Negative Integer',
  'Subtract Zero',
  'Rewrite Subtraction as Adding the Opposite',
  'Subtract Integers Using a Number Line',
  'Find a Missing Integer in a Subtraction Equation',
  'Subtraction Word Problems with Negative Integers',
  'Multiply a Positive Integer by a Negative Integer',
  'Multiply Two Negative Integers',
  'Multiply Integers with Different Signs',
  'Multiply an Integer by Zero',
  'Multiply More Than Two Signed Integers',
  'Divide a Positive Integer by a Negative Integer',
  'Divide Two Negative Integers',
  'Divide Integers with Different Signs',
  'Find a Missing Signed Factor or Divisor',
  'Apply Integer Sign Rules',
  'Add and Subtract Signed Integers',
  'Multiply and Divide Signed Integers',
  'Four Operations with Integers',
  'Order of Operations with Integers',
  'Integers with One Set of Brackets',
  'Integers with Several Brackets',
  'Evaluate Expressions Containing Negative Numbers',
  'Find a Missing Operation Sign',
  'Decide Whether an Integer Number Sentence Is True',
  'Multi-Step Integer Calculations',
  'Meaning of a Prime Number',
  'Meaning of a Composite Number',
  'Understand That 1 Is Neither Prime nor Composite',
  'Identify Prime Numbers',
  'Identify Composite Numbers',
  'List Prime Numbers below 50',
  'List Prime Numbers below 100',
  'Find the Next Prime Number',
  'Find the Prime Numbers within a Given Range',
  'Use the Number of Factors to Classify a Number',
  'Write a Number as a Product of Prime Factors',
  'Build a Factor Tree',
  'Use Repeated Division for Prime Factorisation',
  'Write Prime Factors in Ascending Order',
  'Write Prime Factorisation Using Index Notation',
  'Find a Missing Prime Factor',
  'Reconstruct a Number from Its Prime Factors',
  'Find the Largest Prime Factor',
  'Compare Two Prime Factorisations',
  'Check a Prime Factorisation',
  'Find the HCF by Listing Factors',
  'Find the HCF Using Prime Factorisation',
  'Find the HCF of Three Numbers',
  'Find the LCM by Listing Multiples',
  'Find the LCM Using Prime Factorisation',
  'Find the LCM of Three Numbers',
  'Distinguish an HCF Problem from an LCM Problem',
  'HCF Grouping and Packing Problems',
  'LCM Repeating-Event Problems',
  'Problems Involving Both HCF and LCM',
  'Meaning of a Base',
  'Meaning of an Exponent',
  'Write Repeated Multiplication in Index Form',
  'Evaluate Positive Integer Powers',
  'Recognise Square Numbers',
  'Recall Square Numbers up to 15²',
  'Recognise Cube Numbers',
  'Recall Simple Cube Numbers',
  'Identify Perfect Squares',
  'Identify Perfect Cubes',
  'Meaning of a Square Root',
  'Find the Square Root of a Perfect Square',
  'Match Squares and Square Roots',
  'Find the Two Integers Whose Square Is a Given Number',
  'Recognise Numbers without an Integer Square Root',
  'Meaning of a Cube Root',
  'Find the Cube Root of a Perfect Cube',
  'Find the Cube Root of a Negative Perfect Cube',
  'Match Cubes and Cube Roots',
  'Use Roots as Inverse Operations',
  'Evaluate the Square of a Negative Integer',
  'Evaluate the Cube of a Negative Integer',
  'Powers with an Even Exponent',
  'Powers with an Odd Exponent',
  'Understand (−a)²',
  'Understand −a²',
  'Distinguish (−a)ⁿ from −aⁿ',
  'Evaluate Powers of −1',
  'Compare Signed Powers',
  'Mixed Calculations with Signed Powers',
  'Read Coordinates in All Four Quadrants',
  'Plot Coordinates with Negative Values',
  'Identify the Quadrant of a Point',
  'Move Horizontally on a Coordinate Grid',
  'Move Vertically on a Coordinate Grid',
  'Find Horizontal or Vertical Distance',
  'Reflect a Point across the x-Axis',
  'Reflect a Point across the y-Axis',
  'Continue a Sequence through Zero',
  'Continue an Alternating Positive–Negative Sequence',
  'Temperature Increase and Decrease',
  'Elevation above and below Sea Level',
  'Profit, Loss, Credit and Debt',
  'Positive and Negative Game Scores',
  'Lift and Building-Level Problems',
  'Multi-Step Signed Integer Problems',
  'Prime-Number Logic Problems',
  'HCF and LCM Application Problems',
  'Square, Cube and Root Logic Problems',
  'Multi-Condition Integer Problems'
];

function integerPoints(start, end) {
  return INTEGER_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `i${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.integers = {
  title: 'Integers & Number Theory',
  pageTitle: 'Knowledge Practice — Integers and Number Theory',
  knowledgeMapTitle: 'Integers and Number Theory Practice Structure',
  intro: 'The 150 detailed knowledge points are organised into 15 connected practice sections. The numbering is continuous and does not skip.',
  teacherNote: 'This topic extends whole-number arithmetic to negative integers, prime factorisation, HCF/LCM, powers, roots, coordinates and integer applications.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'negativeFoundations', practiceNumber: 1, label: 'Understanding Negative Integers', description: 'Understand signed integers, opposites, zero and real-life meanings.', knowledgePoints: integerPoints(1, 10) },
    { id: 'integerNumberLine', practiceNumber: 2, label: 'Integers on a Number Line', description: 'Locate integers, read scales and describe movement.', knowledgePoints: integerPoints(11, 20) },
    { id: 'compareAbsolute', practiceNumber: 3, label: 'Compare, Order and Absolute Value', description: 'Compare and order signed integers and work with distance from zero.', knowledgePoints: integerPoints(21, 30) },
    { id: 'integerAddition', practiceNumber: 4, label: 'Adding Integers', description: 'Add positive and negative integers using number sense and equations.', knowledgePoints: integerPoints(31, 40) },
    { id: 'integerSubtraction', practiceNumber: 5, label: 'Subtracting Integers', description: 'Subtract signed integers and rewrite subtraction as adding the opposite.', knowledgePoints: integerPoints(41, 50) },
    { id: 'integerMultiplyDivide', practiceNumber: 6, label: 'Multiplying and Dividing Integers', description: 'Apply sign rules to products, quotients and missing values.', knowledgePoints: integerPoints(51, 60) },
    { id: 'integerMixed', practiceNumber: 7, label: 'Mixed Operations with Integers', description: 'Use order of operations, brackets and several signed calculations.', knowledgePoints: integerPoints(61, 70) },
    { id: 'primeComposite', practiceNumber: 8, label: 'Prime and Composite Numbers', description: 'Identify and classify prime and composite numbers.', knowledgePoints: integerPoints(71, 80) },
    { id: 'primeFactorisation', practiceNumber: 9, label: 'Prime Factorisation', description: 'Use factor trees, repeated division and index notation.', knowledgePoints: integerPoints(81, 90) },
    { id: 'hcfLcm', practiceNumber: 10, label: 'HCF and LCM', description: 'Find HCF and LCM and choose the correct idea in context.', knowledgePoints: integerPoints(91, 100) },
    { id: 'squaresCubesPowers', practiceNumber: 11, label: 'Squares, Cubes and Powers', description: 'Understand bases, exponents, squares, cubes and perfect powers.', knowledgePoints: integerPoints(101, 110) },
    { id: 'roots', practiceNumber: 12, label: 'Square Roots and Cube Roots', description: 'Use roots as inverse operations and recognise perfect powers.', knowledgePoints: integerPoints(111, 120) },
    { id: 'negativePowers', practiceNumber: 13, label: 'Negative Bases and Powers', description: 'Distinguish brackets, negative bases and signed powers.', knowledgePoints: integerPoints(121, 130) },
    { id: 'integerCoordinates', practiceNumber: 14, label: 'Integer Coordinates and Patterns', description: 'Use all four quadrants, reflections and signed sequences.', knowledgePoints: integerPoints(131, 140) },
    { id: 'integerApplications', practiceNumber: 15, label: 'Integer Applications and Number Logic', description: 'Solve practical, multi-step and number-theory logic problems.', knowledgePoints: integerPoints(141, 150) }
  ]
};

function intgLimit() {
  return state.level === 'foundation' ? 12 : state.level === 'core' ? 30 : 60;
}

function intgNumber(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `i${String(point).padStart(3, '0')}`,
    subtopic: INTEGER_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function intgText(point, text, answer, acceptedAnswers = null, hint = '') {
  const accepted = acceptedAnswers ? [String(answer), ...acceptedAnswers.map(String)] : null;
  return intgNumber(point, text, answer, {
    displayAnswer: String(answer),
    acceptedAnswers: accepted,
    answerType: 'text',
    hint
  });
}

function intgChoice(point, text, answer) {
  return intgNumber(point, `${text}<br><strong>Enter 1 or 2.</strong>`, answer);
}

function intgStructure(point, text, answer, acceptedAnswers = null, hint = '') {
  const accepted = acceptedAnswers ? [String(answer), ...acceptedAnswers.map(String)] : null;
  return intgNumber(point, text, answer, {
    displayAnswer: String(answer),
    acceptedAnswers: accepted,
    answerType: 'fraction-structure',
    hint
  });
}

function intgSign(n) {
  return n < 0 ? `−${Math.abs(n)}` : String(n);
}

function intgList(values) {
  return values.map(intgSign).join(', ');
}

function intgShuffle(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function intgFactors(n) {
  const values = [];
  for (let i = 1; i <= Math.abs(n); i++) if (n % i === 0) values.push(i);
  return values;
}

function intgIsPrime(n) {
  n = Math.trunc(n);
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

function intgPrimesUpTo(max) {
  const values = [];
  for (let n = 2; n <= max; n++) if (intgIsPrime(n)) values.push(n);
  return values;
}

function intgNextPrime(n) {
  let value = n + 1;
  while (!intgIsPrime(value)) value++;
  return value;
}

function intgPrimeFactors(n) {
  const factors = [];
  let value = Math.abs(Math.trunc(n));
  for (let p = 2; p * p <= value; p++) {
    while (value % p === 0) {
      factors.push(p);
      value /= p;
    }
  }
  if (value > 1) factors.push(value);
  return factors;
}

function intgPrimePowers(n) {
  const map = new Map();
  intgPrimeFactors(n).forEach(p => map.set(p, (map.get(p) || 0) + 1));
  return [...map.entries()];
}

function intgPrimeProductText(n, symbol = ' × ') {
  return intgPrimeFactors(n).join(symbol);
}

function intgSuperscriptDigit(n) {
  const chars = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  return String(n).split('').map(ch => chars[ch] || ch).join('');
}

function intgPrimeIndexText(n, symbol = ' × ', useSuperscript = true) {
  return intgPrimePowers(n).map(([p, e]) => e === 1 ? String(p) : `${p}${useSuperscript ? intgSuperscriptDigit(e) : `^${e}`}`).join(symbol);
}

function intgPrimeIndexAccepted(n) {
  const tightCaret = intgPrimeIndexText(n, '*', false);
  const spacedCaret = intgPrimeIndexText(n, ' × ', false);
  const tightSuper = intgPrimeIndexText(n, '×', true);
  const spacedSuper = intgPrimeIndexText(n, ' × ', true);
  return [tightCaret, spacedCaret, tightSuper, spacedSuper, intgPrimeIndexText(n, '*', true), intgPrimeIndexText(n, '×', false), intgPrimeProductText(n, '*'), intgPrimeProductText(n, '×'), intgPrimeProductText(n, ' × ')];
}

function intgLcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function intgLcm3(a, b, c) {
  return intgLcm(intgLcm(a, b), c);
}

function intgOperatorQuestion(point, a, b) {
  const answer = a < b ? '<' : a > b ? '>' : '=';
  return intgText(point, `<strong>${intgSign(a)} __ ${intgSign(b)}</strong><br>Enter &gt;, &lt; or =.`, answer, [answer]);
}

function intgCoordinateText(x, y) {
  return `(${intgSign(x)}, ${intgSign(y)})`;
}

function intgCoordinateAccepted(x, y) {
  return [`(${x},${y})`, `(${x}, ${y})`, `${x},${y}`, `${x}, ${y}`];
}

function intgSquareCandidates() {
  return Array.from({ length: 15 }, (_, i) => (i + 1) ** 2);
}

function intgCubeCandidates() {
  return Array.from({ length: 10 }, (_, i) => (i + 1) ** 3);
}

function generateIntegerPoint(point) {
  const limit = intgLimit();
  switch (point) {
    case 1:
      return intgChoice(1, `Which number is a negative integer?<br><strong>1.</strong> ${intgSign(-randInt(1, limit))} &nbsp;&nbsp; <strong>2.</strong> ${randInt(1, limit)}`, 1);
    case 2: {
      const value = pick([-randInt(1, limit), 0, randInt(1, limit)]);
      const answer = value < 0 ? 1 : value === 0 ? 2 : 3;
      return intgNumber(2, `Classify <strong>${intgSign(value)}</strong>.<br><strong>1.</strong> Negative integer &nbsp;&nbsp; <strong>2.</strong> Zero &nbsp;&nbsp; <strong>3.</strong> Positive integer`, answer);
    }
    case 3: {
      const n = randInt(1, limit);
      return intgNumber(3, `Write <strong>negative ${n}</strong> as a signed integer.`, -n);
    }
    case 4: {
      const n = randInt(1, limit);
      return intgText(4, `Write <strong>${intgSign(-n)}</strong> in words.`, `negative ${n}`, [`minus ${n}`]);
    }
    case 5: {
      const n = chance(0.5) ? -randInt(1, limit) : randInt(1, limit);
      return intgChoice(5, `What is the sign of <strong>${intgSign(n)}</strong>?<br><strong>1.</strong> Positive &nbsp;&nbsp; <strong>2.</strong> Negative`, n > 0 ? 1 : 2);
    }
    case 6: {
      const n = chance(0.5) ? -randInt(1, limit) : randInt(1, limit);
      return intgNumber(6, `Find the opposite of <strong>${intgSign(n)}</strong>.`, -n);
    }
    case 7: {
      const n = chance(0.5) ? -randInt(1, limit) : randInt(1, limit);
      return intgNumber(7, `<strong>${intgSign(n)} + ? = 0</strong>`, -n);
    }
    case 8:
      return intgChoice(8, `Is zero a positive integer?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 2);
    case 9:
      return intgChoice(9, `In <strong>${intgSign(-randInt(2, limit))}</strong>, the symbol before the number is:<br><strong>1.</strong> a negative sign &nbsp;&nbsp; <strong>2.</strong> a subtraction operation`, 1);
    case 10: {
      const n = randInt(1, limit);
      return intgNumber(10, `The temperature is ${n}°C below zero. Write the temperature as an integer.`, -n);
    }

    case 11: {
      const move = randInt(1, limit);
      return intgNumber(11, `A point is ${move} units to the right of 0 on a number line. What integer is at the point?`, move);
    }
    case 12: {
      const move = randInt(1, limit);
      return intgNumber(12, `A point is ${move} units to the left of 0 on a number line. What integer is at the point?`, -move);
    }
    case 13:
      return intgNumber(13, `What integer is at the centre between <strong>${intgSign(-randInt(2, limit))}</strong> and its opposite?`, 0);
    case 14: {
      const step = pick([2, 3, 4, 5]);
      const start = -step * randInt(2, 4);
      return intgNumber(14, `The number-line marks are <strong>${intgSign(start)}, ${intgSign(start + step)}, ${intgSign(start + 2 * step)}, ...</strong>. What is the scale interval?`, step);
    }
    case 15: {
      const step = pick([2, 3, 4]);
      const start = -step * randInt(2, 5);
      return intgNumber(15, `Find the missing value: <strong>${intgSign(start)}, ${intgSign(start + step)}, ?, ${intgSign(start + 3 * step)}</strong>.`, start + 2 * step);
    }
    case 16: {
      const start = randInt(-limit, limit - 3);
      const move = randInt(1, Math.min(10, limit));
      return intgNumber(16, `Start at ${intgSign(start)} and move ${move} units right. Where do you finish?`, start + move);
    }
    case 17: {
      const start = randInt(-limit + 3, limit);
      const move = randInt(1, Math.min(10, limit));
      return intgNumber(17, `Start at ${intgSign(start)} and move ${move} units left. Where do you finish?`, start - move);
    }
    case 18: {
      const n = randInt(-limit + 1, limit - 1);
      if (chance(0.5)) return intgNumber(18, `What integer comes immediately before <strong>${intgSign(n)}</strong>?`, n - 1);
      return intgNumber(18, `What integer comes immediately after <strong>${intgSign(n)}</strong>?`, n + 1);
    }
    case 19: {
      const a = randInt(-10, 3), b = a + randInt(3, 6);
      const values = [];
      for (let n = a + 1; n < b; n++) values.push(n);
      return intgText(19, `List the integers strictly between <strong>${intgSign(a)}</strong> and <strong>${intgSign(b)}</strong>, separated by commas.`, values.join(','), [intgList(values), values.join(', ')]);
    }
    case 20: {
      const start = randInt(-limit, limit), end = randInt(-limit, limit);
      return intgNumber(20, `A point moves from ${intgSign(start)} to ${intgSign(end)}. How many signed units did it move? Use a positive number for right and a negative number for left.`, end - start);
    }

    case 21: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgOperatorQuestion(21, a, b);
    }
    case 22: {
      let a = -randInt(1, limit), b = -randInt(1, limit);
      if (a === b) b -= 1;
      return intgOperatorQuestion(22, a, b);
    }
    case 23:
      return intgOperatorQuestion(23, -randInt(1, limit), randInt(1, limit));
    case 24: {
      const a = randInt(-limit, limit), b = randInt(-limit, limit);
      return intgOperatorQuestion(24, a, b);
    }
    case 25: {
      const values = intgShuffle([randInt(-limit, -1), 0, randInt(1, limit), randInt(-limit, limit)]);
      const sorted = [...values].sort((a, b) => a - b);
      return intgText(25, `Order from smallest to largest: <strong>${intgList(values)}</strong>.`, sorted.join(','), [intgList(sorted), sorted.join(', ')]);
    }
    case 26: {
      const values = intgShuffle([randInt(-limit, -1), 0, randInt(1, limit), randInt(-limit, limit)]);
      const sorted = [...values].sort((a, b) => b - a);
      return intgText(26, `Order from largest to smallest: <strong>${intgList(values)}</strong>.`, sorted.join(','), [intgList(sorted), sorted.join(', ')]);
    }
    case 27: {
      const n = -randInt(1, limit);
      return intgNumber(27, `Absolute value means distance from zero. Find <strong>|${intgSign(n)}|</strong>.`, Math.abs(n));
    }
    case 28: {
      const n = randInt(-limit, limit);
      return intgNumber(28, `Calculate <strong>|${intgSign(n)}|</strong>.`, Math.abs(n));
    }
    case 29: {
      const a = randInt(-limit, limit), b = randInt(-limit, limit);
      const aa = Math.abs(a), bb = Math.abs(b);
      return intgOperatorQuestion(29, aa, bb);
    }
    case 30: {
      const a = randInt(-limit, limit), b = randInt(-limit, limit);
      return intgNumber(30, `Find the distance between <strong>${intgSign(a)}</strong> and <strong>${intgSign(b)}</strong> on a number line.`, Math.abs(a - b));
    }

    case 31: {
      const a = randInt(1, limit), b = randInt(1, limit);
      if (chance(0.5)) return intgNumber(31, `Calculate <strong>${intgSign(-a)} + ${b}</strong>.`, -a + b);
      return intgNumber(31, `Calculate <strong>${a} + (${intgSign(-b)})</strong>.`, a - b);
    }
    case 32: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(32, `Calculate <strong>${intgSign(-a)} + (${intgSign(-b)})</strong>.`, -a - b);
    }
    case 33: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(33, `Calculate <strong>${a} + (${intgSign(-b)})</strong>.`, a - b);
    }
    case 34: {
      const a = randInt(1, limit);
      return intgNumber(34, `Calculate <strong>${a} + (${intgSign(-a)})</strong>.`, 0);
    }
    case 35: {
      const a = -randInt(1, limit);
      return intgNumber(35, `Calculate <strong>${intgSign(a)} + 0</strong>.`, a);
    }
    case 36: {
      const maxMove = Math.min(10, limit);
      const startNegative = chance(0.5);
      const start = startNegative ? -randInt(1, limit) : randInt(0, limit);
      const move = startNegative ? randInt(-maxMove, maxMove) : -randInt(1, maxMove);
      return intgNumber(36, `Start at ${intgSign(start)} on a number line and add ${intgSign(move)}. Where do you finish?`, start + move);
    }
    case 37: {
      const a = -randInt(1, limit), b = randInt(-limit, limit), c = randInt(-limit, limit);
      return intgNumber(37, `Calculate <strong>${intgSign(a)} + (${intgSign(b)}) + (${intgSign(c)})</strong>.`, a + b + c);
    }
    case 38: {
      const a = -randInt(1, limit), x = randInt(-limit, limit), total = a + x;
      return intgNumber(38, `<strong>${intgSign(a)} + ? = ${intgSign(total)}</strong>`, x);
    }
    case 39: {
      const x = randInt(-limit, limit), b = -randInt(1, limit), total = x + b;
      return intgNumber(39, `<strong>? + (${intgSign(b)}) = ${intgSign(total)}</strong>`, x);
    }
    case 40: {
      const start = -randInt(1, 10), change = randInt(-10, 10);
      return intgNumber(40, `The temperature starts at ${intgSign(start)}°C and changes by ${intgSign(change)}°C. What is the new temperature?`, start + change);
    }

    case 41: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(41, `Calculate <strong>${intgSign(-a)} − ${b}</strong>.`, -a - b);
    }
    case 42: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(42, `Calculate <strong>${a} − (${intgSign(-b)})</strong>.`, a + b);
    }
    case 43: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(43, `Calculate <strong>${intgSign(-a)} − ${b}</strong>.`, -a - b);
    }
    case 44: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(44, `Calculate <strong>${a} − (${intgSign(-b)})</strong>.`, a + b);
    }
    case 45: {
      const a = randInt(1, limit), b = randInt(1, limit);
      return intgNumber(45, `Calculate <strong>${intgSign(-a)} − (${intgSign(-b)})</strong>.`, -a + b);
    }
    case 46: {
      const a = -randInt(1, limit);
      return intgNumber(46, `Calculate <strong>${intgSign(a)} − 0</strong>.`, a);
    }
    case 47: {
      const firstNegative = chance(0.5);
      const a = firstNegative ? -randInt(1, limit) : randInt(0, limit);
      const b = firstNegative ? randInt(-limit, limit) : -randInt(1, limit);
      return intgNumber(47, `Rewrite and calculate: <strong>${intgSign(a)} − (${intgSign(b)})</strong>.`, a - b, { hint: 'Subtracting an integer is the same as adding its opposite.' });
    }
    case 48: {
      const firstNegative = chance(0.5);
      const start = firstNegative ? -randInt(1, limit) : randInt(0, limit);
      const sub = firstNegative ? randInt(-10, 10) : -randInt(1, 10);
      return intgNumber(48, `Start at ${intgSign(start)} on a number line and subtract ${intgSign(sub)}. Where do you finish?`, start - sub);
    }
    case 49: {
      const a = -randInt(1, limit), x = randInt(-limit, limit), result = a - x;
      return intgNumber(49, `<strong>${intgSign(a)} − ? = ${intgSign(result)}</strong>`, x);
    }
    case 50: {
      const start = -randInt(1, 10), drop = randInt(1, 12);
      return intgNumber(50, `At noon the temperature is ${intgSign(start)}°C. It falls by ${drop}°C. What is the temperature later?`, start - drop);
    }

    case 51: {
      const a = randInt(2, 12), b = randInt(2, 12);
      return intgNumber(51, `Calculate <strong>${a} × (${intgSign(-b)})</strong>.`, -a * b);
    }
    case 52: {
      const a = randInt(2, 12), b = randInt(2, 12);
      return intgNumber(52, `Calculate <strong>(${intgSign(-a)}) × (${intgSign(-b)})</strong>.`, a * b);
    }
    case 53: {
      const a = randInt(2, 12), b = randInt(2, 12);
      return intgNumber(53, `Calculate <strong>${intgSign(-a)} × ${b}</strong>.`, -a * b);
    }
    case 54: {
      const a = -randInt(1, limit);
      return intgNumber(54, `Calculate <strong>${intgSign(a)} × 0</strong>.`, 0);
    }
    case 55: {
      const a = pick([-5, -4, -3]), b = pick([-5, -4, -3, 2, 3, 4]), c = pick([-5, -4, -3, 2, 3, 4]);
      return intgNumber(55, `Calculate <strong>${intgSign(a)} × ${intgSign(b)} × ${intgSign(c)}</strong>.`, a * b * c);
    }
    case 56: {
      const divisor = randInt(2, 12), quotient = randInt(2, 12);
      return intgNumber(56, `Calculate <strong>${divisor * quotient} ÷ (${intgSign(-divisor)})</strong>.`, -quotient);
    }
    case 57: {
      const divisor = randInt(2, 12), quotient = randInt(2, 12);
      return intgNumber(57, `Calculate <strong>${intgSign(-divisor * quotient)} ÷ (${intgSign(-divisor)})</strong>.`, quotient);
    }
    case 58: {
      const divisor = randInt(2, 12), quotient = randInt(2, 12);
      return intgNumber(58, `Calculate <strong>${intgSign(-divisor * quotient)} ÷ ${divisor}</strong>.`, -quotient);
    }
    case 59: {
      const factor = pick([-12, -9, -8, -7, -6, -5]), missing = pick([-8, -6, -5, -4, 4, 5, 6, 8]);
      return intgNumber(59, `<strong>${intgSign(factor)} × ? = ${intgSign(factor * missing)}</strong>`, missing);
    }
    case 60: {
      const same = chance(0.5), a = randInt(2, 9), b = randInt(2, 9);
      const expression = same ? `(${intgSign(-a)}) × (${intgSign(-b)})` : `(${intgSign(-a)}) × ${b}`;
      return intgChoice(60, `What is the sign of <strong>${expression}</strong>?<br><strong>1.</strong> Positive &nbsp;&nbsp; <strong>2.</strong> Negative`, same ? 1 : 2);
    }

    case 61: {
      const a = -randInt(1, limit), b = randInt(-limit, limit), c = randInt(-limit, limit);
      return intgNumber(61, `Calculate <strong>${intgSign(a)} + (${intgSign(b)}) − (${intgSign(c)})</strong>.`, a + b - c);
    }
    case 62: {
      const divisor = pick([2, 3, 4]), quotient = randInt(2, 18);
      const adjusted = -(divisor * quotient);
      return intgNumber(62, `Calculate <strong>(${intgSign(adjusted)}) ÷ ${divisor}</strong>.`, -quotient);
    }
    case 63: {
      const a = randInt(-12, 12), b = randInt(2, 8), c = -randInt(1, 8), d = randInt(1, 6);
      return intgNumber(63, `Calculate <strong>${intgSign(a)} + ${b} × (${intgSign(c)}) − ${d}</strong>.`, a + b * c - d);
    }
    case 64: {
      const a = randInt(-10, 10), b = randInt(2, 8), c = -randInt(1, 8);
      return intgNumber(64, `Calculate <strong>${intgSign(a)} + ${b} × (${intgSign(c)})</strong>.`, a + b * c);
    }
    case 65: {
      const a = -randInt(1, 10), b = randInt(-10, 10), c = randInt(2, 8);
      return intgNumber(65, `Calculate <strong>(${intgSign(a)} + ${intgSign(b)}) × ${c}</strong>.`, (a + b) * c);
    }
    case 66: {
      const a = -randInt(1, 8), b = randInt(-8, 8), c = randInt(-8, 8), d = randInt(2, 6);
      return intgNumber(66, `Calculate <strong>(${intgSign(a)} − ${intgSign(b)}) × (${intgSign(c)} + ${d})</strong>.`, (a - b) * (c + d));
    }
    case 67: {
      const a = randInt(-10, 10), b = -randInt(1, 10), c = randInt(2, 5);
      return intgNumber(67, `Evaluate <strong>${intgSign(a)} − ${c}(${intgSign(b)})</strong>.`, a - c * b);
    }
    case 68: {
      const a = -randInt(1, 10), b = randInt(-10, 10), useAddition = chance(0.5);
      const result = useAddition ? a + b : a - b;
      const symbol = useAddition ? '+' : '−';
      return intgText(68, `<strong>${intgSign(a)} __ (${intgSign(b)}) = ${intgSign(result)}</strong><br>Enter + or −.`, symbol, useAddition ? ['plus'] : ['-', 'minus']);
    }
    case 69: {
      const a = -randInt(1, 10), b = randInt(-10, 10), shownTrue = chance(0.5);
      const shown = shownTrue ? a - b : a - b + pick([-2, -1, 1, 2]);
      return intgChoice(69, `Is <strong>${intgSign(a)} − (${intgSign(b)}) = ${intgSign(shown)}</strong> true?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, shownTrue ? 1 : 2);
    }
    case 70: {
      const a = randInt(-20, 20), b = randInt(-15, 15), c = randInt(2, 8), d = -randInt(1, 8);
      return intgNumber(70, `Calculate <strong>${intgSign(a)} + (${intgSign(b)}) − ${c} × (${intgSign(d)})</strong>.`, a + b - c * d);
    }

    case 71:
      return intgChoice(71, `A prime number has:<br><strong>1.</strong> exactly two positive factors &nbsp;&nbsp; <strong>2.</strong> more than two positive factors`, 1);
    case 72:
      return intgChoice(72, `A composite number has:<br><strong>1.</strong> exactly two positive factors &nbsp;&nbsp; <strong>2.</strong> more than two positive factors`, 2);
    case 73:
      return intgChoice(73, `Is 1 a prime number?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 2);
    case 74: {
      const prime = pick(intgPrimesUpTo(state.level === 'foundation' ? 31 : 97));
      const composite = pick([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 27, 28, 30]);
      return intgChoice(74, `Which number is prime?<br><strong>1.</strong> ${prime} &nbsp;&nbsp; <strong>2.</strong> ${composite}`, 1);
    }
    case 75: {
      const composite = pick([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 27, 28, 30]);
      const prime = pick(intgPrimesUpTo(31));
      return intgChoice(75, `Which number is composite?<br><strong>1.</strong> ${composite} &nbsp;&nbsp; <strong>2.</strong> ${prime}`, 1);
    }
    case 76: {
      const values = intgPrimesUpTo(50);
      return intgText(76, `List all prime numbers below 50, separated by commas.`, values.join(','), [values.join(', ')]);
    }
    case 77: {
      const values = intgPrimesUpTo(100);
      return intgText(77, `List all prime numbers below 100, separated by commas.`, values.join(','), [values.join(', ')]);
    }
    case 78: {
      const start = randInt(10, state.level === 'foundation' ? 40 : 90);
      return intgNumber(78, `Find the first prime number greater than <strong>${start}</strong>.`, intgNextPrime(start));
    }
    case 79: {
      const start = pick([10, 20, 30, 40, 50, 60, 70, 80]);
      const end = start + 10;
      const values = intgPrimesUpTo(end).filter(p => p >= start);
      return intgText(79, `List the prime numbers from ${start} to ${end}, separated by commas.`, values.join(','), [values.join(', ')]);
    }
    case 80: {
      const n = chance(0.5) ? pick(intgPrimesUpTo(47)) : pick([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 25, 27]);
      const factors = intgFactors(n).length;
      return intgChoice(80, `<strong>${n}</strong> has ${factors} positive factor${factors === 1 ? '' : 's'}. Is it prime?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, intgIsPrime(n) ? 1 : 2);
    }

    case 81: {
      const n = pick([12, 18, 20, 24, 30, 36, 40, 42, 45, 48, 54, 60, 72, 84, 90]);
      return intgStructure(81, `Write <strong>${n}</strong> as a product of prime factors. Use × or *.`, intgPrimeProductText(n, ' × '), [intgPrimeProductText(n, '*'), intgPrimeProductText(n, '×')]);
    }
    case 82: {
      const n = pick([24, 36, 40, 48, 54, 60, 72, 84, 90, 96]);
      return intgStructure(82, `Complete a factor tree for <strong>${n}</strong>. Enter the prime factors in ascending order, separated by ×.`, intgPrimeProductText(n, ' × '), [intgPrimeProductText(n, '*'), intgPrimeProductText(n, '×')]);
    }
    case 83: {
      const n = pick([30, 42, 48, 60, 72, 84, 90, 108]);
      return intgStructure(83, `Use repeated division to find the prime factors of <strong>${n}</strong>. Enter them in ascending order.`, intgPrimeProductText(n, ' × '), [intgPrimeProductText(n, '*'), intgPrimeProductText(n, '×'), intgPrimeFactors(n).join(',')]);
    }
    case 84: {
      const n = pick([30, 42, 48, 60, 72, 84, 90, 108]);
      const factors = intgShuffle(intgPrimeFactors(n));
      const sorted = [...factors].sort((a, b) => a - b);
      return intgText(84, `Write these prime factors in ascending order: <strong>${factors.join(', ')}</strong>.`, sorted.join(','), [sorted.join(', '), sorted.join(' × ')]);
    }
    case 85: {
      const n = pick([24, 36, 40, 48, 54, 60, 72, 84, 90, 96, 108, 120]);
      return intgStructure(85, `Write the prime factorisation of <strong>${n}</strong> using index notation.<br><small>Use the power buttons or type powers with ^.</small>`, intgPrimeIndexText(n), intgPrimeIndexAccepted(n));
    }
    case 86: {
      const n = pick([30, 42, 60, 70, 84, 90, 105, 126]);
      const factors = intgPrimeFactors(n);
      const missingIndex = randInt(0, factors.length - 1);
      const missing = factors[missingIndex];
      const shown = factors.map((p, i) => i === missingIndex ? '?' : p).join(' × ');
      return intgNumber(86, `<strong>${n} = ${shown}</strong><br>Find the missing prime factor.`, missing);
    }
    case 87: {
      const n = pick([24, 36, 40, 48, 54, 60, 72, 84, 90, 96, 108]);
      return intgNumber(87, `The prime factorisation is <strong>${intgPrimeIndexText(n)}</strong>. What is the original number?`, n);
    }
    case 88: {
      const n = pick([42, 60, 70, 84, 90, 105, 126, 154, 165]);
      const largest = Math.max(...intgPrimeFactors(n));
      return intgNumber(88, `Find the largest prime factor of <strong>${n}</strong>.`, largest);
    }
    case 89: {
      const a = pick([24, 36, 40, 48, 54, 60, 72]), b = pick([30, 42, 50, 63, 75, 84, 90]);
      const countA = intgPrimeFactors(a).length, countB = intgPrimeFactors(b).length;
      const answer = countA > countB ? 1 : countB > countA ? 2 : 3;
      return intgNumber(89, `Which factorisation contains more prime factors, counting repeats?<br><strong>1.</strong> ${a} = ${intgPrimeProductText(a)}<br><strong>2.</strong> ${b} = ${intgPrimeProductText(b)}<br><strong>3.</strong> They contain the same number`, answer);
    }
    case 90: {
      const n = pick([24, 36, 40, 48, 54, 60, 72, 84, 90]);
      const correct = intgPrimeProductText(n);
      const wrong = intgPrimeFactors(n).slice(0, -1).join(' × ');
      return intgChoice(90, `Which is a complete prime factorisation of ${n}?<br><strong>1.</strong> ${correct} &nbsp;&nbsp; <strong>2.</strong> ${wrong || '1'}`, 1);
    }

    case 91: {
      const a = pick([12, 18, 20, 24, 30, 36]), b = pick([18, 24, 30, 36, 42, 48]);
      return intgNumber(91, `Find the HCF of <strong>${a}</strong> and <strong>${b}</strong> by listing factors.`, gcd(a, b));
    }
    case 92: {
      const a = pick([24, 36, 48, 60, 72, 84]), b = pick([30, 42, 54, 66, 78, 90]);
      return intgNumber(92, `Use prime factorisation to find the HCF of <strong>${a}</strong> and <strong>${b}</strong>.`, gcd(a, b));
    }
    case 93: {
      const common = pick([2, 3, 4, 5, 6]);
      const a = common * randInt(2, 8), b = common * randInt(2, 8), c = common * randInt(2, 8);
      return intgNumber(93, `Find the HCF of <strong>${a}, ${b}</strong> and <strong>${c}</strong>.`, gcd(gcd(a, b), c));
    }
    case 94: {
      const a = randInt(2, 10), b = randInt(2, 10);
      return intgNumber(94, `Find the LCM of <strong>${a}</strong> and <strong>${b}</strong> by listing multiples.`, intgLcm(a, b));
    }
    case 95: {
      const a = pick([12, 15, 18, 20, 24, 30]), b = pick([14, 16, 21, 25, 28, 35]);
      return intgNumber(95, `Use prime factorisation to find the LCM of <strong>${a}</strong> and <strong>${b}</strong>.`, intgLcm(a, b));
    }
    case 96: {
      const a = randInt(2, 6), b = randInt(3, 8), c = randInt(4, 10);
      return intgNumber(96, `Find the LCM of <strong>${a}, ${b}</strong> and <strong>${c}</strong>.`, intgLcm3(a, b, c));
    }
    case 97: {
      const contextHcf = chance(0.5);
      return intgChoice(97, `${contextHcf ? 'Identical gift bags must use all items with the largest possible equal number in each bag.' : 'Two alarms repeat at different intervals. Find when they ring together again.'}<br><strong>1.</strong> Use HCF &nbsp;&nbsp; <strong>2.</strong> Use LCM`, contextHcf ? 1 : 2);
    }
    case 98: {
      const groups = pick([3, 4, 5, 6]), a = groups * randInt(4, 10), b = groups * randInt(4, 10);
      return intgNumber(98, `${a} red beads and ${b} blue beads are packed into the greatest possible number of identical bags with none left over. How many bags are made?`, gcd(a, b));
    }
    case 99: {
      const a = pick([4, 6, 8, 10, 12]), b = pick([5, 7, 9, 12, 15]);
      return intgNumber(99, `Two lights flash every ${a} seconds and ${b} seconds. If they flash together now, after how many seconds will they next flash together?`, intgLcm(a, b));
    }
    case 100: {
      const a = pick([12, 18, 24, 30]), b = pick([18, 24, 30, 36]);
      const h = gcd(a, b), l = intgLcm(a, b);
      return intgNumber(100, `For ${a} and ${b}, calculate <strong>HCF + LCM</strong>.`, h + l);
    }

    case 101: {
      const base = randInt(2, 12), exp = randInt(2, 5);
      return intgNumber(101, `In <strong>${base}${intgSuperscriptDigit(exp)}</strong>, what is the base?`, base);
    }
    case 102: {
      const base = randInt(2, 12), exp = randInt(2, 5);
      return intgNumber(102, `In <strong>${base}${intgSuperscriptDigit(exp)}</strong>, what is the exponent?`, exp);
    }
    case 103: {
      const base = randInt(2, 9), exp = randInt(2, 4);
      const repeated = Array(exp).fill(base).join(' × ');
      return intgText(103, `Write <strong>${repeated}</strong> in index form.<br><small>Type ${base}^${exp} or use a superscript.</small>`, `${base}${intgSuperscriptDigit(exp)}`, [`${base}^${exp}`]);
    }
    case 104: {
      const exp = state.level === 'foundation' ? randInt(2, 3) : randInt(2, 5);
      const base = randInt(2, state.level === 'challenge' ? 8 : 6);
      return intgNumber(104, `Evaluate <strong>${base}${intgSuperscriptDigit(exp)}</strong>.`, base ** exp);
    }
    case 105: {
      const square = pick(intgSquareCandidates());
      const nonSquare = square + pick([2, 3, 5]);
      return intgChoice(105, `Which is a square number?<br><strong>1.</strong> ${square} &nbsp;&nbsp; <strong>2.</strong> ${nonSquare}`, 1);
    }
    case 106: {
      const base = randInt(1, 15);
      return intgNumber(106, `Calculate <strong>${base}²</strong>.`, base ** 2);
    }
    case 107: {
      const cube = pick(intgCubeCandidates().slice(0, state.level === 'foundation' ? 6 : 10));
      const nonCube = cube + pick([2, 3, 5]);
      return intgChoice(107, `Which is a cube number?<br><strong>1.</strong> ${cube} &nbsp;&nbsp; <strong>2.</strong> ${nonCube}`, 1);
    }
    case 108: {
      const base = randInt(1, state.level === 'foundation' ? 6 : 10);
      return intgNumber(108, `Calculate <strong>${base}³</strong>.`, base ** 3);
    }
    case 109: {
      const n = chance(0.5) ? pick(intgSquareCandidates()) : randInt(2, 220);
      return intgChoice(109, `Is <strong>${n}</strong> a perfect square?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, Number.isInteger(Math.sqrt(n)) ? 1 : 2);
    }
    case 110: {
      const n = chance(0.5) ? pick(intgCubeCandidates()) : randInt(2, 999);
      const root = Math.round(Math.cbrt(n));
      return intgChoice(110, `Is <strong>${n}</strong> a perfect cube?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, root ** 3 === n ? 1 : 2);
    }

    case 111:
      return intgChoice(111, `A square root of 49 is a number that:<br><strong>1.</strong> squares to make 49 &nbsp;&nbsp; <strong>2.</strong> doubles to make 49`, 1);
    case 112: {
      const base = randInt(1, 15);
      return intgNumber(112, `Calculate <strong>√${base ** 2}</strong>.`, base);
    }
    case 113: {
      const base = randInt(1, 15);
      return intgNumber(113, `<strong>${base}² = ${base ** 2}</strong>. Therefore, <strong>√${base ** 2} = ?</strong>`, base);
    }
    case 114: {
      const base = randInt(1, 12), square = base ** 2;
      return intgText(114, `Find the two integers whose square is <strong>${square}</strong>. Enter the smaller first, separated by a comma.`, `${-base},${base}`, [`${-base}, ${base}`, `${intgSign(-base)}, ${base}`]);
    }
    case 115: {
      let n = randInt(2, 150);
      while (Number.isInteger(Math.sqrt(n))) n = randInt(2, 150);
      return intgChoice(115, `Does <strong>${n}</strong> have an integer square root?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 2);
    }
    case 116:
      return intgChoice(116, `A cube root of 27 is a number that:<br><strong>1.</strong> cubes to make 27 &nbsp;&nbsp; <strong>2.</strong> squares to make 27`, 1);
    case 117: {
      const base = randInt(1, state.level === 'foundation' ? 6 : 10);
      return intgNumber(117, `Calculate <strong>∛${base ** 3}</strong>.`, base);
    }
    case 118: {
      const base = randInt(1, state.level === 'foundation' ? 6 : 10);
      return intgNumber(118, `Calculate <strong>∛${intgSign(-(base ** 3))}</strong>.`, -base);
    }
    case 119: {
      const base = randInt(1, 10), cube = base ** 3;
      return intgNumber(119, `<strong>${base}³ = ${cube}</strong>. Therefore, <strong>∛${cube} = ?</strong>`, base);
    }
    case 120: {
      const base = randInt(2, 12);
      if (chance(0.5)) return intgNumber(120, `Use an inverse operation: <strong>√(${base}²)</strong>.`, base);
      return intgNumber(120, `Use an inverse operation: <strong>∛(${base}³)</strong>.`, base);
    }

    case 121: {
      const base = randInt(2, 12);
      return intgNumber(121, `Evaluate <strong>(${intgSign(-base)})²</strong>.`, base ** 2);
    }
    case 122: {
      const base = randInt(2, 10);
      return intgNumber(122, `Evaluate <strong>(${intgSign(-base)})³</strong>.`, -(base ** 3));
    }
    case 123: {
      const base = randInt(2, 8), exp = pick([2, 4, 6]);
      return intgNumber(123, `Evaluate <strong>(${intgSign(-base)})${intgSuperscriptDigit(exp)}</strong>.`, base ** exp);
    }
    case 124: {
      const base = randInt(2, 6), exp = pick([3, 5]);
      return intgNumber(124, `Evaluate <strong>(${intgSign(-base)})${intgSuperscriptDigit(exp)}</strong>.`, -(base ** exp));
    }
    case 125: {
      const base = randInt(2, 12);
      return intgNumber(125, `Calculate <strong>(${intgSign(-base)})²</strong>.`, base ** 2);
    }
    case 126: {
      const base = randInt(2, 12);
      return intgNumber(126, `Calculate <strong>−${base}²</strong>.`, -(base ** 2), { hint: 'Apply the exponent before the negative sign when there are no brackets.' });
    }
    case 127: {
      const base = randInt(2, 8), exp = pick([2, 3, 4, 5]);
      const bracketed = chance(0.5);
      const answer = bracketed ? (-base) ** exp : -(base ** exp);
      return intgNumber(127, `Evaluate <strong>${bracketed ? `(${intgSign(-base)})${intgSuperscriptDigit(exp)}` : `−${base}${intgSuperscriptDigit(exp)}`}</strong>.`, answer);
    }
    case 128: {
      const exp = randInt(1, 10);
      return intgNumber(128, `Evaluate <strong>(−1)${intgSuperscriptDigit(exp)}</strong>.`, exp % 2 === 0 ? 1 : -1);
    }
    case 129: {
      const a = randInt(2, 7), b = randInt(2, 7), exp = pick([2, 3]);
      const left = (-a) ** exp, right = -(b ** exp);
      return intgOperatorQuestion(129, left, right);
    }
    case 130: {
      const a = randInt(2, 6), b = randInt(2, 6);
      return intgNumber(130, `Calculate <strong>(${intgSign(-a)})² + (${intgSign(-b)})³</strong>.`, a ** 2 - b ** 3);
    }

    case 131: {
      const x = randInt(-10, 10), y = randInt(-10, 10);
      return intgText(131, `A point has x-coordinate ${intgSign(x)} and y-coordinate ${intgSign(y)}. Write its coordinates.`, intgCoordinateText(x, y), intgCoordinateAccepted(x, y));
    }
    case 132: {
      const x = -randInt(1, 10), y = chance(0.5) ? randInt(1, 10) : -randInt(1, 10);
      return intgText(132, `Write the ordered pair for a point ${Math.abs(x)} units left of the y-axis and ${Math.abs(y)} units ${y > 0 ? 'above' : 'below'} the x-axis.`, intgCoordinateText(x, y), intgCoordinateAccepted(x, y));
    }
    case 133: {
      const quadrant = randInt(1, 4);
      const signs = { 1: [1, 1], 2: [-1, 1], 3: [-1, -1], 4: [1, -1] }[quadrant];
      const x = signs[0] * randInt(1, 10), y = signs[1] * randInt(1, 10);
      return intgNumber(133, `Which quadrant contains the point <strong>${intgCoordinateText(x, y)}</strong>?`, quadrant);
    }
    case 134: {
      const x = randInt(-10, 10), y = randInt(-10, 10), move = randInt(-8, 8);
      return intgNumber(134, `Point P is ${intgCoordinateText(x, y)}. It moves horizontally by ${intgSign(move)} units. What is its new x-coordinate?`, x + move);
    }
    case 135: {
      const x = randInt(-10, 10), y = randInt(-10, 10), move = randInt(-8, 8);
      return intgNumber(135, `Point P is ${intgCoordinateText(x, y)}. It moves vertically by ${intgSign(move)} units. What is its new y-coordinate?`, y + move);
    }
    case 136: {
      const horizontal = chance(0.5);
      if (horizontal) {
        const y = randInt(-10, 10), x1 = randInt(-10, 0), x2 = randInt(1, 10);
        return intgNumber(136, `Find the horizontal distance between ${intgCoordinateText(x1, y)} and ${intgCoordinateText(x2, y)}.`, Math.abs(x2 - x1));
      }
      const x = randInt(-10, 10), y1 = randInt(-10, 0), y2 = randInt(1, 10);
      return intgNumber(136, `Find the vertical distance between ${intgCoordinateText(x, y1)} and ${intgCoordinateText(x, y2)}.`, Math.abs(y2 - y1));
    }
    case 137: {
      const x = randInt(-10, 10), y = randInt(-10, 10) || 4;
      return intgText(137, `Reflect <strong>${intgCoordinateText(x, y)}</strong> across the x-axis.`, intgCoordinateText(x, -y), intgCoordinateAccepted(x, -y));
    }
    case 138: {
      const x = randInt(-10, 10) || 4, y = randInt(-10, 10);
      return intgText(138, `Reflect <strong>${intgCoordinateText(x, y)}</strong> across the y-axis.`, intgCoordinateText(-x, y), intgCoordinateAccepted(-x, y));
    }
    case 139: {
      const start = randInt(4, 12), step = randInt(2, 5);
      return intgNumber(139, `Continue the sequence: <strong>${start}, ${start - step}, ${start - 2 * step}, ?</strong>.`, start - 3 * step);
    }
    case 140: {
      const a = randInt(2, 10), b = randInt(2, 10);
      return intgNumber(140, `Continue the alternating sequence: <strong>${a}, ${intgSign(-b)}, ${a + 1}, ${intgSign(-(b + 1))}, ?</strong>.`, a + 2);
    }

    case 141: {
      const start = randInt(-10, 10), rise = randInt(2, 12), fall = randInt(1, 10);
      return intgNumber(141, `The temperature is ${intgSign(start)}°C. It rises by ${rise}°C and then falls by ${fall}°C. What is the final temperature?`, start + rise - fall);
    }
    case 142: {
      const start = -randInt(5, 100), rise = randInt(10, 80);
      return intgNumber(142, `A diver is at ${intgSign(start)} m relative to sea level and rises ${rise} m. What is the new elevation?`, start + rise);
    }
    case 143: {
      const balance = randInt(-100, 100), deposit = randInt(20, 100), payment = randInt(10, 80);
      return intgNumber(143, `An account balance is $${intgSign(balance)}. A deposit of $${deposit} is made, then a payment of $${payment} is taken. What is the new balance?`, balance + deposit - payment);
    }
    case 144: {
      const score = randInt(-20, 20), gain = randInt(2, 15), penalty = randInt(2, 15);
      return intgNumber(144, `A player has ${intgSign(score)} points, gains ${gain} points, then receives a ${penalty}-point penalty. What is the final score?`, score + gain - penalty);
    }
    case 145: {
      const start = randInt(-3, 15), up = randInt(1, 10), down = randInt(1, 8);
      return intgNumber(145, `A lift starts at level ${intgSign(start)}, goes up ${up} levels, then down ${down} levels. What level does it reach?`, start + up - down);
    }
    case 146: {
      const a = randInt(-20, 20), b = randInt(-15, 15), c = randInt(2, 8), d = randInt(-8, 8);
      return intgNumber(146, `Calculate <strong>${intgSign(a)} − (${intgSign(b)}) + ${c} × (${intgSign(d)})</strong>.`, a - b + c * d);
    }
    case 147: {
      const p = pick(intgPrimesUpTo(43).filter(x => x > 5)), q = intgNextPrime(p);
      return intgNumber(147, `Two consecutive prime numbers are ${p} and ?. Find the missing prime.`, q);
    }
    case 148: {
      const a = pick([6, 8, 9, 10, 12]), b = pick([8, 10, 12, 15, 18]);
      return intgNumber(148, `Two buses arrive every ${a} minutes and ${b} minutes. They arrive together at 9:00. After how many minutes will they next arrive together?`, intgLcm(a, b));
    }
    case 149: {
      const base = randInt(2, 12), square = base ** 2;
      return intgNumber(149, `A perfect square has square root ${base}. What is the perfect square?`, square);
    }
    case 150: {
      const min = randInt(-10, -2), max = randInt(3, 12);
      let answer = min;
      while (!(answer > min && answer < max && answer % 2 === 0)) answer++;
      return intgNumber(150, `Find the smallest even integer greater than ${intgSign(min)} and less than ${max}.`, answer);
    }

    default:
      throw new Error(`No integer generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.integers = {};
for (const group of TOPIC_CONFIGS.integers.groups) {
  TOPIC_BANKS.integers[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.integers[group.id][point.id] = () => generateIntegerPoint(pointNumber);
  }
}
