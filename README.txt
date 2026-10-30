LLF v22 - what is new
1. Weekly backup of the sheet into Drive > LLF > Backups (Sundays)
2. Repeat-red alert (same item red in several shifts in a row)
3. Daily list of reports that wait too long
4. Monthly summary email on the 1st
5. Checklist date limited to today and yesterday

FILES
Code-v22.gs  -> Apps Script (paste over the old code, then type your real report email on line 2)
index.html, sw.js -> upload to GitHub, replacing the old two files

STEPS
1. Apps Script: select all, paste Code-v22.gs, set MAIL_TO on line 2, Save.
2. Run setupExtras once (approve the new permissions when Google asks).
3. Check the Settings tab: new rows at the bottom. Blank email cells use the report mail id.
4. Deploy > Manage deployments > pencil > Version: New version > Deploy.
5. GitHub: upload index.html and sw.js (Add file > Upload files), Commit.
6. Test by hand from the editor: weeklyBackup, stuckReports, testMonthly.
