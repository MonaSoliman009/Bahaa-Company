(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"], {
    /***/
    "5VBm":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/forget-password/forget-password.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function VBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Lphz":
    /*!********************************************************************!*\
      !*** ./src/app/admin/forget-password/forget-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgetPasswordComponent */

    /***/
    function Lphz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "vWAb");
      /* harmony import */


      var _forget_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forget-password.component.css */
      "5VBm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent() {
          _classCallCheck(this, ForgetPasswordComponent);
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ctorParameters = function () {
        return [];
      };

      ForgetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forget_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgetPasswordComponent);
      /***/
    },

    /***/
    "NPu7":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/forget-password/forget-password-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ForgetPasswordRoutingModule */

    /***/
    function NPu7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordRoutingModule", function () {
        return ForgetPasswordRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget-password.component */
      "Lphz");

      var routes = [{
        path: '',
        component: _forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"]
      }];

      var ForgetPasswordRoutingModule = function ForgetPasswordRoutingModule() {
        _classCallCheck(this, ForgetPasswordRoutingModule);
      };

      ForgetPasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgetPasswordRoutingModule);
      /***/
    },

    /***/
    "gSUA":
    /*!*****************************************************************!*\
      !*** ./src/app/admin/forget-password/forget-password.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgetPasswordModule */

    /***/
    function gSUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordModule", function () {
        return ForgetPasswordModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget-password.component */
      "Lphz");
      /* harmony import */


      var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forget-password-routing.module */
      "NPu7");

      var ForgetPasswordModule = function ForgetPasswordModule() {
        _classCallCheck(this, ForgetPasswordModule);
      };

      ForgetPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordRoutingModule"]]
      })], ForgetPasswordModule);
      /***/
    },

    /***/
    "vWAb":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/forget-password/forget-password.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vWAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-wrapper\">\r\n\r\n  <div class=\"login-page\">\r\n    <div class=\"login-body container\">\r\n      <div class=\"loginbox\">\r\n        <div class=\"login-right-wrap\">\r\n          <div class=\"account-header\">\r\n            <div class=\"account-logo text-center mb-4\">\r\n              <a href=\"index.html\">\r\n                <img src=\"assets/img/logo-icon.png\" alt=\"\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"login-header\">\r\n            <h3>Forgot Password? <span>Truelysell</span></h3>\r\n            <p class=\"text-muted\">Enter your email to get a password reset link</p>\r\n          </div>\r\n          <form action=\"index.html\">\r\n            <div class=\"form-group mb-4\">\r\n              <label class=\"control-label\">Email</label>\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter your mail id\">\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-primary btn-block account-btn\" type=\"submit\">Reset Password</button>\r\n            </div>\r\n          </form>\r\n\r\n\r\n              <div class=\"text-center dont-have\">Remember your password? <a href=\"login.html\">Login</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forget-password-forget-password-module-es5.js.map