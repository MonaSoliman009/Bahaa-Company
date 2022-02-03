(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "+WYx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/employee-report/employee-report.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <!-- Tab Menu -->\n    <nav class=\"user-tabs\">\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\n        <li>\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">Employees Report </a>\n        </li>\n       \n      </ul>\n    </nav>\n    <!-- /Tab Menu -->\n    <!-- Tab Content -->\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" id=\"all\" class=\"tab-pane fade show active\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                  <nz-table #basicTable [nzData]=\"users\">\n                    <thead>\n                      <tr>\n                     \n                     \n                        <th>Name</th>\n                        <th>Email</th>\n                   \n                        <th>Daily Report</th>\n                        <th>Monthly Report</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let data of basicTable.data\">\n                        <td>\n                          <h2 class=\"table-avatar\">\n                              <a href=\"javascript:void(0);\" class=\"avatar avatar-sm mr-2\">\n                                  <img class=\"avatar-img rounded-circle\" src=\"assets/img/user.jpg\" alt=\"User Image\">\n                              </a>\n                              <a href=\"javascript:void(0);\">{{data.name}}</a>\n                          </h2>\n                      </td>\n                        <td>{{data.email}}</td>\n                        <!-- <td>{{product.ProductDetails[0].status}}</td> -->\n                  \n                        <td class=\"text-right\">\n                          <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewDailyDetails(data._id)\">\n                            View Daily Report\n                          </a>\n                        </td>\n                        <td class=\"text-right\">\n                          <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewMonthlyDetails(data._id)\">\n                            View Monthly Report\n                          </a>\n                        </td>\n                   \n                      </tr>\n                    </tbody>\n                  </nz-table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n    <!-- /Tab Content -->\n  </div>\n</div>\n<!-- /Page Content -->\n");

/***/ }),

/***/ "+ZsA":
/*!*************************************************************************!*\
  !*** ./src/app/admin/reports/good-products/good-products.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29kLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "001Q":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/reports/missing-pieces-details/missing-pieces-details.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW5nLXBpZWNlcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "0zVL":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/reports/defective-product-details/defective-product-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DefectiveProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectiveProductDetailsComponent", function() { return DefectiveProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_defective_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./defective-product-details.component.html */ "tdNV");
/* harmony import */ var _defective_product_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defective-product-details.component.css */ "JRT/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let DefectiveProductDetailsComponent = class DefectiveProductDetailsComponent {
    constructor(route, _ReportsService) {
        this.route = route;
        this._ReportsService = _ReportsService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.getDefectiveProductDetails(this.code);
    }
    getDefectiveProductDetails(_id) {
        this._ReportsService.listdefectiveProductDetails(_id).subscribe((res) => {
            console.log(res);
            this.defectiveProductDetails = res;
            this.d = new Date(`${res.ProductDetails[0].addedAt}`);
            this.convertedDate = this.d.toLocaleDateString();
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
};
DefectiveProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] }
];
DefectiveProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-defective-product-details',
        template: _raw_loader_defective_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_defective_product_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefectiveProductDetailsComponent);



/***/ }),

/***/ "1cXN":
/*!***************************************************************************!*\
  !*** ./src/app/admin/reports/missing-pieces/missing-pieces.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW5nLXBpZWNlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "2lRk":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/reports/sold-product-detials/sold-product-detials.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SoldProductDetialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoldProductDetialsComponent", function() { return SoldProductDetialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sold_product_detials_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sold-product-detials.component.html */ "MUqS");
/* harmony import */ var _sold_product_detials_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sold-product-detials.component.css */ "bTiG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let SoldProductDetialsComponent = class SoldProductDetialsComponent {
    constructor(route, _ReportsService) {
        this.route = route;
        this._ReportsService = _ReportsService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.getSoldProductDetails(this.code);
    }
    getSoldProductDetails(_id) {
        this._ReportsService.listSoldProductDetails(_id).subscribe((res) => {
            console.log(res);
            this.soldProductDetails = res;
            this.d = new Date(`${res.ProductDetails[0].addedAt}`);
            this.convertedDate = this.d.toLocaleDateString();
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
};
SoldProductDetialsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] }
];
SoldProductDetialsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sold-product-detials',
        template: _raw_loader_sold_product_detials_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sold_product_detials_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoldProductDetialsComponent);



/***/ }),

/***/ "4Zb0":
/*!**************************************************************************!*\
  !*** ./src/app/admin/reports/missing-pieces/missing-pieces.component.ts ***!
  \**************************************************************************/
