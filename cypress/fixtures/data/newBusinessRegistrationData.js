import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();

const newBusinessRegistrationData = {
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

    // Business Details
    business: {
        type: "खुद्रा पसल", // Retail Shop
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Recommending Office
    recommendingOffice: {
        name: "वडा कार्यालय नं. १०",
        address: "काठमाडौं महानगरपालिका, वडा नं. १०"
    }
};

export default newBusinessRegistrationData;
