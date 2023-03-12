module.exports = {

    url: 'https://www.saucedemo.com/',

    elements: {
        menuItem: 'nav[role="navigation"] ul li a',
        productItem: 'main .pitem a',
        userText: by.id('user-name'),
        passwordText: by.id('password'),
        loginBtn: by.id('login-button'),
        shoppingCart: by.id('shopping_cart_container')
    },

    login: async function (username, password) {
        await helpers.waitForElementLocated(page.demoLogin.elements.userText);
        await driver.findElement(page.demoLogin.elements.userText).sendKeys(username);
        await driver.findElement(page.demoLogin.elements.passwordText).sendKeys(password);
        await driver.findElement(page.demoLogin.elements.loginBtn).click();
    },

    loginShouldbeSuccessful: async function () {
        await helpers.waitForElementLocated(page.demoLogin.elements.shoppingCart);
    }
};
