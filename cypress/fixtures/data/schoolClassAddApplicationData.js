import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();

const schoolClassAddApplicationData = {
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

    // School Description
    school: {
        name: "सरस्वती विद्या मन्दिर",
        type: "माध्यमिक विद्यालय", // Secondary School
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: "काठमाडौँ महानगरपालिका",
        ward: "1",
        tole: fakerNepali.location.village()
    },

    // Decision Details
    decision: {
        classCount: "2" // Adding 2 classes
    },

    // Recommending Office
    recommendingOffice: {
        name: "वडा कार्यालय नं. १०",
        address: "काठमाडौं महानगरपालिका"
    }
};

export default schoolClassAddApplicationData;
