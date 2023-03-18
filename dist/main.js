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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: flex;\n    flex-direction: column ;\n    align-items: center;\n    \n}\n#newProjectBtn{\nbackground-color: rgb(86, 129, 129);\n}\n.input{\n    background-color: rgb(63, 223, 143);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n.ProjectTile{\n    margin: 20px;\n    font-size: large;\n    width: 399px;\n    height: 20px;\n    background-color: blanchedalmond;\n   \n}\n.projectCard{\n    min-width: 450px;\n    margin: 10px;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: 1.5px solid brown ;\n}\n.TodoTile{\n    min-width: 300px;\n    border: 1.5px solid rgb(117, 81, 81) ;\n    font-style: italic;\n    margin: 15px;\n    padding: 10px;\n}\nbutton{\n    margin-bottom: 10px;\n    margin-top: 5px;\n}.TodoTile{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}.newProject{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;AACA,mCAAmC;AACnC;AACA;IACI,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,gCAAgC;;AAEpC;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,gBAAgB;IAChB,qCAAqC;IACrC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB,CAAC;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB,CAAC;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["body{\n    display: flex;\n    flex-direction: column ;\n    align-items: center;\n    \n}\n#newProjectBtn{\nbackground-color: rgb(86, 129, 129);\n}\n.input{\n    background-color: rgb(63, 223, 143);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n.ProjectTile{\n    margin: 20px;\n    font-size: large;\n    width: 399px;\n    height: 20px;\n    background-color: blanchedalmond;\n   \n}\n.projectCard{\n    min-width: 450px;\n    margin: 10px;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: 1.5px solid brown ;\n}\n.TodoTile{\n    min-width: 300px;\n    border: 1.5px solid rgb(117, 81, 81) ;\n    font-style: italic;\n    margin: 15px;\n    padding: 10px;\n}\nbutton{\n    margin-bottom: 10px;\n    margin-top: 5px;\n}.TodoTile{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}.newProject{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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



function DeleteProject(){           //function to delete project
    (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray.splice(this.value,1);
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_0__.displayProject)();
}

function DeleteTodo(){            //function to delete Todo
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
/* harmony export */   "DoneUndone": () => (/* binding */ DoneUndone),
/* harmony export */   "IntakeToDo": () => (/* binding */ IntakeToDo),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _domFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFactor */ "./src/domFactor.js");

//creating a class to represent the to do individual items and exporting











class ToDo  {                             
constructor (Title, Description, Duedate) {
    this.Title = Title;
    this.Description = Description;
    this.Duedate = Duedate;
    this.Done = "Undone"; // setting the value of done to undone by default
   
}}

function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;               // gets the values of to do from the form 
    let Description = document.getElementById("Description").value;
    

    if( title == "" || DueDate == "" || Description == "" )
    return;
    else{
         let newTodo = new ToDo(title,Description,DueDate);   // creates new to do and pushes the newly created to do object in the array
        (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.AddTodo)((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.value].ary,newTodo);
        console.log("hello")
        console.log((0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.value].ary);
        (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.hideForm)();
        document.querySelector(".ProjectLineup").innerHTML = "" ;//clearing the contents of the div so that projects dont get repeated
        (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.displayProject)();

        
    }


}
function DoneUndone(){
    if (this.textContent == "Undone"){
        this.textContent ="Done";
        (0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.id].ary[this.value].Done = "Done"
    }
     else{
        this.textContent = "Undone"
        ;(0,_newProject__WEBPACK_IMPORTED_MODULE_0__.rtnProContArr)().ProjectContainerArray[this.id].ary[this.value].Done = "Undone"

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
      ToDoBtn.addEventListener("click", ShowToDoForm,false);  // calls the function to display the to do entry form
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
        if(key != "Done"){
          let para = document.createElement('p');
        para.textContent =`${key} : ${value}`;       //displaying the values of the object entries
        console.log(`${key} : ${value}`);
        ToDoTile.appendChild(para);
        }
        }
        const Donebtn = document.createElement("button");
        Donebtn.className = "Done";
        Donebtn.textContent = (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.rtnProContArr)().ProjectContainerArray[i].ary[j].Done;
        Donebtn.value = j;
        Donebtn.id = i;
        ToDoTile.appendChild(Donebtn);
        Donebtn.addEventListener("click",_ToDo__WEBPACK_IMPORTED_MODULE_2__.DoneUndone,false);  //triggers function to toggle between done and undone
        const DeletTodoBtn = document.createElement('button');
        DeletTodoBtn.value = j;
        DeletTodoBtn.id = i;     // this is so that the corresponding project number can be understood while deleting
        DeletTodoBtn.textContent = "Delete To Do"
        ToDoTile.appendChild(DeletTodoBtn);
        DeletTodoBtn.addEventListener("click",_DelProjectTodo__WEBPACK_IMPORTED_MODULE_0__.DeleteTodo, false)

      }
      
     } 
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
  document.getElementById("newProjectBtn").disabled = true;    //once clicked, the create project input appears and new project button is not required
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







 
class Araaaay{        //class that creates the conatiner ie array to hold the todos and the project name
  constructor(arrname){
      this.title = arrname;
      [arrname] = new Array();
      this.ary = [arrname];

  }
}


 function AddTodo(arraay, Todoo) {       // accepts an array and a todo to be added to the array


 arraay.push(Todoo);
 return arraay;
}                                          
const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",_domFactor__WEBPACK_IMPORTED_MODULE_1__.AddNewProject);
const ProjectContainerArray = new Array();    // create an array for the projects


  

