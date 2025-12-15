// Load email + password from Cypress.env()
Cypress.Commands.add(
  "login",
  (
    email = Cypress.env("email"),
    password = Cypress.env("password")
  ) => {
    cy.visit("/");

    /*cy.contains("h2.chakra-heading", /Administrative|प्रशासन शाखा/, {
      timeout: 15000,
    })
      .should("be.visible")
      .click({ force: true });*/

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

    /*cy.contains("button", "Sifarish").then(($btn) => {
      if ($btn.attr("aria-expanded") !== "true") {
        cy.wrap($btn).click();
      }
    });

    cy.get('a[href="/admin-dashboard/application-apply"]', { timeout: 10000 })
      .should("be.visible")
      .click();*/
  }
);
Cypress.Commands.add("selectNepaliDate", (pickerIndex, dayIndex) => {
  cy.get("input.nepali-date-picker").eq(pickerIndex).click();
  cy.get("tbody").should("be.visible");
  cy.get("td.month-day.current").eq(dayIndex).click();
});

Cypress.Commands.add(
  "UserLogin",
  (
    email = Cypress.env("email"),
    password = Cypress.env("password")
  ) => {
    cy.visit("/");

    /*cy.contains("h2.chakra-heading", /Administrative|प्रशासन शाखा/, {
      timeout: 15000,
    })
      .should("be.visible")
      .click({ force: true });*/

    cy.get("form", { timeout: 15000 }).should("be.visible");

    cy.get('input[name="userEmailPhone"]')
      .clear()
      .type(email, { delay: 5 });

    cy.get('input[name="password"]')
      .clear()
      .type(password, { log: false, delay: 5 });

    cy.get('button[type="submit"]').click({ timeout: 10000 });

    cy.contains(/dashboard|admin|ड्यासबोर्ड|प्रशासन/i, {
      timeout: 15000,
    }).should("exist");

    cy.get('span.chakra-avatar img[alt="EN"]').click();

    /*cy.contains("button", "Sifarish").then(($btn) => {
      if ($btn.attr("aria-expanded") !== "true") {
        cy.wrap($btn).click();
      }
    });

    cy.get('a[href="/admin-dashboard/application-apply"]', { timeout: 10000 })
      .should("be.visible")
      .click();*/
  }
);


// For file uploads
import "cypress-file-upload";
