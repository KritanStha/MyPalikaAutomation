import RTA from "../../fixtures/Locators/rentalTaxAccountingLocators";
import data from "../../fixtures/data/rentalTaxAccountingData";

describe("Rental Tax Accounting", () => {
    it("Should fill and submit the complete rental tax accounting form", () => {
        // Navigate to form
        cy.navigateToForm(RTA.menuItem);

        // Search and select user
        cy.searchAndSelectUser(data.userSearch);

        // Select ward
        cy.get(RTA.wardSelect).eq(0).select(data.ward, { force: true });
        cy.wait(1000);

        // Fill Applicant Personal Details
        cy.contains(RTA.applicantSection).should("be.visible");
        cy.get(RTA.firstName).clear().type(data.applicant.firstName);
        cy.get(RTA.middleName).clear();
        cy.get(RTA.lastName).clear().type(data.applicant.lastName);
        cy.get(RTA.citizenshipNumber).clear().type(data.applicant.citizenshipNumber);

        // Select Citizenship Issue Date
        cy.selectNepaliDate(0, 12);

        // Select Issue District and Gender
        cy.get("select").eq(1).select(data.applicant.issueDistrict, { force: true });
        cy.get(RTA.nationalId).clear().type(data.applicant.nationalId);
        cy.get("select").eq(2).select(data.applicant.gender, { force: true });

        // Fill Address Details
        cy.contains(RTA.addressSection).should("be.visible");
        cy.get("select").eq(3).select(data.address.province, { force: true });
        cy.wait(1500);
        cy.get("select").eq(4).should("not.be.disabled").select(data.address.district, { force: true });
        cy.wait(1500);
        cy.get("select").eq(5).should("not.be.disabled").select(data.address.localLevel, { force: true });
        cy.wait(1500);
        cy.get("select").eq(6).should("not.be.disabled").select(data.address.ward, { force: true });
        cy.get(RTA.tole).clear().type(data.address.tole);

        // Fill Tenant Details
        cy.contains(RTA.tenantSection).should("be.visible");
        cy.get(RTA.tenantName).clear().type(data.tenant.name);

        // Fill Rental Tax Accounting Detail
        cy.contains(RTA.rentalTaxSection).should("be.visible");
        cy.get(RTA.usage).clear().type(data.rentalTax.usage);

        // Select Contract Date
        cy.selectNepaliDate(1, 12);

        // Fill numeric fields
        cy.get(RTA.rentalYear).clear().type(data.rentalTax.rentalYear);
        cy.get(RTA.rentalMonth).clear().type(data.rentalTax.rentalMonth);

        // Select From Date
        cy.selectNepaliDate(2, 12);

        // Select To Date
        cy.selectNepaliDate(3, 12);

        // Fill tax details
        cy.get(RTA.taxPercentage).clear().type(data.rentalTax.taxPercentage);
        cy.get(RTA.taxAmount).clear().type(data.rentalTax.taxAmount);

        // Upload Document
        cy.get(RTA.rentAgreement).selectFile("cypress/fixtures/files/letter.pdf", { force: true });

        // Submit form with confirmation
        cy.submitFormWithConfirmation();
    });
});
