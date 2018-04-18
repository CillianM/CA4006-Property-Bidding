import { AppPage } from './app.po';

describe('mi-d-test-party App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should move to submission list page', () => {
    page.navigateTo();
    let path = page.clickLogin();
    console.log(path);
    expect(path).toContain('/submissions'); 
  });
});
