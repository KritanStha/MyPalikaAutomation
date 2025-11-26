// ===================== Fundamental School Open Recommendation Form Locators =====================

const fundamentalSchoolOpenRecommendationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  schoolOpenText: 'p.chakra-text:contains("Fundamental School Open Recommendation")',

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
  wardSelect: 'select[id="field-:rsc:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rsd:"]',
  applicantMiddleNameInput: 'input[id="field-:rse:"]',
  applicantLastNameInput: 'input[id="field-:rsf:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rsg:"]',
  applicantIssueDatePicker: 'input[id="field-:rsh:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rsi:"]',
  nationalIdNumberInput: 'input[id="field-:rsj:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rsk:"]',
  districtSelect: 'select[id="field-:rsl:"]',
  localLevelSelect: 'select[id="field-:rsm:"]',
  wardNumberSelect: 'select[id="field-:rsn:"]',
  toleInput: 'input[id="field-:rso:"]',

  // ======= Recommending Office Details Section =======
  officeNameInput: 'input[id="field-:rsp:"]',
  officeAddressInput: 'input[id="field-:rsq:"]',

  // ======= Decision Details Section =======
  dateOfDecisionPicker: 'input[id="field-:rsr:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Document Uploads Section =======
  meetingMinutesUpload: 'input[type="file"][name="Meeting_minutes_of_the_meeting_held_as_per_the_decision_of_the_local_dignitaries"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default fundamentalSchoolOpenRecommendationLocators;