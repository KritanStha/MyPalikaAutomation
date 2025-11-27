import FSOR from "../fixtures/Locators/fundamentalSchoolOpenRecommendationLocators";
import data from "../fixtures/data/fundamentalSchoolOpenRecommendationData";

describe("Fundamental School Open Recommendation", () => {
    it("Should fill and submit the complete fundamental school open recommendation form", () => {
        // Navigate to form
        cy.navigateToForm(FSOR.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(FSOR.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(FSOR.applicantSection).should("be.visible");
        cy.get(FSOR.firstName).clear().type(data.applicant.firstName);
        cy.get(FSOR.middleName).clear();
        cy.get(FSOR.lastName).clear().type(data.applicant.lastName);
        cy.get(FSOR.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        cy.selectNepaliDate(0, 15);

        // Select Issue District
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(FSOR.nationalId).clear().type(data.applicant.nationalId);

        // Fill Permanent Address
        cy.contains(FSOR.permanentAddressSection).should("be.visible");
        cy.get("select").eq(2).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.permanentAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.permanentAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });
        cy.get(FSOR.tole).eq(0).clear().type(data.permanentAddress.tole);

        // Fill Recommending Office Details
        cy.contains(FSOR.recommendingOfficeSection).should("be.visible");
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

        // Fill Decision Details
        cy.contains(FSOR.decisionDetailsSection).should("be.visible");
        cy.selectNepaliDate(1, 12);

        // Upload Documents
        cy.get(FSOR.meetingMinutes).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
