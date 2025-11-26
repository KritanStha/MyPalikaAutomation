// ===================== Marriage Verification Form Locators =====================

const marriageVerificationLocators = {
  // ======= Headings & Actions =======
  heading: 'h2.chakra-heading:contains("Apply Sifarish")',
  backButton: 'button.chakra-button:contains("← Back")',
  marriageVerificationText: 'p.chakra-text:contains("Marriage Verification")',

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
  wardSelect: 'select[id="field-:rg8:"]',

  // ======= Husband's Personal Details Section =======
  husbandFirstNameInput: 'input[id="field-:rg9:"]',
  husbandMiddleNameInput: 'input[id="field-:rga:"]',
  husbandLastNameInput: 'input[id="field-:rgb:"]',
  husbandCitizenshipNumberInput: 'input[id="field-:rgc:"]',

  // ======= Husband's Address Details Section =======
  husbandProvinceSelect: 'select[id="field-:rgd:"]',
  husbandDistrictSelect: 'select[id="field-:rge:"]',
  husbandLocalLevelSelect: 'select[id="field-:rgf:"]',
  husbandWardNumberSelect: 'select[id="field-:rgg:"]',
  husbandToleInput: 'input[id="field-:rgh:"]',

  // ======= Husband's Grandfather Details Section =======
  husbandGrandfatherFirstNameInput: 'input[id="field-:rgi:"]',
  husbandGrandfatherMiddleNameInput: 'input[id="field-:rgj:"]',
  husbandGrandfatherLastNameInput: 'input[id="field-:rgk:"]',

  // ======= Husband's Father Details Section =======
  husbandFatherFirstNameInput: 'input[id="field-:rgl:"]',
  husbandFatherMiddleNameInput: 'input[id="field-:rgm:"]',
  husbandFatherLastNameInput: 'input[id="field-:rgn:"]',

  // ======= Husband's Mother Details Section =======
  husbandMotherFirstNameInput: 'input[id="field-:rgo:"]',
  husbandMotherMiddleNameInput: 'input[id="field-:rgp:"]',
  husbandMotherLastNameInput: 'input[id="field-:rgq:"]',

  // ======= Wife's Personal Details Section =======
  wifeFirstNameInput: 'input[id="field-:rgr:"]',
  wifeMiddleNameInput: 'input[id="field-:rgs:"]',
  wifeLastNameInput: 'input[id="field-:rgt:"]',
  wifeCitizenshipNumberInput: 'input[id="field-:rgu:"]',

  // ======= Wife's Address Details Section =======
  wifeProvinceSelect: 'select[id="field-:rgv:"]',
  wifeDistrictSelect: 'select[id="field-:rh0:"]',
  wifeLocalLevelSelect: 'select[id="field-:rh1:"]',
  wifeWardNumberSelect: 'select[id="field-:rh2:"]',
  wifeToleInput: 'input[id="field-:rh3:"]',

  // ======= Wife's Grandfather Details Section =======
  wifeGrandfatherFirstNameInput: 'input[id="field-:rh4:"]',
  wifeGrandfatherMiddleNameInput: 'input[id="field-:rh5:"]',
  wifeGrandfatherLastNameInput: 'input[id="field-:rh6:"]',

  // ======= Wife's Father Details Section =======
  wifeFatherFirstNameInput: 'input[id="field-:rh7:"]',
  wifeFatherMiddleNameInput: 'input[id="field-:rh8:"]',
  wifeFatherLastNameInput: 'input[id="field-:rh9:"]',

  // ======= Wife's Mother Details Section =======
  wifeMotherFirstNameInput: 'input[id="field-:rha:"]',
  wifeMotherMiddleNameInput: 'input[id="field-:rhb:"]',
  wifeMotherLastNameInput: 'input[id="field-:rhc:"]',

  // ======= More Details Section =======
  marriageDatePicker: 'input[id="field-:rhd:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',
  sarjaminDatePicker: 'input[id="field-:rhe:"], .nepali-date-picker input[readonly][class*="nepali-date-picker"]',

  // ======= Document Uploads Section =======
  husbandsCitizenshipUpload: 'input[type="file"][name="Husbands_citizenship"]',
  wifesCitizenshipUpload: 'input[type="file"][name="Wifes_citizenship"]',
  applicationUpload: 'input[type="file"][name="Application"]',

  // ======= Action Buttons =======
  cancelButton: 'button.chakra-button:contains("Cancel")',
  applyButton: 'button.chakra-button[type="submit"]:contains("Apply")'
};

export default marriageVerificationLocators;