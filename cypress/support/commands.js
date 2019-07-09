Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: '',
        body: {
            user: {
                email,
                password
            }
        }

    }).then((resp) => {
        windwow.localStorage.setItem('token', resp.body.user.token)
    })
})