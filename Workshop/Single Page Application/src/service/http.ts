import { fetchByUrl } from "../utils/http";

export class HttpService<T> {
    apiUrl: string;
    data = {} as T;
    dataCollection = [] as T[];

    constructor (apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    creat() {}

    getOne() {}

    getAll() {
        return fetchByUrl(this.apiUrl);
    }

    update() {}

    delet() {}
}