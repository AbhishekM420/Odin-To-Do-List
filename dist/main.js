/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DelProjectTodo.js":
/*!*******************************!*\
  !*** ./src/DelProjectTodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProject": () => (/* binding */ DeleteProject)
/* harmony export */ });


function DeleteProject(){
    
}

/***/ }),

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
        (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.value].ary,newTodo);
        console.log("hello")
        console.log((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.value].ary);

        // need a function here to clear the form
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
/* harmony export */   "hideForm": () => (/* binding */ hideForm)
/* harmony export */ });
/* harmony import */ var _DelProjectTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DelProjectTodo */ "./src/DelProjectTodo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");




// to add the various divs and other stuff to the content






/*for(let i = 0; i< DoThis().arry.length;i++){
  const tit = document.createElement('div');
  tit.textContent = "Title"+" : " + DoThis().arry[i].title;
  const desc = document.createElement('div');
  desc.textContent = "Description"+" : " + DoThis().arry[i].description;    //code might be usefull later
  const dudate = document.createElement('div');
  dudate.textContent = "Due Date"+" : " + DoThis().arry[i].duedate;
  const don = document.createElement('div');
  don.textContent = "Done"+" : " + DoThis().arry[i].done;

  proCard.appendChild(tit);
  proCard.appendChild(desc);
  proCard.appendChild(dudate);
  proCard.appendChild(don);
  
*/

  
  function displayProject(){    // a dom manip function to display project titles and append create to do buttons

    const proDiv = document.querySelector(".ProjectLineup");
  
     for(let i = 0; i< (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray.length; i++) {
      
      const proTile = document.createElement('div');
      proTile.textContent = (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].title;
      proTile.className = "ProjectTile"
      proDiv.appendChild(proTile);
      const ToDoBtn = document.createElement("button");
      ToDoBtn.textContent = "Create To Do";
      ToDoBtn.className = "CreateToDo";
      ToDoBtn.value = i;
      proDiv.appendChild(ToDoBtn);
      ToDoBtn.addEventListener("click", ShowToDoForm,false);
      const DelBtn = document.createElement('button');
      DelBtn.textContent ='Delete Project';
      DelBtn.value = i ;
      proDiv.appendChild(DelBtn);
      DelBtn.addEventListener('click',_DelProjectTodo__WEBPACK_IMPORTED_MODULE_0__.DeleteProject, false);

      for(const[key,value] of Object.entries((0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i]) ){
        let para = document.createElement('p');
        para.textContent =`${key} : ${value}`
        proDiv.appendChild(para);
      }
      
     } 


    
   // document.querySelector(".newButton").innerHTML= "";
   
    
    
   
   
   
}
function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.createElement("button");
  SubitToDoBtn.textContent = "Submit To Do"
  SubitToDoBtn.value= this.value;
  document.querySelector(".input").appendChild(SubitToDoBtn);
  SubitToDoBtn.addEventListener("click",_ToDo__WEBPACK_IMPORTED_MODULE_2__.IntakeToDo, false)
}
 function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}

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
/* harmony export */   "Araaaay": () => (/* binding */ Araaaay),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "rtnProContArr": () => (/* binding */ rtnProContArr)
/* harmony export */ });
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");






 
class Araaaay{
  constructor(arrname){
      this.title = arrname;
      [arrname] = new Array();
      this.ary = [arrname];

  }
}


 function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array

const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",AddNewProject);


function AddNewProject(){
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.hideForm)()
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
const ProjectContainerArray = new Array();  // create an array for the projects

function createProject() {       // Adding a function to accept project name and create the project array
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const NewProjectName = proName.value;
    const newProjectArray = new Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
   
    ProjectContainerArray.push(newProjectArray); // pushes the new project arraaay into the project container array
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.displayProject)();    // calls function that des dom manip to display project name.
       
    }
   
