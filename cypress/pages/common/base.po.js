class BasePage {
    pageTitle;

    constructor() {
        this.pageTitle = 'h2.inbox-title';
    }

    now() {
        return Date.now();
    }
}

export default BasePage;