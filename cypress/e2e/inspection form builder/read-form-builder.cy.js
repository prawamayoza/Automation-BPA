describe('read page inspection form builder',()=> {
    it('should display of data form builder', () => {
        cy.contains('.css-1m6080r','Inspection Form Builder').click();
    });

    it.only('should display data form builder search by name ', () => {
    // Step 1: Masuk ke halaman Inspection Form Builder
    cy.contains('.css-1m6080r', 'Inspection Form Builder').click();
    
    // Tunggu halaman Form Builder selesai dimuat
    cy.contains('b.chakra-text', 'Inspection Form Builder').should('be.visible');

    // Step 2: Cari form dengan nama tertentu
    const formName = 'pumps';
    cy.get('input[placeholder="Search Form"]')
        .should('be.visible')
        .clear()
        .type(`${formName}{enter}`);

    // Step 3: Validasi semua hasil pencarian yang cocok
    cy.get('.css-dwduxr p.chakra-text.css-0')
        .should('be.visible')
        .then((items) => {
        let validCount = 0;
        cy.wrap(items).each(($el) => {
            if ($el.text().includes(formName)) {
            validCount++;
            }
        })
        });
    });

    it.only('should display detail data form builder',()=>{
        

    });

});    