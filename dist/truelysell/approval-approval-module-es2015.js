(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-approval-module"],{

/***/ "2Uc+":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/approval/approve-accountants/approve-accountants.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ApproveAccountantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveAccountantsComponent", function() { return ApproveAccountantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approve_accountants_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approve-accountants.component.html */ "KlSM");
/* harmony import */ var _approve_accountants_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approve-accountants.component.css */ "dhPS");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_accountant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/accountant.service */ "wmwf");






let ApproveAccountantsComponent = class ApproveAccountantsComponent {
    constructor(ser) {
        this.ser = ser;
    }
    ngOnInit() {
        this.ser.getUnApprovedAccountant().subscribe((res) => {
            console.log(res);
            this.id = res === null || res === void 0 ? void 0 : res._id;
            this.ratings = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => (this.errorMessage = error));
    }
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Thank you...', 'succesfully approved!', 'success').then((res) => {
            location.reload();
        });
    }
    approve(id) {
        console.log('id', id);
        this.ser.ApproveAccountant(id).subscribe((res) => {
            console.log('response', res);
            this.alertWithSuccess();
        });
    }
};
ApproveAccountantsComponent.ctorParameters = () => [
    { type: _services_accountant_service__WEBPACK_IMPORTED_MODULE_5__["AccountantService"] }
];
ApproveAccountantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-approve-accountants',
        template: _raw_loader_approve_accountants_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approve_accountants_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApproveAccountantsComponent);



/***/ }),

/***/ "3Sez":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/approval/approve-employees/approve-employees.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZlLWVtcGxveWVlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "FXHH":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/approval/approve-employees/approve-employees.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ApproveEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveEmployeesComponent", function() { return ApproveEmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approve_employees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approve-employees.component.html */ "ybnH");
/* harmony import */ var _approve_employees_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approve-employees.component.css */ "3Sez");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ "026R");






let ApproveEmployeesComponent = class ApproveEmployeesComponent {
    constructor(ser) {
        this.ser = ser;
    }
    ngOnInit() {
        this.ser.getUnApprovedEmployee().subscribe((res) => {
            console.log(res);
            this.emplyee = res;
            console.log(this.emplyee);
            // $(function () {
            //   $('table').DataTable();
            // });
        });
    }
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Thank you...', 'succesfully approved!', 'success').then((res) => {
            location.reload();
        });
    }
    appprove(id) {
        this.ser.ApproveEmployee(id).subscribe((res) => {
            console.log('response', res);
            this.alertWithSuccess();
        });
    }
};
ApproveEmployeesComponent.ctorParameters = () => [
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] }
];
ApproveEmployeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-approve-employees',
        template: _raw_loader_approve_employees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approve_employees_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApproveEmployeesComponent);



/***/ }),

/***/ "KlSM":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approval/approve-accountants/approve-accountants.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-8 m-auto\">\r\n    <nav class=\"user-tabs\">\r\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\r\n        <li>\r\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">Approve Accountants </a>\r\n        </li>\r\n       \r\n      </ul>\r\n    </nav>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <nz-table #basicTable [nzData]=\"ratings\">\r\n            <thead>\r\n              <tr>\r\n             \r\n                <th>User Name</th>\r\n                <th>Email</th>\r\n                \r\n                <th class=\"text-right\">Approve</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n                \r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.email }}</td>\r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"approve(data._id)\"\r\n                  >\r\n                    Approve\r\n                  </a>\r\n                </td>\r\n              \r\n           \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "L32J":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/approval/unapprove-accountant/unapprove-accountant.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmFwcHJvdmUtYWNjb3VudGFudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P8Ta":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approval/unapprove-accountant/unapprove-accountant.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-8 m-auto\">\r\n    <nav class=\"user-tabs\">\r\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\r\n        <li>\r\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">Delete Accountants</a>\r\n        </li>\r\n       \r\n      </ul>\r\n    </nav>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <nz-table #basicTable [nzData]=\"ratings\">\r\n            <thead>\r\n              <tr>\r\n                <th>User Name</th>\r\n                <th>Email</th>\r\n                <th>Approved</th>\r\n                <th class=\"text-right\">Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.email}}</td>\r\n              \r\n                <td *ngIf=\"data.approved\">Yes</td>\r\n                <td *ngIf=\"!data.approved\">No</td>\r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"delete(data._id)\"\r\n                  >\r\n                    Delete\r\n                  </a>\r\n                </td>\r\n              \r\n           \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "SNv3":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/approval/unapprove-employee/unapprove-employee.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UnapproveEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapproveEmployeeComponent", function() { return UnapproveEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_unapprove_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./unapprove-employee.component.html */ "nGrs");
/* harmony import */ var _unapprove_employee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unapprove-employee.component.css */ "mGtD");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ "026R");






