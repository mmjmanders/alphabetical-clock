describe('second hand', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have second hand visible', () => {
    cy.get('.clock-second-hand').should('be.visible')
  })
})
