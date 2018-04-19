import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickLogin() {
    let loginButton = element(by.css(".form button"));
    loginButton.click();
    return browser.driver.wait(function (data) {
      return browser.driver.getCurrentUrl().then(result => {
        return result;
      });
    }, 10000);
  }
}
