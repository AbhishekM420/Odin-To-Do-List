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
/* harmony export */   "Araaaay": () => (/* binding */ Araaaay),
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");


 
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
    hideForm()
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
    const proDiv = document.querySelector(".ProjectLineup");// Adding a function to accept project name and create the project array
    const NewProjectName = proName.value;
    const newProjectArray = new ___WEBPACK_IMPORTED_MODULE_0__.Araaaay(NewProjectName);
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
    
    
    const proTile = document.createElement('div');
    proTile.textContent = proName.value;
   // document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);
    const ToDoBtn = document.createElement("button")
    ToDoBtn.textContent = "Create To Do"
    ToDoBtn.className = "CreateToDo"
    proDiv.appendChild(ToDoBtn)
    ToDoBtn.addEventListener("click", ShowToDoForm)
    return{newProjectArray};


}
function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}


function ShowToDoForm(){

    document.querySelector(".input").style.display = "";
    const SubitToDoBtn = document.createElement("button");
    SubitToDoBtn.textContent = "Submit To Do"
    document.querySelector(".input").appendChild(SubitToDoBtn);
    SubitToDoBtn.addEventListener("click",IntakeToDo)
}



function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;
    let Description = document.getElementById("Description").value;
    let Done = document.getElementById("Done").value;

    if( title == "" || DueDate == "" || Description == "" || Done == "")
    return;
    else{
         let newTodo = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo(title,Description,DueDate,Done);
        AddTodo(CreateProject().newProjectArray.ary,newTodo);
        console.log("hello")
        console.log(CreateProject().newProjectArray.ary);
    }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWMkI7QUFDM0I7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUNBQU07QUFDbkQ7OztBQUdBLGVBQWUsR0FBRyx5Q0FBTSxlQUFlO0FBQ3ZDO0FBQ0Esb0NBQW9DLHlDQUFNO0FBQzFDO0FBQ0EsMkNBQTJDLHlDQUFNO0FBQ2pEO0FBQ0EsMENBQTBDLHlDQUFNO0FBQ2hEO0FBQ0EsbUNBQW1DLHlDQUFNOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN5QztBQUNYO0FBQ1E7QUFDQzs7QUFFdkMsa0JBQWtCLHVDQUFJLDBEQUEwRDtBQUNoRixrQkFBa0IsdUNBQUksc0RBQXNEOzs7QUFHckU7QUFDUCxrQkFBa0IsdUNBQUksMERBQTBEO0FBQ2hGLGtCQUFrQix1Q0FBSSxzREFBc0Q7O0FBRTVFLGtCQUFrQixrREFBUztBQUMzQjs7QUFFQSxvREFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3FCO0FBQ0U7QUFDOUI7QUFDTztBQUNQLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBUTs7QUFFUjtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsZ0NBQWdDLHNDQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1Q0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O1VDbkdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy9jcmVhdGluZyBhIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgdG8gZG8gaW5kaXZpZHVhbCBpdGVtcyBhbmQgZXhwb3J0aW5nXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX0iLCJpbXBvcnQgeyBEb1RoaXMgfSBmcm9tIFwiLlwiO1xuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2FyZCgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIC8vIG1ha2luZyBjYXJkcyBmb3IgaW5kaXZpZHVhbCBwcm9qZWN0c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9DYXJkLmNsYXNzTmFtZSA9IFwiUHJvQ2FyZFwiO1xuICAgIHByb0NhcmQudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZSA6IFwiICtEb1RoaXMoKS5Qcm9qZWNUdGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9DYXJkKTtcblxuXG5mb3IobGV0IGkgPSAwOyBpPCBEb1RoaXMoKS5hcnJ5Lmxlbmd0aDtpKyspe1xuICBjb25zdCB0aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0LnRleHRDb250ZW50ID0gXCJUaXRsZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLnRpdGxlO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGR1ZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWRhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZHVlZGF0ZTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLmRvbmU7XG5cbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZCh0aXQpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGRlc2MpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGR1ZGF0ZSk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZG9uKTtcbiAgXG5cblxuICB9fSIsImltcG9ydCB7IG1ha2VBcnJheSB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBuZXdDYXJkIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuXG5jb25zdCB0b2RvMSA9IG5ldyBUb0RvKFwib2ggeWFoXCIsXCJ0byBkbyBpcyB0byBzaG9wIGdyb2NlcnlcIixcInRvZGF5XCIsXCJub3QgZG9uZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIm9oIHloXCIsXCJ0byBkbyBpcyB0IHNob3AgZ3JvY2VyeVwiLFwidG9heVwiLFwibm90IGRuZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBEb1RoaXMoKXtcbmNvbnN0IHRvZG8xID0gbmV3IFRvRG8oXCJvaCB5YWhcIixcInRvIGRvIGlzIHRvIHNob3AgZ3JvY2VyeVwiLFwidG9kYXlcIixcIm5vdCBkb25lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5jb25zdCB0b2RvMiA9IG5ldyBUb0RvKFwib2ggeWhcIixcInRvIGRvIGlzIHQgc2hvcCBncm9jZXJ5XCIsXCJ0b2F5XCIsXCJub3QgZG5lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5cbmNvbnN0IG5ld3ByID0gbmV3IG1ha2VBcnJheSAoXCJmYWtlIHByb1wiKTtcbm5ld3ByLmFycnkucHVzaCh0b2RvMSk7XG5cbkFkZFRvZG8obmV3cHIuYXJyeSx0b2RvMik7XG5jb25zb2xlLmxvZyhuZXdwci5hcnJ5KTtcbnJldHVybiBuZXdwcjtcblxufVxuLy9uZXdDYXJkKCk7XG5cbmV4cG9ydCBjbGFzcyBBcmFhYWF5e1xuICAgIGNvbnN0cnVjdG9yKGFycm5hbWUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gYXJybmFtZTtcbiAgICAgICAgW2Fycm5hbWVdID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuYXJ5ID0gW2Fycm5hbWVdO1xuXG4gICAgfVxufVxuXG5jb25zdCBud3d3ID0gbmV3IEFyYWFhYXkoXCJmYWtlbmFtZVwiKTtcbm53d3cuYXJ5LnB1c2godG9kbzEpO1xuQWRkVG9kbyhud3d3LmFyeSx0b2RvMilcblxuIiwiaW1wb3J0IHsgQXJhYWFheSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuIFxuZXhwb3J0IGNsYXNzIG1ha2VBcnJheXtcbiAgICBjb25zdHJ1Y3RvcihQcm9qZWNUdGl0bGUpeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVhdGVzIGEgcHJvamVjdCBhcnJheVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmFycnkgPSBuZXdBcnJheTtcbiAgICAgICAgdGhpcy5Qcm9qZWNUdGl0bGUgPSBQcm9qZWNUdGl0bGU7XG4gICAgfVxuICBcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBBZGRUb2RvKGFycmFheSwgVG9kb28pIHtcblxuIGFycmFheS5wdXNoKFRvZG9vKTtcbiByZXR1cm4gYXJyYWF5O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuY29uc3QgbndQcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RcIik7XG5ud1Byby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixBZGROZXdQcm9qZWN0KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gQWRkTmV3UHJvamVjdCgpe1xuICAgIGhpZGVGb3JtKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJvamVjdE5hbWVcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvRm9ybSk7XG4gICAgY29uc3Qgc3VicHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VicHJvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzdWJtaXRQcm9qZWN0XCIpXG4gICAgc3VicHJvLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIHByb0Rpdi5hcHBlbmRDaGlsZChzdWJwcm8pO1xuICAgIHN1YnByby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixDcmVhdGVQcm9qZWN0KVxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVQcm9qZWN0KCl7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgcHJvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdE5hbWVcIik7XG4gICAgY29uc3QgcHJvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpOy8vIEFkZGluZyBhIGZ1bmN0aW9uIHRvIGFjY2VwdCBwcm9qZWN0IG5hbWUgYW5kIGNyZWF0ZSB0aGUgcHJvamVjdCBhcnJheVxuICAgIGNvbnN0IE5ld1Byb2plY3ROYW1lID0gcHJvTmFtZS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBuZXcgQXJhYWFheShOZXdQcm9qZWN0TmFtZSk7XG4gICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkuYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkudGl0bGUpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IHByb1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9UaWxlLnRleHRDb250ZW50ID0gcHJvTmFtZS52YWx1ZTtcbiAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpLmlubmVySFRNTD0gXCJcIjtcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvVGlsZSk7XG4gICAgY29uc3QgVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBUb0RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8gRG9cIlxuICAgIFRvRG9CdG4uY2xhc3NOYW1lID0gXCJDcmVhdGVUb0RvXCJcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQoVG9Eb0J0bilcbiAgICBUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBTaG93VG9Eb0Zvcm0pXG4gICAgcmV0dXJue25ld1Byb2plY3RBcnJheX07XG5cblxufVxuZnVuY3Rpb24gaGlkZUZvcm0oKVxue1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgXG59XG5cblxuZnVuY3Rpb24gU2hvd1RvRG9Gb3JtKCl7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGNvbnN0IFN1Yml0VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgU3ViaXRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgVG8gRG9cIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuYXBwZW5kQ2hpbGQoU3ViaXRUb0RvQnRuKTtcbiAgICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9Ebylcbn1cblxuXG5cbmZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7XG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTtcbiAgICAgICAgQWRkVG9kbyhDcmVhdGVQcm9qZWN0KCkubmV3UHJvamVjdEFycmF5LmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhDcmVhdGVQcm9qZWN0KCkubmV3UHJvamVjdEFycmF5LmFyeSk7XG4gICAgfVxuXG5cbn1cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==