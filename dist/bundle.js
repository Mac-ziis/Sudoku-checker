/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './css/styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './sudoku.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nfunction getSudokuValues() {\n  const sudokuValues = [];\n  for (const row = 1; row <= 9; row++) {\n    const rowValues = [];\n    for (const col = 1; col <= 9; col++) {\n      const inputId = \"row\" + row + \"col\" + col;\n      const inputValue = parseInt(document.getElementById(inputId).value);\n      rowValues.push(inoutValue);\n    }\n    sudokuValues.push(rowValues);\n  }\n  return sudokuValues;\n}\n\nfunction displayResult(isLegal) {\n  const result = dosument.getElementById(\"result\");\n  if (isLegal) {\n    result.textContent = \"The Sudoku puzzle is legal!\";\n    result.classList.add(\"legal\");\n    result.classList.remove(\"illegal\");\n  } else {\n    result.textContent = \"The Sudoku puzzle is illegal!\";\n    result.classList.add(\"illegal\");\n    result.classList.remove(\"legal\");\n  }\n}\n\nconst checkButton = document.getElementById(\"check-button\");\ncheckButton.addEventListener(\"click\", function () {\n  const sudokuValues = getSudokuValues();\n  const sudoku = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './sudoku.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\n    \n  )\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDTTs7QUFFaEM7QUFDQTtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUlBQU07O0FBRTNCO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgU3Vkb2t1IGZyb20gJy4vc3Vkb2t1LmpzJ1xuXG5mdW5jdGlvbiBnZXRTdWRva3VWYWx1ZXMoKSB7XG4gIGNvbnN0IHN1ZG9rdVZhbHVlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHJvdyA9IDE7IHJvdyA8PSA5OyByb3crKykge1xuICAgIGNvbnN0IHJvd1ZhbHVlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29sID0gMTsgY29sIDw9IDk7IGNvbCsrKSB7XG4gICAgICBjb25zdCBpbnB1dElkID0gXCJyb3dcIiArIHJvdyArIFwiY29sXCIgKyBjb2w7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCkudmFsdWUpO1xuICAgICAgcm93VmFsdWVzLnB1c2goaW5vdXRWYWx1ZSk7XG4gICAgfVxuICAgIHN1ZG9rdVZhbHVlcy5wdXNoKHJvd1ZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIHN1ZG9rdVZhbHVlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlc3VsdChpc0xlZ2FsKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGRvc3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuICBpZiAoaXNMZWdhbCkge1xuICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IFwiVGhlIFN1ZG9rdSBwdXp6bGUgaXMgbGVnYWwhXCI7XG4gICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJsZWdhbFwiKTtcbiAgICByZXN1bHQuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWxcIik7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnRleHRDb250ZW50ID0gXCJUaGUgU3Vkb2t1IHB1enpsZSBpcyBpbGxlZ2FsIVwiO1xuICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbFwiKTtcbiAgICByZXN1bHQuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICB9XG59XG5cbmNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1idXR0b25cIik7XG5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdWRva3VWYWx1ZXMgPSBnZXRTdWRva3VWYWx1ZXMoKTtcbiAgY29uc3Qgc3Vkb2t1ID0gbmV3IFN1ZG9rdShcbiAgICBcbiAgKVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });