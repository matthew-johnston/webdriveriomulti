import { ApiPage } from "../src/api.page";

describe("Example multiremote test", () => {
   it ("Opens two browsers", () => {
      const apiUrl = `https://webdriver.io/docs/api.html`;
      primaryBrowser.url(apiUrl);
      secondaryBrowser.url(apiUrl);

      const page1 = new ApiPage(primaryBrowser);
      page1.browserGroup.selectItemByName("$");

      const page2 = new ApiPage(secondaryBrowser);
      page2.browserGroup.selectItemByName("debug");

      page1.browserGroup.selectItemByName("execute");
      page2.browserGroup.selectItemByName("call");
      page1.browserGroup.selectItemByName("pause");
      page2.browserGroup.selectItemByName("react$");
   });
});