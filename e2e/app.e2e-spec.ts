import { AppheroesPage } from './app.po';

describe('appheroes App', function() {
  let page: AppheroesPage;

  beforeEach(() => {
    page = new AppheroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
