import { mount } from 'cypress/vue'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// @iconify/vue v5 accesses instance.appContext.app in a watcher that can fire
// after Cypress unmounts the component, at which point appContext is already undefined.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'app')")) {
    return false
  }
})

beforeEach(() => {
  cy.intercept(
    {
      method: 'GET',
      url: 'https://api.iconify.design/*',
    },
    {
      statusCode: 200,
    },
  )
})
