Cypress.Commands.add('login', (user) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseAPIUrl') + '/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: user
    }).then((resp) => {
        cy.setCookie("access_token", resp.body.access_token)
    })
})

// Cypress.Commands.overwrite('visit', ((orig, url, options) => {
//     const URL = Cypress.env('baseURL') + url;
//     const auth = {
//       username : 'dev-utarel1',
//       password : 'dev-utarel1'
//     }
  
//     if (options) {
//       options.auth = auth;
//     } else {
//       options = {
//         auth
//       }
//     }
    
//     return orig(URL, options);
// }))