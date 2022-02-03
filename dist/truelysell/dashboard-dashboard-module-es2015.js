(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "2ghS":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "5tTL":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("     <ngx-spinner\r\n  bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-triangle-path\"\r\n  [fullScreen]=\"true\"\r\n  ><p style=\"color: white\">Loading...</p></ngx-spinner\r\n>\r\n<!-- Page Header -->\r\n<div class=\"page-header\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<h3 class=\"page-title\">Welcome {{userr?.name}} <span style=\"color:#ff0080;\">!</span></h3>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- /Page Header -->\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-3 col-sm-6 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"dash-widget-header\">\r\n\t\t\t\t\t<span class=\"dash-widget-icon bg-primary\">\r\n\t\t\t\t\t\t<i class=\"far fa-user\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<div class=\"dash-widget-info\">\r\n\t\t\t\t\t\t<h3>{{nameOfUser}}</h3>\r\n\t\t\t\t\t\t<h6 class=\"text-muted\">Users</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"dash-widget-header\">\r\n\t\t\t\t\t<span class=\"dash-widget-icon bg-primary\">\r\n\t\t\t\t\t\t<i class=\"fas fa-laptop\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<div class=\"dash-widget-info\">\r\n\t\t\t\t\t\t<h3>{{numOfProducts}}</h3>\r\n\t\t\t\t\t\t<h6 class=\"text-muted\">Products</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"dash-widget-header\">\r\n\t\t\t\t\t<span class=\"dash-widget-icon bg-primary\">\r\n\t\t\t\t\t\t<i class=\"fas fa-cog\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<div class=\"dash-widget-info\">\r\n\t\t\t\t\t\t<h3>{{numOfTests}}</h3>\r\n\t\t\t\t\t\t<h6 class=\"text-muted\">Tested</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"dash-widget-header\">\r\n\t\t\t\t\t<span class=\"dash-widget-icon bg-primary\">\r\n\t\t\t\t\t\t<i class=\"fas fa-cog\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<div class=\"dash-widget-info\">\r\n\t\t\t\t\t\t<h3>{{numOfMaintained}}</h3>\r\n\t\t\t\t\t\t<h6 class=\"text-muted\">Maintained</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 d-flex\">\r\n\r\n\t\t<!-- Recent Products -->\r\n\t\t<div class=\"card card-table flex-fill\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Recent Products</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body admin_dash\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<!-- <table class=\"table table-center\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Serial Number</th>\r\n\t\t\t\t\t\t\t\t<th>Model</th>\r\n\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let product of lastFiveProducts\">\r\n\t\t\t\t\t\t\t\t<td class=\"text-nowrap\">{{product.serialNumber}}</td>\r\n\r\n\t\t\t\t\t\t\t\t<td class=\"text-nowrap\">{{product.model}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{product.addedAt |date: 'dd/MM/yyyy'}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"badge bg-success inv-badge\">{{product.status}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"font-weight-600\">{{product.quantity}}</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table> -->\r\n\r\n\t\t\t\t\t<nz-table #basicTable [nzData]=\"lastFiveProducts\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t<th>Serial Number</th>\r\n\t\t\t\t\t\t\t\t<th>Model</th>\r\n\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t  <tr *ngFor=\"let data of basicTable.data\">\r\n\t\t\t\t\t\t\t<td class=\"text-nowrap\">{{data.serialNumber}}</td>\r\n\r\n\t\t\t\t\t\t\t\t<td class=\"text-nowrap\">{{data.model}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{data.addedAt |date: 'dd/MM/yyyy'}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"badge bg-success inv-badge\">{{data.status}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t  </nz-table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /Recent Products -->\r\n\r\n\t</div>\r\n\t<div class=\"col-md-6 d-flex\">\r\n\r\n\t\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "MXfZ":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "o8Ft");




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "o8Ft":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "5tTL");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "2ghS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "9q+E");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/employee.service */ "026R");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/product.service */ "lXKC");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "CHqn");









// import { NgxSpinnerService } from 'ngx-spinner';
let DashboardComponent = class DashboardComponent {
    constructor(
    // private spinner: NgxSpinnerService,
    service, _EmployeeService, _ProductService, _UserService) {
        this.service = service;
        this._EmployeeService = _EmployeeService;
        this._ProductService = _ProductService;
        this._UserService = _UserService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Failed', 'Try Again Later', 'error').then((res) => {
            location.reload();
        });
    }
    //  showSpinner() {
    //   this.spinner.show();
    //   setTimeout(() => {
    //     this.spinner.hide();
    //   }, 2000);
    // }
    ngOnInit() {
        // this.showSpinner()
        this._UserService
            .getProfile({
            id: localStorage.getItem('id'),
            type: localStorage.getItem('name'),
        })
            .subscribe((res) => {
            console.log(res);
            this.userr = res;
        }, (error) => { });
        this._EmployeeService.getUsersCount().subscribe((res) => {
            this.nameOfUser = res;
            console.log(res);
        }, (error) => { });
        this._EmployeeService.getProductsCount().subscribe((res) => {
            this.numOfProducts = res;
        }, (error) => { });
        this._EmployeeService.getTestsCount().subscribe((res) => {
            this.numOfTests = res;
        }, (error) => { });
        this._EmployeeService.getMaintainedCount().subscribe((res) => {
            this.numOfMaintained = res;
        }, (error) => { });
        this._ProductService.getLastFiveProducts().subscribe((res) => {
            this.lastFiveProducts = res;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "pBKm":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "MXfZ");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "o8Ft");
/* harmony import */ var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ng-zoro.module */ "LkBz");






// import { NgxSpinnerModule } from 'ngx-spinner';
let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_5__["DemoNgZorroAntdModule"]
        ],
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map