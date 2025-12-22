import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();
const middleNameNp = fakerNepali.person.middleName();

const differentDobData = {
    userSearch: "Sresta Sharma",
    ward: "10",
    applicant: {
        firstName: firstNameNp,
        middleName: middleNameNp,
        lastName: lastNameNp,
        citizenshipNumber: fakerNepali.contact.citizenshipNo(),
        issueDistrict: "Kathmandu",
        nationalId: fakerNepali.contact.nationalId(),
        gender: "पुरुष"
    },
    address: {
        province: "बागमती",
        district: "28", // Kathmandu
        tole: fakerNepali.location.village()
    },
    grandfather: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: lastNameNp
    },
    father: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: lastNameNp
    },
    reason: "नागरिकता र जन्म दर्तामा जन्म मिति फरक परेको हुनाले।"
};

export default differentDobData;
