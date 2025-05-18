// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('/auth/signin'); // Menggunakan path relatif, baseUrl akan ditambahkan secara otomatis
  cy.get('#identifier').type('rezkya@wolinventures.com');
  cy.get('#password').type('Test1234');
  cy.get('button[label="Login"]').click();
  cy.url().should('eq', Cypress.config('baseUrl')); // Memastikan URL adalah baseUrl setelah login
});
// Navigasi ke halaman inspection-list setelah login
Cypress.Commands.add('navigateToInspectionList', () => {
  cy.url().then((url) => {
      if (url === Cypress.config('baseUrl')) { // Membandingkan dengan baseUrl yang dikonfigurasi
          // Mencari elemen APAPUN yang mengandung teks 'Inspection Form List'.
          // Ini akan menemukan tag <b>, dan Cypress akan mencoba mengklik elemen yang dapat diklik terkait.
          cy.contains('Inspection Form List', { timeout: 10000 }).click();
      }
  });
});
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  return originalFn(element, text, { delay: 100, ...options }); // Delay 100ms per karakter
});