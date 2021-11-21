/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/

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
    setTimeout(() => {
        var _a, _b, _c, _d, _e;
        const signInBanner = document.querySelector('div#alternate-user-top-banner-header');
        if (signInBanner) {
            ;
            ((_e = (_d = (_c = (_b = (_a = signInBanner === null || signInBanner === void 0 ? void 0 : signInBanner.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode).style.display = 'none';
        }
    }, 5000);
};
deleteMediumBanners();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci8uL3NyYy9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgZGVsZXRlTWVkaXVtQmFubmVycyA9ICgpID0+IHtcbiAgICBkZWxldGVGcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIoKTtcbiAgICBkZWxldGVTaWduSW5NZWRpdW1CYW5uZXIoKTtcbn07XG5jb25zdCBkZWxldGVGcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ldGVyZWRDb250ZW50PnNlY3Rpb24nKTtcbiAgICBpZiAoZnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyKSB7XG4gICAgICAgIGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn07XG5jb25zdCBkZWxldGVTaWduSW5NZWRpdW1CYW5uZXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGNvbnN0IHNpZ25JbkJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNhbHRlcm5hdGUtdXNlci10b3AtYmFubmVyLWhlYWRlcicpO1xuICAgICAgICBpZiAoc2lnbkluQmFubmVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoKF9lID0gKF9kID0gKF9jID0gKF9iID0gKF9hID0gc2lnbkluQmFubmVyID09PSBudWxsIHx8IHNpZ25JbkJhbm5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2lnbkluQmFubmVyLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucGFyZW50Tm9kZSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0sIDUwMDApO1xufTtcbmRlbGV0ZU1lZGl1bUJhbm5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==