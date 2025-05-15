const { defineConfig } = require("cypress");
const dayjs = require('dayjs');
const today = dayjs().format('YYYY-MM-DD');
const currentTime = dayjs().format('HHmm');

const device = process.env.DEVICE || 'desktop'; // Ambil dari environment variable

const viewports = {
  desktop: { width: 1636, height: 841 },
  tablet: { width: 834, height: 1112 },
  mobile: { width: 390, height: 844 }
};

module.exports = defineConfig({
  projectId: 'f9h5cq',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: `cypress/reports/${device}/${today}`,
    overwrite: false,
    html: false,
    json: true,
    reportFilename: `[name]-report-${currentTime}`
  },
  e2e: {
    baseUrl: 'https://web.staging.bpa.sg/',
    viewportWidth: viewports[device].width,
    viewportHeight: viewports[device].height,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 90000,
    requestTimeout: 20000,
    slowTestThreshold: 10000,
    retries: {
      runMode: 2,
      openMode: 1
    },
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
