describe('create page delivery order', () => {
    it('should add data delivery order without fill out the form', () => {
        cy.contains('.css-1m6080r', 'Fulfillment').click({ force: true });
        cy.wait(2000); 

        cy.contains('button', 'Add New').click();
    });
});
