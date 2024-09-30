"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/upload";
exports.ids = ["pages/upload"];
exports.modules = {

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Upload)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Upload() {\n    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFileChange = (event)=>{\n        setSelectedFile(event.target.files[0]);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"pdfFile\", selectedFile);\n        const response = await fetch(\"http://localhost:5000/api/upload\", {\n            method: \"POST\",\n            body: formData\n        });\n        const data = await response.json();\n        setMessage(data.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Upload a PDF\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        onChange: handleFileChange,\n                        accept: \".pdf\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Upload PDF\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n                lineNumber: 33,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cleme\\\\Desktop\\\\PFE\\\\frontend\\\\pages\\\\upload.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVsQixTQUFTQyxNQUFNLEdBQUc7SUFDL0IsTUFBTSxLQUFDQyxZQUFZLE1BQUVDLGVBQWUsTUFBSUgsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEQsTUFBTSxLQUFDSSxPQUFPLE1BQUVDLFVBQVUsTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFMUMsTUFBTU0sZ0JBQWdCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO1FBQ2xDSixlQUFlLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTUMsWUFBWSxHQUFHLE9BQU9ILEtBQUssR0FBSztRQUNwQ0EsS0FBSyxDQUFDSSxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBUSxFQUFFO1FBQy9CRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUVaLFlBQVksQ0FBQyxDQUFDO1FBRXpDLE1BQU1hLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0NBQWtDLEVBQUU7WUFDL0RDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRU4sUUFBUTtTQUNmLENBQUM7UUFFRixNQUFNTyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFJLEVBQUU7UUFDbENmLFVBQVUsQ0FBQ2MsSUFBSSxDQUFDZixPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQ0UsOERBQUNpQixLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxjQUFZOzs7OztvQkFBSzswQkFDckIsOERBQUNDLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRWQsWUFBWTs7a0NBQzFCLDhEQUFDZSxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsUUFBUSxFQUFFckIsZ0JBQWdCO3dCQUFFc0IsTUFBTSxFQUFDLE1BQU07d0JBQUNDLFFBQVE7Ozs7OzRCQUFHO2tDQUN4RSw4REFBQ0MsUUFBTTt3QkFBQ0osSUFBSSxFQUFDLFFBQVE7a0NBQUMsWUFBVTs7Ozs7NEJBQVM7Ozs7OztvQkFDcEM7WUFDTnRCLE9BQU8sa0JBQUksOERBQUMyQixHQUFDOzBCQUFFM0IsT0FBTzs7Ozs7b0JBQUs7Ozs7OztZQUN4QixDQUNOO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvdXBsb2FkLmpzPzk4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWQoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwZGZGaWxlJywgc2VsZWN0ZWRGaWxlKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VwbG9hZCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlVwbG9hZCBhIFBERjwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBhY2NlcHQ9XCIucGRmXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGxvYWQgUERGPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge21lc3NhZ2UgJiYgPHA+e21lc3NhZ2V9PC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXBsb2FkIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwicmVxdWlyZWQiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/upload.js"));
module.exports = __webpack_exports__;

})();