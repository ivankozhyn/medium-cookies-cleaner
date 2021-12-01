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
                var _a, _b;
                if ((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.url) {
                    deleteDomainCookies(new URL((_b = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _b === void 0 ? void 0 : _b.url).hostname);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhFQUE4RTtBQUNoSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsY0FBYztBQUNuRjtBQUNBLGFBQWE7QUFDYjtBQUNBLHdCQUF3QixzQ0FBc0M7QUFDOUQ7QUFDQTtBQUNBLHFDQUFxQyxTQUFTLElBQUksY0FBYyxFQUFFLEtBQUs7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUVwR0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRhYklkOiB0YWIuaWQsIHRleHQ6ICcnIH0pO1xufSkpO1xuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGNoYW5nZUluZm8udXJsICYmICFjaGFuZ2VJbmZvLnVybC5pbmNsdWRlcygnY2hyb21lOi8vJykpIHtcbiAgICAgICAgY29uc3QgaW5qZWN0TXlKU0NvZGVUb0N1cnJlbnRTaXRlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBnZXRDdXJyZW50VGFiID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH07XG4gICAgICAgICAgICAgICAgbGV0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFiID0geWllbGQgZ2V0Q3VycmVudFRhYigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRUYWIgPT09IG51bGwgfHwgY3VycmVudFRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFRhYi5pZCkgPT09IHRhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIgPT09IG51bGwgfHwgY3VycmVudFRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFRhYi5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5qZWN0TXlKU0NvZGVUb0N1cnJlbnRTaXRlIGVycm9yOiAnLCBlcnJvciwgY2hhbmdlSW5mby51cmwsIHRhYklkLCBjdXJyZW50VGFiID09PSBudWxsIHx8IGN1cnJlbnRUYWIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRUYWIuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBpbmplY3RNeUpTQ29kZVRvQ3VycmVudFNpdGUoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAocmVxdWVzdC5tZXNzYWdlID09PSAnZGVsZXRlQ29va2llcycpIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVDdXJyZW50VGFiVXJsQ29va2llKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlTWVkaXVtQ29va2llcygpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ2RvbmUnIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNldEJhZGdlRG9uZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDdXJyZW50VGFiVXJsQ29va2llID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRG9tYWluQ29va2llcyhuZXcgVVJMKChfYiA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi51cmwpLmhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlTWVkaXVtQ29va2llcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVEb21haW5Db29raWVzKCdtZWRpdW0uY29tJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlRG9tYWluQ29va2llcyA9IChkb21haW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCBjb29raWVzRGVsZXRlZCA9IDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IHlpZWxkIGNocm9tZS5jb29raWVzLmdldEFsbCh7IGRvbWFpbjogZG9tYWluIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29va2llcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnTm8gY29va2llcyBmb3VuZCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlbmRpbmcgPSBjb29raWVzLm1hcChkZWxldGVDb29raWUpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChwZW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgY29va2llc0RlbGV0ZWQgPSBwZW5kaW5nLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb29raWVzIGNsZWFuZXIgdW5leHBlY3RlZCBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29va2llID0gKGNvb2tpZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VjdXJlLCBkb21haW4sIHBhdGgsIG5hbWUsIHN0b3JlSWQgfSA9IGNvb2tpZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0RG9tYWluID0gZG9tYWluWzBdID09PSAnLicgPyBkb21haW4uc3BsaXQoJycpLnNsaWNlKDEpLmpvaW4oJycpIDogZG9tYWluO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3RvY29sID0gc2VjdXJlID8gJ2h0dHBzOicgOiAnaHR0cDonO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb2tpZVVybCA9IGAke3Byb3RvY29sfS8vJHtjb3JyZWN0RG9tYWlufSR7cGF0aH1gO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaHJvbWUuY29va2llcy5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGNvb2tpZVVybCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVJZDogc3RvcmVJZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzZXRCYWRnZURvbmUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0YWJJZDogKF9hID0gc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzNEE4NTMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IChfYiA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RvbmUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyb3IpO1xuICAgIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9iYWNrZ3JvdW5kLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=