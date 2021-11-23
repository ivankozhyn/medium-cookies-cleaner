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
    let counterOfAttemptsToRemoveBanner = 0;
    const idInterval = setInterval(() => {
        var _a, _b, _c, _d, _e;
        const signInBanner = document.querySelector('div#alternate-user-top-banner-header');
        if (signInBanner) {
            ;
            ((_e = (_d = (_c = (_b = (_a = signInBanner === null || signInBanner === void 0 ? void 0 : signInBanner.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode).style.display = 'none';
        }
        counterOfAttemptsToRemoveBanner++;
        if (counterOfAttemptsToRemoveBanner === 15) {
            clearInterval(idInterval);
        }
    }, 1000);
};
deleteMediumBanners();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvLi9zcmMvY29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGRlbGV0ZU1lZGl1bUJhbm5lcnMgPSAoKSA9PiB7XG4gICAgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyKCk7XG4gICAgZGVsZXRlU2lnbkluTWVkaXVtQmFubmVyKCk7XG59O1xuY29uc3QgZGVsZXRlRnJlZVN0b3JpZXNNZWRpdW1Db3VudGVyQmFubmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRlcmVkQ29udGVudD5zZWN0aW9uJyk7XG4gICAgaWYgKGZyZWVTdG9yaWVzTWVkaXVtQ291bnRlckJhbm5lcikge1xuICAgICAgICBmcmVlU3Rvcmllc01lZGl1bUNvdW50ZXJCYW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG59O1xuY29uc3QgZGVsZXRlU2lnbkluTWVkaXVtQmFubmVyID0gKCkgPT4ge1xuICAgIGxldCBjb3VudGVyT2ZBdHRlbXB0c1RvUmVtb3ZlQmFubmVyID0gMDtcbiAgICBjb25zdCBpZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCBzaWduSW5CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjYWx0ZXJuYXRlLXVzZXItdG9wLWJhbm5lci1oZWFkZXInKTtcbiAgICAgICAgaWYgKHNpZ25JbkJhbm5lcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKChfZSA9IChfZCA9IChfYyA9IChfYiA9IChfYSA9IHNpZ25JbkJhbm5lciA9PT0gbnVsbCB8fCBzaWduSW5CYW5uZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpZ25JbkJhbm5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnBhcmVudE5vZGUpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRlck9mQXR0ZW1wdHNUb1JlbW92ZUJhbm5lcisrO1xuICAgICAgICBpZiAoY291bnRlck9mQXR0ZW1wdHNUb1JlbW92ZUJhbm5lciA9PT0gMTUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWRJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn07XG5kZWxldGVNZWRpdW1CYW5uZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=