import loginPage from '../../pageObjectModel/pages/LoginPage' 
import invalidLogin from '../../pageObjectModel/pages/invalidLogin'
import addToCart from '../../pageObjectModel/pages/addToCart'
import urlCheck from '../../pageObjectModel/pages/urlCheck';
import useFilter from '../../pageObjectModel/pages/useFilter';
import checkout from '../../pageObjectModel/pages/checkout';
import fillForm from '../../pageObjectModel/pages/fillForm';

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
        const UseFilter = new useFilter();
        const Checkout = new checkout();
        const FillForm = new fillForm();
        
        // First test invalid login
        InvalidLogin.invalidLogin();
        cy.reload();
        PageLogin.loginPage();

        UrlCheck.urlCheck();
        AddToCart.addToCart();

        UseFilter.useFilter();  

        Checkout.checkout();
        FillForm.fillForm();

    })
});