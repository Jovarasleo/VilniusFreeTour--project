(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5923:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "banner_banner__IBpVz",
	"bannerText": "banner_bannerText__c5NjO",
	"extra": "banner_extra__hXahC",
	"extra2": "banner_extra2___lsUb"
};


/***/ }),

/***/ 6497:
/***/ ((module) => {

// Exports
module.exports = {
	"important": "importantMsg_important__GqHXF",
	"title": "importantMsg_title__kBs2x",
	"msg": "importantMsg_msg__vBkaA"
};


/***/ }),

/***/ 77:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "tourCard_card___CEzR",
	"cardPinch": "tourCard_cardPinch__xxG2e",
	"title": "tourCard_title__q0rr3",
	"description": "tourCard_description__FYeKB",
	"cardOverlay": "tourCard_cardOverlay__7EEpO",
	"contentDetails": "tourCard_contentDetails__gznBs"
};


/***/ }),

/***/ 8809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ client)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./client.js
// client.js

/* harmony default export */ const client = (client_default()({
    projectId: "tohdfp7d",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-31"
}));


/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/banner/index.module.css
var index_module = __webpack_require__(5923);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
// EXTERNAL MODULE: ./client.js + 1 modules
var client = __webpack_require__(8809);
;// CONCATENATED MODULE: ./components/banner/index.jsx




function urlFor(source) {
    return image_url_default()(client/* default */.Z).image(source);
}
function Banner({ background  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (index_module_default()).banner,
            style: {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(background)})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (index_module_default()).bannerText,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "VILNIUS "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (index_module_default()).extra,
                        children: "FREE "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "WALKING "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (index_module_default()).extra2,
                        children: "TOURS"
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const components_banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/tourCard/index.module.css
var tourCard_index_module = __webpack_require__(77);
var tourCard_index_module_default = /*#__PURE__*/__webpack_require__.n(tourCard_index_module);
;// CONCATENATED MODULE: ./components/tourCard/index.jsx




function tourCard_urlFor(source) {
    return image_url_default()(client/* default */.Z).image(source);
}
function tourCard({ title , description , coverImg , imgAlt , onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (tourCard_index_module_default()).card,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (tourCard_index_module_default()).cardPinch
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (tourCard_index_module_default()).cardOverlay,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: (tourCard_index_module_default()).contentDetails,
                    children: "Read more!"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: tourCard_urlFor(coverImg).width(320).height(200).fit("max").auto("format"),
                alt: imgAlt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (tourCard_index_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (tourCard_index_module_default()).description,
                children: description
            })
        ]
    }));
}
/* harmony default export */ const components_tourCard = (tourCard);

// EXTERNAL MODULE: ./components/importantMsg/index.module.css
var importantMsg_index_module = __webpack_require__(6497);
var importantMsg_index_module_default = /*#__PURE__*/__webpack_require__.n(importantMsg_index_module);
;// CONCATENATED MODULE: ./components/importantMsg/index.jsx


function importantMsg({ title , children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (importantMsg_index_module_default()).important,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (importantMsg_index_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (importantMsg_index_module_default()).msg,
                children: children
            })
        ]
    }));
}
/* harmony default export */ const components_importantMsg = (importantMsg);

;// CONCATENATED MODULE: ./pages/index.js






const Index = ({ tours , banner , msg  })=>{
    var ref7, ref1, ref2, ref3, ref4;
    const bannerItem = (ref7 = banner[0]) === null || ref7 === void 0 ? void 0 : (ref1 = ref7.bannerImage) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.asset) === null || ref2 === void 0 ? void 0 : ref2._ref;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_banner, {
                background: bannerItem
            }),
            msg.length ? /*#__PURE__*/ jsx_runtime_.jsx(components_importantMsg, {
                title: (ref3 = msg[0]) === null || ref3 === void 0 ? void 0 : ref3.title,
                children: (ref4 = msg[0]) === null || ref4 === void 0 ? void 0 : ref4.text
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "homePage--sectionTitle",
                children: [
                    "Walking ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "colored",
                        children: "Tours"
                    }),
                    " We Offer"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "contentWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cardsWrapper",
                    children: tours === null || tours === void 0 ? void 0 : tours.map((card)=>{
                        var ref, ref5, ref6;
                        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/tours/[tours]",
                            as: `/tours/${card === null || card === void 0 ? void 0 : (ref = card.slug) === null || ref === void 0 ? void 0 : ref.current}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_tourCard, {
                                    coverImg: (ref5 = card.mainImage) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.asset) === null || ref6 === void 0 ? void 0 : ref6._ref,
                                    title: card.title,
                                    description: card.description[0].children[0].text
                                }, card.title)
                            })
                        }, card.title));
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "meetingSection",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contentWrapper",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "homePage--sectionTitle",
                            children: [
                                "Meeting ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "colored",
                                    children: "Point"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "meetingPoint",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "meetingPoint--picture"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "meetingPoint--map"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
async function getServerSideProps() {
    const query1 = `*[_type == "tour-card"]`;
    const query2 = `*[_type == "banner"]`;
    const query3 = `*[_type == "ImpMsg"]`;
    const tours = await client/* default.fetch */.Z.fetch(query1);
    const banner = await client/* default.fetch */.Z.fetch(query2);
    const msg = await client/* default.fetch */.Z.fetch(query3);
    return {
        props: {
            tours,
            banner,
            msg
        }
    };
}
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(3507)));
module.exports = __webpack_exports__;

})();