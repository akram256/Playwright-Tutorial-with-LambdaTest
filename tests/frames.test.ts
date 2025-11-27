import { test, expect } from "@playwright/test"

test (" interact with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log ("no of frames", allframes.length) 

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("akram");
    await frame.locator("input[name='lname']").fill("mukasa");

    const innerFrame = frame.frameLocator("iframe[src='innerframe']")
    await innerFrame.locator("input[name='email']").fill("akrammukasa256@gmail.com")

    await frame.locator("input[name='fname']").fill("Kaysan My son");

    // const myFrame = page.frame("firstFr")
    // // if (myFrame != null) {
    // //     await myFrame.fill("", "")
    // // }
    // await myFrame?.fill("input[name='fname']", "akram")
    // await myFrame?.fill("input[name='lname']", "mukasa")

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered akram mukasa")


    await page.waitForTimeout(3000);



})