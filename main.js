/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resto-bckgrnd.jpg */ \"./src/assets/resto-bckgrnd.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root\r\n{\r\n    --main-bckgrnd: #00000077;\r\n    --secondary-bckgrnd: white;\r\n    --ternary-bckgrnd: whitesmoke;\r\n    --main-bckgrnd-nav: #1A1A1A77;\r\n    --color-contrast: white;\r\n}\r\n\r\nbody\r\n{\r\n    min-height: 100vh;\r\n    display:flex;\r\n    flex-direction: column;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    font-family: 'Open Sans', 'Times New Roman', Times, serif;\r\n}\r\n\r\nheader\r\n{\r\n    background-color: var(--main-bckgrnd);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\nfooter\r\n{\r\n    background-color: var(--main-bckgrnd);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 0.5rem 0;\r\n    font-size: smaller;\r\n    color: var(--color-contrast);\r\n}\r\n\r\nfooter a\r\n{\r\n    color: var(--color-contrast);\r\n}\r\n\r\nnav\r\n{\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\nbutton\r\n{\r\n    background-color: #00000000;\r\n    border-radius: 10px 10px 0 0;\r\n    margin-top: 20px;\r\n    padding: 1em 2em;\r\n    border: 1px solid var(--color-contrast);\r\n    border-bottom: none;\r\n    color: var(--color-contrast);\r\n}\r\n\r\n\r\n\r\nbutton.selected\r\n{\r\n    background-color: var(--main-bckgrnd-nav);\r\n    font-weight: bold;\r\n}\r\n\r\n#content\r\n{\r\n    flex: 1;\r\n}\r\n\r\n.restaurant-infos\r\n{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: var(--main-bckgrnd);\r\n    color: var(--color-contrast);\r\n    gap: 40px;\r\n}\r\n\r\n.restaurant-infos h1\r\n{\r\n    font-size: 60px;\r\n}\r\n\r\n.restaurant-infos p\r\n{\r\n    font-size: 30px;\r\n}\r\n\r\n.informations\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10rem 0;\r\n}\r\n\r\n.sub-presentation\r\n{\r\n    background-color: var(--secondary-bckgrnd);\r\n\r\n}\r\n\r\n.hours\r\n{\r\n    background-color: var(--ternary-bckgrnd);\r\n}\r\n\r\n.hours h2\r\n{\r\n    padding-right: 18rem;\r\n}\r\n\r\n.hours li\r\n{\r\n    list-style: none;\r\n    margin: 10px 0;\r\n}\r\n\r\n.sub-presentation p\r\n{\r\n    width: 30%;\r\n    font-size: larger;\r\n}\r\n\r\n.menu-list\r\n{\r\n    background-color: var(--main-bckgrnd);\r\n    padding-top: 100px;\r\n    padding-bottom: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    list-style: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 50px;\r\n}\r\n\r\n.menu-part\r\n{\r\n    width: min(60%, 500px);\r\n    border-radius: 20px;\r\n    padding: 50px;\r\n    background-color: var(--secondary-bckgrnd);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n}\r\n\r\n.menu-part ul\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.menu-item\r\n{\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.item-header\r\n{\r\n    font-weight: bold;\r\n    min-width: 200px;\r\n    max-width: 200px;\r\n}\r\n\r\n.ingredients\r\n{\r\n    font-size: 12px;\r\n}\r\n\r\n.price\r\n{\r\n    font-size: 14px;\r\n    margin-left: auto;\r\n}\r\n\r\n.contact-card\r\n{\r\n    background-color: var(--main-bckgrnd);\r\n    width: 100%;\r\n    height: calc(100vh - 34px);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.contact\r\n{\r\n    background-color: var(--ternary-bckgrnd);\r\n    padding: 50px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.contact h1\r\n{\r\n    margin-bottom: 20px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/resto-bckgrnd.jpg":
/*!**************************************!*\
  !*** ./src/assets/resto-bckgrnd.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76acc63f2b9f7aa896d7.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/resto-bckgrnd.jpg?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisplayController)\n/* harmony export */ });\n/* harmony import */ var _views_contactView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/contactView */ \"./src/views/contactView.js\");\n/* harmony import */ var _views_homePageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/homePageView */ \"./src/views/homePageView.js\");\n/* harmony import */ var _views_menuView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/menuView */ \"./src/views/menuView.js\");\n\r\n\r\n\r\n\r\nclass DisplayController\r\n{\r\n    #container;\r\n    #navButtons;\r\n    #currentMenu;\r\n     \r\n    #pages;\r\n\r\n    #selectedClass = \"selected\";\r\n\r\n    constructor(document, container, navButtons, homePageViewModel, menuViewModel, contactViewModel)\r\n    {\r\n        this.#container = container;\r\n        this.#navButtons = navButtons;\r\n        this.#currentMenu = this.#navButtons.find((navMenu, _, __) => navMenu.classList.contains(this.#selectedClass));\r\n\r\n        this.#pages =\r\n        {\r\n            \"Home\": new _views_homePageView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document, container, homePageViewModel),\r\n            \"Menu\": new _views_menuView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document, container, menuViewModel),\r\n            \"About\" : new _views_contactView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document, container, contactViewModel),\r\n        }\r\n\r\n        this.#navButtons.forEach((button, _, __) => button.addEventListener(\"click\", (event) => this.#switchPage(event.target)));\r\n\r\n        if (this.#currentMenu !== null)\r\n        {\r\n            this.#switchPage(this.#currentMenu);\r\n        }\r\n    }\r\n\r\n    #clearContainer()\r\n    {\r\n        while (this.#container.hasChildNodes())\r\n        {\r\n            this.#container.firstChild.remove();\r\n        }\r\n    }\r\n\r\n    #switchPage(button)\r\n    {\r\n        this.#currentMenu.classList.remove(this.#selectedClass);\r\n        button.classList.add(this.#selectedClass);\r\n        this.#currentMenu = button;\r\n        this.#clearContainer();\r\n\r\n        this.#pages[button.textContent]?.show();\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _views_homePageViewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/homePageViewModel.js */ \"./src/views/homePageViewModel.js\");\n/* harmony import */ var _views_menuViewModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/menuViewModel.js */ \"./src/views/menuViewModel.js\");\n/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.js */ \"./src/menu/menu.js\");\n/* harmony import */ var _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menuCategory.js */ \"./src/menu/menuCategory.js\");\n/* harmony import */ var _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menuItem.js */ \"./src/menu/menuItem.js\");\n/* harmony import */ var _views_contactViewModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/contactViewModel.js */ \"./src/views/contactViewModel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst navMenu = document.querySelector(\"nav\");\r\nconst buttons = Array.from(navMenu.children);\r\n\r\nconst homePageViewModel = new _views_homePageViewModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n    \"Trattoria Lesbiana\",\r\n    \"La Trattoria Lesbiana is a traditionnal italian restaurant. Our ingredients are fresh and the food is prepared by real Italian Lesbians. Enjoy a charming place by the sea that surely will make you feel like a real mediterranean.\",\r\n    \"An Italian Restaurant\",\r\n    \"60 Unexisting Street, Unreal City\",\r\n    [\r\n        \"Monday: closed\",\r\n        \"Tuesday: 11am - 11pm\",\r\n        \"Wednesday: 11am - 11pm\",\r\n        \"Thursday: 11am - 11pm\",\r\n        \"Friday: 10am - 12pm\",\r\n        \"Saturday: 10am - 12pm\",\r\n        \"Sunday: 12am - 10pm\",\r\n    ],\r\n);\r\n\r\nconst categories =\r\n[\r\n    new _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"ANTIPASTI E INSALATE\",\r\n    [\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Green bean salad\", \"roasted pistachios & salted ricotta\", \"14\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Mozzarella & datterino tomatoes\", \"basil & balsamic cream\", \"15\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Melanzana laccata, heart of burrata\", \"caramelised aubergines, confit tomatoes & mint\", \"16\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Baby artichoke salad\", \"avocado & parmigiano\", \"19\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Sea bass carpaccio\", \"stracciatella, black lemon & raspberry\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Green asparagus salad with ricotta\", \"spinach shoots, pomegranate, pine nuts\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Calamari Fritti\", \"tartar sauce\", \"17\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Spinach shoots\", \"pecorino, hazelnuts & lemon vinaigrette\", \"12\"),\r\n    ]),\r\n    new _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"PIZZA\",\r\n    [\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Margherita\", \"tomato sauce, fior di latte, basil\", \"13\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Bufalina\", \"tomato sauce, stracciatella, oregano, fresh basil\", \"15\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Quattro Formaggi\", \"gorgonzola, pecorino, fior di latte, parmiggiano\", \"17\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Regina Classica\", \"fior di latte, tomatoes, ham with herbs, raw mushrooms\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Diavola\", \"tomato sauce, spicy sausage Spianata, fior di latte, oregano\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Burrata\", \"tomato sauce, burrata, balsamic cream, rocket, Datterino tomatoes & confit tomatoes\", \"19\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Tonnato\", \"tomato sauce, fresh tuna, confit tomatoes, capers, olives, oregano, fior di latte\", \"22\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Truffe\", \"truffle cream, fior di latte, parmigiano, fresh summer truffle\", \"27\"),\r\n    ]),\r\n    new _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"PASTA\",\r\n    [\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Penne Pomodoro or arrabiata\", \"Datterino tomatoes & basil or chilli pepper & fresh herbs\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Pappardelle al Ragu of long-cooked beef\", \"roasted onions, carrots & celery\", \"23\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Ravioli di Ricotta e Spinaci, limone\", \"sage & parmigiano cream\", \"18\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Spaghetti alla carbonara or Carbonara al tartufo\", \"guanciale & pecorino\", \"19\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Pici cacio e pepe\", \"pecorino with pepper & parmesan\", \"22\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Penne Alfredo\", \"parmesan cream, golden chicken & brown mushrooms\", \"24\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Gnocchi alla Sorrentina\", \"tomatoes, mozzarella & fresh basil\", \"21\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Spaghetti alle vongole\", \"clam, garlic & chilli\", \"28\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Fregola ai frutti di mare\", \"fregola sarda, prawns, squid, clams, white wine, garlic & chilli\", \"32\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Linguine with truffle\", \"truffle cream, parmigiano & fresh summer truffle\", \"31\"),\r\n    ]),\r\n    new _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"PESCE E CARNE\",\r\n    [\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Fritto Misto\", \"squids, prawns, zucchinis & eggplants\", \"23\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Tunna steak Sicilian-style\", \"spinach shoots, olives, capers & fennet julienne\", \"27\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Grilled sea bass fillet\", \"tomatoes, baby potatoes with thyme & crispy breadcrumbs\", \"25\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Golden chicken fillet Caesar-style\", \"romaine salad, croutons, parmesan & Caesar sauce\", \"23\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Beef carpaccio\", \"mozzarella, roasted tomatoes & pine nuts, baby potatoes with thyme\", \"22\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Veal Milanaise-style\", \"tomato penne\"),\r\n    ]),\r\n    new _menu_menuCategory_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"DOLCE\",\r\n    [\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Tiramisu\", \"\", \"9\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Tiramisu XL\", \"\", \"15\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Italian Profiterole\", \"stracciatella ice cream\", \"12\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Soft chocolate nocciolata cake\", \"vanilla cream\", \"10\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Panna cotta\", \"pistachio praline & toasted pistachios\", \"12\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Roasted pear with honey\", \"rosemary crumble, vanilla ice cream\", \"12\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Pineapple carpaccio\", \"fresh mint\", \"9\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Pizza alla Nutella\", \"almonds & hazelnuts\", \"9\"),\r\n        new _menu_menuItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Gelato e Sorbetti\", \"vanilla - coffee - pistachio - chocolate - strawberry - lemon - hazelnuts\", \"7\"),\r\n    ]),\r\n];\r\nconst menu = new _menu_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](categories);\r\nconst menuViewModel = new _views_menuViewModel_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](menu);\r\n\r\nconst contactViewModel = new _views_contactViewModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"01.01.01.01.01\", \"lesbiantrattoria@dontexist.sad\");\r\n\r\nnew _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document, content, buttons, homePageViewModel, menuViewModel, contactViewModel);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _menuCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuCategory */ \"./src/menu/menuCategory.js\");\n\r\n\r\nclass Menu\r\n{\r\n    #categories;\r\n\r\n    constructor(...categories)\r\n    {\r\n        this.#categories = Array.from(...categories);\r\n    }\r\n\r\n    add(category)\r\n    {\r\n        this.#categories.push(category);\r\n    }\r\n\r\n    get categories()\r\n    {\r\n        return this.#categories;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menu.js?");

