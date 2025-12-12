import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const husbandFirstName = fakerNepali.person.firstName('MALE');
const husbandLastName = fakerNepali.person.lastName();
const wifeFirstName = fakerNepali.person.firstName('FEMALE');
const wifeLastName = fakerNepali.person.lastName();

const marriageVerificationData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Husband's Personal Details
    husband: {
        firstName: husbandFirstName,
        middleName: "",
        lastName: husbandLastName,
        citizenshipNumber: fakerNepali.contact.citizenshipNo()
    },

    // Husband's Address
    husbandAddress: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Husband's Family
    husbandGrandfather: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: husbandLastName
    },

    husbandFather: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: husbandLastName
    },

    husbandMother: {
        firstName: fakerNepali.person.firstName('FEMALE'),
        middleName: "",
        lastName: husbandLastName
    },

    // Wife's Personal Details
    wife: {
        firstName: wifeFirstName,
        middleName: "",
        lastName: wifeLastName,
        citizenshipNumber: fakerNepali.contact.citizenshipNo()
    },

    // Wife's Address
    wifeAddress: {
        province: "1", // कोशी प्रदेश
        district: "7", // धनकुटा
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Wife's Family
    wifeGrandfather: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: wifeLastName
    },

    wifeFather: {
        firstName: fakerNepali.person.firstName('MALE'),
        middleName: "",
        lastName: wifeLastName
    },

    wifeMother: {
        firstName: fakerNepali.person.firstName('FEMALE'),
        middleName: "",
        lastName: wifeLastName
    }
};

export default marriageVerificationData;
