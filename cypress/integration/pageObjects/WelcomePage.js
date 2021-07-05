class WelcomePage {

    getTitleWelcomePage(expectedTitle) {
        return cy.get("#gooddata-anywhere-beta").should("have.text", expectedTitle)
    }

    compareTw0Title() {
        const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()
        let titleText

        cy.get('.company-details')
            .find('.title')
            .then(($title) => {
                // save text from the first element
                titleText = normalizeText($title.text())
            })

        cy.get('.company-details')
            .find('.identifier')
            .should(($identifier) => {
                // we can massage text before comparing
                const idText = normalizeText($identifier.text())

                // text from the title element should already be set
                expect(idText, 'ID').to.equal(titleText)
            })
    }

    checkWelcomePageLink() {
        cy.get('#gooddata-anywhere-beta a').should('have.attr', 'href', '#/?id=gooddata-anywhere-beta')
    }

    checkTitleWelcomePage(expectedTitle) {
        cy.get('#gooddata-anywhere-beta').should(($p) => {
            expect($p).to.contain(expectedTitle)})
    }

    clickOnboardingGuide() {
        cy.contains("Onboarding Guide").click();
        return this;
    }

    isDarkModeSelected () {
        return cy.get("#dark_mode").scrollIntoView().should("not.be.checked");
    }

    enableDarkMode() {
        if (this.isDarkModeSelected()) {
            cy.get("#dark_mode").scrollIntoView().click();
        }
        return this;
    }
}

export default WelcomePage;