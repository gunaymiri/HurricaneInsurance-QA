const { defineConfig } = require("cypress");

 
module.exports = defineConfig({
  projectId: "xvwpsd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*.js",
    env: {
      baseUrl: "https://sure-qa-challenge.vercel.app",
      buildingMaterialPath: "https://sure-qa-challenge.vercel.app/building-material",
      waterProximityPath: "https://sure-qa-challenge.vercel.app/water-proximity",
      quotePath: "https://sure-qa-challenge.vercel.app/quote"
    }
  }
})

