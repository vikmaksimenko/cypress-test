Cypress.Commands.add('login', (user) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseAPIUrl') + '/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: user
    }).then(resp => {
        cy.setCookie("access_token", resp.body.access_token);
    })
})