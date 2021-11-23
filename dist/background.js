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
        const init = () => {
            deleteCurrentTabUrlCookie();
            deleteMediumCookies();
            chrome.webNavigation.onCompleted.addListener(() => __awaiter(this, void 0, void 0, function* () {
                if (new URL(changeInfo.url || '').hostname !== google) {
                    yield injectMyJSCodeToCurrentSite();
                    yield setBadgeDone();
                }
            }));
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGNBQWM7QUFDL0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxJQUFJLGNBQWMsRUFBRSxLQUFLO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwrQ0FBK0MscUJBQXFCO0FBQ3BFLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUV6RUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS1jb29raWVzLWNsZWFuZXIvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9tZWRpdW0tY29va2llcy1jbGVhbmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWVkaXVtLWNvb2tpZXMtY2xlYW5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRhYklkOiB0YWIuaWQsIHRleHQ6ICcnIH0pO1xufSkpO1xuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWJJZCwgY2hhbmdlSW5mbykge1xuICAgIGlmIChjaGFuZ2VJbmZvLnVybCkge1xuICAgICAgICBjb25zdCBnb29nbGUgPSAnd3d3Lmdvb2dsZS5jb20nO1xuICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlQ3VycmVudFRhYlVybENvb2tpZSgpO1xuICAgICAgICAgICAgZGVsZXRlTWVkaXVtQ29va2llcygpO1xuICAgICAgICAgICAgY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXcgVVJMKGNoYW5nZUluZm8udXJsIHx8ICcnKS5ob3N0bmFtZSAhPT0gZ29vZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGluamVjdE15SlNDb2RlVG9DdXJyZW50U2l0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRCYWRnZURvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRlbGV0ZUN1cnJlbnRUYWJVcmxDb29raWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVEb21haW5Db29raWVzKG5ldyBVUkwoY2hhbmdlSW5mby51cmwgfHwgJycpLmhvc3RuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGVsZXRlTWVkaXVtQ29va2llcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZURvbWFpbkNvb2tpZXMoJ21lZGl1bS5jb20nKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGVsZXRlRG9tYWluQ29va2llcyA9IChkb21haW4pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBjb29raWVzRGVsZXRlZCA9IDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSB5aWVsZCBjaHJvbWUuY29va2llcy5nZXRBbGwoeyBkb21haW46IGRvbWFpbiB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29va2llcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdObyBjb29raWVzIGZvdW5kJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHBlbmRpbmcgPSBjb29raWVzLm1hcChkZWxldGVDb29raWUpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHBlbmRpbmcpO1xuICAgICAgICAgICAgICAgIGNvb2tpZXNEZWxldGVkID0gcGVuZGluZy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29va2llcyBjbGVhbmVyIHVuZXhwZWN0ZWQgZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvb2tpZSA9IChjb29raWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2VjdXJlLCBkb21haW4sIHBhdGgsIG5hbWUsIHN0b3JlSWQgfSA9IGNvb2tpZTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3REb21haW4gPSBkb21haW5bMF0gPT09ICcuJyA/IGRvbWFpbi5zcGxpdCgnJykuc2xpY2UoMSkuam9pbignJykgOiBkb21haW47XG4gICAgICAgICAgICBjb25zdCBwcm90b2NvbCA9IHNlY3VyZSA/ICdodHRwczonIDogJ2h0dHA6JztcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVVybCA9IGAke3Byb3RvY29sfS8vJHtjb3JyZWN0RG9tYWlufSR7cGF0aH1gO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tZS5jb29raWVzLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgdXJsOiBjb29raWVVcmwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBzdG9yZUlkOiBzdG9yZUlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGluamVjdE15SlNDb2RlVG9DdXJyZW50U2l0ZSA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzZXRCYWRnZURvbmUgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUuYWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcbiAgICAgICAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzNEE4NTMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRhYklkLCB0ZXh0OiAnRG9uZScgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbml0KCk7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2JhY2tncm91bmQudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==