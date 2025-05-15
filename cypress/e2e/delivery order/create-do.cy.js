describe('create page delivery order', () => {
    it('should add data delivery order without fill out the form', () => {
        cy.contains('.css-1m6080r', 'Fulfillment')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
      
        // Tunggu hingga halaman Fulfillment benar-benar muncul
        cy.url().should('include', '/fulfillment/delivery-order');  // Pastikan URL berubah
        cy.contains('p.chakra-text.css-tzqku2', 'fulfillment', { timeout: 10000 }).should('be.visible');
        
        // Setelah halaman muncul, klik tombol "Add New"
        cy.contains('button', 'Add New').should('be.visible').click();


        cy.get('#completionDate').click();
        // 2. Tunggu datepicker muncul
        cy.get('.react-datepicker').should('be.visible');

        // 3. Pilih tanggal 27 (pastikan format class cocok dengan datepicker)
        cy.contains('.react-datepicker__day', '27').click();
                

        // 2. Pilih "Customer Name"
        cy.get('#react-select-3-input') // Input field untuk customer name
        .should('be.visible')
        .type('Girudo Digital Team') // Masukkan nama customer yang diinginkan
        .wait(500) // Tunggu dropdown muncul
        .type('{enter}'); // Pilih opsi pertama yang muncul

        cy.contains('button',"Save").click();
        cy.contains('button',"Confirm").click();
    });
});
