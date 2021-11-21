/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
chrome.tabs.onCreated.addListener((tab) => __awaiter(void 0, void 0, void 0, function* () {
    yield chrome.action.setBadgeText({ tabId: tab.id, text: '' });
}));
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.url) {
        const google = 'www.google.com';
        const init = () => __awaiter(this, void 0, void 0, function* () {
            deleteCurrentTabUrlCookie();
            deleteMediumCookies();
            if (new URL(changeInfo.url || '').hostname !== google) {
                yield injectMyJSCodeToCurrentSite();
                yield setBadgeDone();
            }
        });
        const deleteCurrentTabUrlCookie = () => {
            deleteDomainCookies(new URL(changeInfo.url || '').hostname);
        };
        const deleteMediumCookies = () => {
            deleteDomainCookies('medium.com');
        };
        const deleteDomainCookies = (domain) => __awaiter(this, void 0, void 0, function* () {
            let cookiesDeleted = 0;
            try {
                const cookies = yield chrome.cookies.getAll({ domain: domain });
                if (cookies.length === 0) {
                    return 'No cookies found';
                }
                let pending = cookies.map(deleteCookie);
                yield Promise.all(pending);
                cookiesDeleted = pending.length;
            }
            catch (error) {
                console.log(`Cookies cleaner unexpected error: ${error.message}`);
            }
        });
        const deleteCookie = (cookie) => {
            const { secure, domain, path, name, storeId } = cookie;
            const correctDomain = domain[0] === '.' ? domain.split('').slice(1).join('') : domain;
            const protocol = secure ? 'https:' : 'http:';
            const cookieUrl = `${protocol}//${correctDomain}${path}`;
            return chrome.cookies.remove({
                url: cookieUrl,
                name: name,
                storeId: storeId,
            });
        };
        const injectMyJSCodeToCurrentSite = () => __awaiter(this, void 0, void 0, function* () {
            yield chrome.scripting.executeScript({
                target: { tabId },
                files: ['content.js'],
            });
        });
        const setBadgeDone = () => __awaiter(this, void 0, void 0, function* () {
            yield chrome.action.setBadgeBackgroundColor({
                tabId,
                color: '#34A853',
            });
            yield chrome.action.setBadgeText({ tabId, text: 'Done' });
        });
        init();
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsY0FBYztBQUMvRTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLElBQUksY0FBYyxFQUFFLEtBQUs7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLCtDQUErQyxxQkFBcUI7QUFDcEUsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVRXZFRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci8uL3NyYy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGFiSWQ6IHRhYi5pZCwgdGV4dDogJycgfSk7XG59KSk7XG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHRhYklkLCBjaGFuZ2VJbmZvKSB7XG4gICAgaWYgKGNoYW5nZUluZm8udXJsKSB7XG4gICAgICAgIGNvbnN0IGdvb2dsZSA9ICd3d3cuZ29vZ2xlLmNvbSc7XG4gICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBkZWxldGVDdXJyZW50VGFiVXJsQ29va2llKCk7XG4gICAgICAgICAgICBkZWxldGVNZWRpdW1Db29raWVzKCk7XG4gICAgICAgICAgICBpZiAobmV3IFVSTChjaGFuZ2VJbmZvLnVybCB8fCAnJykuaG9zdG5hbWUgIT09IGdvb2dsZSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGluamVjdE15SlNDb2RlVG9DdXJyZW50U2l0ZSgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNldEJhZGdlRG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ3VycmVudFRhYlVybENvb2tpZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZURvbWFpbkNvb2tpZXMobmV3IFVSTChjaGFuZ2VJbmZvLnVybCB8fCAnJykuaG9zdG5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkZWxldGVNZWRpdW1Db29raWVzID0gKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlRG9tYWluQ29va2llcygnbWVkaXVtLmNvbScpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkZWxldGVEb21haW5Db29raWVzID0gKGRvbWFpbikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGNvb2tpZXNEZWxldGVkID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IHlpZWxkIGNocm9tZS5jb29raWVzLmdldEFsbCh7IGRvbWFpbjogZG9tYWluIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb29raWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05vIGNvb2tpZXMgZm91bmQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcGVuZGluZyA9IGNvb2tpZXMubWFwKGRlbGV0ZUNvb2tpZSk7XG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocGVuZGluZyk7XG4gICAgICAgICAgICAgICAgY29va2llc0RlbGV0ZWQgPSBwZW5kaW5nLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb29raWVzIGNsZWFuZXIgdW5leHBlY3RlZCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29va2llID0gKGNvb2tpZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzZWN1cmUsIGRvbWFpbiwgcGF0aCwgbmFtZSwgc3RvcmVJZCB9ID0gY29va2llO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdERvbWFpbiA9IGRvbWFpblswXSA9PT0gJy4nID8gZG9tYWluLnNwbGl0KCcnKS5zbGljZSgxKS5qb2luKCcnKSA6IGRvbWFpbjtcbiAgICAgICAgICAgIGNvbnN0IHByb3RvY29sID0gc2VjdXJlID8gJ2h0dHBzOicgOiAnaHR0cDonO1xuICAgICAgICAgICAgY29uc3QgY29va2llVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2NvcnJlY3REb21haW59JHtwYXRofWA7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21lLmNvb2tpZXMucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICB1cmw6IGNvb2tpZVVybCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHN0b3JlSWQ6IHN0b3JlSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW5qZWN0TXlKU0NvZGVUb0N1cnJlbnRTaXRlID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICAgICAgICBmaWxlczogWydjb250ZW50LmpzJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNldEJhZGdlRG9uZSA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuICAgICAgICAgICAgICAgIHRhYklkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzM0QTg1MycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGFiSWQsIHRleHQ6ICdEb25lJyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXQoKTtcbiAgICB9XG59KTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvYmFja2dyb3VuZC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9