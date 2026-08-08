'use strict';

const STATISTICS_LABELS = [
  'Read a Value from a Data Table',
  'Identify the Highest Value in a Table',
  'Identify the Lowest Value in a Table',
  'Find the Difference between Two Table Values',
  'Find the Total of a Table Column',
  'Compare Two Categories in a Table',
  'Find a Combined Total from Selected Table Entries',
  'Find a Missing Table Value from a Known Total',
  'Count Entries That Meet a Condition',
  'Solve a Multi-Step Data-Table Problem',

  'Read a Frequency from a Frequency Table',
  'Find the Total Frequency',
  'Identify the Most Frequent Value',
  'Identify the Least Frequent Value',
  'Find the Number of Observations above or below a Value',
  'Find a Total from Values and Frequencies',
  'Find the Mean from a Frequency Table',
  'Find a Missing Frequency from a Known Total',
  'Compare Frequencies',
  'Find the Median from a Frequency Table',

  'Count How Often a Value Appears in Raw Data',
  'Find a Value at a Given Position after Ordering Data',
  'Find the Maximum and Minimum of Raw Data',
  'Find the Range of Raw Data',
  'Compare Frequencies in Raw Data',
  'Count Values above a Given Number',
  'Count Values below a Given Number',
  'Find a Missing Raw-Data Value from a Total',
  'Identify Repeated Values in Raw Data',
  'Reason about Raw Data after a Change',

  'Understand the Meaning of Mean',
  'Find the Mean of Three Values',
  'Find the Mean of Four Values',
  'Find the Mean of Five or More Values',
  'Find the Mean from a Total and a Count',
  'Find the Total from a Mean and a Count',
  'Find a New Mean after Adding a Value',
  'Find a Mean in a Real-Life Context',
  'Compare a Mean with the Original Data',
  'Solve a Multi-Step Mean Problem',

  'Find a Missing Value from the Mean of Three Values',
  'Find a Missing Value from the Mean of Four Values',
  'Find a Missing Test Score from a Mean',
  'Find a Missing Age from a Mean',
  'Find an Added Value from an Old and New Mean',
  'Find a Removed Value from an Old and New Mean',
  'Correct a Mean after Fixing a Data Error',
  'Find Two Equal Missing Values from a Mean',
  'Find a Missing Group Value from an Overall Mean',
  'Solve a Multi-Step Missing-Mean Problem',

  'Understand the Meaning of Median',
  'Find the Median of an Odd Number of Ordered Values',
  'Find the Median of Unordered Data',
  'Find the Median of an Even Number of Values',
  'Find the Median of Even Unordered Data',
  'Find the Median when Values Repeat',
  'Find a Missing Middle Value from a Given Median',
  'Find the New Median after Adding a Value',
  'Compare the Medians of Two Data Sets',
  'Solve a Median Problem in Context',

  'Understand the Meaning of Mode',
  'Find One Mode',
  'Recognise When There Is No Mode',
  'Recognise Two Modes',
  'Find the Mode from a Frequency Table',
  'Choose a Value to Create a Given Mode',
  'Find the Mode after Adding a Value',
  'Find the Mode after Removing a Value',
  'Compare Modal Frequencies',
  'Solve a Mode Problem in Context',

  'Understand the Meaning of Range',
  'Find the Range of Ordered Data',
  'Find the Range of Unordered Data',
  'Find a Missing Maximum from the Range',
  'Find a Missing Minimum from the Range',
  'Find the New Range after Adding a Larger Value',
  'Recognise When Adding a Value Does Not Change the Range',
  'Compare the Ranges of Two Data Sets',
  'Choose a Value to Produce a Given Range',
  'Solve a Range Problem in Context',

  'Find the Mean in a Mixed Statistics Question',
  'Find the Median in a Mixed Statistics Question',
  'Find the Mode in a Mixed Statistics Question',
  'Find the Range in a Mixed Statistics Question',
  'Identify a Statistic from Its Value',
  'Compare the Mean and Median of One Data Set',
  'Choose the Correct Statistic for a Description',
  'Use a Frequency Table to Find a Statistic',
  'Analyse the Effect of an Outlier on Mean and Median',
  'Choose a Correct Statement about a Data Set',

  'Compare Two Data Sets by Mean',
  'Compare Two Data Sets by Median',
  'Compare Two Data Sets by Mode',
  'Compare Two Data Sets by Range',
  'Compare Two Groups Using Mean and Range',
  'Decide Which Group Is More Consistent',
  'Compare Data Sets with the Same Mean',
  'Compare Data Sets with the Same Range',
  'Compare Two Frequency Tables',
  'Solve a Multi-Step Data-Set Comparison',

  'Find the Original Mean after Every Value Increases',
  'Find the Original Mean after Every Value Decreases',
  'Find a Removed Value from Two Means',
  'Find an Added Value from Two Means',
  'Correct a Mean after One Value Was Recorded Incorrectly',
  'Find the Effect of Increasing One Data Value',
  'Find the Effect of Replacing One Data Value',
  'Find a Missing Frequency from the Total Frequency',
  'Find a Missing Frequency from a Given Mean',
  'Solve a Multi-Step Corrected-Data Problem',

  'Use Mean and Total in Two Steps',
  'Use a Frequency Table in a Multi-Step Mean Problem',
  'Find a Median after Removing a Value',
  'Use Mode and Range Together',
  'Analyse the Effect of Adding a New Extreme Value',
  'Find a Combined Mean for Two Groups',
  'Find Several Missing Contributions from an Overall Mean',
  'Choose the Most Useful Statistic for a Situation',
  'Identify Unnecessary Information in a Statistics Problem',
  'Solve a Multi-Condition Statistics Problem'
];

