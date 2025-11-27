const relationshipVerificationApplicationNepaliData = {
    userSearch: "Rajiv Sapkota",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: "राजिब",
        middleName: "",
        lastName: "सापकोता",
        citizenshipNumber: "123456",
        issueDistrict: "kathmandu",
        nationalId: "१२३४५६७८९०",
        contactNumber: "9841234567"
    },

    // Permanent Address
    permanentAddress: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: "काठमाडौँ महानगरपालिका",
        ward: "1",
        tole: "ज्ञानेश्वर"
    },

    // Purpose
    purpose: "नाता प्रमाणित गर्न",

    // Relationship Details
    relatives: [
        {
            name: "राम सापकोता",
            relation: "बुबा" // Father
        },
        {
            name: "सीता सापकोता",
            relation: "आमा" // Mother
        }
    ]
};

export default relationshipVerificationApplicationNepaliData;
