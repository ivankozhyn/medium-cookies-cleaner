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
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (changeInfo.url && !changeInfo.url.includes('chrome://')) {
        const injectMyJSCodeToCurrentSite = () => __awaiter(void 0, void 0, void 0, function* () {
            const getCurrentTab = () => __awaiter(void 0, void 0, void 0, function* () {
                let queryOptions = { active: true, currentWindow: true };
                let [tab] = yield chrome.tabs.query(queryOptions);
                return tab;
            });
            const currentTab = yield getCurrentTab();
            try {
                if ((currentTab === null || currentTab === void 0 ? void 0 : currentTab.id) === tabId) {
                    yield chrome.scripting.executeScript({
                        target: { tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id },
                        files: ['content.js'],
                    });
                }
            }
            catch (error) {
                console.log('injectMyJSCodeToCurrentSite error: ', error, changeInfo.url, tabId, currentTab === null || currentTab === void 0 ? void 0 : currentTab.id);
            }
        });
        chrome.webNavigation.onCompleted.addListener(() => __awaiter(void 0, void 0, void 0, function* () {
            yield injectMyJSCodeToCurrentSite();
        }));
    }
}));
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    try {
        if (request.message === 'deleteCookies') {
            const init = () => __awaiter(void 0, void 0, void 0, function* () {
                deleteCurrentTabUrlCookie();
                deleteMediumCookies();
                sendResponse({ status: 'done' });
                yield setBadgeDone();
            });
            const deleteCurrentTabUrlCookie = () => {
                var _a;
                deleteDomainCookies(new URL(((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.url) || '').hostname);
            };
            const deleteMediumCookies = () => {
                deleteDomainCookies('medium.com');
            };
            const deleteDomainCookies = (domain) => __awaiter(void 0, void 0, void 0, function* () {
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
            const setBadgeDone = () => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                yield chrome.action.setBadgeBackgroundColor({
                    tabId: (_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id,
                    color: '#34A853',
                });
                yield chrome.action.setBadgeText({
                    tabId: (_b = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _b === void 0 ? void 0 : _b.id,
                    text: 'Done',
                });
            });
            init();
        }
    }
    catch (error) {
        console.log('error: ', error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhFQUE4RTtBQUNoSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxnQkFBZ0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxjQUFjO0FBQ25GO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esd0JBQXdCLHNDQUFzQztBQUM5RDtBQUNBO0FBQ0EscUNBQXFDLFNBQVMsSUFBSSxjQUFjLEVBQUUsS0FBSztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVRWxHRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci8uL3NyYy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGFiSWQ6IHRhYi5pZCwgdGV4dDogJycgfSk7XG59KSk7XG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoY2hhbmdlSW5mby51cmwgJiYgIWNoYW5nZUluZm8udXJsLmluY2x1ZGVzKCdjaHJvbWU6Ly8nKSkge1xuICAgICAgICBjb25zdCBpbmplY3RNeUpTQ29kZVRvQ3VycmVudFNpdGUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRUYWIgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfTtcbiAgICAgICAgICAgICAgICBsZXQgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB5aWVsZCBnZXRDdXJyZW50VGFiKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFRhYiA9PT0gbnVsbCB8fCBjdXJyZW50VGFiID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50VGFiLmlkKSA9PT0gdGFiSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogY3VycmVudFRhYiA9PT0gbnVsbCB8fCBjdXJyZW50VGFiID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50VGFiLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlczogWydjb250ZW50LmpzJ10sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmplY3RNeUpTQ29kZVRvQ3VycmVudFNpdGUgZXJyb3I6ICcsIGVycm9yLCBjaGFuZ2VJbmZvLnVybCwgdGFiSWQsIGN1cnJlbnRUYWIgPT09IG51bGwgfHwgY3VycmVudFRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFRhYi5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcigoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIGluamVjdE15SlNDb2RlVG9DdXJyZW50U2l0ZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxufSkpO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09ICdkZWxldGVDb29raWVzJykge1xuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUN1cnJlbnRUYWJVcmxDb29raWUoKTtcbiAgICAgICAgICAgICAgICBkZWxldGVNZWRpdW1Db29raWVzKCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiAnZG9uZScgfSk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2V0QmFkZ2VEb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUN1cnJlbnRUYWJVcmxDb29raWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGRlbGV0ZURvbWFpbkNvb2tpZXMobmV3IFVSTCgoKF9hID0gc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVybCkgfHwgJycpLmhvc3RuYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBkZWxldGVNZWRpdW1Db29raWVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZURvbWFpbkNvb2tpZXMoJ21lZGl1bS5jb20nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBkZWxldGVEb21haW5Db29raWVzID0gKGRvbWFpbikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZXNEZWxldGVkID0gMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29raWVzID0geWllbGQgY2hyb21lLmNvb2tpZXMuZ2V0QWxsKHsgZG9tYWluOiBkb21haW4gfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29raWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdObyBjb29raWVzIGZvdW5kJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGVuZGluZyA9IGNvb2tpZXMubWFwKGRlbGV0ZUNvb2tpZSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHBlbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzRGVsZXRlZCA9IHBlbmRpbmcubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvb2tpZXMgY2xlYW5lciB1bmV4cGVjdGVkIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb29raWUgPSAoY29va2llKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzZWN1cmUsIGRvbWFpbiwgcGF0aCwgbmFtZSwgc3RvcmVJZCB9ID0gY29va2llO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3REb21haW4gPSBkb21haW5bMF0gPT09ICcuJyA/IGRvbWFpbi5zcGxpdCgnJykuc2xpY2UoMSkuam9pbignJykgOiBkb21haW47XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBzZWN1cmUgPyAnaHR0cHM6JyA6ICdodHRwOic7XG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2NvcnJlY3REb21haW59JHtwYXRofWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNocm9tZS5jb29raWVzLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogY29va2llVXJsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZUlkOiBzdG9yZUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNldEJhZGdlRG9uZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLmFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG4gICAgICAgICAgICAgICAgICAgIHRhYklkOiAoX2EgPSBzZW5kZXIgPT09IG51bGwgfHwgc2VuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzM0QTg1MycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoe1xuICAgICAgICAgICAgICAgICAgICB0YWJJZDogKF9iID0gc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRG9uZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnJvcik7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2JhY2tncm91bmQudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==