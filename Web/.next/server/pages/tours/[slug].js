"use strict";
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
exports.id = "pages/tours/[slug]";
exports.ids = ["pages/tours/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"tohdfp7d\",\n    dataset: \"production\",\n    useCdn: true,\n    apiVersion: \"2021-08-31\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQyxDQUFDO0lBQzNCQyxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFVBQVUsRUFBRSxDQUFZO0FBQzFCLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCJ0b2hkZnA3ZFwiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiB0cnVlLCAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXHJcbiAgYXBpVmVyc2lvbjogXCIyMDIxLTA4LTMxXCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsImFwaVZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/tours/[slug].js":
/*!*******************************!*\
  !*** ./pages/tours/[slug].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\nconst Tour = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: post === null || post === void 0 ? void 0 : post.title\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\tours\\\\[slug].js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\tours\\\\[slug].js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`*[_type == \"tour-card\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`\n    *[_type == \"tour-card\" && slug.current == $slug][0]\n  `, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tour);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b3Vycy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVqQyxLQUFLLENBQUNDLElBQUksSUFBSSxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMxQixNQUFNLDZFQUNIQyxDQUFPOzhGQUNMQyxDQUFFO3NCQUFFRixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUVHLEtBQUs7Ozs7Ozs7Ozs7O0FBR3RCLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUcsQ0FBQztJQUN0QyxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNQLHFEQUFZLEVBQzdCLCtEQUErRDtJQUdsRSxNQUFNLENBQUMsQ0FBQztRQUNOTyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0UsR0FBRyxFQUFFQyxJQUFJLElBQU0sQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQUM7b0JBQUNELElBQUk7Z0JBQUMsQ0FBQztZQUFDLENBQUM7O1FBQ2hERSxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDN0MsRUFBMkU7SUFDM0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0osSUFBSSxFQUFHLENBQUUsR0FBQyxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0gsTUFBTTtJQUNwQyxLQUFLLENBQUNULElBQUksR0FBRyxLQUFLLENBQUNGLHFEQUFZLEVBQzVCOztFQUVILEdBQ0UsQ0FBQztRQUFDVSxJQUFJO0lBQUMsQ0FBQztJQUVWLE1BQU0sQ0FBQyxDQUFDO1FBQ05LLEtBQUssRUFBRSxDQUFDO1lBQ05iLElBQUk7UUFDTixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvdG91cnMvW3NsdWddLmpzPzA4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XHJcblxyXG5jb25zdCBUb3VyID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8aDE+e3Bvc3Q/LnRpdGxlfTwvaDE+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGAqW190eXBlID09IFwidG91ci1jYXJkXCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGBcclxuICAgICpbX3R5cGUgPT0gXCJ0b3VyLWNhcmRcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdXHJcbiAgYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG91cjtcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsIlRvdXIiLCJwb3N0IiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tours/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tours/[slug].js"));
module.exports = __webpack_exports__;

})();