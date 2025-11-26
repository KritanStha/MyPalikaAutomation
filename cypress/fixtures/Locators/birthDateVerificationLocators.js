// ===================== Birth Date Verification Form Locators =====================

const birthDateVerificationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  birthDateVerificationText: 'p.chakra-text:contains("Birth Date Verification")',

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
  wardSelect: 'select[id^="field-:r74:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[placeholder="Enter first name"]',
  applicantMiddleNameInput: 'input[placeholder="Enter middle name"]',
  applicantLastNameInput: 'input[placeholder="Enter last name"]',
  applicantCitizenshipNumberInput: 'input[placeholder="Enter citizenship number"]',
  citizenshipIssueDatePicker: '.nepali-date-picker input[readonly]',
  citizenshipIssueDistrictSelect: 'select[id^="field-:r7a:"]',
  nationalIdNumberInput: 'input[placeholder="Enter national ID number"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id^="field-:r7c:"]',
  districtSelect: 'select[id^="field-:r7d:"]',
  localLevelSelect: 'select[id^="field-:r7e:"]',
  wardNumberSelect: 'select[id^="field-:r7f:"]',
  toleInput: 'input[placeholder="Enter tole name"]',

  // ======= Grandfather's Details Section =======
  grandfatherFirstNameInput: 'input[id^="field-:r7h:"]',
  grandfatherMiddleNameInput: 'input[id^="field-:r7i:"]',
  grandfatherLastNameInput: 'input[id^="field-:r7j:"]',

  // ======= Father's Details Section =======
  fatherFirstNameInput: 'input[id^="field-:r7k:"]',
  fatherMiddleNameInput: 'input[id^="field-:r7l:"]',
  fatherLastNameInput: 'input[id^="field-:r7m:"]',

  // ======= Mother's Details Section =======
  motherFirstNameInput: 'input[id^="field-:r7n:"]',
  motherMiddleNameInput: 'input[id^="field-:r7o:"]',
  motherLastNameInput: 'input[id^="field-:r7p:"]',

  // ======= Child's Document Type Radios =======
  childDocTypeCitizenshipRadio: 'label:has(span:contains("Citizenship")) input[type="radio"]',
  childDocTypePassportRadio: 'label:has(span:contains("Passport")) input[type="radio"]',
  childDocTypeBothRadio: 'label:has(span:contains("Both")) input[type="radio"]',

  // ======= Child's Details Section =======
  childFirstNameInput: 'input[id^="field-:r7u:"]',
  childMiddleNameInput: 'input[id^="field-:r7v:"]',
  childLastNameInput: 'input[id^="field-:r80:"]',
  childSonDaughterSelect: 'select[id^="field-:r81:"]',
  childDateOfBirthPicker: '.nepali-date-picker input[readonly]',
  childBirthPlaceInput: 'input[id^="field-:r83:"]',

  // ======= Child's Document Uploads =======
  birthCertificateInput: 'input[type="file"][name="Birth_certificate_from_hospital"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default birthDateVerificationLocators;