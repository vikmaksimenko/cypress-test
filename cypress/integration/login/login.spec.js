import HomePage from '../../pages/home/home.po';

let homePage;

describe("Login", function() {
    
    before(function() {
        cy.fixture("../fixtures/users.json").as("users");
    })

    describe("Login to Utarel", function() {

        beforeEach(function() {
            cy.visit(Cypress.env('baseDevUrl'), {
                auth: this.users.serverAuth
            });  
            homePage = new HomePage();
        })

        it("should sucessfully login", function() {
            const inbox = homePage.goToSignInPage()
                .login(this.users.mainUser);
            cy.get(inbox.pageTitle).should('be.visible');
        })

        it("should show an error for invalid credentials", function() {
            homePage.goToSignInPage()
                .login(this.users.ivalidUser);
            cy.contains('Please check your email/password and try again')
                .should('be.visible');
        })
    })    
})