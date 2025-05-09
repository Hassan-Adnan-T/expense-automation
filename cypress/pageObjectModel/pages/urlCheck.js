class UrlCheck{

    urlCheck(){
        cy.url().should('include', "/inventory.html")
    }
    
    cartUrlCheck(){
        cy.url().should('include', "/cart.html")
    }

    checkoutUrlCheck(){
        cy.url().should('include', "/checkout-step-one.html")
    }

    overviewUrlCheck(){
        cy.url().should('include', "/checkout-step-two.html")
    }

    completeUrlCheck(){
        cy.url().should('include', "/checkout-complete.html")
    }

}

export default UrlCheck;