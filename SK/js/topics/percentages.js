'use strict';

TOPIC_CONFIGS.percentages = {
  title: 'Percentages',
  pageTitle: 'Knowledge Practice — Percentages',
  knowledgeMapTitle: 'Percentages Practice Structure',
  intro: 'The 200 percentage knowledge points are organised into 15 connected practice sections. The numbering is continuous and does not skip.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    {
      id: 'percentageFoundations', practiceNumber: 1, label: 'Percentage Foundations',
      description: 'Understand percent and the most useful benchmark percentages.',
      knowledgePoints: [
        { id: 'p001', number: 1, label: 'Meaning of Percent' },
        { id: 'p002', number: 2, label: 'Percent Symbol (%)' },
        { id: 'p003', number: 3, label: 'Percent as a Fraction out of 100' },
        { id: 'p004', number: 4, label: 'Percent as a Decimal' },
        { id: 'p005', number: 5, label: 'Read Percentages' },
        { id: 'p006', number: 6, label: 'Write Percentages' },
        { id: 'p007', number: 7, label: 'Percentages Less Than 1%' },
        { id: 'p008', number: 8, label: 'Percentages Greater Than 100%' },
        { id: 'p009', number: 9, label: '100% as One Whole' },
        { id: 'p010', number: 10, label: '0% and 100%' },
        { id: 'p011', number: 11, label: '50% as One Half' },
        { id: 'p012', number: 12, label: '25% as One Quarter' },
        { id: 'p013', number: 13, label: '75% as Three Quarters' },
        { id: 'p014', number: 14, label: '10% as One Tenth' },
        { id: 'p015', number: 15, label: '20% as One Fifth' },
        { id: 'p016', number: 16, label: '5% as Half of 10%' },
        { id: 'p017', number: 17, label: '1% as One Hundredth' },
        { id: 'p018', number: 18, label: '12.5% as One Eighth' },
        { id: 'p019', number: 19, label: '33⅓% as One Third' },
        { id: 'p020', number: 20, label: '66⅔% as Two Thirds' }
      ]
    },
    {
      id: 'fractionDecimalPercent', practiceNumber: 2, label: 'Fractions, Decimals and Percentages',
      description: 'Convert, compare and order equivalent forms.',
      knowledgePoints: [
        { id: 'p021', number: 21, label: 'Percent to Decimal' },
        { id: 'p022', number: 22, label: 'Decimal to Percent' },
        { id: 'p023', number: 23, label: 'Percent to Fraction' },
        { id: 'p024', number: 24, label: 'Simplify a Fraction Converted from a Percent' },
        { id: 'p025', number: 25, label: 'Fraction to Percent with Denominator 100' },
        { id: 'p026', number: 26, label: 'Fraction to Percent Using Equivalent Fractions' },
        { id: 'p027', number: 27, label: 'Fraction to Percent Using Division' },
        { id: 'p028', number: 28, label: 'Convert Mixed Numbers to Percentages' },
        { id: 'p029', number: 29, label: 'Convert Percentages Greater Than 100%' },
        { id: 'p030', number: 30, label: 'Compare Fractions, Decimals and Percentages' },
        { id: 'p031', number: 31, label: 'Order Fractions, Decimals and Percentages' },
        { id: 'p032', number: 32, label: 'Find Equivalent Fraction–Decimal–Percent Forms' }
      ]
    },
    {
      id: 'percentageOfAmount', practiceNumber: 3, label: 'Find a Percentage of an Amount',
      description: 'Find common, general, very small and greater-than-100 percentages of amounts.',
      knowledgePoints: [
        { id: 'p033', number: 33, label: 'Find 50% of an Amount' },
        { id: 'p034', number: 34, label: 'Find 25% of an Amount' },
        { id: 'p035', number: 35, label: 'Find 10% of an Amount' },
        { id: 'p036', number: 36, label: 'Find 5% of an Amount' },
        { id: 'p037', number: 37, label: 'Find 1% of an Amount' },
        { id: 'p038', number: 38, label: 'Find Multiples of 10%' },
        { id: 'p039', number: 39, label: 'Find Percentages Using 10% and 1%' },
        { id: 'p040', number: 40, label: 'Find Percentages Using Known Benchmarks' },
        { id: 'p041', number: 41, label: 'Find Any Percentage Using a Decimal Multiplier' },
        { id: 'p042', number: 42, label: 'Find a Percentage of a Decimal Amount' },
        { id: 'p043', number: 43, label: 'Find More Than 100% of an Amount' },
        { id: 'p044', number: 44, label: 'Find Less Than 1% of an Amount' },
        { id: 'p045', number: 45, label: 'Estimate a Percentage of an Amount' }
      ]
    },
    {
      id: 'whatPercentage', practiceNumber: 4, label: 'Find What Percentage',
      description: 'Find what percentage one amount is of another.',
      knowledgePoints: [
        { id: 'p046', number: 46, label: 'Write Part over Whole' },
        { id: 'p047', number: 47, label: 'Convert Part ÷ Whole to a Percentage' },
        { id: 'p048', number: 48, label: 'Find a Percentage When the Answer Is a Whole Number' },
        { id: 'p049', number: 49, label: 'Find a Percentage When the Answer Is a Decimal' },
        { id: 'p050', number: 50, label: 'Find a Percentage Greater Than 100%' },
        { id: 'p051', number: 51, label: 'Find a Percentage Less Than 1%' },
        { id: 'p052', number: 52, label: 'Find the Percentage Completed' },
        { id: 'p053', number: 53, label: 'Find the Percentage Remaining' },
        { id: 'p054', number: 54, label: 'Find Percentage Correct or Incorrect' },
        { id: 'p055', number: 55, label: 'Compare Two Amounts Using Percentages' }
      ]
    },
    {
      id: 'findWhole', practiceNumber: 5, label: 'Find the Whole',
      description: 'Work backwards from a known percentage part to the original whole.',
      knowledgePoints: [
        { id: 'p056', number: 56, label: 'Find the Whole from 50%' },
        { id: 'p057', number: 57, label: 'Find the Whole from 25%' },
        { id: 'p058', number: 58, label: 'Find the Whole from 10%' },
        { id: 'p059', number: 59, label: 'Find the Whole from 1%' },
        { id: 'p060', number: 60, label: 'Find the Whole Using a Unit Percentage' },
        { id: 'p061', number: 61, label: 'Find the Whole Using Division by a Decimal' },
        { id: 'p062', number: 62, label: 'Find the Original Total from a Percentage Part' },
        { id: 'p063', number: 63, label: 'Find the Original Amount When More Than 100% Is Known' },
        { id: 'p064', number: 64, label: 'Check Whether the Whole Is Reasonable' }
      ]
    },
    {
      id: 'increaseDecrease', practiceNumber: 6, label: 'Percentage Increase and Decrease',
      description: 'Increase and decrease amounts using percentages and multipliers.',
      knowledgePoints: [
        { id: 'p065', number: 65, label: 'Increase an Amount by 10%' },
        { id: 'p066', number: 66, label: 'Decrease an Amount by 10%' },
        { id: 'p067', number: 67, label: 'Increase an Amount by a Given Percentage' },
        { id: 'p068', number: 68, label: 'Decrease an Amount by a Given Percentage' },
        { id: 'p069', number: 69, label: 'Use an Increase Multiplier' },
        { id: 'p070', number: 70, label: 'Use a Decrease Multiplier' },
        { id: 'p071', number: 71, label: 'Find the Amount of Increase' },
        { id: 'p072', number: 72, label: 'Find the Amount of Decrease' },
        { id: 'p073', number: 73, label: 'Find the Final Amount after an Increase' },
        { id: 'p074', number: 74, label: 'Find the Final Amount after a Decrease' },
        { id: 'p075', number: 75, label: 'Distinguish “Increase by” from “Increase to”' },
        { id: 'p076', number: 76, label: 'Distinguish “Decrease by” from “Decrease to”' }
      ]
    },
    {
      id: 'percentageChange', practiceNumber: 7, label: 'Percentage Change',
      description: 'Calculate, compare and reverse percentage changes.',
      knowledgePoints: [
        { id: 'p077', number: 77, label: 'Find the Original Difference' },
        { id: 'p078', number: 78, label: 'Percentage Increase from an Original Value' },
        { id: 'p079', number: 79, label: 'Percentage Decrease from an Original Value' },
        { id: 'p080', number: 80, label: 'Identify the Correct Original Value' },
        { id: 'p081', number: 81, label: 'Percentage Change with Decimal Values' },
        { id: 'p082', number: 82, label: 'Percentage Change Greater Than 100%' },
        { id: 'p083', number: 83, label: 'Compare Percentage Changes' },
        { id: 'p084', number: 84, label: 'Find an Unknown Final Value from Percentage Change' },
        { id: 'p085', number: 85, label: 'Find an Unknown Original Value from Percentage Change' }
      ]
    },
    {
      id: 'reversePercentages', practiceNumber: 8, label: 'Reverse Percentages',
      description: 'Recover original values after discounts, increases, decreases, tax, profit or loss.',
      knowledgePoints: [
        { id: 'p086', number: 86, label: 'Find the Original Price after a Discount' },
        { id: 'p087', number: 87, label: 'Find the Original Amount after an Increase' },
        { id: 'p088', number: 88, label: 'Find the Original Amount after a Decrease' },
        { id: 'p089', number: 89, label: 'Use a Reverse Percentage Multiplier' },
        { id: 'p090', number: 90, label: 'Recognise That the Final Amount Is Not 100%' },
        { id: 'p091', number: 91, label: 'Reverse Percentage with Tax Included' },
        { id: 'p092', number: 92, label: 'Reverse Percentage with Profit Included' },
        { id: 'p093', number: 93, label: 'Reverse Percentage with Loss Included' },
        { id: 'p094', number: 94, label: 'Check a Reverse Percentage Answer' }
      ]
    },
    {
      id: 'discountTaxShopping', practiceNumber: 9, label: 'Discounts, Tax and Shopping',
      description: 'Solve percentage problems involving sales, GST, tips, commission, deposits and mark-up.',
      knowledgePoints: [
        { id: 'p095', number: 95, label: 'Find the Discount Amount' },
        { id: 'p096', number: 96, label: 'Find the Sale Price' },
        { id: 'p097', number: 97, label: 'Find the Original Price' },
        { id: 'p098', number: 98, label: 'Compare Two Discounts' },
        { id: 'p099', number: 99, label: 'Find Tax or GST' },
        { id: 'p100', number: 100, label: 'Find a Price Including Tax' },
        { id: 'p101', number: 101, label: 'Find a Price Before Tax' },
        { id: 'p102', number: 102, label: 'Calculate a Tip' },
        { id: 'p103', number: 103, label: 'Calculate Commission' },
        { id: 'p104', number: 104, label: 'Percentage Deposit and Remaining Balance' },
        { id: 'p105', number: 105, label: 'Percentage Mark-Up' }
      ]
    },
    {
      id: 'profitLoss', practiceNumber: 10, label: 'Profit and Loss',
      description: 'Calculate profit, loss, rates, selling prices and cost prices.',
      knowledgePoints: [
        { id: 'p106', number: 106, label: 'Find Profit' },
        { id: 'p107', number: 107, label: 'Find Loss' },
        { id: 'p108', number: 108, label: 'Profit as a Percentage of Cost Price' },
        { id: 'p109', number: 109, label: 'Loss as a Percentage of Cost Price' },
        { id: 'p110', number: 110, label: 'Find Selling Price from Profit Percentage' },
        { id: 'p111', number: 111, label: 'Find Selling Price from Loss Percentage' },
        { id: 'p112', number: 112, label: 'Find Cost Price from Selling Price and Profit' },
        { id: 'p113', number: 113, label: 'Find Cost Price from Selling Price and Loss' },
        { id: 'p114', number: 114, label: 'Distinguish Cost Price and Selling Price' }
      ]
    },
    {
      id: 'successiveChanges', practiceNumber: 11, label: 'Successive Percentage Changes',
      description: 'Apply and reverse two percentage changes.',
      knowledgePoints: [
        { id: 'p115', number: 115, label: 'Two Successive Increases' },
        { id: 'p116', number: 116, label: 'Two Successive Decreases' },
        { id: 'p117', number: 117, label: 'An Increase Followed by a Decrease' },
        { id: 'p118', number: 118, label: 'A Decrease Followed by an Increase' },
        { id: 'p119', number: 119, label: 'Use Successive Multipliers' },
        { id: 'p120', number: 120, label: 'Find the Overall Percentage Change' },
        { id: 'p121', number: 121, label: 'Understand That Opposite Percentages Do Not Cancel' },
        { id: 'p122', number: 122, label: 'Compare One Large Change with Two Smaller Changes' },
        { id: 'p123', number: 123, label: 'Work Back through Successive Changes' }
      ]
    },
    {
      id: 'interestGrowth', practiceNumber: 12, label: 'Interest and Growth',
      description: 'Use simple interest, compound growth and depreciation.',
      knowledgePoints: [
        { id: 'p124', number: 124, label: 'Simple Interest' },
        { id: 'p125', number: 125, label: 'Find Interest for One Year' },
        { id: 'p126', number: 126, label: 'Find Interest for Several Years' },
        { id: 'p127', number: 127, label: 'Find the Final Amount with Simple Interest' },
        { id: 'p128', number: 128, label: 'Find the Principal' },
        { id: 'p129', number: 129, label: 'Find the Interest Rate' },
        { id: 'p130', number: 130, label: 'Compound Growth for One Period' },
        { id: 'p131', number: 131, label: 'Compound Growth for Several Periods' },
        { id: 'p132', number: 132, label: 'Compound Depreciation' },
        { id: 'p133', number: 133, label: 'Compare Simple and Compound Interest' }
      ]
    },
    {
      id: 'percentageApplications', practiceNumber: 13, label: 'Percentage Applications and Multi-Step Problems',
      description: 'Apply percentages in practical and multi-step contexts.',
      knowledgePoints: [
        { id: 'p134', number: 134, label: 'Percentage of Students or Items' },
        { id: 'p135', number: 135, label: 'Percentage Attendance' },
        { id: 'p136', number: 136, label: 'Percentage Scores' },
        { id: 'p137', number: 137, label: 'Percentage Correct and Incorrect' },
        { id: 'p138', number: 138, label: 'Percentage Used and Remaining' },
        { id: 'p139', number: 139, label: 'Percentage of Capacity' },
        { id: 'p140', number: 140, label: 'Percentage of Distance Completed' },
        { id: 'p141', number: 141, label: 'Percentage of Time Used' },
        { id: 'p142', number: 142, label: 'Percentage Population Growth' },
        { id: 'p143', number: 143, label: 'Percentage Depreciation' },
        { id: 'p144', number: 144, label: 'Percentage Concentration' },
        { id: 'p145', number: 145, label: 'Percentage Composition' },
        { id: 'p146', number: 146, label: 'Percentage Probability' },
        { id: 'p147', number: 147, label: 'Percentage Discounts in Multi-Buy Offers' },
        { id: 'p148', number: 148, label: 'Percentage Rate Problems' },
        { id: 'p149', number: 149, label: 'Find a Percentage, Then Add or Subtract' },
        { id: 'p150', number: 150, label: 'Find Two Percentage Parts of One Whole' },
        { id: 'p151', number: 151, label: 'Find the Remaining Percentage' },
        { id: 'p152', number: 152, label: 'Find the Remaining Amount' },
        { id: 'p153', number: 153, label: 'Percentage of a Remaining Amount' },
        { id: 'p154', number: 154, label: 'Percentage of a Percentage' },
        { id: 'p155', number: 155, label: 'Several Percentages of the Same Whole' },
        { id: 'p156', number: 156, label: 'Percentages Applied to Different Wholes' },
        { id: 'p157', number: 157, label: 'Work Back from a Final Amount' },
        { id: 'p158', number: 158, label: 'Choose the Correct Percentage Operation' },
        { id: 'p159', number: 159, label: 'Identify Unnecessary Information' },
        { id: 'p160', number: 160, label: 'Multi-Step Money Percentage Problems' }
      ]
    },
    {
      id: 'ratiosRatesData', practiceNumber: 14, label: 'Ratios, Rates, Tables and Charts',
      description: 'Connect percentages with ratios, rates, tables, bars, pie charts and data.',
      knowledgePoints: [
        { id: 'p161', number: 161, label: 'Convert a Ratio to a Percentage' },
        { id: 'p162', number: 162, label: 'Convert a Percentage to a Ratio' },
        { id: 'p163', number: 163, label: 'Express a Rate as a Percentage' },
        { id: 'p164', number: 164, label: 'Percentage Success Rate' },
        { id: 'p165', number: 165, label: 'Percentage Failure Rate' },
        { id: 'p166', number: 166, label: 'Percentage Efficiency' },
        { id: 'p167', number: 167, label: 'Percentage Occupancy' },
        { id: 'p168', number: 168, label: 'Percentage Increase in a Rate' },
        { id: 'p169', number: 169, label: 'Compare Rates Using Percentages' },
        { id: 'p170', number: 170, label: 'Read Percentages from a Table' },
        { id: 'p171', number: 171, label: 'Complete a Percentage Table' },
        { id: 'p172', number: 172, label: 'Read a Percentage Bar' },
        { id: 'p173', number: 173, label: 'Interpret a Pie Chart Percentage' },
        { id: 'p174', number: 174, label: 'Find an Angle from a Percentage' },
        { id: 'p175', number: 175, label: 'Find a Percentage from a Pie-Chart Angle' },
        { id: 'p176', number: 176, label: 'Interpret Survey Percentages' },
        { id: 'p177', number: 177, label: 'Check Whether Percentages Total 100%' },
        { id: 'p178', number: 178, label: 'Find a Missing Percentage' },
        { id: 'p179', number: 179, label: 'Find a Missing Frequency from a Percentage' },
        { id: 'p180', number: 180, label: 'Compare Data Sets Using Percentages' }
      ]
    },
    {
      id: 'estimationEquations', practiceNumber: 15, label: 'Estimation, Calculator and Percentage Equations',
      description: 'Round, estimate, use calculators and solve percentage equations.',
      knowledgePoints: [
        { id: 'p181', number: 181, label: 'Estimate a Percentage Answer' },
        { id: 'p182', number: 182, label: 'Round a Percentage to the Nearest Whole Percent' },
        { id: 'p183', number: 183, label: 'Round to 1 Decimal Place' },
        { id: 'p184', number: 184, label: 'Round to 2 Decimal Places' },
        { id: 'p185', number: 185, label: 'Round Money Correctly' },
        { id: 'p186', number: 186, label: 'Enter Percent Calculations into a Calculator' },
        { id: 'p187', number: 187, label: 'Use a Decimal Multiplier on a Calculator' },
        { id: 'p188', number: 188, label: 'Interpret a Long Decimal as a Percentage' },
        { id: 'p189', number: 189, label: 'Check Whether a Percentage Answer Is Reasonable' },
        { id: 'p190', number: 190, label: 'Write the Correct Unit or Percent Symbol' },
        { id: 'p191', number: 191, label: 'Find a Missing Percentage' },
        { id: 'p192', number: 192, label: 'Find a Missing Part' },
        { id: 'p193', number: 193, label: 'Find a Missing Whole' },
        { id: 'p194', number: 194, label: 'Find a Missing Percentage Increase' },
        { id: 'p195', number: 195, label: 'Find a Missing Percentage Decrease' },
        { id: 'p196', number: 196, label: 'Solve a Simple Percentage Equation' },
        { id: 'p197', number: 197, label: 'Solve a Reverse Percentage Equation' },
        { id: 'p198', number: 198, label: 'Find an Unknown Rate' },
        { id: 'p199', number: 199, label: 'Find an Unknown Time in an Interest Problem' },
        { id: 'p200', number: 200, label: 'Find an Unknown Value in a Multi-Step Percentage Problem' }
      ]
    }
  ]
};

