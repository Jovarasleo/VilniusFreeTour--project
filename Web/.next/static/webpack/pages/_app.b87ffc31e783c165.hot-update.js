"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/hamburger/index.jsx":
/*!****************************************!*\
  !*** ./components/hamburger/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/hamburger/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Hamburger(param) {\n    var onClick1 = param.onClick;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var click = function(onClick) {\n        onClick();\n        setToggle(toggle);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger),\n        onClick: click,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(Hamburger, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);\nvar _c;\n$RefreshReg$(_c, \"Hamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hhbWJ1cmdlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDUDs7U0FDdkJFLFNBQVMsQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFaQyxRQUFPLEdBQVQsS0FBVyxDQUFUQSxPQUFPOztJQUMxQixHQUFLLENBQXVCRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ0csTUFBTSxHQUFlSCxHQUFlLEtBQTVCSSxTQUFTLEdBQUlKLEdBQWU7SUFDM0MsR0FBSyxDQUFDSyxLQUFLLEdBQUcsUUFBUSxDQUFQSCxPQUFPLEVBQUssQ0FBQztRQUMxQkEsT0FBTztRQUNQRSxTQUFTLENBQUNELE1BQU07SUFDbEIsQ0FBQztJQUNELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFFUixvRUFBZ0I7UUFBRUcsT0FBTyxFQUFFRyxLQUFLOzt3RkFDN0NDLENBQUc7Ozs7O3dGQUNIQSxDQUFHOzs7Ozt3RkFDSEEsQ0FBRzs7Ozs7Ozs7Ozs7QUFHVixDQUFDO0dBYlFMLFNBQVM7S0FBVEEsU0FBUztBQWNsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGFtYnVyZ2VyL2luZGV4LmpzeD82ZDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBIYW1idXJnZXIoeyBvbkNsaWNrIH0pIHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsaWNrID0gKG9uQ2xpY2spID0+IHtcclxuICAgIG9uQ2xpY2soKTtcclxuICAgIHNldFRvZ2dsZSh0b2dnbGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfSBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiSGFtYnVyZ2VyIiwib25DbGljayIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGFtYnVyZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hamburger/index.jsx\n");

/***/ })

});