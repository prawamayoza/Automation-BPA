describe('read page partner', () => {
    it('should display of data partner', () => {
        cy.contains('.css-1m6080r', 'Partners')
            .scrollIntoView()
            .should('be.visible')
            .wait(500)
            .click();
        cy.url().should('include', '/partner');
    });

    it('should display data detail of partners', () => {
        cy.contains('.css-1m6080r', 'Partners')
            .scrollIntoView()
            .should('be.visible')
            .wait(500)
            .click();
        cy.url().should('include', '/partner');

        cy.get('.css-f8qp14').first().click();
    });

    it.only('delete data partner', () => {
        cy.contains('.css-1m6080r', 'Partners')
            .scrollIntoView()
            .should('be.visible')
            .wait(500)
            .click();
      
        cy.url().should('include', '/partner');

        const filterName = 'Test User';

        // Cari input dengan placeholder "Name" dan ketikkan filterName
        cy.get('input[placeholder="Name"]')
          .clear() // bersihkan dulu kalau ada value sebelumnya
          .type(filterName);
          
        cy.get('button[aria-label="delete-button"]').first().click();
          // Tunggu modal muncul (pastikan pakai assertion untuk stabilitas)
        cy.get('section[role="alertdialog"]')
        .should('be.visible')
        .within(() => {
            // Klik tombol Delete di dalam modal
        cy.contains('button', 'Delete').click();
        });
    });
});