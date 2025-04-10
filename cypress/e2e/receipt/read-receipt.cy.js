describe('read page Receipt', () => {
    it('should display of data receipt', () => {
        cy.contains('.css-1m6080r', 'Receipt')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it.only('should dislpay data detail of receipt', () => {
        cy.contains('.css-1m6080r', 'Receipt')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.url().should('include', 'https://bpa-master.girudo.id/receipt/outbound');  // Pastikan URL berubah
        cy.wait(1000);
        cy.get('.css-1w6xs8w', { timeout: 10000 })
        .should('be.visible')
        .first()
        .click()
    });
});