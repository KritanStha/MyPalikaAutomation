import fakerNepali from '../../support/fakerNepali.js';

// Generate test data using Faker for common fields
const firstNameNp = fakerNepali.person.firstName('पुरुष');
const lastNameNp = fakerNepali.person.lastName();

const rentalTaxAccountingData = {
    userSearch: "Sresta Sharma",
    ward: "10",

    // Applicant Personal Details
    applicant: {
        firstName: firstNameNp,
        middleName: "",
        lastName: lastNameNp,
        citizenshipNumber: fakerNepali.contact.citizenshipNo(),
        issueDistrict: "kathmandu",
        nationalId: fakerNepali.contact.nationalId(),
        gender: "पुरुष" // Male
    },

    // Address Details
    address: {
        province: "3", // बागमती
        district: "28", // काठमाडौँ
        localLevel: 1,
        ward: 1,
        tole: fakerNepali.location.village()
    },

    // Tenant Details
    tenant: {
        name: fakerNepali.person.fullName()
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
