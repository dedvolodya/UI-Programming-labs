// https://docs.cypress.io/api/introduction/api.html

describe('Home test', () => {
  it('Headers', () => {
    cy.visit('/')
    cy.contains('h1', 'Blog Application')
    cy.contains('h1', 'First Post')
    cy.contains('h1', 'Second Post')
  })

  it('Links', () => {
    cy.contains('a', 'About')
    cy.contains('a', 'Log in')
    cy.contains('a', 'Sign in')
    cy.contains('a', 'Add comment')
    cy.contains('a', 'New Post')
  })

  it('Post bodies', () => {
    cy.contains('div', 'Post Body1.....')
    cy.contains('div', 'Post Body2.....')
  })

  it('Comment bodies', () => {
    cy.contains('div', 'Comment1')
    cy.contains('div', 'Comment2')
    cy.contains('div', 'Comment3')
  })

})
