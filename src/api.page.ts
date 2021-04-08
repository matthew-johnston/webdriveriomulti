import { WebdriverIoPage } from "./webdriverio.page";

const TIMEOUT = 2000;

class NavGroup {
  constructor(private parent: WebdriverIO.Element) {}

  selectItemByName(name: string) {
    this.parent.waitForExist({ timeout: TIMEOUT });
    const elem = this.parent.$(`a=${name}`);
    elem.waitForExist({ timeout: TIMEOUT });
    elem.click();
  }
}

export class ApiPage extends WebdriverIoPage {
  get navigation() {
    return new NavGroup(this.theBrowser.$("nav.navbar"));
  }
}
