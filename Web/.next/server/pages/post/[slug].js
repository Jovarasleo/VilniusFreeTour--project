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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"tohdfp7d\",\n    dataset: \"production\",\n    useCdn: true,\n    apiVersion: \"2021-08-31\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQyxDQUFDO0lBQzNCQyxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFVBQVUsRUFBRSxDQUFZO0FBQzFCLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCJ0b2hkZnA3ZFwiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiB0cnVlLCAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXHJcbiAgYXBpVmVyc2lvbjogXCIyMDIxLTA4LTMxXCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsImFwaVZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\nconst Post = ({ post  })=>{\n    console.log(post.body[0].children[0].text);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.body[0].children[0].text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`\n    *[_type == \"post\" && slug.current == $slug][0]\n  `, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWpDLEtBQUssQ0FBQ0MsSUFBSSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxJQUFJO0lBQ3pDLE1BQU0sNkVBQ0hDLENBQU87O3dGQUNMQyxDQUFFOzBCQUFFUCxJQUFJLENBQUNRLEtBQUs7Ozs7Ozt3RkFDZEQsQ0FBRTswQkFBRVAsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxJQUFJOzs7Ozs7Ozs7Ozs7QUFHeEMsQ0FBQztBQUVNLGVBQWVJLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ1oscURBQVksRUFDN0IsMERBQTBEO0lBRzdELE1BQU0sQ0FBQyxDQUFDO1FBQ05ZLEtBQUssRUFBRUEsS0FBSyxDQUFDRSxHQUFHLEVBQUVDLElBQUksSUFBTSxDQUFDO2dCQUFDQyxNQUFNLEVBQUUsQ0FBQztvQkFBQ0QsSUFBSTtnQkFBQyxDQUFDO1lBQUMsQ0FBQzs7UUFDaERFLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxFQUEyRTtJQUMzRSxLQUFLLENBQUMsQ0FBQyxDQUFDSixJQUFJLEVBQUcsQ0FBRSxHQUFDLENBQUMsR0FBR0ksT0FBTyxDQUFDSCxNQUFNO0lBQ3BDLEtBQUssQ0FBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQ0YscURBQVksRUFDNUI7O0VBRUgsR0FDRSxDQUFDO1FBQUNlLElBQUk7SUFBQyxDQUFDO0lBRVYsTUFBTSxDQUFDLENBQUM7UUFDTkssS0FBSyxFQUFFLENBQUM7WUFDTmxCLElBQUk7UUFDTixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0LmJvZHlbMF0uY2hpbGRyZW5bMF0udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPGgxPntwb3N0LmJvZHlbMF0uY2hpbGRyZW5bMF0udGV4dH08L2gxPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgYFxyXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdXHJcbiAgYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJjaGlsZHJlbiIsInRleHQiLCJhcnRpY2xlIiwiaDEiLCJ0aXRsZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();