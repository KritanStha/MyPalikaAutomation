import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameEn = fakerNepali.person.firstNameEn();
const lastNameEn = fakerNepali.person.lastNameEn();

const relationshipVerificationApplicationEnglishData = {
    userSearch: "Sresta Sharma",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameEn,
        middleName: "",
        lastName: lastNameEn,
        citizenshipNumber: "123456",
        issueDistrict: "kathmandu",
        nationalId: fakerNepali.contact.nationalIdEn()
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // Bagmati
        district: "Kathmandu", // Text match
        localLevel: "Kathmandu Metropolitan", // Text match
        ward: "1",
        tole: fakerNepali.location.villageEn()
    },

    // Purpose
    purpose: "Relationship Verification",

    // Relationship Details
    relatives: [
        {
            name: `${fakerNepali.person.firstNameEn('MALE')} ${lastNameEn}`,
            relation: "Father"
        },
        {
            name: `${fakerNepali.person.firstNameEn('FEMALE')} ${lastNameEn}`,
            relation: "Mother"
        }
    ]
};

export default relationshipVerificationApplicationEnglishData;
