const disabilityLocators = {
    // Navigation
    socialService: 'Social Services',
    disability: 'Disability',
    create: 'Create',
    submit: 'Submit',
    searchUser: '[placeholder="Search User"]',

    // Personal Information Section
    firstNameEn: '[name="firstName.en"]',
    firstNameNp: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    middleNameEn: '[name="middleName.en"]',
    middleNameNp: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    lastNameEn: '[name="lastName.en"]',
    lastNameNp: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    email: '[name="email"]',
    gender: '[name="gender"]',
    bloodGroup: '[name="bloodGroup"]',
    maritalStatus: '[name="maritalStatus"]',
    employmentStatus: '[name="employmentStatus"]',
    religion: '[name="userReligion"]',
    dateOfBirth: '.nepali-date-picker',
    telephoneNo: '[name="telephoneNo"]',
    // For adults (age >= 18)
    citizenshipNo: '[name="citizenshipNo"]',
    citizenshipIssuedDistrict: '[name="citizenshipIssuedDistrict"]',
    citizenshipIssuedDate: '.nepali-date-picker',
    // For minors (age < 18)
    birthRegistrationNumber: '[name="birthRegistrationNumber"]',
    birthCertificateIssueDistrict: '[name="issueDistrict"]',
    birthCertificateIssueDate: '.nepali-date-picker',
    qualification: '[name="qualification"]',
    occupation: '[name="userOccupation"]',
    organizationName: '[name="organizationName"]',
    monthlySalary: '[name="monthlySalary"]',
    mobileNo: '[name="mobileNo"]',

    // Address Section - target by index in test file since attributes are not unique
    // Permanent Address (1st set)
    permanentProvince: 'select',
    permanentDistrict: 'select',
    permanentMunicipality: 'select',
    permanentWard: 'select',
    permanentAddressCheckbox: '[name="isPermanentAddressCurrentAddress"]',

    // Temporary Address (2nd set)
    temporaryProvince: 'select',
    temporaryDistrict: 'select',
    temporaryMunicipality: 'select',
    temporaryWard: 'select',

    // Patron Details Section
    patronFirstNameEn: '[name="patron.firstName.en"]',
    patronFirstNameNp: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    patronMiddleNameEn: '[name="patron.middleName.en"]',
    patronMiddleNameNp: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    patronLastNameEn: '[name="patron.lastName.en"]',
    patronLastNameNp: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    patronEmail: '[name="patron.email"]',
    patronRelation: '[name="patron.relationship"]',
    // Patron Address (3rd set)
    patronProvince: 'select',
    patronDistrict: 'select',
    patronMunicipality: 'select',
    patronWard: 'select',
    patronDOB: '.nepali-date-picker',
    patronCitizenshipNo: '[name="patron.citizenshipNumber"]',
    patronCitizenshipIssuedDistrict: '[name="patron.citizenshipIssuedDistrict"]',
    patronCitizenshipIssuedDate: '.nepali-date-picker',
    patronContact: '[name="patron.mobileNumber"]',
    patronOccupation: '[name="patron.occupation"]',
    patronMonthlyIncome: '[name="patron.monthlyIncome"]',

    // Disability Detail Section
    registrationDate: '[name="registrationDate"]',
    disabilityType: '[name="disabilityType"]',
    disabilitySubtype: '[name="disabilitySubtype"]',
    disabilitySeverity: '[name="disabilitySeverity"]',
    category: '[name="category"]',
    cause: '[name="cause"]',
    nature: '[name="nature"]',
    seriousness: '[name="seriousness"]',
    description: '[name="description"]',
    activityLimitDescription: '[name="activityLimitDescription"]',
    needOfAccessory: '[name="needOfAccessory"]',
    useAccessory: '[name="useAccessory"]',
    nameOfAccessory: '[name="nameOfAccessory.0.name"]',
    taskWithoutHelp: '[name="taskWithoutHelp.0.name"]',
    helpForWhichTask: '[name="helpForWhichTask.0.name"]',
    trainingReceived: '[name="trainingReceived.0.name"]',
    taskWithHelp: '[name="taskWithHelp.0.name"]',
    otherServices: '[name="otherServices.0.name"]',

    // Additional Information Section
    caste: '[name="caste"]',
    latestEducation: '[name="latestEducation"]',
    additionalOccupation: '[name="occupation"]',
    wardNumber: '[name="ward"]',
    ownLand: '[name="ownLand"]',
    ownHouse: '[name="ownHouse"]',
    stillStudying: '[name="stillStudying"]',

    // Receiver Details
    receiverNameEn: '[name="receiverDetails.receiverName.en"]',
    receiverNameNp: 'input[placeholder="प्राप्तकर्ता नाम"]',
    receiverMobileNumber: '[name="receiverDetails.receiverMobileNumber"]',
    receiverRelationship: '[name="receiverDetails.relationship"]',
    receivedDate: '[name="receiverDetails.receivedDate"]',

    // Authority Details
    authorityNameEn: '[name="authorityDetails.authorityName.en"]',
    authorityNameNp: 'input[placeholder="प्राधिकरण नाम"]',
    authorityMobileNumber: '[name="authorityDetails.authorityMobileNumber"]',
    approvedDate: '[name="authorityDetails.approvedDate"]',
    authorityDesignation: '[name="authorityDetails.authorityDesignation"]',
    officeAddress: '[name="authorityDetails.officeAddress"]',

    // File Uploads
    photo: '#Photo',
    sifarish: '#Sifarish',

    // Remarks and Submit
    remarks: '[name="remarks"]',
    submitButton: 'Submit'
};

export default disabilityLocators;
