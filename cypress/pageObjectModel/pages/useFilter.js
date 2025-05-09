class UseFilter{
    
    useFilter(){
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]')
    }
}

export default UseFilter;