let UnapproveEmployeeComponent = class UnapproveEmployeeComponent {
    constructor(ser) {
        this.ser = ser;
    }
    ngOnInit() {
        this.ser.getAllEmployee().subscribe((res) => {
            console.log(res);
            this.emplyee = res;
            console.log(this.emplyee);
            // $(function () {
            //   $('table').DataTable();
            // });
        });
    }
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Thank you...', ' Succesfully deleted!', 'success').then((res) => {
            location.reload();
        });
    }
    delete(id) {
        console.log('id', id);
        this.ser.deleteEmployee(id).subscribe((res) => {
            console.log('response', res);
            this.alertWithSuccess();
        });
    }
};
UnapproveEmployeeComponent.ctorParameters = () => [
    { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] }
];
UnapproveEmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-unapprove-employee',
        template: _raw_loader_unapprove_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_unapprove_employee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UnapproveEmployeeComponent);



/***/ }),

/***/ "Wpgq":
/*!***********************************************************!*\
  !*** ./src/app/admin/approval/approval-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ApprovalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalRoutingModule", function() { return ApprovalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _approve_accountants_approve_accountants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approve-accountants/approve-accountants.component */ "2Uc+");
/* harmony import */ var _approve_employees_approve_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approve-employees/approve-employees.component */ "FXHH");
/* harmony import */ var _unapprove_accountant_unapprove_accountant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unapprove-accountant/unapprove-accountant.component */ "d+Ye");
/* harmony import */ var _unapprove_employee_unapprove_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unapprove-employee/unapprove-employee.component */ "SNv3");







const routes = [
    {
        path: 'accountants',
        component: _approve_accountants_approve_accountants_component__WEBPACK_IMPORTED_MODULE_3__["ApproveAccountantsComponent"],
    },
    {
        path: 'employees',
        component: _approve_employees_approve_employees_component__WEBPACK_IMPORTED_MODULE_4__["ApproveEmployeesComponent"],
    },
    {
        path: 'Unapproveemployees',
        component: _unapprove_employee_unapprove_employee_component__WEBPACK_IMPORTED_MODULE_6__["UnapproveEmployeeComponent"],
    },
    {
        path: 'Unapproveaccountants',
        component: _unapprove_accountant_unapprove_accountant_component__WEBPACK_IMPORTED_MODULE_5__["UnapproveAccountantComponent"],
    },
];
let ApprovalRoutingModule = class ApprovalRoutingModule {
};
ApprovalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApprovalRoutingModule);



/***/ }),

/***/ "d+Ye":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/approval/unapprove-accountant/unapprove-accountant.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UnapproveAccountantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapproveAccountantComponent", function() { return UnapproveAccountantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_unapprove_accountant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./unapprove-accountant.component.html */ "P8Ta");
/* harmony import */ var _unapprove_accountant_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unapprove-accountant.component.css */ "L32J");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_accountant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/accountant.service */ "wmwf");






let UnapproveAccountantComponent = class UnapproveAccountantComponent {
    constructor(ser) {
        this.ser = ser;
    }
    ngOnInit() {
        this.ser.getAllAccountant().subscribe((res) => {
            console.log(res);
            this.id = res === null || res === void 0 ? void 0 : res._id;
            this.ratings = res;
            // $(function () {
            //   $('table').DataTable();
            // });
        }, (error) => (this.errorMessage = error));
    }
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Thank you...', ' Succesfully deleted!', 'success').then((res) => {
            location.reload();
        });
    }
    delete(id) {
        console.log('id', id);
        this.ser.deleteAccountant(id).subscribe((res) => {
            console.log('response', res);
            this.alertWithSuccess();
        });
    }
};
UnapproveAccountantComponent.ctorParameters = () => [
    { type: _services_accountant_service__WEBPACK_IMPORTED_MODULE_5__["AccountantService"] }
];
UnapproveAccountantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-unapprove-accountant',
        template: _raw_loader_unapprove_accountant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_unapprove_accountant_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UnapproveAccountantComponent);



/***/ }),

