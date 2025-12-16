import businessClosedRecommendationLocators from "../../fixtures/Locators/businessClosedRecommendationLocators";
import { sharedApplicantData, sharedAddressData, sharedBusinessData } from "../../fixtures/data/SData_Version3";
import { businessNotBeingOperatedUnique } from "../../fixtures/data/UData_Version3";




describe('Business Closed ', () => {
    it("Business Closed Recommendation", () => {

        cy.on('uncaught:exception', () => false)
        cy.login()

        cy.contains(businessClosedRecommendationLocators.businessClosedText, 'Business Closed Recommendation').click();
        cy.searchAndSelectUser('Rajiv Notification - (9843530326)');



        cy.get(businessClosedRecommendationLocators.wardSelect).select('4');

        // Personal Details

        cy.get(businessClosedRecommendationLocators.applicantFirstNameInput)
            .clear()
            .type(sharedApplicantData.applicantFirstName);
        cy.get(businessClosedRecommendationLocators.applicantMiddleNameInput)
            .clear()
            .type(sharedApplicantData.applicantMiddleName);
        cy.get(businessClosedRecommendationLocators.applicantLastNameInput)
            .clear()
            .type(sharedApplicantData.applicantLastName);

        cy.get(businessClosedRecommendationLocators.applicantCitizenshipNumberInput)
            .clear()
            .type(sharedApplicantData.applicantCitizenshipNumber);

        cy.get(businessClosedRecommendationLocators.applicantIssueDatePicker).eq(0).click();
        cy.get('td.month-day.current')
            .contains('६')
            .click();

        cy.get(businessClosedRecommendationLocators.applicantIssueDistrictSelect)
            .select(sharedApplicantData.applicantIssueDistrict);
        cy.get(businessClosedRecommendationLocators.nationalIdNumberInput)
            .type(sharedApplicantData.nationalIdNumber);

        // Fill Address Info
        cy.get(businessClosedRecommendationLocators.provinceSelect).select(sharedAddressData.province);
        cy.get(businessClosedRecommendationLocators.districtSelect).select(sharedAddressData.district);
        cy.get(businessClosedRecommendationLocators.localLevelSelect).select(sharedAddressData.localLevel);
        cy.get(businessClosedRecommendationLocators.wardNumberSelect).select(sharedAddressData.wardNumber);
        cy.get(businessClosedRecommendationLocators.toleInput).type(sharedAddressData.tole);

        // Fill Business Info
        cy.get(businessClosedRecommendationLocators.businessRegNumberInput)
            .type(businessNotBeingOperatedUnique.businessRegistrationNo);
        cy.get(businessClosedRecommendationLocators.businessNameInput)
            .clear()
            .type(businessNotBeingOperatedUnique.businessName);
        cy.get(businessClosedRecommendationLocators.businessTypeInput)
            .type(sharedBusinessData.businessType);
        cy.get(businessClosedRecommendationLocators.businessAddressInput)
            .type(sharedBusinessData.businessType); // You may want to replace with actual address if needed

        // Business Closed Dates
        cy.get(businessClosedRecommendationLocators.businessClosedFromDatePicker).eq(1).should('be.visible').click();
        cy.get('td.month-day.current')
            .contains('६')
            .click();// From Date

        cy.get(businessClosedRecommendationLocators.businessClosedToDatePicker).eq(2).click();
        cy.get('td.month-day.current')
            .contains('६')
            .click(); // To Date

        // Reason for closure
        cy.get(businessClosedRecommendationLocators.businessClosureReasonInput)
            .type(businessNotBeingOperatedUnique.reasonNotOperating);

        // Onsite Survey Date
        cy.get(businessClosedRecommendationLocators.onsiteSurveyDatePicker).eq(3).click();
        cy.get('td.month-day.current')
            .contains('६')
            .click();

        cy.get(businessClosedRecommendationLocators.officeNameInput).type(businessNotBeingOperatedUnique.bOfficeName)
        cy.get(businessClosedRecommendationLocators.officeAddressInput).type(businessNotBeingOperatedUnique.bOfficeAddress)


        cy.get(businessClosedRecommendationLocators.companyRegCertificateInput)
            .attachFile('files/compReg.pdf')

        cy.get(businessClosedRecommendationLocators.renewalCertificateInput)
            .attachFile('files/fieldVerf.pdf')

        cy.get(businessClosedRecommendationLocators.fieldVerificationReportInput)
            .attachFile('files/renewalCert.pdf')

        cy.get(businessClosedRecommendationLocators.applyButton).click()

        cy.get(businessClosedRecommendationLocators.submit).click()


        cy.get('a[href*="admin-dashboard/application"]')
            .contains('Sifarish')
            .click({ force: true });





        cy.contains('td', 'Business Closed Recommendation')
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
});








