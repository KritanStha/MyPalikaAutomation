
const disabilityLocators = {
    socailService: 'Social Services',
    disability: 'Disability',
    create: ".chakra-button.css-jm0l18",
    categorySelect: '.chakra-select.css-1qenyw2',
    submit: '.chakra-button.css-arfz4w',
    searchUser: '[placeholder="Search User"]',

    //Personal Information Section
    firstNameEn: '[name="firstName.en"]',
    firstNameNepali: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    middleNameEn: '[name="middleName.en"]',
    middleNameNepali: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    lastNameEn: '[name="lastName.en"]',
    lastNameNepali: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    emailAddress: '[name="email"]',
    gender: '[name="gender"]',
    boodGroup: '[name="bloodGroup"]',
    maritalStatus: '[name="maritalStatus"]',
    employmentStatus: '[name="employmentStatus"]',
    religion: '[name="userReligion"]',
    dateOfBirth: '.nepali-date-picker ',
    telephoneNumber: '[name="telephoneNo"]',
    citizenshipNumber: '[name="citizenshipNo"]',
    citizenshipIssueDistrict: '[name="citizenshipIssuedDistrict"]',
    citizenshipIssueDate: '.nepali-date-picker',
    qualification: '[name="qualification"]',
    occupation: '[name="userOccupation"]',
    nameOfOraganization: '[name="organizationName"]',
    monthlySalary: '[name="monthlySalary"]',
    phoneNumber: '[name="mobileNo"]',
    birthCertificate: '.nepali-date-picker ',

    //Address Section (Permanent)
    provinceSelect: 'label:contains("Province") ~ div select',
    districtSelect: 'label:contains("District") ~ div select',
    localLevelSelect: 'label:contains("Municipality") ~ div select',
    wardNumberSelect: 'label:contains("Ward No") ~ div select',
    checkBox: '[name="isPermanentAddressCurrentAddress"]',


    //Patron Detail Section
    patronFirstNameEn: '[name="patron.firstName.en"]',
    patronFirstNameNepali: 'input[placeholder="आफ्नो पहिलो नाम लेख्नुहोस्"]',
    patronMiddleNameEn: '[name="patron.middleName.en"]',
    patronMiddleNameNepali: 'input[placeholder="आफ्नो मध्य नाम लेख्नुहोस्"]',
    patronLastNameEn: '[name="patron.lastName.en"]',
    patronLastNameNepali: 'input[placeholder="आफ्नो थर लेख्नुहोस्"]',
    patronEmail: '[name="patron.email"]',
    patronRelation: '[name="patron.relationship"]',
    patronProvinceSelect: 'h2:contains("Patron Details") ~ div select',
    patronDistrictSelect: 'h2:contains("Patron Details") ~ div select',
    patronMunicipalitySelect: 'h2:contains("Patron Details") ~ div select',
    patronWardNumberSelect: 'h2:contains("Patron Details") ~ div select',
    patronDOB: '.nepali-date-picker',
    patronCitizenshipNumber: '[name="patron.citizenshipNumber"]',
    patronCitizenshipIssueDistrict: '[name="patron.citizenshipIssuedDistrict"]',
    patronCitizenshipIssueDate: '.nepali-date-picker',
    patronContact: '[name="patron.mobileNumber"]',
    patronOccupation: '[name="patron.occupation"]',
    patronMonthlyIncome: '[name="patron.monthlyIncome"]',

    //Disability Detail Section
    registrationDate: '[name="registrationDate"]',

    disabilityTypeSelect: '[name="disabilityType"]',
    subtype: '[name="disabilitySubtype"]',
    disabilitySeverity: '[name="disabilitySeverity"]',
    category: '[name="category"]',
    cause: '[name="cause"]',
    nature: '[name="nature"]',
    seriousness: '[name="seriousness"]',
    description: '[name="description"]',
    activityLimitation: '[name="activityLimitDescription"]',
    needOfAccessory: '[name="needOfAccessory"]',
    usedAccessory: '[name="useAccessory"]',
    nameOfAccessory: '[name="nameOfAccessory.0.name"]',
    dailyTask: '[name="taskWithoutHelp.0.name"]',
    taskHelp: '[name="helpForWhichTask.0.name"]',
    trainigReceived: '[name="trainingReceived.0.name"]',
    taskWithHelp: '[name="taskWithHelp.0.name"]',
    otherServices: '[name="otherServices.0.name"]',

    //Additional Information Section
    caste: '[name="caste"]',
    latestEducation: '[name="latestEducation"]',
    adOccupation: '[name="occupation"]',
    wardNumber: '[name="ward"]',
    ownsLand: '[name="ownLand"]',
    ownsHome: '[name="ownHouse"]',
    stillStudying: '[name="stillStudying"]',

    //Receiver Details
    receiverNameEn: '[name="receiverDetails.receiverName.en"]',
    receiverNameNepali: 'input[placeholder="प्राप्तकर्ता नाम"]',
    receiverMobileNumber: '[name="receiverDetails.receiverMobileNumber"]',
    receiverRelation: '[name="receiverDetails.relationship"]',
    receiverDate: '[name="receiverDetails.receivedDate"]',

    //Authority Detail
    authorityNameEn: '[name="authorityDetails.authorityName.en"]',
    authorityNameNepali: 'input[placeholder="प्राधिकरण नाम"]',
    authorityMobileNumber: '[name="authorityDetails.authorityMobileNumber"]',
    approvedDate: '[name="authorityDetails.approvedDate"]',
    authorityDesignation: '[name="authorityDetails.authorityDesignation"]',
    officeAddress: '[name="authorityDetails.officeAddress"]',


    photo: 'input[type="file"]',
    sifaris: 'input[type="file"]',
    remarks: '[name="remarks"]',
    finalSubmit: 'Submit',


}
export default disabilityLocators;