'use strict';

const RATIO_KNOWLEDGE_LABELS = [
  'Meaning of a Ratio',
  'Read Ratio Notation',
  'Write a Ratio Using a Colon',
  'Write a Ratio Using Words',
  'Part-to-Part Ratio',
  'Part-to-Whole Ratio',
  'Whole-to-Part Ratio',
  'Understand the Order of a Ratio',
  'Reverse a Ratio',
  'Equal Quantities and the Ratio 1:1',
  'Ratios with Three Parts',
  'Identify the First Quantity in a Ratio',
  'Identify the Second Quantity in a Ratio',
  'Identify All Quantities in a Three-Part Ratio',
  'Interpret “For Every” Statements',
  'Write a Ratio from a Picture',
  'Write a Ratio from a Group of Objects',
  'Write a Part-to-Part Ratio from Counts',
  'Write a Part-to-Whole Ratio from Counts',
  'Write a Whole-to-Part Ratio from Counts',
  'Write a Ratio from a Table',
  'Write a Ratio from a Short Description',
  'Write a Three-Part Ratio from Counts',
  'Write Ratios in the Required Order',
  'Identify and Correct a Reversed Ratio',
  'Find a Common Factor of Both Parts',
  'Find the Highest Common Factor of a Ratio',
  'Simplify a Ratio by Dividing Both Parts',
  'Simplify a Whole-Number Ratio',
  'Recognise a Ratio Already in Simplest Form',
  'Simplify a Ratio with Large Numbers',
  'Simplify a Three-Part Ratio',
  'Simplify a Ratio Containing Decimals',
  'Simplify a Ratio Containing Fractions',
  'Simplify a Ratio with One Fraction and One Whole Number',
  'Simplify a Ratio with Mixed Numbers',
  'Remove Decimals Before Simplifying',
  'Remove Fractions Before Simplifying',
  'Check That a Ratio Is Fully Simplified',
  'Identify an Incorrectly Simplified Ratio',
  'Recognise When Units Must Be Converted',
  'Convert Units Before Writing a Ratio',
  'Simplify a Length Ratio',
  'Simplify a Mass Ratio',
  'Simplify a Capacity Ratio',
  'Simplify a Time Ratio',
  'Simplify a Money Ratio',
  'Simplify a Ratio of Metres and Centimetres',
  'Simplify a Ratio of Kilograms and Grams',
  'Simplify a Ratio of Litres and Millilitres',
  'Multiply Both Parts by the Same Number',
  'Divide Both Parts by the Same Number',
  'Generate an Equivalent Ratio',
  'Choose an Equivalent Ratio',
  'Identify Ratios That Are Not Equivalent',
  'Find a Missing Value Using One Scale Factor',
  'Find a Missing Value by Scaling Up',
  'Find a Missing Value by Scaling Down',
  'Find a Missing Value in a Three-Part Ratio',
  'Complete a Table of Equivalent Ratios',
  'Write Several Equivalent Ratios',
  'Check Equivalent Ratios Using Cross Multiplication',
  'Find an Equivalent Ratio with a Required First Part',
  'Find an Equivalent Ratio with a Required Second Part',
  'Compare Ratios with the Same First Part',
  'Compare Ratios with the Same Second Part',
  'Compare Ratios by Simplifying',
  'Compare Ratios Using a Common First Part',
  'Compare Ratios Using a Common Second Part',
  'Compare Ratios Using Cross Multiplication',
  'Order Ratios from Smallest to Largest',
  'Order Ratios from Largest to Smallest',
  'Compare Ratios in Context',
  'Find Which Mixture Is More Concentrated',
  'Find the Total Number of Ratio Parts',
  'Find the Fraction Represented by the First Part',
  'Find the Fraction Represented by the Second Part',
  'Find Fractions from a Three-Part Ratio',
  'Find One Ratio Part from the Total',
  'Find Each Quantity from the Total',
  'Find the Whole When One Quantity Is Known',
  'Find Another Quantity When One Quantity Is Known',
  'Find the Difference Between Two Ratio Parts',
  'Find the Total from the Difference Between Parts',
  'Share a Total in a Two-Part Ratio',
  'Share a Total in a Three-Part Ratio',
  'Share Money in a Ratio',
  'Share Objects in a Ratio',
  'Share a Length in a Ratio',
  'Share a Mass in a Ratio',
  'Share a Capacity in a Ratio',
  'Share a Decimal Amount in a Ratio',
  'Find the Larger Share',
  'Find the Smaller Share',
  'Find All Shares and Check the Total',
  'Convert a Part-to-Part Ratio to Fractions of the Whole',
  'Convert Fractions of a Whole to a Ratio',
  'Convert a Ratio to Percentages',
  'Convert Percentages to a Ratio',
  'Compare a Ratio, Fraction and Percentage',
  'Scale a Recipe Up',
  'Scale a Recipe Down',
  'Find a Missing Ingredient Amount',
  'Change a Recipe to a Required Number of Servings',
  'Interpret a Map Scale Written as a Ratio',
  'Find an Actual Distance from a Map Distance',
  'Find a Map Distance from an Actual Distance',
  'Convert Units in a Scale Question',
  'Use a Model Scale',
  'Find an Actual Length from a Model',
  'Combine Two Ratios with a Common Quantity',
  'Make the Common Quantity Equal Before Combining',
  'Find a Three-Part Ratio from Two Ratios',
  'Find Quantities from Two Connected Ratios',
  'Check a Combined Ratio',
  'Find a New Ratio after Adding to One Part',
  'Find a New Ratio after Removing from One Part',
  'Find a New Ratio after Adding to Both Parts',
  'Find a New Ratio after Removing from Both Parts',
  'Find How Much Was Added from the New Ratio',
  'Find How Much Was Removed from the New Ratio',
  'Find the Original Quantities from a Changed Ratio',
  'Before-and-After Ratio Problems',
  'Ratio Problems with a Known Total after a Change',
  'Ratio Problems with a Known Difference after a Change',
  'Find Quantities from a Given Total',
  'Find Quantities from a Given Difference',
  'Find Quantities When One Part Is Known',
  'Find a Total from One Known Quantity',
  'Find an Unknown Ratio Part',
  'Compare Two Groups Using Ratios',
  'Mixture Ratio Problems',
  'Colour and Object Ratio Problems',
  'Class and Team Ratio Problems',
  'Money Sharing Ratio Problems',
  'Length and Perimeter Ratio Problems',
  'Angle Ratio Problems',
  'Ratio Problems with Three Quantities',
  'Choose the Correct Ratio Operation',
  'Multi-Step Ratio Problems'
];

