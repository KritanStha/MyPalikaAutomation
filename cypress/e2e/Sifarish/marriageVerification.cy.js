import MVL from "../../fixtures/Locators/marriageVerificationLocators";
import data from "../../fixtures/data/marriageVerificationData";

describe("Marriage Verification", () => {
    it("Should fill and submit the complete marriage verification form", () => {
        cy.navigateToForm(MVL.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward (Application) - Index 0
        cy.contains("label", "Please select ward number for application")
            .parent()
            .find("select")
            .select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Husband's Personal Details
        cy.contains(MVL.husbandSection).scrollIntoView().should("be.visible");
        cy.fillPersonDetails(0, data.husband);
        cy.get(MVL.husbandCitizenship).clear().type(data.husband.citizenshipNumber);

        // Husband Citizenship Issue Date (Index 0)
        cy.selectNepaliDate(0, 10);

        // Husband Citizenship Issue District - Index 1
        cy.get("select").eq(1).select(data.husband.issueDistrict, { force: true });

        // Husband National ID
        cy.contains(MVL.husbandSection).parents(".chakra-card").find(MVL.husbandNationalId).clear().type(data.husband.nationalId);

        // Fill Husband's Address Details
        cy.contains(MVL.husbandAddressSection).should("be.visible");
        // Husband Address Selects: 2, 3, 4, 5
        cy.get("select").eq(2).select(data.husbandAddress.province, { force: true });
        cy.get("select").eq(3).should("not.be.disabled").select(data.husbandAddress.district, { force: true });
        cy.get("select").eq(4).should("not.be.disabled").select(data.husbandAddress.localLevel, { force: true });
        cy.get("select").eq(5).should("not.be.disabled").select(data.husbandAddress.ward, { force: true });
        cy.get(MVL.husbandTole).eq(0).clear().type(data.husbandAddress.tole);

        // Fill Husband's Grandfather Details
        cy.contains(MVL.husbandGrandfatherSection).should("be.visible");
        cy.fillPersonDetails(1, data.husbandGrandfather);

        // Fill Husband's Father Details
        cy.contains(MVL.husbandFatherSection).should("be.visible");
        cy.fillPersonDetails(2, data.husbandFather);

        // Fill Husband's Mother Details
        cy.contains(MVL.husbandMotherSection).should("be.visible");
        cy.fillPersonDetails(3, data.husbandMother);

        // Fill Wife's Personal Details
        cy.contains(MVL.wifeSection).scrollIntoView().should("be.visible");
        // Manual filling for wife personal inputs using MVL locators
        cy.get(MVL.wifeFirstName).clear({ force: true }).type(data.wife.firstName, { force: true });
        cy.get(MVL.wifeLastName).clear({ force: true }).type(data.wife.lastName, { force: true });

        // Wife Gender - Index 6
        cy.get("select").eq(6).select(data.wife.gender, { force: true });

        // Wife Date of Birth (Index 1)
        cy.selectNepaliDate(1, 12);

        cy.get(MVL.wifeCitizenship).clear({ force: true }).type(data.wife.citizenshipNumber, { force: true });

        // Wife Citizenship Issue Date (Index 2)
        cy.selectNepaliDate(2, 14);

        // Wife Citizenship Issue District - Index 7
        cy.get("select").eq(7).select(data.wife.issueDistrict, { force: true });

        // Wife National ID
        cy.contains(MVL.wifeSection).parents(".chakra-card").find(MVL.wifeNationalId).clear().type(data.wife.nationalId);

        // Fill Wife's Address Details
        cy.contains(MVL.wifeAddressSection).should("be.visible");
        // Wife Address Selects: 8, 9, 10, 11
        cy.get("select").eq(8).select(data.wifeAddress.province, { force: true });
        cy.get("select").eq(9).should("not.be.disabled").select(data.wifeAddress.district, { force: true });
        cy.get("select").eq(10).should("not.be.disabled").select(data.wifeAddress.localLevel, { force: true });
        cy.get("select").eq(11).should("not.be.disabled").select(data.wifeAddress.ward, { force: true });
        cy.get(MVL.wifeTole).eq(1).clear().type(data.wifeAddress.tole);

        // Fill Wife's Grandfather Details
        cy.contains(MVL.wifeGrandfatherSection).should("be.visible");
        cy.fillPersonDetails(4, data.wifeGrandfather);

        // Fill Wife's Father Details
        cy.contains(MVL.wifeFatherSection).should("be.visible");
        cy.fillPersonDetails(5, data.wifeFather);

        // Fill Wife's Mother Details
        cy.contains(MVL.wifeMotherSection).should("be.visible");
        cy.fillPersonDetails(6, data.wifeMother);

        // Fill More Details - Date Pickers
        cy.contains(MVL.moreDetailsSection).scrollIntoView().should("be.visible");

        // Select Marriage Date (Index 3)
        cy.selectNepaliDate(3, 18);

        // Select Sarjamin Date (Index 4)
        cy.selectNepaliDate(4, 16);

        // Upload Documents
        cy.get(MVL.husbandsCitizenship).selectFile("cypress/fixtures/files/proof.jpg", { force: true });
        cy.get(MVL.wifesCitizenship).selectFile("cypress/fixtures/files/proof.jpg", { force: true });
        cy.get(MVL.application).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
