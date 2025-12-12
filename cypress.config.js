const { defineConfig } = require("cypress");
require("dotenv").config(); // Load .env file

// Determine which environment to use (default: staging)
const environment = process.env.ENV || 'staging';
const envPrefix = environment.toUpperCase();

// Get environment-specific variables using prefix (e.g., STAGING_ or PRODUCTION_)
const getEnvVar = (key) => {
  return process.env[`${envPrefix}_${key}`] || process.env[key];
};

module.exports = defineConfig({
  e2e: {
    baseUrl: getEnvVar('CYPRESS_BASE_URL'),

    env: {
      email: getEnvVar('CYPRESS_EMAIL'),
      password: getEnvVar('CYPRESS_PASSWORD'),
      environment: environment, // make environment name available in tests
    },

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      html: true,
      json: false,
      reportPageTitle: `MyPalika Automation Report - ${environment.toUpperCase()}`,
      embeddedScreenshots: true,
      inlineAssets: true,
      timestamp: 'yyyy-mm-dd HH:MM:ss'
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // Log the current environment
      console.log(`\n🚀 Running Cypress on ${environment.toUpperCase()} environment`);
      console.log(`📍 Base URL: ${config.baseUrl}\n`);

      return config;
    },
  },
});
