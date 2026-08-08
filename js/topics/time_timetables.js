'use strict';

const TIME_LABELS = [
  'Recognise Seconds, Minutes and Hours',
  'Convert 60 Seconds to 1 Minute',
  'Convert 60 Minutes to 1 Hour',
  'Convert 24 Hours to 1 Day',
  'Recall Days in a Week',
  'Recall Weeks in a Year',
  'Recall Months in a Year',
  'Choose an Appropriate Unit of Time',
  'Compare Durations in Different Units',
  'Order Durations from Shortest to Longest',

  'Read Whole-Hour Times',
  'Read Half-Hour Times',
  'Read Quarter-Hour Times',
  'Read Times to 5 Minutes',
  'Read Times to the Minute',
  'Write Time Using Digits',
  'Write Time Using Words',
  'Understand Minutes Past an Hour',
  'Understand Minutes To the Next Hour',
  'Match Equivalent Ways of Writing a Time',

  'Understand am',
  'Understand pm',
  'Identify Morning Times',
  'Identify Afternoon Times',
  'Identify Evening Times',
  'Understand 12 Noon',
  'Understand 12 Midnight',
  'Choose am or pm from a Situation',
  'Distinguish Two Occurrences of the Same Clock Time',
  'Solve Simple am/pm Problems',

  'Read 24-Hour Time',
  'Convert Morning 12-Hour Time to 24-Hour Time',
  'Convert Afternoon 12-Hour Time to 24-Hour Time',
  'Convert Evening 12-Hour Time to 24-Hour Time',
  'Convert 24-Hour Morning Time to 12-Hour Time',
  'Convert 24-Hour Afternoon Time to 12-Hour Time',
  'Convert 24-Hour Evening Time to 12-Hour Time',
  'Convert Noon and Midnight Correctly',
  'Compare 12-Hour and 24-Hour Times',
  'Mixed 12-Hour and 24-Hour Conversion',

  'Convert Minutes to Seconds',
  'Convert Seconds to Minutes',
  'Convert Hours to Minutes',
  'Convert Minutes to Hours',
  'Convert Hours and Minutes to Minutes',
  'Convert Minutes to Hours and Minutes',
  'Convert Days to Hours',
  'Convert Hours to Days and Hours',
  'Convert Weeks to Days',
  'Solve Multi-Step Time-Unit Conversions',

  'Find Duration within the Same Hour',
  'Find Duration across One Hour',
  'Find Duration over Several Hours',
  'Find Duration from Morning to Afternoon',
  'Find Duration Crossing Noon',
  'Find Duration from Afternoon to Evening',
  'Find Duration Using 24-Hour Time',
  'Find Duration in Hours and Minutes',
  'Compare Two Durations',
  'Solve Multi-Step Elapsed-Time Problems',

  'Add Minutes to a Starting Time',
  'Add Hours to a Starting Time',
  'Add Hours and Minutes to a Starting Time',
  'Find a Finish Time within the Same Hour',
  'Find a Finish Time across an Hour',
  'Find a Finish Time across Noon',
  'Find an Afternoon or Evening Finish Time',
  'Find a Finish Time in 24-Hour Notation',
  'Add Several Periods of Time',
  'Solve Multi-Step Finish-Time Problems',

  'Subtract Minutes from a Finishing Time',
  'Subtract Hours from a Finishing Time',
  'Subtract Hours and Minutes from a Finishing Time',
  'Find a Start Time within the Same Hour',
  'Find a Start Time across an Hour',
  'Find a Start Time before Noon',
  'Find a Start Time from an Evening Finish',
  'Find a Start Time in 24-Hour Notation',
  'Work Backwards through Two Activities',
  'Solve Multi-Step Start-Time Problems',

  'Understand Times Before and After Midnight',
  'Find Duration to Midnight',
  'Find Duration after Midnight',
  'Find Duration across Midnight',
  'Find a Finish Time after Midnight',
  'Find a Start Time before Midnight',
  'Convert Midnight Times between 12-Hour and 24-Hour Formats',
  'Solve Overnight Journey Problems',
  'Solve Overnight Work or Event Problems',
  'Solve Multi-Step Overnight Problems',

  'Recall the Number of Days in Each Month',
  'Identify Months with 30 Days',
  'Identify Months with 31 Days',
  'Recall the Number of Days in February',
  'Understand a Leap Year at a Basic Level',
  'Convert Weeks and Days',
  'Find a Date a Number of Days Later',
  'Find a Date a Number of Days Earlier',
  'Find Duration between Dates within One Month',
  'Find Duration across Two Months',

  'Understand the Seven-Day Repeating Cycle',
  'Find the Day One Week Later',
  'Find the Day Several Days Later',
  'Find the Day Several Days Earlier',
  'Use Remainders after Complete Weeks',
  'Find the Weekday of a Future Date',
  'Find the Weekday of an Earlier Date',
  'Count a Particular Weekday in a Date Range',
  'Reason about Repeating Weekly Activities',
  'Solve Multi-Step Calendar Problems',

  'Read a Departure Time from a Timetable',
  'Read an Arrival Time from a Timetable',
  'Find a Journey Duration from a Timetable',
  'Find the Next Available Service',
  'Compare Two Departure Times',
  'Compare Two Arrival Times',
  'Find the Fastest Service',
  'Find Waiting Time between Services',
  'Choose a Service That Meets a Deadline',
  'Extract Several Pieces of Information from a Timetable',

  'Combine Journey Time and Waiting Time',
  'Solve a Two-Stage Journey',
  'Plan a Transfer between Services',
  'Find Transfer Waiting Time',
  'Decide Whether a Connection Can Be Made',
  'Find Total Time for a Journey with a Break',
  'Find Total Travel Time Including Stops',
  'Plan to Arrive Early',
  'Choose between Two Travel Plans',
  'Solve a Multi-Stage Timetable Problem',

  'Solve School-Day Schedule Problems',
  'Solve Sports Training Time Problems',
  'Solve Movie and Event Time Problems',
  'Solve Cooking and Baking Time Problems',
  'Find Work-Shift Durations',
  'Solve Appointment Time Problems',
  'Reason about Parking-Time Limits',
  'Use Opening and Closing Times',
  'Plan Several Activities within a Time Limit',
  'Find Unused or Free Time',

  'Find an Unknown Start Time from Several Activities',
  'Find an Unknown Finish Time after Several Stages',
  'Include a Break in Total Elapsed Time',
  'Exclude Waiting Time from Active Time',
  'Compare Two Schedules',
  'Choose the Earliest Possible Arrival',
  'Choose the Latest Possible Departure',
  'Work Backwards from a Deadline',
  'Combine Calendar and Time Reasoning',
  'Solve a Multi-Condition Timetable Problem'
];

function timePoints(start, end) {
  return TIME_LABELS.slice(start - 1, end).map((label, index) => ({
    id: `time${String(start + index).padStart(3, '0')}`,
    number: start + index,
    label
  }));
}

TOPIC_CONFIGS.timeTimetables = {
  title: 'Time & Timetables',
  pageTitle: 'Knowledge Practice — Time, Calendars and Timetables',
  knowledgeMapTitle: 'Time, Calendars and Timetables Practice Structure',
  intro: 'The 150 detailed knowledge points move from time units and clock notation to elapsed time, calendars, timetables, journeys and multi-step scheduling problems.',
  teacherNote: 'This topic is graph-free and uses written times, dates and small HTML timetables. Crossing Midnight and Journey & Waiting Time are not selected by default because they are more demanding. Foundation focuses on friendly times, Core adds crossing hours and two-step reasoning, and Challenge adds deadlines, backwards reasoning and multi-stage schedules.',
  defaultSelectedGroups: [
    'timeUnits', 'readingTime', 'amPm', 'hour24', 'convertingTime', 'duration', 'finishTime', 'startTime',
    'dates', 'calendarReasoning', 'readingTimetables', 'realLifeTime', 'multiStepTime'
  ],
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    { id: 'timeUnits', practiceNumber: 1, label: 'Units of Time', description: 'Use seconds, minutes, hours, days, weeks, months and years appropriately.', knowledgePoints: timePoints(1, 10) },
    { id: 'readingTime', practiceNumber: 2, label: 'Reading and Writing Time', description: 'Read and write common clock times using digits and words.', knowledgePoints: timePoints(11, 20) },
    { id: 'amPm', practiceNumber: 3, label: '12-Hour Time and AM/PM', description: 'Use am, pm, noon and midnight correctly in everyday contexts.', knowledgePoints: timePoints(21, 30) },
    { id: 'hour24', practiceNumber: 4, label: '12-Hour and 24-Hour Time', description: 'Convert accurately between 12-hour and 24-hour notation.', knowledgePoints: timePoints(31, 40) },
    { id: 'convertingTime', practiceNumber: 5, label: 'Converting Time Units', description: 'Convert between seconds, minutes, hours, days and weeks.', knowledgePoints: timePoints(41, 50) },
    { id: 'duration', practiceNumber: 6, label: 'Finding Duration', description: 'Find elapsed time across hours, noon and different time formats.', knowledgePoints: timePoints(51, 60) },
    { id: 'finishTime', practiceNumber: 7, label: 'Finding Finish Time', description: 'Add durations to starting times in one or several stages.', knowledgePoints: timePoints(61, 70) },
    { id: 'startTime', practiceNumber: 8, label: 'Finding Start Time', description: 'Work backwards from finishing times and durations.', knowledgePoints: timePoints(71, 80) },
    { id: 'crossingMidnight', practiceNumber: 9, label: 'Crossing Midnight', description: 'Reason about overnight durations and times on the next day.', knowledgePoints: timePoints(81, 90) },
    { id: 'dates', practiceNumber: 10, label: 'Days, Weeks, Months and Years', description: 'Use month lengths, dates, weeks and simple leap-year information.', knowledgePoints: timePoints(91, 100) },
    { id: 'calendarReasoning', practiceNumber: 11, label: 'Calendar Reasoning', description: 'Use the seven-day cycle, remainders and repeating weekly events.', knowledgePoints: timePoints(101, 110) },
    { id: 'readingTimetables', practiceNumber: 12, label: 'Reading Timetables', description: 'Read departures, arrivals, durations, deadlines and service comparisons.', knowledgePoints: timePoints(111, 120) },
    { id: 'journeyWaiting', practiceNumber: 13, label: 'Journey and Waiting-Time Problems', description: 'Combine journeys, transfers, waiting times and connection constraints.', knowledgePoints: timePoints(121, 130) },
    { id: 'realLifeTime', practiceNumber: 14, label: 'Time in Real-Life Situations', description: 'Apply time calculations to school, sport, cooking, work, appointments and opening hours.', knowledgePoints: timePoints(131, 140) },
    { id: 'multiStepTime', practiceNumber: 15, label: 'Multi-Step Time and Timetable Reasoning', description: 'Combine several time conditions, work backwards and choose feasible schedules.', knowledgePoints: timePoints(141, 150) }
  ]
};

