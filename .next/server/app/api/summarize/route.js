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
exports.id = "app/api/summarize/route";
exports.ids = ["app/api/summarize/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "node:assert":
/*!******************************!*\
  !*** external "node:assert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:assert");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:console":
/*!*******************************!*\
  !*** external "node:console" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:console");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:dns":
/*!***************************!*\
  !*** external "node:dns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:dns");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:http2":
/*!*****************************!*\
  !*** external "node:http2" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http2");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:perf_hooks":
/*!**********************************!*\
  !*** external "node:perf_hooks" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:perf_hooks");

/***/ }),

/***/ "node:querystring":
/*!***********************************!*\
  !*** external "node:querystring" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:querystring");

/***/ }),

/***/ "node:sqlite":
/*!******************************!*\
  !*** external "node:sqlite" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:sqlite");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:util/types":
/*!**********************************!*\
  !*** external "node:util/types" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util/types");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_usman_Downloads_a_2_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/summarize/route.ts */ \"(rsc)/./app/api/summarize/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/summarize/route\",\n        pathname: \"/api/summarize\",\n        filename: \"route\",\n        bundlePath: \"app/api/summarize/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\usman\\\\Downloads\\\\a_2\\\\app\\\\api\\\\summarize\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_usman_Downloads_a_2_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/summarize/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdW1tYXJpemUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c21hbiU1Q0Rvd25sb2FkcyU1Q2FfMiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDdXNtYW4lNUNEb3dubG9hZHMlNUNhXzImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN1bW1hcml6ZXIvP2IxN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNtYW5cXFxcRG93bmxvYWRzXFxcXGFfMlxcXFxhcHBcXFxcYXBpXFxcXHN1bW1hcml6ZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3VtbWFyaXplL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3VtbWFyaXplXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdW1tYXJpemUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx1c21hblxcXFxEb3dubG9hZHNcXFxcYV8yXFxcXGFwcFxcXFxhcGlcXFxcc3VtbWFyaXplXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdW1tYXJpemUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/summarize/route.ts":
