describe('read page issue', () => {
    it('should display of data issue', () => {
        cy.contains('.css-1m6080r', 'Issue List')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of issue', () => {
        cy.contains('.css-1m6080r', 'Issue List')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.get('div.css-1o26186')
        .find('button[aria-label="view-button"]')
        .first()
        .click();
    });
});