/*! exports provided: MissingPiecesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingPiecesComponent", function() { return MissingPiecesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_missing_pieces_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./missing-pieces.component.html */ "A++W");
/* harmony import */ var _missing_pieces_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missing-pieces.component.css */ "1cXN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let MissingPiecesComponent = class MissingPiecesComponent {
    constructor(_ReportsService, router) {
        this._ReportsService = _ReportsService;
        this.router = router;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.missingPiecesReport();
    }
    missingPiecesReport() {
        this._ReportsService.listMissingPiecesReport().subscribe((res) => {
            console.log(res);
            this.missingPieces = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
    viewProductDetails(x) {
        this.router.navigate(["admin/reports/missing-pieces-details", x]);
    }
};
MissingPiecesComponent.ctorParameters = () => [
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MissingPiecesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-missing-pieces',
        template: _raw_loader_missing_pieces_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_missing_pieces_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MissingPiecesComponent);



/***/ }),

/***/ "4tEv":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/reports/defective-products/defective-products.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZlY3RpdmUtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "7K70":
/*!*************************************************!*\
  !*** ./src/app/admin/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zoro.module */ "LkBz");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-routing.module */ "qAH0");
/* harmony import */ var _good_products_good_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./good-products/good-products.component */ "UjT7");
/* harmony import */ var _defective_products_defective_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defective-products/defective-products.component */ "CAHQ");
/* harmony import */ var _missing_pieces_missing_pieces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./missing-pieces/missing-pieces.component */ "4Zb0");
/* harmony import */ var _employee_report_employee_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-report/employee-report.component */ "dmxw");
/* harmony import */ var _sold_products_sold_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sold-products/sold-products.component */ "vMPs");
/* harmony import */ var _good_product_details_good_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./good-product-details/good-product-details.component */ "FjN8");
/* harmony import */ var _defective_product_details_defective_product_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defective-product-details/defective-product-details.component */ "0zVL");
/* harmony import */ var _sold_product_detials_sold_product_detials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sold-product-detials/sold-product-detials.component */ "2lRk");
/* harmony import */ var _employee_daily_report_employee_daily_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-daily-report/employee-daily-report.component */ "HQeY");
/* harmony import */ var _employee_monthly_report_employee_monthly_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-monthly-report/employee-monthly-report.component */ "lBDS");
/* harmony import */ var _missing_pieces_details_missing_pieces_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./missing-pieces-details/missing-pieces-details.component */ "cs0C");
















let ReportsModule = class ReportsModule {
};
ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _good_products_good_products_component__WEBPACK_IMPORTED_MODULE_5__["GoodProductsComponent"],
            _defective_products_defective_products_component__WEBPACK_IMPORTED_MODULE_6__["DefectiveProductsComponent"],
            _missing_pieces_missing_pieces_component__WEBPACK_IMPORTED_MODULE_7__["MissingPiecesComponent"],
            _employee_report_employee_report_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeReportComponent"],
            _sold_products_sold_products_component__WEBPACK_IMPORTED_MODULE_9__["SoldProductsComponent"],
            _good_product_details_good_product_details_component__WEBPACK_IMPORTED_MODULE_10__["GoodProductDetailsComponent"],
            _defective_product_details_defective_product_details_component__WEBPACK_IMPORTED_MODULE_11__["DefectiveProductDetailsComponent"],
            _sold_product_detials_sold_product_detials_component__WEBPACK_IMPORTED_MODULE_12__["SoldProductDetialsComponent"],
            _employee_daily_report_employee_daily_report_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeDailyReportComponent"],
            _employee_monthly_report_employee_monthly_report_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeMonthlyReportComponent"],
            _missing_pieces_details_missing_pieces_details_component__WEBPACK_IMPORTED_MODULE_15__["MissingPiecesDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportsRoutingModule"],
            src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_3__["DemoNgZorroAntdModule"]
        ]
    })
], ReportsModule);



/***/ }),

/***/ "8FHF":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/reports/good-product-details/good-product-details.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29kLXByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "A++W":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/missing-pieces/missing-pieces.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <!-- Tab Menu -->\n    <nav class=\"user-tabs\">\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\n        <li>\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\"\n            >All Missing Pieces </a\n          >\n        </li>\n       \n      </ul>\n    </nav>\n    <!-- /Tab Menu -->\n    <!-- Tab Content -->\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" id=\"all\" class=\"tab-pane fade show active\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                  <nz-table #basicTable [nzData]=\"missingPieces\">\n                    <thead>\n                      <tr>\n                     \n                        <th>Serial Number</th>\n                        <th>Added To</th>\n                        <th>Taken From</th>\n                        <th>At time</th>\n                        <th>Maintainer</th>\n                        <th>Details</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let data of basicTable.data\">\n                        <td>{{data.missingPiece}}</td>\n                        <td>{{data.addedToSerial}}</td>\n                        <td>{{data.takenFromSerial}}</td>\n                        <td>{{data.atTime |date:'medium'}}</td>\n                        <td *ngIf=\"data?.creatorEmployee.length\">{{data?.creatorEmployee[0].name}}</td>\n                        <td *ngIf=\"data?.creatorAccountant.length\">{{data?.creatorAccountant[0].name}} </td>\n                        <td *ngIf=\"data?.creatorOwner.length\">{{data?.creatorOwner[0].name }}</td>\n                        <td >\n                          <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewProductDetails(data._id)\">\n                            View all details\n                          </a>\n                        </td>\n                   \n                      </tr>\n                    </tbody>\n                  </nz-table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n    <!-- /Tab Content -->\n  </div>\n</div>\n<!-- /Page Content -->\n\n");

