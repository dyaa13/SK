(function(){
  const pdfLoadedScripts = new Set();

  function esc(s){
    return String(s ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  }

  function loadBankScript(set){
    if(Array.isArray(window[set.bankVar]) && window[set.bankVar].length) return Promise.resolve(window[set.bankVar]);
    if(pdfLoadedScripts.has(set.questionsScript)) return Promise.resolve(window[set.bankVar] || []);
    return new Promise((resolve,reject)=>{
      const s=document.createElement("script");
      s.src=set.questionsScript;
      s.onload=()=>{
        pdfLoadedScripts.add(set.questionsScript);
        const bank=window[set.bankVar];
        if(Array.isArray(bank) && bank.length) resolve(bank);
        else reject(new Error("Question bank is empty or missing."));
      };
      s.onerror=()=>reject(new Error("Could not load "+set.questionsScript));
      document.head.appendChild(s);
    });
  }

  function mathFractionHtml(n,d){
    return `<span class="math-frac" aria-label="${n} over ${d}"><span class="top">${n}</span><span class="bottom">${d}</span></span>`;
  }

  function mathRadicalHtml(symbol,radicand){
    const label=symbol==="∛" ? "cube root of" : "square root of";
    return `<span class="math-root" aria-label="${label} ${radicand}"><span class="radical">${symbol}</span><span class="radicand">${radicand}</span></span>`;
  }

  function formatMathRadicals(value){
    return String(value ?? "").replace(/([√∛])\s*(\d+(?:\.\d+)?)/g,(m,symbol,radicand)=>mathRadicalHtml(symbol,radicand));
  }

  function formatY6ArithmeticFractions(value){
    let h=String(value ?? "");
    h=h.replace(/(^|[^\w.])(\d+)\s+(\d+)\s*\/\s*(\d+)(?![\w/])/g,(m,p,w,n,d)=>`${p}<span class="math-mixed"><span>${w}</span>${mathFractionHtml(n,d)}</span>`);
    h=h.replace(/(^|[^\w.])(\d+)\s*\/\s*(\d+)(?![\w/])/g,(m,p,n,d)=>`${p}${mathFractionHtml(n,d)}`);
    return formatMathRadicals(h);
  }

  function shouldFormatScholarshipMath(set){
    return ["Y6","Y7","Y8"].includes(set?.year) &&
      ["Arithmetic","Mathematics","Integrated Mathematics"].includes(set?.paper);
  }

  function imageUrl(q,set){
    if(!q.image) return "";
    let src=String(q.image);
    if(!/^(https?:|data:|file:|\/)/.test(src)){
      const base=String(set.imageBase||"").replace(/\/$/,"");
      src=base ? `${base}/${src}` : src;
    }
    try{return new URL(src, window.location.href).href}catch(e){return src}
  }

  function questionBody(q,set){
    const base=q.html ? String(q.html) : esc(q.text || "");
    return shouldFormatScholarshipMath(set) ? formatY6ArithmeticFractions(base) : base;
  }

  function choicesHtml(q,set){
    if(q.type!=="mcq" || !Array.isArray(q.choices)) return "";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return `<div class="pdf-choices">${q.choices.map((c,i)=>{const body=shouldFormatScholarshipMath(set)?formatY6ArithmeticFractions(esc(c)):esc(c);return `<div class="pdf-choice"><span class="choice-circle"></span><span><strong>${letters[i]||i+1}.</strong> ${body}</span></div>`}).join("")}</div>`;
  }

  function answerArea(q){
    // PDF/print version intentionally leaves the remaining card area blank
    // so students have maximum space for working and answers.
    return "";
  }

  function cardClass(q){
    const text=(q.text || String(q.html||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();
    const n=text.length + (Array.isArray(q.choices)?q.choices.join(" ").length:0);
    return n>340?" very-dense":n>245?" dense":"";
  }

  function cardHtml(q,i,set){
    const src=imageUrl(q,set);
    const img=src?`<img class="pdf-q-image" src="${esc(src)}" alt="Question ${i+1}">`:"";
    return `<section class="pdf-card${cardClass(q)}">
      <div class="pdf-qno">Question ${i+1}</div>
      <div class="pdf-qcontent">${img}<div class="pdf-qtext">${questionBody(q,set)}</div>${choicesHtml(q,set)}</div>
      ${answerArea(q)}
    </section>`;
  }

  function chunks(arr,size){
    const out=[];
    for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size));
    return out;
  }

  function buildPrintDocument(set,bank){
    const pages=chunks(bank,4);
    const title=esc(set.label || `${set.year||""} ${set.paper||""} ${set.test||""}`);
    const pageHtml=pages.map((page,pi)=>{
      const start=pi*4;
      const cards=page.map((q,j)=>cardHtml(q,start+j,set)).join("");
      return `<div class="pdf-page">
        <header class="pdf-page-head"><div><strong>${title}</strong></div><div class="name-field">Name: <span></span></div><div>Page ${pi+1} / ${pages.length}</div></header>
        <main class="pdf-grid">${cards}</main>
      </div>`;
    }).join("");

    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - PDF</title>
<style>
@page{size:A4 portrait;margin:8mm}
*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:"Segoe UI",Arial,sans-serif;color:#222;background:#e9edf2}
.pdf-toolbar{position:sticky;top:0;z-index:10;display:flex;justify-content:center;gap:12px;align-items:center;padding:10px 14px;background:#0d47a1;color:#fff;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,.18)}
.pdf-toolbar button{border:0;border-radius:7px;padding:9px 16px;font-weight:800;cursor:pointer;background:#4caf50;color:#fff}
.pdf-toolbar .note{opacity:.92}
.pdf-page{width:194mm;height:279mm;margin:8mm auto;background:#fff;display:flex;flex-direction:column;break-after:page;page-break-after:always}
.pdf-page:last-child{break-after:auto;page-break-after:auto}
.pdf-page-head{height:10mm;flex:0 0 10mm;display:grid;grid-template-columns:1fr auto auto;gap:7mm;align-items:center;border-bottom:.4mm solid #0d47a1;padding:0 1mm 1.6mm;font-size:8.5pt;color:#333}
.name-field{white-space:nowrap}.name-field span{display:inline-block;width:35mm;border-bottom:.25mm solid #555;vertical-align:middle;margin-left:2mm}
.pdf-grid{height:264mm;flex:0 0 264mm;padding-top:3mm;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:5mm}
.pdf-card{border:.35mm solid #69727c;border-radius:2.2mm;padding:4mm;min-width:0;min-height:0;display:flex;flex-direction:column;background:#fff;overflow:hidden}
.pdf-qno{font-size:8.5pt;font-weight:900;color:#0d47a1;border-bottom:.2mm solid #dfe4ea;padding-bottom:1.4mm;margin-bottom:2.2mm;flex:0 0 auto}
.pdf-qcontent{min-height:0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-start}
.pdf-qtext{font-size:10.5pt;line-height:1.36;font-weight:600;overflow-wrap:anywhere}
.pdf-card.dense .pdf-qtext{font-size:9.8pt;line-height:1.29}.pdf-card.very-dense .pdf-qtext{font-size:9.1pt;line-height:1.22}
.pdf-q-image{display:block;max-width:100%;max-height:40mm;object-fit:contain;margin:0 auto 2.5mm}
.pdf-card.dense .pdf-q-image{max-height:34mm}.pdf-card.very-dense .pdf-q-image{max-height:29mm}
.pdf-choices{display:grid;gap:.8mm;margin-top:2mm;font-size:8.9pt;line-height:1.16}.very-dense .pdf-choices{font-size:8.2pt;gap:.45mm}
.pdf-choice{display:flex;gap:1.5mm;align-items:flex-start}.choice-circle{width:3.2mm;height:3.2mm;border:.25mm solid #555;border-radius:50%;flex:0 0 3.2mm;margin-top:.15mm}
.math-frac{display:inline-block;vertical-align:middle;text-align:center;line-height:1;font-size:.9em;margin:0 .10em;min-width:1.25em;white-space:nowrap}.math-frac .top{display:block;border-bottom:1px solid currentColor;padding:0 .15em .08em;line-height:1}.math-frac .bottom{display:block;padding:.08em .15em 0;line-height:1}.math-mixed{display:inline-flex;align-items:center;vertical-align:middle;gap:.08em;white-space:nowrap;line-height:1}.math-root{display:inline-flex;align-items:flex-start;white-space:nowrap;line-height:1}.math-root .radical{font-family:Georgia,"Times New Roman",serif;font-size:1.24em;line-height:.93;margin-right:-.04em}.math-root .radicand{display:inline-block;border-top:1px solid currentColor;padding:.06em .09em 0 .08em;line-height:1.02}.math-power sup{font-size:.7em;vertical-align:super}
@media print{html,body{background:#fff}.pdf-toolbar{display:none!important}.pdf-page{margin:0;box-shadow:none}.pdf-card{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
@media screen{.pdf-page{box-shadow:0 3px 14px rgba(0,0,0,.18)}}
</style></head><body>
<div class="pdf-toolbar"><button onclick="window.print()">Save as PDF / Print</button><span class="note">A4 · 2 × 2 cards · 4 questions per page · extra blank working space</span></div>
${pageHtml}
<script>(function(){function readyToPrint(){var imgs=[].slice.call(document.images);Promise.all(imgs.map(function(img){if(img.complete)return Promise.resolve();return new Promise(function(r){img.addEventListener('load',r,{once:true});img.addEventListener('error',r,{once:true});setTimeout(r,1800)})})).then(function(){setTimeout(function(){window.print()},250)})}if(document.readyState==='complete')readyToPrint();else window.addEventListener('load',readyToPrint,{once:true})})();<\/script>
</body></html>`;
  }

  function canonicalAnswerHtml(q,set){
    const raw=String(q && q.answer != null ? q.answer : "");
    let prefix="";
    if(q && q.type==="mcq" && Array.isArray(q.choices)){
      const idx=q.choices.findIndex(c=>String(c)===raw);
      if(idx>=0) prefix=`${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[idx] || (idx+1)}. `;
    }
    const safe=esc(prefix+raw);
    return shouldFormatScholarshipMath(set)
      ? formatY6ArithmeticFractions(safe)
      : formatMathRadicals(safe);
  }

  function answerKeyEntryHtml(q,i,set){
    const answer=canonicalAnswerHtml(q,set);
    const dense=String(q && q.answer != null ? q.answer : "").length>55 ? " dense" : "";
    return `<div class="answer-key-item${dense}"><span class="answer-key-q">Q${i+1}</span><span class="answer-key-a">${answer || "-"}</span></div>`;
  }

  function buildAnswerDocument(set,bank){
    const pages=chunks(bank,45);
    const title=esc(set.label || `${set.year||""} ${set.paper||""} ${set.test||""}`);
    const pageHtml=pages.map((page,pi)=>{
      const start=pi*45;
      const entries=page.map((q,j)=>answerKeyEntryHtml(q,start+j,set)).join("");
      return `<div class="answer-page">
        <header class="answer-page-head"><div><strong>${title}</strong></div><div class="answer-key-title">ANSWER KEY</div><div>Page ${pi+1} / ${pages.length}</div></header>
        <main class="answer-key-grid">${entries}</main>
      </div>`;
    }).join("");

    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - Answers</title>
<style>
@page{size:A4 portrait;margin:10mm}
*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:"Segoe UI",Arial,sans-serif;color:#222;background:#e9edf2}
.answer-toolbar{position:sticky;top:0;z-index:10;display:flex;justify-content:center;gap:12px;align-items:center;padding:10px 14px;background:#263238;color:#fff;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,.18)}
.answer-toolbar button{border:0;border-radius:7px;padding:9px 16px;font-weight:800;cursor:pointer;background:#4caf50;color:#fff}.answer-toolbar .note{opacity:.92}
.answer-page{width:190mm;min-height:277mm;margin:8mm auto;background:#fff;padding:0;break-after:page;page-break-after:always}.answer-page:last-child{break-after:auto;page-break-after:auto}
.answer-page-head{height:13mm;display:grid;grid-template-columns:1fr auto 1fr;gap:5mm;align-items:center;border-bottom:.5mm solid #263238;padding:0 1mm 2mm;font-size:9pt;color:#333}.answer-page-head>div:last-child{text-align:right}.answer-key-title{font-size:12pt;font-weight:900;letter-spacing:.6px;color:#0d47a1}
.answer-key-grid{padding-top:4mm;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:minmax(12mm,auto);gap:2.2mm 3mm;align-content:start}
.answer-key-item{border:.3mm solid #a7afb7;border-radius:1.5mm;padding:2.2mm 2.5mm;display:flex;gap:2.5mm;align-items:flex-start;min-width:0;background:#fff;font-size:9.5pt;line-height:1.22}.answer-key-item.dense{font-size:8.5pt;line-height:1.15}.answer-key-q{font-weight:900;color:#0d47a1;min-width:8mm;flex:0 0 auto}.answer-key-a{font-weight:700;overflow-wrap:anywhere;min-width:0}
.math-frac{display:inline-block;vertical-align:middle;text-align:center;line-height:1;font-size:.9em;margin:0 .10em;min-width:1.25em;white-space:nowrap}.math-frac .top{display:block;border-bottom:1px solid currentColor;padding:0 .15em .08em;line-height:1}.math-frac .bottom{display:block;padding:.08em .15em 0;line-height:1}.math-mixed{display:inline-flex;align-items:center;vertical-align:middle;gap:.08em;white-space:nowrap;line-height:1}.math-root{display:inline-flex;align-items:flex-start;white-space:nowrap;line-height:1}.math-root .radical{font-family:Georgia,"Times New Roman",serif;font-size:1.24em;line-height:.93;margin-right:-.04em}.math-root .radicand{display:inline-block;border-top:1px solid currentColor;padding:.06em .09em 0 .08em;line-height:1.02}
@media print{html,body{background:#fff}.answer-toolbar{display:none!important}.answer-page{margin:0;box-shadow:none}.answer-key-item{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
@media screen{.answer-page{box-shadow:0 3px 14px rgba(0,0,0,.18)}}
</style></head><body>
<div class="answer-toolbar"><button onclick="window.print()">Save Answers as PDF / Print</button><span class="note">Answers only - no working or solutions</span></div>
${pageHtml}
<script>(function(){if(document.readyState==='complete')setTimeout(function(){window.print()},250);else window.addEventListener('load',function(){setTimeout(function(){window.print()},250)},{once:true})})();<\/script>
</body></html>`;
  }

  function currentUserIsTeacher(){
    const input=document.getElementById("nameInput");
    const entered=String(input?.value || "").trim().replace(/\s+/g," ").toUpperCase();
    const teacher=String((window.DYAA_SCHOLARSHIP_CONFIG && window.DYAA_SCHOLARSHIP_CONFIG.teacherName) || "DYAA").trim().replace(/\s+/g," ").toUpperCase();
    return !!entered && entered===teacher;
  }

  async function exportScholarshipAnswers(set){
    if(!set) return;
    if(!currentUserIsTeacher()){
      alert("Answer export is available only when signed in with the teacher account.");
      return;
    }
    const popup=window.open("","_blank");
    if(!popup){alert("The answer PDF preview was blocked by the browser. Please allow pop-ups for this page and try again.");return;}
    popup.document.open();
    popup.document.write(`<!doctype html><title>Preparing Answers...</title><body style="font-family:Segoe UI,Arial,sans-serif;padding:30px"><h3>Preparing answer key for ${esc(set.label||"test")}...</h3><p>Please keep this window open.</p></body>`);
    popup.document.close();
    try{
      const bank=await loadBankScript(set);
      popup.document.open();
      popup.document.write(buildAnswerDocument(set,bank));
      popup.document.close();
    }catch(err){
      popup.document.open();
      popup.document.write(`<!doctype html><body style="font-family:Segoe UI,Arial,sans-serif;padding:30px;color:#c62828"><h3>Answer export failed</h3><p>${esc(err.message)}</p></body>`);
      popup.document.close();
    }
  }

  async function exportScholarshipPdf(set){
    if(!set) return;
    const popup=window.open("","_blank");
    if(!popup){alert("The PDF preview was blocked by the browser. Please allow pop-ups for this page and try again.");return;}
    popup.document.open();
    popup.document.write(`<!doctype html><title>Preparing PDF...</title><body style="font-family:Segoe UI,Arial,sans-serif;padding:30px"><h3>Preparing ${esc(set.label||"test")}...</h3><p>Please keep this window open.</p></body>`);
    popup.document.close();
    try{
      const bank=await loadBankScript(set);
      popup.document.open();
      popup.document.write(buildPrintDocument(set,bank));
      popup.document.close();
    }catch(err){
      popup.document.open();
      popup.document.write(`<!doctype html><body style="font-family:Segoe UI,Arial,sans-serif;padding:30px;color:#c62828"><h3>PDF export failed</h3><p>${esc(err.message)}</p></body>`);
      popup.document.close();
    }
  }

  window.exportScholarshipPdf=exportScholarshipPdf;
  window.exportScholarshipAnswers=exportScholarshipAnswers;
})();
