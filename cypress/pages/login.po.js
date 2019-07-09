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

    login(username, password) {
        this._setCredentials(username, password);
        return new InboxPage();
    }

    loginIncorrect(username, password) {
        this._setCredentials(username, password);
        return this;
    }

    _setCredentials(username, password) {
        cy.get(this.usernameField).as('User Name Field').type(username);
        cy.get(this.passwordField).as('Password Field').type(password);
        cy.get(this.submitButton).as('Submit Button').click();
    }
}

export default LoginPage;