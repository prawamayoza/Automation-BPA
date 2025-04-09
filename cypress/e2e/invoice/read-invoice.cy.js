describe('read page invoice', () => {
    it('should display of data invoice', () => {
        cy.contains('.css-1m6080r', 'Invoice')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of invoice', () => {
        cy.contains('.css-1m6080r', 'Invoice')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.url().should('include', 'https://bpa-master.girudo.id/invoice/outbound');  // Pastikan URL berubah
        cy.wait(1000); 
        cy.get('.css-pgq59u', { timeout: 10000 })
        .should('be.visible')
        .first()
        .click();
    });
});