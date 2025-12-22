# MyPalika Automation

This repository contains the Cypress automation test suite for **MyPalika**. It covers various "Sifarish" (Recommendation) and "Social Service" modules, ensuring robust testing of form submissions, validations, and workflows using English and Nepali data inputs.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Key Components](#key-components)

## Features

-   **End-to-End Testing**: comprehensive coverage of form workflows:
    -   **Sifarish**: Business Registration, Marriage Verification, Property Valuation, Weak Economic Status, etc.
    -   **Social Service**: Disability Application, Jestha Nagarik ID.
-   **Data-Driven**: centralized data management using `SData` (Shared Data) and `UData` (Unique Data) for scalability.
-   **Custom Data Generation**: integrated `fakerNepali.js` helper to generate localized data (Names, Addresses in Nepali/English).
-   **Robust Locator Strategy**: Page Object Model (POM) pattern separating locators from test logic.
-   **Custom Commands**: simplified interactions for date pickers (`cy.selectNepaliDate`), navigation (`cy.navigateToForm`), and more.
-   **Environment Support**: configured for both development and production environments.

## Prerequisites

-   **Node.js**: v14.0.0 or higher
-   **npm**: v6.0.0 or higher

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/KritanStha/MyPalikaAutomation.git
    cd MyPalikaAutomation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory if you need to override default timeouts or credentials (see `.env.example` if available, or ask a team member).

## Configuration

The project uses `cypress.config.js` for main configuration. Key settings (timeouts, viewport, base URL) can be adjusted there.

## Running Tests

### Open Cypress Test Runner (Interactive Mode)

To open the Cypress GUI and select tests to run manually:

```bash
npm run cy:open
# or
npx cypress open
```

### Run All Tests (Headless Mode)

To run all test suites in the command line:

```bash
npm test
# or
npx cypress run
```

### Run Specific Test Spec

To run a single test file (e.g., Marriage Verification):

```bash
npx cypress run --spec cypress/e2e/Sifarish/marriageVerification.cy.js
```

### Run in Production Mode

To run tests against the production environment:

```bash
npm run test:production
```

## Project Structure

```
MyPalika/
├── cypress/
│   ├── e2e/
│   │   ├── Sifarish/         # Tests for Recommendation forms
│   │   └── SocialService/    # Tests for Social Service forms
│   ├── fixtures/
│   │   ├── data/             # SData (Shared) and UData (Unique) input data
│   │   ├── files/            # Files for upload testing (images, pdfs)
│   │   └── Locators/         # Element selectors (POM)
│   └── support/
│       ├── commands.js       # Custom Cypress commands like selectNepaliDate
│       └── fakerNepali.js    # Data generator for Nepali inputs
├── .env                      # Environment variables
├── cypress.config.js         # Cypress configuration
└── package.json              # Project dependencies and scripts
```

## Key Components

### Data Management
-   **`SData_Version3.js`**: contains shared data reused across multiple tests (e.g., standard applicant details, permanent addresses).
-   **`UData_Version3.js`**: contains form-specific unique data (e.g., specific property values for valuation).

### Locators
-   Locators are stored in `cypress/fixtures/Locators/` to keep tests clean. Each test file imports its corresponding locator file.

### Custom Commands
-   **`cy.selectNepaliDate(pickerIndex, dayIndex)`**: Selects a date from the custom Nepali date picker widget.
-   **`cy.loginSocialServices()`**: Handles login logic for the portal.
-   **`cy.submitFormWithConfirmation()`**: Standardizes the submit and confirm workflow.

## Reporting

The project supports mochawesome reporting.
To generate a merged report after a run:

```bash
npm run report:full
```
