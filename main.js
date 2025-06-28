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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction about(){\n    console.log('gerren')\n    const content = document.getElementById('content')\n    const image = document.createElement('img');\n    image.src = '/drink.png';\n    \n    content.appendChild(image)\n    \n    }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://webpack-practice/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\n    console.log('gerren')\n    const content = document.getElementById('content')\n    const image = document.createElement('img');\n    image.src = '/fries-svgrepo-com.png';\n    \n    content.appendChild(image)\n    \n    const headline = document.createElement('h1');\n    headline.innerHTML = 'Welcome to Fry City';\n    \n    content.appendChild(headline)\n    \n    const about = document.createElement('p');\n    about.innerHTML = 'Here at Fry City we give you the best fries and all its variations.<br> Enjoy our Birria Fries, Carne Asada Fries, and the house favorite Pulled Pork Fries'\n    \n    content.appendChild(about)\n    }\n\n    \n    \n\n//# sourceURL=webpack://webpack-practice/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\nconst homePage = document.getElementById('home');\nconst menuPage = document.getElementById('menu');\nconst aboutPage = document.getElementById('about');\nconst content = document.getElementById('content');\n\n\nconst handleClick = () => {\n    let isClicked = false;\n    if(!isClicked){\n        content.innerHTML = '';\n        isClicked = true\n    }\n\n}\n\nhomePage.addEventListener('click',()=>{handleClick(); (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)()});\nmenuPage.addEventListener('click', ()=>{handleClick(); (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)()});\naboutPage.addEventListener('click', ()=>{handleClick(); (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()});\n\nconsole.log('nigga')\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n    console.log('gerren')\n    const content = document.getElementById('content')\n    const image = document.createElement('img');\n    image.src = '/burger-huge-svgrepo-com.png';\n    \n    content.appendChild(image)\n    \n    }\n\n//# sourceURL=webpack://webpack-practice/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;