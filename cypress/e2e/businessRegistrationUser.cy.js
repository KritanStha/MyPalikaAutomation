import businessRegistrationUserLocators from "../fixtures/Locators/businessRegistrationUser";
import { shBusiness } from "../fixtures/data/UData_Version3";;
describe('Business Registration User Module Test', () => {
    it('For business registration user', () => {
        cy.on('uncaught:exception', () => false)
        cy.UserLogin()
        cy.contains('Business Registration')
            .parent()
            .find('button[aria-expanded]')
            .click();

        // Wait and click on the Business Registration link inside the expanded menu
        cy.contains('a', 'Register Business')
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.get(businessRegistrationUserLocators.businessManFirstName_en).clear({ timeout: 1000 }).type(shBusiness.businessManFirstName);
        cy.get(businessRegistrationUserLocators.businessManMiddleName_en).clear().type(shBusiness.businessManMiddleName);
        cy.get(businessRegistrationUserLocators.businessManLastName_en).clear().type(shBusiness.businessManLastName);
        //cy.get(businessRegistrationUserLocators.businessManFirstName_np).clear({ timeout: 10000 }).type(shBusiness.applicantFirstName);
        cy.get(businessRegistrationUserLocators.businessManMiddleName_np).clear().type(shBusiness.applicantMiddleName);
        cy.get(businessRegistrationUserLocators.businessManLastName_np).eq(1).clear().type(shBusiness.applicantLastName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandFirstName_en).clear().type(shBusiness.fhFirstName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandMiddleName_en).clear().type(shBusiness.fhMiddleName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandLastName_en).clear().type(shBusiness.fhLastName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandFirstName_np).clear().type(shBusiness.fatherFirstName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandMiddleName_np).clear().type(shBusiness.fatherMiddleName);
        cy.get(businessRegistrationUserLocators.fatherOrHusbandLastName_np).clear().type(shBusiness.fatherLastName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawFirstName_en).clear().type(shBusiness.fatherinlawFirstName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawMiddleName_en).clear().type(shBusiness.fatherinlawMiddleName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawLastName_en).clear().type(shBusiness.fatherinlawLastName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawFirstName_np).clear().type(shBusiness.grandfatherFirstName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawMiddleName_np).clear().type(shBusiness.grandfatherMiddleName);
        cy.get(businessRegistrationUserLocators.grandFatherOrFatherInLawLastName_np).clear().type(shBusiness.grandfatherLastName);
        //cy.get(businessRegistrationUserLocators.citizenshipNumber).should('be.visible').clear().type(shBusiness.citizenshipNumber);
        cy.get(businessRegistrationUserLocators.phoneNumber).clear().type(shBusiness.phoneNumber);
        cy.get(businessRegistrationUserLocators.email).clear().type(shBusiness.email);
        cy.get(businessRegistrationUserLocators.houseNumber).eq(0).type(shBusiness.houseNumber);
        cy.get(businessRegistrationUserLocators.houseWardNumber).type(shBusiness.houseWardNumber);
        cy.get(businessRegistrationUserLocators.houseStreetName).type(shBusiness.houseStreetNumber);
        cy.get(businessRegistrationUserLocators.nextButton).eq(0).click();


        //Business Details
        cy.get(businessRegistrationUserLocators.businessName_en).clear().type(shBusiness.businessEnName);
        cy.get(businessRegistrationUserLocators.businessName_np).eq(0).type(shBusiness.businessNeplaiName);
        cy.get(businessRegistrationUserLocators.businessType).select('Partnership');
        cy.get(businessRegistrationUserLocators.currentCapital).clear().type(shBusiness.currentCapital);
        cy.get(businessRegistrationUserLocators.fixedCapital).clear().type(shBusiness.fixedCapital);
        cy.get(businessRegistrationUserLocators.businessStartDate).eq(0).click();
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(businessRegistrationUserLocators.businessCategory).select('KHA');
        cy.get(businessRegistrationUserLocators.oldRegistrationNumber).clear().type(shBusiness.oldRegistrationNumber);
        cy.get(businessRegistrationUserLocators.registerOfficeName).clear().type(shBusiness.registrationOfficeName);
        cy.get(businessRegistrationUserLocators.nextButton).eq(1).click();

        //Rental Details
        cy.get(businessRegistrationUserLocators.landlordFirstName_en).type(shBusiness.landlordFirstNameEn);
        cy.get(businessRegistrationUserLocators.landlordMiddleName_en).type(shBusiness.landlordMiddleNameEn);
        cy.get(businessRegistrationUserLocators.landlordLastName_en).type(shBusiness.landlordLastNameEn);
        cy.get(businessRegistrationUserLocators.landlordFirstName_ne).type(shBusiness.landlordNepaliFirstName);
        cy.get(businessRegistrationUserLocators.landlordMiddleName_ne).type(shBusiness.landlordNepaliMiddleName);
        cy.get(businessRegistrationUserLocators.landlordLastName_ne).type(shBusiness.landlordNepaliLastName);
        cy.get(businessRegistrationUserLocators.signBoardLength).type(shBusiness.signBoardLength);
        cy.get(businessRegistrationUserLocators.signBoardWidth).type(shBusiness.signBoardWidth);
        cy.get(businessRegistrationUserLocators.signBoardType).select('METAL');
        cy.get(businessRegistrationUserLocators.rentToBePaid).type(shBusiness.rentToBePaydMonthly);
        cy.get(businessRegistrationUserLocators.nextButton).eq(2).click();


        //Applicant Details
        cy.get(businessRegistrationUserLocators.applicantFirstName_en).type(shBusiness.applicantFirstName);
        cy.get(businessRegistrationUserLocators.applicantMiddleName_en).type(shBusiness.applicantMiddleName);
        cy.get(businessRegistrationUserLocators.applicantLastName_en).type(shBusiness.applicantLastName);
        cy.get(businessRegistrationUserLocators.applicantFirstName_ne).type(shBusiness.applicantFirstNameNepali);
        cy.get(businessRegistrationUserLocators.applicantMiddleName_ne).type(shBusiness.applicantMiddleNameNepali);
        cy.get(businessRegistrationUserLocators.applicantLastName_ne).eq(3).type(shBusiness.applicantLastNameNepali);
        cy.get(businessRegistrationUserLocators.applicantCitizenshipNumber).eq(1).type(shBusiness.applicantCitizenshipNumber);
        cy.get(businessRegistrationUserLocators.citizenshipIssuedDistrict).clear().type(shBusiness.applicantCitizenshipIssuedDistrict);
        cy.get(businessRegistrationUserLocators.citizenshipIssuedDate).eq(2).click();
        cy.get('td.month-day.current')
            .contains('१')
            .click();
        cy.get(businessRegistrationUserLocators.applicantHouseNumber).type(shBusiness.applicantHouseNumber);
        cy.get(businessRegistrationUserLocators.nextButton).eq(3).click();

    })
})