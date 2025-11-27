const relationshipVerificationApplicationEnglishData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: "Rajiv",
        middleName: "",
        lastName: "Sapkota",
        citizenshipNumber: "123456",
        issueDistrict: "kathmandu",
        nationalId: "1234567890"
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // Bagmati
        district: "Kathmandu", // Text match
        localLevel: "Kathmandu Metropolitan", // Text match
        ward: "1",
        tole: "Gyaneshwor"
    },

    // Purpose
    purpose: "Relationship Verification",

    // Relationship Details
    relatives: [
        {
            name: "Ram Sapkota",
            relation: "Father"
        },
        {
            name: "Sita Sapkota",
            relation: "Mother"
        }
    ]
};

export default relationshipVerificationApplicationEnglishData;
