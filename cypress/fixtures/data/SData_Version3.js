// fixtures/data/SData.js
//
// ==================== SHARED TEST DATA (SData) ====================
// This file contains all values reused across multiple forms for Sifarish applications.

export const sharedApplicantData = {
  // ---- Applicant Personal Details ----
  applicantFirstName: "राम",
  applicantMiddleName: "प्रसाद",
  applicantLastName: "कोइराला",
  applicantCitizenshipNumber: "12345678",
  applicantIssueDate: "२०७७-०१-१५", // Nepali date
  applicantIssueDistrict: "kathmandu", // district for select
  nationalIdNumber: "1234567890"
};

export const sharedAddressData = {
  // ---- Permanent Address ----
  province: "बागमती",
  district: "28",
  localLevel: "काठमाडौँ महानगरपालिका",
  wardNumber: "2902",
  tole: "जयबागेश्वरी"
};

export const sharedFamilyData = {
  // ---- Family Relations ----
  grandfatherFirstName: "दुर्गा",
  grandfatherMiddleName: "प्रसाद",
  grandfatherLastName: "कोइराला",
  fatherFirstName: "भीम",
  fatherMiddleName: "बहादुर",
  fatherLastName: "कोइराला",
  motherFirstName: "चन्द्रा",
  motherMiddleName: "माया",
  motherLastName: "कोइराला"
};

export const sharedBusinessData = {
  businessType: "जनरल स्टोर",
  businessProvince: "बागमती",
  businessDistrict: "काठमान्डौ",
  businessLocalLevel: "काठमाडौँ महानगरपालिका",
  businessWardNumber: "१०",
  businessTole: "जयबागेश्वरी"
};

export const sharedSchoolData = {
  schoolName: "श्री सरस्वती माध्यमिक विद्यालय",
  schoolCollegeType: "माध्यमिक विद्यालय",
  schoolProvince: "बागमती",
  schoolDistrict: "काठमान्डौ",
  schoolLocalLevel: "काठमाडौँ महानगरपालिका",
  schoolWardNumber: "१०",
  schoolTole: "जयबागेश्वरी"
};

export const sharedDocuments = {
  birthCertificatePath: "fixtures/files/birthCertificateSample.pdf",
  citizenshipPath: "fixtures/files/citizenshipSample.pdf",
  landOwnershipCertificatePath: "fixtures/files/landOwnershipSample.pdf",
  companyRegCertificatePath: "fixtures/files/companyRegistrationSample.pdf",
  renewalCertificatePath: "fixtures/files/renewalCertificateSample.pdf",
  fieldVerificationReportPath: "fixtures/files/fieldVerificationReport.pdf",
  meetingMinutesPath: "fixtures/files/meetingMinutes.pdf"
};