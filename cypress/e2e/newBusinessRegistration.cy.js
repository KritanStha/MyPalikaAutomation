import NBRR from "../fixtures/Locators/newBusinessRegistrationLocators";
import data from "../fixtures/data/newBusinessRegistrationData";

describe("Recommendation for New Business Registration", () => {
    it("Should fill and submit the complete business registration form", () => {
        // Navigate to form
        cy.navigateToForm(NBRR.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(NBRR.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(NBRR.applicantSection).should("be.visible");
        cy.get(NBRR.firstName).clear().type(data.applicant.firstName);
        cy.get(NBRR.middleName).clear();
        cy.get(NBRR.lastName).clear().type(data.applicant.lastName);
        cy.get(NBRR.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        cy.selectNepaliDate(0, 21);

        // Select Issue District (English dropdown)
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(NBRR.nationalId).clear().type(data.applicant.nationalId);

        // Fill Permanent Address
        cy.contains(NBRR.permanentAddressSection).should("be.visible");
        cy.get("select").eq(2).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get('input[placeholder="Enter tole name"]').eq(0).clear().type(data.permanentAddress.tole);

        // Fill Business Details
        cy.contains(NBRR.businessDetailsSection).should("be.visible");
        cy.get(NBRR.businessType).clear().type(data.business.type);

        // Business Address - Cascading Dropdowns
        cy.get("select").eq(6).select(data.business.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(7).should("not.be.disabled").select(data.business.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(8).should("not.be.disabled").select(data.business.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(9).should("not.be.disabled").select(data.business.ward, { force: true });
        cy.get('input[placeholder="Enter tole name"]').eq(1).clear().type(data.business.tole);

        // Fill Recommending Office Details
        cy.contains(NBRR.recommendingOfficeSection).should("be.visible");
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
        cy.get(NBRR.fieldVerificationReport).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        cy.get(NBRR.ieeEiaDoc).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
