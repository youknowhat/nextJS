webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function getPosts() {
  return [{
    id: 'hello-nextJS',
    title: 'hello'
  }, {
    id: 'learn-nextJS',
    title: 'learn'
  }, {
    id: 'deploy-nextJS',
    title: 'deploy'
  }];
}

var PostLink = function PostLink(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/post/".concat(props.post.id),
    href: "/post?title=".concat(post.title)
  }, __jsx("a", null, post.title));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("h1", {
    className: "jsx-4002547919"
  }, "Post"), __jsx("ul", {
    className: "jsx-4002547919"
  }, getPosts().map(function (post) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-4002547919"
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4002547919"
  }, "h1.jsx-4002547919,a.jsx-4002547919{font-famlly:\"Arial\",;}ul.jsx-4002547919{padding:0;}li.jsx-4002547919{list-style:none;margin:5px 0;}a.jsx-4002547919{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4002547919:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5naHl1bi5wYXJrL0Rlc2t0b3Avc3R1ZHkvbmV4dEpTL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFJTSxBQUdhLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLEtBUmYsUUFTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9qdW5naHl1bi5wYXJrL0Rlc2t0b3Avc3R1ZHkvbmV4dEpTL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0SlMnLCB0aXRsZTogJ2hlbGxvJ30sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRKUycsIHRpdGxlOiAnbGVhcm4nfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRKUycsIHRpdGxlOiAnZGVwbG95J31cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAocHJvcHMpID0+IChcbiAgPExpbmsgYXM9e2AvcG9zdC8ke3Byb3BzLnBvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gIDwvTGluaz5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5Qb3N0PC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgXG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1sbHk6IFwiQXJpYWxcIixcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/junghyun.park/Desktop/study/nextJS/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.9a017361147d18c1c9b7.hot-update.js.map