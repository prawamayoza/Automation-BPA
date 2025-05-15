describe('read page dashboard', () => {
    it('should display data on the dashboard page', () => {
        cy.contains('.css-1m6080r', 'Dashboard')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        cy.url().should('include', '/dashboard');
        cy.contains('p.chakra-text.css-tzqku2', 'dashboard', { timeout: 10000 }).should('be.visible');
    });

});