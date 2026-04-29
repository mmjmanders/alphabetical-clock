describe('version', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have version', () => {
    cy.get('footer').should('contain.text', 'e2e')
  })
})
