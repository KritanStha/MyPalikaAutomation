import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName('महिला');
const lastNameNp = fakerNepali.person.lastName();

const weakEconomicStatusVerificationData = {
    userSearch: "Sresta Sharma",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameNp,
        middleName: "",
        lastName: lastNameNp,
        gender: "महिला", // Female
        citizenshipNumber: fakerNepali.contact.citizenshipNo(),
        issueDistrict: "kathmandu",
        nationalId: fakerNepali.contact.nationalId(),
        contactNumber: fakerNepali.contact.mobileNo()
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: "काठमाडौँ महानगरपालिका",
        ward: "1",
        tole: fakerNepali.location.village()
    },

    // Office Details
    office: {
        name: "जिल्ला प्रशासन कार्यालय",
        address: "काठमाडौं"
    }
};

export default weakEconomicStatusVerificationData;
