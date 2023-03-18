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
function DoneUndone(){                //function to toggle the value of done and undone
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
  proForm.setAttribute("required", "");
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

const ProjectContainerArray = new Array();    // create an array for the projects


  

function createProject() {       // Adding a function to accept project name and create the project array
    
    
    const proName = document.querySelector("#ProjectName");
    if(proName.value != ""){
    const NewProjectName = proName.value;
    document.getElementById("ProjectName").value = "";
    const newProjectArray = new Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
   
    ProjectContainerArray.push(newProjectArray); // pushes the new project arraaay into the project container array
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    (0,_domFactor__WEBPACK_IMPORTED_MODULE_1__.displayProject)();    // calls function that des dom manip to display project name.
    } 
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






const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",_domFactor__WEBPACK_IMPORTED_MODULE_2__.AddNewProject);  //gets things started when the new project button is clicked

(0,_domFactor__WEBPACK_IMPORTED_MODULE_2__.hideForm)();  // keeps the submit todo form hidden till the create to do button is clicked






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL0RlbFByb2plY3RUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9Ub0RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9kb21GYWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jbmV3UHJvamVjdEJ0bntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDEyOSwgMTI5KTtcXG59XFxuLmlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDIyMywgMTQzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uUHJvamVjdFRpbGV7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgIFxcbn1cXG4ucHJvamVjdENhcmR7XFxuICAgIG1pbi13aWR0aDogNDUwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgYnJvd24gO1xcbn1cXG4uVG9kb1RpbGV7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDExNywgODEsIDgxKSA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5idXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59LlRvZG9UaWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0ubmV3UHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CLENBQUM7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QixDQUFDO0lBQ0csYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jbmV3UHJvamVjdEJ0bntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDEyOSwgMTI5KTtcXG59XFxuLmlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDIyMywgMTQzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uUHJvamVjdFRpbGV7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgIFxcbn1cXG4ucHJvamVjdENhcmR7XFxuICAgIG1pbi13aWR0aDogNDUwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgYnJvd24gO1xcbn1cXG4uVG9kb1RpbGV7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDExNywgODEsIDgxKSA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5idXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59LlRvZG9UaWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0ubmV3UHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZG9tRmFjdG9yXCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlUHJvamVjdCgpeyAgICAgICAgICAgLy9mdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdFxuICAgIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXkuc3BsaWNlKHRoaXMudmFsdWUsMSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVUb2RvKCl7ICAgICAgICAgICAgLy9mdW5jdGlvbiB0byBkZWxldGUgVG9kb1xuICAgIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbdGhpcy5pZF0uYXJ5LnNwbGljZSh0aGlzLnZhbHVlLDEpOyBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2plY3RMaW5ldXBcIikuaW5uZXJIVE1MID0gXCJcIiA7XG4gICAgZGlzcGxheVByb2plY3QoKTsgIFxufSIsIlxuLy9jcmVhdGluZyBhIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgdG8gZG8gaW5kaXZpZHVhbCBpdGVtcyBhbmQgZXhwb3J0aW5nXG5cblxuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IHJ0blByb0NvbnRBcnIgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBBcmFhYWF5IH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgaGlkZUZvcm0gfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcblxuXG5cblxuZXhwb3J0IGNsYXNzIFRvRG8gIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuY29uc3RydWN0b3IgKFRpdGxlLCBEZXNjcmlwdGlvbiwgRHVlZGF0ZSkge1xuICAgIHRoaXMuVGl0bGUgPSBUaXRsZTtcbiAgICB0aGlzLkRlc2NyaXB0aW9uID0gRGVzY3JpcHRpb247XG4gICAgdGhpcy5EdWVkYXRlID0gRHVlZGF0ZTtcbiAgICB0aGlzLkRvbmUgPSBcIlVuZG9uZVwiOyAvLyBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBkb25lIHRvIHVuZG9uZSBieSBkZWZhdWx0XG4gICBcbn19XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnRha2VUb0RvKCl7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRpdGxlXCIpLnZhbHVlO1xuICAgIGxldCBEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEdWVEYXRlXCIpLnZhbHVlOyAgICAgICAgICAgICAgIC8vIGdldHMgdGhlIHZhbHVlcyBvZiB0byBkbyBmcm9tIHRoZSBmb3JtIFxuICAgIGxldCBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgXG5cbiAgICBpZiggdGl0bGUgPT0gXCJcIiB8fCBEdWVEYXRlID09IFwiXCIgfHwgRGVzY3JpcHRpb24gPT0gXCJcIiApXG4gICAgcmV0dXJuO1xuICAgIGVsc2V7XG4gICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb0RvKHRpdGxlLERlc2NyaXB0aW9uLER1ZURhdGUpOyAgIC8vIGNyZWF0ZXMgbmV3IHRvIGRvIGFuZCBwdXNoZXMgdGhlIG5ld2x5IGNyZWF0ZWQgdG8gZG8gb2JqZWN0IGluIHRoZSBhcnJheVxuICAgICAgICBBZGRUb2RvKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbdGhpcy52YWx1ZV0uYXJ5LG5ld1RvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbdGhpcy52YWx1ZV0uYXJ5KTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgOy8vY2xlYXJpbmcgdGhlIGNvbnRlbnRzIG9mIHRoZSBkaXYgc28gdGhhdCBwcm9qZWN0cyBkb250IGdldCByZXBlYXRlZFxuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuXG4gICAgICAgIFxuICAgIH1cblxuXG59XG5leHBvcnQgZnVuY3Rpb24gRG9uZVVuZG9uZSgpeyAgICAgICAgICAgICAgICAvL2Z1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgdmFsdWUgb2YgZG9uZSBhbmQgdW5kb25lXG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT0gXCJVbmRvbmVcIil7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPVwiRG9uZVwiO1xuICAgICAgICBydG5Qcm9Db250QXJyKCkuUHJvamVjdENvbnRhaW5lckFycmF5W3RoaXMuaWRdLmFyeVt0aGlzLnZhbHVlXS5Eb25lID0gXCJEb25lXCJcbiAgICB9XG4gICAgIGVsc2V7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlVuZG9uZVwiXG4gICAgICAgIHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbdGhpcy5pZF0uYXJ5W3RoaXMudmFsdWVdLkRvbmUgPSBcIlVuZG9uZVwiXG5cbiAgICAgfVxufSIsImltcG9ydCB7IERlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9EZWxQcm9qZWN0VG9kb1wiO1xuaW1wb3J0IHsgQWRkVG9kbyB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBydG5Qcm9Db250QXJyIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgRGVsZXRlVG9kbyB9IGZyb20gXCIuL0RlbFByb2plY3RUb2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgRG9uZVVuZG9uZSB9IGZyb20gXCIuL1RvRG9cIjtcblxuLy8gdG8gYWRkIHRoZSB2YXJpb3VzIGRpdnMgYW5kIG90aGVyIHN0dWZmIHRvIHRoZSBjb250ZW50XG5cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpeyAgICAvLyBhIGRvbSBtYW5pcCBmdW5jdGlvbiB0byBkaXNwbGF5IHByb2plY3QgdGl0bGVzIGFuZCBhcHBlbmQgY3JlYXRlIHRvIGRvIGJ1dHRvbnNcblxuICAgIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdExpbmV1cFwiKTtcbiAgXG4gICAgIGZvcihsZXQgaSA9IDA7IGk8IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvVGlsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lIDogICBcIisgcnRuUHJvQ29udEFycigpLlByb2plY3RDb250YWluZXJBcnJheVtpXS50aXRsZTtcbiAgICAgIHByb1RpbGUuY2xhc3NOYW1lID0gXCJQcm9qZWN0VGlsZVwiXG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdENhcmQuaWQgPSBpO1xuICAgICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3RDYXJkJztcbiAgICAgIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9UaWxlKVxuICAgICAgY29uc3QgVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBUb0RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8gRG9cIjtcbiAgICAgIFRvRG9CdG4uY2xhc3NOYW1lID0gXCJDcmVhdGVUb0RvXCI7XG4gICAgICBUb0RvQnRuLnZhbHVlID0gaTtcbiAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKFRvRG9CdG4pO1xuICAgICAgVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd1RvRG9Gb3JtLGZhbHNlKTsgIC8vIGNhbGxzIHRoZSBmdW5jdGlvbiB0byBkaXNwbGF5IHRoZSB0byBkbyBlbnRyeSBmb3JtXG4gICAgICBjb25zdCBEZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIERlbEJ0bi50ZXh0Q29udGVudCA9J0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIERlbEJ0bi52YWx1ZSA9IGkgO1xuICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoRGVsQnRuKTtcbiAgICAgIERlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVsZXRlUHJvamVjdCwgZmFsc2UpO1xuXG4gICAgICBcbiAgICAgIGZvcihsZXQgaiA9IDE7IGogPHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5Lmxlbmd0aDsgaisrKXtcblxuICAgICAgICBjb25zdCBUb0RvVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAvL2NyZWF0aW5nIHNlcGVyYXRlIGNhcmRzIGZvciBlYWNoIHRvZG9zICAgICAgICAgIFxuICAgICAgICBUb0RvVGlsZS5jbGFzc05hbWUgPSAnVG9kb1RpbGUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKS5hcHBlbmRDaGlsZChUb0RvVGlsZSk7XG4gICAgICAgIGZvcihjb25zdFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5W2pdKSl7XG4gICAgICAgIGlmKGtleSAhPSBcIkRvbmVcIil7XG4gICAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPWAke2tleX0gOiAke3ZhbHVlfWA7ICAgICAgIC8vZGlzcGxheWluZyB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QgZW50cmllc1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IDogJHt2YWx1ZX1gKTtcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBEb25lYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgRG9uZWJ0bi5jbGFzc05hbWUgPSBcIkRvbmVcIjtcbiAgICAgICAgRG9uZWJ0bi50ZXh0Q29udGVudCA9IHJ0blByb0NvbnRBcnIoKS5Qcm9qZWN0Q29udGFpbmVyQXJyYXlbaV0uYXJ5W2pdLkRvbmU7XG4gICAgICAgIERvbmVidG4udmFsdWUgPSBqO1xuICAgICAgICBEb25lYnRuLmlkID0gaTtcbiAgICAgICAgVG9Eb1RpbGUuYXBwZW5kQ2hpbGQoRG9uZWJ0bik7XG4gICAgICAgIERvbmVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRG9uZVVuZG9uZSxmYWxzZSk7ICAvL3RyaWdnZXJzIGZ1bmN0aW9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGRvbmUgYW5kIHVuZG9uZVxuICAgICAgICBjb25zdCBEZWxldFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgRGVsZXRUb2RvQnRuLnZhbHVlID0gajtcbiAgICAgICAgRGVsZXRUb2RvQnRuLmlkID0gaTsgICAgIC8vIHRoaXMgaXMgc28gdGhhdCB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0IG51bWJlciBjYW4gYmUgdW5kZXJzdG9vZCB3aGlsZSBkZWxldGluZ1xuICAgICAgICBEZWxldFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUbyBEb1wiXG4gICAgICAgIFRvRG9UaWxlLmFwcGVuZENoaWxkKERlbGV0VG9kb0J0bik7XG4gICAgICAgIERlbGV0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixEZWxldGVUb2RvLCBmYWxzZSlcblxuICAgICAgfVxuICAgICAgXG4gICAgIH0gXG59XG5leHBvcnQgZnVuY3Rpb24gU2hvd1RvRG9Gb3JtKCl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgY29uc3QgU3ViaXRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1N1Ym1pdFRvRG9CdG4nKTtcbiAgU3ViaXRUb0RvQnRuLnZhbHVlPSB0aGlzLnZhbHVlO1xuICBTdWJpdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsSW50YWtlVG9EbywgZmFsc2UpXG59XG4gZXhwb3J0IGZ1bmN0aW9uIGhpZGVGb3JtKClcbnsgICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICBcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdQcm9qZWN0KCl7ICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0XG4gIGhpZGVGb3JtKClcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpLmRpc2FibGVkID0gdHJ1ZTsgICAgLy9vbmNlIGNsaWNrZWQsIHRoZSBjcmVhdGUgcHJvamVjdCBpbnB1dCBhcHBlYXJzIGFuZCBuZXcgcHJvamVjdCBidXR0b24gaXMgbm90IHJlcXVpcmVkXG4gIGNvbnN0IHByb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3QnV0dG9uXCIpO1xuICBjb25zdCBwcm9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJvamVjdE5hbWVcIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHByb0Rpdi5hcHBlbmRDaGlsZChwcm9Gb3JtKTtcbiAgY29uc3Qgc3VicHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1YnByby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic3VibWl0UHJvamVjdFwiKVxuICBzdWJwcm8udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIHByb0Rpdi5hcHBlbmRDaGlsZChzdWJwcm8pO1xuICBzdWJwcm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY3JlYXRlUHJvamVjdClcblxuICB9IiwiXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eb1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kb21GYWN0b3JcIjtcbmltcG9ydCB7IEludGFrZVRvRG8gfSBmcm9tIFwiLi9Ub0RvXCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgQWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuXG4gXG5leHBvcnQgY2xhc3MgQXJhYWFheXsgICAgICAgIC8vY2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBjb25hdGluZXIgaWUgYXJyYXkgdG8gaG9sZCB0aGUgdG9kb3MgYW5kIHRoZSBwcm9qZWN0IG5hbWVcbiAgY29uc3RydWN0b3IoYXJybmFtZSl7XG4gICAgICB0aGlzLnRpdGxlID0gYXJybmFtZTtcbiAgICAgIFthcnJuYW1lXSA9IG5ldyBBcnJheSgpO1xuICAgICAgdGhpcy5hcnkgPSBbYXJybmFtZV07XG5cbiAgfVxufVxuXG5cbiBleHBvcnQgZnVuY3Rpb24gQWRkVG9kbyhhcnJhYXksIFRvZG9vKSB7ICAgICAgIC8vIGFjY2VwdHMgYW4gYXJyYXkgYW5kIGEgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXlcblxuXG4gYXJyYWF5LnB1c2goVG9kb28pO1xuIHJldHVybiBhcnJhYXk7XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbmNvbnN0IFByb2plY3RDb250YWluZXJBcnJheSA9IG5ldyBBcnJheSgpOyAgICAvLyBjcmVhdGUgYW4gYXJyYXkgZm9yIHRoZSBwcm9qZWN0c1xuXG5cbiAgXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkgeyAgICAgICAvLyBBZGRpbmcgYSBmdW5jdGlvbiB0byBhY2NlcHQgcHJvamVjdCBuYW1lIGFuZCBjcmVhdGUgdGhlIHByb2plY3QgYXJyYXlcbiAgICBcbiAgICBcbiAgICBjb25zdCBwcm9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0TmFtZVwiKTtcbiAgICBpZihwcm9OYW1lLnZhbHVlICE9IFwiXCIpe1xuICAgIGNvbnN0IE5ld1Byb2plY3ROYW1lID0gcHJvTmFtZS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBuZXcgQXJhYWFheShOZXdQcm9qZWN0TmFtZSk7ICAgIC8vIENyZWF0ZXMgYSBjb250YWluZXIgd2l0aCB0aGUgbmFtZSBhbmQgYXJyYXkgaWUgYXJhYWF5IGNsYXNzXG4gICBcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkuYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0QXJyYXkudGl0bGUpO1xuICAgXG4gICAgUHJvamVjdENvbnRhaW5lckFycmF5LnB1c2gobmV3UHJvamVjdEFycmF5KTsgLy8gcHVzaGVzIHRoZSBuZXcgcHJvamVjdCBhcnJhYWF5IGludG8gdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0TGluZXVwXCIpLmlubmVySFRNTCA9IFwiXCIgO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7ICAgIC8vIGNhbGxzIGZ1bmN0aW9uIHRoYXQgZGVzIGRvbSBtYW5pcCB0byBkaXNwbGF5IHByb2plY3QgbmFtZS5cbiAgICB9IFxuICAgIH1cbiAgIFxuZXhwb3J0IGZ1bmN0aW9uIHJ0blByb0NvbnRBcnIoKXtcbiAgcmV0dXJuIHtQcm9qZWN0Q29udGFpbmVyQXJyYXl9OyAgICAvL2V4cG9ydHMgdGhlIHByb2plY3QgY29udGFpbmVyIGFycmF5IHNvIHRoYXQgaXQgY2FuIGJlIGltcG9ydGVkXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG9cIjtcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBoaWRlRm9ybSB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0IHsgQWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL2RvbUZhY3RvclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IG53UHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0XCIpO1xubndQcm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsQWRkTmV3UHJvamVjdCk7ICAvL2dldHMgdGhpbmdzIHN0YXJ0ZWQgd2hlbiB0aGUgbmV3IHByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcblxuaGlkZUZvcm0oKTsgIC8vIGtlZXBzIHRoZSBzdWJtaXQgdG9kbyBmb3JtIGhpZGRlbiB0aWxsIHRoZSBjcmVhdGUgdG8gZG8gYnV0dG9uIGlzIGNsaWNrZWRcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=