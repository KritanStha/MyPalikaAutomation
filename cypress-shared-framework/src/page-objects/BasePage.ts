/**
 * Abstract BasePage class that all Page Objects should extend.
 * Enforces a structure where every page must define:
 * 1. A URL constructor (optional)
 * 2. A mechanism to wait for the page to be fully loaded.
 */
export abstract class BasePage {
    protected url: string;

    constructor(url: string = '') {
        this.url = url;
    }

    /**
     * Visits the page URL and waits for load.
     */
    visit(): void {
        if (!this.url) {
            throw new Error('URL not defined for this page object.');
        }
        cy.visit(this.url);
        this.waitForLoad();
    }

    /**
     * ABSTRACT: Must be implemented by the subclass.
     * Define distinct criteria that confirm this page is ready for interaction.
     * Example: cy.get('#main-content').should('be.visible');
     */
    abstract waitForLoad(): void;

    /**
     * Helper to get element by data-testid
     */
    protected getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-testid="${testId}"]`);
    }
}
