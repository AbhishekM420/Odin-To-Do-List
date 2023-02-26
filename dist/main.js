/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });

//creating a class to represent the to do individual items and exporting

class ToDo  {                             
constructor (Title, Description, Duedate, Done) {
    this.title = Title;
    this.description = Description;
    this.duedate = Duedate;
    this.done = Done;
   //return{ title,description,duedate,done};
}}

/***/ }),

/***/ "./src/domFactor.js":
/*!**************************!*\
  !*** ./src/domFactor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newCard": () => (/* binding */ newCard)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");



// to add the various divs and other stuff to the content


function newCard(){
                                                    // making cards for individual projects
    console.log((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.newProject)().projectArray.length);

const content = document.querySelector('.content');

for(let i = 0; i< (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.newProject)().projectArray.length;i++){
  const proCard = document.createElement('div');
  proCard.className = "ProCard";
    proCard.textContent = (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.newProject)().proTitle;
    content.appendChild(proCard);
}
}

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
const  newProject = () =>{
    let projectArray = [];
    let proTitle = "Default Project";
    projectArray.push(proTitle);
    console.log(projectArray);
    return{ projectArray, proTitle};
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");










const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working


console.log(todo1.title);
const content = document.querySelector(".content");
(0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.newCard)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7OztBQ1YwQzs7O0FBRzFDOzs7QUFHTztBQUNQO0FBQ0EsZ0JBQWdCLHVEQUFVOztBQUUxQjs7QUFFQSxlQUFlLEdBQUcsdURBQVUsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQSwwQkFBMEIsdURBQVU7QUFDcEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDWjtBQUNROzs7Ozs7OztBQVF0QyxrQkFBa0IsdUNBQUksMERBQTBEOzs7QUFHaEY7QUFDQTtBQUNBLG1EQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL2NyZWF0aW5nIGEgY2xhc3MgdG8gcmVwcmVzZW50IHRoZSB0byBkbyBpbmRpdmlkdWFsIGl0ZW1zIGFuZCBleHBvcnRpbmdcblxuZXhwb3J0IGNsYXNzIFRvRG8gIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuY29uc3RydWN0b3IgKFRpdGxlLCBEZXNjcmlwdGlvbiwgRHVlZGF0ZSwgRG9uZSkge1xuICAgIHRoaXMudGl0bGUgPSBUaXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gRGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVkYXRlID0gRHVlZGF0ZTtcbiAgICB0aGlzLmRvbmUgPSBEb25lO1xuICAgLy9yZXR1cm57IHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUsZG9uZX07XG59fSIsImltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cblxuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0NhcmQoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtpbmcgY2FyZHMgZm9yIGluZGl2aWR1YWwgcHJvamVjdHNcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KCkucHJvamVjdEFycmF5Lmxlbmd0aCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5mb3IobGV0IGkgPSAwOyBpPCBuZXdQcm9qZWN0KCkucHJvamVjdEFycmF5Lmxlbmd0aDtpKyspe1xuICBjb25zdCBwcm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb0NhcmQuY2xhc3NOYW1lID0gXCJQcm9DYXJkXCI7XG4gICAgcHJvQ2FyZC50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QoKS5wcm9UaXRsZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb0NhcmQpO1xufVxufSIsImV4cG9ydCBjb25zdCAgbmV3UHJvamVjdCA9ICgpID0+e1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBsZXQgcHJvVGl0bGUgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgIHByb2plY3RBcnJheS5wdXNoKHByb1RpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgIHJldHVybnsgcHJvamVjdEFycmF5LCBwcm9UaXRsZX07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IG5ld0NhcmQgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcblxuXG5cblxuXG5cblxuY29uc3QgdG9kbzEgPSBuZXcgVG9EbyhcIm9oIHlhaFwiLFwidG8gZG8gaXMgdG8gc2hvcCBncm9jZXJ5XCIsXCJ0b2RheVwiLFwibm90IGRvbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcblxuXG5jb25zb2xlLmxvZyh0b2RvMS50aXRsZSk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xubmV3Q2FyZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=