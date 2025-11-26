// ===================== Different Date Of Birth Application Form Locators =====================

const differentDobApplicationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  dobAppText: 'p.chakra-text:contains("Different Date Of Birth Application")',

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
  wardSelect: 'select[id="field-:r9c:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:r9d:"]',
  applicantMiddleNameInput: 'input[id="field-:r9e:"]',
  applicantLastNameInput: 'input[id="field-:r9f:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:r9g:"]',
  applicantIssueDatePicker: '.nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:r9i:"]',
  nationalIdNumberInput: 'input[id="field-:r9j:"]',
  applicantGenderSelect: 'select[id="field-:r9k:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:r9l:"]',
  districtSelect: 'select[id="field-:r9m:"]',
  localLevelSelect: 'select[id="field-:r9n:"]',
  wardNumberSelect: 'select[id="field-:r9o:"]',
  toleInput: 'input[id="field-:r9p:"]',

  // ======= Grandfather's Details Section =======
  grandfatherFirstNameInput: 'input[id="field-:r9q:"]',
  grandfatherMiddleNameInput: 'input[id="field-:r9r:"]',
  grandfatherLastNameInput: 'input[id="field-:r9s:"]',

  // ======= Father's Details Section =======
  fatherFirstNameInput: 'input[id="field-:r9t:"]',
  fatherMiddleNameInput: 'input[id="field-:r9u:"]',
  fatherLastNameInput: 'input[id="field-:r9v:"]',

  // ======= DOB Modification Section =======
  birthDatePicker: 'input[id="field-:ra0:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  differentBirthDatePicker: 'input[id="field-:ra1:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  reasonForDateModificationInput: 'input[id="field-:ra2:"]',

  // ======= Document Uploads Section =======
  citizenshipDobCertificateInput: 'input[type="file"][name="Citizenship__date_of_birth_certificate"]',
  letterOfApplicationInput: 'input[type="file"][name="Letter_of_application"]',
  dobDifferenceProofInput: 'input[type="file"][name="Documents_to_prove_date_of_birth_difference"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default differentDobApplicationLocators;