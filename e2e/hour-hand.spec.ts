describe('hour hand', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have hour hand visible', () => {
    cy.get('.clock-hour-hand').should('be.visible')
  })
})
