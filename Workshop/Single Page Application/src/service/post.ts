export class PostService {
    constructor(private baseUrl: string) {}

    async fetchPostById(id: string) {
        const url = `${this.baseUrl}/post/${id}`;
        // Подобна логика за fetchByUrl
        console.log(`Fetching post with ID: ${id}`);
    }
}
