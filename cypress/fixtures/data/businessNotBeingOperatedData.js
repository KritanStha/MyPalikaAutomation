import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();

const businessNotBeingOperatedData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameNp,
        middleName: "",
        lastName: lastNameNp,
        citizenshipNumber: fakerNepali.contact.citizenshipNo(),
        issueDistrict: "kathmandu",
        nationalId: fakerNepali.contact.nationalId()
    },

    // Permanent Address
    permanentAddress: {
        province: "3",
        district: "28",
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Business Details
    business: {
        regNumber: "१२३४५/०७५/०७६",
        name: `${firstNameNp} स्टोर्स`,
        type: "किराना पसल", // Grocery Store
        proprietorName: `${firstNameNp} ${lastNameNp}`,
        landlordName: fakerNepali.person.fullName('MALE'),
        phoneNumber: fakerNepali.contact.mobileNo(),
        panNumber: "६०१२३४५६७",
        reason: "आर्थिक मन्दीको कारणले" // Due to economic recession
    },

    // Business Address
    businessAddress: {
        province: "3",
        district: "28",
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Other Agency Registration
    otherAgency: {
        bodyName: "घरेलु तथा साना उद्योग कार्यालय",
        regNumber: "९८७६५"
    },

    // Recommending Office
    recommendingOffice: {
        name: "वडा कार्यालय नं. १०",
        address: "काठमाडौं महानगरपालिका"
    }
};

export default businessNotBeingOperatedData;
