export class GitHub {
    constructor() {
        this.clientId = null;
        this.clientSecret = null;
    }

    async getUser(userName) {
        try {
            const data = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
            return await data.json();
        } catch (error) {
            throw new Error(error);
        }
    }
}
