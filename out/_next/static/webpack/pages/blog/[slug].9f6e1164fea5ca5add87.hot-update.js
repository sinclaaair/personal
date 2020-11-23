webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/skinch/personal/components/Post.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n // import ReactHtmlParser, {\n//     processNodes,\n//     convertNodeToElement,\n// } from 'react-html-parser'\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var _renderNode;\n\n  var slug = _ref.slug,\n      date = _ref.date,\n      title = _ref.title,\n      tags = _ref.tags,\n      body = _ref.body,\n      fold = _ref.fold;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      puzzOpen = _useState[0],\n      setPuzzOpen = _useState[1];\n\n  console.log({\n    body: body\n  });\n  var options = {\n    renderNode: (_renderNode = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].PARAGRAPH, function (node, children) {\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }\n      }, children.map(function (c, i) {\n        return c.slice(0, 7) !== '<iframe' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 33\n          }\n        }, c) : __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 33\n          }\n        }, fold && __jsx(\"button\", {\n          className: \"puzzbutton\",\n          onClick: function onClick() {\n            setPuzzOpen(!puzzOpen);\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 41\n          }\n        }, puzzOpen ? 'close' : 'play'), __jsx(\"span\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n          className: \"puzzleme \".concat(puzzOpen ? 'puzzOpen' : 'puzzClosed')\n        }, (!fold || puzzOpen) && {\n          dangerouslySetInnerHTML: {\n            __html: c\n          }\n        }, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 37\n          }\n        })));\n      }));\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].EMBEDDED_ASSET, function (node) {\n      var _node$data$target$fie = node.data.target.fields,\n          title = _node$data$target$fie.title,\n          description = _node$data$target$fie.description,\n          file = _node$data$target$fie.file;\n      var mimeType = file.contentType;\n      var mimeGroup = mimeType.split('/')[0];\n\n      switch (mimeGroup) {\n        case 'image':\n          return __jsx(\"img\", {\n            title: title || null,\n            alt: description || null,\n            src: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 29\n            }\n          });\n\n        case 'application':\n          return __jsx(\"a\", {\n            alt: description || null,\n            href: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 29\n            }\n          }, title || file.details.fileName);\n\n        default:\n          return __jsx(\"span\", {\n            style: {\n              backgroundColor: 'red',\n              color: 'white'\n            },\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 29\n            }\n          }, ' ', mimeType, \" embedded asset\", ' ');\n      }\n    }), _renderNode)\n  };\n  return __jsx(\"div\", {\n    className: \"post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, fold ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog/\".concat(slug),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 25\n    }\n  }, title)) : title), date && __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 17\n    }\n  }, new Date(date).toLocaleDateString('en-US', {\n    weekday: 'long',\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  }), tags && tags.map(function (tag) {\n    return __jsx(\"span\", {\n      className: \"tag\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 43\n      }\n    }, tag);\n  })), __jsx(\"div\", {\n    className: \"post-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__[\"documentToReactComponents\"])(body, options)));\n};\n\n_s(Post, \"bTAjS20bUW+lkDR6lHNDwJC2J28=\");\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzP2I1MGUiXSwibmFtZXMiOlsiUG9zdCIsInNsdWciLCJkYXRlIiwidGl0bGUiLCJ0YWdzIiwiYm9keSIsImZvbGQiLCJ1c2VTdGF0ZSIsInB1enpPcGVuIiwic2V0UHV6ek9wZW4iLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJlbmRlck5vZGUiLCJCTE9DS1MiLCJQQVJBR1JBUEgiLCJub2RlIiwiY2hpbGRyZW4iLCJtYXAiLCJjIiwiaSIsInNsaWNlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJFTUJFRERFRF9BU1NFVCIsImRhdGEiLCJ0YXJnZXQiLCJmaWVsZHMiLCJkZXNjcmlwdGlvbiIsImZpbGUiLCJtaW1lVHlwZSIsImNvbnRlbnRUeXBlIiwibWltZUdyb3VwIiwic3BsaXQiLCJ1cmwiLCJkZXRhaWxzIiwiZmlsZU5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwidGFnIiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QztBQUFBOztBQUFBOztBQUFBLE1BQTFDQyxJQUEwQyxRQUExQ0EsSUFBMEM7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxLQUFELENBRGM7QUFBQSxNQUMvQ0Ms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Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLeEIsSUFBSSxHQUNELE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGtCQUFXTCxJQUFYLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUUsS0FBSixDQURKLENBREMsR0FLREEsS0FOUixDQURKLEVBVUtELElBQUksSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssSUFBSXFDLElBQUosQ0FBU3JDLElBQVQsRUFBZXNDLGtCQUFmLENBQWtDLE9BQWxDLEVBQTJDO0FBQ3hDQyxXQUFPLEVBQUUsTUFEK0I7QUFFeENDLFFBQUksRUFBRSxTQUZrQztBQUd4Q0MsU0FBSyxFQUFFLE1BSGlDO0FBSXhDQyxPQUFHLEVBQUU7QUFKbUMsR0FBM0MsQ0FETCxFQU9LeEMsSUFBSSxJQUNEQSxJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFDMkIsR0FBRDtBQUFBLFdBQVM7QUFBTSxlQUFTLEVBQUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1QkEsR0FBdkIsQ0FBVDtBQUFBLEdBQVQsQ0FSUixDQVhSLEVBc0JJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxzR0FBeUIsQ0FBQ3pDLElBQUQsRUFBT08sT0FBUCxDQUQ5QixDQXRCSixDQURKO0FBNkJILENBM0dEOztHQUFNWixJOztLQUFBQSxJO0FBNkdTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQkxPQ0tTIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXR5cGVzJ1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcidcbi8vIGltcG9ydCBSZWFjdEh0bWxQYXJzZXIsIHtcbi8vICAgICBwcm9jZXNzTm9kZXMsXG4vLyAgICAgY29udmVydE5vZGVUb0VsZW1lbnQsXG4vLyB9IGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJ1xuXG5jb25zdCBQb3N0ID0gKHsgc2x1ZywgZGF0ZSwgdGl0bGUsIHRhZ3MsIGJvZHksIGZvbGQgfSkgPT4ge1xuICAgIGNvbnN0IFtwdXp6T3Blbiwgc2V0UHV6ek9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zb2xlLmxvZyh7IGJvZHkgfSlcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlbmRlck5vZGU6IHtcbiAgICAgICAgICAgIFtCTE9DS1MuUEFSQUdSQVBIXTogKG5vZGUsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc2xpY2UoMCwgNykgIT09ICc8aWZyYW1lJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+e2N9PC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1enpidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQdXp6T3BlbighcHV6ek9wZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHV6ek9wZW4gPyAnY2xvc2UnIDogJ3BsYXknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHV6emxlbWUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHV6ek9wZW4gPyAncHV6ek9wZW4nIDogJ3B1enpDbG9zZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLigoIWZvbGQgfHwgcHV6ek9wZW4pICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbQkxPQ0tTLkVNQkVEREVEX0FTU0VUXTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZmlsZSB9ID0gbm9kZS5kYXRhLnRhcmdldC5maWVsZHNcbiAgICAgICAgICAgICAgICBjb25zdCBtaW1lVHlwZSA9IGZpbGUuY29udGVudFR5cGVcbiAgICAgICAgICAgICAgICBjb25zdCBtaW1lR3JvdXAgPSBtaW1lVHlwZS5zcGxpdCgnLycpWzBdXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1pbWVHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZGVzY3JpcHRpb24gfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFsdD17ZGVzY3JpcHRpb24gfHwgbnVsbH0gaHJlZj17ZmlsZS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGUgfHwgZmlsZS5kZXRhaWxzLmZpbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW1lVHlwZX0gZW1iZWRkZWQgYXNzZXR7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIHtmb2xkID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICB7ZGF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHt0YWdzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj57dGFnfTwvc3Bhbj4pfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7ZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyhib2R5LCBvcHRpb25zKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPnt0YWdzICYmIHRhZ3Muam9pbignLCAnKX08L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

})