# MyPalika Form Automation Guide

## Overview
This guide documents the standardized approach for automating Sifarish (recommendation) forms in the MyPalika system using Cypress. This project automates 15+ different forms with consistent patterns and reusable components.

---

## Completed Tasks for `diffrenetDOB.cy.js` (Different Date of Birth Application)

### 1. **Test Structure Setup**
- Created test file: `cypress/e2e/diffrenetDOB.cy.js`
- Created locators file: `cypress/fixtures/Locators/differentDobApplicationLocators.js`
- Created data file: `cypress/fixtures/data/differentDobData.js`

### 2. **Navigation & Authentication**
- Used custom `cy.login()` command to authenticate and navigate to application page
- Navigated to "Different Date Of Birth Application" menu item
- Verified "Apply Sifarish" heading is visible

### 3. **User Search & Selection**
- Selected "Search User" radio button
- Clicked search input field
- Selected user "Rajiv Sapkota" from dynamic dropdown (handles extra spaces and phone numbers)
- **Key Fix**: Used `cy.contains("button[role='menuitem']", data.userSearch)` to handle partial text matching

### 4. **Ward Selection**
- Selected ward number from dropdown (Ward 10)

### 5. **Applicant Personal Details Form Filling**
- Filled Nepali text inputs:
  - First Name: सुमन
  - Middle Name: प्रसाद
  - Last Name: श्रेष्ठ
  - Citizenship Number: २७-०१-७५-०१२३४
  - National ID: १२३४५६७८९०
- Selected Issue District: Kathmandu
- Selected Gender: पुरुष (Male)
- **Nepali Date Picker** (Citizenship Issue Date):
  - Clicked Nepali date picker input
  - Waited for date picker body to be visible
  - Selected day by index (eq(9))

### 6. **Permanent Address Form Filling**
- Selected cascading dropdowns with proper wait times:
  - Province: बागमती (1500ms wait)
  - District: Kathmandu (1500ms wait)
  - Local Level: Index 1 (1500ms wait)
  - Ward: Index 1
- Filled Tole: बानेश्वर

### 7. **Family Details Form Filling**
- **Grandfather's Details**:
  - First Name: हरि
  - Middle Name: (cleared/empty)
  - Last Name: श्रेष्ठ
- **Father's Details**:
  - First Name: राम
  - Middle Name: (cleared/empty)
  - Last Name: श्रेष्ठ

### 8. **Date of Birth Details Section**
- Scrolled to "Details" section
- **Nepali Date Picker** (Date in Citizenship):
  - Clicked second date picker
  - Selected day by index (eq(27))
- **Nepali Date Picker** (Actual Date of Birth):
  - Clicked third date picker
  - Selected day by index (eq(14))
- Filled Reason: नागरिकता र जन्म दर्तामा जन्म मिति फरक परेको हुनाले।

### 9. **Document Upload**
- Uploaded 3 required documents:
  - Citizenship/Date of Birth Certificate: `citizenship.jpg`
  - Letter of Application: `letter.pdf`
  - Proof Documents: `proof.jpg`

### 10. **Form Submission**
- Clicked "Apply" button
- Waited 500ms for confirmation modal
- **Clicked "Submit" button in confirmation modal** (critical step)
- (Success message verification removed per user request)

---

## Standard Patterns & Best Practices

### File Structure
```
cypress/
├── e2e/
│   └── [formName].cy.js           # Test file
├── fixtures/
│   ├── Locators/
│   │   └── [formName]Locators.js  # All selectors
│   ├── data/
│   │   └── [formName]Data.js      # Test data
│   └── files/                      # Upload files
└── support/
    └── commands.js                 # Custom commands
```

### Naming Conventions
- **Test File**: `[formName].cy.js` (e.g., `diffrenetDOB.cy.js`)
- **Locators File**: `[formName]Locators.js` (e.g., `differentDobApplicationLocators.js`)
- **Data File**: `[formName]Data.js` (e.g., `differentDobData.js`)
- **Import Alias**: Use uppercase abbreviation (e.g., `DDA` for Different Date of Birth Application)

### Locators File Structure
```javascript
const [ALIAS] = {
  // Navigation
  menuItem: "Form Name",
  applyHeading: "Apply Sifarish",
  
  // Search User
  searchRadio: 'input[type="radio"][value="search"]',
  searchInput: 'input[placeholder="Search User"]',
  
  // Ward Selection
  wardSelect: "select",
  
  // Form-specific sections with descriptive comments
  sectionName: "Section Heading Text",
  inputField: 'input[placeholder="..."]',
  
  // Nepali Date Pickers
  nepaliDatePicker: "input.nepali-date-picker",
  datePickerBody: "tbody",
  datePickerDay: "td.month-day.current",
  
  // Documents
  docName: 'input[name="Document_field_name"]',
  
  // Submit
  submitButton: 'button[type="submit"]',
  confirmSubmitButton: 'button:contains("Submit")',
  successMessage: "Application Submitted"
};

export default [ALIAS];
```

