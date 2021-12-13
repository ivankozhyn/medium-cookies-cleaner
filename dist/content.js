/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/

const image = document.querySelector('img');
const mediumDeployDomain = 'miro.medium.com';
if ((image === null || image === void 0 ? void 0 : image.src) && new URL(image.src).hostname === mediumDeployDomain) {
    chrome.runtime.sendMessage({ message: 'deleteCookies' }, response => {
        if (response.status === 'done') {
            const deleteMediumBanners = () => {
                deleteFreeStoriesMediumCounterBanner();
                deleteSignInMediumBanner();
                chrome.runtime.sendMessage({ message: 'deleteBanners' });
            };
            const deleteFreeStoriesMediumCounterBanner = () => {
                chrome.runtime.sendMessage({ message: 'deleteBanners1' });
                const freeStoriesMediumCounterBanner = document.querySelector('.meteredContent>section');
                if (freeStoriesMediumCounterBanner) {
                    freeStoriesMediumCounterBanner.style.display = 'none';
                }
            };
            const deleteSignInMediumBanner = () => {
                chrome.runtime.sendMessage({ message: 'deleteBanners2' });
                let counterOfAttemptsToRemoveBanner = 0;
                let numberOfClicksToCloseTheBanner = 0;
                const idInterval = setInterval(() => {
                    const signInBanner = document.querySelectorAll('button[data-testid="close-button"]');
                    if (signInBanner === null || signInBanner === void 0 ? void 0 : signInBanner.length) {
                        signInBanner.forEach(banner => {
                            numberOfClicksToCloseTheBanner++;
                            banner.click();
                        });
                        if (numberOfClicksToCloseTheBanner >= 3) {
                            clearInterval(idInterval);
                            return;
                        }
                    }
                    counterOfAttemptsToRemoveBanner++;
                    if (counterOfAttemptsToRemoveBanner === 15) {
                        clearInterval(idInterval);
                    }
                }, 1000);
            };
            deleteMediumBanners();
        }
    });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci8uL3NyYy9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IG1lZGl1bURlcGxveURvbWFpbiA9ICdtaXJvLm1lZGl1bS5jb20nO1xuaWYgKChpbWFnZSA9PT0gbnVsbCB8fCBpbWFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW1hZ2Uuc3JjKSAmJiBuZXcgVVJMKGltYWdlLnNyYykuaG9zdG5hbWUgPT09IG1lZGl1bURlcGxveURvbWFpbikge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogJ2RlbGV0ZUNvb2tpZXMnIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVNZWRpdW1CYW5uZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVNpZ25Jbk1lZGl1bUJhbm5lcigpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogJ2RlbGV0ZUJhbm5lcnMnIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG1lc3NhZ2U6ICdkZWxldGVCYW5uZXJzMScgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ldGVyZWRDb250ZW50PnNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBkZWxldGVTaWduSW5NZWRpdW1CYW5uZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlOiAnZGVsZXRlQmFubmVyczInIH0pO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyT2ZBdHRlbXB0c1RvUmVtb3ZlQmFubmVyID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyT2ZDbGlja3NUb0Nsb3NlVGhlQmFubmVyID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS10ZXN0aWQ9XCJjbG9zZS1idXR0b25cIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25JbkJhbm5lciA9PT0gbnVsbCB8fCBzaWduSW5CYW5uZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpZ25JbkJhbm5lci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25JbkJhbm5lci5mb3JFYWNoKGJhbm5lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZDbGlja3NUb0Nsb3NlVGhlQmFubmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkNsaWNrc1RvQ2xvc2VUaGVCYW5uZXIgPj0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIgPT09IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVsZXRlTWVkaXVtQmFubmVycygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=