const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'https://notes-serverless-app.com',
    viewportWidthBreakpoint: 768,
    defaultCommandTimeout: 50000
  },
  chromeWebSecurity: false
})
