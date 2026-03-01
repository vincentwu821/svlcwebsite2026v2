function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || "{}");
    var spreadsheet = SpreadsheetApp.openById("REPLACE_WITH_YOUR_SPREADSHEET_ID");
    var sheetName = payload.formType === "Support" ? "Support" : "Join";
    var sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "submittedAt",
        "formType",
        "source",
        "fullName",
        "email",
        "organization",
        "role",
        "interests",
        "intention",
        "additionalNotes",
        "consent",
        "companyName",
        "contactName",
        "title",
        "website",
        "channels",
        "budgetRange",
        "timeline",
        "objective",
        "notes"
      ]);
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.formType || "",
      payload.source || "",
      payload.fullName || "",
      payload.email || "",
      payload.organization || "",
      payload.role || "",
      payload.interests || "",
      payload.intention || "",
      payload.additionalNotes || "",
      payload.consent || "",
      payload.companyName || "",
      payload.contactName || "",
      payload.title || "",
      payload.website || "",
      payload.channels || "",
      payload.budgetRange || "",
      payload.timeline || "",
      payload.objective || "",
      payload.notes || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
