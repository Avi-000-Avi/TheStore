webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/avinash/Desktop/Projects/TheStore/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    query SEARCH_PRODUCTS_QUERY($searchTerm: string!){\\n        searchTerms:allProducts(where:{\\n            OR: [\\n                {name_contains_i:$searchTerm},\\n                {description_contains_i:$searchTerm},\\n            ] \\n        }){\\n            id\\n            name\\n            photo{\\n                image{\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"])(SEARCH_PRODUCTS_QUERY, {\n    fetchPolicy: 'no-cache'\n  }),\n      _useLazyQuery2 = Object(_home_avinash_Desktop_Projects_TheStore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error;\n\n  Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"resetIdCounter\"])();\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"])({\n    items: [],\n    onInputValueChange: function onInputValueChange() {\n      console.log('Input Change!');\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log('Selected item chagne');\n    }\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for an item',\n        id: 'search',\n        className: 'loading'\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__[\"DropDownItem\"], {\n        children: \"Hii\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__[\"DropDownItem\"], {\n        children: \"Hello\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Search, \"qqTmH+gPd0/f1Li0dvMl6jQOUEA=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"], downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0Msa0RBQUgsbUJBQTNCO0FBbUJlLFNBQVNDLE1BQVQsR0FBaUI7QUFBQTs7QUFBQSxzQkFDZUMsbUVBQVksQ0FDbkRILHFCQURtRCxFQUVuRDtBQUNJSSxlQUFXLEVBQUM7QUFEaEIsR0FGbUQsQ0FEM0I7QUFBQTtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBO0FBQUEsTUFDVEMsT0FEUyxtQkFDVEEsT0FEUztBQUFBLE1BQ0FDLElBREEsbUJBQ0FBLElBREE7QUFBQSxNQUNLQyxLQURMLG1CQUNLQSxLQURMOztBQVE1QkMsa0VBQWM7O0FBUmMscUJBUzRCQyw2REFBVyxDQUFDO0FBQ2hFQyxTQUFLLEVBQUUsRUFEeUQ7QUFFaEVDLHNCQUZnRSxnQ0FFNUM7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSCxLQUorRDtBQUtoRUMsd0JBTGdFLGtDQUsxQztBQUNsQkYsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSDtBQVArRCxHQUFELENBVHZDO0FBQUEsTUFTckJFLFlBVHFCLGdCQVNyQkEsWUFUcUI7QUFBQSxNQVNQQyxhQVRPLGdCQVNQQSxhQVRPO0FBQUEsTUFTUUMsZ0JBVFIsZ0JBU1FBLGdCQVRSOztBQW1CNUIsc0JBQU8scUVBQUMsNkRBQUQ7QUFBQSw0QkFDSCw0R0FBU0EsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0ksZ0dBQVlELGFBQWEsQ0FBQztBQUN0QkUsWUFBSSxFQUFDLFFBRGlCO0FBRXRCQyxtQkFBVyxFQUFDLG9CQUZVO0FBR3RCQyxVQUFFLEVBQUMsUUFIbUI7QUFJdEJDLGlCQUFTLEVBQUM7QUFKWSxPQUFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFTSCxxRUFBQyx5REFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLDhCQUNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBY0g7O0dBakN1QmQsTTtVQUN1QkMsMkQsRUFRYU8scUQ7OztLQVRwQ1IsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHtEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXN9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcblxuY29uc3QgU0VBUkNIX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgkc2VhcmNoVGVybTogc3RyaW5nISl7XG4gICAgICAgIHNlYXJjaFRlcm1zOmFsbFByb2R1Y3RzKHdoZXJlOntcbiAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAge25hbWVfY29udGFpbnNfaTokc2VhcmNoVGVybX0sXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uX2NvbnRhaW5zX2k6JHNlYXJjaFRlcm19LFxuICAgICAgICAgICAgXSBcbiAgICAgICAgfSl7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcGhvdG97XG4gICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCl7XG4gICAgY29uc3QgW2ZpbmRJdGVtcywge2xvYWRpbmcsIGRhdGEsZXJyb3J9XSA9IHVzZUxhenlRdWVyeShcbiAgICAgICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxuICAgICAgICB7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTonbm8tY2FjaGUnLFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJlc2V0SWRDb3VudGVyKCk7XG4gICAgY29uc3Qge2dldE1lbnVQcm9wcywgZ2V0SW5wdXRQcm9wcywgZ2V0Q29tYm9ib3hQcm9wc30gPSB1c2VDb21ib2JveCh7XG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgb25JbnB1dFZhbHVlQ2hhbmdlKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5wdXQgQ2hhbmdlIScpO1xuICAgICAgICB9LFxuICAgICAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGl0ZW0gY2hhZ25lJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxTZWFyY2hTdHlsZXM+XG4gICAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgIHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgICB0eXBlOidzZWFyY2gnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOidTZWFyY2ggZm9yIGFuIGl0ZW0nLFxuICAgICAgICAgICAgICAgIGlkOidzZWFyY2gnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTonbG9hZGluZycsXG4gICAgICAgICAgICB9KX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxuICAgICAgICAgICAgPERyb3BEb3duSXRlbT5IaWk8L0Ryb3BEb3duSXRlbT5cbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW0+SGVsbG88L0Ryb3BEb3duSXRlbT5cbiAgICAgICAgPC9Ecm9wRG93bj5cbiAgICA8L1NlYXJjaFN0eWxlcz5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})