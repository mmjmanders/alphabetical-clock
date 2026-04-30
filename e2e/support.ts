beforeEach(() => {
  cy.intercept(
    {
      method: 'GET',
      url: 'https://api.iconify.design/*',
    },
    {
      statusCode: 200,
    },
  )
  cy.clock(new Date('2026-04-28T13:34:12.000+02:00'))
  cy.visit('/')
})
