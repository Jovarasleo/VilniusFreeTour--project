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

/***/ "./components/header/index.jsx":
/*!*************************************!*\
  !*** ./components/header/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.png */ \"./images/logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navDesktop */ \"./components/navDesktop/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./components/header/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar useMediaQuery = function(width) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), targetReached = ref[0], setTargetReached = ref[1];\n    var updateTarget = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function(e) {\n        if (e.matches) {\n            setTargetReached(true);\n        } else {\n            setTargetReached(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var media = window.matchMedia(\"(max-width: \".concat(width, \"px)\"));\n        media.addListener(updateTarget);\n        if (media.matches) {\n            setTargetReached(true);\n        }\n        return function() {\n            return media.removeListener(updateTarget);\n        };\n    }, []);\n    return targetReached;\n};\n_s(useMediaQuery, \"9O+C1bv5fBsS7bGWwYYzKJz74+E=\");\nfunction Header() {\n    _s1();\n    var isBreakpoint = useMediaQuery(768);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().navWrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"me\",\n                    width: \"126\",\n                    height: \"96\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\header\\\\index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                isBreakpoint ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navDesktop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\header\\\\index.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\header\\\\index.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 42\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\header\\\\index.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\header\\\\index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n}\n_s1(Header, \"atqENnNhZG7oggUbAQeVzcs3bJc=\", false, function() {\n    return [\n        useMediaQuery\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1Y7QUFDUTtBQUNrQjtBQUNqQjs7QUFDdkMsR0FBSyxDQUFDTyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDaEMsR0FBSyxDQUFxQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBakRNLGFBQWEsR0FBc0JOLEdBQWUsS0FBbkNPLGdCQUFnQixHQUFJUCxHQUFlO0lBRXpELEdBQUssQ0FBQ1EsWUFBWSxHQUFHUCxrREFBVyxDQUFDLFFBQVEsQ0FBUFEsQ0FBQyxFQUFLLENBQUM7UUFDdkMsRUFBRSxFQUFFQSxDQUFDLENBQUNDLE9BQU8sRUFBRSxDQUFDO1lBQ2RILGdCQUFnQixDQUFDLElBQUk7UUFDdkIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsZ0JBQWdCLENBQUMsS0FBSztRQUN4QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMTCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsR0FBSyxDQUFDUyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFFLENBQVksY0FBUSxNQUFHLENBQVRSLEtBQUssRUFBQyxDQUFHO1FBQ3hETSxLQUFLLENBQUNHLFdBQVcsQ0FBQ04sWUFBWTtRQUU5QixFQUFFLEVBQUVHLEtBQUssQ0FBQ0QsT0FBTyxFQUFFLENBQUM7WUFDbEJILGdCQUFnQixDQUFDLElBQUk7UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRO1lBQUZJLE1BQU1JLENBQU5KLEtBQUssQ0FBQ0ksY0FBYyxDQUFDUCxZQUFZOztJQUNoRCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxDQUFDRixhQUFhO0FBQ3RCLENBQUM7R0F2QktGLGFBQWE7U0F5QlZZLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQUNDLFlBQVksR0FBR2IsYUFBYSxDQUFDLEdBQUc7SUFDdEMsTUFBTSw2RUFDSGMsQ0FBRztRQUFDQyxTQUFTLEVBQUVoQiw4REFBVTs4RkFDdkJlLENBQUc7WUFBQ0MsU0FBUyxFQUFFaEIscUVBQWlCOzs0RkFDOUJMLG1EQUFLO29CQUFDd0IsR0FBRyxFQUFFekIsd0RBQUk7b0JBQUUwQixHQUFHLEVBQUMsQ0FBSTtvQkFBQ2xCLEtBQUssRUFBQyxDQUFLO29CQUFDbUIsTUFBTSxFQUFDLENBQUk7Ozs7OztnQkFDakRQLFlBQVksK0VBQUlsQixtREFBVTs7Ozt1R0FBT21CLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0MsQ0FBQztJQVZRRixNQUFNOztRQUNRWixhQUFhOzs7S0FEM0JZLE1BQU07QUFXZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzeD8yMjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOYXZEZXNrdG9wIGZyb20gXCIuLi9uYXZEZXNrdG9wXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5jb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHdpZHRoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldFJlYWNoZWQsIHNldFRhcmdldFJlYWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB1cGRhdGVUYXJnZXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICBzZXRUYXJnZXRSZWFjaGVkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGFyZ2V0UmVhY2hlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt3aWR0aH1weClgKTtcclxuICAgIG1lZGlhLmFkZExpc3RlbmVyKHVwZGF0ZVRhcmdldCk7XHJcblxyXG4gICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcclxuICAgICAgc2V0VGFyZ2V0UmVhY2hlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4gbWVkaWEucmVtb3ZlTGlzdGVuZXIodXBkYXRlVGFyZ2V0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0YXJnZXRSZWFjaGVkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IGlzQnJlYWtwb2ludCA9IHVzZU1lZGlhUXVlcnkoNzY4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdldyYXBwZXJ9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIm1lXCIgd2lkdGg9XCIxMjZcIiBoZWlnaHQ9XCI5NlwiIC8+XHJcbiAgICAgICAge2lzQnJlYWtwb2ludCA/IDxOYXZEZXNrdG9wIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJsb2dvIiwiSW1hZ2UiLCJOYXZEZXNrdG9wIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInN0eWxlcyIsInVzZU1lZGlhUXVlcnkiLCJ3aWR0aCIsInRhcmdldFJlYWNoZWQiLCJzZXRUYXJnZXRSZWFjaGVkIiwidXBkYXRlVGFyZ2V0IiwiZSIsIm1hdGNoZXMiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiSGVhZGVyIiwiaXNCcmVha3BvaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwibmF2V3JhcHBlciIsInNyYyIsImFsdCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/index.jsx\n");

/***/ })

});