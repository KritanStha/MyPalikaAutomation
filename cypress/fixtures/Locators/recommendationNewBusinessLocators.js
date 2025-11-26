// ===================== Recommendation for New Business Registration Form Locators =====================

const recommendationNewBusinessLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  newBusinessText: 'p.chakra-text:contains("Recommendation for New Business Registration")',

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
  wardSelect: 'select[id="field-:riq:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rir:"]',
  applicantMiddleNameInput: 'input[id="field-:ris:"]',
  applicantLastNameInput: 'input[id="field-:rit:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:riu:"]',
  applicantIssueDatePicker: '.nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rj0:"]',
  nationalIdNumberInput: 'input[id="field-:rj1:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rj2:"]',
  districtSelect: 'select[id="field-:rj3:"]',
  localLevelSelect: 'select[id="field-:rj4:"]',
  wardNumberSelect: 'select[id="field-:rj5:"]',
  toleInput: 'input[id="field-:rj6:"]',

  // ======= Business Details Section =======
  businessTypeInput: 'input[id="field-:rj7:"]',
  businessProvinceSelect: 'select[id="field-:rj8:"]',
  businessDistrictSelect: 'select[id="field-:rj9:"]',
  businessLocalLevelSelect: 'select[id="field-:rja:"]',
  businessWardNumberSelect: 'select[id="field-:rjb:"]',
  businessToleInput: 'input[id="field-:rjc:"]',

  // ======= Recommending Office Details Section =======
  officeNameInput: 'input[id="field-:rjd:"]',
  officeAddressInput: 'input[id="field-:rje:"]',

  // ======= Document Uploads Section =======
  fieldVerificationReportUpload: 'input[type="file"][name="Field_Verification_Report_"]',
  ieeeiaUpload: 'input[type="file"][name="IEEEIA_if_required"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default recommendationNewBusinessLocators;