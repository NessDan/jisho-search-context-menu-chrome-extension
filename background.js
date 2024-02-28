chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchJisho",
    title: "Search Jisho.org for \u201C%s\u201D",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "searchJisho") {
    chrome.tabs.create({
      url: "https://jisho.org/search/" + encodeURIComponent(info.selectionText),
      active: true,
    });
  }
});