/***/ }),

/***/ "AlPY":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/reports/employee-daily-report/employee-daily-report.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kYWlseS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "CAHQ":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/reports/defective-products/defective-products.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DefectiveProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectiveProductsComponent", function() { return DefectiveProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_defective_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./defective-products.component.html */ "HmRb");
/* harmony import */ var _defective_products_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defective-products.component.css */ "4tEv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let DefectiveProductsComponent = class DefectiveProductsComponent {
    constructor(_ReportsService, router) {
        this._ReportsService = _ReportsService;
        this.router = router;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.getDefectiveProductsReport();
    }
    getDefectiveProductsReport() {
        this._ReportsService.listdefectiveProductsReport().subscribe((res) => {
            console.log(res);
            this.defectiveProducts = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    viewProductDetails(_id) {
        this.router.navigate(["admin/reports/defective-products-details", _id]);
    }
};
DefectiveProductsComponent.ctorParameters = () => [
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DefectiveProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-defective-products',
        template: _raw_loader_defective_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_defective_products_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefectiveProductsComponent);



/***/ }),

/***/ "FjN8":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/reports/good-product-details/good-product-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GoodProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodProductDetailsComponent", function() { return GoodProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_good_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./good-product-details.component.html */ "GaAH");
/* harmony import */ var _good_product_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./good-product-details.component.css */ "8FHF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let GoodProductDetailsComponent = class GoodProductDetailsComponent {
    constructor(route, _ReportsService) {
        this.route = route;
        this._ReportsService = _ReportsService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.getGoodProductDetails(this.code);
    }
    getGoodProductDetails(_id) {
        this._ReportsService.listGoodProductDetails(_id).subscribe((res) => {
            console.log(res);
            this.goodProductDetails = res;
            this.d = new Date(`${res.ProductDetails[0].addedAt}`);
            this.convertedDate = this.d.toLocaleDateString();
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
};
GoodProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] }
];
GoodProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-good-product-details',
        template: _raw_loader_good_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_good_product_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoodProductDetailsComponent);



/***/ }),

/***/ "GaAH":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/good-product-details/good-product-details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n    <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"pricing-header\">\n                    <h3 style=\"color: #ff0080\">Product Details</h3>\n\n                    <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n                    <!-- <p>Monthly Price</p> -->\n                </div>\n                <div class=\"pricing-card-price\">\n                    <h3 class=\"heading2 price\">{{goodProductDetails?.ProductDetails[0].model}}</h3>\n                    <h3 class=\"heading2 price\">{{goodProductDetails?.ProductDetails[0].serialNumber}}</h3>\n\n                    <p>Added At: <span>{{convertedDate}}</span></p>\n                </div>\n                <ul class=\"pricing-options\">\n                    <li><i class=\"far fa-check-circle\"></i> {{goodProductDetails?.ProductDetails[0].status}}</li>\n                </ul>\n                <a [routerLink]=\"'/admin/reports/good-products'\" class=\"btn btn-primary btn-block\">Back</a>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n</div>");

/***/ }),

/***/ "HQeY":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/reports/employee-daily-report/employee-daily-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmployeeDailyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDailyReportComponent", function() { return EmployeeDailyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_daily_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-daily-report.component.html */ "Qmd1");
/* harmony import */ var _employee_daily_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-daily-report.component.css */ "AlPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ "026R");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);








