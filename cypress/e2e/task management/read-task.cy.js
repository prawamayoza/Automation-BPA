describe('read page task', () => {
    it('should display of data task in table view', () => {
        cy.contains('.css-1m6080r', 'Task Management')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
    });

    it('should display data detail of task in calendar view', () => {
        cy.contains('.css-1m6080r', 'Task Management')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();

        cy.get('.css-s9z86k')
        .should('contain.text', 'Calendar View') // Pastikan teks ada
        .contains('Calendar View')
        .click();
    });

    it('should display data detail of task in table view', () => {
        cy.contains('.css-1m6080r', 'Task Management')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
            
        cy.get('.css-1qq3hyw').first().click();
    });
});