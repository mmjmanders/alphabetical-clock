describe('time display', () => {
  beforeEach(() => {
    cy.clock(new Date('2026-04-28T13:34:12.000+02:00').getTime())
    cy.visit('/')
  })

  afterEach(() => {
    cy.clock().then((clock) => {
      clock.restore()
    })
  })

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
      cy.get('.time-display .time-display-time').then((elements) => {
        expect(elements).to.have.length(2)
        expect(elements[0]).to.have.text('13:34:12')
        expect(elements[1]).to.have.text(alphabeticalTime)
      })
    })
  })
})