### Data File Structure
```javascript
const [formName]Data = {
  userSearch: "Rajiv Sapkota",
  ward: "10",
  
  // Nested objects for logical grouping
  applicant: {
    firstName: "नेपाली नाम",
    // ... other fields
  },
  
  address: {
    province: "बागमती",
    district: "28",
    // ... other fields
  },
  
  // Use Nepali Unicode text for Nepali forms
  reason: "नेपाली कारण..."
};

export default [formName]Data;
```

---

## Reusable Patterns (To Be Converted to Custom Commands)

### 1. **User Search & Selection** ⭐ HIGH PRIORITY
```javascript
// Current implementation (repeated in every test)
cy.get(LOCATOR.searchRadio).check({ force: true });
cy.get(LOCATOR.searchInput).click();
cy.wait(1000);
cy.contains("button[role='menuitem']", data.userSearch).click({ force: true });
cy.wait(1000);

// Proposed custom command:
cy.searchAndSelectUser(data.userSearch);
```

### 2. **Navigate to Form** ⭐ HIGH PRIORITY
```javascript
// Current implementation
cy.login();
cy.contains(LOCATOR.menuItem, { timeout: 10000 }).should("be.visible").click();
cy.contains(LOCATOR.applyHeading).should("be.visible");
cy.wait(2000);

// Proposed custom command:
cy.navigateToForm("Different Date Of Birth Application");
```

### 3. **Nepali Date Picker Selection** ⭐ HIGH PRIORITY
```javascript
// Current implementation (repeated 3 times in this test alone)
cy.get(LOCATOR.nepaliDatePicker).eq(index).click();
cy.get(LOCATOR.datePickerBody).should("be.visible");
cy.get(LOCATOR.datePickerDay).eq(dayIndex).click();
cy.wait(500);

// Proposed custom command:
cy.selectNepaliDate(pickerIndex, dayIndex);
```

### 4. **Cascading Dropdown Selection** ⭐ MEDIUM PRIORITY
```javascript
// Current implementation
cy.get("select").eq(3).select(data.address.province, { force: true });
cy.wait(1500);
cy.get("select").eq(4).should("not.be.disabled").select(data.address.district, { force: true });
cy.wait(1500);
cy.get("select").eq(5).should("not.be.disabled").select(1, { force: true });
cy.wait(1500);
cy.get("select").eq(6).should("not.be.disabled").select(1, { force: true });

// Proposed custom command:
cy.selectCascadingAddress(data.address.province, data.address.district, localLevelIndex, wardIndex);
```

### 5. **Form Submission with Confirmation** ⭐ HIGH PRIORITY
```javascript
// Current implementation
cy.get(LOCATOR.submitButton).contains("Apply").click();
cy.wait(500);
cy.contains("button", "Submit").click();

// Proposed custom command:
cy.submitFormWithConfirmation();
```

### 6. **Fill Family Member Details** ⭐ MEDIUM PRIORITY
```javascript
// Current implementation (repeated for grandfather, father, etc.)
cy.get(LOCATOR.relativeFirstName).eq(index).clear().type(data.firstName);
cy.get(LOCATOR.relativeMiddleName).eq(index).clear();
cy.get(LOCATOR.relativeLastName).eq(index).clear().type(data.lastName);

// Proposed custom command:
cy.fillFamilyMember(index, data.grandfather);
```

---

## Prompt for Other AI Agents

### Context
You are automating Cypress tests for a Nepali municipal (Palika) management system called "MyPalika". The system has 15+ different Sifarish (recommendation) forms that need to be automated. One form (`diffrenetDOB.cy.js` - Different Date of Birth Application) has been completed as a reference.

### Your Task
Create a Cypress E2E test for a new form following the established patterns.

### Requirements

#### 1. **File Structure**
Create three files:
- `cypress/e2e/[formName].cy.js` - Main test file
- `cypress/fixtures/Locators/[formName]Locators.js` - All element selectors
- `cypress/fixtures/data/[formName]Data.js` - Test data (use Nepali Unicode text)

