const deleteMediumBanners = () => {
  deleteFreeStoriesMediumCounterBanner()
  deleteSignInMediumBanner()
}

const deleteFreeStoriesMediumCounterBanner = () => {
  const freeStoriesMediumCounterBanner: HTMLDivElement | null =
    document.querySelector('.meteredContent>section')
  if (freeStoriesMediumCounterBanner) {
    freeStoriesMediumCounterBanner.style.display = 'none'
  }
}

const deleteSignInMediumBanner = () => {
  let counterOfAttemptsToRemoveBanner = 0
  const idInterval = setInterval(() => {
    const signInBanner: HTMLDivElement | null = document.querySelector(
      'div#alternate-user-top-banner-header',
    )
    if (signInBanner) {
      ;(
        signInBanner.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
          ?.parentNode as HTMLDivElement
      ).style.display = 'none'
    }
    counterOfAttemptsToRemoveBanner++
    if (counterOfAttemptsToRemoveBanner === 15) {
      clearInterval(idInterval)
    }
  }, 1000)
}

deleteMediumBanners()
