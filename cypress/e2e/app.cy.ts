describe('app', () => {
  it('should have correct title', () => {
    cy.title().should('equal', 'Alphabetical Clock')
  })

  it('should have correct heading', () => {
    cy.get('h1').should('have.text', 'Alphabetical Clock')
  })

  it('should have version', () => {
    cy.get('footer').should('contain.text', 'e2e')
  })
})
