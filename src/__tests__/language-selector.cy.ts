import LanguageSelector from '@/components/LanguageSelector.vue'
import type { Language } from '@/composables'

describe('LanguageSelector', () => {
  beforeEach(() => cy.mount(LanguageSelector))

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
      cy.mount(LanguageSelector, { props: { modelValue: language.toLowerCase() as Language } })
      cy.get('.language-selector .lang.active').should('have.text', language)
    })
  })
})
