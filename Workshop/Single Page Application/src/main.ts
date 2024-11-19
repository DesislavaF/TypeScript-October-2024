import { PostService } from "./service/post";
import { CONFIG } from './constant';
import { UserService } from "./service/user";
import './style.css';
import { HtmlUtil } from './utils/html';

const { baseURL } = CONFIG;

const userService = new UserService(baseURL);
const postService = new PostService(baseURL);


const app = document.querySelector<HTMLDivElement>('#app');
HtmlUtil.render(app);



