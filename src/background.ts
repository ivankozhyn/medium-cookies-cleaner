chrome.tabs.onCreated.addListener(async tab => {
  await chrome.action.setBadgeText({ tabId: tab.id, text: '' })
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.get(tabId, tab => {
      if (tab.url && !tab.url.includes('chrome://')) {
        const injectMyJSCodeToCurrentSite = async () => {
          try {
            await chrome.scripting.executeScript({
              target: { tabId },
              files: ['content.js'],
            })
          } catch (error) {
            console.log(
              'injectMyJSCodeToCurrentSite error: ',
              error,
              changeInfo.url,
              tabId,
            )
          }
        }

        injectMyJSCodeToCurrentSite()
      }
    })
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    const setBadgeDone = async (
      tabId: number,
      color = '#34A853',
      text = 'Done',
    ) => {
      await chrome.action.setBadgeBackgroundColor({
        tabId,
        color,
      })

      await chrome.action.setBadgeText({
        tabId,
        text,
      })
    }

    if (request.message === 'deleteCookies') {
      const init = async () => {
        deleteCurrentTabUrlCookie()
        deleteMediumCookies()
        sendResponse({ status: 'done' })
        await setDeleteCookiesBadgeDone()
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

      const setDeleteCookiesBadgeDone = () => {
        if (sender?.tab?.id) {
          setBadgeDone(sender.tab.id, '#4F74B3')
        }
      }

      init()
    }

    if (request.message === 'deleteBanners') {
      if (sender?.tab?.id) {
        setBadgeDone(sender.tab.id)
      }
    }
  } catch (error) {
    console.log('error: ', error)
  }
})
