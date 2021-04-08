import { ApiPage } from "../src/api.page";

describe("Example multiremote test", () => {
  it("when given two browser then it shoud navigate the items", () => {
    const apiUrl = `https://webdriver.io/docs/api.html`;
    primaryBrowser.url(apiUrl);
    secondaryBrowser.url(apiUrl);
    const page1 = new ApiPage(primaryBrowser);
    const page2 = new ApiPage(secondaryBrowser);

    page1.navigation.selectItemByName("Docs");
    page2.navigation.selectItemByName("API");
    page1.navigation.selectItemByName("Blog");
    page2.navigation.selectItemByName("Contribute");
    page1.navigation.selectItemByName("Community");
    page2.navigation.selectItemByName("Docs");
  });
});
