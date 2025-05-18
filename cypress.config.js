const { defineConfig } = require("cypress");
const dayjs = require('dayjs');

// Definisikan URL untuk setiap lingkungan
const environmentUrls = {
  dev: 'https://bpa-master.girudo.id/',
  staging: 'https://web.staging.bpa.sg/',
  production: 'https://app.bpa.sg/',
};

// Dapatkan target lingkungan dari variabel lingkungan CYPRESS_ENV
// Default ke 'staging' jika CYPRESS_ENV tidak diatur
const targetEnv = process.env.CYPRESS_ENV || 'staging';

if (!environmentUrls[targetEnv]) {
  console.error(
    `[ERROR] Nilai CYPRESS_ENV tidak valid: "${targetEnv}". Harus salah satu dari: ${Object.keys(
      environmentUrls
    ).join(', ')}.`
  );
  console.error('[INFO] Menggunakan baseUrl default (staging) sebagai fallback.');
  // Jika Anda ingin keluar jika env tidak valid, uncomment baris berikut:
  // process.exit(1);
}

const selectedBaseUrl = environmentUrls[targetEnv] || environmentUrls['staging']; // Fallback ke staging
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
    baseUrl: selectedBaseUrl,
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
