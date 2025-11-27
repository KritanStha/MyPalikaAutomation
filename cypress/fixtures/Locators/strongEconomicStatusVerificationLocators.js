// ===================== Strong Economic Status Verification Form Locators =====================

const strongEconomicStatusVerificationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  strongEconomicText: 'p.chakra-text:contains("Strong Economic Status Verification")',

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
  searchUserInput: '[placeholder="Search User"]',

  // ======= Application Ward Section =======
  wardSelect: '#field-\\:r3a\\:',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: '#field-\\:r3b\\:',
  applicantMiddleNameInput: '#field-\\:r3c\\:',
  applicantLastNameInput: '#field-\\:r3d\\:',
  applicantGenderSelect: '#field-\\:r3e\\:',
  applicantDateOfBirthPicker: '.form-control.nepali-date-picker',
  applicantCitizenshipNumberInput: '#field-\\:r3g\\:',
  applicantIssueDatePicker: '.form-control.nepali-date-picker',
  applicantIssueDistrictSelect: '#field-\\:r3i\\:',
  nationalIdNumberInput: '#field-\\:r3j\\:',
  applicantContactNumberInput: '#field-\\:r3k\\:',

  // ======= Permanent Address Section =======
  provinceSelect: '#field-\\:r3l\\:',
  districtSelect: '#field-\\:r3m\\:',
  localLevelSelect: '#field-\\:r3n\\:',
  wardNumberSelect: '#field-\\:r3o\\:',
  toleInput: '#field-\\:r3p\\:',

  // ======= Office Details Section =======
  officeNameInput: '#field-\\:r3q\\:',
  officeAddressInput: '#field-\\:r3r\\:',

  // ======= Document Uploads Section =======
  propertyTaxReceiptUpload: '#field-\\:r3s\\:',
  landOwnershipCertificateUpload: '#field-\\:r3t\\:',
  recommendationFromWardUpload: '#field-\\:r3u\\:',

  // ======= Action Buttons =======
  cancelButton: '[type="button"]',
  applyButton: '[type="submit"]',


  forSubmit:"[type='button']"
};

export default strongEconomicStatusVerificationLocators;