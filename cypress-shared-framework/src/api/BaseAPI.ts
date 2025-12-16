/**
 * Abstract BaseAPI class for handling API requests.
 * Standardizes token management and error handling.
 */
export abstract class BaseAPI {
    protected baseUrl: string;

    constructor(baseUrl: string = Cypress.env('API_URL') || '') {
        this.baseUrl = baseUrl;
    }

    /**
     * Generic GET request
     */
    protected get(endpoint: string, headers: object = {}) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}${endpoint}`,
            headers: { ...this.defaultHeaders(), ...headers },
            failOnStatusCode: false,
        });
    }

    /**
     * Generic POST request
     */
    protected post(endpoint: string, body: object, headers: object = {}) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}${endpoint}`,
            body,
            headers: { ...this.defaultHeaders(), ...headers },
            failOnStatusCode: false,
        });
    }

    /**
     * Standard headers (e.g., Authorization)
     * Override this in subclasses if needed.
     */
    protected defaultHeaders() {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('API_TOKEN')}`,
        };
    }
}
