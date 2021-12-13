const image = document.querySelector('img')

const mediumDeployDomain = 'miro.medium.com'

if (image?.src && new URL(image.src).hostname === mediumDeployDomain) {
  chrome.runtime.sendMessage({ message: 'deleteCookies' }, response => {
    if (response.status === 'done') {
      const deleteMediumBanners = () => {
        deleteFreeStoriesMediumCounterBanner()
        deleteSignInMediumBanner()
        chrome.runtime.sendMessage({ message: 'deleteBanners' })
      }

      const deleteFreeStoriesMediumCounterBanner = () => {
        chrome.runtime.sendMessage({ message: 'deleteBanners1' })
        const freeStoriesMediumCounterBanner: HTMLDivElement | null =
          document.querySelector('.meteredContent>section')
        if (freeStoriesMediumCounterBanner) {
          freeStoriesMediumCounterBanner.style.display = 'none'
        }
      }

      const deleteSignInMediumBanner = () => {
        chrome.runtime.sendMessage({ message: 'deleteBanners2' })
        let counterOfAttemptsToRemoveBanner = 0
        let numberOfClicksToCloseTheBanner = 0
        const idInterval = setInterval(() => {
          const signInBanner: NodeListOf<HTMLButtonElement> | null =
            document.querySelectorAll('button[data-testid="close-button"]')
          if (signInBanner?.length) {
            signInBanner.forEach(banner => {
              numberOfClicksToCloseTheBanner++
              banner.click()
            })
            if (numberOfClicksToCloseTheBanner >= 3) {
              clearInterval(idInterval)
              return
            }
          }

          counterOfAttemptsToRemoveBanner++
          if (counterOfAttemptsToRemoveBanner === 15) {
            clearInterval(idInterval)
          }
        }, 1000)
      }

      deleteMediumBanners()
    }
  })
}
