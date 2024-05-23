import { test, expect } from '@playwright/test';
import Filter from'../pages/Filter.ts';

/*Using the page object class from #3, please write a test automation script for the
scenario below. (Note: Expected output are the station names that satisfy the
given scenario; please print the output in the console.)
○ I am a PriceLOCQ for Consumer user, located in Calasiao, Pangasinan. I
want to see the available SEAOIL stations in my city where I can
purchase Gas 97.
*/
test("LOCQ_FilterStations_Positive_01", async ({page}) => {
    const filter = new Filter(page);
    await page.goto('https://www.pricelocq.com/pricelocq-stations');
    await filter.clickFiltersBtn();
    await filter.enterProvince('Pangasinan');
    await filter.enterCity('Calasiao');
    await filter.isGas97Checked();
    await filter.isPriceLOCQForConsumerChecked();
    await filter.clickApplyFiltersBtn();
    await filter.page.waitForTimeout(3000);
    for(let i = 0; i < 2; i++) {
        let stationNames = await filter.page.locator(`(//div[@class='station-list_stationLabel__1VCja'])[${i+1}]`).innerText();    
        stationNames = stationNames.split('\n')[0];
        console.log(stationNames);
    }
})

/*Write a custom function that iterates through the first ten station names displayed
in https://www.pricelocq.com/pricelocq-stations. Return the station names in an
array.*/


test("LOCQ_StationNamesInArray", async({page}) => {
    const filter = new Filter(page);
    const stationArray: string[] = [];
    await page.goto('https://www.pricelocq.com/pricelocq-stations');
    for(let i = 0; i < 10; i++) {
        let stationNames: string = await filter.page.locator(`(//div[@class='station-list_stationLabel__1VCja'])[${i+1}]`).innerText() as string;    
    
        stationNames = stationNames.split('\n')[0];
        stationArray[i] = stationNames;
    }
    console.log(stationArray);
})



