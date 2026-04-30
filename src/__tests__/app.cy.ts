import App from '@/App.vue'

describe('App', () => {
  it('should have correct heading', () => {
    cy.mount(App, { shallow: true })
    cy.get('h1').should('have.text', 'Alphabetical Clock')
  })
})