function ratioPoints(start, end) {
  return RATIO_KNOWLEDGE_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `r${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.ratios = {
  title: 'Ratios',
  pageTitle: 'Knowledge Practice — Ratios',
  knowledgeMapTitle: 'Ratios Practice Structure',
  intro: 'The 140 detailed ratio knowledge points are organised into 15 connected practice sections. The numbering is continuous and does not skip.',
  teacherNote: 'Ratio is separated from unit rate, speed–distance–time, work rate, and direct or inverse proportion.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'understandingRatios', practiceNumber: 1, label: 'Understanding Ratios', description: 'Understand ratio language, order, parts and three-part ratios.', knowledgePoints: ratioPoints(1, 15) },
    { id: 'writingRatios', practiceNumber: 2, label: 'Writing Ratios', description: 'Write ratios from symbols, counts, tables and descriptions.', knowledgePoints: ratioPoints(16, 25) },
    { id: 'simplifyingWholeRatios', practiceNumber: 3, label: 'Simplifying Whole-Number Ratios', description: 'Use common factors and HCF to simplify two- and three-part ratios.', knowledgePoints: ratioPoints(26, 32) },
    { id: 'simplifyingFractionRatios', practiceNumber: 4, label: 'Simplifying Decimal and Fraction Ratios', description: 'Remove decimals and fractions, then check that a ratio is fully simplified.', knowledgePoints: ratioPoints(33, 40) },
    { id: 'differentUnits', practiceNumber: 5, label: 'Ratios with Different Units', description: 'Convert length, mass, capacity, time and money units before simplifying.', knowledgePoints: ratioPoints(41, 50) },
    { id: 'equivalentRatios', practiceNumber: 6, label: 'Equivalent Ratios', description: 'Scale ratios up or down and find missing values.', knowledgePoints: ratioPoints(51, 64) },
    { id: 'comparingRatios', practiceNumber: 7, label: 'Comparing Ratios', description: 'Compare and order ratios using scaling, simplification and cross multiplication.', knowledgePoints: ratioPoints(65, 74) },
    { id: 'ratioAndWhole', practiceNumber: 8, label: 'Ratio and the Whole', description: 'Connect ratio parts to fractions, totals and differences.', knowledgePoints: ratioPoints(75, 84) },
    { id: 'sharingRatio', practiceNumber: 9, label: 'Sharing in a Ratio', description: 'Share money, objects and measurements in two- and three-part ratios.', knowledgePoints: ratioPoints(85, 95) },
    { id: 'ratioConversionsRecipes', practiceNumber: 10, label: 'Ratios, Fractions, Percentages and Recipes', description: 'Convert forms and scale recipe quantities.', knowledgePoints: ratioPoints(96, 104) },
    { id: 'scalesCombinedRatios', practiceNumber: 11, label: 'Map Scales, Models and Combined Ratios', description: 'Use scales and connect two ratios through a common quantity.', knowledgePoints: ratioPoints(105, 115) },
    { id: 'changingRatios', practiceNumber: 12, label: 'Changing Ratios', description: 'Find new or original ratios after quantities are added or removed.', knowledgePoints: ratioPoints(116, 125) },
    { id: 'totalsDifferences', practiceNumber: 13, label: 'Ratio Problems from Totals and Differences', description: 'Find quantities from totals, differences and known parts.', knowledgePoints: ratioPoints(126, 130) },
    { id: 'ratioContexts', practiceNumber: 14, label: 'Ratio Problems in Context', description: 'Apply ratios to groups, mixtures, colours, teams and money.', knowledgePoints: ratioPoints(131, 135) },
    { id: 'geometryMultiStep', practiceNumber: 15, label: 'Geometry and Multi-Step Ratio Problems', description: 'Use ratios in perimeter, angle and multi-step problems.', knowledgePoints: ratioPoints(136, 140) }
  ]
};

function rFormat(value, places = 6) {
  const rounded = Number(Number(value).toFixed(places));
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function rLevelMultiplier() {
  return state.level === 'foundation' ? randInt(1, 3) : state.level === 'core' ? randInt(2, 6) : randInt(4, 10);
}

function rCoprimePair(max = 9) {
  let a;
  let b;
  do {
    a = randInt(1, max);
    b = randInt(1, max);
  } while (a === b || gcd(a, b) !== 1);
  return [a, b];
}

function rCoprimeTriple(max = 7) {
  let a;
  let b;
  let c;
  do {
    a = randInt(1, max);
    b = randInt(1, max);
    c = randInt(1, max);
  } while (gcd(gcd(a, b), c) !== 1 || new Set([a, b, c]).size < 2);
  return [a, b, c];
}

function rRatio(parts) {
  return parts.map(rFormat).join(':');
}

function rRatioAccepted(parts) {
  const values = parts.map(rFormat);
  return [
    values.join(':'),
    values.join(' : '),
    values.join(' to ')
  ];
}

function rRatioQuestion(point, text, parts, hint = 'Keep the quantities in the order given.') {
  const answer = rRatio(parts);
  return {
    text,
    answer,
    displayAnswer: answer,
    acceptedAnswers: rRatioAccepted(parts),
    answerType: 'text',
    hint,
    subtopic: RATIO_KNOWLEDGE_LABELS[point - 1]
  };
}

function rNumberQuestion(point, text, answer, options = {}) {
  return {
    text,
    answer,
    displayAnswer: options.displayAnswer ?? rFormat(answer),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: options.answerType ?? 'rational',
    hint: options.hint ?? '',
    subtopic: RATIO_KNOWLEDGE_LABELS[point - 1]
  };
}

function rTextQuestion(point, text, answer, acceptedAnswers = null, hint = '') {
  return {
    text,
    answer,
    displayAnswer: String(answer),
    acceptedAnswers: acceptedAnswers || [answer],
    answerType: 'text',
    hint,
    subtopic: RATIO_KNOWLEDGE_LABELS[point - 1]
  };
}

function rChoiceQuestion(point, text, answer, hint = 'Enter the number of the correct choice.') {
  return rNumberQuestion(point, text, answer, { hint });
}

function rFractionQuestion(point, text, numerator, denominator, hint = 'Write the fraction in simplest form.') {
  const f = simplifyFraction(numerator, denominator);
  return rNumberQuestion(point, text, `${f.n}/${f.d}`, {
    displayAnswer: fractionHtml(f.n, f.d),
    hint
  });
}

function rPercentQuestion(point, text, percent, hint = '') {
  const value = rFormat(percent);
  return rTextQuestion(point, text, `${value}%`, [value, `${value}%`], hint);
}

function rMoney(value) {
  return `$${Number(value).toFixed(2)}`;
}

function rSimpleRatio(max = 8) {
  const [a, b] = rCoprimePair(max);
  const k = rLevelMultiplier();
  return { a, b, k, x: a * k, y: b * k };
}

function rShareValues(parts, partValue = null) {
  const one = partValue ?? rLevelMultiplier() * 2;
  return { one, total: parts.reduce((sum, value) => sum + value, 0) * one };
}

function rCompareChoice(point, left, right, context = 'Which ratio has the greater first part compared with its second part?') {
  const leftValue = left[0] / left[1];
  const rightValue = right[0] / right[1];
  const answer = Math.abs(leftValue - rightValue) < 1e-9 ? 3 : leftValue > rightValue ? 1 : 2;
  return rChoiceQuestion(point, `${context}<br><strong>1.</strong> ${rRatio(left)} &nbsp;&nbsp; <strong>2.</strong> ${rRatio(right)} &nbsp;&nbsp; <strong>3.</strong> Equal`, answer);
}

function rCombinedRatioValues() {
  const a = randInt(1, 4);
  const b1 = randInt(2, 5);
  const b2 = randInt(2, 5);
  const c = randInt(1, 5);
  const l = (b1 * b2) / gcd(b1, b2);
  return {
    ab: [a, b1],
    bc: [b2, c],
    combined: [a * (l / b1), l, c * (l / b2)]
  };
}

function generateRatioPoint(point) {
  const n = rLevelMultiplier();

  switch (point) {
    case 1:
      return rChoiceQuestion(1, 'A ratio compares two or more quantities. Enter <strong>1</strong> for true or <strong>2</strong> for false.', 1);
    case 2:
      return rChoiceQuestion(2, `In the ratio <strong>${randInt(2, 8)}:${randInt(2, 8)}</strong>, the colon is read as:<br><strong>1.</strong> to &nbsp;&nbsp; <strong>2.</strong> of`, 1);
    case 3: {
      const a = randInt(1, 9), b = randInt(1, 9);
      return rRatioQuestion(3, `Write <strong>${a} to ${b}</strong> using a colon.`, [a, b]);
    }
    case 4: {
      const a = randInt(1, 9), b = randInt(1, 9);
      return rTextQuestion(4, `Write <strong>${a}:${b}</strong> using words.`, `${a} to ${b}`, [`${a} to ${b}`]);
    }
    case 5: {
      const red = randInt(2, 9), blue = randInt(2, 9);
      return rRatioQuestion(5, `There are <strong>${red} red counters</strong> and <strong>${blue} blue counters</strong>. Write the ratio of red counters to blue counters.`, [red, blue]);
    }
    case 6: {
      const girls = randInt(2, 9), boys = randInt(2, 9);
      return rRatioQuestion(6, `A group has <strong>${girls} girls</strong> and <strong>${boys} boys</strong>. Write the ratio of girls to all students.`, [girls, girls + boys]);
    }
    case 7: {
      const cats = randInt(2, 8), dogs = randInt(2, 8);
      return rRatioQuestion(7, `There are <strong>${cats} cats</strong> and <strong>${dogs} dogs</strong>. Write the ratio of all animals to dogs.`, [cats + dogs, dogs]);
    }
    case 8: {
      const apples = randInt(2, 8), pears = randInt(2, 8);
      return rRatioQuestion(8, `There are ${apples} apples and ${pears} pears. Write the ratio of <strong>pears to apples</strong>.`, [pears, apples]);
    }
    case 9: {
      const a = randInt(1, 9), b = randInt(1, 9);
      return rRatioQuestion(9, `Reverse the ratio <strong>${a}:${b}</strong>.`, [b, a]);
    }
    case 10: {
      const amount = randInt(3, 12);
      return rRatioQuestion(10, `A box has ${amount} red pens and ${amount} blue pens. Simplify the ratio of red pens to blue pens.`, [1, 1]);
    }
    case 11: {
      const a = randInt(1, 6), b = randInt(1, 6), c = randInt(1, 6);
      return rRatioQuestion(11, `Write the ratio for <strong>${a} red</strong>, <strong>${b} blue</strong>, and <strong>${c} green</strong> beads in that order.`, [a, b, c]);
    }
    case 12: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return rNumberQuestion(12, `In the ratio <strong>${a}:${b}</strong>, what is the first quantity?`, a);
    }
    case 13: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return rNumberQuestion(13, `In the ratio <strong>${a}:${b}</strong>, what is the second quantity?`, b);
    }
    case 14: {
      const parts = [randInt(1, 6), randInt(1, 6), randInt(1, 6)];
      return rRatioQuestion(14, `A ratio has first quantity ${parts[0]}, second quantity ${parts[1]}, and third quantity ${parts[2]}. Write the complete ratio.`, parts);
    }
    case 15: {
      const a = randInt(1, 6), b = randInt(2, 9);
      return rRatioQuestion(15, `For every <strong>${a} yellow tiles</strong>, there are <strong>${b} green tiles</strong>. Write yellow : green.`, [a, b]);
    }

    case 16: {
      const circles = randInt(2, 6), squares = randInt(2, 6);
      return rRatioQuestion(16, `The pattern shows ${'●'.repeat(circles)} ${'■'.repeat(squares)}. Write the ratio of circles to squares.`, [circles, squares]);
    }
    case 17: {
      const pencils = randInt(3, 10), rulers = randInt(2, 8);
      return rRatioQuestion(17, `A tray contains ${pencils} pencils and ${rulers} rulers. Write pencils : rulers.`, [pencils, rulers]);
    }
    case 18: {
      const red = randInt(2, 8), yellow = randInt(2, 8);
      return rRatioQuestion(18, `There are ${red} red flowers and ${yellow} yellow flowers. Write the part-to-part ratio red : yellow.`, [red, yellow]);
    }
    case 19: {
      const selected = randInt(2, 8), other = randInt(2, 8);
      return rRatioQuestion(19, `${selected} of the counters are blue and ${other} are not blue. Write blue : total.`, [selected, selected + other]);
    }
    case 20: {
      const selected = randInt(2, 8), other = randInt(2, 8);
      return rRatioQuestion(20, `${selected} of the books are fiction and ${other} are non-fiction. Write total books : fiction books.`, [selected + other, selected]);
    }
    case 21: {
      const buses = randInt(2, 9), cars = randInt(3, 12);
      return rRatioQuestion(21, `A table shows buses = ${buses} and cars = ${cars}. Write the ratio buses : cars.`, [buses, cars]);
    }
    case 22: {
      const adults = randInt(2, 10), children = randInt(2, 10);
      return rRatioQuestion(22, `At a workshop there are ${adults} adults and ${children} children. Write adults : children.`, [adults, children]);
    }
    case 23: {
      const a = randInt(1, 6), b = randInt(1, 6), c = randInt(1, 6);
      return rRatioQuestion(23, `A shelf has ${a} red folders, ${b} blue folders, and ${c} black folders. Write red : blue : black.`, [a, b, c]);
    }
    case 24: {
      const tea = randInt(2, 9), coffee = randInt(2, 9);
      return rRatioQuestion(24, `A café sells ${tea} cups of tea and ${coffee} cups of coffee. Write the ratio in the required order <strong>coffee : tea</strong>.`, [coffee, tea]);
    }
    case 25: {
      const cats = randInt(2, 9), dogs = randInt(2, 9);
      return rRatioQuestion(25, `A student wrote ${dogs}:${cats} for the ratio of cats to dogs when there are ${cats} cats and ${dogs} dogs. Write the correct ratio.`, [cats, dogs]);
    }

    case 26: {
      const common = pick([2, 3, 4, 5, 6]);
      const a = common * randInt(2, 6), b = common * randInt(2, 6);
      return rNumberQuestion(26, `Give one common factor greater than 1 of <strong>${a}</strong> and <strong>${b}</strong>.`, common, { acceptedAnswers: [common, gcd(a, b)] });
    }
    case 27: {
      const base = rCoprimePair(8), factor = pick([2, 3, 4, 5, 6, 8, 10]);
      return rNumberQuestion(27, `Find the HCF of the two parts in <strong>${base[0] * factor}:${base[1] * factor}</strong>.`, factor);
    }
    case 28: {
      const a = randInt(2, 8), b = randInt(2, 8), factor = pick([2, 3, 4, 5]);
      return rRatioQuestion(28, `Divide both parts of <strong>${a * factor}:${b * factor}</strong> by <strong>${factor}</strong>.`, [a, b]);
    }
    case 29: {
      const r = rSimpleRatio(9);
      return rRatioQuestion(29, `Simplify <strong>${r.x}:${r.y}</strong>.`, [r.a, r.b], 'Divide both parts by their highest common factor.');
    }
    case 30: {
      const [a, b] = rCoprimePair(9);
      return rChoiceQuestion(30, `Is <strong>${a}:${b}</strong> already in simplest form?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }
    case 31: {
      const [a, b] = rCoprimePair(12), factor = pick([10, 12, 15, 20, 25]);
      return rRatioQuestion(31, `Simplify <strong>${a * factor}:${b * factor}</strong>.`, [a, b]);
    }
    case 32: {
      const [a, b, c] = rCoprimeTriple(7), factor = pick([2, 3, 4, 5, 6]);
      return rRatioQuestion(32, `Simplify <strong>${a * factor}:${b * factor}:${c * factor}</strong>.`, [a, b, c]);
    }
    case 33: {
      const [a, b] = rCoprimePair(8), scale = pick([0.1, 0.2, 0.5]);
      return rRatioQuestion(33, `Simplify <strong>${rFormat(a * scale)}:${rFormat(b * scale)}</strong>.`, [a, b], 'Multiply both parts by the same power of 10, then simplify.');
    }
    case 34: {
      const [a, b] = rCoprimePair(7), den = pick([2, 3, 4, 5]);
      return rRatioQuestion(34, `Simplify <strong>${a}/${den} : ${b}/${den}</strong>.`, [a, b], 'Multiply both parts by the common denominator.');
    }
    case 35: {
      const whole = randInt(1, 5), den = pick([2, 3, 4, 5]), num = randInt(1, den - 1);
      const g = gcd(num, whole * den);
      return rRatioQuestion(35, `Simplify <strong>${num}/${den} : ${whole}</strong>.`, [num / g, whole * den / g], 'Multiply both parts by the denominator, then simplify.');
    }
    case 36: {
      const den = pick([2, 3, 4]), w1 = randInt(1, 3), w2 = randInt(1, 3), n1 = randInt(1, den - 1), n2 = randInt(1, den - 1);
      const p1 = w1 * den + n1, p2 = w2 * den + n2, g = gcd(p1, p2);
      return rRatioQuestion(36, `Simplify <strong>${w1} ${n1}/${den} : ${w2} ${n2}/${den}</strong>.`, [p1 / g, p2 / g], 'Change both mixed numbers to improper fractions first.');
    }
    case 37: {
      const [a, b] = rCoprimePair(8), decimals = [a / 10, b / 10];
      return rRatioQuestion(37, `Multiply both parts of <strong>${rFormat(decimals[0])}:${rFormat(decimals[1])}</strong> by 10. Write the resulting whole-number ratio.`, [a, b]);
    }
    case 38: {
      const [a, b] = rCoprimePair(8), den = pick([2, 3, 4, 5]);
      return rRatioQuestion(38, `Multiply both parts of <strong>${a}/${den} : ${b}/${den}</strong> by ${den}.`, [a, b]);
    }
    case 39: {
      const [a, b] = rCoprimePair(9);
      return rChoiceQuestion(39, `Is <strong>${a}:${b}</strong> fully simplified?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }
    case 40: {
      const [a, b] = rCoprimePair(7), factor = pick([4, 6, 8]);
      return rChoiceQuestion(40, `Which is the correct simplest form of <strong>${a * factor}:${b * factor}</strong>?<br><strong>1.</strong> ${a}:${b} &nbsp;&nbsp; <strong>2.</strong> ${a * 2}:${b * 2}`, 1);
    }

    case 41:
      return rChoiceQuestion(41, 'Before simplifying the ratio <strong>2 m : 50 cm</strong>, should the units be made the same?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No', 1);
    case 42:
      return rRatioQuestion(42, 'Convert the units and simplify <strong>1 m : 25 cm</strong>.', [4, 1]);
    case 43: {
      const cm = pick([25, 50, 75]), m = pick([1, 2, 3]);
      const a = m * 100, g = gcd(a, cm);
      return rRatioQuestion(43, `Simplify <strong>${m} m : ${cm} cm</strong>.`, [a / g, cm / g]);
    }
    case 44: {
      const kg = pick([1, 2, 3]), grams = pick([250, 500, 750]);
      const a = kg * 1000, g = gcd(a, grams);
      return rRatioQuestion(44, `Simplify <strong>${kg} kg : ${grams} g</strong>.`, [a / g, grams / g]);
    }
    case 45: {
      const litres = pick([1, 2, 3]), ml = pick([250, 500, 750]);
      const a = litres * 1000, g = gcd(a, ml);
      return rRatioQuestion(45, `Simplify <strong>${litres} L : ${ml} mL</strong>.`, [a / g, ml / g]);
    }
    case 46: {
      const hours = pick([1, 2, 3]), minutes = pick([15, 30, 45]);
      const a = hours * 60, g = gcd(a, minutes);
      return rRatioQuestion(46, `Simplify <strong>${hours} h : ${minutes} min</strong>.`, [a / g, minutes / g]);
    }
    case 47: {
      const dollars = pick([2, 3, 4, 5]), cents = pick([25, 50, 75]);
      const a = dollars * 100, g = gcd(a, cents);
      return rRatioQuestion(47, `Simplify <strong>$${dollars} : ${cents} cents</strong>.`, [a / g, cents / g]);
    }
    case 48: {
      const m = pick([1, 2, 3]), cm = pick([20, 40, 50, 80]);
      const a = m * 100, g = gcd(a, cm);
      return rRatioQuestion(48, `Simplify <strong>${m} m : ${cm} cm</strong>.`, [a / g, cm / g]);
    }
    case 49: {
      const kg = pick([1, 2, 4]), g2 = pick([200, 250, 400, 500, 800]);
      const a = kg * 1000, g = gcd(a, g2);
      return rRatioQuestion(49, `Simplify <strong>${kg} kg : ${g2} g</strong>.`, [a / g, g2 / g]);
    }
    case 50: {
      const L = pick([1, 2, 4]), ml = pick([200, 250, 400, 500, 800]);
      const a = L * 1000, g = gcd(a, ml);
      return rRatioQuestion(50, `Simplify <strong>${L} L : ${ml} mL</strong>.`, [a / g, ml / g]);
    }

    case 51: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 6);
      return rRatioQuestion(51, `Multiply both parts of <strong>${a}:${b}</strong> by <strong>${k}</strong>.`, [a * k, b * k]);
    }
    case 52: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 6);
      return rRatioQuestion(52, `Divide both parts of <strong>${a * k}:${b * k}</strong> by <strong>${k}</strong>.`, [a, b]);
    }
    case 53: {
      const a = randInt(1, 8), b = randInt(1, 8), k = randInt(2, 6);
      return rRatioQuestion(53, `Write an equivalent ratio to <strong>${a}:${b}</strong> by multiplying both parts by ${k}.`, [a * k, b * k]);
    }
    case 54: {
      const a = randInt(1, 6), b = randInt(1, 6), k = randInt(2, 5);
      return rChoiceQuestion(54, `Which ratio is equivalent to <strong>${a}:${b}</strong>?<br><strong>1.</strong> ${a * k}:${b * k} &nbsp;&nbsp; <strong>2.</strong> ${a * k}:${b * k + 1}`, 1);
    }
    case 55: {
      const a = randInt(1, 6), b = randInt(1, 6), k = randInt(2, 5);
      return rChoiceQuestion(55, `Which ratio is <strong>not</strong> equivalent to ${a}:${b}?<br><strong>1.</strong> ${a * k}:${b * k} &nbsp;&nbsp; <strong>2.</strong> ${a * k}:${b * k + 1}`, 2);
    }
    case 56: {
      const a = randInt(1, 8), b = randInt(1, 8), k = randInt(2, 6);
      return rNumberQuestion(56, `<strong>${a}:${b} = ${a * k}:?</strong> Find the missing value.`, b * k);
    }
    case 57: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(3, 8);
      return rNumberQuestion(57, `<strong>${a}:${b} = ?:${b * k}</strong> Find the missing value by scaling up.`, a * k);
    }
    case 58: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 6);
      return rNumberQuestion(58, `<strong>${a * k}:${b * k} = ${a}:?</strong> Find the missing value by scaling down.`, b);
    }
    case 59: {
      const a = randInt(1, 5), b = randInt(1, 5), c = randInt(1, 5), k = randInt(2, 5);
      return rNumberQuestion(59, `<strong>${a}:${b}:${c} = ${a * k}:?:${c * k}</strong> Find the missing value.`, b * k);
    }
    case 60: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 6);
      return rRatioQuestion(60, `Complete the equivalent-ratio table: <strong>${a}:${b}</strong> and multiplier <strong>×${k}</strong>. Write the new ratio.`, [a * k, b * k]);
    }
    case 61: {
      const a = randInt(1, 6), b = randInt(1, 6), k = pick([3, 4, 5]);
      return rRatioQuestion(61, `The first two equivalent ratios are ${a}:${b} and ${a * 2}:${b * 2}. Write the ratio made using multiplier ×${k}.`, [a * k, b * k]);
    }
    case 62: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 6), equivalent = chance(0.5);
      const c = a * k, d = equivalent ? b * k : b * k + 1;
      return rChoiceQuestion(62, `Are <strong>${a}:${b}</strong> and <strong>${c}:${d}</strong> equivalent?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, equivalent ? 1 : 2);
    }
    case 63: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 7);
      return rNumberQuestion(63, `Find the second part of an equivalent ratio to <strong>${a}:${b}</strong> whose first part is <strong>${a * k}</strong>.`, b * k);
    }
    case 64: {
      const a = randInt(1, 7), b = randInt(1, 7), k = randInt(2, 7);
      return rNumberQuestion(64, `Find the first part of an equivalent ratio to <strong>${a}:${b}</strong> whose second part is <strong>${b * k}</strong>.`, a * k);
    }

    case 65: {
      const first = randInt(2, 8), b1 = randInt(2, 9), b2 = randInt(2, 9);
      return rCompareChoice(65, [first, b1], [first, b2]);
    }
    case 66: {
      const second = randInt(2, 8), a1 = randInt(2, 9), a2 = randInt(2, 9);
      return rCompareChoice(66, [a1, second], [a2, second]);
    }
    case 67: {
      const [a, b] = rCoprimePair(7), k1 = randInt(2, 5), k2 = randInt(2, 5);
      return rCompareChoice(67, [a * k1, b * k1], [a * k2, b * k2]);
    }
    case 68:
      return rCompareChoice(68, [2, 3], [4, 5], 'Scale to a common first part, then decide which first-to-second ratio is greater.');
    case 69:
      return rCompareChoice(69, [3, 8], [5, 8], 'The second parts are the same. Which first-to-second ratio is greater?');
    case 70:
      return rCompareChoice(70, [randInt(1, 7), randInt(2, 9)], [randInt(1, 7), randInt(2, 9)], 'Use cross multiplication. Which ratio is greater?');
    case 71:
      return rTextQuestion(71, 'Order these ratios from smallest to largest by entering the choice numbers: <strong>1.</strong> 1:4 &nbsp; <strong>2.</strong> 3:4 &nbsp; <strong>3.</strong> 1:2', '1,3,2', ['1,3,2', '1 3 2', '1-3-2']);
    case 72:
      return rTextQuestion(72, 'Order these ratios from largest to smallest by entering the choice numbers: <strong>1.</strong> 2:5 &nbsp; <strong>2.</strong> 4:5 &nbsp; <strong>3.</strong> 3:5', '2,3,1', ['2,3,1', '2 3 1', '2-3-1']);
    case 73:
      return rChoiceQuestion(73, 'Team A wins 3 games for every 5 played. Team B wins 4 games for every 7 played. Which team has the higher winning ratio?<br><strong>1.</strong> Team A &nbsp;&nbsp; <strong>2.</strong> Team B', 1);
    case 74:
      return rChoiceQuestion(74, 'Mixture A uses concentrate : water = 2:5. Mixture B uses concentrate : water = 3:8. Which mixture is more concentrated?<br><strong>1.</strong> A &nbsp;&nbsp; <strong>2.</strong> B', 1);

    case 75: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return rNumberQuestion(75, `How many total ratio parts are in <strong>${a}:${b}</strong>?`, a + b);
    }
    case 76: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return rFractionQuestion(76, `In the ratio <strong>${a}:${b}</strong>, what fraction of the whole is represented by the first part?`, a, a + b);
    }
    case 77: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return rFractionQuestion(77, `In the ratio <strong>${a}:${b}</strong>, what fraction of the whole is represented by the second part?`, b, a + b);
    }
    case 78: {
      const a = randInt(1, 5), b = randInt(1, 5), c = randInt(1, 5);
      return rFractionQuestion(78, `In the ratio <strong>${a}:${b}:${c}</strong>, what fraction of the whole is represented by the third part?`, c, a + b + c);
    }
    case 79: {
      const a = randInt(1, 7), b = randInt(1, 7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(79, `A total of ${total} is divided in the ratio ${a}:${b}. What is the value of one ratio part?`, one);
    }
    case 80: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      const askFirst = chance(0.5);
      return rNumberQuestion(80, `${total} items are divided in the ratio ${a}:${b}. How many items are in the ${askFirst ? 'first' : 'second'} group?`, (askFirst ? a : b) * one);
    }
    case 81: {
      const a = randInt(1, 6), b = randInt(1, 6), one = randInt(2, 10), known = a * one;
      return rNumberQuestion(81, `Two quantities are in the ratio ${a}:${b}. The first quantity is ${known}. Find the whole total.`, (a + b) * one);
    }
    case 82: {
      const a = randInt(1, 6), b = randInt(1, 6), one = randInt(2, 10), known = a * one;
      return rNumberQuestion(82, `Red and blue counters are in the ratio ${a}:${b}. There are ${known} red counters. How many blue counters are there?`, b * one);
    }
    case 83: {
      let a = randInt(1, 5), b = randInt(2, 8);
      if (a === b) b += 1;
      const one = randInt(2, 10);
      return rNumberQuestion(83, `Two quantities are in the ratio ${a}:${b}, and one ratio part is worth ${one}. Find the difference between the quantities.`, Math.abs(a - b) * one);
    }
    case 84: {
      let a = randInt(1, 5), b = randInt(2, 8);
      while (a === b) b = randInt(2, 8);
      const one = randInt(2, 10), difference = Math.abs(a - b) * one;
      return rNumberQuestion(84, `Two quantities are in the ratio ${a}:${b}. Their difference is ${difference}. Find their total.`, (a + b) * one);
    }

    case 85: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(85, `Share ${total} in the ratio ${a}:${b}. Find the first share.`, a * one);
    }
    case 86: {
      const [a, b, c] = rCoprimeTriple(6), one = randInt(2, 8), total = (a + b + c) * one;
      return rNumberQuestion(86, `Share ${total} in the ratio ${a}:${b}:${c}. Find the third share.`, c * one);
    }
    case 87: {
      const [a, b] = rCoprimePair(7), one = randInt(5, 20), total = (a + b) * one;
      return rNumberQuestion(87, `Share ${rMoney(total)} in the ratio ${a}:${b}. How much is the larger share?`, Math.max(a, b) * one, { displayAnswer: rMoney(Math.max(a, b) * one) });
    }
    case 88: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(88, `${total} stickers are shared in the ratio ${a}:${b}. How many stickers are in the second share?`, b * one);
    }
    case 89: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(89, `A ${total} cm ribbon is cut in the ratio ${a}:${b}. Find the first length.`, a * one, { displayAnswer: `${a * one} cm` });
    }
    case 90: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(90, `${total} kg is shared in the ratio ${a}:${b}. Find the second mass.`, b * one, { displayAnswer: `${b * one} kg` });
    }
    case 91: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(91, `${total} L is divided in the ratio ${a}:${b}. Find the larger amount.`, Math.max(a, b) * one, { displayAnswer: `${Math.max(a, b) * one} L` });
    }
    case 92: {
      const [a, b] = rCoprimePair(7), one = pick([0.5, 1.5, 2.5, 3.5]), total = (a + b) * one;
      return rNumberQuestion(92, `Share ${rFormat(total)} in the ratio ${a}:${b}. Find the first share.`, a * one);
    }
    case 93: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(93, `${total} is shared in the ratio ${a}:${b}. Find the larger share.`, Math.max(a, b) * one);
    }
    case 94: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(94, `${total} is shared in the ratio ${a}:${b}. Find the smaller share.`, Math.min(a, b) * one);
    }
    case 95: {
      const [a, b, c] = rCoprimeTriple(5), one = randInt(2, 8), total = (a + b + c) * one;
      return rNumberQuestion(95, `${total} is shared in the ratio ${a}:${b}:${c}. The first two shares are ${a * one} and ${b * one}. Find the third share.`, c * one);
    }

    case 96: {
      const a = randInt(1, 8), b = randInt(1, 8), askFirst = chance(0.5);
      return rFractionQuestion(96, `The part-to-part ratio is ${a}:${b}. What fraction of the whole is the ${askFirst ? 'first' : 'second'} part?`, askFirst ? a : b, a + b);
    }
    case 97: {
      const [a, b] = rCoprimePair(8);
      return rRatioQuestion(97, `Two parts of a whole are ${a}/${a + b} and ${b}/${a + b}. Write the ratio of the first part to the second part.`, [a, b]);
    }
    case 98: {
      const [a, b] = rCoprimePair(8), total = a + b;
      const percent = a / total * 100;
      return rPercentQuestion(98, `In the ratio ${a}:${b}, what percentage of the whole is the first part?`, percent, 'Divide the first part by the total number of parts.');
    }
    case 99: {
      const first = pick([20, 25, 40, 50, 60, 75, 80]), second = 100 - first, g = gcd(first, second);
      return rRatioQuestion(99, `${first}% of a group is red and ${second}% is blue. Write red : blue in simplest form.`, [first / g, second / g]);
    }
    case 100:
      return rChoiceQuestion(100, 'Which form is equivalent to the ratio 1:3?<br><strong>1.</strong> 1/4 of the whole &nbsp;&nbsp; <strong>2.</strong> 25% of the whole &nbsp;&nbsp; <strong>3.</strong> Both 1 and 2', 3);
    case 101: {
      const flour = randInt(1, 4), servings = 4, newServings = pick([8, 12]);
      return rNumberQuestion(101, `A recipe uses ${flour} cups of flour for ${servings} servings. How many cups are needed for ${newServings} servings?`, flour * newServings / servings, { displayAnswer: `${flour * newServings / servings} cups` });
    }
    case 102: {
      const sugar = pick([4, 6, 8]), servings = 8, newServings = 4;
      return rNumberQuestion(102, `A recipe uses ${sugar} tablespoons of sugar for ${servings} servings. How many tablespoons are needed for ${newServings} servings?`, sugar / 2, { displayAnswer: `${sugar / 2} tablespoons` });
    }
    case 103: {
      const flour = randInt(2, 6), sugar = randInt(1, 4), scale = randInt(2, 4);
      return rNumberQuestion(103, `Flour : sugar = ${flour}:${sugar}. If ${flour * scale} cups of flour are used, how many cups of sugar are needed?`, sugar * scale, { displayAnswer: `${sugar * scale} cups` });
    }
    case 104: {
      const amount = randInt(2, 6), oldServings = pick([4, 6, 8]), factor = pick([2, 3]), newServings = oldServings * factor;
      return rNumberQuestion(104, `A recipe uses ${amount} eggs for ${oldServings} servings. How many eggs are needed for ${newServings} servings?`, amount * factor);
    }

    case 105:
      return rTextQuestion(105, 'A map scale is 1:50,000. What does 1 cm on the map represent in real life?', '500 m', ['500 m', '500 metres', '0.5 km']);
    case 106: {
      const mapCm = randInt(2, 8), scale = pick([10000, 20000, 50000]);
      const actualKm = mapCm * scale / 100000;
      return rNumberQuestion(106, `A map scale is 1:${scale}. A distance is ${mapCm} cm on the map. Find the actual distance in kilometres.`, actualKm, { displayAnswer: `${rFormat(actualKm)} km` });
    }
    case 107: {
      const scale = pick([10000, 20000, 50000]), mapCm = randInt(2, 8), actualKm = mapCm * scale / 100000;
      return rNumberQuestion(107, `A map scale is 1:${scale}. An actual distance is ${rFormat(actualKm)} km. Find the map distance in centimetres.`, mapCm, { displayAnswer: `${mapCm} cm` });
    }
    case 108:
      return rNumberQuestion(108, 'A scale is 1:100. A model length is 6 cm. Find the actual length in metres.', 6, { displayAnswer: '6 m' });
    case 109: {
      const scale = pick([10, 20, 50]), model = randInt(2, 10);
      return rNumberQuestion(109, `A model uses scale 1:${scale}. A model part is ${model} cm long. Find the actual length in centimetres.`, model * scale, { displayAnswer: `${model * scale} cm` });
    }
    case 110: {
      const scale = pick([20, 25, 50]), model = randInt(2, 10);
      return rNumberQuestion(110, `A model uses scale 1:${scale}. A model length is ${model} cm. Find the actual length in metres.`, model * scale / 100, { displayAnswer: `${rFormat(model * scale / 100)} m` });
    }
    case 111: {
      const v = rCombinedRatioValues();
      return rRatioQuestion(111, `A:B = ${rRatio(v.ab)} and B:C = ${rRatio(v.bc)}. Find A:B:C.`, v.combined);
    }
    case 112: {
      const a = 2, b = 3, b2 = 4, c = 5;
      return rRatioQuestion(112, 'A:B = 2:3 and B:C = 4:5. Scale A:B so that its B-part is 12.', [8, 12]);
    }
    case 113: {
      const v = rCombinedRatioValues();
      return rRatioQuestion(113, `Combine A:B = ${rRatio(v.ab)} and B:C = ${rRatio(v.bc)} into A:B:C.`, v.combined);
    }
    case 114: {
      const v = rCombinedRatioValues(), one = randInt(2, 6), total = v.combined.reduce((s, x) => s + x, 0) * one;
      return rNumberQuestion(114, `A:B = ${rRatio(v.ab)} and B:C = ${rRatio(v.bc)}. The total of A, B and C is ${total}. Find C.`, v.combined[2] * one);
    }
    case 115:
      return rChoiceQuestion(115, 'A:B = 2:3 and B:C = 4:5. Is A:B:C = 8:12:15 correct?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No', 1);

    case 116: {
      const a = randInt(2, 8), b = randInt(2, 8), add = randInt(1, 5);
      return rRatioQuestion(116, `Red : blue = ${a}:${b}. ${add} red counters are added. Write the new ratio red : blue.`, [a + add, b]);
    }
    case 117: {
      const a = randInt(4, 10), b = randInt(2, 8), remove = randInt(1, a - 1);
      return rRatioQuestion(117, `Red : blue = ${a}:${b}. ${remove} red counters are removed. Write the new ratio red : blue.`, [a - remove, b]);
    }
    case 118: {
      const a = randInt(2, 8), b = randInt(2, 8), add = randInt(1, 5);
      return rRatioQuestion(118, `Two groups contain ${a} and ${b} students. ${add} students join each group. Write the new ratio.`, [a + add, b + add]);
    }
    case 119: {
      const a = randInt(5, 10), b = randInt(5, 10), remove = randInt(1, Math.min(a, b) - 1);
      return rRatioQuestion(119, `Two groups contain ${a} and ${b} students. ${remove} students leave each group. Write the new ratio.`, [a - remove, b - remove]);
    }
    case 120: {
      const startA = 2, startB = 3, one = randInt(2, 6), add = one;
      const A = startA * one, B = startB * one;
      return rNumberQuestion(120, `Red : blue is ${startA}:${startB}. There are ${A} red and ${B} blue counters. After red counters are added, the ratio becomes 1:1. How many red counters were added?`, B - A);
    }
    case 121: {
      const one = randInt(2, 6), A = 5 * one, B = 3 * one;
      return rNumberQuestion(121, `Red : blue is 5:3, so there are ${A} red and ${B} blue counters. Red counters are removed until the ratio is 1:1. How many red counters are removed?`, A - B);
    }
    case 122: {
      const one = randInt(2, 6), originalA = 2 * one, originalB = 3 * one, added = one;
      return rNumberQuestion(122, `After ${added} red counters are added, red : blue becomes 1:1. Originally red : blue was 2:3. How many blue counters were there originally?`, originalB);
    }
    case 123: {
      const a = 2, b = 3, one = randInt(2, 6), added = one;
      return rRatioQuestion(123, `There are ${a * one} red and ${b * one} blue counters. ${added} red counters are added. Write the new ratio red : blue.`, [a * one + added, b * one]);
    }
    case 124: {
      const originalA = 6, originalB = 9, added = 3, newTotal = originalA + originalB + added;
      return rNumberQuestion(124, `Red : blue is 2:3. After 3 red counters are added, the total is ${newTotal}. How many blue counters were there originally?`, originalB);
    }
    case 125: {
      const one = randInt(2, 6), a = 2 * one, b = 5 * one, add = one, newDifference = Math.abs((a + add) - b);
      return rNumberQuestion(125, `Two groups are in the ratio 2:5. After ${add} is added to the smaller group, the difference is ${newDifference}. Find the original larger group.`, b);
    }

    case 126: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), total = (a + b) * one;
      return rNumberQuestion(126, `Two quantities are in the ratio ${a}:${b} and total ${total}. Find the first quantity.`, a * one);
    }
    case 127: {
      let a = randInt(1, 5), b = randInt(2, 8);
      while (a === b) b = randInt(2, 8);
      const one = randInt(2, 10), difference = Math.abs(a - b) * one;
      return rNumberQuestion(127, `Two quantities are in the ratio ${a}:${b} and differ by ${difference}. Find the larger quantity.`, Math.max(a, b) * one);
    }
    case 128: {
      const a = randInt(1, 6), b = randInt(1, 6), one = randInt(2, 10), known = a * one;
      return rNumberQuestion(128, `A:B = ${a}:${b}. A = ${known}. Find B.`, b * one);
    }
    case 129: {
      const a = randInt(1, 6), b = randInt(1, 6), one = randInt(2, 10), known = b * one;
      return rNumberQuestion(129, `A:B = ${a}:${b}. B = ${known}. Find A + B.`, (a + b) * one);
    }
    case 130: {
      const a = randInt(1, 6), b = randInt(1, 6), k = randInt(2, 6);
      return rNumberQuestion(130, `<strong>${a}:${b} = ${a * k}:?</strong> Find the unknown ratio part.`, b * k);
    }

    case 131:
      return rChoiceQuestion(131, 'Group A has boys : girls = 3:4. Group B has boys : girls = 4:5. Which group has the larger proportion of boys?<br><strong>1.</strong> Group A &nbsp;&nbsp; <strong>2.</strong> Group B', 1);
    case 132: {
      const concentrate = randInt(1, 4), water = randInt(3, 8), scale = randInt(2, 6);
      return rNumberQuestion(132, `Concentrate : water = ${concentrate}:${water}. If ${water * scale} L of water is used, how many litres of concentrate are needed?`, concentrate * scale, { displayAnswer: `${concentrate * scale} L` });
    }
    case 133: {
      const red = randInt(1, 5), blue = randInt(2, 7), one = randInt(2, 8), total = (red + blue) * one;
      return rNumberQuestion(133, `Red : blue counters = ${red}:${blue}. There are ${total} counters altogether. How many are red?`, red * one);
    }
    case 134: {
      const boys = randInt(1, 5), girls = randInt(2, 7), one = randInt(2, 8);
      return rNumberQuestion(134, `Boys : girls in a team is ${boys}:${girls}. There are ${boys * one} boys. How many girls are there?`, girls * one);
    }
    case 135: {
      const [a, b] = rCoprimePair(7), one = randInt(5, 20), total = (a + b) * one;
      return rNumberQuestion(135, `${rMoney(total)} is shared in the ratio ${a}:${b}. Find the smaller share.`, Math.min(a, b) * one, { displayAnswer: rMoney(Math.min(a, b) * one) });
    }

    case 136: {
      const [a, b] = rCoprimePair(7), one = randInt(2, 10), length = a * one, width = b * one;
      return rNumberQuestion(136, `A rectangle has length : width = ${a}:${b}. Its perimeter is ${2 * (length + width)} cm. Find the length.`, length, { displayAnswer: `${length} cm` });
    }
    case 137: {
      const [a, b] = rCoprimePair(7), one = 180 / (a + b);
      if (Number.isInteger(one)) {
        return rNumberQuestion(137, `Two angles on a straight line are in the ratio ${a}:${b}. Find the larger angle.`, Math.max(a, b) * one, { displayAnswer: `${Math.max(a, b) * one}°` });
      }
      return rNumberQuestion(137, 'Two angles on a straight line are in the ratio 2:3. Find the larger angle.', 108, { displayAnswer: '108°' });
    }
    case 138: {
      const [a, b, c] = rCoprimeTriple(6), one = randInt(2, 8), total = (a + b + c) * one;
      return rNumberQuestion(138, `A:B:C = ${a}:${b}:${c} and A + B + C = ${total}. Find B.`, b * one);
    }
    case 139:
      return rChoiceQuestion(139, 'A total is shared in the ratio 2:3. Which first step is correct?<br><strong>1.</strong> Add 2 + 3 to find total parts &nbsp;&nbsp; <strong>2.</strong> Multiply 2 × 3', 1);
    case 140: {
      const redParts = 2, blueParts = 3, one = randInt(3, 8), red = redParts * one, blue = blueParts * one, added = one;
      return rNumberQuestion(140, `Red : blue counters = 2:3. There are ${red + blue} counters altogether. Then ${added} red counters are added. How many red counters are there now?`, red + added);
    }

    default:
      throw new Error(`No ratio generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.ratios = {};
for (const group of TOPIC_CONFIGS.ratios.groups) {
  TOPIC_BANKS.ratios[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.ratios[group.id][point.id] = () => generateRatioPoint(pointNumber);
  }
}
