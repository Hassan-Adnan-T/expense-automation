import urlCheck from "./urlCheck"



class FillForm{
    
    fillForm(){
        const UrlCheck = new urlCheck;
        cy.fixture('info').then((info) => {
            cy.get('[data-test="firstName"]').type(info.firstname).should('have.value', info.firstname)
            cy.get('[data-test="lastName"]').type(info.lastname).should('have.value', info.lastname)
            cy.get('[data-test="postalCode"]').type(info.zip).should('have.value', info.zip)

            cy.get('[data-test="continue"]').click();
            UrlCheck.overviewUrlCheck();
            
            cy.get('[data-test="finish"]').click();

            UrlCheck.completeUrlCheck();
            cy.get('[data-test="complete-header"]').contains("Thank you for your order!")
        })
    }
}

export default FillForm;
