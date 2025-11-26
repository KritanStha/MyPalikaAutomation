// ===================== Sifarish Form Locators: Unique LOCATOR BREAKDOWN =====================
//
// Each object below represents unique locators per form,
// separated into logical UI sections.
// Shared/common locators (like Apply/Cancel, user radios, etc.) are excluded here!
// Only form-specific/unshared selectors within their sections are listed.

export const uniqueLocatorsByForm = {
  // --- Business Closed Recommendation ---
  businessClosedRecommendation: {
    formText: 'p.chakra-text:contains("Business Closed Recommendation")',
    // Business/Firm Details
    businessRegNumberInput: 'input[id="field-:re5:"]',
    businessNameInput: 'input[id="field-:re6:"]',
    businessTypeInput: 'input[id="field-:re7:"]',
    businessAddressInput: 'input[id="field-:re8:"]',
    businessClosedFromDatePicker: 'input[id="field-:re9:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    businessClosedToDatePicker: 'input[id="field-:rea:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    businessClosureReasonInput: 'input[id="field-:reb:"]',
    onsiteSurveyDatePicker: 'input[id="field-:rec:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    // Document uploads
    companyRegCertificateInput: 'input[type="file"][name="Company_Registration_Certificate"]',
    renewalCertificateInput: 'input[type="file"][name="Renewal_Certificate"]',
    fieldVerificationReportInput: 'input[type="file"][name="Field_Verification_Report"]'
  },

  // --- Marriage Verification ---
  marriageVerification: {
    formText: 'p.chakra-text:contains("Marriage Verification")',
    // Husband's sections
    husbandFirstNameInput: 'input[id="field-:rg9:"]',
    husbandMiddleNameInput: 'input[id="field-:rga:"]',
    husbandLastNameInput: 'input[id="field-:rgb:"]',
    husbandCitizenshipNumberInput: 'input[id="field-:rgc:"]',
    husbandProvinceSelect: 'select[id="field-:rgd:"]',
    husbandDistrictSelect: 'select[id="field-:rge:"]',
    husbandLocalLevelSelect: 'select[id="field-:rgf:"]',
    husbandWardNumberSelect: 'select[id="field-:rgg:"]',
    husbandToleInput: 'input[id="field-:rgh:"]',
    husbandGrandfatherFirstNameInput: 'input[id="field-:rgi:"]',
    husbandGrandfatherMiddleNameInput: 'input[id="field-:rgj:"]',
    husbandGrandfatherLastNameInput: 'input[id="field-:rgk:"]',
    husbandFatherFirstNameInput: 'input[id="field-:rgl:"]',
    husbandFatherMiddleNameInput: 'input[id="field-:rgm:"]',
    husbandFatherLastNameInput: 'input[id="field-:rgn:"]',
    husbandMotherFirstNameInput: 'input[id="field-:rgo:"]',
    husbandMotherMiddleNameInput: 'input[id="field-:rgp:"]',
    husbandMotherLastNameInput: 'input[id="field-:rgq:"]',
    // Wife's sections
    wifeFirstNameInput: 'input[id="field-:rgr:"]',
    wifeMiddleNameInput: 'input[id="field-:rgs:"]',
    wifeLastNameInput: 'input[id="field-:rgt:"]',
    wifeCitizenshipNumberInput: 'input[id="field-:rgu:"]',
    wifeProvinceSelect: 'select[id="field-:rgv:"]',
    wifeDistrictSelect: 'select[id="field-:rh0:"]',
    wifeLocalLevelSelect: 'select[id="field-:rh1:"]',
    wifeWardNumberSelect: 'select[id="field-:rh2:"]',
    wifeToleInput: 'input[id="field-:rh3:"]',
    wifeGrandfatherFirstNameInput: 'input[id="field-:rh4:"]',
    wifeGrandfatherMiddleNameInput: 'input[id="field-:rh5:"]',
    wifeGrandfatherLastNameInput: 'input[id="field-:rh6:"]',
    wifeFatherFirstNameInput: 'input[id="field-:rh7:"]',
    wifeFatherMiddleNameInput: 'input[id="field-:rh8:"]',
    wifeFatherLastNameInput: 'input[id="field-:rh9:"]',
    wifeMotherFirstNameInput: 'input[id="field-:rha:"]',
    wifeMotherMiddleNameInput: 'input[id="field-:rhb:"]',
    wifeMotherLastNameInput: 'input[id="field-:rhc:"]',
    // Misc
    marriageDatePicker: 'input[id="field-:rhd:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    sarjaminDatePicker: 'input[id="field-:rhe:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    // Document uploads
    husbandsCitizenshipUpload: 'input[type="file"][name="Husbands_citizenship"]',
    wifesCitizenshipUpload: 'input[type="file"][name="Wifes_citizenship"]',
    applicationUpload: 'input[type="file"][name="Application"]'
  },

  // --- Recommendation for New Business Registration ---
  recommendationNewBusiness: {
    formText: 'p.chakra-text:contains("Recommendation for New Business Registration")',
    businessTypeInput: 'input[id="field-:rj7:"]',
    businessProvinceSelect: 'select[id="field-:rj8:"]',
    businessDistrictSelect: 'select[id="field-:rj9:"]',
    businessLocalLevelSelect: 'select[id="field-:rja:"]',
    businessWardNumberSelect: 'select[id="field-:rjb:"]',
    businessToleInput: 'input[id="field-:rjc:"]',
    officeNameInput: 'input[id="field-:rjd:"]',
    officeAddressInput: 'input[id="field-:rje:"]',
    fieldVerificationReportUpload: 'input[type="file"][name="Field_Verification_Report_"]',
    ieeeiaUpload: 'input[type="file"][name="IEEEIA_if_required"]'
  },

  // --- Property Valuation (Nepali) ---
  propertyValuationNepali: {
    formText: 'p.chakra-text:contains("Property valuation(Nepali)")',
    applicationDatePicker: 'input[id="field-:rkh:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantGenderSelect: 'select[id="field-:rkl:"]',
    totalValuationInNRPInput: 'input[id="field-:rkv:"]',
    exchangeRateInput: 'input[id="field-:rl0:"]',
    totalValuationInUSDInput: 'input[id="field-:rl1:"]',
    landOwnershipCertificateInput: 'input[type="file"][name="Land_Ownership_Certificate"]',
    valuationRowOwnerNameInput: 'input[id="field-:rl4:"]',
    valuationRowPropertyTypeInput: 'input[id="field-:rl5:"]',
    valuationRowMunicipalityInput: 'input[id="field-:rl6:"]',
    valuationRowWardNoInput: 'input[id="field-:rl7:"]',
    valuationRowPlotNoInput: 'input[id="field-:rl8:"]',
    valuationRowAreaInput: 'input[id="field-:rl9:"]',
    valuationRowRateInput: 'input[id="field-:rla:"]',
    valuationRowTotalInput: 'input[id="field-:rlb:"]'
  },

  // --- Rental Tax Accounting ---
  rentalTaxAccounting: {
    formText: 'p.chakra-text:contains("Rental Tax Accounting")',
    applicantGenderSelect: 'select[id="field-:rmo:"]',
    tenantNameInput: 'input[id="field-:rmu:"]',
    usageInput: 'input[id="field-:rmv:"]',
    contractDatePicker: 'input[id="field-:rn0:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    rentalYearInput: 'input[id="field-:rn1:"]',
    rentalMonthInput: 'input[id="field-:rn2:"]',
    fromDatePicker: 'input[id="field-:rn3:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    toDatePicker: 'input[id="field-:rn4:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    taxPercentageInput: 'input[id="field-:rn5:"]',
    taxAmountInput: 'input[id="field-:rn6:"]',
    rentAgreementInput: 'input[type="file"][name="Rent_Agreement"]'
  },

  // --- Business Not Being Operated ---
  businessNotBeingOperated: {
    notOperatedText: 'p.chakra-text:contains("Business Not Being Operated")',
    businessRegistrationNoInput: 'input[id="field-:rp4:"]',
    businessNameInput: 'input[id="field-:rp5:"]',
    businessTypeInput: 'input[id="field-:rp6:"]',
    proprietorNameInput: 'input[id="field-:rp7:"]',
    landlordNameInput: 'input[id="field-:rp8:"]',
    phoneNumberInput: 'input[id="field-:rp9:"]',
    panNumberInput: 'input[id="field-:rpa:"]',
    businessClosedFromDatePicker: 'input[id="field-:rpb:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    reasonNotOperatingInput: 'input[id="field-:rpc:"]',
    registeredBodyNameInput: 'input[id="field-:rpi:"]',
    registeredNumberInput: 'input[id="field-:rpj:"]',
    registeredDatePicker: 'input[id="field-:rpk:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    companyRegCertificateInput: 'input[type="file"][name="Company_Registration_Certificate"]',
    renewalCertificateInput: 'input[type="file"][name="Renewal_Certificate"]',
    fieldVerificationReportInput: 'input[type="file"][name="Field_Verification_Report_"]'
  },

  // --- Relation Certificate with Deceased ---
  relationCertificateDeceased: {
    relationCertificateText: 'p.chakra-text:contains("Relation Certificate with Deceased")',
    purposeInput: 'input[id="field-:rr3:"]',
    declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
    clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',
    relationRowPersonNameInput: 'input[id="field-:rr7:"]',
    relationRowNataSelect: 'select[name="नाता"]',
    relationRowIsDeceasedCheckbox: 'input[name="मृतक हो?"]'
  },

  // --- Fundamental School Open Recommendation ---
  fundamentalSchoolOpenRecommendation: {
    schoolOpenText: 'p.chakra-text:contains("Fundamental School Open Recommendation")',
    dateOfDecisionPicker: 'input[id="field-:rsr:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    meetingMinutesUpload: 'input[type="file"][name="Meeting_minutes_of_the_meeting_held_as_per_the_decision_of_the_local_dignitaries"]'
  },

  // --- School Class Add Application ---
  schoolClassAddApplication: {
    schoolClassAddText: 'p.chakra-text:contains("School Class Add Application")',
    schoolNameInput: 'input[id="field-:ru6:"]',
    schoolCollegeTypeInput: 'input[id="field-:ru7:"]',
    schoolProvinceSelect: 'select[id="field-:ru8:"]',
    schoolDistrictSelect: 'select[id="field-:ru9:"]',
    schoolLocalLevelSelect: 'select[id="field-:rua:"]',
    schoolWardNumberSelect: 'select[id="field-:rub:"]',
    schoolToleInput: 'input[id="field-:ruc:"]',
    decisionDatePicker: 'input[id="field-:rud:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    classToBeAddedInput: 'input[id="field-:rue:"]',
    meetingMinutesUpload: 'input[type="file"][name="Meeting_minutes_of_the_meeting_held_as_per_the_decision_of_the_local_dignitaries"]',
    schoolCollegeDetailsUpload: 'input[type="file"][name="SchoolCollege_Details"]'
  },

  // --- Strong Economic Status Verification ---
  strongEconomicStatusVerification: {
    strongEconomicText: 'p.chakra-text:contains("Strong Economic Status Verification")',
    applicantGenderSelect: 'select[id="field-:rvo:"]',
    applicantDateOfBirthPicker: 'input[id="field-:rvp:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantContactNumberInput: 'input[id="field-:rvu:"]',
    officeNameInput: 'input[id="field-:r104:"]',
    officeAddressInput: 'input[id="field-:r105:"]',
    propertyTaxReceiptUpload: 'input[type="file"][name="Property_Tax_Payment_Receipt"]',
    landOwnershipCertificateUpload: 'input[type="file"][name="Land_Ownership_Certificate"]',
    recommendationFromWardUpload: 'input[type="file"][name="Recommendation_from_Ward"]'
  },

  // --- Weak Economic Status Verification ---
  weakEconomicStatusVerification: {
    weakEconomicText: 'p.chakra-text:contains("Weak Economic Status Verification")',
    applicantGenderSelect: 'select[id="field-:r11e:"]',
    applicantDateOfBirthPicker: 'input[id="field-:r11f:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantContactNumberInput: 'input[id="field-:r11k:"]',
    officeNameInput: 'input[id="field-:r11q:"]',
    officeAddressInput: 'input[id="field-:r11r:"]',
    propertyTaxReceiptUpload: 'input[type="file"][name="Property_Tax_Payment_Receipt"]',
    landOwnershipCertificateUpload: 'input[type="file"][name="Land_Ownership_Certificate"]',
    recommendationFromWardUpload: 'input[type="file"][name="Recommendation_from_Ward"]'
  },

  // --- Relationship Verification Application Nepali ---
  relationshipVerificationNepali: {
    relationshipVerificationText: 'p.chakra-text:contains("Relationship Verification Application Nepali")',
    purposeInput: 'input[id="field-:r138:"]',
    declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
    clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',
    relationRowPersonNameInput: 'input[id="field-:r13c:"]',
    relationRowNataSelect: 'select[name="नाता"]'
  },

  // --- Relationship Verification Application English ---
  relationshipVerificationEnglish: {
    relationshipVerificationText: 'p.chakra-text:contains("Relationship Verification Application English")',
    applicantFirstNameInput: 'input[id="field-:r14b:"]',
    applicantMiddleNameInput: 'input[id="field-:r14c:"]',
    applicantLastNameInput: 'input[id="field-:r14d:"]',
    applicantCitizenshipNumberInput: 'input[id="field-:r14e:"]',
    applicantIssueDatePicker: 'input[id="field-:r14f:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantIssueDistrictSelect: 'select[id="field-:r14g:"]',
    nationalIdNumberInput: 'input[id="field-:r14h:"]',
    purposeInput: 'input[id="field-:r14n:"]',
    declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
    clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',
    relationRowPersonNameInput: 'input[name="Name of Person Establishing Relationship"]',
    relationRowRelationSelect: 'select[name="Relation"]'
  },

  // --- Property Valuation (English) ---
  propertyValuationEnglish: {
    propertyValuationText: 'p.chakra-text:contains("Property valuation(English)")',
    applicationDatePicker: 'input[id="field-:r162:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantFirstNameInput: 'input[id="field-:r163:"]',
    applicantMiddleNameInput: 'input[id="field-:r164:"]',
    applicantLastNameInput: 'input[id="field-:r165:"]',
    applicantGenderSelect: 'select[id="field-:r166:"]',
    applicantCitizenshipNumberInput: 'input[id="field-:r167:"]',
    applicantIssueDatePicker: 'input[id="field-:r168:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
    applicantIssueDistrictSelect: 'select[id="field-:r169:"]',
    nationalIdNumberInput: 'input[id="field-:r16a:"]',
    totalValuationInNRPInput: 'input[id="field-:r16g:"]',
    exchangeRateInput: 'input[id="field-:r16h:"]',
    totalValuationInUSDInput: 'input[id="field-:r16i:"]',
    landOwnershipCertificateInput: 'input[type="file"][name="Land_Ownership_Certificate"]',
    tableRowOwnerNameInput: 'input[name="Land Owner\'s Name"]',
    tableRowPropertyTypeInput: 'input[name="Type of Property"]',
    tableRowMunicipalityInput: 'input[name="Municipality"]',
    tableRowWardNoInput: 'input[name="Ward No."]',
    tableRowPlotNoInput: 'input[name="Plot No."]',
    tableRowAreaInput: 'input[name="Area(sq.ft)"]',
    tableRowRateInput: 'input[name="Rate(NPR)"]',
    tableRowTotalInput: 'input[name="Total Valuation(NPR)"]'
  }
};

// Export for test imports, page objects, etc.
export default uniqueLocatorsByForm;