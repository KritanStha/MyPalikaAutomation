// ===================== Relation Certificate with Deceased Form Locators =====================

const relationCertificateDeceasedLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  relationCertificateText: 'p.chakra-text:contains("Relation Certificate with Deceased")',

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
  searchUserInput: '[placeholder="Search User"]',

  // ======= Application Ward Section =======
  wardSelect: '#field-\\:r35\\:',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: '#field-\\:r36\\:',
  applicantMiddleNameInput: '#field-\\:r37\\:',
  applicantLastNameInput: '#field-\\:r38\\:',
  applicantCitizenshipNumberInput: '#field-\\:r39\\:',
  applicantIssueDatePicker: 'form-control nepali-date-picker',
  applicantIssueDistrictSelect: '#field-\\:r3b\\:',
  nationalIdNumberInput: '#field-\\:r3c\\:',

  // ======= Permanent Address Section =======
  provinceSelect: '#field-\\:r3d\\:',
  districtSelect: '#field-\\:r3e\\:',
  localLevelSelect: '#field-\\:r3f\\:',
  wardNumberSelect: '#field-\\:r3g\\:',
  toleInput: '#field-\\:r3h\\:',

  // ======= Purpose of Verification Section =======
  purposeInput: '#field-\\:r3i\\:',

  // ======= Document Uploads Section =======
  declarationFamilyInput: '#field-\\:r3j\\:',
  clearancePoliceInput: '#field-\\:r3k\\:',

  // ======= Table Details Section (dynamic, for each row) =======
  // Naata sambandh, etc.
  relationRowPersonNameInput: '#field-\\:r3m\\:',
  relationRowNataSelect: '[name="नाता"]',
  relationRowIsDeceasedCheckbox: '[name="मृतक हो?"]',
  addMoreButton: '.chakra-button.css-l1hakx',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: '[type="submit"]',
  forSubmission: '[type="button"]'
};

export default relationCertificateDeceasedLocators;