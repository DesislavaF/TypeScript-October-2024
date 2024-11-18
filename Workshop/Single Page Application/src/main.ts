import { PostService } from "./service/post";
import { CONFIG } from './constant';
import { UserService } from "./service/user";
import './style.css';
import { HtmlUtil } from './utils/html';

const { baseURL } = CONFIG;

const userService = new UserService(baseURL);
userService.fetchPosts(); 

const postService = new PostService(baseURL);
postService.fetchPostById('1'); 

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
    HtmlUtil.render(app);
} else {
    console.error("Element #app not found.");
}