/***/ "dhPS":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/approval/approve-accountants/approve-accountants.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZlLWFjY291bnRhbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "mGtD":
/*!************************************************************************************!*\
  !*** ./src/app/admin/approval/unapprove-employee/unapprove-employee.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmFwcHJvdmUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "nGrs":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approval/unapprove-employee/unapprove-employee.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-8 m-auto\">\r\n    <nav class=\"user-tabs\">\r\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\r\n        <li>\r\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">Delete Employees</a>\r\n        </li>\r\n       \r\n      </ul>\r\n    </nav>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <nz-table #basicTable [nzData]=\"emplyee\">\r\n            <thead>\r\n              <tr>\r\n             \r\n                <th>User Name</th>\r\n                <th>Email</th>\r\n                <th>Approved</th>\r\n                <th class=\"text-right\">Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.email }}</td>\r\n               \r\n                <td *ngIf=\"data.approved\">Yes</td>\r\n                <td *ngIf=\"!data.approved\">No</td>\r\n\r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"delete(data._id)\"\r\n                  >\r\n                    Delete\r\n                  </a>\r\n                </td>\r\n              \r\n           \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "wmwf":
/*!******************************************************!*\
  !*** ./src/app/admin/services/accountant.service.ts ***!
  \******************************************************/
/*! exports provided: AccountantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountantService", function() { return AccountantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AccountantService = class AccountantService {
    constructor(http) {
        this.http = http;
    }
    getUnApprovedAccountant() {
        return this.http.get('http://162.240.5.234:3000/owner/list/accountants/unapproved');
    }
    getAllAccountant() {
        return this.http.get('http://162.240.5.234:3000/owner/list/accountants/all');
    }
    ApproveAccountant(id) {
        return this.http.post(`http://162.240.5.234:3000/owner/approve/accountant/${id}`, id);
    }
    getApproveEmployee() {
        return this.http.get('http://162.240.5.234:3000/owner/list/accountants/approved');
    }
    deleteAccountant(id) {
        http: return this.http.delete(`http://162.240.5.234:3000/owner/accountant/delete/${id}`);
    }
};
AccountantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], AccountantService);



/***/ }),

/***/ "yFsF":
/*!***************************************************!*\
  !*** ./src/app/admin/approval/approval.module.ts ***!
  \***************************************************/
/*! exports provided: ApprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalModule", function() { return ApprovalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _approval_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approval-routing.module */ "Wpgq");
/* harmony import */ var _approve_employees_approve_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approve-employees/approve-employees.component */ "FXHH");
/* harmony import */ var _approve_accountants_approve_accountants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approve-accountants/approve-accountants.component */ "2Uc+");
/* harmony import */ var _unapprove_accountant_unapprove_accountant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unapprove-accountant/unapprove-accountant.component */ "d+Ye");
/* harmony import */ var _unapprove_employee_unapprove_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unapprove-employee/unapprove-employee.component */ "SNv3");
/* harmony import */ var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/ng-zoro.module */ "LkBz");









let ApprovalModule = class ApprovalModule {
};
ApprovalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _approve_employees_approve_employees_component__WEBPACK_IMPORTED_MODULE_4__["ApproveEmployeesComponent"],
            _approve_accountants_approve_accountants_component__WEBPACK_IMPORTED_MODULE_5__["ApproveAccountantsComponent"],
            _unapprove_accountant_unapprove_accountant_component__WEBPACK_IMPORTED_MODULE_6__["UnapproveAccountantComponent"],
            _unapprove_employee_unapprove_employee_component__WEBPACK_IMPORTED_MODULE_7__["UnapproveEmployeeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _approval_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApprovalRoutingModule"],
            src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_8__["DemoNgZorroAntdModule"]
        ]
    })
], ApprovalModule);



/***/ }),

/***/ "ybnH":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approval/approve-employees/approve-employees.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-8 m-auto\">\r\n    <nav class=\"user-tabs\">\r\n      <ul class=\"nav nav-tabs nav-tabs-bottom nav-justified\">\r\n        <li>\r\n          <a class=\"nav-link active\" href=\"#all\" data-toggle=\"tab\">Approve Employees </a>\r\n        </li>\r\n       \r\n      </ul>\r\n    </nav>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <nz-table #basicTable [nzData]=\"emplyee\">\r\n            <thead>\r\n              <tr>\r\n             \r\n                <th>User Name</th>\r\n                <th>Email</th>\r\n             \r\n                <th class=\"text-right\">Approve</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.email }}</td>\r\n               \r\n          \r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"appprove(data._id)\"\r\n                  >\r\n                    Approve\r\n                  </a>\r\n                </td>\r\n           \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=approval-approval-module-es2015.js.map