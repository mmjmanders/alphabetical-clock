import HourHand from '@/components/HourHand.vue'

describe('HourHand', () => {
  it('should have hour hand visible', () => {
    cy.mount(HourHand, {
      props: {
        length: 10,
        hours: 12,
        language: 'en',
      },
    })
    cy.get('.clock-hour-hand').should('be.visible')
  })
})
