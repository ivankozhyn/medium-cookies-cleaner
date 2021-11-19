chrome.tabs.onCreated.addListener(async (tab) => {
  await chrome.action.setBadgeText({ tabId: tab.id, text: "" });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.url) {
    const google = "www.google.com";
    init();

    async function init() {
      deleteCurrentTabUrlCookie();
      deleteMediumCookies();
      if (new URL(changeInfo.url).hostname !== google) {
        await injectMyJSCodeToCurrentSite();
        await setBadgeDone();
      }
    }

    function deleteCurrentTabUrlCookie() {
      deleteDomainCookies(new URL(changeInfo.url).hostname);
    }

    function deleteMediumCookies() {
      deleteDomainCookies("medium.com");
    }

    async function deleteDomainCookies(domain) {
      let cookiesDeleted = 0;
      try {
        const cookies = await chrome.cookies.getAll({ domain: domain });

        if (cookies.length === 0) {
          return "No cookies found";
        }

        let pending = cookies.map(deleteCookie);
        await Promise.all(pending);
        cookiesDeleted = pending.length;
      } catch (error) {
        console.log(`Cookies cleaner unexpected error: ${error.message}`);
      }
    }

    async function injectMyJSCodeToCurrentSite() {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ["content.js"],
      });
    }

    async function setBadgeDone() {
      await chrome.action.setBadgeBackgroundColor({
        tabId,
        color: "#34A853",
      });
      await chrome.action.setBadgeText({ tabId, text: "Done" });
    }

    function deleteCookie(cookie) {
      const { secure, domain, path, name, storeId } = cookie;
      const correctDomain =
        domain[0] === "." ? domain.split("").slice(1).join("") : domain;
      const protocol = secure ? "https:" : "http:";
      const cookieUrl = `${protocol}//${correctDomain}${path}`;

      return chrome.cookies.remove({
        url: cookieUrl,
        name: name,
        storeId: storeId,
      });
    }
  }
});
