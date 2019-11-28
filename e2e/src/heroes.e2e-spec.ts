import {HeroesPage} from './heroes.po';

describe('Heroes', () => {

  const heroesPage = new HeroesPage();

  beforeEach(() => {
    heroesPage.navigateTo();
  });

  it('should add a hero', () => {
    heroesPage
      .inputHero('bat-test-man')
      .clickAddHero()
      .expectHeroToBePresent('bat-test-man');
  });

  it('shouls delete a hero', () => {
    heroesPage
      .expectHeroToBePresent('name')
      .clickDeleteHero('name')
      .expectHeroToBeAbsent('name');
  });
});
