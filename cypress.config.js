const { defineConfig } = require("cypress");
require("dotenv").config(); // Load .env

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL, // from .env

    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD,
    },

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      html: true,
      json: false,
      reportPageTitle: "MyPalika Automation Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      timestamp: 'yyyy-mm-dd HH:MM:ss'
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
