describe('Delivery Order Page Functionality', () => {
    beforeEach(() => {
        // Navigasi ke halaman Fulfillment (Delivery Order)
        cy.contains('.css-1m6080r', 'Fulfillment')
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.url().should('include', '/fulfillment/delivery-order', { timeout: 10000 });
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');

        cy.get('.sc-dkPtRN.fmgPHR.rdt_Table', { timeout: 10000 }).should('be.visible');
    });

    it('should display the list of delivery orders', () => {
        // `beforeEach` sudah menangani navigasi dan verifikasi dasar halaman.
        cy.log('Delivery Order list is displayed as verified in beforeEach.');
        // Tambahkan assertion spesifik untuk daftar jika perlu, misalnya:
        cy.get('div.css-dwduxr').should('have.length.greaterThan', 0); // Memastikan ada item DO
    });

    it('should display search results for a VALID DO number', () => {
        const validDoNumber = 'DO/2505/00587'; // Ganti dengan nomor DO yang PASTI ADA di data Anda

        cy.get('input[placeholder="Search Form"]')
            .should('be.visible')
            .clear()
            .type(`${validDoNumber}{enter}`);
        cy.get('.css-dwduxr', { timeout: 15000 }) // Container untuk item DO yang ditemukan
            .should('have.length.greaterThan', 0) // Pastikan setidaknya satu item ditemukan
            .first() // Ambil item pertama yang ditemukan
            .within(() => { // Batasi pencarian elemen berikutnya di dalam item ini
                cy.get('b.chakra-text.css-0') // Selector untuk nomor DO di dalam item
                    .should('be.visible')
                    .and('contain.text', validDoNumber);
            });
        cy.log(`Search for valid DO '${validDoNumber}' found matching records.`);
    });

    it('should display "no records" message for an INVALID DO number', () => {
        const invalidDoNumber = 'DO/INVALID/999999'; // Nomor DO yang PASTI TIDAK ADA

        cy.get('input[placeholder="Search Form"]')
            .should('be.visible')
            .clear()
            .type(`${invalidDoNumber}{enter}`);
        const noRecordsMessage = "There are no records to display";
        cy.get('.sc-dkPtRN.fmgPHR.rdt_Table', { timeout: 15000 })
            .should('contain.text', noRecordsMessage)
            .and('be.visible');
        cy.log(`Search for invalid DO '${invalidDoNumber}' correctly displayed: "${noRecordsMessage}"`);
    });

    it('should display detail data when a delivery order is selected', () => {
        cy.get('.css-dwduxr', { timeout: 10000 })
            .should('have.length.greaterThan', 0) // Pastikan ada minimal satu item
            .first() // Ambil item pertama
            .should('be.visible')
            .click();
        cy.url().should('match', /\/fulfillment\/delivery-order\/[^/]+$/, { timeout: 15000 });
        cy.contains('b.chakra-text.css-qqfgvy', 'Delivery Order', { timeout: 15000 }).should('be.visible');
        cy.log('Navigated to DO detail page. Add more specific assertions for detail content if needed.');
    });
});
