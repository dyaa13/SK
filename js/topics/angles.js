'use strict';

const ANGLE_LABELS = [
  'Meaning of an Angle',
  'Vertex of an Angle',
  'Arms of an Angle',
  'Read an Angle Name',
  'Write an Angle Name',
  'Degrees as the Unit of Angle',
  'Recognise the Degree Symbol',
  'Compare Two Angles',
  'Identify the Larger Angle',
  'Understand That Arm Length Does Not Change an Angle',
  'Identify an Acute Angle',
  'Identify a Right Angle',
  'Identify an Obtuse Angle',
  'Identify a Straight Angle',
  'Identify a Reflex Angle',
  'Identify a Full Turn',
  'Classify an Angle from Its Measure',
  'Find Possible Measures of an Acute Angle',
  'Find Possible Measures of an Obtuse Angle',
  'Distinguish Angle Types',
  'Understand a Quarter Turn',
  'Understand a Half Turn',
  'Understand a Three-Quarter Turn',
  'Understand a Full Turn',
  'Convert Turns to Degrees',
  'Convert Degrees to Simple Turns',
  'Turn Clockwise',
  'Turn Anticlockwise',
  'Find a Final Direction after a Turn',
  'Combine Two or More Turns',
  'Read a Protractor Scale from a Written Description',
  'Choose the Correct Protractor Scale',
  'Estimate an Acute Angle',
  'Estimate an Obtuse Angle',
  'Check Whether an Angle Measure Is Reasonable',
  'Plan How to Draw an Angle of a Given Measure',
  'Decide Which Angle Is Closest to a Given Measure',
  'Find an Incorrect Angle Measurement',
  'Compare an Estimated and Exact Measure',
  'Identify Common Protractor Reading Errors',
  'Meaning of Complementary Angles',
  'Recognise Two Angles That Sum to 90°',
  'Find a Missing Complementary Angle',
  'Find Two Equal Complementary Angles',
  'Solve a Two-Step Complementary-Angle Problem',
  'Find a Missing Angle inside a Right Angle',
  'Divide a Right Angle into Given Parts',
  'Compare Two Parts of a Right Angle',
  'Use Addition to Check Complementary Angles',
  'Complementary-Angle Word Problems',
  'Understand That Angles on a Straight Line Sum to 180°',
  'Find One Missing Angle on a Straight Line',
  'Find Two Equal Angles on a Straight Line',
  'Find an Angle from a Given Difference',
  'Find an Angle from a Given Multiple',
  'Find Missing Angles in Three-Part Straight Lines',
  'Use Supplementary Angles',
  'Check Whether Two Angles Are Supplementary',
  'Solve a Two-Step Straight-Line Problem',
  'Solve a Straight-Line Word Problem',
  'Understand That Angles around a Point Sum to 360°',
  'Find One Missing Angle around a Point',
  'Find Two Equal Missing Angles around a Point',
  'Find an Angle When Three Angles Are Given',
  'Find Angles in Four Equal Sections',
  'Find an Angle from a Given Difference around a Point',
  'Find an Angle from a Given Multiple around a Point',
  'Combine Adjacent Angles',
  'Solve a Multi-Step Around-a-Point Problem',
  'Check Whether Angles Form a Full Turn',
  'Recognise Vertically Opposite Angles',
  'Understand That Vertically Opposite Angles Are Equal',
  'Find a Vertically Opposite Angle',
  'Combine Vertically Opposite and Straight-Line Angles',
  'Find All Four Angles at an Intersection',
  'Find an Unknown from Vertically Opposite Angle Expressions',
  'Compare Adjacent and Opposite Angles',
  'Decide Whether Two Angles Must Be Equal',
  'Solve a Two-Step Intersection Problem',
  'Solve a Multi-Step Intersection Problem',
  'Understand That Angles in a Triangle Sum to 180°',
  'Find One Missing Triangle Angle',
  'Find an Angle When Two Triangle Angles Are Equal',
  'Find Three Equal Triangle Angles',
  'Find a Triangle Angle from a Given Difference',
  'Find a Triangle Angle from a Given Multiple',
  'Find an Exterior Angle of a Triangle',
  'Use the Exterior-Angle Rule',
  'Check Whether Three Angles Can Form a Triangle',
  'Solve Multi-Step Triangle-Angle Problems',
  'Angles in an Equilateral Triangle',
  'Base Angles in an Isosceles Triangle',
  'Find the Vertex Angle of an Isosceles Triangle',
  'Find a Base Angle of an Isosceles Triangle',
  'Angles in a Right Triangle',
  'Find a Missing Acute Angle in a Right Triangle',
  'Classify a Triangle by Its Angles',
  'Classify a Triangle by Its Sides',
  'Combine Triangle Type and Angle Information',
  'Multi-Step Special-Triangle Problems',
  'Understand That Angles in a Quadrilateral Sum to 360°',
  'Find One Missing Quadrilateral Angle',
  'Find Two Equal Missing Quadrilateral Angles',
  'Angles in a Rectangle',
  'Angles in a Square',
  'Angles in a Parallelogram',
  'Angles in a Rhombus',
  'Angles in a Trapezium',
  'Find a Quadrilateral Angle from a Given Relationship',
  'Solve Multi-Step Quadrilateral-Angle Problems',
  'Recognise Parallel Lines',
  'Recognise a Transversal',
  'Identify Corresponding Angles from Positions',
  'Use Equal Corresponding Angles',
  'Identify Alternate Angles from Positions',
  'Use Equal Alternate Angles',
  'Identify Co-Interior Angles from Positions',
  'Use Co-Interior Angles Summing to 180°',
  'Combine Parallel-Line Angle Rules',
  'Solve Multi-Step Parallel-Line Problems',
  'Recognise That Hour Marks Are 30° Apart',
  'Find Simple Angles between Clock Hands',
  'Find a Clockwise Turn on a Clock Face',
  'Find an Anticlockwise Turn on a Clock Face',
  'Find the Smaller Angle between Two Clock Directions',
  'Find the Reflex Angle between Two Clock Directions',
  'Combine Straight-Line and Triangle Rules',
  'Combine Around-a-Point and Vertically Opposite Rules',
  'Decide Which Angle Rule Is Needed',
  'Solve Multi-Step Angle Logic Problems'
];

