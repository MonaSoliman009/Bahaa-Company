(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
    /***/
    "50Zj":
    /*!***********************************************************!*\
      !*** ./src/app/admin/services/services-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ServicesRoutingModule */

    /***/
    function Zj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function () {
        return ServicesRoutingModule;
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


      var _services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services.component */
      "WLd7");

      var routes = [{
        path: '',
        component: _services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"]
      }];

      var ServicesRoutingModule = function ServicesRoutingModule() {
        _classCallCheck(this, ServicesRoutingModule);
      };

      ServicesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicesRoutingModule);
      /***/
    },

    /***/
    "GCaP":
    /*!***************************************************!*\
      !*** ./src/app/admin/services/services.module.ts ***!
      \***************************************************/

    /*! exports provided: SpecialitiesModule */

    /***/
    function GCaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpecialitiesModule", function () {
        return SpecialitiesModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services.component */
      "WLd7");
      /* harmony import */


      var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services-routing.module */
      "50Zj"); // import { DataTablesModule } from 'angular-datatables';


      var SpecialitiesModule = function SpecialitiesModule() {
        _classCallCheck(this, SpecialitiesModule);
      };

      SpecialitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
      })], SpecialitiesModule);
      /***/
    },

    /***/
    "WLd7":
    /*!******************************************************!*\
      !*** ./src/app/admin/services/services.component.ts ***!
      \******************************************************/

    /*! exports provided: ServicesComponent */

    /***/
    function WLd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
        return ServicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./services.component.html */
      "nKMk");
      /* harmony import */


      var _services_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services.component.css */
      "cghJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common-service.service */
      "1+kh");

      var ServicesComponent = /*#__PURE__*/function () {
        function ServicesComponent(commonService) {
          _classCallCheck(this, ServicesComponent);

          this.commonService = commonService;
          this.services = [];
        }

        _createClass(ServicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getServices();
          }
        }, {
          key: "getServices",
          value: function getServices() {
            var _this = this;

            this.commonService.getServices().subscribe(function (res) {
              _this.services = res; // $(function () {
              //   $('table').DataTable();
              // });
            }, function (error) {
              return _this.errorMessage = error;
            });
          }
        }]);

        return ServicesComponent;
      }();

      ServicesComponent.ctorParameters = function () {
        return [{
          type: _common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceService"]
        }];
      };

      ServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServicesComponent);
      /***/
    },

    /***/
    "cghJ":
    /*!*******************************************************!*\
      !*** ./src/app/admin/services/services.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function cghJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "nKMk":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/services/services.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function nKMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-center mb-0 datatable\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Service</th>\r\n                                <th>Location</th>\r\n                                <th>Category</th>\r\n                                <th>Amount</th>\r\n                                <th>Date</th>\r\n                                <th>Status</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let service of services\">\r\n                                <td>1</td>\r\n                                <td>\r\n                                    <a href=\"javascript:void(0)\">\r\n                                        <img class=\"rounded service-img mr-1\" src=\"{{service.service_img}}\" alt=\"\"> {{service.service_name}}\r\n                                    </a>\r\n                                </td>\r\n                                <td>{{service.country}}</td>\r\n                                <td>{{service.name}}</td>\r\n                                <td>{{service.amount}}</td>\r\n                                <td>{{service.date | date : 'dd MMM yyyy'}}</td>\r\n                                <td>\r\n                                    <div class=\"status-toggle\">\r\n                                        <input id=\"service_1\" class=\"check\" type=\"checkbox\">\r\n                                        <label for=\"service_1\" class=\"checktoggle\">checkbox</label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-sm bg-info-light\">\r\n                                        <i class=\"far fa-eye mr-1\"></i> View\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=services-services-module-es5.js.map