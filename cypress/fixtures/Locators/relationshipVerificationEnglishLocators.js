// ===================== Relationship Verification Application English Form Locators =====================

const relationshipVerificationEnglishLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  relationshipVerificationText: 'p.chakra-text:contains("Relationship Verification Application English")',

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
  wardSelect: 'select[id="field-:r14a:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:r14b:"]',
  applicantMiddleNameInput: 'input[id="field-:r14c:"]',
  applicantLastNameInput: 'input[id="field-:r14d:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:r14e:"]',
  applicantIssueDatePicker: 'input[id="field-:r14f:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:r14g:"]',
  nationalIdNumberInput: 'input[id="field-:r14h:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:r14i:"]',
  districtSelect: 'select[id="field-:r14j:"]',
  localLevelSelect: 'select[id="field-:r14k:"]',
  wardNumberSelect: 'select[id="field-:r14l:"]',
  toleInput: 'input[id="field-:r14m:"]',

  // ======= Purpose of Verification Section =======
  purposeInput: 'input[id="field-:r14n:"]',

  // ======= Document Uploads Section =======
  declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
  clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',

  // ======= Table Details Section (dynamic, for each row) =======
  relationRowPersonNameInput: 'input[name="Name of Person Establishing Relationship"]',
  relationRowRelationSelect: 'select[name="Relation"]',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default relationshipVerificationEnglishLocators;