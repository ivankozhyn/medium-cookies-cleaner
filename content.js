deleteMediumBanners();

function deleteMediumBanners() {
  deleteFreeStoriesMediumCounterBanner();
  deleteSignInMediumBanner();
}

function deleteFreeStoriesMediumCounterBanner() {
  const freeStoriesMediumCounterBanner = document.querySelector(
    ".meteredContent>section"
  );
  if (freeStoriesMediumCounterBanner) {
    freeStoriesMediumCounterBanner.style.display = "none";
  }
}

function deleteSignInMediumBanner() {
  setTimeout(() => {
    const signInBanner = document.querySelector(
      "div#alternate-user-top-banner-header"
    );
    if (signInBanner) {
      signInBanner.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display =
        "none";
    }
  }, 5000);
}
