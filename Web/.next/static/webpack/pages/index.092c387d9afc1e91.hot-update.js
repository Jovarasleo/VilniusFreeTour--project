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

/***/ "./components/tourCard/index.jsx":
/*!***************************************!*\
  !*** ./components/tourCard/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./components/tourCard/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nfunction tourCard(param) {\n    var title = param.title, description = param.description, coverImg = param.coverImg, imgAlt = param.imgAlt, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        onClick: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardPinch)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardOverlay),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().contentDetails),\n                    children: \"Read more!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: urlFor(coverImg).width(320).height(240).fit(\"max\").auto(\"format\"),\n                alt: imgAlt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\O\\\\Desktop\\\\Pamokos\\\\NextJs\\\\Vilnius_Free_Tours\\\\Web\\\\components\\\\tourCard\\\\index.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (tourCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvdXJDYXJkL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDUTtBQUNkO1NBQ3hCRyxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQ0gsd0RBQWUsQ0FBQ0MsK0NBQU0sRUFBRUcsS0FBSyxDQUFDRCxNQUFNO0FBQzdDLENBQUM7U0FDUUUsUUFBUSxDQUFDLEtBQWlELEVBQUUsQ0FBQztRQUFsREMsS0FBSyxHQUFQLEtBQWlELENBQS9DQSxLQUFLLEVBQUVDLFdBQVcsR0FBcEIsS0FBaUQsQ0FBeENBLFdBQVcsRUFBRUMsUUFBUSxHQUE5QixLQUFpRCxDQUEzQkEsUUFBUSxFQUFFQyxNQUFNLEdBQXRDLEtBQWlELENBQWpCQSxNQUFNLEVBQUVDLE9BQU8sR0FBL0MsS0FBaUQsQ0FBVEEsT0FBTztJQUMvRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRWIsK0RBQVc7UUFBRVcsT0FBTyxFQUFFQSxPQUFPOzt3RkFDMUNDLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsb0VBQWdCOzs7Ozs7d0ZBQy9CWSxDQUFHO2dCQUFDQyxTQUFTLEVBQUViLHNFQUFrQjtzR0FDL0JpQixDQUFFO29CQUFDSixTQUFTLEVBQUViLHlFQUFxQjs4QkFBRSxDQUFVOzs7Ozs7Ozs7Ozt3RkFFakRtQixDQUFHO2dCQUNGQyxHQUFHLEVBQUVqQixNQUFNLENBQUNNLFFBQVEsRUFBRVksS0FBSyxDQUFDLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUssTUFBRUMsSUFBSSxDQUFDLENBQVE7Z0JBQ3JFQyxHQUFHLEVBQUVmLE1BQU07Ozs7Ozt3RkFFWmdCLENBQUU7Z0JBQUNiLFNBQVMsRUFBRWIsZ0VBQVk7MEJBQUdPLEtBQUs7Ozs7Ozt3RkFDbENvQixDQUFDO2dCQUFDZCxTQUFTLEVBQUViLHNFQUFrQjswQkFBR1EsV0FBVzs7Ozs7Ozs7Ozs7O0FBR3BELENBQUM7QUFDRCwrREFBZUYsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG91ckNhcmQvaW5kZXguanN4PzE3NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuZnVuY3Rpb24gdG91ckNhcmQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNvdmVySW1nLCBpbWdBbHQsIG9uQ2xpY2sgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRQaW5jaH0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZE92ZXJsYXl9PlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50RGV0YWlsc30+UmVhZCBtb3JlITwvaDY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXt1cmxGb3IoY292ZXJJbWcpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KFwibWF4XCIpLmF1dG8oXCJmb3JtYXRcIil9XHJcbiAgICAgICAgYWx0PXtpbWdBbHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB0b3VyQ2FyZDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwidG91ckNhcmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY292ZXJJbWciLCJpbWdBbHQiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImNhcmRQaW5jaCIsImNhcmRPdmVybGF5IiwiaDYiLCJjb250ZW50RGV0YWlscyIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsImFsdCIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tourCard/index.jsx\n");

/***/ })

});