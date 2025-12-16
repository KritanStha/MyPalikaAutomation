import MVL from "../../fixtures/Locators/marriageVerificationLocators";
import data from "../../fixtures/data/marriageVerificationData";

describe("Marriage Verification", () => {
    it("Should fill and submit the complete marriage verification form", () => {
        // Navigate to form
        cy.navigateToForm("Marriage Verification");

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.contains("label", "Please select ward number for application")
            .parent()
            .find("select")
            .select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Husband's Personal Details
        cy.contains("Husband's Personal Details").should("be.visible");
        cy.fillPersonDetails(0, data.husband);
        cy.get('input[placeholder="Write Husband\'s citizenship number"]').clear().type(data.husband.citizenshipNumber);

        // Fill Husband's Address Details
        cy.contains("Husband's Address Details").should("be.visible");
        cy.get("select").eq(1).select(data.husbandAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(2).should("not.be.disabled").select(data.husbandAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(3).should("not.be.disabled").select(data.husbandAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.husbandAddress.ward, { force: true });
        cy.get('input[placeholder="Enter tole name"]').eq(0).clear().type(data.husbandAddress.tole);

        // Fill Husband's Grandfather Details
        cy.contains("Husband's Grandfather Details").should("be.visible");
        cy.fillPersonDetails(1, data.husbandGrandfather);

        // Fill Husband's Father Details
        cy.contains("Husband's Father Details").should("be.visible");
        cy.fillPersonDetails(2, data.husbandFather);

        // Fill Husband's Mother Details
        cy.contains("Husband's Mother Details").should("be.visible");
        cy.fillPersonDetails(3, data.husbandMother);

        // Fill Wife's Personal Details
        cy.contains("Wife's Personal Details").should("be.visible");
        cy.fillPersonDetails(4, data.wife);
        cy.get('input[placeholder="Write your Wife\'s citizenship number"]').clear().type(data.wife.citizenshipNumber);

        // Fill Wife's Address Details
        cy.contains("Wife's Address Details").should("be.visible");
        cy.get("select").eq(5).select(data.wifeAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(6).should("not.be.disabled").select(data.wifeAddress.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(7).should("not.be.disabled").select(data.wifeAddress.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(8).should("not.be.disabled").select(data.wifeAddress.ward, { force: true });
        cy.get('input[placeholder="Enter tole name"]').eq(1).clear().type(data.wifeAddress.tole);

        // Fill Wife's Grandfather Details
        cy.contains("Wife's Grandfather Details").should("be.visible");
        cy.fillPersonDetails(5, data.wifeGrandfather);

        // Fill Wife's Father Details
        cy.contains("Wife's Father Details").should("be.visible");
        cy.fillPersonDetails(6, data.wifeFather);

        // Fill Wife's Mother Details
        cy.contains("Wife's Mother Details").should("be.visible");
        cy.fillPersonDetails(7, data.wifeMother);

        // Fill More Details - Date Pickers
        cy.contains("More Details").scrollIntoView().should("be.visible");

        // Select Marriage Date
        cy.selectNepaliDate(0, 18);

        // Select Sarjamin Date
        cy.selectNepaliDate(1, 16);

        // Upload Documents
        cy.get('input[name="Husbands_citizenship"]').selectFile("cypress/fixtures/files/citizenship.jpg", { force: true });
        cy.get('input[name="Wifes_citizenship"]').selectFile("cypress/fixtures/files/citizenship.jpg", { force: true });
        cy.get('input[name="Application"]').selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
