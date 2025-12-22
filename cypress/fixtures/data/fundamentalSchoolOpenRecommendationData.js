import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();

const fundamentalSchoolOpenRecommendationData = {
    userSearch: "Sresta Sharma",
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
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Business Details (School Details)
    business: {
        regNumber: "१२३४५/०७५",
        name: "सरस्वती विद्या मन्दिर",
        type: "आधारभूत विद्यालय", // Fundamental School
        proprietorName: `${firstNameNp} ${lastNameNp}`,
        landlordName: fakerNepali.person.fullName('MALE'),
        phoneNumber: fakerNepali.contact.mobileNo(),
        panNumber: "६०१२३४५६७",
        reason: "नयाँ व्यवस्थापन" // New Management
    },

    // Business Address
    businessAddress: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Other Agency Registration
    otherAgency: {
        bodyName: "शिक्षा विकास तथा समन्वय एकाइ",
        regNumber: "९८७६५"
    },

    // Recommending Office
    recommendingOffice: {
        name: "वडा कार्यालय नं. १०",
        address: "काठमाडौं महानगरपालिका"
    }
};

export default fundamentalSchoolOpenRecommendationData;
