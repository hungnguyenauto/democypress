/// <reference types="cypress" />
const username= Cypress.env('username');
const password= Cypress.env('password');
import LoginPage from "../pageObjects/LoginPage";
import HomePage from "../pageObjects/HomePage";

describe("Login", () => {
    let loginPage = new LoginPage();
    let homePage = new HomePage();

    beforeEach ( function () {
        // cy.visit("http://localhost:3000/#/")
        cy.visit('/');
    });

    it("login with incorrect username, password", () => {
        loginPage.checkUrlLogin();
        loginPage.checkLoginThemePresent();
        loginPage.inputUserName("demo1@example.com").inputPassword(password).clickSubmitButton();
        loginPage.verifyErrorMessage();
    });

    it("login with correct username, password and check Home page", () => {
        loginPage.inputUserName(username).inputPassword(password).clickSubmitButton();
        homePage.verifyHeaderHomePage();
        homePage.verifyWorkSpaceSectionShow();
        homePage.verifyGettingStartedLink();
        homePage.verifyAPIReferenceLink();
        homePage.verifyDocumentLink();
        homePage.verifySlackLink();
    });
});