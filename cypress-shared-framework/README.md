# @cypress-shared/framework

A generic, enterprise-grade Cypress framework package designed for reuse across multiple projects.

## 🚀 Features

- **BasePage Abstraction**: Enforces stability checks on page transitions.
- **Typed Custom Commands**: IntelliSense-ready commands like `cy.getByLabel`.
- **Data Factory**: Consistent test data generation using Faker.
- **BaseAPI**: (Coming Soon) Standardized API testing wrapper.

## 📦 Installation

This package is designed to be consumed as a library.

```bash
npm install --save-dev @cypress-shared/framework
```

## 🔧 Peer Dependencies

Ensure your project has the following installed:

- `cypress`: >=10.0.0
- `@faker-js/faker`: >=8.0.0
- `dotenv`: >=16.0.0

## 🛠 Usage

### 1. Register Commands

In your `cypress/support/e2e.ts`:

```typescript
import '@cypress-shared/framework/dist/commands';
```

### 2. Extend BasePage

```typescript
import { BasePage } from '@cypress-shared/framework';

export class LoginPage extends BasePage {
  constructor() {
    super('/login');
  }

  waitForLoad(): void {
    cy.get('form').should('be.visible');
  }
}
```

### 3. Use Data Factory

```typescript
import { DataFactory } from '@cypress-shared/framework';

const user = DataFactory.generateUser();
cy.get('#email').type(user.email);
```

## 🏗 Development

```bash
npm run build
```
