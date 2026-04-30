import SecondHand from '@/components/SecondHand.vue'

describe('SecondHand', () => {
  it('should have second hand visible', () => {
    cy.mount(SecondHand, {
      props: {
        length: 10,
        seconds: 12,
        language: 'en',
      },
    })
    cy.get('.clock-second-hand').should('be.visible')
  })
})
