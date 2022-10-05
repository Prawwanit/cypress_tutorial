const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xdhr9w',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
