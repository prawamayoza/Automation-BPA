describe('read page team', () => {
    it('should display of data team', () => {
        cy.contains('.css-1m6080r', 'Teams')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of team', () => {
        cy.contains('.css-1m6080r', 'Teams')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.get('.css-8tyqnx').first().click();
    });
});