const PERCENTAGE_GROUP = {};
for (const group of TOPIC_CONFIGS.percentages.groups) {
  for (const point of group.knowledgePoints) PERCENTAGE_GROUP[point.id] = group.id;
}
function percentagePointId(number) {
  return `p${String(number).padStart(3, '0')}`;
}

function percentageLabel(number) {
  for (const group of TOPIC_CONFIGS.percentages.groups) {
    const point = group.knowledgePoints.find(item => item.number === number);
    if (point) return point.label;
  }
  return `Percentage Knowledge Point ${number}`;
}

function percentageQuestion(number, text, answer, options = {}) {
  const pointId = percentagePointId(number);
  return {
    group: PERCENTAGE_GROUP[pointId],
    knowledgePoint: pointId,
    subtopic: percentageLabel(number),
    text,
    answer,
    displayAnswer: options.displayAnswer ?? (typeof answer === 'number' ? pctFormat(answer, 8) : String(answer)),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: options.answerType ?? 'rational',
    hint: options.hint ?? ''
  };
}

function percentageLevel(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'challenge' ? challenge : core;
}

function pctFormat(value, places = 4) {
  const rounded = Number(Number(value).toFixed(places));
  return String(rounded);
}

function pctMoney(value) {
  return `$${Number(value).toFixed(2)}`;
}