function statisticsPoints(start, end) {
  return STATISTICS_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `stat${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.statistics = {
  title: 'Data & Statistics',
  pageTitle: 'Knowledge Practice — Data Handling and Statistics',
  knowledgeMapTitle: 'Data Handling and Statistics Practice Structure',
  intro: 'The 120 detailed knowledge points develop statistical reasoning through data tables, frequency tables, raw data, mean, median, mode, range, comparisons and multi-step problems.',
  teacherNote: 'This version is deliberately graph-free. Questions use written data, small tables and frequency tables so students can focus on organising, calculating and interpreting data. It includes median from frequency tables, changed-data reasoning and the effect of extreme values. Generated means are normally whole numbers and answers are unique.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'readingTables', practiceNumber: 1, label: 'Reading Data Tables', description: 'Read, compare, total and infer values from small data tables.', knowledgePoints: statisticsPoints(1, 10) },
    { id: 'frequencyTables', practiceNumber: 2, label: 'Frequency Tables', description: 'Read frequencies and use frequency tables to calculate totals and simple statistics.', knowledgePoints: statisticsPoints(11, 20) },
    { id: 'rawData', practiceNumber: 3, label: 'Organising Raw Data', description: 'Count, order and summarise information given as unsorted raw data.', knowledgePoints: statisticsPoints(21, 30) },
    { id: 'mean', practiceNumber: 4, label: 'Mean', description: 'Understand and calculate the arithmetic mean using friendly integer data.', knowledgePoints: statisticsPoints(31, 40) },
    { id: 'missingMean', practiceNumber: 5, label: 'Missing Values from the Mean', description: 'Work backwards from a mean or changed mean to recover missing values.', knowledgePoints: statisticsPoints(41, 50) },
    { id: 'median', practiceNumber: 6, label: 'Median', description: 'Order data and identify the middle value or middle pair.', knowledgePoints: statisticsPoints(51, 60) },
    { id: 'mode', practiceNumber: 7, label: 'Mode', description: 'Identify one mode, no mode, two modes and changes to the mode.', knowledgePoints: statisticsPoints(61, 70) },
    { id: 'range', practiceNumber: 8, label: 'Range', description: 'Use the highest and lowest values to calculate and reason about spread.', knowledgePoints: statisticsPoints(71, 80) },
    { id: 'mixedStatistics', practiceNumber: 9, label: 'Mean, Median, Mode and Range', description: 'Distinguish and combine the four core statistics.', knowledgePoints: statisticsPoints(81, 90) },
    { id: 'compareDataSets', practiceNumber: 10, label: 'Comparing Data Sets', description: 'Compare centre and spread to make sensible statements about two groups.', knowledgePoints: statisticsPoints(91, 100) },
    { id: 'changedData', practiceNumber: 11, label: 'Missing and Changed Data', description: 'Recover missing, added, removed or incorrectly recorded values.', knowledgePoints: statisticsPoints(101, 110) },
    { id: 'multiStepStatistics', practiceNumber: 12, label: 'Multi-Step Statistical Reasoning', description: 'Combine totals, averages, frequencies and other statistics in non-routine problems.', knowledgePoints: statisticsPoints(111, 120) }
  ]
};

function statLevel(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'core' ? core : challenge;
}

function statQuestion(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `stat${String(point).padStart(3, '0')}`,
    subtopic: STATISTICS_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function statNumber(point, text, answer, extra = {}) {
  return statQuestion(point, text, answer, { ...extra, answerType: 'rational' });
}

function statChoice(point, prompt, options, correctIndex, hint = '') {
  const entries = options.map((text, index) => ({ text, correct: index === correctIndex }));
  for (let i = entries.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  const answer = entries.findIndex(item => item.correct) + 1;
  const optionsHtml = entries.map((item, index) => `<strong>${index + 1}.</strong> ${item.text}`).join('&nbsp;&nbsp;&nbsp;');
  return statNumber(point, `${prompt}<br>${optionsHtml}<br><strong>Enter 1, 2 or 3.</strong>`, answer, { hint });
}

function statTable(headers, rows) {
  const cell = 'style="border:1px solid #cbd5e1;padding:5px 10px;text-align:center;"';
  const head = headers.map(h => `<th ${cell}>${h}</th>`).join('');
  const body = rows.map(row => `<tr>${row.map(v => `<td ${cell}>${v}</td>`).join('')}</tr>`).join('');
  return `<table style="border-collapse:collapse;margin:10px auto;min-width:260px;"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function statList(values) {
  return values.join(', ');
}

function statSum(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

function statMean(values) {
  return statSum(values) / values.length;
}

function statMedian(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  return n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
}

function statModes(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  const max = Math.max(...counts.values());
  if (max <= 1) return [];
  return [...counts.entries()].filter(([, count]) => count === max).map(([value]) => value).sort((a, b) => a - b);
}

function statRange(values) {
  return Math.max(...values) - Math.min(...values);
}

function statShuffle(values) {
  const out = [...values];
  for (let i = out.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function statBalancedData(count, mean = null) {
  const targetMean = mean ?? randInt(statLevel(6, 8, 10), statLevel(15, 20, 28));
  const maxDelta = Math.max(1, Math.min(statLevel(4, 6, 9), targetMean - 1));
  const values = [];
  if (count % 2 === 1) values.push(targetMean);
  while (values.length < count) {
    const d = randInt(1, maxDelta);
    values.push(targetMean - d, targetMean + d);
  }
  return statShuffle(values.slice(0, count));
}

function statUniqueValues(count, min = 2, max = 20) {
  const set = new Set();
  while (set.size < count) set.add(randInt(min, max));
  return [...set];
}

function statCategories(count = 4) {
  return statShuffle(['Ava', 'Ben', 'Chloe', 'Daniel', 'Ella', 'Finn', 'Grace', 'Hugo']).slice(0, count);
}

function statSimpleTable(count = null) {
  const n = count ?? statLevel(4, 5, 6);
  const names = statCategories(n);
  const contexts = [
    { heading: 'Score', question: name => `What score did ${name} get?`, range: [3, statLevel(16, 24, 35)] },
    { heading: 'Books Read', question: name => `How many books did ${name} read?`, range: [2, statLevel(12, 20, 28)] },
    { heading: 'Laps', question: name => `How many laps did ${name} complete?`, range: [3, statLevel(14, 22, 30)] },
    { heading: 'Points', question: name => `How many points did ${name} score?`, range: [4, statLevel(18, 28, 40)] },
    { heading: 'Items Sold', question: name => `How many items did ${name} sell?`, range: [2, statLevel(15, 24, 36)] }
  ];
  const context = pick(contexts);
  const values = names.map(() => randInt(context.range[0], context.range[1]));
  return {
    names,
    values,
    context,
    html: statTable(['Student', context.heading], names.map((name, i) => [name, values[i]]))
  };
}

function statFrequencyData() {
  const valueCount = statLevel(4, 5, 6);
  const step = pick(state.level === 'foundation' ? [1, 2] : state.level === 'core' ? [1, 2, 5] : [2, 3, 5]);
  const start = randInt(1, step === 5 ? 5 : 8);
  const values = Array.from({ length: valueCount }, (_, i) => start + i * step);
  const freqs = values.map(() => randInt(1, statLevel(5, 7, 9)));
  return { values, freqs, html: statTable(['Value', 'Frequency'], values.map((value, i) => [value, freqs[i]])) };
}

function statFrequencyWithIntegerMean() {
  for (let attempt = 0; attempt < 500; attempt++) {
    const data = statFrequencyData();
    const totalFreq = statSum(data.freqs);
    const total = data.values.reduce((sum, value, i) => sum + value * data.freqs[i], 0);
    if (total % totalFreq === 0) return { ...data, totalFreq, total, mean: total / totalFreq };
  }
  const values = [2, 4, 6];
  const freqs = [2, 4, 2];
  return { values, freqs, html: statTable(['Value', 'Frequency'], values.map((value, i) => [value, freqs[i]])), totalFreq: 8, total: 32, mean: 4 };
}


function statExpandFrequency(values, freqs) {
  const out = [];
  values.forEach((value, i) => {
    for (let k = 0; k < freqs[i]; k++) out.push(value);
  });
  return out;
}

function statFrequencyWithIntegerMedian() {
  for (let attempt = 0; attempt < 800; attempt++) {
    const data = statFrequencyData();
    const expanded = statExpandFrequency(data.values, data.freqs);
    const median = statMedian(expanded);
    if (Number.isInteger(median)) return { ...data, expanded, median };
  }
  const values = [2, 3, 4, 5];
  const freqs = [2, 3, 4, 2];
  return {
    values,
    freqs,
    html: statTable(['Value', 'Frequency'], values.map((value, i) => [value, freqs[i]])),
    expanded: statExpandFrequency(values, freqs),
    median: 4
  };
}

function statRandomIntegerMeanData(count, min = 2, max = 28, requireDifferentMeanMedian = false) {
  for (let attempt = 0; attempt < 2000; attempt++) {
    const values = Array.from({ length: count }, () => randInt(min, max));
    const total = statSum(values);
    if (total % count !== 0) continue;
    const mean = total / count;
    const median = statMedian(values);
    const above = values.filter(v => v > mean).length;
    if (!Number.isInteger(median) || above < 1 || above >= count) continue;
    if (requireDifferentMeanMedian && mean === median) continue;
    return { values, mean, median, above };
  }
  const fallback = count === 5
    ? [2, 4, 5, 6, 13]
    : count === 7
      ? [2, 5, 6, 7, 8, 9, 19]
      : Array.from({ length: count }, (_, i) => 4 + i);
  const total = statSum(fallback);
  return { values: fallback, mean: total / fallback.length, median: statMedian(fallback), above: fallback.filter(v => v > total / fallback.length).length };
}

function statUniqueModeWithVariableGap() {
  for (let attempt = 0; attempt < 500; attempt++) {
    const pool = statUniqueValues(statLevel(5, 6, 7), 2, 24);
    const mode = pool[0];
    const other = pool[1];
    const modeFreq = randInt(statLevel(3, 3, 4), statLevel(4, 5, 6));
    const otherFreq = randInt(1, modeFreq - 1);
    const extras = pool.slice(2).filter(v => v !== mode && v !== other);
    const values = Array(modeFreq).fill(mode)
      .concat(Array(otherFreq).fill(other))
      .concat(extras.slice(0, statLevel(2, 3, 4)));
    if (statModes(values).length === 1 && statModes(values)[0] === mode) {
      return { values: statShuffle(values), mode, other, modeFreq, otherFreq, difference: modeFreq - otherFreq };
    }
  }
  return { values: [4,4,4,4,7,7,9], mode:4, other:7, modeFreq:4, otherFreq:2, difference:2 };
}

function statModeSet(kind = 'one') {
  if (kind === 'none') {
    return statShuffle(statUniqueValues(statLevel(5, 6, 7), 2, 20));
  }
  if (kind === 'two') {
    const [a, b, ...rest] = statUniqueValues(statLevel(5, 6, 7), 2, 18);
    const values = [a, a, b, b, ...rest.slice(0, statLevel(1, 2, 3))];
    return statShuffle(values);
  }
  const [mode, ...rest] = statUniqueValues(statLevel(5, 6, 7), 2, 20);
  const repeats = statLevel(3, 3, 4);
  const values = Array(repeats).fill(mode).concat(rest.slice(0, statLevel(3, 4, 5)));
  return statShuffle(values);
}

function statDatasetPairSameMean() {
  const mean = randInt(8, 18);
  const d1 = randInt(1, 3);
  const d2 = randInt(d1 + 2, d1 + 6);
  return {
    a: [mean - d1, mean, mean + d1],
    b: [mean - d2, mean, mean + d2],
    mean
  };
}

function statFindIntegerWeightedUnknown() {
  const valueCount = statLevel(2, 3, 4);
  for (let attempt = 0; attempt < 3000; attempt++) {
    const step = pick(valueCount === 2 ? [2, 3, 4] : [1, 2, 3, 5]);
    const start = randInt(1, 6);
    const values = Array.from({ length: valueCount }, (_, i) => start + i * step);
    const missingIndex = randInt(0, valueCount - 1);
    const freqs = values.map(() => randInt(1, statLevel(5, 7, 9)));
    const missing = freqs[missingIndex];
    const total = values.reduce((sum, value, i) => sum + value * freqs[i], 0);
    const count = statSum(freqs);
    if (total % count !== 0) continue;
    const mean = total / count;
    if (values[missingIndex] === mean) continue;
    const rows = values.map((value, i) => [value, i === missingIndex ? '?' : freqs[i]]);
    return { values, freqs, missingIndex, missing, mean, rows };
  }
  const values = [2, 4, 6];
  const freqs = [2, 4, 2];
  return { values, freqs, missingIndex: 1, missing: 4, mean: 4, rows: [[2, 2], [4, '?'], [6, 2]] };
}

function generateStatisticsPoint(point) {
  switch (point) {
    // Practice 1 — Reading Data Tables
    case 1: {
      const { names, values, html, context } = statSimpleTable();
      const i = randInt(0, names.length - 1);
      return statNumber(1, `${html}${context.question(names[i])}`, values[i]);
    }
    case 2: {
      const { names, values, html } = statSimpleTable();
      const max = Math.max(...values);
      const tied = values.filter(v => v === max).length > 1;
      if (tied) return generateStatisticsPoint(2);
      return statNumber(2, `${html}What is the highest value in the table?`, max);
    }
    case 3: {
      const { values, html } = statSimpleTable();
      const min = Math.min(...values);
      if (values.filter(v => v === min).length > 1) return generateStatisticsPoint(3);
      return statNumber(3, `${html}What is the lowest value in the table?`, min);
    }
    case 4: {
      const { names, values, html } = statSimpleTable();
      const pairs = [];
      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          if (values[i] !== values[j]) pairs.push([i, j]);
        }
      }
      if (!pairs.length) return generateStatisticsPoint(4);
      const [i, j] = pick(pairs);
      return statNumber(4, `${html}What is the difference between the values for ${names[i]} and ${names[j]}?`, Math.abs(values[i] - values[j]));
    }
    case 5: {
      const { values, html } = statSimpleTable();
      return statNumber(5, `${html}Find the total of all the values in the table.`, statSum(values));
    }
    case 6: {
      const { names, values, html } = statSimpleTable();
      const [i, j] = statShuffle([...values.keys()]).slice(0, 2);
      if (values[i] === values[j]) return generateStatisticsPoint(6);
      const greater = values[i] > values[j] ? names[i] : names[j];
      return statChoice(6, `${html}Who has the greater value?`, [names[i], names[j], 'They are equal'], values[i] > values[j] ? 0 : 1);
    }
    case 7: {
      const { names, values, html } = statSimpleTable();
      const indices = statShuffle([...values.keys()]).slice(0, statLevel(2, 3, 3));
      const total = indices.reduce((sum, i) => sum + values[i], 0);
      return statNumber(7, `${html}Find the combined total for ${indices.map(i => names[i]).join(', ')}.`, total);
    }
    case 8: {
      const names = statCategories(4);
      const values = names.map(() => randInt(5, 20));
      const missingIndex = randInt(0, 3);
      const total = statSum(values);
      const rows = names.map((name, i) => [name, i === missingIndex ? '?' : values[i]]);
      return statNumber(8, `${statTable(['Student', 'Score'], rows)}The total score is ${total}. Find ${names[missingIndex]}'s score.`, values[missingIndex]);
    }
    case 9: {
      const { values, html } = statSimpleTable(statLevel(5, 6, 7));
      const sorted = [...new Set(values)].sort((a, b) => a - b);
      if (sorted.length < 2) return generateStatisticsPoint(9);
      const threshold = pick(sorted.slice(0, -1));
      const count = values.filter(v => v > threshold).length;
      if (count <= 0 || count >= values.length) return generateStatisticsPoint(9);
      return statNumber(9, `${html}How many students have a value greater than ${threshold}?`, count);
    }
    case 10: {
      const { values, html } = statSimpleTable(statLevel(4, 5, 6));
      const max = Math.max(...values), min = Math.min(...values);
      if (values.filter(v => v === min).length !== 1 || max - min < 3) return generateStatisticsPoint(10);
      const bonus = randInt(1, Math.min(statLevel(2, 3, 5), max - min - 1));
      return statNumber(10, `${html}The student with the lowest value receives a bonus of ${bonus}. What is the difference between the highest value and that student's adjusted value?`, max - (min + bonus));
    }

    // Practice 2 — Frequency Tables
    case 11: {
      const { values, freqs, html } = statFrequencyData();
      const i = randInt(0, values.length - 1);
      return statNumber(11, `${html}How many times does the value ${values[i]} occur?`, freqs[i]);
    }
    case 12: {
      const { freqs, html } = statFrequencyData();
      return statNumber(12, `${html}How many observations are there altogether?`, statSum(freqs));
    }
    case 13: {
      const data = statFrequencyData();
      const max = Math.max(...data.freqs);
      if (data.freqs.filter(f => f === max).length !== 1) return generateStatisticsPoint(13);
      return statNumber(13, `${data.html}Which value occurs most often?`, data.values[data.freqs.indexOf(max)]);
    }
    case 14: {
      const data = statFrequencyData();
      const min = Math.min(...data.freqs);
      if (data.freqs.filter(f => f === min).length !== 1) return generateStatisticsPoint(14);
      return statNumber(14, `${data.html}Which value occurs least often?`, data.values[data.freqs.indexOf(min)]);
    }
    case 15: {
      const { values, freqs, html } = statFrequencyData();
      const threshold = values[randInt(0, values.length - 2)];
      const answer = values.reduce((sum, value, i) => sum + (value > threshold ? freqs[i] : 0), 0);
      return statNumber(15, `${html}How many observations are greater than ${threshold}?`, answer);
    }
    case 16: {
      const { values, freqs, html } = statFrequencyData();
      const total = values.reduce((sum, value, i) => sum + value * freqs[i], 0);
      return statNumber(16, `${html}Find the total of all the data values. Remember that each value is repeated according to its frequency.`, total);
    }
    case 17: {
      const data = statFrequencyWithIntegerMean();
      return statNumber(17, `${data.html}Find the mean of the data.`, data.mean);
    }
    case 18: {
      const values = [1, 2, 3, 4];
      const freqs = values.map(() => randInt(1, 7));
      const missingIndex = randInt(0, 3), total = statSum(freqs);
      const rows = values.map((value, i) => [value, i === missingIndex ? '?' : freqs[i]]);
      return statNumber(18, `${statTable(['Value', 'Frequency'], rows)}There are ${total} observations altogether. Find the missing frequency.`, freqs[missingIndex]);
    }
    case 19: {
      const data = statFrequencyData();
      const [i, j] = statShuffle([...data.values.keys()]).slice(0, 2);
      if (data.freqs[i] === data.freqs[j]) return generateStatisticsPoint(19);
      const diff = Math.abs(data.freqs[i] - data.freqs[j]);
      return statNumber(19, `${data.html}How many more times does the more frequent of ${data.values[i]} and ${data.values[j]} occur?`, diff);
    }
    case 20: {
      const data = statFrequencyWithIntegerMedian();
      return statNumber(20, `${data.html}Find the median of the data represented by the frequency table.`, data.median, {
        hint: 'Use the frequencies to locate the middle observation(s).'
      });
    }

    // Practice 3 — Organising Raw Data
    case 21: {
      const base = statModeSet('one');
      const target = pick(base);
      return statNumber(21, `Raw data: <strong>${statList(base)}</strong><br>How many times does ${target} appear?`, base.filter(v => v === target).length);
    }
    case 22: {
      const values = statUniqueValues(statLevel(5, 7, 9), 2, 30);
      const shuffled = statShuffle(values);
      const pos = randInt(2, values.length - 1);
      const sorted = [...values].sort((a, b) => a - b);
      return statNumber(22, `Raw data: <strong>${statList(shuffled)}</strong><br>Order the data from smallest to largest mentally. What is the ${pos}${pos === 2 ? 'nd' : pos === 3 ? 'rd' : 'th'} value?`, sorted[pos - 1]);
    }
    case 23: {
      const values = statUniqueValues(statLevel(5, 7, 9), 1, 30);
      return statNumber(23, `Raw data: <strong>${statList(statShuffle(values))}</strong><br>Identify the maximum and minimum values, then add them.`, Math.max(...values) + Math.min(...values));
    }
    case 24: {
      const values = Array.from({ length: statLevel(6, 8, 10) }, () => randInt(2, 30));
      return statNumber(24, `Raw data: <strong>${statList(values)}</strong><br>Find the range.`, statRange(values));
    }
    case 25: {
      const d = statUniqueModeWithVariableGap();
      return statNumber(25, `Raw data: <strong>${statList(d.values)}</strong><br>How many more times does ${d.mode} occur than ${d.other}?`, d.difference);
    }
    case 26: {
      const values = Array.from({ length: statLevel(7, 9, 11) }, () => randInt(1, 25));
      const sortedUnique = [...new Set(values)].sort((a, b) => a - b);
      if (sortedUnique.length < 2) return generateStatisticsPoint(26);
      const threshold = pick(sortedUnique.slice(0, -1));
      const answer = values.filter(v => v > threshold).length;
      if (answer <= 0 || answer >= values.length) return generateStatisticsPoint(26);
      return statNumber(26, `Raw data: <strong>${statList(values)}</strong><br>How many values are greater than ${threshold}?`, answer);
    }
    case 27: {
      const values = Array.from({ length: statLevel(7, 9, 11) }, () => randInt(1, 25));
      const sortedUnique = [...new Set(values)].sort((a, b) => a - b);
      if (sortedUnique.length < 2) return generateStatisticsPoint(27);
      const threshold = pick(sortedUnique.slice(1));
      const answer = values.filter(v => v < threshold).length;
      if (answer <= 0 || answer >= values.length) return generateStatisticsPoint(27);
      return statNumber(27, `Raw data: <strong>${statList(values)}</strong><br>How many values are less than ${threshold}?`, answer);
    }
    case 28: {
      const count = statLevel(5, 6, 8);
      const values = Array.from({ length: count }, () => randInt(3, 20));
      const missing = randInt(0, count - 1), total = statSum(values);
      const shown = values.map((v, i) => i === missing ? '?' : v);
      return statNumber(28, `The data are <strong>${statList(shown)}</strong>. Their total is ${total}. Find the missing value.`, values[missing]);
    }
    case 29: {
      const values = statModeSet('one');
      const mode = statModes(values)[0];
      return statNumber(29, `Raw data: <strong>${statList(values)}</strong><br>Which value appears most often?`, mode);
    }
    case 30: {
      const count = statLevel(6, 8, 10);
      const values = statUniqueValues(count, 2, 30).sort((a, b) => a - b);
      if (state.level === 'foundation') {
        const added = values[values.length - 1] + randInt(2, 7);
        return statNumber(30, `Raw data: <strong>${statList(statShuffle(values))}</strong>. A new value of ${added} is added. Find the new range.`, added - values[0]);
      }
      if (state.level === 'core') {
        const removed = values[0];
        const remaining = values.slice(1);
        return statNumber(30, `Raw data: <strong>${statList(statShuffle(values))}</strong>. The smallest value, ${removed}, is removed. Find the new range.`, statRange(remaining));
      }
      const oldMin = values[0], oldMax = values[values.length - 1];
      const replacement = values[1] + randInt(0, Math.max(1, values[2] - values[1]));
      const changed = values.slice(1).concat(replacement);
      return statNumber(30, `Raw data: <strong>${statList(statShuffle(values))}</strong>. The smallest value ${oldMin} is replaced by ${replacement}. By how much does the range decrease?`, (oldMax - oldMin) - statRange(changed));
    }

    // Practice 4 — Mean
    case 31:
      return statChoice(31, 'What does the mean of a data set represent?', ['The total divided by the number of values', 'The middle value after ordering', 'The most frequent value'], 0);
    case 32: {
      const values = statBalancedData(3);
      return statNumber(32, `Find the mean of <strong>${statList(values)}</strong>.`, statMean(values));
    }
    case 33: {
      const values = statBalancedData(4);
      return statNumber(33, `Find the mean of <strong>${statList(values)}</strong>.`, statMean(values));
    }
    case 34: {
      const count = statLevel(5, 6, 8);
      const values = statBalancedData(count);
      return statNumber(34, `Find the mean of <strong>${statList(values)}</strong>.`, statMean(values));
    }
    case 35: {
      const count = statLevel(4, 6, 8), mean = randInt(5, statLevel(15, 20, 30));
      return statNumber(35, `${count} values have a total of ${count * mean}. Find their mean.`, mean);
    }
    case 36: {
      const count = statLevel(4, 6, 8), mean = randInt(5, statLevel(15, 20, 30));
      return statNumber(36, `The mean of ${count} values is ${mean}. Find the total of the values.`, count * mean);
    }
    case 37: {
      const oldCount = statLevel(3, 4, 5), oldMean = randInt(6, 16), added = randInt(4, 22);
      const newTotal = oldCount * oldMean + added;
      if (newTotal % (oldCount + 1) !== 0) return generateStatisticsPoint(37);
      return statNumber(37, `${oldCount} values have a mean of ${oldMean}. A new value of ${added} is added. Find the new mean.`, newTotal / (oldCount + 1));
    }
    case 38: {
      const days = statLevel(3, 5, 7), mean = randInt(6, 18);
      const values = statBalancedData(days, mean);
      return statNumber(38, `A student read ${values.join(', ')} pages on ${days} different days. What was the mean number of pages read per day?`, mean);
    }
    case 39: {
      const d = statRandomIntegerMeanData(statLevel(5, 7, 9), 2, statLevel(20, 26, 34));
      return statNumber(39, `Data: <strong>${statList(statShuffle(d.values))}</strong><br>First find the mean. How many values are greater than the mean?`, d.above);
    }
    case 40: {
      const count = statLevel(4, 6, 8), mean = randInt(8, 20), increase = randInt(1, 5);
      const newTotal = count * mean + count * increase;
      return statNumber(40, `The mean of ${count} scores is ${mean}. Every score is increased by ${increase} points. What is the new mean?`, newTotal / count);
    }

    // Practice 5 — Missing Values from the Mean
    case 41: {
      const values = statBalancedData(3), missing = randInt(0, 2), mean = statMean(values);
      const shown = values.map((v, i) => i === missing ? '?' : v);
      return statNumber(41, `The mean of <strong>${statList(shown)}</strong> is ${mean}. Find the missing value.`, values[missing]);
    }
    case 42: {
      const values = statBalancedData(4), missing = randInt(0, 3), mean = statMean(values);
      const shown = values.map((v, i) => i === missing ? '?' : v);
      return statNumber(42, `The mean of <strong>${statList(shown)}</strong> is ${mean}. Find the missing value.`, values[missing]);
    }
    case 43: {
      const values = statBalancedData(statLevel(4, 5, 6), randInt(10, 20));
      const missing = values.length - 1, mean = statMean(values);
      return statNumber(43, `A student's test scores are ${statList(values.slice(0, -1))} and one missing score. The mean is ${mean}. Find the missing score.`, values[missing]);
    }
    case 44: {
      const count = statLevel(3, 4, 5), mean = randInt(9, 15);
      const values = statBalancedData(count, mean).map(v => Math.max(5, v));
      const targetTotal = mean * count;
      const current = statSum(values);
      values[values.length - 1] += targetTotal - current;
      if (values.some(v => v < 4 || v > 19)) return generateStatisticsPoint(44);
      const missing = randInt(0, count - 1);
      return statNumber(44, `The mean age of ${count} children is ${mean}. Their ages are ${statList(values.map((v, i) => i === missing ? '?' : v))}. Find the missing age.`, values[missing]);
    }
    case 45: {
      const oldCount = statLevel(3, 4, 5), oldMean = randInt(7, 16), added = randInt(5, 24);
      const newTotal = oldCount * oldMean + added;
      if (newTotal % (oldCount + 1) !== 0) return generateStatisticsPoint(45);
      const newMean = newTotal / (oldCount + 1);
      return statNumber(45, `${oldCount} values have a mean of ${oldMean}. One value is added and the new mean becomes ${newMean}. Find the added value.`, added);
    }
    case 46: {
      const oldCount = statLevel(5, 6, 7), oldMean = randInt(8, 18), removed = randInt(4, 24);
      const remainingTotal = oldCount * oldMean - removed;
      if (remainingTotal <= 0 || remainingTotal % (oldCount - 1) !== 0) return generateStatisticsPoint(46);
      const newMean = remainingTotal / (oldCount - 1);
      return statNumber(46, `${oldCount} values have a mean of ${oldMean}. One value is removed and the remaining ${oldCount - 1} values have a mean of ${newMean}. What value was removed?`, removed);
    }
    case 47: {
      const count = statLevel(4, 5, 6), trueMean = randInt(8, 18), wrong = randInt(4, 18), correct = wrong + randInt(2, 8);
      const wrongTotal = count * trueMean - correct + wrong;
      if (wrongTotal % count !== 0) return generateStatisticsPoint(47);
      const wrongMean = wrongTotal / count;
      return statNumber(47, `The mean was calculated as ${wrongMean} for ${count} values. One value was recorded as ${wrong} but should have been ${correct}. Find the correct mean.`, trueMean);
    }
    case 48: {
      const countKnown = statLevel(2, 3, 4), equal = randInt(5, 20), mean = randInt(7, 18);
      const totalCount = countKnown + 2;
      const total = mean * totalCount;
      const knownTotal = total - 2 * equal;
      if (knownTotal < countKnown * 2 || knownTotal % countKnown !== 0) return generateStatisticsPoint(48);
      const knownMean = knownTotal / countKnown;
      const known = statBalancedData(countKnown, knownMean);
      if (known.some(v => v < 0) || statSum(known) !== knownTotal) return generateStatisticsPoint(48);
      return statNumber(48, `The mean of ${totalCount} values is ${mean}. ${countKnown} of the values are ${statList(known)}. The other two values are equal. Find each missing value.`, equal);
    }
    case 49: {
      const groups = statLevel(4, 5, 6), mean = randInt(8, 18);
      const values = statBalancedData(groups, mean), missing = randInt(0, groups - 1);
      return statNumber(49, `${groups} groups have a mean size of ${mean}. Their sizes are ${statList(values.map((v, i) => i === missing ? '?' : v))}. Find the missing group size.`, values[missing]);
    }
    case 50: {
      const oldCount = statLevel(4, 5, 6), oldMean = randInt(8, 16), firstAdded = randInt(5, 20), secondAdded = randInt(5, 20);
      const finalTotal = oldCount * oldMean + firstAdded + secondAdded;
      if (finalTotal % (oldCount + 2) !== 0) return generateStatisticsPoint(50);
      const finalMean = finalTotal / (oldCount + 2);
      return statNumber(50, `${oldCount} values have a mean of ${oldMean}. Two new values are added. One is ${firstAdded}, and the final mean of all ${oldCount + 2} values is ${finalMean}. Find the other added value.`, secondAdded);
    }

    // Practice 6 — Median
    case 51:
      return statChoice(51, 'What is the median?', ['The middle value after the data are ordered', 'The total divided by the number of values', 'The difference between the highest and lowest values'], 0);
    case 52: {
      const count = statLevel(5, 7, 9), values = statUniqueValues(count, 2, 30).sort((a, b) => a - b);
      return statNumber(52, `Ordered data: <strong>${statList(values)}</strong><br>Find the median.`, statMedian(values));
    }
    case 53: {
      const count = statLevel(5, 7, 9), values = statUniqueValues(count, 2, 30);
      return statNumber(53, `Data: <strong>${statList(statShuffle(values))}</strong><br>Find the median.`, statMedian(values));
    }
    case 54: {
      const count = statLevel(4, 6, 8), meanMid = randInt(6, 20), values = [];
      const half = count / 2;
      for (let i = half; i >= 1; i--) values.push(meanMid - i * 2);
      for (let i = 1; i <= half; i++) values.push(meanMid + i * 2);
      return statNumber(54, `Ordered data: <strong>${statList(values)}</strong><br>Find the median.`, statMedian(values));
    }
    case 55: {
      const count = statLevel(4, 6, 8), mid = randInt(8, 20), values = [];
      const half = count / 2;
      for (let i = half; i >= 1; i--) values.push(mid - i);
      for (let i = 1; i <= half; i++) values.push(mid + i);
      return statNumber(55, `Data: <strong>${statList(statShuffle(values))}</strong><br>Find the median.`, statMedian(values));
    }
    case 56: {
      const centre = randInt(6, 18), values = statShuffle([centre - 4, centre - 2, centre, centre, centre + 3, centre + 5, centre + 7]);
      return statNumber(56, `Data: <strong>${statList(values)}</strong><br>Find the median.`, centre);
    }
    case 57: {
      const median = randInt(7, 18), left1 = median - randInt(3, 6), left2 = median - randInt(1, 2), right1 = median + randInt(1, 3), right2 = median + randInt(4, 7);
      return statNumber(57, `The ordered data are <strong>${left1}, ${left2}, ?, ${right1}, ${right2}</strong>. The median is ${median}. Find the missing value.`, median);
    }
    case 58: {
      const base = statUniqueValues(5, 3, 25).sort((a, b) => a - b);
      const added = randInt(2, 28), all = [...base, added];
      const median = statMedian(all);
      if (!Number.isInteger(median)) return generateStatisticsPoint(58);
      return statNumber(58, `The ordered data are <strong>${statList(base)}</strong>. A new value of ${added} is added. Find the new median.`, median);
    }
    case 59: {
      const a = statUniqueValues(5, 2, 25), b = statUniqueValues(5, 2, 25);
      const ma = statMedian(a), mb = statMedian(b);
      if (ma === mb) return generateStatisticsPoint(59);
      return statChoice(59, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Which set has the greater median?`, ['Set A', 'Set B', 'They have the same median'], ma > mb ? 0 : 1);
    }
    case 60: {
      const scores = statUniqueValues(statLevel(5, 7, 9), 5, 25);
      return statNumber(60, `A player's scores were ${statList(statShuffle(scores))}. What was the median score?`, statMedian(scores));
    }

    // Practice 7 — Mode
    case 61:
      return statChoice(61, 'What is the mode?', ['The value that occurs most often', 'The middle value after ordering', 'The highest value minus the lowest value'], 0);
    case 62: {
      const values = statModeSet('one'), mode = statModes(values)[0];
      return statNumber(62, `Data: <strong>${statList(values)}</strong><br>Find the mode.`, mode);
    }
    case 63: {
      const values = statModeSet('none');
      return statChoice(63, `Data: <strong>${statList(values)}</strong><br>Which statement is correct?`, ['There is no mode', `The mode is ${Math.min(...values)}`, `The mode is ${Math.max(...values)}`], 0);
    }
    case 64: {
      const nums = statUniqueValues(4, 2, 18);
      const modes = [nums[0], nums[1]].sort((a, b) => a - b);
      const others = [nums[2], nums[3]];
      const values = statShuffle([modes[0], modes[0], modes[1], modes[1], ...others]);
      const correct = `${modes[0]} and ${modes[1]}`;
      const distractor1 = `${Math.min(modes[0], others[0])} and ${Math.max(modes[0], others[0])}`;
      const distractor2 = `${Math.min(modes[1], others[1])} and ${Math.max(modes[1], others[1])}`;
      return statChoice(64, `Data: <strong>${statList(values)}</strong><br>Which pair gives the two modes?`, [correct, distractor1, distractor2], 0);
    }
    case 65: {
      const data = statFrequencyData(), max = Math.max(...data.freqs);
      if (data.freqs.filter(f => f === max).length !== 1) return generateStatisticsPoint(65);
      return statNumber(65, `${data.html}Find the mode.`, data.values[data.freqs.indexOf(max)]);
    }
    case 66: {
      const target = randInt(4, 12), other1 = target - 2, other2 = target + 3;
      const base = statShuffle([target, target, other1, other1, other2]);
      return statChoice(66, `Data: <strong>${statList(base)}</strong><br>Which value should be added so that ${target} becomes the only mode?`, [target, other1, other2], 0);
    }
    case 67: {
      const mode = randInt(5, 15);
      const others = statUniqueValues(4, 2, 20).filter(v => v !== mode);
      if (others.length < 4) return generateStatisticsPoint(67);
      const base = statShuffle([mode, ...others.slice(0, 4)]);
      const added = mode;
      return statNumber(67, `Data: <strong>${statList(base)}</strong>. The value ${added} is added. Find the new mode.`, mode);
    }
    case 68: {
      const mode = randInt(5, 15), other = mode + 3;
      const values = statShuffle([mode, mode, mode, other, other, mode + 6]);
      const remove = mode;
      const remaining = [...values];
      remaining.splice(remaining.indexOf(remove), 1);
      const modes = statModes(remaining);
      if (modes.length !== 2) return generateStatisticsPoint(68);
      return statChoice(68, `Data: <strong>${statList(values)}</strong>. One ${remove} is removed. What happens?`, [`There are now two modes: ${modes[0]} and ${modes[1]}`, `The only mode is ${mode}`, 'There is no mode'], 0);
    }
    case 69: {
      const modeA = randInt(4, 10), modeB = modeA + randInt(2, 5), freqA = randInt(3, 5), freqB = randInt(3, 5);
      if (freqA === freqB) return generateStatisticsPoint(69);
      const setA = Array(freqA).fill(modeA).concat([modeA + 2, modeA + 4]);
      const setB = Array(freqB).fill(modeB).concat([modeB + 2, modeB + 4]);
      return statChoice(69, `Set A: <strong>${statList(statShuffle(setA))}</strong><br>Set B: <strong>${statList(statShuffle(setB))}</strong><br>In which set does its mode occur more often?`, ['Set A', 'Set B', 'The modal frequencies are equal'], freqA > freqB ? 0 : 1);
    }
    case 70: {
      const mode = randInt(4, 10);
      const others = statUniqueValues(statLevel(3, 4, 5), 3, 12).filter(v => v !== mode).slice(0, statLevel(3, 4, 5));
      if (others.length < statLevel(3, 4, 5)) return generateStatisticsPoint(70);
      const sizes = statShuffle([mode, mode, mode, ...others]);
      return statNumber(70, `The shoe sizes sold in one hour were ${statList(sizes)}. What was the most commonly sold shoe size?`, mode);
    }

    // Practice 8 — Range
    case 71:
      return statChoice(71, 'How is the range of a data set found?', ['Highest value minus lowest value', 'Total divided by number of values', 'Middle value after ordering'], 0);
    case 72: {
      const min = randInt(2, 10), range = randInt(5, 15), values = [min, min + 2, min + 4, min + range].sort((a, b) => a - b);
      return statNumber(72, `Ordered data: <strong>${statList(values)}</strong><br>Find the range.`, range);
    }
    case 73: {
      const values = Array.from({ length: statLevel(6, 8, 10) }, () => randInt(2, 30));
      return statNumber(73, `Data: <strong>${statList(values)}</strong><br>Find the range.`, statRange(values));
    }
    case 74: {
      const min = randInt(2, 12), range = randInt(6, 20);
      return statNumber(74, `The minimum value is ${min} and the range is ${range}. Find the maximum value.`, min + range);
    }
    case 75: {
      const max = randInt(15, 35), range = randInt(5, Math.min(15, max - 2));
      return statNumber(75, `The maximum value is ${max} and the range is ${range}. Find the minimum value.`, max - range);
    }
    case 76: {
      const min = randInt(3, 10), max = min + randInt(6, 12), added = max + randInt(2, 8);
      const values = [min, min + 2, max - 2, max];
      return statNumber(76, `Data: <strong>${statList(values)}</strong>. A new value of ${added} is added. Find the new range.`, added - min);
    }
    case 77: {
      const min = randInt(3, 10), max = min + randInt(8, 15), added = randInt(min + 1, max - 1);
      return statNumber(77, `A data set has minimum ${min} and maximum ${max}. The value ${added} is added. What is the new range?`, max - min);
    }
    case 78: {
      const a = Array.from({ length: 5 }, () => randInt(3, 25)), b = Array.from({ length: 5 }, () => randInt(3, 25));
      const ra = statRange(a), rb = statRange(b);
      if (ra === rb) return generateStatisticsPoint(78);
      return statChoice(78, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Which set has the smaller range?`, ['Set A', 'Set B', 'They have the same range'], ra < rb ? 0 : 1);
    }
    case 79: {
      const min = randInt(3, 10), targetRange = randInt(10, 20), currentMax = min + randInt(3, targetRange - 2);
      const needed = min + targetRange;
      return statChoice(79, `A data set currently has minimum ${min} and maximum ${currentMax}. Which new value would make the range exactly ${targetRange}?`, [needed, needed - 2, needed + 2], 0);
    }
    case 80: {
      const temps = Array.from({ length: statLevel(5, 7, 9) }, () => randInt(8, 28));
      return statNumber(80, `The daily temperatures were ${statList(temps)}°C. Find the temperature range.`, statRange(temps));
    }

    // Practice 9 — Mixed Statistics
    case 81: {
      const values = statBalancedData(statLevel(5, 7, 9));
      return statNumber(81, `Data: <strong>${statList(values)}</strong><br>Find the mean.`, statMean(values));
    }
    case 82: {
      const count = statLevel(5, 7, 9), values = Array.from({ length: count }, () => randInt(2, 24));
      return statNumber(82, `Data: <strong>${statList(values)}</strong><br>Find the median.`, statMedian(values));
    }
    case 83: {
      const values = statModeSet('one');
      return statNumber(83, `Data: <strong>${statList(values)}</strong><br>Find the mode.`, statModes(values)[0]);
    }
    case 84: {
      const values = Array.from({ length: statLevel(6, 8, 10) }, () => randInt(2, 30));
      return statNumber(84, `Data: <strong>${statList(values)}</strong><br>Find the range.`, statRange(values));
    }
    case 85: {
      const templates = [
        { values: [2, 3, 3, 4, 8], target: 4, correct: 'mean' },
        { values: [1, 4, 6, 8, 8], target: 6, correct: 'median' },
        { values: [2, 4, 6, 9, 9], target: 9, correct: 'mode' },
        { values: [3, 5, 6, 7, 10], target: 7, correct: 'range' }
      ];
      const t = pick(templates);
      const options = ['Mean', 'Median', 'Mode', 'Range'];
      const index = { mean: 0, median: 1, mode: 2, range: 3 }[t.correct];
      const entries = options.map((x, i) => ({ x, i }));
      const selected = [entries[index], ...statShuffle(entries.filter(e => e.i !== index)).slice(0, 2)];
      const correctIndex = selected.findIndex(e => e.i === index);
      return statChoice(85, `Data: <strong>${statList(t.values)}</strong><br>Which statistic is ${t.target}?`, selected.map(e => e.x), correctIndex);
    }
    case 86: {
      const d = statRandomIntegerMeanData(statLevel(5, 5, 7), 2, statLevel(20, 26, 34), true);
      return statNumber(86, `Data: <strong>${statList(statShuffle(d.values))}</strong><br>Find the mean and the median. What is the positive difference between them?`, Math.abs(d.mean - d.median));
    }
    case 87:
      return statChoice(87, 'Which statistic describes the most frequently occurring value?', ['Mode', 'Mean', 'Range'], 0);
    case 88: {
      const kind = pick(['mean', 'median', 'mode', 'range']);
      if (kind === 'mean') {
        const data = statFrequencyWithIntegerMean();
        return statNumber(88, `${data.html}Find the mean of the data.`, data.mean);
      }
      if (kind === 'median') {
        const data = statFrequencyWithIntegerMedian();
        return statNumber(88, `${data.html}Find the median of the data.`, data.median);
      }
      if (kind === 'mode') {
        const data = statFrequencyData();
        const max = Math.max(...data.freqs);
        if (data.freqs.filter(f => f === max).length !== 1) return generateStatisticsPoint(88);
        return statNumber(88, `${data.html}Find the mode of the data.`, data.values[data.freqs.indexOf(max)]);
      }
      const data = statFrequencyData();
      const used = data.values.filter((_, i) => data.freqs[i] > 0);
      return statNumber(88, `${data.html}Find the range of the data.`, Math.max(...used) - Math.min(...used));
    }
    case 89: {
      const base = statBalancedData(5);
      const oldMean = statMean(base), oldMedian = statMedian(base);
      const useHigh = Math.random() < 0.5;
      const outlier = useHigh
        ? Math.max(...base) + statLevel(12, 20, 30)
        : Math.max(0, Math.min(...base) - statLevel(6, 10, 14));
      if (base.includes(outlier)) return generateStatisticsPoint(89);
      const changed = [...base, outlier];
      const meanChange = Math.abs(statMean(changed) - oldMean);
      const medianChange = Math.abs(statMedian(changed) - oldMedian);
      if (meanChange === medianChange) return generateStatisticsPoint(89);
      const askMore = Math.random() < 0.5;
      const correct = askMore
        ? (meanChange > medianChange ? 'Mean' : 'Median')
        : (meanChange < medianChange ? 'Mean' : 'Median');
      return statChoice(89, `Data: <strong>${statList(base)}</strong>. An extreme value of ${outlier} is added.<br>Which statistic changes ${askMore ? 'more' : 'less'}: the mean or the median?`, ['Mean', 'Median', 'They change by the same amount'], ['Mean', 'Median', 'They change by the same amount'].indexOf(correct), 'Compare the old and new mean and median. Extreme values usually affect the mean more strongly.');
    }
    case 90: {
      const values = statModeSet('one');
      const mode = statModes(values)[0], median = statMedian(values), range = statRange(values), mean = statMean(values);
      if (!Number.isInteger(mean) || !Number.isInteger(median)) return generateStatisticsPoint(90);
      const facts = [
        { name: 'mean', value: mean },
        { name: 'median', value: median },
        { name: 'mode', value: mode },
        { name: 'range', value: range }
      ];
      const correctFact = pick(facts);
      const distractorFacts = statShuffle(facts.filter(f => f.name !== correctFact.name)).slice(0, 2);
      const options = [
        `The ${correctFact.name} is ${correctFact.value}`,
        ...distractorFacts.map((fact, i) => `The ${fact.name} is ${fact.value + i + 1}`)
      ];
      return statChoice(90, `Data: <strong>${statList(values)}</strong><br>Which statement is correct?`, options, 0);
    }

    // Practice 10 — Comparing Data Sets
    case 91: {
      const low = statBalancedData(5, randInt(8, 14)), high = statBalancedData(5, randInt(15, 21));
      const swap = Math.random() < 0.5;
      const a = swap ? high : low, b = swap ? low : high;
      const ma = statMean(a), mb = statMean(b);
      return statChoice(91, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Which set has the higher mean?`, ['Set A', 'Set B', 'The means are equal'], ma > mb ? 0 : 1);
    }
    case 92: {
      const a = statUniqueValues(5, 2, 18), b = statUniqueValues(5, 12, 28), ma = statMedian(a), mb = statMedian(b);
      if (ma === mb) return generateStatisticsPoint(92);
      return statChoice(92, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Which set has the higher median?`, ['Set A', 'Set B', 'The medians are equal'], ma > mb ? 0 : 1);
    }
    case 93: {
      const modeA = randInt(3, 9), modeB = modeA + randInt(3, 7);
      const a = statShuffle([modeA, modeA, modeA, modeA + 2, modeA + 4]);
      const b = statShuffle([modeB, modeB, modeB, modeB + 2, modeB + 5]);
      return statNumber(93, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Find the difference between the two modes.`, modeB - modeA);
    }
    case 94: {
      const a = Array.from({ length: 5 }, () => randInt(4, 18)), b = Array.from({ length: 5 }, () => randInt(4, 24));
      const ra = statRange(a), rb = statRange(b);
      if (ra === rb) return generateStatisticsPoint(94);
      return statChoice(94, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Which set has the larger range?`, ['Set A', 'Set B', 'The ranges are equal'], ra > rb ? 0 : 1);
    }
    case 95: {
      const highIsA = Math.random() < 0.5;
      const lowMean = randInt(10, 16), highMean = lowMean + randInt(2, 6);
      const smallRange = randInt(3, 7), largeRange = smallRange + randInt(3, 8);
      const meanA = highIsA ? highMean : lowMean;
      const meanB = highIsA ? lowMean : highMean;
      const rangeA = highIsA ? largeRange : smallRange;
      const rangeB = highIsA ? smallRange : largeRange;
      return statChoice(95, `Class A has mean ${meanA} and range ${rangeA}. Class B has mean ${meanB} and range ${rangeB}. Which class has the higher mean but is less consistent (larger range)?`, ['Class A', 'Class B', 'Neither class'], highIsA ? 0 : 1);
    }
    case 96: {
      const smallRange = randInt(4, 9), largeRange = smallRange + randInt(3, 9), smallIsA = Math.random() < 0.5;
      const rangeA = smallIsA ? smallRange : largeRange, rangeB = smallIsA ? largeRange : smallRange;
      return statChoice(96, `Team A's scores have a range of ${rangeA}. Team B's scores have a range of ${rangeB}. Using range as the measure of spread, which team is more consistent?`, ['Team A', 'Team B', 'They are equally consistent'], smallIsA ? 0 : 1);
    }
    case 97: {
      const pair = statDatasetPairSameMean(), swap = Math.random() < 0.5;
      const a = swap ? pair.b : pair.a, b = swap ? pair.a : pair.b;
      const rangeA = statRange(a), rangeB = statRange(b);
      return statChoice(97, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>Both sets have the same mean. Which set has the smaller range?`, ['Set A', 'Set B', 'The ranges are equal'], rangeA < rangeB ? 0 : 1);
    }
    case 98: {
      const range = randInt(6, 12), lowMin = randInt(2, 8), highMin = lowMin + randInt(3, 7);
      const low = [lowMin, lowMin + Math.floor(range / 2), lowMin + range];
      const high = [highMin, highMin + Math.floor(range / 2), highMin + range];
      const swap = Math.random() < 0.5;
      const a = swap ? high : low, b = swap ? low : high;
      const ma = statMean(a), mb = statMean(b);
      return statChoice(98, `Set A: <strong>${statList(a)}</strong><br>Set B: <strong>${statList(b)}</strong><br>The ranges are equal. Which set has the higher mean?`, ['Set A', 'Set B', 'The means are equal'], ma > mb ? 0 : 1);
    }
    case 99: {
      const a = statFrequencyWithIntegerMean(), b = statFrequencyWithIntegerMean();
      if (a.mean === b.mean) return generateStatisticsPoint(99);
      return statChoice(99, `Table A:${a.html}Table B:${b.html}Which table represents data with the higher mean?`, ['Table A', 'Table B', 'The means are equal'], a.mean > b.mean ? 0 : 1);
    }
    case 100: {
      const pair = statDatasetPairSameMean();
      const rangeA = statRange(pair.a), rangeB = statRange(pair.b);
      return statNumber(100, `Set A: <strong>${statList(pair.a)}</strong><br>Set B: <strong>${statList(pair.b)}</strong><br>The means are equal. Find the difference between their ranges.`, Math.abs(rangeA - rangeB));
    }

    // Practice 11 — Missing and Changed Data
    case 101: {
      const count = statLevel(4, 6, 8), increase = randInt(2, statLevel(5, 8, 12)), originalMean = randInt(6, 18);
      const newMean = originalMean + increase;
      return statNumber(101, `A data set contains ${count} values. Every value is increased by ${increase}, and the new mean is ${newMean}. What was the original mean?`, originalMean, {
        hint: 'If every value changes by the same amount, the mean changes by that same amount.'
      });
    }
    case 102: {
      const count = statLevel(4, 6, 8), decrease = randInt(2, statLevel(5, 8, 12)), originalMean = randInt(decrease + 5, decrease + 20);
      const newMean = originalMean - decrease;
      return statNumber(102, `A data set contains ${count} values. Every value is decreased by ${decrease}, and the new mean is ${newMean}. What was the original mean?`, originalMean, {
        hint: 'If every value decreases by the same amount, the mean decreases by that same amount.'
      });
    }
    case 103: {
      const count = statLevel(5, 6, 8), oldMean = randInt(8, 18), removed = randInt(4, 25), remainingTotal = count * oldMean - removed;
      if (remainingTotal <= 0 || remainingTotal % (count - 1) !== 0) return generateStatisticsPoint(103);
      return statNumber(103, `${count} values have a mean of ${oldMean}. After one value is removed, the mean of the remaining ${count - 1} values is ${remainingTotal / (count - 1)}. Find the removed value.`, removed);
    }
    case 104: {
      const count = statLevel(4, 5, 7), oldMean = randInt(7, 17), added = randInt(4, 25), total = count * oldMean + added;
      if (total % (count + 1) !== 0) return generateStatisticsPoint(104);
      return statNumber(104, `${count} values have a mean of ${oldMean}. One value is added and the mean becomes ${total / (count + 1)}. Find the added value.`, added);
    }
    case 105: {
      const count = statLevel(5, 6, 8), correctMean = randInt(8, 18), recorded = randInt(4, 18), actual = recorded + randInt(2, 8);
      const recordedTotal = count * correctMean - actual + recorded;
      if (recordedTotal % count !== 0) return generateStatisticsPoint(105);
      return statNumber(105, `The mean of ${count} values was reported as ${recordedTotal / count}. One value was written as ${recorded} instead of ${actual}. Find the correct mean.`, correctMean);
    }
    case 106: {
      const count = statLevel(4, 5, 8), oldMean = randInt(7, 18), increase = pick([count, count * 2, count * 3]);
      return statNumber(106, `${count} values have a mean of ${oldMean}. One of the values is increased by ${increase}. What is the new mean?`, oldMean + increase / count);
    }
    case 107: {
      const count = statLevel(4, 5, 8), oldMean = randInt(7, 18), oldValue = randInt(4, 18), change = pick([count, count * 2]), newValue = oldValue + change;
      return statNumber(107, `${count} values have a mean of ${oldMean}. One value, ${oldValue}, is replaced by ${newValue}. Find the new mean.`, oldMean + change / count);
    }
    case 108: {
      const values = [1, 2, 3, 4], freqs = values.map(() => randInt(1, 7)), missing = randInt(0, 3), total = statSum(freqs);
      const rows = values.map((v, i) => [v, i === missing ? '?' : freqs[i]]);
      return statNumber(108, `${statTable(['Value', 'Frequency'], rows)}The total frequency is ${total}. Find the missing frequency.`, freqs[missing]);
    }
    case 109: {
      const d = statFindIntegerWeightedUnknown();
      return statNumber(109, `${statTable(['Value', 'Frequency'], d.rows)}The mean of the data is ${d.mean}. Find the missing frequency.`, d.missing, {
        hint: 'Use value × frequency to build the total, then use mean = total ÷ total frequency.'
      });
    }
    case 110: {
      const count = statLevel(5, 6, 8), trueMean = randInt(10, 20);
      const wrong1 = randInt(3, 10), correct1 = wrong1 + 2 * count;
      const wrong2 = randInt(count + 5, count + 16), correct2 = wrong2 - count;
      const reportedTotal = count * trueMean - correct1 - correct2 + wrong1 + wrong2;
      if (reportedTotal <= 0 || reportedTotal % count !== 0) return generateStatisticsPoint(110);
      const reportedMean = reportedTotal / count;
      if (reportedMean === trueMean) return generateStatisticsPoint(110);
      return statNumber(110, `The reported mean of ${count} values is ${reportedMean}. One value ${wrong1} should be ${correct1}, and another value ${wrong2} should be ${correct2}. Find the corrected mean.`, trueMean);
    }

    // Practice 12 — Multi-Step Statistical Reasoning
    case 111: {
      const count = statLevel(4, 5, 6), oldMean = randInt(8, 16), increase = statLevel(1, 2, 3);
      const targetMean = oldMean + increase;
      const requiredScore = targetMean * (count + 1) - oldMean * count;
      if (requiredScore <= 0 || requiredScore > statLevel(30, 40, 50)) return generateStatisticsPoint(111);
      return statNumber(111, `${count} scores have a mean of ${oldMean}. One more score is added and the mean must become ${targetMean}. What must the new score be?`, requiredScore, {
        hint: 'Find the old total and the required new total, then compare them.'
      });
    }
    case 112: {
      const data = statFrequencyWithIntegerMean();
      const countAboveMean = data.values.reduce((sum, v, i) => sum + (v > data.mean ? data.freqs[i] : 0), 0);
      return statNumber(112, `${data.html}Find the mean, then find how many observations are greater than the mean.`, countAboveMean);
    }
    case 113: {
      for (let attempt = 0; attempt < 500; attempt++) {
        const values = statUniqueValues(statLevel(6, 8, 10), 2, 36);
        const oldMedian = statMedian(values);
        const candidateIndexes = statShuffle([...values.keys()]);
        for (const index of candidateIndexes) {
          const remove = values[index], remaining = [...values];
          remaining.splice(index, 1);
          const newMedian = statMedian(remaining);
          if (Number.isInteger(newMedian) && newMedian !== oldMedian) {
            return statNumber(113, `Data: <strong>${statList(values)}</strong>. Remove the value ${remove}. Find the median of the remaining data.`, newMedian, {
              hint: 'Re-order the remaining values because removing one value can change which value is in the middle.'
            });
          }
        }
      }
      return statNumber(113, 'Data: <strong>2, 5, 8, 11, 14, 20</strong>. Remove the value 2. Find the median of the remaining data.', 11);
    }
    case 114: {
      const values = statModeSet('one');
      const mode = statModes(values)[0], min = Math.min(...values), max = Math.max(...values);
      const outsideLow = min - 1, outsideHigh = max + randInt(1, 4);
      return statChoice(114, `Data: <strong>${statList(values)}</strong><br>Which value can be added so that the mode stays the same and the range does not change?`, [mode, outsideLow, outsideHigh], 0, 'A value already at the mode strengthens the mode and stays inside the current minimum and maximum.');
    }
    case 115: {
      const count = statLevel(5, 5, 7), oldMean = randInt(7, 16), increase = randInt(1, statLevel(2, 3, 4));
      const values = statBalancedData(count, oldMean);
      const outlier = oldMean + (count + 1) * increase;
      if (outlier <= Math.max(...values)) return generateStatisticsPoint(115);
      const newMean = statMean([...values, outlier]);
      return statNumber(115, `Data: <strong>${statList(values)}</strong>. A new extreme value of ${outlier} is added. By how much does the mean increase?`, newMean - oldMean, {
        hint: 'Compare the old total with the new total after the extra value is included.'
      });
    }
    case 116: {
      for (let attempt = 0; attempt < 100; attempt++) {
        const n1 = statLevel(3, 4, 5), n2 = statLevel(3, 5, 7), m1 = randInt(8, 18), m2 = randInt(8, 20);
        const total = n1 * m1 + n2 * m2;
        if (total % (n1 + n2) === 0) {
          return statNumber(116, `Group A has ${n1} students with mean score ${m1}. Group B has ${n2} students with mean score ${m2}. Find the mean score of all ${n1 + n2} students together.`, total / (n1 + n2));
        }
      }
      return statNumber(116, 'Group A has 4 students with mean score 12. Group B has 4 students with mean score 16. Find the combined mean.', 14);
    }
    case 117: {
      const totalCount = statLevel(5, 7, 9), mean = randInt(10, 18), missingCount = 2;
      const knownCount = totalCount - missingCount, eachMissing = randInt(5, Math.min(20, mean + 6));
      const knownTotal = totalCount * mean - missingCount * eachMissing;
      if (knownTotal < knownCount * 3 || knownTotal % knownCount !== 0) return generateStatisticsPoint(117);
      const knownMean = knownTotal / knownCount;
      if (knownMean < 3) return generateStatisticsPoint(117);
      const known = statBalancedData(knownCount, knownMean);
      if (known.some(v => v < 1)) return generateStatisticsPoint(117);
      return statNumber(117, `${totalCount} values have a mean of ${mean}. ${knownCount} values are ${statList(known)}. The remaining two values are equal. Find each missing value.`, eachMissing);
    }
    case 118: {
      const scenarios = [
        { q: 'A shop wants to know which shoe size is sold most often. Which statistic is most useful?', correct: 'Mode' },
        { q: 'A teacher wants the arithmetic average test score. Which statistic is needed?', correct: 'Mean' },
        { q: 'A researcher wants the middle house price after all prices are ordered. Which statistic is needed?', correct: 'Median' },
        { q: 'A coach wants a simple measure of how spread out the highest and lowest scores are. Which statistic is needed?', correct: 'Range' }
      ];
      const s = pick(scenarios), options = ['Mean', 'Median', 'Mode', 'Range'];
      const correctIndex = options.indexOf(s.correct), distractors = statShuffle(options.filter(x => x !== s.correct)).slice(0, 2);
      return statChoice(118, s.q, [s.correct, ...distractors], 0);
    }
    case 119: {
      const count = statLevel(4, 5, 6), mean = randInt(8, 18);
      return statChoice(119, `A class has ${count} quiz scores with a mean of ${mean}. You want to find the total of the quiz scores. Which piece of information is unnecessary?`, [`The students' favourite colour`, `The number of quiz scores (${count})`, `The mean score (${mean})`], 0);
    }
    case 120: {
      const oldCount = statLevel(4, 5, 6), oldMean = randInt(8, 16), removed = randInt(4, 22), remainingTotal = oldCount * oldMean - removed;
      if (remainingTotal <= 0 || remainingTotal % (oldCount - 1) !== 0) return generateStatisticsPoint(120);
      const newMean = remainingTotal / (oldCount - 1);
      const newValue = removed + randInt(2, 8);
      const finalTotal = remainingTotal + newValue;
      if (finalTotal % oldCount !== 0) return generateStatisticsPoint(120);
      return statNumber(120, `${oldCount} values have a mean of ${oldMean}. One value is removed and the remaining values have a mean of ${newMean}. Then a new value of ${newValue} is added. Find the final mean.`, finalTotal / oldCount);
    }

    default:
      throw new Error(`No statistics generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.statistics = {};
for (const group of TOPIC_CONFIGS.statistics.groups) {
  TOPIC_BANKS.statistics[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.statistics[group.id][point.id] = () => generateStatisticsPoint(pointNumber);
  }
}
