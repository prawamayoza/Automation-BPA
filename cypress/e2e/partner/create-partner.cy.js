describe('create partner', () => {
    it('add in the data Partner', () => {
    cy.contains('.css-1m6080r', 'Partners')
        .scrollIntoView()
        .should('be.visible')
        .wait(500)
        .click();
      
    cy.url().should('include', '/partner');
      
    // Tambahkan check untuk memastikan sudah masuk halaman "List of Partners"
    cy.contains('b', 'List of Partners')
        .should('be.visible');
      
    // Sekarang baru klik tombol “Add New” yang benar
    cy.contains('button', 'Add New').click();

    const timestamp = Date.now();
    const name = `Test User ${timestamp}`;
    const email = `user${timestamp}@example.com`;
    const phone = `08${Math.floor(100000000 + Math.random() * 900000000)}`;
    const address = `Jl. Contoh No.${timestamp}`;
    const website = `https://website${timestamp}.com`;
  
    cy.get('input#name').type(name);
    cy.get('input#contactEmail').type(email);
    cy.get('input#contactPhone').type(phone);
    cy.get('input#addressStreet1').type(address);
    cy.get('input#website').type(website);
  
    // centang checkbox (bisa disesuaikan sesuai kebutuhan)
    cy.get('input#isCompany').check({ force: true });
    cy.get('input#isVendor').uncheck({ force: true });
    cy.get('input#isCustomer').check({ force: true });

    cy.contains('button', 'Save').click();
    cy.get('div.chakra-popover__popper[style*="visibility: visible"]')
        .find('button')
        .contains('Confirm')
        .click();
    });
})