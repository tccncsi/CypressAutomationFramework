const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // define global configurations
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000,
  
  //reporter: "mochawesome",

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
