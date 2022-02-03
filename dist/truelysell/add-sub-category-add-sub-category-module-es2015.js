(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sub-category-add-sub-category-module"],{

/***/ "IybD":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-sub-category/add-sub-category.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-8 offset-xl-2\">\r\n\r\n        <!-- Page Header -->\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h3 class=\"page-title\">Add Sub Category</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <!-- Form -->\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label>Category</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Category</option>\r\n                            <option>Automobile</option>\r\n                            <option>Construction</option>\r\n                            <option>Interior</option>\r\n                            <option>Cleaning</option>\r\n                            <option>Electrical</option>\r\n                            <option>Carpentry</option>\r\n                            <option>Computer</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Sub Category Name</label>\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Sub Category Image</label>\r\n                        <input class=\"form-control\" type=\"file\">\r\n                    </div>\r\n                    <div class=\"mt-4\">\r\n                        <button (click)=\"submit()\" class=\"btn btn-primary\" type=\"submit\">Add Subcategory</button>\r\n                        <a [routerLink]=\"'/admin/sub-categories'\" class=\"btn btn-link\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n                <!-- /Form -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "pQlW":
/*!*******************************************************************!*\
  !*** ./src/app/admin/add-sub-category/add-sub-category.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInvoiceModule", function() { return AdminInvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sub-category.component */ "v39N");
/* harmony import */ var _add_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sub-category-routing.module */ "rfKR");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select2 */ "eSIH");






let AdminInvoiceModule = class AdminInvoiceModule {
};
AdminInvoiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__["AddSubCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddSubCategoryRoutingModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_5__["NgSelect2Module"]
        ]
    })
], AdminInvoiceModule);



/***/ }),

/***/ "rfKR":
/*!***************************************************************************!*\
  !*** ./src/app/admin/add-sub-category/add-sub-category-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddSubCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryRoutingModule", function() { return AddSubCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sub-category.component */ "v39N");




const routes = [
    {
        path: '',
        component: _add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__["AddSubCategoryComponent"]
    }
];
let AddSubCategoryRoutingModule = class AddSubCategoryRoutingModule {
};
AddSubCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddSubCategoryRoutingModule);



/***/ }),

/***/ "v39N":
/*!**********************************************************************!*\
  !*** ./src/app/admin/add-sub-category/add-sub-category.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryComponent", function() { return AddSubCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-sub-category.component.html */ "IybD");
/* harmony import */ var _add_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-sub-category.component.css */ "xftn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AddSubCategoryComponent = class AddSubCategoryComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        this.router.navigate(['/admin/sub-categories']);
    }
};
AddSubCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddSubCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-sub-category',
        template: _raw_loader_add_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddSubCategoryComponent);



/***/ }),

/***/ "xftn":
/*!***********************************************************************!*\
  !*** ./src/app/admin/add-sub-category/add-sub-category.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=add-sub-category-add-sub-category-module-es2015.js.map