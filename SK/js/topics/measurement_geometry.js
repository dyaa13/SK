'use strict';

const MEASUREMENT_GEOMETRY_LABELS = [
  'Recognise mm, cm, m and km',
  'Choose a Reasonable Length and Unit',
  'Convert mm to cm',
  'Convert cm to mm',
  'Convert cm to m',
  'Convert m to cm',
  'Convert m to km',
  'Convert km to m',
  'Compare Lengths Written in Different Units',
  'Order Lengths after Converting to the Same Unit',
  'Recognise g and kg',
  'Convert g to kg',
  'Convert kg to g',
  'Convert Between Decimal and Mixed Mass Units',
  'Recognise mL and L',
  'Convert mL to L',
  'Convert L to mL',
  'Convert Between Decimal and Mixed Capacity Units',
  'Compare Masses or Capacities in Different Units',
  'Solve Simple Mass and Capacity Problems',
  'Convert a Mixed Length to One Unit',
  'Convert One Length into Mixed Units',
  'Convert a Mixed Mass to One Unit',
  'Convert One Mass into Mixed Units',
  'Convert a Mixed Capacity to One Unit',
  'Convert One Capacity into Mixed Units',
  'Add Measurements with Different Units',
  'Subtract Measurements with Different Units',
  'Find the Difference between Two Measurements',
  'Multi-Step Mixed-Unit Problems',
  'Meaning of Perimeter',
  'Find the Perimeter of a Rectangle',
  'Find the Perimeter of a Square',
  'Find the Perimeter of a Triangle',
  'Find the Perimeter of an Irregular Polygon',
  'Find the Perimeter of a Regular Polygon',
  'Add Side Lengths Given in Different Units',
  'Distinguish Perimeter from Area',
  'Compare the Perimeters of Two Shapes',
  'Solve Simple Perimeter Word Problems',
  'Find One Missing Side from Total Perimeter',
  'Find a Missing Rectangle Length',
  'Find a Missing Rectangle Width',
  'Find a Missing Square Side',
  'Find a Missing Triangle Side',
  'Find an Equal Missing Side in an Isosceles Triangle',
  'Find a Side of a Regular Polygon from Perimeter',
  'Find Two Related Missing Sides',
  'Use Perimeter to Form a Simple Equation',
  'Multi-Step Missing-Side Problems',
  'Meaning of Area',
  'Recognise Square Units',
  'Find Rectangle Area from Length and Width',
  'Find Square Area from Side Length',
  'Convert Area Units and Find Area after Unit Conversion',
  'Find Length from Area and Width',
  'Find Width from Area and Length',
  'Find Square Side Length from Area',
  'Compare Areas of Rectangles',
  'Rectangle and Square Area Word Problems',
  'Identify Base and Perpendicular Height',
  'Understand Triangle Area as Half a Rectangle',
  'Find Triangle Area',
  'Find Triangle Area after Unit Conversion',
  'Triangle Area in a Real Context',
  'Find a Missing Base from Area',
  'Find a Missing Height from Area',
  'Compare Two Triangles with the Same Base',
  'Compare Two Triangles with the Same Height',
  'Triangle Area Word Problems',
  'Identify the Base and Height of a Parallelogram',
  'Find the Area of a Parallelogram',
  'Find a Missing Parallelogram Base',
  'Find a Missing Parallelogram Height',
  'Understand the Two Parallel Sides of a Trapezium',
  'Find the Area of a Trapezium',
  'Find a Missing Trapezium Height',
  'Compare Rectangle, Triangle and Parallelogram Areas',
  'Choose the Correct Area Formula',
  'Parallelogram and Trapezium Word Problems',
  'Split an L-Shape into Rectangles',
  'Split a Composite Shape in Different Ways',
  'Add Areas of Separate Rectangles',
  'Subtract a Missing Rectangle',
  'Find a Missing Length before Finding Area',
  'Find the Area of a Rectangular Frame',
  'Find the Area of a Border',
  'Find a Shaded Area by Subtraction',
  'Composite Area with Mixed Units',
  'Multi-Step Composite-Area Problems',
  'Floor Area',
  'Wall Area',
  'Garden Area',
  'Grass and Paving Problems',
  'Carpet Coverage',
  'Tile Coverage',
  'Painting Coverage',
  'Cost per Square Unit',
  'Find Quantity Needed from Area',
  'Multi-Step Area-and-Cost Problems',
  'Meaning of Volume',
  'Recognise Cubic Units',
  'Count Unit Cubes',
  'Find the Volume of a Cube',
  'Find the Volume of a Rectangular Prism',
  'Find Volume from Base Area and Height',
  'Compare Volumes',
  'Add Volumes of Simple Prisms',
  'Convert Simple Volume Units',
  'Volume Word Problems',
  'Find Length from Volume',
  'Find Width from Volume',
  'Find Height from Volume',
  'Find Cube Side Length from Volume',
  'Find a Missing Dimension Using Division',
  'Find a Missing Dimension after Unit Conversion',
  'Compare Two Prisms with the Same Volume',
  'Use Volume to Form a Simple Equation',
  'Find Dimensions from Related Measurements',
  'Multi-Step Missing-Dimension Problems',
  'Meaning of Surface Area',
  'Identify the Faces of a Cube',
  'Find the Surface Area of a Cube',
  'Identify the Faces of a Rectangular Prism',
  'Find the Area of Each Face',
  'Find the Surface Area of a Rectangular Prism',
  'Find a Missing Face Area',
  'Compare Surface Areas of Two Prisms',
  'Surface Area of an Open Box',
  'Surface-Area Word Problems',
  'Fence-Length Problems',
  'Ribbon and Border Problems',
  'Flooring Problems',
  'Painting Problems',
  'Filling Containers',
  'Packing Boxes',
  'Material Needed for a Structure',
  'Cost Based on Length, Area or Volume',
  'Choose the Correct Measurement: Length, Area or Volume',
  'Multi-Step Measurement Problems',
  'Find a Missing Length before Finding Perimeter',
  'Find a Missing Length before Finding Area',
  'Use Perimeter and Area Together',
  'Compare Two Shapes with the Same Perimeter',
  'Compare Two Shapes with the Same Area',
  'Find a Rectangle from Area and Side Relationship',
  'Find a Rectangle from Perimeter and Side Relationship',
  'Combine Unit Conversion with Geometry',
  'Compare Two Plans or Designs',
  'Multi-Condition Measurement Problems'
];

