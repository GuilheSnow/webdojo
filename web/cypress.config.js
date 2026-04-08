const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, // O teste só rodará se você clicar no botão de "refresh" no navegador do Cypress
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});