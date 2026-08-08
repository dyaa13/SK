'use strict';

const LWP_KNOWLEDGE_LABELS = [
  'Identify What the Question Is Asking',
  'Choose the Unknown Quantity',
  'Define x Clearly',
  'Choose the Simplest Quantity as x',
  'Avoid Choosing a Known Quantity',
  'Distinguish Known and Unknown Information',
  'Find Information That Depends on x',
  'Express Another Quantity Using x',
  'Decide Whether One Variable Is Enough',
  'Choose the Better Definition of x',
  'Write x More Than Another Quantity',
  'Write x Less Than Another Quantity',
  'Write Twice a Quantity',
  'Write Three Times a Quantity',
  'Write Half a Quantity',
  'Write a Fixed Amount More Than Twice a Quantity',
  'Write a Fixed Amount Less Than Three Times a Quantity',
  'Write the Total of Two Related Quantities',
  'Write the Difference between Two Related Quantities',
  'Express Three Related Quantities Using One Variable',
  'Recognise the Equality Statement',
  'Turn “Total Is” into an Equation',
  'Turn “Difference Is” into an Equation',
  'Turn “Cost Is” into an Equation',
  'Turn “Perimeter Is” into an Equation',
  'Turn “After Adding” into an Equation',
  'Turn “After Removing” into an Equation',
  'Turn “Twice as Much As” into an Equation',
  'Build an Equation from Two Related Quantities',
  'Build an Equation from Three Related Quantities',
  'Write a One-Step Addition Equation from Words',
  'Write a Total Equation from Two Related Quantities',
  'Write a Total Equation with a Difference Relationship',
  'Write a Multiplication Equation from Words',
  'Write a Division Equation from Words',
  'Write a Two-Step Equation from Words',
  'Write a Bracket Equation from Words',
  'Write an Equation with the Unknown on Both Sides',
  'Choose the Correct Equation for a Situation',
  'Identify an Incorrect Equation for a Situation',
  'Solve a One-Step Addition Number Problem',
  'Solve a One-Step Subtraction Number Problem',
  'Solve a One-Step Multiplication Number Problem',
  'Solve a One-Step Division Number Problem',
  'Solve a Two-Step Number Problem',
  'Solve a Number Problem with Brackets',
  'Solve a Number Problem with a Known Difference',
  'Solve a Number Problem with a Known Multiple',
  'Solve a Reverse Number Problem',
  'Check a Number-Problem Answer in Context',
  'Find Two Numbers with a Known Sum and Difference',
  'Find Two Numbers When One Is a Fixed Amount Greater',
  'Find Two Numbers When One Is Twice the Other',
  'Find Two Numbers When One Is Three Times the Other',
  'Find Numbers with a “Twice Plus” Relationship',
  'Find Numbers with a “Three Times Minus” Relationship',
  'Find Three Related Numbers with a Known Total',
  'Find a Smaller Number from a Multiple Relationship',
  'Find a Larger Number from a Difference and Total',
  'Solve a Multi-Step Number-Relationship Problem',
  'Find Two Consecutive Integers from Their Sum',
  'Find Three Consecutive Integers from Their Sum',
  'Find Two Consecutive Even Integers from Their Sum',
  'Find Two Consecutive Odd Integers from Their Sum',
  'Find Three Consecutive Even Integers from Their Sum',
  'Find Three Consecutive Odd Integers from Their Sum',
  'Find Consecutive Integers from a Relationship',
  'Find the Middle Consecutive Integer',
  'Find the Largest Consecutive Integer',
  'Solve a Multi-Step Consecutive-Integer Problem',
  'Find an Age from a Fixed Age Difference',
  'Find Ages from Their Present Sum',
  'Find an Age When One Person Is Twice Another',
  'Find an Age When One Person Is Three Times Another',
  'Use an Age Relationship from Years Ago',
  'Use an Age Relationship in Future Years',
  'Use a Past-to-Present Age Relationship',
  'Use a Present-to-Future Age Relationship',
  'Solve a Two-Time-Point Age Problem',
  'Solve a Three-Person Age Problem',
  'Find the Price of One Identical Item',
  'Find an Item Price with a Fixed Extra Cost',
  'Find an Item Price from Money Remaining',
  'Find a Ticket Price from a Total Cost',
  'Find a Child Ticket Price from an Adult-Child Relationship',
  'Find a Quantity Bought from a Budget',
  'Compare Two Purchase Plans with an Equation',
  'Find an Original Amount after Spending',
  'Find a Unit Price from Two Related Purchases',
  'Solve a Multi-Step Shopping Problem',
  'Find a Rectangle Width from Its Perimeter',
  'Find a Rectangle Length from Its Perimeter',
  'Find a Side When Rectangle Length Is a Multiple of Width',
  'Find a Missing Triangle Side from Perimeter',
  'Find Equal Sides of an Isosceles Triangle',
  'Find a Square Side from Perimeter',
  'Find a Related Side in a Quadrilateral',
  'Find a Missing Length from a Combined Perimeter',
  'Build and Solve a Geometry Equation',
  'Solve a Multi-Step Perimeter Problem',
  'Find a Share When One Amount Is Twice Another',
  'Find a Share When One Amount Is Three Times Another',
  'Find Two Shares from a Simple Ratio',
  'Find Three Shares from a Simple Ratio',
  'Find a Common Ratio Unit from a Total',
  'Find a Share from a Known Difference in Ratio Parts',
  'Find a Total from One Known Ratio Share',
  'Find a Missing Share after One Person Gives Some Away',
  'Solve a Sharing Problem with a Fixed Extra Amount',
  'Solve a Multi-Step Ratio-and-Sharing Equation',
  'Find Time from Distance and Speed',
  'Find Time after Removing a Fixed Distance',
  'Find Speed from Distance and Unknown Time',
  'Find an Unknown Time in a Two-Part Journey',
  'Find an Unknown Distance in a Two-Part Journey',
  'Find a Missing Travel Time from a Total Journey Time',
  'Use Equal Distances to Form an Equation',
  'Use Equal Times to Form an Equation',
  'Solve a Simple Meeting-or-Chasing Equation',
  'Solve a Multi-Step Distance-Speed-Time Problem',
  'Find an Original Amount after a Fixed Increase',
  'Find an Original Amount after a Fixed Decrease',
  'Find an Original Price after a 10% Discount',
  'Find an Original Price after a 20% Discount',
  'Find an Original Price after a 25% Discount',
  'Find an Original Amount after a 50% Change',
  'Find a Pre-Tax Price with an Easy Tax Rate',
  'Find a Cost Price from an Easy Profit Percentage',
  'Find an Original Amount after a Percentage Increase',
  'Solve a Multi-Step Easy-Percentage Equation',
  'Find a Missing Value from the Average of Three Numbers',
  'Find a Missing Value from the Average of Four Numbers',
  'Find a Missing Test Score from an Average',
  'Find a Missing Age from an Average',
  'Find a Missing Group Total from an Overall Average',
  'Find an Average after Adding One New Value',
  'Find a Missing Value When the Average Changes',
  'Find Two Equal Missing Values from an Average',
  'Find an Equal Group Value from an Overall Average',
  'Solve a Multi-Step Average-and-Total Problem',
  'Solve a Fixed-Fee Plus Unit-Cost Problem',
  'Solve a Multi-Step Rectangle Problem',
  'Solve a Give-and-Take Quantity Problem',
  'Solve a Multi-Step Age Problem',
  'Solve a Multi-Step Ticket Problem',
  'Solve a Multi-Step Number Relationship',
  'Solve a Multi-Step Travel Problem',
  'Solve a Multi-Step Percentage Problem',
  'Choose and Solve the Correct Equation Model',
  'Solve a Multi-Condition Linear Word Problem'
];


