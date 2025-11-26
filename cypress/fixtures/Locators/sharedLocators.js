// ===================== Sifarish Forms: SHARED/COMMON LOCATOR OBJECT =====================
//
// These selectors are reused across almost every form.
// They represent repeated UI elements—headings, radio buttons,
// search, address selects, action buttons, etc.

export const sharedLocators = {
  // --- Headings & Actions ---
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',

  // --- Radio Groups: Main User Type ---
  searchUserRadio: 'label:has(span:contains("Search User")) input[type="radio"]',
  createUserRadio: 'label:has(span:contains("Create User")) input[type="radio"]',

  // --- Radio Groups: User Status Filter ---
  kycVerifiedRadio: 'label:has(span:contains("KYC Verified")) input[type="radio"]',
  kycUnverifiedRadio: 'label:has(span:contains("KYC Unverified")) input[type="radio"]',
  kycRejectedRadio: 'label:has(span:contains("KYC Rejected")) input[type="radio"]',
  otpVerifiedRadio: 'label:has(span:contains("OTP Verified")) input[type="radio"]',
  otpUnverifiedRadio: 'label:has(span:contains("OTP Unverified")) input[type="radio"]',
  allRadio: 'label:has(span:contains("All")) input[type="radio"]',

  // --- Search Panel ---
  searchUserInput: 'input[placeholder="Search User"]',

  // --- Application Ward Section ---
  // Note: The id varies by form, so use an endsWith selector for generalization:
  // Example: select[id$="ward"] or a more specific pattern.
  genericWardSelect: 'select[id^="field-"][id*="ward"], select[id^="field-"][id*=":r"][id$=":"]',

  // --- Permanent Address Section ---
  provinceSelect: 'select[id^="field-"][id*="province"]',
  districtSelect: 'select[id^="field-"][id*="district"]',
  localLevelSelect: 'select[id^="field-"][id*="local"]',
  wardNumberSelect: 'select[id^="field-"][id*="ward"]',
  toleInput: 'input[id^="field-"][id*="tole"]',

  // --- Common Buttons ---
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")',

  // --- Add More Row Button (for tables) ---
  addMoreButton: 'button.chakra-button:contains("Add More...")', // If table rows used

  // --- Nepali Date Picker (generic class) ---
  nepaliDatePickerInput: '.nepali-date-picker input[readonly][class*="nepali-date-picker"]'
};

export default sharedLocators;