webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n\n\nvar _jsxFileName = \"/home/avinash/Desktop/Projects/TheStore/frontend/components/SignIn.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SignIn() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    email: '',\n    password: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm;\n\n  function handleSubmit(e) {\n    e.preventDefault(); //Stop the form from submitting\n\n    console.log(inputs); //Send the email and password to the graphQL API\n  } //The password is submitted over the network to your server in clear text but then what happens is the server hashes it compares it to what it has in file for its own hash\n  //COncern - We are sending our password in clear text  and \n  // ANd than that's why we use HTTPS    \n  // WHat HTTPS does is makes the packets encrypted\n  //Client \n  //--\n  //packets go through \n  //your   wifi router isp  or government\n  //--\n  //Server\n  //method POST also does't let the url have the input after submit of the input\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Sign Into Your Account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"fieldset\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your Email Addrress\",\n          autoComplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: inputs.password,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Sign In!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 12\n  }, this);\n}\n\n_s(SignIn, \"M4J1r1Bbe2nzpB3seAxXdbyDEBk=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = SignIn;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanM/NDgzOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJ1c2VGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVVBLE1BQVYsR0FBa0I7QUFBQTs7QUFBQSxpQkFDY0MsNERBQU8sQ0FBQztBQUMvQ0MsU0FBSyxFQUFDLEVBRHlDO0FBRS9DQyxZQUFRLEVBQUM7QUFGc0MsR0FBRCxDQURyQjtBQUFBLE1BQ3RCQyxNQURzQixZQUN0QkEsTUFEc0I7QUFBQSxNQUNkQyxZQURjLFlBQ2RBLFlBRGM7QUFBQSxNQUNDQyxTQURELFlBQ0NBLFNBREQ7O0FBTTdCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXdCO0FBQ25CQSxLQUFDLENBQUNDLGNBQUYsR0FEbUIsQ0FDQzs7QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaLEVBRm1CLENBSW5CO0FBQ0osR0FYNEIsQ0FhN0I7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBQ0Esc0JBQU8scUVBQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUVHLFlBQWhCO0FBQUEsNEJBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVIO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUNBO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsY0FBSSxFQUFDLE9BQXpCO0FBQWlDLHFCQUFXLEVBQUMscUJBQTdDO0FBQW1FLHNCQUFZLEVBQUMsT0FBaEY7QUFBd0YsZUFBSyxFQUFFSCxNQUFNLENBQUNGLEtBQXRHO0FBQTZHLGtCQUFRLEVBQUVHO0FBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQUEsNENBQ0E7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFJLEVBQUMsVUFBNUI7QUFBdUMscUJBQVcsRUFBQyxVQUFuRDtBQUE4RCxzQkFBWSxFQUFDLFVBQTNFO0FBQXNGLGVBQUssRUFBRUQsTUFBTSxDQUFDRCxRQUFwRztBQUE4RyxrQkFBUSxFQUFFRTtBQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBT0E7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBWUM7O0dBdkNvQkwsTTtVQUNzQkMsb0Q7OztLQUR0QkQsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnbkluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICBTaWduSW4oKXtcbiAgICBjb25zdCB7aW5wdXRzLCBoYW5kbGVDaGFuZ2UgLCByZXNldEZvcm19ID0gdXNlRm9ybSh7XG4gICAgICAgIGVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDonJ1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcbiAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG5cbiAgICAgICAgIC8vU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaFFMIEFQSVxuICAgIH1cblxuICAgIC8vVGhlIHBhc3N3b3JkIGlzIHN1Ym1pdHRlZCBvdmVyIHRoZSBuZXR3b3JrIHRvIHlvdXIgc2VydmVyIGluIGNsZWFyIHRleHQgYnV0IHRoZW4gd2hhdCBoYXBwZW5zIGlzIHRoZSBzZXJ2ZXIgaGFzaGVzIGl0IGNvbXBhcmVzIGl0IHRvIHdoYXQgaXQgaGFzIGluIGZpbGUgZm9yIGl0cyBvd24gaGFzaFxuICAgIC8vQ09uY2VybiAtIFdlIGFyZSBzZW5kaW5nIG91ciBwYXNzd29yZCBpbiBjbGVhciB0ZXh0ICBhbmQgXG4gICAgLy8gQU5kIHRoYW4gdGhhdCdzIHdoeSB3ZSB1c2UgSFRUUFMgICAgXG5cbiAgICAvLyBXSGF0IEhUVFBTIGRvZXMgaXMgbWFrZXMgdGhlIHBhY2tldHMgZW5jcnlwdGVkXG4gICAgLy9DbGllbnQgXG4gICAgLy8tLVxuICAgIC8vcGFja2V0cyBnbyB0aHJvdWdoIFxuICAgIC8veW91ciAgIHdpZmkgcm91dGVyIGlzcCAgb3IgZ292ZXJubWVudFxuICAgIC8vLS1cbiAgICAvL1NlcnZlclxuXG5cbiAgICAvL21ldGhvZCBQT1NUIGFsc28gZG9lcyd0IGxldCB0aGUgdXJsIGhhdmUgdGhlIGlucHV0IGFmdGVyIHN1Ym1pdCBvZiB0aGUgaW5wdXRcbiAgICByZXR1cm4gPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+IFxuICAgICAgICA8aDI+U2lnbiBJbnRvIFlvdXIgQWNjb3VudDwvaDI+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcnJlc3NcIiBhdXRvQ29tcGxldGU9XCJlbWFpbFwiIHZhbHVlPXtpbnB1dHMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZFxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCIgdmFsdWU9e2lucHV0cy5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbiE8L2J1dHRvbj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignIn.js\n");

/***/ })

})