/*!************************************!*\
  !*** ./app/api/summarize/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/scraper */ \"(rsc)/./lib/scraper.ts\");\n/* harmony import */ var _lib_summarizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/summarizer */ \"(rsc)/./lib/summarizer.ts\");\n/* harmony import */ var _lib_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/translator */ \"(rsc)/./lib/translator.ts\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./lib/supabase.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\n\n\n\nasync function POST(request) {\n    try {\n        const { url } = await request.json();\n        if (!url) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"URL is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate URL format\n        try {\n            new URL(url);\n        } catch  {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid URL format\"\n            }, {\n                status: 400\n            });\n        }\n        // Step 1: Scrape blog content\n        console.log(\"Scraping content from:\", url);\n        let scrapedContent;\n        try {\n            scrapedContent = await (0,_lib_scraper__WEBPACK_IMPORTED_MODULE_1__.scrapeBlogContent)(url);\n        } catch (error) {\n            console.error(\"Scraping error:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Failed to scrape content: ${error instanceof Error ? error.message : \"Unknown error\"}`\n            }, {\n                status: 400\n            });\n        }\n        // Step 2: Generate AI summary\n        console.log(\"Generating summary...\");\n        let englishSummary;\n        try {\n            englishSummary = (0,_lib_summarizer__WEBPACK_IMPORTED_MODULE_2__.generateSummary)(scrapedContent.content, scrapedContent.title);\n        } catch (error) {\n            console.error(\"Summary generation error:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Failed to generate summary: ${error instanceof Error ? error.message : \"Unknown error\"}`\n            }, {\n                status: 500\n            });\n        }\n        // Step 3: Translate to Urdu\n        console.log(\"Translating to Urdu...\");\n        let urduSummary;\n        try {\n            urduSummary = await (0,_lib_translator__WEBPACK_IMPORTED_MODULE_3__.translateToUrdu)(englishSummary);\n        } catch (error) {\n            console.error(\"Translation error:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Failed to translate: ${error instanceof Error ? error.message : \"Unknown error\"}`\n            }, {\n                status: 500\n            });\n        }\n        // Step 4: Save to databases (in background)\n        const saveToDatabase = async ()=>{\n            try {\n                // Save to Supabase\n                const summaryData = {\n                    blog_url: url,\n                    title: scrapedContent.title,\n                    summary_english: englishSummary,\n                    summary_urdu: urduSummary,\n                    created_at: new Date().toISOString(),\n                    updated_at: new Date().toISOString()\n                };\n                const { data: supabaseData, error: supabaseError } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_4__.supabase.from(\"blog_summaries\").insert(summaryData).select().single();\n                if (supabaseError) {\n                    console.error(\"Supabase save error:\", supabaseError);\n                    return;\n                }\n                // Save to MongoDB\n                try {\n                    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n                    const db = client.db(\"blog_summarizer\");\n                    const collection = db.collection(\"blog_contents\");\n                    const contentData = {\n                        blog_url: url,\n                        title: scrapedContent.title,\n                        content: scrapedContent.content,\n                        scraped_at: new Date(),\n                        word_count: scrapedContent.wordCount,\n                        author: scrapedContent.author,\n                        published_date: scrapedContent.publishedDate,\n                        summary_id: supabaseData?.id\n                    };\n                    await collection.insertOne(contentData);\n                } catch (mongoError) {\n                    console.error(\"MongoDB save error:\", mongoError);\n                }\n            } catch (error) {\n                console.error(\"Database save error:\", error);\n            }\n        };\n        // Start database save in background\n        saveToDatabase().catch(console.error);\n        // Return response immediately without waiting for database operations\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            blog_url: url,\n            title: scrapedContent.title,\n            summary_english: englishSummary,\n            summary_urdu: urduSummary,\n            word_count: scrapedContent.wordCount,\n            author: scrapedContent.author\n        });\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: `Internal server error: ${error instanceof Error ? error.message : \"Unknown error\"}`\n        }, {\n            status: 500\n        });\n    }\n}\n// Handle GET requests (optional - for testing)\nasync function GET() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Blog Summarizer API\",\n        usage: 'POST to this endpoint with { \"url\": \"https://example.com/blog\" }',\n        features: [\n            \"Web scraping\",\n            \"AI summarization\",\n            \"Urdu translation\"\n        ]\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO1FBQ1RxQyxPQUFPO1FBQ1BDLFVBQVU7WUFBQztZQUFnQjtZQUFvQjtTQUFtQjtJQUNwRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdW1tYXJpemVyLy4vYXBwL2FwaS9zdW1tYXJpemUvcm91dGUudHM/MjYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBzY3JhcGVCbG9nQ29udGVudCB9IGZyb20gXCJAL2xpYi9zY3JhcGVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVN1bW1hcnkgfSBmcm9tIFwiQC9saWIvc3VtbWFyaXplclwiO1xuaW1wb3J0IHsgdHJhbnNsYXRlVG9VcmR1IH0gZnJvbSBcIkAvbGliL3RyYW5zbGF0b3JcIjtcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVUkwgaXMgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIFVSTCBmb3JtYXRcbiAgICB0cnkge1xuICAgICAgbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkludmFsaWQgVVJMIGZvcm1hdFwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDE6IFNjcmFwZSBibG9nIGNvbnRlbnRcbiAgICBjb25zb2xlLmxvZyhcIlNjcmFwaW5nIGNvbnRlbnQgZnJvbTpcIiwgdXJsKTtcbiAgICBsZXQgc2NyYXBlZENvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHNjcmFwZWRDb250ZW50ID0gYXdhaXQgc2NyYXBlQmxvZ0NvbnRlbnQodXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlNjcmFwaW5nIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvcjogYEZhaWxlZCB0byBzY3JhcGUgY29udGVudDogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwifWAsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDI6IEdlbmVyYXRlIEFJIHN1bW1hcnlcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRpbmcgc3VtbWFyeS4uLlwiKTtcbiAgICBsZXQgZW5nbGlzaFN1bW1hcnk7XG4gICAgdHJ5IHtcbiAgICAgIGVuZ2xpc2hTdW1tYXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5KFxuICAgICAgICBzY3JhcGVkQ29udGVudC5jb250ZW50LFxuICAgICAgICBzY3JhcGVkQ29udGVudC50aXRsZVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlN1bW1hcnkgZ2VuZXJhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgc3VtbWFyeTogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwifWAsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDM6IFRyYW5zbGF0ZSB0byBVcmR1XG4gICAgY29uc29sZS5sb2coXCJUcmFuc2xhdGluZyB0byBVcmR1Li4uXCIpO1xuICAgIGxldCB1cmR1U3VtbWFyeTtcbiAgICB0cnkge1xuICAgICAgdXJkdVN1bW1hcnkgPSBhd2FpdCB0cmFuc2xhdGVUb1VyZHUoZW5nbGlzaFN1bW1hcnkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVHJhbnNsYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAge1xuICAgICAgICAgIGVycm9yOiBgRmFpbGVkIHRvIHRyYW5zbGF0ZTogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwifWAsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDQ6IFNhdmUgdG8gZGF0YWJhc2VzIChpbiBiYWNrZ3JvdW5kKVxuICAgIGNvbnN0IHNhdmVUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gU2F2ZSB0byBTdXBhYmFzZVxuICAgICAgICBjb25zdCBzdW1tYXJ5RGF0YSA9IHtcbiAgICAgICAgICBibG9nX3VybDogdXJsLFxuICAgICAgICAgIHRpdGxlOiBzY3JhcGVkQ29udGVudC50aXRsZSxcbiAgICAgICAgICBzdW1tYXJ5X2VuZ2xpc2g6IGVuZ2xpc2hTdW1tYXJ5LFxuICAgICAgICAgIHN1bW1hcnlfdXJkdTogdXJkdVN1bW1hcnksXG4gICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB7IGRhdGE6IHN1cGFiYXNlRGF0YSwgZXJyb3I6IHN1cGFiYXNlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oXCJibG9nX3N1bW1hcmllc1wiKVxuICAgICAgICAgIC5pbnNlcnQoc3VtbWFyeURhdGEpXG4gICAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgICAgLnNpbmdsZSgpO1xuXG4gICAgICAgIGlmIChzdXBhYmFzZUVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlN1cGFiYXNlIHNhdmUgZXJyb3I6XCIsIHN1cGFiYXNlRXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgdG8gTW9uZ29EQlxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG4gICAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJibG9nX3N1bW1hcml6ZXJcIik7XG4gICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJibG9nX2NvbnRlbnRzXCIpO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudERhdGEgPSB7XG4gICAgICAgICAgICBibG9nX3VybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHNjcmFwZWRDb250ZW50LnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogc2NyYXBlZENvbnRlbnQuY29udGVudCxcbiAgICAgICAgICAgIHNjcmFwZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB3b3JkX2NvdW50OiBzY3JhcGVkQ29udGVudC53b3JkQ291bnQsXG4gICAgICAgICAgICBhdXRob3I6IHNjcmFwZWRDb250ZW50LmF1dGhvcixcbiAgICAgICAgICAgIHB1Ymxpc2hlZF9kYXRlOiBzY3JhcGVkQ29udGVudC5wdWJsaXNoZWREYXRlLFxuICAgICAgICAgICAgc3VtbWFyeV9pZDogc3VwYWJhc2VEYXRhPy5pZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUoY29udGVudERhdGEpO1xuICAgICAgICB9IGNhdGNoIChtb25nb0Vycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIk1vbmdvREIgc2F2ZSBlcnJvcjpcIiwgbW9uZ29FcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBzYXZlIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGRhdGFiYXNlIHNhdmUgaW4gYmFja2dyb3VuZFxuICAgIHNhdmVUb0RhdGFiYXNlKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICAvLyBSZXR1cm4gcmVzcG9uc2UgaW1tZWRpYXRlbHkgd2l0aG91dCB3YWl0aW5nIGZvciBkYXRhYmFzZSBvcGVyYXRpb25zXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIGJsb2dfdXJsOiB1cmwsXG4gICAgICB0aXRsZTogc2NyYXBlZENvbnRlbnQudGl0bGUsXG4gICAgICBzdW1tYXJ5X2VuZ2xpc2g6IGVuZ2xpc2hTdW1tYXJ5LFxuICAgICAgc3VtbWFyeV91cmR1OiB1cmR1U3VtbWFyeSxcbiAgICAgIHdvcmRfY291bnQ6IHNjcmFwZWRDb250ZW50LndvcmRDb3VudCxcbiAgICAgIGF1dGhvcjogc2NyYXBlZENvbnRlbnQuYXV0aG9yLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIGVycm9yOiBgSW50ZXJuYWwgc2VydmVyIGVycm9yOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCJ9YCxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbi8vIEhhbmRsZSBHRVQgcmVxdWVzdHMgKG9wdGlvbmFsIC0gZm9yIHRlc3RpbmcpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIG1lc3NhZ2U6IFwiQmxvZyBTdW1tYXJpemVyIEFQSVwiLFxuICAgIHVzYWdlOiAnUE9TVCB0byB0aGlzIGVuZHBvaW50IHdpdGggeyBcInVybFwiOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vYmxvZ1wiIH0nLFxuICAgIGZlYXR1cmVzOiBbXCJXZWIgc2NyYXBpbmdcIiwgXCJBSSBzdW1tYXJpemF0aW9uXCIsIFwiVXJkdSB0cmFuc2xhdGlvblwiXSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic2NyYXBlQmxvZ0NvbnRlbnQiLCJnZW5lcmF0ZVN1bW1hcnkiLCJ0cmFuc2xhdGVUb1VyZHUiLCJzdXBhYmFzZSIsImNsaWVudFByb21pc2UiLCJQT1NUIiwicmVxdWVzdCIsInVybCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIlVSTCIsImNvbnNvbGUiLCJsb2ciLCJzY3JhcGVkQ29udGVudCIsIkVycm9yIiwibWVzc2FnZSIsImVuZ2xpc2hTdW1tYXJ5IiwiY29udGVudCIsInRpdGxlIiwidXJkdVN1bW1hcnkiLCJzYXZlVG9EYXRhYmFzZSIsInN1bW1hcnlEYXRhIiwiYmxvZ191cmwiLCJzdW1tYXJ5X2VuZ2xpc2giLCJzdW1tYXJ5X3VyZHUiLCJjcmVhdGVkX2F0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidXBkYXRlZF9hdCIsImRhdGEiLCJzdXBhYmFzZURhdGEiLCJzdXBhYmFzZUVycm9yIiwiZnJvbSIsImluc2VydCIsInNlbGVjdCIsInNpbmdsZSIsImNsaWVudCIsImRiIiwiY29sbGVjdGlvbiIsImNvbnRlbnREYXRhIiwic2NyYXBlZF9hdCIsIndvcmRfY291bnQiLCJ3b3JkQ291bnQiLCJhdXRob3IiLCJwdWJsaXNoZWRfZGF0ZSIsInB1Ymxpc2hlZERhdGUiLCJzdW1tYXJ5X2lkIiwiaWQiLCJpbnNlcnRPbmUiLCJtb25nb0Vycm9yIiwiY2F0Y2giLCJHRVQiLCJ1c2FnZSIsImZlYXR1cmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/summarize/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development, use global to preserve client across reloads\n    const globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCxNQUFNUSxrQkFBa0JDO0lBSXhCLElBQUksQ0FBQ0QsZ0JBQWdCRSxtQkFBbUIsRUFBRTtRQUN4Q0osU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLGdCQUFnQkUsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDdEQ7SUFDQUosZ0JBQWdCQyxnQkFBZ0JFLG1CQUFtQjtBQUNyRCxPQUFPLEVBSU47QUFFRCxpRUFBZUgsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3VtbWFyaXplci8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCwgdXNlIGdsb2JhbCB0byBwcmVzZXJ2ZSBjbGllbnQgYWNyb3NzIHJlbG9hZHNcbiAgY29uc3QgZ2xvYmFsV2l0aE1vbmdvID0gZ2xvYmFsIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYge1xuICAgIF9tb25nb0NsaWVudFByb21pc2U/OiBQcm9taXNlPE1vbmdvQ2xpZW50PjtcbiAgfTtcblxuICBpZiAoIWdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24sIGNyZWF0ZSBmcmVzaCBpbnN0YW5jZVxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG5cbi8vIFNjaGVtYSBmb3IgYmxvZyBjb250ZW50IGNvbGxlY3Rpb25cbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ0NvbnRlbnQge1xuICBfaWQ/OiBzdHJpbmc7XG4gIGJsb2dfdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgc2NyYXBlZF9hdDogRGF0ZTtcbiAgd29yZF9jb3VudDogbnVtYmVyO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZF9kYXRlPzogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./lib/scraper.ts":
/*!************************!*\
  !*** ./lib/scraper.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrapeBlogContent: () => (/* binding */ scrapeBlogContent)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"(rsc)/./node_modules/cheerio/dist/esm/index.js\");\n\n\n// Clean text before processing\nfunction cleanScrapedContent(text, title) {\n    // Remove the title from the beginning of content\n    const escapedTitle = title.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n    text = text.replace(new RegExp(`^${escapedTitle}`), \"\");\n    text = text.replace(new RegExp(`^[^a-zA-Z]*${escapedTitle}`), \"\");\n    // Remove reading time\n    text = text.replace(/\\d+\\s*min read/i, \"\");\n    // Remove date patterns\n    text = text.replace(/·[A-Za-z]+\\s+\\d+,\\s+\\d{4}/g, \"\");\n    text = text.replace(/[A-Za-z]+\\s+\\d+,\\s+\\d{4}/g, \"\");\n    // Remove common metadata\n    text = text.replace(/Listen|Share|AIML/g, \"\");\n    text = text.replace(/Photo by .* on Unsplash/i, \"\");\n    // Remove special characters from start\n    text = text.replace(/^[^a-zA-Z]+/, \"\");\n    // Clean up whitespace\n    text = text.replace(/\\s+/g, \" \").trim();\n    return text;\n}\nasync function scrapeBlogContent(url) {\n    try {\n        // Validate URL\n        const urlObj = new URL(url);\n        if (!urlObj.protocol.startsWith(\"http\")) {\n            throw new Error(\"Invalid URL protocol\");\n        }\n        // Fetch the webpage\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url, {\n            headers: {\n                \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36\"\n            },\n            timeout: 10000\n        });\n        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__.load(response.data);\n        // Extract title - try multiple selectors\n        let title = $(\"title\").text().trim();\n        if (!title) {\n            title = $(\"h1\").first().text().trim();\n        }\n        if (!title) {\n            title = $('meta[property=\"og:title\"]').attr(\"content\") || \"\";\n        }\n        // Extract main content - try multiple selectors for common blog structures\n        let content = \"\";\n        // Common content selectors\n        const contentSelectors = [\n            \"article\",\n            \".post-content\",\n            \".entry-content\",\n            \".content\",\n            \".post-body\",\n            \"main\",\n            \".article-body\",\n            '[role=\"main\"]'\n        ];\n        for (const selector of contentSelectors){\n            const element = $(selector);\n            if (element.length > 0 && element.text().trim().length > content.length) {\n                content = element.text().trim();\n            }\n        }\n        // If no content found with selectors, try to extract from paragraphs\n        if (!content || content.length < 100) {\n            content = $(\"p\").map((i, el)=>$(el).text().trim()).get().join(\" \");\n        }\n        // Extract author\n        let author = \"\";\n        const authorSelectors = [\n            \".author\",\n            \".byline\",\n            '[rel=\"author\"]',\n            \".post-author\",\n            'meta[name=\"author\"]'\n        ];\n        for (const selector of authorSelectors){\n            const element = $(selector);\n            if (element.length > 0) {\n                author = element.attr(\"content\") || element.text().trim();\n                break;\n            }\n        }\n        // Extract published date\n        let publishedDate = \"\";\n        const dateSelectors = [\n            \"time[datetime]\",\n            \".published\",\n            \".post-date\",\n            'meta[property=\"article:published_time\"]'\n        ];\n        for (const selector of dateSelectors){\n            const element = $(selector);\n            if (element.length > 0) {\n                publishedDate = element.attr(\"datetime\") || element.attr(\"content\") || element.text().trim();\n                break;\n            }\n        }\n        // Clean up content\n        content = content.replace(/\\s+/g, \" \").replace(/\\n+/g, \" \").trim();\n        // Clean the content using the title\n        content = cleanScrapedContent(content, title);\n        // Calculate word count\n        const wordCount = content.split(/\\s+/).filter((word)=>word.length > 0).length;\n        if (!title || !content || content.length < 50) {\n            throw new Error(\"Could not extract sufficient content from the webpage\");\n        }\n        return {\n            title: title.substring(0, 200),\n            content,\n            author: author.substring(0, 100),\n            publishedDate,\n            wordCount\n        };\n    } catch (error) {\n        if (error instanceof Error) {\n            throw new Error(`Failed to scrape blog content: ${error.message}`);\n        }\n        throw new Error(\"Failed to scrape blog content: Unknown error\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3VtbWFyaXplci8uL2xpYi9zY3JhcGVyLnRzPzAzZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0ICogYXMgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmFwZWRCbG9nIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZERhdGU/OiBzdHJpbmc7XG4gIHdvcmRDb3VudDogbnVtYmVyO1xufVxuXG4vLyBDbGVhbiB0ZXh0IGJlZm9yZSBwcm9jZXNzaW5nXG5mdW5jdGlvbiBjbGVhblNjcmFwZWRDb250ZW50KHRleHQ6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlbW92ZSB0aGUgdGl0bGUgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIGNvbnRlbnRcbiAgY29uc3QgZXNjYXBlZFRpdGxlID0gdGl0bGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2VzY2FwZWRUaXRsZX1gKSwgXCJcIik7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgXlteYS16QS1aXSoke2VzY2FwZWRUaXRsZX1gKSwgXCJcIik7XG5cbiAgLy8gUmVtb3ZlIHJlYWRpbmcgdGltZVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGQrXFxzKm1pbiByZWFkL2ksIFwiXCIpO1xuXG4gIC8vIFJlbW92ZSBkYXRlIHBhdHRlcm5zXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8K3W0EtWmEtel0rXFxzK1xcZCssXFxzK1xcZHs0fS9nLCBcIlwiKTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvW0EtWmEtel0rXFxzK1xcZCssXFxzK1xcZHs0fS9nLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgY29tbW9uIG1ldGFkYXRhXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL0xpc3RlbnxTaGFyZXxBSU1ML2csIFwiXCIpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9QaG90byBieSAuKiBvbiBVbnNwbGFzaC9pLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzIGZyb20gc3RhcnRcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlteYS16QS1aXSsvLCBcIlwiKTtcblxuICAvLyBDbGVhbiB1cCB3aGl0ZXNwYWNlXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjcmFwZUJsb2dDb250ZW50KHVybDogc3RyaW5nKTogUHJvbWlzZTxTY3JhcGVkQmxvZz4ge1xuICB0cnkge1xuICAgIC8vIFZhbGlkYXRlIFVSTFxuICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKTtcbiAgICBpZiAoIXVybE9iai5wcm90b2NvbC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBVUkwgcHJvdG9jb2xcIik7XG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggdGhlIHdlYnBhZ2VcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJVc2VyLUFnZW50XCI6XG4gICAgICAgICAgXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTEuMC40NDcyLjEyNCBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICB9LFxuICAgICAgdGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZCB0aW1lb3V0XG4gICAgfSk7XG5cbiAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgLy8gRXh0cmFjdCB0aXRsZSAtIHRyeSBtdWx0aXBsZSBzZWxlY3RvcnNcbiAgICBsZXQgdGl0bGUgPSAkKFwidGl0bGVcIikudGV4dCgpLnRyaW0oKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9ICQoXCJoMVwiKS5maXJzdCgpLnRleHQoKS50cmltKCk7XG4gICAgfVxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykuYXR0cihcImNvbnRlbnRcIikgfHwgXCJcIjtcbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IG1haW4gY29udGVudCAtIHRyeSBtdWx0aXBsZSBzZWxlY3RvcnMgZm9yIGNvbW1vbiBibG9nIHN0cnVjdHVyZXNcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG5cbiAgICAvLyBDb21tb24gY29udGVudCBzZWxlY3RvcnNcbiAgICBjb25zdCBjb250ZW50U2VsZWN0b3JzID0gW1xuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBcIi5wb3N0LWNvbnRlbnRcIixcbiAgICAgIFwiLmVudHJ5LWNvbnRlbnRcIixcbiAgICAgIFwiLmNvbnRlbnRcIixcbiAgICAgIFwiLnBvc3QtYm9keVwiLFxuICAgICAgXCJtYWluXCIsXG4gICAgICBcIi5hcnRpY2xlLWJvZHlcIixcbiAgICAgICdbcm9sZT1cIm1haW5cIl0nLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIGNvbnRlbnRTZWxlY3RvcnMpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDAgJiYgZWxlbWVudC50ZXh0KCkudHJpbSgpLmxlbmd0aCA+IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRlbnQgPSBlbGVtZW50LnRleHQoKS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29udGVudCBmb3VuZCB3aXRoIHNlbGVjdG9ycywgdHJ5IHRvIGV4dHJhY3QgZnJvbSBwYXJhZ3JhcGhzXG4gICAgaWYgKCFjb250ZW50IHx8IGNvbnRlbnQubGVuZ3RoIDwgMTAwKSB7XG4gICAgICBjb250ZW50ID0gJChcInBcIilcbiAgICAgICAgLm1hcCgoaSwgZWwpID0+ICQoZWwpLnRleHQoKS50cmltKCkpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAuam9pbihcIiBcIik7XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCBhdXRob3JcbiAgICBsZXQgYXV0aG9yID0gXCJcIjtcbiAgICBjb25zdCBhdXRob3JTZWxlY3RvcnMgPSBbXG4gICAgICBcIi5hdXRob3JcIixcbiAgICAgIFwiLmJ5bGluZVwiLFxuICAgICAgJ1tyZWw9XCJhdXRob3JcIl0nLFxuICAgICAgXCIucG9zdC1hdXRob3JcIixcbiAgICAgICdtZXRhW25hbWU9XCJhdXRob3JcIl0nLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIGF1dGhvclNlbGVjdG9ycykge1xuICAgICAgY29uc3QgZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBhdXRob3IgPSBlbGVtZW50LmF0dHIoXCJjb250ZW50XCIpIHx8IGVsZW1lbnQudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCBwdWJsaXNoZWQgZGF0ZVxuICAgIGxldCBwdWJsaXNoZWREYXRlID0gXCJcIjtcbiAgICBjb25zdCBkYXRlU2VsZWN0b3JzID0gW1xuICAgICAgXCJ0aW1lW2RhdGV0aW1lXVwiLFxuICAgICAgXCIucHVibGlzaGVkXCIsXG4gICAgICBcIi5wb3N0LWRhdGVcIixcbiAgICAgICdtZXRhW3Byb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiXScsXG4gICAgXTtcblxuICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgZGF0ZVNlbGVjdG9ycykge1xuICAgICAgY29uc3QgZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBwdWJsaXNoZWREYXRlID1cbiAgICAgICAgICBlbGVtZW50LmF0dHIoXCJkYXRldGltZVwiKSB8fFxuICAgICAgICAgIGVsZW1lbnQuYXR0cihcImNvbnRlbnRcIikgfHxcbiAgICAgICAgICBlbGVtZW50LnRleHQoKS50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGNvbnRlbnRcbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS5yZXBsYWNlKC9cXG4rL2csIFwiIFwiKS50cmltKCk7XG5cbiAgICAvLyBDbGVhbiB0aGUgY29udGVudCB1c2luZyB0aGUgdGl0bGVcbiAgICBjb250ZW50ID0gY2xlYW5TY3JhcGVkQ29udGVudChjb250ZW50LCB0aXRsZSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZCBjb3VudFxuICAgIGNvbnN0IHdvcmRDb3VudCA9IGNvbnRlbnRcbiAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmxlbmd0aCA+IDApLmxlbmd0aDtcblxuICAgIGlmICghdGl0bGUgfHwgIWNvbnRlbnQgfHwgY29udGVudC5sZW5ndGggPCA1MCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGV4dHJhY3Qgc3VmZmljaWVudCBjb250ZW50IGZyb20gdGhlIHdlYnBhZ2VcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aXRsZS5zdWJzdHJpbmcoMCwgMjAwKSwgLy8gTGltaXQgdGl0bGUgbGVuZ3RoXG4gICAgICBjb250ZW50LFxuICAgICAgYXV0aG9yOiBhdXRob3Iuc3Vic3RyaW5nKDAsIDEwMCksIC8vIExpbWl0IGF1dGhvciBsZW5ndGhcbiAgICAgIHB1Ymxpc2hlZERhdGUsXG4gICAgICB3b3JkQ291bnQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2NyYXBlIGJsb2cgY29udGVudDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2NyYXBlIGJsb2cgY29udGVudDogVW5rbm93biBlcnJvclwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiY2hlZXJpbyIsImNsZWFuU2NyYXBlZENvbnRlbnQiLCJ0ZXh0IiwidGl0bGUiLCJlc2NhcGVkVGl0bGUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidHJpbSIsInNjcmFwZUJsb2dDb250ZW50IiwidXJsIiwidXJsT2JqIiwiVVJMIiwicHJvdG9jb2wiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJ0aW1lb3V0IiwiJCIsImxvYWQiLCJkYXRhIiwiZmlyc3QiLCJhdHRyIiwiY29udGVudCIsImNvbnRlbnRTZWxlY3RvcnMiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJsZW5ndGgiLCJtYXAiLCJpIiwiZWwiLCJqb2luIiwiYXV0aG9yIiwiYXV0aG9yU2VsZWN0b3JzIiwicHVibGlzaGVkRGF0ZSIsImRhdGVTZWxlY3RvcnMiLCJ3b3JkQ291bnQiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJzdWJzdHJpbmciLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/scraper.ts\n");

