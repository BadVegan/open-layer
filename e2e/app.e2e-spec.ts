import { OpenLayerPage } from './app.po';

describe('open-layer App', function() {
  let page: OpenLayerPage;

  beforeEach(() => {
    page = new OpenLayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
