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
            };
            const deleteFreeStoriesMediumCounterBanner = () => {
                const freeStoriesMediumCounterBanner = document.querySelector('.meteredContent>section');
                if (freeStoriesMediumCounterBanner) {
                    freeStoriesMediumCounterBanner.style.display = 'none';
                }
            };
            const deleteSignInMediumBanner = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyLy4vc3JjL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgbWVkaXVtRGVwbG95RG9tYWluID0gJ21pcm8ubWVkaXVtLmNvbSc7XG5pZiAoKGltYWdlID09PSBudWxsIHx8IGltYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWFnZS5zcmMpICYmIG5ldyBVUkwoaW1hZ2Uuc3JjKS5ob3N0bmFtZSA9PT0gbWVkaXVtRGVwbG95RG9tYWluKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlOiAnZGVsZXRlQ29va2llcycgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU1lZGl1bUJhbm5lcnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlU2lnbkluTWVkaXVtQmFubmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRlcmVkQ29udGVudD5zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lcikge1xuICAgICAgICAgICAgICAgICAgICBmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlU2lnbkluTWVkaXVtQmFubmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyT2ZBdHRlbXB0c1RvUmVtb3ZlQmFubmVyID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjYWx0ZXJuYXRlLXVzZXItdG9wLWJhbm5lci1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25JbkJhbm5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgKChfZSA9IChfZCA9IChfYyA9IChfYiA9IChfYSA9IHNpZ25JbkJhbm5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnBhcmVudE5vZGUpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIgPT09IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVsZXRlTWVkaXVtQmFubmVycygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=