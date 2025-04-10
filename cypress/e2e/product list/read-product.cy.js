describe('read page product list', () => {
    it('should display of data product list', () => {
        cy.contains('.css-1m6080r', 'Product List')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of product list', () => {
        cy.contains('.css-1m6080r', 'Product List')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.url().should('include', 'https://bpa-master.girudo.id/product-list');  // Pastikan URL berubah
        cy.wait(1000); 
        cy.get('div.css-1o26186')
        .find('button[aria-label="view-button"]')
        .first()
        .click()

        // cy.get('.css-1m6080r').first().click();
    });
});