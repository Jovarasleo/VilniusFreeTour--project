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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/hamburger/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Hamburger(param) {\n    var onClick = param.onClick, toggle = param.toggle;\n    var newClass = function() {\n        if (toggle) {\n            return _index_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger.concat(\" \", (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().marked));\n        } else (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger.concat(\" \", (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().marked)),\n        onClick: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\hamburger\\\\index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_c = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);\nvar _c;\n$RefreshReg$(_c, \"Hamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hhbWJ1cmdlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDUDtTQUN2QkUsU0FBUyxDQUFDLEtBQW1CLEVBQUUsQ0FBQztRQUFwQkMsT0FBTyxHQUFULEtBQW1CLENBQWpCQSxPQUFPLEVBQUVDLE1BQU0sR0FBakIsS0FBbUIsQ0FBUkEsTUFBTTtJQUNsQyxHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUN0QixFQUFFLEVBQUVELE1BQU0sRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDSix5RUFBdUIsQ0FBQyxDQUFHLElBQUVBLGlFQUFhO1FBQ25ELENBQUMsTUFBTUEsb0VBQWdCO0lBQ3pCLENBQUM7SUFDRCxNQUFNLDZFQUNIUyxDQUFHO1FBQ0ZDLFNBQVMsRUFBRVYseUVBQXVCLENBQUMsQ0FBRyxJQUFFQSxpRUFBYTtRQUNyREcsT0FBTyxFQUFFQSxPQUFPOzt3RkFFZk0sQ0FBRzs7Ozs7d0ZBQ0hBLENBQUc7Ozs7O3dGQUNIQSxDQUFHOzs7Ozs7Ozs7OztBQUdWLENBQUM7S0FoQlFQLFNBQVM7QUFpQmxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oYW1idXJnZXIvaW5kZXguanN4PzZkMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIEhhbWJ1cmdlcih7IG9uQ2xpY2ssIHRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgbmV3Q2xhc3MgPSAoKSA9PiB7XHJcbiAgICBpZiAodG9nZ2xlKSB7XHJcbiAgICAgIHJldHVybiBzdHlsZXMuaGFtYnVyZ2VyLmNvbmNhdChcIiBcIiwgc3R5bGVzLm1hcmtlZCk7XHJcbiAgICB9IGVsc2Ugc3R5bGVzLmhhbWJ1cmdlcjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhhbWJ1cmdlci5jb25jYXQoXCIgXCIsIHN0eWxlcy5tYXJrZWQpfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkhhbWJ1cmdlciIsIm9uQ2xpY2siLCJ0b2dnbGUiLCJuZXdDbGFzcyIsImhhbWJ1cmdlciIsImNvbmNhdCIsIm1hcmtlZCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hamburger/index.jsx\n");

/***/ })

});