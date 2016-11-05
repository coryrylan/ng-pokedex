import { NgPokedexPage } from './app.po';

describe('ng-pokedex App', function() {
  let page: NgPokedexPage;

  beforeEach(() => {
    page = new NgPokedexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