function measurementGeometryPoints(start, end) {
  return MEASUREMENT_GEOMETRY_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `mg${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.measurementGeometry = {
  title: 'Measurement & Geometry',
  pageTitle: 'Knowledge Practice — Measurement and Geometry Applications',
  knowledgeMapTitle: 'Measurement and Geometry Applications Practice Structure',
  intro: 'The 150 detailed knowledge points are organised into 15 connected practice sections, moving from metric units to perimeter, area, volume, surface area and multi-step applications.',
  teacherNote: 'Questions use clear written descriptions rather than diagrams. Surface Area is not selected by default because it is the most advanced section. Calculations use friendly numbers and exact answers.',
  defaultSelectedGroups: [
    'lengthMetric', 'massCapacity', 'mixedUnits', 'perimeterBasics', 'missingPerimeterSides',
    'rectangleSquareArea', 'triangleArea', 'parallelogramTrapezium', 'compositeArea', 'areaApplications',
    'volumePrisms', 'missingVolumeDimensions', 'measurementApplications', 'multiStepMeasurement'
  ],
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'lengthMetric', practiceNumber: 1, label: 'Length and Metric Units', description: 'Choose length units and convert among mm, cm, m and km.', knowledgePoints: measurementGeometryPoints(1, 10) },
    { id: 'massCapacity', practiceNumber: 2, label: 'Mass and Capacity', description: 'Work with g, kg, mL and L in simple conversions and applications.', knowledgePoints: measurementGeometryPoints(11, 20) },
    { id: 'mixedUnits', practiceNumber: 3, label: 'Mixed-Unit Measurement', description: 'Move between mixed and single units, then add and subtract measurements.', knowledgePoints: measurementGeometryPoints(21, 30) },
    { id: 'perimeterBasics', practiceNumber: 4, label: 'Perimeter Basics', description: 'Find and compare perimeters of common and irregular shapes.', knowledgePoints: measurementGeometryPoints(31, 40) },
    { id: 'missingPerimeterSides', practiceNumber: 5, label: 'Missing Sides from Perimeter', description: 'Work backwards from a perimeter to find missing and related side lengths.', knowledgePoints: measurementGeometryPoints(41, 50) },
    { id: 'rectangleSquareArea', practiceNumber: 6, label: 'Area of Rectangles and Squares', description: 'Use rectangle and square area, including missing dimensions and unit conversions.', knowledgePoints: measurementGeometryPoints(51, 60) },
    { id: 'triangleArea', practiceNumber: 7, label: 'Area of Triangles', description: 'Use base and perpendicular height to find areas and missing dimensions.', knowledgePoints: measurementGeometryPoints(61, 70) },
    { id: 'parallelogramTrapezium', practiceNumber: 8, label: 'Parallelograms and Trapeziums', description: 'Find areas and missing dimensions using base, height and parallel sides.', knowledgePoints: measurementGeometryPoints(71, 80) },
    { id: 'compositeArea', practiceNumber: 9, label: 'Composite Area', description: 'Split, add and subtract rectangular regions in clearly described composite shapes.', knowledgePoints: measurementGeometryPoints(81, 90) },
    { id: 'areaApplications', practiceNumber: 10, label: 'Area Applications', description: 'Apply area to floors, gardens, tiles, paint, carpet and cost problems.', knowledgePoints: measurementGeometryPoints(91, 100) },
    { id: 'volumePrisms', practiceNumber: 11, label: 'Volume of Cubes and Rectangular Prisms', description: 'Understand cubic units and calculate volumes of cubes and rectangular prisms.', knowledgePoints: measurementGeometryPoints(101, 110) },
    { id: 'missingVolumeDimensions', practiceNumber: 12, label: 'Missing Dimensions from Volume', description: 'Work backwards from volume to find missing or related dimensions.', knowledgePoints: measurementGeometryPoints(111, 120) },
    { id: 'surfaceArea', practiceNumber: 13, label: 'Surface Area', description: 'Find surface areas of cubes, rectangular prisms and open boxes.', knowledgePoints: measurementGeometryPoints(121, 130) },
    { id: 'measurementApplications', practiceNumber: 14, label: 'Measurement Applications', description: 'Use length, area and volume in practical multi-step situations.', knowledgePoints: measurementGeometryPoints(131, 140) },
    { id: 'multiStepMeasurement', practiceNumber: 15, label: 'Multi-Step Geometry and Measurement Reasoning', description: 'Combine missing lengths, unit conversion, perimeter, area and design comparisons.', knowledgePoints: measurementGeometryPoints(141, 150) }
  ]
};

function mgNumber(point, text, answer, unit = '', hint = '') {
  return {
    knowledgePoint: `mg${String(point).padStart(3, '0')}`,
    subtopic: MEASUREMENT_GEOMETRY_LABELS[point - 1],
    text: `${text}${unit ? '<br><strong>Enter the number only.</strong>' : ''}`,
    answer,
    displayAnswer: unit ? (unit === '$' ? `$${answer}` : `${answer} ${unit}`) : String(answer),
    answerType: 'rational',
    hint
  };
}

function mgText(point, text, answer, acceptedAnswers = [], hint = '') {
  const rawAnswers = [String(answer), ...acceptedAnswers.map(String)];
  const expandedAnswers = [];
  for (const raw of rawAnswers) {
    const value = String(raw);
    expandedAnswers.push(value);
    // Accept compact mixed-unit entries such as 5kg250g or 2L350mL.
    if (/\d/.test(value) && /[a-zA-Z]/.test(value)) {
      expandedAnswers.push(value.replace(/\s+/g, ''));
    }
  }
  return {
    knowledgePoint: `mg${String(point).padStart(3, '0')}`,
    subtopic: MEASUREMENT_GEOMETRY_LABELS[point - 1],
    text,
    answer,
    displayAnswer: String(answer),
    acceptedAnswers: [...new Set(expandedAnswers)],
    answerType: 'text',
    hint
  };
}

function mgChoice(point, text, answer, hint = '') {
  return mgNumber(point, `${text}<br><strong>Enter the option number only.</strong>`, answer, '', hint);
}

function mgChoiceOptions(point, stem, options, correctIndex, hint = '') {
  const tagged = options.map((text, index) => ({ text, correct: index === correctIndex }));
  for (let i = tagged.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [tagged[i], tagged[j]] = [tagged[j], tagged[i]];
  }
  const answer = tagged.findIndex(option => option.correct) + 1;
  const optionText = tagged.map((option, index) => `<strong>${index + 1}.</strong> ${option.text}`).join(' &nbsp;&nbsp; ');
  return mgChoice(point, `${stem}<br>${optionText}`, answer, hint);
}

function mgValidPolygonSides(count, minSide, maxSide) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const sides = Array.from({ length: count }, () => randInt(minSide, maxSide));
    const largest = Math.max(...sides);
    const total = sides.reduce((sum, side) => sum + side, 0);
    if (largest < total - largest) return sides;
  }
  const sides = Array.from({ length: count }, () => minSide + 1);
  sides[0] = minSide;
  return sides;
}

function mgPickUsefulDivisor(value, candidates) {
  const valid = candidates.filter(candidate => candidate > 1 && value % candidate === 0);
  return valid.length ? pick(valid) : null;
}

function mgPickNonDivisor(value, candidates) {
  const valid = candidates.filter(candidate => candidate > 1 && value % candidate !== 0);
  return valid.length ? pick(valid) : null;
}

function mgLevel(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'core' ? core : challenge;
}

function mgPickLevel(foundation, core, challenge) {
  return pick(mgLevel(foundation, core, challenge));
}

function mgRound(value) {
  return Math.round(value * 1000000000) / 1000000000;
}

function mgRectangleDimensions() {
  const [minL, maxL, minW, maxW] = mgLevel([6, 15, 3, 10], [8, 24, 4, 16], [10, 35, 5, 22]);
  let width = randInt(minW, maxW);
  let length = randInt(Math.max(width, minL), maxL);
  return { length, width };
}

function mgTriangleBaseHeight() {
  const base = mgPickLevel([4, 6, 8, 10, 12], [6, 8, 10, 12, 14, 16], [8, 10, 12, 14, 16, 18, 20]);
  const height = mgPickLevel([3, 4, 5, 6, 8], [4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10, 12]);
  return { base, height, area: base * height / 2 };
}

function mgPrismDimensions() {
  const l = mgPickLevel([3, 4, 5, 6, 8], [4, 5, 6, 8, 10, 12], [5, 6, 8, 10, 12, 15]);
  const w = mgPickLevel([2, 3, 4, 5], [3, 4, 5, 6, 8], [4, 5, 6, 8, 10]);
  const h = mgPickLevel([2, 3, 4, 5], [3, 4, 5, 6, 7], [3, 4, 5, 6, 8, 9]);
  return { l, w, h, volume: l * w * h };
}

function mgPlural(value, singular, plural = `${singular}s`) {
  return Number(value) === 1 ? singular : plural;
}

function generateMeasurementGeometryPoint(point) {
  switch (point) {
    // Practice 1 — Length and Metric Units
    case 1: {
      const items = [
        ['the thickness of a coin', 'mm', ['millimetre', 'millimetres', 'millimeter', 'millimeters']],
        ['the length of a pencil', 'cm', ['centimetre', 'centimetres', 'centimeter', 'centimeters']],
        ['the height of a classroom door', 'm', ['metre', 'metres', 'meter', 'meters']],
        ['the distance between two towns', 'km', ['kilometre', 'kilometres', 'kilometer', 'kilometers']]
      ];
      const [thing, answer, accepted] = pick(items);
      return mgText(1, `Which metric unit is most suitable for measuring ${thing}?`, answer, accepted);
    }
    case 2: {
      const items = [
        ['Which is a reasonable length for a school desk?', ['120 cm', '120 mm', '120 m'], 0],
        ['Which is a reasonable height for a classroom door?', ['2 m', '2 cm', '2 km'], 0],
        ['Which is a reasonable thickness for a coin?', ['2 mm', '2 m', '2 km'], 0],
        ['Which is a reasonable distance between two nearby towns?', ['18 km', '18 mm', '18 cm'], 0]
      ];
      const [stem, options, correct] = pick(items);
      return mgChoiceOptions(2, stem, options, correct);
    }
    case 3: {
      const cm = randInt(2, mgLevel(30, 80, 150));
      return mgNumber(3, `Convert ${cm * 10} mm to centimetres.`, cm, 'cm');
    }
    case 4: {
      const cm = randInt(2, mgLevel(30, 80, 150));
      return mgNumber(4, `Convert ${cm} cm to millimetres.`, cm * 10, 'mm');
    }
    case 5: {
      const metres = mgPickLevel([1.1, 1.2, 1.5, 1.8, 2, 2.5, 3, 3.5], [1.25, 1.4, 1.5, 1.75, 2.4, 2.8, 3.2, 3.6, 4.5], [1.35, 1.65, 2.25, 2.75, 3.45, 3.75, 4.2, 4.85, 5.6]);
      const cm = Math.round(metres * 100);
      return mgNumber(5, `Convert ${cm} cm to metres.`, metres, 'm');
    }
    case 6: {
      const metres = mgPickLevel([1.1, 1.2, 1.5, 1.8, 2, 2.5, 3, 3.5], [1.25, 1.4, 1.75, 1.8, 2.4, 2.8, 3.6, 4.25, 4.5], [1.35, 1.65, 2.25, 2.75, 3.45, 3.75, 4.2, 4.85, 5.65]);
      return mgNumber(6, `Convert ${metres} m to centimetres.`, Math.round(metres * 100), 'cm');
    }
    case 7: {
      const km = mgPickLevel([1, 2, 3, 4, 5, 6], [1.5, 2.25, 2.5, 3.5, 4.2, 4.75, 5.5], [1.25, 1.8, 2.75, 3.6, 4.35, 5.25, 6.4]);
      return mgNumber(7, `Convert ${Math.round(km * 1000)} m to kilometres.`, km, 'km');
    }
    case 8: {
      const km = mgPickLevel([1, 2, 3, 4, 5, 6], [1.5, 2.25, 2.5, 3.5, 4.2, 4.75, 5.5], [1.25, 1.8, 2.75, 3.6, 4.35, 5.25, 6.4]);
      return mgNumber(8, `Convert ${km} km to metres.`, Math.round(km * 1000), 'm');
    }
    case 9: {
      const metres = randInt(2, 9);
      const cm = metres * 100 + pick([-50, -20, 20, 50]);
      const firstLonger = metres * 100 > cm;
      return mgChoice(9, `Which length is longer?<br><strong>1.</strong> ${metres} m &nbsp;&nbsp; <strong>2.</strong> ${cm} cm`, firstLonger ? 1 : 2);
    }
    case 10: {
      const m = randInt(2, 8);
      const values = [m * 100 - 30, m * 100 + 20, m * 100 + 70];
      const shuffled = values.map((cm, i) => ({ cm, label: i === 0 ? `${cm} cm` : i === 1 ? `${cm / 100} m` : `${Math.round(cm * 10)} mm` })).sort(() => Math.random() - 0.5);
      const largestIndex = shuffled.reduce((best, item, i, arr) => item.cm > arr[best].cm ? i : best, 0) + 1;
      return mgChoice(10, `Which is the longest?<br><strong>1.</strong> ${shuffled[0].label} &nbsp;&nbsp; <strong>2.</strong> ${shuffled[1].label} &nbsp;&nbsp; <strong>3.</strong> ${shuffled[2].label}`, largestIndex);
    }

    // Practice 2 — Mass and Capacity
    case 11: {
      const items = [['an apple', 'g', ['gram', 'grams']], ['a school bag', 'kg', ['kilogram', 'kilograms']], ['a paper clip', 'g', ['gram', 'grams']], ['a child', 'kg', ['kilogram', 'kilograms']]];
      const [thing, answer, accepted] = pick(items);
      return mgText(11, `Which metric unit is more suitable for measuring the mass of ${thing}?`, answer, accepted);
    }
    case 12: {
      const kg = mgPickLevel([1, 2, 3, 4, 5, 6], [1.25, 1.5, 1.75, 2.5, 3.25, 3.75, 4.2, 4.5], [1.35, 1.8, 2.45, 2.75, 3.6, 4.25, 4.75, 5.25, 6.4]);
      return mgNumber(12, `Convert ${Math.round(kg * 1000)} g to kilograms.`, kg, 'kg');
    }
    case 13: {
      const kg = mgPickLevel([1, 2, 3, 4, 5, 6], [1.25, 1.5, 1.75, 2.5, 3.25, 3.75, 4.2, 4.5], [1.35, 1.8, 2.45, 2.75, 3.6, 4.25, 4.75, 5.25, 6.4]);
      return mgNumber(13, `Convert ${kg} kg to grams.`, Math.round(kg * 1000), 'g');
    }
    case 14: {
      const kg = randInt(1, mgLevel(4, 8, 12));
      const g = pick([100, 250, 500, 750]);
      const decimalKg = mgRound(kg + g / 1000);
      if (pick([true, false])) {
        return mgText(14, `Write ${decimalKg} kg in kilograms and grams. Use the form “5 kg 250 g”.`, `${kg} kg ${g} g`, [`${kg}kg ${g}g`, `${kg} kg ${g}g`, `${kg}kg${g}g`]);
      }
      return mgNumber(14, `${kg} kg ${g} g = how many kilograms?`, decimalKg, 'kg');
    }
    case 15: {
      const items = [['a teaspoon of medicine', 'mL', ['millilitre', 'millilitres', 'milliliter', 'milliliters']], ['a bottle of milk', 'L', ['litre', 'litres', 'liter', 'liters']], ['a cup of water', 'mL', ['millilitre', 'millilitres', 'milliliter', 'milliliters']], ['a large bucket of water', 'L', ['litre', 'litres', 'liter', 'liters']]];
      const [thing, answer, accepted] = pick(items);
      return mgText(15, `Which metric unit is more suitable for measuring ${thing}?`, answer, accepted);
    }
    case 16: {
      const litres = mgPickLevel([1, 2, 3, 4, 5], [1.25, 1.5, 1.75, 2.5, 3.25, 3.75, 4.5], [1.2, 1.8, 2.35, 2.75, 3.6, 4.25, 4.75, 5.4]);
      return mgNumber(16, `Convert ${Math.round(litres * 1000)} mL to litres.`, litres, 'L');
    }
    case 17: {
      const litres = mgPickLevel([1, 2, 3, 4, 5], [1.25, 1.5, 1.75, 2.5, 3.25, 3.75, 4.5], [1.2, 1.8, 2.35, 2.75, 3.6, 4.25, 4.75, 5.4]);
      return mgNumber(17, `Convert ${litres} L to millilitres.`, Math.round(litres * 1000), 'mL');
    }
    case 18: {
      const l = randInt(1, mgLevel(4, 8, 12));
      const ml = pick([100, 250, 500, 750]);
      const decimalL = mgRound(l + ml / 1000);
      if (pick([true, false])) {
        return mgText(18, `Write ${decimalL} L in litres and millilitres. Use the form “2 L 250 mL”.`, `${l} L ${ml} mL`, [`${l}l ${ml}ml`, `${l} L ${ml}ml`, `${l}l${ml}ml`]);
      }
      return mgNumber(18, `${l} L ${ml} mL = how many litres?`, decimalL, 'L');
    }
    case 19: {
      const kg = randInt(2, 6);
      const g = kg * 1000 + pick([-250, 250, 500]);
      const answer = kg * 1000 > g ? 1 : 2;
      return mgChoice(19, `Which mass is greater?<br><strong>1.</strong> ${kg} kg &nbsp;&nbsp; <strong>2.</strong> ${g} g`, answer);
    }
    case 20: {
      const count = randInt(2, mgLevel(4, 6, 8));
      if (pick(['mass', 'capacity']) === 'mass') {
        const eachG = pick([250, 500, 750]);
        return mgNumber(20, `${count} identical parcels each have mass ${eachG} g. What is their total mass in grams?`, count * eachG, 'g');
      }
      const bottleMl = pick([250, 500, 750]);
      return mgNumber(20, `${count} identical bottles each hold ${bottleMl} mL. How many millilitres do they hold altogether?`, count * bottleMl, 'mL');
    }

    // Practice 3 — Mixed Units
    case 21: {
      const m = randInt(1, mgLevel(5, 9, 15));
      const cm = pick([10, 20, 25, 40, 50, 75]);
      return mgNumber(21, `${m} m ${cm} cm = how many centimetres?`, m * 100 + cm, 'cm');
    }
    case 22: {
      const m = randInt(1, mgLevel(5, 9, 15));
      const cm = pick([10, 20, 25, 40, 50, 75]);
      const total = m * 100 + cm;
      return mgText(22, `Write ${total} cm in metres and centimetres. Use the form “3 m 25 cm”.`, `${m} m ${cm} cm`, [`${m}m ${cm}cm`, `${m} m ${cm}cm`, `${m}m${cm}cm`]);
    }
    case 23: {
      const kg = randInt(1, mgLevel(5, 9, 12));
      const g = pick([100, 200, 250, 400, 500, 750]);
      return mgNumber(23, `${kg} kg ${g} g = how many grams?`, kg * 1000 + g, 'g');
    }
    case 24: {
      const kg = randInt(1, mgLevel(5, 9, 12));
      const g = pick([100, 200, 250, 400, 500, 750]);
      const total = kg * 1000 + g;
      return mgText(24, `Write ${total} g in kilograms and grams. Use the form “2 kg 350 g”.`, `${kg} kg ${g} g`, [`${kg}kg ${g}g`, `${kg} kg ${g}g`, `${kg}kg${g}g`]);
    }
    case 25: {
      const l = randInt(1, mgLevel(5, 9, 12));
      const ml = pick([100, 200, 250, 400, 500, 750]);
      return mgNumber(25, `${l} L ${ml} mL = how many millilitres?`, l * 1000 + ml, 'mL');
    }
    case 26: {
      const l = randInt(1, mgLevel(5, 9, 12));
      const ml = pick([100, 200, 250, 400, 500, 750]);
      const total = l * 1000 + ml;
      return mgText(26, `Write ${total} mL in litres and millilitres. Use the form “2 L 350 mL”.`, `${l} L ${ml} mL`, [`${l}l ${ml}ml`, `${l} L ${ml}ml`, `${l}l${ml}ml`]);
    }
    case 27: {
      const mode = pick(['length', 'mass', 'capacity']);
      if (mode === 'length') {
        const m1 = randInt(1, mgLevel(4, 7, 10)), cm1 = pick([20, 30, 40, 50, 60, 75]);
        const m2 = randInt(1, mgLevel(3, 6, 9)), cm2 = pick([10, 20, 30, 40, 50, 75]);
        return mgNumber(27, `A rope is ${m1} m ${cm1} cm long and another rope is ${m2} m ${cm2} cm long. What is their total length in centimetres?`, (m1 + m2) * 100 + cm1 + cm2, 'cm');
      }
      if (mode === 'mass') {
        const kg1 = randInt(1, mgLevel(4, 7, 10)), g1 = pick([100, 200, 250, 400, 500, 750]);
        const kg2 = randInt(1, mgLevel(3, 6, 9)), g2 = pick([100, 200, 250, 400, 500, 750]);
        return mgNumber(27, `One parcel has mass ${kg1} kg ${g1} g and another has mass ${kg2} kg ${g2} g. What is their total mass in grams?`, (kg1 + kg2) * 1000 + g1 + g2, 'g');
      }
      const l1 = randInt(1, mgLevel(4, 7, 10)), ml1 = pick([100, 200, 250, 400, 500, 750]);
      const l2 = randInt(1, mgLevel(3, 6, 9)), ml2 = pick([100, 200, 250, 400, 500, 750]);
      return mgNumber(27, `A jug contains ${l1} L ${ml1} mL and another contains ${l2} L ${ml2} mL. How much liquid is there altogether in millilitres?`, (l1 + l2) * 1000 + ml1 + ml2, 'mL');
    }
    case 28: {
      const mode = pick(['length', 'mass', 'capacity']);
      if (mode === 'length') {
        const total = randInt(5, mgLevel(8, 12, 18)) * 100 + pick([0, 25, 50, 75]);
        const used = randInt(1, Math.floor(total / 100) - 1) * 100 + pick([0, 25, 50, 75]);
        return mgNumber(28, `A ribbon is ${total} cm long. ${used} cm is used. How many centimetres remain?`, total - used, 'cm');
      }
      if (mode === 'mass') {
        const total = randInt(4, mgLevel(8, 12, 16)) * 1000 + pick([0, 250, 500, 750]);
        const used = randInt(1, Math.floor(total / 1000) - 1) * 1000 + pick([0, 250, 500, 750]);
        return mgNumber(28, `A bag contains ${total} g of rice. ${used} g is used. How many grams remain?`, total - used, 'g');
      }
      const total = randInt(4, mgLevel(8, 12, 16)) * 1000 + pick([0, 250, 500, 750]);
      const used = randInt(1, Math.floor(total / 1000) - 1) * 1000 + pick([0, 250, 500, 750]);
      return mgNumber(28, `A container holds ${total} mL of water. ${used} mL is poured out. How many millilitres remain?`, total - used, 'mL');
    }
    case 29: {
      const mode = pick(['length', 'mass', 'capacity']);
      if (mode === 'length') {
        let a, b;
        do {
          a = randInt(2, 7) * 100 + pick([20, 40, 50, 60, 80]);
          b = randInt(1, 6) * 100 + pick([10, 30, 50, 70, 90]);
        } while (a === b);
        const hi = Math.max(a, b), lo = Math.min(a, b);
        return mgNumber(29, `One length is ${hi} cm and another is ${lo} cm. What is the difference between them?`, hi - lo, 'cm');
      }
      if (mode === 'mass') {
        let a, b;
        do {
          a = randInt(2, 8) * 1000 + pick([100, 250, 500, 750]);
          b = randInt(1, 7) * 1000 + pick([100, 250, 500, 750]);
        } while (a === b);
        const hi = Math.max(a, b), lo = Math.min(a, b);
        return mgNumber(29, `One parcel has mass ${hi} g and another has mass ${lo} g. What is the difference in grams?`, hi - lo, 'g');
      }
      let a, b;
      do {
        a = randInt(2, 8) * 1000 + pick([100, 250, 500, 750]);
        b = randInt(1, 7) * 1000 + pick([100, 250, 500, 750]);
      } while (a === b);
      const hi = Math.max(a, b), lo = Math.min(a, b);
      return mgNumber(29, `One container holds ${hi} mL and another holds ${lo} mL. What is the difference in millilitres?`, hi - lo, 'mL');
    }
    case 30: {
      const mode = pick(['length', 'mass', 'capacity']);
      if (mode === 'length') {
        const total = mgPickLevel([800, 1000, 1200], [1500, 1800, 2000], [2400, 2800, 3200]);
        const cut1 = pick([125, 150, 200, 250]), cut2 = pick([100, 175, 225, 300]);
        return mgNumber(30, `A roll contains ${total} cm of ribbon. Pieces of ${cut1} cm and ${cut2} cm are cut off. How many centimetres remain?`, total - cut1 - cut2, 'cm');
      }
      if (mode === 'mass') {
        const total = mgPickLevel([3000, 4000, 5000], [6000, 7500, 9000], [10000, 12000, 15000]);
        const used1 = pick([250, 500, 750, 1000]), used2 = pick([250, 500, 750, 1250]);
        return mgNumber(30, `A container starts with ${total} g of flour. ${used1} g is used in the morning and ${used2} g later. How many grams remain?`, total - used1 - used2, 'g');
      }
      const total = mgPickLevel([3000, 4000, 5000], [6000, 7500, 9000], [10000, 12000, 15000]);
      const used1 = pick([250, 500, 750, 1000]), used2 = pick([250, 500, 750, 1250]);
      return mgNumber(30, `A tank starts with ${total} mL of water. ${used1} mL is poured out, then another ${used2} mL is used. How many millilitres remain?`, total - used1 - used2, 'mL');
    }
    // Practice 4 — Perimeter Basics
    case 31:
      return mgChoiceOptions(31, 'What does the perimeter of a 2D shape measure?', [
        'the distance around the outside',
        'the amount of space inside the shape',
        'the amount of space inside a 3D object'
      ], 0);
    case 32: {
      if (state.level === 'foundation') {
        const { length, width } = mgRectangleDimensions();
        return mgNumber(32, `A rectangle is ${length} cm long and ${width} cm wide. Find its perimeter.`, 2 * (length + width), 'cm');
      }
      if (state.level === 'core') {
        const length = randInt(8, 20), width = randInt(4, 12);
        return mgNumber(32, `A rectangular noticeboard is ${length} cm long and ${width} cm wide. Find the distance around it.`, 2 * (length + width), 'cm');
      }
      const lengthM = randInt(1, 3), widthCm = pick([25, 50, 75, 125, 150]);
      return mgNumber(32, `A rectangle is ${lengthM} m long and ${widthCm} cm wide. Convert the length to centimetres, then find its perimeter in centimetres.`, 2 * (lengthM * 100 + widthCm), 'cm');
    }
    case 33: {
      const side = randInt(3, mgLevel(12, 20, 30));
      return mgNumber(33, `A square has side length ${side} cm. Find its perimeter.`, 4 * side, 'cm');
    }
    case 34: {
      if (state.level !== 'challenge') {
        const a = randInt(3, 12), b = randInt(3, 12), cMin = Math.abs(a - b) + 1, cMax = a + b - 1;
        const c = randInt(cMin, Math.max(cMin, cMax));
        return mgNumber(34, `A triangle has side lengths ${a} cm, ${b} cm and ${c} cm. Find its perimeter.`, a + b + c, 'cm');
      }
      const aCm = pick([40, 50, 60, 70, 80, 90]), bCm = pick([50, 60, 75, 80, 100, 120]);
      const validC = [50, 75, 100, 125, 150].filter(c => c < aCm + bCm && c > Math.abs(aCm - bCm));
      if (!validC.length) return generateMeasurementGeometryPoint(34);
      const cCm = pick(validC);
      return mgNumber(34, `A triangle has side lengths ${aCm} cm, ${bCm} cm and ${cCm / 100} m. Find its perimeter in centimetres.`, aCm + bCm + cCm, 'cm');
    }
    case 35: {
      if (state.level !== 'challenge') {
        const sides = mgValidPolygonSides(mgLevel(5, 6, 7), 2, mgLevel(9, 14, 20));
        return mgNumber(35, `An irregular polygon has side lengths ${sides.join(' cm, ')} cm. Find its perimeter.`, sides.reduce((a, b) => a + b, 0), 'cm');
      }
      const sides = mgValidPolygonSides(6, 20, 90);
      const index = randInt(0, sides.length - 1);
      const converted = sides[index] / 100;
      const labels = sides.map((side, i) => i === index ? `${converted} m` : `${side} cm`);
      return mgNumber(35, `An irregular polygon has side lengths ${labels.join(', ')}. Find its perimeter in centimetres.`, sides.reduce((a, b) => a + b, 0), 'cm');
    }
    case 36: {
      const n = mgPickLevel([5, 6], [5, 6, 8], [5, 6, 8, 10]);
      const side = randInt(3, mgLevel(10, 15, 20));
      return mgNumber(36, `A regular ${n}-sided polygon has side length ${side} cm. Find its perimeter.`, n * side, 'cm');
    }
    case 37: {
      const aCm = randInt(40, 90), bM = mgPickLevel([1, 2], [1.5, 2, 2.5], [1.25, 1.75, 2.5]);
      return mgNumber(37, `A two-sided open path has one section ${aCm} cm long and another section ${bM} m long. What is the total length in centimetres?`, aCm + Math.round(bM * 100), 'cm');
    }
    case 38:
      return mgChoiceOptions(38, 'A student wants to know how much fencing is needed around a rectangular garden. Which measurement should be calculated?', [
        'perimeter',
        'area',
        'volume'
      ], 0);
    case 39: {
      const aL = randInt(8, 15), aW = randInt(3, 7), bL = randInt(6, 14), bW = randInt(4, 8);
      const pa = 2 * (aL + aW), pb = 2 * (bL + bW);
      if (pa === pb) return generateMeasurementGeometryPoint(39);
      return mgChoice(39, `Which rectangle has the greater perimeter?<br><strong>1.</strong> ${aL} cm by ${aW} cm &nbsp;&nbsp; <strong>2.</strong> ${bL} cm by ${bW} cm`, pa > pb ? 1 : 2);
    }
    case 40: {
      if (state.level === 'foundation') {
        const l = randInt(8, 20), w = randInt(4, 12);
        return mgNumber(40, `A rectangular vegetable garden is ${l} m long and ${w} m wide. How many metres of fencing are needed to go once around it?`, 2 * (l + w), 'm');
      }
      if (state.level === 'core') {
        const l = randInt(10, 24), w = randInt(5, 14), gate = pick([1, 2]);
        return mgNumber(40, `A rectangular garden is ${l} m by ${w} m. A gate ${gate} m wide needs no fence. How many metres of fencing are required?`, 2 * (l + w) - gate, 'm');
      }
      const lM = randInt(8, 16), wCm = pick([350, 450, 550, 650, 750]), gateCm = pick([100, 150, 200]);
      return mgNumber(40, `A rectangular garden is ${lM} m long and ${wCm} cm wide. A gate ${gateCm} cm wide needs no fence. Find the fencing needed in centimetres.`, 2 * (lM * 100 + wCm) - gateCm, 'cm');
    }

    // Practice 5
    // Practice 5 — Missing Sides from Perimeter
    case 41: {
      const sides = mgValidPolygonSides(4, 4, mgLevel(12, 16, 20));
      const missingIndex = randInt(0, 3);
      const missing = sides[missingIndex];
      const known = sides.filter((_, index) => index !== missingIndex);
      const perimeter = sides.reduce((sum, side) => sum + side, 0);
      return mgNumber(41, `A four-sided shape has perimeter ${perimeter} cm. Three sides are ${known[0]} cm, ${known[1]} cm and ${known[2]} cm. Find the fourth side.`, missing, 'cm');
    }
    case 42: {
      if (state.level !== 'challenge') {
        const w = randInt(3, 10), l = randInt(w + 1, mgLevel(15, 24, 32)), p = 2 * (l + w);
        return mgNumber(42, `A rectangle has perimeter ${p} cm and width ${w} cm. Find its length.`, l, 'cm');
      }
      const widthCm = pick([25, 50, 75, 100, 125, 150]);
      const lengthCm = randInt(Math.ceil(widthCm / 25) + 4, Math.ceil(widthCm / 25) + 14) * 25;
      const perimeterM = mgRound(2 * (lengthCm + widthCm) / 100);
      return mgNumber(42, `A rectangle has perimeter ${perimeterM} m and width ${widthCm} cm. Convert the perimeter to centimetres, then find its length in centimetres.`, lengthCm, 'cm');
    }
    case 43: {
      if (state.level !== 'challenge') {
        const w = randInt(3, 10), l = randInt(w + 1, mgLevel(15, 24, 32)), p = 2 * (l + w);
        return mgNumber(43, `A rectangle has perimeter ${p} cm and length ${l} cm. Find its width.`, w, 'cm');
      }
      const widthCm = pick([25, 50, 75, 100, 125]);
      const lengthCm = widthCm + pick([50, 75, 100, 125, 150]);
      const perimeterM = mgRound(2 * (lengthCm + widthCm) / 100);
      return mgNumber(43, `A rectangle has perimeter ${perimeterM} m and length ${lengthCm} cm. Find its width in centimetres.`, widthCm, 'cm');
    }
    case 44: {
      const side = randInt(3, mgLevel(15, 24, 35));
      return mgNumber(44, `A square has perimeter ${side * 4} cm. Find one side length.`, side, 'cm');
    }
    case 45: {
      const a = randInt(4, 15), b = randInt(4, 15), c = randInt(Math.abs(a - b) + 1, a + b - 1), p = a + b + c;
      return mgNumber(45, `A triangle has perimeter ${p} cm. Two sides are ${a} cm and ${b} cm. Find the third side.`, c, 'cm');
    }
    case 46: {
      const equal = randInt(5, 15), base = randInt(4, Math.min(2 * equal - 1, 18)), p = 2 * equal + base;
      return mgNumber(46, `An isosceles triangle has perimeter ${p} cm and base ${base} cm. The other two sides are equal. Find the length of each equal side.`, equal, 'cm');
    }
    case 47: {
      const n = mgPickLevel([5, 6], [5, 6, 8], [6, 8, 10, 12]);
      const side = randInt(3, 15);
      return mgNumber(47, `A regular ${n}-sided polygon has perimeter ${n * side} cm. Find one side length.`, side, 'cm');
    }
    case 48: {
      const x = randInt(3, 12), diff = randInt(2, 6), p = 2 * x + 2 * (x + diff);
      return mgNumber(48, `A rectangle is ${diff} cm longer than it is wide. Its perimeter is ${p} cm. Find its width.`, x, 'cm');
    }
    case 49: {
      const x = randInt(4, 12), diff = randInt(2, 7), p = 2 * x + 2 * (x + diff);
      return mgNumber(49, `The width of a rectangle is x cm and its length is (x + ${diff}) cm. The perimeter is ${p} cm. Find x.`, x, 'cm');
    }
    case 50: {
      if (state.level !== 'challenge') {
        const w = randInt(4, 12), extra = randInt(2, 8), l = w + extra, p = 2 * (l + w);
        return mgNumber(50, `A rectangular playground has perimeter ${p} m. Its length is ${extra} m more than its width. Find the length of the playground.`, l, 'm');
      }
      const widthM = randInt(4, 10), extraCm = pick([50, 100, 150, 200]);
      const extraM = extraCm / 100, lengthM = widthM + extraM, pM = mgRound(2 * (lengthM + widthM));
      return mgNumber(50, `A rectangular playground has perimeter ${pM} m. Its length is ${extraCm} cm more than its width. Find the length in metres.`, lengthM, 'm');
    }

    // Practice 6
    // Practice 6 — Rectangles and Squares Area
    case 51:
      return mgChoiceOptions(51, 'What does the area of a 2D shape measure?', [
        'the amount of space inside the shape',
        'the distance around the shape',
        'the amount of space inside a 3D object'
      ], 0);
    case 52:
      return mgChoiceOptions(52, 'Which unit is suitable for the area of a classroom floor?', ['m', 'm²', 'm³'], 1);
    case 53: {
      if (state.level !== 'challenge') {
        const { length, width } = mgRectangleDimensions();
        return mgNumber(53, `A rectangle is ${length} cm long and ${width} cm wide. Find its area.`, length * width, 'cm²');
      }
      const lengthM = randInt(2, 8), widthCm = pick([50, 75, 125, 150, 175, 250]);
      return mgNumber(53, `A rectangle is ${lengthM} m long and ${widthCm} cm wide. Find its area in square metres.`, mgRound(lengthM * widthCm / 100), 'm²');
    }
    case 54: {
      const side = randInt(3, mgLevel(12, 20, 30));
      return mgNumber(54, `A square has side length ${side} cm. Find its area.`, side * side, 'cm²');
    }
    case 55: {
      if (state.level === 'foundation') {
        const areaM2 = randInt(1, 8);
        return mgNumber(55, `1 m² = 10,000 cm². Convert ${areaM2} m² to square centimetres.`, areaM2 * 10000, 'cm²');
      }
      if (state.level === 'core') {
        const areaM2 = pick([0.5, 1.5, 2.5, 3.5, 4.5]);
        return mgNumber(55, `1 m² = 10,000 cm². Convert ${Math.round(areaM2 * 10000)} cm² to square metres.`, areaM2, 'm²');
      }
      const lM = randInt(2, 8), wCm = pick([50, 75, 125, 150, 175, 250]);
      return mgNumber(55, `A rectangle is ${lM} m long and ${wCm} cm wide. Convert the width to metres, then find its area in square metres.`, mgRound(lM * wCm / 100), 'm²');
    }
    case 56: {
      if (state.level !== 'challenge') {
        const width = randInt(3, 12), length = randInt(width, 24), area = width * length;
        return mgNumber(56, `A rectangle has area ${area} cm² and width ${width} cm. Find its length.`, length, 'cm');
      }
      const widthCm = pick([25, 50, 75, 100, 125]), lengthM = randInt(2, 6);
      const areaCm2 = lengthM * 100 * widthCm;
      return mgNumber(56, `A rectangle has area ${areaCm2} cm² and width ${widthCm} cm. Find its length in metres.`, lengthM, 'm');
    }
    case 57: {
      if (state.level !== 'challenge') {
        const width = randInt(3, 12), length = randInt(width, 24), area = width * length;
        return mgNumber(57, `A rectangle has area ${area} cm² and length ${length} cm. Find its width.`, width, 'cm');
      }
      const lengthM = randInt(2, 7), widthCm = pick([25, 50, 75, 100, 125, 150]);
      const areaM2 = mgRound(lengthM * widthCm / 100);
      return mgNumber(57, `A rectangle has area ${areaM2} m² and length ${lengthM} m. Find its width in centimetres.`, widthCm, 'cm');
    }
    case 58: {
      const side = randInt(3, mgLevel(12, 18, 25));
      return mgNumber(58, `A square has area ${side * side} cm². Find its side length.`, side, 'cm');
    }
    case 59: {
      const a = mgRectangleDimensions(), b = mgRectangleDimensions();
      const areaA = a.length * a.width, areaB = b.length * b.width;
      if (areaA === areaB) return generateMeasurementGeometryPoint(59);
      return mgChoice(59, `Which rectangle has the greater area?<br><strong>1.</strong> ${a.length} cm by ${a.width} cm &nbsp;&nbsp; <strong>2.</strong> ${b.length} cm by ${b.width} cm`, areaA > areaB ? 1 : 2);
    }
    case 60: {
      if (state.level === 'foundation') {
        const l = randInt(6, 15), w = randInt(4, 10);
        return mgNumber(60, `A rectangular mat is ${l} m long and ${w} m wide. What area of floor does it cover?`, l * w, 'm²');
      }
      if (state.level === 'core') {
        const l = randInt(6, 14), w = randInt(4, 10), cutL = randInt(1, 3), cutW = randInt(1, 2);
        return mgNumber(60, `A rectangular floor is ${l} m by ${w} m. A fixed mat covers ${cutL} m by ${cutW} m. Find the uncovered floor area.`, l * w - cutL * cutW, 'm²');
      }
      const lM = randInt(5, 12), wCm = pick([450, 550, 650, 750, 850]), cupboardM2 = pick([1, 2, 3]);
      const totalArea = mgRound(lM * wCm / 100);
      return mgNumber(60, `A floor is ${lM} m long and ${wCm} cm wide. A cupboard covers ${cupboardM2} m². Find the remaining floor area in square metres.`, mgRound(totalArea - cupboardM2), 'm²');
    }

    // Practice 7
    // Practice 7 — Triangle Area
    case 61:
      return mgChoiceOptions(61, 'For a triangle, what must be true about the height used in the area formula?', [
        'It must be perpendicular to the chosen base.',
        'It must be the longest side.',
        'It must be equal to the base.'
      ], 0);
    case 62: {
      const { base, height, area } = mgTriangleBaseHeight();
      return mgNumber(62, `A rectangle has base ${base} cm and height ${height} cm. A triangle uses the same base and height and occupies exactly half the rectangle. Find the triangle's area.`, area, 'cm²');
    }
    case 63: {
      const { base, height, area } = mgTriangleBaseHeight();
      return mgNumber(63, `A triangle has base ${base} cm and perpendicular height ${height} cm. Find its area.`, area, 'cm²');
    }
    case 64: {
      if (state.level === 'foundation') {
        const baseCm = pick([200, 300, 400, 500]), heightM = pick([1, 2, 3]);
        return mgNumber(64, `A triangle has base ${baseCm} cm and perpendicular height ${heightM} m. Convert the height to centimetres, then find the area in square centimetres.`, baseCm * heightM * 100 / 2, 'cm²');
      }
      const baseM = randInt(2, mgLevel(4, 6, 8)), heightCm = pick([50, 100, 150, 200, 250]);
      return mgNumber(64, `A triangle has base ${baseM} m and perpendicular height ${heightCm} cm. Convert the height to metres, then find the area in square metres.`, mgRound(baseM * (heightCm / 100) / 2), 'm²');
    }
    case 65: {
      const base = mgPickLevel([6, 8, 10, 12], [8, 10, 12, 14, 16], [10, 12, 14, 16, 18]);
      const height = mgPickLevel([4, 6, 8], [5, 6, 8, 10], [6, 8, 10, 12]);
      const area = base * height / 2;
      const unit = state.level === 'challenge' ? 'm' : 'cm';
      const areaUnit = state.level === 'challenge' ? 'm²' : 'cm²';
      const contexts = state.level === 'challenge'
        ? ['triangular garden bed', 'triangular lawn section', 'triangular flower bed']
        : ['triangular flag', 'triangular sign', 'triangular piece of fabric'];
      return mgNumber(65, `A ${pick(contexts)} has base ${base} ${unit} and perpendicular height ${height} ${unit}. Find its area.`, area, areaUnit);
    }
    case 66: {
      if (state.level !== 'challenge') {
        const { base, height, area } = mgTriangleBaseHeight();
        return mgNumber(66, `A triangle has area ${area} cm² and perpendicular height ${height} cm. Find its base.`, base, 'cm');
      }
      const baseM = randInt(2, 8), heightCm = pick([50, 100, 150, 200]);
      const areaM2 = mgRound(baseM * heightCm / 100 / 2);
      return mgNumber(66, `A triangle has area ${areaM2} m² and perpendicular height ${heightCm} cm. Find its base in metres.`, baseM, 'm');
    }
    case 67: {
      if (state.level !== 'challenge') {
        const { base, height, area } = mgTriangleBaseHeight();
        return mgNumber(67, `A triangle has area ${area} cm² and base ${base} cm. Find its perpendicular height.`, height, 'cm');
      }
      const baseM = randInt(2, 8), heightCm = pick([50, 100, 150, 200, 250]);
      const areaM2 = mgRound(baseM * heightCm / 100 / 2);
      return mgNumber(67, `A triangle has area ${areaM2} m² and base ${baseM} m. Find its perpendicular height in centimetres.`, heightCm, 'cm');
    }
    case 68: {
      const base = randInt(6, 14), h1 = randInt(3, 8), h2 = h1 + randInt(1, 5);
      return mgChoiceOptions(68, `Two triangles have the same base of ${base} cm. Triangle 1 has height ${h1} cm and Triangle 2 has height ${h2} cm. Which has the greater area?`, ['Triangle 1', 'Triangle 2'], 1);
    }
    case 69: {
      const height = randInt(4, 10), b1 = randInt(4, 9), b2 = b1 + randInt(1, 6);
      return mgChoiceOptions(69, `Two triangles have the same perpendicular height of ${height} cm. Triangle 1 has base ${b1} cm and Triangle 2 has base ${b2} cm. Which has the greater area?`, ['Triangle 1', 'Triangle 2'], 1);
    }
    case 70: {
      const { base, height, area } = mgTriangleBaseHeight();
      const cost = mgPickLevel([2, 3, 4], [3, 4, 5], [4, 5, 6]);
      return mgNumber(70, `A triangular garden has base ${base} m and perpendicular height ${height} m. Grass seed costs $${cost} per square metre. What is the total cost?`, area * cost, '$');
    }

    // Practice 8 — Parallelograms and Trapeziums
    case 71:
      return mgChoiceOptions(71, 'For the area of a parallelogram, which height should be used?', [
        'the perpendicular height to the chosen base',
        'the sloping side length',
        'the longest side only'
      ], 0);
    case 72: {
      if (state.level !== 'challenge') {
        const base = randInt(5, mgLevel(12, 18, 25)), height = randInt(3, mgLevel(10, 14, 18));
        return mgNumber(72, `A parallelogram has base ${base} cm and perpendicular height ${height} cm. Find its area.`, base * height, 'cm²');
      }
      const baseM = randInt(2, 8), heightCm = pick([50, 75, 100, 125, 150, 200]);
      return mgNumber(72, `A parallelogram has base ${baseM} m and perpendicular height ${heightCm} cm. Find its area in square metres.`, mgRound(baseM * heightCm / 100), 'm²');
    }
    case 73: {
      const base = randInt(5, 18), height = randInt(3, 12), area = base * height;
      return mgNumber(73, `A parallelogram has area ${area} cm² and perpendicular height ${height} cm. Find its base.`, base, 'cm');
    }
    case 74: {
      const base = randInt(5, 18), height = randInt(3, 12), area = base * height;
      return mgNumber(74, `A parallelogram has area ${area} cm² and base ${base} cm. Find its perpendicular height.`, height, 'cm');
    }
    case 75:
      return mgChoiceOptions(75, 'Which pair of sides is used in the trapezium area formula?', [
        'the two parallel sides',
        'the two shortest sides',
        'any two adjacent sides'
      ], 0);
    case 76: {
      if (state.level !== 'challenge') {
        const a = randInt(4, 10), b = randInt(a + 2, mgLevel(14, 18, 24));
        const h = mgPickLevel([2, 4, 6], [2, 4, 6, 8], [2, 4, 6, 8, 10]);
        return mgNumber(76, `A trapezium has parallel sides ${a} cm and ${b} cm, with perpendicular height ${h} cm. Find its area.`, (a + b) * h / 2, 'cm²');
      }
      const aCm = pick([100, 150, 200, 250, 300]), bCm = aCm + pick([50, 100, 150, 200]), hM = pick([1, 1.5, 2, 2.5]);
      return mgNumber(76, `A trapezium has parallel sides ${aCm} cm and ${bCm} cm, with perpendicular height ${hM} m. Find its area in square metres.`, mgRound(((aCm + bCm) / 100) * hM / 2), 'm²');
    }
    case 77: {
      if (state.level !== 'challenge') {
        const a = randInt(4, 10), b = randInt(a + 2, 18), h = pick([2, 4, 6, 8]);
        const area = (a + b) * h / 2;
        return mgNumber(77, `A trapezium has area ${area} cm² and parallel sides ${a} cm and ${b} cm. Find its perpendicular height.`, h, 'cm');
      }
      const aM = pick([1, 1.5, 2, 2.5]), bM = aM + pick([0.5, 1, 1.5]), hCm = pick([50, 100, 150, 200]);
      const areaM2 = mgRound((aM + bM) * (hCm / 100) / 2);
      return mgNumber(77, `A trapezium has area ${areaM2} m² and parallel sides ${aM} m and ${bM} m. Find its perpendicular height in centimetres.`, hCm, 'cm');
    }
    case 78: {
      const base = randInt(6, 14), height = randInt(4, 10);
      return mgChoiceOptions(78, `A rectangle, triangle and parallelogram all have base ${base} cm and perpendicular height ${height} cm. Which two have the same area?`, [
        'rectangle and triangle',
        'rectangle and parallelogram',
        'triangle and parallelogram'
      ], 1);
    }
    case 79:
      return mgChoiceOptions(79, 'Which calculation finds the area of a trapezium with parallel sides a and b and perpendicular height h?', [
        '(a + b) × h ÷ 2',
        'a × b × h',
        '(a + b) × 2 + h'
      ], 0);
    case 80: {
      const a = randInt(5, 10), b = randInt(a + 2, 16), h = pick([4, 6, 8]);
      const area = (a + b) * h / 2;
      return mgNumber(80, `A trapezium-shaped sign has parallel edges ${a} cm and ${b} cm long and perpendicular height ${h} cm. Find its area.`, area, 'cm²');
    }

    // Practice 9 — Composite Area
    case 81: {
      const outerL = randInt(8, 15), outerW = randInt(6, 12), cutL = randInt(2, outerL - 3), cutW = randInt(2, outerW - 3);
      return mgNumber(81, `An L-shape can be made from a ${outerL} cm by ${outerW} cm rectangle with a ${cutL} cm by ${cutW} cm rectangle removed from one corner. Find the L-shape's area.`, outerL * outerW - cutL * cutW, 'cm²');
    }
    case 82: {
      const outerL = randInt(10, mgLevel(16, 20, 24));
      const outerH = randInt(7, mgLevel(12, 15, 18));
      const cutL = randInt(2, outerL - 4);
      const cutH = randInt(2, outerH - 3);
      const bottomH = outerH - cutH;
      const leftW = outerL - cutL;
      return mgNumber(82, `An L-shape is formed from a ${outerL} cm by ${outerH} cm rectangle by removing a ${cutL} cm by ${cutH} cm rectangle from the top-right corner. Split the L-shape into a bottom rectangle ${outerL} cm by ${bottomH} cm and an upper-left rectangle ${leftW} cm by ${cutH} cm. Find the total area.`, outerL * bottomH + leftW * cutH, 'cm²');
    }
    case 83: {
      const aL = randInt(4, mgLevel(8, 11, 14)), aW = randInt(3, mgLevel(6, 8, 10));
      const bL = randInt(3, mgLevel(7, 10, 13)), bW = randInt(2, mgLevel(5, 7, 9));
      return mgNumber(83, `Two non-overlapping rectangular sections have dimensions ${aL} cm by ${aW} cm and ${bL} cm by ${bW} cm. Find their combined area.`, aL * aW + bL * bW, 'cm²');
    }
    case 84: {
      const outerL = randInt(10, 18), outerW = randInt(8, 14), holeL = randInt(2, 5), holeW = randInt(2, 5);
      return mgNumber(84, `A ${outerL} cm by ${outerW} cm rectangle has a ${holeL} cm by ${holeW} cm rectangular piece cut out. Find the remaining area.`, outerL * outerW - holeL * holeW, 'cm²');
    }
    case 85: {
      const totalL = randInt(10, 18), usedL = randInt(3, totalL - 3), h = randInt(4, 10), missing = totalL - usedL;
      return mgNumber(85, `A ${totalL} cm long rectangle is split into two smaller rectangles with the same height of ${h} cm. The first section is ${usedL} cm long. Find the area of the second section.`, missing * h, 'cm²');
    }
    case 86: {
      const outerL = randInt(10, 18), outerW = randInt(8, 14), border = pick([1, 2]);
      if (outerL <= 2 * border || outerW <= 2 * border) return generateMeasurementGeometryPoint(86);
      const innerL = outerL - 2 * border, innerW = outerW - 2 * border;
      return mgNumber(86, `A rectangular frame measures ${outerL} cm by ${outerW} cm on the outside. The frame is ${border} cm wide all the way around, so the opening measures ${innerL} cm by ${innerW} cm. Find the area of the frame.`, outerL * outerW - innerL * innerW, 'cm²');
    }
    case 87: {
      const l = randInt(10, 18), w = randInt(8, 14), border = pick([1, 2]);
      const innerL = l - 2 * border, innerW = w - 2 * border;
      return mgNumber(87, `A ${l} m by ${w} m rectangular lawn has a ${border} m wide path inside all four edges. The grass area is therefore ${innerL} m by ${innerW} m. Find the area of the path.`, l * w - innerL * innerW, 'm²');
    }
    case 88: {
      const bigL = randInt(10, 18), bigW = randInt(8, 14), smallL = randInt(2, 6), smallW = randInt(2, 6);
      return mgNumber(88, `A large rectangle is ${bigL} cm by ${bigW} cm. A smaller ${smallL} cm by ${smallW} cm rectangle inside it is unshaded. Find the shaded area.`, bigL * bigW - smallL * smallW, 'cm²');
    }
    case 89: {
      const lM = randInt(2, mgLevel(5, 7, 9));
      const wCm = pick([50, 100, 150, 200]);
      const validCuts = [20, 25, 50, 75, 100].filter(cut => cut < wCm);
      const cutCm = pick(validCuts);
      const totalCmL = lM * 100;
      return mgNumber(89, `A rectangle is ${lM} m long and ${wCm} cm wide. A strip ${cutCm} cm wide running along the full ${lM} m length is removed. Find the remaining area in square centimetres.`, totalCmL * (wCm - cutCm), 'cm²');
    }
    case 90: {
      const outerL = randInt(12, mgLevel(18, 22, 26)), outerW = randInt(9, mgLevel(14, 17, 20));
      const cutL = randInt(3, Math.min(7, outerL - 3)), cutW = randInt(2, Math.min(6, outerW - 3));
      const area = outerL * outerW - cutL * cutW;
      if (state.level === 'challenge') {
        const coverage = mgPickNonDivisor(area, [3, 4, 5, 6, 8, 10]);
        if (!coverage) return generateMeasurementGeometryPoint(90);
        return mgNumber(90, `A floor is a ${outerL} m by ${outerW} m rectangle with a ${cutL} m by ${cutW} m storage area excluded. Each flooring pack covers ${coverage} m². Only whole packs can be bought. How many packs must be bought?`, Math.ceil(area / coverage), 'packs');
      }
      const coverage = mgPickUsefulDivisor(area, mgLevel([2, 3, 4], [2, 3, 4, 5, 6], [2, 3, 4, 5, 6]));
      if (!coverage) return generateMeasurementGeometryPoint(90);
      return mgNumber(90, `A floor is a ${outerL} m by ${outerW} m rectangle with a ${cutL} m by ${cutW} m storage area excluded. Each pack of flooring covers ${coverage} m². How many packs are needed?`, area / coverage, 'packs');
    }
    // Practice 10 — Area Applications
    case 91: {
      if (state.level === 'foundation') {
        const l = randInt(4, 10), w = randInt(3, 8);
        return mgNumber(91, `A classroom floor is ${l} m long and ${w} m wide. Find its area.`, l * w, 'm²');
      }
      if (state.level === 'core') {
        const l = randInt(6, 12), w = randInt(4, 9), cupboardL = randInt(1, 2), cupboardW = randInt(1, 2);
        return mgNumber(91, `A classroom floor is ${l} m by ${w} m. A fixed cupboard covers ${cupboardL} m by ${cupboardW} m. How much floor area is uncovered?`, l * w - cupboardL * cupboardW, 'm²');
      }
      const outerL = randInt(10, 16), outerW = randInt(7, 12), cutL = randInt(2, 5), cutW = randInt(2, 4);
      return mgNumber(91, `An L-shaped hall can be made from a ${outerL} m by ${outerW} m rectangle with a ${cutL} m by ${cutW} m corner removed. Find the floor area.`, outerL * outerW - cutL * cutW, 'm²');
    }
    case 92: {
      if (state.level === 'foundation') {
        const w = randInt(3, 8), h = randInt(2, 4);
        return mgNumber(92, `A rectangular wall is ${w} m wide and ${h} m high. Find its area.`, w * h, 'm²');
      }
      if (state.level === 'core') {
        const w = randInt(5, 10), h = randInt(2, 4), doorW = 1, doorH = 2;
        return mgNumber(92, `A wall is ${w} m wide and ${h} m high. A ${doorW} m by ${doorH} m door is not included. Find the wall area that remains.`, w * h - doorW * doorH, 'm²');
      }
      const w = randInt(6, 12), h = randInt(3, 5), doorArea = 2, windowArea = pick([1, 2, 3]);
      return mgNumber(92, `Two identical walls are each ${w} m wide and ${h} m high. Across the two walls there is one door of area ${doorArea} m² and one window of area ${windowArea} m². Find the total wall area left to cover.`, 2 * w * h - doorArea - windowArea, 'm²');
    }
    case 93: {
      if (state.level === 'foundation') {
        const l = randInt(6, 12), w = randInt(4, 9);
        return mgNumber(93, `A rectangular garden is ${l} m long and ${w} m wide. Find the garden area.`, l * w, 'm²');
      }
      if (state.level === 'core') {
        const l = randInt(8, 15), w = randInt(6, 10), shedL = randInt(2, 3), shedW = randInt(2, 3);
        return mgNumber(93, `A rectangular garden is ${l} m by ${w} m. A ${shedL} m by ${shedW} m shed stands inside it. Find the garden area not occupied by the shed.`, l * w - shedL * shedW, 'm²');
      }
      const l = randInt(10, 18), w = randInt(8, 14), pondL = randInt(2, 4), pondW = randInt(2, 4), bedArea = pick([4, 6, 8, 10]);
      return mgNumber(93, `A ${l} m by ${w} m garden contains a ${pondL} m by ${pondW} m pond and a flower bed of area ${bedArea} m². Find the remaining area.`, l * w - pondL * pondW - bedArea, 'm²');
    }
    case 94: {
      const path = state.level === 'foundation' ? 1 : pick([1, 2]);
      const l = randInt(10, mgLevel(16, 20, 24)), w = randInt(8, mgLevel(13, 16, 20));
      const grassArea = (l - 2 * path) * (w - 2 * path);
      if (state.level === 'challenge') {
        return mgNumber(94, `A rectangular garden is ${l} m by ${w} m. A ${path} m wide path runs inside all four edges. Find the area of the path.`, l * w - grassArea, 'm²');
      }
      return mgNumber(94, `A rectangular garden is ${l} m by ${w} m. A ${path} m wide path runs inside all four edges. Find the area left for grass.`, grassArea, 'm²');
    }
    case 95: {
      if (state.level === 'foundation') {
        const l = randInt(4, 10), w = randInt(3, 8), area = l * w;
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(95);
        return mgNumber(95, `A room is ${l} m by ${w} m. One carpet roll covers ${coverage} m². How many rolls are needed to cover the floor exactly?`, area / coverage, 'rolls');
      }
      if (state.level === 'core') {
        const l = randInt(6, 12), w = randInt(4, 9), excluded = pick([2, 4, 6]);
        const area = l * w - excluded;
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(95);
        return mgNumber(95, `A room is ${l} m by ${w} m. A fixed cupboard covers ${excluded} m² and does not need carpet. One roll covers ${coverage} m². How many rolls are needed for the remaining floor?`, area / coverage, 'rolls');
      }
      const l1 = randInt(6, 10), w1 = randInt(4, 8), l2 = randInt(4, 8), w2 = randInt(3, 6);
      const area = l1 * w1 + l2 * w2;
      const coverage = mgPickNonDivisor(area, [3, 4, 5, 6, 8, 10]);
      if (!coverage) return generateMeasurementGeometryPoint(95);
      return mgNumber(95, `Two rooms measure ${l1} m by ${w1} m and ${l2} m by ${w2} m. One carpet roll covers ${coverage} m². Only whole rolls can be bought. How many rolls must be bought to cover both floors?`, Math.ceil(area / coverage), 'rolls');
    }
    case 96: {
      if (state.level === 'foundation') {
        const l = randInt(4, 10), w = randInt(3, 8), area = l * w;
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4]);
        if (!coverage) return generateMeasurementGeometryPoint(96);
        return mgNumber(96, `A rectangular floor is ${l} m by ${w} m. Each pack of tiles covers ${coverage} m². How many packs are needed?`, area / coverage, 'packs');
      }
      if (state.level === 'core') {
        const l = randInt(4, 9), w = randInt(3, 7);
        return mgNumber(96, `A rectangular floor is ${l} m by ${w} m. Square tiles are 50 cm by 50 cm. How many tiles are needed to cover the floor with no gaps?`, l * w * 4, 'tiles');
      }
      const l = randInt(6, 12), w = randInt(4, 9), excludedL = randInt(1, 2), excludedW = randInt(1, 2);
      const area = l * w - excludedL * excludedW;
      return mgNumber(96, `A ${l} m by ${w} m floor has a ${excludedL} m by ${excludedW} m fixed cupboard area that is not tiled. Square tiles are 50 cm by 50 cm. How many tiles are needed for the remaining floor?`, area * 4, 'tiles');
    }
    case 97: {
      if (state.level === 'foundation') {
        const wallW = randInt(4, 10), wallH = randInt(2, 4), area = wallW * wallH;
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(97);
        return mgNumber(97, `A wall is ${wallW} m by ${wallH} m. One litre of paint covers ${coverage} m². How many litres are needed for one coat?`, area / coverage, 'L');
      }
      if (state.level === 'core') {
        const wallW = randInt(5, 12), wallH = randInt(3, 5), paintArea = wallW * wallH - 2;
        const coverage = mgPickUsefulDivisor(paintArea, [2, 3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(97);
        return mgNumber(97, `A wall is ${wallW} m by ${wallH} m. A door of area 2 m² is not painted. One litre covers ${coverage} m². How many litres are needed for one coat?`, paintArea / coverage, 'L');
      }
      const wallW = randInt(6, 12), wallH = randInt(3, 5), paintArea = wallW * wallH - 2 - pick([1, 2, 3]);
      const totalCoatArea = 2 * paintArea;
      const coverage = mgPickNonDivisor(totalCoatArea, [3, 4, 5, 6, 8, 10]);
      if (!coverage) return generateMeasurementGeometryPoint(97);
      return mgNumber(97, `A wall is ${wallW} m by ${wallH} m. A door and window together cover ${wallW * wallH - paintArea} m². The wall needs two coats. Each 1-litre tin covers ${coverage} m² for one coat. Only whole tins can be bought. How many tins are needed?`, Math.ceil(totalCoatArea / coverage), 'tins');
    }
    case 98: {
      const cost = mgPickLevel([2, 3, 4], [3, 4, 5, 6], [4, 5, 6, 8]);
      if (state.level === 'foundation') {
        const l = randInt(4, 10), w = randInt(3, 8);
        return mgNumber(98, `Flooring costs $${cost} per square metre. What is the cost to cover a ${l} m by ${w} m rectangular floor?`, l * w * cost, '$');
      }
      const l = randInt(6, 12), w = randInt(4, 9), excluded = state.level === 'core' ? pick([2, 4]) : pick([4, 6, 8]);
      return mgNumber(98, `Flooring costs $${cost} per square metre. A ${l} m by ${w} m room has ${excluded} m² covered by fixed furniture. What is the cost of flooring the remaining area?`, (l * w - excluded) * cost, '$');
    }
    case 99: {
      if (state.level === 'foundation') {
        const area = pick([24, 30, 36, 40, 48, 60]);
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4, 5, 6]);
        return mgNumber(99, `A garden has area ${area} m². One bag of seed covers ${coverage} m². How many bags are needed?`, area / coverage, 'bags');
      }
      if (state.level === 'core') {
        const l = randInt(6, 12), w = randInt(4, 10), area = l * w;
        const coverage = mgPickUsefulDivisor(area, [2, 3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(99);
        return mgNumber(99, `A rectangular lawn is ${l} m by ${w} m. One bag of seed covers ${coverage} m². How many bags are needed?`, area / coverage, 'bags');
      }
      const l = randInt(10, 18), w = randInt(8, 14), path = 1;
      const grassArea = (l - 2 * path) * (w - 2 * path);
      const coverage = mgPickNonDivisor(grassArea, [3, 4, 5, 6, 8, 10]);
      if (!coverage) return generateMeasurementGeometryPoint(99);
      return mgNumber(99, `A ${l} m by ${w} m garden has a 1 m wide path inside all four edges. One bag of seed covers ${coverage} m². Only whole bags can be bought. How many bags must be bought for the grass area?`, Math.ceil(grassArea / coverage), 'bags');
    }
    case 100: {
      const l = randInt(6, mgLevel(10, 12, 15)), w = randInt(4, mgLevel(8, 10, 12));
      const excludedL = randInt(1, Math.min(3, l - 2)), excludedW = randInt(1, Math.min(3, w - 2)), cost = pick([2, 3, 4, 5]);
      const area = l * w - excludedL * excludedW;
      if (state.level === 'challenge') {
        const waste = pick([2, 4, 6]);
        return mgNumber(100, `A ${l} m by ${w} m floor has a fixed cupboard covering ${excludedL} m by ${excludedW} m. An extra ${waste} m² of flooring is bought for cuts and waste. Flooring costs $${cost} per square metre. What is the total cost?`, (area + waste) * cost, '$');
      }
      return mgNumber(100, `A ${l} m by ${w} m floor has a fixed cupboard covering ${excludedL} m by ${excludedW} m. Flooring costs $${cost} per square metre. What is the cost of flooring the remaining area?`, area * cost, '$');
    }
    // Practice 11 — Volume
    case 101:
      return mgChoiceOptions(101, 'What does the volume of a 3D object measure?', [
        'the amount of space inside the object',
        'the area of its outside faces',
        'the distance around its base'
      ], 0);
    case 102:
      return mgChoiceOptions(102, 'Which unit is suitable for the volume of a box measured in centimetres?', ['cm', 'cm²', 'cm³'], 2);
    case 103: {
      const layers = randInt(2, 5), rows = randInt(2, 5), perRow = randInt(2, 6);
      return mgNumber(103, `A solid is built from ${layers} identical layers. Each layer has ${rows} rows of ${perRow} unit cubes. How many unit cubes are used altogether?`, layers * rows * perRow, 'cubes');
    }
    case 104: {
      const side = randInt(2, mgLevel(6, 9, 12));
      return mgNumber(104, `A cube has side length ${side} cm. Find its volume.`, side ** 3, 'cm³');
    }
    case 105: {
      const { l, w, h, volume } = mgPrismDimensions();
      return mgNumber(105, `A rectangular prism is ${l} cm long, ${w} cm wide and ${h} cm high. Find its volume.`, volume, 'cm³');
    }
    case 106: {
      if (state.level === 'foundation') {
        const baseArea = pick([12, 18, 20, 24, 30, 36]), height = randInt(2, 6);
        return mgNumber(106, `A prism has base area ${baseArea} cm² and height ${height} cm. Find its volume.`, baseArea * height, 'cm³');
      }
      const baseL = randInt(4, mgLevel(10, 14, 18)), baseW = randInt(3, mgLevel(8, 10, 12)), height = randInt(2, mgLevel(7, 9, 12));
      return mgNumber(106, `A rectangular prism has a base ${baseL} cm by ${baseW} cm and height ${height} cm. Find the base area first, then find the volume.`, baseL * baseW * height, 'cm³');
    }
    case 107: {
      const a = mgPrismDimensions(), b = mgPrismDimensions();
      if (a.volume === b.volume) return generateMeasurementGeometryPoint(107);
      return mgChoice(107, `Which prism has the greater volume?<br><strong>1.</strong> ${a.l} × ${a.w} × ${a.h} cm &nbsp;&nbsp; <strong>2.</strong> ${b.l} × ${b.w} × ${b.h} cm`, a.volume > b.volume ? 1 : 2);
    }
    case 108: {
      const a = mgPrismDimensions(), b = mgPrismDimensions();
      return mgNumber(108, `Two separate rectangular prisms have volumes ${a.volume} cm³ and ${b.volume} cm³. What is their combined volume?`, a.volume + b.volume, 'cm³');
    }
    case 109: {
      const mode = pick(['litresToCm3', 'cm3ToLitres', 'mlToCm3', 'dm3ToLitres']);
      if (mode === 'litresToCm3') {
        const litres = randInt(1, mgLevel(5, 9, 14));
        return mgNumber(109, `1 L = 1000 cm³. Convert ${litres} L to cubic centimetres.`, litres * 1000, 'cm³');
      }
      if (mode === 'cm3ToLitres') {
        const litres = mgPickLevel([1, 2, 3, 4, 5], [1.5, 2.5, 3.5, 4.5, 6], [1.25, 2.75, 3.6, 4.25, 5.5]);
        const cm3 = Math.round(litres * 1000);
        return mgNumber(109, `1 L = 1000 cm³. Convert ${cm3} cm³ to litres.`, litres, 'L');
      }
      if (mode === 'mlToCm3') {
        const ml = mgPickLevel([100, 250, 500, 750, 1000], [125, 300, 450, 650, 900, 1250], [175, 325, 575, 825, 1350, 1750]);
        return mgNumber(109, `1 mL = 1 cm³. Convert ${ml} mL to cubic centimetres.`, ml, 'cm³');
      }
      const dm3 = mgPickLevel([1, 2, 3, 4, 5], [1.5, 2.5, 3.5, 4.5, 6], [1.25, 2.75, 3.6, 4.25, 5.5]);
      return mgNumber(109, `1 dm³ = 1 L. Convert ${dm3} dm³ to litres.`, dm3, 'L');
    }
    case 110: {
      if (state.level === 'foundation') {
        const { l, w, h, volume } = mgPrismDimensions();
        return mgNumber(110, `A rectangular storage box is ${l} cm long, ${w} cm wide and ${h} cm high. How much space is inside it?`, volume, 'cm³');
      }
      if (state.level === 'core') {
        const lM = randInt(1, 2), w = randInt(20, 40), h = randInt(10, 30);
        return mgNumber(110, `A storage box is ${lM} m long, ${w} cm wide and ${h} cm high. Find its volume in cubic centimetres.`, lM * 100 * w * h, 'cm³');
      }
      const a = mgPrismDimensions(), b = mgPrismDimensions();
      return mgNumber(110, `Two rectangular storage boxes have dimensions ${a.l} cm × ${a.w} cm × ${a.h} cm and ${b.l} cm × ${b.w} cm × ${b.h} cm. Find their combined volume.`, a.volume + b.volume, 'cm³');
    }
    // Practice 12 — Missing Dimensions from Volume
    case 111: {
      if (state.level !== 'challenge') {
        const l = randInt(4, mgLevel(12, 18, 24)), w = randInt(2, mgLevel(7, 9, 12)), h = randInt(2, mgLevel(6, 8, 10)), volume = l * w * h;
        return mgNumber(111, `A rectangular prism has volume ${volume} cm³, width ${w} cm and height ${h} cm. Find its length.`, l, 'cm');
      }
      const lM = randInt(1, 3), lCm = lM * 100, w = pick([20, 25, 40, 50]), h = randInt(2, 8), volume = lCm * w * h;
      return mgNumber(111, `A rectangular prism has volume ${volume} cm³, width ${w} cm and height ${h} cm. Find its length in metres.`, lM, 'm');
    }
    case 112: {
      if (state.level !== 'challenge') {
        const l = randInt(4, mgLevel(12, 18, 24)), w = randInt(2, mgLevel(7, 9, 12)), h = randInt(2, mgLevel(6, 8, 10)), volume = l * w * h;
        return mgNumber(112, `A rectangular prism has volume ${volume} cm³, length ${l} cm and height ${h} cm. Find its width.`, w, 'cm');
      }
      const lM = randInt(1, 3), lCm = lM * 100, wCm = pick([20, 25, 40, 50, 75]), h = randInt(2, 8), volume = lCm * wCm * h;
      return mgNumber(112, `A rectangular prism is ${lM} m long and ${h} cm high. Its volume is ${volume} cm³. Find its width in centimetres.`, wCm, 'cm');
    }
    case 113: {
      if (state.level !== 'challenge') {
        const l = randInt(4, mgLevel(12, 18, 24)), w = randInt(2, mgLevel(7, 9, 12)), h = randInt(2, mgLevel(6, 8, 10)), volume = l * w * h;
        return mgNumber(113, `A rectangular prism has volume ${volume} cm³, length ${l} cm and width ${w} cm. Find its height.`, h, 'cm');
      }
      const lCm = pick([100, 150, 200, 250]), wCm = pick([20, 25, 40, 50]), hCm = randInt(2, 10), volume = lCm * wCm * hCm;
      return mgNumber(113, `A rectangular prism has volume ${volume} cm³, length ${lCm / 100} m and width ${wCm} cm. Find its height in centimetres.`, hCm, 'cm');
    }
    case 114: {
      const side = randInt(2, mgLevel(6, 9, 12));
      return mgNumber(114, `A cube has volume ${side ** 3} cm³. Find its side length.`, side, 'cm');
    }
    case 115: {
      const knownArea = randInt(6, 20), missing = randInt(3, 12), volume = knownArea * missing;
      return mgNumber(115, `The base area of a prism is ${knownArea} cm² and its volume is ${volume} cm³. Find its height.`, missing, 'cm');
    }
    case 116: {
      const lM = randInt(1, 3), lCm = lM * 100, w = randInt(10, 30), h = randInt(2, 6), volume = lCm * w * h;
      return mgNumber(116, `A rectangular prism is ${lM} m long and ${w} cm wide. Its volume is ${volume} cm³. Find its height in centimetres.`, h, 'cm');
    }
    case 117: {
      const l1 = randInt(4, 10), w1 = randInt(3, 8), h1 = randInt(2, 6), volume = l1 * w1 * h1;
      const l2 = pick([2, 3, 4, 5, 6]);
      const w2 = pick([2, 3, 4, 5, 6]);
      if (volume % (l2 * w2) !== 0) return generateMeasurementGeometryPoint(117);
      const h2 = volume / (l2 * w2);
      if (!Number.isInteger(h2) || h2 < 1 || h2 > 30) return generateMeasurementGeometryPoint(117);
      return mgNumber(117, `Prism A measures ${l1} cm × ${w1} cm × ${h1} cm. Prism B has the same volume and measures ${l2} cm × ${w2} cm × h cm. Find h.`, h2, 'cm');
    }
    case 118: {
      const l = randInt(4, 12), w = randInt(3, 8), x = randInt(2, 8), volume = l * w * x;
      return mgNumber(118, `A rectangular prism is ${l} cm long, ${w} cm wide and x cm high. Its volume is ${volume} cm³. Find x.`, x, 'cm');
    }
    case 119: {
      const w = randInt(3, mgLevel(7, 9, 12)), extra = randInt(2, mgLevel(4, 6, 8));
      const l = w + extra, h = randInt(2, mgLevel(6, 8, 10)), volume = l * w * h;
      return mgNumber(119, `A rectangular prism is ${extra} cm longer than it is wide. Its width is ${w} cm and its volume is ${volume} cm³. Find its height.`, h, 'cm');
    }
    case 120: {
      if (state.level === 'foundation') {
        const baseL = randInt(5, 10), baseW = randInt(3, 7), h = randInt(2, 7), volume = baseL * baseW * h;
        return mgNumber(120, `A box has base ${baseL} cm by ${baseW} cm and volume ${volume} cm³. Find its height.`, h, 'cm');
      }
      if (state.level === 'core') {
        const l = randInt(6, 12), w = randInt(3, 8), h = randInt(2, 8), volume = l * w * h;
        return mgNumber(120, `A box has volume ${volume} cm³ and base length ${l} cm. Its base width is ${w} cm. Find the base area first, then find the height.`, h, 'cm');
      }
      const lengthM = pick([1, 1.5, 2]);
      const lengthCm = Math.round(lengthM * 100);
      const divisor = pick([2, 4]);
      const widthCm = lengthCm / divisor;
      const h = randInt(3, 10);
      const volume = lengthCm * widthCm * h;
      return mgNumber(120, `A box is ${lengthM} m long. Its width is one-${divisor === 2 ? 'half' : 'quarter'} of its length. Its volume is ${volume} cm³. Convert the length to centimetres, find the width, then find the height.`, h, 'cm');
    }

    // Practice 13
    // Practice 13 — Surface Area
    case 121:
      return mgChoiceOptions(121, 'What does surface area measure?', [
        'the total area of all outside faces',
        'the amount of space inside the object',
        'the distance around one face'
      ], 0);
    case 122:
      return mgNumber(122, 'How many square faces does a cube have?', 6, 'faces');
    case 123: {
      const side = randInt(2, mgLevel(6, 9, 12));
      return mgNumber(123, `A cube has side length ${side} cm. Find its total surface area.`, 6 * side * side, 'cm²');
    }
    case 124:
      return mgNumber(124, 'How many rectangular faces does a rectangular prism have?', 6, 'faces');
    case 125: {
      const l = randInt(4, 12), w = randInt(3, 8);
      return mgNumber(125, `One face of a rectangular prism is ${l} cm by ${w} cm. Find the area of that face.`, l * w, 'cm²');
    }
    case 126: {
      const { l, w, h } = mgPrismDimensions();
      return mgNumber(126, `A closed rectangular prism is ${l} cm long, ${w} cm wide and ${h} cm high. Find its total surface area.`, 2 * (l * w + l * h + w * h), 'cm²');
    }
    case 127: {
      const { l, w, h } = mgPrismDimensions();
      const faceAreas = [l * w, l * w, l * h, l * h, w * h, w * h];
      const missingIndex = randInt(0, 5);
      const missingArea = faceAreas[missingIndex];
      const knownTotal = faceAreas.reduce((sum, area, index) => sum + (index === missingIndex ? 0 : area), 0);
      const surfaceArea = faceAreas.reduce((sum, area) => sum + area, 0);
      return mgNumber(127, `A rectangular prism has total surface area ${surfaceArea} cm². The combined area of five of its faces is ${knownTotal} cm². Find the area of the missing face.`, missingArea, 'cm²');
    }
    case 128: {
      const sideA = randInt(2, 7), sideB = sideA + randInt(1, 4);
      return mgChoiceOptions(128, 'Which cube has the greater surface area?', [`side ${sideA} cm`, `side ${sideB} cm`], 1);
    }
    case 129: {
      const l = randInt(5, 12), w = randInt(3, 8), h = randInt(2, 6);
      const openTop = l * w + 2 * l * h + 2 * w * h;
      return mgNumber(129, `An open-top rectangular box is ${l} cm long, ${w} cm wide and ${h} cm high. It has a base and four side faces but no top. Find its surface area.`, openTop, 'cm²');
    }
    case 130: {
      const side = randInt(2, 8), paper = 6 * side * side;
      return mgNumber(130, `A cube-shaped gift box has side length ${side} cm. Ignoring overlaps, how many square centimetres of wrapping paper are needed to cover all six faces?`, paper, 'cm²');
    }

    // Practice 14 — Measurement Applications
    case 131: {
      const l = randInt(8, 20), w = randInt(5, 12), gate = pick([1, 2, 3]);
      return mgNumber(131, `A rectangular garden is ${l} m by ${w} m. A gate ${gate} m wide needs no fence. How many metres of fencing are required?`, 2 * (l + w) - gate, 'm');
    }
    case 132: {
      const l = randInt(10, 30), w = randInt(6, 18), pieces = randInt(2, 5);
      return mgNumber(132, `A rectangular noticeboard is ${l} cm by ${w} cm. Ribbon goes once around the edge of ${pieces} identical boards. How many centimetres of ribbon are needed?`, pieces * 2 * (l + w), 'cm');
    }
    case 133: {
      const l = randInt(5, 12), w = randInt(4, 10), cost = pick([3, 4, 5, 6]);
      return mgNumber(133, `A room is ${l} m by ${w} m. Flooring costs $${cost} per square metre. Find the flooring cost.`, l * w * cost, '$');
    }
    case 134: {
      const wallW = randInt(5, 12), wallH = randInt(2, 4), doorW = 1, doorH = 2;
      const paintArea = wallW * wallH - doorW * doorH;
      if (state.level === 'challenge') {
        const coverage = mgPickNonDivisor(paintArea, [3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(134);
        return mgNumber(134, `A wall is ${wallW} m by ${wallH} m. A ${doorW} m by ${doorH} m door is not painted. Each 1-litre tin covers ${coverage} m². Only whole tins can be bought. How many tins are needed?`, Math.ceil(paintArea / coverage), 'tins');
      }
      const coverage = mgPickUsefulDivisor(paintArea, [2, 3, 4, 5, 6]);
      if (!coverage) return generateMeasurementGeometryPoint(134);
      return mgNumber(134, `A wall is ${wallW} m by ${wallH} m. A ${doorW} m by ${doorH} m door is not painted. One litre of paint covers ${coverage} m². How many litres are needed?`, paintArea / coverage, 'L');
    }
    case 135: {
      const l = randInt(4, 10), w = randInt(3, 8), h = randInt(2, 6);
      return mgNumber(135, `A rectangular tank measures ${l} dm by ${w} dm by ${h} dm. Since 1 dm³ = 1 L, how many litres can it hold?`, l * w * h, 'L');
    }
    case 136: {
      const boxL = randInt(2, 5), boxW = randInt(2, 4), boxH = randInt(2, 4), crateL = boxL * randInt(2, 4), crateW = boxW * randInt(2, 4), crateH = boxH * randInt(2, 4);
      return mgNumber(136, `Small boxes measure ${boxL} cm × ${boxW} cm × ${boxH} cm. A crate measures ${crateL} cm × ${crateW} cm × ${crateH} cm, and the boxes fit exactly with no gaps. How many small boxes fit in the crate?`, (crateL / boxL) * (crateW / boxW) * (crateH / boxH), 'boxes');
    }
    case 137: {
      const l = randInt(5, 12), w = randInt(3, 8), h = randInt(2, 6);
      const material = l * w + 2 * l * h + 2 * w * h;
      return mgNumber(137, `An open-top storage box is ${l} cm long, ${w} cm wide and ${h} cm high. How many square centimetres of material are needed for its base and four sides?`, material, 'cm²');
    }
    case 138: {
      const mode = pick(['length', 'area', 'volume']);
      if (mode === 'length') {
        const metres = randInt(10, 40), cost = pick([2, 3, 4, 5]);
        return mgNumber(138, `Rope costs $${cost} per metre. What is the cost of ${metres} m of rope?`, metres * cost, '$');
      }
      if (mode === 'area') {
        const l = randInt(4, 10), w = randInt(3, 8), cost = pick([2, 3, 4, 5]);
        return mgNumber(138, `Flooring costs $${cost} per square metre. What is the cost for a ${l} m by ${w} m floor?`, l * w * cost, '$');
      }
      const l = randInt(2, 5), w = randInt(2, 4), h = randInt(1, 3), cost = pick([2, 3, 4]);
      const volume = l * w * h;
      return mgNumber(138, `Soil costs $${cost} per cubic metre. A rectangular garden bed is ${l} m long, ${w} m wide and ${h} m deep. What is the cost of the soil needed to fill it?`, volume * cost, '$');
    }
    case 139:
      return mgChoiceOptions(139, 'A builder wants to know how much concrete fills a rectangular mould. Which measurement is needed?', ['length', 'area', 'volume'], 2);
    case 140: {
      const l = randInt(8, 16), w = randInt(6, 12), path = 1, cost = pick([2, 3, 4, 5]);
      const pathArea = l * w - (l - 2 * path) * (w - 2 * path);
      return mgNumber(140, `A ${l} m by ${w} m rectangular garden has a 1 m wide path inside all four edges. Paving the path costs $${cost} per square metre. Find the total paving cost.`, pathArea * cost, '$');
    }

    // Practice 15 — Multi-Step Reasoning
    case 141: {
      const firstSection = randInt(4, mgLevel(8, 11, 14));
      const secondSection = randInt(3, mgLevel(7, 10, 13));
      const width = randInt(3, mgLevel(8, 10, 12));
      const fullLength = firstSection + secondSection;
      return mgNumber(141, `The full length of a rectangle is not labelled directly. One long edge is split into adjacent sections of ${firstSection} cm and ${secondSection} cm. The width is ${width} cm. First find the full length, then find the rectangle's perimeter.`, 2 * (fullLength + width), 'cm');
    }
    case 142: {
      const totalL = randInt(10, 20), known = randInt(3, totalL - 3), width = randInt(4, 10), missing = totalL - known;
      return mgNumber(142, `A rectangular floor is ${totalL} m long and ${width} m wide. A ${known} m long section uses one type of flooring. Find the area of the remaining section.`, missing * width, 'm²');
    }
    case 143: {
      const l = randInt(6, 15), w = randInt(4, Math.min(10, l)), perimeter = 2 * (l + w), area = l * w;
      return mgNumber(143, `A rectangle has perimeter ${perimeter} cm and width ${w} cm. First find its length, then find its area. What is the area?`, area, 'cm²');
    }
    case 144: {
      const l1 = randInt(7, 14), w1 = randInt(3, 7), halfP = l1 + w1;
      const w2 = randInt(2, halfP - 2), l2 = halfP - w2;
      const a1 = l1 * w1, a2 = l2 * w2;
      if (a1 === a2) return generateMeasurementGeometryPoint(144);
      return mgChoice(144, `Rectangle 1 is ${l1} cm by ${w1} cm. Rectangle 2 is ${l2} cm by ${w2} cm. They have the same perimeter. Which has the greater area?<br><strong>1.</strong> Rectangle 1 &nbsp;&nbsp; <strong>2.</strong> Rectangle 2`, a1 > a2 ? 1 : 2);
    }
    case 145: {
      const area = pick([24, 36, 48, 60, 72]);
      const pairs = [];
      for (let w = 2; w <= Math.sqrt(area); w++) if (area % w === 0) pairs.push([area / w, w]);
      if (pairs.length < 2) return generateMeasurementGeometryPoint(145);
      const a = pairs[0], b = pairs[pairs.length - 1];
      const pa = 2 * (a[0] + a[1]), pb = 2 * (b[0] + b[1]);
      return mgChoiceOptions(145, `Two rectangles have the same area of ${area} cm². Which has the smaller perimeter?`, [`${a[0]} cm by ${a[1]} cm`, `${b[0]} cm by ${b[1]} cm`], pa < pb ? 0 : 1);
    }
    case 146: {
      const w = randInt(3, 10), diff = randInt(2, 6), l = w + diff, area = l * w;
      return mgNumber(146, `A rectangle has area ${area} cm². Its length is ${diff} cm longer than its width. Find the width.`, w, 'cm');
    }
    case 147: {
      const w = randInt(3, 10), diff = randInt(2, 7), l = w + diff, p = 2 * (l + w);
      return mgNumber(147, `A rectangle has perimeter ${p} cm. Its length is ${diff} cm longer than its width. Find the length.`, l, 'cm');
    }
    case 148: {
      const lM = randInt(2, 6), wCm = pick([100, 150, 200, 250]), wM = wCm / 100;
      return mgNumber(148, `A rectangular mat is ${lM} m long and ${wCm} cm wide. Find its area in square metres.`, mgRound(lM * wM), 'm²');
    }
    case 149: {
      const area = pick([36, 48, 60, 72, 80]);
      const pairs = [];
      for (let w = 2; w <= area / 2; w++) if (area % w === 0 && area / w >= w) pairs.push([area / w, w]);
      if (pairs.length < 2) return generateMeasurementGeometryPoint(149);
      const a = pairs[0], b = pairs[pairs.length - 1];
      const pA = 2 * (a[0] + a[1]), pB = 2 * (b[0] + b[1]);
      return mgChoiceOptions(149, `Two rectangular floor plans have the same area of ${area} m². Which plan needs less skirting around its edge?`, [`${a[0]} m by ${a[1]} m`, `${b[0]} m by ${b[1]} m`], pA < pB ? 0 : 1);
    }
    case 150: {
      const outerL = randInt(12, 20), outerW = randInt(9, 15), path = 1;
      const grassL = outerL - 2 * path, grassW = outerW - 2 * path;
      const grassArea = grassL * grassW;
      if (state.level === 'challenge') {
        const coverage = mgPickNonDivisor(grassArea, [3, 4, 5, 6]);
        if (!coverage) return generateMeasurementGeometryPoint(150);
        return mgNumber(150, `A rectangular garden is ${outerL} m by ${outerW} m. A 1 m wide path runs inside all four edges. Each bag of grass seed covers ${coverage} m². Only whole bags can be bought. How many bags must be bought for the grass area?`, Math.ceil(grassArea / coverage), 'bags');
      }
      const coverage = mgPickUsefulDivisor(grassArea, [2, 3, 4, 5, 6]);
      if (!coverage) return generateMeasurementGeometryPoint(150);
      return mgNumber(150, `A rectangular garden is ${outerL} m by ${outerW} m. A 1 m wide path runs inside all four edges. Grass seed is sold in bags that each cover ${coverage} m². How many bags are needed for the grass area?`, grassArea / coverage, 'bags');
    }

    default:
      throw new Error(`No measurement and geometry generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.measurementGeometry = {};
for (const group of TOPIC_CONFIGS.measurementGeometry.groups) {
  TOPIC_BANKS.measurementGeometry[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.measurementGeometry[group.id][point.id] = () => generateMeasurementGeometryPoint(pointNumber);
  }
}
