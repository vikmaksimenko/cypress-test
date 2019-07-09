import LoginPage from './login.po';

class HomePage {
    signInButton;

    constructor() {
        this.signInButton = `a[href='/login']`;
        this.signUpButton = `href='/signup'`;
    }

    goToSignInPage() {
        cy.get(this.signInButton).as('Sign In Button').click();
        return new LoginPage();
    }

    goToSignUpPage() {
        cy.get(this.signUpButton).as('Sign Up Button'),click();
        
    }
}

export default HomePage;