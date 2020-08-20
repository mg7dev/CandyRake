webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var ResourceListWithProducts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListWithProducts, _React$Component);

  var _super = _createSuper(ResourceListWithProducts);

  function ResourceListWithProducts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListWithProducts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListWithProducts, [{
    key: "render",
    value: function render() {
      var app = this.context;

      var redirectToProduct = function redirectToProduct() {
        var redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__["Redirect"].create(app);
        redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__["Redirect"].Action.APP, '/edit-products');
      };

      var twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
        query: GET_PRODUCTS_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('ids')
        }
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return __jsx("div", null, "Loading\u2026");
        if (error) return __jsx("div", null, error.message);
        console.log(data);
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"], {
          showHeader: true,
          resourceName: {
            singular: 'Product',
            plural: 'Products'
          },
          items: data.nodes,
          renderItem: function renderItem(item) {
            var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Thumbnail"], {
              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
              alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
            });

            var price = item.variants.edges[0].node.price;
            return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"].Item, {
              id: item.id,
              media: media,
              accessibilityLabel: "View details for ".concat(item.title),
              onClick: function onClick() {
                store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('item', item);
                redirectToProduct();
              }
            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, {
              fill: true
            }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextStyle"], {
              variation: "strong"
            }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, null, __jsx("p", null, "$", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, null, __jsx("p", null, "Expires on ", twoWeeksFromNow, " "))));
          }
        }));
      });
    }
  }]);

  return ResourceListWithProducts;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJhcHAiLCJjb250ZXh0IiwicmVkaXJlY3RUb1Byb2R1Y3QiLCJyZWRpcmVjdCIsIlJlZGlyZWN0IiwiY3JlYXRlIiwiZGlzcGF0Y2giLCJBY3Rpb24iLCJBUFAiLCJ0d29XZWVrc0Zyb21Ob3ciLCJEYXRlIiwibm93IiwidG9EYXRlU3RyaW5nIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzaW5ndWxhciIsInBsdXJhbCIsIm5vZGVzIiwiaXRlbSIsIm1lZGlhIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwicHJpY2UiLCJ2YXJpYW50cyIsImlkIiwidGl0bGUiLCJzZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7O0lBNkJNQyx3Qjs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFVBQU1DLEdBQUcsR0FBRyxLQUFLQyxPQUFqQjs7QUFDRixVQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsWUFBTUMsUUFBUSxHQUFHQyxxRUFBUSxDQUFDQyxNQUFULENBQWdCTCxHQUFoQixDQUFqQjtBQUNBRyxnQkFBUSxDQUFDRyxRQUFULENBQ0VGLHFFQUFRLENBQUNHLE1BQVQsQ0FBZ0JDLEdBRGxCLEVBRUUsZ0JBRkY7QUFJRCxPQU5EOztBQU9FLFVBQU1DLGVBQWUsR0FBRyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLE9BQXRCLEVBQStCQyxZQUEvQixFQUF4QjtBQUNBLGFBQ0UsTUFBQyxrREFBRDtBQUFPLGFBQUssRUFBRWYsa0JBQWQ7QUFBa0MsaUJBQVMsRUFBRTtBQUFDZ0IsYUFBRyxFQUFFQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFOO0FBQTdDLFNBQ0csZ0JBQTRCO0FBQUEsWUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLFlBQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxZQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDM0IsWUFBSUQsT0FBSixFQUFhLE9BQU8sbUNBQVA7QUFDYixZQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDQyxPQUFaLENBQVA7QUFDWEMsZUFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxlQUNFLE1BQUMsc0RBQUQsUUFDRSxNQUFDLDhEQUFEO0FBQ0Usb0JBQVUsTUFEWjtBQUVFLHNCQUFZLEVBQUU7QUFBRU0sb0JBQVEsRUFBRSxTQUFaO0FBQXVCQyxrQkFBTSxFQUFFO0FBQS9CLFdBRmhCO0FBR0UsZUFBSyxFQUFFUCxJQUFJLENBQUNRLEtBSGQ7QUFJRSxvQkFBVSxFQUFFLG9CQUFBQyxJQUFJLEVBQUk7QUFDbEIsZ0JBQU1DLEtBQUssR0FDVCxNQUFDLDJEQUFEO0FBQ0Usb0JBQU0sRUFDSkQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUQ5QixHQUVJLEVBSlI7QUFNRSxpQkFBRyxFQUNETCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BRDlCLEdBRUk7QUFUUixjQURGOztBQWNBLGdCQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSxtQkFDRSxNQUFDLDhEQUFELENBQWMsSUFBZDtBQUNFLGdCQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLG1CQUFLLEVBQUVSLEtBRlQ7QUFHRSxnQ0FBa0IsNkJBQXNCRCxJQUFJLENBQUNVLEtBQTNCLENBSHBCO0FBSUUscUJBQU8sRUFBRSxtQkFBTTtBQUNickIsZ0VBQUssQ0FBQ3NCLEdBQU4sQ0FBVSxNQUFWLEVBQWtCWCxJQUFsQjtBQUNBdkIsaUNBQWlCO0FBQ2xCO0FBUEgsZUFTRSxNQUFDLHVEQUFELFFBQ0UsTUFBQyx1REFBRCxDQUFPLElBQVA7QUFBWSxrQkFBSTtBQUFoQixlQUNFLGtCQUNFLE1BQUMsMkRBQUQ7QUFBVyx1QkFBUyxFQUFDO0FBQXJCLGVBQ0d1QixJQUFJLENBQUNVLEtBRFIsQ0FERixDQURGLENBREYsRUFRRSxNQUFDLHVEQUFELENBQU8sSUFBUCxRQUNFLHNCQUFLSCxLQUFMLENBREYsQ0FSRixFQVdFLE1BQUMsdURBQUQsQ0FBTyxJQUFQLFFBQ0UsZ0NBQWV2QixlQUFmLE1BREYsQ0FYRixDQVRGLENBREY7QUEyQkQ7QUEvQ0gsVUFERixDQURGO0FBcURELE9BMURILENBREY7QUE4REQ7Ozs7RUExRWtDNEIsNENBQUssQ0FBQ0MsUzs7MEZBQXZDdkMsd0IsaUJBQ2lCd0Msa0U7O0FBMkVOeEMsdUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjE1NDcwMTMyMjBhNzc3OGM1ZDJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBDYXJkICAgLFxyXG4gICAgUmVzb3VyY2VMaXN0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0U3R5bGUsXHJcbiAgICBUaHVtYm5haWwsfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IHJlZGlyZWN0VG9Qcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xyXG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvZWRpdC1wcm9kdWN0cycsXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17e2lkczogc3RvcmUuZ2V0KCdpZHMnKX19PlxyXG4gICAgICAgICAgeyh7ZGF0YSwgbG9hZGluZywgZXJyb3J9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24ge3R3b1dlZWtzRnJvbU5vd30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==