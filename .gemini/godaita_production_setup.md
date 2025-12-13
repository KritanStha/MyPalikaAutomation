# Disability Godaita - Production Environment Setup

## Automatic Production Environment

The `disabilityGodaita.cy.js` test is configured to **automatically use the production environment**.

## How It Works

### 1. **NPM Scripts (Recommended)**

We've added dedicated npm scripts that automatically set the production environment:

```bash
# Run Godaita test in production (headless)
npm run test:godaita

# Run Godaita test in production (headed - visible browser)
npm run test:godaita:headed
```

### 2. **What Happens Behind the Scenes**

When you run `npm run test:godaita`, it:

1. ✅ Sets `USE_PRODUCTION_ENV=true`
2. ✅ Loads `.env.production` file
3. ✅ Uses production BASE_URL, credentials
4. ✅ Runs only the `disabilityGodaita.cy.js` test

### 3. **Manual Command (Alternative)**

If you prefer to run the command directly:

```bash
# Windows
set USE_PRODUCTION_ENV=true&& npx cypress run --spec "cypress/e2e/disabilityGodaita.cy.js"

# Linux/Mac
USE_PRODUCTION_ENV=true npx cypress run --spec "cypress/e2e/disabilityGodaita.cy.js"
```

## Environment Files

### `.env` (Testing Environment)
```env
BASE_URL=https://demo.admin.mypalika.com
USER_EMAIL=your-test-email@example.com
PASSWORD=your-test-password
```

### `.env.production` (Production Environment)
```env
BASE_URL=https://admin.mypalika.com
USER_EMAIL=your-production-email@example.com
PASSWORD=your-production-password
```

## Test File Configuration

The `disabilityGodaita.cy.js` file includes a `before` hook that logs the environment:

```javascript
describe("Disability Application - Godaita (Production)", () => {
    // Set environment to production before running tests
    before(() => {
        Cypress.env('ENV', 'production');
        cy.log('Environment set to: production');
    });
    
    // ... rest of the test
});
```

## All Available Scripts

| Script | Environment | Description |
|--------|-------------|-------------|
| `npm test` | Testing | Run all tests in testing environment |
| `npm run cy:open` | Testing | Open Cypress UI in testing environment |
| `npm run test:production` | Production | Run all tests in production |
| `npm run open:production` | Production | Open Cypress UI in production |
| **`npm run test:godaita`** | **Production** | **Run Godaita test (headless)** |
| **`npm run test:godaita:headed`** | **Production** | **Run Godaita test (visible browser)** |

## Quick Reference

### Testing Environment Tests

```bash
# Regular disability test (testing environment)
npx cypress run --spec "cypress/e2e/disability.cy.js"

# Or open Cypress UI
npm run cy:open
```

### Production Environment Tests

```bash
# Godaita disability test (production environment)
npm run test:godaita

# Or with visible browser
npm run test:godaita:headed
```

## Verification

When the test runs, you'll see in the Cypress log:

```
✓ Environment set to: production
```

And the test will use:
- ✅ Production BASE_URL from `.env.production`
- ✅ Production credentials
- ✅ Production-specific form fields (birth registration)

## Important Notes

1. **Always use `npm run test:godaita`** for the production Godaita test
2. **Never manually change** the environment in the test file
3. **Keep `.env.production` secure** - don't commit to git
4. **Verify** you're in the right environment by checking the BASE_URL in Cypress logs

## Troubleshooting

### Issue: Test uses wrong environment

**Solution:** Make sure you're using the npm script:
```bash
npm run test:godaita
```

### Issue: Can't find .env.production

**Solution:** Create the file in the project root:
```bash
# Copy from .env and update values
cp .env .env.production
```

### Issue: Wrong credentials

**Solution:** Check `.env.production` has correct production credentials

## Summary

🎯 **Simple Rule:** 

- **Testing environment** → Use `disability.cy.js`
- **Production environment** → Use `npm run test:godaita`

The scripts handle everything automatically! 🚀
