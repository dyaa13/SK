const CATALOG = window.SCHOLARSHIP_CATALOG || [];
const SCHOLARSHIP_CONFIG = window.DYAA_SCHOLARSHIP_CONFIG || {};
const MIN_SUBMIT_MINUTES = Number(SCHOLARSHIP_CONFIG.minSubmitMinutes ?? 10);
const STORAGE_KEY = "DYAA_SCHOLARSHIP_ACTIVE_EXAM_MODULAR_V14";
const LEGACY_NAME_KEY = "DYAA_SCHOLARSHIP_STUDENT_NAME";
let loadedScripts=new Set(), selectedSet=null, questions=[], userAnswers=[], studentName="", currentQuestionIndex=0, examStartMs=null, examEndMs=null, timerId=null, submitted=false, submitReason="", unloadSubmissionSent=false;
const quizContent=document.getElementById("quizContent"), sidebarEl=document.getElementById("sidebar");
function escapeHtml(s){return String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}

function mathFractionHtml(n,d){return `<span class="math-frac" aria-label="${n} over ${d}"><span class="top">${n}</span><span class="bottom">${d}</span></span>`}
function mathRadicalHtml(symbol,radicand){const label=symbol==="∛"?"cube root of":"square root of";return `<span class="math-root" aria-label="${label} ${radicand}"><span class="radical">${symbol}</span><span class="radicand">${radicand}</span></span>`}
function formatMathRadicals(value){return String(value??"").replace(/([√∛])\s*(\d+(?:\.\d+)?)/g,(m,symbol,radicand)=>mathRadicalHtml(symbol,radicand))}
function formatY6ArithmeticFractions(value){
  let h=String(value??"");
  h=h.replace(/(^|[^\w.])(\d+)\s+(\d+)\s*\/\s*(\d+)(?![\w/])/g,(m,p,w,n,d)=>`${p}<span class="math-mixed"><span>${w}</span>${mathFractionHtml(n,d)}</span>`);
  h=h.replace(/(^|[^\w.])(\d+)\s*\/\s*(\d+)(?![\w/])/g,(m,p,n,d)=>`${p}${mathFractionHtml(n,d)}`);
  return formatMathRadicals(h);
}
function shouldFormatScholarshipMath(set){
  return ["Y6","Y7","Y8"].includes(set?.year) &&
    ["Arithmetic","Mathematics","Integrated Mathematics"].includes(set?.paper);
}
function questionDisplayHtml(q){
  const base=q.html?String(q.html):escapeHtml(q.text);
  return shouldFormatScholarshipMath(selectedSet)?formatY6ArithmeticFractions(base):base;
}
function loadClassicScript(src){return new Promise((resolve,reject)=>{if(loadedScripts.has(src)){resolve();return}const s=document.createElement("script");s.src=src;s.onload=()=>{loadedScripts.add(src);resolve()};s.onerror=()=>reject(new Error("Could not load "+src));document.head.appendChild(s)})}
function formatDuration(ms){const t=Math.max(0,Math.floor(ms/1000)),h=Math.floor(t/3600),m=Math.floor((t%3600)/60),s=t%60;return h>0?`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}
function elapsedMs(){return examStartMs===null?0:Math.max(0,(examEndMs||Date.now())-examStartMs)}function durationMs(){return selectedSet?Number(selectedSet.durationMinutes||60)*60000:0}function remainingMs(){return Math.max(0,durationMs()-elapsedMs())}function canManualSubmit(){return elapsedMs()>=MIN_SUBMIT_MINUTES*60000}function answeredCount(){return userAnswers.filter(v=>String(v??"").trim()!=="").length}
function normalizeNumericText(v){let s=String(v??"").trim().replace(/[−–—]/g,"-").replace(/,/g,"").replace(/°/g,"");s=s.replace(/^[\$£€]\s*/,"");s=s.replace(/\s*(?:%|[A-Za-z]+(?:\s*\/\s*[A-Za-z]+)?(?:\^?[23]|[²³])?)\s*$/,"");return s.trim()}function parseNumber(v){const s=normalizeNumericText(v);if(!s)return NaN;let m=s.match(/^([+-]?\d+)\s+(\d+)\s*\/\s*(\d+)$/);if(m){const w=Number(m[1]),n=Number(m[2]),d=Number(m[3]);if(!d)return NaN;return w<0?w-n/d:w+n/d}m=s.match(/^([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)$/);if(m){const d=Number(m[2]);if(!d)return NaN;return Number(m[1])/d}if(/^[+-]?\d+(?:\.\d+)?$/.test(s))return Number(s);return NaN}function normalizeText(v){return String(v??"").toLowerCase().trim().replace(/π/g,"pi").replace(/\s+/g," ")}function isCorrect(user,correct){const a=parseNumber(user),b=parseNumber(correct);if(Number.isFinite(a)&&Number.isFinite(b))return Math.abs(a-b)<1e-9;return normalizeText(user)===normalizeText(correct)}function isSimplestFractionInput(user){const s=normalizeNumericText(user);const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a};let m=s.match(/^([+-]?\d+)\s+(\d+)\s*\/\s*(\d+)$/);if(m){const n=Math.abs(Number(m[2])),d=Number(m[3]);if(!d||n>=d)return false;return gcd(n,d)===1}m=s.match(/^([+-]?\d+)\s*\/\s*(\d+)$/);if(!m)return false;const n=Math.abs(Number(m[1])),d=Number(m[2]);if(!d)return false;return gcd(n,d)===1}
function isMixedNumberSimplestInput(user){const s=normalizeNumericText(user);const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a};const m=s.match(/^([+-]?\d+)\s+(\d+)\s*\/\s*(\d+)$/);if(!m)return false;const n=Math.abs(Number(m[2])),d=Number(m[3]);return !!d&&n<d&&gcd(n,d)===1}function isImproperFractionSimplestInput(user){const s=normalizeNumericText(user);const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a};const m=s.match(/^([+-]?\d+)\s*\/\s*(\d+)$/);if(!m)return false;const n=Math.abs(Number(m[1])),d=Number(m[2]);return !!d&&n>=d&&gcd(n,d)===1}function isDecimalInput(user){let s=String(user??"").trim().replace(/[−–—]/g,"-").replace(/,/g,"");s=s.replace(/^[\$£€]\s*/,"");s=s.replace(/\s*[A-Za-z]+(?:\s*\/\s*[A-Za-z]+)?(?:\^?[23]|[²³])?\s*$/,"");return /^[+-]?\d+\.\d+$/.test(s)}function isPercentageInput(user){return /%\s*$/.test(String(user??"").trim())}function isQuestionCorrect(user,q){const accepted=Array.isArray(q.answers)&&q.answers.length?q.answers:[q.answer];if(q.answerFormat==="fractionSimplest"&&!isSimplestFractionInput(user))return false;if(q.answerFormat==="mixedNumberSimplest"&&!isMixedNumberSimplestInput(user))return false;if(q.answerFormat==="improperFractionSimplest"&&!isImproperFractionSimplestInput(user))return false;if(q.answerFormat==="decimal"&&!isDecimalInput(user))return false;if(q.answerFormat==="percentage"&&!isPercentageInput(user))return false;return accepted.some(a=>isCorrect(user,a))}
function getAllowedCatalog(name){const keys=window.scholarshipAllowedKeys?window.scholarshipAllowedKeys(name):[];return CATALOG.filter(x=>keys.includes(x.key))}function unique(vals){return [...new Set(vals)]}function yearsFrom(items){return unique(items.map(x=>x.year)).sort()}function papersFrom(items,year){return unique(items.filter(x=>x.year===year).map(x=>x.paper))}function difficultiesFrom(items,year,paper){return unique(items.filter(x=>x.year===year&&x.paper===paper).map(x=>x.difficulty||"Standard"))}function testsFrom(items,year,paper,difficulty){return unique(items.filter(x=>x.year===year&&x.paper===paper&&(x.difficulty||"Standard")===difficulty).map(x=>x.test))}function versionsFrom(items,year,paper,difficulty,test){return items.filter(x=>x.year===year&&x.paper===paper&&(x.difficulty||"Standard")===difficulty&&x.test===test)}
function showStartScreen(message=""){stopTimer();sidebarEl.style.display="none";selectedSet=null;questions=[];userAnswers=[];currentQuestionIndex=0;examStartMs=null;examEndMs=null;submitted=false;submitReason="";unloadSubmissionSent=false;document.getElementById("pageTitle").textContent="Arithmetic/Scholarship Mathematics";document.getElementById("modeTag").textContent="Online Exam";quizContent.innerHTML=`<div class="start-card"><p>Enter the student name first. Only assigned scholarship papers will be available.</p><div class="field"><label for="nameInput">Student Name</label><input id="nameInput" type="text" value="" placeholder="Student name"></div><div id="selectionArea" style="display:none;"><div class="select-grid"><div class="field"><label for="yearSelect">Year</label><select id="yearSelect"></select></div><div class="field"><label for="paperSelect">Paper</label><select id="paperSelect"></select></div></div><div class="select-grid"><div class="field"><label for="difficultySelect">Difficulty</label><select id="difficultySelect"></select></div><div class="field"><label for="testSelect">Test</label><select id="testSelect"></select></div></div><div class="select-grid"><div class="field selection-full"><label for="versionSelect">Version</label><select id="versionSelect"></select></div></div><div id="paperInfo" class="rule-box"></div><div class="start-row"><button id="startBtn" class="primary-btn">Start Test</button><button id="exportPdfBtn" class="secondary-btn">Export to PDF</button><button id="exportAnswersBtn" class="secondary-btn" style="display:none;">Export Answers</button></div></div><div id="loginStatus" class="status" ${message?'':'style="display:none;"'}>${escapeHtml(message)}</div></div>`;const nameInput=document.getElementById("nameInput");nameInput.addEventListener("input",refreshAccess);nameInput.addEventListener("keydown",e=>{if(e.key==="Enter")refreshAccess()});const defaultName=String(SCHOLARSHIP_CONFIG.defaultStudentName||"").trim();if(defaultName){nameInput.value=defaultName;refreshAccess()}}
function refreshAccess(){const name=(document.getElementById("nameInput").value||"").trim(),area=document.getElementById("selectionArea"),status=document.getElementById("loginStatus");if(!name){area.style.display="none";status.style.display="none";return}const allowed=getAllowedCatalog(name);if(!allowed.length){area.style.display="none";status.style.display="block";status.style.color="#c62828";status.textContent="No Scholarship tests are assigned to this student.";return}status.style.display="none";area.style.display="block";const y=document.getElementById("yearSelect"),years=yearsFrom(allowed);y.innerHTML=years.map(v=>`<option value="${escapeHtml(v)}">${v.replace(/^Y/,"Year ")}</option>`).join("");const defaultYear=String(SCHOLARSHIP_CONFIG.defaultYear||"Y6");if(years.includes(defaultYear))y.value=defaultYear;y.onchange=()=>refreshPapers(allowed);refreshPapers(allowed)}
function refreshPapers(allowed){const y=document.getElementById("yearSelect").value,p=document.getElementById("paperSelect");p.innerHTML=papersFrom(allowed,y).map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");p.onchange=()=>refreshDifficulties(allowed);refreshDifficulties(allowed)}
function refreshDifficulties(allowed){const y=document.getElementById("yearSelect").value,p=document.getElementById("paperSelect").value,d=document.getElementById("difficultySelect"),list=difficultiesFrom(allowed,y,p);d.innerHTML=list.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");d.onchange=()=>refreshTests(allowed);refreshTests(allowed)}
function refreshTests(allowed){const y=document.getElementById("yearSelect").value,p=document.getElementById("paperSelect").value,d=document.getElementById("difficultySelect").value,t=document.getElementById("testSelect");t.innerHTML=testsFrom(allowed,y,p,d).map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");t.onchange=()=>refreshVersions(allowed);refreshVersions(allowed)}
function refreshVersions(allowed){const y=document.getElementById("yearSelect").value,p=document.getElementById("paperSelect").value,d=document.getElementById("difficultySelect").value,t=document.getElementById("testSelect").value,list=versionsFrom(allowed,y,p,d,t),v=document.getElementById("versionSelect");v.innerHTML=list.map(x=>`<option value="${escapeHtml(x.key)}">${escapeHtml(x.version)}</option>`).join("");v.onchange=refreshPaperInfo;refreshPaperInfo()}
function refreshPaperInfo(){const key=document.getElementById("versionSelect")?.value,set=CATALOG.find(x=>x.key===key);if(!set)return;document.getElementById("paperInfo").innerHTML=`<strong>${escapeHtml(set.label)}</strong><br>${set.difficulty?`Difficulty: <strong>${escapeHtml(set.difficulty)}</strong><br>`:""}${set.description?`${escapeHtml(set.description)}<br>`:""}Time: <strong>${Number(set.durationMinutes)} minutes</strong><br>Answers are saved as you move between questions. Correct answers are not shown during or after the test.<br>The Submit Test button becomes available after <strong>${MIN_SUBMIT_MINUTES} minutes</strong>.`;document.getElementById("startBtn").onclick=startSelectedExam;const pdfBtn=document.getElementById("exportPdfBtn");if(pdfBtn)pdfBtn.onclick=()=>window.exportScholarshipPdf?window.exportScholarshipPdf(set):alert("PDF export is not available.");const answerBtn=document.getElementById("exportAnswersBtn");if(answerBtn){const entered=String(document.getElementById("nameInput")?.value||"").trim().replace(/\s+/g," ").toUpperCase();const teacher=String(SCHOLARSHIP_CONFIG.teacherName||"DYAA").trim().replace(/\s+/g," ").toUpperCase();const teacherMode=!!entered&&entered===teacher;answerBtn.style.display=teacherMode?"inline-block":"none";answerBtn.onclick=teacherMode?(()=>window.exportScholarshipAnswers?window.exportScholarshipAnswers(set):alert("Answer export is not available.")):null}}
async function startSelectedExam(){const name=(document.getElementById("nameInput").value||"").trim(),key=document.getElementById("versionSelect").value,allowed=getAllowedCatalog(name);selectedSet=allowed.find(x=>x.key===key);if(!selectedSet){showStartScreen("This test is not available for this student.");return}studentName=name;const status=document.getElementById("loginStatus");status.style.display="block";status.style.color="#0d47a1";status.textContent=`Loading ${selectedSet.label}...`;try{await loadClassicScript(selectedSet.questionsScript);const bank=window[selectedSet.bankVar];if(!Array.isArray(bank)||!bank.length)throw new Error("Question bank is empty or missing.");questions=bank.map((q,i)=>({...q,n:i+1}));userAnswers=Array(questions.length).fill("");currentQuestionIndex=0;examStartMs=Date.now();examEndMs=null;submitted=false;submitReason="";unloadSubmissionSent=false;saveState();document.getElementById("pageTitle").textContent=selectedSet.label;document.getElementById("modeTag").textContent=selectedSet.version;renderQuestion();startTimer()}catch(err){status.style.color="#c62828";status.textContent=`Load failed: ${err.message}`}}
function saveCurrentAnswer(){if(!questions.length)return;const q=questions[currentQuestionIndex];if(q.type==="mcq"){const checked=document.querySelector('input[name="mcqAnswer"]:checked');userAnswers[currentQuestionIndex]=checked?checked.value:""}else{const input=document.getElementById("answerInput");if(input)userAnswers[currentQuestionIndex]=input.value}saveState()}function saveState(){if(!selectedSet||examStartMs===null||submitted)return;localStorage.setItem(STORAGE_KEY,JSON.stringify({key:selectedSet.key,studentName,userAnswers,currentQuestionIndex,examStartMs}))}function clearState(){localStorage.removeItem(STORAGE_KEY)}
function renderSidebar(){sidebarEl.style.display="block";sidebarEl.innerHTML=`<h4>Questions</h4><ul>${questions.map((q,i)=>{const cls=[i===currentQuestionIndex?"active":"",String(userAnswers[i]??"").trim()!==""?"answered":""].filter(Boolean).join(" ");return `<li class="${cls}" data-i="${i}">Q${i+1}</li>`}).join("")}</ul>`;sidebarEl.querySelectorAll("li").forEach(li=>li.onclick=()=>{saveCurrentAnswer();currentQuestionIndex=Number(li.dataset.i);saveState();renderQuestion()})}
function renderTimer(){const el=document.getElementById("timer");if(!el)return;const r=remainingMs();el.textContent=`Time Remaining: ${formatDuration(r)}`;el.className="timer"+(r<=300000?" danger":r<=600000?" warning":"");const submitBtn=document.getElementById("submitBtn");if(submitBtn)submitBtn.style.display=canManualSubmit()?"inline-block":"none";const wait=document.getElementById("submitWait");if(wait)wait.textContent=canManualSubmit()?"":`Submit available after ${MIN_SUBMIT_MINUTES} minutes.`}
function startTimer(){stopTimer();timerId=setInterval(()=>{renderTimer();if(remainingMs()<=0)finishExam("Time Expired")},500)}function stopTimer(){if(timerId)clearInterval(timerId);timerId=null}
function imageSrc(q){if(!q.image)return "";if(/^(https?:|data:|\/)/.test(q.image))return q.image;const base=String(selectedSet?.imageBase||"").replace(/\/$/,"");return base?`${base}/${q.image}`:q.image}
function answerFormatHint(q){const f=q.answerFormat;if(f==="fractionSimplest")return `<div class="answer-input-hint">Enter a simplified fraction, e.g. 3/4</div>`;if(f==="mixedNumberSimplest")return `<div class="answer-input-hint">Enter a mixed number in simplest form, e.g. 2 3/4</div>`;if(f==="improperFractionSimplest")return `<div class="answer-input-hint">Enter an improper fraction in simplest form, e.g. 11/4</div>`;if(f==="decimal")return `<div class="answer-input-hint">Enter a decimal, e.g. 0.75</div>`;if(f==="percentage")return `<div class="answer-input-hint">Enter a percentage including %, e.g. 35%</div>`;return `<div class="answer-input-hint">Mixed number example: 2 3/4 · Units are optional</div>`}function renderQuestion(){if(!selectedSet||!questions.length)return;renderSidebar();const i=currentQuestionIndex,q=questions[i],src=imageSrc(q),img=src?`<img src="${escapeHtml(src)}" alt="Question ${i+1}" class="question-image">`:"";let answerHtml="";if(q.type==="mcq"&&Array.isArray(q.choices)){answerHtml=`<div class="choice-list">${q.choices.map(c=>`<label class="choice-item"><input type="radio" name="mcqAnswer" value="${escapeHtml(c)}" ${String(userAnswers[i])===String(c)?"checked":""}> ${shouldFormatScholarshipMath(selectedSet)?formatY6ArithmeticFractions(escapeHtml(c)):escapeHtml(c)}</label>`).join("")}</div>`}else{answerHtml=`<input id="answerInput" class="answer-box" type="text" value="${escapeHtml(userAnswers[i]||"")}" placeholder="Enter your answer" autocomplete="off">${answerFormatHint(q)}`}quizContent.innerHTML=`<div class="quiz-topbar"><div><div class="question-text">Question ${i+1} of ${questions.length}</div><div class="student-chip">${escapeHtml(studentName)} · ${escapeHtml(selectedSet.year)} · ${escapeHtml(selectedSet.paper)} · ${escapeHtml(selectedSet.test)} · ${escapeHtml(selectedSet.version)}</div></div><div id="timer" class="timer"></div></div><div class="qbox">${img}<div class="qtext">${questionDisplayHtml(q)}</div>${answerHtml}</div><div class="exam-note">Your answer is saved when you move to another question.</div><div class="button-row"><button id="prevBtn" class="nav-btn btn-prev" ${i===0?"disabled":""}>Previous</button><button id="nextBtn" class="nav-btn btn-next" ${i===questions.length-1?"disabled":""}>Next</button></div><div class="submit-row"><span id="submitWait" class="exam-note"></span><button id="submitBtn" class="danger-btn" style="display:none;">Submit Test</button></div>`;renderTimer();const input=document.getElementById("answerInput");if(input){input.addEventListener("input",()=>{userAnswers[i]=input.value;saveState()});setTimeout(()=>input.focus(),20)}document.querySelectorAll('input[name="mcqAnswer"]').forEach(r=>r.addEventListener("change",()=>{userAnswers[i]=r.value;saveState();renderSidebar()}));document.getElementById("prevBtn").onclick=()=>{saveCurrentAnswer();currentQuestionIndex--;saveState();renderQuestion()};document.getElementById("nextBtn").onclick=()=>{saveCurrentAnswer();currentQuestionIndex++;saveState();renderQuestion()};document.getElementById("submitBtn").onclick=attemptManualSubmit}
function attemptManualSubmit(){if(!canManualSubmit())return;saveCurrentAnswer();const unanswered=questions.length-answeredCount(),msg=unanswered>0?`You have ${unanswered} unanswered question${unanswered===1?"":"s"}. Submit the test now?`:"Submit the test now?";if(confirm(msg))finishExam("Manual Submit")}
function scoreExam(){let correct=0,wrong=0,unanswered=0;const answerSummary=[];questions.forEach((q,i)=>{const u=String(userAnswers[i]??"").trim();if(!u){unanswered++;answerSummary.push(`Q${i+1}: [blank]`);return}if(isQuestionCorrect(u,q))correct++;else wrong++;answerSummary.push(`Q${i+1}: ${u}`)});return{correct,wrong,unanswered,score:correct,total:questions.length,percentage:questions.length?Math.round(correct/questions.length*100):0,answerSummary:answerSummary.join(" | ")}}
function buildPayload(reason){
  const s=scoreExam();
  const wrongQuestions=[];
  const unansweredQuestions=[];
  questions.forEach((q,i)=>{
    const u=String(userAnswers[i]??"").trim();
    if(!u)unansweredQuestions.push(i+1);
    else if(!isQuestionCorrect(u,q))wrongQuestions.push(i+1);
  });
  const seconds=Math.max(0,Math.floor(elapsedMs()/1000));
  return {
    studentName:studentName,
    competition:"Scholarship",
    resultSheetName:String(SCHOLARSHIP_CONFIG.resultSheetName||"Scholarship"),
    year:selectedSet?.year||"",
    paper:selectedSet?.label||selectedSet?.paper||"",
    paperKey:selectedSet?.key||"",
    score:s.score,
    total:s.total,
    percentage:s.percentage,
    timeUsed:formatDuration(elapsedMs()),
    timeUsedSeconds:seconds,
    wrongQuestions:wrongQuestions.join(", "),
    unansweredQuestions:unansweredQuestions.join(", "),
    submittedAnswers:userAnswers.map((v,i)=>`Q${i+1}:${String(v||"-").replace(/\|/g,"/")}`).join(" | "),
    autoSubmitted:reason==="Time Expired" || reason==="Left / Refreshed Page",
    submittedAt:new Date().toISOString()
  };
}
function sendResult(payload,statusEl){
  const url=String(SCHOLARSHIP_CONFIG.googleAppsScriptUrl||"").trim();
  if(!url){
    if(statusEl)statusEl.textContent="Google Sheet endpoint is not configured.";
    return;
  }
  try{
    const f=document.createElement("form");
    f.method="POST";
    f.action=url;
    f.target="sheetSink";
    f.style.display="none";
    const inp=document.createElement("input");
    inp.type="hidden";
    inp.name="payload";
    inp.value=JSON.stringify(payload);
    f.appendChild(inp);
    document.body.appendChild(f);
    f.submit();
    setTimeout(()=>f.remove(),1600);
    if(statusEl){
      statusEl.innerHTML=`Result submission sent to Google Sheet tab <strong>${escapeHtml(SCHOLARSHIP_CONFIG.resultSheetName||"Scholarship")}</strong>.`;
      statusEl.style.color="#2e7d32";
    }
  }catch(e){
    console.error("Google Sheet submit failed:",e);
    if(statusEl){
      statusEl.textContent="Could not send the result: "+e.message;
      statusEl.style.color="#c62828";
    }
  }
}
function finishExam(reason){if(submitted)return;saveCurrentAnswer();submitted=true;submitReason=reason;examEndMs=Date.now();stopTimer();clearState();sidebarEl.style.display="none";const s=scoreExam();quizContent.innerHTML=`<h3>Test Completed</h3><p><strong>${escapeHtml(studentName)}</strong><br>${escapeHtml(selectedSet.label)}</p><div class="summary-grid"><div class="summary-card"><div class="k">Score</div><div class="v">${s.score} / ${s.total}</div></div><div class="summary-card"><div class="k">Correct</div><div class="v">${s.correct}</div></div><div class="summary-card"><div class="k">Wrong</div><div class="v">${s.wrong}</div></div><div class="summary-card"><div class="k">Unanswered</div><div class="v">${s.unanswered}</div></div></div><p><strong>Percentage:</strong> ${s.percentage}%<br><strong>Time Used:</strong> ${formatDuration(elapsedMs())}</p><div id="sheetStatus" class="status">Sending result to Google Sheet...</div><div class="rule-box">Correct answers are not displayed on the student result page.</div><div class="start-row"><button id="backBtn" class="primary-btn">Back to Scholarship Index</button></div>`;document.getElementById("backBtn").onclick=showStartScreen;sendResult(buildPayload(reason),document.getElementById("sheetStatus"))}
function sendUnloadSubmission(){if(submitted||unloadSubmissionSent||!selectedSet||examStartMs===null||!canManualSubmit())return;saveCurrentAnswer();unloadSubmissionSent=true;const url=String(SCHOLARSHIP_CONFIG.googleAppsScriptUrl||"").trim();if(!url)return;const payload=buildPayload("Left / Refreshed Page");try{const blob=new Blob([JSON.stringify(payload)],{type:"text/plain;charset=UTF-8"});navigator.sendBeacon(url,blob)}catch(e){}clearState()}
window.addEventListener("beforeunload",()=>{
  if(!submitted&&selectedSet&&examStartMs!==null){
    // Refreshing or leaving never resumes an unfinished exam.
    // After 10 minutes, preserve the existing auto-submit rule.
    if(canManualSubmit())sendUnloadSubmission();
    else clearState();
  }
});

(function init(){
  // Always start from a clean Scholarship Index after refresh/reopen.
  localStorage.removeItem(LEGACY_NAME_KEY);
  clearState();
  showStartScreen();
})();
