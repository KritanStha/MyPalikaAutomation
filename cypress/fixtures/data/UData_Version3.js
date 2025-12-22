// fixtures/data/UData.js
//
// ==================== UNIQUE TEST DATA (UData) ====================
// This file contains ONLY unique, non-shared, special-case values
// for specific form features for ALL forms provided (comments: each form)

import { sharedAddressData, sharedApplicantData, sharedFamilyData, sharedDocuments, sharedSchoolData } from "./SData_Version3";
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



// ---- SCHOOL CLASS ADD APPLICATION ----
export const schoolClassAddUnique = {
  ...sharedSchoolData,
  decisionDate: "२०७९-०१-१०",
  classToBeAdded: "११",
  meetingMinutesPath: sharedDocuments.meetingMinutesPath,
  schoolCollegeDetailsPath: "fixtures/files/schoolCollegeDetails.pdf"
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

// ---- BUSINESS NOT BEING OPERATED (Business Closed) ----
export const businessNotBeingOperatedUnique = {
  businessRegistrationNo: "123456789",
  businessName: "राम प्रसाद जनरल स्टोर",
  reasonNotOperating: "आर्थिक मन्दी",
  bOfficeName: "वडा कार्यालय",
  bOfficeAddress: "काठमान्डौ"
};