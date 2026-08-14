'use strict';

const WHOLE_NUMBER_LABELS = [
  'Natural Numbers',
  'Whole Numbers',
  'Zero',
  'Counting Numbers',
  'Number Before and After',
  'Successor and Predecessor',
  'Odd and Even Numbers',
  'Count Forwards',
  'Count Backwards',
  'Find Numbers Between Two Values',
  'Ones, Tens and Hundreds',
  'Thousands',
  'Ten Thousands',
  'Hundred Thousands',
  'Millions',
  'Identify the Place of a Digit',
  'Find the Value of a Digit',
  'Zero as a Placeholder',
  'Compose a Number from Place Values',
  'Find a Missing Digit from Place-Value Information',
  'Read Whole Numbers',
  'Write Number Words as Digits',
  'Write Numbers in Words',
  'Write Numbers in Standard Form',
  'Write Numbers in Expanded Form',
  'Compose a Number from Expanded Form',
  'Partition a Number',
  'Regroup Place Values',
  'Write a Number in Different Expanded Forms',
  'Match Equivalent Number Representations',
  'Compare Whole Numbers',
  'Use >, < and =',
  'Order Numbers from Smallest to Largest',
  'Order Numbers from Largest to Smallest',
  'Locate Numbers on a Number Line',
  'Find Missing Number-Line Values',
  'Find Numbers Between Two Values',
  'Find the Difference Between Two Positions',
  'Identify the Closest Number',
  'Compare Numbers with Different Numbers of Digits',
  'Round to the Nearest 10',
  'Round to the Nearest 100',
  'Round to the Nearest 1,000',
  'Round to the Nearest 10,000',
  'Round to the Nearest 100,000',
  'Estimate a Sum',
  'Estimate a Difference',
  'Estimate a Product',
  'Estimate a Quotient',
  'Check Whether an Answer Is Reasonable',
  'Recall Addition Facts',
  'Add Multiples of 10',
  'Add Multiples of 100',
  'Mental Addition',
  'Column Addition without Regrouping',
  'Column Addition with Regrouping',
  'Add Three or More Numbers',
  'Find a Missing Addend',
  'Check Addition Using Subtraction',
  'Multi-Step Addition',
  'Recall Subtraction Facts',
  'Subtract Multiples of 10',
  'Subtract Multiples of 100',
  'Mental Subtraction',
  'Column Subtraction without Exchange',
  'Column Subtraction with Exchange',
  'Subtract Across Zeros',
  'Find a Missing Number',
  'Check Subtraction Using Addition',
  'Multi-Step Subtraction',
  'Multiplication as Equal Groups',
  'Multiplication as Repeated Addition',
  'Recall Multiplication Facts',
  'Multiply by 10, 100 and 1,000',
  'Multiply by a One-Digit Number',
  'Multiply a Two-Digit Number by a Two-Digit Number',
  'Multiply a Three-Digit Number by a Two-Digit Number',
  'Use the Distributive Method',
  'Find a Missing Factor',
  'Estimate and Check a Product',
  'Division as Equal Sharing',
  'Division as Equal Grouping',
  'Recall Division Facts',
  'Divide by 10, 100 and 1,000',
  'Short Division with an Exact Answer',
  'Short Division with a Remainder',
  'Long Division',
  'Find a Missing Dividend, Divisor or Quotient',
  'Check Division Using Multiplication',
  'Interpret a Remainder in Context',
  'Make 10, 100 or 1,000',
  'Add by Partitioning',
  'Subtract by Counting Up',
  'Use Compensation',
  'Double and Halve',
  'Multiply by 5',
  'Multiply by 25',
  'Multiply by 50',
  'Divide Using Known Facts',
  'Choose an Efficient Mental Strategy',
  'Addition and Subtraction Together',
  'Multiplication and Division Together',
  'Four Operations',
  'Order of Operations',
  'Operations with Brackets',
  'Find a Missing Operation Sign',
  'Find a Missing Number',
  'Decide Whether a Number Sentence Is True',
  'Use Inverse Operations',
  'Multi-Step Calculations',
  'Find Factor Pairs',
  'List All Factors',
  'Identify Multiples',
  'List Multiples',
  'Find Common Factors',
  'Find Common Multiples',
  'Divisibility by 2, 5 and 10',
  'Divisibility by 3, 6 and 9',
  'Divisibility by 4, 8 and 12',
  'Divisibility by 11',
  'Continue an Addition Pattern',
  'Continue a Subtraction Pattern',
  'Continue a Multiplication Pattern',
  'Find a Missing Term',
  'Describe a Term-to-Term Rule',
  'Addition and Subtraction Word Problems',
  'Multiplication and Division Word Problems',
  'Packing, Grouping and Remainder Problems',
  'Form the Greatest or Smallest Number from Given Digits',
  'Multi-Step Whole-Number and Missing-Digit Problems'
];

