LLF v24 - what is new
1. Drift warning: early email when a reading creeps toward its limit (within 10%) over 4 checklists in a row
2. Action tracker: new "Actions" tab. Every red item gets a line, owner = biswajit.singh008@gmail.com, target date 7 days
3. Yearly archive: on 1 January all rows dated before 1 January move to Drive > LLF > Archive > LLF_Archive_<year>
(Last-reading hints, 10x warning and last-checklist card from v23 are included in index.html)

FILES
Code-v24.gs -> Apps Script (paste over the old code; line 2 already has the report email)
index.html, sw.js -> upload to GitHub, replacing the old two files

STEPS
1. Apps Script: select all, paste Code-v24.gs, Save.
2. Run setupExtras once (approve new permissions). It adds the new rows to the Settings tab and schedules the new timers.
3. Settings tab: new rows at the bottom. Blank email cells use the report mail id.
4. Deploy > Manage deployments > pencil > Version: New version > Deploy.
5. GitHub: upload index.html and sw.js, Commit.
6. Test by hand from the editor: testDrift, testActions, archivePreview (archivePreview changes nothing).
