// Worknet landing -> Google Sheets
// Google Sheets: Kengaytmalar (Extensions) > Apps Script ga shu kodni qo'ying.

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Sana", "Ism", "Telefon", "Davlat", "Manba (UTM)", "Holat"]);
  }
  const p = e.parameter;
  sheet.appendRow([
    new Date(),
    String(p.ism || "").slice(0, 100),
    "'" + String(p.telefon || "").slice(0, 20),
    String(p.davlat || "").slice(0, 50),
    String(p.manba || "").slice(0, 200),
    "Yangi"
  ]);
  return ContentService.createTextOutput("ok");
}
