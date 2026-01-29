/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/download/route";
exports.ids = ["app/api/download/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.js&appDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=%2F&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.js&appDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=%2F&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_anas_rehan_projects_Next_js_nfa_websitev_final_nfa_website_src_app_api_download_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/download/route.js */ \"(rsc)/./src/app/api/download/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/download/route\",\n        pathname: \"/api/download\",\n        filename: \"route\",\n        bundlePath: \"app/api/download/route\"\n    },\n    resolvedPagePath: \"/home/anas-rehan/projects/Next_js/nfa-websitev_final/nfa-website/src/app/api/download/route.js\",\n    nextConfigOutput,\n    userland: _home_anas_rehan_projects_Next_js_nfa_websitev_final_nfa_website_src_app_api_download_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkb3dubG9hZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZG93bmxvYWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkb3dubG9hZCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYW5hcy1yZWhhbiUyRnByb2plY3RzJTJGTmV4dF9qcyUyRm5mYS13ZWJzaXRldl9maW5hbCUyRm5mYS13ZWJzaXRlJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYW5hcy1yZWhhbiUyRnByb2plY3RzJTJGTmV4dF9qcyUyRm5mYS13ZWJzaXRldl9maW5hbCUyRm5mYS13ZWJzaXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSUyRiZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QztBQUMzSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvYW5hcy1yZWhhbi9wcm9qZWN0cy9OZXh0X2pzL25mYS13ZWJzaXRldl9maW5hbC9uZmEtd2Vic2l0ZS9zcmMvYXBwL2FwaS9kb3dubG9hZC9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZG93bmxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kb3dubG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZG93bmxvYWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9hbmFzLXJlaGFuL3Byb2plY3RzL05leHRfanMvbmZhLXdlYnNpdGV2X2ZpbmFsL25mYS13ZWJzaXRlL3NyYy9hcHAvYXBpL2Rvd25sb2FkL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.js&appDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=%2F&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/download/route.js":
/*!***************************************!*\
  !*** ./src/app/api/download/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/download/route.js\n\nconst API_BASE_URL = \"http://127.0.0.1:8000\";\nasync function GET() {\n    try {\n        const res = await fetch(`${API_BASE_URL}/api/downloads`, {\n            cache: \"force-cache\"\n        });\n        const data = await res.json();\n        const downloads = data.downloads.map((item)=>({\n                ...item,\n                file_url: `${API_BASE_URL}/uploads/downloads/${item.file}`\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: true,\n            downloads\n        });\n    } catch (error) {\n        console.error(\"Error fetching downloads from Laravel:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: false,\n            downloads: []\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kb3dubG9hZC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUE0QjtBQUNlO0FBQzNDLE1BQU1DLGVBQWVDLHVCQUFvQztBQUVsRCxlQUFlRztJQUNwQixJQUFJO1FBQ04sTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQUdOLGFBQWEsY0FBYyxDQUFDLEVBQUU7WUFDdkRPLE9BQU87UUFDVDtRQUNJLE1BQU1DLE9BQU8sTUFBTUgsSUFBSUksSUFBSTtRQUUzQixNQUFNQyxZQUFZRixLQUFLRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO2dCQUM5QyxHQUFHQSxJQUFJO2dCQUNQQyxVQUFVLEdBQUdiLGFBQWEsbUJBQW1CLEVBQUVZLEtBQUtFLElBQUksRUFBRTtZQUM1RDtRQUVBLE9BQU9mLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJNLFFBQVE7WUFDUkw7UUFDRjtJQUNGLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMENBQTBDQTtRQUN4RCxPQUFPakIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFTSxRQUFRO1lBQU9MLFdBQVcsRUFBRTtRQUFDO0lBQzFEO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL2FuYXMtcmVoYW4vcHJvamVjdHMvTmV4dF9qcy9uZmEtd2Vic2l0ZXZfZmluYWwvbmZhLXdlYnNpdGUvc3JjL2FwcC9hcGkvZG93bmxvYWQvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9kb3dubG9hZC9yb3V0ZS5qc1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG5jb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2FwaS9kb3dubG9hZHNgLCB7XG4gIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG59KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IGRvd25sb2FkcyA9IGRhdGEuZG93bmxvYWRzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIC4uLml0ZW0sXG4gICAgICBmaWxlX3VybDogYCR7QVBJX0JBU0VfVVJMfS91cGxvYWRzL2Rvd25sb2Fkcy8ke2l0ZW0uZmlsZX1gLCAvLyA8LS0gZnVsbCBVUkwgdG8gTGFyYXZlbCBwdWJsaWMgZm9sZGVyXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIGRvd25sb2FkcyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZG93bmxvYWRzIGZyb20gTGFyYXZlbDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogZmFsc2UsIGRvd25sb2FkczogW10gfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJBUElfQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiR0VUIiwicmVzIiwiZmV0Y2giLCJjYWNoZSIsImRhdGEiLCJqc29uIiwiZG93bmxvYWRzIiwibWFwIiwiaXRlbSIsImZpbGVfdXJsIiwiZmlsZSIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/download/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.js&appDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fanas-rehan%2Fprojects%2FNext_js%2Fnfa-websitev_final%2Fnfa-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=%2F&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();