describe('read page delivery order', () => {
    it('should display of data delivery order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', 'https://bpa-master.girudo.id/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
    });

    it('should display data delivery order search by number DO', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', 'https://bpa-master.girudo.id/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');

        const doNumber = 'DO/202500226';
        cy.get('input[placeholder="Search Form"]')
            .should('be.visible')
            .clear()
            .type(`${doNumber}{enter}`);
        cy.wait(2000); // Menunggu hasil pencarian

        cy.get('b.chakra-text.css-0', { timeout: 10000 })
        .should('be.visible')
        .then((items) => {
          let validCount = 0;
          cy.wrap(items).each(($el) => {
            if ($el.text().includes(doNumber)) {
              validCount++;
            }
          });
        });      
    });

    it('should display detail data delivery order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', 'https://bpa-master.girudo.id/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');

        cy.contains('b.chakra-text', 'Fulfillment').should('be.visible');
        cy.wait(2000); // Menunggu elemen muncul

        cy.get('b.chakra-text.css-0').first().click();
    });
});
