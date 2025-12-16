import WESV from "../../fixtures/Locators/weakEconomicStatusVerificationLocators";
import data from "../../fixtures/data/weakEconomicStatusVerificationData";

describe("Weak Economic Status Verification", () => {
    it("Should fill and submit the complete weak economic status verification form", () => {
        // Navigate to form
        cy.navigateToForm(WESV.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(WESV.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(WESV.applicantSection).should("be.visible");
        cy.get(WESV.firstName).clear().type(data.applicant.firstName);
        cy.get(WESV.middleName).clear();
        cy.get(WESV.lastName).clear().type(data.applicant.lastName);

        // Select Gender
        cy.get("select").eq(1).select(data.applicant.gender, { force: true });

        // Select Date of Birth (First Date Picker)
        cy.selectNepaliDate(0, 10);

        cy.get(WESV.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date (Second Date Picker)
        cy.selectNepaliDate(1, 15);

        // Select Issue District
        cy.get("select").eq(2).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID and Contact
        cy.get(WESV.nationalId).clear().type(data.applicant.nationalId);
        cy.get(WESV.contactNumber).clear().type(data.applicant.contactNumber);

        // Fill Permanent Address
        cy.contains(WESV.permanentAddressSection).should("be.visible");
        cy.get("select").eq(3).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(6).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get(WESV.tole).clear().type(data.permanentAddress.tole);

        // Fill Office Details
        cy.contains(WESV.officeDetailsSection).should("be.visible");
        cy.get(WESV.officeName).clear().type(data.office.name);
        cy.get(WESV.officeAddress).clear().type(data.office.address);

        // Upload Documents
        cy.get(WESV.propertyTaxReceipt).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        cy.get(WESV.landOwnershipCert).selectFile("cypress/fixtures/files/proof.jpg", { force: true });
        // Optional: cy.get(WESV.wardRecommendation).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
