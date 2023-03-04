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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");

// to add the various divs and other stuff to the content



function newCard(){
                                                            
  // making cards for individual projects
    const content = document.querySelector('.content');
    const proCard = document.createElement('div');
    proCard.className = "ProCard";
    proCard.textContent = "Project Name : " +(0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().ProjecTtitle;
    content.appendChild(proCard);


for(let i = 0; i< (0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().arry.length;i++){
  const tit = document.createElement('div');
  tit.textContent = "Title"+" : " + (0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().arry[i].title;
  const desc = document.createElement('div');
  desc.textContent = "Description"+" : " + (0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().arry[i].description;
  const dudate = document.createElement('div');
  dudate.textContent = "Due Date"+" : " + (0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().arry[i].duedate;
  const don = document.createElement('div');
  don.textContent = "Done"+" : " + (0,___WEBPACK_IMPORTED_MODULE_0__.DoThis)().arry[i].done;

  proCard.appendChild(tit);
  proCard.appendChild(desc);
  proCard.appendChild(dudate);
  proCard.appendChild(don);
  


  }}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoThis": () => (/* binding */ DoThis)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");





const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working


function DoThis(){
const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working

const newpr = new _newProject__WEBPACK_IMPORTED_MODULE_0__.makeArray ("fake pro");
newpr.arry.push(todo1);

(0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)(newpr.arry,todo2);
console.log(newpr.arry);
return newpr;

}
//newCard();

class Araaaay{
    constructor(arrname){
        this.title = arrname;
        [arrname] = new Array();
        this.ary = [arrname];

    }
}

const nwww = new Araaaay("fakename");
nwww.ary.push(todo1);
(0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)(nwww.ary,todo2)

console.log(nwww);

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewProject": () => (/* binding */ AddNewProject),
/* harmony export */   "AddTodo": () => (/* binding */ AddTodo),
/* harmony export */   "CreateProject": () => (/* binding */ CreateProject),
/* harmony export */   "makeArray": () => (/* binding */ makeArray)
/* harmony export */ });

 
class makeArray{
    constructor(ProjecTtitle){                          //creates a project array
        const newArray = new Array();
        this.arry = newArray;
        this.ProjecTtitle = ProjecTtitle;
    }
  
}

 function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array

const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",AddNewProject);


function AddNewProject(){
    document.getElementById("newProjectBtn").disabled = true;
    const proDiv = document.querySelector(".newButton");
    const proForm = document.createElement("input");
    proForm.setAttribute("type", "text");
    proForm.setAttribute("id", "ProjectName");
    proForm.setAttribute("placeholder", "Project Name");
    proDiv.appendChild(proForm);
    const subpro = document.createElement('button');
    subpro.setAttribute("id","submitProject")
    subpro.textContent = "Create Project";
    proDiv.appendChild(subpro);
    subpro.addEventListener("click",CreateProject)


}
function CreateProject(){
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const proDiv = document.querySelector(".ProjectLineup");
    const proTile = document.createElement('div');
    proTile.textContent = proName.value;
    document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWMkI7QUFDM0I7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUNBQU07QUFDbkQ7OztBQUdBLGVBQWUsR0FBRyx5Q0FBTSxlQUFlO0FBQ3ZDO0FBQ0Esb0NBQW9DLHlDQUFNO0FBQzFDO0FBQ0EsMkNBQTJDLHlDQUFNO0FBQ2pEO0FBQ0EsMENBQTBDLHlDQUFNO0FBQ2hEO0FBQ0EsbUNBQW1DLHlDQUFNOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3lDO0FBQ1g7QUFDUTtBQUNDOztBQUV2QyxrQkFBa0IsdUNBQUksMERBQTBEO0FBQ2hGLGtCQUFrQix1Q0FBSSxzREFBc0Q7OztBQUdyRTtBQUNQLGtCQUFrQix1Q0FBSSwwREFBMEQ7QUFDaEYsa0JBQWtCLHVDQUFJLHNEQUFzRDs7QUFFNUUsa0JBQWtCLGtEQUFTO0FBQzNCOztBQUVBLG9EQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQU87O0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNPO0FBQ1Asd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFROztBQUVSO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9Ub0RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9kb21GYWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vY3JlYXRpbmcgYSBjbGFzcyB0byByZXByZXNlbnQgdGhlIHRvIGRvIGluZGl2aWR1YWwgaXRlbXMgYW5kIGV4cG9ydGluZ1xuXG5leHBvcnQgY2xhc3MgVG9EbyAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5jb25zdHJ1Y3RvciAoVGl0bGUsIERlc2NyaXB0aW9uLCBEdWVkYXRlLCBEb25lKSB7XG4gICAgdGhpcy50aXRsZSA9IFRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBEZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZWRhdGUgPSBEdWVkYXRlO1xuICAgIHRoaXMuZG9uZSA9IERvbmU7XG4gICBcbn19IiwiaW1wb3J0IHsgRG9UaGlzIH0gZnJvbSBcIi5cIjtcbi8vIHRvIGFkZCB0aGUgdmFyaW91cyBkaXZzIGFuZCBvdGhlciBzdHVmZiB0byB0aGUgY29udGVudFxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0NhcmQoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAvLyBtYWtpbmcgY2FyZHMgZm9yIGluZGl2aWR1YWwgcHJvamVjdHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvQ2FyZC5jbGFzc05hbWUgPSBcIlByb0NhcmRcIjtcbiAgICBwcm9DYXJkLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWUgOiBcIiArRG9UaGlzKCkuUHJvamVjVHRpdGxlO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvQ2FyZCk7XG5cblxuZm9yKGxldCBpID0gMDsgaTwgRG9UaGlzKCkuYXJyeS5sZW5ndGg7aSsrKXtcbiAgY29uc3QgdGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS50aXRsZTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkdWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVkYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLmR1ZWRhdGU7XG4gIGNvbnN0IGRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb24udGV4dENvbnRlbnQgPSBcIkRvbmVcIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kb25lO1xuXG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQodGl0KTtcbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZChkdWRhdGUpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGRvbik7XG4gIFxuXG5cbiAgfX0iLCJpbXBvcnQgeyBtYWtlQXJyYXkgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuaW1wb3J0IHsgbmV3Q2FyZCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcblxuY29uc3QgdG9kbzEgPSBuZXcgVG9EbyhcIm9oIHlhaFwiLFwidG8gZG8gaXMgdG8gc2hvcCBncm9jZXJ5XCIsXCJ0b2RheVwiLFwibm90IGRvbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJvaCB5aFwiLFwidG8gZG8gaXMgdCBzaG9wIGdyb2NlcnlcIixcInRvYXlcIixcIm5vdCBkbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcblxuXG5leHBvcnQgZnVuY3Rpb24gRG9UaGlzKCl7XG5jb25zdCB0b2RvMSA9IG5ldyBUb0RvKFwib2ggeWFoXCIsXCJ0byBkbyBpcyB0byBzaG9wIGdyb2NlcnlcIixcInRvZGF5XCIsXCJub3QgZG9uZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIm9oIHloXCIsXCJ0byBkbyBpcyB0IHNob3AgZ3JvY2VyeVwiLFwidG9heVwiLFwibm90IGRuZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuXG5jb25zdCBuZXdwciA9IG5ldyBtYWtlQXJyYXkgKFwiZmFrZSBwcm9cIik7XG5uZXdwci5hcnJ5LnB1c2godG9kbzEpO1xuXG5BZGRUb2RvKG5ld3ByLmFycnksdG9kbzIpO1xuY29uc29sZS5sb2cobmV3cHIuYXJyeSk7XG5yZXR1cm4gbmV3cHI7XG5cbn1cbi8vbmV3Q2FyZCgpO1xuXG5jbGFzcyBBcmFhYWF5e1xuICAgIGNvbnN0cnVjdG9yKGFycm5hbWUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gYXJybmFtZTtcbiAgICAgICAgW2Fycm5hbWVdID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuYXJ5ID0gW2Fycm5hbWVdO1xuXG4gICAgfVxufVxuXG5jb25zdCBud3d3ID0gbmV3IEFyYWFhYXkoXCJmYWtlbmFtZVwiKTtcbm53d3cuYXJ5LnB1c2godG9kbzEpO1xuQWRkVG9kbyhud3d3LmFyeSx0b2RvMilcblxuY29uc29sZS5sb2cobnd3dyk7IiwiXG4gXG5leHBvcnQgY2xhc3MgbWFrZUFycmF5e1xuICAgIGNvbnN0cnVjdG9yKFByb2plY1R0aXRsZSl7ICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZXMgYSBwcm9qZWN0IGFycmF5XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuYXJyeSA9IG5ld0FycmF5O1xuICAgICAgICB0aGlzLlByb2plY1R0aXRsZSA9IFByb2plY1R0aXRsZTtcbiAgICB9XG4gIFxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIEFkZFRvZG8oYXJyYWF5LCBUb2Rvbykge1xuXG4gYXJyYWF5LnB1c2goVG9kb28pO1xuIHJldHVybiBhcnJhYXk7XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjZXB0cyBhbiBhcnJheSBhbmQgYSB0b2RvIHRvIGJlIGFkZGVkIHRvIHRoZSBhcnJheVxuXG5jb25zdCBud1BybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdFwiKTtcbm53UHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEFkZE5ld1Byb2plY3QpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdQcm9qZWN0KCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCBwcm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0J1dHRvblwiKTtcbiAgICBjb25zdCBwcm9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlByb2plY3ROYW1lXCIpO1xuICAgIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKHByb0Zvcm0pO1xuICAgIGNvbnN0IHN1YnBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1YnByby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3VibWl0UHJvamVjdFwiKVxuICAgIHN1YnByby50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQoc3VicHJvKTtcbiAgICBzdWJwcm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsQ3JlYXRlUHJvamVjdClcblxuXG59XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdCgpe1xuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3ROYW1lXCIpO1xuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgICBjb25zdCBwcm9UaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IHByb05hbWUudmFsdWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCdXR0b25cIikuaW5uZXJIVE1MPSBcIlwiO1xuICAgIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9UaWxlKTtcblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==