function anglePoints(start, end) {
  return ANGLE_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `ang${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.angles = {
  title: 'Angles',
  pageTitle: 'Knowledge Practice — Angles and Angle Reasoning',
  knowledgeMapTitle: 'Angles and Angle Reasoning Practice Structure',
  intro: 'The 130 detailed knowledge points are organised into 13 connected practice sections. All questions use clear written descriptions and do not require diagrams.',
  teacherNote: 'This topic develops angle vocabulary, turns, angle rules and multi-step reasoning through text-only questions. Parallel-line work is the most advanced section.',
  defaultSelectedGroups: [
    'angleFoundations', 'angleTypes', 'turnsRotation', 'measureEstimate', 'complementary',
    'straightLine', 'aroundPoint', 'verticalOpposite', 'triangleAngles', 'specialTriangles',
    'quadrilateralAngles', 'clockReasoning'
  ],
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'angleFoundations', practiceNumber: 1, label: 'Understanding Angles', description: 'Understand angle language, notation, vertices, arms and degrees.', knowledgePoints: anglePoints(1, 10) },
    { id: 'angleTypes', practiceNumber: 2, label: 'Types of Angles', description: 'Classify acute, right, obtuse, straight, reflex and full-turn angles.', knowledgePoints: anglePoints(11, 20) },
    { id: 'turnsRotation', practiceNumber: 3, label: 'Turns and Rotation', description: 'Connect turns, degrees, clockwise movement and final directions.', knowledgePoints: anglePoints(21, 30) },
    { id: 'measureEstimate', practiceNumber: 4, label: 'Measuring and Estimating Angles', description: 'Interpret written protractor information, estimates and common reading errors.', knowledgePoints: anglePoints(31, 40) },
    { id: 'complementary', practiceNumber: 5, label: 'Complementary Angles', description: 'Use the 90° total to find missing angles and solve short problems.', knowledgePoints: anglePoints(41, 50) },
    { id: 'straightLine', practiceNumber: 6, label: 'Angles on a Straight Line', description: 'Use supplementary angles and the 180° straight-line total.', knowledgePoints: anglePoints(51, 60) },
    { id: 'aroundPoint', practiceNumber: 7, label: 'Angles around a Point', description: 'Use the 360° full-turn total in one-step and multi-step problems.', knowledgePoints: anglePoints(61, 70) },
    { id: 'verticalOpposite', practiceNumber: 8, label: 'Vertically Opposite Angles', description: 'Combine equal opposite angles with supplementary adjacent angles.', knowledgePoints: anglePoints(71, 80) },
    { id: 'triangleAngles', practiceNumber: 9, label: 'Angles in Triangles', description: 'Use triangle angle sums and exterior angles.', knowledgePoints: anglePoints(81, 90) },
    { id: 'specialTriangles', practiceNumber: 10, label: 'Special Triangles', description: 'Reason with equilateral, isosceles and right triangles.', knowledgePoints: anglePoints(91, 100) },
    { id: 'quadrilateralAngles', practiceNumber: 11, label: 'Angles in Quadrilaterals', description: 'Use the 360° total and properties of common quadrilaterals.', knowledgePoints: anglePoints(101, 110) },
    { id: 'parallelLines', practiceNumber: 12, label: 'Parallel Lines', description: 'Use corresponding, alternate and co-interior angle rules from written positions.', knowledgePoints: anglePoints(111, 120) },
    { id: 'clockReasoning', practiceNumber: 13, label: 'Clock Angles and Multi-Step Reasoning', description: 'Use clock-face angles and combine several angle rules.', knowledgePoints: anglePoints(121, 130) }
  ]
};

function angleNumber(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `ang${String(point).padStart(3, '0')}`,
    subtopic: ANGLE_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function angleText(point, text, answer, acceptedAnswers = [], hint = '') {
  return angleNumber(point, text, answer, {
    displayAnswer: String(answer),
    acceptedAnswers: [String(answer), ...acceptedAnswers.map(String)],
    answerType: 'text',
    hint
  });
}

function angleChoice(point, text, answer, hint = '') {
  return angleNumber(point, `${text}<br><strong>Enter 1 or 2.</strong>`, answer, { hint });
}

function angleMeasure(point, text, answer, hint = '') {
  return angleNumber(point, `${text}<br><strong>Enter the number of degrees only.</strong>`, answer, {
    displayAnswer: `${answer}°`,
    hint
  });
}

function angleLevelMax(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'core' ? core : challenge;
}

function angleType(measure) {
  if (measure < 90) return 'acute';
  if (measure === 90) return 'right';
  if (measure < 180) return 'obtuse';
  if (measure === 180) return 'straight';
  if (measure < 360) return 'reflex';
  return 'full turn';
}

function angleTypeAccepted(type) {
  const map = {
    acute: ['acute angle'],
    right: ['right angle'],
    obtuse: ['obtuse angle'],
    straight: ['straight angle'],
    reflex: ['reflex angle'],
    'full turn': ['full angle', 'complete turn', 'complete angle', 'full rotation']
  };
  return map[type] || [];
}

function angleDirectionIndex(direction) {
  return ['North', 'East', 'South', 'West'].indexOf(direction);
}

function angleDirectionAfter(direction, quarterTurnsClockwise) {
  const directions = ['North', 'East', 'South', 'West'];
  const index = angleDirectionIndex(direction);
  return directions[(index + quarterTurnsClockwise % 4 + 4) % 4];
}

function angleDirectionAccepted(direction) {
  const short = { North: 'N', East: 'E', South: 'S', West: 'W' }[direction];
  return [short, short.toLowerCase(), direction.toLowerCase()];
}

function anglePairFor90() {
  const first = randInt(12, 78);
  return [first, 90 - first];
}

function anglePairFor180() {
  const first = randInt(25, 155);
  return [first, 180 - first];
}

function angleThreeParts(total, minPart = 20) {
  const a = randInt(minPart, total - 2 * minPart);
  const b = randInt(minPart, total - a - minPart);
  return [a, b, total - a - b];
}

function angleFourParts360() {
  const a = randInt(40, 110);
  const b = randInt(40, 110);
  const c = randInt(40, Math.max(40, 260 - a - b));
  const d = 360 - a - b - c;
  if (d < 20) return angleFourParts360();
  return [a, b, c, d];
}

function angleClockwiseSteps(fromHour, toHour) {
  return (toHour - fromHour + 12) % 12;
}

function angleAnticlockwiseSteps(fromHour, toHour) {
  return (fromHour - toHour + 12) % 12;
}

function generateAnglePoint(point) {
  switch (point) {
    case 1:
      return angleChoice(1, 'Which statement correctly describes an angle?<br><strong>1.</strong> Two rays meeting at a common endpoint &nbsp;&nbsp; <strong>2.</strong> The length of one line segment', 1);
    case 2: {
      const names = pick([['A', 'B', 'C'], ['P', 'Q', 'R'], ['L', 'M', 'N']]);
      return angleText(2, `In angle <strong>${names.join('')}</strong>, which letter names the vertex?`, names[1]);
    }
    case 3:
      return angleChoice(3, 'Angle ABC has vertex B. Which are its two arms?<br><strong>1.</strong> Rays BA and BC &nbsp;&nbsp; <strong>2.</strong> Rays AB and AC', 1);
    case 4:
      return angleChoice(4, 'The vertex is Q, with P and R on the two arms. Which is a correct name for the angle?<br><strong>1.</strong> PQR &nbsp;&nbsp; <strong>2.</strong> QPR', 1);
    case 5:
      return angleText(5, 'An angle has vertex M, with L and N on its arms. Enter a valid three-letter name for the angle.', 'LMN', ['NML'], 'The vertex letter must be in the middle.');
    case 6:
      return angleChoice(6, 'Which unit is normally used to measure an angle?<br><strong>1.</strong> Degrees &nbsp;&nbsp; <strong>2.</strong> Centimetres', 1);
    case 7:
      return angleChoice(7, 'Which symbol means degrees?<br><strong>1.</strong> ° &nbsp;&nbsp; <strong>2.</strong> %', 1);
    case 8: {
      const a = randInt(15, 150);
      let b = randInt(15, 150);
      while (b === a) b = randInt(15, 150);
      return angleMeasure(8, `Angle A measures ${a}°. Angle B measures ${b}°. What is the measure of the smaller angle?`, Math.min(a, b));
    }
    case 9: {
      const a = randInt(20, 165);
      let b = randInt(20, 165);
      while (b === a) b = randInt(20, 165);
      return angleText(9, `Angle P measures ${a}°. Angle Q measures ${b}°. Which angle is larger? Enter P or Q.`, a > b ? 'P' : 'Q');
    }
    case 10:
      return angleChoice(10, 'Two angles both measure 55°, but one is drawn with longer arms. Which statement is true?<br><strong>1.</strong> The angles are equal &nbsp;&nbsp; <strong>2.</strong> The angle with longer arms is larger', 1);

    case 11: {
      const n = randInt(10, 85);
      return angleText(11, `Classify an angle measuring <strong>${n}°</strong>.`, 'acute', angleTypeAccepted('acute'));
    }
    case 12:
      return angleText(12, 'Classify an angle measuring <strong>90°</strong>.', 'right', angleTypeAccepted('right'));
    case 13: {
      const n = randInt(95, 175);
      return angleText(13, `Classify an angle measuring <strong>${n}°</strong>.`, 'obtuse', angleTypeAccepted('obtuse'));
    }
    case 14:
      return angleText(14, 'Classify an angle measuring <strong>180°</strong>.', 'straight', angleTypeAccepted('straight'));
    case 15: {
      const n = randInt(190, 350);
      return angleText(15, `Classify an angle measuring <strong>${n}°</strong>.`, 'reflex', angleTypeAccepted('reflex'));
    }
    case 16:
      return angleText(16, 'Classify an angle measuring <strong>360°</strong>.', 'full turn', angleTypeAccepted('full turn'));
    case 17: {
      const measure = pick([randInt(10, 85), 90, randInt(95, 175), 180, randInt(190, 350), 360]);
      const type = angleType(measure);
      return angleText(17, `Classify an angle measuring <strong>${measure}°</strong>.`, type, angleTypeAccepted(type));
    }
    case 18: {
      const acute = randInt(15, 85), other = randInt(95, 175);
      return angleChoice(18, `Which could be the measure of an acute angle?<br><strong>1.</strong> ${acute}° &nbsp;&nbsp; <strong>2.</strong> ${other}°`, 1);
    }
    case 19: {
      const obtuse = randInt(95, 175), other = chance(0.5) ? randInt(10, 85) : randInt(190, 340);
      return angleChoice(19, `Which could be the measure of an obtuse angle?<br><strong>1.</strong> ${obtuse}° &nbsp;&nbsp; <strong>2.</strong> ${other}°`, 1);
    }
    case 20: {
      const a = randInt(15, 80), b = randInt(100, 170);
      return angleText(20, `Classify these angles in order: <strong>${a}°, 90°, ${b}°</strong>. Separate the three words with commas.`, 'acute, right, obtuse', ['acute,right,obtuse']);
    }

    case 21:
      return angleMeasure(21, 'How many degrees are in a quarter turn?', 90);
    case 22:
      return angleMeasure(22, 'How many degrees are in a half turn?', 180);
    case 23:
      return angleMeasure(23, 'How many degrees are in a three-quarter turn?', 270);
    case 24:
      return angleMeasure(24, 'How many degrees are in a full turn?', 360);
    case 25: {
      const quarters = randInt(1, 4);
      return angleMeasure(25, `A shape turns through ${quarters} quarter turn${quarters === 1 ? '' : 's'}. How many degrees does it turn?`, quarters * 90);
    }
    case 26: {
      const options = [[90, 'quarter turn', ['one quarter turn', '1/4 turn']], [180, 'half turn', ['one half turn', '1/2 turn']], [270, 'three-quarter turn', ['three quarter turn', '3/4 turn']], [360, 'full turn', ['one full turn', 'complete turn']]];
      const [degrees, answer, accepted] = pick(options);
      return angleText(26, `Write <strong>${degrees}°</strong> as a simple turn.`, answer, accepted);
    }
    case 27: {
      const start = pick(['North', 'East', 'South', 'West']);
      const quarters = randInt(1, 3);
      const answer = angleDirectionAfter(start, quarters);
      return angleText(27, `You face ${start} and turn clockwise through ${quarters * 90}°. Which direction do you face now?`, answer, angleDirectionAccepted(answer));
    }
    case 28: {
      const start = pick(['North', 'East', 'South', 'West']);
      const quarters = randInt(1, 3);
      const answer = angleDirectionAfter(start, -quarters);
      return angleText(28, `You face ${start} and turn anticlockwise through ${quarters * 90}°. Which direction do you face now?`, answer, angleDirectionAccepted(answer));
    }
    case 29: {
      const start = pick(['North', 'East', 'South', 'West']);
      const first = randInt(1, 3), second = randInt(1, 3);
      const clockwiseSecond = chance(0.5);
      const net = first + (clockwiseSecond ? second : -second);
      const answer = angleDirectionAfter(start, net);
      return angleText(29, `You face ${start}. Turn ${first * 90}° clockwise, then ${second * 90}° ${clockwiseSecond ? 'clockwise' : 'anticlockwise'}. Which direction do you face?`, answer, angleDirectionAccepted(answer));
    }
    case 30: {
      const turns = state.level === 'foundation' ? [90, 90] : state.level === 'core' ? [pick([45, 90, 135]), pick([45, 90, 135])] : [pick([30, 45, 60, 90, 120]), pick([45, 60, 90, 135, 180]), pick([30, 45, 60])];
      return angleMeasure(30, `A robot makes successive turns of <strong>${turns.map(v => `${v}°`).join(', ')}</strong> in the same direction. What is the total turn?`, turns.reduce((sum, value) => sum + value, 0));
    }

    case 31: {
      const correct = randInt(20, 80), other = 180 - correct;
      return angleMeasure(31, `A protractor has two readings at the same mark: ${correct}° from the left-hand zero and ${other}° from the right-hand zero. The starting ray points left. What is the angle measure?`, correct);
    }
    case 32: {
      const correct = randInt(25, 85), other = 180 - correct;
      return angleMeasure(32, `The starting ray points right, where the protractor scale begins at 0°. The other ray reaches a mark labelled ${correct}° on that scale and ${other}° on the other scale. Which reading is correct?`, correct);
    }
    case 33: {
      const target = randInt(25, 75), wrong = 180 - target;
      return angleChoice(33, `An angle is clearly smaller than a right angle and is estimated to be about ${target}°. Which estimate is sensible?<br><strong>1.</strong> ${target}° &nbsp;&nbsp; <strong>2.</strong> ${wrong}°`, 1);
    }
    case 34: {
      const target = randInt(105, 165), wrong = 180 - target;
      return angleChoice(34, `An angle is clearly larger than 90° but smaller than 180°. Which estimate is sensible?<br><strong>1.</strong> ${target}° &nbsp;&nbsp; <strong>2.</strong> ${wrong}°`, 1);
    }
    case 35: {
      const described = pick(['acute', 'obtuse']);
      const measure = described === 'acute' ? randInt(100, 170) : randInt(15, 80);
      return angleChoice(35, `A student says an angle is ${described}, but records it as ${measure}°. Is the measurement reasonable?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, 2);
    }
    case 36: {
      const measure = pick([randInt(20, 80), randInt(100, 170), randInt(190, 330)]);
      const type = angleType(measure);
      return angleText(36, `A student needs to draw an angle of <strong>${measure}°</strong>. What type of angle should the opening look like?`, type, angleTypeAccepted(type));
    }
    case 37: {
      const target = randInt(30, 150);
      const close = target + pick([-4, -3, 3, 4]);
      const far = target + (target < 90 ? 70 : -70);
      return angleMeasure(37, `Which measure is closer to ${target}°: <strong>${close}°</strong> or <strong>${far}°</strong>?`, close);
    }
    case 38: {
      const correct = randInt(20, 80), wrong = 180 - correct;
      return angleMeasure(38, `An angle is acute. At its protractor mark, the two printed readings are ${correct}° and ${wrong}°. A student writes ${wrong}°. What should the measurement be?`, correct);
    }
    case 39: {
      const exact = randInt(25, 155);
      const estimate = Math.round(exact / 10) * 10;
      return angleMeasure(39, `An angle was estimated as about ${estimate}°. The exact options are ${exact}° and ${180 - exact}°. Which exact measure is closer to the estimate?`, Math.abs(exact - estimate) <= Math.abs(180 - exact - estimate) ? exact : 180 - exact);
    }
    case 40: {
      const correct = randInt(25, 80), wrong = 180 - correct;
      return angleMeasure(40, `The starting ray is aligned with the right-hand 0°. A student reads ${wrong}° from the scale beginning on the left. What is the correct reading from the scale beginning on the right?`, correct);
    }

    case 41:
      return angleChoice(41, 'Which statement describes complementary angles?<br><strong>1.</strong> Their measures add to 90° &nbsp;&nbsp; <strong>2.</strong> Their measures add to 180°', 1);
    case 42: {
      const [a, b] = anglePairFor90();
      const wrong = b + pick([5, 10, 15]);
      return angleChoice(42, `Which pair is complementary?<br><strong>1.</strong> ${a}° and ${b}° &nbsp;&nbsp; <strong>2.</strong> ${a}° and ${wrong}°`, 1);
    }
    case 43: {
      const a = randInt(12, 78);
      return angleMeasure(43, `Two angles are complementary. One angle is ${a}°. Find the other angle.`, 90 - a);
    }
    case 44:
      return angleMeasure(44, 'Two equal angles are complementary. Find the measure of each angle.', 45);
    case 45: {
      const difference = pick([10, 14, 18, 22, 26, 30]);
      const smaller = (90 - difference) / 2;
      return angleMeasure(45, `Two complementary angles differ by ${difference}°. Find the smaller angle.`, smaller);
    }
    case 46: {
      const known = randInt(15, 75);
      return angleMeasure(46, `A right angle is divided into two parts. One part is ${known}°. Find the other part.`, 90 - known);
    }
    case 47: {
      const [a, b] = pick([[1, 2], [1, 4], [2, 3], [4, 5]]);
      const unit = 90 / (a + b);
      return angleMeasure(47, `A right angle is divided in the ratio ${a}:${b}. Find the smaller part.`, Math.min(a, b) * unit);
    }
    case 48: {
      const difference = pick([8, 12, 16, 20, 24, 28]);
      const smaller = (90 - difference) / 2;
      return angleMeasure(48, `Two parts of a right angle differ by ${difference}°. Find the larger part.`, smaller + difference);
    }
    case 49: {
      const [a, b] = anglePairFor90();
      const correct = chance(0.5);
      const second = correct ? b : b + pick([5, 10]);
      return angleChoice(49, `Do ${a}° and ${second}° form complementary angles?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, correct ? 1 : 2);
    }
    case 50: {
      const known = randInt(20, 70);
      return angleMeasure(50, `The corner of a rectangular sheet is split by a line. One of the two angles is ${known}°. Find the other angle.`, 90 - known);
    }

    case 51:
      return angleMeasure(51, 'What is the total of adjacent angles on a straight line?', 180);
    case 52: {
      const known = randInt(25, 155);
      return angleMeasure(52, `Two adjacent angles lie on a straight line. One is ${known}°. Find the other.`, 180 - known);
    }
    case 53:
      return angleMeasure(53, 'A straight angle is divided into two equal angles. Find each angle.', 90);
    case 54: {
      const difference = pick([20, 30, 40, 50, 60, 70, 80]);
      const smaller = (180 - difference) / 2;
      return angleMeasure(54, `Two adjacent angles on a straight line differ by ${difference}°. Find the smaller angle.`, smaller);
    }
    case 55: {
      const [a, b] = pick([[1, 2], [1, 3], [2, 3], [4, 5]]);
      const unit = 180 / (a + b);
      return angleMeasure(55, `Two angles on a straight line are in the ratio ${a}:${b}. Find the smaller angle.`, Math.min(a, b) * unit);
    }
    case 56: {
      const [a, b, c] = angleThreeParts(180, 25);
      return angleMeasure(56, `Three adjacent angles form a straight line. Two are ${a}° and ${b}°. Find the third angle.`, c);
    }
    case 57:
      return angleChoice(57, 'Which statement describes supplementary angles?<br><strong>1.</strong> Their measures add to 180° &nbsp;&nbsp; <strong>2.</strong> Their measures are always equal', 1);
    case 58: {
      const [a, b] = anglePairFor180();
      const correct = chance(0.5);
      const second = correct ? b : b + pick([5, 10, 15]);
      return angleChoice(58, `Are ${a}° and ${second}° supplementary?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, correct ? 1 : 2);
    }
    case 59: {
      const difference = pick([20, 40, 60, 80]);
      const smaller = (180 - difference) / 2;
      return angleMeasure(59, `Two angles on a straight line have a difference of ${difference}°. Find the larger angle.`, smaller + difference);
    }
    case 60: {
      const turn = randInt(25, 155);
      return angleMeasure(60, `A straight road continues in one direction. A second road turns away from it by ${turn}°. What angle does the second road make with the opposite direction of the straight road?`, 180 - turn);
    }

    case 61:
      return angleMeasure(61, 'What is the total of all angles around a point?', 360);
    case 62: {
      const [a, b, c, d] = angleFourParts360();
      return angleMeasure(62, `Four angles meet at a point. Three are ${a}°, ${b}° and ${c}°. Find the fourth angle.`, d);
    }
    case 63: {
      const known1 = pick([60, 80, 100, 120]), known2 = pick([40, 60, 80]);
      const remaining = 360 - known1 - known2;
      return angleMeasure(63, `Four angles meet at a point. Two are ${known1}° and ${known2}°. The other two are equal. Find each equal angle.`, remaining / 2);
    }
    case 64: {
      const [a, b, c, d] = angleFourParts360();
      return angleMeasure(64, `Angles of ${a}°, ${b}° and ${c}° are arranged around a point. Find the remaining angle.`, d);
    }
    case 65:
      return angleMeasure(65, 'Four equal angles meet at a point. Find each angle.', 90);
    case 66: {
      const knownTotal = pick([120, 160, 200]);
      const remaining = 360 - knownTotal;
      const difference = pick([20, 40, 60]);
      if ((remaining - difference) % 2 !== 0 || remaining <= difference) return generateAnglePoint(66);
      const smaller = (remaining - difference) / 2;
      return angleMeasure(66, `Angles totalling ${knownTotal}° are already around a point. The two remaining angles differ by ${difference}°. Find the smaller remaining angle.`, smaller);
    }
    case 67: {
      const known = pick([60, 90, 120, 150]);
      const remaining = 360 - known;
      const multiplier = pick([2, 3]);
      if (remaining % (multiplier + 1) !== 0) return generateAnglePoint(67);
      const smaller = remaining / (multiplier + 1);
      return angleMeasure(67, `One angle around a point is ${known}°. Of the two remaining angles, one is ${multiplier} times the other. Find the smaller angle.`, smaller);
    }
    case 68: {
      const a = randInt(20, 100), b = randInt(20, 100);
      return angleMeasure(68, `Two adjacent angles measure ${a}° and ${b}°. What is their combined angle?`, a + b);
    }
    case 69: {
      const fixed = pick([60, 90, 120]);
      const second = pick([40, 70, 100]);
      const equal = (360 - fixed - second) / 2;
      return angleMeasure(69, `Four angles meet at a point. Two are ${fixed}° and ${second}°. The other two are equal. Find the total of the two equal angles.`, equal * 2);
    }
    case 70: {
      const [a, b, c, d] = angleFourParts360();
      const correct = chance(0.5);
      const last = correct ? d : d + pick([5, 10]);
      return angleChoice(70, `Do ${a}°, ${b}°, ${c}° and ${last}° make a full turn?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, correct ? 1 : 2);
    }

    case 71:
      return angleChoice(71, 'Two straight lines cross. Which pair is vertically opposite?<br><strong>1.</strong> The pair directly across the intersection &nbsp;&nbsp; <strong>2.</strong> Two angles next to each other', 1);
    case 72:
      return angleChoice(72, 'Which statement is true when two straight lines cross?<br><strong>1.</strong> Vertically opposite angles are equal &nbsp;&nbsp; <strong>2.</strong> All four angles are equal', 1);
    case 73: {
      const angle = randInt(25, 155);
      return angleMeasure(73, `Two straight lines cross. One angle is ${angle}°. Find the vertically opposite angle.`, angle);
    }
    case 74: {
      const angle = randInt(25, 155);
      return angleMeasure(74, `Two straight lines cross. One angle is ${angle}°. Find an adjacent angle.`, 180 - angle);
    }
    case 75: {
      const acute = randInt(25, 80);
      return angleMeasure(75, `Two straight lines cross. One of the acute angles is ${acute}°. What is the measure of each obtuse angle?`, 180 - acute);
    }
    case 76: {
      const x = randInt(5, 25), a = pick([2, 3, 4]), b = pick([4, 5, 6]);
      if (a === b) return generateAnglePoint(76);
      const firstConst = randInt(1, 15);
      const secondConst = a * x + firstConst - b * x;
      if (secondConst < -50 || secondConst > 50) return generateAnglePoint(76);
      const secondText = secondConst >= 0 ? `+ ${secondConst}` : `− ${Math.abs(secondConst)}`;
      return angleNumber(76, `Vertically opposite angles are labelled <strong>${a}x + ${firstConst}</strong> degrees and <strong>${b}x ${secondText}</strong> degrees. Find x.`, x);
    }
    case 77:
      return angleChoice(77, 'At an intersection of two straight lines, which statement is correct?<br><strong>1.</strong> Adjacent angles add to 180° &nbsp;&nbsp; <strong>2.</strong> Adjacent angles are always equal', 1);
    case 78:
      return angleChoice(78, 'Two angles are directly opposite each other where two straight lines cross. Must they be equal?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No', 1);
    case 79: {
      const x = pick([25, 30, 35, 40, 45, 50]);
      const multiplier = pick([2, 3]);
      const other = 180 - multiplier * x;
      if (other <= 0) return generateAnglePoint(79);
      return angleMeasure(79, `Two adjacent angles at an intersection are labelled ${multiplier}x° and ${other}°. Find the angle labelled ${multiplier}x°.`, multiplier * x);
    }
    case 80: {
      const acute = randInt(25, 75);
      const obtuse = 180 - acute;
      return angleMeasure(80, `Two straight lines cross. The two acute angles are equal, and one is ${acute}°. Find the total of the two obtuse angles.`, 2 * obtuse);
    }

    case 81:
      return angleMeasure(81, 'What is the total of the three interior angles in any triangle?', 180);
    case 82: {
      const [a, b, c] = angleThreeParts(180, 25);
      return angleMeasure(82, `Two angles in a triangle are ${a}° and ${b}°. Find the third angle.`, c);
    }
    case 83: {
      const third = pick([40, 50, 60, 70, 80, 100]);
      return angleMeasure(83, `Two angles in a triangle are equal. The third angle is ${third}°. Find each equal angle.`, (180 - third) / 2);
    }
    case 84:
      return angleMeasure(84, 'All three angles in a triangle are equal. Find each angle.', 60);
    case 85: {
      const third = pick([40, 60, 80]);
      const remaining = 180 - third;
      const difference = pick([10, 20, 30, 40]);
      if ((remaining - difference) % 2 !== 0 || remaining <= difference) return generateAnglePoint(85);
      const smaller = (remaining - difference) / 2;
      return angleMeasure(85, `One angle in a triangle is ${third}°. The other two angles differ by ${difference}°. Find the smaller of those two angles.`, smaller);
    }
    case 86: {
      const third = pick([30, 45, 60, 75, 90]);
      const remaining = 180 - third;
      const multiplier = pick([2, 3]);
      if (remaining % (multiplier + 1) !== 0) return generateAnglePoint(86);
      return angleMeasure(86, `One angle in a triangle is ${third}°. Of the other two angles, one is ${multiplier} times the other. Find the smaller angle.`, remaining / (multiplier + 1));
    }
    case 87: {
      const interior = randInt(25, 145);
      return angleMeasure(87, `An exterior angle and its adjacent interior angle form a straight line. The interior angle is ${interior}°. Find the exterior angle.`, 180 - interior);
    }
    case 88: {
      const a = randInt(25, 75), b = randInt(25, 75);
      return angleMeasure(88, `An exterior angle of a triangle equals the sum of the two non-adjacent interior angles. Those angles are ${a}° and ${b}°. Find the exterior angle.`, a + b);
    }
    case 89: {
      const valid = chance(0.5);
      const a = randInt(30, 80), b = randInt(30, 80);
      const c = valid ? 180 - a - b : 180 - a - b + pick([5, 10, 15]);
      if (c <= 0) return generateAnglePoint(89);
      return angleChoice(89, `Can ${a}°, ${b}° and ${c}° be the three interior angles of a triangle?<br><strong>1.</strong> Yes &nbsp;&nbsp; <strong>2.</strong> No`, valid ? 1 : 2);
    }
    case 90: {
      const remote1 = randInt(30, 75), remote2 = randInt(30, 75);
      const exterior = remote1 + remote2;
      return angleMeasure(90, `A triangle has an exterior angle of ${exterior}°. One non-adjacent interior angle is ${remote1}°. Find the other non-adjacent interior angle.`, remote2);
    }

    case 91:
      return angleMeasure(91, 'Find each interior angle of an equilateral triangle.', 60);
    case 92:
      return angleChoice(92, 'Which statement is true for an isosceles triangle?<br><strong>1.</strong> Its two base angles are equal &nbsp;&nbsp; <strong>2.</strong> All three angles must be different', 1);
    case 93: {
      const base = randInt(35, 75);
      return angleMeasure(93, `An isosceles triangle has two base angles of ${base}° each. Find the vertex angle.`, 180 - 2 * base);
    }
    case 94: {
      const vertex = pick([30, 40, 50, 60, 70, 80, 100]);
      return angleMeasure(94, `The vertex angle of an isosceles triangle is ${vertex}°. Find each base angle.`, (180 - vertex) / 2);
    }
    case 95:
      return angleChoice(95, 'Which statement is true for a right triangle?<br><strong>1.</strong> One angle is 90° &nbsp;&nbsp; <strong>2.</strong> All three angles are 90°', 1);
    case 96: {
      const acute = randInt(20, 70);
      return angleMeasure(96, `A right triangle has one acute angle of ${acute}°. Find the other acute angle.`, 90 - acute);
    }
    case 97: {
      const type = pick(['acute', 'right', 'obtuse']);
      let values;
      if (type === 'acute') values = [50, 60, 70];
      else if (type === 'right') values = [30, 60, 90];
      else values = [30, 40, 110];
      return angleText(97, `A triangle has angles ${values.join('°, ')}°. Classify it by its angles.`, `${type} triangle`, [type]);
    }
    case 98: {
      const type = pick(['equilateral', 'isosceles', 'scalene']);
      const description = type === 'equilateral' ? 'three equal sides' : type === 'isosceles' ? 'exactly two equal sides' : 'three different side lengths';
      return angleText(98, `A triangle has ${description}. Classify it by its sides.`, type, [`${type} triangle`]);
    }
    case 99: {
      const vertex = pick([40, 60, 80, 100]);
      return angleMeasure(99, `An isosceles triangle has a vertex angle of ${vertex}°. Find the total of its two equal base angles.`, 180 - vertex);
    }
    case 100: {
      const exterior = pick([100, 110, 120, 130, 140]);
      const adjacentInterior = 180 - exterior;
      const base = adjacentInterior;
      return angleMeasure(100, `At a base vertex of an isosceles triangle, the exterior angle is ${exterior}°. The adjacent interior angle is one of the equal base angles. Find the vertex angle of the triangle.`, 180 - 2 * base);
    }

    case 101:
      return angleMeasure(101, 'What is the total of the four interior angles in any quadrilateral?', 360);
    case 102: {
      const a = randInt(60, 120), b = randInt(60, 120), c = randInt(60, 120);
      const d = 360 - a - b - c;
      if (d <= 15 || d >= 180) return generateAnglePoint(102);
      return angleMeasure(102, `Three interior angles of a quadrilateral are ${a}°, ${b}° and ${c}°. Find the fourth angle.`, d);
    }
    case 103: {
      const a = pick([70, 80, 90, 100]), b = pick([60, 80, 100, 120]);
      const equal = (360 - a - b) / 2;
      return angleMeasure(103, `Two angles of a quadrilateral are ${a}° and ${b}°. The other two angles are equal. Find each equal angle.`, equal);
    }
    case 104:
      return angleMeasure(104, 'Find each interior angle of a rectangle.', 90);
    case 105:
      return angleMeasure(105, 'Find each interior angle of a square.', 90);
    case 106: {
      const angle = randInt(35, 145);
      return angleMeasure(106, `One interior angle of a parallelogram is ${angle}°. Find an adjacent interior angle.`, 180 - angle);
    }
    case 107: {
      const angle = randInt(35, 145);
      return angleMeasure(107, `One interior angle of a rhombus is ${angle}°. Find the opposite interior angle.`, angle);
    }
    case 108: {
      const angle = randInt(45, 135);
      return angleMeasure(108, `A trapezium has one pair of parallel sides. Two interior angles on the same non-parallel side add to 180°. One is ${angle}°. Find the other.`, 180 - angle);
    }
    case 109: {
      const x = 75;
      return angleMeasure(109, 'The four angles of a quadrilateral are x°, (x + 10)°, (x + 20)° and (x + 30)°. Find the largest angle.', x + 30);
    }
    case 110: {
      const acute = randInt(35, 80), obtuse = 180 - acute;
      return angleMeasure(110, `A parallelogram has an acute angle of ${acute}°. Find the total of its two obtuse angles.`, 2 * obtuse);
    }

    case 111:
      return angleChoice(111, 'Which description matches parallel lines?<br><strong>1.</strong> Lines that remain the same distance apart and never meet &nbsp;&nbsp; <strong>2.</strong> Lines that cross at one point', 1);
    case 112:
      return angleChoice(112, 'What is a transversal?<br><strong>1.</strong> A line that crosses two or more other lines &nbsp;&nbsp; <strong>2.</strong> A line segment joining two vertices of a triangle', 1);
    case 113:
      return angleText(113, 'A transversal crosses two lines. Angle A is in the upper-right position at the first intersection, and angle B is in the upper-right position at the second intersection. What relationship do A and B have?', 'corresponding', ['corresponding angles']);
    case 114: {
      const angle = randInt(35, 145);
      return angleMeasure(114, `Two parallel lines are crossed by a transversal. One angle is ${angle}°. A corresponding angle lies in the same relative position at the other intersection. Find it.`, angle);
    }
    case 115:
      return angleText(115, 'Two angles lie between a pair of lines and on opposite sides of the transversal. What relationship do they have?', 'alternate', ['alternate angles', 'alternate interior', 'alternate interior angles']);
    case 116: {
      const angle = randInt(35, 145);
      return angleMeasure(116, `Two parallel lines are crossed by a transversal. One interior angle is ${angle}°. Find its alternate interior angle.`, angle);
    }
    case 117:
      return angleText(117, 'Two angles lie between a pair of parallel lines and on the same side of the transversal. What relationship do they have?', 'co-interior', ['co interior', 'co-interior angles', 'same-side interior', 'same side interior angles']);
    case 118: {
      const angle = randInt(35, 145);
      return angleMeasure(118, `Two co-interior angles lie between parallel lines. One is ${angle}°. Find the other.`, 180 - angle);
    }
    case 119: {
      const angle = randInt(35, 145);
      return angleMeasure(119, `A transversal crosses two parallel lines. An angle is ${angle}°. Its corresponding angle is equal to it. Find the angle adjacent to that corresponding angle on a straight line.`, 180 - angle);
    }
    case 120: {
      const lineAngle = randInt(35, 75);
      const triangleOther = randInt(30, 70);
      const triangleThird = 180 - lineAngle - triangleOther;
      if (triangleThird <= 10) return generateAnglePoint(120);
      return angleMeasure(120, `A transversal crosses two parallel lines. A corresponding angle gives one angle of a triangle as ${lineAngle}°. Another angle of the triangle is ${triangleOther}°. Find the third angle.`, triangleThird);
    }

    case 121:
      return angleMeasure(121, 'A clock face is divided into 12 equal hour spaces. How many degrees are between neighbouring hour marks?', 30);
    case 122: {
      const hour = randInt(1, 11);
      const angle = hour * 30;
      return angleMeasure(122, `At exactly ${hour}:00, the minute hand points to 12 and the hour hand points to ${hour}. Find the smaller angle between the two hands.`, Math.min(angle, 360 - angle));
    }
    case 123: {
      const from = randInt(1, 12), steps = randInt(1, 11), to = ((from - 1 + steps) % 12) + 1;
      return angleMeasure(123, `Moving clockwise around a clock face from ${from} to ${to}, how many degrees are turned?`, steps * 30);
    }
    case 124: {
      const from = randInt(1, 12), steps = randInt(1, 11), to = ((from - 1 - steps + 24) % 12) + 1;
      return angleMeasure(124, `Moving anticlockwise around a clock face from ${from} to ${to}, how many degrees are turned?`, steps * 30);
    }
    case 125: {
      const from = randInt(1, 12), to = randInt(1, 12);
      if (from === to) return generateAnglePoint(125);
      const clockwise = angleClockwiseSteps(from, to) * 30;
      return angleMeasure(125, `Find the smaller angle between the directions of hour marks ${from} and ${to} on a clock face.`, Math.min(clockwise, 360 - clockwise));
    }
    case 126: {
      const from = randInt(1, 12), to = randInt(1, 12);
      if (from === to || Math.abs(from - to) === 6) return generateAnglePoint(126);
      const clockwise = angleClockwiseSteps(from, to) * 30;
      const smaller = Math.min(clockwise, 360 - clockwise);
      return angleMeasure(126, `Find the reflex angle between the directions of hour marks ${from} and ${to} on a clock face.`, 360 - smaller);
    }
    case 127: {
      const exterior = randInt(105, 155);
      const interiorAtBase = 180 - exterior;
      const other = randInt(25, Math.max(25, 155 - interiorAtBase));
      const third = 180 - interiorAtBase - other;
      if (third <= 10) return generateAnglePoint(127);
      return angleMeasure(127, `An exterior angle on a straight line is ${exterior}°. The adjacent interior angle belongs to a triangle whose second angle is ${other}°. Find the third angle of the triangle.`, third);
    }
    case 128: {
      const vertical = randInt(30, 140);
      const adjacent = 180 - vertical;
      const split = randInt(10, adjacent - 10);
      return angleMeasure(128, `Two straight lines cross. One angle is ${vertical}°, so an adjacent angle is ${adjacent}°. A ray splits that adjacent angle into ${split}° and another angle. Find the other angle.`, adjacent - split);
    }
    case 129: {
      const options = [
        ['Three interior angles of a triangle are involved.', 'triangle angle sum', ['angles in a triangle', 'triangle sum']],
        ['Two adjacent angles form a straight line.', 'straight-line angle sum', ['straight line', 'supplementary angles']],
        ['Several angles meet around one point.', 'angles around a point', ['around a point', 'full turn']],
        ['Two directly opposite angles are formed by crossing lines.', 'vertically opposite angles', ['vertical angles', 'vertically opposite']]
      ];
      const [situation, answer, accepted] = pick(options);
      return angleText(129, `${situation} Which angle rule should be used?`, answer, accepted);
    }
    case 130: {
      const top = pick([40, 50, 60, 70]);
      const exterior = 180 - top;
      const remote = randInt(25, exterior - 25);
      return angleMeasure(130, `At one vertex of a triangle, the interior angle is ${top}°, so the adjacent exterior angle is ${exterior}°. One of the two non-adjacent interior angles is ${remote}°. Find the other non-adjacent interior angle.`, exterior - remote);
    }

    default:
      throw new Error(`No angle generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.angles = {};
for (const group of TOPIC_CONFIGS.angles.groups) {
  TOPIC_BANKS.angles[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.angles[group.id][point.id] = () => generateAnglePoint(pointNumber);
  }
}
