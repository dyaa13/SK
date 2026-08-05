'use strict';

const ALGEBRA_KNOWLEDGE_LABELS = [
  'Meaning of a Variable',
  'Identify the Variable in an Expression',
  'Identify a Constant Term',
  'Identify a Coefficient',
  'Identify a Term',
  'Count the Number of Terms',
  'Recognise an Algebraic Expression',
  'Recognise an Equation or Inequality',
  'Interpret Implied Multiplication',

  'Write a Sum from Words',
  'Write a Difference from Words',
  'Interpret “More Than”',
  'Interpret “Less Than”',
  'Write a Product with a Coefficient',
  'Write a Quotient',
  'Write Double or Triple a Number',
  'Write a Bracketed Expression from Words',
  'Write a Two-Step Expression from Words',

  'Write an Expression for Total Cost',
  'Write an Expression for Change',
  'Write an Expression for Rectangle Perimeter',
  'Write an Expression for Triangle Perimeter',
  'Write an Expression for Rectangle Area',
  'Write an Expression for Distance',
  'Write an Expression for an Age Relationship',
  'Write an Expression Involving Brackets',
  'Write an Expression with Two Variables',

  'Substitute a Positive Integer',
  'Substitute Zero',
  'Substitute a Negative Integer',
  'Substitute a Decimal',
  'Substitute a Fraction',
  'Substitute into an Expression with Two Variables',
  'Substitute into an Expression Containing Powers',
  'Substitute into an Expression Containing Brackets',
  'Substitute into an Expression Containing Division',

  'Collect Positive Like Terms',
  'Subtract Like Terms',
  'Collect Like Terms and Constants',
  'Simplify with Negative Coefficients',
  'Simplify Expressions with Several Variables',
  'Recognise That x and x² Are Unlike Terms',
  'Rearrange Terms before Simplifying',
  'Simplify Expressions Containing 1x',
  'Simplify Expressions Containing 0x',

  'Multiply a Number and a Variable',
  'Multiply Two Variables',
  'Multiply Two Algebraic Terms',
  'Multiply Terms with More Than One Variable',
  'Divide an Algebraic Term by a Number',
  'Divide Powers of a Variable',
  'Cancel Common Numerical Factors',
  'Cancel Common Variable Factors',
  'Simplify a Mixed Product and Quotient',

  'Identify the Base and Exponent',
  'Write Repeated Multiplication in Index Form',
  'Evaluate a Positive Integer Power',
  'Multiply Powers with the Same Base',
  'Divide Powers with the Same Base',
  'Find a Power of a Power',
  'Find the Power of a Product',
  'Use the Zero Index Rule',
  'Rewrite a Negative Index',

  'Expand a Positive Number over Addition',
  'Expand a Positive Number over Subtraction',
  'Expand a Negative Number over a Bracket',
  'Expand a Variable over a Bracket',
  'Expand a Negative Variable over a Bracket',
  'Expand and Collect Like Terms',
  'Expand Two Separate Single Brackets',
  'Expand a Bracket with a Decimal Coefficient',
  'Identify an Incorrect Single-Bracket Expansion',

  'Expand (x + a)(x + b)',
  'Expand (x + a)(x − b)',
  'Expand (x − a)(x − b)',
  'Expand Double Brackets with Coefficients',
  'Expand and Collect Like Terms from Double Brackets',
  'Expand the Square of a Sum',
  'Expand the Square of a Difference',
  'Expand a Difference of Two Squares',
  'Find a Coefficient after Expanding',

  'Find a Common Numerical Factor',
  'Find a Common Variable Factor',
  'Factorise Using a Numerical Common Factor',
  'Factorise Using a Variable Common Factor',
  'Factorise Using a Number and a Variable',
  'Factorise an Expression with Negative Terms',
  'Factorise Fully',
  'Factorise a Quadratic with Leading Coefficient 1',
  'Factorise a Difference of Two Squares',

  'Solve x + a = b',
  'Solve x − a = b',
  'Solve ax = b',
  'Solve x ÷ a = b',
  'Solve a One-Step Equation with a Negative Answer',
  'Solve a One-Step Equation with a Negative Coefficient',
  'Solve a One-Step Equation with Decimals',
  'Solve a One-Step Equation with Fractions',
  'Check a Solution by Substitution',

  'Solve a Two-Step Equation',
  'Solve an Equation with Division then Addition',
  'Solve an Equation Containing Brackets',
  'Solve after Expanding a Bracket',
  'Solve after Collecting Like Terms on One Side',
  'Solve an Equation with Decimal Coefficients',
  'Solve an Equation with a Fractional Coefficient',
  'Clear a Fraction before Solving',
  'Check a Multi-Step Equation',

  'Solve with the Unknown on Both Sides',
  'Move Variable Terms to One Side',
  'Solve with Constants on Both Sides',
  'Solve with Negative Coefficients on Both Sides',
  'Solve Bracketed Equations on Both Sides',
  'Solve an Equation with Answer x = 0',
  'Solve an Equation with Answer x = 1',
  'Recognise an Equation with No Solution',
  'Recognise an Equation with Infinitely Many Solutions',

  'Read Inequality Symbols',
  'Write an Inequality from Words',
  'Use Open and Closed Endpoints',
  'Solve an Inequality by Adding or Subtracting',
  'Solve an Inequality by Multiplying or Dividing by a Positive Number',
  'Reverse the Sign When Multiplying by a Negative',
  'Reverse the Sign When Dividing by a Negative',
  'Solve a Two-Step Inequality',
  'Find Integer Solutions and Boundary Values',

  'Identify the Subject of a Formula',
  'Substitute into a Formula',
  'Form a Formula from Words',
  'Rearrange a Formula Using Addition or Subtraction',
  'Rearrange a Formula Using Multiplication or Division',
  'Rearrange a Two-Step Formula',
  'Continue an Arithmetic Sequence',
  'Find a Missing Term and Common Difference',
  'Find and Use the nth Term of an Arithmetic Sequence'
];

