describe('static content', () => {
  it('should display hour texts', () => {
    cy.get('.hour-text').should('have.length', 12)
  })

  it('should display hour ticks', () => {
    cy.get('.hour-tick').should('have.length', 12)
  })

  it('should display minute ticks', () => {
    cy.get('.minute-tick').should('have.length', 60)
  })
})
