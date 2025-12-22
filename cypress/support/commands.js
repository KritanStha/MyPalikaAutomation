import 'cypress-file-upload';

Cypress.Commands.add("login", (email = Cypress.env("USER_EMAIL"), password = Cypress.env("PASSWORD")) => {
  cy.visit("/admin-login");
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
Cypress.Commands.add("loginSocialServices", (email = Cypress.env("USER_EMAIL"), password = Cypress.env("PASSWORD")) => {
  cy.visit("/admin-login");
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

  cy.get('button').contains('Social Services').then($btn => {
    const isExpanded = $btn.attr('aria-expanded') === 'true';

    if (!isExpanded) {
      cy.wrap($btn).click({ force: true });
      cy.wait(500);
    }
  });
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
  cy.get("input[placeholder='Search applications...']").click().clear().type(formName);
  cy.contains(formName).click();
});
// Search and select a user from the dropdown
Cypress.Commands.add("searchAndSelectUser", (userName) => {
  const searchText = userName.split(" ")[0];

  // Type into Search User input
  cy.get('input[placeholder="Search User"]')
    .scrollIntoView()
    .should('be.visible')
    .clear()
    .type(searchText, { delay: 100 });

  // Select the filtered user
  cy.get('button.chakra-menu__menuitem', { timeout: 10000 })
    .should('be.visible')
    .contains(userName)
    .click();
});


// Select a date from Nepali date picker
// Select a date from Nepali date picker
// pickerIndex: Index of the date picker on the page OR relative to scope if chained
// dayIndex: Index of the clickable day element to select (e.g. 5 for the 6th available day)
Cypress.Commands.add("selectNepaliDate", (pickerIndex, dayIndex) => {
  cy.get(".nepali-date-picker input").eq(pickerIndex).click({ force: true });
  cy.get("tbody").should("be.visible");
  // Select a day that is NOT 'disabled' or 'future' if possible, but for now we stick to the requested index
  // Ensuring we select a day from the currently visible month
  cy.get("td.month-day").not(".old").not(".future").eq(dayIndex).click({ force: true });
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
    .clear({ force: true })
    .type(personData.firstName, { force: true });
  cy.get('input[placeholder="Write your Middle Name"]').eq(personIndex).clear({ force: true });
  if (personData.middleName) {
    cy.get('input[placeholder="Write your Middle Name"]')
      .eq(personIndex)
      .type(personData.middleName, { force: true });
  }
  cy.get('input[placeholder="Write your Last Name"]')
    .eq(personIndex)
    .clear({ force: true })
    .type(personData.lastName, { force: true });
});

