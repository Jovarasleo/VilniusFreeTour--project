(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3899:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__l5XV_"
};


/***/ }),

/***/ 6542:
/***/ ((module) => {

// Exports
module.exports = {
	"hamburger": "hamburger_hamburger__9LkFj",
	"marked": "hamburger_marked__hHCRI"
};


/***/ }),

/***/ 9593:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "header_nav___BIUE",
	"navWrapper": "header_navWrapper__RdbEs",
	"navLinks": "header_navLinks__dLflM",
	"linksWrapper": "header_linksWrapper__cwa2O"
};


/***/ }),

/***/ 342:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "layout_main__5_ZzC"
};


/***/ }),

/***/ 3585:
/***/ ((module) => {

// Exports
module.exports = {
	"navLinks": "navDesktop_navLinks__BGDWB",
	"linksWrapper": "navDesktop_linksWrapper__xhFZT"
};


/***/ }),

/***/ 2789:
/***/ ((module) => {

// Exports
module.exports = {
	"navMobile": "navMobile_navMobile__Uk_JB",
	"navLinks": "navMobile_navLinks__I3DW1"
};


/***/ }),

/***/ 5840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1f966f38.png","height":96,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAU0lEQVR42iWHsQ5AMBgGPzGzkI7iScTqDbpiabo0NmI2mbzwxa9yw92JUsJzG16yozBFKiMqnyyTPidqU87Aykz4p6GnZWDC0eHEyM7BxsXJw/ICSdUtr6t+rpYAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/navDesktop/index.module.css
var index_module = __webpack_require__(3585);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/navDesktop/index.jsx



function NavDesktop() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).linksWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (index_module_default()).navLinks,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Tours"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "About Us"
                        })
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const navDesktop = (NavDesktop);

// EXTERNAL MODULE: ./components/navMobile/index.module.css
var navMobile_index_module = __webpack_require__(2789);
var navMobile_index_module_default = /*#__PURE__*/__webpack_require__.n(navMobile_index_module);
;// CONCATENATED MODULE: ./components/navMobile/index.jsx



function NavMobile({ toggle  }) {
    console.log(toggle);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (navMobile_index_module_default()).navMobile,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (navMobile_index_module_default()).navLinks,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Tours"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "About Us"
                        })
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const navMobile = (NavMobile);

// EXTERNAL MODULE: ./components/hamburger/index.module.css
var hamburger_index_module = __webpack_require__(6542);
var hamburger_index_module_default = /*#__PURE__*/__webpack_require__.n(hamburger_index_module);
;// CONCATENATED MODULE: ./components/hamburger/index.jsx


function Hamburger({ onClick , toggle  }) {
    console.log(toggle);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: toggle ? hamburger_index_module_default().hamburger.concat(" ", (hamburger_index_module_default()).marked) : (hamburger_index_module_default()).hamburger,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    }));
}
/* harmony default export */ const hamburger = (Hamburger);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header/index.module.css
var header_index_module = __webpack_require__(9593);
var header_index_module_default = /*#__PURE__*/__webpack_require__.n(header_index_module);
;// CONCATENATED MODULE: ./components/header/index.jsx








const useMediaQuery = (width)=>{
    const { 0: targetReached , 1: setTargetReached  } = (0,external_react_.useState)(false);
    const updateTarget = (0,external_react_.useCallback)((e)=>{
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);
        if (media.matches) {
            setTargetReached(true);
        }
        return ()=>media.removeListener(updateTarget)
        ;
    }, []);
    return targetReached;
};
function Header() {
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const isBreakpoint = useMediaQuery(768);
    (0,external_react_.useEffect)(()=>{
        if (!isBreakpoint) {
            setToggle(false);
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_index_module_default()).nav,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_index_module_default()).navWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: logo,
                        alt: "me",
                        width: "94",
                        height: "72"
                    }),
                    isBreakpoint ? /*#__PURE__*/ jsx_runtime_.jsx(hamburger, {
                        onClick: ()=>setToggle(!toggle)
                        ,
                        toggle: toggle
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(navDesktop, {})
                ]
            }),
            toggle && /*#__PURE__*/ jsx_runtime_.jsx(navMobile, {
                toggle: toggle
            })
        ]
    }));
}
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./components/footer/index.module.css
var footer_index_module = __webpack_require__(3899);
var footer_index_module_default = /*#__PURE__*/__webpack_require__.n(footer_index_module);
;// CONCATENATED MODULE: ./components/footer/index.jsx


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (footer_index_module_default()).footer,
            children: "footer is here"
        })
    }));
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./components/layout/index.module.css
var layout_index_module = __webpack_require__(342);
var layout_index_module_default = /*#__PURE__*/__webpack_require__.n(layout_index_module);
;// CONCATENATED MODULE: ./components/layout/index.jsx




function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (layout_index_module_default()).main,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    }));
}
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./context/toursContext.js
var toursContext = __webpack_require__(3762);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(toursContext/* ToursProvider */.F, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,762], () => (__webpack_exec__(5840)));
module.exports = __webpack_exports__;

})();