// ===================== Property Valuation (Nepali) Form Locators =====================

const propertyValuationNepaliLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  propertyValuationText: 'p.chakra-text:contains("Property valuation(Nepali)")',

  // ======= Radio Group: Main User Type =======
  searchUserRadio: 'label:has(span:contains("Search User")) input[type="radio"]',
  createUserRadio: 'label:has(span:contains("Create User")) input[type="radio"]',

  // ======= Radio Group: User Status Filter =======
  kycVerifiedRadio: 'label:has(span:contains("KYC Verified")) input[type="radio"]',
  kycUnverifiedRadio: 'label:has(span:contains("KYC Unverified")) input[type="radio"]',
  kycRejectedRadio: 'label:has(span:contains("KYC Rejected")) input[type="radio"]',
  otpVerifiedRadio: 'label:has(span:contains("OTP Verified")) input[type="radio"]',
  otpUnverifiedRadio: 'label:has(span:contains("OTP Unverified")) input[type="radio"]',
  allRadio: 'label:has(span:contains("All")) input[type="radio"]',

  // ======= Search Panel =======
  searchUserInput: 'input[placeholder="Search User"]',

  // ======= Application Ward Section =======
  wardSelect: 'select[id="field-:rkg:"]',

  // ======= Applicant Details Section =======
  applicationDatePicker: 'input[id="field-:rkh:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rki:"]',
  applicantMiddleNameInput: 'input[id="field-:rkj:"]',
  applicantLastNameInput: 'input[id="field-:rkk:"]',
  applicantGenderSelect: 'select[id="field-:rkl:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rkm:"]',
  applicantIssueDatePicker: 'input[id="field-:rkn:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rko:"]',
  nationalIdNumberInput: 'input[id="field-:rkp:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rkq:"]',
  districtSelect: 'select[id="field-:rkr:"]',
  localLevelSelect: 'select[id="field-:rks:"]',
  wardNumberSelect: 'select[id="field-:rkt:"]',
  toleInput: 'input[id="field-:rku:"]',

  // ======= Valuation Details Section =======
  totalValuationInNRPInput: 'input[id="field-:rkv:"]',
  exchangeRateInput: 'input[id="field-:rl0:"]',
  totalValuationInUSDInput: 'input[id="field-:rl1:"]',

  // ======= Document Uploads Section =======
  landOwnershipCertificateInput: 'input[type="file"][name="Land_Ownership_Certificate"]',

  // ======= Table Details Section (dynamic, for each row) =======
  // Jagga Dhani ko naam, etc.
  valuationRowOwnerNameInput: 'input[id="field-:rl4:"]',
  valuationRowPropertyTypeInput: 'input[id="field-:rl5:"]',
  valuationRowMunicipalityInput: 'input[id="field-:rl6:"]',
  valuationRowWardNoInput: 'input[id="field-:rl7:"]',
  valuationRowPlotNoInput: 'input[id="field-:rl8:"]',
  valuationRowAreaInput: 'input[id="field-:rl9:"]',
  valuationRowRateInput: 'input[id="field-:rla:"]',
  valuationRowTotalInput: 'input[id="field-:rlb:"]',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default propertyValuationNepaliLocators;