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
/* harmony export */   "AddTodo": () => (/* binding */ AddTodo),
/* harmony export */   "makeArray": () => (/* binding */ makeArray),
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
const  newProject = (projectTitle, toDo) =>{
    let projectArray = [];
    let proTitle = projectTitle
    projectArray.push(toDo);
    return{ projectArray, proTitle};
}
 
class makeArray{
    constructor(){                          //creates a project array
        const newArray = new Array();
        return newArray;
    }
  
}

 function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array


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
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working

const newpr = new _newProject__WEBPACK_IMPORTED_MODULE_0__.makeArray;
newpr.push(todo1);

(0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)(newpr,todo2);
console.log(newpr);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7OztBQ1YwQzs7O0FBRzFDOzs7QUFHTztBQUNQO0FBQ0EsZ0JBQWdCLHVEQUFVOztBQUUxQjs7QUFFQSxlQUFlLEdBQUcsdURBQVUsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQSwwQkFBMEIsdURBQVU7QUFDcEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQVE7O0FBRVI7QUFDQTtBQUNBLDJDQUEyQzs7Ozs7OztVQ25CM0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhEO0FBQ2hDO0FBQ1E7QUFDQzs7Ozs7Ozs7OztBQVV2QyxrQkFBa0IsdUNBQUksMERBQTBEO0FBQ2hGLGtCQUFrQix1Q0FBSSxzREFBc0Q7O0FBRTVFLGtCQUFrQixrREFBUztBQUMzQjs7QUFFQSxvREFBTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL2NyZWF0aW5nIGEgY2xhc3MgdG8gcmVwcmVzZW50IHRoZSB0byBkbyBpbmRpdmlkdWFsIGl0ZW1zIGFuZCBleHBvcnRpbmdcblxuZXhwb3J0IGNsYXNzIFRvRG8gIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuY29uc3RydWN0b3IgKFRpdGxlLCBEZXNjcmlwdGlvbiwgRHVlZGF0ZSwgRG9uZSkge1xuICAgIHRoaXMudGl0bGUgPSBUaXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gRGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVkYXRlID0gRHVlZGF0ZTtcbiAgICB0aGlzLmRvbmUgPSBEb25lO1xuICAgLy9yZXR1cm57IHRpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUsZG9uZX07XG59fSIsImltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cblxuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0NhcmQoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtpbmcgY2FyZHMgZm9yIGluZGl2aWR1YWwgcHJvamVjdHNcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KCkucHJvamVjdEFycmF5Lmxlbmd0aCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5mb3IobGV0IGkgPSAwOyBpPCBuZXdQcm9qZWN0KCkucHJvamVjdEFycmF5Lmxlbmd0aDtpKyspe1xuICBjb25zdCBwcm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb0NhcmQuY2xhc3NOYW1lID0gXCJQcm9DYXJkXCI7XG4gICAgcHJvQ2FyZC50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QoKS5wcm9UaXRsZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb0NhcmQpO1xufVxufSIsImV4cG9ydCBjb25zdCAgbmV3UHJvamVjdCA9IChwcm9qZWN0VGl0bGUsIHRvRG8pID0+e1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBsZXQgcHJvVGl0bGUgPSBwcm9qZWN0VGl0bGVcbiAgICBwcm9qZWN0QXJyYXkucHVzaCh0b0RvKTtcbiAgICByZXR1cm57IHByb2plY3RBcnJheSwgcHJvVGl0bGV9O1xufVxuIFxuZXhwb3J0IGNsYXNzIG1ha2VBcnJheXtcbiAgICBjb25zdHJ1Y3RvcigpeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVhdGVzIGEgcHJvamVjdCBhcnJheVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfVxuICBcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBBZGRUb2RvKGFycmFheSwgVG9kb28pIHtcblxuIGFycmFheS5wdXNoKFRvZG9vKTtcbiByZXR1cm4gYXJyYWF5O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmV3UHJvamVjdCwgcHJvamVjdCwgbWFrZUFycmF5IH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IG5ld0NhcmQgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB0b2RvMSA9IG5ldyBUb0RvKFwib2ggeWFoXCIsXCJ0byBkbyBpcyB0byBzaG9wIGdyb2NlcnlcIixcInRvZGF5XCIsXCJub3QgZG9uZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIm9oIHloXCIsXCJ0byBkbyBpcyB0IHNob3AgZ3JvY2VyeVwiLFwidG9heVwiLFwibm90IGRuZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuXG5jb25zdCBuZXdwciA9IG5ldyBtYWtlQXJyYXk7XG5uZXdwci5wdXNoKHRvZG8xKTtcblxuQWRkVG9kbyhuZXdwcix0b2RvMik7XG5jb25zb2xlLmxvZyhuZXdwcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=