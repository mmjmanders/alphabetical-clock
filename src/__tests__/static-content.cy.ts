import ClockStaticContent from '@/components/ClockStaticContent.vue'
import type { Language } from '@/composables'

describe('StaticContent', () => {
  beforeEach(() => cy.mount(ClockStaticContent, { props: { radius: 100, language: 'en' } }))

  it('should display hour texts', () => {
    cy.get('.hour-text').should('have.length', 12)
  })

  it('should display hour ticks', () => {
    cy.get('.hour-tick').should('have.length', 12)
  })

  it('should display minute ticks', () => {
    cy.get('.minute-tick').should('have.length', 60)
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
      cy.mount(ClockStaticContent, {
        props: { radius: 100, language: language.toLowerCase() as Language },
      })
      cy.contains('.hour-text', expectedText).should('be.visible')
    })
  })
})
