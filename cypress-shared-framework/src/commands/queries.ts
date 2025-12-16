/// <reference types="cypress" />

/**
 * Custom Query Commands
 */

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Selects a form element by its label text.
             * 1. Finds label by text.
             * 2. Checks 'for' attribute.
             * 3. If no 'for', looks for nested input/select.
             * @example cy.getByLabel('Username').type('admin');
             */
            getByLabel(labelText: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.Commands.add('getByLabel', (labelText: string) => {
    return cy.contains('label', labelText).then(($label) => {
        const forId = $label.attr('for');
        if (forId) {
            return cy.get(`#${forId}`);
        } else {
            return cy.wrap($label).find('input, select, textarea').first();
        }
    });
});

export { }; // Make it a module
