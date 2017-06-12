import { CotAngularPage } from './app.po';

describe('cot-angular App', () => {
  let page: CotAngularPage;

  beforeEach(() => {
    page = new CotAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
