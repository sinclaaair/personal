webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/skinch/personal/components/head.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Head = function Head(_ref) {\n  var children = _ref.children,\n      title = _ref.title;\n  var grid = \"\\n    +---+---+---+---+---+\\n    |\\xB9  |\\xB2  |\\xB3  |\\u2074  |\\u2075  | \\n    +---+---+---+---+---+\\n    |\\u2076  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2077  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2078  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2079  |   |   |   |   |\\n    +---+---+---+---+---+\\n    \"; // const across = `\n  // ACROSS\n  // 1.\n  // 6.\n  // 7.\n  // 8.\n  // 9.\n  // `\n\n  var across = ['1. asdf', '6. asdf', '7. asdf', '8. asdf', '9. asdf']; // const down = `\n  // DOWN\n  // 1.\n  // 2.\n  // 3.\n  // 4.\n  // 5.\n  // `\n\n  var down = ['1. asdf', '2. asdf', '3. asdf', '4. asdf', '5. asdf'];\n  console.log(grid); // console.table({ across, down })\n\n  var clues = {\n    across: across,\n    down: down\n  };\n  console.table(across, down); // window.PLAY = `\\nACROSS\\n2. garbage\\n\\nDOWN\\n3. trash\\n`\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, title), children));\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkLmpzP2I1NzciXSwibmFtZXMiOlsiSGVhZCIsImNoaWxkcmVuIiwidGl0bGUiLCJncmlkIiwiYWNyb3NzIiwiZG93biIsImNvbnNvbGUiLCJsb2ciLCJjbHVlcyIsInRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2xDLE1BQU1DLElBQUksNFZBQVYsQ0FEa0MsQ0FlbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxDQUFmLENBeEJrQyxDQTBCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxDQUFiO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBckNrQyxDQXNDbEM7O0FBQ0EsTUFBTUssS0FBSyxHQUFHO0FBQUVKLFVBQU0sRUFBTkEsTUFBRjtBQUFVQyxRQUFJLEVBQUpBO0FBQVYsR0FBZDtBQUNBQyxTQUFPLENBQUNHLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQkMsSUFBdEIsRUF4Q2tDLENBMENsQzs7QUFFQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxXQUFPLEVBQUMsdUNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBTUk7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFdBQU8sRUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFILEtBQVIsQ0FSSixFQVVLRCxRQVZMLENBREosQ0FESjtBQWdCSCxDQTVERDs7S0FBTUQsSTtBQThEU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIZWFkID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcbiAgICBjb25zdCBncmlkID0gYFxuICAgICstLS0rLS0tKy0tLSstLS0rLS0tK1xuICAgIHzCuSAgfMKyICB8wrMgIHzigbQgIHzigbUgIHwgXG4gICAgKy0tLSstLS0rLS0tKy0tLSstLS0rXG4gICAgfOKBtiAgfCAgIHwgICB8ICAgfCAgIHxcbiAgICArLS0tKy0tLSstLS0rLS0tKy0tLStcbiAgICB84oG3ICB8ICAgfCAgIHwgICB8ICAgfFxuICAgICstLS0rLS0tKy0tLSstLS0rLS0tK1xuICAgIHzigbggIHwgICB8ICAgfCAgIHwgICB8XG4gICAgKy0tLSstLS0rLS0tKy0tLSstLS0rXG4gICAgfOKBuSAgfCAgIHwgICB8ICAgfCAgIHxcbiAgICArLS0tKy0tLSstLS0rLS0tKy0tLStcbiAgICBgXG5cbiAgICAvLyBjb25zdCBhY3Jvc3MgPSBgXG4gICAgLy8gQUNST1NTXG4gICAgLy8gMS5cbiAgICAvLyA2LlxuICAgIC8vIDcuXG4gICAgLy8gOC5cbiAgICAvLyA5LlxuICAgIC8vIGBcblxuICAgIGNvbnN0IGFjcm9zcyA9IFsnMS4gYXNkZicsICc2LiBhc2RmJywgJzcuIGFzZGYnLCAnOC4gYXNkZicsICc5LiBhc2RmJ11cblxuICAgIC8vIGNvbnN0IGRvd24gPSBgXG4gICAgLy8gRE9XTlxuICAgIC8vIDEuXG4gICAgLy8gMi5cbiAgICAvLyAzLlxuICAgIC8vIDQuXG4gICAgLy8gNS5cbiAgICAvLyBgXG5cbiAgICBjb25zdCBkb3duID0gWycxLiBhc2RmJywgJzIuIGFzZGYnLCAnMy4gYXNkZicsICc0LiBhc2RmJywgJzUuIGFzZGYnXVxuXG4gICAgY29uc29sZS5sb2coZ3JpZClcbiAgICAvLyBjb25zb2xlLnRhYmxlKHsgYWNyb3NzLCBkb3duIH0pXG4gICAgY29uc3QgY2x1ZXMgPSB7IGFjcm9zcywgZG93biB9XG4gICAgY29uc29sZS50YWJsZShhY3Jvc3MsIGRvd24pXG5cbiAgICAvLyB3aW5kb3cuUExBWSA9IGBcXG5BQ1JPU1NcXG4yLiBnYXJiYWdlXFxuXFxuRE9XTlxcbjMuIHRyYXNoXFxuYFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPE5leHRIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9OZXh0SGVhZD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/head.js\n");

/***/ })

})