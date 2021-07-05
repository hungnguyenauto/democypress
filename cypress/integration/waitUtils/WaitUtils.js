class WaitUtils {
    waitForCatalogReload() {
        cy.get(".gd-visualizations-list .s-isLoading").should("exist");
        cy.get(".gd-visualizations-list .s-isLoading").should("not.exist");
        cy.wait(200);
    }

    waitForInsightLoaded = () => {
        cy.get('.adi-editor .editor-loading').should("exist").then(() => {
            cy.get('.editor-loading').should("not.exist")
                .get('.adi-computing').should('not.exist')
                .wait(1000)
        })
    }
}

export default WaitUtils;