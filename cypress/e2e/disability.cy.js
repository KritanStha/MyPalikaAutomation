import DL from "../fixtures/Locators/disabilityLocators";
import data from "../fixtures/data/disabilityData";

describe("Disability Application", () => {
    it("Should fill and submit the complete Disability form", () => {
        // Ignore uncaught exceptions from server-side template errors
        cy.on('uncaught:exception', (err, runnable) => {
            // Ignore ENOENT errors from missing template files on server
            if (err.message.includes('ENOENT') || err.message.includes('categoryc') || err.message.includes('categorya')) {
                return false;
            }
            // Let other errors fail the test
            return true;
        });

        // Login and navigate to Social Services section
        cy.loginSocialServices();

        // Ensure the navigation menu is open and visible
        cy.get('div[role="dialog"]').should('not.exist'); // Ensure no modals are blocking
        cy.wait(1000); // Give time for any animations

        // Click on Disability and Create
        cy.contains("Disability", { timeout: 10000 })
            .should('be.visible')
            .click({ force: true }); // Force click in case of overlay issues

        cy.wait(1000); // Wait for page to load
        cy.contains("button", "Create", { timeout: 10000 })
            .scrollIntoView()
            .should("be.visible")
            .click();

        // Select category and submit initial form
        cy.contains("button", DL.submit).click();

        // Select "All" radio button to show form
        cy.get('input[type="radio"][value=""]').check({ force: true });

        // ========== PERSONAL INFORMATION SECTION ==========
        cy.contains("Personal Information").should("be.visible");
        cy.get(DL.firstNameEn).clear().type(data.personal.firstNameEn);
        cy.get(DL.firstNameNp).eq(0).clear().type(data.personal.firstNameNp, { force: true });
        cy.get(DL.middleNameEn).clear();
        cy.get(DL.middleNameNp).eq(0).clear();
        cy.get(DL.lastNameEn).clear().type(data.personal.lastNameEn);
        cy.get(DL.lastNameNp).eq(0).clear().type(data.personal.lastNameNp, { force: true });

        cy.get(DL.email).clear().type(data.personal.email);
        cy.get(DL.gender).select(data.personal.gender, { force: true });
        cy.get(DL.bloodGroup).select(data.personal.bloodGroup, { force: true });
        cy.get(DL.maritalStatus).select(data.personal.maritalStatus, { force: true });
        cy.get(DL.employmentStatus).select(data.personal.employmentStatus, { force: true });
        cy.get(DL.religion).select(data.personal.religion, { force: true });

        // Date of Birth
        cy.get(DL.dateOfBirth).eq(0).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(10).click();

        cy.get(DL.telephoneNo).clear().type(data.personal.telephoneNo);
        cy.get(DL.birthRegistrationNumber).clear().type(data.personal.birthRegistrationNumber);
        cy.get(DL.birthCertificateIssueDistrict).select(data.personal.birthCertificateIssueDistrict, { force: true });

        // Birth Certificate Issued Date
        cy.get(DL.birthCertificateIssueDate).eq(1).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(15).click();

        cy.get(DL.qualification).select(data.personal.qualification, { force: true });
        cy.get(DL.occupation).select(data.personal.occupation, { force: true });
        cy.get(DL.organizationName).clear().type(data.personal.organizationName);
        cy.get(DL.monthlySalary).clear().type(data.personal.monthlySalary);
        cy.get(DL.mobileNo).clear().type(data.personal.mobileNo);

        // ========== PERMANENT ADDRESS SECTION ==========
        // Targeting Permanent Address (Index 0)
        cy.get('option:contains("Select province")').parent().eq(0).select(data.permanentAddress.province, { force: true });
        cy.get('option:contains("Select district")').parent().eq(0).should("not.be.disabled").select(data.permanentAddress.district, { force: true });

        cy.get('option:contains("Select municipality")').parent().eq(0).should("not.be.disabled").find('option').should('have.length.gt', 1);

        cy.get('option:contains("Select municipality")').parent().eq(0).then($select => {
            const options = $select.find('option');
            const matchingOption = [...options].find(opt =>
                opt.text.includes('काठमाडौँ') || opt.text.includes('Kathmandu')
            );
            if (matchingOption) {
                cy.wrap($select).select(matchingOption.value, { force: true });
            }
        });

        cy.get('option:contains("Select ward no")').parent().eq(0).should("not.be.disabled").find('option').then($options => {
            if ($options.length > 1) {
                cy.wrap($options.parent()).select($options.eq(1).val(), { force: true });
            }
        });

        // Check "same as permanent address"
        cy.get(DL.permanentAddressCheckbox).check({ force: true });

        // ========== PATRON DETAILS SECTION ==========
        cy.get(DL.patronFirstNameEn).clear().type(data.patron.firstNameEn);
        cy.get(DL.patronFirstNameNp).eq(1).clear().type(data.patron.firstNameNp, { force: true });
        cy.get(DL.patronMiddleNameEn).clear();
        cy.get(DL.patronMiddleNameNp).eq(1).clear();
        cy.get(DL.patronLastNameEn).clear().type(data.patron.lastNameEn);
        cy.get(DL.patronLastNameNp).eq(1).clear().type(data.patron.lastNameNp, { force: true });

        cy.get(DL.patronEmail).clear().type(data.patron.email);
        cy.get(DL.patronRelation).select(data.patron.relation, { force: true });

        // Patron Address (Index 1 - because Temporary Address is hidden/removed due to checkbox)
        // Patron Province
        cy.get('option:contains("Select province")').parent().eq(1).select(data.patron.province, { force: true });
        cy.get('option:contains("Select district")').parent().eq(1).should("not.be.disabled").select(data.patron.district, { force: true });

        cy.get('option:contains("Select municipality")').parent().eq(1).should("not.be.disabled").find('option').should('have.length.gt', 1);

        cy.get('option:contains("Select municipality")').parent().eq(1).then($select => {
            const options = $select.find('option');
            const matchingOption = [...options].find(opt =>
                opt.text.includes('काठमाडौँ') || opt.text.includes('Kathmandu')
            );
            if (matchingOption) {
                cy.wrap($select).select(matchingOption.value, { force: true });
            }
        });

        cy.get('option:contains("Select ward no")').parent().eq(1).should("not.be.disabled").find('option').then($options => {
            if ($options.length > 1) {
                cy.wrap($options.parent()).select($options.eq(1).val(), { force: true });
            }
        });

        // Patron Date of Birth
        cy.get(DL.patronDOB).eq(1).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(12).click();

        cy.get(DL.patronCitizenshipNo).clear().type(data.patron.citizenshipNo);
        cy.get(DL.patronCitizenshipIssuedDistrict).select(data.patron.citizenshipIssuedDistrict, { force: true });

        // Patron Citizenship Issued Date
        cy.get(DL.patronCitizenshipIssuedDate).eq(3).find('input').click();
        cy.get('tbody').should('be.visible');
        cy.get('td.month-day.current').eq(18).click();

        cy.get(DL.patronContact).clear().type(data.patron.contact);
        cy.get(DL.patronOccupation).clear().type(data.patron.occupation);
        cy.get(DL.patronMonthlyIncome).clear().type(data.patron.monthlyIncome);

        // ========== DISABILITY DETAILS SECTION ==========
        cy.get(DL.registrationDate).type(data.disability.registrationDate);
        cy.get(DL.disabilityType).select(data.disability.disabilityType, { force: true });
        cy.get(DL.disabilitySeverity).select(data.disability.disabilitySeverity, { force: true });
        cy.get(DL.category).select(data.disability.category, { force: true });
        cy.get(DL.cause).select(data.disability.cause, { force: true });
        cy.get(DL.nature).select(data.disability.nature, { force: true });
        cy.get(DL.seriousness).select(data.disability.seriousness, { force: true });
        cy.get(DL.description).clear().type(data.disability.description);
        cy.get(DL.activityLimitDescription).clear().type(data.disability.activityLimitDescription);

        if (data.disability.useAccessory) {
            cy.get(DL.useAccessory).check({ force: true });
            // Fill the conditional "Name of Accessory" field that appears when checkbox is checked
            cy.get(DL.nameOfAccessory).clear().type(data.disability.nameOfAccessory);
        }

        cy.get(DL.taskWithoutHelp).clear().type(data.disability.taskWithoutHelp);
        cy.get(DL.helpForWhichTask).clear().type(data.disability.helpForWhichTask);
        cy.get(DL.trainingReceived).clear().type(data.disability.trainingReceived);
        cy.get(DL.taskWithHelp).clear().type(data.disability.taskWithHelp);
        cy.get(DL.otherServices).clear().type(data.disability.otherServices);

        // ========== ADDITIONAL INFORMATION SECTION ==========
        cy.get(DL.caste).clear().type(data.additionalInfo.caste);
        cy.get(DL.latestEducation).select(data.additionalInfo.latestEducation, { force: true });
        cy.get(DL.additionalOccupation).select(data.additionalInfo.occupation, { force: true });
        cy.get(DL.wardNumber).clear().type(data.additionalInfo.ward);

        if (data.additionalInfo.ownHouse) {
            cy.get(DL.ownHouse).check({ force: true });
        }

        if (data.additionalInfo.stillStudying) {
            cy.get(DL.stillStudying).check({ force: true });
        }

        // ========== RECEIVER DETAILS SECTION ==========
        cy.get(DL.receiverNameEn).clear().type(data.receiver.nameEn);
        cy.get(DL.receiverNameNp).clear().type(data.receiver.nameNp, { force: true });
        cy.get(DL.receiverMobileNumber).clear().type(data.receiver.mobileNumber);
        cy.get(DL.receiverRelationship).select(data.receiver.relationship, { force: true });
        cy.get(DL.receivedDate).type(data.receiver.receivedDate);

        // ========== AUTHORITY DETAILS SECTION ==========
        cy.get(DL.authorityNameEn).clear().type(data.authority.nameEn);
        cy.get(DL.authorityNameNp).clear().type(data.authority.nameNp, { force: true });
        cy.get(DL.authorityMobileNumber).clear().type(data.authority.mobileNumber);
        cy.get(DL.approvedDate).type(data.authority.approvedDate);
        cy.get(DL.authorityDesignation).clear().type(data.authority.designation);
        cy.get(DL.officeAddress).clear().type(data.authority.officeAddress);

        // Upload Files
        cy.get(DL.photo).eq(0).selectFile("cypress/fixtures/files/proof.jpg", { force: true });
        cy.get(DL.sifarish).eq(0).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Remarks
        cy.get(DL.remarks).clear().type(data.remarks);

        // Submit form
        cy.contains("button", DL.submitButton).click();
    });
});