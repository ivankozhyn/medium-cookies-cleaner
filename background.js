chrome.tabs.onCreated.addListener(async (tab) => {
  await chrome.action.setBadgeText({ tabId: tab.id, text: "" });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.url) {
    const urlsList = [
      "https://www.google.com/search/",
      "https://towardsdatascience.com/",
      "https://hackernoon.com/",
      "https://medium.freecodecamp.org/",
      "https://psiloveyou.xyz/",
      "https://betterhumans.coach.me/",
      "https://codeburst.io/",
      "https://theascent.pub/",
      "https://medium.mybridge.co/",
      "https://uxdesign.cc/",
      "https://levelup.gitconnected.com/",
      "https://itnext.io/",
      "https://entrepreneurshandbook.co/",
      "https://proandroiddev.com/",
      "https://blog.prototypr.io/",
      "https://thebolditalic.com/",
      "https://blog.usejournal.com/",
      "https://blog.angularindepth.com/",
      "https://blog.bitsrc.io/",
      "https://blog.devartis.com/",
      "https://blog.maddevs.io/",
      "https://blog.getambassador.io/",
      "https://uxplanet.org/",
      "https://instagram-engineering.com/",
      "https://calia.me/",
      "https://productcoalition.com/",
      "https://engineering.opsgenie.com/",
      "https://android.jlelse.eu/",
      "https://robinhood.engineering/",
      "https://blog.hipolabs.com/",
      "https://ux.shopify.com/",
      "https://engineering.talkdesk.com/",
      "https://blog.codegiant.io/",
      "https://tech.olx.com/",
      "https://netflixtechblog.com/",
      "https://hackingandslacking.com/",
      "https://blog.kotlin-academy.com/",
      "https://blog.securityevaluators.com/",
      "https://blog.kubernauts.io/",
      "https://blog.coffeeapplied.com/",
      "https://unbounded.io/",
      "https://writingcooperative.com/",
      "https://plainenglish.io/",
      "https://blog.doit-intl.com/",
      "https://eand.co/",
      "https://techuisite.com/",
      "https://levelupprogramming.net/",
      "https://betterhumans.pub/",
      "https://betterprogramming.pub/",
      "https://pub.towardsai.net/",
      "https://bettermarketing.pub/",
      "https://themakingofamillionaire.com/",
      "https://medium.datadriveninvestor.com/",
      "https://bootcamp.uxdesign.cc/",
      "https://baos.pub/",
      "https://www.inbitcoinwetrust.net/",
      "https://blog.prototypr.io/",
      "https://blog.devgenius.io/",
    ];

    const urlsShortList = [
      "medium.com",
      "towardsdatascience.com",
      "hackernoon.com",
      "medium.freecodecamp.org",
      "psiloveyou.xyz",
      "betterhumans.coach.me",
      "codeburst.io",
      "theascent.pub",
      "medium.mybridge.co",
      "uxdesign.cc",
      "levelup.gitconnected.com",
      "itnext.io",
      "entrepreneurshandbook.co",
      "proandroiddev.com",
      "blog.prototypr.io",
      "thebolditalic.com",
      "blog.usejournal.com",
      "blog.angularindepth.com",
      "blog.bitsrc.io",
      "blog.devartis.com",
      "blog.maddevs.io",
      "blog.getambassador.io",
      "uxplanet.org",
      "instagram-engineering.com",
      "calia.me",
      "productcoalition.com",
      "engineering.opsgenie.com",
      "android.jlelse.eu",
      "robinhood.engineering",
      "log.hipolabs.com",
      "ux.shopify.com",
      "engineering.talkdesk.com",
      "blog.codegiant.io",
      "tech.olx.com",
      "netflixtechblog.com",
      "hackingandslacking.com",
      "blog.kotlin-academy.com",
      "blog.securityevaluators.com",
      "blog.kubernauts.io",
      "blog.coffeeapplied.com",
      "unbounded.io",
      "writingcooperative.com",
      "plainenglish.io",
      "blog.doit-intl.com",
      "eand.co",
      "techuisite.com",
      "levelupprogramming.net",
      "betterhumans.pub",
      "betterprogramming.pub",
      "pub.towardsai.net",
      "bettermarketing.pub",
      "themakingofamillionaire.com",
      "medium.datadriveninvestor.com",
      "bootcamp.uxdesign.cc",
      "baos.pub",
      "inbitcoinwetrust.net",
      "blog.prototypr.io",
      "blog.devgenius.io",
    ];

    init();

    function init() {
      if (checkSafeUrl()) {
        deleteMediumCookies();
        deleteCurrentTabUrlCookie();
        deleteUrlsListCookies();
      }
    }

    function checkSafeUrl() {
      return !!urlsShortList.filter((url) =>
        getCurrentTabHostname().includes(url)
      ).length;
    }

    function deleteMediumCookies() {
      deleteDomainCookies("medium.com");
    }

    function deleteCurrentTabUrlCookie() {
      deleteDomainCookies(getCurrentTabHostname());
    }

    function deleteUrlsListCookies() {
      urlsList.forEach((url) => {
        let newUrl = new URL(url);
        deleteDomainCookies(newUrl.hostname);
      });
    }

    function getCurrentTabHostname() {
      return new URL(changeInfo.url).hostname;
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

      setBadgeDone();
    }

    async function setBadgeDone() {
      await chrome.action.setBadgeBackgroundColor({
        tabId,
        color: "#34A853",
      });
      await chrome.action.setBadgeText({ tabId, text: "Done" });
    }

    function deleteCookie(cookie) {
      const protocol = cookie.secure ? "https:" : "http:";
      const cookieUrl = `${protocol}//${cookie.domain}${cookie.path}`;

      return chrome.cookies.remove({
        url: cookieUrl,
        name: cookie.name,
        storeId: cookie.storeId,
      });
    }
  }
});
