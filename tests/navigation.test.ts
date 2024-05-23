import { test, expect } from '@playwright/test';
import NavigationBar from'../pages/NavigationBar.ts';
const testdata = JSON.parse(JSON.stringify(require("../test-data/payment_partners.json")));

/*Text value assertion for the elements in the Navigation Bar */
test("LOCQ_ValidHomeNav_Positive_01", async({page}) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.homeBtn.click();

    const aboutTextElement = await page.waitForSelector('.primary');
    const aboutTextContent = await aboutTextElement.textContent();
    expect(aboutTextContent).toContain('LOCQ it now,');
});

test("LOCQ_ValidAboutUsNav_Positive_02", async ({ page }) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.aboutUsBtn.click();   

    const aboutTextElement = await page.waitForSelector('h1.heading');
    const aboutTextContent = await aboutTextElement.textContent();
    expect(aboutTextContent).toContain('About Us');
});

test("LOCQ_ValidGettingStartedNav_Positive_03", async ({ page }) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.gettingStartedBtn.click();   

    const aboutTextElement = await page.waitForSelector('h3');
    const aboutTextContent = await aboutTextElement.textContent();
    expect(aboutTextContent).toContain('Getting Started');
});

test("LOCQ_ValidHelpCenterNav_Positive_04", async ({ page }) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    // Wait for a popup to open - this is when another tab or browser is opened
    const page1Promise = page.waitForEvent('popup');

    // Click on the 'Help Center' link
    await navigationBar.helpCenterBtn.click();   

    // Wait for the popup page to open
    const page1 = await page1Promise;

    // Click on the text element with the expected text content
    const aboutTextElement = await page1.waitForSelector('h1');
    const aboutTextContent = await aboutTextElement.textContent();
    expect(aboutTextContent).toBe('Hi, how can we help you?');
});

test("LOCQ_ValidPLBPortalNav_Positive_05", async ({ page }) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    const page1Promise = page.waitForEvent('popup');
    await navigationBar.clickPLBPortal();   
    const page1 = await page1Promise;

    const aboutTextElement = await page1.waitForSelector('h1');
    const aboutTextContent = await aboutTextElement.textContent();
    expect(aboutTextContent).toContain('Fleet Portal');
});

/*Text value assertion of the available payment partners. Please create a separate .json file containing the available payment partners and
structure your test in a way that your assertions will use the .json file as the reference
*/
test("LOCQ_ValidPaymentPartners_Positive_06", async ({page}) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.clickPaymentPartners();
    
    for (let i = 0; i < testdata.paymentPartners.length; i++) {
        const aboutTextElement = await page.waitForSelector(`(//div[@class="partners-labels"]//span)[${i + 1}]`);
        const aboutTextContent = await aboutTextElement.textContent();

        expect(aboutTextContent).toContain(testdata.paymentPartners[i]);
    };
});

/*Page URL assertions for when the elements with a click action are clicked*/
test("LOCQ_ValidPaymentPartnersURL_Positive_07", async ({page}) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.clickPaymentPartners();

    expect(page.url()).toBe('https://www.pricelocq.com/payment-partners');
});

test("LOCQ_ValidPriceStationsURL_Positive_08", async ({page}) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.clickPriceLOCQStations();

    expect(page.url()).toBe('https://www.pricelocq.com/pricelocq-stations');
});

test("LOCQ_ValidLearnMoreURL_Positive_09", async ({page}) => {
    const navigationBar = new NavigationBar(page);
    await navigationBar.goto();
    await navigationBar.clickLearnMore();

    expect(page.url()).toBe('https://www.pricelocq.com/about-us/pricelocq-for-business');
});