function rtnProContArr(){
  return {ProjectContainerArray};    //exports the project container array so that it can be imported
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
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");




const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7QUFHdUM7QUFDTTtBQUNOOzs7OztBQUtoQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLFFBQVEsb0RBQU8sQ0FBQywwREFBYTtBQUM3QjtBQUNBLG9CQUFvQiwwREFBYTs7QUFFakM7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2lEO0FBQ1Y7QUFDSDtBQUNTO0FBQzdDOzs7Ozs7O0FBT0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBUyw4QkFBOEI7O0FBRXZDO0FBQ0E7QUFDQSxvQkFBb0IsR0FBRywwREFBYSxpQ0FBaUM7QUFDckU7QUFDQTtBQUNBLDRCQUE0QiwwREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMERBQWE7O0FBRW5ELDZDQUE2QywwREFBYTtBQUMxRDtBQUNBLDZCQUE2QixLQUFLLElBQUksTUFBTTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2Q0FBVTtBQUNsRDtBQUNBLENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakY4QjtBQUNlO0FBQ1Q7QUFDRzs7QUFFdkM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLENBQVE7O0FBRVI7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7O0FBR087QUFDUCxJQUFJLG9EQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7O0FBRXJDLGlDQUFpQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxJQUFJLDBEQUFjLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ087QUFDUCxVQUFVLDJCQUEyQjtBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUVTOztBQUV2QyxrQkFBa0IsdUNBQUksMERBQTBEO0FBQ2hGLGtCQUFrQix1Q0FBSSxzREFBc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvRGVsUHJvamVjdFRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KCl7XG4gICAgXG59IiwiXG4vL2NyZWF0aW5nIGEgY2xhc3MgdG8gcmVwcmVzZW50IHRoZSB0byBkbyBpbmRpdmlkdWFsIGl0ZW1zIGFuZCBleHBvcnRpbmdcblxuXG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgcnRuUHJvQ29udEFyciB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEFyYWFhYXkgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTsgICAvLyBjcmVhdGVzIG5ldyB0byBkbyBhbmQgcHVzaGVzIHRoZSBuZXdseSBjcmVhdGVkIHRvIGRvIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgQWRkVG9kbyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSk7XG5cbiAgICAgICAgLy8gbmVlZCBhIGZ1bmN0aW9uIGhlcmUgdG8gY2xlYXIgdGhlIGZvcm1cbiAgICB9XG5cblxufSIsImltcG9ydCB7IERlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9EZWxQcm9qZWN0VG9kb1wiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cblxuXG5cblxuXG4vKmZvcihsZXQgaSA9IDA7IGk8IERvVGhpcygpLmFycnkubGVuZ3RoO2krKyl7XG4gIGNvbnN0IHRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXQudGV4dENvbnRlbnQgPSBcIlRpdGxlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0udGl0bGU7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kZXNjcmlwdGlvbjsgICAgLy9jb2RlIG1pZ2h0IGJlIHVzZWZ1bGwgbGF0ZXJcbiAgY29uc3QgZHVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIitcIiA6IFwiICsgRG9UaGlzKCkuYXJyeVtpXS5kdWVkYXRlO1xuICBjb25zdCBkb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9uLnRleHRDb250ZW50ID0gXCJEb25lXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZG9uZTtcblxuICBwcm9DYXJkLmFwcGVuZENoaWxkKHRpdCk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZHVkYXRlKTtcbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZChkb24pO1xuICBcbiovXG5cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpeyAgICAvLyBhIGRvbSBtYW5pcCBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3QgdGl0bGVzIGFuZCBhcHBlbmQgY3JlYXRlIHRvIGRvIGJ1dHRvbnNcblxuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgXG4gICAgIGZvcihsZXQgaSA9IDA7IGk8IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0udGl0bGU7XG4gICAgICBwcm9UaWxlLmNsYXNzTmFtZSA9IFwiUHJvamVjdFRpbGVcIlxuICAgICAgcHJvRGl2LmFwcGVuZENoaWxkKHByb1RpbGUpO1xuICAgICAgY29uc3QgVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBUb0RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8gRG9cIjtcbiAgICAgIFRvRG9CdG4uY2xhc3NOYW1lID0gXCJDcmVhdGVUb0RvXCI7XG4gICAgICBUb0RvQnRuLnZhbHVlID0gaTtcbiAgICAgIHByb0Rpdi5hcHBlbmRDaGlsZChUb0RvQnRuKTtcbiAgICAgIFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFNob3dUb0RvRm9ybSxmYWxzZSk7XG4gICAgICBjb25zdCBEZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIERlbEJ0bi50ZXh0Q29udGVudCA9J0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIERlbEJ0bi52YWx1ZSA9IGkgO1xuICAgICAgcHJvRGl2LmFwcGVuZENoaWxkKERlbEJ0bik7XG4gICAgICBEZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERlbGV0ZVByb2plY3QsIGZhbHNlKTtcblxuICAgICAgZm9yKGNvbnN0W2tleSx2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVtpXSkgKXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPWAke2tleX0gOiAke3ZhbHVlfWBcbiAgICAgICAgcHJvRGl2LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgfVxuICAgICAgXG4gICAgIH0gXG5cblxuICAgIFxuICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCdXR0b25cIikuaW5uZXJIVE1MPSBcIlwiO1xuICAgXG4gICAgXG4gICAgXG4gICBcbiAgIFxuICAgXG59XG5leHBvcnQgZnVuY3Rpb24gU2hvd1RvRG9Gb3JtKCl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgY29uc3QgU3ViaXRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgU3ViaXRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgVG8gRG9cIlxuICBTdWJpdFRvRG9CdG4udmFsdWU9IHRoaXMudmFsdWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuYXBwZW5kQ2hpbGQoU3ViaXRUb0RvQnRuKTtcbiAgU3ViaXRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEludGFrZVRvRG8sIGZhbHNlKVxufVxuIGV4cG9ydCBmdW5jdGlvbiBoaWRlRm9ybSgpXG57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICBcbn0iLCJcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgSW50YWtlVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IGhpZGVGb3JtIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5cbiBcbmV4cG9ydCBjbGFzcyBBcmFhYWF5e1xuICBjb25zdHJ1Y3RvcihhcnJuYW1lKXtcbiAgICAgIHRoaXMudGl0bGUgPSBhcnJuYW1lO1xuICAgICAgW2Fycm5hbWVdID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLmFyeSA9IFthcnJuYW1lXTtcblxuICB9XG59XG5cblxuIGV4cG9ydCBmdW5jdGlvbiBBZGRUb2RvKGFycmFheSwgVG9kb28pIHtcblxuIGFycmFheS5wdXNoKFRvZG9vKTtcbiByZXR1cm4gYXJyYWF5O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuY29uc3QgbndQcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RcIik7XG5ud1Byby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixBZGROZXdQcm9qZWN0KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gQWRkTmV3UHJvamVjdCgpe1xuICAgIGhpZGVGb3JtKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJvamVjdE5hbWVcIik7XG4gICAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvRm9ybSk7XG4gICAgY29uc3Qgc3VicHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VicHJvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzdWJtaXRQcm9qZWN0XCIpXG4gICAgc3VicHJvLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIHByb0Rpdi5hcHBlbmRDaGlsZChzdWJwcm8pO1xuICAgIHN1YnByby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjcmVhdGVQcm9qZWN0KVxuXG4gICAgXG4gXG5cbn1cbmNvbnN0IFByb2plY3RDb250YWluZXJBcnJheSA9IG5ldyBBcnJheSgpOyAgLy8gY3JlYXRlIGFuIGFycmF5IGZvciB0aGUgcHJvamVjdHNcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7ICAgICAgIC8vIEFkZGluZyBhIGZ1bmN0aW9uIHRvIGFjY2VwdCBwcm9qZWN0IG5hbWUgYW5kIGNyZWF0ZSB0aGUgcHJvamVjdCBhcnJheVxuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3ROYW1lXCIpO1xuICAgIGNvbnN0IE5ld1Byb2plY3ROYW1lID0gcHJvTmFtZS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBuZXcgQXJhYWFheShOZXdQcm9qZWN0TmFtZSk7ICAgIC8vIENyZWF0ZXMgYSBjb250YWluZXIgd2l0aCB0aGUgbmFtZSBhbmQgYXJyYXkgaWUgYXJhYWF5IGNsYXNzXG4gICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkuYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkudGl0bGUpO1xuICAgXG4gICAgUHJvamVjdENvbnRhaW5lckFycmF5LnB1c2gobmV3UHJvamVjdEFycmF5KTsgLy8gcHVzaGVzIHRoZSBuZXcgcHJvamVjdCBhcnJhYWF5IGludG8gdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5XG4gICAgZGlzcGxheVByb2plY3QoKTsgICAgLy8gY2FsbHMgZnVuY3Rpb24gdGhhdCBkZXMgZG9tIG1hbmlwIHRvIGRpc3BsYXkgcHJvamVjdCBuYW1lLlxuICAgICAgIFxuICAgIH1cbiAgIFxuZXhwb3J0IGZ1bmN0aW9uIHJ0blByb0NvbnRBcnIoKXtcbiAgcmV0dXJuIHtQcm9qZWN0Q29udGFpbmVyQXJyYXl9OyAgICAvL2V4cG9ydHMgdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5IHNvIHRoYXQgaXQgY2FuIGJlIGltcG9ydGVkXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuXG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuXG5jb25zdCB0b2RvMSA9IG5ldyBUb0RvKFwib2ggeWFoXCIsXCJ0byBkbyBpcyB0byBzaG9wIGdyb2NlcnlcIixcInRvZGF5XCIsXCJub3QgZG9uZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIm9oIHloXCIsXCJ0byBkbyBpcyB0IHNob3AgZ3JvY2VyeVwiLFwidG9heVwiLFwibm90IGRuZVwiKTsgLy8gY2hlY2sgaW5zdGFuY2Ugb2YgY2xhc3MgaXMgd29ya2luZ1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=