let EmployeeDailyReportComponent = class EmployeeDailyReportComponent {
    constructor(route, _ReportsService, _EmployeeService) {
        this.route = route;
        this._ReportsService = _ReportsService;
        this._EmployeeService = _EmployeeService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.d = new Date();
        console.log(this.code);
        this.convertedDate = this.d.toISOString().slice(0, 10);
        this.getDailyTested(this.code, this.convertedDate);
        this.getDailymaintainedInside(this.code, this.convertedDate);
        this.getDailymaintainedOutside(this.code, this.convertedDate);
        this.getEmployee(this.code);
    }
    getEmployee(_id) {
        this._EmployeeService.getEmployeeById(_id).subscribe((res) => {
            this.employee = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailyTested(_id, date) {
        this._ReportsService.dailyEmployeeReportTesting(_id, date).subscribe((res) => {
            this.testedProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailymaintainedInside(_id, date) {
        this._ReportsService.dailyEmployeeReportmaintainedInside(_id, date).subscribe((res) => {
            this.maintainedInsideProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailymaintainedOutside(_id, date) {
        this._ReportsService.dailyEmployeeReportmaintainedOutside(_id, date).subscribe((res) => {
            this.maintainedOutsideProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
};
EmployeeDailyReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] }
];
EmployeeDailyReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-daily-report',
        template: _raw_loader_employee_daily_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_daily_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeDailyReportComponent);



/***/ }),

/***/ "HmRb":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/defective-products/defective-products.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <!-- Tab Menu -->\n    <nav class=\"user-tabs\">\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\n        <li>\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">All Defective Products</a\n          >\n        </li>\n       \n      </ul>\n    </nav>\n    <!-- /Tab Menu -->\n    <!-- Tab Content -->\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" id=\"all\" class=\"tab-pane fade show active\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                \n<nz-table #basicTable [nzData]=\"defectiveProducts\">\n  <thead>\n    <tr>\n   \n      <th>Serial Number</th>\n      <th>Model</th>\n     \n      <th>Status</th>\n      <th>View Details</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of basicTable.data\">\n      <td>{{data.ProductDetails[0].serialNumber}}</td>\n      <td>{{data.ProductDetails[0].model}}</td>\n    \n      <td>{{data.ProductDetails[0].status}}</td>\n\n      <td >\n        <a class=\"table-action-btn  btn btn-sm bg-success-light\" (click)=\"viewProductDetails(data._id)\">\n          View all details\n        </a>\n      </td>\n \n    </tr>\n  </tbody>\n</nz-table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n     \n    </div>\n    <!-- /Tab Content -->\n  </div>\n</div>\n<!-- /Page Content -->\n\n");

/***/ }),

/***/ "JRT/":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/reports/defective-product-details/defective-product-details.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZlY3RpdmUtcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "MUqS":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/sold-product-detials/sold-product-detials.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n    <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"pricing-header\">\n                    <h3 style=\"color: #ff0080\">Product Details</h3>\n\n                    <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n                    <!-- <p>Monthly Price</p> -->\n                </div>\n                <div class=\"pricing-card-price\">\n                    <h3 class=\"heading2 price\">{{soldProductDetails?.ProductDetails[0].model}}</h3>\n                    <h3 class=\"heading2 price\">{{soldProductDetails?.ProductDetails[0].serialNumber}}</h3>\n\n                    <p>Added At: <span>{{convertedDate}}</span></p>\n                </div>\n                <ul class=\"pricing-options\">\n                    <li><i class=\"far fa-check-circle\"></i> {{soldProductDetails?.ProductDetails[0].status}}</li>\n                </ul>\n                <a [routerLink]=\"'/admin/reports/sold-products'\" class=\"btn btn-primary btn-block\">Back</a>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n</div>");

/***/ }),

/***/ "Qmd1":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/employee-daily-report/employee-daily-report.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page Content -->                \n<div class=\"row\">                    \n    <div class=\"col-12\">\n        <div class=\"pricing-header\">\n            <h2 style=\"color:#e60073\" class=\"mb-4\">{{employee?.name}}</h2>\n            <!-- <p>{{testedProducts.length+maintainedInsideProducts.length+maintainedOutsideProducts.length}}</p> -->\n        </div>\n        <!-- Tab Menu -->\n        <nav class=\"user-tabs\">\n\t\t\t<ul class=\"nav nav-tabs menu-tabs\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link active\" href=\"#TestedProducts\" data-toggle=\"tab\">Tested Products</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#MaintainedInsideProducts\" data-toggle=\"tab\">Maintained Inside Products</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#MaintainedOutsideProducts\" data-toggle=\"tab\">Maintained Outside Products</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t</ul>\n        </nav>\n        <!-- /Tab Menu -->\n        <!-- Tab Content -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" id=\"TestedProducts\" class=\"tab-pane fade show active\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of testedProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>\t\t\t\t         \n\t\t\t</div>\n            <div role=\"tabpanel\" id=\"MaintainedInsideProducts\" class=\"tab-pane fade\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of maintainedInsideProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>              \n\t\t\t</div>\n\t\t\t<div role=\"tabpanel\" id=\"MaintainedOutsideProducts\" class=\"tab-pane fade\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of maintainedOutsideProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>                \n\t\t\t</div>\n\t\t\n        </div>\n        <!-- /Tab Content -->\n    </div>\n</div>\t\n<!-- /Page Content -->");

/***/ }),

/***/ "SKpW":
/*!*************************************************************************!*\
  !*** ./src/app/admin/reports/sold-products/sold-products.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xkLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "TllI":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/good-products/good-products.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <nav class=\"user-tabs\">\n  <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\n    <li>\n      <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">All Good Products</a\n      >\n    </li>\n   \n  </ul>\n</nav>\n<nz-table #basicTable [nzData]=\"goodProducts\">\n  <thead>\n    <tr>\n   \n      <th>Serial Number</th>\n      <th>Model</th>\n    \n      <th>Status</th>\n      <th>View Details</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of basicTable.data\">\n      <td>{{data.ProductDetails[0].serialNumber}}</td>\n    <td>{{data.ProductDetails[0].model}}</td>\n    \n    <td>{{data.ProductDetails[0].status}}</td>\n\n    <td class=\"text-right\">\n      <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewProductDetails(data._id)\">\n        View all details\n      </a>\n    </td>\n \n    </tr>\n  </tbody>\n</nz-table>");

/***/ }),

