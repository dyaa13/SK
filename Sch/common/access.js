// Student access control.
// Teacher account DYAA automatically receives every paper in catalog.js.
// Student names are case-insensitive. Add/remove exact catalog keys below.
// Names in SCHOLARSHIP_FULL_ACCESS automatically receive every current and future paper in catalog.js.
window.SCHOLARSHIP_FULL_ACCESS = ["ANGELAD"];

window.SCHOLARSHIP_ACCESS = {
  "ALICE": [
    "Y6_ARITH_T01",
    "Y6_ARITH_T02",
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
  return (window.SCHOLARSHIP_ACCESS && window.SCHOLARSHIP_ACCESS[n]) ? [...window.SCHOLARSHIP_ACCESS[n]] : [];
};
