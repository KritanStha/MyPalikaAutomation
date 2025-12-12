import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName();
const lastNameNp = fakerNepali.person.lastName();

const relationshipVerificationApplicationNepaliData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameNp,
        middleName: "",
        lastName: lastNameNp,
        citizenshipNumber: "123456",
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

    // Purpose
    purpose: "नाता प्रमाणित गर्न",

    // Relationship Details
    relatives: [
        {
            name: `${fakerNepali.person.firstName('MALE')} ${lastNameNp}`,
            relation: "बुबा" // Father
        },
        {
            name: `${fakerNepali.person.firstName('FEMALE')} ${lastNameNp}`,
            relation: "आमा" // Mother
        }
    ]
};

export default relationshipVerificationApplicationNepaliData;
