function openPage() {
  browser.tabs.create({
    url: browser.extension.getURL("index.html")
  });
}

browser.browserAction.onClicked.addListener(openPage);
