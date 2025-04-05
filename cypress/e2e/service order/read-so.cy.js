describe('read page service order', () => {
    it('should display of data service order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', 'https://bpa-master.girudo.id/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
        cy.get('.css-s9z86k')
        .should('contain.text', 'Service Order') // Pastikan teks ada
        .contains('Service Order')
        .click();
        cy.url().should('include', '/fulfillment/service-order'); 

    });

    it('should display detail data of service order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', 'https://bpa-master.girudo.id/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
        cy.get('.css-s9z86k')
        .should('contain.text', 'Service Order') // Pastikan teks ada
        .contains('Service Order')
        .click();
        cy.url().should('include', '/fulfillment/service-order'); 

        cy.get('.css-1jhhunt').first().click();
    });
});