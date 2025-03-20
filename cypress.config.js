const { defineConfig } = require("cypress");
const dayjs = require('dayjs');
const today = dayjs().format('YYYY-MM-DD');
const currentTime = dayjs().format('HH-mm-ss');


module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: `cypress/reports/${today}`,
    overwrite: false,
    html: true,
    json: true,
    reportFilename: `[name]-report-${currentTime}`
  },
  e2e: {
    viewportWidth: 1636,  // Ubah lebar sesuai kebutuhan
    viewportHeight: 841,  // Ubah tinggi sesuai kebutuhan
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
