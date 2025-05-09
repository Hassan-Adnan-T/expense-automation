class InvalidLogin{
    invalidLogin(){
        cy.fixture('invalidCredentials').then((invalidcreds) => {

            cy.get('[data-test="username"]').type(invalidcreds.invalidUsername)
            cy.get('[data-test="password"]').type(invalidcreds.invalidPass)
            cy.get('[data-test="login-button"]').click()

            cy.get('[data-test="error"]')
                .should('be.visible')
                .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    }
}

export default InvalidLogin;