import InboxPage from '../../pages/createTasks/inbox.po';
import NavigationBar from '../../pages/common/navbar';

describe("Inbox tab", function() {
    
    before(function() {
        cy.fixture("../fixtures/users.json").as("users");
    })

    describe("Task management", function() {

        beforeEach(function() {
            cy.login(this.users.mainUser).then(() => {
                cy.visit(Cypress.env('baseAppDevUrl'), {
                    auth: this.users.serverAuth
                });
            })
        })
        
        it("should create new task", function() {
            let nav = new NavigationBar();
            let taskName = "Task_" + Date.now();

            nav.openInbox()
                .addTask(taskName);
            cy.contains(taskName).should('be.visible');
        })

        it("should open edit task modal", function() {
            let nav = new NavigationBar();
            let taskName = "Task_" + Date.now();

            nav.openInbox()
                .addTask(taskName)
                .openEditTaskModal(taskName);
        })
    })

    
})