const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q1s4bg",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