/***/ }),

/***/ "(rsc)/./lib/summarizer.ts":
/*!***************************!*\
  !*** ./lib/summarizer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractKeyTopics: () => (/* binding */ extractKeyTopics),\n/* harmony export */   generateSummary: () => (/* binding */ generateSummary)\n/* harmony export */ });\n// Clean text before processing\nfunction cleanTextForSummary(text) {\n    // Remove title and separator if they appear at the start\n    const titleMatch = text.match(/^([^.!?]+)[-]{2}/);\n    if (titleMatch) {\n        text = text.substring(titleMatch[0].length).trim();\n    }\n    // Remove reading time\n    text = text.replace(/\\d+\\s*min read/i, \"\");\n    // Remove date patterns\n    text = text.replace(/·[A-Za-z]+\\s+\\d+,\\s+\\d{4}/g, \"\");\n    text = text.replace(/[A-Za-z]+\\s+\\d+,\\s+\\d{4}/g, \"\");\n    // Remove common metadata\n    text = text.replace(/Listen|Share|AIML/g, \"\");\n    text = text.replace(/Photo by .* on Unsplash/i, \"\");\n    // Remove \"Read More\" sections\n    text = text.replace(/Read More.*$/i, \"\");\n    // Remove any remaining title-like prefixes\n    text = text.replace(/^[^:]+:/, \"\");\n    // Clean up whitespace\n    text = text.replace(/\\s+/g, \" \").trim();\n    return text;\n}\n// Static AI Summary Logic - Simulates AI summarization\nfunction generateSummary(content, title) {\n    // Clean the content before processing\n    content = cleanTextForSummary(content);\n    // Lower the minimum content length requirement\n    if (!content || content.length < 30) {\n        throw new Error(\"Content is too short to summarize\");\n    }\n    // Split content into sentences\n    const sentences = content.split(/[.!?]+/).map((sentence)=>sentence.trim()).filter((sentence)=>sentence.length > 10); // Reduced minimum sentence length\n    if (sentences.length === 0) {\n        return \"Unable to generate summary from provided content.\";\n    }\n    // Simple scoring algorithm for sentence importance\n    const scoredSentences = sentences.map((sentence, index)=>{\n        let score = 0;\n        // First and last sentences get higher scores\n        if (index === 0 || index === sentences.length - 1) {\n            score += 2;\n        }\n        // Middle sentences get moderate score\n        if (index > 0 && index < sentences.length - 1) {\n            score += 1;\n        }\n        // Sentences with numbers, dates, or statistics\n        if (/\\d+/.test(sentence)) {\n            score += 1.5;\n        }\n        // Sentences with keywords indicating importance\n        const importantWords = [\n            \"important\",\n            \"significant\",\n            \"key\",\n            \"main\",\n            \"primary\",\n            \"essential\",\n            \"crucial\",\n            \"vital\",\n            \"critical\",\n            \"major\",\n            \"principal\",\n            \"fundamental\",\n            \"conclude\",\n            \"conclusion\",\n            \"result\",\n            \"findings\",\n            \"discovery\",\n            \"research\",\n            \"study\",\n            \"analysis\",\n            \"therefore\",\n            \"consequently\",\n            \"demand\",\n            \"require\",\n            \"announce\",\n            \"state\",\n            \"claim\",\n            \"argue\",\n            \"emphasize\",\n            \"highlight\",\n            \"stress\",\n            \"focus\",\n            \"point out\",\n            \"investment\",\n            \"development\",\n            \"growth\",\n            \"decline\",\n            \"increase\",\n            \"decrease\",\n            \"launch\",\n            \"introduce\",\n            \"release\",\n            \"unveil\",\n            \"reveal\",\n            \"disclose\"\n        ];\n        const lowerSentence = sentence.toLowerCase();\n        importantWords.forEach((word)=>{\n            if (lowerSentence.includes(word)) {\n                score += 1.5;\n            }\n        });\n        // Sentences with action verbs get higher scores\n        const actionVerbs = [\n            \"demand\",\n            \"require\",\n            \"develop\",\n            \"invest\",\n            \"grow\",\n            \"launch\",\n            \"announce\",\n            \"reveal\",\n            \"introduce\",\n            \"create\",\n            \"build\",\n            \"establish\",\n            \"implement\",\n            \"improve\",\n            \"enhance\",\n            \"expand\",\n            \"reduce\",\n            \"increase\"\n        ];\n        actionVerbs.forEach((verb)=>{\n            if (lowerSentence.includes(verb)) {\n                score += 1;\n            }\n        });\n        // Sentences with company/organization names\n        const organizations = [\n            \"openai\",\n            \"microsoft\",\n            \"google\",\n            \"apple\",\n            \"nvidia\",\n            \"meta\",\n            \"amazon\",\n            \"tesla\",\n            \"ibm\",\n            \"oracle\",\n            \"salesforce\"\n        ];\n        organizations.forEach((org)=>{\n            if (lowerSentence.toLowerCase().includes(org.toLowerCase())) {\n                score += 1;\n            }\n        });\n        // Longer sentences (but not too long) get slight preference\n        const wordCount = sentence.split(/\\s+/).length;\n        if (wordCount >= 8 && wordCount <= 30) {\n            score += 0.5;\n        }\n        return {\n            sentence,\n            score,\n            index\n        };\n    });\n    // Sort by score and select top sentences\n    const topSentences = scoredSentences.sort((a, b)=>b.score - a.score).slice(0, Math.min(5, Math.max(2, Math.ceil(sentences.length * 0.6)))) // Take more sentences, minimum 2\n    .sort((a, b)=>a.index - b.index); // Restore original order\n    // Create summary\n    let summary = topSentences.map((item)=>item.sentence).join(\". \");\n    // Ensure summary ends with proper punctuation\n    if (!summary.match(/[.!?]$/)) {\n        summary += \".\";\n    }\n    return summary;\n}\n// Extract key topics from content for better summarization\nfunction extractKeyTopics(content) {\n    const words = content.toLowerCase().replace(/[^\\w\\s]/g, \" \").split(/\\s+/).filter((word)=>word.length > 4);\n    // Count word frequency\n    const wordCount = {};\n    words.forEach((word)=>{\n        wordCount[word] = (wordCount[word] || 0) + 1;\n    });\n    // Filter out common words\n    const commonWords = new Set([\n        \"about\",\n        \"after\",\n        \"again\",\n        \"against\",\n        \"before\",\n        \"being\",\n        \"below\",\n        \"between\",\n        \"during\",\n        \"further\",\n        \"having\",\n        \"other\",\n        \"should\",\n        \"through\",\n        \"under\",\n        \"until\",\n        \"where\",\n        \"while\",\n        \"would\",\n        \"could\",\n        \"their\",\n        \"there\",\n        \"these\",\n        \"those\",\n        \"which\",\n        \"article\",\n        \"content\"\n    ]);\n    // Get top keywords\n    const keywords = Object.entries(wordCount).filter(([word])=>!commonWords.has(word)).sort(([, a], [, b])=>b - a).slice(0, 10).map(([word])=>word);\n    return keywords;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNHLGlCQUFpQm5DLE9BQWU7SUFDOUMsTUFBTW9DLFFBQVFwQyxRQUNYYyxXQUFXLEdBQ1hoQixPQUFPLENBQUMsWUFBWSxLQUNwQk0sS0FBSyxDQUFDLE9BQ05HLE1BQU0sQ0FBQyxDQUFDUyxPQUFTQSxLQUFLcEIsTUFBTSxHQUFHO0lBRWxDLHVCQUF1QjtJQUN2QixNQUFNMEIsWUFBdUMsQ0FBQztJQUM5Q2MsTUFBTXJCLE9BQU8sQ0FBQyxDQUFDQztRQUNiTSxTQUFTLENBQUNOLEtBQUssR0FBRyxDQUFDTSxTQUFTLENBQUNOLEtBQUssSUFBSSxLQUFLO0lBQzdDO0lBRUEsMEJBQTBCO0lBQzFCLE1BQU1xQixjQUFjLElBQUlDLElBQUk7UUFDMUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxtQkFBbUI7SUFDbkIsTUFBTUMsV0FBV0MsT0FBT0MsT0FBTyxDQUFDbkIsV0FDN0JmLE1BQU0sQ0FBQyxDQUFDLENBQUNTLEtBQUssR0FBSyxDQUFDcUIsWUFBWUssR0FBRyxDQUFDMUIsT0FDcENRLElBQUksQ0FBQyxDQUFDLEdBQUdDLEVBQUUsRUFBRSxHQUFHQyxFQUFFLEdBQUtBLElBQUlELEdBQzNCRSxLQUFLLENBQUMsR0FBRyxJQUNUdEIsR0FBRyxDQUFDLENBQUMsQ0FBQ1csS0FBSyxHQUFLQTtJQUVuQixPQUFPdUI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3VtbWFyaXplci8uL2xpYi9zdW1tYXJpemVyLnRzP2ZkMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2xlYW4gdGV4dCBiZWZvcmUgcHJvY2Vzc2luZ1xuZnVuY3Rpb24gY2xlYW5UZXh0Rm9yU3VtbWFyeSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZW1vdmUgdGl0bGUgYW5kIHNlcGFyYXRvciBpZiB0aGV5IGFwcGVhciBhdCB0aGUgc3RhcnRcbiAgY29uc3QgdGl0bGVNYXRjaCA9IHRleHQubWF0Y2goL14oW14uIT9dKylbLV17Mn0vKTtcbiAgaWYgKHRpdGxlTWF0Y2gpIHtcbiAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcodGl0bGVNYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSByZWFkaW5nIHRpbWVcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxkK1xccyptaW4gcmVhZC9pLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgZGF0ZSBwYXR0ZXJuc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/Ct1tBLVphLXpdK1xccytcXGQrLFxccytcXGR7NH0vZywgXCJcIik7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tBLVphLXpdK1xccytcXGQrLFxccytcXGR7NH0vZywgXCJcIik7XG5cbiAgLy8gUmVtb3ZlIGNvbW1vbiBtZXRhZGF0YVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9MaXN0ZW58U2hhcmV8QUlNTC9nLCBcIlwiKTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvUGhvdG8gYnkgLiogb24gVW5zcGxhc2gvaSwgXCJcIik7XG5cbiAgLy8gUmVtb3ZlIFwiUmVhZCBNb3JlXCIgc2VjdGlvbnNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvUmVhZCBNb3JlLiokL2ksIFwiXCIpO1xuXG4gIC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIHRpdGxlLWxpa2UgcHJlZml4ZXNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlteOl0rOi8sIFwiXCIpO1xuXG4gIC8vIENsZWFuIHVwIHdoaXRlc3BhY2VcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuXG4vLyBTdGF0aWMgQUkgU3VtbWFyeSBMb2dpYyAtIFNpbXVsYXRlcyBBSSBzdW1tYXJpemF0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdW1tYXJ5KGNvbnRlbnQ6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIENsZWFuIHRoZSBjb250ZW50IGJlZm9yZSBwcm9jZXNzaW5nXG4gIGNvbnRlbnQgPSBjbGVhblRleHRGb3JTdW1tYXJ5KGNvbnRlbnQpO1xuXG4gIC8vIExvd2VyIHRoZSBtaW5pbXVtIGNvbnRlbnQgbGVuZ3RoIHJlcXVpcmVtZW50XG4gIGlmICghY29udGVudCB8fCBjb250ZW50Lmxlbmd0aCA8IDMwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ29udGVudCBpcyB0b28gc2hvcnQgdG8gc3VtbWFyaXplXCIpO1xuICB9XG5cbiAgLy8gU3BsaXQgY29udGVudCBpbnRvIHNlbnRlbmNlc1xuICBjb25zdCBzZW50ZW5jZXMgPSBjb250ZW50XG4gICAgLnNwbGl0KC9bLiE/XSsvKVxuICAgIC5tYXAoKHNlbnRlbmNlKSA9PiBzZW50ZW5jZS50cmltKCkpXG4gICAgLmZpbHRlcigoc2VudGVuY2UpID0+IHNlbnRlbmNlLmxlbmd0aCA+IDEwKTsgLy8gUmVkdWNlZCBtaW5pbXVtIHNlbnRlbmNlIGxlbmd0aFxuXG4gIGlmIChzZW50ZW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiVW5hYmxlIHRvIGdlbmVyYXRlIHN1bW1hcnkgZnJvbSBwcm92aWRlZCBjb250ZW50LlwiO1xuICB9XG5cbiAgLy8gU2ltcGxlIHNjb3JpbmcgYWxnb3JpdGhtIGZvciBzZW50ZW5jZSBpbXBvcnRhbmNlXG4gIGNvbnN0IHNjb3JlZFNlbnRlbmNlcyA9IHNlbnRlbmNlcy5tYXAoKHNlbnRlbmNlLCBpbmRleCkgPT4ge1xuICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICAvLyBGaXJzdCBhbmQgbGFzdCBzZW50ZW5jZXMgZ2V0IGhpZ2hlciBzY29yZXNcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNlbnRlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICBzY29yZSArPSAyO1xuICAgIH1cblxuICAgIC8vIE1pZGRsZSBzZW50ZW5jZXMgZ2V0IG1vZGVyYXRlIHNjb3JlXG4gICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IHNlbnRlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICBzY29yZSArPSAxO1xuICAgIH1cblxuICAgIC8vIFNlbnRlbmNlcyB3aXRoIG51bWJlcnMsIGRhdGVzLCBvciBzdGF0aXN0aWNzXG4gICAgaWYgKC9cXGQrLy50ZXN0KHNlbnRlbmNlKSkge1xuICAgICAgc2NvcmUgKz0gMS41O1xuICAgIH1cblxuICAgIC8vIFNlbnRlbmNlcyB3aXRoIGtleXdvcmRzIGluZGljYXRpbmcgaW1wb3J0YW5jZVxuICAgIGNvbnN0IGltcG9ydGFudFdvcmRzID0gW1xuICAgICAgXCJpbXBvcnRhbnRcIixcbiAgICAgIFwic2lnbmlmaWNhbnRcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcIm1haW5cIixcbiAgICAgIFwicHJpbWFyeVwiLFxuICAgICAgXCJlc3NlbnRpYWxcIixcbiAgICAgIFwiY3J1Y2lhbFwiLFxuICAgICAgXCJ2aXRhbFwiLFxuICAgICAgXCJjcml0aWNhbFwiLFxuICAgICAgXCJtYWpvclwiLFxuICAgICAgXCJwcmluY2lwYWxcIixcbiAgICAgIFwiZnVuZGFtZW50YWxcIixcbiAgICAgIFwiY29uY2x1ZGVcIixcbiAgICAgIFwiY29uY2x1c2lvblwiLFxuICAgICAgXCJyZXN1bHRcIixcbiAgICAgIFwiZmluZGluZ3NcIixcbiAgICAgIFwiZGlzY292ZXJ5XCIsXG4gICAgICBcInJlc2VhcmNoXCIsXG4gICAgICBcInN0dWR5XCIsXG4gICAgICBcImFuYWx5c2lzXCIsXG4gICAgICBcInRoZXJlZm9yZVwiLFxuICAgICAgXCJjb25zZXF1ZW50bHlcIixcbiAgICAgIFwiZGVtYW5kXCIsXG4gICAgICBcInJlcXVpcmVcIixcbiAgICAgIFwiYW5ub3VuY2VcIixcbiAgICAgIFwic3RhdGVcIixcbiAgICAgIFwiY2xhaW1cIixcbiAgICAgIFwiYXJndWVcIixcbiAgICAgIFwiZW1waGFzaXplXCIsXG4gICAgICBcImhpZ2hsaWdodFwiLFxuICAgICAgXCJzdHJlc3NcIixcbiAgICAgIFwiZm9jdXNcIixcbiAgICAgIFwicG9pbnQgb3V0XCIsXG4gICAgICBcImludmVzdG1lbnRcIixcbiAgICAgIFwiZGV2ZWxvcG1lbnRcIixcbiAgICAgIFwiZ3Jvd3RoXCIsXG4gICAgICBcImRlY2xpbmVcIixcbiAgICAgIFwiaW5jcmVhc2VcIixcbiAgICAgIFwiZGVjcmVhc2VcIixcbiAgICAgIFwibGF1bmNoXCIsXG4gICAgICBcImludHJvZHVjZVwiLFxuICAgICAgXCJyZWxlYXNlXCIsXG4gICAgICBcInVudmVpbFwiLFxuICAgICAgXCJyZXZlYWxcIixcbiAgICAgIFwiZGlzY2xvc2VcIixcbiAgICBdO1xuXG4gICAgY29uc3QgbG93ZXJTZW50ZW5jZSA9IHNlbnRlbmNlLnRvTG93ZXJDYXNlKCk7XG4gICAgaW1wb3J0YW50V29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgaWYgKGxvd2VyU2VudGVuY2UuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgICAgc2NvcmUgKz0gMS41O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2VudGVuY2VzIHdpdGggYWN0aW9uIHZlcmJzIGdldCBoaWdoZXIgc2NvcmVzXG4gICAgY29uc3QgYWN0aW9uVmVyYnMgPSBbXG4gICAgICBcImRlbWFuZFwiLFxuICAgICAgXCJyZXF1aXJlXCIsXG4gICAgICBcImRldmVsb3BcIixcbiAgICAgIFwiaW52ZXN0XCIsXG4gICAgICBcImdyb3dcIixcbiAgICAgIFwibGF1bmNoXCIsXG4gICAgICBcImFubm91bmNlXCIsXG4gICAgICBcInJldmVhbFwiLFxuICAgICAgXCJpbnRyb2R1Y2VcIixcbiAgICAgIFwiY3JlYXRlXCIsXG4gICAgICBcImJ1aWxkXCIsXG4gICAgICBcImVzdGFibGlzaFwiLFxuICAgICAgXCJpbXBsZW1lbnRcIixcbiAgICAgIFwiaW1wcm92ZVwiLFxuICAgICAgXCJlbmhhbmNlXCIsXG4gICAgICBcImV4cGFuZFwiLFxuICAgICAgXCJyZWR1Y2VcIixcbiAgICAgIFwiaW5jcmVhc2VcIixcbiAgICBdO1xuXG4gICAgYWN0aW9uVmVyYnMuZm9yRWFjaCgodmVyYikgPT4ge1xuICAgICAgaWYgKGxvd2VyU2VudGVuY2UuaW5jbHVkZXModmVyYikpIHtcbiAgICAgICAgc2NvcmUgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNlbnRlbmNlcyB3aXRoIGNvbXBhbnkvb3JnYW5pemF0aW9uIG5hbWVzXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IFtcbiAgICAgIFwib3BlbmFpXCIsXG4gICAgICBcIm1pY3Jvc29mdFwiLFxuICAgICAgXCJnb29nbGVcIixcbiAgICAgIFwiYXBwbGVcIixcbiAgICAgIFwibnZpZGlhXCIsXG4gICAgICBcIm1ldGFcIixcbiAgICAgIFwiYW1hem9uXCIsXG4gICAgICBcInRlc2xhXCIsXG4gICAgICBcImlibVwiLFxuICAgICAgXCJvcmFjbGVcIixcbiAgICAgIFwic2FsZXNmb3JjZVwiLFxuICAgIF07XG5cbiAgICBvcmdhbml6YXRpb25zLmZvckVhY2goKG9yZykgPT4ge1xuICAgICAgaWYgKGxvd2VyU2VudGVuY2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhvcmcudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgc2NvcmUgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExvbmdlciBzZW50ZW5jZXMgKGJ1dCBub3QgdG9vIGxvbmcpIGdldCBzbGlnaHQgcHJlZmVyZW5jZVxuICAgIGNvbnN0IHdvcmRDb3VudCA9IHNlbnRlbmNlLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuICAgIGlmICh3b3JkQ291bnQgPj0gOCAmJiB3b3JkQ291bnQgPD0gMzApIHtcbiAgICAgIHNjb3JlICs9IDAuNTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZW50ZW5jZSwgc2NvcmUsIGluZGV4IH07XG4gIH0pO1xuXG4gIC8vIFNvcnQgYnkgc2NvcmUgYW5kIHNlbGVjdCB0b3Agc2VudGVuY2VzXG4gIGNvbnN0IHRvcFNlbnRlbmNlcyA9IHNjb3JlZFNlbnRlbmNlc1xuICAgIC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSlcbiAgICAuc2xpY2UoMCwgTWF0aC5taW4oNSwgTWF0aC5tYXgoMiwgTWF0aC5jZWlsKHNlbnRlbmNlcy5sZW5ndGggKiAwLjYpKSkpIC8vIFRha2UgbW9yZSBzZW50ZW5jZXMsIG1pbmltdW0gMlxuICAgIC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7IC8vIFJlc3RvcmUgb3JpZ2luYWwgb3JkZXJcblxuICAvLyBDcmVhdGUgc3VtbWFyeVxuICBsZXQgc3VtbWFyeSA9IHRvcFNlbnRlbmNlcy5tYXAoKGl0ZW0pID0+IGl0ZW0uc2VudGVuY2UpLmpvaW4oXCIuIFwiKTtcblxuICAvLyBFbnN1cmUgc3VtbWFyeSBlbmRzIHdpdGggcHJvcGVyIHB1bmN0dWF0aW9uXG4gIGlmICghc3VtbWFyeS5tYXRjaCgvWy4hP10kLykpIHtcbiAgICBzdW1tYXJ5ICs9IFwiLlwiO1xuICB9XG5cbiAgcmV0dXJuIHN1bW1hcnk7XG59XG5cbi8vIEV4dHJhY3Qga2V5IHRvcGljcyBmcm9tIGNvbnRlbnQgZm9yIGJldHRlciBzdW1tYXJpemF0aW9uXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEtleVRvcGljcyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHdvcmRzID0gY29udGVudFxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzXS9nLCBcIiBcIilcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gNCk7XG5cbiAgLy8gQ291bnQgd29yZCBmcmVxdWVuY3lcbiAgY29uc3Qgd29yZENvdW50OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIHdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICB3b3JkQ291bnRbd29yZF0gPSAod29yZENvdW50W3dvcmRdIHx8IDApICsgMTtcbiAgfSk7XG5cbiAgLy8gRmlsdGVyIG91dCBjb21tb24gd29yZHNcbiAgY29uc3QgY29tbW9uV29yZHMgPSBuZXcgU2V0KFtcbiAgICBcImFib3V0XCIsXG4gICAgXCJhZnRlclwiLFxuICAgIFwiYWdhaW5cIixcbiAgICBcImFnYWluc3RcIixcbiAgICBcImJlZm9yZVwiLFxuICAgIFwiYmVpbmdcIixcbiAgICBcImJlbG93XCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJkdXJpbmdcIixcbiAgICBcImZ1cnRoZXJcIixcbiAgICBcImhhdmluZ1wiLFxuICAgIFwib3RoZXJcIixcbiAgICBcInNob3VsZFwiLFxuICAgIFwidGhyb3VnaFwiLFxuICAgIFwidW5kZXJcIixcbiAgICBcInVudGlsXCIsXG4gICAgXCJ3aGVyZVwiLFxuICAgIFwid2hpbGVcIixcbiAgICBcIndvdWxkXCIsXG4gICAgXCJjb3VsZFwiLFxuICAgIFwidGhlaXJcIixcbiAgICBcInRoZXJlXCIsXG4gICAgXCJ0aGVzZVwiLFxuICAgIFwidGhvc2VcIixcbiAgICBcIndoaWNoXCIsXG4gICAgXCJhcnRpY2xlXCIsXG4gICAgXCJjb250ZW50XCIsXG4gIF0pO1xuXG4gIC8vIEdldCB0b3Aga2V5d29yZHNcbiAgY29uc3Qga2V5d29yZHMgPSBPYmplY3QuZW50cmllcyh3b3JkQ291bnQpXG4gICAgLmZpbHRlcigoW3dvcmRdKSA9PiAhY29tbW9uV29yZHMuaGFzKHdvcmQpKVxuICAgIC5zb3J0KChbLCBhXSwgWywgYl0pID0+IGIgLSBhKVxuICAgIC5zbGljZSgwLCAxMClcbiAgICAubWFwKChbd29yZF0pID0+IHdvcmQpO1xuXG4gIHJldHVybiBrZXl3b3Jkcztcbn1cbiJdLCJuYW1lcyI6WyJjbGVhblRleHRGb3JTdW1tYXJ5IiwidGV4dCIsInRpdGxlTWF0Y2giLCJtYXRjaCIsInN1YnN0cmluZyIsImxlbmd0aCIsInRyaW0iLCJyZXBsYWNlIiwiZ2VuZXJhdGVTdW1tYXJ5IiwiY29udGVudCIsInRpdGxlIiwiRXJyb3IiLCJzZW50ZW5jZXMiLCJzcGxpdCIsIm1hcCIsInNlbnRlbmNlIiwiZmlsdGVyIiwic2NvcmVkU2VudGVuY2VzIiwiaW5kZXgiLCJzY29yZSIsInRlc3QiLCJpbXBvcnRhbnRXb3JkcyIsImxvd2VyU2VudGVuY2UiLCJ0b0xvd2VyQ2FzZSIsImZvckVhY2giLCJ3b3JkIiwiaW5jbHVkZXMiLCJhY3Rpb25WZXJicyIsInZlcmIiLCJvcmdhbml6YXRpb25zIiwib3JnIiwid29yZENvdW50IiwidG9wU2VudGVuY2VzIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJNYXRoIiwibWluIiwibWF4IiwiY2VpbCIsInN1bW1hcnkiLCJpdGVtIiwiam9pbiIsImV4dHJhY3RLZXlUb3BpY3MiLCJ3b3JkcyIsImNvbW1vbldvcmRzIiwiU2V0Iiwia2V5d29yZHMiLCJPYmplY3QiLCJlbnRyaWVzIiwiaGFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/summarizer.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase.ts":
