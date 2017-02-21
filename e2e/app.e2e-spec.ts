import { EmrApiDocPage } from './app.po';

describe('emr-api-doc App', () => {
  let page: EmrApiDocPage;

  beforeEach(() => {
    page = new EmrApiDocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
