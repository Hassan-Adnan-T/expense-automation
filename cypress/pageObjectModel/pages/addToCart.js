class AddToCart{
    addToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    }
}

export default AddToCart;