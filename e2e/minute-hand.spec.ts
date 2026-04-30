describe('minute hand', () => {
  it('should have minute hand visible', () => {
    cy.get('.clock-minute-hand').should('be.visible')
  })
})
