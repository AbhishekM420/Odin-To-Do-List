/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntakeToDo": () => (/* binding */ IntakeToDo),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./src/misc.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_misc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");

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
        (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.AddTodo)((0,_newProject__WEBPACK_IMPORTED_MODULE_1__.createProject)().newProjectArray.ary,newTodo);
        console.log("hello")
        console.log((0,_newProject__WEBPACK_IMPORTED_MODULE_1__.createProject)().newProjectArray.ary);
    }


}

/***/ }),

/***/ "./src/domFactor.js":
/*!**************************!*\
  !*** ./src/domFactor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/misc.js":
/*!*********************!*\
  !*** ./src/misc.js ***!
  \*********************/
/***/ (() => {

// file for miscallaneous functions to keep the program running



/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewProject": () => (/* binding */ AddNewProject),
/* harmony export */   "AddTodo": () => (/* binding */ AddTodo),
/* harmony export */   "createProject": () => (/* binding */ createProject)
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


}
function createProject() {       // Adding a function to accept project name and create the project array
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const NewProjectName = proName.value;
    const newProjectArray = new ___WEBPACK_IMPORTED_MODULE_0__.Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.displayProject)(NewProjectName);    // calls function that des dom manip to display project name.
   //  createProject(NewProjectName);
     return {newProjectArray};
       // function to return the new arraay class created so that create project () is not called everytime a to do list is created
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRTBDO0FBQ0g7QUFDTTs7OztBQUl0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLFFBQVEsb0RBQU8sQ0FBQywwREFBYTtBQUM3QjtBQUNBLG9CQUFvQiwwREFBYTtBQUNqQzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DMkI7QUFDWTtBQUNIO0FBQ3BDOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlDQUFNO0FBQ25EOzs7QUFHQSxlQUFlLEdBQUcseUNBQU0sZUFBZTtBQUN2QztBQUNBLG9DQUFvQyx5Q0FBTTtBQUMxQztBQUNBLDJDQUEyQyx5Q0FBTTtBQUNqRDtBQUNBLDBDQUEwQyx5Q0FBTTtBQUNoRDtBQUNBLG1DQUFtQyx5Q0FBTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxFQUFTLDBDQUEwQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZDQUFVO0FBQ2xEO0FBQ0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQ4QjtBQUNRO0FBQ0M7O0FBRXZDLGtCQUFrQix1Q0FBSSwwREFBMEQ7QUFDaEYsa0JBQWtCLHVDQUFJLHNEQUFzRDs7O0FBR3JFO0FBQ1Asa0JBQWtCLHVDQUFJLDBEQUEwRDtBQUNoRixrQkFBa0IsdUNBQUksc0RBQXNEOztBQUU1RTtBQUNBOztBQUVBLG9EQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQU87Ozs7Ozs7Ozs7OztBQ2pDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNFO0FBQ2U7QUFDVDtBQUNHOztBQUV2Qzs7O0FBR0EsQ0FBUTs7QUFFUjtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOzs7QUFHTztBQUNQLElBQUksb0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ08saUNBQWlDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNDQUFPLHFCQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFjLHFCQUFxQjtBQUN2QztBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZG9tRmFjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbWlzYy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy9jcmVhdGluZyBhIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgdG8gZG8gaW5kaXZpZHVhbCBpdGVtcyBhbmQgZXhwb3J0aW5nXG5cbmltcG9ydCB7IGp1c3RSZXR1cm5BcnJhYXkgfSBmcm9tIFwiLi9taXNjXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTsgICAvLyBjcmVhdGVzIG5ldyB0byBkbyBhbmQgcHVzaGVzIHRoZSBuZXdseSBjcmVhdGVkIHRvIGRvIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgQWRkVG9kbyhjcmVhdGVQcm9qZWN0KCkubmV3UHJvamVjdEFycmF5LmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVQcm9qZWN0KCkubmV3UHJvamVjdEFycmF5LmFyeSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBEb1RoaXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG4vLyB0byBhZGQgdGhlIHZhcmlvdXMgZGl2cyBhbmQgb3RoZXIgc3R1ZmYgdG8gdGhlIGNvbnRlbnRcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDYXJkKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgLy8gbWFraW5nIGNhcmRzIGZvciBpbmRpdmlkdWFsIHByb2plY3RzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgcHJvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb0NhcmQuY2xhc3NOYW1lID0gXCJQcm9DYXJkXCI7XG4gICAgcHJvQ2FyZC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lIDogXCIgK0RvVGhpcygpLlByb2plY1R0aXRsZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb0NhcmQpO1xuXG5cbmZvcihsZXQgaSA9IDA7IGk8IERvVGhpcygpLmFycnkubGVuZ3RoO2krKyl7XG4gIGNvbnN0IHRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXQudGV4dENvbnRlbnQgPSBcIlRpdGxlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0udGl0bGU7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZHVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kdWVkYXRlO1xuICBjb25zdCBkb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9uLnRleHRDb250ZW50ID0gXCJEb25lXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZG9uZTtcblxuICBwcm9DYXJkLmFwcGVuZENoaWxkKHRpdCk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZHVkYXRlKTtcbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZChkb24pO1xuICBcblxuXG4gIH19XG4gIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCggcHJvamVjdE5hbWUpeyAgICAvLyBhIGRvbSBtYW5pcCBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3QgdGl0bGVzIGFuZCBhcHBlbmQgY3JlYXRlIHRvIGRvIGJ1dHRvbnNcblxuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgICBjb25zdCBwcm9UaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0J1dHRvblwiKS5pbm5lckhUTUw9IFwiXCI7XG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKHByb1RpbGUpO1xuICAgIGNvbnN0IFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRvIERvXCJcbiAgICBUb0RvQnRuLmNsYXNzTmFtZSA9IFwiQ3JlYXRlVG9Eb1wiXG4gICAgcHJvRGl2LmFwcGVuZENoaWxkKFRvRG9CdG4pXG4gICAgVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd1RvRG9Gb3JtKVxufVxuZXhwb3J0IGZ1bmN0aW9uIFNob3dUb0RvRm9ybSgpe1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIGNvbnN0IFN1Yml0VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFN1Yml0VG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRvIERvXCJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5hcHBlbmRDaGlsZChTdWJpdFRvRG9CdG4pO1xuICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9Ebylcbn1cbiBleHBvcnQgZnVuY3Rpb24gaGlkZUZvcm0oKVxue1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgXG59IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IG5ld0NhcmQgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmNvbnN0IHRvZG8xID0gbmV3IFRvRG8oXCJvaCB5YWhcIixcInRvIGRvIGlzIHRvIHNob3AgZ3JvY2VyeVwiLFwidG9kYXlcIixcIm5vdCBkb25lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5jb25zdCB0b2RvMiA9IG5ldyBUb0RvKFwib2ggeWhcIixcInRvIGRvIGlzIHQgc2hvcCBncm9jZXJ5XCIsXCJ0b2F5XCIsXCJub3QgZG5lXCIpOyAvLyBjaGVjayBpbnN0YW5jZSBvZiBjbGFzcyBpcyB3b3JraW5nXG5cblxuZXhwb3J0IGZ1bmN0aW9uIERvVGhpcygpe1xuY29uc3QgdG9kbzEgPSBuZXcgVG9EbyhcIm9oIHlhaFwiLFwidG8gZG8gaXMgdG8gc2hvcCBncm9jZXJ5XCIsXCJ0b2RheVwiLFwibm90IGRvbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJvaCB5aFwiLFwidG8gZG8gaXMgdCBzaG9wIGdyb2NlcnlcIixcInRvYXlcIixcIm5vdCBkbmVcIik7IC8vIGNoZWNrIGluc3RhbmNlIG9mIGNsYXNzIGlzIHdvcmtpbmdcblxuY29uc3QgbmV3cHIgPSBuZXcgbWFrZUFycmF5IChcImZha2UgcHJvXCIpO1xubmV3cHIuYXJyeS5wdXNoKHRvZG8xKTtcblxuQWRkVG9kbyhuZXdwci5hcnJ5LHRvZG8yKTtcbmNvbnNvbGUubG9nKG5ld3ByLmFycnkpO1xucmV0dXJuIG5ld3ByO1xuXG59XG4vL25ld0NhcmQoKTtcblxuZXhwb3J0IGNsYXNzIEFyYWFhYXl7XG4gICAgY29uc3RydWN0b3IoYXJybmFtZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBhcnJuYW1lO1xuICAgICAgICBbYXJybmFtZV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5hcnkgPSBbYXJybmFtZV07XG5cbiAgICB9XG59XG5cbmNvbnN0IG53d3cgPSBuZXcgQXJhYWFheShcImZha2VuYW1lXCIpO1xubnd3dy5hcnkucHVzaCh0b2RvMSk7XG5BZGRUb2RvKG53d3cuYXJ5LHRvZG8yKVxuXG4iLCIvLyBmaWxlIGZvciBtaXNjYWxsYW5lb3VzIGZ1bmN0aW9ucyB0byBrZWVwIHRoZSBwcm9ncmFtIHJ1bm5pbmdcblxuIiwiaW1wb3J0IHsgQXJhYWFheSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuXG4gXG5cblxuIGV4cG9ydCBmdW5jdGlvbiBBZGRUb2RvKGFycmFheSwgVG9kb28pIHtcblxuIGFycmFheS5wdXNoKFRvZG9vKTtcbiByZXR1cm4gYXJyYWF5O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuY29uc3QgbndQcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RcIik7XG5ud1Byby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixBZGROZXdQcm9qZWN0KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gQWRkTmV3UHJvamVjdCgpe1xuICAgIGhpZGVGb3JtKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJvamVjdE5hbWVcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvRm9ybSk7XG4gICAgY29uc3Qgc3VicHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VicHJvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzdWJtaXRQcm9qZWN0XCIpXG4gICAgc3VicHJvLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIHByb0Rpdi5hcHBlbmRDaGlsZChzdWJwcm8pO1xuICAgIHN1YnByby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjcmVhdGVQcm9qZWN0KVxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkgeyAgICAgICAvLyBBZGRpbmcgYSBmdW5jdGlvbiB0byBhY2NlcHQgcHJvamVjdCBuYW1lIGFuZCBjcmVhdGUgdGhlIHByb2plY3QgYXJyYXlcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwcm9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0TmFtZVwiKTtcbiAgICBjb25zdCBOZXdQcm9qZWN0TmFtZSA9IHByb05hbWUudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdEFycmF5ID0gbmV3IEFyYWFhYXkoTmV3UHJvamVjdE5hbWUpOyAgICAvLyBDcmVhdGVzIGEgY29udGFpbmVyIHdpdGggdGhlIG5hbWUgYW5kIGFycmF5IGllIGFyYWFheSBjbGFzc1xuICAgXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5LmFyeSk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5LnRpdGxlKTtcbiAgICBkaXNwbGF5UHJvamVjdChOZXdQcm9qZWN0TmFtZSk7ICAgIC8vIGNhbGxzIGZ1bmN0aW9uIHRoYXQgZGVzIGRvbSBtYW5pcCB0byBkaXNwbGF5IHByb2plY3QgbmFtZS5cbiAgIC8vICBjcmVhdGVQcm9qZWN0KE5ld1Byb2plY3ROYW1lKTtcbiAgICAgcmV0dXJuIHtuZXdQcm9qZWN0QXJyYXl9O1xuICAgICAgIC8vIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgbmV3IGFycmFheSBjbGFzcyBjcmVhdGVkIHNvIHRoYXQgY3JlYXRlIHByb2plY3QgKCkgaXMgbm90IGNhbGxlZCBldmVyeXRpbWUgYSB0byBkbyBsaXN0IGlzIGNyZWF0ZWRcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9