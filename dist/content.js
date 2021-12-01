/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/

const image = document.querySelector('img');
const mediumDeployDomain = 'miro.medium.com';
if ((image === null || image === void 0 ? void 0 : image.src) && new URL(image.src).hostname === mediumDeployDomain) {
    console.log('image: ', image);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci8uL3NyYy9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IG1lZGl1bURlcGxveURvbWFpbiA9ICdtaXJvLm1lZGl1bS5jb20nO1xuaWYgKChpbWFnZSA9PT0gbnVsbCB8fCBpbWFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW1hZ2Uuc3JjKSAmJiBuZXcgVVJMKGltYWdlLnNyYykuaG9zdG5hbWUgPT09IG1lZGl1bURlcGxveURvbWFpbikge1xuICAgIGNvbnNvbGUubG9nKCdpbWFnZTogJywgaW1hZ2UpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogJ2RlbGV0ZUNvb2tpZXMnIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVNZWRpdW1CYW5uZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVNpZ25Jbk1lZGl1bUJhbm5lcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0ZXJlZENvbnRlbnQ+c2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmIChmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVNpZ25Jbk1lZGl1bUJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlck9mQXR0ZW1wdHNUb1JlbW92ZUJhbm5lciA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lnbkluQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2FsdGVybmF0ZS11c2VyLXRvcC1iYW5uZXItaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWduSW5CYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2UgPSAoX2QgPSAoX2MgPSAoX2IgPSAoX2EgPSBzaWduSW5CYW5uZXIucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5wYXJlbnROb2RlKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJPZkF0dGVtcHRzVG9SZW1vdmVCYW5uZXIgPT09IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVsZXRlTWVkaXVtQmFubmVycygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=