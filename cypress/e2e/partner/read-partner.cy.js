describe('read page partner', () => {
    it('should display of data partner', () => {
        cy.contains('.css-1m6080r', 'Partners')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of partners', () => {
        cy.contains('.css-1m6080r', 'Partners')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.get('.css-f8qp14').first().click();
    });
});