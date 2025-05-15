describe('read page work order', () => {
    it('should display of data work order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', '/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
        cy.get('.css-s9z86k')
        .should('contain.text', 'Work Order') // Pastikan teks ada
        .contains('Work Order')
        .click();
        cy.url().should('include', '/fulfillment/work-order'); 

    });

    it('should display detail data of work order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', '/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
        cy.get('.css-s9z86k')
        .should('contain.text', 'Work Order') // Pastikan teks ada
        .contains('Work Order')
        .click();
        cy.url().should('include', '/fulfillment/work-order'); 

        cy.get('.css-1qq3hyw').first().click();
    });
});