/***/ }),

/***/ "./src/menu/menuCategory.js":
/*!**********************************!*\
  !*** ./src/menu/menuCategory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuCategory)\n/* harmony export */ });\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem */ \"./src/menu/menuItem.js\");\n\r\n\r\nclass MenuCategory\r\n{\r\n    #name;\r\n    #items\r\n\r\n    constructor(name, items)\r\n    {\r\n        this.#name = name;\r\n        this.#items = items;\r\n    }\r\n\r\n    get name()\r\n    {\r\n        return this.#name;\r\n    }\r\n\r\n    get items()\r\n    {\r\n        return this.#items;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menuCategory.js?");

/***/ }),

/***/ "./src/menu/menuItem.js":
/*!******************************!*\
  !*** ./src/menu/menuItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuItem)\n/* harmony export */ });\nclass MenuItem\r\n{\r\n    #name;\r\n    #ingredients;\r\n    #price;\r\n\r\n    constructor(name, ingredients, price)\r\n    {\r\n        this.#name = name;\r\n        this.#ingredients = ingredients;\r\n        this.#price = price;\r\n    }\r\n\r\n    get name()\r\n    {\r\n        return this.#name;\r\n    }\r\n\r\n    get ingredients()\r\n    {\r\n        return this.#ingredients;\r\n    }\r\n\r\n    get price()\r\n    {\r\n        return this.#price;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menuItem.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/views/contactView.js":
/*!**********************************!*\
  !*** ./src/views/contactView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactView)\n/* harmony export */ });\n/* harmony import */ var _contactViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactViewModel */ \"./src/views/contactViewModel.js\");\n\r\n\r\nclass ContactView\r\n{\r\n    #document;\r\n    #container;\r\n\r\n    #contactViewModel;\r\n\r\n    constructor(document, container, contactViewModel)\r\n    {\r\n        this.#document = document;\r\n        this.#container = container;\r\n        \r\n        this.#contactViewModel = contactViewModel;\r\n    }\r\n\r\n    show()\r\n    {\r\n        const contactCard = this.#document.createElement(\"div\");\r\n        contactCard.classList.add(\"contact-card\");\r\n\r\n        const contact = this.#document.createElement(\"div\");\r\n        contact.classList.add(\"contact\");\r\n\r\n        const contactHeader = this.#document.createElement(\"h1\");\r\n        contactHeader.textContent = \"Contact Us\";\r\n\r\n        const phone = this.#document.createElement(\"p\");\r\n        phone.textContent = `Phone: ${this.#contactViewModel.phoneNumber}`;\r\n\r\n        const email = this.#document.createElement(\"p\");\r\n        email.textContent = `Email: ${this.#contactViewModel.email}`;\r\n\r\n        contact.appendChild(contactHeader);\r\n        contact.appendChild(phone);\r\n        contact.appendChild(email);\r\n\r\n        contactCard.appendChild(contact);\r\n\r\n        this.#container.appendChild(contactCard);\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/contactView.js?");

