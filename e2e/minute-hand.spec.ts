describe('minute hand', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have minute hand visible', () => {
    cy.get('.clock-minute-hand').should('be.visible')
  })
})
