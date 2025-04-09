describe('read page Quotation', () => {
    it('should display of data Quotation', () => {
        cy.contains('.css-1m6080r', 'Quotation')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of Quotation', () => {
        cy.contains('.css-1m6080r', 'Quotation')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.url().should('include', 'https://bpa-master.girudo.id/quotation/outbound');  // Pastikan URL berubah
        cy.wait(1000); 
        cy.get('.css-farez7').first().click();
    });
});