chrome.tabs.onCreated.addListener(async () => {
  let tabs = await chrome.tabs.query({});
  if (tabs.length > 7) {  
    chrome.tabs.remove(tabs[tabs.length - 1].id);
  }
});
