import { WebdriverIoPage } from "./webdriverio.page";

const TIMEOUT = 2000;

class NavGroup {
   constructor(private parent: WebdriverIO.Element) {}

   async selectItemByName(name: string) {
      await this.parent.waitForExist({ timeout: TIMEOUT });
      const elem = await this.parent.$(`a=${name}`);
      await elem.waitForExist({ timeout: TIMEOUT });
      elem.click();
   }
}

export class ApiPage extends WebdriverIoPage {
   async navigation() {
      return new NavGroup(await this.theBrowser.$("nav.navbar"));
   }
}
