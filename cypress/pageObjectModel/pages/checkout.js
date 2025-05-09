import urlCheck from "./urlCheck";

const  UrlCheck = new urlCheck;

class Checkout{

    checkout(){
        cy.get('[data-test="shopping-cart-link"]').click();
        UrlCheck.cartUrlCheck();

        cy.contains('[data-test="inventory-item-name"]', 'Backpack');

        cy.get('[data-test="checkout"]').click();
        UrlCheck.checkoutUrlCheck();
    }
}

export default Checkout;