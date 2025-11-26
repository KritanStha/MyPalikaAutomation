// ===================== Relationship Verification Application Nepali Form Locators =====================

const relationshipVerificationNepaliLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  relationshipVerificationText: 'p.chakra-text:contains("Relationship Verification Application Nepali")',

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
  wardSelect: 'select[id="field-:r12r:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:r12s:"]',
  applicantMiddleNameInput: 'input[id="field-:r12t:"]',
  applicantLastNameInput: 'input[id="field-:r12u:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:r12v:"]',
  applicantIssueDatePicker: 'input[id="field-:r130:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:r131:"]',
  nationalIdNumberInput: 'input[id="field-:r132:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:r133:"]',
  districtSelect: 'select[id="field-:r134:"]',
  localLevelSelect: 'select[id="field-:r135:"]',
  wardNumberSelect: 'select[id="field-:r136:"]',
  toleInput: 'input[id="field-:r137:"]',

  // ======= Purpose of Verification Section =======
  purposeInput: 'input[id="field-:r138:"]',

  // ======= Document Uploads Section =======
  declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
  clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',

  // ======= Table Details Section (dynamic, for each row) =======
  relationRowPersonNameInput: 'input[id="field-:r13c:"]',
  relationRowNataSelect: 'select[name="नाता"]',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default relationshipVerificationNepaliLocators;