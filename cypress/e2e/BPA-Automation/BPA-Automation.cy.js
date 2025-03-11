// visit staging
describe('Smoke Test', () => {
  it('Visits the website and checks the title', () => {
    cy.visit('https://bpa-master.girudo.id/auth/signin'); // Ganti dengan URL staging/production
    cy.title().should('include', 'Sign In | BPA'); // untuk target mengecek title 
    cy.contains('button', 'Login').should('exist'); //Untuk menjadi target pengecekan
  });



});