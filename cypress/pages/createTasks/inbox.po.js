import BasePage from '../common/base.po';

class InboxPage extends BasePage {
    taskNameField;
    addButton;
    pencilIcon;

    constructor() {
        super()
        this.taskNameField = "#task-name-input";
        this.addButton = "button[type='submit']";
        this.pencilIcon = ".fa-pencil";
    }

    addTask(taskName) {
        cy.get(this.taskNameField).as("Task Name Field").type(taskName);
        cy.get(this.addButton).as("Add Task Button").click();
        return new InboxPage();
    }

    openEditTaskModal(taskName) {
        cy.contains(taskName)
            .siblings(".edit-task-btn")
            .invoke('show')
            .as("Edit Button").click();     
    }
}
export default InboxPage;