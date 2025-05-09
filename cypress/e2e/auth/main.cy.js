import loginPage from '../../pageObjectModel/pages/LoginPage' 
import invalidLogin from '../../pageObjectModel/pages/invalidLogin'
import addToCart from '../../pageObjectModel/pages/addToCart'
import urlCheck from '../../pageObjectModel/pages/urlCheck';

describe('Login Tests',() => {
    before(() => {
        cy.viewport(1920,1080)
    })
    
    it('should handle invalid login and then valid login',() => {
        cy.visit('https://saucedemo.com')

        const AddToCart = new addToCart();
        const UrlCheck = new urlCheck();
        const PageLogin = new loginPage();
        const InvalidLogin = new invalidLogin();
        // First test invalid login
        InvalidLogin.invalidLogin();
        cy.reload();
        PageLogin.loginPage();

        UrlCheck.urlCheck();
        AddToCart.addToCart();

    })
});