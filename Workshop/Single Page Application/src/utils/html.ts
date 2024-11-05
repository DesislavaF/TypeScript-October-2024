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
        //
    };
}

