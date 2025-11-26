// ===================== Rental Tax Accounting Form Locators =====================

const rentalTaxAccountingLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  rentalTaxText: 'p.chakra-text:contains("Rental Tax Accounting")',

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
  wardSelect: 'select[id="field-:rmg:"]',

  // ======= Applicant Personal Details Section =======
  applicantFirstNameInput: 'input[id="field-:rmh:"]',
  applicantMiddleNameInput: 'input[id="field-:rmi:"]',
  applicantLastNameInput: 'input[id="field-:rmj:"]',
  applicantCitizenshipNumberInput: 'input[id="field-:rmk:"]',
  applicantIssueDatePicker: 'input[id="field-:rml:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  applicantIssueDistrictSelect: 'select[id="field-:rmm:"]',
  nationalIdNumberInput: 'input[id="field-:rmn:"]',
  applicantGenderSelect: 'select[id="field-:rmo:"]',

  // ======= Address Details Section =======
  provinceSelect: 'select[id="field-:rmp:"]',
  districtSelect: 'select[id="field-:rmq:"]',
  localLevelSelect: 'select[id="field-:rmr:"]',
  wardNumberSelect: 'select[id="field-:rms:"]',
  toleInput: 'input[id="field-:rmt:"]',

  // ======= Tenant Details Section =======
  tenantNameInput: 'input[id="field-:rmu:"]',

  // ======= Rental Tax Accounting Detail Section =======
  usageInput: 'input[id="field-:rmv:"]',
  contractDatePicker: 'input[id="field-:rn0:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  rentalYearInput: 'input[id="field-:rn1:"]',
  rentalMonthInput: 'input[id="field-:rn2:"]',
  fromDatePicker: 'input[id="field-:rn3:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  toDatePicker: 'input[id="field-:rn4:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  taxPercentageInput: 'input[id="field-:rn5:"]',
  taxAmountInput: 'input[id="field-:rn6:"]',

  // ======= Document Uploads Section =======
  rentAgreementInput: 'input[type="file"][name="Rent_Agreement"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default rentalTaxAccountingLocators;