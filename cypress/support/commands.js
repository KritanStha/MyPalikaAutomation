Cypress.Commands.add(
  "login",
  (email = Cypress.env("USER_EMAIL"), password = Cypress.env("PASSWORD")) => {
    cy.visit("/");
    cy.contains("h2.chakra-heading", /Administrative|प्रशासन शाखा/, {
      timeout: 15000,
    })
      .should("be.visible")
      .click({ force: true });

    cy.get("form", { timeout: 15000 }).should("be.visible");
    cy.get('input[name="email"]')
      .clear()
      .type(email, { delay: 5 });
    cy.get('input[name="password"]')
      .clear()
      .type(password, { log: false, delay: 5 });
    cy.get('button[type="submit"]').click();

    cy.contains(/dashboard|admin|ड्यासबोर्ड|प्रशासन/i, {
      timeout: 15000,
    }).should("exist");
    cy.get('span.chakra-avatar img[alt="Ryan Florence"]').click();
    cy.contains("button", "Sifarish").then(($btn) => {
      if ($btn.attr("aria-expanded") !== "true") {
        cy.wrap($btn).click();
      }
    });

    cy.get('a[href="/admin-dashboard/application-apply"]', { timeout: 10000 })
      .should("be.visible")
      .click();
  }
);

// Helper command to find input/select by label text
Cypress.Commands.add("getByLabel", (labelText) => {
  return cy.contains("label", labelText).then(($label) => {
    const forId = $label.attr("for");
    if (forId) {
      return cy.get(`#${forId}`);
    } else {
      // If no 'for' attribute, look for input/select that follows
      return cy.wrap($label).parent().find("input, select, textarea").first();
    }
  });
});

// Navigate to a specific form from the application page
Cypress.Commands.add("navigateToForm", (formName) => {
  cy.login();
  cy.contains(formName, { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.contains("Apply Sifarish").should("be.visible");
});

// Search and select a user from the dropdown
Cypress.Commands.add("searchAndSelectUser", (userName) => {
  cy.get('input[type="radio"][value="search"]').check({ force: true });
  cy.get('input[placeholder="Search User"]').click();
  cy.contains("button[role='menuitem']", userName).click({ force: true });
});

// Select a date from Nepali date picker
Cypress.Commands.add("selectNepaliDate", (pickerIndex, dayIndex) => {
  cy.get("input.nepali-date-picker").eq(pickerIndex).click();
  cy.get("tbody").should("be.visible");
  cy.get("td.month-day.current").eq(dayIndex).click();
});

// Fill family member details (grandfather, father, etc.)
Cypress.Commands.add("fillFamilyMember", (memberIndex, memberData) => {
  cy.get('input[placeholder="Write first name"]')
    .eq(memberIndex)
    .clear()
    .type(memberData.firstName);
  cy.get('input[placeholder="Write middle name"]').eq(memberIndex).clear();
  if (memberData.middleName) {
    cy.get('input[placeholder="Write middle name"]')
      .eq(memberIndex)
      .type(memberData.middleName);
  }
  cy.get('input[placeholder="Write last name"]')
    .eq(memberIndex)
    .clear()
    .type(memberData.lastName);
});

// Submit form with confirmation modal
Cypress.Commands.add("submitFormWithConfirmation", () => {
  cy.get('button[type="submit"]').contains("Apply").click();
  cy.contains("button", "Submit").click();
});

// Fill person details (first, middle, last name) by index
Cypress.Commands.add("fillPersonDetails", (personIndex, personData) => {
  cy.get('input[placeholder="Write your first Name"]')
    .eq(personIndex)
    .clear()
    .type(personData.firstName);
  cy.get('input[placeholder="Write your Middle Name"]').eq(personIndex).clear();
  if (personData.middleName) {
    cy.get('input[placeholder="Write your Middle Name"]')
      .eq(personIndex)
      .type(personData.middleName);
  }
  cy.get('input[placeholder="Write your Last Name"]')
    .eq(personIndex)
    .clear()
    .type(personData.lastName);
});

