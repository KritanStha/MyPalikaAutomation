const propertyValuationEnglishData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: "Rajiv",
        middleName: "",
        lastName: "Sapkota",
        gender: "Male", // Male
        citizenshipNumber: "123456",
        issueDistrict: "kathmandu",
        nationalId: "1234567890"
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // Bagmati
        district: "28", // Kathmandu (Note: HTML has "Select district" initially, need to check values)
        // HTML snippet shows values like "1", "2", "3" for Province.
        // For District, it's empty initially.
        // Assuming standard cascading behavior.
        localLevel: "Kathmandu Metropolitan City", // Need to match text or value
        ward: "1"
        // Tole is disabled
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
            ownerName: "Rajiv Sapkota",
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
