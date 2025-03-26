describe('log out',() => {
    it('should allow a user to log out', () => {
        cy.contains('.chakra-menu__menu-button', 'Rezkya Wolin').click();
        cy.contains('button', 'Logout').click();
    })


})
