const chrome = {
  maxInstances: 1,
  capabilities: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: [
        "--window-size=1920,1080",
        "--force-device-scale-factor=1",
        "--no-proxy-server",
      ],
    },
  },
};

function services() {
  return process.env.NODE_ENV === "production" ? [] : ["selenium-standalone"];
}

const config: WebdriverIO.Config = {
  // runner: "local",

  // hostname: "localhost",

  specs: ["./build~~/tests/**/*.js"],

  services: services(),

  capabilities: {
    primaryBrowser: chrome,
    secondaryBrowser: chrome,
  },

  logLevel: "error",

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,

  framework: "jasmine",

  jasmineOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 9999999,
  },

  reporters: ["spec"],
};

export { config };