/***/ }),

/***/ "./src/views/contactViewModel.js":
/*!***************************************!*\
  !*** ./src/views/contactViewModel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactViewModel)\n/* harmony export */ });\nclass ContactViewModel\r\n{\r\n    #phoneNumber;\r\n    #email;\r\n\r\n    constructor(phoneNumber, email)\r\n    {\r\n        this.#phoneNumber = phoneNumber;\r\n        this.#email = email;\r\n    }\r\n\r\n    get phoneNumber()\r\n    {\r\n        return this.#phoneNumber;\r\n    }\r\n\r\n    get email()\r\n    {\r\n        return this.#email;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/contactViewModel.js?");

/***/ }),

/***/ "./src/views/homePageView.js":
/*!***********************************!*\
  !*** ./src/views/homePageView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePageView)\n/* harmony export */ });\n/* harmony import */ var _homePageViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePageViewModel */ \"./src/views/homePageViewModel.js\");\n\r\n\r\nclass HomePageView\r\n{\r\n    #document;\r\n    #container\r\n\r\n    #homePageViewModel;\r\n\r\n    constructor(document, container, homePageViewModel)\r\n    {\r\n        this.#document = document;\r\n        this.#container = container;\r\n        this.#homePageViewModel = homePageViewModel;\r\n    }\r\n\r\n    #showHomeRestaurantInfos()\r\n    {\r\n        const restaurantInfos = this.#document.createElement(\"div\");\r\n        restaurantInfos.classList.add(\"restaurant-infos\");\r\n\r\n        const restaurantName = this.#document.createElement(\"h1\");\r\n        restaurantName.textContent = this.#homePageViewModel.name;\r\n\r\n        const informations = this.#document.createElement(\"p\");\r\n        informations.textContent = `${this.#homePageViewModel.subDescription} | ${this.#homePageViewModel.adress}`;\r\n\r\n        restaurantInfos.appendChild(restaurantName);\r\n        restaurantInfos.appendChild(informations);\r\n\r\n        this.#container.appendChild(restaurantInfos);\r\n    }\r\n\r\n    #showHomeSubPresentation()\r\n    {\r\n        const subPresentation = this.#document.createElement(\"div\");\r\n        subPresentation.classList.add(\"informations\", \"sub-presentation\");\r\n\r\n        const description = this.#document.createElement(\"p\");\r\n        description.textContent = this.#homePageViewModel.description;\r\n\r\n        subPresentation.appendChild(description);\r\n\r\n        this.#container.appendChild(subPresentation);\r\n    }\r\n\r\n    #showHomeHours()\r\n    {\r\n        const hoursInfos = this.#document.createElement(\"div\");\r\n        hoursInfos.classList.add(\"informations\", \"hours\");\r\n\r\n        const hours = this.#document.createElement(\"h2\");\r\n        hours.textContent = \"Hours\";\r\n\r\n        const hoursList = this.#document.createElement(\"ul\");\r\n\r\n        this.#homePageViewModel.hours.forEach((hour, _, __) =>\r\n        {\r\n            const hourItem = this.#document.createElement(\"li\");\r\n            hourItem.textContent = hour;\r\n\r\n            hoursList.appendChild(hourItem);\r\n        });\r\n\r\n        hoursInfos.appendChild(hours);\r\n        hoursInfos.appendChild(hoursList);\r\n\r\n        this.#container.appendChild(hoursInfos);\r\n    }\r\n\r\n    show()\r\n    {\r\n        this.#showHomeRestaurantInfos();\r\n        this.#showHomeSubPresentation();\r\n        this.#showHomeHours();\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/homePageView.js?");

