import InboxPage from "../createTasks/inbox.po"

class NavigationBar {
    createTasksItem;
    creteTaskInInboxSubItem;
    creteTaskInProjectSubItem;

    viewTasksItem;
    settingsItem;

    constructor() {
        this.createTasksItem = "Create Tasks";
        this.creteTaskInInboxSubItem = "a[href='/inbox']";
        this.creteTaskInProjectSubItem = "a[href='/create-task-in-project']";

        this.viewTasksItem = "View Tasks";
        this.settingsItem = "Settings";
    }

    openInbox() {
        cy.contains(this.createTasksItem).as("Create Tasks Dropdown").click();
        cy.get(this.creteTaskInInboxSubItem).as("Create Task in Inbox").click();
        return new InboxPage();
    }
    
}
export default NavigationBar;