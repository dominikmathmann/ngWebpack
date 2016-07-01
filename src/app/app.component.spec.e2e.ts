/// <reference path="../../typings/index.d.ts" />

describe('Check Welcome Page', function() {
  it('Header', function() {
    browser.get('/');
    var header=element(by.tagName("h1"));
    expect(header.getCssValue("color")).toBe("rgba(255, 0, 0, 1)");
    expect(header.getText()).toBe("Demo!");
  });
  it('Bootstrap', function() {
    browser.get('/');
    var button=element(by.tagName("button"));
    expect(button.getCssValue("background-color")).toBe("rgba(51, 122, 183, 1)");
  });
});

