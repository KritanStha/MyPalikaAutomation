// ===================== Business Closed Recommendation Form Locators =====================

const businessClosedRecommendationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  businessClosedText: 'p.chakra-text:contains("Business Closed Recommendation")',

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
  wardSelect: 'select[id="field-:rdo:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rdp:"]',
  applicantMiddleNameInput: 'input[id="field-:rdq:"]',
  applicantLastNameInput: 'input[id="field-:rdr:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rds:"]',
  applicantIssueDatePicker: '.nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rdu:"]',
  nationalIdNumberInput: 'input[id="field-:rdv:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:re0:"]',
  districtSelect: 'select[id="field-:re1:"]',
  localLevelSelect: 'select[id="field-:re2:"]',
  wardNumberSelect: 'select[id="field-:re3:"]',
  toleInput: 'input[id="field-:re4:"]',

  // ======= Business/Firm Details Section =======
  businessRegNumberInput: 'input[id="field-:re5:"]',
  businessNameInput: 'input[id="field-:re6:"]',
  businessTypeInput: 'input[id="field-:re7:"]',
  businessAddressInput: 'input[id="field-:re8:"]',
  businessClosedFromDatePicker: 'input[id="field-:re9:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  businessClosedToDatePicker: 'input[id="field-:rea:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  businessClosureReasonInput: 'input[id="field-:reb:"]',
  onsiteSurveyDatePicker: 'input[id="field-:rec:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Recommending Office Details Section =======
  officeNameInput: 'input[id="field-:red:"]',
  officeAddressInput: 'input[id="field-:ree:"]',

  // ======= Document Uploads Section =======
  companyRegCertificateInput: 'input[type="file"][name="Company_Registration_Certificate"]',
  renewalCertificateInput: 'input[type="file"][name="Renewal_Certificate"]',
  fieldVerificationReportInput: 'input[type="file"][name="Field_Verification_Report"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default businessClosedRecommendationLocators;