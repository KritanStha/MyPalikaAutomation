const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'MyPalika Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: process.env.BASE_URL || "https://demo.admin.mypalika.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      // Pass environment variables from .env to Cypress
      config.env.USER_EMAIL = process.env.USER_EMAIL;
      config.env.PASSWORD = process.env.PASSWORD;

      return config;
    },
  },
});
