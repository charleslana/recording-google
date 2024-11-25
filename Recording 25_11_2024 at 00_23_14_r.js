import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
    const runner = await createRunner(extension);

    await runner.runBeforeAllSteps();

    await runner.runStep({
        type: 'setViewport',
        width: 1350,
        height: 955,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    });
    await runner.runStep({
        type: 'navigate',
        url: 'https://www.demo.guru99.com/test/newtours/',
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://www.demo.guru99.com/test/newtours/',
                title: 'Welcome: Mercury Tours'
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/REGISTER[role="link"]'
            ],
            [
                'td.mouseOver > a'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/a'
            ],
            [
                'pierce/td.mouseOver > a'
            ],
            [
                'text/REGISTER'
            ]
        ],
        offsetY: 3.296875,
        offsetX: 28.25,
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://www.demo.guru99.com/test/newtours/register.php',
                title: ''
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'tr:nth-of-type(2) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[2]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(2) input'
            ]
        ],
        offsetY: 12.296875,
        offsetX: 45.078125,
    });
    await runner.runStep({
        type: 'change',
        value: 'aaa',
        selectors: [
            [
                'tr:nth-of-type(2) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[2]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(2) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'bbb',
        selectors: [
            [
                'tr:nth-of-type(3) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[3]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(3) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: '999999999',
        selectors: [
            [
                'form > table > tbody > tr:nth-of-type(4) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[4]/td[2]/input'
            ],
            [
                'pierce/form > table > tbody > tr:nth-of-type(4) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'email',
        selectors: [
            [
                '#userName'
            ],
            [
                'xpath///*[@id="userName"]'
            ],
            [
                'pierce/#userName'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Shift'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'L',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'email@',
        selectors: [
            [
                '#userName'
            ],
            [
                'xpath///*[@id="userName"]'
            ],
            [
                'pierce/#userName'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Shift',
        target: 'main'
    });
    await runner.runStep({
        type: 'keyUp',
        key: '2',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'email@email.com',
        selectors: [
            [
                '#userName'
            ],
            [
                'xpath///*[@id="userName"]'
            ],
            [
                'pierce/#userName'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'ccccc',
        selectors: [
            [
                'tr:nth-of-type(7) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[7]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(7) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'ddddd',
        selectors: [
            [
                'tr:nth-of-type(8) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[8]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(8) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: '000',
        selectors: [
            [
                'tr:nth-of-type(9) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[9]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(9) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: '0000000',
        selectors: [
            [
                'tr:nth-of-type(10) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[10]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(10) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: 'BAKER ISLAND',
        selectors: [
            [
                'aria/BAKER ISLAND',
                'aria/[role="combobox"]'
            ],
            [
                'select'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[11]/td[2]/select'
            ],
            [
                'pierce/select'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ],
        offsetY: 8.296875,
        offsetX: 36.078125,
    });
    await runner.runStep({
        type: 'change',
        value: 'user99',
        selectors: [
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: '123456',
        selectors: [
            [
                'tr:nth-of-type(14) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[14]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(14) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'keyDown',
        target: 'main',
        key: 'Tab'
    });
    await runner.runStep({
        type: 'keyUp',
        key: 'Tab',
        target: 'main'
    });
    await runner.runStep({
        type: 'change',
        value: '123456',
        selectors: [
            [
                'tr:nth-of-type(15) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[15]/td[2]/input'
            ],
            [
                'pierce/tr:nth-of-type(15) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Enviar'
            ],
            [
                'tr:nth-of-type(17) input'
            ],
            [
                'xpath//html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[17]/td/input'
            ],
            [
                'pierce/tr:nth-of-type(17) input'
            ]
        ],
        offsetY: 11.296875,
        offsetX: 24.640625,
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://www.demo.guru99.com/test/newtours/register_sucess.php',
                title: ''
            }
        ]
    });

    await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    run()
}
