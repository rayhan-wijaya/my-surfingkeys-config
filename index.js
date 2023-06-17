settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

api.map("gxh", "gxt");
api.map("gxl", "gxT");
api.unmap("gxt");
api.unmap("gxT");

api.map("F", "af");

api.unmap("E");

api.map("E", "k");
api.map("D", "j");

settings.tabsThreshold = 0;
settings.omnibarSuggestion = false;

api.aceVimMap("Q", "gqq", "normal");

api.mapkey(
    "gl",
    "Open Chrome Search Engines",
    () => void api.tabOpenLink("chrome://settings/searchEngines")
);

api.mapkey(
    "gj",
    "Open Chrome Extension Shortcuts",
    () => api.tabOpenLink("chrome://extensions/shortcuts")
);

api.mapkey("yk", "Copy Image URL", () => {
    api.Hints.create("img[src]", (element) => {
        api.Clipboard.write(element.src);
    });
});

api.Hints.setCharacters("aswertzcvb");
