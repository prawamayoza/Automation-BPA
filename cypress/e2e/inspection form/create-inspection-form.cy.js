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
        .should('be.visible') 
        .and('contain', 'formId is a required field'); // teks error sesuai sesuai yang diharapkan
    }); 

    it('add inspection data fill in inspection ', () => {
        cy.contains('button',"Add New").click();
        cy.get('#react-select-2-input').click({ force: true });
        cy.get('#react-select-2-listbox') 
        .contains('Checklist For Checking Electricity of Home').click();
        cy.wait(500);
        
        // Pilih Team Assignee
        cy.contains('label.chakra-form__label', 'Team Assignee')
        .parent()
        .find('button[aria-label="add-team"]')
        .click();

        cy.contains('span.chakra-checkbox__label', 'TEAM TWO')
        .parent('label.chakra-checkbox')
        .find('input[type="checkbox"]')
        .check({ force: true });

        cy.contains('button', 'Submit').click();
        cy.wait(1000);

        // Klik tombol Assignee
        cy.get('#assignee-label')
        .closest('.chakra-form-control')
        .find('button[aria-label="add-team"]')
        .click();

        // Uncheck Assignee otomatis
        cy.contains('span.chakra-checkbox__label', 'Rezkya Wolin')
        .parent('label.chakra-checkbox')
        .find('input[type="checkbox"]')
        .uncheck({ force: true });

        // Check Assignee Baru
        cy.contains('span.chakra-checkbox__label', 'prawamaa@gmail.com')
        .parent('label.chakra-checkbox')
        .find('input[type="checkbox"]')
        .check({ force: true });
        cy.wait(1000);

        // Klik tombol Submit khusus untuk Assignee
        cy.get('#assignee-label')
        .closest('.chakra-form-control')
        .within(() => {
        cy.contains('button', 'Submit').click();
        });

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