describe('read',()=> {
    beforeEach(() =>  {
        cy.login();
    });

    it('should display of data inspection', () => {
        cy.contains('.css-1m6080r','Inspection List').click();
    }); //display of data inspection

    it('should display data inspection form search by team name',()=>{
        cy.get('input[placeholder="Search Form"]').type('Girudo Digital Team{enter}');
        cy.contains('.css-zvlevn','Girudo Digital Team')
    }) //search by name team

    it('should display data inspection form search by number inspection',()=>{
        cy.get('input[placeholder="Search Form"]').type('CR202500197{enter}');
        cy.contains('.css-0','CR202500197');
    }) //search by number inspection

    it('should display data inspection form filter by date created',()=>{
        cy.contains('button',"Filter").click();
        cy.get('.css-1haj66m').click();
        // cy.get('.react-datepicker__navigation--next').click(); // optional
        // cy.get('.react-datepicker__navigation--previous').click();
        cy.get('[aria-label="Choose Wednesday, February 26th, 2025"]').click();
        cy.get('[aria-label="Choose Thursday, February 27th, 2025"]').click();
        cy.contains('b', 'Apply Filter').click();
    }) //search by date created

    it('should display detail of inspection form',()=>{
// Klik baris untuk membuka detail
cy.contains('p.chakra-text', 'CR202500215', { timeout: 10000 })
  .should('be.visible')
  .click({ force: true });

// Klik tombol delete pertama untuk membuka modal
cy.contains('button', "Delete").click();

// Tunggu modal benar-benar muncul
cy.get('.chakra-modal__content-container', { timeout: 5000 })
  .should('be.visible');

// Pastikan footer modal muncul
cy.get('.chakra-modal__footer', { timeout: 5000 }).should('be.visible');

// Klik tombol "Delete" yang ada di dalam footer modal
cy.get('.chakra-modal__footer button')
  .contains('Delete')
  .should('be.visible')
  .click({ force: true });

    })
})
