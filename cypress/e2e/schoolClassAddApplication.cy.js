import SCAA from "../fixtures/Locators/schoolClassAddApplicationLocators";
import data from "../fixtures/data/schoolClassAddApplicationData";

describe("School Class Add Application", () => {
    it("Should fill and submit the complete school class add application form", () => {
        // Navigate to form
        cy.navigateToForm(SCAA.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(SCAA.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(SCAA.applicantSection).should("be.visible");
        cy.get(SCAA.firstName).clear().type(data.applicant.firstName);
        cy.get(SCAA.middleName).clear();
        cy.get(SCAA.lastName).clear().type(data.applicant.lastName);
        cy.get(SCAA.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        cy.selectNepaliDate(0, 15);

        // Select Issue District
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(SCAA.nationalId).clear().type(data.applicant.nationalId);

        // Fill School Description
        cy.contains(SCAA.schoolDescriptionSection).should("be.visible");
        cy.get(SCAA.schoolName).clear().type(data.school.name);
        cy.get(SCAA.schoolType).clear().type(data.school.type);

        // School Address (Cascading)
        // Indices shifted because Permanent Address is removed
        cy.get("select").eq(2).select(data.school.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.school.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.school.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.school.ward, { force: true });
        cy.get(SCAA.schoolTole).clear().type(data.school.tole);

        // Fill Decision Details
        cy.contains(SCAA.decisionDetailsSection).should("be.visible");
        // Select Date of Decision
        cy.selectNepaliDate(1, 12);
        cy.get(SCAA.classCount).clear().type(data.decision.classCount);

        // Fill Recommending Office Details
        cy.contains(SCAA.recommendingOfficeSection).should("be.visible");
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
        cy.get(SCAA.meetingMinutes).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
        cy.get(SCAA.schoolDetails).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