/***/ "UjT7":
/*!************************************************************************!*\
  !*** ./src/app/admin/reports/good-products/good-products.component.ts ***!
  \************************************************************************/
/*! exports provided: GoodProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodProductsComponent", function() { return GoodProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_good_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./good-products.component.html */ "TllI");
/* harmony import */ var _good_products_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./good-products.component.css */ "+ZsA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let GoodProductsComponent = class GoodProductsComponent {
    constructor(_ReportsService, router) {
        this._ReportsService = _ReportsService;
        this.router = router;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.getGoodProductsReport();
    }
    getGoodProductsReport() {
        this._ReportsService.listGoodProductsReport().subscribe((res) => {
            console.log(res);
            this.goodProducts = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
    viewProductDetails(x) {
        this.router.navigate(["admin/reports/good-products-details", x]);
    }
};
GoodProductsComponent.ctorParameters = () => [
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GoodProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-good-products',
        template: _raw_loader_good_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_good_products_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoodProductsComponent);



/***/ }),

/***/ "bTiG":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/reports/sold-product-detials/sold-product-detials.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xkLXByb2R1Y3QtZGV0aWFscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "cs0C":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/reports/missing-pieces-details/missing-pieces-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MissingPiecesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingPiecesDetailsComponent", function() { return MissingPiecesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_missing_pieces_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./missing-pieces-details.component.html */ "y82I");
/* harmony import */ var _missing_pieces_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missing-pieces-details.component.css */ "001Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let MissingPiecesDetailsComponent = class MissingPiecesDetailsComponent {
    constructor(route, _ReportsService) {
        this.route = route;
        this._ReportsService = _ReportsService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.missingPiecesDetails(this.code);
    }
    missingPiecesDetails(_id) {
        this._ReportsService.listMissingPiecesDetails(_id).subscribe((res) => {
            console.log(res);
            this.missingPiece = res;
            // this.d=new Date(`${res.ProductDetails[0].addedAt}`);
            // this.convertedDate=this.d.toLocaleDateString();
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
};
MissingPiecesDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] }
];
MissingPiecesDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-missing-pieces-details',
        template: _raw_loader_missing_pieces_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_missing_pieces_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MissingPiecesDetailsComponent);



/***/ }),

/***/ "dmxw":
/*!****************************************************************************!*\
  !*** ./src/app/admin/reports/employee-report/employee-report.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeReportComponent", function() { return EmployeeReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-report.component.html */ "+WYx");
/* harmony import */ var _employee_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-report.component.css */ "sDSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-service.service */ "1+kh");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "026R");







let EmployeeReportComponent = class EmployeeReportComponent {
    constructor(commonService, _EmployeeService, router) {
        this.commonService = commonService;
        this._EmployeeService = _EmployeeService;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.getEmployees();
    }
    getEmployees() {
        this._EmployeeService.getApproveEmployee().subscribe((res) => {
            console.log(res);
            this.users = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => (this.errorMessage = error));
    }
    viewDailyDetails(_id) {
        this.router.navigate(["admin/reports/employees-daily-report", _id]);
    }
    viewMonthlyDetails(_id) {
        this.router.navigate(["admin/reports/employees-monthly-report", _id]);
    }
};
EmployeeReportComponent.ctorParameters = () => [
    { type: src_app_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceService"] },
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmployeeReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-report',
        template: _raw_loader_employee_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeReportComponent);



/***/ }),

/***/ "lBDS":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/reports/employee-monthly-report/employee-monthly-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmployeeMonthlyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeMonthlyReportComponent", function() { return EmployeeMonthlyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_monthly_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-monthly-report.component.html */ "vnN0");
/* harmony import */ var _employee_monthly_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-monthly-report.component.css */ "mC1b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ "026R");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);