function algebraPoints(start, end) {
  return ALGEBRA_KNOWLEDGE_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `a${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.algebra = {
  title: 'Algebra',
  pageTitle: 'Knowledge Practice — Core Algebra',
  knowledgeMapTitle: 'Core Algebra Practice Structure',
  intro: 'The 135 detailed core algebra knowledge points are organised into 15 connected practice sections. The numbering is continuous and does not skip.',
  teacherNote: 'Straight-line graphs, simultaneous equations, quadratic equations, algebraic fractions and advanced sequences are kept as separate future topics.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'algebraLanguage', practiceNumber: 1, label: 'Algebra Language and Notation', description: 'Recognise variables, constants, coefficients, terms, expressions, equations and inequalities.', knowledgePoints: algebraPoints(1, 9) },
    { id: 'writingExpressions', practiceNumber: 2, label: 'Writing Algebraic Expressions', description: 'Translate mathematical words into clear algebraic expressions.', knowledgePoints: algebraPoints(10, 18) },
    { id: 'contextExpressions', practiceNumber: 3, label: 'Expressions from Context', description: 'Build expressions for cost, change, geometry, distance and age.', knowledgePoints: algebraPoints(19, 27) },
    { id: 'substitution', practiceNumber: 4, label: 'Substitution', description: 'Substitute positive, zero, negative, decimal and fractional values.', knowledgePoints: algebraPoints(28, 36) },
    { id: 'collectingTerms', practiceNumber: 5, label: 'Collecting Like Terms', description: 'Combine like terms while keeping unlike terms separate.', knowledgePoints: algebraPoints(37, 45) },
    { id: 'multiplyDivideTerms', practiceNumber: 6, label: 'Multiplying and Dividing Terms', description: 'Multiply, divide and cancel algebraic terms.', knowledgePoints: algebraPoints(46, 54) },
    { id: 'indexLaws', practiceNumber: 7, label: 'Index Laws', description: 'Use positive, zero and negative indices correctly.', knowledgePoints: algebraPoints(55, 63) },
    { id: 'singleBrackets', practiceNumber: 8, label: 'Expanding Single Brackets', description: 'Expand positive, negative, variable and decimal factors.', knowledgePoints: algebraPoints(64, 72) },
    { id: 'doubleBrackets', practiceNumber: 9, label: 'Expanding Double Brackets', description: 'Expand pairs of linear brackets and special products.', knowledgePoints: algebraPoints(73, 81) },
    { id: 'factorising', practiceNumber: 10, label: 'Factorising', description: 'Take out common factors and factorise simple quadratics.', knowledgePoints: algebraPoints(82, 90) },
    { id: 'oneStepEquations', practiceNumber: 11, label: 'One-Step Equations', description: 'Solve and check one-step linear equations.', knowledgePoints: algebraPoints(91, 99) },
    { id: 'multiStepEquations', practiceNumber: 12, label: 'Multi-Step Equations', description: 'Solve equations containing two steps, brackets, decimals and fractions.', knowledgePoints: algebraPoints(100, 108) },
    { id: 'bothSidesEquations', practiceNumber: 13, label: 'Unknowns on Both Sides', description: 'Solve equations with variables on both sides and recognise special cases.', knowledgePoints: algebraPoints(109, 117) },
    { id: 'inequalities', practiceNumber: 14, label: 'Inequalities', description: 'Read, write, solve and interpret linear inequalities.', knowledgePoints: algebraPoints(118, 126) },
    { id: 'formulaeSequences', practiceNumber: 15, label: 'Formulae and Basic Sequences', description: 'Use and rearrange formulae, then work with arithmetic sequences.', knowledgePoints: algebraPoints(127, 135) }
  ]
};

function aNonZero(min = -9, max = 9) {
  let value = 0;
  while (value === 0) value = randInt(min, max);
  return value;
}

function aPositive(max = 9) {
  return randInt(2, max);
}

function aVariable() {
  return pick(['x', 'y', 'n', 'm']);
}

function aPowerInput(variable, power) {
  return power === 1 ? variable : `${variable}^${power}`;
}

function aPowerDisplay(variable, power) {
  const sup = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  return power === 1 ? variable : `${variable}${String(power).split('').map(d => sup[d]).join('')}`;
}

function aTermInput(coefficient, variable = 'x', power = 1) {
  if (coefficient === 0) return '0';
  const variablePart = aPowerInput(variable, power);
  if (coefficient === 1) return variablePart;
  if (coefficient === -1) return `-${variablePart}`;
  return `${coefficient}${variablePart}`;
}

function aTermDisplay(coefficient, variable = 'x', power = 1) {
  if (coefficient === 0) return '0';
  const variablePart = aPowerDisplay(variable, power);
  if (coefficient === 1) return variablePart;
  if (coefficient === -1) return `−${variablePart}`;
  return `${coefficient}${variablePart}`;
}

function aLinearInput(coefficient, constant, variable = 'x') {
  const term = aTermInput(coefficient, variable);
  if (constant === 0) return term;
  return `${term}${constant > 0 ? '+' : ''}${constant}`;
}

function aLinearDisplay(coefficient, constant, variable = 'x') {
  const term = aTermDisplay(coefficient, variable);
  if (constant === 0) return term;
  return `${term}${constant > 0 ? ' + ' : ' − '}${Math.abs(constant)}`;
}

function aSuperscriptAnswer(value) {
  const superscript = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  return String(value)
    .replace(/<=/g, '≤')
    .replace(/>=/g, '≥')
    .replace(/\^(-?\d+)/g, (_, exponent) => [...exponent].map(char => superscript[char]).join(''))
    .replace(/-/g, '−');
}

function aSubtopic(point) {
  return ALGEBRA_KNOWLEDGE_LABELS[point - 1];
}

function aInline(text) {
  return `<span class="question-inline">${text}</span>`;
}

function aNumberQuestion(point, text, answer, options = {}) {
  return {
    subtopic: aSubtopic(point),
    text: aInline(text),
    answer,
    displayAnswer: options.displayAnswer ?? String(answer),
    acceptedAnswers: options.acceptedAnswers ?? null,
    answerType: 'rational',
    hint: options.hint ?? ''
  };
}

function aTextQuestion(point, text, answer, acceptedAnswers = null, hint = '') {
  return {
    subtopic: aSubtopic(point),
    text: aInline(text),
    answer,
    displayAnswer: answer,
    acceptedAnswers: acceptedAnswers || [answer],
    answerType: 'text',
    hint
  };
}

function aExpressionQuestion(point, text, answer, alternatives = [], hint = '') {
  const accepted = new Set([answer, aSuperscriptAnswer(answer), ...alternatives]);
  for (const item of alternatives) accepted.add(aSuperscriptAnswer(item));
  return {
    subtopic: aSubtopic(point),
    text: aInline(text),
    answer,
    displayAnswer: aSuperscriptAnswer(answer),
    acceptedAnswers: [...accepted],
    answerType: 'fraction-structure',
    hint
  };
}

function aChoiceQuestion(point, text, answer, hint = '') {
  return aNumberQuestion(point, text, answer, { hint });
}

function aEquationText(left, right) {
  return `${left} = ${right}`;
}

function generateAlgebraPoint(point) {
  const levelBoost = state.level === 'foundation' ? 0 : state.level === 'core' ? 2 : 4;
  switch (point) {
    case 1:
      return aTextQuestion(1, 'In algebra, what is a letter that represents a number called?', 'variable', ['variable', 'a variable']);
    case 2: {
      const v = aVariable();
      return aTextQuestion(2, `Identify the variable in ${aPositive()}${v} + ${randInt(1, 9)}.`, v);
    }
    case 3: {
      const c = randInt(2, 12), k = aPositive();
      return aNumberQuestion(3, `Identify the constant term in ${k}x + ${c}.`, c);
    }
    case 4: {
      const k = randInt(2, 12);
      return aNumberQuestion(4, `Identify the coefficient of x in ${k}x − ${randInt(1, 8)}.`, k);
    }
    case 5:
      return aTextQuestion(5, 'Which is one term in the expression 4x + 3y − 7?<br><strong>1.</strong> 4x &nbsp;&nbsp; <strong>2.</strong> x + 3y', '1', ['1']);
    case 6: {
      const terms = state.level === 'foundation' ? 3 : 4;
      const expression = terms === 3 ? '5x − 2y + 7' : '3x² + 4x − y + 9';
      return aNumberQuestion(6, `How many terms are in ${expression}?`, terms);
    }
    case 7:
      return aChoiceQuestion(7, 'Which is an algebraic expression?<br><strong>1.</strong> 3x + 5 &nbsp;&nbsp; <strong>2.</strong> 3x + 5 = 17', 1);
    case 8:
      return aChoiceQuestion(8, 'Which statement is an inequality?<br><strong>1.</strong> 2x + 1 = 9 &nbsp;&nbsp; <strong>2.</strong> 2x + 1 &lt; 9', 2);
    case 9:
      return aNumberQuestion(9, 'What number is multiplying x in 7x?', 7);

    case 10: {
      const n = randInt(2, 12);
      return aExpressionQuestion(10, `Write an expression for “x plus ${n}”.`, `x+${n}`, [`${n}+x`]);
    }
    case 11: {
      const n = randInt(2, 12);
      return aExpressionQuestion(11, `Write an expression for “x minus ${n}”.`, `x-${n}`);
    }
    case 12: {
      const n = randInt(2, 12);
      if (state.level === 'foundation') {
        return aExpressionQuestion(12, `Write “${n} more than x” as an expression.`, `x+${n}`, [`${n}+x`]);
      }
      const k = randInt(2, state.level === 'challenge' ? 8 : 5);
      return aExpressionQuestion(12, `Write an expression for ${n} more than ${k} times x.`, `${k}x+${n}`, [`${n}+${k}x`]);
    }
    case 13: {
      const n = randInt(2, 12);
      if (state.level === 'foundation') {
        return aExpressionQuestion(13, `Write “${n} less than x” as an expression.`, `x-${n}`);
      }
      const k = randInt(2, state.level === 'challenge' ? 8 : 5);
      return aExpressionQuestion(13, `Write an expression for ${n} less than ${k} times x.`, `${k}x-${n}`);
    }
    case 14: {
      const k = randInt(2, 9);
      return aExpressionQuestion(14, `Write “${k} times x” using algebra notation.`, `${k}x`);
    }
    case 15: {
      const d = randInt(2, 9);
      return aExpressionQuestion(15, `Write “x divided by ${d}” as an algebraic expression.`, `x/${d}`);
    }
    case 16: {
      const k = pick([2, 3]);
      return aExpressionQuestion(16, `Write “${k === 2 ? 'double' : 'triple'} x” as an expression.`, `${k}x`);
    }
    case 17: {
      const k = randInt(2, state.level === 'challenge' ? 7 : 5);
      const n = randInt(2, 10);
      const useDifference = state.level !== 'foundation' && Math.random() < 0.5;
      if (useDifference) {
        return aExpressionQuestion(17, `Multiply the difference between x and ${n} by ${k}. Write the expression.`, `${k}(x-${n})`, [`${k}*(x-${n})`]);
      }
      return aExpressionQuestion(17, `Multiply the sum of x and ${n} by ${k}. Write the expression.`, `${k}(x+${n})`, [`${k}*(x+${n})`]);
    }
    case 18: {
      const k = randInt(2, state.level === 'challenge' ? 8 : 5);
      const n = randInt(2, 12);
      const type = state.level === 'foundation' ? randInt(1, 2) : randInt(1, state.level === 'challenge' ? 6 : 4);
      if (type === 1) {
        return aExpressionQuestion(18, `Write an expression for ${n} more than ${k} times x.`, `${k}x+${n}`, [`${n}+${k}x`]);
      }
      if (type === 2) {
        return aExpressionQuestion(18, `Write an expression for ${n} less than ${k} times x.`, `${k}x-${n}`);
      }
      if (type === 3) {
        const d = pick([2, 3, 4]);
        return aExpressionQuestion(18, `Write an expression for ${n} more than x divided by ${d}.`, `x/${d}+${n}`, [`${n}+x/${d}`]);
      }
      if (type === 4) {
        const d = pick([2, 3, 4]);
        return aExpressionQuestion(18, `Write an expression for ${n} less than x divided by ${d}.`, `x/${d}-${n}`);
      }
      if (type === 5) {
        const d = pick([2, 3, 4]);
        return aExpressionQuestion(18, `Divide the sum of x and ${n} by ${d}. Write the expression.`, `(x+${n})/${d}`);
      }
      const d = pick([2, 3, 4]);
      return aExpressionQuestion(18, `Divide the difference between x and ${n} by ${d}. Write the expression.`, `(x-${n})/${d}`);
    }

    case 19: {
      const price = randInt(2, 12);
      return aExpressionQuestion(19, `Each notebook costs $${price}. Write an expression for the cost of n notebooks.`, `${price}n`);
    }
    case 20: {
      const paid = pick([20, 50, 100]);
      return aExpressionQuestion(20, `An item costs $x. Write an expression for the change from $${paid}.`, `${paid}-x`);
    }
    case 21: {
      const add = randInt(1, 8);
      return aExpressionQuestion(21, `A rectangle has length x cm and width ${add} cm. Write its perimeter.`, `2x+${2 * add}`, [`2(x+${add})`, `${2 * add}+2x`]);
    }
    case 22: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return aExpressionQuestion(22, `A triangle has side lengths x cm, ${a} cm and ${b} cm. Write its perimeter.`, `x+${a + b}`, [`${a + b}+x`]);
    }
    case 23: {
      const w = randInt(2, 10);
      return aExpressionQuestion(23, `A rectangle has length x cm and width ${w} cm. Write its area.`, `${w}x`);
    }
    case 24: {
      const speed = randInt(3, 12);
      return aExpressionQuestion(24, `A cyclist travels at ${speed} km/h for t hours. Write the distance travelled.`, `${speed}t`);
    }
    case 25: {
      const years = randInt(2, 12);
      return aExpressionQuestion(25, `Mia is x years old. Her brother is ${years} years older. Write his age.`, `x+${years}`, [`${years}+x`]);
    }
    case 26: {
      const k = randInt(2, 6), add = randInt(1, 9);
      return aExpressionQuestion(26, `A box contains x red counters and ${add} blue counters. There are ${k} identical boxes. Write the total number of counters.`, `${k}(x+${add})`);
    }
    case 27: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return aExpressionQuestion(27, `Adult tickets cost $${a} each and child tickets cost $${b} each. Write the total cost of x adult tickets and y child tickets.`, `${a}x+${b}y`, [`${b}y+${a}x`]);
    }

    case 28: {
      const x = randInt(1, 9 + levelBoost), a = randInt(2, 8), b = randInt(1, 9);
      return aNumberQuestion(28, `Find ${a}x + ${b} when x = ${x}.`, a * x + b);
    }
    case 29: {
      const a = randInt(2, 9), b = randInt(1, 9);
      return aNumberQuestion(29, `Find ${a}x + ${b} when x = 0.`, b);
    }
    case 30: {
      const x = -randInt(1, 7), a = randInt(2, 7), b = randInt(1, 8);
      return aNumberQuestion(30, `Find ${a}x + ${b} when x = ${x}.`, a * x + b);
    }
    case 31: {
      const x = pick([0.2, 0.4, 0.5, 1.5, 2.5]), a = pick([2, 4, 5, 10]);
      return aNumberQuestion(31, `Find ${a}x + 1 when x = ${x}.`, a * x + 1);
    }
    case 32: {
      const d = pick([2, 4, 5]), n = randInt(1, d - 1), a = d;
      return aNumberQuestion(32, `Find ${a}x + 2 when x = ${n}/${d}.`, a * n / d + 2);
    }
    case 33: {
      const x = randInt(1, 7), y = randInt(1, 7), a = randInt(2, 5), b = randInt(2, 5);
      return aNumberQuestion(33, `Find ${a}x + ${b}y when x = ${x} and y = ${y}.`, a * x + b * y);
    }
    case 34: {
      const x = randInt(2, 8), b = randInt(1, 7);
      return aNumberQuestion(34, `Find x² + ${b} when x = ${x}.`, x * x + b);
    }
    case 35: {
      const x = randInt(1, 7), a = randInt(2, 5), b = randInt(1, 6);
      return aNumberQuestion(35, `Find ${a}(x + ${b}) when x = ${x}.`, a * (x + b));
    }
    case 36: {
      const x = randInt(2, 12), a = pick([2, 4, 5]);
      return aNumberQuestion(36, `Find (x + ${a}) ÷ ${a} when x = ${x * a - a}.`, x);
    }

    case 37: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return aExpressionQuestion(37, `Simplify ${a}x + ${b}x.`, `${a + b}x`);
    }
    case 38: {
      let a = randInt(5, 14), b = randInt(2, a - 1);
      return aExpressionQuestion(38, `Simplify ${a}x − ${b}x.`, `${a - b}x`);
    }
    case 39: {
      const a = randInt(2, 8), b = randInt(2, 8), c = randInt(1, 9), d = randInt(1, 9);
      return aExpressionQuestion(39, `Simplify ${a}x + ${c} + ${b}x + ${d}.`, `${a + b}x+${c + d}`, [`${c + d}+${a + b}x`]);
    }
    case 40: {
      const a = randInt(2, 8), b = randInt(a + 1, a + 8);
      return aExpressionQuestion(40, `Simplify ${a}x − ${b}x.`, `${a - b}x`);
    }
    case 41: {
      const a = randInt(2, 7), b = randInt(2, 7), c = randInt(2, 7), d = randInt(2, 7);
      const xPart = `${a + c}x`;
      const yCoefficient = b - d;
      const answer = yCoefficient === 0 ? xPart : `${xPart}${yCoefficient > 0 ? '+' : ''}${aTermInput(yCoefficient, 'y')}`;
      const alternative = yCoefficient === 0 ? xPart : `${aTermInput(yCoefficient, 'y')}+${xPart}`;
      return aExpressionQuestion(41, `Simplify ${a}x + ${b}y + ${c}x − ${d}y.`, answer, [alternative]);
    }
    case 42:
      return aExpressionQuestion(42, 'Simplify 3x² + 5x + 2x² − x.', '5x^2+4x', ['4x+5x^2']);
    case 43: {
      const a = randInt(2, 7), b = randInt(2, 7), c = randInt(2, 7);
      return aExpressionQuestion(43, `Simplify ${a}x + ${b} + ${c}x − ${b}.`, `${a + c}x`);
    }
    case 44: {
      const a = randInt(2, 8);
      return aExpressionQuestion(44, `Simplify 1x + ${a}x.`, `${a + 1}x`);
    }
    case 45:
      return aExpressionQuestion(45, 'Simplify 7x + 0x.', '7x');

    case 46: {
      const a = randInt(2, 9), b = randInt(2, 9);
      return aExpressionQuestion(46, `Simplify ${a} × ${b}x.`, `${a * b}x`);
    }
    case 47:
      return aExpressionQuestion(47, 'Simplify x × x.', 'x^2');
    case 48: {
      const a = randInt(2, 7), b = randInt(2, 7);
      return aExpressionQuestion(48, `Simplify ${a}x × ${b}x.`, `${a * b}x^2`);
    }
    case 49: {
      const a = randInt(2, 6), b = randInt(2, 6);
      return aExpressionQuestion(49, `Simplify ${a}xy × ${b}x.`, `${a * b}x^2y`);
    }
    case 50: {
      const a = randInt(2, 8), b = randInt(2, 8);
      return aExpressionQuestion(50, `Simplify ${a * b}x ÷ ${a}.`, `${b}x`);
    }
    case 51: {
      const m = randInt(3, 7), n = randInt(1, m - 1);
      return aExpressionQuestion(51, `Simplify x${aPowerDisplay('', m).replace('', '')} ÷ x${aPowerDisplay('', n).replace('', '')}.`, `x^${m - n}`);
    }
    case 52: {
      const a = randInt(2, 8), b = randInt(2, 8), factor = randInt(2, 6);
      return aExpressionQuestion(52, `Simplify ${a * factor}x ÷ ${factor}.`, `${a}x`);
    }
    case 53: {
      const p = randInt(3, 7), q = randInt(1, p - 1);
      return aExpressionQuestion(53, `Simplify x${aPowerDisplay('', p).replace('', '')} ÷ x${aPowerDisplay('', q).replace('', '')}.`, `x^${p - q}`);
    }
    case 54: {
      const a = randInt(2, 6), b = randInt(2, 6), product = a * b;
      const divisors = [2, 3, 4, 5, 6].filter(value => product % value === 0);
      const c = pick(divisors);
      return aExpressionQuestion(54, `Simplify (${a}x × ${b}x) ÷ ${c}x.`, `${product / c}x`, [], 'Multiply the numerator first, then cancel x.');
    }

    case 55: {
      const p = randInt(2, 8);
      return aChoiceQuestion(55, `In x${aPowerDisplay('', p).replace('', '')}, which number is the exponent?<br><strong>1.</strong> x &nbsp;&nbsp; <strong>2.</strong> ${p}`, 2);
    }
    case 56: {
      const p = randInt(2, 6);
      const repeated = Array(p).fill('x').join(' × ');
      return aExpressionQuestion(56, `Write ${repeated} in index form.`, `x^${p}`);
    }
    case 57: {
      const base = randInt(2, 5), power = randInt(2, state.level === 'challenge' ? 4 : 3);
      return aNumberQuestion(57, `Evaluate ${base}${aPowerDisplay('', power).replace('', '')}.`, base ** power);
    }
    case 58: {
      const a = randInt(1, 5), b = randInt(1, 5);
      return aExpressionQuestion(58, `Simplify x${aPowerDisplay('', a).replace('', '')} × x${aPowerDisplay('', b).replace('', '')}.`, `x^${a + b}`);
    }
    case 59: {
      const a = randInt(4, 9), b = randInt(1, a - 1);
      return aExpressionQuestion(59, `Simplify x${aPowerDisplay('', a).replace('', '')} ÷ x${aPowerDisplay('', b).replace('', '')}.`, `x^${a - b}`);
    }
    case 60: {
      const a = randInt(2, 5), b = randInt(2, 4);
      return aExpressionQuestion(60, `Simplify (x${aPowerDisplay('', a).replace('', '')})${aPowerDisplay('', b).replace('', '')}.`, `x^${a * b}`);
    }
    case 61: {
      const a = randInt(2, 5), p = randInt(2, 4);
      return aExpressionQuestion(61, `Expand (${a}x)${aPowerDisplay('', p).replace('', '')}.`, `${a ** p}x^${p}`);
    }
    case 62:
      return aNumberQuestion(62, 'Evaluate 9⁰.', 1);
    case 63: {
      const p = randInt(1, 4);
      return aExpressionQuestion(63, `Rewrite x${aPowerDisplay('', -p).replace('', '')} using a positive index.`, `1/x^${p}`);
    }

    case 64: {
      const k = randInt(2, 8), a = randInt(1, 9);
      return aExpressionQuestion(64, `Expand ${k}(x + ${a}).`, `${k}x+${k * a}`);
    }
    case 65: {
      const k = randInt(2, 8), a = randInt(1, 9);
      return aExpressionQuestion(65, `Expand ${k}(x − ${a}).`, `${k}x-${k * a}`);
    }
    case 66: {
      const k = randInt(2, 7), a = randInt(1, 8);
      return aExpressionQuestion(66, `Expand −${k}(x + ${a}).`, `-${k}x-${k * a}`);
    }
    case 67: {
      const a = randInt(1, 7);
      return aExpressionQuestion(67, `Expand x(x + ${a}).`, `x^2+${a}x`);
    }
    case 68: {
      const a = randInt(1, 7);
      return aExpressionQuestion(68, `Expand −x(x − ${a}).`, `-x^2+${a}x`, [`${a}x-x^2`]);
    }
    case 69: {
      const k = randInt(2, 7), a = randInt(1, 8), b = randInt(2, 8);
      return aExpressionQuestion(69, `Expand and simplify ${k}(x + ${a}) + ${b}x.`, `${k + b}x+${k * a}`);
    }
    case 70: {
      const a = randInt(2, 6), b = randInt(1, 7), c = randInt(2, 6), d = randInt(1, 7);
      return aExpressionQuestion(70, `Expand and simplify ${a}(x + ${b}) + ${c}(x + ${d}).`, `${a + c}x+${a * b + c * d}`);
    }
    case 71: {
      const k = pick([0.5, 1.5, 2.5]), a = pick([2, 4, 6, 8]);
      return aExpressionQuestion(71, `Expand ${k}(x + ${a}).`, `${k}x+${k * a}`);
    }
    case 72:
      return aChoiceQuestion(72, 'Which is the correct expansion of 3(x − 4)?<br><strong>1.</strong> 3x − 4 &nbsp;&nbsp; <strong>2.</strong> 3x − 12', 2);

    case 73: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return aExpressionQuestion(73, `Expand (x + ${a})(x + ${b}).`, `x^2+${a + b}x+${a * b}`);
    }
    case 74: {
      const a = randInt(1, 8), b = randInt(1, 8), middle = a - b;
      const answer = middle === 0 ? `x^2-${a * b}` : `x^2${middle > 0 ? '+' : ''}${middle}x-${a * b}`;
      return aExpressionQuestion(74, `Expand (x + ${a})(x − ${b}).`, answer);
    }
    case 75: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return aExpressionQuestion(75, `Expand (x − ${a})(x − ${b}).`, `x^2-${a + b}x+${a * b}`);
    }
    case 76: {
      const a = randInt(2, 5), b = randInt(1, 6), c = randInt(2, 5), d = randInt(1, 6);
      return aExpressionQuestion(76, `Expand (${a}x + ${b})(${c}x + ${d}).`, `${a * c}x^2+${a * d + b * c}x+${b * d}`);
    }
    case 77: {
      const a = randInt(1, 6), b = randInt(1, 6), c = randInt(2, 6);
      return aExpressionQuestion(77, `Expand and simplify (x + ${a})(x + ${b}) + ${c}x.`, `x^2+${a + b + c}x+${a * b}`);
    }
    case 78: {
      const a = randInt(1, 9);
      return aExpressionQuestion(78, `Expand (x + ${a})².`, `x^2+${2 * a}x+${a * a}`);
    }
    case 79: {
      const a = randInt(1, 9);
      return aExpressionQuestion(79, `Expand (x − ${a})².`, `x^2-${2 * a}x+${a * a}`);
    }
    case 80: {
      const a = randInt(1, 9);
      return aExpressionQuestion(80, `Expand (x − ${a})(x + ${a}).`, `x^2-${a * a}`);
    }
    case 81: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return aNumberQuestion(81, `Find the coefficient of x after expanding (x + ${a})(x + ${b}).`, a + b);
    }

    case 82: {
      const g = randInt(2, 8), a = randInt(2, 8), b = randInt(2, 8);
      return aNumberQuestion(82, `Find the highest common numerical factor of ${g * a}x and ${g * b}.`, g * gcd(a, b));
    }
    case 83:
      return aTextQuestion(83, 'What common variable factor can be taken out of x² + 5x?', 'x');
    case 84: {
      const g = randInt(2, 8), a = randInt(1, 7), b = randInt(1, 7);
      return aExpressionQuestion(84, `Factorise ${g * a}x + ${g * b}.`, `${g}(${a}x+${b})`);
    }
    case 85: {
      const a = randInt(2, 8);
      return aExpressionQuestion(85, `Factorise x² + ${a}x.`, `x(x+${a})`);
    }
    case 86: {
      const g = randInt(2, 6), a = randInt(1, 6), b = randInt(1, 6);
      return aExpressionQuestion(86, `Factorise ${g * a}x² + ${g * b}x.`, `${g}x(${a}x+${b})`);
    }
    case 87: {
      const g = randInt(2, 7), a = randInt(1, 6), b = randInt(1, 6);
      return aExpressionQuestion(87, `Factorise −${g * a}x − ${g * b}.`, `-${g}(${a}x+${b})`);
    }
    case 88: {
      const g = randInt(2, 6), a = randInt(1, 6), b = randInt(1, 6);
      return aExpressionQuestion(88, `Factorise fully ${g * a}x² + ${g * b}x.`, `${g}x(${a}x+${b})`);
    }
    case 89: {
      const a = randInt(1, 8), b = randInt(1, 8);
      return aExpressionQuestion(89, `Factorise x² + ${a + b}x + ${a * b}.`, `(x+${a})(x+${b})`, [`(x+${b})(x+${a})`]);
    }
    case 90: {
      const a = randInt(2, 10);
      return aExpressionQuestion(90, `Factorise x² − ${a * a}.`, `(x-${a})(x+${a})`, [`(x+${a})(x-${a})`]);
    }

    case 91: {
      const x = randInt(-5, 12), a = randInt(1, 12);
      return aNumberQuestion(91, `Solve x + ${a} = ${x + a}.`, x);
    }
    case 92: {
      const x = randInt(-5, 12), a = randInt(1, 12);
      return aNumberQuestion(92, `Solve x − ${a} = ${x - a}.`, x);
    }
    case 93: {
      const x = aNonZero(-8, 10), a = randInt(2, 9);
      return aNumberQuestion(93, `Solve ${a}x = ${a * x}.`, x);
    }
    case 94: {
      const x = randInt(-8, 12), a = randInt(2, 9);
      return aNumberQuestion(94, `Solve x ÷ ${a} = ${x}.`, x * a);
    }
    case 95: {
      const answer = -randInt(1, 10), a = randInt(1, 9);
      return aNumberQuestion(95, `Solve x + ${a} = ${answer + a}.`, answer);
    }
    case 96: {
      const answer = randInt(-8, 8), a = -randInt(2, 9);
      return aNumberQuestion(96, `Solve ${a}x = ${a * answer}.`, answer);
    }
    case 97: {
      const answer = pick([0.5, 1.5, 2.5, 3.5]), a = pick([2, 4, 10]);
      return aNumberQuestion(97, `Solve ${a}x = ${a * answer}.`, answer);
    }
    case 98: {
      const d = pick([2, 3, 4, 5]), n = randInt(1, d - 1);
      return aNumberQuestion(98, `Solve ${d}x = ${n}.`, `${n}/${d}`, { displayAnswer: `${n}/${d}` });
    }
    case 99: {
      const x = randInt(-5, 10), a = randInt(2, 8), b = randInt(1, 9), right = a * x + b;
      return aChoiceQuestion(99, `Does x = ${x} satisfy ${a}x + ${b} = ${right}?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }

    case 100: {
      const x = randInt(-5, 10), a = randInt(2, 8), b = randInt(1, 9), c = a * x + b;
      return aNumberQuestion(100, `Solve ${a}x + ${b} = ${c}.`, x);
    }
    case 101: {
      const d = randInt(2, 7), x = d * randInt(1, 8), b = randInt(1, 8), right = x / d + b;
      return aNumberQuestion(101, `Solve x/${d} + ${b} = ${right}.`, x);
    }
    case 102: {
      const x = randInt(-4, 10), a = randInt(1, 7), k = randInt(2, 6), right = k * (x + a);
      return aNumberQuestion(102, `Solve ${k}(x + ${a}) = ${right}.`, x);
    }
    case 103: {
      const x = randInt(-4, 10), a = randInt(1, 7), k = randInt(2, 6), b = randInt(1, 7), right = k * (x + a) + b;
      return aNumberQuestion(103, `Solve ${k}(x + ${a}) + ${b} = ${right}.`, x);
    }
    case 104: {
      const x = randInt(-5, 10), a = randInt(2, 6), b = randInt(2, 6), c = randInt(1, 9), right = (a + b) * x + c;
      return aNumberQuestion(104, `Solve ${a}x + ${b}x + ${c} = ${right}.`, x);
    }
    case 105: {
      const x = pick([1, 2, 3, 4, 5]), a = pick([0.5, 1.5, 2.5]), b = pick([1, 2, 3]), right = a * x + b;
      return aNumberQuestion(105, `Solve ${a}x + ${b} = ${right}.`, x);
    }
    case 106: {
      const d = pick([2, 3, 4]), x = d * randInt(1, 8), b = randInt(1, 6), right = x / d + b;
      return aNumberQuestion(106, `Solve (1/${d})x + ${b} = ${right}.`, x);
    }
    case 107: {
      const d = randInt(2, 6), b = randInt(1, d - 1), right = randInt(2, 9), x = d * right - b;
      return aNumberQuestion(107, `Solve (x + ${b})/${d} = ${right}.`, x);
    }
    case 108: {
      const x = randInt(-4, 10), a = randInt(2, 7), b = randInt(1, 8), right = a * x + b;
      return aChoiceQuestion(108, `Does x = ${x} satisfy ${a}x + ${b} = ${right}?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 1);
    }

    case 109: {
      const x = randInt(-5, 10), a = randInt(3, 8), c = randInt(2, a - 1), b = randInt(1, 9), d = (a - c) * x + b;
      return aNumberQuestion(109, `Solve ${aTermDisplay(a)} + ${b} = ${aTermDisplay(c)} ${d >= 0 ? '+' : '−'} ${Math.abs(d)}.`, x);
    }
    case 110: {
      const x = randInt(-5, 10), a = randInt(4, 9), c = randInt(2, a - 1), b = randInt(1, 9), d = (a - c) * x + b;
      return aNumberQuestion(110, `Solve ${aTermDisplay(a)} − ${aTermDisplay(c)} = ${d - b}.`, x);
    }
    case 111: {
      const x = randInt(-5, 10), a = randInt(4, 9), c = randInt(2, a - 1), b = randInt(1, 9), d = a * x + b - c * x;
      return aNumberQuestion(111, `Solve ${aTermDisplay(a)} + ${b} = ${aTermDisplay(c)} ${d >= 0 ? '+' : '−'} ${Math.abs(d)}.`, x);
    }
    case 112: {
      const x = randInt(-5, 10), a = -randInt(4, 9), c = -randInt(2, 3), b = randInt(1, 9), d = a * x + b - c * x;
      return aNumberQuestion(112, `Solve ${aTermDisplay(a)} + ${b} = ${aTermDisplay(c)} ${d >= 0 ? '+' : '−'} ${Math.abs(d)}.`, x);
    }
    case 113: {
      const x = randInt(-4, 8), a = randInt(4, 7), b = randInt(1, 6), c = randInt(2, a - 1), d = randInt(1, 6);
      const rightConstant = a * (x + b) - c * (x + d);
      return aNumberQuestion(113, `Solve ${a}(x + ${b}) = ${c}(x + ${d}) ${rightConstant >= 0 ? '+' : '−'} ${Math.abs(rightConstant)}.`, x);
    }
    case 114:
      return aNumberQuestion(114, 'Solve 4x + 7 = 2x + 7.', 0);
    case 115:
      return aNumberQuestion(115, 'Solve 5x − 3 = 2x.', 1);
    case 116:
      return aChoiceQuestion(116, 'How many solutions does 3x + 5 = 3x + 8 have?<br><strong>1.</strong> No solution &nbsp;&nbsp; <strong>2.</strong> Infinitely many solutions', 1);
    case 117:
      return aChoiceQuestion(117, 'How many solutions does 4(x + 2) = 4x + 8 have?<br><strong>1.</strong> No solution &nbsp;&nbsp; <strong>2.</strong> Infinitely many solutions', 2);

    case 118:
      return aChoiceQuestion(118, 'Which symbol means “less than or equal to”?<br><strong>1.</strong> ≤ &nbsp;&nbsp; <strong>2.</strong> ≥', 1);
    case 119: {
      const n = randInt(2, 12);
      return aExpressionQuestion(119, `Write “x is greater than ${n}” as an inequality.`, `x>${n}`, [`${n}<x`]);
    }
    case 120:
      return aChoiceQuestion(120, 'For x &lt; 5, should the endpoint at 5 be open or closed?<br><strong>1.</strong> Open &nbsp;&nbsp; <strong>2.</strong> Closed', 1);
    case 121: {
      const answer = randInt(-5, 10), a = randInt(1, 9), right = answer + a;
      return aExpressionQuestion(121, `Solve x + ${a} &lt; ${right}.`, `x<${answer}`);
    }
    case 122: {
      const answer = randInt(1, 10), a = randInt(2, 8), right = a * answer;
      return aExpressionQuestion(122, `Solve ${a}x ≤ ${right}.`, `x<=${answer}`, [`x≤${answer}`]);
    }
    case 123: {
      const answer = randInt(-5, 8), a = -randInt(2, 8), right = a * answer;
      return aExpressionQuestion(123, `Solve ${a}x &lt; ${right}.`, `x>${answer}`);
    }
    case 124: {
      const answer = randInt(-5, 8), a = -randInt(2, 8), right = answer;
      return aExpressionQuestion(124, `Solve x ÷ (${a}) ≥ ${right}.`, `x<=${a * right}`, [`x≤${a * right}`]);
    }
    case 125: {
      const answer = randInt(-4, 9), a = randInt(2, 7), b = randInt(1, 8), right = a * answer + b;
      return aExpressionQuestion(125, `Solve ${a}x + ${b} &gt; ${right}.`, `x>${answer}`);
    }
    case 126:
      return aTextQuestion(126, 'List the integer solutions of x &gt; 2 and x ≤ 6. Separate answers with commas.', '3,4,5,6', ['3,4,5,6', '3, 4, 5, 6']);

    case 127:
      return aTextQuestion(127, 'In the formula A = lw, what is the subject?', 'A', ['a', 'A']);
    case 128: {
      const l = randInt(2, 12), w = randInt(2, 12);
      return aNumberQuestion(128, `Use A = lw to find A when l = ${l} and w = ${w}.`, l * w);
    }
    case 129:
      return aExpressionQuestion(129, 'Write a formula for distance d when speed is s and time is t.', 'd=st', ['d=s*t', 'st=d']);
    case 130: {
      const c = randInt(1, 9);
      return aExpressionQuestion(130, `Make x the subject of y = x + ${c}.`, `x=y-${c}`);
    }
    case 131: {
      const k = randInt(2, 9);
      return aExpressionQuestion(131, `Make x the subject of y = ${k}x.`, `x=y/${k}`);
    }
    case 132: {
      const k = randInt(2, 8), c = randInt(1, 9);
      return aExpressionQuestion(132, `Make x the subject of y = ${k}x + ${c}.`, `x=(y-${c})/${k}`, [`x=(y-${c})÷${k}`]);
    }
    case 133: {
      const start = randInt(1, 10), diff = randInt(2, 8);
      return aNumberQuestion(133, `Find the next term: ${start}, ${start + diff}, ${start + 2 * diff}, ${start + 3 * diff}, …`, start + 4 * diff);
    }
    case 134: {
      const start = randInt(1, 10), diff = randInt(2, 8);
      return aNumberQuestion(134, `Find the missing term: ${start}, ${start + diff}, __, ${start + 3 * diff}.`, start + 2 * diff, { hint: `The common difference is ${diff}.` });
    }
    case 135: {
      const diff = randInt(2, 7), constant = randInt(-5, 6), position = randInt(4, 12), term = diff * position + constant;
      const nth = aLinearInput(diff, constant, 'n');
      return aNumberQuestion(135, `The nth term is ${aSuperscriptAnswer(nth)}. Find term ${position}.`, term);
    }

    default:
      throw new Error(`No algebra generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.algebra = {};
for (const group of TOPIC_CONFIGS.algebra.groups) {
  TOPIC_BANKS.algebra[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.algebra[group.id][point.id] = () => generateAlgebraPoint(pointNumber);
  }
}
