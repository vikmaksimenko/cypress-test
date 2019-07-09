describe("Inbox tab", function() {
    
    before(function() {
        cy.fixture("../fixtures/users.json").as("users");
    })

    describe("Task management", function() {

        before(function() {
            cy.login(this.users.mainUser);
        })
        
        it("should create new task", function() {
        
        })
    })

    
})