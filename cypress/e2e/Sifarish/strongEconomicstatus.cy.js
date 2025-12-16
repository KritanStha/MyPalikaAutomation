import strongEconomicStatusVerificationLocators from "../../fixtures/Locators/strongEconomicStatusVerificationLocators"
import { sharedApplicantData, sharedAddressData } from "../../fixtures/data/SData_Version3"
import { strongEconomicStatusUnique } from "../../fixtures/data/UData_Version3"



describe('Strong Economic Status Verification', () => {
    it(" Strong Economic Status", () => {

        cy.on('uncaught:exception', () => false)
        cy.login()

        cy.contains('Strong Economic Status Verification')
            .scrollIntoView()
            .click();

        cy.searchAndSelectUser('Rajiv Notification - (9843530326)');



        cy.get(strongEconomicStatusVerificationLocators.wardSelect).select('4');

        cy.get(strongEconomicStatusVerificationLocators.applicantFirstNameInput)
            .clear()
            .type(sharedApplicantData.applicantFirstName);
        cy.get(strongEconomicStatusVerificationLocators.applicantMiddleNameInput)
            .clear()
            .type(sharedApplicantData.applicantMiddleName);
        cy.get(strongEconomicStatusVerificationLocators.applicantLastNameInput)
            .clear()
            .type(sharedApplicantData.applicantLastName);

        cy.get(strongEconomicStatusVerificationLocators.applicantGenderSelect).select('महिला')
        cy.get(strongEconomicStatusVerificationLocators.applicantDateOfBirthPicker).first().click();
        cy.get('td.month-day.current')
            .contains('६')
            .click();

        cy.get(strongEconomicStatusVerificationLocators.applicantCitizenshipNumberInput)
            .clear()
            .type(sharedApplicantData.applicantCitizenshipNumber);

        cy.get(strongEconomicStatusVerificationLocators.applicantIssueDatePicker).eq(1).click();
        cy.get('td.month-day.current')
            .contains('६')
            .click();

        cy.get(strongEconomicStatusVerificationLocators.applicantIssueDistrictSelect).select('lalitpur')
        cy.get(strongEconomicStatusVerificationLocators.nationalIdNumberInput).type(sharedApplicantData.nationalIdNumber)

        cy.get(strongEconomicStatusVerificationLocators.applicantContactNumberInput).clear().type(strongEconomicStatusUnique.applicantContactNumber)


        cy.get(strongEconomicStatusVerificationLocators.provinceSelect).select(sharedAddressData.province);
        cy.get(strongEconomicStatusVerificationLocators.districtSelect).select(sharedAddressData.district);
        cy.get(strongEconomicStatusVerificationLocators.localLevelSelect).select(sharedAddressData.localLevel);
        cy.get(strongEconomicStatusVerificationLocators.wardNumberSelect).select(sharedAddressData.wardNumber);
        cy.get(strongEconomicStatusVerificationLocators.toleInput).type(sharedAddressData.tole);


        cy.get(strongEconomicStatusVerificationLocators.officeNameInput).type(strongEconomicStatusUnique.officeName)
        cy.get(strongEconomicStatusVerificationLocators.officeAddressInput).type(strongEconomicStatusUnique.officeAddress)

        cy.get(strongEconomicStatusVerificationLocators.propertyTaxReceiptUpload).attachFile('files/fieldVerf.pdf')

        cy.get(strongEconomicStatusVerificationLocators.landOwnershipCertificateUpload).attachFile('files/fieldVerf.pdf')

        cy.get(strongEconomicStatusVerificationLocators.applyButton).click()

        cy.get(strongEconomicStatusVerificationLocators.forSubmit).contains('Submit').click()

        cy.get('a[href*="admin-dashboard/application"]')
            .contains('Sifarish')
            .click({ force: true });

        cy.contains('td', 'Strong Economic Status Verification')
            .first()
            .closest('tr')
            .within(() => {
                // Click the View button in the row
                cy.get('button[aria-label="show"]')
                    .scrollIntoView()
                    .click({ force: true });

            });



        cy.get('.chakra-select.css-ysxrja').select('7f59d5eb-52c3-493d-9482-6e82ef96869b')
        cy.get('.chakra-button.chakra-menu__menu-button.css-arfz4w').eq(1).click()
        cy.get('.chakra-menu__menuitem.css-y7jzs3').eq(3).click();


    })
})