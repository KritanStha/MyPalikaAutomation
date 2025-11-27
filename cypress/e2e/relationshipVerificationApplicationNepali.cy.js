import RVAN from "../fixtures/Locators/relationshipVerificationApplicationNepaliLocators";
import data from "../fixtures/data/relationshipVerificationApplicationNepaliData";

describe("Relationship Verification Application Nepali", () => {
    it("Should fill and submit the complete relationship verification application nepali form", () => {
        // Navigate to form
        cy.navigateToForm(RVAN.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(RVAN.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(RVAN.applicantSection).should("be.visible");
        cy.get(RVAN.firstName).clear().type(data.applicant.firstName);
        cy.get(RVAN.middleName).clear();
        cy.get(RVAN.lastName).clear().type(data.applicant.lastName);

        // Select Date of Birth (First Date Picker)
        cy.selectNepaliDate(0, 10);

        cy.get(RVAN.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        // Using label-based selection to avoid index issues
        cy.contains("label", "Citizenship Issue Date").parent().find("input").click();
        cy.get("tbody").should("be.visible");
        cy.get("td.month-day.current").eq(15).click();

        // Select Issue District
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID and Contact
        cy.get(RVAN.nationalId).clear().type(data.applicant.nationalId);


        // Fill Permanent Address
        cy.contains(RVAN.permanentAddressSection).should("be.visible");
        cy.get("select").eq(2).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get(RVAN.tole).clear().type(data.permanentAddress.tole);

        // Fill Purpose
        cy.contains(RVAN.purposeSection).should("be.visible");
        cy.get(RVAN.purpose).clear().type(data.purpose);

        // Upload Documents
        cy.get(RVAN.declaration).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        // Optional: cy.get(RVAN.policeClearance).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Fill Relationship Details Table
        // Add first relative (row already exists)
        cy.get(RVAN.relativeNameInput).eq(0).type(data.relatives[0].name);
        cy.get(RVAN.relationshipSelect).eq(0).select(data.relatives[0].relation, { force: true });

        // Add second relative
        cy.contains("button", "Add More...").click();
        cy.wait(500);
        cy.get(RVAN.relativeNameInput).eq(1).type(data.relatives[1].name);
        cy.get(RVAN.relationshipSelect).eq(1).select(data.relatives[1].relation, { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
