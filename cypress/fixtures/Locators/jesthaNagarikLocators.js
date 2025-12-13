const JN = {
    // Navigation
    menuItem: "Jestha Nagarik Registration",

    // Personal Description Section
    personalDescriptionSection: "Personal Description",
    firstNameEn: 'input[name="firstName.en"]',
    firstNameNp: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    middleNameEn: 'input[name="middleName.en"]',
    middleNameNp: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    lastNameEn: 'input[name="lastName.en"]',
    lastNameNp: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    email: 'input[name="email"]',
    genderSelect: 'select[name="gender"]',
    bloodGroupSelect: 'select[name="bloodgroup"]',
    citizenshipNo: 'input[name="citizenshipNo"]',
    citizenshipIssuedDistrict: 'select[name="citizenshipIssuedDistrict"]',
    qualification: 'select[name="qualification"]',
    occupation: 'select[name="occupation"]',
    mobileNo: 'input[name="mobileNo"]',

    // Permanent Address Section
    permanentAddressSection: "Permanent Address",
    permanentProvince: 'select[name="permanentAddress.province"]',
    permanentDistrict: 'select[name="permanentAddress.district"]',
    permanentMunicipality: 'select[name="permanentAddress.municipality"]',
    permanentWard: 'select[name="permanentAddress.wardNo"]',
    permanentVillage: 'input[name="permanentAddress.village"]',
    permanentAddressCheckbox: 'input[name="isPermanentAddressCurrentAddress"]',

    // Temporary Address Section
    temporaryAddressSection: "Temporary Address",
    temporaryProvince: 'select[name="temporaryAddress.province"]',
    temporaryDistrict: 'select[name="temporaryAddress.district"]',
    temporaryMunicipality: 'select[name="temporaryAddress.municipality"]',
    temporaryWard: 'select[name="temporaryAddress.wardNo"]',
    temporaryVillage: 'input[name="temporaryAddress.village"]',

    // Caretaker Details Section
    caretakerSection: "Caretaker Details",
    caretakerFirstNameEn: 'input[name="careTaker.firstName.en"]',
    caretakerFirstNameNp: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    caretakerMiddleNameEn: 'input[name="careTaker.middleName.en"]',
    caretakerMiddleNameNp: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    caretakerLastNameEn: 'input[name="careTaker.lastName.en"]',
    caretakerLastNameNp: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    caretakerEmail: 'input[name="careTaker.email"]',
    caretakerRelation: 'select[name="careTaker.relation"]',
    caretakerProvince: 'select[name="careTaker.address.province"]',
    caretakerDistrict: 'select[name="careTaker.address.district"]',
    caretakerMunicipality: 'select[name="careTaker.address.municipality"]',
    caretakerWard: 'select[name="careTaker.address.wardNo"]',
    caretakerCitizenshipNo: 'input[name="careTaker.citizenshipNo"]',
    caretakerCitizenshipIssuedDistrict: 'select[name="careTaker.citizenshipIssuedDistrict"]',
    caretakerContact: 'input[name="careTaker.contact"]',

    // Jestha Nagarik Details Section
    jesthaNagarikSection: "Jestha Nagarik Details",
    hasIllness: 'input[name="hasIllness"]',
    hasCareCenter: 'input[name="hasCareCenter"]',
    availableFacilitiesInput: 'input[name="availableFacilities.0.name"]',
    addFacilityButton: "button:contains('Add')",
    deleteFacilityButton: 'button[aria-label="Delete Available Facilities Button"]',

    // Photo Upload
    photoUpload: 'input[id="Photo"]',

    // Remarks
    remarks: 'textarea[name="remarks"]',

    // Submit Button
    submitButton: 'button[type="submit"]'
};

export default JN;
