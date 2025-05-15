describe('login', () => {
  it('Should allow a user to log in', () => {
    cy.visit('/auth/signin');
    cy.get('#identifier').type('rezkya@wolinventures.com');
    cy.get('#password').type('Test1234');
    cy.get('button[label="Login"]').click();
    cy.url().should('include','/');
  })
})