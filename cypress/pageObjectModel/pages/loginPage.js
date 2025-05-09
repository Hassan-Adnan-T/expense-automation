class Login{    
    loginPage(){
        cy.fixture('credentials').then((creds) => {


            cy.get('[data-test="username"]').type(creds.username).should('have.value', creds.username)
            cy.get('[data-test="password"]').type(creds.password).should('have.value', creds.password)
            cy.get('[data-test="login-button"]').click()

            cy.url().should('include', '/inventory.html')
            cy.get('.inventory_list').should('be.visible') 
            cy.contains('Products').should('exist')  
        }
    )}
}   

export default Login;