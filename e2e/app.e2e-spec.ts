import { CarPoolingPage } from './app.po';

describe('car-pooling App', () => {
  let page: CarPoolingPage;

  beforeEach(() => {
    page = new CarPoolingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
