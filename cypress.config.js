const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "**/*.feature", 
    setupNodeEvents(on, config) { 
      on("file:preprocessor", cucumber()); 
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});