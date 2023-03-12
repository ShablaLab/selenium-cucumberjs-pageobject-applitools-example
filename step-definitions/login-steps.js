/* eslint-disable require-jsdoc */
module.exports = async function () {

    this.Given(/^I am on the login home page$/, async function () {
        await helpers.loadPage(page.demoLogin.url);
    });

    this.When(/^I login with username as "([^"]*)" and password as "([^"]*)"$/, async function (user, pass) {
        if (global.eyesKey !== '') {
            eyes.checkWindow('Landing Page');
        }
        await page.demoLogin.login(user, pass);
    });

    this.Then(/^I should be able to login successfully$/, async function () {
        await page.demoLogin.loginShouldbeSuccessful();
    });
};
