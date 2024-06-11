import { API_URL, API_KEY } from './constants.js';

export class CalendarAPI {
    #apiKey;
    #apiUrl;
    #abortController;
    #isLoading;
    constructor() {
        this.#apiKey = API_KEY;
        this.#apiUrl = API_URL;
        this.#abortController = null;
        this.#isLoading = false;
    }

    getData = async () => {
        this.#isLoading = true;

        const abortController = new AbortController();

        if (this.#abortController) {
            this.#abortController.abort();
        }

        const signal = abortController.signal;
        this.#abortController = abortController;

        try {
            const response =
                await fetch(`${this.#apiUrl}?api_key=${this.#apiKey}&country=US&year=2023`, {
                    signal
                });
            return await response.json();
        } catch (error) {
            throw new Error(error);
        } finally {
            this.#isLoading = false;
        }
    }
}
