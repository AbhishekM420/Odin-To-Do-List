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
/* harmony export */   "IntakeToDo": () => (/* binding */ IntakeToDo),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");

//creating a class to represent the to do individual items and exporting








class ToDo  {                             
constructor (Title, Description, Duedate, Done) {
    this.title = Title;
    this.description = Description;
    this.duedate = Duedate;
    this.done = Done;
   
}}

function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;               // gets the values of to do from the form 
    let Description = document.getElementById("Description").value;
    let Done = document.getElementById("Done").value;

    if( title == "" || DueDate == "" || Description == "" || Done == "")
    return;
    else{
         let newTodo = new ToDo(title,Description,DueDate,Done);   // creates new to do and pushes the newly created to do object in the array
        (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[0].ary,newTodo);
        console.log("hello")
        console.log((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[0].ary);
    }


}

/***/ }),

/***/ "./src/domFactor.js":
/*!**************************!*\
  !*** ./src/domFactor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowToDoForm": () => (/* binding */ ShowToDoForm),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "hideForm": () => (/* binding */ hideForm),
/* harmony export */   "newCard": () => (/* binding */ newCard)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");



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
  function displayProject( projectName){    // a dom manip function to display project titles and append create to do buttons

    const proDiv = document.querySelector(".ProjectLineup");
    const proTile = document.createElement('div');
    proTile.textContent = projectName
   // document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);
    const ToDoBtn = document.createElement("button")
    ToDoBtn.textContent = "Create To Do"
    ToDoBtn.className = "CreateToDo"
    proDiv.appendChild(ToDoBtn)
    ToDoBtn.addEventListener("click", ShowToDoForm)
}
function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.createElement("button");
  SubitToDoBtn.textContent = "Submit To Do"
  document.querySelector(".input").appendChild(SubitToDoBtn);
  SubitToDoBtn.addEventListener("click",_ToDo__WEBPACK_IMPORTED_MODULE_2__.IntakeToDo)
}
 function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}

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
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");




const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working


function DoThis(){
const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working

const newpr = new makeArray ("fake pro");
newpr.arry.push(todo1);

(0,_newProject__WEBPACK_IMPORTED_MODULE_2__.AddTodo)(newpr.arry,todo2);
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
(0,_newProject__WEBPACK_IMPORTED_MODULE_2__.AddTodo)(nwww.ary,todo2)



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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "rtnProContArr": () => (/* binding */ rtnProContArr)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");






 


 function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array

const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",AddNewProject);


function AddNewProject(){
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.hideForm)()
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
    subpro.addEventListener("click",createProject)

    // create an array for the projects
 

}
const ProjectContainerArray = new Array();

function createProject() {       // Adding a function to accept project name and create the project array
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const NewProjectName = proName.value;
    const newProjectArray = new ___WEBPACK_IMPORTED_MODULE_0__.Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.displayProject)(NewProjectName);    // calls function that des dom manip to display project name.
   //  createProject(NewProjectName);
    ProjectContainerArray.push(newProjectArray);
       // function to return the new arraay class created so that create project () is not called everytime a to do list is created
    }
   
