class ModelerPage {
    clickScanButton() {
        cy.get(".s-scan").should("be.visible").click()
        return this;
    }

    // Declare element in Scan model dialog
    isScanButtonDisable() {
        // cy.get(".scan-model-dialog-footer .s-scan").should("have.attr", "class").contains("disabled")
        cy.get(".scan-model-dialog-footer .s-scan").should(($div) => {
          const className = $div[0].className;
          expect(className).to.match(/disabled/)
        })
    }

    isViewCheckboxChecked() {
        cy.get(".view").should("not.be.checked")
    }

    checkView() {
        if(!this.isViewCheckboxChecked()) {
            cy.get(".view").check()
        }
    }

    isTableCheckboxChecked() {
        cy.get(".table").should("be.checked")
    }

    checkTable() {
        if(!this.isTableCheckboxChecked()) {
            cy.get(".view").check()
        }
        return this;
    }

    inputPrefix(prefixName, value) {
        console.log("prefix is: " + prefixName)
        console.log("value prefix is: " + value)
        cy.get('.scan-model-data-source-input').each(($el, index, $list) => {
            if($el.text().includes(prefixName)) {
                cy.wrap($el).find('.gd-input-field').clear().type(value);
            }
        })
    }

    inputTablePrefix(tablePrefix) {
        this.inputPrefix("Table prefix:", tablePrefix);
        return this;
    }

    inputViewPrefix(viewPrefix) {
        this.inputPrefix("View prefix:", viewPrefix);
        return this;
    }

    inputSeparatorPrefix(separator) {
        this.inputPrefix("Separator:", separator);
        return this;
    }

    inputGrainPrefix(grain) {
        this.inputPrefix("Grain prefix:", grain);
        return this;
    }

    inputReferencePrefix(reference) {
        this.inputPrefix("Reference prefix:", reference);
        return this;
    }

    inputFactPrefix(fact) {
        this.inputPrefix("Fact prefix:", fact);
        return this;
    }

    inputLabelPrefix(label) {
        this.inputPrefix("Label prefix:", label);
        return this;
    }

    clickCancelButtonDialog() {
        cy.get(".scan-model-dialog-footer .s-cancel").should("be.visible").click();
    }

    clickScanButtonDialog() {
        cy.get(".scan-model-dialog-footer .s-scan").should("be.visible").click();
    }
}

export default ModelerPage;