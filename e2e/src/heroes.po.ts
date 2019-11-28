import {browser, by} from 'protractor';

export class HeroesPage {
  navigateTo() {
    browser.get('/heroes');
    return this;
  }

  inputHero(name: string) {
    browser.findElement(by.id('heroNameInput'))
      .sendKeys(name);
    return this;
  }

  clickAddHero() {
    browser.findElement(by.id('heroAddButton')).click();
    return this;
  }

  clickDeleteHero(name: string) {
    browser.findElement(by.css(`[title]=${name}`)).click();
    return this;
  }

  expectHeroToBePresent(name: string) {
    expect(browser.findElement(by.cssContainingText('.hero-name', name))).toBeTruthy();
    return this;
  }

  expectHeroToBeAbsent(name: string) {
    expect(browser.findElement(by.cssContainingText('.hero-name', name))).toBeFalsy();
    return this;
  }
}
