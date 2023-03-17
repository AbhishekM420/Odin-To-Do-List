/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: flex;\n    flex-direction: column ;\n    align-items: center;\n    \n}\n#newProjectBtn{\nbackground-color: rgb(86, 129, 129);\n}\n.input{\n    background-color: rgb(63, 223, 143);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n.ProjectTile{\n    margin: 20px;\n    font-size: large;\n    width: 399px;\n    height: 20px;\n    background-color: blanchedalmond;\n   \n}\n.projectCard{\n    min-width: 450px;\n    margin: 10px;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: 1.5px solid brown ;\n}\n.TodoTile{\n    min-width: 300px;\n    border: 1.5px solid rgb(117, 81, 81) ;\n    font-style: italic;\n    margin: 15px;\n    padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;AACA,mCAAmC;AACnC;AACA;IACI,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,gCAAgC;;AAEpC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,gBAAgB;IAChB,qCAAqC;IACrC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB","sourcesContent":["body{\n    display: flex;\n    flex-direction: column ;\n    align-items: center;\n    \n}\n#newProjectBtn{\nbackground-color: rgb(86, 129, 129);\n}\n.input{\n    background-color: rgb(63, 223, 143);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n.ProjectTile{\n    margin: 20px;\n    font-size: large;\n    width: 399px;\n    height: 20px;\n    background-color: blanchedalmond;\n   \n}\n.projectCard{\n    min-width: 450px;\n    margin: 10px;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: 1.5px solid brown ;\n}\n.TodoTile{\n    min-width: 300px;\n    border: 1.5px solid rgb(117, 81, 81) ;\n    font-style: italic;\n    margin: 15px;\n    padding: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
      const projectCard = document.createElement('div');
      projectCard.id = i;
      projectCard.className = 'projectCard';
      proDiv.appendChild(projectCard);
      projectCard.appendChild(proTile)
      const ToDoBtn = document.createElement("button");
      ToDoBtn.textContent = "Create To Do";
      ToDoBtn.className = "CreateToDo";
      ToDoBtn.value = i;
      projectCard.appendChild(ToDoBtn);
      ToDoBtn.addEventListener("click", ShowToDoForm,false);
      const DelBtn = document.createElement('button');
      DelBtn.textContent ='Delete Project';
      DelBtn.value = i ;
      projectCard.appendChild(DelBtn);
      DelBtn.addEventListener('click',_DelProjectTodo__WEBPACK_IMPORTED_MODULE_0__.DeleteProject, false);

      
      for(let j = 1; j <(0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].ary.length; j++){

        const ToDoTile = document.createElement('div');          //creating seperate cards for each todos          
        ToDoTile.className = 'TodoTile';
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.hideForm)();  // keeps the submit todo form hidden till the create to do button is clicked






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsSUFBSSwwREFBYyxPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsVUFBVSwyQkFBMkI7QUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1M7QUFDQTtBQUNsQjs7OztBQUlyQixvREFBUSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9EZWxQcm9qZWN0VG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZG9tRmFjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI25ld1Byb2plY3RCdG57XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxMjksIDEyOSk7XFxufVxcbi5pbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAyMjMsIDE0Myk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLlByb2plY3RUaWxle1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiAzOTlweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICBcXG59XFxuLnByb2plY3RDYXJke1xcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJyb3duIDtcXG59XFxuLlRvZG9UaWxle1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYigxMTcsIDgxLCA4MSkgO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jbmV3UHJvamVjdEJ0bntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDEyOSwgMTI5KTtcXG59XFxuLmlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDIyMywgMTQzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uUHJvamVjdFRpbGV7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgIFxcbn1cXG4ucHJvamVjdENhcmR7XFxuICAgIG1pbi13aWR0aDogNDUwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgYnJvd24gO1xcbn1cXG4uVG9kb1RpbGV7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDExNywgODEsIDgxKSA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KCl7XG4gICAgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheS5zcGxpY2UodGhpcy52YWx1ZSwxKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVRvZG8oKXtcbiAgICBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMuaWRdLmFyeS5zcGxpY2UodGhpcy52YWx1ZSwxKTsgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7ICBcbn0iLCJcbi8vY3JlYXRpbmcgYSBjbGFzcyB0byByZXByZXNlbnQgdGhlIHRvIGRvIGluZGl2aWR1YWwgaXRlbXMgYW5kIGV4cG9ydGluZ1xuXG5cbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgQXJhYWFheSB9IGZyb20gXCIuL25ld1Byb2plY3RcIlxuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IGhpZGVGb3JtIH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBUb0RvICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnN0cnVjdG9yIChUaXRsZSwgRGVzY3JpcHRpb24sIER1ZWRhdGUsIERvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IER1ZWRhdGU7XG4gICAgdGhpcy5kb25lID0gRG9uZTtcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRG9uZVwiKS52YWx1ZTtcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIHx8IERvbmUgPT0gXCJcIilcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSxEb25lKTsgICAvLyBjcmVhdGVzIG5ldyB0byBkbyBhbmQgcHVzaGVzIHRoZSBuZXdseSBjcmVhdGVkIHRvIGRvIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgQWRkVG9kbyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSxuZXdUb2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMudmFsdWVdLmFyeSk7XG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKS5pbm5lckhUTUwgPSBcIlwiIDsvL2NsZWFyaW5nIHRoZSBjb250ZW50cyBvZiB0aGUgZGl2IHNvIHRoYXQgcHJvamVjdHMgZG9udCBnZXQgcmVwZWF0ZWRcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcblxuICAgICAgICAvLyBuZWVkIGEgZnVuY3Rpb24gaGVyZSB0byBjbGVhciB0aGUgZm9ybVxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgRGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL0RlbFByb2plY3RUb2RvXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgSW50YWtlVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBEZWxldGVUb2RvIH0gZnJvbSBcIi4vRGVsUHJvamVjdFRvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbi8vIHRvIGFkZCB0aGUgdmFyaW91cyBkaXZzIGFuZCBvdGhlciBzdHVmZiB0byB0aGUgY29udGVudFxuXG5cblxuXG5cblxuLypmb3IobGV0IGkgPSAwOyBpPCBEb1RoaXMoKS5hcnJ5Lmxlbmd0aDtpKyspe1xuICBjb25zdCB0aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0LnRleHRDb250ZW50ID0gXCJUaXRsZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLnRpdGxlO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZGVzY3JpcHRpb247ICAgIC8vY29kZSBtaWdodCBiZSB1c2VmdWxsIGxhdGVyXG4gIGNvbnN0IGR1ZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWRhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCIrXCIgOiBcIiArIERvVGhpcygpLmFycnlbaV0uZHVlZGF0ZTtcbiAgY29uc3QgZG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiK1wiIDogXCIgKyBEb1RoaXMoKS5hcnJ5W2ldLmRvbmU7XG5cbiAgcHJvQ2FyZC5hcHBlbmRDaGlsZCh0aXQpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGRlc2MpO1xuICBwcm9DYXJkLmFwcGVuZENoaWxkKGR1ZGF0ZSk7XG4gIHByb0NhcmQuYXBwZW5kQ2hpbGQoZG9uKTtcbiAgXG4qL1xuXG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKXsgICAgLy8gYSBkb20gbWFuaXAgZnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0IHRpdGxlcyBhbmQgYXBwZW5kIGNyZWF0ZSB0byBkbyBidXR0b25zXG5cbiAgICBjb25zdCBwcm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIik7XG4gIFxuICAgICBmb3IobGV0IGkgPSAwOyBpPCBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHByb1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb1RpbGUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZSA6ICAgXCIrIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0udGl0bGU7XG4gICAgICBwcm9UaWxlLmNsYXNzTmFtZSA9IFwiUHJvamVjdFRpbGVcIlxuICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RDYXJkLmlkID0gaTtcbiAgICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9ICdwcm9qZWN0Q2FyZCc7XG4gICAgICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvVGlsZSlcbiAgICAgIGNvbnN0IFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRvIERvXCI7XG4gICAgICBUb0RvQnRuLmNsYXNzTmFtZSA9IFwiQ3JlYXRlVG9Eb1wiO1xuICAgICAgVG9Eb0J0bi52YWx1ZSA9IGk7XG4gICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChUb0RvQnRuKTtcbiAgICAgIFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFNob3dUb0RvRm9ybSxmYWxzZSk7XG4gICAgICBjb25zdCBEZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIERlbEJ0bi50ZXh0Q29udGVudCA9J0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIERlbEJ0bi52YWx1ZSA9IGkgO1xuICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoRGVsQnRuKTtcbiAgICAgIERlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVsZXRlUHJvamVjdCwgZmFsc2UpO1xuXG4gICAgICBcbiAgICAgIGZvcihsZXQgaiA9IDE7IGogPHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5Lmxlbmd0aDsgaisrKXtcblxuICAgICAgICBjb25zdCBUb0RvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAvL2NyZWF0aW5nIHNlcGVyYXRlIGNhcmRzIGZvciBlYWNoIHRvZG9zICAgICAgICAgIFxuICAgICAgICBUb0RvVGlsZS5jbGFzc05hbWUgPSAnVG9kb1RpbGUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKS5hcHBlbmRDaGlsZChUb0RvVGlsZSk7XG4gICAgICAgIGZvcihjb25zdFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5W2pdKSl7XG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID1gJHtrZXl9IDogJHt2YWx1ZX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IDogJHt2YWx1ZX1gKTtcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRGVsZXRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIERlbGV0VG9kb0J0bi52YWx1ZSA9IGo7XG4gICAgICAgIERlbGV0VG9kb0J0bi5pZCA9IGk7ICAgICAvLyB0aGlzIGlzIHNvIHRoYXQgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdCBudW1iZXIgY2FuIGJlIHVuZGVyc3Rvb2Qgd2hpbGUgZGVsZXRpbmdcbiAgICAgICAgRGVsZXRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgVG8gRG9cIlxuICAgICAgICBUb0RvVGlsZS5hcHBlbmRDaGlsZChEZWxldFRvZG9CdG4pO1xuICAgICAgICBEZWxldFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRGVsZXRlVG9kbywgZmFsc2UpXG4gICAgICB9XG4gICAgICBcbiAgICAgfSBcblxuXG4gICAgXG4gICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0J1dHRvblwiKS5pbm5lckhUTUw9IFwiXCI7XG4gICBcbiAgICBcbiAgICBcbiAgIFxuICAgXG4gICBcbn1cbmV4cG9ydCBmdW5jdGlvbiBTaG93VG9Eb0Zvcm0oKXtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICBjb25zdCBTdWJpdFRvRG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3VibWl0VG9Eb0J0bicpO1xuICBTdWJpdFRvRG9CdG4udmFsdWU9IHRoaXMudmFsdWU7XG4gIFN1Yml0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixJbnRha2VUb0RvLCBmYWxzZSlcbn1cbiBleHBvcnQgZnVuY3Rpb24gaGlkZUZvcm0oKVxueyAgIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIikucmVzZXQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgIFxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFkZE5ld1Byb2plY3QoKXsgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGxheXMgZm9ybSB0byBhZGQgbmV3IHByb2plY3RcbiAgaGlkZUZvcm0oKVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIikuZGlzYWJsZWQgPSB0cnVlO1xuICBjb25zdCBwcm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0J1dHRvblwiKTtcbiAgY29uc3QgcHJvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlByb2plY3ROYW1lXCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJvamVjdCBOYW1lXCIpO1xuICBwcm9EaXYuYXBwZW5kQ2hpbGQocHJvRm9ybSk7XG4gIGNvbnN0IHN1YnBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJwcm8uc2V0QXR0cmlidXRlKFwiaWRcIixcInN1Ym1pdFByb2plY3RcIilcbiAgc3VicHJvLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICBwcm9EaXYuYXBwZW5kQ2hpbGQoc3VicHJvKTtcbiAgc3VicHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZVByb2plY3QpXG5cbiAgfSIsIlxuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5pbXBvcnQgeyBJbnRha2VUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuaW1wb3J0IHsgaGlkZUZvcm0gfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcblxuIFxuZXhwb3J0IGNsYXNzIEFyYWFhYXl7XG4gIGNvbnN0cnVjdG9yKGFycm5hbWUpe1xuICAgICAgdGhpcy50aXRsZSA9IGFycm5hbWU7XG4gICAgICBbYXJybmFtZV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgIHRoaXMuYXJ5ID0gW2Fycm5hbWVdO1xuXG4gIH1cbn1cblxuXG4gZXhwb3J0IGZ1bmN0aW9uIEFkZFRvZG8oYXJyYWF5LCBUb2Rvbykge1xuXG4gYXJyYWF5LnB1c2goVG9kb28pO1xuIHJldHVybiBhcnJhYXk7XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjZXB0cyBhbiBhcnJheSBhbmQgYSB0b2RvIHRvIGJlIGFkZGVkIHRvIHRoZSBhcnJheVxuXG5jb25zdCBud1BybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdFwiKTtcbm53UHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEFkZE5ld1Byb2plY3QpO1xuY29uc3QgUHJvamVjdENvbnRhaW5lckFycmF5ID0gbmV3IEFycmF5KCk7ICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBmb3IgdGhlIHByb2plY3RzXG5cblxuICBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7ICAgICAgIC8vIEFkZGluZyBhIGZ1bmN0aW9uIHRvIGFjY2VwdCBwcm9qZWN0IG5hbWUgYW5kIGNyZWF0ZSB0aGUgcHJvamVjdCBhcnJheVxuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3ROYW1lXCIpO1xuICAgIGNvbnN0IE5ld1Byb2plY3ROYW1lID0gcHJvTmFtZS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBuZXcgQXJhYWFheShOZXdQcm9qZWN0TmFtZSk7ICAgIC8vIENyZWF0ZXMgYSBjb250YWluZXIgd2l0aCB0aGUgbmFtZSBhbmQgYXJyYXkgaWUgYXJhYWF5IGNsYXNzXG4gICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkuYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkudGl0bGUpO1xuICAgXG4gICAgUHJvamVjdENvbnRhaW5lckFycmF5LnB1c2gobmV3UHJvamVjdEFycmF5KTsgLy8gcHVzaGVzIHRoZSBuZXcgcHJvamVjdCBhcnJhYWF5IGludG8gdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7ICAgIC8vIGNhbGxzIGZ1bmN0aW9uIHRoYXQgZGVzIGRvbSBtYW5pcCB0byBkaXNwbGF5IHByb2plY3QgbmFtZS5cbiAgICAgICBcbiAgICB9XG4gICBcbmV4cG9ydCBmdW5jdGlvbiBydG5Qcm9Db250QXJyKCl7XG4gIHJldHVybiB7UHJvamVjdENvbnRhaW5lckFycmF5fTsgICAgLy9leHBvcnRzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciBhcnJheSBzbyB0aGF0IGl0IGNhbiBiZSBpbXBvcnRlZFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgaGlkZUZvcm0gfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cblxuaGlkZUZvcm0oKTsgIC8vIGtlZXBzIHRoZSBzdWJtaXQgdG9kbyBmb3JtIGhpZGRlbiB0aWxsIHRoZSBjcmVhdGUgdG8gZG8gYnV0dG9uIGlzIGNsaWNrZWRcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=