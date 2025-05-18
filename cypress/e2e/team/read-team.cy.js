describe('Team Page Functionality', () => {
    beforeEach(() => {
        cy.contains('.css-1m6080r', 'Teams')
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.get('.css-8tyqnx', { timeout: 10000 }) // Tunggu hingga item tim muncul
            .should('have.length.greaterThan', 0) // Pastikan setidaknya ada satu item
            .first() // Ambil item pertama
            .should('be.visible'); // Pastikan item tersebut terlihat
         cy.url().should('include', '/team'); // Ganti '/teams' dengan path yang sebenarnya
    });

    it('should display the list of teams', () => {
        cy.log('Team list is displayed as verified in beforeEach.');
    });

    it('should display details when a team is selected', () => {
        cy.get('.css-8tyqnx').first().click();
        cy.log('Navigated to team detail. Implement specific assertions for detail page elements.');
    });
});