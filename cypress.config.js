const { defineConfig } = require("cypress");

// Load .env.production if USE_PRODUCTION_ENV is set, otherwise load .env
const envFile = process.env.USE_PRODUCTION_ENV === 'true' ? '.env.production' : '.env';
require('dotenv').config({ path: envFile });

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
      config.env.USE_PRODUCTION_ENV = process.env.USE_PRODUCTION_ENV;

      return config;
    },
  },
});
