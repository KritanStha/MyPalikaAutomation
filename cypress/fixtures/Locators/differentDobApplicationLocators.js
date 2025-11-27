const DDA = {
  // Navigation
  menuItem: "Different Date Of Birth Application",

  // Ward Selection
  wardSelect: "select", // First select

  // Applicant Details
  applicantSection: "Applicant Personal Details",
  firstNameInput: 'input[placeholder="Enter first name"]',
  middleNameInput: 'input[placeholder="Enter middle name"]',
  lastNameInput: 'input[placeholder="Enter last name"]',
  citizenshipInput: 'input[placeholder="Enter citizenship number"]',
  nationalIdInput: 'input[placeholder="Enter national ID number"]',

  // Address
  permanentAddressSection: "Permanent Address",
  toleInput: 'input[placeholder="Enter tole name"]',

  // Family Details
  grandfatherSection: "Grandfather's Details",
  fatherSection: "Father's Details",

  // Details Section
  detailsSection: /^Details$/,
  reasonInput: 'input[placeholder="Enter Reason for Date Modification"]',

  // Documents
  citizenshipDoc: 'input[name="Citizenship__date_of_birth_certificate"]',
  letterDoc: 'input[name="Letter_of_application"]',
  proofDoc: 'input[name="Documents_to_prove_date_of_birth_difference"]'
};

export default DDA;