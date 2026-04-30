describe('language selector', () => {
  it('should have language selector visible', () => {
    cy.get('.language-selector').should('be.visible')
  })

  it('should display 5 languages', () => {
    cy.get('.language-selector .lang').should('have.length', 5)
  })

  it('should have 1 active language', () => {
    cy.get('.language-selector .lang.active').should('have.length', 1)
  })

  it('should have English as default active language', () => {
    cy.get('.language-selector .lang.active').should('have.text', 'EN')
  })

  /* Parameterized test */
  ;[
    { language: 'EN' },
    { language: 'NL' },
    { language: 'ES' },
    { language: 'DE' },
    { language: 'FR' },
  ].forEach(({ language }) => {
    it(`should have ${language} as selected language`, () => {
      cy.contains('.language-selector .lang', language).click()
      cy.get('.language-selector .lang.active').should('have.text', language)
    })
  })

  /* Parameterized test */
  ;[
    { language: 'EN', expectedText: 'Nine' },
    { language: 'NL', expectedText: 'Zeven' },
    { language: 'ES', expectedText: 'Cuatro' },
    { language: 'DE', expectedText: 'Fünf' },
    { language: 'FR', expectedText: 'Trois' },
  ].forEach(({ language, expectedText }) => {
    it(`should have ${expectedText} for hours in ${language}`, () => {
      cy.contains('.language-selector .lang', language).click()
      cy.contains('.hour-text', expectedText).should('be.visible')
    })
  })
})
