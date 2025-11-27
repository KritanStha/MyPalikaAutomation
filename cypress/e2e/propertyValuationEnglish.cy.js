import PVE from "../fixtures/Locators/propertyValuationEnglishLocators";
import data from "../fixtures/data/propertyValuationEnglishData";

describe("Property valuation(English)", () => {
    it("Should fill and submit the complete property valuation english form", () => {
        // Navigate to form
        cy.navigateToForm(PVE.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(PVE.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(PVE.applicantSection).should("be.visible");

        // Select Application Date (First Date Picker)
        cy.selectNepaliDate(0, 10);

        cy.get(PVE.firstName).clear().type(data.applicant.firstName);
        cy.get(PVE.middleName).clear();
        cy.get(PVE.lastName).clear().type(data.applicant.lastName);

        // Select Gender
        cy.get("select").eq(1).select(data.applicant.gender, { force: true });

        cy.get(PVE.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date (Second Date Picker)
        // Using label-based selection for robustness
        cy.contains("label", "Citizenship Issue Date").parent().find("input").click();
        cy.get("tbody").should("be.visible");
        cy.get("td.month-day.current").eq(15).click();

        // Select Issue District
        cy.get("select").eq(2).select(data.applicant.issueDistrict, { force: true });

        // Fill National ID
        cy.get(PVE.nationalId).clear().type(data.applicant.nationalId);

        // Fill Permanent Address
        cy.contains(PVE.permanentAddressSection).should("be.visible");
        cy.get("select").eq(3).select(data.permanentAddress.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select("Kathmandu", { force: true }); // Select by text
        cy.wait(1500);
        // Local Level - selecting by text
        cy.get("select").eq(5).should("not.be.disabled").select("Kathmandu Metropolitan", { force: true });
        cy.wait(1500);
        // Ward - selecting by text "1"
        cy.get("select").eq(6).should("not.be.disabled").select(data.permanentAddress.ward, { force: true });

        // Fill Tole
        cy.get(PVE.tole).clear().type("Gyaneshwor");

        // Fill Valuation Details
        cy.contains(PVE.valuationDetailsSection).should("be.visible");
        cy.get(PVE.totalValuationNpr).clear().type(data.valuation.totalNpr);
        cy.get(PVE.exchangeRate).clear().type(data.valuation.exchangeRate);
        cy.get(PVE.totalValuationUsd).clear().type(data.valuation.totalUsd);

        // Upload Documents
        cy.get(PVE.landOwnershipCertificate).selectFile("cypress/fixtures/files/proof.jpg", { force: true });

        // Fill Property Details Table
        // Add first property (row already exists)
        cy.get(PVE.landOwnerName).eq(0).type(data.properties[0].ownerName);
        cy.get(PVE.propertyType).eq(0).type(data.properties[0].type);
        cy.get(PVE.municipality).eq(0).type(data.properties[0].municipality);
        cy.get(PVE.wardNo).eq(0).type(data.properties[0].wardNo);
        cy.get(PVE.plotNo).eq(0).type(data.properties[0].plotNo);
        cy.get(PVE.area).eq(0).type(data.properties[0].area);
        cy.get(PVE.rate).eq(0).type(data.properties[0].rate);
        cy.get(PVE.totalValuation).eq(0).type(data.properties[0].total);

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
