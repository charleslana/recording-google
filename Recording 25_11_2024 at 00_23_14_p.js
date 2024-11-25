const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1350,
            height: 955
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://www.demo.guru99.com/test/newtours/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(REGISTER[role=\\"link\\"])'),
            targetPage.locator('td.mouseOver > a'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/a)'),
            targetPage.locator(':scope >>> td.mouseOver > a'),
            targetPage.locator('::-p-text(REGISTER)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 28.25,
                y: 3.296875,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(2) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[2]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(2) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.078125,
                y: 12.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(2) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[2]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(2) input')
        ])
            .setTimeout(timeout)
            .fill('aaa');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(3) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[3]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(3) input')
        ])
            .setTimeout(timeout)
            .fill('bbb');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('form > table > tbody > tr:nth-of-type(4) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[4]/td[2]/input)'),
            targetPage.locator(':scope >>> form > table > tbody > tr:nth-of-type(4) input')
        ])
            .setTimeout(timeout)
            .fill('999999999');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#userName'),
            targetPage.locator('::-p-xpath(//*[@id=\\"userName\\"])'),
            targetPage.locator(':scope >>> #userName')
        ])
            .setTimeout(timeout)
            .fill('email');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('L');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#userName'),
            targetPage.locator('::-p-xpath(//*[@id=\\"userName\\"])'),
            targetPage.locator(':scope >>> #userName')
        ])
            .setTimeout(timeout)
            .fill('email@');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Shift');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('2');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#userName'),
            targetPage.locator('::-p-xpath(//*[@id=\\"userName\\"])'),
            targetPage.locator(':scope >>> #userName')
        ])
            .setTimeout(timeout)
            .fill('email@email.com');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(7) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[7]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(7) input')
        ])
            .setTimeout(timeout)
            .fill('ccccc');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(8) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[8]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(8) input')
        ])
            .setTimeout(timeout)
            .fill('ddddd');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(9) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[9]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(9) input')
        ])
            .setTimeout(timeout)
            .fill('000');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(10) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[10]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(10) input')
        ])
            .setTimeout(timeout)
            .fill('0000000');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(BAKER ISLAND) >>>> ::-p-aria([role=\\"combobox\\"])'),
            targetPage.locator('select'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[11]/td[2]/select)'),
            targetPage.locator(':scope >>> select')
        ])
            .setTimeout(timeout)
            .fill('BAKER ISLAND');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.078125,
                y: 8.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email')
        ])
            .setTimeout(timeout)
            .fill('user99');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(14) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[14]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(14) input')
        ])
            .setTimeout(timeout)
            .fill('123456');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(15) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[15]/td[2]/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(15) input')
        ])
            .setTimeout(timeout)
            .fill('123456');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enviar)'),
            targetPage.locator('tr:nth-of-type(17) input'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[17]/td/input)'),
            targetPage.locator(':scope >>> tr:nth-of-type(17) input')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 24.640625,
                y: 11.296875,
              },
            });
        await Promise.all(promises);
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
