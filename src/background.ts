chrome.tabs.onCreated.addListener(async tab => {
  await chrome.action.setBadgeText({ tabId: tab.id, text: '' })
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.url && !changeInfo.url.includes('chrome://')) {
    const injectMyJSCodeToCurrentSite = async () => {
      const getCurrentTab = async () => {
        let queryOptions = { active: true, currentWindow: true }
        let [tab] = await chrome.tabs.query(queryOptions)
        return tab
      }

      const currentTab = await getCurrentTab()

      try {
        if (currentTab?.id === tabId) {
          await chrome.scripting.executeScript({
            target: { tabId: currentTab?.id },
            files: ['content.js'],
          })
        }
      } catch (error) {
        console.log(
          'injectMyJSCodeToCurrentSite error: ',
          error,
          changeInfo.url,
          tabId,
          currentTab?.id,
        )
      }
    }

    chrome.webNavigation.onCompleted.addListener(async () => {
      await injectMyJSCodeToCurrentSite()
    })
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    if (request.message === 'deleteCookies') {
      const init = async () => {
        deleteCurrentTabUrlCookie()
        deleteMediumCookies()
        sendResponse({ status: 'done' })
        await setBadgeDone()
      }

      const deleteCurrentTabUrlCookie = () => {
        if (sender?.tab?.url) {
          deleteDomainCookies(new URL(sender?.tab?.url).hostname)
        }
      }

      const deleteMediumCookies = () => {
        deleteDomainCookies('medium.com')
      }

      const deleteDomainCookies = async (domain: string | undefined) => {
        let cookiesDeleted = 0
        try {
          const cookies = await chrome.cookies.getAll({ domain: domain })

          if (cookies.length === 0) {
            return 'No cookies found'
          }

          let pending = cookies.map(deleteCookie)
          await Promise.all(pending)
          cookiesDeleted = pending.length
        } catch (error) {
          console.log(
            `Cookies cleaner unexpected error: ${
              (error as { message: string }).message
            }`,
          )
        }
      }

      const deleteCookie = (cookie: chrome.cookies.Cookie) => {
        const { secure, domain, path, name, storeId } = cookie
        const correctDomain =
          domain[0] === '.' ? domain.split('').slice(1).join('') : domain
        const protocol = secure ? 'https:' : 'http:'
        const cookieUrl = `${protocol}//${correctDomain}${path}`

        return chrome.cookies.remove({
          url: cookieUrl,
          name: name,
          storeId: storeId,
        })
      }

      const setBadgeDone = async () => {
        await chrome.action.setBadgeBackgroundColor({
          tabId: sender?.tab?.id,
          color: '#34A853',
        })

        await chrome.action.setBadgeText({
          tabId: sender?.tab?.id,
          text: 'Done',
        })
      }

      init()
    }
  } catch (error) {
    console.log('error: ', error)
  }
})
