describe('Team Page Functionality', () => {
    beforeEach(() => {
        cy.login(); // Panggil custom command login

        // Langkah 1: Navigasi ke halaman Settings
        cy.contains('button.chakra-menu__menu-button', 'Rezkya Hairy', { timeout: 10000 }).should('be.visible').click();
        cy.get('button.chakra-menu__menuitem:contains("Setting")', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/setting/profile', { timeout: 10000 });
        cy.contains('p.chakra-text.css-c8l6v9', 'Profile Details', { timeout: 10000 }).should('be.visible');

        // Langkah 2: Dari halaman Settings, navigasi ke halaman Teams
        // Menggunakan selector berdasarkan HTML yang diberikan untuk tombol/link "Teams"
        cy.contains('div.css-10g71je', 'Teams', { timeout: 10000 }) 
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Validasi setelah navigasi ke halaman Teams
        cy.url().should('include', '/team', { timeout: 10000 }); // Ganti '/team' dengan path yang sebenarnya jika berbeda
        cy.get('.css-8tyqnx', { timeout: 10000 }) // Tunggu hingga item tim muncul
            .should('have.length.greaterThan', 0) // Pastikan setidaknya ada satu item
            .first() // Ambil item pertama
            .should('be.visible'); // Pastikan item tersebut terlihat
    });

    it('should display the list of teams', () => {
        cy.log('Team list is displayed as verified in beforeEach.');
    });

    it('should display details when a team is selected', () => {
        cy.get('.css-8tyqnx').first().click();
        cy.log('Navigated to team detail. Implement specific assertions for detail page elements.');
    });
});