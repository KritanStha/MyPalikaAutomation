import DDA from "../fixtures/Locators/differentDobApplicationLocators";
import data from "../fixtures/data/differentDobData";

describe("Different Date Of Birth Application", () => {
  it("Should fill and submit the complete form with Nepali data", () => {
    // Navigate to form
    cy.navigateToForm(DDA.menuItem);

    // Search and select user
    cy.searchAndSelectUser(data.userSearch);

    // Select ward
    cy.get(DDA.wardSelect).eq(0).select(data.ward, { force: true });
    cy.wait(1000);

    // Fill Applicant Personal Details
    cy.contains(DDA.applicantSection).should("be.visible");
    cy.get(DDA.firstNameInput).clear().type(data.applicant.firstName);
    cy.get(DDA.middleNameInput).clear().type(data.applicant.middleName);
    cy.get(DDA.lastNameInput).clear().type(data.applicant.lastName);
    cy.get(DDA.citizenshipInput).clear().type(data.applicant.citizenshipNumber);

    // Select citizenship issue date
    cy.selectNepaliDate(0, 9);

    cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });
    cy.get(DDA.nationalIdInput).clear().type(data.applicant.nationalId);
    cy.get("select").eq(2).select(data.applicant.gender, { force: true });

    // Fill Permanent Address
    cy.contains(DDA.permanentAddressSection).should("be.visible");
    cy.get("select").eq(3).select(data.address.province, { force: true });
    cy.wait(1500);
    cy.get("select").eq(4).should("not.be.disabled").select(data.address.district, { force: true });
    cy.wait(1500);
    cy.get("select").eq(5).should("not.be.disabled").select(1, { force: true });
    cy.wait(1500);
    cy.get("select").eq(6).should("not.be.disabled").select(1, { force: true });
    cy.get(DDA.toleInput).clear().type(data.address.tole);

    // Fill Grandfather's Details
    cy.contains(DDA.grandfatherSection).should("be.visible");
    cy.fillFamilyMember(0, data.grandfather);

    // Fill Father's Details
    cy.contains(DDA.fatherSection).should("be.visible");
    cy.fillFamilyMember(1, data.father);

    // Fill Date of Birth Details
    cy.contains("p.chakra-text", DDA.detailsSection).scrollIntoView().should("be.visible");

    // Select date in citizenship
    cy.selectNepaliDate(1, 27);

    // Select actual date of birth
    cy.selectNepaliDate(2, 14);

    cy.get(DDA.reasonInput).clear().type(data.reason);

    // Upload Documents
    cy.get(DDA.citizenshipDoc).selectFile("cypress/fixtures/files/citizenship.jpg", { force: true });
    cy.get(DDA.letterDoc).selectFile("cypress/fixtures/files/letter.pdf", { force: true });
    cy.get(DDA.proofDoc).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

    // Submit form with confirmation
    cy.submitFormWithConfirmation();
  });
});
