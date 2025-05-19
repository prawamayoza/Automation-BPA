describe('read page inspection form builder',()=> {
    beforeEach(() => {
        cy.login();
        cy.contains('button.chakra-menu__menu-button', 'Rezkya Hairy', { timeout: 10000 }).should('be.visible').click();
        cy.get('button.chakra-menu__menuitem:contains("Setting")', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/setting/profile', { timeout: 10000 });
        cy.contains('p.chakra-text.css-c8l6v9', 'Profile Details', { timeout: 10000 }).should('be.visible');
        cy.contains('div.css-10g71je', 'Inspection Form Builder', { timeout: 10000 }) // Atau selector lain yang sesuai
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.url().should('match', /\/setting\/\d+\/inspection-form-builder$/, { timeout: 10000 }); 
        // cy.contains('b.chakra-text', 'Inspection Form Builder', { timeout: 10000 }).should('be.visible'); // Validasi header halaman
    });

    it('should display of data form builder', () => {
        // Tes ini sekarang dimulai dengan asumsi sudah berada di halaman Inspection Form Builder
        cy.log('Inspection Form Builder page is displayed as verified in beforeEach.');
        // Anda bisa menambahkan validasi spesifik untuk daftar form builder di sini jika perlu
        cy.get('input[placeholder="Search Form"]').should('be.visible'); // Contoh validasi
    });

    it('should display matching results when searching for a valid form name', () => {
        const validFormName = 'AIR-CONDITIONING SYSTEM'; // Nama form yang valid dan diharapkan ada
        cy.get('input[placeholder="Search Form"]')
            .should('be.visible')
            .clear()
            .type(`${validFormName}{enter}`);
        cy.get('.css-dwduxr', { timeout: 10000 }) // Selector untuk kontainer item form
            .should('exist') // Pastikan kontainer ada
            .find('p.chakra-text.css-0') // Selector untuk nama form di dalam item
            .should('contain.text', validFormName) // Pastikan setidaknya satu item mengandung teks yang dicari
            .and('be.visible');
        cy.log(`Search for valid form name "${validFormName}" completed. Results displayed.`);
    });

    it('should display a "no records" message when searching for a non-existent form name', () => {
        const invalidFormName = 'THIS FORM DOES NOT EXIST 12345'; // Nama form yang tidak valid
        cy.get('input[placeholder="Search Form"]')
            .should('be.visible')
            .clear()
            .type(`${invalidFormName}{enter}`);
        cy.get('body').then(($body) => {
            if ($body.find('.css-dwduxr').length > 0) {
                // Jika kontainer item masih ada, pastikan tidak ada yang cocok
                cy.get('.css-dwduxr').should('not.contain.text', invalidFormName);
            }
            cy.contains('div', 'There are no records to display', { timeout: 5000 }).should('be.visible');
        });
        cy.log(`Search for invalid form name "${invalidFormName}" completed. "No records" message displayed.`);
    });

    it('should display detail data form builder',()=>{
        cy.get('.css-dwduxr', { timeout: 10000 }) // Selector untuk kontainer item form
            .should('exist').first().should('be.visible').click(); // Ambil yang pertama, pastikan terlihat, lalu klik
    });
});    