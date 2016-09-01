import { JorgehuPersonalPage } from './app.po';

describe('jorgehu-personal App', function() {
  let page: JorgehuPersonalPage;

  beforeEach(() => {
    page = new JorgehuPersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
