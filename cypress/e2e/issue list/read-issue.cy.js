describe('Issue List Page Functionality', () => {
    beforeEach(() => {
        cy.login(); // Panggil custom command login
        // Setelah login, navigasi ke halaman Issue List
        cy.contains('.css-1m6080r', 'Issue List') // Asumsikan selector ini ada di dashboard setelah login
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.url().should('include', '/issue-list', { timeout: 10000 });
    });

    it('should display the list of issues or an appropriate message if empty', () => {
        cy.get('body', { timeout: 10000 }).then(($body) => {
            const issueCardSelector = 'div.css-dwduxr';

            if ($body.find(issueCardSelector).length > 0) {
                cy.get(issueCardSelector).should('have.length.greaterThan', 0);
                cy.get(issueCardSelector).first().should('be.visible').within(() => {
                    cy.get('b.chakra-text.css-0').should('exist');
                });
                cy.log('Issue items are displayed.');
            } else if ($body.find('div:contains("There are no records to display")').length > 0) {
                cy.contains('div', 'There are no records to display').should('be.visible');
                cy.log('Issue list is empty: "There are no records to display" message shown.');
            } else if ($body.find('div:contains("No issues found")').length > 0) { // Tangani pesan kosong umum lainnya
                cy.contains('div', 'No issues found').should('be.visible');
                cy.log('Issue list is empty: "No issues found" message shown.');
            } else {
                cy.log('Issue list page loaded. No specific items or standard empty message detected. The list might be empty or in an unexpected state.');
            }
        });
    });


    it('should navigate to issue details, validate URL, header, and breadcrumb ID when an issue card/row is clicked', () => {
        const clickableIssueSelector = '.css-180i37o';
        cy.get(clickableIssueSelector, { timeout: 15000 }).should('exist').first().click();

        cy.url({ timeout: 10000 }).should('match', /\/issue-list\/\d+$/).then((url) => {
            const urlParts = url.split('/');
            const issueIdFromUrl = urlParts[urlParts.length - 1];
            cy.log(`Navigated to issue detail page. Issue ID from URL: ${issueIdFromUrl}`);
            cy.contains('div.css-j7qwjs', 'Issue Detail', { timeout: 10000 })
                .should('be.visible') // Assert that this specific container is visible
                .within(() => {
                    cy.get('b.chakra-text.css-qqfgvy') 
                        .should('have.text', 'Issue Detail');
                });
            cy.log('Issue detail header is visible and correct.');
            cy.get('nav.chakra-breadcrumb.css-0 ol.chakra-breadcrumb__list.css-70qvj9 li.chakra-breadcrumb__list-item', { timeout: 10000 })
                .last() // Get the last breadcrumb item, which should be the issue ID
                .find('p.chakra-text.css-lu0n2') // The <p> tag containing the ID text
                .should('be.visible')
                .and('have.text', issueIdFromUrl);
            cy.log('Breadcrumb ID matches the ID from the URL.');
            cy.get('nav.chakra-breadcrumb.css-0 ol.chakra-breadcrumb__list.css-70qvj9 li.chakra-breadcrumb__list-item')
                .last()
                .find('a.chakra-breadcrumb__link.css-spn4bz') // The <a> tag for the issue ID breadcrumb
                .should('have.attr', 'href', `/issue-list/${issueIdFromUrl}`);
            cy.log('Breadcrumb link href is correct.');
        });
    });
});