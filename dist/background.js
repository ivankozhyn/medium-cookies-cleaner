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
    if (changeInfo.status === 'complete') {
        chrome.tabs.get(tabId, tab => {
            if (tab.url && !tab.url.includes('chrome://')) {
                const injectMyJSCodeToCurrentSite = () => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        yield chrome.scripting.executeScript({
                            target: { tabId },
                            files: ['content.js'],
                        });
                    }
                    catch (error) {
                        console.log('injectMyJSCodeToCurrentSite error: ', error, changeInfo.url, tabId);
                    }
                });
                injectMyJSCodeToCurrentSite();
            }
        });
    }
}));
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    var _a;
    try {
        const setBadgeDone = (tabId, color = '#34A853', text = 'Done') => __awaiter(void 0, void 0, void 0, function* () {
            yield chrome.action.setBadgeBackgroundColor({
                tabId,
                color,
            });
            yield chrome.action.setBadgeText({
                tabId,
                text,
            });
        });
        if (request.message === 'deleteCookies') {
            const init = () => __awaiter(void 0, void 0, void 0, function* () {
                deleteCurrentTabUrlCookie();
                deleteMediumCookies();
                sendResponse({ status: 'done' });
                yield setDeleteCookiesBadgeDone();
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
            const setDeleteCookiesBadgeDone = () => {
                var _a;
                if ((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id) {
                    setBadgeDone(sender.tab.id, '#4F74B3');
                }
            };
            init();
        }
        if (request.message === 'deleteBanners') {
            if ((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id) {
                setBadgeDone(sender.tab.id);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGdCQUFnQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGNBQWM7QUFDbkY7QUFDQSxhQUFhO0FBQ2I7QUFDQSx3QkFBd0Isc0NBQXNDO0FBQzlEO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUyxJQUFJLGNBQWMsRUFBRSxLQUFLO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VFekdEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0YWJJZDogdGFiLmlkLCB0ZXh0OiAnJyB9KTtcbn0pKTtcbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBjaHJvbWUudGFicy5nZXQodGFiSWQsIHRhYiA9PiB7XG4gICAgICAgICAgICBpZiAodGFiLnVybCAmJiAhdGFiLnVybC5pbmNsdWRlcygnY2hyb21lOi8vJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmplY3RNeUpTQ29kZVRvQ3VycmVudFNpdGUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5qZWN0TXlKU0NvZGVUb0N1cnJlbnRTaXRlIGVycm9yOiAnLCBlcnJvciwgY2hhbmdlSW5mby51cmwsIHRhYklkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGluamVjdE15SlNDb2RlVG9DdXJyZW50U2l0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KSk7XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNldEJhZGdlRG9uZSA9ICh0YWJJZCwgY29sb3IgPSAnIzM0QTg1MycsIHRleHQgPSAnRG9uZScpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgY2hyb21lLmFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG4gICAgICAgICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHtcbiAgICAgICAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVxdWVzdC5tZXNzYWdlID09PSAnZGVsZXRlQ29va2llcycpIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVDdXJyZW50VGFiVXJsQ29va2llKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlTWVkaXVtQ29va2llcygpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogJ2RvbmUnIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNldERlbGV0ZUNvb2tpZXNCYWRnZURvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ3VycmVudFRhYlVybENvb2tpZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGlmICgoX2EgPSBzZW5kZXIgPT09IG51bGwgfHwgc2VuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZURvbWFpbkNvb2tpZXMobmV3IFVSTCgoX2IgPSBzZW5kZXIgPT09IG51bGwgfHwgc2VuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudXJsKS5ob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU1lZGl1bUNvb2tpZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlRG9tYWluQ29va2llcygnbWVkaXVtLmNvbScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZURvbWFpbkNvb2tpZXMgPSAoZG9tYWluKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29va2llc0RlbGV0ZWQgPSAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSB5aWVsZCBjaHJvbWUuY29va2llcy5nZXRBbGwoeyBkb21haW46IGRvbWFpbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb2tpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05vIGNvb2tpZXMgZm91bmQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nID0gY29va2llcy5tYXAoZGVsZXRlQ29va2llKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocGVuZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXNEZWxldGVkID0gcGVuZGluZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29va2llcyBjbGVhbmVyIHVuZXhwZWN0ZWQgZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvb2tpZSA9IChjb29raWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNlY3VyZSwgZG9tYWluLCBwYXRoLCBuYW1lLCBzdG9yZUlkIH0gPSBjb29raWU7XG4gICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdERvbWFpbiA9IGRvbWFpblswXSA9PT0gJy4nID8gZG9tYWluLnNwbGl0KCcnKS5zbGljZSgxKS5qb2luKCcnKSA6IGRvbWFpbjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm90b2NvbCA9IHNlY3VyZSA/ICdodHRwczonIDogJ2h0dHA6JztcbiAgICAgICAgICAgICAgICBjb25zdCBjb29raWVVcmwgPSBgJHtwcm90b2NvbH0vLyR7Y29ycmVjdERvbWFpbn0ke3BhdGh9YDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hyb21lLmNvb2tpZXMucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjb29raWVVcmwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSWQ6IHN0b3JlSWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc2V0RGVsZXRlQ29va2llc0JhZGdlRG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCYWRnZURvbmUoc2VuZGVyLnRhYi5pZCwgJyM0Rjc0QjMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09ICdkZWxldGVCYW5uZXJzJykge1xuICAgICAgICAgICAgaWYgKChfYSA9IHNlbmRlciA9PT0gbnVsbCB8fCBzZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkge1xuICAgICAgICAgICAgICAgIHNldEJhZGdlRG9uZShzZW5kZXIudGFiLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnJvcik7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2JhY2tncm91bmQudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==