import { router }  from "../router"

export abstract class HtmlUtil {
    static render(appDiv: HTMLElement | null) {
        if(!appDiv) {
            throw new Error("Missing root element!");
        }
    
        //Init and Handle Routing
        const { pathname } = window.location;
        const html = router[pathname];
        if (html) {
            appDiv.innerHTML = router[pathname];
        }

        //Mange Event Listeners
        HtmlUtil.addEventLisener(appDiv);
    }

    static addEventLisener(appDiv: HTMLElement | null) {
        // Capture HTML Elements
        const usersBtn: HTMLElement | null = document.getElementById("users");
        const postBtn: HTMLElement | null = document.getElementById("posts");

        // Attach the actual events
        if(usersBtn) {
            usersBtn.addEventListener('click', ()=> {
                HtmlUtil.navigate(appDiv, "/");
            })
        }

        if(postBtn) {
            postBtn.addEventListener('click', ()=> {
                HtmlUtil.navigate(appDiv, "/post");
            })
        }
        
    };

    static navigate(appDiv: HTMLElement | null, pathname: string){
        const { origin } = window.location;
        const url = `${origin}${pathname}`;

        // to change url
        window.history.pushState({}, pathname, url);

        // to render content
        if (appDiv) {
            appDiv.innerHTML = router[pathname];
        }
        
    }
}

