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

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.sedit_card').each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.get('child_attribute').eq(index).click();
        }
    })
})

Cypress.Commands.add("visitSite", () => {
    cy.visit('https://example.cypress.io/commands/actions')
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.location("pathname").should("contain", "/dex/auth/local");
    cy.get(".login-page-block").should("exist");
    cy.get("#login").type(username);
    cy.get("#password").type(password);
    cy.get(".submit-button").click();
    Cypress.Cookies.debug(true)
})

Cypress.on('uncaught:exception', (err, runnable) => {
    debugger
    return false
})