/*!*************************!*\
  !*** ./lib/supabase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;\nconst supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDeEQsTUFBTUMsa0JBQWtCSCxRQUFRQyxHQUFHLENBQUNHLDZCQUE2QjtBQUUxRCxNQUFNQyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdW1tYXJpemVyLy4vbGliL3N1cGFiYXNlLnRzP2M5OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCE7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSE7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcblxuLy8gRGF0YWJhc2Ugc2NoZW1hIGZvciBzdW1tYXJ5IHRhYmxlXG5leHBvcnQgaW50ZXJmYWNlIEJsb2dTdW1tYXJ5IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGJsb2dfdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1bW1hcnlfZW5nbGlzaDogc3RyaW5nO1xuICBzdW1tYXJ5X3VyZHU6IHN0cmluZztcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcbiAgdXBkYXRlZF9hdD86IHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase.ts\n");

/***/ }),

/***/ "(rsc)/./lib/translator.ts":
/*!***************************!*\
  !*** ./lib/translator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTranslationStats: () => (/* binding */ getTranslationStats),\n/* harmony export */   translateToUrdu: () => (/* binding */ translateToUrdu)\n/* harmony export */ });\nasync function translateToUrdu(englishText) {\n    try {\n        // Clean the text before translation\n        const cleanedText = cleanTextForTranslation(englishText);\n        // Split text into chunks of 400 characters (leaving room for encoding)\n        // Split at sentence boundaries when possible\n        const chunks = splitIntoChunks(cleanedText);\n        // Translate each chunk\n        const translatedChunks = await Promise.all(chunks.map(async (chunk)=>{\n            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=en|ur`);\n            const data = await response.json();\n            return data.responseData.translatedText;\n        }));\n        // Combine translated chunks\n        return translatedChunks.join(\" \");\n    } catch (error) {\n        console.error(\"Translation error:\", error);\n        throw new Error(\"Failed to translate text\");\n    }\n}\n// Helper function to split text into chunks\nfunction splitIntoChunks(text, maxChunkSize = 400) {\n    const chunks = [];\n    let currentChunk = \"\";\n    // Split into sentences first\n    const sentences = text.split(/(?<=[.!?])\\s+/);\n    for (const sentence of sentences){\n        // If adding this sentence would exceed chunk size, save current chunk and start new one\n        if ((currentChunk + sentence).length > maxChunkSize && currentChunk.length > 0) {\n            chunks.push(currentChunk.trim());\n            currentChunk = \"\";\n        }\n        // If a single sentence is longer than maxChunkSize, split it by words\n        if (sentence.length > maxChunkSize) {\n            const words = sentence.split(/\\s+/);\n            for (const word of words){\n                if ((currentChunk + \" \" + word).length > maxChunkSize) {\n                    chunks.push(currentChunk.trim());\n                    currentChunk = word;\n                } else {\n                    currentChunk += (currentChunk ? \" \" : \"\") + word;\n                }\n            }\n        } else {\n            currentChunk += (currentChunk ? \" \" : \"\") + sentence;\n        }\n    }\n    // Add the last chunk if there is one\n    if (currentChunk) {\n        chunks.push(currentChunk.trim());\n    }\n    return chunks;\n}\n// Helper function to clean text before translation\nfunction cleanTextForTranslation(text) {\n    // Remove title if it appears at the start\n    const titleMatch = text.match(/^([^.!?]+)[-]{2}/);\n    if (titleMatch) {\n        text = text.substring(titleMatch[0].length).trim();\n    }\n    // Remove reading time\n    text = text.replace(/\\d+\\s*min read/i, \"\");\n    // Remove date\n    text = text.replace(/·[A-Za-z]+\\s+\\d+,\\s+\\d{4}/g, \"\");\n    // Remove metadata like Listen, Share\n    text = text.replace(/Listen|Share/g, \"\");\n    // Remove photo credit\n    text = text.replace(/Photo by .* on Unsplash/i, \"\");\n    // Remove AIML tag\n    text = text.replace(/AIML/g, \"\");\n    // Remove \"Read More\" and similar endings\n    text = text.replace(/Read More.*$/i, \"\");\n    // Clean up extra whitespace\n    text = text.replace(/\\s+/g, \" \").trim();\n    return text;\n}\n// Helper function to calculate translation ratio (for debugging)\nfunction calculateTranslationRatio(original, translated) {\n    return translated.length / original.length;\n}\n// Helper function to get translation stats (for debugging)\nfunction getTranslationStats(englishText) {\n    const words = englishText.toLowerCase().split(/\\s+/);\n    return {\n        totalWords: words.length,\n        translatedWords: words.length,\n        translationPercentage: 100,\n        untranslatedWords: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7SUFFckMsT0FBT1I7QUFDVDtBQUVBLGlFQUFpRTtBQUNqRSxTQUFTZSwwQkFDUEMsUUFBZ0IsRUFDaEJDLFVBQWtCO0lBRWxCLE9BQU9BLFdBQVdYLE1BQU0sR0FBR1UsU0FBU1YsTUFBTTtBQUM1QztBQUVBLDJEQUEyRDtBQUNwRCxTQUFTWSxvQkFBb0J2QyxXQUFtQjtJQU1yRCxNQUFNOEIsUUFBUTlCLFlBQVl3QyxXQUFXLEdBQUdmLEtBQUssQ0FBQztJQUM5QyxPQUFPO1FBQ0xnQixZQUFZWCxNQUFNSCxNQUFNO1FBQ3hCZSxpQkFBaUJaLE1BQU1ILE1BQU07UUFDN0JnQix1QkFBdUI7UUFDdkJDLG1CQUFtQixFQUFFO0lBQ3ZCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN1bW1hcml6ZXIvLi9saWIvdHJhbnNsYXRvci50cz83ZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2xhdGVUb1VyZHUoZW5nbGlzaFRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgLy8gQ2xlYW4gdGhlIHRleHQgYmVmb3JlIHRyYW5zbGF0aW9uXG4gICAgY29uc3QgY2xlYW5lZFRleHQgPSBjbGVhblRleHRGb3JUcmFuc2xhdGlvbihlbmdsaXNoVGV4dCk7XG5cbiAgICAvLyBTcGxpdCB0ZXh0IGludG8gY2h1bmtzIG9mIDQwMCBjaGFyYWN0ZXJzIChsZWF2aW5nIHJvb20gZm9yIGVuY29kaW5nKVxuICAgIC8vIFNwbGl0IGF0IHNlbnRlbmNlIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZVxuICAgIGNvbnN0IGNodW5rcyA9IHNwbGl0SW50b0NodW5rcyhjbGVhbmVkVGV4dCk7XG5cbiAgICAvLyBUcmFuc2xhdGUgZWFjaCBjaHVua1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRDaHVua3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGNodW5rcy5tYXAoYXN5bmMgKGNodW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm15bWVtb3J5LnRyYW5zbGF0ZWQubmV0L2dldD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNodW5rKX0mbGFuZ3BhaXI9ZW58dXJgXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnJlc3BvbnNlRGF0YS50cmFuc2xhdGVkVGV4dDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIENvbWJpbmUgdHJhbnNsYXRlZCBjaHVua3NcbiAgICByZXR1cm4gdHJhbnNsYXRlZENodW5rcy5qb2luKFwiIFwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVHJhbnNsYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRleHRcIik7XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHNwbGl0IHRleHQgaW50byBjaHVua3NcbmZ1bmN0aW9uIHNwbGl0SW50b0NodW5rcyh0ZXh0OiBzdHJpbmcsIG1heENodW5rU2l6ZTogbnVtYmVyID0gNDAwKTogc3RyaW5nW10ge1xuICBjb25zdCBjaHVua3M6IHN0cmluZ1tdID0gW107XG4gIGxldCBjdXJyZW50Q2h1bmsgPSBcIlwiO1xuXG4gIC8vIFNwbGl0IGludG8gc2VudGVuY2VzIGZpcnN0XG4gIGNvbnN0IHNlbnRlbmNlcyA9IHRleHQuc3BsaXQoLyg/PD1bLiE/XSlcXHMrLyk7XG5cbiAgZm9yIChjb25zdCBzZW50ZW5jZSBvZiBzZW50ZW5jZXMpIHtcbiAgICAvLyBJZiBhZGRpbmcgdGhpcyBzZW50ZW5jZSB3b3VsZCBleGNlZWQgY2h1bmsgc2l6ZSwgc2F2ZSBjdXJyZW50IGNodW5rIGFuZCBzdGFydCBuZXcgb25lXG4gICAgaWYgKFxuICAgICAgKGN1cnJlbnRDaHVuayArIHNlbnRlbmNlKS5sZW5ndGggPiBtYXhDaHVua1NpemUgJiZcbiAgICAgIGN1cnJlbnRDaHVuay5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjaHVua3MucHVzaChjdXJyZW50Q2h1bmsudHJpbSgpKTtcbiAgICAgIGN1cnJlbnRDaHVuayA9IFwiXCI7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBzaW5nbGUgc2VudGVuY2UgaXMgbG9uZ2VyIHRoYW4gbWF4Q2h1bmtTaXplLCBzcGxpdCBpdCBieSB3b3Jkc1xuICAgIGlmIChzZW50ZW5jZS5sZW5ndGggPiBtYXhDaHVua1NpemUpIHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc2VudGVuY2Uuc3BsaXQoL1xccysvKTtcbiAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICBpZiAoKGN1cnJlbnRDaHVuayArIFwiIFwiICsgd29yZCkubGVuZ3RoID4gbWF4Q2h1bmtTaXplKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goY3VycmVudENodW5rLnRyaW0oKSk7XG4gICAgICAgICAgY3VycmVudENodW5rID0gd29yZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50Q2h1bmsgKz0gKGN1cnJlbnRDaHVuayA/IFwiIFwiIDogXCJcIikgKyB3b3JkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRDaHVuayArPSAoY3VycmVudENodW5rID8gXCIgXCIgOiBcIlwiKSArIHNlbnRlbmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgbGFzdCBjaHVuayBpZiB0aGVyZSBpcyBvbmVcbiAgaWYgKGN1cnJlbnRDaHVuaykge1xuICAgIGNodW5rcy5wdXNoKGN1cnJlbnRDaHVuay50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuIGNodW5rcztcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNsZWFuIHRleHQgYmVmb3JlIHRyYW5zbGF0aW9uXG5mdW5jdGlvbiBjbGVhblRleHRGb3JUcmFuc2xhdGlvbih0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZW1vdmUgdGl0bGUgaWYgaXQgYXBwZWFycyBhdCB0aGUgc3RhcnRcbiAgY29uc3QgdGl0bGVNYXRjaCA9IHRleHQubWF0Y2goL14oW14uIT9dKylbLV17Mn0vKTtcbiAgaWYgKHRpdGxlTWF0Y2gpIHtcbiAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcodGl0bGVNYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSByZWFkaW5nIHRpbWVcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxkK1xccyptaW4gcmVhZC9pLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgZGF0ZVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/Ct1tBLVphLXpdK1xccytcXGQrLFxccytcXGR7NH0vZywgXCJcIik7XG5cbiAgLy8gUmVtb3ZlIG1ldGFkYXRhIGxpa2UgTGlzdGVuLCBTaGFyZVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9MaXN0ZW58U2hhcmUvZywgXCJcIik7XG5cbiAgLy8gUmVtb3ZlIHBob3RvIGNyZWRpdFxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9QaG90byBieSAuKiBvbiBVbnNwbGFzaC9pLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgQUlNTCB0YWdcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvQUlNTC9nLCBcIlwiKTtcblxuICAvLyBSZW1vdmUgXCJSZWFkIE1vcmVcIiBhbmQgc2ltaWxhciBlbmRpbmdzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1JlYWQgTW9yZS4qJC9pLCBcIlwiKTtcblxuICAvLyBDbGVhbiB1cCBleHRyYSB3aGl0ZXNwYWNlXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0cmFuc2xhdGlvbiByYXRpbyAoZm9yIGRlYnVnZ2luZylcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyYW5zbGF0aW9uUmF0aW8oXG4gIG9yaWdpbmFsOiBzdHJpbmcsXG4gIHRyYW5zbGF0ZWQ6IHN0cmluZ1xuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRyYW5zbGF0ZWQubGVuZ3RoIC8gb3JpZ2luYWwubGVuZ3RoO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRyYW5zbGF0aW9uIHN0YXRzIChmb3IgZGVidWdnaW5nKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uU3RhdHMoZW5nbGlzaFRleHQ6IHN0cmluZyk6IHtcbiAgdG90YWxXb3JkczogbnVtYmVyO1xuICB0cmFuc2xhdGVkV29yZHM6IG51bWJlcjtcbiAgdHJhbnNsYXRpb25QZXJjZW50YWdlOiBudW1iZXI7XG4gIHVudHJhbnNsYXRlZFdvcmRzOiBzdHJpbmdbXTtcbn0ge1xuICBjb25zdCB3b3JkcyA9IGVuZ2xpc2hUZXh0LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKTtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbFdvcmRzOiB3b3Jkcy5sZW5ndGgsXG4gICAgdHJhbnNsYXRlZFdvcmRzOiB3b3Jkcy5sZW5ndGgsIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIGFuIEFQSSwgYWxsIHdvcmRzIGFyZSB0cmFuc2xhdGVkXG4gICAgdHJhbnNsYXRpb25QZXJjZW50YWdlOiAxMDAsXG4gICAgdW50cmFuc2xhdGVkV29yZHM6IFtdLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInRyYW5zbGF0ZVRvVXJkdSIsImVuZ2xpc2hUZXh0IiwiY2xlYW5lZFRleHQiLCJjbGVhblRleHRGb3JUcmFuc2xhdGlvbiIsImNodW5rcyIsInNwbGl0SW50b0NodW5rcyIsInRyYW5zbGF0ZWRDaHVua3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiY2h1bmsiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0YSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJ0cmFuc2xhdGVkVGV4dCIsImpvaW4iLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsInRleHQiLCJtYXhDaHVua1NpemUiLCJjdXJyZW50Q2h1bmsiLCJzZW50ZW5jZXMiLCJzcGxpdCIsInNlbnRlbmNlIiwibGVuZ3RoIiwicHVzaCIsInRyaW0iLCJ3b3JkcyIsIndvcmQiLCJ0aXRsZU1hdGNoIiwibWF0Y2giLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwiY2FsY3VsYXRlVHJhbnNsYXRpb25SYXRpbyIsIm9yaWdpbmFsIiwidHJhbnNsYXRlZCIsImdldFRyYW5zbGF0aW9uU3RhdHMiLCJ0b0xvd2VyQ2FzZSIsInRvdGFsV29yZHMiLCJ0cmFuc2xhdGVkV29yZHMiLCJ0cmFuc2xhdGlvblBlcmNlbnRhZ2UiLCJ1bnRyYW5zbGF0ZWRXb3JkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/translator.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/undici","vendor-chunks/axios","vendor-chunks/@supabase","vendor-chunks/iconv-lite","vendor-chunks/parse5","vendor-chunks/cheerio","vendor-chunks/ws","vendor-chunks/css-select","vendor-chunks/asynckit","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/math-intrinsics","vendor-chunks/htmlparser2","vendor-chunks/es-errors","vendor-chunks/whatwg-url","vendor-chunks/whatwg-mimetype","vendor-chunks/call-bind-apply-helpers","vendor-chunks/debug","vendor-chunks/nth-check","vendor-chunks/cheerio-select","vendor-chunks/whatwg-encoding","vendor-chunks/get-proto","vendor-chunks/isows","vendor-chunks/encoding-sniffer","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/tr46","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/css-what","vendor-chunks/parse5-parser-stream","vendor-chunks/parse5-htmlparser2-tree-adapter","vendor-chunks/domelementtype","vendor-chunks/webidl-conversions","vendor-chunks/supports-color","vendor-chunks/safer-buffer","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/mime-types","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-flag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream","vendor-chunks/boolbase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cusman%5CDownloads%5Ca_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();