#### 2. **Standard Test Flow**
Every test must follow this sequence:
1. **Navigate to form**: Use `cy.navigateToForm("Form Name")` custom command
2. **Search and select user**: Use `cy.searchAndSelectUser("Rajiv Sapkota")` custom command
3. **Select ward**: `cy.get(LOCATOR.wardSelect).eq(0).select(data.ward, { force: true })`
4. **Fill form fields**: Based on form requirements
5. **Handle Nepali date pickers**: Use `cy.selectNepaliDate(pickerIndex, dayIndex)` custom command
6. **Upload documents**: Use `cy.get(LOCATOR.docField).selectFile("path", { force: true })`
7. **Submit form**: Use `cy.submitFormWithConfirmation()` custom command

#### 3. **Nepali Date Picker Pattern**
All Nepali date pickers use this exact pattern:
```javascript
cy.selectNepaliDate(0, 9);  // pickerIndex, dayIndex
```
- `pickerIndex`: 0 for first date picker, 1 for second, etc.
- `dayIndex`: The day to select from the calendar (0-based index)

#### 4. **Cascading Dropdowns (Province/District/Local Level/Ward)**
Use proper wait times between selections:
```javascript
cy.get("select").eq(n).select(value, { force: true });
cy.wait(1500);  // Allow next dropdown to populate
```

#### 5. **User Search Pattern**
Always use this pattern to handle dynamic user dropdowns:
```javascript
cy.contains("button[role='menuitem']", userName).click({ force: true });
```
This handles extra spaces and phone numbers in button text.

#### 6. **Nepali Text Data**
- If form labels are in Nepali (नेपाली), provide Nepali Unicode data
- If form labels are in English, provide English data
- Common Nepali inputs: names, addresses, reasons, etc.

#### 7. **Document Uploads**
Standard documents are in `cypress/fixtures/files/`:
- `citizenship.jpg` - Citizenship certificate
- `letter.pdf` - Application letter
- `proof.jpg` - Supporting documents

#### 8. **Confirmation Modal**
After clicking "Apply", a confirmation modal appears. You MUST:
1. Wait 500ms
2. Click the "Submit" button in the modal
3. Do NOT verify success message (user preference)

#### 9. **Custom Commands to Use**
These commands are defined in `cypress/support/commands.js`:
- `cy.login()` - Login and navigate to application page
- `cy.navigateToForm(formName)` - Navigate to specific form
- `cy.searchAndSelectUser(userName)` - Search and select user
- `cy.selectNepaliDate(pickerIndex, dayIndex)` - Select Nepali date
- `cy.submitFormWithConfirmation()` - Submit with modal confirmation
- `cy.getByLabel(labelText)` - Find input by label text

#### 10. **Code Quality**
- Use descriptive variable names
- Add comments for each major section
- Group related fields logically in data files
- Use consistent indentation (2 spaces)
- Add waits only where necessary (dynamic content, cascading dropdowns)

### Reference Implementation
See `cypress/e2e/diffrenetDOB.cy.js` for a complete working example.

### Example Locators Structure
```javascript
const ALIAS = {
  // Navigation
  menuItem: "Form Display Name",
  applyHeading: "Apply Sifarish",
  
  // Search User (standard for all forms)
  searchRadio: 'input[type="radio"][value="search"]',
  searchInput: 'input[placeholder="Search User"]',
  wardSelect: "select",
  
  // Form-specific sections
  sectionHeading: "Section Name",
  inputField: 'input[placeholder="Placeholder Text"]',
  
  // Nepali Date Pickers (if applicable)
  nepaliDatePicker: "input.nepali-date-picker",
  datePickerBody: "tbody",
  datePickerDay: "td.month-day.current",
  
  // Documents (customize based on form)
  documentField: 'input[name="Field_Name"]',
  
  // Submit (standard for all forms)
  submitButton: 'button[type="submit"]',
  successMessage: "Application Submitted"
};
```

### Common Pitfalls to Avoid
1. ❌ Don't use exact text matching for user selection (use `cy.contains()` with partial match)
2. ❌ Don't forget the confirmation modal submit button
3. ❌ Don't use English data for Nepali forms
4. ❌ Don't skip waits for cascading dropdowns
5. ❌ Don't verify success message (user removed this step)
6. ❌ Don't use `.eq()` for selects without verifying the index is correct

### Questions to Ask Before Starting
1. What is the exact form name as it appears in the menu?
2. Is the form in Nepali or English?
3. How many Nepali date pickers does the form have?
4. What documents need to be uploaded?
5. Are there cascading dropdowns (Province/District/etc.)?
6. Are there family member sections (Grandfather/Father/etc.)?

---

## Next Steps
1. Create custom commands for repeated patterns (see section above)
2. Automate remaining 14 forms using this guide
3. Update this guide as new patterns emerge
