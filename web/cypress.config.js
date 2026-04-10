const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Desativa a execução automática ao salvar arquivos
    watchForFileChanges: false,
    //video: true,
    
    setupNodeEvents(on, config) {
      // implemente node event listeners aqui
    },
  },
})