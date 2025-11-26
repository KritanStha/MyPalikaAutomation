// ===================== Weak Economic Status Verification Form Locators =====================

const weakEconomicStatusVerificationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  weakEconomicText: 'p.chakra-text:contains("Weak Economic Status Verification")',

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
  wardSelect: 'select[id="field-:r11a:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:r11b:"]',
  applicantMiddleNameInput: 'input[id="field-:r11c:"]',
  applicantLastNameInput: 'input[id="field-:r11d:"]',
  applicantGenderSelect: 'select[id="field-:r11e:"]',
  applicantDateOfBirthPicker: 'input[id="field-:r11f:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantCitizenshipNumberInput: 'input[id="field-:r11g:"]',
  applicantIssueDatePicker: 'input[id="field-:r11h:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:r11i:"]',
  nationalIdNumberInput: 'input[id="field-:r11j:"]',
  applicantContactNumberInput: 'input[id="field-:r11k:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:r11l:"]',
  districtSelect: 'select[id="field-:r11m:"]',
  localLevelSelect: 'select[id="field-:r11n:"]',
  wardNumberSelect: 'select[id="field-:r11o:"]',
  toleInput: 'input[id="field-:r11p:"]',

  // ======= Office Details Section =======
  officeNameInput: 'input[id="field-:r11q:"]',
  officeAddressInput: 'input[id="field-:r11r:"]',

  // ======= Document Uploads Section =======
  propertyTaxReceiptUpload: 'input[type="file"][name="Property_Tax_Payment_Receipt"]',
  landOwnershipCertificateUpload: 'input[type="file"][name="Land_Ownership_Certificate"]',
  recommendationFromWardUpload: 'input[type="file"][name="Recommendation_from_Ward"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default weakEconomicStatusVerificationLocators;