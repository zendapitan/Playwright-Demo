import { Locator, Page } from "@playwright/test";
export default class Filter {
    constructor(public page: Page) {

    }
    //methods
    async clickFiltersBtn() {
        await this.page.locator("(//button[@type='button'])[2]").click();
    }
    async enterProvince(province: string) {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").click();
        await this.page.locator("(//input[@value='All'])[1]").fill(province);
        await this.page.getByRole('option', { name: `${province}` }).click();
    }
    async enterCity(city: string) {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").click();
        await this.page.locator("(//input[@value='All'])[1]").fill(city);
        await this.page.getByRole('option', { name: `${city}` }).click();
    }
    async isGas97Checked() {
        await this.page.locator('div:nth-child(7) > div > .MuiButtonBase-root > .MuiIconButton-label > .jss8').check();
    }
    async isPriceLOCQForConsumerChecked() {
        await this.page.locator('div').filter({ hasText: /^PriceLOCQ for Consumer$/ }).getByRole('checkbox').check();
    }
    async clickApplyFiltersBtn() {
        await this.page.locator("//span[text()='Apply Filters']").click();
    }
    async enterStationName(station: string) {
        await this.page.locator("//input[@placeholder='Station Name']").fill(station);
    }
}

/*Please navigate to https://www.pricelocq.com/pricelocq-stations and create a
page object class for the elements listed below.
○ Filters Button
    ■ Province dropdown (click and type action)
    ■ City dropdown (click and type action)
    ■ Available Products (click checkbox)
        ● Diesel
        ● Gas 91
        ● Gas 95
        ● Gas 97
    ■ Accepted Customers (click checkbox)
        ● PriceLOCQ for Consumer
        ● PriceLOCQ for Business
    ■ Apply Filters
○ Station Name Search field (click and type action) */