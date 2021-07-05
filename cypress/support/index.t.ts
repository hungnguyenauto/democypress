/// <reference types="cypress" />

import './commands'
declare namespace Cypress {
    interface Chainable<Subject> {
        visitSite(): Chainable<(string)>;
        login(username, pwd): Chainable<(void)>;
    }
}