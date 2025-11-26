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
  searchUserInput: 'input[placeholder="Search User"]',

  // ======= Application Ward Section =======
  wardSelect: 'select[id="field-:rqm:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rqn:"]',
  applicantMiddleNameInput: 'input[id="field-:rqo:"]',
  applicantLastNameInput: 'input[id="field-:rqp:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rqq:"]',
  applicantIssueDatePicker: 'input[id="field-:rqr:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rqs:"]',
  nationalIdNumberInput: 'input[id="field-:rqt:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:rqu:"]',
  districtSelect: 'select[id="field-:rqv:"]',
  localLevelSelect: 'select[id="field-:rr0:"]',
  wardNumberSelect: 'select[id="field-:rr1:"]',
  toleInput: 'input[id="field-:rr2:"]',

  // ======= Purpose of Verification Section =======
  purposeInput: 'input[id="field-:rr3:"]',

  // ======= Document Uploads Section =======
  declarationFamilyInput: 'input[type="file"][name="Declaration_from_family_members"]',
  clearancePoliceInput: 'input[type="file"][name="Clearance_from_the_Police_if_Any"]',

  // ======= Table Details Section (dynamic, for each row) =======
  // Naata sambandh, etc.
  relationRowPersonNameInput: 'input[id="field-:rr7:"]',
  relationRowNataSelect: 'select[name="नाता"]',
  relationRowIsDeceasedCheckbox: 'input[name="मृतक हो?"]',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default relationCertificateDeceasedLocators;