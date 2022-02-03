(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "+7r0":
    /*!***********************************************************!*\
      !*** ./src/app/admin/settings/settings-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsRoutingModule */

    /***/
    function r0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
        return SettingsRoutingModule;
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


      var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.component */
      "AIRd");

      var routes = [{
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
      }];

      var SettingsRoutingModule = function SettingsRoutingModule() {
        _classCallCheck(this, SettingsRoutingModule);
      };

      SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsRoutingModule);
      /***/
    },

    /***/
    "AIRd":
    /*!******************************************************!*\
      !*** ./src/app/admin/settings/settings.component.ts ***!
      \******************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function AIRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.component.html */
      "CWod");
      /* harmony import */


      var _settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.component.css */
      "LTTW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent() {
          _classCallCheck(this, SettingsComponent);
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            window.scroll(0, 0);
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ctorParameters = function () {
        return [];
      };

      SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsComponent);
      /***/
    },

    /***/
    "CWod":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/settings/settings.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CWod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<!-- Page Content -->                \r\n<div class=\"row\">                    \r\n    <div class=\"col-12\">\r\n        <!-- Tab Menu -->\r\n        <nav class=\"user-tabs\">\r\n\t\t\t<ul class=\"nav nav-tabs menu-tabs\">\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link active\" href=\"#settings\" data-toggle=\"tab\">General Settings</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#emailsettings\" data-toggle=\"tab\">Email Settings</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#stripe_payment_gateway\" data-toggle=\"tab\">Payment Gateway</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#sms-settings\" data-toggle=\"tab\">SMS Gateway</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n        </nav>\r\n        <!-- /Tab Menu -->\r\n        <!-- Tab Content -->\r\n        <div class=\"tab-content\">\r\n            <div role=\"tabpanel\" id=\"settings\" class=\"tab-pane fade show active\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xl-3 col-lg-4 col-md-4 settings-tab\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"nav flex-column\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#general\">General</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#push_notification\">Push Notification</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#terms\">Terms & Conditions</a>\r\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link mb-0\" data-toggle=\"tab\" href=\"#privacy\">Privacy</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-9 col-lg-8 col-md-8\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-body p-0\">\r\n\t\t\t\t\t\t\t\t<form> \r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-content pt-0\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!-- General Settings -->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"general\" class=\"tab-pane active\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">General Settings</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Website Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Dreamguy's Technologies\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Details</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Currency</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>USD $ </strong></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Website Logo</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uploader\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-text text-muted small mb-0\">Recommended image size is <b>150px x 150px</b>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/logo.png\" class=\"site-logo\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Favicon</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uploader\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-text text-muted small mb-0\">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-text text-muted small mb-1\">Accepted formats: only png and ico</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/favicon.png\" class=\"fav-icon\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /General Settings -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!-- Push Notification -->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"push_notification\" class=\"tab-pane\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Push Notification</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Firebase Server Key</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>APNS Key</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /Push Notification -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!-- Terms & Conditions -->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"terms\" class=\"tab-pane\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Terms & Conditions</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Page Content</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control content-textarea\" rows=\"4\">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /Terms & Conditions -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!-- Privacy Policy -->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"privacy\" class=\"tab-pane pt-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card mb-0 shadow-none\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Privacy</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Page Content</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control content-textarea\" rows=\"4\">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /Privacy Policy -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body pt-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>  \r\n\t\t\t\t</div>\t\t\t\t         \r\n\t\t\t</div>\r\n            <div role=\"tabpanel\" id=\"emailsettings\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xl-8 col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- Form -->\r\n\t\t\t\t\t\t\t\t<form> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"php_mail\" name=\"gateway_type\" type=\"radio\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"php_mail\">PHP Mail</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"smtp_mail\" name=\"gateway_type\" type=\"radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"smtp_mail\">SMTP</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"phpmail mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email From Address</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Emails From Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"smtpmail\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email From Address</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email Password</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email Host</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Email Port</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mt-4\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t<!-- /Form -->\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>              \r\n\t\t\t</div>\r\n\t\t\t<div role=\"tabpanel\" id=\"stripe_payment_gateway\" class=\"tab-pane fade\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-primary\">Stripe</h4>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Stripe Option</label>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"sandbox\" name=\"gateway_type\" value=\"sandbox\" type=\"radio\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"sandbox\">Sandbox</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"livepaypal\" name=\"gateway_type\" value=\"live\" type=\"radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"livepaypal\">Live</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Gateway Name</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Stripe\" class=\"form-control\" placeholder=\"Gateway Name\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>API Key</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Rest Key</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mt-4\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-link ml-2\">Cancel</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>                \r\n\t\t\t</div>\r\n\t\t\t<div role=\"tabpanel\" id=\"sms-settings\" class=\"tab-pane fade\">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5>Default OTP</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\">You can use default otp <strong>1234</strong> for Tom Burns purpose</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"status-toggle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"default_otp\" class=\"check\" type=\"checkbox\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"default_otp\" class=\"checktoggle\">checkbox</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Nexmo</h4>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>API Key</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>API Secret Key</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Sender ID</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mt-4\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary center-block\">Save Changes</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>                \r\n\t\t\t</div>\r\n        </div>\r\n        <!-- /Tab Content -->\r\n    </div>\r\n</div>\t\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "LTTW":
    /*!*******************************************************!*\
      !*** ./src/app/admin/settings/settings.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function LTTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "zwdw":
    /*!***************************************************!*\
      !*** ./src/app/admin/settings/settings.module.ts ***!
      \***************************************************/

    /*! exports provided: SettingsModule */

    /***/
    function zwdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
        return SettingsModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings-routing.module */
      "+7r0");
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./settings.component */
      "AIRd");

      var SettingsModule = function SettingsModule() {
        _classCallCheck(this, SettingsModule);
      };

      SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]]
      })], SettingsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map