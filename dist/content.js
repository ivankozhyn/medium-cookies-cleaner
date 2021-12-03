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
                const idInterval = setInterval(() => {
                    var _a, _b, _c, _d, _e;
                    const signInBanner = document.querySelector('div#alternate-user-top-banner-header');
                    if (signInBanner) {
                        ;
                        ((_e = (_d = (_c = (_b = (_a = signInBanner.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode).style.display = 'none';
                        clearInterval(idInterval);
                        return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyLy4vc3JjL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgbWVkaXVtRGVwbG95RG9tYWluID0gJ21pcm8ubWVkaXVtLmNvbSc7XG5pZiAoKGltYWdlID09PSBudWxsIHx8IGltYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWFnZS5zcmMpICYmIG5ldyBVUkwoaW1hZ2Uuc3JjKS5ob3N0bmFtZSA9PT0gbWVkaXVtRGVwbG95RG9tYWluKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlOiAnZGVsZXRlQ29va2llcycgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU1lZGl1bUJhbm5lcnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlU2lnbkluTWVkaXVtQmFubmVyKCk7XG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlOiAnZGVsZXRlQmFubmVycycgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogJ2RlbGV0ZUJhbm5lcnMxJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0ZXJlZENvbnRlbnQ+c2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmIChmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVNpZ25Jbk1lZGl1bUJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG1lc3NhZ2U6ICdkZWxldGVCYW5uZXJzMicgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25JbkJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNhbHRlcm5hdGUtdXNlci10b3AtYmFubmVyLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbkluQmFubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9lID0gKF9kID0gKF9jID0gKF9iID0gKF9hID0gc2lnbkluQmFubmVyLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFyZW50Tm9kZSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlck9mQXR0ZW1wdHNUb1JlbW92ZUJhbm5lcisrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlck9mQXR0ZW1wdHNUb1JlbW92ZUJhbm5lciA9PT0gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWxldGVNZWRpdW1CYW5uZXJzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==