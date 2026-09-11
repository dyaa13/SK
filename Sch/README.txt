DYAA Scholarship Online Modular v3.7

DYAA Scholarship Online - Modular v3.5

OPEN:
  index.html   <-- single Master Index / student entry point

IMPORTANT GOOGLE SHEET SETUP:
  This version DOES NOT require a new Google Apps Script project.
  It uses the same deployed Google Apps Script Web App URL already used by DYAA ICAS / NCEA.
  Scholarship results are separated by:

      resultSheetName: "Scholarship"

  in common/config.js.

  Do NOT replace or redeploy the existing ICAS / NCEA Apps Script just for this Scholarship site.
  Do NOT change the ICAS or NCEA config files.

STRUCTURE:
  common/
    config.js        existing Google Apps Script URL + Scholarship sheet name + exam settings
    catalog.js       all available exams and their module paths
    access.js        per-student access permissions
    exam_engine.js   shared timer / navigation / scoring / submission engine
    style.css        shared styling

  Y6/
    Arithmetic/
      Test01/questions.js
      Test02/questions.js
    Reasoning/
      MC/Test01/questions.js
      Mixed/Test01/questions.js
      Shared/Test01/images/

  Y8/
    Arithmetic/               Test01–Test07 Standard written-answer tests
    Reasoning/
      MC/Test01/questions.js
      Mixed/Test01/questions.js
      Shared/Test01/images/

MASTER INDEX FLOW:
  Student Name -> Year -> Paper -> Test -> Version -> Start Test

REASONING VERSIONS:
  Multiple Choice
  Mixed Response

ARITHMETIC VERSION:
  Written Answer

ADDING A NEW TEST:
1. Add its folder and questions.js.
2. Add one entry in common/catalog.js.
3. Grant the key to students in common/access.js.
No change to index.html or exam_engine.js should normally be needed.

ACCESS:
  DYAA = all catalog tests automatically.
  ALICE = current Y6 modules.
  JACK = Y6 Arithmetic Test 1 only.

RESULT SUBMISSION:
  The request sends both resultSheetName="Scholarship" and sheet="Scholarship" for compatibility.
  It also records the selected Version separately and includes the version in the Test field.


V1.4 GOOGLE SHEET SUBMISSION FIX
--------------------------------
- Keeps the SAME existing Google Apps Script URL.
- Keeps resultSheetName = "Scholarship".
- Does NOT require any change to the existing Apps Script deployment.
- Manual/time-expired submissions now use a hidden HTML form POST instead of fetch(no-cors), which is more reliable for Google Apps Script redirects and local/static hosting.
- The payload still sends both resultSheetName and sheet for compatibility.


v1.8 Google Sheet fix: submission now matches the working NCEA 32406 method exactly: one hidden form field named payload containing JSON, posted to the existing Apps Script endpoint.


Version 1.9 update:
- Added Y8 Arithmetic Test 1 (45 written-answer questions / 45 minutes).
- AngelaD full-access rule automatically includes this new paper.


Y8 Arithmetic Test 1 revised: contextual questions and mathematical fraction/root formatting.


v2.3: Written-answer questions now show the input hint: Mixed number example: 2 3/4.


v2.9:
- Added Y8 Arithmetic Test 4 · Standard (45 written-answer questions / 45 minutes).
- Test 4 rotates the knowledge-point mix while preserving the Standard difficulty level.


v3.4:
- Added Y8 Arithmetic Test 7 · Standard (45 written-answer questions / 45 minutes).
- Test 7 continues Year 8 core-topic rotation and includes only the explicitly allowed simple interest and basic coordinate extensions.


v3.5:
- Rechecked Y8 Arithmetic Test 7.
- All 45 answers independently verified.
- Improved topic rotation versus Test 6 while keeping Standard difficulty and the agreed Year 8 scope.


Added in this version:
- Year 4 Arithmetic · Test 1 · Foundation (45 one-step contextual questions; multiplication/division restricted to 1–11 times tables).
