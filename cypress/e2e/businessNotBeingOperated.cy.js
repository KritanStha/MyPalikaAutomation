import BNBO from "../fixtures/Locators/businessNotBeingOperatedLocators";
import data from "../fixtures/data/businessNotBeingOperatedData";

describe("Business Not Being Operated", () => {
    it("Should fill and submit the complete business not being operated form", () => {
        // Navigate to form
        cy.navigateToForm(BNBO.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(BNBO.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(BNBO.applicantSection).should("be.visible");
        cy.get(BNBO.firstName).clear().type(data.applicant.firstName);
        cy.get(BNBO.middleName).clear();
        cy.get(BNBO.lastName).clear().type(data.applicant.lastName);
        cy.get(BNBO.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        cy.selectNepaliDate(0, 15);

        // Select Issue District
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(BNBO.nationalId).clear().type(data.applicant.nationalId);

        // Fill Permanent Address
        cy.contains(BNBO.permanentAddressSection).should("be.visible");
        cy.get("select").eq(2).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get(BNBO.tole).eq(0).clear().type(data.permanentAddress.tole);

        // Fill Business Details
        cy.contains(BNBO.businessDetailsSection).should("be.visible");
        cy.get(BNBO.businessRegNumber).clear().type(data.business.regNumber);
        cy.get(BNBO.businessName).clear().type(data.business.name);
        cy.get(BNBO.businessType).clear().type(data.business.type);
        cy.get(BNBO.proprietorName).clear().type(data.business.proprietorName);
        cy.get(BNBO.landlordName).clear().type(data.business.landlordName);
        cy.get(BNBO.phoneNumber).clear().type(data.business.phoneNumber);
        cy.get(BNBO.panNumber).clear().type(data.business.panNumber);

        // Select Date of Business Closed (From)
        cy.selectNepaliDate(1, 20);

        cy.get(BNBO.reason).clear().type(data.business.reason);

        // Fill Business Address
        cy.contains(BNBO.businessAddressSection).should("be.visible");
        cy.get("select").eq(6).select(data.businessAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(7).should("not.be.disabled").select(data.businessAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(8).should("not.be.disabled").select(data.businessAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(9).should("not.be.disabled").select(data.businessAddress.ward, { force: true });
        cy.get(BNBO.tole).eq(1).clear().type(data.businessAddress.tole);

        // Fill If Registered in Other Agency
        cy.contains(BNBO.otherAgencySection).should("be.visible");
        cy.get(BNBO.registeredBodyName).clear().type(data.otherAgency.bodyName);
        cy.get(BNBO.registeredNumber).clear().type(data.otherAgency.regNumber);

        // Select Registered Date
        cy.selectNepaliDate(2, 10);

        // Fill Recommending Office Details
        cy.contains(BNBO.recommendingOfficeSection).should("be.visible");
        cy.contains("label", "Office Name")
            .parent()
            .find("input")
            .clear()
            .type(data.recommendingOffice.name);
        cy.contains("label", "Office Address")
            .parent()
            .find("input")
            .clear()
            .type(data.recommendingOffice.address);

        // Upload Documents
        cy.get(BNBO.companyRegCert).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        cy.get(BNBO.renewalCert).selectFile("cypress/fixtures/files/proof.jpg", { force: true });
        // Optional: Field Verification Report
        // cy.get(BNBO.fieldVerificationReport).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
