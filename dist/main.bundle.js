/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
}

body {
  font-family: var(--font-family);
  color: var(--text);
  font-size: 1.6rem;
}

p {
  margin: 1rem 0;
}

h1,
h2,
h3 {
  margin: 2rem 0 1rem 0;
}

a {
  color: var(--text);
  text-decoration: none;
}

img {
  max-width: 100%;
}

.title-small {
  letter-spacing: 0.5rem;
  font-size: 1.7rem;
}

.text-primary {
  color: var(--primary);
}
.text-hint {
  color: var(--hint);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mb-5 {
  margin-bottom: 5rem !important;
}

.mb-2 {
  margin-bottom: 2rem !important;
}

.container {
  min-height: 100vh;
  display: grid;
  grid: "picture header" auto "aside main" 1fr "footer footer" auto/300px auto;
}

header {
  grid-area: header;
  background: linear-gradient(to left, var(--light), var(--dark));
  padding: 10rem 5rem;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
header h1 {
  font-size: 6rem;
  line-height: 8rem;
  font-weight: 300;
  letter-spacing: 3rem;
}
header p {
  letter-spacing: 0.5rem;
}

.picture {
  grid-area: picture;
  padding: 6rem;
  background: var(--background);
  border-right: 1px solid var(--border);
}
.picture img {
  border-radius: 50%;
}

aside {
  grid-area: aside;
  background: var(--background);
  border-right: 1px solid var(--border);
  padding: 5rem;
}
aside .block {
  margin-bottom: 5rem;
}
aside .block h3 {
  margin-bottom: 0;
  font-size: 1.4rem;
}
aside .block p {
  margin: 0 0 2rem 0;
  font-style: italic;
}
aside .block .bar-skill {
  margin: 1rem 0 2rem 0;
  height: 5px;
  background: var(--hint);
  position: relative;
}
aside .block .bar-skill .bar-skill-progress {
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 90%;
  background: var(--primary);
}
aside .block .bar-skill .bar-skill-dot {
  position: absolute;
  height: 10px;
  width: 10px;
  background: var(--primary);
  left: calc(90% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
}
aside .block .bar-skill .bar-skill-progress-js {
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 90%;
  background: var(--primary);
}
aside .block .bar-skill .bar-skill-dot-js {
  position: absolute;
  height: 10px;
  width: 10px;
  background: var(--primary);
  left: calc(90% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
}
aside .block .bar-skill .bar-skill-progress-ang {
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 20%;
  background: var(--primary);
}
aside .block .bar-skill .bar-skill-dot-ang {
  position: absolute;
  height: 10px;
  width: 10px;
  background: var(--primary);
  left: calc(20% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
}
aside .block .bar-skill .bar-skill-progress-ts {
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 20%;
  background: var(--primary);
}
aside .block .bar-skill .bar-skill-dot-ts {
  position: absolute;
  height: 10px;
  width: 10px;
  background: var(--primary);
  left: calc(20% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
}
aside .block .bar-skill .bar-skill-progress-git {
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 50%;
  background: var(--primary);
}
aside .block .bar-skill .bar-skill-dot-git {
  position: absolute;
  height: 10px;
  width: 10px;
  background: var(--primary);
  left: calc(50% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
}
aside .block .stars-container {
  display: flex;
  margin: 2rem 0 3rem 0;
  color: var(--hint);
}
aside .block .stars-container i {
  font-size: 2rem;
  margin: 0 1rem;
}
aside .block .social-container {
  display: flex;
  width: 160px;
  justify-content: start;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
}
aside .block .social-container:hover {
  background: var(--border);
}
aside .block .social-container:hover i {
  color: var(--primary);
  transform: scale(1.3);
  transition: all 0.2s;
}
aside .block .social-container p {
  flex: auto;
  margin: 0;
}

main {
  grid-area: main;
  padding: 5rem;
}
main h2 {
  margin-bottom: 4rem;
}
main p {
  letter-spacing: 0.1rem;
  line-height: 3rem;
}
main .experience {
  display: flex;
  margin: 6rem 0;
}
main .experience .timeline {
  text-align: center;
  color: var(--hint);
  padding-right: 2rem;
  border-right: 1px solid var(--border);
}
main .experience .timeline p {
  margin: 0;
}
main .experience .content {
  padding: 0 1rem;
}
main .experience .content h3 {
  margin: 0;
}
main .experience .content p {
  margin: 0;
}
main .experience .content ul {
  margin: 2rem 0;
  list-style: circle;
  padding-left: 4rem;
}

footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #999;
  color: white;
  padding: 5rem;
}
footer h2 {
  margin-bottom: 3rem;
}
footer form {
  display: flex;
  align-items: center;
}
footer form .prefix,
footer form .postfix {
  background: linear-gradient(to right, var(--dark), var(--light));
  padding: 1rem 2rem;
  color: white;
  font-size: 2rem;
}
footer form .prefix {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
footer form button {
  background: #999;
  border: 0;
  cursor: pointer;
  transition: all 0.2s;
}
footer form button:hover {
  opacity: 0.7;
}
footer form button .postfix {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
footer form input {
  outline: 0;
  border: 0;
  min-width: 400px;
  padding: 1rem 2rem;
  line-height: 2rem;
}
footer form input::placeholder {
  color: var(--hint);
}`, "",{"version":3,"sources":["webpack://./src/scss/_bases.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_classes.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_utils.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  font-family: var(--font-family);\r\n  color: var(--text);\r\n  font-size: 1.6rem;\r\n}\r\np {\r\n  margin: 1rem 0;\r\n}\r\nh1,\r\nh2,\r\nh3 {\r\n  margin: 2rem 0 1rem 0;\r\n}\r\na {\r\n  color: var(--text);\r\n  text-decoration: none;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n}\r\n","@use \"bases\" as *;\r\n@use \"classes\" as *;\r\n@use \"reset\" as *;\r\n@use \"utils\" as *;\r\n\r\n.container {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid:\r\n    \"picture header\" auto\r\n    \"aside main\" 1fr\r\n    \"footer footer\" auto\r\n    / 300px auto;\r\n}\r\nheader {\r\n  grid-area: header;\r\n  background: linear-gradient(to left, var(--light), var(--dark));\r\n  padding: 10rem 5rem;\r\n  color: white;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  h1 {\r\n    font-size: 6rem;\r\n    line-height: 8rem;\r\n    font-weight: 300;\r\n    letter-spacing: 3rem;\r\n  }\r\n  p {\r\n    letter-spacing: 0.5rem;\r\n  }\r\n}\r\n.picture {\r\n  grid-area: picture;\r\n  padding: 6rem;\r\n  background: var(--background);\r\n  border-right: 1px solid var(--border);\r\n  img {\r\n    border-radius: 50%;\r\n  }\r\n}\r\naside {\r\n  grid-area: aside;\r\n  background: var(--background);\r\n  border-right: 1px solid var(--border);\r\n  padding: 5rem;\r\n  .block {\r\n    margin-bottom: 5rem;\r\n    h3 {\r\n      margin-bottom: 0;\r\n      font-size: 1.4rem;\r\n    }\r\n    p {\r\n      margin: 0 0 2rem 0;\r\n      font-style: italic;\r\n    }\r\n    .bar-skill {\r\n      margin: 1rem 0 2rem 0;\r\n      height: 5px;\r\n      background: var(--hint);\r\n      position: relative;\r\n      .bar-skill-progress {\r\n        position: absolute;\r\n        height: 5px;\r\n        top: 0;\r\n        left: 0;\r\n        width: 90%;\r\n        background: var(--primary);\r\n      }\r\n      .bar-skill-dot {\r\n        position: absolute;\r\n        height: 10px;\r\n        width: 10px;\r\n        background: var(--primary);\r\n        left: calc(90% - 5px);\r\n        top: -2.5px;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      .bar-skill-progress-js {\r\n        position: absolute;\r\n        height: 5px;\r\n        top: 0;\r\n        left: 0;\r\n        width: 90%;\r\n        background: var(--primary);\r\n      }\r\n      .bar-skill-dot-js {\r\n        position: absolute;\r\n        height: 10px;\r\n        width: 10px;\r\n        background: var(--primary);\r\n        left: calc(90% - 5px);\r\n        top: -2.5px;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      .bar-skill-progress-ang {\r\n        position: absolute;\r\n        height: 5px;\r\n        top: 0;\r\n        left: 0;\r\n        width: 20%;\r\n        background: var(--primary);\r\n      }\r\n      .bar-skill-dot-ang {\r\n        position: absolute;\r\n        height: 10px;\r\n        width: 10px;\r\n        background: var(--primary);\r\n        left: calc(20% - 5px);\r\n        top: -2.5px;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      .bar-skill-progress-ts {\r\n        position: absolute;\r\n        height: 5px;\r\n        top: 0;\r\n        left: 0;\r\n        width: 20%;\r\n        background: var(--primary);\r\n      }\r\n      .bar-skill-dot-ts {\r\n        position: absolute;\r\n        height: 10px;\r\n        width: 10px;\r\n        background: var(--primary);\r\n        left: calc(20% - 5px);\r\n        top: -2.5px;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      .bar-skill-progress-git {\r\n        position: absolute;\r\n        height: 5px;\r\n        top: 0;\r\n        left: 0;\r\n        width: 50%;\r\n        background: var(--primary);\r\n      }\r\n      .bar-skill-dot-git {\r\n        position: absolute;\r\n        height: 10px;\r\n        width: 10px;\r\n        background: var(--primary);\r\n        left: calc(50% - 5px);\r\n        top: -2.5px;\r\n        transform: rotate(45deg);\r\n      }\r\n    }\r\n    .stars-container {\r\n      display: flex;\r\n      margin: 2rem 0 3rem 0;\r\n      color: var(--hint);\r\n      i {\r\n        font-size: 2rem;\r\n        margin: 0 1rem;\r\n      }\r\n    }\r\n    .social-container {\r\n      display: flex;\r\n      width: 160px;\r\n      justify-content: start;\r\n      align-items: center;\r\n      padding: 1rem 1rem;\r\n      border-radius: 5px;\r\n      transition: all 0.2s;\r\n      cursor: pointer;\r\n      &:hover {\r\n        background: var(--border);\r\n        i {\r\n          color: var(--primary);\r\n          transform: scale(1.3);\r\n          transition: all 0.2s;\r\n        }\r\n      }\r\n      p {\r\n        flex: auto;\r\n        margin: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\nmain {\r\n  grid-area: main;\r\n  padding: 5rem;\r\n  h2 {\r\n    margin-bottom: 4rem;\r\n  }\r\n  p {\r\n    letter-spacing: 0.1rem;\r\n    line-height: 3rem;\r\n  }\r\n  .experience {\r\n    display: flex;\r\n    margin: 6rem 0;\r\n    .timeline {\r\n      text-align: center;\r\n      color: var(--hint);\r\n      padding-right: 2rem;\r\n      border-right: 1px solid var(--border);\r\n      p {\r\n        margin: 0;\r\n      }\r\n    }\r\n    .content {\r\n      padding: 0 1rem;\r\n      h3 {\r\n        margin: 0;\r\n      }\r\n      p {\r\n        margin: 0;\r\n      }\r\n      ul {\r\n        margin: 2rem 0;\r\n        list-style: circle;\r\n        padding-left: 4rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #999;\r\n  color: white;\r\n  padding: 5rem;\r\n  h2 {\r\n    margin-bottom: 3rem;\r\n  }\r\n  form {\r\n    display: flex;\r\n    align-items: center;\r\n    .prefix,\r\n    .postfix {\r\n      background: linear-gradient(to right, var(--dark), var(--light));\r\n      padding: 1rem 2rem;\r\n      color: white;\r\n      font-size: 2rem;\r\n    }\r\n    .prefix {\r\n      border-top-left-radius: 0.5rem;\r\n      border-bottom-left-radius: 0.5rem;\r\n    }\r\n    button {\r\n      background: #999;\r\n      border: 0;\r\n      cursor: pointer;\r\n      transition: all 0.2s;\r\n      &:hover {\r\n        opacity: 0.7;\r\n      }\r\n      .postfix {\r\n        border-top-right-radius: 0.5rem;\r\n        border-bottom-right-radius: 0.5rem;\r\n      }\r\n    }\r\n    input {\r\n      outline: 0;\r\n      border: 0;\r\n      min-width: 400px;\r\n      padding: 1rem 2rem;\r\n      line-height: 2rem;\r\n      &::placeholder {\r\n        color: var(--hint);\r\n      }\r\n    }\r\n  }\r\n}\r\n",".title {\r\n  &-small {\r\n    letter-spacing: 0.5rem;\r\n    font-size: 1.7rem;\r\n  }\r\n}\r\n.text {\r\n  &-primary {\r\n    color: var(--primary);\r\n  }\r\n  &-hint {\r\n    color: var(--hint);\r\n  }\r\n}\r\n","* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n",".mb-5 {\r\n  margin-bottom: 5rem !important;\r\n}\r\n.mb-2 {\r\n  margin-bottom: 2rem !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/variables.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/variables.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-family: "Muli", sans-serif;
  --primary: #2071e7;
  --light: #93dcdf;
  --dark: #04068a;
  --text: #333;
  --background: #fafafa;
  --hint: #999;
  --border: #ddd;
}`, "",{"version":3,"sources":["webpack://./src/scss/variables.scss"],"names":[],"mappings":"AAAA;EACE,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,cAAA;AACF","sourcesContent":[":root {\r\n  --font-family: \"Muli\", sans-serif;\r\n  --primary: #2071e7;\r\n  --light: #93dcdf;\r\n  --dark: #04068a;\r\n  --text: #333;\r\n  --background: #fafafa;\r\n  --hint: #999;\r\n  --border: #ddd;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/variables.scss":
/*!*********************************!*\
  !*** ./src/scss/variables.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./variables.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/variables.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/variables.scss */ "./src/scss/variables.scss");


})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map