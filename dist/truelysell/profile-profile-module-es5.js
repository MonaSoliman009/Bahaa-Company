(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "G65X":
    /*!*********************************************************!*\
      !*** ./src/app/admin/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function G65X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.component */
      "t/mg");

      var routes = [{
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfileRoutingModule);
      /***/
    },

    /***/
    "LDTH":
    /*!*****************************************************!*\
      !*** ./src/app/admin/profile/profile.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function LDTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "UuuG":
    /*!*************************************************!*\
      !*** ./src/app/admin/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function UuuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.component */
      "t/mg");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-routing.module */
      "G65X");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      })], ProfileModule);
      /***/
    },

    /***/
    "e5/l":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function e5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xl-8 offset-xl-2\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body profile-menu\">\r\n                <ul class=\"nav nav-tabs nav-tabs-solid\" role=\"tablist\">\r\n                    <li class=\"nav-item home_tab\">\r\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#profile_settings\" role=\"tab\"\r\n                            aria-selected=\"false\">\r\n                            Profile Settings\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item home_add\">\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#change_password\" role=\"tab\" aria-selected=\"false\">\r\n                            Change password\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n\r\n                    <!-- Profile Tab -->\r\n                    <div class=\"tab-pane fade show active\" id=\"profile_settings\" role=\"tabpanel\">\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\" [value]=\"user?.name\" disabled >\r\n                        </div>\r\n                        <form>\r\n                        \r\n                            <div class=\"form-group\">\r\n                                <label>Profile Image</label>\r\n                                <div class=\"media align-items-center\">\r\n                                    <div class=\"media-left\">\r\n                                        <img class=\"rounded-circle profile-img avatar-view-img\"\r\n                                            [src]=\"(user?.img||user?.image)?(user?.img||user?.image):'assets/img/user.jpg'\" alt=\"\" width=\"100\" height=\"100\">\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <div class=\"uploader\">\r\n                                            <!-- <button class=\"btn btn-secondary btn-sm ml-3\">Change profile\r\n                                               picture</button> -->\r\n                                               \r\n                                               <div class=\"custom-file col-md-4 ml-2\">\r\n                                                <input (change)=\"onFileChange($event)\"  type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\r\n                                                <label style=\"border-color:#ff0080\" class=\"custom-file-label\" >change image</label>\r\n                                              </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mt-4 save-form\">\r\n                                <button class=\"btn btn-primary save-btn\" (click)=\"saveImage()\" type=\"button\">Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!-- /Profile Tab -->\r\n\r\n                    <!-- Password Tab -->\r\n                    <div class=\"tab-pane fade\" id=\"change_password\" role=\"tabpanel\">\r\n                        <form [formGroup]=\"form\">\r\n                            <div class=\"form-group\">\r\n                                <label>Current Password</label>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"current\" [ngClass]=\"{\r\n                                    'is-invalid': submitted2 && form.controls.current.errors\r\n                                  }\">\r\n                                  <div\r\n                                  class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                                  *ngIf=\"submitted2 && form.controls.current.errors\"\r\n                                >\r\n                                 Field is required\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>New Password</label>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{\r\n                                    'is-invalid': submitted2 && form.controls.password.errors\r\n                                  }\">\r\n                                  <div\r\n                                  class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                                  *ngIf=\"submitted2 && form.controls.password.errors\"\r\n                                >\r\n                                 Field is required\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Repeat Password</label>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"rpassword\" [ngClass]=\"{\r\n                                    'is-invalid': submitted2 && form.controls.rpassword.errors\r\n                                  }\">\r\n                                  <div\r\n                                  class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                                  *ngIf=\"submitted2 &&form.controls.rpassword.errors\"\r\n                                >\r\n                                 Field is required\r\n                                </div>\r\n                                <div\r\n                                class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                                *ngIf=\"submitted2 &&\r\n                                (form.controls.password.errors ||\r\n                                  password !== confirmpassword)\"\r\n                              >\r\n                               password and repeat passwoed should be identical\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"mt-4 save-form\">\r\n                                <button class=\"btn save-btn btn-primary\" (click)=\"onSubmit()\" type=\"submit\">Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!-- /Password Tab -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "t/mg":
    /*!****************************************************!*\
      !*** ./src/app/admin/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function tMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "e5/l");
      /* harmony import */


      var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.css */
      "LDTH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(_UserService, _fb) {
          _classCallCheck(this, ProfileComponent);

          this._UserService = _UserService;
          this._fb = _fb;
          this.formData = new FormData();
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._UserService.getProfile({
              id: localStorage.getItem('id'),
              type: localStorage.getItem('name')
            }).subscribe(function (res) {
              console.log(res);
              _this.user = res;
            }, function (error) {});

            this.creteForm();
          }
        }, {
          key: "creteForm",
          value: function creteForm() {
            this.form = this._fb.group({
              current: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              rpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            if (event.target.files && event.target.files[0]) {
              console.log(event.target.files[0]);
              console.log(event.target.files[0].name);
              this.formData.append('image', event.target.files[0], event.target.files[0].name);
              this.formData.append('id', localStorage.getItem('id'));
              this.formData.append('type', localStorage.getItem('name'));
            }
          }
        }, {
          key: "alertWithFail",
          value: function alertWithFail(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', msg, 'error').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "alertWithSuccess",
          value: function alertWithSuccess(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Done', msg, 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "saveImage",
          value: function saveImage() {
            var _this2 = this;

            this._UserService.uploadImage(this.formData).subscribe(function (res) {
              console.log(res);

              _this2.alertWithSuccess("Saved Successfully");
            }, function (error) {
              _this2.alertWithFail("Try Again Later");
            });
          }
        }, {
          key: "password",
          get: function get() {
            return this.form.get("password").value;
          }
        }, {
          key: "confirmpassword",
          get: function get() {
            return this.form.get("rpassword").value;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.submitted2 = true;

            if (this.form.valid && this.password === this.confirmpassword) {
              console.log(this.form.value.password);

              this._UserService.resetPassword(localStorage.getItem('id'), {
                type: localStorage.getItem('name'),
                password: this.form.value.password
              }).subscribe(function (res) {
                if (res == "user not exit") {
                  _this3.alertWithFail("user not exit");
                }

                _this3.alertWithSuccess("Saved Successfully");

                console.log(res);
              }, function (error) {
                _this3.alertWithFail("Try Again Later");
              });
            }
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfileComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map