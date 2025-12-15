import businessRenewalLocators from "../fixtures/Locators/businessRenewal";

describe('Business Reward Module Test', () => {
    it('For business reward', () => {
        cy.on('uncaught:exception', () => false)
        cy.login()

        // Click on Business Registration accordion button to expand the menu
        cy.contains('Business Registration')
            .parent()
            .find('button[aria-expanded]')
            .click();

        // Wait and click on the Business Registration link inside the expanded menu
        cy.contains('a', 'Business Renewal')
            .scrollIntoView()
            .should('be.visible')
            .click();

        //cy.contains(businessRenewalLocators.businessRenewalCreate).click();
        cy.get(businessRenewalLocators.businessRenewalCreate).click();
        cy.get(businessRenewalLocators.business).select('ae1cc8c2-fba4-4a2f-bfa2-f2f87e08c0c5');
        cy.get(businessRenewalLocators.renewalPeriod).select('२०७८/७९');

        cy.get(businessRenewalLocators.voucherDate).click();
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(businessRenewalLocators.voucherNumber).type('56');
        cy.get(businessRenewalLocators.selectFile).attachFile('/files/fieldVerf.pdf')
        cy.get(businessRenewalLocators.submitButton).click();

    })
})