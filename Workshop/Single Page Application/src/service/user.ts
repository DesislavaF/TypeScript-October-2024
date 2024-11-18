import { fetchByUrl } from "../utils/http";

export class UserService {
    constructor(private baseUrl: string) {}

    async fetchPosts() {
        const url = `${this.baseUrl}/post`;
        try {
            const result = await fetchByUrl(url); // Асинхронна заявка
            console.log(result);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }
}
