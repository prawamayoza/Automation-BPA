describe('log out',() => {
    beforeEach(() =>{
        cy.login(); //component login ada dicommands.js
    });
    it('should allow a user to log out', () => {
        cy.contains('.chakra-menu__menu-button', 'Rezkya Wolin').click();
        cy.contains('button', 'Logout').click();
    })


})