function lwpPoints(start, end) {
  return LWP_KNOWLEDGE_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `lwp${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.linear_equation_word_problems = {
  title: 'Linear Equation Word Problems',
  pageTitle: 'Knowledge Practice — Linear Equation Word Problems',
  knowledgeMapTitle: 'Linear Equation Word Problems Practice Structure',
  intro: 'The 150 detailed knowledge points move from choosing the unknown and writing expressions to building equations and solving common real-life linear word problems.',
  teacherNote: 'Practices 1–4 deliberately slow down the modelling process: choose x, express related quantities, identify the equality, then write the equation. Later practices solve complete word problems. Questions use clear text, unique answers and manageable numbers.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'chooseUnknown', practiceNumber: 1, label: 'Choosing the Unknown', description: 'Identify what must be found and choose a useful definition for x.', knowledgePoints: lwpPoints(1, 10) },
    { id: 'contextExpressions', practiceNumber: 2, label: 'Relationships as Expressions', description: 'Translate common word relationships into expressions in x.', knowledgePoints: lwpPoints(11, 20) },
    { id: 'findEquality', practiceNumber: 3, label: 'Finding the Equality', description: 'Identify the sentence that tells you which two quantities are equal.', knowledgePoints: lwpPoints(21, 30) },
    { id: 'writeEquation', practiceNumber: 4, label: 'From Words to an Equation', description: 'Write or choose the equation that represents a situation before solving it.', knowledgePoints: lwpPoints(31, 40) },
    { id: 'simpleNumberProblems', practiceNumber: 5, label: 'Simple Number Problems', description: 'Solve one-step and two-step number problems using a linear equation.', knowledgePoints: lwpPoints(41, 50) },
    { id: 'numberRelationships', practiceNumber: 6, label: 'Number Relationship Problems', description: 'Represent two or three related numbers with one variable.', knowledgePoints: lwpPoints(51, 60) },
    { id: 'consecutiveIntegers', practiceNumber: 7, label: 'Consecutive Integer Problems', description: 'Model consecutive, consecutive even and consecutive odd integers.', knowledgePoints: lwpPoints(61, 70) },
    { id: 'ageProblems', practiceNumber: 8, label: 'Age Problems', description: 'Use present, past and future age relationships.', knowledgePoints: lwpPoints(71, 80) },
    { id: 'moneyShopping', practiceNumber: 9, label: 'Money and Shopping Problems', description: 'Model item prices, fixed charges, budgets and ticket costs.', knowledgePoints: lwpPoints(81, 90) },
    { id: 'perimeterGeometry', practiceNumber: 10, label: 'Perimeter and Geometry Problems', description: 'Represent related side lengths and use perimeter equations.', knowledgePoints: lwpPoints(91, 100) },
    { id: 'ratioSharing', practiceNumber: 11, label: 'Ratio and Sharing with Equations', description: 'Use one variable to represent equal ratio units and related shares.', knowledgePoints: lwpPoints(101, 110) },
    { id: 'distanceSpeedTime', practiceNumber: 12, label: 'Distance, Speed and Time', description: 'Build one-variable distance, speed and time equations with friendly numbers.', knowledgePoints: lwpPoints(111, 120) },
    { id: 'percentageEquations', practiceNumber: 13, label: 'Percentage Problems with Equations', description: 'Use easy percentages such as 10%, 20%, 25% and 50% in reverse problems.', knowledgePoints: lwpPoints(121, 130) },
    { id: 'averageTotal', practiceNumber: 14, label: 'Average and Total Problems', description: 'Build average-and-total equations to find missing values, group totals and equal unknowns.', knowledgePoints: lwpPoints(131, 140) },
    { id: 'multiStepWordProblems', practiceNumber: 15, label: 'Multi-Step Equation Word Problems', description: 'Choose a model, build the equation and solve mixed multi-step situations.', knowledgePoints: lwpPoints(141, 150) }
  ]
};

function lwpLevel(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'core' ? core : challenge;
}

function lwpName() {
  return pick(['Ava', 'Ben', 'Chloe', 'Daniel', 'Ella', 'Finn', 'Grace', 'Hugo', 'Isla', 'Jack', 'Liam', 'Mia', 'Noah', 'Olivia', 'Sam', 'Zoe']);
}

function lwpOtherName(exclude) {
  const excluded = new Set(String(exclude || '').split('|').filter(Boolean));
  let name = lwpName();
  while (excluded.has(name)) name = lwpName();
  return name;
}

function lwpQuestion(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `lwp${String(point).padStart(3, '0')}`,
    subtopic: LWP_KNOWLEDGE_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function lwpChoice(point, text, answer, hint = '') {
  // Shuffle standard three-option questions so students cannot learn a fixed answer position.
  const match = text.match(/^([\s\S]*?)<br>1\.\s*([\s\S]*?)\s*&nbsp;&nbsp;\s*2\.\s*([\s\S]*?)\s*&nbsp;&nbsp;\s*3\.\s*([\s\S]*)$/);
  if (match) {
    const stem = match[1];
    const options = [match[2], match[3], match[4]].map((label, index) => ({ label, original: index + 1 }));
    for (let i = options.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    const shuffledAnswer = options.findIndex(option => option.original === answer) + 1;
    const shuffledText = `${stem}<br>1. ${options[0].label} &nbsp;&nbsp; 2. ${options[1].label} &nbsp;&nbsp; 3. ${options[2].label}`;
    return lwpQuestion(point, `${shuffledText}<br><strong>Enter 1, 2 or 3.</strong>`, shuffledAnswer, { hint });
  }
  return lwpQuestion(point, `${text}<br><strong>Enter 1, 2 or 3.</strong>`, answer, { hint });
}

function lwpNumber(point, text, answer, hint = '') {
  return lwpQuestion(point, `${text}<br><strong>Enter the number only.</strong>`, answer, { hint });
}

function lwpExpressionVariants(expression) {
  const variants = new Set([expression]);
  variants.add(expression.replace(/(\d)(x)/gi, '$1*$2'));
  variants.add(expression.replace(/(\d)(x)/gi, '$1×$2'));
  variants.add(expression.replace(/\//g, '÷'));
  return [...variants];
}

function lwpEquationVariants(left, right, extras = []) {
  const forms = [`${left}=${right}`, `${right}=${left}`, ...extras];
  const variants = new Set();
  forms.forEach(form => lwpExpressionVariants(form).forEach(v => variants.add(v)));
  return [...variants];
}

function lwpExpression(point, text, answer, extras = [], hint = '') {
  const accepted = new Set();
  [answer, ...extras].forEach(form => lwpExpressionVariants(form).forEach(v => accepted.add(v)));
  return lwpQuestion(point, `${text}<br><strong>Use x for the unknown. Write the expression only.</strong>`, answer, {
    displayAnswer: answer,
    acceptedAnswers: [...accepted],
    answerType: 'fraction-structure',
    hint
  });
}

function lwpEquation(point, text, left, right, extras = [], hint = '') {
  const answer = `${left}=${right}`;
  return lwpQuestion(point, `${text}<br><strong>Use x for the unknown. Write the equation only. Do not solve it.</strong>`, answer, {
    displayAnswer: answer,
    acceptedAnswers: lwpEquationVariants(left, right, extras),
    answerType: 'fraction-structure',
    hint
  });
}

function lwpFriendlyX(min = 3, max = null) {
  const upper = max ?? lwpLevel(12, 20, 30);
  return randInt(min, upper);
}

function lwpCoeff() {
  return randInt(2, lwpLevel(4, 6, 8));
}

function lwpPercent() {
  return pick([10, 20, 25, 50]);
}

function lwpMoney(value) {
  return `$${value}`;
}

function lwpHours(value) {
  return `${value} ${Math.abs(value) === 1 ? 'hour' : 'hours'}`;
}

function lwpValidTriangleSides() {
  const x = lwpFriendlyX(4);
  let d;
  let k;
  do {
    d = Math.max(3, x + randInt(-2, 4));
    k = Math.max(3, x + randInt(-2, 4));
  } while (!(x + d > k && x + k > d && d + k > x));
  return [x, d, k];
}

function lwpRatioPair() {
  return pick([[1, 2], [2, 3], [2, 5], [3, 4], [3, 5]]);
}

function lwpGenerator(point) {
  return function generateLinearWordProblem() {
    const a = lwpName();
    const b = lwpOtherName(a);
    const c = lwpOtherName(`${a}|${b}`);
    let x, k, d, total, price, count, speed, time, age, left, right, r3, avg, vals, newAvg, newTotal, targetAvg, fee;

    switch (point) {
      // Practice 1 — Choosing the Unknown
      case 1:
        return lwpChoice(point, `${a} has some stickers. ${b} has 7 more stickers than ${a}. Together they have 39 stickers. The question asks: “How many stickers does ${a} have?” What quantity must be found?<br>1. ${a}'s stickers &nbsp;&nbsp; 2. ${b}'s stickers &nbsp;&nbsp; 3. The total number of stickers`, 1, 'Focus on the exact quantity named in the question.');
      case 2:
        return lwpChoice(point, `A rectangle is 6 cm longer than its width. Its perimeter is known. Which quantity is the most useful choice for x?<br>1. The width &nbsp;&nbsp; 2. The perimeter &nbsp;&nbsp; 3. The number 6`, 1, 'Choose an unknown quantity that makes the other side easy to express.');
      case 3:
        return lwpChoice(point, `${a} is 5 years younger than ${b}. Their total age is 31. Which is a clear definition of x?<br>1. Let x = ${a}'s age &nbsp;&nbsp; 2. Let x = 5 years &nbsp;&nbsp; 3. Let x = 31`, 1, 'x should represent an unknown quantity, not a number already given.');
      case 4:
        return lwpChoice(point, `One number is 8 greater than another. Their sum is 44. Which choice usually gives the simplest expressions?<br>1. Let x = the smaller number &nbsp;&nbsp; 2. Let x = 44 &nbsp;&nbsp; 3. Let x = the difference 8`, 1, 'The larger number then becomes x + 8.');
      case 5:
        return lwpChoice(point, `Three identical notebooks and a $4 pen cost $25. Which quantity should NOT be chosen as x because it is already known?<br>1. Price of one notebook &nbsp;&nbsp; 2. Total cost $25 &nbsp;&nbsp; 3. None of these`, 2, 'Known information does not need a variable.');
      case 6:
        return lwpChoice(point, `${a} has twice as many cards as ${b}. Together they have 36 cards. Which information is unknown?<br>1. The total 36 &nbsp;&nbsp; 2. The multiplier 2 &nbsp;&nbsp; 3. The number of cards each person has`, 3, 'Separate the fixed facts from the quantities you must find.');
      case 7:
        return lwpChoice(point, `Let x be the number of books ${a} has. ${b} has 9 more books than ${a}. Which quantity depends on x?<br>1. ${b}'s number of books &nbsp;&nbsp; 2. The number 9 &nbsp;&nbsp; 3. The word “books”`, 1, `${b}'s amount changes whenever x changes.`);
      case 8:
        return lwpChoice(point, `Let x be ${a}'s age. ${b} is 6 years older. Which expression represents ${b}'s age?<br>1. x + 6 &nbsp;&nbsp; 2. 6x &nbsp;&nbsp; 3. x − 6`, 1, '“6 years older” means add 6.');
      case 9:
        return lwpChoice(point, `${a} has some marbles. ${b} has 4 more than ${a}, and ${c} has twice as many as ${a}. Can all three amounts be represented using one variable x?<br>1. Yes &nbsp;&nbsp; 2. No &nbsp;&nbsp; 3. Only if the total is zero`, 1, 'Once x is chosen for one amount, the other two can be written from the relationships.');
      case 10:
        return lwpChoice(point, `A club charges a $10 joining fee plus $4 for each session. The total paid is $34. Which definition of x is better?<br>1. x = number of sessions &nbsp;&nbsp; 2. x = total cost $34 &nbsp;&nbsp; 3. x = joining fee $10`, 1, 'Choose the unknown that the question is trying to find.');

      // Practice 2 — Relationships as Expressions
      case 11:
        k = randInt(3, 12);
        return lwpExpression(point, `Let x be the number of stickers ${a} has. ${b} has ${k} more stickers than ${a}. Write an expression for ${b}'s number of stickers.`, `x+${k}`);
      case 12:
        k = randInt(3, 10);
        return lwpExpression(point, `Let x be the number of points ${a} scored. ${b} scored ${k} fewer points than ${a}. Write an expression for ${b}'s score.`, `x-${k}`);
      case 13:
        return lwpExpression(point, `Let x be the number of books ${a} has. ${b} has twice as many books. Write an expression for ${b}'s number of books.`, '2x');
      case 14:
        return lwpExpression(point, `Let x be the number of tokens ${a} has. ${b} has three times as many tokens. Write an expression for ${b}'s number of tokens.`, '3x');
      case 15:
        return lwpExpression(point, `Let x be the total length of a ribbon in centimetres. ${a} uses half of the ribbon. Write an expression for the length ${a} uses.`, 'x/2', ['1/2x', 'x÷2']);
      case 16:
        k = randInt(3, 9);
        return lwpExpression(point, `Let x be ${a}'s number of cards. ${b} has ${k} more than twice ${a}'s number. Write an expression for ${b}'s number of cards.`, `2x+${k}`);
      case 17:
        k = randInt(2, 8);
        return lwpExpression(point, `Let x be ${a}'s score. ${b}'s score is ${k} less than three times ${a}'s score. Write an expression for ${b}'s score.`, `3x-${k}`);
      case 18:
        k = randInt(3, 10);
        return lwpExpression(point, `Let x be the number of marbles ${a} has. ${b} has ${k} more marbles. Write an expression for their total number of marbles.`, `2x+${k}`, [`x+(x+${k})`, `(x+${k})+x`]);
      case 19:
        k = randInt(2, 7);
        return lwpExpression(point, `Let x be the smaller number. The larger number is 2x + ${k}. Write an expression for the difference between the larger and smaller numbers.`, `x+${k}`, [`2x+${k}-x`, `(2x+${k})-x`]);
      case 20:
        k = randInt(2, 7);
        return lwpExpression(point, `Let x be ${a}'s number of counters. ${b} has ${k} more than ${a}, and ${c} has twice as many as ${a}. Write an expression for the total number of counters.`, `4x+${k}`, [`x+(x+${k})+2x`, `2x+x+(x+${k})`]);

      // Practice 3 — Finding the Equality
      case 21:
        return lwpChoice(point, `${a} has x cards. ${b} has x + 6 cards. Together they have 34 cards. Which sentence gives the equality needed to form the equation?<br>1. ${b} has 6 more cards &nbsp;&nbsp; 2. Together they have 34 cards &nbsp;&nbsp; 3. ${a} has cards`, 2, 'Look for the statement that says two quantities have the same value.');
      case 22:
        return lwpChoice(point, `Two related numbers are x and x + 8. Their total is 42. Which equation statement should be used?<br>1. x + (x + 8) = 42 &nbsp;&nbsp; 2. x + 8 = 42 &nbsp;&nbsp; 3. x = 8`, 1, '“Their total is 42” means add both quantities and set the sum equal to 42.');
      case 23:
        return lwpChoice(point, `The larger number is 3x and the smaller number is x. Their difference is 18. Which equation statement matches the difference?<br>1. 3x + x = 18 &nbsp;&nbsp; 2. 3x − x = 18 &nbsp;&nbsp; 3. 3x = x`, 2, 'Difference means subtract the smaller quantity from the larger one.');
      case 24:
        return lwpChoice(point, `Four identical tickets cost $x each and there is a $3 booking fee. The total cost is $35. Which equation represents the cost?<br>1. 4x + 3 = 35 &nbsp;&nbsp; 2. 4 + x + 3 = 35 &nbsp;&nbsp; 3. 3x + 4 = 35`, 1, 'Four tickets cost 4x altogether.');
      case 25:
        return lwpChoice(point, `A rectangle has width x cm and length x + 5 cm. Its perimeter is 46 cm. Which equation uses the perimeter information?<br>1. x + (x + 5) = 46 &nbsp;&nbsp; 2. 2x + 2(x + 5) = 46 &nbsp;&nbsp; 3. x(x + 5) = 46`, 2, 'Perimeter adds all four sides.');
      case 26:
        return lwpChoice(point, `${a} had x dollars and then received $7. ${a} now has $29. Which equality represents the final amount?<br>1. x + 7 = 29 &nbsp;&nbsp; 2. x − 7 = 29 &nbsp;&nbsp; 3. 7x = 29`, 1, 'The amount after receiving money is the starting amount plus 7.');
      case 27:
        return lwpChoice(point, `${a} had x stickers and gave away 9. ${a} now has 17. Which equality represents the situation?<br>1. x + 9 = 17 &nbsp;&nbsp; 2. x − 9 = 17 &nbsp;&nbsp; 3. 9 − x = 17`, 2, 'Giving away decreases the starting amount.');
      case 28:
        return lwpChoice(point, `${a} has x points. ${b} has twice as many points as ${a} and has 24 points. Which equation represents the relationship?<br>1. x + 2 = 24 &nbsp;&nbsp; 2. 2x = 24 &nbsp;&nbsp; 3. x ÷ 2 = 24`, 2, 'Twice x means 2x.');
      case 29:
        return lwpChoice(point, `${a} has x books and ${b} has x + 4 books. Together they have 28 books. Which equation should be formed?<br>1. x + (x + 4) = 28 &nbsp;&nbsp; 2. x + 4 = 28 &nbsp;&nbsp; 3. 4x = 28`, 1, 'The equality comes from the combined total.');
      case 30:
        return lwpChoice(point, `${a} has x counters, ${b} has x + 3, and ${c} has 2x. Together they have 39 counters. Which equation represents the total?<br>1. x + (x + 3) + 2x = 39 &nbsp;&nbsp; 2. 3x + 2 = 39 &nbsp;&nbsp; 3. x + 3 + 2 = 39`, 1, 'Add all three related quantities.');

      // Practice 4 — From Words to an Equation
      case 31:
        k = randInt(4, 12); x = lwpFriendlyX(); total = x + k;
        return lwpEquation(point, `A number is increased by ${k}. The result is ${total}.`, `x+${k}`, total);
      case 32:
        k = randInt(3, 9); x = lwpFriendlyX(); total = 2 * x + k;
        return lwpEquation(point, `${a} has x stickers. ${b} has ${k} more than ${a}. Together they have ${total} stickers.`, `x+(x+${k})`, total, [`2x+${k}=${total}`, `${total}=2x+${k}`]);
      case 33:
        k = randInt(2, 7); x = randInt(k + 2, lwpLevel(14, 22, 30)); total = 2 * x - k;
        return lwpEquation(point, `${a} has x cards. ${b} has ${k} fewer cards than ${a}. Together they have ${total} cards.`, `x+(x-${k})`, total, [`2x-${k}=${total}`, `${total}=2x-${k}`]);
      case 34:
        k = lwpCoeff(); x = lwpFriendlyX(); total = k * x;
        return lwpEquation(point, `${k} identical boxes each contain x balls. There are ${total} balls altogether.`, `${k}x`, total);
      case 35:
        k = randInt(2, 8); x = k * randInt(3, lwpLevel(9, 12, 15)); total = x / k;
        return lwpEquation(point, `A number x is divided equally into ${k} groups. Each group has ${total}.`, `x/${k}`, total, [`x÷${k}=${total}`, `${total}=x÷${k}`]);
      case 36:
        k = lwpCoeff(); d = randInt(2, 10); x = lwpFriendlyX(); total = k * x + d;
        return lwpEquation(point, `${k} identical notebooks cost $x each and a pen costs $${d}. The total is $${total}.`, `${k}x+${d}`, total);
      case 37:
        k = randInt(2, 5); d = randInt(2, 7); x = lwpFriendlyX(); total = k * (x + d);
        return lwpEquation(point, `${k} identical packs each contain x red counters and ${d} blue counters. There are ${total} counters altogether.`, `${k}(x+${d})`, total, [`${k}x+${k*d}=${total}`, `${total}=${k}x+${k*d}`]);
      case 38:
        k = randInt(2, 5); d = randInt(4, 12); x = lwpFriendlyX(); total = k * x + d; // other side x + total-x = total
        right = total - x;
        return lwpEquation(point, `${a} has ${k} times x plus ${d} points. ${b} has x + ${right} points. They have the same score.`, `${k}x+${d}`, `x+${right}`);
      case 39:
        return lwpChoice(point, `A taxi charges a $6 starting fee plus $4 per kilometre. The total fare is $30. Which equation is correct?<br>1. 6x + 4 = 30 &nbsp;&nbsp; 2. 6 + 4x = 30 &nbsp;&nbsp; 3. 10x = 30`, 2, 'The fixed fee is added once; the per-kilometre amount is multiplied by x.');
      case 40:
        return lwpChoice(point, `A rectangle has width x cm and length x + 4 cm. Its perimeter is 36 cm. Which equation is incorrect?<br>1. 2x + 2(x + 4) = 36 &nbsp;&nbsp; 2. x + x + (x + 4) + (x + 4) = 36 &nbsp;&nbsp; 3. x(x + 4) = 36`, 3, 'The third equation represents area, not perimeter.');

      // Practice 5 — Simple Number Problems
      case 41:
        k = randInt(4, 15); x = lwpFriendlyX(); total = x + k;
        return lwpNumber(point, `A number is increased by ${k}. The result is ${total}. Find the number.`, x, `Equation: x + ${k} = ${total}.`);
      case 42:
        k = randInt(3, 12); x = randInt(k + 2, lwpLevel(18, 25, 35)); total = x - k;
        return lwpNumber(point, `A number is decreased by ${k}. The result is ${total}. Find the original number.`, x, `Equation: x − ${k} = ${total}.`);
      case 43:
        k = lwpCoeff(); x = lwpFriendlyX(); total = k * x;
        return lwpNumber(point, `${k} times a number is ${total}. Find the number.`, x, `Equation: ${k}x = ${total}.`);
      case 44:
        k = randInt(2, 8); total = lwpFriendlyX(); x = k * total;
        return lwpNumber(point, `A number divided by ${k} is ${total}. Find the number.`, x, `Equation: x ÷ ${k} = ${total}.`);
      case 45:
        k = lwpCoeff(); d = randInt(2, 10); x = lwpFriendlyX(); total = k * x + d;
        return lwpNumber(point, `${k} times a number plus ${d} is ${total}. Find the number.`, x, `Equation: ${k}x + ${d} = ${total}.`);
      case 46:
        k = randInt(2, 5); d = randInt(2, 8); x = lwpFriendlyX(); total = k * (x + d);
        return lwpNumber(point, `${k} times the sum of a number and ${d} is ${total}. Find the number.`, x, `Equation: ${k}(x + ${d}) = ${total}.`);
      case 47:
        d = randInt(3, 10); x = lwpFriendlyX(); total = 2*x + d;
        return lwpNumber(point, `Two numbers differ by ${d}. Their sum is ${total}. Find the smaller number.`, x, `Let the smaller number be x; the larger is x + ${d}.`);
      case 48:
        k = pick([2,3,4]); x = lwpFriendlyX(); total = (k+1)*x;
        return lwpNumber(point, `One number is ${k} times another. Their total is ${total}. Find the smaller number.`, x, `Let the smaller number be x; the other is ${k}x.`);
      case 49:
        k = lwpCoeff(); d = randInt(2, 10); x = lwpFriendlyX(); total = k*x-d;
        return lwpNumber(point, `After ${d} is subtracted from ${k} times a number, the result is ${total}. Find the number.`, x, `Equation: ${k}x − ${d} = ${total}.`);
      case 50:
        x = lwpFriendlyX(); k = randInt(2, 6); total = 3*x+k;
        return lwpChoice(point, `A student says the solution to 3x + ${k} = ${total} is x = ${x}. Substitute the value and decide whether it is correct.<br>1. Correct &nbsp;&nbsp; 2. Incorrect &nbsp;&nbsp; 3. Not enough information`, 1, 'Check whether the left side equals the right side.');

      // Practice 6 — Number Relationships
      case 51:
        d = pick([4,6,8,10]); x = lwpFriendlyX(); total = 2*x+d;
        return lwpNumber(point, `Two numbers have a sum of ${total} and differ by ${d}. Find the smaller number.`, x);
      case 52:
        d = randInt(3, 12); x = lwpFriendlyX(); total = 2*x+d;
        return lwpNumber(point, `One number is ${d} greater than another. Their sum is ${total}. Find the smaller number.`, x);
      case 53:
        x = lwpFriendlyX(); total = 3*x;
        return lwpNumber(point, `One number is twice another. Their sum is ${total}. Find the smaller number.`, x);
      case 54:
        x = lwpFriendlyX(); total = 4*x;
        return lwpNumber(point, `One number is three times another. Their sum is ${total}. Find the smaller number.`, x);
      case 55:
        d = randInt(2, 8); x = lwpFriendlyX(); total = 3*x+d;
        return lwpNumber(point, `The larger number is ${d} more than twice the smaller number. Their sum is ${total}. Find the smaller number.`, x);
      case 56:
        d = randInt(2, 8); x = lwpFriendlyX(); total = 4*x-d;
        return lwpNumber(point, `The larger number is ${d} less than three times the smaller number. Their sum is ${total}. Find the smaller number.`, x);
      case 57:
        d = randInt(2, 7); x = lwpFriendlyX(); total = x + (x+d) + 2*x;
        return lwpNumber(point, `Three numbers are related as follows: the second is ${d} more than the first, and the third is twice the first. Their total is ${total}. Find the first number.`, x);
      case 58:
        k = pick([2,3,4]); x = lwpFriendlyX(); total = k*x;
        return lwpNumber(point, `A larger number is ${k} times a smaller number and equals ${total}. Find the smaller number.`, x);
      case 59:
        d = randInt(3, 11); x = lwpFriendlyX(); total = 2*x+d;
        return lwpNumber(point, `Two numbers total ${total}. The larger number is ${d} more than the smaller number. Find the larger number.`, x+d);
      case 60:
        d = randInt(2, 8); k = pick([2,3]); x = lwpFriendlyX(); total = x + (k*x+d);
        return lwpNumber(point, `The larger number is ${d} more than ${k} times the smaller number. Their total is ${total}. Find the smaller number.`, x);

      // Practice 7 — Consecutive integers
      case 61:
        x = lwpFriendlyX(); total = 2*x+1;
        return lwpNumber(point, `Two consecutive integers have a sum of ${total}. Find the smaller integer.`, x);
      case 62:
        x = lwpFriendlyX(); total = 3*x+3;
        return lwpNumber(point, `Three consecutive integers have a sum of ${total}. Find the smallest integer.`, x);
      case 63:
        x = 2*randInt(2, lwpLevel(8,12,16)); total = 2*x+2;
        return lwpNumber(point, `Two consecutive even integers have a sum of ${total}. Find the smaller integer.`, x);
      case 64:
        x = 2*randInt(2, lwpLevel(8,12,16))+1; total = 2*x+2;
        return lwpNumber(point, `Two consecutive odd integers have a sum of ${total}. Find the smaller integer.`, x);
      case 65:
        x = 2*randInt(2, lwpLevel(7,11,15)); total = 3*x+6;
        return lwpNumber(point, `Three consecutive even integers have a sum of ${total}. Find the smallest integer.`, x);
      case 66:
        x = 2*randInt(2, lwpLevel(7,11,15))+1; total = 3*x+6;
        return lwpNumber(point, `Three consecutive odd integers have a sum of ${total}. Find the smallest integer.`, x);
      case 67:
        x = lwpFriendlyX(4); d = x-2;
        return lwpNumber(point, `Three consecutive integers are arranged from smallest to largest. The largest is ${d} less than twice the smallest. Find the smallest integer.`, x);
      case 68:
        x = lwpFriendlyX(); total = 3*x;
        return lwpNumber(point, `Three consecutive integers have a sum of ${total}. Find the middle integer.`, x);
      case 69:
        x = lwpFriendlyX(); total = 3*x+3;
        return lwpNumber(point, `Three consecutive integers have a sum of ${total}. Find the largest integer.`, x+2);
      case 70:
        x = lwpFriendlyX(); k = randInt(4,10); total = (x)+(x+1)+(x+2)+k;
        return lwpNumber(point, `Three consecutive integers have a total that becomes ${total} after ${k} is added. Find the smallest integer.`, x);

      // Practice 8 — Age problems
      case 71:
        d = randInt(3, 12); age = lwpFriendlyX(6); total = 2*age+d;
        return lwpNumber(point, `${b} is ${d} years older than ${a}. Together they are ${total} years old. How old is ${a}?`, age);
      case 72:
        d = randInt(2, 10); age = lwpFriendlyX(6); total = 2*age+d;
        return lwpNumber(point, `${a} is ${d} years younger than ${b}. Their present ages total ${total}. How old is ${a}?`, age);
      case 73:
        age = lwpFriendlyX(5); total = 3*age;
        return lwpNumber(point, `${b} is twice as old as ${a}. Their ages total ${total}. How old is ${a}?`, age);
      case 74:
        age = lwpFriendlyX(4); total = 4*age;
        return lwpNumber(point, `${b} is three times as old as ${a}. Their ages total ${total}. How old is ${a}?`, age);
      case 75:
        d = randInt(2,5); age = lwpFriendlyX(8); k = pick([2,3]);
        total = k*(age-d)+(d); // not directly used
        return lwpNumber(point, `${d} years ago, ${b} was twice ${a}'s age then. ${b} is now ${2*(age-d)+d} years old. How old is ${a} now?`, age, `Let ${a}'s current age be x. ${d} years ago it was x − ${d}.`);
      case 76:
        d = randInt(2,6); age = lwpFriendlyX(5); k = pick([2,3]);
        total = k*(age+d)-d;
        return lwpNumber(point, `In ${d} years, ${b} will be ${k} times ${a}'s age then. ${b} is now ${total} years old. How old is ${a} now?`, age);
      case 77:
        d = randInt(2,5); age = lwpFriendlyX(8); k = randInt(3,9); total = 2*(age-d)+k;
        return lwpNumber(point, `${d} years ago, ${b}'s age was ${k} more than twice ${a}'s age then. ${b} is now ${total+d} years old. How old is ${a} now?`, age);
      case 78:
        d = randInt(2,6); age = lwpFriendlyX(5); k = randInt(2,8); total = 2*(age+d)+k;
        return lwpNumber(point, `In ${d} years, ${b}'s age will be ${k} more than twice ${a}'s age then. ${b} is now ${total-d} years old. How old is ${a} now?`, age);
      case 79:
        d = randInt(2,5); age = lwpFriendlyX(7); k = randInt(4,9); total = 2*(age+d)+k;
        return lwpNumber(point, `${b} is currently ${k} years older than ${a}. In ${d} years, their ages together will be ${2*age+k+2*d}. How old is ${a} now?`, age);
      case 80:
        age = lwpFriendlyX(5); d = randInt(2,6); k = randInt(2,5); total = age + (age+d) + (2*age+k);
        return lwpNumber(point, `${a} is the youngest of three people. ${b} is ${d} years older than ${a}. ${c} is ${k} years older than twice ${a}'s age. Their ages total ${total}. How old is ${a}?`, age);

      // Practice 9 — Money and shopping
      case 81:
        price = randInt(3, lwpLevel(10,15,20)); count = randInt(2,5); total = price*count;
        return lwpNumber(point, `${count} identical notebooks cost ${lwpMoney(total)} altogether. What is the price of one notebook?`, price);
      case 82:
        price = randInt(3,15); count = randInt(2,5); d = randInt(2,8); total = count*price+d;
        return lwpNumber(point, `${count} identical notebooks and a ${lwpMoney(d)} pen cost ${lwpMoney(total)} altogether. What is the price of one notebook?`, price);
      case 83:
        price = randInt(3,12); count = randInt(2,5); d = randInt(4,15); total = count*price+d;
        return lwpNumber(point, `${a} starts with ${lwpMoney(total)}. After buying ${count} identical items, ${a} has ${lwpMoney(d)} left. What is the price of each item?`, price);
      case 84:
        price = randInt(4,15); count = randInt(3,6); d = randInt(2,6); total = count*price+d;
        return lwpNumber(point, `${count} identical tickets plus a ${lwpMoney(d)} booking fee cost ${lwpMoney(total)}. What is the price of one ticket?`, price);
      case 85:
        price = randInt(3,10); d = randInt(2,6); count = 2; total = (price+d)+price;
        return lwpNumber(point, `One adult ticket costs ${lwpMoney(d)} more than one child ticket. One adult and one child ticket cost ${lwpMoney(total)}. What is the child ticket price?`, price);
      case 86:
        price = pick([3,4,5,6,8]); count = randInt(3, lwpLevel(8,12,16)); d = randInt(1,price-1); total = price*count+d;
        return lwpNumber(point, `${a} has ${lwpMoney(total)}. After buying some identical items at ${lwpMoney(price)} each, ${a} has ${lwpMoney(d)} left. How many items were bought?`, count);
      case 87:
        count = lwpFriendlyX(3, lwpLevel(8,12,16)); d = randInt(2,6); k = randInt(2,5); total = k*count+d;
        return lwpNumber(point, `Plan A costs ${lwpMoney(k)} per visit plus a ${lwpMoney(d)} fee. ${a} paid ${lwpMoney(total)}. How many visits were made?`, count);
      case 88:
        d = randInt(5,15); count = randInt(2,5); price = randInt(3,10); total = d+count*price;
        return lwpNumber(point, `${a} had some money. After spending ${lwpMoney(count*price)} on ${count} identical items, ${a} had ${lwpMoney(d)} left. How much money did ${a} have at first?`, total);
      case 89:
        price = randInt(3,12); d = randInt(2,6); count = randInt(2,5); total = count*price + d;
        return lwpNumber(point, `${count} identical juice bottles and a ${lwpMoney(d)} snack cost ${lwpMoney(total)}. Find the price of one juice bottle.`, price);
      case 90:
        price = randInt(3,10); count = randInt(2,5); d = randInt(2,7); k = randInt(2,4); total = count*price + d + k;
        return lwpNumber(point, `${a} buys ${count} identical pens, a ${lwpMoney(d)} ruler and pays a ${lwpMoney(k)} delivery fee. The total is ${lwpMoney(total)}. Find the price of one pen.`, price);

      // Practice 10 — Perimeter and geometry
      case 91:
        x = lwpFriendlyX(3); d = randInt(2,8); total = 2*x+2*(x+d);
        return lwpNumber(point, `A rectangle is ${d} cm longer than its width. Its perimeter is ${total} cm. Find the width.`, x);
      case 92:
        x = lwpFriendlyX(3); d = randInt(2,8); total = 2*x+2*(x+d);
        return lwpNumber(point, `A rectangle is ${d} cm longer than its width and has perimeter ${total} cm. Find the length.`, x+d);
      case 93:
        x = lwpFriendlyX(3); k = pick([2,3]); total = 2*x+2*k*x;
        return lwpNumber(point, `A rectangle's length is ${k} times its width. Its perimeter is ${total} cm. Find the width.`, x);
      case 94:
        [x, d, k] = lwpValidTriangleSides(); total = x+d+k;
        return lwpNumber(point, `A triangle has two sides of ${d} cm and ${k} cm. Its perimeter is ${total} cm. Find the third side.`, x);
      case 95:
        x = lwpFriendlyX(4); d = randInt(3, Math.min(2*x-1, x+6)); total = 2*x+d;
        return lwpNumber(point, `An isosceles triangle has a base of ${d} cm and perimeter ${total} cm. Find the length of each equal side.`, x);
      case 96:
        x = lwpFriendlyX(3); total = 4*x;
        return lwpNumber(point, `A square has perimeter ${total} cm. Find the side length.`, x);
      case 97:
        x = lwpFriendlyX(3); d = randInt(2,7); total = 2*x+2*(x+d);
        return lwpNumber(point, `A parallelogram has adjacent sides x cm and x + ${d} cm. Its perimeter is ${total} cm. Find the shorter side.`, x);
      case 98:
        x = lwpFriendlyX(4); d = randInt(3,10); k = randInt(3,10); total = 2*x+d+k;
        return lwpNumber(point, `A four-sided shape has two equal sides of x cm and two other sides of ${d} cm and ${k} cm. Its perimeter is ${total} cm. Find x.`, x);
      case 99:
        x = lwpFriendlyX(3); d = randInt(2,7); total = 4*x+2*d;
        return lwpNumber(point, `A rectangle is ${d} cm longer than it is wide. Its perimeter is ${total} cm. Find the width.`, x);
      case 100:
        x = lwpFriendlyX(3); d = randInt(2,7); k = randInt(2,5); total = 2*(x+k)+2*(x+d+k);
        return lwpNumber(point, `A rectangle is ${d} cm longer than it is wide. Both its width and length are increased by ${k} cm. The new perimeter is ${total} cm. Find the original width.`, x);

      // Practice 11 — Ratio and sharing
      case 101:
        x = lwpFriendlyX(3); total = 3*x;
        return lwpNumber(point, `${b} receives twice as much as ${a}. Together they receive ${total} counters. How many counters does ${a} receive?`, x);
      case 102:
        x = lwpFriendlyX(3); total = 4*x;
        return lwpNumber(point, `${b} receives three times as much as ${a}. Together they receive ${total} points. How many points does ${a} receive?`, x);
      case 103:
        [k,d] = lwpRatioPair(); x = lwpFriendlyX(2); total=(k+d)*x;
        return lwpNumber(point, `A prize is shared in the ratio ${k}:${d}. The total is ${total}. How much does the ${k}-part share receive?`, k*x);
      case 104:
        k = pick([1,2,3]); d = k+1; r3 = d+1; x = lwpFriendlyX(2); total=(k+d+r3)*x;
        return lwpNumber(point, `Three amounts are shared in the ratio ${k}:${d}:${r3}. The total is ${total}. Find the smallest share.`, k*x);
      case 105:
        [k,d] = lwpRatioPair(); x = lwpFriendlyX(2); total=(k+d)*x;
        return lwpNumber(point, `Two groups are in the ratio ${k}:${d} and contain ${total} people altogether. Find the value of one ratio unit.`, x);
      case 106:
        [k,d] = pick([[1,3],[2,4],[2,5],[3,5]]); x = lwpFriendlyX(2); total=(d-k)*x;
        return lwpNumber(point, `Two shares are in the ratio ${k}:${d}. The larger share is ${total} greater than the smaller share. Find one ratio unit.`, x);
      case 107:
        [k,d] = lwpRatioPair(); x = lwpFriendlyX(2); total=k*x;
        return lwpNumber(point, `Two amounts are in the ratio ${k}:${d}. The ${k}-part amount is ${total}. Find the total of both amounts.`, (k+d)*x);
      case 108:
        d = randInt(2,6); x = randInt(d + 2, lwpLevel(12, 20, 28)); total = 2*x; // after transfer same: A=x+d originally, B=x-d originally
        return lwpNumber(point, `${a} has ${x+d} counters and ${b} has some counters. After ${a} gives ${d} counters to ${b}, they have the same number. How many counters did ${b} have at first?`, x-d);
      case 109:
        x = lwpFriendlyX(3); d = randInt(2,8); total = 3*x+d;
        return lwpNumber(point, `${b} gets ${d} more than twice ${a}'s share. Together they get ${total}. Find ${a}'s share.`, x);
      case 110:
        x = lwpFriendlyX(3); k = pick([2,3]); d = randInt(2,7); total = (k+1)*x+d;
        return lwpNumber(point, `${b}'s share is ${d} more than ${k} times ${a}'s share. Their total is ${total}. Find ${a}'s share.`, x);

      // Practice 12 — Distance, speed and time
      case 111:
        speed = pick([4,5,6,8,10,12]); time = randInt(2, lwpLevel(5,7,9)); d = randInt(4,12); total = speed*time+d;
        return lwpNumber(point, `${a} has already travelled ${d} km. ${a} then continues at ${speed} km/h until the total distance is ${total} km. How many hours does the second part take?`, time);
      case 112:
        speed = pick([4,5,6,8,10]); time = randInt(2,6); d = randInt(4,12); total = speed*time+d;
        return lwpNumber(point, `A journey is ${total} km long. The final ${d} km are travelled separately. The first part is travelled at ${speed} km/h. How many hours does the first part take?`, time);
      case 113:
        time = randInt(2,6); speed = pick([4,5,6,8,10,12]); d = randInt(4,12); total = speed*time+d;
        return lwpNumber(point, `${a} travels ${d} km by ferry, then travels for ${lwpHours(time)} at a constant speed. The whole journey is ${total} km. Find the speed of the second part in km/h.`, speed);
      case 114:
        speed = pick([4,5,6,8,10]); time = randInt(2,5); d = randInt(5,15); total=speed*time+d;
        return lwpNumber(point, `${a} travels at ${speed} km/h for some time, then travels another ${d} km. The total distance is ${total} km. Find the time spent at ${speed} km/h.`, time);
      case 115:
        speed = pick([4,5,6,8,10]); time = randInt(2,5); d = randInt(4,12); total=speed*time+d;
        return lwpNumber(point, `${a} completes a ${total} km journey in two parts. The second part is ${d} km. The first part is travelled at ${speed} km/h for ${lwpHours(time)}. Find the distance of the first part.`, speed*time);
      case 116:
        time = randInt(2,5); d = randInt(1,4); total=time+d;
        return lwpNumber(point, `A journey takes ${lwpHours(total)} in total. The second part takes ${lwpHours(d)}. Find the time taken by the first part.`, time);
      case 117: {
        const pair = pick([[6, 8], [8, 12], [10, 15], [12, 18]]);
        const speedA = pair[0];
        const speedB = pair[1];
        const baseDistance = (speedA * speedB) / gcd(speedA, speedB);
        const multiplier = randInt(1, lwpLevel(2, 3, 4));
        total = baseDistance * multiplier;
        const timeA = total / speedA;
        const timeB = total / speedB;
        return lwpNumber(point, `${a} travels at ${speedA} km/h for ${lwpHours(timeA)}. ${b} travels the same distance at ${speedB} km/h. How long does ${b} travel?`, timeB);
      }
      case 118: {
        const speedA = pick([4,5,6,8]);
        const speedB = pick([3,4,5,6]);
        time = randInt(2,5);
        total = (speedA + speedB) * time;
        return lwpNumber(point, `${a} travels at ${speedA} km/h and ${b} travels at ${speedB} km/h for the same amount of time. Together they cover ${total} km. How many hours does each person travel?`, time);
      }
      case 119:
        speed = pick([2,3,4,5]); time = randInt(2,6); d = randInt(1,4); total = d*time;
        return lwpNumber(point, `${a} travels at ${speed} km/h and ${b} travels at ${speed+d} km/h in the same direction. After some time, ${b} is ${total} km ahead. How many hours have they travelled?`, time);
      case 120:
        speed = pick([4,5,6,8]); time = randInt(2,5); d = randInt(4,12); k = randInt(2,6); total = speed*time+d+k;
        return lwpNumber(point, `${a} cycles at ${speed} km/h for some time, then walks ${d} km and later travels another ${k} km. The total journey is ${total} km. Find the cycling time.`, time);

      // Practice 13 — Percentage problems
      case 121:
        x = randInt(20, lwpLevel(60,100,140)); d = randInt(5,20); total=x+d;
        return lwpNumber(point, `After ${d} is added to an amount, the result is ${total}. Find the original amount.`, x);
      case 122:
        x = randInt(20, lwpLevel(60,100,140)); d = randInt(5,20); total=x-d;
        return lwpNumber(point, `After ${d} is removed from an amount, ${total} remains. Find the original amount.`, x);
      case 123:
        x = 10*randInt(3, lwpLevel(8,12,16)); total = x*9/10;
        return lwpNumber(point, `After a 10% discount, an item costs ${lwpMoney(total)}. What was the original price?`, x, 'After a 10% discount, 90% of the original price remains.');
      case 124:
        x = 5*randInt(6, lwpLevel(16,24,32)); total = x*4/5;
        return lwpNumber(point, `After a 20% discount, an item costs ${lwpMoney(total)}. What was the original price?`, x, 'After a 20% discount, 80% remains.');
      case 125:
        x = 4*randInt(8, lwpLevel(20,30,40)); total = x*3/4;
        return lwpNumber(point, `After a 25% discount, an item costs ${lwpMoney(total)}. What was the original price?`, x, 'After a 25% discount, 75% remains.');
      case 126:
        x = 2*randInt(10, lwpLevel(30,50,70)); total=x/2;
        return lwpNumber(point, `After a 50% reduction, ${total} remains. What was the original amount?`, x);
      case 127:
        // 10% tax, original multiples of 10 keeps answer integer
        x = 10*randInt(3, lwpLevel(8,12,16)); total=x*11/10;
        return lwpNumber(point, `A 10% tax is added to a price, making the final price ${lwpMoney(total)}. Find the price before tax.`, x);
      case 128:
        x = 5*randInt(4, lwpLevel(12,18,24)); total=x*6/5;
        return lwpNumber(point, `An item is sold for ${lwpMoney(total)} after a 20% profit on cost price. Find the cost price.`, x, 'Selling price = 120% of cost price.');
      case 129:
        x = 5*randInt(4, lwpLevel(12,18,24)); total=x*6/5;
        return lwpNumber(point, `After a 20% increase, an amount becomes ${total}. Find the original amount.`, x, 'The new amount is 120% of the original.');
      case 130:
        x = 10*randInt(3, lwpLevel(8,12,16)); d = randInt(5,15); total=x*9/10+d;
        return lwpNumber(point, `An item is discounted by 10%, then a fixed delivery fee of ${lwpMoney(d)} is added. The final cost is ${lwpMoney(total)}. Find the original item price.`, x);

      // Practice 14 — Average and total
      case 131:
        x = lwpFriendlyX(5); k = randInt(5,15); d = randInt(5,15); total=x+k+d;
        x += (3-(total%3))%3; total=x+k+d; avg=total/3;
        return lwpNumber(point, `The average of three numbers is ${avg}. Two of the numbers are ${k} and ${d}. Find the third number.`, x);
      case 132:
        x = lwpFriendlyX(5); vals=[randInt(5,15),randInt(5,15),randInt(5,15)]; total=x+vals.reduce((s,v)=>s+v,0);
        x += (4-(total%4))%4; total=x+vals.reduce((s,v)=>s+v,0); avg=total/4;
        return lwpNumber(point, `Four numbers have an average of ${avg}. Three of them are ${vals[0]}, ${vals[1]} and ${vals[2]}. Find the fourth number.`, x);
      case 133:
        x = randInt(50,90); vals=[randInt(50,80),randInt(50,80),randInt(50,80),randInt(50,80)]; total=x+vals.reduce((s,v)=>s+v,0);
        x += (5-(total%5))%5; total=x+vals.reduce((s,v)=>s+v,0); avg=total/5;
        return lwpNumber(point, `${a}'s five test scores have an average of ${avg}. Four scores are ${vals.join(', ')}. Find the fifth score.`, x);
      case 134: {
        let childA;
        let childB;
        do {
          x = randInt(6,17);
          childA = randInt(6,17);
          childB = randInt(6,17);
          total = x + childA + childB;
        } while (total % 3 !== 0);
        avg = total/3;
        return lwpNumber(point, `The average age of three children is ${avg}. Two children are ${childA} and ${childB} years old. Find the third age.`, x);
      }
      case 135:
        count = pick([4,6,8]); avg = randInt(10,25); total = count*avg; d = randInt(Math.max(8, Math.floor(total/4)), Math.max(9, Math.floor(total*3/4))); x = total-d;
        return lwpNumber(point, `${count} values have an overall average of ${avg}. Some of the values have a total of ${d}. Find the total of the remaining values.`, x);
      case 136:
        count=randInt(3,5); avg=randInt(10,25); total=count*avg; x=randInt(10,25);
        x += ((count+1)-((total+x)%(count+1)))%(count+1); newAvg=(total+x)/(count+1);
        return lwpNumber(point, `${count} scores have an average of ${avg}. One new score is added and the new average becomes ${newAvg}. Find the new score.`, x);
      case 137:
        count=4; avg=randInt(10,25); total=count*avg; x=randInt(5,25); newTotal=total+x;
        x += (5-(newTotal%5))%5; newTotal=total+x; targetAvg=newTotal/5;
        return lwpNumber(point, `Four values have an average of ${avg}. After one new value is added, the average becomes ${targetAvg}. Find the new value.`, x);
      case 138:
        k=pick([6,8,10,12,14,16]); d=pick([6,8,10,12,14,16]); x=lwpFriendlyX(5); total=k+d+2*x;
        while (total % 4 !== 0) { x += 1; total = k+d+2*x; }
        avg=total/4;
        return lwpNumber(point, `Four numbers have an average of ${avg}. Two numbers are ${k} and ${d}; the other two numbers are equal. Find each of the equal numbers.`, x);
      case 139:
        count=randInt(2,4); k=randInt(5,15); d=randInt(5,15);
        if ((k+d)%2 !== 0) d += 1;
        avg=(k+d)/2;
        return lwpNumber(point, `There are ${count} values equal to ${k} and ${count} other values that are all equal to the same unknown number. The average of all ${2*count} values is ${avg}. Find the unknown value.`, d);
      case 140:
        count=randInt(3,5); avg=randInt(10,25); total=count*avg; x=randInt(6, Math.min(30, total - 6)); d=total-x;
        return lwpNumber(point, `${count} values have an average of ${avg}. The sum of all but one value is ${d}. Find the missing value.`, x);

      // Practice 15 — Multi-step mixed
      case 141:
        x=randInt(3,lwpLevel(8,12,16)); k=randInt(3,7); d=randInt(5,15); total=d+k*x;
        return lwpNumber(point, `A club charges a ${lwpMoney(d)} joining fee and ${lwpMoney(k)} per session. ${a} pays ${lwpMoney(total)} altogether. How many sessions did ${a} attend?`, x);
      case 142:
        x=lwpFriendlyX(3); d=randInt(2,8); total=2*x+2*(x+d);
        return lwpNumber(point, `A rectangle is ${d} cm longer than its width. Its perimeter is ${total} cm. Find the width.`, x);
      case 143:
        x=lwpFriendlyX(6); d=randInt(2,6);
        return lwpNumber(point, `${a} has ${x+2*d} cards and ${b} has fewer cards. ${a} gives ${d} cards to ${b}. They then have the same number of cards. How many cards did ${b} have originally?`, x);
      case 144:
        age=lwpFriendlyX(7); d=randInt(3,9); k=randInt(2,5); total=age+(age+d)+2*k;
        return lwpNumber(point, `${b} is ${d} years older than ${a}. In ${k} years, their ages will total ${total}. How old is ${a} now?`, age);
      case 145:
        price=randInt(3,10); d=randInt(2,6); count=randInt(2,5); total=count*price+d;
        return lwpNumber(point, `${count} student tickets at the same price plus a ${lwpMoney(d)} booking fee cost ${lwpMoney(total)}. Find the price of one student ticket.`, price);
      case 146:
        x=lwpFriendlyX(); k=pick([2,3]); d=randInt(2,8); total=x+k*x+d;
        return lwpNumber(point, `The larger number is ${d} more than ${k} times the smaller number. Their total is ${total}. Find the smaller number.`, x);
      case 147:
        speed=pick([4,5,6,8]); time=randInt(2,5); d=randInt(4,12); total=speed*time+d;
        return lwpNumber(point, `${a} cycles at ${speed} km/h for some time, then walks ${d} km. The total journey is ${total} km. Find the cycling time in hours.`, time);
      case 148:
        x=10*randInt(3,lwpLevel(8,12,16)); d=randInt(4,10); total=x*4/5+d;
        return lwpNumber(point, `An item is discounted by 20%, then a ${lwpMoney(d)} fee is added. The final price is ${lwpMoney(total)}. Find the original price.`, x);
      case 149:
        x=lwpFriendlyX(); k=randInt(2,5); d=randInt(2,8); total=k*x+d;
        return lwpNumber(point, `${k} identical items have the same price and there is a ${lwpMoney(d)} fixed fee. The total cost is ${lwpMoney(total)}. The possible models are: 1. ${k}x + ${d} = ${total}; 2. ${k+d}x = ${total}; 3. ${k}x − ${d} = ${total}. Choose the correct model and use it to find the price of one item. Enter the price only.`, x, 'The fixed fee is added once after multiplying the unit price by the number of items.');
      case 150:
        x=lwpFriendlyX(4); k=pick([2,3]); d=randInt(2,7); fee=randInt(2,6); total=k*x+d+fee;
        return lwpNumber(point, `${a} buys ${k} identical items at the same price, one extra item costing ${lwpMoney(d)}, and pays a ${lwpMoney(fee)} fee. The total is ${lwpMoney(total)}. Find the price of each identical item.`, x);

      default:
        return lwpNumber(point, 'Find x if x + 5 = 12.', 7);
    }
  };
}

TOPIC_BANKS.linear_equation_word_problems = {};
for (const group of TOPIC_CONFIGS.linear_equation_word_problems.groups) {
  TOPIC_BANKS.linear_equation_word_problems[group.id] = {};
  for (const point of group.knowledgePoints) {
    TOPIC_BANKS.linear_equation_word_problems[group.id][point.id] = lwpGenerator(point.number);
  }
}
