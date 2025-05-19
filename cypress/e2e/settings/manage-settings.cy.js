describe('Settings Page Functionality', () => {
    beforeEach(() => {
        cy.login();
        cy.contains('button.chakra-menu__menu-button', 'Rezkya Hairy', { timeout: 10000 }).should('be.visible').click();
        cy.get('button.chakra-menu__menuitem:contains("Setting")', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/setting/profile', { timeout: 10000 });
        cy.contains('p.chakra-text.css-c8l6v9', 'Profile Details', { timeout: 10000 }).should('be.visible');  
    });

    it('should display the main components of the Settings page', () => {
        cy.log('Verifying main components of the Settings page...');
    });

    it('should navigate to Question Bank page from Settings', () => {
        cy.contains('div.css-10g71je', 'Question Bank', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.url().should('match', /\/setting\/\d+\/question-bank$/, { timeout: 10000 });
        // Validasi header halaman Question Bank (sesuaikan selector dan teks jika berbeda)
        cy.contains('p.chakra-text.css-c8l6v9', 'Question Banks', { timeout: 10000 }).should('be.visible');
        cy.log('Navigated to Question Bank page.');
    });

    it('should navigate to Report Template page from Settings', () => {
        cy.contains('div.css-10g71je', 'Report Template', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.url().should('match', /\/setting\/\d+\/report-template$/, { timeout: 10000 });
        cy.contains('p.chakra-text.css-c8l6v9', 'Customizable Report Template', { timeout: 10000 }).should('be.visible');
        cy.log('Navigated to Report Template page.');
    });

    it('should navigate to Document Setting page from Settings', () => {
        cy.contains('div.css-10g71je', 'Document Setting', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.url().should('match', /\/setting\/\d+\/document-setting$/, { timeout: 10000 });
        // Validasi header halaman Document Setting (sesuaikan selector dan teks jika berbeda)
        cy.contains('p.chakra-text.css-mcpu91', 'Document Setting', { timeout: 10000 }).should('be.visible');
        cy.log('Navigated to Document Setting page.');
    });

    it('should navigate to Users page from Settings', () => {
        cy.contains('div.css-10g71je', 'Users', { timeout: 10000 }) // Sesuaikan 'Users' jika teksnya berbeda
            .should('be.visible')
            .click();
        cy.url().should('match', /\/setting\/\d+(\/users)?$/, { timeout: 10000 }); 
        cy.contains('p.chakra-text.css-1ff2mlj', 'List of Users', { timeout: 10000 }).should('be.visible');
        cy.log('Navigated to Users Organisation Detail page.');
    });
});