export const businessRegistrationUserLocators = {
    // BusinessMan Personal Details (व्यवसायीको व्यक्तिगत विवरण)

    // Business Man Name Fields (English)
    businessManFirstName_en: 'input[name="businessManFirstName_en"]',
    businessManMiddleName_en: 'input[name="businessManMiddleName_en"]',
    businessManLastName_en: 'input[name="businessManLastName_en"]',

    // Business Man Name Fields (Nepali - using placeholder)
    businessManFirstName_np: 'input[placeholder="पहिलो नाम लेक्नुहोस"]',
    businessManMiddleName_np: 'input[placeholder="बीचको नाम लेक्नुहोस"]',
    businessManLastName_np: 'input[placeholder="थर लेक्नुहोस"]',

    // Father/Husband Name Fields (English)
    fatherOrHusbandFirstName_en: 'input[name="fatherOrHusbandFirstName_en"]',
    fatherOrHusbandMiddleName_en: 'input[name="fatherOrHusbandMiddleName_en"]',
    fatherOrHusbandLastName_en: 'input[name="fatherOrHusbandLastName_en"]',

    // Father/Husband Name Fields (Nepali - using specific placeholders)
    fatherOrHusbandFirstName_np: 'input[placeholder="पहिलो नाम लेक्नुहोस"]:eq(1)',
    fatherOrHusbandMiddleName_np: 'input[placeholder="बिचको नाम लेक्नुहोस"]:eq(0)',
    fatherOrHusbandLastName_np: 'input[placeholder="थर लेक्नुहोस"]:eq(1)',

    // Grand Father/Father In Law Name Fields (English)
    grandFatherOrFatherInLawFirstName_en: 'input[name="grandFatherOrFatherInLawFirstName_en"]',
    grandFatherOrFatherInLawMiddleName_en: 'input[name="grandFatherOrFatherInLawMiddleName_en"]',
    grandFatherOrFatherInLawLastName_en: 'input[name="grandFatherOrFatherInLawLastName_en"]',

    // Grand Father/Father In Law Name Fields (Nepali - using specific placeholders)
    grandFatherOrFatherInLawFirstName_np: 'input[placeholder="हजुरबुबा /ससुराको पहिलो नाम लेक्नुहोस"]',
    grandFatherOrFatherInLawMiddleName_np: 'input[placeholder="हजुरबुबा /ससुराको बिचको नाम लेक्नुहोस"]',
    grandFatherOrFatherInLawLastName_np: 'input[placeholder="हजुरबुबा /ससुराको थर लेक्नुहोस"]',

    // Contact & Identification Fields
    citizenshipNumber: 'input[name="citizenshipNumber"]',
    phoneNumber: 'input[name="phoneNumber"]',
    email: 'input[name="email"]',

    // Address Fields
    houseNumber: 'input[name="houseNumber"]',
    houseWardNumber: 'input[name="houseWardNumber"]',
    houseStreetName: 'input[name="houseStreetName"]',

    // Navigation Buttons (using type and text content)
    previousButton: 'button:contains("Previous")',
    nextButton: 'button[type="submit"]:contains("Next")',

    // Alternative button locators using SVG path
    previousButtonBySvg: 'button:has(svg path[d*="M217.9 256L345 129"])',
    nextButtonBySvg: 'button[type="submit"]:has(svg path[d*="M294.1 256L167 129"])',

    // Business Details
    // Business Details (व्यवसाय विवरण)

    // Business Name Fields
    businessName_en: 'input[name="businessName_en"]',
    businessName_np: 'input[placeholder="पहिलो नाम लेख्नुहोस"]',

    // Business Entity Type Dropdown
    businessType: 'select[name="businessType"]',

    // Capital Fields
    currentCapital: 'input[name="currentCapital"][type="number"]',
    fixedCapital: 'input[name="fixedCapital"][type="number"]',

    // Business Start Date (Nepali Date Picker)
    businessStartDate: 'input.nepali-date-picker',
    businessStartDateAlt: 'input.nepali-date-picker',

    // Business Category Dropdown
    businessCategory: 'select[name="businessCategory"]',

    // Old Registration Number
    oldRegistrationNumber: 'input[name="oldRegistrationNumber"]',

    // Register Office Name
    registerOfficeName: 'input[name="registerOfficeName"]',

    // Alternative locators using placeholders
    currentCapitalByPlaceholder: 'input[placeholder="Current Capital"]',
    fixedCapitalByPlaceholder: 'input[placeholder="Fixed Capital"]',
    oldRegistrationNumberByPlaceholder: 'input[placeholder="Old Registration Number"]',
    registerOfficeNameByPlaceholder: 'input[placeholder="Enter Business Registration Name"]',



    // Rental Details (भाडा विवरण)

    // Landlord Name Fields (English)
    landlordFirstName_en: 'input[name="landlordFirstName_en"]',
    landlordMiddleName_en: 'input[name="landlordMiddleName_en"]',
    landlordLastName_en: 'input[name="landlordLastName_en"]',

    // Landlord Name Fields (Nepali - using placeholders)
    landlordFirstName_ne: 'input[placeholder="घरधनिको पहिलो नाम लेख्नुहोस्"]',
    landlordMiddleName_ne: 'input[placeholder="घरधनिको बिचको नाम लेख्नुहोस्"]',
    landlordLastName_ne: 'input[placeholder="घरधनिको अन्तिम नाम लेख्नुहोस्"]',

    // Sign Board Dimensions
    signBoardLength: 'input[name="signBoardLength"][type="number"]',
    signBoardWidth: 'input[name="signBoardWidth"][type="number"]',

    // Sign Board Type Dropdown
    signBoardType: 'select[name="signBoardType"]',

    // Rent Field
    rentToBePaid: 'input[name="rentToBePaid"][type="number"]',

    // Alternative locators using placeholders
    landlordFirstNameByPlaceholder: 'input[placeholder="Landlord First Name"]',
    landlordMiddleNameByPlaceholder: 'input[placeholder="Landlord Middle Name"]',
    landlordLastNameByPlaceholder: 'input[placeholder="Landlord Last Name"]',
    signBoardLengthByPlaceholder: 'input[placeholder="Sign Board Length"]',
    signBoardWidthByPlaceholder: 'input[placeholder="Sign Board Width"]',
    rentToBePaidByPlaceholder: 'input[placeholder="Rent to be paid"]',


    // Applicant Details (आवेदकको विवरण)

    // Applicant Name Fields (English)
    applicantFirstName_en: 'input[name="firstName_en"]',
    applicantMiddleName_en: 'input[name="middleName_en"]',
    applicantLastName_en: 'input[name="lastName_en"]',

    // Applicant Name Fields (Nepali - using placeholder)
    // Note: All three Nepali fields use the same placeholder, so we'll need to use :eq() to differentiate
    applicantFirstName_ne: 'input[placeholder="पहिलो नाम लेख्नुहोस"]:eq(2)',
    applicantMiddleName_ne: 'input[placeholder="पहिलो नाम लेख्नुहोस"]:eq(3)',
    applicantLastName_ne: 'input[placeholder="पहिलो नाम लेख्नुहोस"]',

    // Citizenship Information
    applicantCitizenshipNumber: 'input[name="citizenshipNumber"]',
    citizenshipIssuedDistrict: 'input[name="citizenshipIssuedDistrict"]',

    // Citizenship Issued Date (Nepali Date Picker)
    citizenshipIssuedDate: '.nepali-date-picker',
    citizenshipIssuedDateAlt: 'input[type="text"][readonly]:eq(1)',

    // House Number (Applicant)
    applicantHouseNumber: 'input[name="houseNumber"]:eq(1)',


    //Applicant Details


};

export default businessRegistrationUserLocators;