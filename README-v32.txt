LLF v32 - Monthly PDF report with charts + Odia language

WHAT IS NEW
1. Monthly PDF report (management report with charts)
   - Sent with the monthly summary email (attached), saved in Drive > LLF > Monthly, and sent to Telegram.
   - Shows the month's checklists per location, missed shifts, red readings, open and overdue actions, with charts.
   - New Settings row "Monthly PDF" = Yes / No. Set No to switch it off.
2. Odia language in the app
   - A button at the top right switches between English and Odia. The choice is remembered on that phone.
   - Labels, buttons, messages and the Verify / Approval / Trends screens change. Equipment names, PDFs, emails and messages that come from the server stay in English.
   - The Odia words were written by Claude. Please ask an Odia-speaking colleague to read them once.

STEPS
A. Google Sheet > Extensions > Apps Script. Replace all code with Code-v32.gs. Save.
B. Run setupExtras once (adds the "Monthly PDF" row in Settings). Or add the row by hand.
C. Run testMonthlyPdf. Open Drive > LLF > Monthly and look at the PDF.
D. Deploy > Manage deployments > pencil > New version > Deploy (same link).
E. GitHub repo llf: upload index.html and sw.js (replace). Wait 1-2 minutes, open the app twice.
   The APK loads the same page, so no APK change is needed.

NOTE: The monthly PDF was tested only on a simulated Google Sheet, not a real one. The first real PDF may need small layout changes.
