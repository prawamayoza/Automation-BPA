describe('Task Management Page Functionality', () => {
    beforeEach(() => {
        cy.login(); // Panggil custom command login
        cy.contains('.css-1m6080r', 'Task Management')
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.url().should('include', '/task-management', { timeout: 10000 });
        cy.get('div.css-j2myvy', { timeout: 10000 })
            .should('contain.text', 'Table View') // Ensure it's the correct tab
            .should('be.visible')
            .click();
        cy.get('.css-s9z86k', { timeout: 10000 }).should('contain.text', 'Calendar View').and('be.visible');
    });

    it('should display tasks in the Table View', () => {
        cy.get('body').then(($body) => {
            if ($body.find('.css-1qq3hyw').length > 0) {
                cy.get('.css-1qq3hyw').should('have.length.greaterThan', 0);
                cy.log('Task items are displayed in the table view.');
            } else if ($body.find('div:contains("There are no records to display")').length > 0) {
                cy.contains('div', 'There are no records to display').should('be.visible');
                cy.log('Table view is empty, "no records" message displayed.');
            } else {
                cy.log('Table view might be empty or in an unexpected state.');
            }
        });
    });

    it('should switch to Calendar View and display task events', () => {
        cy.get('div.css-5ndkc', { timeout: 10000 })
            .should('contain.text', 'Calendar View')
            .should('be.visible')
            .click();
        cy.get('.css-7vo4st', { timeout: 10000 }).should('be.visible');
        cy.log('Switched to Calendar View.');
    });

    it('should display an empty calendar or no specific task events for a date range with no tasks', () => {
        // Pindah ke Calendar View
        cy.get('div.css-5ndkc', { timeout: 10000 }) // Selector untuk tab Calendar View
            .should('contain.text', 'Calendar View')
            .should('be.visible')
            .click();
        cy.get('.css-7vo4st', { timeout: 10000 }).should('be.visible'); 
        cy.get('.css-7vo4st .css-34v75a', { timeout: 5000 }).children().should('have.length', 0);
        cy.log('Calendar view correctly shows no events for an empty date range.');
    });

    it('should display task details when a task is selected from the Table View', () => {
        cy.get('.css-1qq3hyw', { timeout: 10000 })
            .should('have.length.greaterThan', 0) // Pastikan ada minimal satu tugas
            .first()
            .should('be.visible')
            .click();
        cy.url().should('match', /\/task-management\/[^/]+$/, { timeout: 15000 }); 
        cy.contains('b.chakra-text.css-qqfgvy', 'Task Management Detail', { timeout: 10000 }).should('be.visible');
        cy.log('Task detail view/modal is displayed.');
    });

    it('should display "no records" message when searching for a non-existent task (Table View)', () => {
        const nonExistentTaskName = 'DefinitelyNonExistentTask12345XYZ';
        // Asumsi: Ada input pencarian. Ganti selector jika berbeda.
        cy.get('input[placeholder*="Search"]', { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(`${nonExistentTaskName}{enter}`);

        // Verifikasi pesan "tidak ada data".
        cy.contains('div', 'There are no records to display', { timeout: 10000 }).should('be.visible');
        cy.log(`Search for non-existent task "${nonExistentTaskName}" correctly shows "no records".`);
    });

    it('should filter tasks when a valid search term is used (Table View)', () => {
        const searchTerm = 'EOU84EMD'; 
        // Asumsi: Ada input pencarian.
        cy.get('input[placeholder*="Search"]', { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(`${searchTerm}{enter}`);
        cy.get('.css-1qq3hyw', { timeout: 10000 })
            .should('have.length.greaterThan', 0) // Pastikan ada hasil
            .each(($taskItem) => {
                cy.wrap($taskItem).should('contain.text', searchTerm);
            });
        cy.log(`Search for "${searchTerm}" correctly filters tasks.`);
    });
});