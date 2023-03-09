const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({

  // define global configurations
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000,
  
  reporter: "mochawesome",

  projectId: 'adjojy',

  // set environment variables
  env: {
    url : "https://rahulshettyacademy.com/angularpractice/"
  },

  // set rerun flag to run failure test cases
  retries:{
    // below counter will run Failed case N times
    runMode: 1
  },

  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "Test Suite Report",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },

  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
        "overwrite": false,
        "html": false,
        "json": true
    },



  // set end to end configurations
  e2e: {
    
    url: 'https://rahulshettyacademy.com/seleniumPractise/',
    
    // Run all TCs from below path
    specPattern: 'cypress/integration/examples/*.js',

    // Set error screenshot flag
    screenshotOnRunFailure: true,

    // Set path to the error screenshots
    screenshotsFolder: 'cypress/screenshots',

    // Set video recording file path
    videosFolder: 'cypress/videos',

    // Set path to the download files
    downloadsFolder: 'cypress/downloads',

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
