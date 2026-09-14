// Student access control.
// Teacher account DYAA automatically receives every paper in catalog.js.
// Student names are case-insensitive. Add/remove exact catalog keys below.
// Names in SCHOLARSHIP_FULL_ACCESS automatically receive every current and future paper in catalog.js.
window.SCHOLARSHIP_FULL_ACCESS = ["ANGELAD", "DF"];

// Year-level access. Names are case-insensitive.
// Students listed here automatically receive every current and future catalog paper for the specified year(s).
window.SCHOLARSHIP_YEAR_ACCESS = {
  "ETHANM": ["Y6"]
};

window.SCHOLARSHIP_ACCESS = {
  "ALICE": [
    "Y6_ARITH_T01",
    "Y6_ARITH_T02",
    "Y6_ARITH_T03",
    "Y6_ARITH_T04",
    "Y6_ARITH_T05",
    "Y6_ARITH_T06",
    "Y6_ARITH_T07",
    "Y6_ARITH_T08",
    "Y6_ARITH_T09",
    "Y6_ARITH_T10",
    "Y6_ARITH_T11",
    "Y6_ARITH_T12",
    "Y6_ARITH_T13",
    "Y6_ARITH_T14",
    "Y6_ARITH_T15",
    "Y6_ARITH_T16",
    "Y6_ARITH_T17",
    "Y6_ARITH_T18",
    "Y6_ARITH_T19",
    "Y6_ARITH_T20",
    "Y6_ARITH_T21",
    "Y6_ARITH_T22",
    "Y6_ARITH_T23",
    "Y6_ARITH_T24",
    "Y6_ARITH_T25",
    "Y6_REASON_T01_MC",
    "Y6_REASON_T01_MIXED"
  ],
  "JACK": ["Y6_ARITH_T01"]
};

window.scholarshipNormalizeName = function(name){
  return String(name || "").trim().replace(/\s+/g, " ").toUpperCase();
};

window.scholarshipAllowedKeys = function(name){
  const n = window.scholarshipNormalizeName(name);
  const teacher = window.scholarshipNormalizeName((window.DYAA_SCHOLARSHIP_CONFIG && window.DYAA_SCHOLARSHIP_CONFIG.teacherName) || "DYAA");
  if(n && (n === teacher || (window.SCHOLARSHIP_FULL_ACCESS || []).includes(n))) return (window.SCHOLARSHIP_CATALOG || []).map(x => x.key);

  const years = (window.SCHOLARSHIP_YEAR_ACCESS && window.SCHOLARSHIP_YEAR_ACCESS[n]) || [];
  if(years.length){
    const allowedYears = years.map(y => String(y).trim().toUpperCase());
    return (window.SCHOLARSHIP_CATALOG || [])
      .filter(x => allowedYears.includes(String(x.year || "").trim().toUpperCase()))
      .map(x => x.key);
  }

  return (window.SCHOLARSHIP_ACCESS && window.SCHOLARSHIP_ACCESS[n]) ? [...window.SCHOLARSHIP_ACCESS[n]] : [];
};
