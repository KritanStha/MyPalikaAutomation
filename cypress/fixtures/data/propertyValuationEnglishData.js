import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameEn = fakerNepali.person.firstNameEn();
const lastNameEn = fakerNepali.person.lastNameEn();

const propertyValuationEnglishData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameEn,
        middleName: "",
        lastName: lastNameEn,
        gender: "Male", // Male
        citizenshipNumber: "123456",
        issueDistrict: "kathmandu",
        nationalId: fakerNepali.contact.nationalIdEn()
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // Bagmati
        district: "28", // Kathmandu
        localLevel: "Kathmandu Metropolitan City",
        ward: "1"
    },

    // Valuation Details
    valuation: {
        totalNpr: "10000000",
        exchangeRate: "130",
        totalUsd: "76923"
    },

    // Property Details
    properties: [
        {
            ownerName: `${firstNameEn} ${lastNameEn}`,
            type: "Land",
            municipality: "Kathmandu",
            wardNo: "10",
            plotNo: "101",
            area: "1000",
            rate: "10000",
            total: "10000000"
        }
    ]
};

export default propertyValuationEnglishData;
