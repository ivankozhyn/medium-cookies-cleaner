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
        const idInterval = setInterval(() => {
          const signInBanner: HTMLDivElement | null = document.querySelector(
            'div#alternate-user-top-banner-header',
          )
          if (signInBanner) {
            ;(
              signInBanner.parentNode?.parentNode?.parentNode?.parentNode
                ?.parentNode?.parentNode as HTMLDivElement
            ).style.display = 'none'
            clearInterval(idInterval)
            return
          }

          const signInBanner2: NodeListOf<HTMLButtonElement> | null =
            document.querySelectorAll('button[data-testid="close-button"]')
          if (!!signInBanner2?.length) {
            signInBanner2.forEach(banner => {
              ;(
                banner?.parentNode?.parentNode?.parentNode?.parentNode
                  ?.parentNode as HTMLDivElement
              ).style.display = 'none'
            })
            clearInterval(idInterval)
            return
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