let EmployeeMonthlyReportComponent = class EmployeeMonthlyReportComponent {
    constructor(route, _ReportsService, _EmployeeService) {
        this.route = route;
        this._ReportsService = _ReportsService;
        this._EmployeeService = _EmployeeService;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.d = new Date();
        this.currentMonth = this.d.getMonth() + 1;
        console.log(this.currentMonth);
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.getEmployee(this.code);
        this.getDailyTested(this.code, this.currentMonth);
        this.getDailymaintainedInside(this.code, this.currentMonth);
        this.getDailymaintainedOutside(this.code, this.currentMonth);
    }
    getEmployee(_id) {
        this._EmployeeService.getEmployeeById(_id).subscribe((res) => {
            this.employee = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailyTested(_id, month) {
        this._ReportsService.monthlyEmployeeReportTesting(_id, month).subscribe((res) => {
            this.testedProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailymaintainedInside(_id, month) {
        this._ReportsService.monthlyEmployeeReportmaintainedInside(_id, month).subscribe((res) => {
            this.maintainedInsideProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
    getDailymaintainedOutside(_id, month) {
        this._ReportsService.monthlyEmployeeReportmaintainedOutside(_id, month).subscribe((res) => {
            this.maintainedOutsideProducts = res;
            console.log(res);
        }, (error) => {
            console.log(error);
            this.alertWithFail();
        });
    }
};
EmployeeMonthlyReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] }
];
EmployeeMonthlyReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-monthly-report',
        template: _raw_loader_employee_monthly_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_monthly_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeMonthlyReportComponent);



/***/ }),

/***/ "mC1b":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/reports/employee-monthly-report/employee-monthly-report.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1tb250aGx5LXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "qAH0":
/*!*********************************************************!*\
  !*** ./src/app/admin/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _defective_product_details_defective_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defective-product-details/defective-product-details.component */ "0zVL");
/* harmony import */ var _defective_products_defective_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defective-products/defective-products.component */ "CAHQ");
/* harmony import */ var _employee_daily_report_employee_daily_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-daily-report/employee-daily-report.component */ "HQeY");
/* harmony import */ var _employee_monthly_report_employee_monthly_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-monthly-report/employee-monthly-report.component */ "lBDS");
/* harmony import */ var _employee_report_employee_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-report/employee-report.component */ "dmxw");
/* harmony import */ var _good_product_details_good_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./good-product-details/good-product-details.component */ "FjN8");
/* harmony import */ var _good_products_good_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./good-products/good-products.component */ "UjT7");
/* harmony import */ var _missing_pieces_details_missing_pieces_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./missing-pieces-details/missing-pieces-details.component */ "cs0C");
/* harmony import */ var _missing_pieces_missing_pieces_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./missing-pieces/missing-pieces.component */ "4Zb0");
/* harmony import */ var _sold_product_detials_sold_product_detials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sold-product-detials/sold-product-detials.component */ "2lRk");
/* harmony import */ var _sold_products_sold_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sold-products/sold-products.component */ "vMPs");














const routes = [
    {
        path: 'good-products',
        component: _good_products_good_products_component__WEBPACK_IMPORTED_MODULE_9__["GoodProductsComponent"]
    },
    {
        path: 'good-products-details/:_id',
        component: _good_product_details_good_product_details_component__WEBPACK_IMPORTED_MODULE_8__["GoodProductDetailsComponent"]
    },
    {
        path: 'defective-products',
        component: _defective_products_defective_products_component__WEBPACK_IMPORTED_MODULE_4__["DefectiveProductsComponent"]
    },
    {
        path: 'defective-products-details/:_id',
        component: _defective_product_details_defective_product_details_component__WEBPACK_IMPORTED_MODULE_3__["DefectiveProductDetailsComponent"]
    },
    {
        path: 'missing-pieces',
        component: _missing_pieces_missing_pieces_component__WEBPACK_IMPORTED_MODULE_11__["MissingPiecesComponent"]
    },
    {
        path: 'missing-pieces-details/:_id',
        component: _missing_pieces_details_missing_pieces_details_component__WEBPACK_IMPORTED_MODULE_10__["MissingPiecesDetailsComponent"]
    },
    {
        path: 'employees',
        component: _employee_report_employee_report_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeReportComponent"]
    },
    {
        path: 'employees-daily-report/:_id',
        component: _employee_daily_report_employee_daily_report_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDailyReportComponent"]
    },
    {
        path: 'employees-monthly-report/:_id',
        component: _employee_monthly_report_employee_monthly_report_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeMonthlyReportComponent"]
    },
    {
        path: 'sold-products',
        component: _sold_products_sold_products_component__WEBPACK_IMPORTED_MODULE_13__["SoldProductsComponent"]
    },
    {
        path: 'sold-products-details/:_id',
        component: _sold_product_detials_sold_product_detials_component__WEBPACK_IMPORTED_MODULE_12__["SoldProductDetialsComponent"]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "sDSZ":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/reports/employee-report/employee-report.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "tdNV":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/defective-product-details/defective-product-details.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n    <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"pricing-header\">\n                    <h3 style=\"color: #ff0080\">Product Details</h3>\n\n                    <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n                    <!-- <p>Monthly Price</p> -->\n                </div>\n                <div class=\"pricing-card-price\">\n                    <h3 class=\"heading2 price\">{{defectiveProductDetails?.ProductDetails[0].model}}</h3>\n                    <h3 class=\"heading2 price\">{{defectiveProductDetails?.ProductDetails[0].serialNumber}}</h3>\n\n                    <p>Added At: <span>{{convertedDate}}</span></p>\n                </div>\n                <ul class=\"pricing-options\">\n                    <li><i class=\"far fa-check-circle\"></i> {{defectiveProductDetails?.ProductDetails[0].status}}</li>\n                </ul>\n                <a [routerLink]=\"'/admin/reports/defective-products'\" class=\"btn btn-primary btn-block\">Back</a>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n</div>");

/***/ }),

