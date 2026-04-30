describe('time display', () => {
  it('should have time display visible', () => {
    cy.get('.time-display').should('be.visible')
  })

  it('should display 2 different times', () => {
    cy.get('.time-display .time').should('have.length', 2)
  })

  /* Parameterized test */
  ;[
    { language: 'EN', alphabeticalTime: '05:39:47' },
    { language: 'NL', alphabeticalTime: '02:37:27' },
    { language: 'ES', alphabeticalTime: '11:40:29' },
    { language: 'DE', alphabeticalTime: '02:46:59' },
    { language: 'FR', alphabeticalTime: '11:43:16' },
  ].forEach(({ language, alphabeticalTime }) => {
    it(`should display ${alphabeticalTime} for language ${language}`, () => {
      cy.contains('.language-selector .lang', language).click()
      cy.contains('.time-display .time-display-time', '13:34:12').should('exist')
      cy.contains('.time-display .time-display-time', alphabeticalTime).should('exist')
    })
  })
})
