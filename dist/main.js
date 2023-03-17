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
/* harmony export */   "DeleteProject": () => (/* binding */ DeleteProject),
/* harmony export */   "DeleteTodo": () => (/* binding */ DeleteTodo)
/* harmony export */ });
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");



function DeleteProject(){
    (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray.splice(this.value,1);
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_0__.displayProject)();
}

function DeleteTodo(){
    (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[this.id].ary.splice(this.value,1); 
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_0__.displayProject)();  
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
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");

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
        (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.hideForm)();
        document.querySelector(".ProjectLineup").innerHTML = "" ;//clearing the contents of the div so that projects dont get repeated
        (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.displayProject)();

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
/* harmony export */   "AddNewProject": () => (/* binding */ AddNewProject),
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
      proTile.textContent = "Project Name :   "+ (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].title;
      proTile.className = "ProjectTile"
      proTile.id = i;
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

      /*for(const[key,value] of Object.entries(rtnProContArr().ProjectContainerArray[i].ary )){
        let para = document.createElement('p');
        para.textContent =`${key} : ${value}`;
        console.log(`${key} : ${value}`);
        proDiv.appendChild(para);
      }*/

      for(let j = 1; j <(0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].ary.length; j++){

        const ToDoTile = document.createElement('div');          //creating seperate cards for each todos          
        document.getElementById(i).appendChild(ToDoTile);
        for(const[key,value] of Object.entries((0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].ary[j])){
        let para = document.createElement('p');
        para.textContent =`${key} : ${value}`;
        console.log(`${key} : ${value}`);
        ToDoTile.appendChild(para);
        }
        const DeletTodoBtn = document.createElement('button');
        DeletTodoBtn.value = j;
        DeletTodoBtn.id = i;     // this is so that the corresponding project number can be understood while deleting
        DeletTodoBtn.textContent = "Delete To Do"
        ToDoTile.appendChild(DeletTodoBtn);
        DeletTodoBtn.addEventListener("click",_DelProjectTodo__WEBPACK_IMPORTED_MODULE_0__.DeleteTodo, false)
      }
      
     } 


    
   // document.querySelector(".newButton").innerHTML= "";
   
    
    
   
   
   
}
function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.getElementById('SubmitToDoBtn');
  SubitToDoBtn.value= this.value;
  SubitToDoBtn.addEventListener("click",_ToDo__WEBPACK_IMPORTED_MODULE_2__.IntakeToDo, false)
}
 function hideForm()
{   
  document.getElementById("addProject").reset();
    document.querySelector(".input").style.display = "none";
   
}



