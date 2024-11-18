import { fetchByUrl } from "../utils/http";


export class UserService {
    constructor(baseUrl: string) {
        const url = `${baseUrl}/posts`;
        const result = fetchByUrl(url)
        console.log(result)
    }
}