webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styles.js ***!
  \*****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, ImgWrapper, Indicator, CloseBtn, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlickWrapper\", function() { return SlickWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgWrapper\", function() { return ImgWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseBtn\", function() { return CloseBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Global\", function() { return Global; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\n\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  z-index: 5000;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n\"])));\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  header: 44px;\\n  background: white;\\n  position: relative;\\n  padding: 0;\\n  text-align: center;\\n\\n  & h1 {\\n    margin: 0;\\n    font-size: 17px;\\n    color: #333;\\n    line-height: 44px;\\n  }\\n\"])));\nvar SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: calc(100% - 44px);\\n  background: #090909;\\n\"])));\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 32px;\\n  text-align: center;\\n\\n  & img {\\n    margin: 0 auto;\\n    max-height: 60%;\\n    max-width: 60%;\\n    display: inline-block;\\n  }\\n\"])));\nvar Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\ntext-align: center;\\n\\n& > div {\\n  width: 75px;\\n  height: 30px;\\n  line-height: 30px;\\n  border-radius: 15px\\n  background: $313131;\\n  display: inline-block;\\n  text-align: center;\\n  color: white;\\n  font-size: 15px;\\n}\\n\"])));\nvar CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject6 || (_templateObject6 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  padding: 15px;\\n  line-height: 14px;\\n  cursor: pointer;\\n\"])));\nvar Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject7 || (_templateObject7 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n.slick-slide {\\n  display: inline-block;\\n}\\n,ant-card-cover {\\n  transform: none !important;\\n}\\n\"])));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL3N0eWxlcy5qcz9lZTdlIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiQ2xvc2VCdG4iLCJidXR0b24iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVix5T0FBYjtBQVNBLElBQU1DLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csTUFBVix3VkFBWjtBQWVBLElBQU1DLFlBQVksR0FBR0oseURBQU0sQ0FBQ0MsR0FBVix5TUFBbEI7QUFLQSxJQUFNSSxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsMFNBQWhCO0FBV0EsSUFBTUssU0FBUyxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9YQUFmO0FBZ0JBLElBQU1NLFFBQVEsR0FBR1AseURBQU0sQ0FBQ1EsTUFBViw4UEFBZDtBQVNBLElBQU1DLE1BQU0sR0FBR0MsMkVBQUgscVBBQVoiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlc1pvb20vc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWFkZXI6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICYgaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA2MCU7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiYgPiBkaXYge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweFxuICBiYWNrZ3JvdW5kOiAkMzEzMTMxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4uc2xpY2stc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4sYW50LWNhcmQtY292ZXIge1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImagesZoom/styles.js\n");

/***/ })

})