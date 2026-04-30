import App from '@/App.vue'

describe('App', () => {
  it('should have version', () => {
    cy.mount(App, { shallow: true })
    cy.get('footer').should('contain.text', 'e2e')
  })
})