function timeLevel(foundation, core, challenge) {
  return state.level === 'foundation' ? foundation : state.level === 'core' ? core : challenge;
}

function timeQuestion(point, text, answer, extra = {}) {
  return {
    knowledgePoint: `time${String(point).padStart(3, '0')}`,
    subtopic: TIME_LABELS[point - 1],
    text,
    answer,
    displayAnswer: extra.displayAnswer ?? String(answer),
    acceptedAnswers: extra.acceptedAnswers ?? null,
    answerType: extra.answerType ?? 'rational',
    hint: extra.hint ?? ''
  };
}

function timeNumber(point, text, answer, extra = {}) {
  return timeQuestion(point, text, answer, { ...extra, answerType: 'rational' });
}

function timeText(point, text, answer, acceptedAnswers = null, extra = {}) {
  return timeQuestion(point, text, answer, {
    ...extra,
    answerType: 'text',
    acceptedAnswers: acceptedAnswers || [answer]
  });
}

function timeChoice(point, prompt, options, correctIndex, hint = '') {
  const entries = options.map((text, index) => ({ text, correct: index === correctIndex }));
  for (let i = entries.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  const answer = entries.findIndex(item => item.correct) + 1;
  const optionsHtml = entries.map((item, index) => `<strong>${index + 1}.</strong> ${item.text}`).join('&nbsp;&nbsp;&nbsp;');
  return timeNumber(point, `${prompt}<br>${optionsHtml}<br><strong>Enter ${entries.map((_, i) => i + 1).join(', ')}.</strong>`, answer, { hint });
}

function timeTable(headers, rows) {
  const cell = 'style="border:1px solid #cbd5e1;padding:5px 10px;text-align:center;"';
  const head = headers.map(h => `<th ${cell}>${h}</th>`).join('');
  const body = rows.map(row => `<tr>${row.map(v => `<td ${cell}>${v}</td>`).join('')}</tr>`).join('');
  return `<table style="border-collapse:collapse;margin:10px auto;min-width:320px;"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

const TIME_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const TIME_MONTHS = [
  ['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30],
  ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]
];

function timePad(n) { return String(n).padStart(2, '0'); }
function timeMod(n, m) { return ((n % m) + m) % m; }
function timeMinutes(h, m = 0) { return h * 60 + m; }
function time24(total) {
  const t = timeMod(total, 1440);
  return `${timePad(Math.floor(t / 60))}:${timePad(t % 60)}`;
}
function time12(total) {
  const t = timeMod(total, 1440);
  const h24 = Math.floor(t / 60), m = t % 60;
  const suffix = h24 < 12 ? 'am' : 'pm';
  const h = h24 % 12 || 12;
  return `${h}:${timePad(m)} ${suffix}`;
}
function time12Accepted(total) {
  const canonical = time12(total);
  const [clock, suffix] = canonical.split(' ');
  const noColon = clock.replace(':', '');
  const dot = clock.replace(':', '.');
  return [canonical, `${clock}${suffix}`, `${dot} ${suffix}`, `${dot}${suffix}`, `${noColon} ${suffix}`, `${noColon}${suffix}`];
}
function time24Accepted(total) {
  const canonical = time24(total);
  return [canonical, canonical.replace(':', ''), canonical.replace(':', '.')];
}
function timeDurationText(minutes) {
  const h = Math.floor(minutes / 60), m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}
function timeDurationAccepted(minutes) {
  const h = Math.floor(minutes / 60), m = minutes % 60;
  if (h === 0) return [`${m} min`, `${m}min`, `${m} minutes`, `${m} minute`];
  if (m === 0) return [`${h} h`, `${h}h`, `${h} hr`, `${h} hours`, `${h} hour`];
  return [
    `${h} h ${m} min`, `${h}h ${m}min`, `${h}h${m}min`, `${h} hr ${m} min`,
    `${h} hours ${m} minutes`, `${h} hour ${m} minutes`
  ];
}
function timeWordHour(h) {
  const words = ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
  return words[h % 12];
}
function timeWords(total) {
  const t = timeMod(total, 720), h = Math.floor(t / 60) || 12, m = t % 60;
  if (m === 0) return `${timeWordHour(h)} o'clock`;
  if (m === 15) return `quarter past ${timeWordHour(h)}`;
  if (m === 30) return `half past ${timeWordHour(h)}`;
  if (m === 45) return `quarter to ${timeWordHour((h % 12) + 1)}`;
  if (m < 30) return `${m} minutes past ${timeWordHour(h)}`;
  return `${60 - m} minutes to ${timeWordHour((h % 12) + 1)}`;
}
function timeNumberWord(n) {
  const words = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','thirty'];
  return words[n] || String(n);
}
function timeWordsAccepted(total) {
  const canonical = timeWords(total);
  const t = timeMod(total, 720), h = Math.floor(t / 60) || 12, m = t % 60;
  const hour = timeWordHour(h), nextHour = timeWordHour((h % 12) + 1);
  const answers = [canonical];
  if (m === 0) answers.push(`${hour} oclock`, `${hour} o clock`);
  else if (m === 15) answers.push(`fifteen minutes past ${hour}`, `fifteen past ${hour}`, `15 minutes past ${hour}`, `15 past ${hour}`);
  else if (m === 30) answers.push(`thirty minutes past ${hour}`, `thirty past ${hour}`, `30 minutes past ${hour}`, `30 past ${hour}`);
  else if (m === 45) answers.push(`fifteen minutes to ${nextHour}`, `fifteen to ${nextHour}`, `15 minutes to ${nextHour}`, `15 to ${nextHour}`);
  else if (m < 30) answers.push(`${timeNumberWord(m)} minutes past ${hour}`, `${timeNumberWord(m)} past ${hour}`, `${m} past ${hour}`);
  else {
    const to = 60 - m;
    answers.push(`${timeNumberWord(to)} minutes to ${nextHour}`, `${timeNumberWord(to)} to ${nextHour}`, `${to} to ${nextHour}`);
  }
  return [...new Set(answers)];
}
function timeRandomMinute() {
  const step = timeLevel(5, 5, 1);
  return randInt(0, Math.floor(59 / step)) * step;
}
function timeRandomDuration(minimum, maximum) {
  const step = timeLevel(5, 5, 1);
  const lo = Math.ceil(minimum / step), hi = Math.floor(maximum / step);
  return randInt(lo, Math.max(lo, hi)) * step;
}
function timeRandomDaytime(minHour = 6, maxHour = 20) {
  return timeMinutes(randInt(minHour, maxHour), timeRandomMinute());
}
function timeDateText(monthIndex, day) { return `${TIME_MONTHS[monthIndex][0]} ${day}`; }
function timeOrdinal(day) {
  const mod100 = day % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${day}th`;
  return `${day}${day % 10 === 1 ? 'st' : day % 10 === 2 ? 'nd' : day % 10 === 3 ? 'rd' : 'th'}`;
}
function timeDateAccepted(monthIndex, day) {
  const month = TIME_MONTHS[monthIndex][0], shortMonth = month.slice(0, 3), ord = timeOrdinal(day);
  return [`${month} ${day}`, `${day} ${month}`, `${month} ${ord}`, `${ord} ${month}`, `${shortMonth} ${day}`, `${day} ${shortMonth}`];
}
function timeDaysInMonth(monthIndex, leap = false) { return monthIndex === 1 && leap ? 29 : TIME_MONTHS[monthIndex][1]; }
function timeShiftDate(monthIndex, day, delta, leap = false) {
  let m = monthIndex, d = day + delta;
  while (d > timeDaysInMonth(m, leap)) {
    d -= timeDaysInMonth(m, leap);
    m = (m + 1) % 12;
  }
  while (d < 1) {
    m = (m + 11) % 12;
    d += timeDaysInMonth(m, leap);
  }
  return { month: m, day: d };
}
function timeDayShift(dayIndex, delta) { return timeMod(dayIndex + delta, 7); }
function timeShuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function timeTimetable(start = null, count = null) {
  const serviceCount = count ?? timeLevel(3, 4, 5);
  const first = start ?? timeMinutes(randInt(7, 10), timeLevel(pick([0, 10, 20, 30, 40, 50]), pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), randInt(0, 59)));
  const departures = [first];
  for (let i = 1; i < serviceCount; i++) {
    const gap = timeLevel(pick([20, 30]), pick([15, 20, 25, 30, 35]), randInt(13, 34));
    departures.push(departures[i - 1] + gap);
  }
  const assignedDepartures = timeShuffle(departures);
  return Array.from({ length: serviceCount }, (_, i) => {
    const duration = timeLevel(timeRandomDuration(25, 45), timeRandomDuration(30, 60), randInt(32, 72));
    const depart = assignedDepartures[i];
    return { name: String.fromCharCode(65 + i), depart, arrive: depart + duration, duration };
  });
}
function timeTimetableHtml(services) {
  return timeTable(['Service', 'Leaves', 'Arrives'], services.map(s => [s.name, time24(s.depart), time24(s.arrive)]));
}

function generateTimePoint(point) {
  switch (point) {
    // Practice 1 — Units of Time
    case 1: {
      const scenarios = [
        ['a blink', 'seconds'], ['a school lesson', 'minutes'], ["a night's sleep", 'hours']
      ];
      const [thing, answer] = pick(scenarios);
      return timeText(1, `Which unit is most suitable for measuring ${thing}: seconds, minutes or hours?`, answer, [answer, answer.slice(0, -1)]);
    }
    case 2: { const n = randInt(1, timeLevel(5, 10, 20)); return timeNumber(2, `How many minutes are ${n * 60} seconds?`, n); }
    case 3: { const n = randInt(1, timeLevel(5, 10, 16)); return timeNumber(3, `How many hours are ${n * 60} minutes?`, n); }
    case 4: { const n = randInt(1, timeLevel(4, 10, 20)); return timeNumber(4, `How many days are ${n * 24} hours?`, n); }
    case 5: return timeNumber(5, 'How many days are in one week?', 7);
    case 6: return timeNumber(6, 'How many complete weeks are there in 365 days?', 52);
    case 7: return timeNumber(7, 'How many months are in one year?', 12);
    case 8: {
      const choices = [
        ['the time needed to brush your teeth', 'minutes'], ['the duration of a school holiday', 'days'], ['the time for a 100 m sprint', 'seconds'], ['the age of a building', 'years']
      ];
      const [scenario, answer] = pick(choices);
      return timeText(8, `Choose the most appropriate unit for ${scenario}.`, answer, [answer, answer.replace(/s$/, '')]);
    }
    case 9: {
      const aMin = randInt(2, 5) * 60, bMin = aMin + pick([15, 30, 45, 60]);
      return timeChoice(9, `Which duration is longer?`, [`${aMin} minutes`, timeDurationText(bMin)], 1);
    }
    case 10: {
      const mins = [randInt(20, 50), randInt(55, 80), randInt(90, 140)].sort((a,b)=>a-b);
      const shown = [...mins].sort(() => Math.random() - 0.5);
      const correct = mins.map(timeDurationText).join(' < ');
      const reverse = [...mins].reverse().map(timeDurationText).join(' < ');
      const mixed = [mins[1], mins[0], mins[2]].map(timeDurationText).join(' < ');
      return timeChoice(10, `The durations are <strong>${shown.map(timeDurationText).join(', ')}</strong>. Which order is shortest to longest?`, [correct, reverse, mixed], 0);
    }

    // Practice 2 — Reading and Writing Time
    case 11: { const h = randInt(1, 12); return timeText(11, `Write <strong>${h}:00</strong> in words.`, `${timeWordHour(h)} o'clock`, timeWordsAccepted(timeMinutes(h % 12, 0))); }
    case 12: { const h = randInt(1, 12); return timeText(12, `Write <strong>${h}:30</strong> in words.`, `half past ${timeWordHour(h)}`, timeWordsAccepted(timeMinutes(h % 12, 30))); }
    case 13: {
      const h = randInt(1, 12), m = pick([15,45]);
      const answer = timeWords(timeMinutes(h % 12, m));
      return timeText(13, `Write <strong>${h}:${timePad(m)}</strong> in words.`, answer, timeWordsAccepted(timeMinutes(h % 12, m)));
    }
    case 14: {
      const h = randInt(1, 12), m = pick([5,10,20,25,35,40,50,55]);
      return timeText(14, `Write <strong>${h}:${timePad(m)}</strong> in words.`, timeWords(timeMinutes(h % 12, m)), timeWordsAccepted(timeMinutes(h % 12, m)));
    }
    case 15: {
      const h = randInt(1, 12), m = timeLevel(randInt(0,11)*5, randInt(0,11)*5, randInt(1,59));
      return timeNumber(15, `The time is <strong>${h}:${timePad(m)}</strong>. How many minutes past ${h} is this?`, m);
    }
    case 16: {
      const h = randInt(1, 11), m = pick([5,10,15,20,25,30,35,40,45,50,55]);
      const words = timeWords(timeMinutes(h, m));
      const answer = `${h}:${timePad(m)}`;
      return timeText(16, `Write <strong>${words}</strong> using digits.`, answer, [answer, answer.replace(':','.')]);
    }
    case 17: {
      const h = randInt(1, 11), m = pick([0,15,30,45]);
      return timeText(17, `Write <strong>${h}:${timePad(m)}</strong> in words.`, timeWords(timeMinutes(h,m)), timeWordsAccepted(timeMinutes(h,m)));
    }
    case 18: { const h = randInt(1,11), m = pick([5,10,15,20,25]); return timeNumber(18, `<strong>${m} minutes past ${h}</strong> is how many minutes after ${h}:00?`, m); }
    case 19: {
      const h = randInt(1,11), to = pick([5,10,15,20,25]);
      const m = 60 - to;
      return timeText(19, `<strong>${to} minutes to ${h + 1}</strong> is what digital time?`, `${h}:${timePad(m)}`, [`${h}:${timePad(m)}`, `${h}.${timePad(m)}`]);
    }
    case 20: {
      const h = randInt(1,11), m = pick([15,30,45]);
      const digital = `${h}:${timePad(m)}`, words = timeWords(timeMinutes(h,m));
      return timeChoice(20, `Which expression is equivalent to <strong>${digital}</strong>?`, [words, timeWords(timeMinutes(h,(m+15)%60)), `${m} minutes to ${h}`], 0);
    }

    // Practice 3 — AM/PM
    case 21: return timeChoice(21, 'What does <strong>am</strong> describe?', ['Times from midnight to before noon', 'Times from noon to before midnight', 'Only times after 6 pm'], 0);
    case 22: return timeChoice(22, 'What does <strong>pm</strong> describe?', ['Times from noon to before midnight', 'Times from midnight to before noon', 'Only times before school'], 0);
    case 23: { const h=randInt(6,11); return timeText(23, `A breakfast club starts at ${h}:15 in the morning. Write the time with am or pm.`, `${h}:15 am`, [`${h}:15 am`,`${h}:15am`]); }
    case 24: { const h=randInt(1,5); return timeText(24, `A lesson begins at ${h}:30 in the afternoon. Write the time with am or pm.`, `${h}:30 pm`, [`${h}:30 pm`,`${h}:30pm`]); }
    case 25: { const h=randInt(6,10); return timeText(25, `A concert begins at ${h}:00 in the evening. Write the time with am or pm.`, `${h}:00 pm`, [`${h}:00 pm`,`${h}:00pm`]); }
    case 26: return timeChoice(26, 'Which time means <strong>noon</strong>?', ['12:00 pm', '12:00 am', '00:30'], 0);
    case 27: return timeChoice(27, 'Which time means <strong>midnight</strong>?', ['12:00 am', '12:00 pm', '12:00 noon'], 0);
    case 28: {
      const scenarios=[['School starts at 8:45 __.','am'],['Dinner is at 6:30 __.','pm'],['A morning swim starts at 7:10 __.','am'],['A movie starts at 7:20 in the evening: 7:20 __.','pm']];
      const [q,a]=pick(scenarios); return timeText(28, q, a);
    }
    case 29: return timeChoice(29, 'Which is the later time on the same day?', ['7:30 pm', '7:30 am', 'They are the same time'], 0);
    case 30: {
      const start = randInt(7,10), hours=randInt(2,4), finish=start+hours;
      return timeText(30, `A morning activity starts at ${start}:00 am and lasts ${hours} hours. Does it finish in the am or pm?`, finish < 12 ? 'am' : 'pm');
    }

    // Practice 4 — 12/24 hour
    case 31: { const h=randInt(0,23), m=pick([0,5,10,15,20,25,30,35,40,45,50,55]); return timeText(31, `Write <strong>${time24(timeMinutes(h,m))}</strong> in 12-hour time.`, time12(timeMinutes(h,m)), time12Accepted(timeMinutes(h,m))); }
    case 32: { const h=randInt(1,11), m=timeRandomMinute(); const t=timeMinutes(h,m); return timeText(32, `Convert <strong>${time12(t)}</strong> to 24-hour time.`, time24(t), time24Accepted(t)); }
    case 33: { const h=randInt(1,5), m=timeRandomMinute(), t=timeMinutes(h+12,m); return timeText(33, `Convert <strong>${time12(t)}</strong> to 24-hour time.`, time24(t), time24Accepted(t)); }
    case 34: { const h=randInt(6,11), m=timeRandomMinute(), t=timeMinutes(h+12,m); return timeText(34, `Convert <strong>${time12(t)}</strong> to 24-hour time.`, time24(t), time24Accepted(t)); }
    case 35: { const h=randInt(0,11), m=timeRandomMinute(), t=timeMinutes(h,m); return timeText(35, `Convert <strong>${time24(t)}</strong> to 12-hour time.`, time12(t), time12Accepted(t)); }
    case 36: { const h=randInt(12,17), m=timeRandomMinute(), t=timeMinutes(h,m); return timeText(36, `Convert <strong>${time24(t)}</strong> to 12-hour time.`, time12(t), time12Accepted(t)); }
    case 37: { const h=randInt(18,23), m=timeRandomMinute(), t=timeMinutes(h,m); return timeText(37, `Convert <strong>${time24(t)}</strong> to 12-hour time.`, time12(t), time12Accepted(t)); }
    case 38: {
      const noon = Math.random()<0.5;
      return timeText(38, `Convert <strong>${noon ? '12:00 pm' : '12:00 am'}</strong> to 24-hour time.`, noon ? '12:00' : '00:00', noon ? ['12:00','1200'] : ['00:00','0000','0:00']);
    }
    case 39: {
      const t1=timeMinutes(randInt(7,11),pick([0,15,30,45])), t2=t1+pick([30,45,60,90]);
      return timeChoice(39, 'Which time is later?', [time12(t1), time24(t2)], 1);
    }
    case 40: {
      const t=timeRandomDaytime(0,23), ask24=Math.random()<0.5;
      if (ask24) return timeText(40, `Write <strong>${time12(t)}</strong> in 24-hour time.`, time24(t), time24Accepted(t));
      return timeText(40, `Write <strong>${time24(t)}</strong> in 12-hour time.`, time12(t), time12Accepted(t));
    }

    // Practice 5 — Converting Time Units
    case 41: { const m=randInt(2,timeLevel(8,20,60)); return timeNumber(41, `Convert ${m} minutes to seconds.`, m*60); }
    case 42: { const m=randInt(2,timeLevel(8,20,60)); return timeNumber(42, `Convert ${m*60} seconds to minutes.`, m); }
    case 43: { const h=randInt(2,timeLevel(8,15,24)); return timeNumber(43, `Convert ${h} hours to minutes.`, h*60); }
    case 44: { const h=randInt(2,timeLevel(8,15,24)); return timeNumber(44, `Convert ${h*60} minutes to hours.`, h); }
    case 45: { const h=randInt(1,timeLevel(4,7,12)), m=pick([5,10,15,20,25,30,35,40,45,50,55]); return timeNumber(45, `Convert ${h} h ${m} min to minutes.`, h*60+m); }
    case 46: { const h=randInt(1,timeLevel(4,7,12)), m=pick([5,10,15,20,25,30,35,40,45,50,55]), total=h*60+m; const ans=timeDurationText(total); return timeText(46, `Convert ${total} minutes to hours and minutes.`, ans, timeDurationAccepted(total)); }
    case 47: { const d=randInt(2,timeLevel(7,14,30)); return timeNumber(47, `Convert ${d} days to hours.`, d*24); }
    case 48: { const d=randInt(1,timeLevel(5,10,20)), h=randInt(1,23), total=d*24+h, dayWord=d===1?'day':'days', hourWord=h===1?'hour':'hours', ans=`${d} ${dayWord} ${h} ${hourWord}`; return timeText(48, `Convert ${total} hours to days and hours.`, ans, [ans,`${d} days ${h} hours`,`${d} day ${h} hours`,`${d}d ${h}h`,`${d}d${h}h`]); }
    case 49: { const w=randInt(2,timeLevel(8,15,30)); return timeNumber(49, `Convert ${w} weeks to days.`, w*7); }
    case 50: {
      const d=randInt(1,timeLevel(3,7,12)), h=randInt(1,23), m=pick([0,15,30,45]);
      return timeNumber(50, `${d} days, ${h} hours and ${m} minutes is how many minutes altogether?`, d*1440+h*60+m);
    }

    // Practice 6 — Finding Duration
    case 51: { const start=pick([0,5,10,15,20,25,30,35]), dur=pick([10,15,20,25]); if(start+dur>=60) return generateTimePoint(51); return timeNumber(51, `An activity starts at 4:${timePad(start)} pm and finishes at 4:${timePad(start+dur)} pm. How many minutes does it last?`, dur); }
    case 52: { const h=randInt(7,18), m=pick([35,40,45,50]), dur=pick([20,25,30,35]); return timeNumber(52, `A lesson starts at ${time12(timeMinutes(h,m))} and finishes at ${time12(timeMinutes(h,m)+dur)}. How many minutes does it last?`, dur); }
    case 53: { const start=timeRandomDaytime(7,12), dur=timeLevel(randInt(1,3)*60, timeRandomDuration(90,240), randInt(120,360)); return timeNumber(53, `A trip starts at ${time12(start)} and finishes at ${time12(start+dur)}. How many minutes does it last?`, dur); }
    case 54: { const start=timeMinutes(randInt(7,10),pick([0,15,30,45])), finish=timeMinutes(randInt(13,16),pick([0,15,30,45])); return timeNumber(54, `A school event begins at ${time12(start)} and ends at ${time12(finish)}. How many minutes does it last?`, finish-start); }
    case 55: { const start=timeMinutes(11,pick([10,20,30,40,50])), finish=timeMinutes(12+randInt(0,2),pick([0,10,20,30,40,50])); return timeNumber(55, `A session starts at ${time12(start)} and ends at ${time12(finish)}. How many minutes does it last?`, finish-start); }
    case 56: { const start=timeMinutes(randInt(13,16),pick([0,15,30,45])), finish=timeMinutes(randInt(18,21),pick([0,15,30,45])); return timeNumber(56, `An event starts at ${time12(start)} and finishes at ${time12(finish)}. How many minutes does it last?`, finish-start); }
    case 57: { const start=timeMinutes(randInt(7,15),timeRandomMinute()), dur=timeLevel(timeRandomDuration(25,75),timeRandomDuration(45,150),randInt(70,240)), finish=start+dur; return timeNumber(57, `A service leaves at ${time24(start)} and arrives at ${time24(finish)}. Find the journey time in minutes.`, dur); }
    case 58: { const start=timeRandomDaytime(6,15), dur=timeLevel(pick([60,75,90,105]),timeRandomDuration(70,180),randInt(95,300)), finish=start+dur; const ans=timeDurationText(dur); return timeText(58, `A journey starts at ${time12(start)} and finishes at ${time12(finish)}. Write the duration in hours and minutes.`, ans, timeDurationAccepted(dur)); }
    case 59: { const d1=randInt(35,120), d2=d1+randInt(10,80); return timeChoice(59, 'Which duration is longer?', [timeDurationText(d1), timeDurationText(d2)], 1); }
    case 60: {
      const a=timeLevel(timeRandomDuration(20,40),timeRandomDuration(25,55),randInt(35,70)), breakMin=timeLevel(timeRandomDuration(5,15),timeRandomDuration(10,25),randInt(15,35)), b=timeLevel(timeRandomDuration(20,40),timeRandomDuration(30,60),randInt(45,90));
      return timeNumber(60, `A training session has ${a} minutes of practice, a ${breakMin}-minute break, then ${b} more minutes of practice. How many minutes pass from the start to the finish?`, a+breakMin+b);
    }

    // Practice 7 — Finish time
    case 61: { const start=timeRandomDaytime(7,18), dur=pick([5,10,15,20,25]); const finish=start+dur; return timeText(61, `An activity starts at ${time12(start)} and lasts ${dur} minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 62: { const start=timeMinutes(randInt(6,17),pick([0,15,30,45])), h=randInt(1,timeLevel(3,5,7)), finish=start+h*60; return timeText(62, `A trip starts at ${time12(start)} and lasts ${h} hours. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 63: { const start=timeRandomDaytime(6,16), dur=timeLevel(pick([45,75,90]),timeRandomDuration(65,150),randInt(95,240)), finish=start+dur; return timeText(63, `A movie starts at ${time12(start)} and lasts ${timeDurationText(dur)}. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 64: { const h=randInt(7,18), start=timeMinutes(h,pick([0,5,10,15,20])), dur=pick([10,15,20,25]); if ((start%60)+dur>=60) return generateTimePoint(64); const finish=start+dur; return timeText(64, `A task begins at ${time12(start)} and lasts ${dur} minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 65: { const h=randInt(7,18), start=timeMinutes(h,pick([35,40,45,50,55])), dur=pick([15,20,25,30,35]); const finish=start+dur; return timeText(65, `A class starts at ${time12(start)} and lasts ${dur} minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 66: { const start=timeMinutes(11,pick([15,30,40,45,50])), dur=timeLevel(timeRandomDuration(30,100),timeRandomDuration(30,100),randInt(30,100)), finish=start+dur; return timeText(66, `A meeting begins at ${time12(start)} and lasts ${dur} minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 67: { const start=timeMinutes(randInt(13,19),pick([0,10,20,30,40,50])), dur=timeLevel(timeRandomDuration(40,180),timeRandomDuration(40,180),randInt(40,180)), finish=start+dur; return timeText(67, `An event begins at ${time12(start)} and lasts ${timeDurationText(dur)}. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 68: { const start=timeMinutes(randInt(7,17),timeRandomMinute()), dur=timeLevel(timeRandomDuration(35,90),timeRandomDuration(35,150),randInt(35,240)), finish=start+dur; return timeText(68, `A service leaves at ${time24(start)} and takes ${dur} minutes. Write the arrival time in 24-hour notation.`, time24(finish), time24Accepted(finish)); }
    case 69: { const start=timeRandomDaytime(7,15), a=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)), b=timeLevel(timeRandomDuration(10,40),timeRandomDuration(10,40),randInt(10,40)), c=timeLevel(timeRandomDuration(20,70),timeRandomDuration(20,70),randInt(20,70)), finish=start+a+b+c; return timeText(69, `A programme starts at ${time12(start)}. It has activities lasting ${a}, ${b} and ${c} minutes with no gaps. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 70: { const start=timeRandomDaytime(7,14), a=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)), breakMin=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), b=timeLevel(timeRandomDuration(25,75),timeRandomDuration(25,75),randInt(25,75)), finish=start+a+breakMin+b; return timeText(70, `A workshop starts at ${time12(start)}. The first part lasts ${a} minutes, then there is a ${breakMin}-minute break, followed by ${b} minutes of work. When does the workshop finish?`, time12(finish), time12Accepted(finish)); }

    // Practice 8 — Start time
    case 71: { const finish=timeRandomDaytime(8,20), dur=pick([5,10,15,20,25]), start=finish-dur; return timeText(71, `An activity finishes at ${time12(finish)} and lasts ${dur} minutes. When did it start?`, time12(start), time12Accepted(start)); }
    case 72: { const finish=timeMinutes(randInt(9,21),pick([0,15,30,45])), h=randInt(1,timeLevel(3,5,7)), start=finish-h*60; if(start<0) return generateTimePoint(72); return timeText(72, `A trip finishes at ${time12(finish)} after ${h} hours. When did it start?`, time12(start), time12Accepted(start)); }
    case 73: { const finish=timeRandomDaytime(10,21), dur=timeLevel(timeRandomDuration(65,120),timeRandomDuration(65,180),randInt(65,300)), start=finish-dur; if(start<300) return generateTimePoint(73); return timeText(73, `A film ends at ${time12(finish)} and lasts ${timeDurationText(dur)}. When did it start?`, time12(start), time12Accepted(start)); }
    case 74: { const h=randInt(8,20), finish=timeMinutes(h,pick([30,35,40,45,50,55])), dur=pick([5,10,15,20]); if ((finish%60)-dur<0) return generateTimePoint(74); const start=finish-dur; return timeText(74, `A task finishes at ${time12(finish)} and lasts ${dur} minutes. When did it start?`, time12(start), time12Accepted(start)); }
    case 75: { const finish=timeMinutes(randInt(8,20),pick([0,5,10,15,20])), dur=pick([15,20,25,30,35]), start=finish-dur; return timeText(75, `A lesson finishes at ${time12(finish)} and lasts ${dur} minutes. When did it start?`, time12(start), time12Accepted(start)); }
    case 76: { const finish=timeMinutes(12,pick([10,20,30,40,50])), dur=timeLevel(timeRandomDuration(30,110),timeRandomDuration(30,110),randInt(30,110)), start=finish-dur; return timeText(76, `A morning session ends at ${time12(finish)} and lasts ${dur} minutes. When did it start?`, time12(start), time12Accepted(start)); }
    case 77: { const finish=timeMinutes(randInt(18,22),pick([0,10,20,30,40,50])), dur=timeLevel(timeRandomDuration(45,180),timeRandomDuration(45,180),randInt(45,180)), start=finish-dur; return timeText(77, `An evening event finishes at ${time12(finish)} and lasts ${timeDurationText(dur)}. When did it start?`, time12(start), time12Accepted(start)); }
    case 78: { const finish=timeMinutes(randInt(9,22),timeRandomMinute()), dur=timeLevel(timeRandomDuration(35,90),timeRandomDuration(35,150),randInt(35,240)), start=finish-dur; if(start<0) return generateTimePoint(78); return timeText(78, `A service arrives at ${time24(finish)} after a journey of ${dur} minutes. Write the departure time in 24-hour notation.`, time24(start), time24Accepted(start)); }
    case 79: { const finish=timeRandomDaytime(13,21), b=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)), gap=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), a=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)), start=finish-b-gap-a; if(start<360) return generateTimePoint(79); return timeText(79, `A programme finishes at ${time12(finish)}. Its second activity lasted ${b} minutes, before that there was a ${gap}-minute break, and the first activity lasted ${a} minutes. When did the first activity start?`, time12(start), time12Accepted(start)); }
    case 80: { const deadline=timeRandomDaytime(12,20), travel=timeLevel(timeRandomDuration(25,70),timeRandomDuration(25,70),randInt(25,70)), ready=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), start=deadline-travel-ready; return timeText(80, `Mia must arrive by ${time12(deadline)}. The journey takes ${travel} minutes and she needs ${ready} minutes to get ready immediately before leaving. What is the latest time she should start getting ready?`, time12(start), time12Accepted(start)); }

    // Practice 9 — Crossing Midnight
    case 81: return timeChoice(81, 'Which time is immediately after midnight?', ['12:05 am', '11:55 pm', '12:05 pm'], 0);
    case 82: { const start=timeMinutes(22,pick([0,15,30,45])); return timeNumber(82, `How many minutes are there from ${time12(start)} to midnight?`, 1440-start); }
    case 83: { const finish=pick([15,30,45,60,75,90]); return timeNumber(83, `How many minutes after midnight is ${time12(finish)}?`, finish); }
    case 84: { const start=timeMinutes(randInt(21,23),pick([0,15,30,45])), finish=timeLevel(timeRandomDuration(10,120),timeRandomDuration(10,120),randInt(10,120)); return timeNumber(84, `A journey starts at ${time12(start)} and ends at ${time12(finish)} the next day. How many minutes does it last?`, 1440-start+finish); }
    case 85: { const start=timeMinutes(randInt(21,23),pick([0,15,30,45])), dur=timeLevel(timeRandomDuration(60,240),timeRandomDuration(60,240),randInt(60,240)), finish=start+dur; if(finish<1440) return generateTimePoint(85); return timeText(85, `A flight leaves at ${time12(start)} and lasts ${timeDurationText(dur)}. When does it arrive the next day?`, time12(finish), time12Accepted(finish)); }
    case 86: { const finish=timeLevel(timeRandomDuration(15,180),timeRandomDuration(15,180),randInt(15,180)), dur=timeLevel(timeRandomDuration(finish+30,finish+240),timeRandomDuration(finish+30,finish+240),randInt(finish+30,finish+240)), start=finish-dur; return timeText(86, `An overnight event finishes at ${time12(finish)} and lasts ${timeDurationText(dur)}. When did it start the previous evening?`, time12(start), time12Accepted(start)); }
    case 87: { const options=[['12:00 am','00:00'],['12:30 am','00:30'],['11:45 pm','23:45']]; const [a,b]=pick(options); return timeText(87, `Convert <strong>${a}</strong> to 24-hour notation.`, b, [b,b.replace(':','')]); }
    case 88: { const start=timeMinutes(randInt(20,23),pick([0,15,30,45])), minimum=1440-start+timeLevel(15,15,1), dur=timeLevel(timeRandomDuration(minimum,360),timeRandomDuration(minimum,360),randInt(minimum,360)), finish=start+dur; return timeText(88, `An overnight bus leaves at ${time12(start)} and takes ${timeDurationText(dur)}. What time does it arrive the next day?`, time12(finish), time12Accepted(finish)); }
    case 89: { const start=timeMinutes(randInt(20,23),pick([0,15,30,45])), finish=timeLevel(timeRandomDuration(60,300),timeRandomDuration(60,300),randInt(60,300)); return timeNumber(89, `A night shift starts at ${time12(start)} and ends at ${time12(finish)} the next day. How many minutes is the shift?`, 1440-start+finish); }
    case 90: { const start=timeMinutes(22,pick([15,30,45])), work1=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), breakMin=timeLevel(timeRandomDuration(15,35),timeRandomDuration(15,35),randInt(15,35)), work2=timeLevel(timeRandomDuration(60,140),timeRandomDuration(60,140),randInt(60,140)), finish=start+work1+breakMin+work2; return timeText(90, `A night programme starts at ${time12(start)}. It has ${work1} minutes of activity, a ${breakMin}-minute break, then ${work2} more minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }

    // Practice 10 — Days, Weeks, Months and Years
    case 91: { const m=randInt(0,11); return timeNumber(91, `How many days are in ${TIME_MONTHS[m][0]} in a normal year?`, TIME_MONTHS[m][1]); }
    case 92: return timeChoice(92, 'Which month has 30 days?', ['April', 'July', 'January'], 0);
    case 93: return timeChoice(93, 'Which month has 31 days?', ['August', 'June', 'September'], 0);
    case 94: { const leap=Math.random()<0.5; return timeNumber(94, `How many days are in February in ${leap ? 'a leap year' : 'a normal year'}?`, leap?29:28); }
    case 95: { if(state.level==='foundation') return timeChoice(95, 'Which statement about a leap year is correct?', ['February has 29 days', 'February always has 28 days', 'Every month has 31 days'], 0); const leap=pick([2024,2028,2032,2036]), non1=leap+1, non2=leap+2; return timeChoice(95, 'Which of these years is a leap year?', [String(leap),String(non1),String(non2)], 0); }
    case 96: { const w=randInt(1,timeLevel(5,12,30)), d=randInt(1,6); return timeNumber(96, `${w} weeks and ${d} days is how many days altogether?`, w*7+d); }
    case 97: { const leap=state.level==='challenge' && Math.random()<0.4, m=leap?1:randInt(0,11), max=timeDaysInMonth(m,leap), day=leap?randInt(22,27):randInt(1,Math.max(1,max-10)), add=randInt(2,timeLevel(7,14,25)), shifted=timeShiftDate(m,day,add,leap), note=leap?' This is a leap year.':''; return timeText(97, `${add} days after ${timeDateText(m,day)} is what date?${note}`, timeDateText(shifted.month,shifted.day), timeDateAccepted(shifted.month,shifted.day)); }
    case 98: { const leap=state.level==='challenge' && Math.random()<0.4, m=leap?2:randInt(0,11), day=leap?randInt(1,8):randInt(11,timeDaysInMonth(m,leap)), sub=randInt(2,timeLevel(7,14,25)), shifted=timeShiftDate(m,day,-sub,leap), note=leap?' This is a leap year.':''; return timeText(98, `${sub} days before ${timeDateText(m,day)} is what date?${note}`, timeDateText(shifted.month,shifted.day), timeDateAccepted(shifted.month,shifted.day)); }
    case 99: { const m=randInt(0,11), a=randInt(1,15), b=randInt(a+1,timeDaysInMonth(m)); return timeNumber(99, `How many days pass from ${timeDateText(m,a)} to ${timeDateText(m,b)}?`, b-a); }
    case 100: { const m=randInt(0,10), start=timeDaysInMonth(m)-randInt(3,10), end=randInt(2,12); return timeNumber(100, `How many days pass from ${timeDateText(m,start)} to ${timeDateText(m+1,end)}?`, timeDaysInMonth(m)-start+end); }

    // Practice 11 — Calendar Reasoning
    case 101: { const d=pick(TIME_DAYS); return timeText(101, `The day after ${d} is what day?`, TIME_DAYS[timeDayShift(TIME_DAYS.indexOf(d),1)]); }
    case 102: { const d=pick(TIME_DAYS); return timeText(102, `What day of the week is exactly one week after ${d}?`, d); }
    case 103: { const i=randInt(0,6), n=randInt(2,timeLevel(10,25,60)); return timeText(103, `${n} days after ${TIME_DAYS[i]} is what day of the week?`, TIME_DAYS[timeDayShift(i,n)]); }
    case 104: { const i=randInt(0,6), n=randInt(2,timeLevel(10,25,60)); return timeText(104, `${n} days before ${TIME_DAYS[i]} is what day of the week?`, TIME_DAYS[timeDayShift(i,-n)]); }
    case 105: { const n=randInt(8,timeLevel(30,80,200)); return timeNumber(105, `After removing as many complete weeks as possible from ${n} days, how many days remain?`, n%7); }
    case 106: { const startDay=randInt(0,6), date=randInt(2,28); return timeText(106, `The 1st day of a month is ${TIME_DAYS[startDay]}. What day of the week is the ${date}th?`, TIME_DAYS[timeDayShift(startDay,date-1)]); }
    case 107: { const targetDay=randInt(0,6), date=randInt(8,28), earlier=randInt(2,7), targetIndex=timeDayShift(targetDay,-earlier); return timeText(107, `The ${date}th of a month is ${TIME_DAYS[targetDay]}. What day of the week was the ${date-earlier}th?`, TIME_DAYS[targetIndex]); }
    case 108: {
      const monthLen=pick([28,29,30,31]), start=randInt(0,6), target=randInt(0,6);
      let count=0; for(let d=1;d<=monthLen;d++) if(timeDayShift(start,d-1)===target) count++;
      return timeNumber(108, `A ${monthLen}-day month begins on ${TIME_DAYS[start]}. How many ${TIME_DAYS[target]}s are in that month?`, count);
    }
    case 109: {
      const monthLen=pick([28,30,31]), start=randInt(0,6), d1=randInt(0,6), d2=timeDayShift(d1,randInt(1,5));
      let count=0; for(let d=1;d<=monthLen;d++){const w=timeDayShift(start,d-1); if(w===d1||w===d2) count++;}
      return timeNumber(109, `A ${monthLen}-day month begins on ${TIME_DAYS[start]}. Ava trains every ${TIME_DAYS[d1]} and ${TIME_DAYS[d2]}. How many training days are in the month?`, count);
    }
    case 110: {
      const start=randInt(0,6), monthLen=pick([28,30,31]);
      if(state.level==='foundation') {
        const firstMeeting=randInt(1,7), fourthMeeting=firstMeeting+21, weekday=TIME_DAYS[timeDayShift(start,firstMeeting-1)];
        return timeChoice(110, `A ${monthLen}-day month begins on ${TIME_DAYS[start]}. A club first meets on the ${timeOrdinal(firstMeeting)} and then every 7 days. Which statement about its fourth meeting is correct?`, [`It is on the ${timeOrdinal(fourthMeeting)}, a ${weekday}.`, `It is on the ${timeOrdinal(fourthMeeting+1)}, a ${weekday}.`, `It is on the ${timeOrdinal(fourthMeeting)}, a ${TIME_DAYS[timeDayShift(TIME_DAYS.indexOf(weekday),1)]}.`], 0);
      }
      const d1=randInt(0,6), d2=timeDayShift(d1,randInt(1,5));
      const scheduled=[]; for(let d=1;d<=monthLen;d++){const w=timeDayShift(start,d-1); if(w===d1||w===d2) scheduled.push(d);}
      if(state.level==='core') {
        const cutoff=randInt(14,monthLen), count=scheduled.filter(d=>d<=cutoff).length;
        return timeNumber(110, `A ${monthLen}-day month begins on ${TIME_DAYS[start]}. A club meets every ${TIME_DAYS[d1]} and ${TIME_DAYS[d2]}. How many meetings take place from the 1st through the ${timeOrdinal(cutoff)}?`, count);
      }
      const cancelled=pick(scheduled), remaining=scheduled.length-1;
      return timeNumber(110, `A ${monthLen}-day month begins on ${TIME_DAYS[start]}. Training is every ${TIME_DAYS[d1]} and ${TIME_DAYS[d2]}. The session on the ${timeOrdinal(cancelled)} is cancelled. How many training sessions still take place in the month?`, remaining);
    }

    // Practice 12 — Reading Timetables
    case 111: { const s=timeTimetable(); const pickS=pick(s); return timeText(111, `${timeTimetableHtml(s)}What time does Service ${pickS.name} leave?`, time24(pickS.depart), time24Accepted(pickS.depart)); }
    case 112: { const s=timeTimetable(); const pickS=pick(s); return timeText(112, `${timeTimetableHtml(s)}What time does Service ${pickS.name} arrive?`, time24(pickS.arrive), time24Accepted(pickS.arrive)); }
    case 113: { const s=timeTimetable(); const pickS=pick(s); return timeNumber(113, `${timeTimetableHtml(s)}How many minutes does Service ${pickS.name} take?`, pickS.duration); }
    case 114: { const s=timeTimetable(), ordered=[...s].sort((a,b)=>a.depart-b.depart), targetIndex=randInt(0,ordered.length-1), target=ordered[targetIndex], previous=targetIndex===0?target.depart-30:ordered[targetIndex-1].depart, latestReach=target.depart-1, earliestReach=Math.max(previous+1,target.depart-timeLevel(15,20,25)); const step=timeLevel(5,5,1), lo=Math.ceil(earliestReach/step), hi=Math.floor(latestReach/step), after=lo<=hi?randInt(lo,hi)*step:latestReach; return timeText(114, `${timeTimetableHtml(s)}A passenger reaches the stop at ${time24(after)}. Which is the next available service?`, `Service ${target.name}`, [`Service ${target.name}`, target.name]); }
    case 115: { const s=timeTimetable(), pair=timeShuffle(s).slice(0,2), askLater=Math.random()<0.5, a=pair[0], b=pair[1], correct=askLater?(a.depart>b.depart?0:1):(a.depart<b.depart?0:1); return timeChoice(115, `${timeTimetableHtml(s)}Which service leaves ${askLater?'later':'earlier'}, ${a.name} or ${b.name}?`, [`Service ${a.name}`,`Service ${b.name}`,'They leave at the same time'], a.depart===b.depart?2:correct); }
    case 116: { const s=timeTimetable(), pair=timeShuffle(s).slice(0,2), askLater=Math.random()<0.5, a=pair[0], b=pair[1], correct=a.arrive===b.arrive?2:(askLater?(a.arrive>b.arrive?0:1):(a.arrive<b.arrive?0:1)); return timeChoice(116, `${timeTimetableHtml(s)}Which service arrives ${askLater?'later':'earlier'}, ${a.name} or ${b.name}?`, [`Service ${a.name}`,`Service ${b.name}`,'They arrive at the same time'], correct); }
    case 117: { const s=timeTimetable(); const min=Math.min(...s.map(x=>x.duration)); const fastestList=s.filter(x=>x.duration===min); if(fastestList.length!==1) return generateTimePoint(117); const fastest=fastestList[0]; return timeText(117, `${timeTimetableHtml(s)}Which service has the shortest journey time?`, `Service ${fastest.name}`, [`Service ${fastest.name}`,fastest.name]); }
    case 118: { const first=timeTimetable(); const a=pick(first); const secondStart=a.arrive+timeLevel(timeRandomDuration(10,40),timeRandomDuration(10,40),randInt(10,40)); const wait=secondStart-a.arrive; return timeNumber(118, `A first service arrives at ${time24(a.arrive)}. The connecting service leaves at ${time24(secondStart)}. How many minutes is the waiting time?`, wait); }
    case 119: { const s=timeTimetable(); const anchor=pick(s), deadline=anchor.arrive+timeLevel(pick([0,5,10]),pick([0,5,10]),randInt(0,12)); const valid=s.filter(x=>x.arrive<=deadline); if(!valid.length) return generateTimePoint(119); const best=valid.reduce((a,b)=>a.depart>b.depart?a:b); return timeText(119, `${timeTimetableHtml(s)}You must arrive by ${time24(deadline)}. Which is the latest service you can take and still meet the deadline?`, `Service ${best.name}`, [`Service ${best.name}`,best.name]); }
    case 120: { const s=timeTimetable(), from=pick(s), candidates=s.filter(x=>x.arrive>from.depart); if(!candidates.length) return generateTimePoint(120); const to=pick(candidates); return timeNumber(120, `${timeTimetableHtml(s)}How many minutes pass from the departure of Service ${from.name} until the arrival of Service ${to.name}?`, to.arrive-from.depart); }

    // Practice 13 — Journey and Waiting Time
    case 121: { const start=timeRandomDaytime(7,15), journey=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), wait=timeLevel(timeRandomDuration(10,35),timeRandomDuration(10,35),randInt(10,35)), next=start+journey+wait; return timeText(121, `A bus leaves at ${time12(start)} and travels for ${journey} minutes. After arriving, the passenger waits ${wait} minutes for the next service. At what time does the next service leave?`, time12(next), time12Accepted(next)); }
    case 122: { const start=timeRandomDaytime(6,14), a=timeLevel(timeRandomDuration(25,70),timeRandomDuration(25,70),randInt(25,70)), transfer=timeLevel(timeRandomDuration(5,20),timeRandomDuration(5,20),randInt(5,20)), b=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), finish=start+a+transfer+b; return timeText(122, `A two-stage journey starts at ${time12(start)}. The first stage takes ${a} minutes, the transfer takes ${transfer} minutes, and the second stage takes ${b} minutes. When does the journey finish?`, time12(finish), time12Accepted(finish)); }
    case 123: { const arrival=timeRandomDaytime(8,16), walk=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), next=arrival+walk+timeLevel(timeRandomDuration(5,25),timeRandomDuration(5,25),randInt(5,25)); return timeNumber(123, `A bus arrives at ${time12(arrival)}. It takes ${walk} minutes to walk to the train platform. The train leaves at ${time12(next)}. How many minutes are left after reaching the platform?`, next-arrival-walk); }
    case 124: { const arrive=timeRandomDaytime(8,16), depart=arrive+timeLevel(timeRandomDuration(10,45),timeRandomDuration(10,45),randInt(8,45)); return timeNumber(124, `A bus arrives at ${time24(arrive)} and the train departs at ${time24(depart)}. Find the transfer waiting time in minutes.`, depart-arrive); }
    case 125: { const arrive=timeRandomDaytime(8,16), walk=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), buffer=timeLevel(pick([-5,0,5,10,15,20]),pick([-5,0,5,10,15,20]),randInt(-5,20)), depart=arrive+walk+buffer; return timeChoice(125, `A bus arrives at ${time12(arrive)}. It takes ${walk} minutes to reach the train platform. The train leaves at ${time12(depart)}. Can the connection be made if the passenger must be on the platform by the departure time?`, ['Yes','No','Not enough information'], buffer>=0?0:1); }
    case 126: { const start=timeRandomDaytime(7,15), a=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), br=timeLevel(timeRandomDuration(10,35),timeRandomDuration(10,35),randInt(10,35)), b=timeLevel(timeRandomDuration(30,90),timeRandomDuration(30,90),randInt(30,90)), finish=start+a+br+b; return timeText(126, `A trip leaves at ${time12(start)}. The first travel section takes ${a} minutes, there is a ${br}-minute break, then ${b} more minutes of travel. What time does the trip finish?`, time12(finish), time12Accepted(finish)); }
    case 127: { const start=timeRandomDaytime(6,13), drive1=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), stop1=timeLevel(timeRandomDuration(5,20),timeRandomDuration(5,20),randInt(5,20)), drive2=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), stop2=timeLevel(0,timeRandomDuration(5,20),randInt(10,30)), drive3=timeLevel(0,0,randInt(30,70)), finish=start+drive1+drive2+drive3+stop1+stop2; return timeText(127, `A journey begins at ${time12(start)}. Travel sections last ${[drive1,drive2,drive3].filter(Boolean).join(', ')} minutes and stops total ${stop1+stop2} minutes. What time does the traveller arrive?`, time12(finish), time12Accepted(finish)); }
    case 128: { const event=timeRandomDaytime(10,20), early=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), travel=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)), leave=event-early-travel; return timeText(128, `Mia must arrive ${early} minutes before an event at ${time12(event)}. Her journey takes ${travel} minutes. What is the latest time she should leave?`, time12(leave), time12Accepted(leave)); }
    case 129: { const start=timeRandomDaytime(7,12), a=randInt(45,100), b=a+randInt(-20,20); if(a===b) return generateTimePoint(129); return timeChoice(129, `Plan A takes ${a} minutes. Plan B takes ${b} minutes. Both start at ${time12(start)}. Which plan arrives earlier?`, ['Plan A','Plan B','They arrive together'], a<b?0:1); }
    case 130: { const start=timeRandomDaytime(6,12), leg1=timeLevel(timeRandomDuration(25,60),timeRandomDuration(25,60),randInt(25,60)), wait=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), leg2=timeLevel(timeRandomDuration(30,75),timeRandomDuration(30,75),randInt(30,75)), walk=timeLevel(timeRandomDuration(5,20),timeRandomDuration(5,20),randInt(5,20)), finish=start+leg1+wait+leg2+walk; return timeText(130, `A journey starts at ${time12(start)}. The first leg takes ${leg1} minutes, the transfer wait is ${wait} minutes, the second leg takes ${leg2} minutes, and the final walk takes ${walk} minutes. When does the traveller arrive?`, time12(finish), time12Accepted(finish)); }

    // Practice 14 — Real-life time
    case 131: { const start=timeMinutes(9,0), lessons=randInt(2,4), lesson=timeLevel(30,45,50), breaks=(lessons-1)*timeLevel(5,10,15), finish=start+lessons*lesson+breaks; return timeText(131, `School starts at ${time12(start)}. There are ${lessons} lessons of ${lesson} minutes with ${timeLevel(5,10,15)}-minute breaks between lessons. When does this block finish?`, time12(finish), time12Accepted(finish)); }
    case 132: { const start=timeRandomDaytime(15,18), warm=timeLevel(timeRandomDuration(10,20),timeRandomDuration(10,20),randInt(10,20)), train=timeLevel(timeRandomDuration(45,90),timeRandomDuration(45,90),randInt(45,90)), cool=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), finish=start+warm+train+cool; return timeText(132, `Training starts at ${time12(start)}. Warm-up takes ${warm} minutes, training takes ${train} minutes and cool-down takes ${cool} minutes. When does it finish?`, time12(finish), time12Accepted(finish)); }
    case 133: { const start=timeRandomDaytime(16,20), previews=timeLevel(timeRandomDuration(10,20),timeRandomDuration(10,20),randInt(10,20)), film=timeLevel(timeRandomDuration(80,130),timeRandomDuration(80,130),randInt(80,130)), finish=start+previews+film; return timeText(133, `A cinema session begins at ${time12(start)}. Previews last ${previews} minutes and the film lasts ${film} minutes. When does the film finish?`, time12(finish), time12Accepted(finish)); }
    case 134: { const bake=timeLevel(timeRandomDuration(25,60),timeRandomDuration(25,60),randInt(25,60)), cool=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), deadline=timeRandomDaytime(11,18), start=deadline-bake-cool; return timeText(134, `A cake must finish cooling by ${time12(deadline)}. It bakes for ${bake} minutes and cools for ${cool} minutes. What is the latest time baking can start?`, time12(start), time12Accepted(start)); }
    case 135: { const start=timeMinutes(randInt(7,10),pick([0,15,30,45])), finish=timeMinutes(randInt(15,19),pick([0,15,30,45])), br=timeLevel(timeRandomDuration(20,60),timeRandomDuration(20,60),randInt(20,60)); return timeNumber(135, `A work shift runs from ${time12(start)} to ${time12(finish)} with an unpaid break of ${br} minutes. How many minutes are actually worked?`, finish-start-br); }
    case 136: { const appt=timeRandomDaytime(9,16), travel=timeLevel(timeRandomDuration(15,45),timeRandomDuration(15,45),randInt(15,45)), early=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), leave=appt-travel-early; return timeText(136, `An appointment is at ${time12(appt)}. The journey takes ${travel} minutes and you want to arrive ${early} minutes early. When should you leave?`, time12(leave), time12Accepted(leave)); }
    case 137: { const park=timeRandomDaytime(8,17), limit=pick([30,60,90,120]), returnTime=park+limit+timeLevel(pick([-15,-10,-5,0,5,10,15,20]),pick([-15,-10,-5,0,5,10,15,20]),randInt(-15,20)); return timeChoice(137, `A car is parked at ${time12(park)} in a ${limit}-minute parking space. The driver returns at ${time12(returnTime)}. Is the driver within the limit?`, ['Yes','No','Not enough information'], returnTime-park<=limit?0:1); }
    case 138: { const open=timeMinutes(randInt(7,10),0), close=timeMinutes(randInt(16,20),0), visit=timeRandomDaytime(8,18), duration=randInt(30,120); const ok=visit>=open && visit+duration<=close; return timeChoice(138, `A centre is open from ${time12(open)} to ${time12(close)}. A ${duration}-minute visit starts at ${time12(visit)}. Can the whole visit take place before closing?`, ['Yes','No','Not enough information'], ok?0:1); }
    case 139: { const a=randInt(20,50), b=randInt(30,60), c=randInt(25,55), breaks=timeLevel(0,10,20), free=randInt(15,60), available=a+b+c+breaks+free, breakText=breaks?` There are also ${breaks} minutes of breaks.`:''; return timeNumber(139, `You have ${available} minutes available. Three activities take ${a}, ${b} and ${c} minutes.${breakText} How many minutes remain unused?`, free); }
    case 140: { const start=timeRandomDaytime(8,12), busy1=timeLevel(timeRandomDuration(30,60),timeRandomDuration(30,60),randInt(30,60)), busy2=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), busy3=timeLevel(0,timeRandomDuration(20,50),randInt(30,60)), free=timeLevel(timeRandomDuration(20,80),timeRandomDuration(20,80),randInt(20,80)), end=start+busy1+busy2+busy3+free; return timeNumber(140, `From ${time12(start)} to ${time12(end)}, activities take ${busy1}, ${busy2}${busy3?` and ${busy3}`:''} minutes. How many minutes are free?`, free); }

    // Practice 15 — Multi-step time reasoning
    case 141: { const finish=timeRandomDaytime(13,20), a=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), br=timeLevel(timeRandomDuration(10,25),timeRandomDuration(10,25),randInt(10,25)), b=timeLevel(timeRandomDuration(25,65),timeRandomDuration(25,65),randInt(25,65)), start=finish-a-br-b; return timeText(141, `A programme finishes at ${time12(finish)}. It contains ${a} minutes of activity, a ${br}-minute break and ${b} more minutes of activity. When did it start?`, time12(start), time12Accepted(start)); }
    case 142: { const start=timeRandomDaytime(7,13), a=timeLevel(timeRandomDuration(25,60),timeRandomDuration(25,60),randInt(25,60)), br=timeLevel(timeRandomDuration(10,25),timeRandomDuration(10,25),randInt(10,25)), b=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), walk=timeLevel(0,10,15), finish=start+a+br+b+walk; return timeText(142, `A day starts at ${time12(start)}. Stage 1 takes ${a} minutes, the break is ${br} minutes, stage 2 takes ${b} minutes${walk?`, and the final walk takes ${walk} minutes`:''}. When does everything finish?`, time12(finish), time12Accepted(finish)); }
    case 143: { const start=timeRandomDaytime(8,14), work1=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), br=timeLevel(timeRandomDuration(10,30),timeRandomDuration(10,30),randInt(10,30)), work2=timeLevel(timeRandomDuration(30,80),timeRandomDuration(30,80),randInt(30,80)), finish=start+work1+br+work2; return timeNumber(143, `A session runs from ${time12(start)} to ${time12(finish)}. It includes a ${br}-minute break. How many minutes of active work are there?`, work1+work2); }
    case 144: { const total=randInt(150,300), wait1=randInt(10,30), wait2=randInt(5,25); return timeNumber(144, `A trip takes ${total} minutes from start to finish, including waits of ${wait1} and ${wait2} minutes. How many minutes are spent actually travelling?`, total-wait1-wait2); }
    case 145: { const start=timeRandomDaytime(7,10), aTravel=randInt(50,100), aWait=randInt(5,25), bTravel=randInt(50,100), bWait=randInt(5,25); const a=aTravel+aWait,b=bTravel+bWait; return timeChoice(145, `Schedule A has ${aTravel} minutes of travel and ${aWait} minutes of waiting. Schedule B has ${bTravel} minutes of travel and ${bWait} minutes of waiting. Both leave at ${time12(start)}. Which arrives earlier?`, ['Schedule A','Schedule B','They arrive together'], a<b?0:a>b?1:2); }
    case 146: { const start=timeRandomDaytime(7,12), plans=[randInt(55,100),randInt(55,100),randInt(55,100)]; const min=Math.min(...plans); if(plans.filter(x=>x===min).length!==1) return generateTimePoint(146); const idx=plans.indexOf(min); return timeChoice(146, `Three routes leave at ${time12(start)}. Their total journey times are ${plans[0]}, ${plans[1]} and ${plans[2]} minutes. Which route arrives earliest?`, ['Route A','Route B','Route C'], idx); }
    case 147: { const base=timeMinutes(randInt(9,15),timeRandomMinute()), s=timeTimetable(base,4), arrivals=[...s].sort((a,b)=>a.arrive-b.arrive), pivot=arrivals[randInt(0,arrivals.length-1)], deadline=pivot.arrive+timeLevel(pick([0,5,10]),pick([0,5,10]),randInt(0,12)), valid=s.filter(x=>x.arrive<=deadline); if(!valid.length) return generateTimePoint(147); const best=valid.reduce((a,b)=>a.depart>b.depart?a:b); const rows=s.map(x=>[x.name,time24(x.depart),`${x.duration} min`,time24(x.arrive)]); return timeText(147, `${timeTable(['Service','Leaves','Journey','Arrives'],rows)}You must arrive by ${time24(deadline)}. Which is the latest service you can take?`, `Service ${best.name}`, [`Service ${best.name}`,best.name]); }
    case 148: { const deadline=timeRandomDaytime(9,18), travel=timeLevel(timeRandomDuration(25,60),timeRandomDuration(25,60),randInt(25,60)), walk=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), buffer=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), leave=deadline-travel-walk-buffer; return timeText(148, `You must be at a venue by ${time12(deadline)}. Travel takes ${travel} minutes, the final walk takes ${walk} minutes, and you want a ${buffer}-minute safety margin. What is the latest time you should leave?`, time12(leave), time12Accepted(leave)); }
    case 149: { const startDay=randInt(0,6), date=randInt(10,28), appt=timeRandomDaytime(9,16), travel=timeLevel(timeRandomDuration(20,50),timeRandomDuration(20,50),randInt(20,50)), weekday=TIME_DAYS[timeDayShift(startDay,date-1)], leave=appt-travel; const correct=`${weekday}, leave at ${time12(leave)}`; const wrongDay=`${TIME_DAYS[timeDayShift(startDay,date)]}, leave at ${time12(leave)}`; const wrongTime=`${weekday}, leave at ${time12(leave+15)}`; return timeChoice(149, `The 1st of the month is ${TIME_DAYS[startDay]}. An appointment is on the ${date}th at ${time12(appt)}, and travel takes ${travel} minutes. Which statement gives both the correct weekday and the latest departure time?`, [correct, wrongDay, wrongTime], 0); }
    case 150: { const start=timeRandomDaytime(7,10), bus=timeLevel(timeRandomDuration(20,45),timeRandomDuration(20,45),randInt(20,45)), transfer=timeLevel(timeRandomDuration(10,20),timeRandomDuration(10,20),randInt(8,20)), train=timeLevel(timeRandomDuration(30,70),timeRandomDuration(30,70),randInt(30,70)), walk=timeLevel(timeRandomDuration(5,15),timeRandomDuration(5,15),randInt(5,15)), finish=start+bus+transfer+train+walk, deadline=finish+timeLevel(pick([-20,-15,-10,-5,0,5,10,15,20]),pick([-20,-15,-10,-5,0,5,10,15,20]),randInt(-20,20)); return timeChoice(150, `A traveller leaves at ${time12(start)}. The bus takes ${bus} minutes, the transfer wait is ${transfer} minutes, the train takes ${train} minutes and the final walk takes ${walk} minutes. They must arrive by ${time12(deadline)}. Will they arrive on time?`, ['Yes','No','Not enough information'], finish<=deadline?0:1); }

    default:
      throw new Error(`No time and timetables generator for knowledge point ${point}.`);
  }
}

TOPIC_BANKS.timeTimetables = {};
for (const group of TOPIC_CONFIGS.timeTimetables.groups) {
  TOPIC_BANKS.timeTimetables[group.id] = {};
  for (const point of group.knowledgePoints) {
    const pointNumber = point.number;
    TOPIC_BANKS.timeTimetables[group.id][point.id] = () => generateTimePoint(pointNumber);
  }
}
