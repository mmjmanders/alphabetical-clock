import MinuteHand from '@/components/MinuteHand.vue'

describe('MinuteHand', () => {
  it('should have minute hand visible', () => {
    cy.mount(MinuteHand, {
      props: {
        length: 10,
        minutes: 12,
        language: 'en',
      },
    })
    cy.get('.clock-minute-hand').should('be.visible')
  })
})
