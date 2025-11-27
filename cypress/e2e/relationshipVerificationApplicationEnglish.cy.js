import RVAE from "../fixtures/Locators/relationshipVerificationApplicationEnglishLocators";
import data from "../fixtures/data/relationshipVerificationApplicationEnglishData";

describe("Relationship Verification Application English", () => {
    it("Should fill and submit the complete relationship verification application english form", () => {
        // Navigate to form
        cy.navigateToForm(RVAE.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(RVAE.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(RVAE.applicantSection).should("be.visible");
        cy.get(RVAE.firstName).clear().type(data.applicant.firstName);
        cy.get(RVAE.middleName).clear();
        cy.get(RVAE.lastName).clear().type(data.applicant.lastName);

        cy.get(RVAE.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date (First Date Picker)
        // Using label-based selection for robustness
        cy.contains("label", "Citizenship Issue Date").parent().find("input").click();
        cy.get("tbody").should("be.visible");
        cy.get("td.month-day.current").eq(15).click();

        // Select Issue District
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(RVAE.nationalId).clear().type(data.applicant.nationalId);

        // Fill Permanent Address
        cy.contains(RVAE.permanentAddressSection).should("be.visible");
        cy.get("select").eq(2).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get(RVAE.tole).clear().type(data.permanentAddress.tole);

        // Fill Purpose
        cy.contains(RVAE.purposeSection).should("be.visible");
        cy.get(RVAE.purpose).clear().type(data.purpose);

        // Upload Documents
        cy.get(RVAE.declaration).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        // Optional: cy.get(RVAE.policeClearance).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Fill Relationship Details Table
        // Add first relative (row already exists)
        cy.get(RVAE.relativeNameInput).eq(0).type(data.relatives[0].name);
        cy.get(RVAE.relationshipSelect).eq(0).select(data.relatives[0].relation, { force: true });

        // Add second relative
        cy.contains("button", "Add More...").click();
        cy.wait(500);
        cy.get(RVAE.relativeNameInput).eq(1).type(data.relatives[1].name);
        cy.get(RVAE.relationshipSelect).eq(1).select(data.relatives[1].relation, { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
