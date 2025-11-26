// ===================== Business Closed Recommendation Form Locators =====================

const businessClosedRecommendationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  businessClosedText: 'h2.chakra-heading',

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
  wardSelect: '#field-\\:r3f\\:',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: '#field-\\:r3g\\:',
  applicantMiddleNameInput: '#field-\\:r3h\\:',
  applicantLastNameInput: '#field-\\:r3i\\:',
  applicantCitizenshipNumberInput: '#field-\\:r3j\\:',
  applicantIssueDatePicker: '.form-control.nepali-date-picker',
  applicantIssueDistrictSelect: '#field-\\:r3l\\:',
  nationalIdNumberInput: '#field-\\:r3m\\:',

  // ======= Permanent Address Section =======
  provinceSelect: '#field-\\:r3n\\:',
  districtSelect: '#field-\\:r3o\\:',
  localLevelSelect: '#field-\\:r3p\\:',
  wardNumberSelect: '#field-\\:r3q\\:',
  toleInput: '#field-\\:r3r\\:',

  // ======= Business/Firm Details Section =======
  businessRegNumberInput: '#field-\\:r3s\\:',
  businessNameInput: '#field-\\:r3t\\:',
  businessTypeInput: '#field-\\:r3u\\:',
  businessAddressInput: '#field-\\:r3v\\:',
  businessClosedFromDatePicker: '.form-control.nepali-date-picker',
  businessClosedToDatePicker: '.form-control.nepali-date-picker',
  businessClosureReasonInput: '#field-\\:r42\\:',
  onsiteSurveyDatePicker: '.form-control.nepali-date-picker',

  // ======= Recommending Office Details Section =======
  officeNameInput: '#field-\\:r44\\:',
  officeAddressInput: '#field-\\:r45\\:',

  // ======= Document Uploads Section =======
  companyRegCertificateInput: '#field-\\:r46\\:',
  renewalCertificateInput: '#field-\\:r47\\:',
  fieldVerificationReportInput: '#field-\\:r48\\:',

  // ======= Action Buttons =======
  cancelButton: '[type="button"]',
  applyButton: '[type="submit"]',

  submit: '.chakra-button.css-arfz4w'

};

export default businessClosedRecommendationLocators;