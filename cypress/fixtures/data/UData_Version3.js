// fixtures/data/UData.js
//
// ==================== UNIQUE TEST DATA (UData) ====================
// This file contains ONLY unique, non-shared, special-case values
// for specific form features for ALL forms provided (comments: each form)

import { sharedAddressData , sharedApplicantData, sharedFamilyData, sharedBusinessData, sharedSchoolData, sharedDocuments } from "./SData_Version3";
// ---- BIRTH DATE VERIFICATION ----
export const birthDateVerificationUnique = {
  ...sharedApplicantData,
  ...sharedAddressData,
  ...sharedFamilyData,
  childDocType: "citizenship",
  childFirstName: "सुदीप",
  childMiddleName: "प्रसाद",
  childLastName: "कोइराला",
  childSonOrDaughter: "छोरा", // छोरा or छोरी
  childDateOfBirth: "२०६५-०५-११",
  childBirthPlace: "काठमान्डौ",
  birthCertificatePath: sharedDocuments.birthCertificatePath
};

// ---- PROPERTY VALUATION (Nepali/English) ----
export const propertyValuationUnique = {
  ...sharedApplicantData,
  ...sharedAddressData,
  totalValuationInNRP: "५००००००", // Five million
  exchangeRate: "100",
  totalValuationInUSD: "३७०३७",
  valuationRows: [
    {
      ownerName: "राम प्रसाद कोइराला",
      propertyType: "जगत जमीन",
      municipality: sharedAddressData.localLevel,
      wardNo: sharedAddressData.wardNumber,
      plotNo: "५५५",
      area: "१०००",
      rate: "५०००",
      total: "५००००००"
    }
  ],
  landOwnershipCertificatePath: sharedDocuments.landOwnershipCertificatePath
};

// ---- BUSINESS NOT BEING OPERATED (unique business features) ----
export const businessNotBeingOperatedUnique = {
  businessRegistrationNo: "REG/2077/12345",
  businessName: "राम जनरल स्टोर",
  proprietorName: "राम प्रसाद कोइराला",
  landlordName: "भीम बहादुर श्रेष्ठ",
  phoneNumber: "9801234567",
  panNumber: "PAN1234567890",
  businessClosedFromDate: "२०७८-१०-१५",
  reasonNotOperating: "व्यवसायको आर्थिक घाटा",
  registeredBodyName: "नेपाल उद्योग वाणिज्य संघ",
  registeredNumber: "NCC/123456",
  registeredDate: "२०७६-०६-२०",
  companyRegCertificatePath: sharedDocuments.companyRegCertificatePath,
  renewalCertificatePath: sharedDocuments.renewalCertificatePath,
  fieldVerificationReportPath: sharedDocuments.fieldVerificationReportPath,
  bOfficeName:"काठमाडौँ महानगरपालिका करदाताको कार्यालय",
  bOfficeAddress: "रुपेश मार्ग"
  
};

// ---- FUNDAMENTAL SCHOOL OPEN RECOMMENDATION ----
export const schoolOpenRecommendationUnique = {
  ...sharedSchoolData,
  dateOfDecision: "२०७९-१२-२५",
  meetingMinutesPath: sharedDocuments.meetingMinutesPath
};

// ---- SCHOOL CLASS ADD APPLICATION ----
export const schoolClassAddUnique = {
  ...sharedSchoolData,
  decisionDate: "२०७९-०१-१०",
  classToBeAdded: "११",
  meetingMinutesPath: sharedDocuments.meetingMinutesPath,
  schoolCollegeDetailsPath: "fixtures/files/schoolCollegeDetails.pdf"
};

// ---- RENTAL TAX ACCOUNTING ----
export const rentalTaxAccountingUnique = {
  usage: "वाणिज्य",
  contractDate: "२०७८-०५-०१",
  rentalYear: "२०७८",
  rentalMonth: "५",
  fromDate: "२०७८-०५-०१",
  toDate: "२०७९-०५-०१",
  taxPercentage: "१०",
  taxAmount: "५०००",
  rentAgreementPath: "fixtures/files/rentAgreement.pdf"
};