function pctTextQuestion(number, text, answer, acceptedAnswers = null, hint = '') {
  return percentageQuestion(number, text, answer, {
    answerType: 'text',
    displayAnswer: String(answer),
    acceptedAnswers: acceptedAnswers || [String(answer)],
    hint
  });
}

function pctPercentQuestion(number, text, percentValue, hint = '') {
  const value = pctFormat(percentValue, 6);
  return percentageQuestion(number, text, value, {
    answerType: 'text',
    displayAnswer: `${value}%`,
    acceptedAnswers: [value, `${value}%`],
    hint
  });
}

function pctMoneyQuestion(number, text, value, hint = '') {
  const fixed = Number(value).toFixed(2);
  const plain = pctFormat(value, 2);
  return percentageQuestion(number, text, plain, {
    answerType: 'text',
    displayAnswer: `$${fixed}`,
    acceptedAnswers: [plain, fixed, `$${fixed}`, `$${plain}`],
    hint
  });
}

function pctOneTwo(number, text, correct, hint = '') {
  return percentageQuestion(number, `${text}<br><small>Type <strong>1</strong> or <strong>2</strong>.</small>`, correct, { hint });
}

function pctSymbolQuestion(number, text, symbol) {
  return pctTextQuestion(number, `${text}<br><small>Type <strong>&gt;</strong>, <strong>&lt;</strong> or <strong>=</strong>.</small>`, symbol, [symbol]);
}

function pctCompare(a, b) {
  return Math.abs(a - b) < 1e-9 ? '=' : a > b ? '>' : '<';
}

function pctFriendlyPercent(includeLarge = false) {
  const base = state.level === 'foundation'
    ? [5, 10, 20, 25, 50, 75]
    : state.level === 'challenge'
      ? [2, 4, 8, 12, 15, 18, 22, 35, 45, 65, 85]
      : [5, 10, 12, 15, 20, 25, 30, 40, 50, 60, 75];
  if (includeLarge) return pick([...base, 120, 125, 150, 175, 200]);
  return pick(base);
}

function pctWholeFor(percent, scaleMin = 1, scaleMax = null) {
  const scaledPercent = Math.round(Number(percent) * 1000);
  const reduced = simplifyFraction(scaledPercent, 100000);
  const maxScale = scaleMax || percentageLevel(12, 30, 60);
  return reduced.d * randInt(scaleMin, maxScale);
}

function pctOf(percent, whole) {
  return whole * percent / 100;
}

function pctFractionDisplay(n, d) {
  return fractionHtml(n, d);
}

function pctPercentOfAmountQuestion(number, percent = null, whole = null, unit = '') {
  const p = percent ?? pctFriendlyPercent(number === 43);
  const w = whole ?? pctWholeFor(p);
  const result = pctOf(p, w);
  const suffix = unit ? ` ${unit}` : '';
  return percentageQuestion(number, `Find <strong>${pctFormat(p)}%</strong> of <strong>${pctFormat(w)}${suffix}</strong>.`, result, {
    displayAnswer: `${pctFormat(result)}${suffix}`,
    hint: 'Convert the percentage to a decimal or use a known percentage.'
  });
}

function pctPartWholeQuestion(number, percent = null, whole = null, context = 'items') {
  const p = percent ?? pctFriendlyPercent(number === 50);
  const w = whole ?? pctWholeFor(p);
  const part = pctOf(p, w);
  return pctPercentQuestion(number, `<strong>${pctFormat(part)}</strong> out of <strong>${pctFormat(w)}</strong> ${context} are selected. What percentage is selected?`, p, 'Use part ÷ whole × 100.');
}

function pctFindWholeQuestion(number, percent = null, whole = null, unit = 'items') {
  const p = percent ?? pctFriendlyPercent(number === 63);
  const w = whole ?? pctWholeFor(p);
  const part = pctOf(p, w);
  const shownUnit = Math.abs(part - 1) < 1e-9 ? unit.replace(/s$/, '') : unit;
  return percentageQuestion(number, `<strong>${pctFormat(p)}%</strong> of a total is <strong>${pctFormat(part)} ${shownUnit}</strong>. Find the total.`, w, {
    displayAnswer: `${pctFormat(w)} ${unit}`,
    hint: 'Divide the known part by the percentage written as a decimal.'
  });
}

function pctChangeAmountQuestion(number, direction, percent = null, original = null, askFinal = true) {
  const p = percent ?? pctFriendlyPercent();
  const o = original ?? pctWholeFor(p);
  const change = pctOf(p, o);
  const final = direction === 'increase' ? o + change : o - change;
  if (askFinal) {
    return percentageQuestion(number, `${direction === 'increase' ? 'Increase' : 'Decrease'} <strong>${pctFormat(o)}</strong> by <strong>${p}%</strong>.`, final, {
      hint: direction === 'increase' ? 'Find the increase and add it.' : 'Find the decrease and subtract it.'
    });
  }
  return percentageQuestion(number, `Find the amount of the ${direction} when <strong>${pctFormat(o)}</strong> is ${direction}d by <strong>${p}%</strong>.`, change);
}

function pctReverseQuestion(number, direction, percent = null, original = null, money = false) {
  const p = percent ?? pick([10, 20, 25, 40, 50]);
  const o = original ?? randInt(4, percentageLevel(20, 50, 100)) * 10;
  const multiplier = direction === 'increase' ? 1 + p / 100 : 1 - p / 100;
  const final = o * multiplier;
  const text = `After a <strong>${p}% ${direction}</strong>, the final amount is <strong>${money ? pctMoney(final) : pctFormat(final)}</strong>. Find the original amount.`;
  return money ? pctMoneyQuestion(number, text, o) : percentageQuestion(number, text, o, { hint: `Divide by ${pctFormat(multiplier)}.` });
}

