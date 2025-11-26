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
  searchUserInput: 'input[placeholder="Search User"]',

  // ======= Application Ward Section =======
  wardSelect: 'select[id="field-:rvk:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rvl:"]',
  applicantMiddleNameInput: 'input[id="field-:rvm:"]',
  applicantLastNameInput: 'input[id="field-:rvn:"]',
  applicantGenderSelect: 'select[id="field-:rvo:"]',
  applicantDateOfBirthPicker: 'input[id="field-:rvp:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rvq:"]',
  applicantIssueDatePicker: 'input[id="field-:rvr:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rvs:"]',
  nationalIdNumberInput: 'input[id="field-:rvt:"]',
  applicantContactNumberInput: 'input[id="field-:rvu:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rvv:"]',
  districtSelect: 'select[id="field-:r100:"]',
  localLevelSelect: 'select[id="field-:r101:"]',
  wardNumberSelect: 'select[id="field-:r102:"]',
  toleInput: 'input[id="field-:r103:"]',

  // ======= Office Details Section =======
  officeNameInput: 'input[id="field-:r104:"]',
  officeAddressInput: 'input[id="field-:r105:"]',

  // ======= Document Uploads Section =======
  propertyTaxReceiptUpload: 'input[type="file"][name="Property_Tax_Payment_Receipt"]',
  landOwnershipCertificateUpload: 'input[type="file"][name="Land_Ownership_Certificate"]',
  recommendationFromWardUpload: 'input[type="file"][name="Recommendation_from_Ward"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default strongEconomicStatusVerificationLocators;