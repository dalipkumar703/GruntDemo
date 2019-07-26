/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, inputField, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto google search engine", async () => {
    if (process.env.SEARCH_ENGINE === "google")
    {
        await goto('https://google.com/');
    }
    else if (process.env.SEARCH_ENGINE === "yahoo"){
        await goto('https://in.yahoo.com');
    }
    else if(process.env.SEARCH_ENGINE === "bing"){
        await goto('https://www.bing.com');
    }
    else {
        await goto('https://www.google.com/');
    }
   
});

step("Search for <query>", async (query) => {
    if(process.env.SEARCH_ENGINE=== "yahoo"){
        await focus(inputField({'id':'uh-search-box'}))
        await write(query);
        await press('Enter');
    }
    else if (process.env.SEARCH_ENGINE=== "bing")
    {
        await focus(inputField({'class':'b_searchbox'}))
        await write(query);
        await press('Enter');
    }
    else
    {
        await focus(inputField({'class':'gLFyf gsfi'}))
        await write(query);
        await press('Enter');
    }

});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});
