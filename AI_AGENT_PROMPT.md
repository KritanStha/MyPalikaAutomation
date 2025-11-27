# AI Agent Prompt: MyPalika Form Automation

## Your Task
Create a Cypress E2E test for a MyPalika Sifarish (recommendation) form following established patterns.

## Context
- **System**: Nepali municipal management system with 15+ forms
- **Reference**: `cypress/e2e/diffrenetDOB.cy.js` (completed example)
- **Custom Commands**: Available in `cypress/support/commands.js`

## Required Files (Create 3 files)
1. `cypress/e2e/[formName].cy.js` - Test file
2. `cypress/fixtures/Locators/[formName]Locators.js` - Selectors
3. `cypress/fixtures/data/[formName]Data.js` - Test data

## Standard Test Flow (Use Custom Commands)

```javascript
import ALIAS from "../fixtures/Locators/[formName]Locators";
import data from "../fixtures/data/[formName]Data";

describe("[Form Name]", () => {
  it("Should fill and submit the complete form", () => {
    // 1. Navigate to form
    cy.navigateToForm(ALIAS.menuItem);

    // 2. Search and select user (always "Rajiv Sapkota")
    cy.searchAndSelectUser(data.userSearch);

    // 3. Select ward
    cy.get(ALIAS.wardSelect).eq(0).select(data.ward, { force: true });
    cy.wait(1000);

    // 4. Fill form fields (customize based on form)
    cy.contains(ALIAS.sectionName).should("be.visible");
    cy.get(ALIAS.inputField).clear().type(data.value);
    
    // 5. Nepali date pickers (if applicable)
    cy.selectNepaliDate(pickerIndex, dayIndex);
    
    // 6. Family members (if applicable)
    cy.fillFamilyMember(memberIndex, data.member);
    
    // 7. Upload documents
    cy.get(ALIAS.docField).selectFile("cypress/fixtures/files/file.jpg", { force: true });
    
    // 8. Submit with confirmation modal
    cy.submitFormWithConfirmation();
  });
});
```

## Available Custom Commands

| Command | Usage | Purpose |
|---------|-------|---------|
| `cy.navigateToForm(formName)` | `cy.navigateToForm("Form Name")` | Login + navigate to form |
| `cy.searchAndSelectUser(name)` | `cy.searchAndSelectUser("Rajiv Sapkota")` | Search and select user |
| `cy.selectNepaliDate(pickerIdx, dayIdx)` | `cy.selectNepaliDate(0, 9)` | Select Nepali calendar date |
| `cy.fillFamilyMember(idx, data)` | `cy.fillFamilyMember(0, data.grandfather)` | Fill family member details |
| `cy.fillPersonDetails(idx, data)` | `cy.fillPersonDetails(0, data.person)` | Fill person's first/middle/last name |
| `cy.submitFormWithConfirmation()` | `cy.submitFormWithConfirmation()` | Submit + confirm modal |
| `cy.getByLabel(text)` | `cy.getByLabel("First Name")` | Find input by label |


## Critical Patterns

### 1. User Search (ALWAYS use this pattern)
```javascript
cy.searchAndSelectUser("Rajiv Sapkota");
// Handles extra spaces and phone numbers in dropdown
```

### 2. Nepali Date Picker (Use custom command)
```javascript
cy.selectNepaliDate(0, 9);  // pickerIndex, dayIndex
```

### 3. Cascading Dropdowns (Province/District/Local/Ward)
```javascript
cy.get("select").eq(3).select(data.address.province, { force: true });
cy.wait(1500);  // MUST wait for next dropdown to populate
cy.get("select").eq(4).should("not.be.disabled").select(data.address.district, { force: true });
cy.wait(1500);
// ... continue pattern
```

### 4. Form Submission (CRITICAL - Two-step process)
```javascript
cy.submitFormWithConfirmation();
// This clicks "Apply" then "Submit" in confirmation modal
// DO NOT verify success message
```

## Locators File Template

