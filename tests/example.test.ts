import { ApiPage } from "../src/api.page";

describe("Example multiremote test", () => {
   it("when given two browser then it shoud navigate the items", async () => {
      const apiUrl = `https://webdriver.io/docs/api.html`;
      await primaryBrowser.url(apiUrl);
      await secondaryBrowser.url(apiUrl);
      const page1 = new ApiPage(primaryBrowser);
      const page2 = new ApiPage(secondaryBrowser);

      await (await page1.navigation()).selectItemByName("Docs");
      await (await page2.navigation()).selectItemByName("API");
      await (await page1.navigation()).selectItemByName("Blog");
      await (await page2.navigation()).selectItemByName("Contribute");
      await (await page1.navigation()).selectItemByName("Community");
      await (await page2.navigation()).selectItemByName("Docs");
   });
});
