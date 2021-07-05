class LoginPage {

    getTitleWelcomePage(expectedTitle) {
        cy.get("#gooddata-anywhere-beta").should("have.text", expectedTitle)
        return this;
    }

    checkUrlLogin() {
        cy.location("pathname").should("contain", "/dex/auth/local");
        return this;
    }

    checkLoginThemePresent() {
        cy.get(".login-page-block").should("exist");
        return this;
    }

    inputUserName(userName) {
        cy.get("#login").should("be.visible").type(userName);
        return this;
    }

    inputPassword(password) {
        cy.get("#password").should("be.visible").type(password);
        return this;
    }

    clickSubmitButton() {
        cy.get(".submit-button").click();
        return this;
    }

    verifyErrorMessage() {
        cy.get(".login-error").should("exist").should("contain", "Invalid Email Address and password.");
    }

    isErrorMessageHidden() {
        cy.get(".login-error").should("not.exist")
    }
}

export default LoginPage;