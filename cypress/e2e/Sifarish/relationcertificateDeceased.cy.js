import relationCertificateDeceasedLocators from "../../fixtures/Locators/relationCertificateDeceasedLocators"
import { sharedApplicantData, sharedAddressData } from "../../fixtures/data/SData_Version3"
import { relationCertificateDeceasedUnique } from "../../fixtures/data/UData_Version3"

describe('Relation certificate Deceased', () => {
    it('Relation certificate Deceased', () => {

        cy.on('uncaught:exception', () => false)
        cy.login()

        cy.contains('Relation Certificate with Deceased')
            .scrollIntoView()
            .click();

        cy.searchAndSelectUser('Rajiv Notification - (9843530326)');
        cy.get(relationCertificateDeceasedLocators.wardSelect).select('4');

        cy.get(relationCertificateDeceasedLocators.applicantFirstNameInput)
            .clear()
            .type(sharedApplicantData.applicantFirstName);
        cy.get(relationCertificateDeceasedLocators.applicantMiddleNameInput)
            .clear()
            .type(sharedApplicantData.applicantMiddleName);
        cy.get(relationCertificateDeceasedLocators.applicantLastNameInput)
            .clear()
            .type(sharedApplicantData.applicantLastName);



        cy.get(relationCertificateDeceasedLocators.applicantCitizenshipNumberInput)
            .clear()
            .type(sharedApplicantData.applicantCitizenshipNumber);

        cy.get(relationCertificateDeceasedLocators.applicantIssueDistrictSelect).select('lalitpur')
        cy.get(relationCertificateDeceasedLocators.nationalIdNumberInput).type(sharedApplicantData.nationalIdNumber)


        cy.get(relationCertificateDeceasedLocators.provinceSelect).select(sharedAddressData.province);
        cy.get(relationCertificateDeceasedLocators.districtSelect).select(sharedAddressData.district);
        cy.get(relationCertificateDeceasedLocators.localLevelSelect).select(sharedAddressData.localLevel);
        cy.get(relationCertificateDeceasedLocators.wardNumberSelect).select(sharedAddressData.wardNumber);
        cy.get(relationCertificateDeceasedLocators.toleInput).type(sharedAddressData.tole);


        cy.get(relationCertificateDeceasedLocators.purposeInput).type(relationCertificateDeceasedUnique.purpose)
        cy.get(relationCertificateDeceasedLocators.declarationFamilyInput).attachFile('files/renewalCert.pdf')
        cy.get(relationCertificateDeceasedLocators.clearancePoliceInput).attachFile('files/renewalCert.pdf')
        relationCertificateDeceasedUnique.relationRows.forEach((row, index) => {

            // Person Name
            // cy.get(relationCertificateDeceasedLocators.relationRowPersonNameInput)
            //     .eq(index)
            //     .clear()
            //     .type(row.personName);

            // If we need more rows in the DOM, click the Add More button
            if (index > 0) {
                cy.get(relationCertificateDeceasedLocators.addMoreButton)
                    .click();
                // wait for the new select to appear
                cy.get(relationCertificateDeceasedLocators.relationRowNataSelect)
                    .should('have.length.at.least', index + 1);
            }

            // Relation Select (dropdown)
            cy.get(relationCertificateDeceasedLocators.relationRowNataSelect)
                .eq(index)
                .select(row.relation);

            // Checkbox (isDeceased)
            if (row.isDeceased) {
                cy.get(relationCertificateDeceasedLocators.relationRowIsDeceasedCheckbox)
                    .eq(index)
                    .check({ force: true });
            } else {
                cy.get(relationCertificateDeceasedLocators.relationRowIsDeceasedCheckbox)
                    .eq(index)
                    .uncheck({ force: true });
            }
        })

        // Click submit once after all dynamic rows have been filled
        cy.get(relationCertificateDeceasedLocators.applyButton).click()
        cy.get(relationCertificateDeceasedLocators.forSubmission).eq(0).click()

        cy.get('a[href*="admin-dashboard/application"]')
            .contains('Sifarish')
            .click({ force: true });
    })
})
