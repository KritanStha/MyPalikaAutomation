/**
 * Utility for handling stability and retry logic.
 */
export class RetryHelper {
    /**
     * Retries a function until it succeeds or times out.
     * Useful for flaky non-Cypress actions (e.g., file system checks, DB calls).
     * 
     * @param fn - The function to retry. Must throw error on failure.
     * @param retries - Number of retries.
     * @param delay - Delay between retries in ms.
     */
    static async withRetry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
        try {
            return await fn();
        } catch (error) {
            if (retries <= 0) throw error;
            await new Promise((res) => setTimeout(res, delay));
            return this.withRetry(fn, retries - 1, delay);
        }
    }
}