// ---- RELATION CERTIFICATE WITH DECEASED ----
export const relationCertificateDeceasedUnique = {
  purpose: "सम्पत्ति हस्तान्तरण", // For inheritance
  declarationFamilyPath: "fixtures/files/declarationFamily.pdf",
  clearancePolicePath: "fixtures/files/clearancePolice.pdf",
  relationRows: [
    {
      personName: "सुधीर कोइराला",
      relation: "छोरा",
      isDeceased: false
    },
    {
      personName: "अमृता कोइराला",
      relation: "छोरी",
      isDeceased: false
    }
  ]
};

// ---- RELATIONSHIP VERIFICATION (Nepali/English) ----
export const relationshipVerificationUnique = {
  purpose: "नाता सम्बन्ध प्रमाणित गर्न",
  declarationFamilyPath: "fixtures/files/declarationFamily.pdf",
  clearancePolicePath: "fixtures/files/clearancePolice.pdf",
  relationRows: [
    {
      personName: "अनिता कोइराला",
      relation: "छोरी"
    },
    {
      personName: "सुदीप कोइराला",
      relation: "छोरा"
    }
  ]
};

// ---- STRONG ECONOMIC STATUS VERIFICATION ----
export const strongEconomicStatusUnique = {
  applicantGender: "पुरुष",
  applicantDateOfBirth: "२०५५-१२-२५",
  applicantContactNumber: "9812345678",
  officeName: "काठमाडौँ महानगरपालिका करदाताको कार्यालय",
  officeAddress: "रुपेश मार्ग, काठमाडौं",
  propertyTaxReceiptPath: "fixtures/files/propertyTaxReceipt.pdf",
  recommendationFromWardPath: "fixtures/files/recommendationWard.pdf"
};

// ---- WEAK ECONOMIC STATUS VERIFICATION ----
export const weakEconomicStatusUnique = {
  applicantGender: "महिला",
  applicantDateOfBirth: "२०५८-०२-१५",
  applicantContactNumber: "9845123478",
  officeName: "बाल विकास कार्यालय",
  officeAddress: "ललितपुर",
  propertyTaxReceiptPath: "fixtures/files/propertyTaxReceiptWeak.pdf",
  recommendationFromWardPath: "fixtures/files/recommendationWardWeak.pdf"
};

export const shBusiness ={
  businessManFirstName:"Ram",
  businessManMiddleName:"Prasad",
  businessManLastName:"Koirala",
  applicantFirstName: "राम",
  applicantMiddleName: "प्रसाद",
  applicantLastName: "कोइराला",
  fhFirstName:"Bhim",
  fhMiddleName:"Bahadur",
  fhLastName:"Koirala",

  fatherFirstName: "भीम",
  fatherMiddleName: "बहादुर",
  fatherLastName: "कोइराला",
  fatherinlawFirstName:"Durga",
  fatherinlawMiddleName:"Prasad",
  fatherinlawLastName:"Koirala",
  grandfatherFirstName: "दुर्गा",
  grandfatherMiddleName: "प्रसाद",
  grandfatherLastName: "कोइराला",

  citizenshipNumber:"1234567856",
  phoneNumber:"9801234567",
  email:"ram2@gmail.com",
  houseNumber:"123",
  houseWardNumber:"10",
  houseStreetNumber:"12A",

  businessEnName:"Apple farm",
  businessNeplaiName:"सयाऊ फार्म ",
  currentCapital:"50000",
  fixedCapital:"200000",
  oldRegistrationNumber:"23456",
  registrationOfficeName:"xyz office",

  landlordFirstNameEn:"Shyam",
  landlordMiddleNameEn:"Prasad",
  landlordLastNameEn:"Shrestha",
  landlordNepaliFirstName:"श्याम",
  landlordNepaliMiddleName:"प्रसाद",
  landlordNepaliLastName:"श्रेष्ठ",
  signBoardLength:"5",
  signBoardWidth:"3",
  signBoardType:"ब्यापारिक",
  rentToBePaydMonthly:"15000",

  applicantFirstNameEn:"Sudeep",
  applicantMiddleNameEn:"Prasad",
  applicantLastNameEn:"Koirala",
  applicantFirstNameNepali:"सुदीप",
  applicantMiddleNameNepali:"प्रसाद",
  applicantLastNameNepali:"कोइराला",
  applicantCitizenshipNumber:"87654321",
  applicantCitizenshipIssuedDistrict:"kathmandu",
  applicantHouseNumber:"456",

  province:"बागमती",
  district:"काठमान्डौ",
  localLevel:"काठमाडौँ महानगरपालिका",
  wardNumber:"१०",

  voucherNumber:"VN123",
}