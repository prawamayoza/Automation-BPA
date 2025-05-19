describe('Login Functionality', () => {
  it('Should allow a user to log in successfully using the custom command', () => {
    cy.login(); // Menggunakan custom command untuk login
    // Perintah cy.login() sudah melakukan validasi URL ke baseUrl.
    // Anda bisa menambahkan validasi tambahan di sini jika diperlukan,
    // misalnya, memeriksa elemen spesifik di dashboard setelah login.
    // Contoh: cy.contains('Welcome, rezkya@wolinventures.com').should('be.visible');
  });

  // Opsional: Tambahkan tes untuk skenario login yang gagal
  it('Should display an error message for invalid credentials', () => {
    cy.visit('/auth/signin');
    cy.get('#identifier').type('user@salah.com');
    cy.get('#password').type('passwordsalah');
    cy.get('button[label="Login"]').click();
    // Sesuaikan selector dan teks error message dengan aplikasi Anda
    // cy.contains('Invalid username or password').should('be.visible');
    cy.url().should('include', '/auth/signin'); // Pastikan tetap di halaman login
  });
});