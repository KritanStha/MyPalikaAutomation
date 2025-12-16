import JN from "../../fixtures/Locators/jesthaNagarikLocators";
import data from "../../fixtures/data/jesthaNagarikData";

describe("Jestha Nagarik (Senior Citizen) Application", () => {
    it("Should fill and submit the complete Jestha Nagarik form", () => {
        // Navigate to form in Social Services section
        cy.loginSocialServices();
        cy.contains("Jestha Nagarik Registration").click();
        cy.contains("button", "Register").click();
        cy.get('input[type="radio"][value=""]').check({ force: true });

        // Click on the search input to open dropdown
        cy.get('input[placeholder="Search User"]').click();


        // Type the user name to search
        cy.get('input[placeholder="Search User"]').type(data.userSearch);

        // ========== PERSONAL DESCRIPTION SECTION ==========
        cy.contains(JN.personalDescriptionSection).should("be.visible");

        // Fill names (English)
        cy.get(JN.firstNameEn).clear().type(data.personal.firstNameEn);
        cy.get(JN.middleNameEn).clear();
        cy.get(JN.lastNameEn).clear().type(data.personal.lastNameEn);

        // Fill names (Nepali) - using eq() to target correct inputs
        cy.get(JN.firstNameNp).eq(0).clear().type(data.personal.firstNameNp);
        cy.get(JN.middleNameNp).eq(0).clear();
        cy.get(JN.lastNameNp).eq(0).clear().type(data.personal.lastNameNp);

        // Fill email
        cy.get(JN.email).clear().type(data.personal.email);

        // Select Gender
        cy.get(JN.genderSelect).select(data.personal.gender, { force: true });

        // Select Blood Group
        cy.get(JN.bloodGroupSelect).select(data.personal.bloodGroup, { force: true });

        // Select Date of Birth (First Date Picker)
        cy.get('.nepali-date-picker').eq(0).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(10).click();

        // Fill Citizenship Details
        cy.get(JN.citizenshipNo).clear().type(data.personal.citizenshipNo);
        cy.get(JN.citizenshipIssuedDistrict).select(data.personal.citizenshipIssuedDistrict, { force: true });

        // Select Citizenship Issued Date (Second Date Picker)
        cy.get('.nepali-date-picker').eq(1).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(15).click();

        // Select Qualification and Occupation
        cy.get(JN.qualification).select(data.personal.qualification, { force: true });
        cy.get(JN.occupation).select(data.personal.occupation, { force: true });

        // Fill Mobile Number
        cy.get(JN.mobileNo).clear().type(data.personal.mobileNo);

        // ========== PERMANENT ADDRESS SECTION ==========
        cy.contains(JN.permanentAddressSection).should("be.visible");

        // Select Province
        cy.get(JN.permanentProvince).select(data.permanentAddress.province, { force: true });

        // Select District
        cy.get(JN.permanentDistrict).should("not.be.disabled").select(data.permanentAddress.district, { force: true });

        // Select Municipality - wait for options to load
        cy.get(JN.permanentMunicipality).should("not.be.disabled");
        cy.get(JN.permanentMunicipality).find('option').should('have.length.gt', 1);

        // Try to select - if exact match fails, try contains
        cy.get(JN.permanentMunicipality).then($select => {
            const options = $select.find('option');
            const matchingOption = [...options].find(opt =>
                opt.text.includes('काठमाडौँ') || opt.text.includes('Kathmandu')
            );
            if (matchingOption) {
                cy.get(JN.permanentMunicipality).select(matchingOption.value, { force: true });
            } else {
                cy.get(JN.permanentMunicipality).select(data.permanentAddress.municipality, { force: true });
            }
        });

        // Select Ward
        cy.get(JN.permanentWard).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });

        // Fill Village/Tole
        cy.get(JN.permanentVillage).clear().type(data.permanentAddress.village);

        // ========== TEMPORARY ADDRESS SECTION ==========
        cy.contains(JN.temporaryAddressSection).should("be.visible");

        // Select Province
        cy.get(JN.temporaryProvince).select(data.temporaryAddress.province, { force: true });

        // Select District
        cy.get(JN.temporaryDistrict).should("not.be.disabled").select(data.temporaryAddress.district, { force: true });

        // Select Municipality - wait for options to load
        cy.get(JN.temporaryMunicipality).should("not.be.disabled");
        cy.get(JN.temporaryMunicipality).find('option').should('have.length.gt', 1);

        // Try to select - if exact match fails, try contains
        cy.get(JN.temporaryMunicipality).then($select => {
            const options = $select.find('option');
            const matchingOption = [...options].find(opt =>
                opt.text.includes('काठमाडौँ') || opt.text.includes('Kathmandu')
            );
            if (matchingOption) {
                cy.get(JN.temporaryMunicipality).select(matchingOption.value, { force: true });
            } else {
                cy.get(JN.temporaryMunicipality).select(data.temporaryAddress.municipality, { force: true });
            }
        });

        // Select Ward
        cy.get(JN.temporaryWard).should("not.be.disabled").select(data.temporaryAddress.ward, { force: true });

        // Fill Village/Tole
        cy.get(JN.temporaryVillage).clear().type(data.temporaryAddress.village);

        // ========== CARETAKER DETAILS SECTION ==========
        cy.contains(JN.caretakerSection).should("be.visible");

        // Fill Caretaker Names (English)
        cy.get(JN.caretakerFirstNameEn).clear().type(data.caretaker.firstNameEn);
        cy.get(JN.caretakerMiddleNameEn).clear();
        cy.get(JN.caretakerLastNameEn).clear().type(data.caretaker.lastNameEn);

        // Fill Caretaker Names (Nepali) - using eq() to target correct inputs
        cy.get(JN.caretakerFirstNameNp).eq(1).clear().type(data.caretaker.firstNameNp);
        cy.get(JN.caretakerMiddleNameNp).eq(1).clear();
        cy.get(JN.caretakerLastNameNp).eq(1).clear().type(data.caretaker.lastNameNp);

        // Fill Caretaker Email
        cy.get(JN.caretakerEmail).clear().type(data.caretaker.email);

        // Select Relation
        cy.get(JN.caretakerRelation).select(data.caretaker.relation, { force: true });

        // Caretaker Address
        cy.get(JN.caretakerProvince).select(data.caretaker.province, { force: true });
        cy.get(JN.caretakerDistrict).should("not.be.disabled").select(data.caretaker.district, { force: true });
        cy.get(JN.caretakerMunicipality).should("not.be.disabled");
        cy.get(JN.caretakerMunicipality).find('option').should('have.length.gt', 1);

        // Try to select - if exact match fails, try contains
        cy.get(JN.caretakerMunicipality).then($select => {
            const options = $select.find('option');
            const matchingOption = [...options].find(opt =>
                opt.text.includes('काठमाडौँ') || opt.text.includes('Kathmandu')
            );
            if (matchingOption) {
                cy.get(JN.caretakerMunicipality).select(matchingOption.value, { force: true });
            } else {
                cy.get(JN.caretakerMunicipality).select(data.caretaker.municipality, { force: true });
            }
        });
        cy.get(JN.caretakerWard).should("not.be.disabled").select(data.caretaker.ward, { force: true });

        // Select Caretaker Date of Birth (Third Date Picker)
        cy.get('.nepali-date-picker').eq(2).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(12).click();

        // Fill Caretaker Citizenship Details
        cy.get(JN.caretakerCitizenshipNo).clear().type(data.caretaker.citizenshipNo);
        cy.get(JN.caretakerCitizenshipIssuedDistrict).select(data.caretaker.citizenshipIssuedDistrict, { force: true });

        // Select Caretaker Citizenship Issued Date (Fourth Date Picker)
        cy.get('.nepali-date-picker').eq(3).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(18).click();

        // Fill Caretaker Contact
        cy.get(JN.caretakerContact).clear().type(data.caretaker.contact);

        // ========== JESTHA NAGARIK DETAILS SECTION ==========
        cy.contains(JN.jesthaNagarikSection).should("be.visible");

        // Check illness checkbox if needed
        if (data.jesthaNagarik.hasIllness) {
            cy.get(JN.hasIllness).check({ force: true });
            cy.wait(500);

            // Fill illness description fields (first one appears automatically)
            cy.get('input[name="illnessDescription.0.name"]').clear().type('मधुमेह');
            cy.get('input[name="illnessDescription.0.medicine"]').clear().type('इन्सुलिन');
        }

        // Check care center checkbox if needed
        if (data.jesthaNagarik.hasCareCenter) {
            cy.get(JN.hasCareCenter).check({ force: true });
        }

        // Fill Available Facilities (first one is already present)
        cy.get(JN.availableFacilitiesInput).clear().type(data.jesthaNagarik.availableFacilities[0]);

        // Upload Photo
        cy.get(JN.photoUpload).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Fill Remarks
        cy.get(JN.remarks).clear().type(data.remarks);

        // Submit form with confirmation
        cy.get(JN.submitButton).click();
    });
});
