describe('create',()=> {
    beforeEach(() =>  {
        cy.login();
        cy.wait(500);

    });

    it('add in the data inspection without fill out the form', () => {
        cy.wait(500);
        cy.contains('button',"Add New").click();
        cy.contains('button',"Save").click();
        cy.contains('button',"Cancel").click();
        cy.contains('button',"Save").click();
        cy.contains('button',"Confirm").click();
        // Verifikasi pesan error muncul
        cy.get('#formId-feedback') // ID div error
        .should('be.visible') // Pastikan elemen terlihat
        .and('contain', 'formId is a required field'); // teks error sesuai sesuai yang diharapkan
    }); 

    it('add inspection data fill in inspection ', () => {
        cy.contains('button',"Add New").click();
        cy.get('#react-select-2-input').click({ force: true });
        cy.get('#react-select-2-listbox') 
        .contains('Checklist For Checking Electricity of Home').click();
        cy.wait(500);
        // cy.get('#react-select-4-input').click({ force: true });
        // cy.get('#react-select-4-listbox') 
        // .contains('prawamaa@gmail.com').click();
        cy.get('#react-select-4-input').click({ force: true });
        cy.get('#react-select-4-listbox') 
        .contains('Girudo Digital Team').click();
        cy.wait(500); // Tunggu autofill berjalan

        // Cek apakah field terisi otomatis
        cy.get('#customerName').invoke('val').should('not.be.empty');
        cy.get('#customerLocation').invoke('val').should('not.be.empty');
        cy.get('#react-select-5-input').click({ force: true });
        cy.get('#react-select-5-listbox') 
        .contains('Head Quarter Building').click();        
        cy.contains('button',"Save").click();
        cy.contains('button',"Confirm").click();
        // Tunggu hingga tombol "Do Checklist Now!" muncul
        cy.contains('button', "Do Checklist Now!", { timeout: 10000 }) // Tunggu maksimal 10 detik
        .should('be.visible') // Pastikan tombol benar-benar terlihat
        .click();
    }); 
});