import NavigationBar from "./navbar";

class BasePage {
    header;
    pageTitle;

    constructor() {
        this.header = new NavigationBar();
        
        this.pageTitle = 'h2.inbox-title';
    }
}

export default BasePage;