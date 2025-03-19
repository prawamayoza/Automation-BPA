const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f9h5cq',
  e2e: {
    viewportWidth: 1636,  // Ubah lebar sesuai kebutuhan
    viewportHeight: 841,  // Ubah tinggi sesuai kebutuhan
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
