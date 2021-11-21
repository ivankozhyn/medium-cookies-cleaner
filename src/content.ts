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
  setTimeout(() => {
    const signInBanner: HTMLDivElement | null = document.querySelector(
      'div#alternate-user-top-banner-header',
    )
    if (signInBanner) {
      ;(
        signInBanner?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode
          ?.parentNode as HTMLDivElement
      ).style.display = 'none'
    }
  }, 5000)
}

deleteMediumBanners()
