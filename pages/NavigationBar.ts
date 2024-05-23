import { Locator, Page } from "@playwright/test";
export default class NavigationBar{
    readonly url = "https://www.pricelocq.com/home";
    readonly page: Page;
    readonly homeBtn: Locator;
    readonly aboutUsBtn: Locator;
    readonly gettingStartedBtn: Locator;
    readonly helpCenterBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeBtn = page.locator("(//ul[@class='nav-link']//a)[1]");
        this.aboutUsBtn = page.locator("(//ul[@class='nav-link']//a)[2]");
        this.gettingStartedBtn = page.locator("(//ul[@class='nav-link']//a)[3]");
        this.helpCenterBtn = page.locator("(//ul[ @class='nav-link']//a)[4]");
    }

    async goto() {
        await this.page.goto(this.url);
    }
    async clickPLBPortal() {
        await this.page.locator("//ul[@class='nav-link']//button[1]").click();
    }
    async clickPaymentPartners() {
        await this.page.locator("(//a[contains(@class,'ant-btn key-features-button')])[1]").click();
    }
    async clickPriceLOCQStations() {
        await this.page.locator("(//a[contains(@class,'ant-btn key-features-button')])[2]").click();
    }
    async clickLearnMore() {
        await this.page.locator("//a[contains(@class,'ant-btn business-owner-button')]").click();
    }
}    