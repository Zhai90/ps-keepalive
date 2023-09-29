chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url?.startsWith("https://www.google.com")) {
    console.log("This is google!");
  }
});

console.log(`this is background service worker`);

export {};
