class UrlCheck{

    urlCheck(){
        cy.url().should('include', "/inventory.html")
    }
    
}

export default UrlCheck;