import StringUtils from "../utils/StringUtils"

class HomePage {

    expandWorkspaceActions = (workspaceTitle) => {
        cy.get(`.s-workspace-${StringUtils.simplifyText(workspaceTitle)} .s-workspace-actions-button`).click();
    }

    clickOnManageUsersAction = () => {
        cy.get(".s-manage-workspace-users-button").click();
    }

    expectManageUsersActionToBeDisabled = () => {
        cy.get(".s-manage-workspace-users-button.is-disabled").should("exist");
    }

    clickOnDeleteAction = () => {
        cy.get(".s-workspace-actions-dropdown").get(".s-delete-workspace-button.is-disabled")
            .should("not.exist").then(() => {cy.get(".s-delete-workspace-button").click()
        })
    }

    expectDeleteActionToBeDisabled = () => {
        cy.get(".s-delete-workspace-button.is-disabled").should("exist");
    }

    clickOnLeaveAction = () => {
        cy.get(".s-leave-workspace-button").click();
    }

    clickOnWorkspaceTitle = (workspace_id) => {
        cy.get(`.s-workspace-${workspace_id} .s-workspace-title`).first().click();
    }

    clickOnWorkspaceOpenButton = (workspace_id) => {
        cy.get(`.s-workspace-${workspace_id} .s-workspace-open-button`).first().click();
    }

    confirmAction = () => {
        cy.get(".s-confirm-dialog-button").click();
    }

    expectConfirmDialogNotToBeShown = () => {
        cy.get(".s-confirm-dialog").should("not.exist");
    }

    closeAction = () => {
        cy.get(".s-dialog-close-button").click();
    }

    cancelAction = () => {
        cy.get(".s-cancel-dialog-button").click();
    }

    expectActionConfirmDialogClosed = () => {
        cy.get(".s-loading").should("not.exist");
        this.expectConfirmDialogNotToBeShown();
        cy.get(".s-workspace-actions-dropdown").should("not.exist");
    }

    expectSuccessMessage = () => {
        cy.get(".s-message.success").should("exist");
    }

    expectErrorMessage = () => {
        cy.get(".s-message.error").should("exist");
    }

    clickOnCreateWorkspaceButton = () => {
        cy.get(".s-create-workspace-button").click();
    }

    expectCreateWorkspaceButton = (expectedEnabledButton) => {
        const condition = expectedEnabledButton ? "not.have.class" : "have.class";
        cy.get(".s-create-workspace-button").should(condition, 'disabled');
    }

    clickOnCreateButton = () => {
        cy.get(".s-create-button").click();
    }

    clickOnMessageLink = () => {
        cy.get(".s-message-text-header-value a").click();
    }

    setWorkspaceNameInput = (text) => {
        cy.get(".s-workspace-creation-dialog-input").type(text);
    }

    expectWorkspaceCreationDialogState = (state) => {
        cy.get(".s-workspace-creation-dialog").should(state);
    }

    expectCreateButton = (chainer, value) => {
        cy.get(".s-create-button").should(chainer, value);
    }

    expectDialogSpinnerExists = () => {
        cy.get(".s-workspace-creation-dialog-spinner").should("exist");
    }

    expectWorkspaceExistOnHomePage = (workspaceName) => {
        cy.get(".s-workspace .s-workspace-title").should("contain", workspaceName);
    }

    expectWorkspaceNotExistOnHomePage = (workspaceName) => {
        cy.get(".s-workspace .s-workspace-title").contains(workspaceName).should("not.exist");
    }

    waitForIndigoAnalyzeLoad = () => {
        cy.get('.main-loading').should("exist").then(() => {
            cy.get('.main-loading').should("not.exist");
        })
    }

    waitForCatalogItemsLoad = () => {
        cy.get('.adi-catalog-loading-group').should("exist").then(() => {
            cy.get('.adi-catalog-loading-group', {timeout: 5000}).should("not.exist");
        })
    }

    openInsight = (insightName) => {
        cy.get('.s-report_select .s-open').click()
            .get('.s-open-visualizations .s-isLoading').should("exist").then(() => {
            cy.get('.s-open-visualizations .s-isLoading').should("not.exist");
        })
            .get(`.gd-visualizations-list-item.s-${StringUtils.simplifyText(insightName)}`).click();
    }

    waitForInsightLoaded = () => {
        cy.get('.adi-editor .editor-loading').should("exist").then(() => {
            cy.get('.editor-loading').should("not.exist")
                .get('.adi-computing').should('not.exist')
                .wait(1000)
        })
    }

    verifyHeaderHomePage() {
        cy.get(".gd-header-project").should("be.visible").should("contain","Default Organization");
    }

    verifyWorkSpaceSectionShow() {
        cy.get(".s-workspaces-section").should("exist").should("contain","Your workspaces");
    }

    verifyGettingStartedLink() {
        cy.get(".s-learn-panel-getting-started-link").invoke('attr', 'href')
            .should("contain","/getting-started");
    }

    verifyAPIReferenceLink() {
        cy.get(".s-learn-panel-apidocs-link").invoke('attr', 'href')
            .should("contain","/api");
    }

    verifyDocumentLink() {
        cy.get(".s-learn-panel-documentation-link").invoke('attr', 'href')
            .should("contain","https://gooddata.com/developers/cloud-native/doc/");
    }

    verifySlackLink() {
        cy.get(".s-learn-panel-slack-link").invoke('attr', 'href')
            .should("eq","https://www.gooddata.com/slack/");
    }
}

export default HomePage;