function pctSimpleInterestValues() {
  const principal = randInt(2, percentageLevel(12, 30, 60)) * 100;
  const rate = pick([2, 3, 4, 5, 6, 8, 10]);
  const years = randInt(1, percentageLevel(3, 5, 8));
  const interest = principal * rate / 100 * years;
  return { principal, rate, years, interest, total: principal + interest };
}

function generatePercentagePoint(number) {
  switch (number) {
    case 1: {
      const p = pick([12, 35, 60, 84]);
      return percentageQuestion(1, `<strong>${p}%</strong> means ${p} out of how many equal parts?`, 100);
    }
    case 2:
      return pctTextQuestion(2, 'Which symbol means “percent”?', '%', ['%']);
    case 3: {
      const p = pick([7, 18, 42, 65, 93]);
      return percentageQuestion(3, `Write <strong>${p}%</strong> as a fraction out of 100.`, `${p}/100`, { answerType: 'fraction-structure', displayAnswer: pctFractionDisplay(p, 100) });
    }
    case 4: {
      const p = pick([5, 12, 25, 40, 75, 125]);
      return percentageQuestion(4, `Write <strong>${p}%</strong> as a decimal.`, p / 100);
    }
    case 5: {
      const p = pick([6, 25, 0.5, 125]);
      const words = { '6': 'six percent', '25': 'twenty-five percent', '0.5': 'zero point five percent', '125': 'one hundred and twenty-five percent' };
      return pctTextQuestion(5, `Write <strong>${p}%</strong> in words.`, words[String(p)], [words[String(p)]]);
    }
    case 6: {
      const choices = [['forty percent', 40], ['seven percent', 7], ['one hundred and twenty percent', 120], ['zero point five percent', 0.5]];
      const [words, p] = pick(choices);
      return pctPercentQuestion(6, `Write <strong>${words}</strong> as a percentage.`, p);
    }
    case 7: {
      const p = pick([0.1, 0.25, 0.5, 0.75]);
      return percentageQuestion(7, `Write <strong>${p}%</strong> as a decimal.`, p / 100);
    }
    case 8: {
      const p = pick([120, 125, 150, 175, 240]);
      return percentageQuestion(8, `Write <strong>${p}%</strong> as a decimal.`, p / 100);
    }
    case 9: {
      const whole = randInt(20, 300);
      return percentageQuestion(9, `What is <strong>100%</strong> of <strong>${whole}</strong>?`, whole);
    }
    case 10: {
      const value = randInt(10, 500), useHundred = chance(0.5);
      return percentageQuestion(10, `What is <strong>${useHundred ? 100 : 0}%</strong> of <strong>${value}</strong>?`, useHundred ? value : 0);
    }
    case 11: return pctTextQuestion(11, 'Which fraction is equivalent to <strong>50%</strong>?', '1/2', ['1/2'], '50% is half of a whole.');
    case 12: return pctTextQuestion(12, 'Which fraction is equivalent to <strong>25%</strong>?', '1/4', ['1/4']);
    case 13: return pctTextQuestion(13, 'Which fraction is equivalent to <strong>75%</strong>?', '3/4', ['3/4']);
    case 14: return pctTextQuestion(14, 'Which fraction is equivalent to <strong>10%</strong>?', '1/10', ['1/10']);
    case 15: return pctTextQuestion(15, 'Which fraction is equivalent to <strong>20%</strong>?', '1/5', ['1/5']);
    case 16: {
      const whole = pick([40, 60, 80, 120, 200]);
      return percentageQuestion(16, `Find <strong>5%</strong> of <strong>${whole}</strong>.`, whole * 0.05, { hint: 'Find 10%, then halve it.' });
    }
    case 17: {
      const whole = randInt(1, percentageLevel(9, 30, 80)) * 100;
      return percentageQuestion(17, `Find <strong>1%</strong> of <strong>${whole}</strong>.`, whole / 100);
    }
    case 18: {
      const whole = randInt(1, percentageLevel(8, 20, 40)) * 8;
      return percentageQuestion(18, `Find <strong>12.5%</strong> of <strong>${whole}</strong>.`, whole / 8, { hint: '12.5% is one eighth.' });
    }
    case 19: {
      const whole = randInt(1, percentageLevel(10, 30, 60)) * 3;
      return percentageQuestion(19, `Find <strong>33⅓%</strong> of <strong>${whole}</strong>.`, whole / 3, { hint: '33⅓% is one third.' });
    }
    case 20: {
      const whole = randInt(1, percentageLevel(10, 30, 60)) * 3;
      return percentageQuestion(20, `Find <strong>66⅔%</strong> of <strong>${whole}</strong>.`, whole * 2 / 3, { hint: '66⅔% is two thirds.' });
    }

    case 21: {
      const p = pctFriendlyPercent(true);
      return percentageQuestion(21, `Convert <strong>${p}%</strong> to a decimal.`, p / 100);
    }
    case 22: {
      const d = pick([0.04, 0.12, 0.25, 0.6, 0.75, 1.2, 1.5]);
      return pctPercentQuestion(22, `Convert <strong>${d}</strong> to a percentage.`, d * 100);
    }
    case 23: {
      const p = pick([10, 20, 25, 40, 50, 60, 75, 125]);
      const f = simplifyFraction(p, 100);
      return percentageQuestion(23, `Convert <strong>${p}%</strong> to a fraction in simplest form.`, `${f.n}/${f.d}`, { displayAnswer: pctFractionDisplay(f.n, f.d) });
    }
    case 24: {
      const p = pick([15, 30, 35, 45, 65, 90]);
      const f = simplifyFraction(p, 100);
      return percentageQuestion(24, `Simplify the fraction made from <strong>${p}%</strong>.`, `${f.n}/${f.d}`, { displayAnswer: pctFractionDisplay(f.n, f.d) });
    }
    case 25: {
      const n = pick([7, 18, 42, 65, 93]);
      return pctPercentQuestion(25, `Convert ${pctFractionDisplay(n, 100)} to a percentage.`, n);
    }
    case 26: {
      const cases = [[1,2,50],[1,4,25],[3,4,75],[1,5,20],[3,5,60],[7,10,70]];
      const [n,d,p] = pick(cases);
      return pctPercentQuestion(26, `Convert ${pctFractionDisplay(n,d)} to a percentage.`, p);
    }
    case 27: {
      const cases = [[2,5,40],[3,8,37.5],[7,20,35],[9,25,36],[11,20,55]];
      const [n,d,p] = pick(cases);
      return pctPercentQuestion(27, `Use division to convert ${pctFractionDisplay(n,d)} to a percentage.`, p);
    }
    case 28: {
      const whole = randInt(1, 3), cases = [[1,2,50],[1,4,25],[3,4,75]];
      const [n,d,p] = pick(cases);
      return pctPercentQuestion(28, `Convert ${mixedHtml(whole,n,d)} to a percentage.`, whole * 100 + p);
    }
    case 29: {
      const p = pick([120, 125, 150, 175, 240]);
      return percentageQuestion(29, `Convert <strong>${p}%</strong> to a decimal.`, p / 100);
    }
    case 30: {
      const cases = [[0.5,'1/2',0.5],[0.25,'20%',0.2],[0.75,'2/3',2/3],[1.2,'125%',1.25]];
      const [a,b,bValue] = pick(cases);
      return pctSymbolQuestion(30, `Compare <strong>${a}</strong> and <strong>${b}</strong>.`, pctCompare(a,bValue));
    }
    case 31:
      return pctTextQuestion(31, 'Put these in ascending order: <strong>25%, 0.5, 3/4</strong>.', '25%, 0.5, 3/4', ['25%, 0.5, 3/4', '25% 0.5 3/4']);
    case 32: {
      const cases = [['1/2','0.5','50%'],['1/4','0.25','25%'],['3/5','0.6','60%'],['3/4','0.75','75%']];
      const [f,d,p] = pick(cases);
      return pctTextQuestion(32, `Complete the equivalent forms: <strong>${f} = ${d} = ?</strong>`, p, [p,p.replace('%','')]);
    }

    case 33: return pctPercentOfAmountQuestion(33, 50);
    case 34: return pctPercentOfAmountQuestion(34, 25);
    case 35: return pctPercentOfAmountQuestion(35, 10);
    case 36: return pctPercentOfAmountQuestion(36, 5);
    case 37: return pctPercentOfAmountQuestion(37, 1);
    case 38: return pctPercentOfAmountQuestion(38, pick([20,30,40,60,70,80,90]));
    case 39: return pctPercentOfAmountQuestion(39, pick([12,14,18,23,32,41]));
    case 40: return pctPercentOfAmountQuestion(40, pick([12.5,25,50,75]));
    case 41: return pctPercentOfAmountQuestion(41, pick([15,22,35,45,65,85]));
    case 42: {
      const p = pick([10,20,25,50]), whole = pick([12.5,18.4,24.8,36.5,48.2]);
      return percentageQuestion(42, `Find <strong>${p}%</strong> of <strong>${whole}</strong>.`, whole*p/100);
    }
    case 43: return pctPercentOfAmountQuestion(43, pick([120,125,150,175,200]));
    case 44: {
      const p = pick([0.1,0.25,0.5,0.75]), whole = pick([400,800,1200,2000,4000]);
      return percentageQuestion(44, `Find <strong>${p}%</strong> of <strong>${whole}</strong>.`, whole*p/100);
    }
    case 45: {
      const p = pick([18,29,42,61]), whole = pick([48,79,121,198]);
      const estimate = Math.round(p/10)*10 * Math.round(whole/10)*10 / 100;
      return percentageQuestion(45, `Estimate <strong>${p}%</strong> of <strong>${whole}</strong> by rounding both numbers to the nearest 10.`, estimate);
    }

    case 46: {
      const whole = randInt(4,20), part = randInt(1,whole-1);
      return percentageQuestion(46, `Write the fraction <strong>part over whole</strong> for ${part} selected out of ${whole}.`, `${part}/${whole}`, { answerType:'fraction-structure', displayAnswer:pctFractionDisplay(part,whole) });
    }
    case 47: return pctPartWholeQuestion(47);
    case 48: return pctPartWholeQuestion(48, pick([10,20,25,40,50,60,75]));
    case 49: {
      const whole = pick([16,24,32,40,48,80]), part = randInt(1,whole-1);
      return pctPercentQuestion(49, `<strong>${part}</strong> out of <strong>${whole}</strong> students completed a task. What percentage completed it?`, part/whole*100);
    }
    case 50: return pctPartWholeQuestion(50, pick([120,125,150,200]), null, 'units');
    case 51: {
      const whole = pick([400,800,1000,2000]), part = pick([1,2,4,5]);
      return pctPercentQuestion(51, `<strong>${part}</strong> out of <strong>${whole}</strong> items are faulty. What percentage are faulty?`, part/whole*100);
    }
    case 52: {
      const total = pctWholeFor(pick([40,50,60,75,80,90])), completed = pctOf(pick([40,50,60,75,80,90]), total);
      const p = completed/total*100;
      return pctPercentQuestion(52, `${completed} of ${total} pages are complete. What percentage is complete?`, p);
    }
    case 53: {
      const p = pick([10,20,25,30,40,60,75]), completed = 100-p;
      return pctPercentQuestion(53, `<strong>${completed}%</strong> of a task is complete. What percentage remains?`, p);
    }
    case 54: {
      const total = pick([20,25,40,50,80,100]), correct = randInt(Math.floor(total/2), total);
      const askCorrect = chance(0.5), p = (askCorrect?correct:total-correct)/total*100;
      return pctPercentQuestion(54, `A student answers <strong>${correct}</strong> of <strong>${total}</strong> questions correctly. What percentage is ${askCorrect?'correct':'incorrect'}?`, p);
    }
    case 55: {
      const a = randInt(1,9), b = randInt(1,9), totalA=10, totalB=10;
      const pA=a/totalA*100,pB=b/totalB*100;
      return pctTextQuestion(55, `Class A completed ${a} out of ${totalA} tasks. Class B completed ${b} out of ${totalB}. Which class has the higher completion percentage?`, pA===pB?'equal':pA>pB?'Class A':'Class B', pA===pB?['equal','same']:pA>pB?['class a','a']:['class b','b']);
    }

    case 56: return pctFindWholeQuestion(56,50);
    case 57: return pctFindWholeQuestion(57,25);
    case 58: return pctFindWholeQuestion(58,10);
    case 59: return pctFindWholeQuestion(59,1);
    case 60: return pctFindWholeQuestion(60,pick([5,10,20,25]));
    case 61: return pctFindWholeQuestion(61,pick([12,15,30,40,60,75]));
    case 62: return pctFindWholeQuestion(62,pick([20,25,40,60,75]),null,'students');
    case 63: return pctFindWholeQuestion(63,pick([120,125,150,200]),null,'units');
    case 64: {
      const p=25,w=80,part=20;
      return pctOneTwo(64, `If 25% of a total is 20, which total is reasonable?<br><strong>1.</strong> 80 &nbsp;&nbsp; <strong>2.</strong> 5`, 1);
    }

    case 65: return pctChangeAmountQuestion(65,'increase',10);
    case 66: return pctChangeAmountQuestion(66,'decrease',10);
    case 67: return pctChangeAmountQuestion(67,'increase');
    case 68: return pctChangeAmountQuestion(68,'decrease');
    case 69: {
      const p=pick([10,20,25,40,50]);
      return percentageQuestion(69, `Write the multiplier for an increase of <strong>${p}%</strong>.`, 1+p/100);
    }
    case 70: {
      const p=pick([10,20,25,40,50]);
      return percentageQuestion(70, `Write the multiplier for a decrease of <strong>${p}%</strong>.`, 1-p/100);
    }
    case 71: return pctChangeAmountQuestion(71,'increase',null,null,false);
    case 72: return pctChangeAmountQuestion(72,'decrease',null,null,false);
    case 73: return pctChangeAmountQuestion(73,'increase');
    case 74: return pctChangeAmountQuestion(74,'decrease');
    case 75: {
      const original=100,p=20;
      return pctOneTwo(75, `“Increase 100 by 20%” gives:<br><strong>1.</strong> 120 &nbsp;&nbsp; <strong>2.</strong> 20`,1);
    }
    case 76:
      return pctOneTwo(76, `“Decrease 100 to 80%” gives:<br><strong>1.</strong> 80 &nbsp;&nbsp; <strong>2.</strong> 20`,1);

    case 77: {
      const original=randInt(10,100), change=randInt(1,50);
      return percentageQuestion(77, `A value changes from <strong>${original}</strong> to <strong>${original+change}</strong>. Find the difference.`,change);
    }
    case 78: {
      const p=pctFriendlyPercent(), original=pctWholeFor(p), final=original*(1+p/100);
      return pctPercentQuestion(78, `A value increases from <strong>${original}</strong> to <strong>${final}</strong>. Find the percentage increase.`,p);
    }
    case 79: {
      const p=pctFriendlyPercent(), original=pctWholeFor(p), final=original*(1-p/100);
      return pctPercentQuestion(79, `A value decreases from <strong>${original}</strong> to <strong>${final}</strong>. Find the percentage decrease.`,p);
    }
    case 80:
      return pctTextQuestion(80, 'A price rises from $80 to $100. Which value is the original value used in the percentage-change calculation?', '80', ['80','$80']);
    case 81: {
      const original=pick([12.5,18.4,24.8,36.5]), p=pick([10,20,25,50]), final=original*(1+p/100);
      return pctPercentQuestion(81, `A value increases from <strong>${original}</strong> to <strong>${pctFormat(final)}</strong>. Find the percentage increase.`,p);
    }
    case 82: {
      const original=pick([20,30,40]), final=original*pick([2.2,2.5,3]);
      return pctPercentQuestion(82, `A value rises from <strong>${original}</strong> to <strong>${final}</strong>. Find the percentage increase.`,(final-original)/original*100);
    }
    case 83: {
      const aOld=50,aNew=60,bOld=80,bNew=96;
      return pctTextQuestion(83, `Value A changes from ${aOld} to ${aNew}. Value B changes from ${bOld} to ${bNew}. Which has the greater percentage increase?`, 'equal', ['equal','same']);
    }
    case 84: {
      const p=pctFriendlyPercent(), original=pctWholeFor(p), final=original*(1+p/100);
      return percentageQuestion(84, `An original value of <strong>${original}</strong> increases by <strong>${p}%</strong>. Find the final value.`,final);
    }
    case 85: return pctReverseQuestion(85,'increase');

    case 86: return pctReverseQuestion(86,'decrease',pick([10,20,25,40,50]),null,true);
    case 87: return pctReverseQuestion(87,'increase');
    case 88: return pctReverseQuestion(88,'decrease');
    case 89: {
      const p=pick([10,20,25,40]), final=pick([72,80,90,120]);
      return percentageQuestion(89, `A value has been reduced by <strong>${p}%</strong>. Which multiplier should divide the final value to find the original?`,1-p/100);
    }
    case 90:
      return pctPercentQuestion(90, 'After a 20% discount, what percentage of the original price remains?',80);
    case 91: {
      const original=pick([80,100,120,200]), tax=15, final=original*1.15;
      return pctMoneyQuestion(91, `A price including 15% GST is <strong>${pctMoney(final)}</strong>. Find the price before GST.`,original);
    }
    case 92: {
      const cost=pick([40,60,80,100]), p=25, selling=cost*1.25;
      return pctMoneyQuestion(92, `A selling price of <strong>${pctMoney(selling)}</strong> includes a 25% profit on cost. Find the cost price.`,cost);
    }
    case 93: {
      const cost=pick([40,60,80,100]), p=20, selling=cost*0.8;
      return pctMoneyQuestion(93, `An item is sold for <strong>${pctMoney(selling)}</strong> after a 20% loss. Find the cost price.`,cost);
    }
    case 94:
      return pctOneTwo(94, `A $100 item is reduced by 20% to $80. Which check is correct?<br><strong>1.</strong> 80 ÷ 0.8 = 100 &nbsp;&nbsp; <strong>2.</strong> 80 × 0.8 = 100`,1);

    case 95: {
      const price=pick([40,60,80,100,120]),p=pick([10,20,25,40,50]);
      return pctMoneyQuestion(95, `Find the discount on <strong>${pctMoney(price)}</strong> at <strong>${p}% off</strong>.`,price*p/100);
    }
    case 96: {
      const price=pick([40,60,80,100,120]),p=pick([10,20,25,40,50]);
      return pctMoneyQuestion(96, `Find the sale price of <strong>${pctMoney(price)}</strong> after a <strong>${p}% discount</strong>.`,price*(1-p/100));
    }
    case 97: return pctReverseQuestion(97,'decrease',pick([10,20,25,40,50]),null,true);
    case 98: {
      const price=100,d1=20,d2=25;
      return pctTextQuestion(98, `A $100 item has either 20% off or 25% off. Which discount gives the lower sale price?`, '25%', ['25%','25']);
    }
    case 99: {
      const price=pick([40,60,80,100,120]),tax=15;
      return pctMoneyQuestion(99, `Find the 15% GST on <strong>${pctMoney(price)}</strong>.`,price*tax/100);
    }
    case 100: {
      const price=pick([40,60,80,100,120]),tax=15;
      return pctMoneyQuestion(100, `Find the price including 15% GST when the price before GST is <strong>${pctMoney(price)}</strong>.`,price*1.15);
    }
    case 101: {
      const before=pick([40,60,80,100,120]),after=before*1.15;
      return pctMoneyQuestion(101, `A price including 15% GST is <strong>${pctMoney(after)}</strong>. Find the price before GST.`,before);
    }
    case 102: {
      const bill=pick([40,60,80,100,120]),p=pick([10,15,20]);
      return pctMoneyQuestion(102, `Find a <strong>${p}% tip</strong> on a bill of <strong>${pctMoney(bill)}</strong>.`,bill*p/100);
    }
    case 103: {
      const sales=pick([500,800,1000,1200,2000]),p=pick([2,5,10]);
      return pctMoneyQuestion(103, `A salesperson earns <strong>${p}% commission</strong> on ${pctMoney(sales)} of sales. Find the commission.`,sales*p/100);
    }
    case 104: {
      const price=pick([200,400,600,800,1000]),p=pick([10,20,25,40]);
      return pctMoneyQuestion(104, `A <strong>${p}% deposit</strong> is paid on an item costing <strong>${pctMoney(price)}</strong>. Find the remaining balance.`,price*(1-p/100));
    }
    case 105: {
      const cost=pick([40,60,80,100]),p=pick([10,20,25,50]);
      return pctMoneyQuestion(105, `A shop adds a <strong>${p}% mark-up</strong> to a cost price of <strong>${pctMoney(cost)}</strong>. Find the marked price.`,cost*(1+p/100));
    }

    case 106: {
      const cost=pick([40,60,80,100]),selling=cost+pick([10,20,30]);
      return pctMoneyQuestion(106, `An item costs <strong>${pctMoney(cost)}</strong> and sells for <strong>${pctMoney(selling)}</strong>. Find the profit.`,selling-cost);
    }
    case 107: {
      const cost=pick([60,80,100,120]),selling=cost-pick([10,20,30]);
      return pctMoneyQuestion(107, `An item costs <strong>${pctMoney(cost)}</strong> and sells for <strong>${pctMoney(selling)}</strong>. Find the loss.`,cost-selling);
    }
    case 108: {
      const cost=pick([40,50,80,100]),p=pick([10,20,25,50]),profit=cost*p/100;
      return pctPercentQuestion(108, `An item costs ${pctMoney(cost)} and makes a profit of ${pctMoney(profit)}. Find the profit percentage based on cost price.`,p);
    }
    case 109: {
      const cost=pick([40,50,80,100]),p=pick([10,20,25,50]),loss=cost*p/100;
      return pctPercentQuestion(109, `An item costs ${pctMoney(cost)} and makes a loss of ${pctMoney(loss)}. Find the loss percentage based on cost price.`,p);
    }
    case 110: {
      const cost=pick([40,60,80,100]),p=pick([10,20,25,50]);
      return pctMoneyQuestion(110, `Find the selling price when the cost price is <strong>${pctMoney(cost)}</strong> and the profit is <strong>${p}%</strong>.`,cost*(1+p/100));
    }
    case 111: {
      const cost=pick([40,60,80,100]),p=pick([10,20,25,50]);
      return pctMoneyQuestion(111, `Find the selling price when the cost price is <strong>${pctMoney(cost)}</strong> and the loss is <strong>${p}%</strong>.`,cost*(1-p/100));
    }
    case 112: {
      const cost=pick([40,60,80,100]),p=25,selling=cost*1.25;
      return pctMoneyQuestion(112, `An item sells for <strong>${pctMoney(selling)}</strong> after a 25% profit. Find its cost price.`,cost);
    }
    case 113: {
      const cost=pick([40,60,80,100]),p=20,selling=cost*0.8;
      return pctMoneyQuestion(113, `An item sells for <strong>${pctMoney(selling)}</strong> after a 20% loss. Find its cost price.`,cost);
    }
    case 114:
      return pctTextQuestion(114, 'Profit percentage is normally calculated using which value as the denominator: cost price or selling price?', 'cost price', ['cost price','cost']);

    case 115: {
      const start=100,p1=pick([10,20,25]),p2=pick([10,20,25]);
      return percentageQuestion(115, `Increase <strong>${start}</strong> by <strong>${p1}%</strong>, then increase the result by <strong>${p2}%</strong>.`,start*(1+p1/100)*(1+p2/100));
    }
    case 116: {
      const start=100,p1=pick([10,20,25]),p2=pick([10,20,25]);
      return percentageQuestion(116, `Decrease <strong>${start}</strong> by <strong>${p1}%</strong>, then decrease the result by <strong>${p2}%</strong>.`,start*(1-p1/100)*(1-p2/100));
    }
    case 117: {
      const start=100,p=pick([10,20,25]);
      return percentageQuestion(117, `Increase <strong>${start}</strong> by <strong>${p}%</strong>, then decrease the new value by <strong>${p}%</strong>.`,start*(1+p/100)*(1-p/100));
    }
    case 118: {
      const start=100,p=pick([10,20,25]);
      return percentageQuestion(118, `Decrease <strong>${start}</strong> by <strong>${p}%</strong>, then increase the new value by <strong>${p}%</strong>.`,start*(1-p/100)*(1+p/100));
    }
    case 119: {
      const p1=pick([10,20,25]),p2=pick([10,20,25]);
      return percentageQuestion(119, `Find the combined multiplier for an increase of <strong>${p1}%</strong> followed by an increase of <strong>${p2}%</strong>.`,(1+p1/100)*(1+p2/100));
    }
    case 120: {
      const start=100,p1=10,p2=20,final=start*1.1*1.2;
      return pctPercentQuestion(120, `A value increases by 10% and then by 20%. Find the overall percentage increase.`,(final-start)/start*100);
    }
    case 121:
      return pctOneTwo(121, `A value rises by 20% and then falls by 20%. Does it return to the original value?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`,2);
    case 122: {
      const one=44,two=(1.2*1.2-1)*100;
      return pctTextQuestion(122, `Which gives the greater increase: one 44% increase or two successive 20% increases?`, 'equal', ['equal','same']);
    }
    case 123: {
      const original=100,p1=20,p2=10,final=original*1.2*0.9;
      return percentageQuestion(123, `After a 20% increase and then a 10% decrease, a value is <strong>${final}</strong>. Find the original value.`,original);
    }

    case 124: {
      const v=pctSimpleInterestValues();
      return pctMoneyQuestion(124, `Find the simple interest on <strong>${pctMoney(v.principal)}</strong> at <strong>${v.rate}% per year</strong> for <strong>${v.years} years</strong>.`,v.interest);
    }
    case 125: {
      const v=pctSimpleInterestValues();
      return pctMoneyQuestion(125, `Find one year of interest on <strong>${pctMoney(v.principal)}</strong> at <strong>${v.rate}% per year</strong>.`,v.principal*v.rate/100);
    }
    case 126: {
      const v=pctSimpleInterestValues();
      return pctMoneyQuestion(126, `Find the simple interest on <strong>${pctMoney(v.principal)}</strong> at <strong>${v.rate}% per year</strong> for <strong>${v.years} years</strong>.`,v.interest);
    }
    case 127: {
      const v=pctSimpleInterestValues();
      return pctMoneyQuestion(127, `Find the final amount after simple interest on <strong>${pctMoney(v.principal)}</strong> at <strong>${v.rate}%</strong> for <strong>${v.years} years</strong>.`,v.total);
    }
    case 128: {
      const rate=5,years=2,principal=pick([500,800,1000,1200]),interest=principal*rate/100*years;
      return pctMoneyQuestion(128, `Simple interest is <strong>${pctMoney(interest)}</strong> at <strong>${rate}%</strong> for <strong>${years} years</strong>. Find the principal.`,principal);
    }
    case 129: {
      const principal=1000,years=2,rate=pick([2,3,4,5,6]),interest=principal*rate/100*years;
      return pctPercentQuestion(129, `The simple interest on ${pctMoney(principal)} for ${years} years is ${pctMoney(interest)}. Find the annual interest rate.`,rate);
    }
    case 130: {
      const principal=pick([100,200,400,500]),rate=pick([5,10,20]);
      return pctMoneyQuestion(130, `A value of ${pctMoney(principal)} grows by <strong>${rate}%</strong> for one period. Find the new value.`,principal*(1+rate/100));
    }
    case 131: {
      const principal=pick([100,200,400,500]),rate=10,years=pick([2,3]);
      return pctMoneyQuestion(131, `${pctMoney(principal)} grows by <strong>${rate}% per year</strong> for <strong>${years} years</strong>. Find the final value.`,principal*(1.1**years));
    }
    case 132: {
      const value=pick([100,200,400,500]),rate=10,years=pick([2,3]);
      return pctMoneyQuestion(132, `${pctMoney(value)} depreciates by <strong>${rate}% per year</strong> for <strong>${years} years</strong>. Find the final value.`,value*(0.9**years));
    }
    case 133: {
      const principal=1000,rate=10,years=2,simple=principal*(1+rate/100*years),compound=principal*(1.1**years);
      return pctTextQuestion(133, `For ${pctMoney(principal)} at ${rate}% for ${years} years, which final amount is greater: simple interest or compound interest?`, 'compound interest', ['compound interest','compound']);
    }

    case 134: return pctPercentOfAmountQuestion(134,pick([20,25,40,50,60,75]),null,'students');
    case 135: {
      const total=pick([20,25,40,50]),present=randInt(Math.floor(total*.6),total);
      return pctPercentQuestion(135, `${present} of ${total} students are present. Find the attendance percentage.`,present/total*100);
    }
    case 136: {
      const total=pick([20,25,40,50]),score=randInt(Math.floor(total*.5),total);
      return pctPercentQuestion(136, `A student scores ${score} out of ${total}. Find the percentage score.`,score/total*100);
    }
    case 137: {
      const total=pick([20,25,40,50]),correct=randInt(Math.floor(total*.5),total),askCorrect=chance(.5);
      return pctPercentQuestion(137, `${correct} of ${total} answers are correct. Find the percentage ${askCorrect?'correct':'incorrect'}.`,(askCorrect?correct:total-correct)/total*100);
    }
    case 138: {
      const used=pick([20,25,40,60,75]);
      return pctPercentQuestion(138, `${used}% of a supply is used. What percentage remains?`,100-used);
    }
    case 139: {
      const capacity=pick([200,400,500,800,1000]),p=pick([20,25,40,50,75]);
      return percentageQuestion(139, `A tank is <strong>${p}% full</strong> and has capacity <strong>${capacity} L</strong>. How many litres are in the tank?`,capacity*p/100,{displayAnswer:`${capacity*p/100} L`});
    }
    case 140: {
      const distance=pick([20,40,60,80,100]),p=pick([20,25,40,50,75]);
      return percentageQuestion(140, `${p}% of a ${distance} km journey is complete. How many kilometres have been completed?`,distance*p/100,{displayAnswer:`${distance*p/100} km`});
    }
    case 141: {
      const minutes=pick([40,60,80,100,120]),p=pick([20,25,40,50,75]);
      return percentageQuestion(141, `${p}% of ${minutes} minutes has been used. How many minutes is that?`,minutes*p/100,{displayAnswer:`${minutes*p/100} minutes`});
    }
    case 142: {
      const population=pick([1000,2000,4000,5000]),p=pick([5,10,20]);
      return percentageQuestion(142, `A population of ${population} grows by ${p}%. Find the new population.`,population*(1+p/100));
    }
    case 143: {
      const value=pick([1000,2000,4000,5000]),p=pick([5,10,20]);
      return pctMoneyQuestion(143, `An asset worth ${pctMoney(value)} depreciates by ${p}%. Find its new value.`,value*(1-p/100));
    }
    case 144: {
      const total=pick([100,200,400,500]),p=pick([5,10,20,25]);
      return percentageQuestion(144, `A ${total} mL solution is ${p}% concentrate. How many millilitres of concentrate does it contain?`,total*p/100,{displayAnswer:`${total*p/100} mL`});
    }
    case 145: {
      const total=pick([100,200,400,500]),part=pick([10,20,25,40,50]);
      return pctPercentQuestion(145, `A mixture contains ${part} g of one material in a total mass of ${total} g. Find the percentage composition.`,part/total*100);
    }
    case 146: {
      const favourable=randInt(1,9),total=10;
      return pctPercentQuestion(146, `${favourable} of ${total} equally likely outcomes are favourable. Find the probability as a percentage.`,favourable/total*100);
    }
    case 147: {
      const single=10,items=3,discount=20,total=single*items*(1-discount/100);
      return pctMoneyQuestion(147, `Three items cost ${pctMoney(single)} each. A 20% multi-buy discount is applied to the total. Find the final cost.`,total);
    }
    case 148: {
      const completed=pick([20,30,40,50]),total=pick([40,50,80,100]);
      return pctPercentQuestion(148, `${completed} units are completed out of a target of ${total}. Find the completion rate.`,completed/total*100);
    }
    case 149: {
      const amount=pick([100,200,300,400]),p=pick([10,20,25]),extra=pick([5,10,20]);
      return percentageQuestion(149, `Find ${p}% of ${amount}, then add ${extra}.`,amount*p/100+extra);
    }
    case 150: {
      const total=pctWholeFor(60),p1=25,p2=35;
      return percentageQuestion(150, `${p1}% of ${total} items are selected, and another ${p2}% of the ${total} items are selected. How many are selected altogether?`,total*(p1+p2)/100);
    }
    case 151: {
      const a=pick([20,25,30]),b=pick([10,15,20]);
      return pctPercentQuestion(151, `${a}% and ${b}% of a whole are used. What percentage remains?`,100-a-b);
    }
    case 152: {
      const total=pick([100,200,400,500]),used=pick([20,25,40,60]);
      return percentageQuestion(152, `${used}% of ${total} items are used. How many remain?`,total*(1-used/100));
    }
    case 153: {
      const total=pick([100,200,400]),first=25,second=40,remaining=total*(1-first/100);
      return percentageQuestion(153, `${first}% of ${total} items are removed. Then ${second}% of the remaining items are removed. How many are removed in the second step?`,remaining*second/100);
    }
    case 154: {
      const p1=pick([20,25,40,50]),p2=pick([20,25,40,50]);
      return pctPercentQuestion(154, `What percentage of the original whole is ${p2}% of ${p1}%?`,p1*p2/100);
    }
    case 155: {
      const total=pick([100,200,400]),p1=pick([20,25,30]),p2=pick([10,15,20]);
      return percentageQuestion(155, `${p1}% of ${total} items are used, and another ${p2}% of the ${total} items are used. How many are used altogether?`,total*(p1+p2)/100);
    }
    case 156: {
      const first=100,second=200,p=25;
      return percentageQuestion(156, `Find the total of ${p}% of ${first} and ${p}% of ${second}.`,first*p/100+second*p/100);
    }
    case 157: {
      const original=200,p1=25,p2=20,final=original*(1-p1/100)*(1-p2/100);
      return percentageQuestion(157, `After 25% is removed and then 20% of the remainder is removed, ${final} remain. Find the original amount.`,original);
    }
    case 158:
      return pctTextQuestion(158, 'To find 35% of 240, which operation should be used?', '240 × 0.35', ['240 × 0.35','240*0.35','0.35*240','0.35 × 240']);
    case 159:
      return percentageQuestion(159, 'A shirt costs $80 and is 25% off. The shop closes at 6 pm. Find the sale price.',60,{displayAnswer:'$60.00'});
    case 160: {
      const price=200,discount=20,tax=15,afterDiscount=price*.8,final=afterDiscount*1.15;
      return pctMoneyQuestion(160, `An item costs ${pctMoney(price)}. It is discounted by ${discount}%, then 15% GST is added to the discounted price. Find the final price.`,final);
    }

    case 161: {
      const cases=[[1,4,25],[1,2,50],[3,4,75],[2,5,40],[3,5,60]];
      const [a,b,p]=pick(cases);
      return pctPercentQuestion(161, `Convert the ratio <strong>${a}:${b-a}</strong> into the percentage represented by the first part of the total.`,p);
    }
    case 162: {
      const p=pick([20,25,40,50,60,75]),f=simplifyFraction(p,100);
      return pctTextQuestion(162, `Write <strong>${p}%</strong> as a simplified part-to-whole ratio.`, `${f.n}:${f.d}`, [`${f.n}:${f.d}`]);
    }
    case 163: {
      const success=pick([2,3,4,5,6,8]),total=10;
      return pctPercentQuestion(163, `${success} successful results occur in ${total} attempts. Express the rate as a percentage.`,success/total*100);
    }
    case 164: {
      const success=pick([6,7,8,9]),total=10;
      return pctPercentQuestion(164, `${success} of ${total} attempts succeed. Find the success rate.`,success/total*100);
    }
    case 165: {
      const success=pick([6,7,8,9]),total=10;
      return pctPercentQuestion(165, `${success} of ${total} attempts succeed. Find the failure rate.`,(total-success)/total*100);
    }
    case 166: {
      const output=pick([60,70,80,90]),input=100;
      return pctPercentQuestion(166, `A machine produces ${output} useful units from 100 input units. Find its efficiency.`,output);
    }
    case 167: {
      const occupied=pick([40,50,60,75,80,90]),total=100;
      return pctPercentQuestion(167, `${occupied} of ${total} seats are occupied. Find the occupancy rate.`,occupied);
    }
    case 168: {
      const oldRate=pick([20,40,50,80]),p=pick([10,20,25,50]),newRate=oldRate*(1+p/100);
      return pctPercentQuestion(168, `A rate increases from ${oldRate} units per hour to ${newRate} units per hour. Find the percentage increase.`,p);
    }
    case 169: {
      const a=8/10*100,b=18/20*100;
      return pctTextQuestion(169, `Team A succeeds 8 times out of 10. Team B succeeds 18 times out of 20. Which has the higher success rate?`, 'Team B', ['team b','b']);
    }
    case 170: {
      const p=pick([20,25,40,50,60,75]);
      return pctPercentQuestion(170, `<strong>Table:</strong> Completed = ${p}%, Remaining = ${100-p}%. What percentage is completed?`,p);
    }
    case 171: {
      const a=pick([20,25,30,40]),b=pick([10,15,20,25]);
      return pctPercentQuestion(171, `<strong>Table:</strong> Category A = ${a}%, Category B = ${b}%, Category C = ?. Find Category C.`,100-a-b);
    }
    case 172: {
      const p=pick([20,25,40,50,60,75,80]);
      return pctPercentQuestion(172, `A percentage bar has ${p} of its 100 equal parts shaded. What percentage is shaded?`,p);
    }
    case 173: {
      const p=pick([10,20,25,40,50,75]);
      return pctPercentQuestion(173, `A pie chart sector represents ${p} out of 100 equal parts. What percentage does it represent?`,p);
    }
    case 174: {
      const p=pick([10,20,25,40,50,75]);
      return percentageQuestion(174, `Find the pie-chart angle for <strong>${p}%</strong>.`,360*p/100,{displayAnswer:`${360*p/100}°`});
    }
    case 175: {
      const angle=pick([36,72,90,144,180,270]);
      return pctPercentQuestion(175, `A pie-chart sector has angle <strong>${angle}°</strong>. What percentage of the circle is it?`,angle/360*100);
    }
    case 176: {
      const yes=pick([20,25,40,50,60,75]),no=100-yes;
      return pctPercentQuestion(176, `A survey reports Yes = ${yes}% and No = ${no}%. What percentage answered Yes?`,yes);
    }
    case 177: {
      const values=chance(.5)?[20,30,50]:[20,30,40];
      return pctOneTwo(177, `Do these percentages total 100%? <strong>${values.join('%, ')}%</strong><br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`,values.reduce((a,b)=>a+b,0)===100?1:2);
    }
    case 178: {
      const a=pick([20,25,30,40]),b=pick([10,15,20,25]);
      return pctPercentQuestion(178, `Three categories total 100%. Two categories are ${a}% and ${b}%. Find the missing percentage.`,100-a-b);
    }
    case 179: {
      const total=pick([100,200,400,500]),p=pick([10,20,25,40,50]);
      return percentageQuestion(179, `${p}% of a total frequency of ${total} belongs to one category. Find the category frequency.`,total*p/100);
    }
    case 180: {
      const a=30/50*100,b=42/70*100;
      return pctTextQuestion(180, `Data set A has 30 successes out of 50. Data set B has 42 successes out of 70. Which has the higher success percentage?`, 'equal', ['equal','same']);
    }

    case 181: {
      const p=pick([18,29,42,61]),whole=pick([48,79,121,198]),estimate=Math.round(p/10)*10*Math.round(whole/10)*10/100;
      return percentageQuestion(181, `Estimate ${p}% of ${whole} by rounding both numbers to the nearest 10.`,estimate);
    }
    case 182: {
      const value=pick([12.4,25.5,48.6,73.2,89.7]);
      return pctPercentQuestion(182, `Round <strong>${value}%</strong> to the nearest whole percent.`,Math.round(value));
    }
    case 183: {
      const value=pick([12.34,25.56,48.67,73.25]);
      return pctPercentQuestion(183, `Round <strong>${value}%</strong> to 1 decimal place.`,Number(value.toFixed(1)));
    }
    case 184: {
      const value=pick([12.345,25.567,48.674,73.258]);
      return pctPercentQuestion(184, `Round <strong>${value}%</strong> to 2 decimal places.`,Number(value.toFixed(2)));
    }
    case 185: {
      const value=pick([12.345,25.567,48.674,73.258]);
      return pctMoneyQuestion(185, `Round <strong>$${value}</strong> to the nearest cent.`,Number(value.toFixed(2)));
    }
    case 186:
      return pctTextQuestion(186, 'Which calculator expression finds 35% of 240?', '0.35 × 240', ['0.35 × 240','0.35*240','240*0.35','240 × 0.35']);
    case 187: {
      const p=pick([10,20,25,40,50]);
      return percentageQuestion(187, `Write the decimal multiplier for an increase of <strong>${p}%</strong>.`,1+p/100);
    }
    case 188: {
      const decimal=pick([0.123456,0.375,0.666667,1.25]);
      return pctPercentQuestion(188, `A calculator shows <strong>${decimal}</strong>. Write this as a percentage.`,decimal*100);
    }
    case 189:
      return pctOneTwo(189, `Is 250 a reasonable answer for 25% of 100?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`,2);
    case 190:
      return pctTextQuestion(190, 'A percentage answer of twenty-five should be written with which symbol?', '%', ['%']);
    case 191: {
      const a=pick([20,25,30,40]),b=pick([10,15,20,25]);
      return pctPercentQuestion(191, `${a}% + ${b}% + ? = 100%. Find the missing percentage.`,100-a-b);
    }
    case 192: {
      const p=pick([10,20,25,40,50]),whole=pctWholeFor(p);
      return percentageQuestion(192, `<strong>${p}%</strong> of <strong>${whole}</strong> is ?.`,whole*p/100);
    }
    case 193: return pctFindWholeQuestion(193,pick([10,20,25,40,50]));
    case 194: {
      const original=pick([40,50,80,100]),p=pick([10,20,25,50]),final=original*(1+p/100);
      return pctPercentQuestion(194, `${original} increased to ${final}. Find the percentage increase.`,p);
    }
    case 195: {
      const original=pick([40,50,80,100]),p=pick([10,20,25,50]),final=original*(1-p/100);
      return pctPercentQuestion(195, `${original} decreased to ${final}. Find the percentage decrease.`,p);
    }
    case 196: {
      const p=pick([10,20,25,40,50]),whole=pctWholeFor(p),part=whole*p/100;
      return percentageQuestion(196, `Solve: <strong>${p}% of x = ${part}</strong>.`,whole);
    }
    case 197: {
      const original=pick([40,60,80,100]),p=pick([10,20,25,40]),final=original*(1-p/100);
      return percentageQuestion(197, `Solve: <strong>${100-p}% of x = ${final}</strong>.`,original);
    }
    case 198: {
      const part=pick([20,30,40,50]),whole=100;
      return pctPercentQuestion(198, `${part} successful results occur in ${whole} attempts. Find the unknown success rate.`,part);
    }
    case 199: {
      const principal=1000,rate=5,years=pick([2,3,4,5]),interest=principal*rate/100*years;
      return percentageQuestion(199, `Simple interest of ${pctMoney(interest)} is earned on ${pctMoney(principal)} at ${rate}% per year. Find the time in years.`,years,{displayAnswer:`${years} years`});
    }
    case 200: {
      const original=200,discount=25,tax=10,final=original*(1-discount/100)*(1+tax/100);
      return percentageQuestion(200, `An original price x is reduced by 25% and then increased by 10%. The final price is ${pctMoney(final)}. Find x.`,original,{displayAnswer:pctMoney(original)});
    }
    default:
      return percentageQuestion(number, 'Find 50% of 100.', 50);
  }
}

TOPIC_BANKS.percentages = {};
for (const group of TOPIC_CONFIGS.percentages.groups) {
  TOPIC_BANKS.percentages[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.percentages[group.id][point.id] = () => generatePercentagePoint(pointNumber);
  }
}
