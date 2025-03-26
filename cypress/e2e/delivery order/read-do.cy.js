describe('read page delivery order', () => {
    it('should display of data delivery order', () => {
        cy.contains('.css-1m6080r', 'Fulfillment').click({ force: true });
        cy.wait(2000); // Menambahkan jeda setelah klik
    });

    it('should display data delivery order search by number DO', () => {
        cy.contains('.css-1m6080r', 'Fulfillment').click({ force: true });
        cy.wait(2000); // Menambahkan jeda setelah klik

        cy.contains('b.chakra-text', 'Fulfillment').should('be.visible');
        cy.wait(2000); // Menunggu elemen muncul

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
        cy.contains('.css-1m6080r', 'Fulfillment').click({ force: true });
        cy.wait(2000); // Menambahkan jeda setelah klik

        cy.contains('b.chakra-text', 'Fulfillment').should('be.visible');
        cy.wait(2000); // Menunggu elemen muncul

        cy.get('b.chakra-text.css-0').first().click();
    });
});
