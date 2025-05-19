describe('read page cust care', () => {
  beforeEach(() => {
    cy.login();
    cy.contains('button.chakra-menu__menu-button', 'Rezkya Hairy', { timeout: 10000 }).should('be.visible').click();
    // 2. Klik menu item 'CusCare' di dalam dropdown
    cy.get('button.chakra-menu__menuitem:contains("CusCare")', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/helpdesk'); // Validasi URL setelah navigasi ke halaman Cus Care
    cy.contains('List of Cus Care', { timeout: 10000 }).should('be.visible'); // Validasi header halaman
    cy.get('.css-1ow4wtg', { timeout: 15000 }).should('be.visible'); // Pastikan kontainer daftar tiket terlihat
  });

  it('should display the main components of the Cust Care page', () => {
    // Menggunakan selector yang lebih spesifik berdasarkan HTML yang diberikan
    cy.contains('p.chakra-text.css-i3jkqk', 'Filter Data :').should('be.visible');
    cy.get('input[placeholder="Title"]').should('be.visible');
    cy.get('input[placeholder="Description"]').should('be.visible');
    cy.get('input[placeholder="Status"]').should('be.visible');
    cy.get('.css-1ow4wtg').should('exist');
  });

  it('should display list items with expected content and actions', () => {
    // Tes ini dimulai dengan asumsi sudah berada di halaman daftar Cust Care

    cy.get('.css-1ow4wtg').first().within(() => {
      // Memeriksa elemen di dalam item daftar pertama
      cy.contains('p.chakra-text.css-rszk63', 'Title:').should('be.visible');
      cy.contains('p.chakra-text', 'Title:').next('p.chakra-text').should('not.be.empty');
      // Asumsi untuk Description dan Status memiliki struktur <p> yang sama untuk labelnya
      // Jika berbeda, sesuaikan selectornya
      cy.contains('p.chakra-text.css-rszk63', 'Description:').should('be.visible');
      cy.contains('p.chakra-text.css-rszk63', 'Status:').should('be.visible');
      cy.get('span.css-o6rcp0').should('be.visible').and('not.be.empty'); // Selector untuk tag status dari HTML Anda
      cy.get('button[aria-label="view-button"]').should('be.visible');
    });
  });

  it('should allow filtering tickets by Title', () => {
    // Tes ini dimulai dengan asumsi sudah berada di halaman daftar Cust Care

    const searchTerm = 'Test Ticket';
    cy.get('input[placeholder="Title"]').type(searchTerm);
    cy.wait(1500); // Mungkin perlu disesuaikan atau diganti dengan menunggu elemen muncul/hilang

    // Karena 'Test Ticket' diharapkan tidak menghasilkan data,
    // verifikasi bahwa kontainer list tiket (.css-1ow4wtg) tidak ada.
    cy.get('.css-1ow4wtg').should('not.exist');
    // Dan verifikasi bahwa pesan "There are no records to display" muncul.
    cy.get('div.sc-llYSUQ.fvPgqw').contains('There are no records to display').should('be.visible');
  });

  it('should navigate to ticket details when the View button is clicked', () => {
    // Tes ini dimulai dengan asumsi sudah berada di halaman daftar Cust Care

    cy.get('.css-1ow4wtg').first().within(() => {
      cy.get('button[aria-label="view-button"]').click();
    });
    cy.url().should('match', /\/helpdesk\/[a-f0-9-]+$/); // Validasi URL halaman detail (asumsi ID adalah UUID)
  });
});