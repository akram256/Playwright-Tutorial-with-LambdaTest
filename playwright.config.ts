import { defineConfig, devices } from '@playwright/test';

// const capabilities = {
//     browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//     browserVersion: "latest",
//     "LT:Options": {
//         platform: "Windows 10",
//         build: "Playwright Test from config",
//         name: "Playwright Test - 1",
//         user: '',
//         accessKey: '',
//         network: true,
//         video: true,
//         console: true,
//         tunnel: false, // Add tunnel configuration if testing locally hosted webpage
//         tunnelName: "", // Optional
//         geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//     },
// };


export default defineConfig({


testMatch: ["fixture/fixtest.test.ts"],
use:{
  baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
  headless: false,
  screenshot:"on",
  video:"retain-on-failure",
  // launchOptions:{
  //   slowMo: 10000
  // }
},
retries: 0,
reporter: [["dot"], ["json",{
  outputFile:"jsonReports/jesonReports.json"
}], ["html",{
  open: "always"
}]]




//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     headless: false,
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
});
