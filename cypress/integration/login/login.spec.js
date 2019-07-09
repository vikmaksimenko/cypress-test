

import HomePage from './../../pages/home.po';

describe("Login", function() {
    
    before(function() {
        cy.fixture("../fixtures/data.json").as("data");
        cy.fixture("../fixtures/users.json").as("users");
    })

    describe("Login to Utarel", function() {

        beforeEach(function() {
            cy.visit(this.data.baseURL);     
        })

        it("should sucessfully login", function() {
            const homePage = new HomePage();
            const inbox = homePage.goToSignInPage()
                .login(this.users.mainUser.email, this.users.mainUser.password);
            cy.get(inbox.pageTitle).should('contain', 'Inbox');
        })

        it("should show an error for invalid credentials", function() {
            const homePage = new HomePage();
            const inbox = homePage.goToSignInPage()
                .login(this.users.ivalidUser.email, this.users.ivalidUser.password);
            cy.contains('Please check your email/password and try again')
                .should('be.visible');
        })
    })    
})