function wholeNumberPoints(start, end) {
  return WHOLE_NUMBER_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `w${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.wholeNumbers = {
  title: 'Whole Numbers',
  pageTitle: 'Knowledge Practice — Whole Numbers and Arithmetic',
  knowledgeMapTitle: 'Whole Numbers and Arithmetic Practice Structure',
  intro: 'The 130 detailed whole-number knowledge points are organised into 13 connected practice sections. The numbering is continuous and does not skip.',
  teacherNote: 'This topic is designed for Year 6 and below. It uses positive whole numbers and zero only. Negative numbers, prime factorisation, HCF/LCM, squares, cubes and roots are reserved for a later topic.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'wholeFoundations', practiceNumber: 1, label: 'Whole Number Foundations', description: 'Understand counting numbers, zero, odd and even numbers, and simple counting.', knowledgePoints: wholeNumberPoints(1, 10) },
    { id: 'placeValue', practiceNumber: 2, label: 'Place Value', description: 'Read the position and value of digits from ones to millions.', knowledgePoints: wholeNumberPoints(11, 20) },
    { id: 'numberRepresentation', practiceNumber: 3, label: 'Reading and Representing Numbers', description: 'Move between digits, number words, standard form, expanded form and partitions.', knowledgePoints: wholeNumberPoints(21, 30) },
    { id: 'compareOrderLines', practiceNumber: 4, label: 'Compare, Order and Number Lines', description: 'Compare, order and locate whole numbers.', knowledgePoints: wholeNumberPoints(31, 40) },
    { id: 'roundingEstimation', practiceNumber: 5, label: 'Rounding and Estimation', description: 'Round whole numbers and estimate all four operations.', knowledgePoints: wholeNumberPoints(41, 50) },
    { id: 'addition', practiceNumber: 6, label: 'Addition', description: 'Develop mental, written and multi-step addition skills.', knowledgePoints: wholeNumberPoints(51, 60) },
    { id: 'subtraction', practiceNumber: 7, label: 'Subtraction', description: 'Develop mental, written and multi-step subtraction skills.', knowledgePoints: wholeNumberPoints(61, 70) },
    { id: 'multiplication', practiceNumber: 8, label: 'Multiplication', description: 'Use facts, place value, partitioning and written multiplication.', knowledgePoints: wholeNumberPoints(71, 80) },
    { id: 'divisionRemainders', practiceNumber: 9, label: 'Division and Remainders', description: 'Use sharing, grouping, written division and meaningful remainders.', knowledgePoints: wholeNumberPoints(81, 90) },
    { id: 'mentalStrategies', practiceNumber: 10, label: 'Mental Calculation Strategies', description: 'Use number bonds, partitioning, compensation, doubling and known facts.', knowledgePoints: wholeNumberPoints(91, 100) },
    { id: 'mixedOperations', practiceNumber: 11, label: 'Mixed Operations', description: 'Combine operations, brackets, inverse operations and missing values.', knowledgePoints: wholeNumberPoints(101, 110) },
    { id: 'factorsMultiples', practiceNumber: 12, label: 'Factors, Multiples and Divisibility', description: 'Work with factors, multiples and common divisibility tests.', knowledgePoints: wholeNumberPoints(111, 120) },
    { id: 'patternsApplications', practiceNumber: 13, label: 'Patterns, Applications and Number Logic', description: 'Continue patterns and solve practical or digit-based whole-number problems.', knowledgePoints: wholeNumberPoints(121, 130) }
  ]
};

function wnMax() {
  return state.level === 'foundation' ? 999 : state.level === 'core' ? 99999 : 9999999;
}

function wnNumber(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `w${String(point).padStart(3, '0')}`,
    subtopic: WHOLE_NUMBER_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function wnText(point, text, answer, acceptedAnswers = null, hint = '') {
  const accepted = acceptedAnswers ? [String(answer), ...acceptedAnswers] : null;
  return wnNumber(point, text, answer, {
    displayAnswer: String(answer),
    acceptedAnswers: accepted,
    answerType: 'text',
    hint
  });
}

function wnChoice(point, text, answer) {
  return wnNumber(point, `${text}<br><strong>Enter 1 or 2.</strong>`, answer);
}

function wnRound(value, place) {
  return Math.round(value / place) * place;
}

function wnDigits(length, allowZero = true) {
  const digits = [randInt(1, 9)];
  while (digits.length < length) digits.push(randInt(allowZero ? 0 : 1, 9));
  return digits;
}

function wnNumberFromDigits(digits) {
  return Number(digits.join(''));
}

function wnCommas(value) {
  return Number(value).toLocaleString('en-NZ');
}

function wnWordsUnder1000(n) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (n < 20) return ones[n];
  if (n < 100) return `${tens[Math.floor(n / 10)]}${n % 10 ? `-${ones[n % 10]}` : ''}`;
  return `${ones[Math.floor(n / 100)]} hundred${n % 100 ? ` and ${wnWordsUnder1000(n % 100)}` : ''}`;
}

function wnWords(n) {
  n = Math.trunc(n);
  if (n === 0) return 'zero';
  const parts = [];
  const millions = Math.floor(n / 1000000);
  n %= 1000000;
  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  if (millions) parts.push(`${wnWordsUnder1000(millions)} million`);
  if (thousands) parts.push(`${wnWordsUnder1000(thousands)} thousand`);
  if (rest) parts.push(wnWordsUnder1000(rest));
  return parts.join(' ');
}

function wnExpanded(n) {
  const text = String(n);
  const terms = [];
  for (let i = 0; i < text.length; i++) {
    const digit = Number(text[i]);
    if (digit) terms.push(String(digit * 10 ** (text.length - i - 1)));
  }
  return terms.join(' + ') || '0';
}

function wnFactors(n) {
  const out = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) out.push(i);
  return out;
}

function wnListAccepted(values) {
  const joinedComma = values.join(',');
  const joinedSpace = values.join(' ');
  return [joinedComma, joinedSpace, values.join(', '), values.join(' and ')];
}

function wnTwoDistinct(min, max) {
  const a = randInt(min, max);
  let b = randInt(min, max);
  while (b === a) b = randInt(min, max);
  return [a, b];
}

function generateWholeNumberPoint(point) {
  switch (point) {
    case 1:
      return wnChoice(1, 'Which number belongs to the counting set 1, 2, 3, ...?<br><strong>1.</strong> 0 &nbsp;&nbsp; <strong>2.</strong> 7', 2);
    case 2:
      return wnChoice(2, 'Which is a whole number?<br><strong>1.</strong> 0 &nbsp;&nbsp; <strong>2.</strong> 2.5', 1);
    case 3: {
      const n = randInt(1, 500);
      return wnNumber(3, `Calculate <strong>${n} + 0</strong>.`, n);
    }
    case 4: {
      const n = randInt(1, state.level === 'foundation' ? 50 : 500);
      return wnNumber(4, `What counting number comes immediately after <strong>${n}</strong>?`, n + 1);
    }
    case 5: {
      const n = randInt(2, state.level === 'foundation' ? 100 : 10000);
      return wnText(5, `Write the number immediately before and immediately after <strong>${wnCommas(n)}</strong>. Enter both numbers separated by a comma.`, `${n - 1},${n + 1}`, [`${n - 1}, ${n + 1}`, `${n - 1} ${n + 1}`]);
    }
    case 6: {
      const n = randInt(2, state.level === 'foundation' ? 200 : 20000);
      if (chance(0.5)) return wnNumber(6, `Find the successor of <strong>${wnCommas(n)}</strong>.`, n + 1);
      return wnNumber(6, `Find the predecessor of <strong>${wnCommas(n)}</strong>.`, n - 1);
    }
    case 7: {
      const n = randInt(1, 999);
      return wnChoice(7, `Is <strong>${n}</strong> odd or even?<br><strong>1.</strong> Odd &nbsp;&nbsp; <strong>2.</strong> Even`, n % 2 ? 1 : 2);
    }
    case 8: {
      const start = randInt(0, 100), step = pick([1, 2, 5, 10]);
      return wnNumber(8, `Count forwards by ${step}: <strong>${start}, ${start + step}, ${start + 2 * step}, ?</strong>`, start + 3 * step);
    }
    case 9: {
      const step = pick([1, 2, 5, 10]), end = randInt(0, 100), start = end + 3 * step;
      return wnNumber(9, `Count backwards by ${step}: <strong>${start}, ${start - step}, ${start - 2 * step}, ?</strong>`, end);
    }
    case 10: {
      const a = randInt(1, 100), gap = randInt(3, 12), b = a + gap;
      return wnNumber(10, `How many whole numbers are strictly between <strong>${a}</strong> and <strong>${b}</strong>?`, gap - 1);
    }

    case 11: {
      const h = randInt(1, 9), t = randInt(0, 9), o = randInt(0, 9), n = 100 * h + 10 * t + o;
      const place = pick(['ones', 'tens', 'hundreds']);
      const answer = place === 'ones' ? o : place === 'tens' ? t : h;
      return wnNumber(11, `In <strong>${n}</strong>, which digit is in the ${place} place?`, answer);
    }
    case 12: {
      const digits = wnDigits(4), n = wnNumberFromDigits(digits);
      return wnNumber(12, `In <strong>${wnCommas(n)}</strong>, which digit is in the thousands place?`, digits[0]);
    }
    case 13: {
      const digits = wnDigits(5), n = wnNumberFromDigits(digits);
      return wnNumber(13, `In <strong>${wnCommas(n)}</strong>, which digit is in the ten-thousands place?`, digits[0]);
    }
    case 14: {
      const digits = wnDigits(6), n = wnNumberFromDigits(digits);
      return wnNumber(14, `In <strong>${wnCommas(n)}</strong>, which digit is in the hundred-thousands place?`, digits[0]);
    }
    case 15: {
      const digits = wnDigits(7), n = wnNumberFromDigits(digits);
      return wnNumber(15, `In <strong>${wnCommas(n)}</strong>, which digit is in the millions place?`, digits[0]);
    }
    case 16: {
      const length = state.level === 'foundation' ? 4 : state.level === 'core' ? 6 : 7;
      const digits = wnDigits(length), index = randInt(0, length - 1), n = wnNumberFromDigits(digits);
      const places = ['ones', 'tens', 'hundreds', 'thousands', 'ten-thousands', 'hundred-thousands', 'millions'];
      return wnText(16, `What is the place of the digit <strong>${digits[index]}</strong> in <strong>${wnCommas(n)}</strong>?`, places[length - index - 1], [places[length - index - 1], places[length - index - 1].replace('-', ' ')]);
    }
    case 17: {
      const length = state.level === 'foundation' ? 4 : state.level === 'core' ? 6 : 7;
      const digits = wnDigits(length), index = randInt(0, length - 1), n = wnNumberFromDigits(digits);
      return wnNumber(17, `What is the value of the digit <strong>${digits[index]}</strong> in <strong>${wnCommas(n)}</strong>?`, digits[index] * 10 ** (length - index - 1));
    }
    case 18:
      return wnChoice(18, 'Which number has 0 as a placeholder in the tens place?<br><strong>1.</strong> 4,205 &nbsp;&nbsp; <strong>2.</strong> 4,250', 1);
    case 19: {
      const h = randInt(1, 9), t = randInt(0, 9), o = randInt(0, 9), th = randInt(1, 9);
      return wnNumber(19, `Compose the number with <strong>${th} thousands, ${h} hundreds, ${t} tens and ${o} ones</strong>.`, th * 1000 + h * 100 + t * 10 + o);
    }
    case 20: {
      const d = randInt(0, 9), n = 5000 + d * 100 + 40;
      return wnNumber(20, `The number <strong>5?40</strong> has a value of ${d * 100} in the hundreds place. What digit replaces ?`, d);
    }

    case 21: {
      const n = pick([204, 580, 1205, 3040, 12500]);
      const correct = wnWords(n);
      const wrong = wnWords(n + 10);
      const firstCorrect = chance(0.5);
      return wnChoice(21, `Which correctly reads <strong>${wnCommas(n)}</strong>?<br><strong>1.</strong> ${firstCorrect ? correct : wrong}<br><strong>2.</strong> ${firstCorrect ? wrong : correct}`, firstCorrect ? 1 : 2);
    }
    case 22: {
      const n = randInt(20, state.level === 'foundation' ? 999 : 99999);
      return wnNumber(22, `Write <strong>${wnWords(n)}</strong> in digits.`, n);
    }
    case 23: {
      const n = pick([407, 2305, 15040, 108006]);
      const correct = wnWords(n), wrong = wnWords(n + 100);
      return wnChoice(23, `Which is the correct number name for <strong>${wnCommas(n)}</strong>?<br><strong>1.</strong> ${correct}<br><strong>2.</strong> ${wrong}`, 1);
    }
    case 24: {
      const n = randInt(100, wnMax());
      return wnNumber(24, `Write <strong>${wnExpanded(n)}</strong> in standard form.`, n);
    }
    case 25: {
      const n = randInt(100, state.level === 'foundation' ? 9999 : 999999);
      const correct = wnExpanded(n), wrong = wnExpanded(n + 10);
      return wnChoice(25, `Which is the expanded form of <strong>${wnCommas(n)}</strong>?<br><strong>1.</strong> ${correct}<br><strong>2.</strong> ${wrong}`, 1);
    }
    case 26: {
      const n = randInt(100, wnMax());
      return wnNumber(26, `Compose the number: <strong>${wnExpanded(n)}</strong>.`, n);
    }
    case 27: {
      const n = randInt(100, 9999), hundreds = Math.floor(n / 100) * 100, rest = n - hundreds;
      return wnNumber(27, `<strong>${n} = ${hundreds} + ?</strong>`, rest);
    }
    case 28: {
      const tens = randInt(12, 99);
      return wnNumber(28, `How many ones are equal to <strong>${tens} tens</strong>?`, tens * 10);
    }
    case 29: {
      const n = randInt(1000, 9999), thousands = Math.floor(n / 1000), remainder = n % 1000;
      return wnChoice(29, `Which is another correct expanded form of <strong>${wnCommas(n)}</strong>?<br><strong>1.</strong> ${thousands * 1000} + ${remainder}<br><strong>2.</strong> ${thousands * 100} + ${remainder}`, 1);
    }
    case 30: {
      const n = randInt(100, 9999), expanded = wnExpanded(n);
      return wnChoice(30, `Which representation matches <strong>${wnCommas(n)}</strong>?<br><strong>1.</strong> ${expanded}<br><strong>2.</strong> ${wnExpanded(n + 100)}`, 1);
    }

    case 31: {
      const [a, b] = wnTwoDistinct(0, wnMax());
      return wnText(31, `Compare <strong>${wnCommas(a)}</strong> and <strong>${wnCommas(b)}</strong>. Enter &gt;, &lt; or =.`, a > b ? '>' : '<');
    }
    case 32: {
      const a = randInt(0, wnMax()), b = chance(0.25) ? a : randInt(0, wnMax());
      return wnText(32, `<strong>${wnCommas(a)} __ ${wnCommas(b)}</strong><br>Enter &gt;, &lt; or =.`, a === b ? '=' : a > b ? '>' : '<');
    }
    case 33: {
      const values = Array.from(new Set([randInt(0, 999), randInt(0, 999), randInt(0, 999)]));
      while (values.length < 3) values.push(randInt(0, 999));
      const sorted = [...values].sort((a, b) => a - b);
      return wnText(33, `Order from smallest to largest: <strong>${values.join(', ')}</strong>.`, sorted.join(','), wnListAccepted(sorted));
    }
    case 34: {
      const values = Array.from(new Set([randInt(0, 999), randInt(0, 999), randInt(0, 999)]));
      while (values.length < 3) values.push(randInt(0, 999));
      const sorted = [...values].sort((a, b) => b - a);
      return wnText(34, `Order from largest to smallest: <strong>${values.join(', ')}</strong>.`, sorted.join(','), wnListAccepted(sorted));
    }
    case 35: {
      const step = pick([10, 50, 100]), start = randInt(0, 10) * step;
      return wnNumber(35, `On a number line marked <strong>${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}</strong>, what number is at the third mark?`, start + 2 * step);
    }
    case 36: {
      const step = pick([5, 10, 100]), start = randInt(0, 10) * step;
      return wnNumber(36, `Complete the equally spaced number line: <strong>${start}, ${start + step}, ?, ${start + 3 * step}</strong>.`, start + 2 * step);
    }
    case 37: {
      const a = randInt(1, 100), gap = randInt(3, 15);
      return wnNumber(37, `How many whole numbers lie strictly between <strong>${a}</strong> and <strong>${a + gap}</strong>?`, gap - 1);
    }
    case 38: {
      const a = randInt(0, 1000), b = a + randInt(10, 500);
      return wnNumber(38, `Find the distance between <strong>${a}</strong> and <strong>${b}</strong> on a number line.`, b - a);
    }
    case 39: {
      const target = randInt(50, 950), a = target - randInt(1, 20), b = target + randInt(21, 40);
      return wnChoice(39, `Which number is closer to <strong>${target}</strong>?<br><strong>1.</strong> ${a} &nbsp;&nbsp; <strong>2.</strong> ${b}`, 1);
    }
    case 40: {
      const a = randInt(1000, 9999), b = randInt(100, 999);
      return wnText(40, `<strong>${a} __ ${b}</strong><br>Enter &gt;, &lt; or =.`, '>');
    }

    case 41: {
      const n = randInt(0, 9999);
      return wnNumber(41, `Round <strong>${wnCommas(n)}</strong> to the nearest 10.`, wnRound(n, 10));
    }
    case 42: {
      const n = randInt(0, 99999);
      return wnNumber(42, `Round <strong>${wnCommas(n)}</strong> to the nearest 100.`, wnRound(n, 100));
    }
    case 43: {
      const n = randInt(0, 999999);
      return wnNumber(43, `Round <strong>${wnCommas(n)}</strong> to the nearest 1,000.`, wnRound(n, 1000));
    }
    case 44: {
      const n = randInt(0, 9999999);
      return wnNumber(44, `Round <strong>${wnCommas(n)}</strong> to the nearest 10,000.`, wnRound(n, 10000));
    }
    case 45: {
      const n = randInt(0, 9999999);
      return wnNumber(45, `Round <strong>${wnCommas(n)}</strong> to the nearest 100,000.`, wnRound(n, 100000));
    }
    case 46: {
      const a = randInt(10, 999), b = randInt(10, 999), place = state.level === 'foundation' ? 10 : 100;
      return wnNumber(46, `Estimate <strong>${a} + ${b}</strong> by rounding each number to the nearest ${place}.`, wnRound(a, place) + wnRound(b, place));
    }
    case 47: {
      let a = randInt(100, 999), b = randInt(10, a), place = state.level === 'foundation' ? 10 : 100;
      return wnNumber(47, `Estimate <strong>${a} − ${b}</strong> by rounding each number to the nearest ${place}.`, wnRound(a, place) - wnRound(b, place));
    }
    case 48: {
      const a = randInt(11, 99), b = randInt(2, 9), rounded = wnRound(a, 10);
      return wnNumber(48, `Estimate <strong>${a} × ${b}</strong> by rounding ${a} to the nearest 10.`, rounded * b);
    }
    case 49: {
      const divisor = pick([2, 5, 10]), exact = randInt(10, 90) * divisor, n = exact + randInt(-4, 4);
      return wnNumber(49, `Estimate <strong>${n} ÷ ${divisor}</strong> by using the nearby compatible number ${exact}.`, exact / divisor);
    }
    case 50: {
      const a = randInt(100, 500), b = randInt(100, 500), correct = a + b, wrong = correct * 10;
      return wnChoice(50, `Which is a reasonable answer for <strong>${a} + ${b}</strong>?<br><strong>1.</strong> ${correct} &nbsp;&nbsp; <strong>2.</strong> ${wrong}`, 1);
    }

    case 51: {
      const a = randInt(0, 20), b = randInt(0, 20);
      return wnNumber(51, `Calculate <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 52: {
      const a = randInt(1, 50) * 10, b = randInt(1, 50) * 10;
      return wnNumber(52, `Calculate <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 53: {
      const a = randInt(1, 50) * 100, b = randInt(1, 50) * 100;
      return wnNumber(53, `Calculate <strong>${wnCommas(a)} + ${wnCommas(b)}</strong>.`, a + b);
    }
    case 54: {
      const a = randInt(20, 999), b = randInt(1, 99);
      return wnNumber(54, `Calculate mentally: <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 55: {
      const h1 = randInt(1, 4), t1 = randInt(0, 4), o1 = randInt(0, 4), h2 = randInt(1, 4), t2 = randInt(0, 4), o2 = randInt(0, 4);
      const a = 100 * h1 + 10 * t1 + o1, b = 100 * h2 + 10 * t2 + o2;
      return wnNumber(55, `Calculate <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 56: {
      const a = randInt(100, 9999), b = randInt(100, 9999);
      return wnNumber(56, `Calculate <strong>${wnCommas(a)} + ${wnCommas(b)}</strong>.`, a + b);
    }
    case 57: {
      const a = randInt(10, 999), b = randInt(10, 999), c = randInt(10, 999);
      return wnNumber(57, `Calculate <strong>${a} + ${b} + ${c}</strong>.`, a + b + c);
    }
    case 58: {
      const a = randInt(1, 999), missing = randInt(1, 999), total = a + missing;
      return wnNumber(58, `<strong>${a} + ? = ${total}</strong>`, missing);
    }
    case 59: {
      const a = randInt(1, 999), b = randInt(1, 999), sum = a + b;
      return wnNumber(59, `<strong>${sum} − ${a} = ?</strong>`, b);
    }
    case 60: {
      const a = randInt(100, 500), b = randInt(50, 300), c = randInt(20, 200);
      return wnNumber(60, `A library has ${a} books. It receives ${b} more on Monday and ${c} more on Tuesday. How many books does it have now?`, a + b + c);
    }

    case 61: {
      const a = randInt(0, 20), b = randInt(0, a);
      return wnNumber(61, `Calculate <strong>${a} − ${b}</strong>.`, a - b);
    }
    case 62: {
      const a = randInt(2, 50) * 10, b = randInt(1, a / 10) * 10;
      return wnNumber(62, `Calculate <strong>${a} − ${b}</strong>.`, a - b);
    }
    case 63: {
      const a = randInt(2, 50) * 100, b = randInt(1, a / 100) * 100;
      return wnNumber(63, `Calculate <strong>${wnCommas(a)} − ${wnCommas(b)}</strong>.`, a - b);
    }
    case 64: {
      const a = randInt(100, 999), b = randInt(1, Math.min(99, a));
      return wnNumber(64, `Calculate mentally: <strong>${a} − ${b}</strong>.`, a - b);
    }
    case 65: {
      const h1 = randInt(3, 9), t1 = randInt(3, 9), o1 = randInt(3, 9);
      const h2 = randInt(1, h1), t2 = randInt(0, t1), o2 = randInt(0, o1);
      const a = 100 * h1 + 10 * t1 + o1, b = 100 * h2 + 10 * t2 + o2;
      return wnNumber(65, `Calculate <strong>${a} − ${b}</strong>.`, a - b);
    }
    case 66: {
      const hundreds = randInt(4, 9), tens = randInt(1, 8), ones = randInt(0, 4);
      const subHundreds = randInt(1, hundreds - 1), subTens = randInt(tens + 1, 9), subOnes = randInt(ones + 1, 9);
      const a = 100 * hundreds + 10 * tens + ones, b = 100 * subHundreds + 10 * subTens + subOnes;
      return wnNumber(66, `Calculate <strong>${a} − ${b}</strong>.`, a - b);
    }
    case 67: {
      const a = pick([1000, 2000, 3000, 5000, 10000]), b = randInt(1, a - 1);
      return wnNumber(67, `Calculate <strong>${wnCommas(a)} − ${wnCommas(b)}</strong>.`, a - b);
    }
    case 68: {
      const b = randInt(1, 999), result = randInt(1, 999), a = b + result;
      return wnNumber(68, `<strong>? − ${b} = ${result}</strong>`, a);
    }
    case 69: {
      const a = randInt(100, 999), b = randInt(1, a), difference = a - b;
      return wnNumber(69, `<strong>${difference} + ${b} = ?</strong>`, a);
    }
    case 70: {
      const start = randInt(500, 1000), sold1 = randInt(50, 200), sold2 = randInt(20, Math.min(150, start - sold1));
      return wnNumber(70, `A shop has ${start} notebooks. It sells ${sold1} in the morning and ${sold2} in the afternoon. How many remain?`, start - sold1 - sold2);
    }

    case 71: {
      // Equal-groups questions now use a two-digit group size rather than only basic facts.
      const groups = randInt(3, 8);
      const each = pick([14, 16, 18, 19, 21, 24, 25, 27, 29, 32, 35, 36]);
      return wnNumber(71, `There are ${groups} equal groups with ${each} counters in each group. How many counters are there altogether?`, groups * each);
    }
    case 72: {
      // Repeated addition with teen and two-digit addends, e.g. 19 + 19 + 19.
      const addend = pick([14, 16, 18, 19, 21, 24, 25, 27, 29, 32, 35, 39]);
      const repeats = randInt(3, 5);
      return wnNumber(72, `Calculate <strong>${Array(repeats).fill(addend).join(' + ')}</strong>.`, addend * repeats);
    }
    case 73: {
      // Keep a small amount of multiplication-fact recall, but only one knowledge point uses it.
      const a = randInt(2, 12), b = randInt(2, 12);
      return wnNumber(73, `Calculate <strong>${a} × ${b}</strong>.`, a * b);
    }
    case 74: {
      const a = randInt(1, state.level === 'foundation' ? 99 : 999), multiplier = pick([10, 100, 1000]);
      return wnNumber(74, `Calculate <strong>${a} × ${wnCommas(multiplier)}</strong>.`, a * multiplier);
    }
    case 75: {
      const a = randInt(20, state.level === 'foundation' ? 299 : 599), b = randInt(3, 9);
      return wnNumber(75, `Calculate <strong>${wnCommas(a)} × ${b}</strong>.`, a * b);
    }
    case 76: {
      // Written multiplication: two-digit by two-digit is the main focus in every level.
      const a = randInt(state.level === 'foundation' ? 12 : 20, state.level === 'foundation' ? 59 : 89);
      const b = randInt(state.level === 'foundation' ? 11 : 12, state.level === 'foundation' ? 39 : 69);
      return wnNumber(76, `Calculate <strong>${a} × ${b}</strong>.`, a * b, {
        hint: 'Use written multiplication. Multiply by the ones digit, then the tens digit, and add the two partial products.'
      });
    }
    case 77: {
      // Gentle written multiplication: Foundation uses two digits by two digits;
      // Core and Challenge use easy three-digit numbers such as 123 × 23.
      if (state.level === 'foundation') {
        const a = randInt(20, 69), b = randInt(12, 39);
        return wnNumber(77, `Calculate <strong>${a} × ${b}</strong>.`, a * b, {
          hint: 'Use written multiplication and keep each partial product in the correct place-value column.'
        });
      }
      const hundreds = randInt(1, state.level === 'core' ? 3 : 4);
      const tens = randInt(1, 4);
      const ones = randInt(1, 5);
      const a = hundreds * 100 + tens * 10 + ones;
      const b = randInt(12, state.level === 'core' ? 29 : 34);
      return wnNumber(77, `Calculate <strong>${a} × ${b}</strong>.`, a * b, {
        hint: 'Use written multiplication and keep each partial product in the correct place-value column.'
      });
    }
    case 78: {
      // Partition a two-digit multiplier; this reinforces the structure of long multiplication.
      const a = randInt(state.level === 'foundation' ? 12 : 20, state.level === 'foundation' ? 59 : 89);
      const tens = randInt(1, state.level === 'foundation' ? 3 : 6) * 10;
      const ones = randInt(1, 9);
      const b = tens + ones;
      return wnNumber(78, `Use partitioning to calculate <strong>${a} × ${b}</strong>.`, a * b, {
        hint: `${a} × ${b} = (${a} × ${tens}) + (${a} × ${ones}).`
      });
    }
    case 79: {
      // Missing-factor questions also use two-digit by two-digit multiplication.
      const factor = randInt(state.level === 'foundation' ? 12 : 20, state.level === 'foundation' ? 59 : 89);
      const other = randInt(11, state.level === 'foundation' ? 29 : 49);
      const product = factor * other;
      return wnNumber(79, `<strong>${factor} × ? = ${wnCommas(product)}</strong>`, other);
    }
    case 80: {
      // Estimation uses two-digit by two-digit numbers, with only gentle three-digit examples in Challenge.
      let a, b;
      if (state.level === 'challenge') {
        const hundreds = randInt(1, 3), tens = randInt(1, 4), ones = randInt(1, 5);
        a = hundreds * 100 + tens * 10 + ones;
        b = randInt(12, 29);
      } else {
        a = randInt(20, 89);
        b = randInt(12, state.level === 'foundation' ? 39 : 69);
      }
      const roundedA = wnRound(a, a >= 100 ? 100 : 10);
      const roundedB = wnRound(b, 10);
      const estimate = roundedA * roundedB;
      return wnNumber(80, `Estimate <strong>${wnCommas(a)} × ${b}</strong> by rounding both numbers to convenient place values.`, estimate, {
        hint: `Round ${wnCommas(a)} to ${wnCommas(roundedA)} and ${b} to ${roundedB}.`
      });
    }

    case 81: {
      const people = randInt(2, 12), each = randInt(2, 15), total = people * each;
      return wnNumber(81, `${total} counters are shared equally among ${people} students. How many counters does each student receive?`, each);
    }
    case 82: {
      const size = randInt(2, 12), groups = randInt(2, 15), total = size * groups;
      return wnNumber(82, `${total} counters are put into groups of ${size}. How many groups are made?`, groups);
    }
    case 83: {
      const divisor = randInt(2, 12), quotient = randInt(2, 12), total = divisor * quotient;
      return wnNumber(83, `Calculate <strong>${total} ÷ ${divisor}</strong>.`, quotient);
    }
    case 84: {
      const divisor = pick([10, 100, 1000]), quotient = randInt(1, 999), total = divisor * quotient;
      return wnNumber(84, `Calculate <strong>${wnCommas(total)} ÷ ${wnCommas(divisor)}</strong>.`, quotient);
    }
    case 85: {
      const divisor = randInt(2, 9), quotient = randInt(10, 999), total = divisor * quotient;
      return wnNumber(85, `Calculate <strong>${wnCommas(total)} ÷ ${divisor}</strong>.`, quotient);
    }
    case 86: {
      const divisor = randInt(2, 9), quotient = randInt(2, 99), remainder = randInt(1, divisor - 1), total = divisor * quotient + remainder;
      return wnText(86, `Calculate <strong>${total} ÷ ${divisor}</strong>. Enter the answer as quotient r remainder, for example 7 r 2.`, `${quotient} r ${remainder}`, [`${quotient}r${remainder}`, `${quotient} R ${remainder}`, `${quotient} remainder ${remainder}`]);
    }
    case 87: {
      const divisor = randInt(11, 25), quotient = randInt(10, 99), total = divisor * quotient;
      return wnNumber(87, `Calculate <strong>${wnCommas(total)} ÷ ${divisor}</strong>.`, quotient);
    }
    case 88: {
      const divisor = randInt(2, 12), quotient = randInt(2, 20), total = divisor * quotient;
      const type = randInt(1, 3);
      if (type === 1) return wnNumber(88, `<strong>? ÷ ${divisor} = ${quotient}</strong>`, total);
      if (type === 2) return wnNumber(88, `<strong>${total} ÷ ? = ${quotient}</strong>`, divisor);
      return wnNumber(88, `<strong>${total} ÷ ${divisor} = ?</strong>`, quotient);
    }
    case 89: {
      const divisor = randInt(2, 12), quotient = randInt(2, 20), total = divisor * quotient;
      return wnNumber(89, `<strong>${quotient} × ${divisor} = ?</strong><br>Use multiplication to check ${total} ÷ ${divisor}.`, total);
    }
    case 90: {
      const seats = randInt(4, 9), buses = randInt(3, 12), extra = randInt(1, seats - 1), students = buses * seats + extra;
      return wnNumber(90, `${students} students travel in vans that hold ${seats} students each. How many vans are needed?`, buses + 1);
    }

    case 91: {
      const target = pick([10, 100, 1000]), a = randInt(1, target - 1);
      return wnNumber(91, `<strong>${a} + ? = ${target}</strong>`, target - a);
    }
    case 92: {
      const a = randInt(20, 499), b = randInt(20, 199);
      return wnNumber(92, `Use partitioning to calculate <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 93: {
      const a = randInt(100, 900), difference = randInt(10, 99), b = a + difference;
      return wnNumber(93, `Count up from ${a} to ${b}. What is the difference?`, difference);
    }
    case 94: {
      const a = pick([198, 299, 398, 499]), b = randInt(10, 99);
      return wnNumber(94, `Use compensation to calculate <strong>${a} + ${b}</strong>.`, a + b);
    }
    case 95: {
      const n = randInt(2, 100) * 2;
      if (chance(0.5)) return wnNumber(95, `Double <strong>${n}</strong>.`, n * 2);
      return wnNumber(95, `Halve <strong>${n}</strong>.`, n / 2);
    }
    case 96: {
      const n = randInt(2, 200);
      return wnNumber(96, `Calculate mentally: <strong>${n} × 5</strong>.`, n * 5);
    }
    case 97: {
      const n = randInt(2, 40);
      return wnNumber(97, `Calculate mentally: <strong>${n} × 25</strong>.`, n * 25);
    }
    case 98: {
      const n = randInt(2, 40);
      return wnNumber(98, `Calculate mentally: <strong>${n} × 50</strong>.`, n * 50);
    }
    case 99: {
      const divisor = pick([4, 5, 8, 10]), quotient = randInt(2, 30), total = divisor * quotient;
      return wnNumber(99, `Use a known fact to calculate <strong>${total} ÷ ${divisor}</strong>.`, quotient);
    }
    case 100:
      return wnChoice(100, 'Which is the more efficient mental strategy for 398 + 27?<br><strong>1.</strong> Add 400 + 27, then subtract 2<br><strong>2.</strong> Count one at a time', 1);

    case 101: {
      const a = randInt(100, 500), b = randInt(10, 100), c = randInt(10, 100);
      return wnNumber(101, `Calculate <strong>${a} + ${b} − ${c}</strong>.`, a + b - c);
    }
    case 102: {
      const c = randInt(2, 8), a = c * randInt(2, 10), b = randInt(2, 12);
      return wnNumber(102, `Calculate <strong>${a} × ${b} ÷ ${c}</strong>.`, a * b / c);
    }
    case 103: {
      const a = randInt(10, 50), b = randInt(2, 9), c = randInt(2, 9), d = randInt(1, Math.min(20, a + b * c));
      return wnNumber(103, `Calculate <strong>${a} + ${b} × ${c} − ${d}</strong>.`, a + b * c - d);
    }
    case 104: {
      const a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 9);
      return wnNumber(104, `Calculate <strong>${a} + ${b} × ${c}</strong>.`, a + b * c);
    }
    case 105: {
      const a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 9);
      return wnNumber(105, `Calculate <strong>(${a} + ${b}) × ${c}</strong>.`, (a + b) * c);
    }
    case 106: {
      const a = randInt(2, 12), b = randInt(2, 12), sum = a + b;
      return wnText(106, `<strong>${a} __ ${b} = ${sum}</strong><br>Enter the missing operation sign.`, '+', ['+', 'plus']);
    }
    case 107: {
      const a = randInt(2, 20), b = randInt(2, 20), c = randInt(2, 10), answer = a + b * c;
      return wnNumber(107, `<strong>${a} + ? × ${c} = ${answer}</strong>`, b);
    }
    case 108: {
      const a = randInt(2, 12), b = randInt(2, 12), statementTrue = chance(0.5), shown = statementTrue ? a * b : a * b + randInt(1, 5);
      return wnChoice(108, `Is <strong>${a} × ${b} = ${shown}</strong> true?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, statementTrue ? 1 : 2);
    }
    case 109: {
      const a = randInt(2, 20), b = randInt(2, 20), total = a + b;
      return wnNumber(109, `Use the inverse operation: <strong>${total} − ${a} = ?</strong>`, b);
    }
    case 110: {
      const boxes = randInt(3, 8), each = randInt(5, 20), total = boxes * each, givenAway = randInt(1, Math.min(20, total));
      return wnNumber(110, `There are ${boxes} boxes with ${each} pencils in each. Then ${givenAway} pencils are given away. How many pencils remain?`, total - givenAway);
    }

    case 111: {
      const a = randInt(2, 12), b = randInt(2, 12), n = a * b;
      return wnNumber(111, `One factor of <strong>${n}</strong> is ${a}. Find the matching factor.`, b);
    }
    case 112: {
      const n = pick([12, 18, 20, 24, 30, 36]);
      const factors = wnFactors(n);
      return wnText(112, `List all factors of <strong>${n}</strong>, separated by commas.`, factors.join(','), wnListAccepted(factors));
    }
    case 113: {
      const base = randInt(2, 12), multiple = base * randInt(2, 10), nonMultiple = multiple + 1;
      return wnChoice(113, `Which is a multiple of ${base}?<br><strong>1.</strong> ${multiple} &nbsp;&nbsp; <strong>2.</strong> ${nonMultiple}`, 1);
    }
    case 114: {
      const base = randInt(2, 12), values = [1, 2, 3, 4, 5].map(k => base * k);
      return wnText(114, `Write the first five positive multiples of <strong>${base}</strong>, separated by commas.`, values.join(','), wnListAccepted(values));
    }
    case 115: {
      const a = pick([12, 18, 24, 30]), b = pick([18, 24, 30, 36]), common = wnFactors(gcd(a, b));
      const right = pick(common);
      let wrong = right + 1;
      while (a % wrong === 0 && b % wrong === 0) wrong += 1;
      return wnChoice(115, `Which is a common factor of ${a} and ${b}?<br><strong>1.</strong> ${right} &nbsp;&nbsp; <strong>2.</strong> ${wrong}`, 1);
    }
    case 116: {
      const a = randInt(2, 8), b = randInt(2, 8), lcm = a * b / gcd(a, b);
      return wnChoice(116, `Which is a common multiple of ${a} and ${b}?<br><strong>1.</strong> ${lcm} &nbsp;&nbsp; <strong>2.</strong> ${lcm + 1}`, 1);
    }
    case 117: {
      const rule = pick([2, 5, 10]), n = randInt(1, 1000), divisible = Math.ceil(n / rule) * rule;
      return wnChoice(117, `Is <strong>${divisible}</strong> divisible by ${rule}?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }
    case 118: {
      const rule = pick([3, 6, 9]), factor = randInt(2, 50), n = rule * factor;
      return wnChoice(118, `Is <strong>${n}</strong> divisible by ${rule}?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }
    case 119: {
      const rule = pick([4, 8, 12]), factor = randInt(2, 50), n = rule * factor;
      return wnChoice(119, `Is <strong>${n}</strong> divisible by ${rule}?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }
    case 120: {
      const factor = randInt(2, 50), n = 11 * factor;
      return wnChoice(120, `Is <strong>${n}</strong> divisible by 11?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }

    case 121: {
      const start = randInt(0, 50), step = randInt(2, 20);
      return wnNumber(121, `Continue the pattern: <strong>${start}, ${start + step}, ${start + 2 * step}, ?</strong>`, start + 3 * step);
    }
    case 122: {
      const step = randInt(2, 20), end = randInt(0, 50), start = end + 3 * step;
      return wnNumber(122, `Continue the pattern: <strong>${start}, ${start - step}, ${start - 2 * step}, ?</strong>`, end);
    }
    case 123: {
      const start = randInt(1, 5), multiplier = randInt(2, 4);
      return wnNumber(123, `Continue the pattern: <strong>${start}, ${start * multiplier}, ${start * multiplier ** 2}, ?</strong>`, start * multiplier ** 3);
    }
    case 124: {
      const start = randInt(1, 20), step = randInt(2, 10);
      return wnNumber(124, `Find the missing term: <strong>${start}, ${start + step}, ?, ${start + 3 * step}</strong>`, start + 2 * step);
    }
    case 125: {
      const start = randInt(1, 20), step = randInt(2, 10);
      return wnText(125, `Describe the term-to-term rule for <strong>${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}</strong>.`, `add ${step}`, [`+${step}`, `add ${step}`, `plus ${step}`]);
    }
    case 126: {
      const start = randInt(100, 500), added = randInt(20, 200), removed = randInt(10, Math.min(100, start + added));
      return wnNumber(126, `A school has ${start} exercise books. It buys ${added} more and then uses ${removed}. How many books remain?`, start + added - removed);
    }
    case 127: {
      const boxes = randInt(2, 12), each = randInt(2, 20), students = randInt(2, 10), total = boxes * each;
      if (total % students === 0) return wnNumber(127, `${boxes} boxes each contain ${each} counters. The counters are shared equally among ${students} students. How many counters does each student receive?`, total / students);
      return wnNumber(127, `${boxes} boxes each contain ${each} counters. How many counters are there altogether?`, total);
    }
    case 128: {
      const capacity = randInt(4, 12), full = randInt(2, 10), remainder = randInt(1, capacity - 1), total = full * capacity + remainder;
      return wnText(128, `${total} items are packed into boxes holding ${capacity} each. How many full boxes are made and how many items are left? Enter as boxes r remainder.`, `${full} r ${remainder}`, [`${full}r${remainder}`, `${full} boxes r ${remainder}`, `${full} remainder ${remainder}`]);
    }
    case 129: {
      let digits = Array.from(new Set(wnDigits(4, true)));
      while (digits.length < 4) digits.push(randInt(0, 9));
      digits = digits.slice(0, 4);
      const askGreatest = chance(0.5);
      const sorted = [...digits].sort((a, b) => askGreatest ? b - a : a - b);
      if (!askGreatest && sorted[0] === 0) {
        const firstNonZero = sorted.findIndex(x => x !== 0);
        [sorted[0], sorted[firstNonZero]] = [sorted[firstNonZero], sorted[0]];
      }
      return wnNumber(129, `Use the digits <strong>${digits.join(', ')}</strong> once each to form the ${askGreatest ? 'greatest' : 'smallest'} possible whole number.`, wnNumberFromDigits(sorted));
    }
    case 130: {
      if (chance(0.5)) {
        const d = randInt(0, 9), n = 4200 + d * 10 + 5;
        return wnNumber(130, `The number <strong>42?5</strong> has ${d} tens. What digit replaces ?`, d);
      }
      const boxes = randInt(3, 8), each = randInt(6, 15), sold = randInt(5, 20), added = randInt(5, 20);
      return wnNumber(130, `A shop has ${boxes} boxes of ${each} pens. It sells ${sold} pens and later receives ${added} more. How many pens does it have now?`, boxes * each - sold + added);
    }

    default:
      throw new Error(`No whole-number generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.wholeNumbers = {};
for (const group of TOPIC_CONFIGS.wholeNumbers.groups) {
  TOPIC_BANKS.wholeNumbers[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.wholeNumbers[group.id][point.id] = () => generateWholeNumberPoint(pointNumber);
  }
}
