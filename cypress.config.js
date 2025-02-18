const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //a ajouter

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", // a ajouter
    setupNodeEvents(on, config) { 
      on("file:preprocessor", cucumber()); // ajouter
    },
  },
});