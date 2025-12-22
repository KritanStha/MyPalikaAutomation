import propertyValuationNepaliLocators from "../../fixtures/Locators/propertyValuationNepaliLocators"
import { sharedApplicantData, sharedAddressData } from "../../fixtures/data/SData_Version3"
import { propertyValuationUnique } from "../../fixtures/data/UData_Version3"

describe("Property Valuation", () => {

  it("Property Valuation(Nepali)", () => {

    cy.navigateToForm('Property valuation(Nepali)');
    cy.searchAndSelectUser('Sresta Sharma');



    cy.get(propertyValuationNepaliLocators.wardSelect).select('4');


    cy.get(propertyValuationNepaliLocators.applicantIssueDatePicker).first().click();
    cy.get('td.month-day.current')
      .contains('६')
      .click();


    // Personal Details

    cy.get(propertyValuationNepaliLocators.applicantFirstNameInput)
      .clear()
      .type(sharedApplicantData.applicantFirstName);
    cy.get(propertyValuationNepaliLocators.applicantMiddleNameInput)
      .clear()
      .type(sharedApplicantData.applicantMiddleName);
    cy.get(propertyValuationNepaliLocators.applicantLastNameInput)
      .clear()
      .type(sharedApplicantData.applicantLastName);

    cy.get(propertyValuationNepaliLocators.applicantGenderSelect).select('महिला')

    cy.get(propertyValuationNepaliLocators.applicantCitizenshipNumberInput)
      .clear()
      .type(sharedApplicantData.applicantCitizenshipNumber);
    cy.selectNepaliDate(1, 21);
    cy.get(propertyValuationNepaliLocators.applicantIssueDistrictSelect).select('lalitpur')
    cy.get(propertyValuationNepaliLocators.nationalIdNumberInput).type(sharedApplicantData.nationalIdNumber)


    cy.get(propertyValuationNepaliLocators.provinceSelect).select(sharedAddressData.province);
    cy.get(propertyValuationNepaliLocators.districtSelect).select(sharedAddressData.district);
    cy.get(propertyValuationNepaliLocators.localLevelSelect).select(sharedAddressData.localLevel);
    cy.get(propertyValuationNepaliLocators.wardNumberSelect).select(sharedAddressData.wardNumber);
    cy.get(propertyValuationNepaliLocators.toleInput).type(sharedAddressData.tole);


    propertyValuationUnique.valuationRows.forEach((row, index) => {
      cy.get(propertyValuationNepaliLocators.valuationRowOwnerNameInput)
        .eq(index)
        .type(row.ownerName);

      cy.get(propertyValuationNepaliLocators.valuationRowPropertyTypeInput)
        .eq(index)
        .type(row.propertyType);

      cy.get(propertyValuationNepaliLocators.valuationRowMunicipalityInput)
        .eq(index)
        .type(row.municipality);

      cy.get(propertyValuationNepaliLocators.valuationRowWardNoInput)
        .eq(index)
        .type(row.wardNo);

      cy.get(propertyValuationNepaliLocators.valuationRowPlotNoInput)
        .eq(index)
        .type(row.plotNo);

      cy.get(propertyValuationNepaliLocators.valuationRowAreaInput)
        .eq(index)
        .type(row.area);

      cy.get(propertyValuationNepaliLocators.valuationRowRateInput)
        .eq(index)
        .type(row.rate);
    });

    cy.get(propertyValuationNepaliLocators.exchangeRateInput).type(propertyValuationUnique.exchangeRate)
    //cy.get(propertyValuationNepaliLocators.totalValuationInUSDInput).type(propertyValuationUnique.totalValuationInUSD)

    cy.get(propertyValuationNepaliLocators.landOwnershipCertificateInput)
      .attachFile('files/renewalCert.pdf')
    cy.get(propertyValuationNepaliLocators.applyButton).click()

    cy.get(propertyValuationNepaliLocators.forSubmission).click()

  })
})