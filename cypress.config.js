const { defineConfig } = require("cypress");
const dayjs = require('dayjs');
const today = dayjs().format('YYYY-MM-DD');
const currentTime = dayjs().format('HHmm');


module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: `cypress/reports/${today}`,
    overwrite: false,
    html: false,
    json: true,
    reportFilename: `[name]-report-${currentTime}`
  },
  e2e: {
    viewportWidth: 1636,  // Menyamakan resolusi GUI dan Headless
    viewportHeight: 841,
    defaultCommandTimeout: 15000,  // Menunggu elemen muncul lebih lama (15 detik)
    pageLoadTimeout: 90000,        // Tunggu halaman loading hingga 90 detik
    requestTimeout: 20000,         // Tunggu request API hingga 20 detik
    slowTestThreshold: 10000,  // Tandai tes yang lebih lambat dari 10 detik
    retries: {
      runMode: 2,  // Retry 2x saat headless
      openMode: 1  // Retry 1x saat GUI
    },
    screenshotOnRunFailure: true,  // Ambil screenshot jika gagal
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