function AddNewProject(){                       //displays form to add new project
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
  subpro.addEventListener("click",_newProject__WEBPACK_IMPORTED_MODULE_1__.createProject)

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
nwPro.addEventListener("click",_domFactor__WEBPACK_IMPORTED_MODULE_1__.AddNewProject);
const ProjectContainerArray = new Array();    // create an array for the projects


  

function createProject() {       // Adding a function to accept project name and create the project array
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const NewProjectName = proName.value;
    document.getElementById("ProjectName").value = "";
    const newProjectArray = new Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
   
    ProjectContainerArray.push(newProjectArray); // pushes the new project arraaay into the project container array
    document.querySelector(".ProjectLineup").innerHTML = "" ;
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
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");






(0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.hideForm)();  // keeps the submit todo form hidden till the create to do button is clicked






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDUztBQUNBOzs7O0FBSXZDLG9EQUFRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvRGVsUHJvamVjdFRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KCl7XG4gICAgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheS5zcGxpY2UodGhpcy52YWx1ZSwxKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVRvZG8oKXtcbiAgICBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMuaWRdLmFyeS5zcGxpY2UodGhpcy52YWx1ZSwxKTsgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7ICBcbn0iLCJcbi8vY3JlYXRpbmcgYSBjbGFzcyB0byByZXByZXNlbnQgdGhlIHRvIGRvIGluZGl2aWR1YWwgaXRlbXMgYW5kIGV4cG9ydGluZ1xuXG5cbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgQXJhYWFheSB9IGZyb20gXCIuL25ld1Byb2plY3RcIlxuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IGhpZGVGb3JtIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTsgICAvLyBjcmVhdGVzIG5ldyB0byBkbyBhbmQgcHVzaGVzIHRoZSBuZXdseSBjcmVhdGVkIHRvIGRvIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgQWRkVG9kbyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSk7XG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKS5pbm5lckhUTUwgPSBcIlwiIDsvL2NsZWFyaW5nIHRoZSBjb250ZW50cyBvZiB0aGUgZGl2IHNvIHRoYXQgcHJvamVjdHMgZG9udCBnZXQgcmVwZWF0ZWRcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcblxuICAgICAgICAvLyBuZWVkIGEgZnVuY3Rpb24gaGVyZSB0byBjbGVhciB0aGUgZm9ybVxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgRGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL0RlbFByb2plY3RUb2RvXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgSW50YWtlVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBEZWxldGVUb2RvIH0gZnJvbSBcIi4vRGVsUHJvamVjdFRvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbi8vIHRvIGFkZCB0aGUgdmFyaW91cyBkaXZzIGFuZCBvdGhlciBzdHVmZiB0byB0aGUgY29udGVudFxuXG5cblxuXG5cblxuLypmb3IobGV0IGkgPSAwOyBpPCBEb1RoaXMoKS5hcnJ5Lmxlbmd0aDtpKyspe1xuICBjb25zdCB0aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0LnRleHRDb250ZW50ID0gXCJUaXRsZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLnRpdGxlO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZGVzY3JpcHRpb247ICAgIC8vY29kZSBtaWdodCBiZSB1c2VmdWxsIGxhdGVyXG4gIGNvbnN0IGR1ZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWRhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZHVlZGF0ZTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLmRvbmU7XG5cbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZCh0aXQpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGRlc2MpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGR1ZGF0ZSk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZG9uKTtcbiAgXG4qL1xuXG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKXsgICAgLy8gYSBkb20gbWFuaXAgZnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0IHRpdGxlcyBhbmQgYXBwZW5kIGNyZWF0ZSB0byBkbyBidXR0b25zXG5cbiAgICBjb25zdCBwcm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIik7XG4gIFxuICAgICBmb3IobGV0IGkgPSAwOyBpPCBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHByb1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb1RpbGUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZSA6ICAgXCIrIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0udGl0bGU7XG4gICAgICBwcm9UaWxlLmNsYXNzTmFtZSA9IFwiUHJvamVjdFRpbGVcIlxuICAgICAgcHJvVGlsZS5pZCA9IGk7XG4gICAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvVGlsZSk7XG4gICAgICBjb25zdCBUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUbyBEb1wiO1xuICAgICAgVG9Eb0J0bi5jbGFzc05hbWUgPSBcIkNyZWF0ZVRvRG9cIjtcbiAgICAgIFRvRG9CdG4udmFsdWUgPSBpO1xuICAgICAgcHJvRGl2LmFwcGVuZENoaWxkKFRvRG9CdG4pO1xuICAgICAgVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd1RvRG9Gb3JtLGZhbHNlKTtcbiAgICAgIGNvbnN0IERlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgRGVsQnRuLnRleHRDb250ZW50ID0nRGVsZXRlIFByb2plY3QnO1xuICAgICAgRGVsQnRuLnZhbHVlID0gaSA7XG4gICAgICBwcm9EaXYuYXBwZW5kQ2hpbGQoRGVsQnRuKTtcbiAgICAgIERlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVsZXRlUHJvamVjdCwgZmFsc2UpO1xuXG4gICAgICAvKmZvcihjb25zdFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5ICkpe1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9YCR7a2V5fSA6ICR7dmFsdWV9YDtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSA6ICR7dmFsdWV9YCk7XG4gICAgICAgIHByb0Rpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgIH0qL1xuXG4gICAgICBmb3IobGV0IGogPSAxOyBqIDxydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W2ldLmFyeS5sZW5ndGg7IGorKyl7XG5cbiAgICAgICAgY29uc3QgVG9Eb1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICAgICAgLy9jcmVhdGluZyBzZXBlcmF0ZSBjYXJkcyBmb3IgZWFjaCB0b2RvcyAgICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSkuYXBwZW5kQ2hpbGQoVG9Eb1RpbGUpO1xuICAgICAgICBmb3IoY29uc3Rba2V5LHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W2ldLmFyeVtqXSkpe1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9YCR7a2V5fSA6ICR7dmFsdWV9YDtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSA6ICR7dmFsdWV9YCk7XG4gICAgICAgIFRvRG9UaWxlLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IERlbGV0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBEZWxldFRvZG9CdG4udmFsdWUgPSBqO1xuICAgICAgICBEZWxldFRvZG9CdG4uaWQgPSBpOyAgICAgLy8gdGhpcyBpcyBzbyB0aGF0IHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3QgbnVtYmVyIGNhbiBiZSB1bmRlcnN0b29kIHdoaWxlIGRlbGV0aW5nXG4gICAgICAgIERlbGV0VG9kb0J0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRvIERvXCJcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQoRGVsZXRUb2RvQnRuKTtcbiAgICAgICAgRGVsZXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLERlbGV0ZVRvZG8sIGZhbHNlKVxuICAgICAgfVxuICAgICAgXG4gICAgIH0gXG5cblxuICAgIFxuICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCdXR0b25cIikuaW5uZXJIVE1MPSBcIlwiO1xuICAgXG4gICAgXG4gICAgXG4gICBcbiAgIFxuICAgXG59XG5leHBvcnQgZnVuY3Rpb24gU2hvd1RvRG9Gb3JtKCl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgY29uc3QgU3ViaXRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N1Ym1pdFRvRG9CdG4nKTtcbiAgU3ViaXRUb0RvQnRuLnZhbHVlPSB0aGlzLnZhbHVlO1xuICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9EbywgZmFsc2UpXG59XG4gZXhwb3J0IGZ1bmN0aW9uIGhpZGVGb3JtKClcbnsgICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICBcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdQcm9qZWN0KCl7ICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0XG4gIGhpZGVGb3JtKClcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgY29uc3QgcHJvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCdXR0b25cIik7XG4gIGNvbnN0IHByb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJQcm9qZWN0TmFtZVwiKTtcbiAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgcHJvRGl2LmFwcGVuZENoaWxkKHByb0Zvcm0pO1xuICBjb25zdCBzdWJwcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VicHJvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzdWJtaXRQcm9qZWN0XCIpXG4gIHN1YnByby50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcbiAgcHJvRGl2LmFwcGVuZENoaWxkKHN1YnBybyk7XG4gIHN1YnByby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjcmVhdGVQcm9qZWN0KVxuXG4gIH0iLCJcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgSW50YWtlVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IGhpZGVGb3JtIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5pbXBvcnQgeyBBZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5cbiBcbmV4cG9ydCBjbGFzcyBBcmFhYWF5e1xuICBjb25zdHJ1Y3RvcihhcnJuYW1lKXtcbiAgICAgIHRoaXMudGl0bGUgPSBhcnJuYW1lO1xuICAgICAgW2Fycm5hbWVdID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLmFyeSA9IFthcnJuYW1lXTtcblxuICB9XG59XG5cblxuIGV4cG9ydCBmdW5jdGlvbiBBZGRUb2RvKGFycmFheSwgVG9kb28pIHtcblxuIGFycmFheS5wdXNoKFRvZG9vKTtcbiByZXR1cm4gYXJyYWF5O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuY29uc3QgbndQcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RcIik7XG5ud1Byby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixBZGROZXdQcm9qZWN0KTtcbmNvbnN0IFByb2plY3RDb250YWluZXJBcnJheSA9IG5ldyBBcnJheSgpOyAgICAvLyBjcmVhdGUgYW4gYXJyYXkgZm9yIHRoZSBwcm9qZWN0c1xuXG5cbiAgXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkgeyAgICAgICAvLyBBZGRpbmcgYSBmdW5jdGlvbiB0byBhY2NlcHQgcHJvamVjdCBuYW1lIGFuZCBjcmVhdGUgdGhlIHByb2plY3QgYXJyYXlcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwcm9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0TmFtZVwiKTtcbiAgICBjb25zdCBOZXdQcm9qZWN0TmFtZSA9IHByb05hbWUudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcm9qZWN0TmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgY29uc3QgbmV3UHJvamVjdEFycmF5ID0gbmV3IEFyYWFhYXkoTmV3UHJvamVjdE5hbWUpOyAgICAvLyBDcmVhdGVzIGEgY29udGFpbmVyIHdpdGggdGhlIG5hbWUgYW5kIGFycmF5IGllIGFyYWFheSBjbGFzc1xuICAgXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5LmFyeSk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5LnRpdGxlKTtcbiAgIFxuICAgIFByb2plY3RDb250YWluZXJBcnJheS5wdXNoKG5ld1Byb2plY3RBcnJheSk7IC8vIHB1c2hlcyB0aGUgbmV3IHByb2plY3QgYXJyYWFheSBpbnRvIHRoZSBwcm9qZWN0IGNvbnRhaW5lciBhcnJheVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKS5pbm5lckhUTUwgPSBcIlwiIDtcbiAgICBkaXNwbGF5UHJvamVjdCgpOyAgICAvLyBjYWxscyBmdW5jdGlvbiB0aGF0IGRlcyBkb20gbWFuaXAgdG8gZGlzcGxheSBwcm9qZWN0IG5hbWUuXG4gICAgICAgXG4gICAgfVxuICAgXG5leHBvcnQgZnVuY3Rpb24gcnRuUHJvQ29udEFycigpe1xuICByZXR1cm4ge1Byb2plY3RDb250YWluZXJBcnJheX07ICAgIC8vZXhwb3J0cyB0aGUgcHJvamVjdCBjb250YWluZXIgYXJyYXkgc28gdGhhdCBpdCBjYW4gYmUgaW1wb3J0ZWRcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgaGlkZUZvcm0gfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcblxuXG5cbmhpZGVGb3JtKCk7ICAvLyBrZWVwcyB0aGUgc3VibWl0IHRvZG8gZm9ybSBoaWRkZW4gdGlsbCB0aGUgY3JlYXRlIHRvIGRvIGJ1dHRvbiBpcyBjbGlja2VkXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9