describe('read', () => {
    it('should display of data inspection', () => {
        cy.contains('.css-1m6080r', 'Inspection List', { timeout: 10000 }).click();
    });

    it('should display data inspection form search by team name', () => {
        cy.get('input[placeholder="Search Form"]', { timeout: 10000 }).type('Girudo Digital Team{enter}');
        cy.contains('.css-zvlevn', 'Girudo Digital Team', { timeout: 10000 }).should('be.visible');
    });

    it('should display data inspection form search by number inspection', () => {
        cy.get('input[placeholder="Search Form"]', { timeout: 10000 }).type('CR202500197{enter}');
        cy.contains('.css-0', 'CR202500197', { timeout: 10000 }).should('be.visible');
    });

    it('should display data inspection form filter by date created', () => {
        cy.contains('button', "Filter", { timeout: 10000 }).click();
        cy.get('.css-1haj66m', { timeout: 10000 }).click();
        cy.get('[aria-label="Choose Wednesday, February 26th, 2025"]', { timeout: 10000 }).click();
        cy.get('[aria-label="Choose Thursday, February 27th, 2025"]', { timeout: 10000 }).click();
        cy.contains('b', 'Apply Filter', { timeout: 10000 }).click();
    });
    it.only('should display detail of inspection form to Button More',()=>{
            cy.get('.css-farez7 p.chakra-text.css-0').first().click( );
        
            cy.get('button.chakra-button[aria-haspopup="menu"]')
                .contains('More')
                .click({ force: true });
            cy.wait(500);
        
                // Klik tombol "Export PDF"
            cy.get('button.chakra-menu__menuitem')
                  .contains('Export PDF')
                  .click({ force: true});
            cy.contains('button', 'Send').click({ force: true });
                
                // Klik tombol "Delete"
            cy.get('button.chakra-menu__menuitem')
                  .contains('Delete')
                  .click({ force: true});
                // Tunggu modal delete muncul
            cy.get('.chakra-modal__content-container', { timeout: 5000 })
                .should('be.visible');
            cy.get('.chakra-modal__footer', { timeout: 5000 }).should('be.visible');
        
                // Klik tombol "Delete" yang ada di dalam footer modal
            cy.get('.chakra-modal__footer button')
                .contains('Delete')
                .should('be.visible')
                .click({ force: true });
    })
});
// describe('read',()=> {
//     beforeEach(() =>  {
//         cy.login();
//     });

//     it('should display of data inspection', () => {
//         cy.contains('.css-1m6080r','Inspection List').click();
//     }); //display of data inspection


//     it('should display data inspection form search by team name',()=>{
//         cy.get('input[placeholder="Search Form"]').type('Girudo Digital Team{enter}');
//         cy.contains('.css-zvlevn','Girudo Digital Team')
//     }) //search by name team


//     it('should display data inspection form search by number inspection',()=>{
//         cy.get('input[placeholder="Search Form"]').type('CR202500197{enter}');
//         cy.contains('.css-0','CR202500197');
//     }) //search by number inspection


//     it('should display data inspection form filter by date created',()=>{
//         cy.contains('button',"Filter").click();
//         cy.get('.css-1haj66m').click();
//         // cy.get('.react-datepicker__navigation--next').click(); // optional
//         // cy.get('.react-datepicker__navigation--previous').click();
//         cy.get('[aria-label="Choose Wednesday, February 26th, 2025"]').click();
//         cy.get('[aria-label="Choose Thursday, February 27th, 2025"]').click();
//         cy.contains('b', 'Apply Filter').click();
//     }) //search by date created


//     it.only('should display detail of inspection form to Button More',()=>{
//         cy.get('.css-farez7 p.chakra-text.css-0').first().click( );

//         cy.get('button.chakra-button[aria-haspopup="menu"]')
//         .contains('More')
//         .click({ force: true });
//         cy.wait(500);

//         // Klik tombol "Export PDF"
//         cy.get('button.chakra-menu__menuitem')
//           .contains('Export PDF')
//           .click({ force: true});
//         cy.contains('button', 'Send').click({ force: true });
        
//         // Klik tombol "Delete"
//         cy.get('button.chakra-menu__menuitem')
//           .contains('Delete')
//           .click({ force: true});
//         // Tunggu modal delete muncul
//         cy.get('.chakra-modal__content-container', { timeout: 5000 })
//         .should('be.visible');
//         cy.get('.chakra-modal__footer', { timeout: 5000 }).should('be.visible');

//         // Klik tombol "Delete" yang ada di dalam footer modal
//         cy.get('.chakra-modal__footer button')
//         .contains('Delete')
//         .should('be.visible')
//         .click({ force: true });
//     })
// })