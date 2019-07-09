import HomePage from './../../pages/home.po';

describe("Login", function() {
    
    before(function() {
        cy.fixture("../fixtures/users.json").as("users");
    })

    describe("Login to Utarel", function() {

        beforeEach(function() {
            cy.visit(Cypress.env('baseUrl'), {
                auth: this.users.serverAuth
            });  
        })

        it("should sucessfully login", function() {
            const homePage = new HomePage();
            const inbox = homePage.goToSignInPage()
                .login(this.users.mainUser);
            cy.get(inbox.pageTitle).should('be.visible');
        })

        it("should show an error for invalid credentials", function() {
            const homePage = new HomePage();
            homePage.goToSignInPage()
                .login(this.users.ivalidUser);
            cy.contains('Please check your email/password and try again')
                .should('be.visible');
        })
    })    
})