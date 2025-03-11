const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1636,  // Ubah lebar sesuai kebutuhan
    viewportHeight: 841,  // Ubah tinggi sesuai kebutuhan
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
