import BRL from "../fixtures/Locators/businessRegistration";
import { shBusiness } from "../fixtures/data/UData_Version3";

describe("Business Registration", ()=>{
    it("Add New Business Registration", ()=>{
        cy.on('uncaught:exception', () => false)
        cy.login()
        
        // Click on Business Registration accordion button to expand the menu
        cy.contains('Business Registration')
            .parent()
            .find('button[aria-expanded]')
            .click();
        
        // Wait and click on the Business Registration link inside the expanded menu
        cy.contains('a', 'Business Registration')
            .scrollIntoView()
            .should('be.visible')
            .click();
            
        cy.get(BRL.addNewBusinessRegistration).click();
        cy.get(BRL.searchUserInput).click();
        cy.get('#menu-list-\\:r4n\\:-menuitem-\\:r4t\\:').click();

        cy.get(BRL.businessManFirstNameEnInput).clear().type(shBusiness.businessManFirstName);
        cy.get(BRL.businessManMiddleNameEnInput).clear().type(shBusiness.businessManMiddleName);
        cy.get(BRL.businessManLastNameEnInput).clear().type(shBusiness.businessManLastName);
        cy.get(BRL.businessManFirstNameNepaliInput).clear().type(shBusiness.applicantFirstName);
        cy.get(BRL.businessManMiddleNameNepaliInput).clear().type(shBusiness.applicantMiddleName);
        cy.get(BRL.businessManLastNameNepaliInput).clear().type(shBusiness.applicantLastName);
        cy.get(BRL.fatherOrHusbandFirstNameEnInput).clear().type(shBusiness.fhFirstName);
        cy.get(BRL.fatherOrHusbandMiddleNameEnInput).clear().type(shBusiness.fhMiddleName);
        cy.get(BRL.fatherOrHusbandLastNameEnInput).clear().type(shBusiness.fhLastName);
        cy.get(BRL.fatherOrHusbandFirstNameNepaliInput).clear().type(shBusiness.fatherFirstName);
        cy.get(BRL.fatherOrHusbandMiddleNameNepaliInput).clear().type(shBusiness.fatherMiddleName);
        cy.get(BRL.fatherOrHusbandLastNameNepaliInput).clear().type(shBusiness.fatherLastName);
        cy.get(BRL.grandFatherFirstName).clear().type(shBusiness.fatherinlawFirstName);
        cy.get(BRL.grandFatherMiddleName).clear().type(shBusiness.fatherinlawMiddleName);
        cy.get(BRL.grandFatherLastName).clear().type(shBusiness.fatherinlawLastName);
        cy.get(BRL.nepaligrandFatherFirstName).clear().type(shBusiness.grandfatherFirstName);
        cy.get(BRL.nepaligrandFatherMiddleName).clear().type(shBusiness.grandfatherMiddleName);
        cy.get(BRL.nepaligrandFatherLastName).clear().type(shBusiness.grandfatherLastName);
        
        cy.get(BRL.CitizenshipNumber).clear().type(shBusiness.citizenshipNumber);
        cy.get(BRL.PhoneNumber).clear().type(shBusiness.phoneNumber);
        cy.get(BRL.Email).clear().type(shBusiness.email);
        cy.get(BRL.houseNumber).clear().type(shBusiness.houseNumber);
        cy.get(BRL.houseWardNumber).clear().type(shBusiness.houseWardNumber);
        cy.get(BRL.houseStreetNumber).clear().type(shBusiness.houseStreetNumber);
        cy.contains('button.chakra-button', 'Next').click();

        //Business Details Section
        cy.get(BRL.businessNameEnInput).clear().type(shBusiness.businessEnName);
        cy.get(BRL.businessNameNepaliInput).clear().type(shBusiness.businessNeplaiName);
        cy.get(BRL.businessEntityTypeSelect).select('Sole proprietorship');
        cy.get(BRL.currentCapitalInput).clear().type(shBusiness.currentCapital);
        cy.get(BRL.fixedCapitalInput).clear().type(shBusiness.fixedCapital);
        cy.get(BRL.businessStartDatePicker).eq(0).click();
        cy.get('td.month-day.current') 
        .contains('१') 
        .click();
        cy.get(BRL.businessCategorySelect).select('KHA');
        cy.get(BRL.oldRegistrationNumberInput).type(shBusiness.oldRegistrationNumber),{force:true};
        cy.get(BRL.registerOfficeNameInput).type(shBusiness.registrationOfficeName,{force:true});
        // Click Next button with force to bypass visibility check
        cy.get('button.chakra-button.css-arfz4w').eq(1).click({ force: true });
        cy.wait(5000)

        // Rental Details Section
        cy.get(BRL.landlordFirstNameEnInput).clear().type(shBusiness.landlordFirstNameEn);
        cy.get(BRL.landlordMiddleNameEnInput).clear().type(shBusiness.landlordMiddleNameEn);
        cy.get(BRL.landlordLastNameEnInput).clear().type(shBusiness.landlordLastNameEn);
        cy.get(BRL.landlordFirstNameNepaliInput).clear().type(shBusiness.landlordNepaliFirstName);
        cy.get(BRL.landlordMiddleNameNepaliInput).clear().type(shBusiness.landlordNepaliMiddleName);
        cy.get(BRL.landlordLastNameNepaliInput).clear().type(shBusiness.landlordNepaliLastName);
        cy.get(BRL.signBoardLengthInput).clear().type(shBusiness.signBoardLength);
        cy.get(BRL.signBoardWidthInput).clear().type(shBusiness.signBoardWidth);
        cy.get(BRL.signBoardTypeSelect).select('WOODEN');
        cy.get(BRL.rentToBePaydMonthlyInput).clear().type(shBusiness.rentToBePaydMonthly);

        // Click Next button with force to bypass visibility check
        cy.get('button.chakra-button.css-arfz4w').eq(2).click({ force: true });

        // Applicant Details Section
        cy.get(BRL.applicantFirstNameEnInput).clear().type(shBusiness.applicantFirstNameEn);
        cy.get(BRL.applicantMiddleNameEnInput).clear().type(shBusiness.applicantMiddleNameEn);
        cy.get(BRL.applicantLastNameEnInput).clear().type(shBusiness.applicantLastNameEn);
        cy.get(BRL.applicantFirstNameNepaliInput).clear().type(shBusiness.applicantFirstNameNepali);
        cy.get(BRL.applicantMiddleNameNepaliInput).clear().type(shBusiness.applicantMiddleNameNepali);
        cy.get(BRL.applicantLastNameNepaliInput).clear().type(shBusiness.applicantLastNameNepali);
        cy.get(BRL.applicantCitizenshipNumberInput).clear().type(shBusiness.applicantCitizenshipNumber);
        cy.get(BRL.applicantCitizenshipIssuedDistrictInput).clear().type(shBusiness.applicantCitizenshipIssuedDistrict);

        //cy.get(BRL.applicantCitizenshipIssuedDatePicker).eq(0).click({force: true});

        //cy.contains('Applicant Details').click();   // Or the correct tab name

        // Step 2: Ensure the tab opened
        cy.get('input.nepali-date-picker').eq(1).should('be.visible').click()
        cy.get('td.month-day.current') 
        .contains('१') 
        .click();

        //cy.selectNepaliDate(0, 15);
        cy.get(BRL.applicantHouseNumberInput).clear().type(shBusiness.applicantHouseNumber);
         cy.get('button.chakra-button.css-arfz4w').eq(3).click({ force: true });

        //
        // Address Details Section (ठेगाना)
        // BusinessMan Address
        cy.get(BRL.businessmanProvinceSelect).eq(0).select('Gandaki');
        cy.get(BRL.businessmanDistrictSelect).eq(1).select('Gorkha');
        cy.get(BRL.businessmanMunicipalitySelect).eq(2).select('Gorkha Municipality');
        cy.get(BRL.businessmanWardSelect).eq(3).select('3613');

         cy.get(BRL.businessmanProvinceSelect).eq(4).select('Bagmati');
        cy.get(BRL.businessmanDistrictSelect).eq(5).select('Lalitpur');
        cy.get(BRL.businessmanMunicipalitySelect).eq(6).select('Lalitpur Metropolitan');
         cy.get(BRL.businessmanWardSelect).eq(7).select('3019');
         cy.get(BRL.businessmanProvinceSelect).eq(8).select('Koshi');
        cy.get(BRL.businessmanDistrictSelect).eq(9).select('Jhapa');
        cy.get(BRL.businessmanMunicipalitySelect).eq(10).select('Kankai Municipality');
      cy.get(BRL.businessmanWardSelect).eq(11).select('707');
      cy.wait(5000)

       

        



        //cy.contains('button.chakra-button', 'Next').click();
        cy.get('[type="submit"]').eq(4).click();


        // Document Section
       cy.get(BRL.citizenshipFrontPhotoInput)
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');

        cy.get(BRL.citizenshipBackPhotoInput)
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');

        cy.get(BRL.landLordRedBookPhotoCopyInput)
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');
        cy.get(BRL.voucherFileInput)
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');
        cy.get(BRL.voucherNumberInput).type(shBusiness.voucherNumber);

        cy.get(BRL.voucherDatePicker).eq(4).should('be.visible').click()
        cy.get('td.month-day.current') 
        .contains('१') 
        .click();

        /*cy.get(BRL.ownHouseCheckbox).check({ force: true });
        cy.contains('span.chakra-radio__label', 'व्यक्तिगत')
        .click();

        cy.contains('span.chakra-radio__label', 'घरेलु').click();
        cy.get('label[for="field-:r66:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');*/
        // Option 1: Click the visible label text
        //cy.contains('span.chakra-checkbox__label', 'आफ्नो घर जग्गामा ब्यबसाय छैन ?').click();

        // Option 2: Check the hidden input directly
        //cy.get('input.chakra-checkbox__input').check({ force: true });

        cy.contains('span.chakra-radio__label', 'व्यक्तिगत')
        .click();
        cy.get('label[for="field-:r63:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf')
        

        // Select 'घरेलु'
        cy.contains('span.chakra-radio__label', 'घरेलु').click();
        cy.wait(2000);
        cy.get('label[for="field-:r66:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');

        cy.get(BRL.businessTypeSelect).select('EDUCATIONAL')
        cy.wait(2000);
        cy.get('label[for="field-:r69:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');
        cy.get('label[for="field-:r6a:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');
        cy.get('label[for="field-:r6b:"]')
        .parent()
        .find('input[type="file"]')
        .attachFile('/files/fieldVerf.pdf');
        cy.wait(2000);
        cy.get('.chakra-button.css-arfz4w').eq(1).click({ force: true });



    })
});