function createProject() {       // Adding a function to accept project name and create the project array
    
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJTyxnREFBZ0Q7QUFDdkQ7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQWE7O0FBRS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HOEI7QUFDZTtBQUNUO0FBQ0c7QUFDSzs7QUFFNUM7QUFDTyxzQkFBc0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsQ0FBUSx3Q0FBd0M7OztBQUdoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBYTtBQUM1Qyw4Q0FBOEM7OztBQUc5Qzs7QUFFTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLElBQUksMERBQWMsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDTztBQUNQLFVBQVUsMkJBQTJCO0FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNTO0FBQ0E7QUFDbEI7Ozs7QUFJckIsb0RBQVEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvRGVsUHJvamVjdFRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbUZhY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNuZXdQcm9qZWN0QnRue1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTI5LCAxMjkpO1xcbn1cXG4uaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMjIzLCAxNDMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5Qcm9qZWN0VGlsZXtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDogMzk5cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgXFxufVxcbi5wcm9qZWN0Q2FyZHtcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBicm93biA7XFxufVxcbi5Ub2RvVGlsZXtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMTE3LCA4MSwgODEpIDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn0uVG9kb1RpbGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufS5uZXdQcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7O0FBRXBDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIsQ0FBQztJQUNHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCLENBQUM7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNuZXdQcm9qZWN0QnRue1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTI5LCAxMjkpO1xcbn1cXG4uaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMjIzLCAxNDMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5Qcm9qZWN0VGlsZXtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDogMzk5cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgXFxufVxcbi5wcm9qZWN0Q2FyZHtcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBicm93biA7XFxufVxcbi5Ub2RvVGlsZXtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMTE3LCA4MSwgODEpIDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn0uVG9kb1RpbGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufS5uZXdQcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KCl7ICAgICAgICAgICAvL2Z1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheS5zcGxpY2UodGhpcy52YWx1ZSwxKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVRvZG8oKXsgICAgICAgICAgICAvL2Z1bmN0aW9uIHRvIGRlbGV0ZSBUb2RvXG4gICAgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVt0aGlzLmlkXS5hcnkuc3BsaWNlKHRoaXMudmFsdWUsMSk7IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKS5pbm5lckhUTUwgPSBcIlwiIDtcbiAgICBkaXNwbGF5UHJvamVjdCgpOyAgXG59IiwiXG4vL2NyZWF0aW5nIGEgY2xhc3MgdG8gcmVwcmVzZW50IHRoZSB0byBkbyBpbmRpdmlkdWFsIGl0ZW1zIGFuZCBleHBvcnRpbmdcblxuXG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgcnRuUHJvQ29udEFyciB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEFyYWFhYXkgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgVG9EbyAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5jb25zdHJ1Y3RvciAoVGl0bGUsIERlc2NyaXB0aW9uLCBEdWVkYXRlKSB7XG4gICAgdGhpcy5UaXRsZSA9IFRpdGxlO1xuICAgIHRoaXMuRGVzY3JpcHRpb24gPSBEZXNjcmlwdGlvbjtcbiAgICB0aGlzLkR1ZWRhdGUgPSBEdWVkYXRlO1xuICAgIHRoaXMuRG9uZSA9IFwiVW5kb25lXCI7IC8vIHNldHRpbmcgdGhlIHZhbHVlIG9mIGRvbmUgdG8gdW5kb25lIGJ5IGRlZmF1bHRcbiAgIFxufX1cblxuZXhwb3J0IGZ1bmN0aW9uIEludGFrZVRvRG8oKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIikudmFsdWU7XG4gICAgbGV0IER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZURhdGVcIikudmFsdWU7ICAgICAgICAgICAgICAgLy8gZ2V0cyB0aGUgdmFsdWVzIG9mIHRvIGRvIGZyb20gdGhlIGZvcm0gXG4gICAgbGV0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBcblxuICAgIGlmKCB0aXRsZSA9PSBcIlwiIHx8IER1ZURhdGUgPT0gXCJcIiB8fCBEZXNjcmlwdGlvbiA9PSBcIlwiIClcbiAgICByZXR1cm47XG4gICAgZWxzZXtcbiAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsRGVzY3JpcHRpb24sRHVlRGF0ZSk7ICAgLy8gY3JlYXRlcyBuZXcgdG8gZG8gYW5kIHB1c2hlcyB0aGUgbmV3bHkgY3JlYXRlZCB0byBkbyBvYmplY3QgaW4gdGhlIGFycmF5XG4gICAgICAgIEFkZFRvZG8ocnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVt0aGlzLnZhbHVlXS5hcnksbmV3VG9kbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICAgICAgY29uc29sZS5sb2cocnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVt0aGlzLnZhbHVlXS5hcnkpO1xuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7Ly9jbGVhcmluZyB0aGUgY29udGVudHMgb2YgdGhlIGRpdiBzbyB0aGF0IHByb2plY3RzIGRvbnQgZ2V0IHJlcGVhdGVkXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBEb25lVW5kb25lKCl7XG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT0gXCJVbmRvbmVcIil7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPVwiRG9uZVwiO1xuICAgICAgICBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMuaWRdLmFyeVt0aGlzLnZhbHVlXS5Eb25lID0gXCJEb25lXCJcbiAgICB9XG4gICAgIGVsc2V7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlVuZG9uZVwiXG4gICAgICAgIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbdGhpcy5pZF0uYXJ5W3RoaXMudmFsdWVdLkRvbmUgPSBcIlVuZG9uZVwiXG5cbiAgICAgfVxufSIsImltcG9ydCB7IERlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9EZWxQcm9qZWN0VG9kb1wiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgRGVsZXRlVG9kbyB9IGZyb20gXCIuL0RlbFByb2plY3RUb2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgRG9uZVVuZG9uZSB9IGZyb20gXCIuL1RvRG9cIjtcblxuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpeyAgICAvLyBhIGRvbSBtYW5pcCBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3QgdGl0bGVzIGFuZCBhcHBlbmQgY3JlYXRlIHRvIGRvIGJ1dHRvbnNcblxuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgXG4gICAgIGZvcihsZXQgaSA9IDA7IGk8IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lIDogICBcIisgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVtpXS50aXRsZTtcbiAgICAgIHByb1RpbGUuY2xhc3NOYW1lID0gXCJQcm9qZWN0VGlsZVwiXG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdENhcmQuaWQgPSBpO1xuICAgICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3RDYXJkJztcbiAgICAgIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9UaWxlKVxuICAgICAgY29uc3QgVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBUb0RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8gRG9cIjtcbiAgICAgIFRvRG9CdG4uY2xhc3NOYW1lID0gXCJDcmVhdGVUb0RvXCI7XG4gICAgICBUb0RvQnRuLnZhbHVlID0gaTtcbiAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKFRvRG9CdG4pO1xuICAgICAgVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd1RvRG9Gb3JtLGZhbHNlKTsgIC8vIGNhbGxzIHRoZSBmdW5jdGlvbiB0byBkaXNwbGF5IHRoZSB0byBkbyBlbnRyeSBmb3JtXG4gICAgICBjb25zdCBEZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIERlbEJ0bi50ZXh0Q29udGVudCA9J0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIERlbEJ0bi52YWx1ZSA9IGkgO1xuICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoRGVsQnRuKTtcbiAgICAgIERlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVsZXRlUHJvamVjdCwgZmFsc2UpO1xuXG4gICAgICBcbiAgICAgIGZvcihsZXQgaiA9IDE7IGogPHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5Lmxlbmd0aDsgaisrKXtcblxuICAgICAgICBjb25zdCBUb0RvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAvL2NyZWF0aW5nIHNlcGVyYXRlIGNhcmRzIGZvciBlYWNoIHRvZG9zICAgICAgICAgIFxuICAgICAgICBUb0RvVGlsZS5jbGFzc05hbWUgPSAnVG9kb1RpbGUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKS5hcHBlbmRDaGlsZChUb0RvVGlsZSk7XG4gICAgICAgIGZvcihjb25zdFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5W2pdKSl7XG4gICAgICAgIGlmKGtleSAhPSBcIkRvbmVcIil7XG4gICAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPWAke2tleX0gOiAke3ZhbHVlfWA7ICAgICAgIC8vZGlzcGxheWluZyB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QgZW50cmllc1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IDogJHt2YWx1ZX1gKTtcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBEb25lYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgRG9uZWJ0bi5jbGFzc05hbWUgPSBcIkRvbmVcIjtcbiAgICAgICAgRG9uZWJ0bi50ZXh0Q29udGVudCA9IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5W2pdLkRvbmU7XG4gICAgICAgIERvbmVidG4udmFsdWUgPSBqO1xuICAgICAgICBEb25lYnRuLmlkID0gaTtcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQoRG9uZWJ0bik7XG4gICAgICAgIERvbmVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRG9uZVVuZG9uZSxmYWxzZSk7ICAvL3RyaWdnZXJzIGZ1bmN0aW9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGRvbmUgYW5kIHVuZG9uZVxuICAgICAgICBjb25zdCBEZWxldFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgRGVsZXRUb2RvQnRuLnZhbHVlID0gajtcbiAgICAgICAgRGVsZXRUb2RvQnRuLmlkID0gaTsgICAgIC8vIHRoaXMgaXMgc28gdGhhdCB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0IG51bWJlciBjYW4gYmUgdW5kZXJzdG9vZCB3aGlsZSBkZWxldGluZ1xuICAgICAgICBEZWxldFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUbyBEb1wiXG4gICAgICAgIFRvRG9UaWxlLmFwcGVuZENoaWxkKERlbGV0VG9kb0J0bik7XG4gICAgICAgIERlbGV0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixEZWxldGVUb2RvLCBmYWxzZSlcblxuICAgICAgfVxuICAgICAgXG4gICAgIH0gXG59XG5leHBvcnQgZnVuY3Rpb24gU2hvd1RvRG9Gb3JtKCl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgY29uc3QgU3ViaXRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N1Ym1pdFRvRG9CdG4nKTtcbiAgU3ViaXRUb0RvQnRuLnZhbHVlPSB0aGlzLnZhbHVlO1xuICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9EbywgZmFsc2UpXG59XG4gZXhwb3J0IGZ1bmN0aW9uIGhpZGVGb3JtKClcbnsgICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICBcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdQcm9qZWN0KCl7ICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0XG4gIGhpZGVGb3JtKClcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpLmRpc2FibGVkID0gdHJ1ZTsgICAgLy9vbmNlIGNsaWNrZWQsIHRoZSBjcmVhdGUgcHJvamVjdCBpbnB1dCBhcHBlYXJzIGFuZCBuZXcgcHJvamVjdCBidXR0b24gaXMgbm90IHJlcXVpcmVkXG4gIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpO1xuICBjb25zdCBwcm9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJvamVjdE5hbWVcIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9Gb3JtKTtcbiAgY29uc3Qgc3VicHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1YnByby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3VibWl0UHJvamVjdFwiKVxuICBzdWJwcm8udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIHByb0Rpdi5hcHBlbmRDaGlsZChzdWJwcm8pO1xuICBzdWJwcm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY3JlYXRlUHJvamVjdClcblxuICB9IiwiXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgQWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuXG4gXG5leHBvcnQgY2xhc3MgQXJhYWFheXsgICAgICAgIC8vY2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBjb25hdGluZXIgaWUgYXJyYXkgdG8gaG9sZCB0aGUgdG9kb3MgYW5kIHRoZSBwcm9qZWN0IG5hbWVcbiAgY29uc3RydWN0b3IoYXJybmFtZSl7XG4gICAgICB0aGlzLnRpdGxlID0gYXJybmFtZTtcbiAgICAgIFthcnJuYW1lXSA9IG5ldyBBcnJheSgpO1xuICAgICAgdGhpcy5hcnkgPSBbYXJybmFtZV07XG5cbiAgfVxufVxuXG5cbiBleHBvcnQgZnVuY3Rpb24gQWRkVG9kbyhhcnJhYXksIFRvZG9vKSB7ICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuXG4gYXJyYWF5LnB1c2goVG9kb28pO1xuIHJldHVybiBhcnJhYXk7XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5jb25zdCBud1BybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdFwiKTtcbm53UHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEFkZE5ld1Byb2plY3QpO1xuY29uc3QgUHJvamVjdENvbnRhaW5lckFycmF5ID0gbmV3IEFycmF5KCk7ICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBmb3IgdGhlIHByb2plY3RzXG5cblxuICBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7ICAgICAgIC8vIEFkZGluZyBhIGZ1bmN0aW9uIHRvIGFjY2VwdCBwcm9qZWN0IG5hbWUgYW5kIGNyZWF0ZSB0aGUgcHJvamVjdCBhcnJheVxuICAgIFxuICAgXG4gICAgY29uc3QgcHJvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdE5hbWVcIik7XG4gICAgY29uc3QgTmV3UHJvamVjdE5hbWUgPSBwcm9OYW1lLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUHJvamVjdE5hbWVcIikudmFsdWUgPSBcIlwiO1xuICAgIGNvbnN0IG5ld1Byb2plY3RBcnJheSA9IG5ldyBBcmFhYWF5KE5ld1Byb2plY3ROYW1lKTsgICAgLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciB3aXRoIHRoZSBuYW1lIGFuZCBhcnJheSBpZSBhcmFhYXkgY2xhc3NcbiAgIFxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RBcnJheS5hcnkpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RBcnJheS50aXRsZSk7XG4gICBcbiAgICBQcm9qZWN0Q29udGFpbmVyQXJyYXkucHVzaChuZXdQcm9qZWN0QXJyYXkpOyAvLyBwdXNoZXMgdGhlIG5ldyBwcm9qZWN0IGFycmFhYXkgaW50byB0aGUgcHJvamVjdCBjb250YWluZXIgYXJyYXlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7XG4gICAgZGlzcGxheVByb2plY3QoKTsgICAgLy8gY2FsbHMgZnVuY3Rpb24gdGhhdCBkZXMgZG9tIG1hbmlwIHRvIGRpc3BsYXkgcHJvamVjdCBuYW1lLlxuICAgICAgIFxuICAgIH1cbiAgIFxuZXhwb3J0IGZ1bmN0aW9uIHJ0blByb0NvbnRBcnIoKXtcbiAgcmV0dXJuIHtQcm9qZWN0Q29udGFpbmVyQXJyYXl9OyAgICAvL2V4cG9ydHMgdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5IHNvIHRoYXQgaXQgY2FuIGJlIGltcG9ydGVkXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG5oaWRlRm9ybSgpOyAgLy8ga2VlcHMgdGhlIHN1Ym1pdCB0b2RvIGZvcm0gaGlkZGVuIHRpbGwgdGhlIGNyZWF0ZSB0byBkbyBidXR0b24gaXMgY2xpY2tlZFxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==