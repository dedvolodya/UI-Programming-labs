describe('About test', () => {
    it('Headers', () => {
      cy.visit('/about')
      cy.contains('h1', 'My blog web-application using Vue JS')
    })

    it('Back', () => {
        cy.visit('/about')
        cy.contains('a', 'Back')
    })

    it('Body', () => {
        cy.visit('/about')
        cy.contains('p', 'This application was made for stydying')
    })

  
  })