describe('About test', () => {
    it('Headers', () => {
      cy.visit('/profile/1')
      cy.contains('h2', 'User Profile')
    })

    it('Body', () => {
        cy.visit('/profile/1')
        cy.contains('div', 'Username: somebody')
        cy.contains('div', 'Name: Vasia')
        cy.contains('div', 'Surname: Pupkin')
        cy.contains('div', 'Email: vasia@mail.ua')
    })

    it('Back', () => {
      cy.visit('/profile/1')
      cy.contains('a', 'Back')
    })
  
  })