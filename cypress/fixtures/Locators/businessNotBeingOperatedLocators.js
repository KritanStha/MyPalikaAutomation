// ===================== Business Not Being Operated Form Locators =====================

const businessNotBeingOperatedLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  notOperatedText: 'p.chakra-text:contains("Business Not Being Operated")',

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
  wardSelect: 'select[id="field-:ron:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:roo:"]',
  applicantMiddleNameInput: 'input[id="field-:rop:"]',
  applicantLastNameInput: 'input[id="field-:roq:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:ror:"]',
  applicantIssueDatePicker: 'input[id="field-:ros:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rot:"]',
  nationalIdNumberInput: 'input[id="field-:rou:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rov:"]',
  districtSelect: 'select[id="field-:rp0:"]',
  localLevelSelect: 'select[id="field-:rp1:"]',
  wardNumberSelect: 'select[id="field-:rp2:"]',
  toleInput: 'input[id="field-:rp3:"]',

  // ======= Business Details Section =======
  businessRegistrationNoInput: 'input[id="field-:rp4:"]',
  businessNameInput: 'input[id="field-:rp5:"]',
  businessTypeInput: 'input[id="field-:rp6:"]',
  proprietorNameInput: 'input[id="field-:rp7:"]',
  landlordNameInput: 'input[id="field-:rp8:"]',
  phoneNumberInput: 'input[id="field-:rp9:"]',
  panNumberInput: 'input[id="field-:rpa:"]',
  businessClosedFromDatePicker: 'input[id="field-:rpb:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  reasonNotOperatingInput: 'input[id="field-:rpc:"]',

  // ======= Business Address Section =======
  businessProvinceSelect: 'select[id="field-:rpd:"]',
  businessDistrictSelect: 'select[id="field-:rpe:"]',
  businessLocalLevelSelect: 'select[id="field-:rpf:"]',
  businessWardNumberSelect: 'select[id="field-:rpg:"]',
  businessToleInput: 'input[id="field-:rph:"]',

  // ======= Other Agency Registration Section =======
  registeredBodyNameInput: 'input[id="field-:rpi:"]',
  registeredNumberInput: 'input[id="field-:rpj:"]',
  registeredDatePicker: 'input[id="field-:rpk:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Recommending Office Details Section =======
  officeNameInput: 'input[id="field-:rpl:"]',
  officeAddressInput: 'input[id="field-:rpm:"]',

  // ======= Document Uploads Section =======
  companyRegCertificateInput: 'input[type="file"][name="Company_Registration_Certificate"]',
  renewalCertificateInput: 'input[type="file"][name="Renewal_Certificate"]',
  fieldVerificationReportInput: 'input[type="file"][name="Field_Verification_Report_"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default businessNotBeingOperatedLocators;