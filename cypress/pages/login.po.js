import InboxPage from './inbox.po';

class LoginPage {
    usernameField;
    passwordField;
    submitButton;

    constructor() {
        this.usernameField = '#emailInput';
        this.passwordField = '#passwordInput';
        this.submitButton = '.login-btn';
    }

    login({email, password}) {
        this._setCredentials(email, password);
        return new InboxPage();
    }

    loginIncorrect(email, password) {
        this._setCredentials(email, password);
        return this;
    }

    _setCredentials(email, password) {
        cy.get(this.usernameField).as('User Name Field').type(email);
        cy.get(this.passwordField).as('Password Field').type(password);
        cy.get(this.submitButton).as('Submit Button').click();
    }
}

export default LoginPage;