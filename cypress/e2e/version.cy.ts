describe('version', () => {
  it('should have version', () => {
    cy.get('footer').should('contain.text', 'e2e')
  })
})
