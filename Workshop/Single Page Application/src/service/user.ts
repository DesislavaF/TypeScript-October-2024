import { fetchByUrl } from "../utils/http";
import { HttpService } from "./http";


type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string
};

type UserDetails = {
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
} & User;


export class UserService extends HttpService<UserDetails> {
    constructor(baseUrl: string) {

        super(`${baseUrl}/users`)
    }
}


