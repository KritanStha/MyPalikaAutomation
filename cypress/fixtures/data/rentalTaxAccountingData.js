const rentalTaxAccountingData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: "रमेश",
        middleName: "",
        lastName: "थापा",
        citizenshipNumber: "२७-०१-७५-०१२३४",
        issueDistrict: "kathmandu",
        nationalId: "१२३४५६७८९०",
        gender: "पुरुष" // Male
    },

    // Address Details
    address: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: "कलंकी"
    },

    // Tenant Details
    tenant: {
        name: "सुनिल कुमार श्रेष्ठ"
    },

    // Rental Tax Accounting Detail
    rentalTax: {
        usage: "व्यावसायिक प्रयोजन", // Commercial purpose
        rentalYear: "1", // 1 year
        rentalMonth: "12", // 12 months
        taxPercentage: "10", // 10%
        taxAmount: "50000" // Rs. 50,000
    }
};

export default rentalTaxAccountingData;