```javascript
const ALIAS = {
  // Navigation (standard for all forms)
  menuItem: "Exact Form Name from Menu",
  applyHeading: "Apply Sifarish",
  
  // Search User (standard for all forms)
  searchRadio: 'input[type="radio"][value="search"]',
  searchInput: 'input[placeholder="Search User"]',
  wardSelect: "select",
  
  // Form-specific sections
  sectionName: "Section Heading Text",
  inputField: 'input[placeholder="Placeholder Text"]',
  
  // Nepali Date Pickers (if form has them)
  nepaliDatePicker: "input.nepali-date-picker",
  datePickerBody: "tbody",
  datePickerDay: "td.month-day.current",
  
  // Documents (customize field names)
  docField: 'input[name="Document_Field_Name"]',
  
  // Submit (standard for all forms)
  submitButton: 'button[type="submit"]',
  successMessage: "Application Submitted"
};

export default ALIAS;
```

## Data File Template

```javascript
const [formName]Data = {
  userSearch: "Rajiv Sapkota",  // Always this user
  ward: "10",                    // Adjust as needed
  
  // Use Nepali Unicode for Nepali forms
  applicant: {
    firstName: "सुमन",
    middleName: "प्रसाद",
    lastName: "श्रेष्ठ",
    citizenshipNumber: "२७-०१-७५-०१२३४",
    nationalId: "१२३४५६७८९०",
    gender: "पुरुष"
  },
  
  address: {
    province: "बागमती",
    district: "28",  // Use index if needed
    tole: "बानेश्वर"
  },
  
  // Family members (if applicable)
  grandfather: {
    firstName: "हरि",
    middleName: "",
    lastName: "श्रेष्ठ"
  },
  
  father: {
    firstName: "राम",
    middleName: "",
    lastName: "श्रेष्ठ"
  },
  
  reason: "नेपाली कारण यहाँ लेख्नुहोस्।"
};

export default [formName]Data;
```

## Nepali Unicode Reference

| English | Nepali | Use Case |
|---------|--------|----------|
| Male | पुरुष | Gender |
| Female | महिला | Gender |
| Bagmati | बागमती | Province |
| Numbers 0-9 | ०१२३४५६७८९ | IDs, numbers |

## Common Mistakes to Avoid

❌ **DON'T**:
- Use exact text matching for user selection
- Forget the confirmation modal submit button
- Skip waits for cascading dropdowns
- Use English data for Nepali forms
- Verify success message (user removed this)
- Use `.eq()` without verifying the index

✅ **DO**:
- Use custom commands for repeated tasks
- Add `{ force: true }` for selects/radios
- Wait 1500ms between cascading dropdown selections
- Clear inputs before typing
- Use Nepali Unicode for Nepali forms
- Add descriptive comments

## Questions to Ask User Before Starting

1. **Form name** as it appears in the menu?
2. **Language**: Nepali or English?
3. **Nepali date pickers**: How many?
4. **Documents**: What needs to be uploaded?
5. **Cascading dropdowns**: Province/District/etc.?
6. **Family sections**: Grandfather/Father/etc.?

## Available Upload Files

Located in `cypress/fixtures/files/`:
- `citizenship.jpg` - Citizenship certificate
- `letter.pdf` - Application letter  
- `proof.jpg` - Supporting documents

## Example: Before/After Custom Commands

### Before (Verbose)
```javascript
cy.get(DDA.nepaliDatePicker).eq(0).click();
cy.get(DDA.datePickerBody).should("be.visible");
cy.get(DDA.datePickerDay).eq(9).click();
cy.wait(500);
```

### After (Clean)
```javascript
cy.selectNepaliDate(0, 9);
```

## Success Criteria

✅ Test navigates to correct form  
✅ Selects "Rajiv Sapkota" successfully  
✅ Fills all required fields with appropriate data  
✅ Handles Nepali date pickers correctly  
✅ Uploads all required documents  
✅ Submits form with confirmation modal  
✅ Code is clean and uses custom commands  
✅ Follows established naming conventions  

## Reference Implementation
See `cypress/e2e/diffrenetDOB.cy.js` for complete working example.

## Additional Documentation
- Full guide: `AUTOMATION_GUIDE.md`
- Quick reference: `QUICK_REFERENCE.md`
