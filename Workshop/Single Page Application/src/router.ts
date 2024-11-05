import { RouterMap } from "./type/router";
import { PostPage } from "./views/post";
import { userPage } from "./views/user";

export const router: RouterMap =  {
    "/": userPage,
    "/post": PostPage,
}