/***/ }),

/***/ "./src/views/homePageViewModel.js":
/*!****************************************!*\
  !*** ./src/views/homePageViewModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePageViewModel)\n/* harmony export */ });\nclass HomePageViewModel\r\n{\r\n    #name;\r\n    #description;\r\n    #subDescription;\r\n    #adress;\r\n    #hours;\r\n\r\n    constructor(name, description, subDescription, adress, hours)\r\n    {\r\n        this.#name = name;\r\n        this.#description = description\r\n        this.#subDescription = subDescription;\r\n        this.#adress = adress;\r\n        this.#hours = hours;\r\n    }\r\n\r\n    get name()\r\n    {\r\n        return this.#name;\r\n    }\r\n\r\n    get description()\r\n    {\r\n        return this.#description;\r\n    }\r\n\r\n    get subDescription()\r\n    {\r\n        return this.#subDescription;\r\n    }\r\n\r\n    get adress()\r\n    {\r\n        return this.#adress;\r\n    }\r\n\r\n    get hours()\r\n    {\r\n        return this.#hours\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/homePageViewModel.js?");

/***/ }),

/***/ "./src/views/menuView.js":
/*!*******************************!*\
  !*** ./src/views/menuView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuView)\n/* harmony export */ });\n/* harmony import */ var _menuViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuViewModel */ \"./src/views/menuViewModel.js\");\n\r\n\r\nclass MenuView\r\n{\r\n    #document;\r\n    #container;\r\n    #menuViewModel;\r\n\r\n    constructor(document, container, menuViewModel)\r\n    {\r\n        this.#document = document;\r\n        this.#container = container;\r\n        this.#menuViewModel = menuViewModel;\r\n    }\r\n\r\n    #showItem(itemList, item)\r\n    {\r\n        const menuItem = this.#document.createElement(\"li\");\r\n        menuItem.classList.add(\"menu-item\");\r\n\r\n        const itemHeader = this.#document.createElement(\"p\");\r\n        itemHeader.classList.add(\"item-header\");\r\n        itemHeader.textContent = item.name;\r\n\r\n        const ingredients = this.#document.createElement(\"p\");\r\n        ingredients.classList.add(\"ingredients\");\r\n        ingredients.textContent = item.ingredients;\r\n\r\n        const price = this.#document.createElement(\"p\");\r\n        price.classList.add(\"price\");\r\n        price.textContent = item.price;\r\n\r\n        menuItem.appendChild(itemHeader);\r\n        menuItem.appendChild(ingredients);\r\n        menuItem.appendChild(price);\r\n\r\n        itemList.appendChild(menuItem);\r\n    }\r\n\r\n    #showCategory(menuList, category)\r\n    {\r\n        const menuPart = this.#document.createElement(\"li\");\r\n        menuPart.classList.add(\"menu-part\");\r\n\r\n        const menuHeader = this.#document.createElement(\"h1\");\r\n        menuHeader.classList.add(\"menu-header\");\r\n        menuHeader.textContent = category.name;\r\n\r\n        const itemList = this.#document.createElement(\"ul\");\r\n        category.items.forEach((item, _, __) => this.#showItem(itemList, item));\r\n\r\n        menuPart.appendChild(menuHeader);\r\n        menuPart.appendChild(itemList);\r\n\r\n        menuList.appendChild(menuPart);\r\n    }\r\n\r\n    show()\r\n    {\r\n        const menuList = this.#document.createElement(\"ul\");\r\n        menuList.classList.add(\"menu-list\");\r\n\r\n        const menu = this.#menuViewModel.menu;\r\n        menu.categories.forEach((category, _, __) => this.#showCategory(menuList, category));\r\n\r\n        this.#container.appendChild(menuList);\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/menuView.js?");

/***/ }),

/***/ "./src/views/menuViewModel.js":
/*!************************************!*\
  !*** ./src/views/menuViewModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuViewModel)\n/* harmony export */ });\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu */ \"./src/menu/menu.js\");\n\r\n\r\nclass MenuViewModel\r\n{\r\n    #menu;\r\n\r\n    constructor(menu)\r\n    {\r\n        this.#menu = menu;\r\n    }\r\n\r\n    get menu()\r\n    {\r\n        return this.#menu;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/views/menuViewModel.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;