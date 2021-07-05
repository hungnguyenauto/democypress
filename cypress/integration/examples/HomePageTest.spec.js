/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";
import WaitUtils from "../waitUtils/WaitUtils";

const username= Cypress.env('username');
const password= Cypress.env('password');
const workspaceId = Cypress.env('workspaceId');


describe("Basic", () => {
    let homePage = new HomePage()
    let waitUtils = new WaitUtils()
    // ---------------------Disable it when you want to one time login
    before(() => {
        cy.login(username, password);
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('SPRING_SEC_OAUTH2_AUTHZ_CLIENT', 'SPRING_SEC_SECURITY_CONTEXT')
    });

    it("Create workspace from Homepage", () => {
        const now = new Date().getTime()
        const workspaceName = "WS " + now;
        cy.visit("/");
        homePage.clickOnCreateWorkspaceButton();
        homePage.setWorkspaceNameInput(workspaceName);
        homePage.clickOnCreateButton();
        homePage.expectWorkspaceCreationDialogState("not.exist");
        homePage.expectWorkspaceExistOnHomePage(workspaceName);
        cy.screenshot(`Workspace-${workspaceName}-created`);

        homePage.expandWorkspaceActions(workspaceName);
        homePage.clickOnDeleteAction();
        homePage.confirmAction();
        homePage.expectActionConfirmDialogClosed();
        homePage.expectWorkspaceNotExistOnHomePage(workspaceName)
        cy.screenshot(`Workspace-${workspaceName}-deleted`);
    });

    it("Check workspace loaded", () => {
        cy.visit(`/analyze/#/${workspaceId}/reportId/edit`);
        homePage.waitForIndigoAnalyzeLoad();
        homePage.openInsight("Insight1");
        homePage.waitForInsightLoaded();
        cy.screenshot('open-insight1')
        homePage.openInsight("Insight2");
        waitUtils.waitForInsightLoaded();
        cy.screenshot('open-insight2')
    });
});