/***/ "ud+C":
/*!***************************************************!*\
  !*** ./src/app/admin/services/reports.service.ts ***!
  \***************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ReportsService = class ReportsService {
    constructor(http) {
        this.http = http;
    }
    listGoodProductsReport() {
        return this.http.get('http://162.240.5.234:3000/goodProductsReport/list');
    }
    listGoodProductDetails(_id) {
        return this.http.get('http://162.240.5.234:3000/goodProductsReport/list/' + _id);
    }
    listdefectiveProductsReport() {
        return this.http.get('http://162.240.5.234:3000/defectiveProductsReport/list');
    }
    listdefectiveProductDetails(_id) {
        return this.http.get('http://162.240.5.234:3000/defectiveProductsReport/list/' + _id);
    }
    listSoldProductsReport() {
        return this.http.get('http://162.240.5.234:3000/soldProducts/list');
    }
    listSoldProductDetails(_id) {
        return this.http.get('https://162.240.5.234:3000/soldProducts/list/' + _id);
    }
    dailyEmployeeReportTesting(_id, date) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/tested/${_id}/${date}`);
    }
    monthlyEmployeeReportTesting(_id, month) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/tested/${_id}/${month}`);
    }
    dailyEmployeeReportmaintainedInside(_id, date) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/maintainedInside/${_id}/${date}`);
    }
    monthlyEmployeeReportmaintainedInside(_id, month) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/maintainedInside/${_id}/${month}`);
    }
    dailyEmployeeReportmaintainedOutside(_id, date) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/maintainedOutside/${_id}/${date}`);
    }
    monthlyEmployeeReportmaintainedOutside(_id, month) {
        return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/maintainedOutside/${_id}/${month}`);
    }
    listMissingPiecesReport() {
        return this.http.get('http://162.240.5.234:3000/missingPiecesReport/list');
    }
    listMissingPiecesDetails(_id) {
        return this.http.get('http://162.240.5.234:3000/missingPiecesReport/list/' + _id);
    }
};
ReportsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ReportsService);



/***/ }),

/***/ "vFQh":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/sold-products/sold-products.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"row\">\n    <div class=\"col-12\">\n      <!-- Tab Menu -->\n      <nav class=\"user-tabs\">\n        <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\n          <li>\n            <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\"\n              >All Sold Products</a\n            >\n          </li>\n         \n        </ul>\n      </nav>\n      <!-- /Tab Menu -->\n      <!-- Tab Content -->\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" id=\"all\" class=\"tab-pane fade show active\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <nz-table #basicTable [nzData]=\"soldProducts\">\n                      <thead>\n                        <tr>\n                       \n                          <th>Serial Number</th>\n                                            <th>Model</th>\n                                            <th>Status</th>\n                                            <th>View Details</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let data of basicTable.data\">\n                          <td>{{data.ProductDetails[0]?.serialNumber}}</td>\n                          <td>{{data.ProductDetails[0]?.model}}</td>\n                          <td>{{data.ProductDetails[0]?.status}}</td>\n                  \n                          <td class=\"text-right\">\n                            <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewProductDetails(data._id)\">\n                              View all details\n                            </a>\n                          </td>\n                     \n                        </tr>\n                      </tbody>\n                    </nz-table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n       \n      </div>\n      <!-- /Tab Content -->\n    </div>\n  </div>\n  <!-- /Page Content -->\n");

/***/ }),

/***/ "vMPs":
/*!************************************************************************!*\
  !*** ./src/app/admin/reports/sold-products/sold-products.component.ts ***!
  \************************************************************************/
/*! exports provided: SoldProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoldProductsComponent", function() { return SoldProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sold_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sold-products.component.html */ "vFQh");
/* harmony import */ var _sold_products_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sold-products.component.css */ "SKpW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reports.service */ "ud+C");







let SoldProductsComponent = class SoldProductsComponent {
    constructor(_ReportsService, router) {
        this._ReportsService = _ReportsService;
        this.router = router;
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', "Try Again Later", 'error').then((res) => {
            location.reload();
        });
    }
    ngOnInit() {
        this.getSoldProductsReport();
    }
    getSoldProductsReport() {
        this._ReportsService.listSoldProductsReport().subscribe((res) => {
            console.log(res);
            this.soldProducts = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => {
            // console.log(error)
            this.alertWithFail();
        });
    }
    viewProductDetails(_id) {
        this.router.navigate(["admin/reports/sold-products-details", _id]);
    }
};
SoldProductsComponent.ctorParameters = () => [
    { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SoldProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sold-products',
        template: _raw_loader_sold_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sold_products_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoldProductsComponent);



/***/ }),

