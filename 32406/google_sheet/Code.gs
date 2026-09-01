const SPREADSHEET_ID = '';
const DEFAULT_SHEET_NAME = 'ICAS';

function cleanSheetName(name) {
  const cleaned = String(name || DEFAULT_SHEET_NAME)
    .replace(/[\\\/\?\*\[\]:]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);
  return cleaned || DEFAULT_SHEET_NAME;
}

function doPost(e) {
  try {
    const raw = (e && e.parameter && e.parameter.payload) || (e && e.postData && e.postData.contents) || '{}';
    const data = JSON.parse(raw);
    const ss = SPREADSHEET_ID ? SpreadsheetApp.openById(SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) throw new Error('No spreadsheet found. Set SPREADSHEET_ID in Code.gs.');

    const sheetName = cleanSheetName(data.resultSheetName || DEFAULT_SHEET_NAME);
    let sh = ss.getSheetByName(sheetName);
    if (!sh) sh = ss.insertSheet(sheetName);

    if (sh.getLastRow() === 0) {
      sh.appendRow([
        'Timestamp','Student','Competition','Year','Paper','Score','Total','Percentage',
        'Time Used','Time Used (sec)','Wrong Questions','Unanswered Questions','Auto Submitted','Submitted Answers'
      ]);
      sh.getRange(1,1,1,14).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(), data.studentName || '', data.competition || '', data.year || '', data.paper || '',
      Number(data.score || 0), Number(data.total || 0), Number(data.percentage || 0), data.timeUsed || '',
      Number(data.timeUsedSeconds || 0), data.wrongQuestions || '', data.unansweredQuestions || '',
      data.autoSubmitted ? 'Yes' : 'No', data.submittedAnswers || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ok:true,sheet:sheetName}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('DYAA competition result endpoint is running.');
}
