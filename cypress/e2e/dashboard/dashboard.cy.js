describe('read page Dashboard', () => {
    it('should display of data Dashboard', () => {
        cy.contains('.css-1m6080r', 'Dashboard')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });
});