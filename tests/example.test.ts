describe("Example multiremote test", () => {

   it ("Opens two browsers", () => {
      primaryBrowser.url(`https://webdriver.io/docs/gettingstarted.html`);
      secondaryBrowser.url(`https://webdriver.io/docs/api.html`);
   });

});