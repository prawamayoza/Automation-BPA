const fs = require('fs');
const path = require('path');

const reportsPath = path.join(__dirname, '../reports');
const latestReportDir = fs.readdirSync(reportsPath)
  .filter(name => /^\d{4}-\d{2}-\d{2}$/.test(name))
  .sort()
  .reverse()[0];

if (!latestReportDir) {
  console.log('❌ Tidak ada folder laporan ditemukan.');
  process.exit(1);
}

const latestReportPath = path.join(reportsPath, latestReportDir);
const reportFiles = fs.readdirSync(latestReportPath)
  .filter(file => file.endsWith('.json'))
  .sort((a, b) => b.match(/(\d{4})\.json$/)[1] - a.match(/(\d{4})\.json$/)[1]);

const latestTimestamp = reportFiles[0].match(/-(\d{4})\.json$/)[1];
const latestReports = reportFiles.filter(file => file.includes(`-${latestTimestamp}.json`));

const now = new Date();
const reportTime = now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0');

let totalTests = 0, totalPassing = 0, totalFailing = 0, totalPending = 0, totalSkipped = 0;
let totalDuration = 0;
let htmlContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Test Summary</title><style>body{font-family: Arial, sans-serif; margin: 20px;} table{width: 100%; border-collapse: collapse; margin-top: 20px;} th, td{border: 1px solid #ddd; padding: 8px; text-align: center;} th{background-color: #f2f2f2;} .scenario-title{font-weight: bold; text-align: left;} .error-message{color: red; text-align: left; margin-top: 5px;}</style></head><body><h1>Test Summary (${latestReportDir} - ${reportTime})</h1><table><thead><tr><th>Spec</th><th>Scenarios</th><th>Tests</th><th>Passing</th><th>Failing</th><th>Pending</th><th>Skipped</th><th>Duration (s)</th></tr></thead><tbody>`;

latestReports.forEach(file => {
  const report = JSON.parse(fs.readFileSync(path.join(latestReportPath, file), 'utf8'));
  const specName = file.replace('-report', '').replace(/-\d{4}\.json$/, '');

  let tests = 0, passing = 0, failing = 0, pending = 0, skipped = 0;
  let errorMessages = "";
  let scenarios = [];
  let specDuration = 0;

  report.results.forEach(result => {
    result.suites.forEach(suite => {
      suite.tests.forEach((test, index) => {
        tests++;
        if (test.state === 'passed') passing++;
        if (test.state === 'failed') failing++;
        if (test.state === 'pending') pending++;
        if (test.state === 'skipped') skipped++;

        scenarios.push(`${index + 1}. ${test.fullTitle}`);
        specDuration += test.duration / 1000;

        if (test.state === 'failed' && test.err && test.err.message) {
          errorMessages += `<div class="error-message"><strong>${test.fullTitle}:</strong> ${test.err.message}</div>`;
        }
      });
    });
  });

  totalTests += tests;
  totalPassing += passing;
  totalFailing += failing;
  totalPending += pending;
  totalSkipped += skipped;
  totalDuration += specDuration;

  htmlContent += `<tr><td>${specName}</td><td class="scenario-title">${scenarios.join('<br>')}</td><td>${tests}</td><td>${passing}</td><td>${failing}</td><td>${pending}</td><td>${skipped}</td><td>${specDuration.toFixed(2)}</td></tr>`;
  if (errorMessages) htmlContent += `<tr><td colspan="8">${errorMessages}</td></tr>`;
});

htmlContent += `<tr><td colspan="8"><strong>Total Tests:</strong> ${totalTests} | <strong>Passing:</strong> ${totalPassing} | <strong>Failing:</strong> ${totalFailing} | <strong>Pending:</strong> ${totalPending} | <strong>Skipped:</strong> ${totalSkipped} | <strong>Total Duration:</strong> ${(totalDuration / 60).toFixed(2)} minutes</td></tr>`;
htmlContent += `</tbody></table></body></html>`;

const summaryFile = path.join(latestReportPath, `summary-${reportTime}.html`);
fs.writeFileSync(summaryFile, htmlContent);
console.log(`✅ Summary saved to: ${summaryFile}`);
