"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/banner */ \"./components/banner/index.jsx\");\n/* harmony import */ var _components_tourCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tourCard */ \"./components/tourCard/index.jsx\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var ref2;\n    _s();\n    console.log((ref2 = post[0]) === null || ref2 === void 0 ? void 0 : ref2.description[0].children[0].text);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"homePage--sectionTitle\",\n                children: [\n                    \"Walking \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"colored\",\n                        children: \"Tours\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, _this),\n                    \" We offer\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contentWrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cardsWrapper\",\n                    children: post === null || post === void 0 ? void 0 : post.map(function(card) {\n                        var ref, ref1;\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tourCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onClick: function() {\n                                return router.push(\"/tours/\".concat(card.slug.current));\n                            },\n                            coverImg: (ref = card.mainImage) === null || ref === void 0 ? void 0 : (ref1 = ref.asset) === null || ref1 === void 0 ? void 0 : ref1._ref,\n                            title: card.title,\n                            description: card.description[0].children[0].text\n                        }, card.title, false, {\n                            fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contentWrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"homePage--sectionTitle\",\n                    children: [\n                        \"Meeting \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"colored\",\n                            children: \"Point\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 19\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0k7QUFDdEI7QUFDZ0I7OztBQUV2QyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O1FBQ1BBLElBQU87O0lBQW5CQyxPQUFPLENBQUNDLEdBQUcsRUFBQ0YsSUFBTyxHQUFQQSxJQUFJLENBQUMsQ0FBQyxlQUFOQSxJQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQU8sQ0FBRUcsV0FBVyxDQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDLENBQUMsRUFBRUMsSUFBSTtJQUNwRCxHQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7SUFDeEIsTUFBTTs7d0ZBRURILDBEQUFNOzs7Ozt3RkFDTlksQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQXdCOztvQkFBQyxDQUM3QjtnR0FBQ0MsQ0FBSTt3QkFBQ0QsU0FBUyxFQUFDLENBQVM7a0NBQUMsQ0FBSzs7Ozs7O29CQUFPLENBQ2hEOzs7Ozs7O3dGQUNDRSxDQUFHO2dCQUFDRixTQUFTLEVBQUMsQ0FBZ0I7c0dBQzVCRSxDQUFHO29CQUFDRixTQUFTLEVBQUMsQ0FBYzs4QkFDMUJSLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBRVcsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7NEJBS05BLEdBQWM7d0JBSjVCLE1BQU0sNkVBQ0hoQiw0REFBUTs0QkFFUGlCLE9BQU8sRUFBRSxRQUFRO2dDQUFGUCxNQUFNLENBQU5BLE1BQU0sQ0FBQ1EsSUFBSSxDQUFFLENBQU8sU0FBb0IsT0FBbEJGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxPQUFPOzs0QkFDdERDLFFBQVEsR0FBRUwsR0FBYyxHQUFkQSxJQUFJLENBQUNNLFNBQVMsY0FBZE4sR0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxJQUFJLENBQUpBLENBQXFCLFdBQXJCQSxHQUFjLENBQUVPLEtBQUssdUJBQXJCUCxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxJQUFJLENBQUpBLENBQXFCLFFBQUVRLElBQUk7NEJBQ3JDQyxLQUFLLEVBQUVULElBQUksQ0FBQ1MsS0FBSzs0QkFDakJsQixXQUFXLEVBQUVTLElBQUksQ0FBQ1QsV0FBVyxDQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDLENBQUMsRUFBRUMsSUFBSTsyQkFKNUNPLElBQUksQ0FBQ1MsS0FBSzs7Ozs7b0JBT3JCLENBQUM7Ozs7Ozs7Ozs7O3dGQUdKWCxDQUFHO2dCQUFDRixTQUFTLEVBQUMsQ0FBZ0I7c0dBQzVCRCxDQUFFO29CQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O3dCQUFDLENBQzdCO29HQUFDQyxDQUFJOzRCQUFDRCxTQUFTLEVBQUMsQ0FBUztzQ0FBQyxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pELENBQUM7R0EvQktULEtBQUs7O1FBRU1ELGtEQUFTOzs7S0FGcEJDLEtBQUs7O0FBMkNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Jhbm5lclwiO1xyXG5pbXBvcnQgVG91ckNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG91ckNhcmRcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xyXG5jb25zdCBJbmRleCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3RbMF0/LmRlc2NyaXB0aW9uWzBdLmNoaWxkcmVuWzBdLnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmFubmVyIC8+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJob21lUGFnZS0tc2VjdGlvblRpdGxlXCI+XHJcbiAgICAgICAgV2Fsa2luZyA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcmVkXCI+VG91cnM8L3NwYW4+IFdlIG9mZmVyXHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzV3JhcHBlclwiPlxyXG4gICAgICAgICAge3Bvc3Q/Lm1hcCgoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUb3VyQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXJkLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC90b3Vycy8ke2NhcmQuc2x1Zy5jdXJyZW50fWApfVxyXG4gICAgICAgICAgICAgICAgY292ZXJJbWc9e2NhcmQubWFpbkltYWdlPy5hc3NldD8uX3JlZn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtjYXJkLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NhcmQuZGVzY3JpcHRpb25bMF0uY2hpbGRyZW5bMF0udGV4dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRXcmFwcGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhvbWVQYWdlLS1zZWN0aW9uVGl0bGVcIj5cclxuICAgICAgICAgIE1lZXRpbmcgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JlZFwiPlBvaW50PC9zcGFuPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInRvdXItY2FyZFwiXWA7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcbiAgY29uc29sZS5sb2cocG9zdCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiQmFubmVyIiwiVG91ckNhcmQiLCJncm9xIiwidXNlUm91dGVyIiwiSW5kZXgiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwicm91dGVyIiwiaDMiLCJjbGFzc05hbWUiLCJzcGFuIiwiZGl2IiwibWFwIiwiY2FyZCIsIm9uQ2xpY2siLCJwdXNoIiwic2x1ZyIsImN1cnJlbnQiLCJjb3ZlckltZyIsIm1haW5JbWFnZSIsImFzc2V0IiwiX3JlZiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});