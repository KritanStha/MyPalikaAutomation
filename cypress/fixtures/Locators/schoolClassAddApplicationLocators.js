// ===================== School Class Add Application Form Locators =====================

const schoolClassAddApplicationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  schoolClassAddText: 'p.chakra-text:contains("School Class Add Application")',

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
  wardSelect: 'select[id="field-:rtu:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rtv:"]',
  applicantMiddleNameInput: 'input[id="field-:ru0:"]',
  applicantLastNameInput: 'input[id="field-:ru1:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:ru2:"]',
  applicantIssueDatePicker: 'input[id="field-:ru3:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:ru4:"]',
  nationalIdNumberInput: 'input[id="field-:ru5:"]',

  // ======= School Description Section =======
  schoolNameInput: 'input[id="field-:ru6:"]',
  schoolCollegeTypeInput: 'input[id="field-:ru7:"]',
  schoolProvinceSelect: 'select[id="field-:ru8:"]',
  schoolDistrictSelect: 'select[id="field-:ru9:"]',
  schoolLocalLevelSelect: 'select[id="field-:rua:"]',
  schoolWardNumberSelect: 'select[id="field-:rub:"]',
  schoolToleInput: 'input[id="field-:ruc:"]',

  // ======= Decision Details Section =======
  decisionDatePicker: 'input[id="field-:rud:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  classToBeAddedInput: 'input[id="field-:rue:"]',

  // ======= Recommending Office Details Section =======
  officeNameInput: 'input[id="field-:ruf:"]',
  officeAddressInput: 'input[id="field-:rug:"]',

  // ======= Document Uploads Section =======
  meetingMinutesUpload: 'input[type="file"][name="Meeting_minutes_of_the_meeting_held_as_per_the_decision_of_the_local_dignitaries"]',
  schoolCollegeDetailsUpload: 'input[type="file"][name="SchoolCollege_Details"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default schoolClassAddApplicationLocators;