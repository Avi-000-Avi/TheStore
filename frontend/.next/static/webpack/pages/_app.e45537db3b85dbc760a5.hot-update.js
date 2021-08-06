webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoveFromCart; });\n/* harmony import */ var _home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/home/avinash/Desktop/Projects/TheStore/frontend/components/RemoveFromCart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  mutation REMOVE_FROM_CART($id:ID!){\\n    deleteCartItem(id:$id){\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar BigButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n  displayName: \"RemoveFromCart__BigButton\",\n  componentId: \"emvtd6-0\"\n})([\"font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}\"]);\n_c = BigButton;\nvar REMOVE_FROM_CART = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()); //Alternative to Refetch Queries and also faster\n//When you delete an item make sure you refetch the users cart  and we rerender it\n//We don't need to make a second trip to the server\n// Simply pop or evict it from the cache\n//remove an item come back and run update and give us access to both entire apollo cache as well as the information that came back from the API\n//cache.identify(payload.data.deleteCartItem) is like 'CartItem:647298274324823749238'\n//I am pretty sure  what comes back from the server so what i am going to do is immediately \n\nfunction update(cache, payload) {\n  cache.evict(cache.identify(payload.data.deleteCartItem));\n}\n\nfunction RemoveFromCart(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(REMOVE_FROM_CART, {\n    variables: {\n      id: id\n    },\n    update: update,\n    optimisticResponse: {\n      deleteCartItem: {\n        __typename: 'CartItem',\n        id: id\n      }\n    }\n  }),\n      _useMutation2 = Object(_home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      removeFromCart = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(BigButton, {\n    onClick: removeFromCart,\n    disabled: loading,\n    type: \"button\",\n    title: \"Remove this item from the cart\",\n    children: \"\\xD7\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 1\n  }, this);\n}\n\n_s(RemoveFromCart, \"diwVVinnKxVXRpc5BzWjQ9LU4oE=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c2 = RemoveFromCart;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BigButton\");\n$RefreshReg$(_c2, \"RemoveFromCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcz9iMjVlIl0sIm5hbWVzIjpbIkJpZ0J1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIlJFTU9WRV9GUk9NX0NBUlQiLCJncWwiLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZUNhcnRJdGVtIiwiUmVtb3ZlRnJvbUNhcnQiLCJpZCIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInJlbW92ZUZyb21DYXJ0IiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUFmO0tBQU1GLFM7QUFVTixJQUFNRyxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCLEMsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUFzQkMsT0FBdEIsRUFBOEI7QUFDMUJELE9BQUssQ0FBQ0UsS0FBTixDQUFZRixLQUFLLENBQUNHLFFBQU4sQ0FBZUYsT0FBTyxDQUFDRyxJQUFSLENBQWFDLGNBQTVCLENBQVo7QUFDSDs7QUFFYyxTQUFTQyxjQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBSkMsRUFBSSxRQUFKQSxFQUFJOztBQUFBLHFCQUNOQyxrRUFBVyxDQUM1Q1gsZ0JBRDRDLEVBQzNCO0FBQ2RZLGFBQVMsRUFBQztBQUFDRixRQUFFLEVBQUZBO0FBQUQsS0FESTtBQUVkUixVQUFNLEVBQU5BLE1BRmM7QUFHZFcsc0JBQWtCLEVBQUU7QUFDaEJMLG9CQUFjLEVBQUM7QUFDWE0sa0JBQVUsRUFBQyxVQURBO0FBRVhKLFVBQUUsRUFBRkE7QUFGVztBQURDO0FBSE4sR0FEMkIsQ0FETDtBQUFBO0FBQUEsTUFDakNLLGNBRGlDO0FBQUEsTUFDakJDLE9BRGlCLG9CQUNqQkEsT0FEaUI7O0FBYXhDLHNCQUNKLHFFQUFDLFNBQUQ7QUFDTSxXQUFPLEVBQUVELGNBRGY7QUFFTSxZQUFRLEVBQUVDLE9BRmhCO0FBR00sUUFBSSxFQUFDLFFBSFg7QUFHbUIsU0FBSyxFQUFDLGdDQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURJO0FBTUg7O0dBbkJ1QlAsYztVQUNjRSwwRDs7O01BRGRGLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlbW92ZUZyb21DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBCaWdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGZvbnQtc2l6ZTozcmVtO1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBib3JkZXI6MDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjp2YXIoLS1yZWQpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuYDtcblxuY29uc3QgUkVNT1ZFX0ZST01fQ0FSVCA9IGdxbGBcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVCgkaWQ6SUQhKXtcbiAgICBkZWxldGVDYXJ0SXRlbShpZDokaWQpe1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbi8vQWx0ZXJuYXRpdmUgdG8gUmVmZXRjaCBRdWVyaWVzIGFuZCBhbHNvIGZhc3RlclxuLy9XaGVuIHlvdSBkZWxldGUgYW4gaXRlbSBtYWtlIHN1cmUgeW91IHJlZmV0Y2ggdGhlIHVzZXJzIGNhcnQgIGFuZCB3ZSByZXJlbmRlciBpdFxuLy9XZSBkb24ndCBuZWVkIHRvIG1ha2UgYSBzZWNvbmQgdHJpcCB0byB0aGUgc2VydmVyXG4vLyBTaW1wbHkgcG9wIG9yIGV2aWN0IGl0IGZyb20gdGhlIGNhY2hlXG4vL3JlbW92ZSBhbiBpdGVtIGNvbWUgYmFjayBhbmQgcnVuIHVwZGF0ZSBhbmQgZ2l2ZSB1cyBhY2Nlc3MgdG8gYm90aCBlbnRpcmUgYXBvbGxvIGNhY2hlIGFzIHdlbGwgYXMgdGhlIGluZm9ybWF0aW9uIHRoYXQgY2FtZSBiYWNrIGZyb20gdGhlIEFQSVxuLy9jYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlQ2FydEl0ZW0pIGlzIGxpa2UgJ0NhcnRJdGVtOjY0NzI5ODI3NDMyNDgyMzc0OTIzOCdcbi8vSSBhbSBwcmV0dHkgc3VyZSAgd2hhdCBjb21lcyBiYWNrIGZyb20gdGhlIHNlcnZlciBzbyB3aGF0IGkgYW0gZ29pbmcgdG8gZG8gaXMgaW1tZWRpYXRlbHkgXG5cbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSxwYXlsb2FkKXtcbiAgICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlQ2FydEl0ZW0pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVtb3ZlRnJvbUNhcnQoe2lkfSl7XG4gICAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LHtsb2FkaW5nfV09IHVzZU11dGF0aW9uXG4gICAgKFJFTU9WRV9GUk9NX0NBUlQse1xuICAgICAgICB2YXJpYWJsZXM6e2lkfSxcbiAgICAgICAgdXBkYXRlLFxuICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgICAgIGRlbGV0ZUNhcnRJdGVtOntcbiAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOidDYXJ0SXRlbScsXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pOyBcblxuICAgIHJldHVybiAoXG48QmlnQnV0dG9uXG4gICAgICBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH1cbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgdHlwZT1cImJ1dHRvblwidGl0bGU9XCJSZW1vdmUgdGhpcyBpdGVtIGZyb20gdGhlIGNhcnRcIj4mdGltZXM7PC9CaWdCdXR0b24+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RemoveFromCart.js\n");

/***/ })

})