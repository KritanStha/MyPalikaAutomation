// ===================== Property Valuation (English) Form Locators =====================

const propertyValuationEnglishLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  propertyValuationText: 'p.chakra-text:contains("Property valuation(English)")',

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
  wardSelect: 'select[id="field-:r161:"]',

  // ======= Applicant Details Section =======
  applicationDatePicker: 'input[id="field-:r162:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:r163:"]',
  applicantMiddleNameInput: 'input[id="field-:r164:"]',
  applicantLastNameInput: 'input[id="field-:r165:"]',
  applicantGenderSelect: 'select[id="field-:r166:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:r167:"]',
  applicantIssueDatePicker: 'input[id="field-:r168:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:r169:"]',
  nationalIdNumberInput: 'input[id="field-:r16a:"]',

  // ======= Permanent Address Section =======
  provinceSelect: 'select[id="field-:r16b:"]',
  districtSelect: 'select[id="field-:r16c:"]',
  localLevelSelect: 'select[id="field-:r16d:"]',
  wardNumberSelect: 'select[id="field-:r16e:"]',
  toleInput: 'input[id="field-:r16f:"]',

  // ======= Valuation Details Section =======
  totalValuationInNRPInput: 'input[id="field-:r16g:"]',
  exchangeRateInput: 'input[id="field-:r16h:"]',
  totalValuationInUSDInput: 'input[id="field-:r16i:"]',

  // ======= Document Uploads Section =======
  landOwnershipCertificateInput: 'input[type="file"][name="Land_Ownership_Certificate"]',

  // ======= Table Details Section (dynamic, for each row) =======
  tableRowOwnerNameInput: 'input[name="Land Owner\'s Name"]',
  tableRowPropertyTypeInput: 'input[name="Type of Property"]',
  tableRowMunicipalityInput: 'input[name="Municipality"]',
  tableRowWardNoInput: 'input[name="Ward No."]',
  tableRowPlotNoInput: 'input[name="Plot No."]',
  tableRowAreaInput: 'input[name="Area(sq.ft)"]',
  tableRowRateInput: 'input[name="Rate(NPR)"]',
  tableRowTotalInput: 'input[name="Total Valuation(NPR)"]',
  addMoreButton: 'button.chakra-button:contains("Add More...")',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default propertyValuationEnglishLocators;