/***/ "vnN0":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/employee-monthly-report/employee-monthly-report.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Page Content -->                \n<div class=\"row\">                    \n    <div class=\"col-12\">\n        <div class=\"pricing-header\">\n            <h2 style=\"color:#e60073\" class=\"mb-4\">{{employee?.name}}</h2>\n            \n            <!-- <p>{{testedProducts.length+maintainedInsideProducts.length+maintainedOutsideProducts.length}}</p> -->\n        </div>\n        <!-- Tab Menu -->\n        <nav class=\"user-tabs\">\n\t\t\t<ul class=\"nav nav-tabs menu-tabs\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link active\" href=\"#TestedProducts\" data-toggle=\"tab\">Tested Products</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#MaintainedInsideProducts\" data-toggle=\"tab\">Maintained Inside Products</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#MaintainedOutsideProducts\" data-toggle=\"tab\">Maintained Outside Products</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t</ul>\n        </nav>\n        <!-- /Tab Menu -->\n        <!-- Tab Content -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" id=\"TestedProducts\" class=\"tab-pane fade show active\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of testedProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>\t\t\t\t         \n\t\t\t</div>\n            <div role=\"tabpanel\" id=\"MaintainedInsideProducts\" class=\"tab-pane fade\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of maintainedInsideProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>              \n\t\t\t</div>\n\t\t\t<div role=\"tabpanel\" id=\"MaintainedOutsideProducts\" class=\"tab-pane fade\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-lg-6 col-xl-5\" *ngFor=\"let product of maintainedOutsideProducts\">\n                        <div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"pricing-header\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n\t\t\t\t\t\t\t\t\t<!-- <p>Monthly Price</p> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"pricing-card-price\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].model}}</h3>\n\t\t\t\t\t\t\t\t\t<h3 class=\"heading2 price\">{{product?.ProductDetails[0].serialNumber}}</h3>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>Added At: <span>{{product?.ProductDetails[0].addedAt | date:'medium' }}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"pricing-options\">\n\t\t\t\t\t\t\t\t\t<li><i class=\"far fa-check-circle\"></i> {{product?.ProductDetails[0].status}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n\t\t\t\t</div>                \n\t\t\t</div>\n\t\t\n        </div>\n        <!-- /Tab Content -->\n    </div>\n</div>\t\n<!-- /Page Content -->");

/***/ }),

/***/ "y82I":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/missing-pieces-details/missing-pieces-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n  <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"pricing-header\">\n          <h3 style=\"color: #ff0080\">Missing Piece Details</h3>\n\n          <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n          <!-- <p>Monthly Price</p> -->\n        </div>\n        <div class=\"pricing-card-price\">\n          <p>Taken From Product:</p>\n          <h6 class=\"heading2 price\">{{ missingPiece?.takenFrom[0].model }}</h6>\n          <h6 class=\"heading2 price\">\n            {{ missingPiece?.takenFrom[0].serialNumber }}\n          </h6>\n          <h6 class=\"heading2 price\">\n            <i class=\"far fa-check-circle\"></i\n            >{{ missingPiece?.takenFrom[0].status }}\n          </h6>\n          <hr />\n          <p>Added To Product:</p>\n          <h6 class=\"heading2 price\">{{ missingPiece?.addedTo[0].model }}</h6>\n          <h6 class=\"heading2 price\">\n            {{ missingPiece?.addedTo[0].serialNumber }}\n          </h6>\n          <h6 class=\"heading2 price\">\n            <i class=\"far fa-check-circle\"></i\n            >{{ missingPiece?.addedTo[0].status }}\n          </h6>\n          <hr />\n          <div *ngIf=\"missingPiece?.creatorEmployee.length\">\n            <p>Maintainer:</p>\n            <h6 class=\"heading2 price\">{{ missingPiece?.creatorEmployee[0].name }}</h6>\n           \n            <hr />\n          </div>\n          <div *ngIf=\"missingPiece?.creatorAccountant.length\">\n            <p>Maintainer:</p>\n            <h6 class=\"heading2 price\">{{ missingPiece?.creatorAccountant[0].name }}</h6>\n           \n            <hr />\n          </div>\n          <div *ngIf=\"missingPiece?.creatorOwner.length\">\n            <p>Maintainer:</p>\n            <h6 class=\"heading2 price\">{{ missingPiece?.creatorOwner[0].name }}</h6>\n           \n            <hr />\n          </div>\n          <p>\n            Missing At: <span>{{ missingPiece?.atTime | date: \"medium\" }}</span>\n          </p>\n        </div>\n    \n        <a\n          [routerLink]=\"'/admin/reports/missing-pieces'\"\n          class=\"btn btn-primary btn-block\"\n          >Back</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map