function rtnProContArr(){
  return {ProjectContainerArray};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFHdUM7QUFDTTs7Ozs7QUFLdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxRQUFRLG9EQUFPLENBQUMsMERBQWE7QUFDN0I7QUFDQSxvQkFBb0IsMERBQWE7QUFDakM7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDMkI7QUFDWTtBQUNIO0FBQ3BDOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlDQUFNO0FBQ25EOzs7QUFHQSxlQUFlLEdBQUcseUNBQU0sZUFBZTtBQUN2QztBQUNBLG9DQUFvQyx5Q0FBTTtBQUMxQztBQUNBLDJDQUEyQyx5Q0FBTTtBQUNqRDtBQUNBLDBDQUEwQyx5Q0FBTTtBQUNoRDtBQUNBLG1DQUFtQyx5Q0FBTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxFQUFTLDBDQUEwQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZDQUFVO0FBQ2xEO0FBQ0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDhCO0FBQ1E7QUFDQzs7QUFFdkMsa0JBQWtCLHVDQUFJLDBEQUEwRDtBQUNoRixrQkFBa0IsdUNBQUksc0RBQXNEOzs7QUFHckU7QUFDUCxrQkFBa0IsdUNBQUksMERBQTBEO0FBQ2hGLGtCQUFrQix1Q0FBSSxzREFBc0Q7O0FBRTVFO0FBQ0E7O0FBRUEsb0RBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDcUI7QUFDRTtBQUNlO0FBQ1Q7QUFDRzs7QUFFdkM7OztBQUdBLENBQVE7O0FBRVI7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7O0FBR087QUFDUCxJQUFJLG9EQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQU8scUJBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWMscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy9jcmVhdGluZyBhIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgdG8gZG8gaW5kaXZpZHVhbCBpdGVtcyBhbmQgZXhwb3J0aW5nXG5cblxuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTsgICAvLyBjcmVhdGVzIG5ldyB0byBkbyBhbmQgcHVzaGVzIHRoZSBuZXdseSBjcmVhdGVkIHRvIGRvIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgQWRkVG9kbyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5WzBdLmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5WzBdLmFyeSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBEb1RoaXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG4vLyB0byBhZGQgdGhlIHZhcmlvdXMgZGl2cyBhbmQgb3RoZXIgc3R1ZmYgdG8gdGhlIGNvbnRlbnRcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDYXJkKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgLy8gbWFraW5nIGNhcmRzIGZvciBpbmRpdmlkdWFsIHByb2plY3RzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgcHJvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb0NhcmQuY2xhc3NOYW1lID0gXCJQcm9DYXJkXCI7XG4gICAgcHJvQ2FyZC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lIDogXCIgK0RvVGhpcygpLlByb2plY1R0aXRsZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb0NhcmQpO1xuXG5cbmZvcihsZXQgaSA9IDA7IGk8IERvVGhpcygpLmFycnkubGVuZ3RoO2krKyl7XG4gIGNvbnN0IHRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXQudGV4dENvbnRlbnQgPSBcIlRpdGxlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0udGl0bGU7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZHVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kdWVkYXRlO1xuICBjb25zdCBkb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9uLnRleHRDb250ZW50ID0gXCJEb25lXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZG9uZTtcblxuICBwcm9DYXJkLmFwcGVuZENoaWxkKHRpdCk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZHVkYXRlKTtcbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZChkb24pO1xuICBcblxuXG4gIH19XG4gIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCggcHJvamVjdE5hbWUpeyAgICAvLyBhIGRvbSBtYW5pcCBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3QgdGl0bGVzIGFuZCBhcHBlbmQgY3JlYXRlIHRvIGRvIGJ1dHRvbnNcblxuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgICBjb25zdCBwcm9UaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0J1dHRvblwiKS5pbm5lckhUTUw9IFwiXCI7XG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKHByb1RpbGUpO1xuICAgIGNvbnN0IFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRvIERvXCJcbiAgICBUb0RvQnRuLmNsYXNzTmFtZSA9IFwiQ3JlYXRlVG9Eb1wiXG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKFRvRG9CdG4pXG4gICAgVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd1RvRG9Gb3JtKVxufVxuZXhwb3J0IGZ1bmN0aW9uIFNob3dUb0RvRm9ybSgpe1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIGNvbnN0IFN1Yml0VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFN1Yml0VG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRvIERvXCJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5hcHBlbmRDaGlsZChTdWJpdFRvRG9CdG4pO1xuICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9Ebylcbn1cbiBleHBvcnQgZnVuY3Rpb24gaGlkZUZvcm0oKVxue1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgXG59IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IG5ld0NhcmQgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmNvbnN0IHRvZG8xID0gbmV3IFRvRG8oXCJvaCB5YWhcIixcInRvIGRvIGlzIHRvIHNob3AgZ3JvY2VyeVwiLFwidG9kYXlcIixcIm5vdCBkb25lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5jb25zdCB0b2RvMiA9IG5ldyBUb0RvKFwib2ggeWhcIixcInRvIGRvIGlzIHQgc2hvcCBncm9jZXJ5XCIsXCJ0b2F5XCIsXCJub3QgZG5lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5cblxuZXhwb3J0IGZ1bmN0aW9uIERvVGhpcygpe1xuY29uc3QgdG9kbzEgPSBuZXcgVG9EbyhcIm9oIHlhaFwiLFwidG8gZG8gaXMgdG8gc2hvcCBncm9jZXJ5XCIsXCJ0b2RheVwiLFwibm90IGRvbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJvaCB5aFwiLFwidG8gZG8gaXMgdCBzaG9wIGdyb2NlcnlcIixcInRvYXlcIixcIm5vdCBkbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcblxuY29uc3QgbmV3cHIgPSBuZXcgbWFrZUFycmF5IChcImZha2UgcHJvXCIpO1xubmV3cHIuYXJyeS5wdXNoKHRvZG8xKTtcblxuQWRkVG9kbyhuZXdwci5hcnJ5LHRvZG8yKTtcbmNvbnNvbGUubG9nKG5ld3ByLmFycnkpO1xucmV0dXJuIG5ld3ByO1xuXG59XG4vL25ld0NhcmQoKTtcblxuZXhwb3J0IGNsYXNzIEFyYWFhYXl7XG4gICAgY29uc3RydWN0b3IoYXJybmFtZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBhcnJuYW1lO1xuICAgICAgICBbYXJybmFtZV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5hcnkgPSBbYXJybmFtZV07XG5cbiAgICB9XG59XG5cbmNvbnN0IG53d3cgPSBuZXcgQXJhYWFheShcImZha2VuYW1lXCIpO1xubnd3dy5hcnkucHVzaCh0b2RvMSk7XG5BZGRUb2RvKG53d3cuYXJ5LHRvZG8yKVxuXG4iLCJpbXBvcnQgeyBBcmFhYWF5IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgSW50YWtlVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IGhpZGVGb3JtIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5cbiBcblxuXG4gZXhwb3J0IGZ1bmN0aW9uIEFkZFRvZG8oYXJyYWF5LCBUb2Rvbykge1xuXG4gYXJyYWF5LnB1c2goVG9kb28pO1xuIHJldHVybiBhcnJhYXk7XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjZXB0cyBhbiBhcnJheSBhbmQgYSB0b2RvIHRvIGJlIGFkZGVkIHRvIHRoZSBhcnJheVxuXG5jb25zdCBud1BybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdFwiKTtcbm53UHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEFkZE5ld1Byb2plY3QpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdQcm9qZWN0KCl7XG4gICAgaGlkZUZvcm0oKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgcHJvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCdXR0b25cIik7XG4gICAgY29uc3QgcHJvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJQcm9qZWN0TmFtZVwiKTtcbiAgICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJvamVjdCBOYW1lXCIpO1xuICAgIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9Gb3JtKTtcbiAgICBjb25zdCBzdWJwcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJwcm8uc2V0QXR0cmlidXRlKFwiaWRcIixcInN1Ym1pdFByb2plY3RcIilcbiAgICBzdWJwcm8udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKHN1YnBybyk7XG4gICAgc3VicHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZVByb2plY3QpXG5cbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgZm9yIHRoZSBwcm9qZWN0c1xuIFxuXG59XG5jb25zdCBQcm9qZWN0Q29udGFpbmVyQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7ICAgICAgIC8vIEFkZGluZyBhIGZ1bmN0aW9uIHRvIGFjY2VwdCBwcm9qZWN0IG5hbWUgYW5kIGNyZWF0ZSB0aGUgcHJvamVjdCBhcnJheVxuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3ROYW1lXCIpO1xuICAgIGNvbnN0IE5ld1Byb2plY3ROYW1lID0gcHJvTmFtZS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBuZXcgQXJhYWFheShOZXdQcm9qZWN0TmFtZSk7ICAgIC8vIENyZWF0ZXMgYSBjb250YWluZXIgd2l0aCB0aGUgbmFtZSBhbmQgYXJyYXkgaWUgYXJhYWF5IGNsYXNzXG4gICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkuYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkudGl0bGUpO1xuICAgIGRpc3BsYXlQcm9qZWN0KE5ld1Byb2plY3ROYW1lKTsgICAgLy8gY2FsbHMgZnVuY3Rpb24gdGhhdCBkZXMgZG9tIG1hbmlwIHRvIGRpc3BsYXkgcHJvamVjdCBuYW1lLlxuICAgLy8gIGNyZWF0ZVByb2plY3QoTmV3UHJvamVjdE5hbWUpO1xuICAgIFByb2plY3RDb250YWluZXJBcnJheS5wdXNoKG5ld1Byb2plY3RBcnJheSk7XG4gICAgICAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSBuZXcgYXJyYWF5IGNsYXNzIGNyZWF0ZWQgc28gdGhhdCBjcmVhdGUgcHJvamVjdCAoKSBpcyBub3QgY2FsbGVkIGV2ZXJ5dGltZSBhIHRvIGRvIGxpc3QgaXMgY3JlYXRlZFxuICAgIH1cbiAgIFxuZXhwb3J0IGZ1bmN0aW9uIHJ0blByb0NvbnRBcnIoKXtcbiAgcmV0dXJuIHtQcm9qZWN0Q29udGFpbmVyQXJyYXl9O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=