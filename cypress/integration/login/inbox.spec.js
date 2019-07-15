import InboxPage from '../../pages/createTasks/inbox.po';
import NavigationBar from '../../pages/common/navbar';

let taskName;
let inboxPage;

describe("Inbox tab", function() {
    
    before(function() {
        cy.fixture("../fixtures/users.json").as("users").then((users) => {
            cy.login(users.mainUser);
            cy.visit(Cypress.env('baseAppDevUrl'), {
                auth: users.serverAuth
            });      
        })      
    })

    describe("CRUD for task", function() {

        beforeEach(function() {
            inboxPage = new NavigationBar().openInbox();
        })
        
        it("should create new task", function() {
            taskName = "Task_" + Date.now();

            inboxPage.addTask(taskName);
            cy.contains(taskName).should('be.visible');
        })

        it("should edit task name", function() {
            inboxPage.addTask(taskName)
                .openEditTaskModal(taskName);
        })
    })

    describe("Move Task to Project", function() {

    })
})