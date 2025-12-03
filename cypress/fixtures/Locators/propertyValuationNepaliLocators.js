// ===================== Property Valuation (Nepali) Form Locators =====================

const propertyValuationNepaliLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  propertyValuationText: '.chakra-heading.css-woev60',

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
  wardSelect: '#field-\\:r38\\:',

  // ======= Applicant Details Section =======
  applicationDatePicker: '.form-control.nepali-date-picker',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: '#field-\\:r3a\\:',
  applicantMiddleNameInput: '#field-\\:r3b\\:',
  applicantLastNameInput: '#field-\\:r3c\\:',
  applicantGenderSelect: '#field-\\:r3d\\:',
  applicantCitizenshipNumberInput: '#field-\\:r3e\\:',
  applicantIssueDatePicker: '.form-control.nepali-date-picker',
  applicantIssueDistrictSelect: '#field-\\:r3g\\:',
  nationalIdNumberInput: '#field-\\:r3h\\:',

  // ======= Permanent Address Section =======
  provinceSelect: '#field-\\:r3i\\:',
  districtSelect: '#field-\\:r3j\\:',
  localLevelSelect: '#field-\\:r3k\\:',
  wardNumberSelect: '#field-\\:r3l\\:',
  toleInput: '#field-\\:r3m\\:',

  // ======= Valuation Details Section =======
  totalValuationInNRPInput: '#field-\\:r3n\\:',
  exchangeRateInput: '#field-\\:r3o\\:',
  totalValuationInUSDInput: '#field-\\:r3p\\:',

  // ======= Document Uploads Section =======
  landOwnershipCertificateInput: '#field-\\:r3q\\:',

  // ======= Table Details Section (dynamic, for each row) =======
  // Jagga Dhani ko naam, etc.
  valuationRowOwnerNameInput: '#field-\\:r3s\\:',
  valuationRowPropertyTypeInput: '#field-\\:r3t\\:',
  valuationRowMunicipalityInput: '#field-\\:r3u\\:',
  valuationRowWardNoInput: '#field-\\:r3v\\:',
  valuationRowPlotNoInput: '#field-\\:r40\\:',
  valuationRowAreaInput: '#field-\\:r41\\:',
  valuationRowRateInput: '#field-\\:r42\\:',
  valuationRowTotalInput: '#field-\\:r43\\:',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: '[type="submit"]',

  forSubmission: '.chakra-button.css-arfz4w'
};

export default propertyValuationNepaliLocators;