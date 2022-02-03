(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-category-edit-category-module"],{

/***/ "+uL8":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-category/edit-category.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-8 offset-xl-2\">\r\n    \r\n        <!-- Page Header -->\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h3 class=\"page-title\">Edit Category</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n            \r\n                <!-- Form -->\r\n                <form action=\"categories.html\">\r\n                    <div class=\"form-group\">\r\n                        <label>Category Name</label>\r\n                        <input class=\"form-control\" type=\"text\" value=\"Automobile\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category Image</label>\r\n                        <input class=\"form-control\" type=\"file\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"avatar\">\r\n                            <img class=\"avatar-img rounded\" alt=\"\" src=\"assets/img/category/category-01.jpg\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mt-4\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submit()\">Save Changes</button>\r\n                        <a [routerLink]=\"'/admin/categories'\" class=\"btn btn-link\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n                <!-- /Form -->\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "RJwl":
/*!*********************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryRoutingModule", function() { return EditCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-category.component */ "u0YZ");




const routes = [
    {
        path: '',
        component: _edit_category_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryComponent"]
    }
];
let EditCategoryRoutingModule = class EditCategoryRoutingModule {
};
EditCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditCategoryRoutingModule);



/***/ }),

/***/ "SyVR":
/*!*****************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ZRd8":
/*!*************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.module.ts ***!
  \*************************************************************/
/*! exports provided: EditCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryModule", function() { return EditCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-category.component */ "u0YZ");
/* harmony import */ var _edit_category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-category-routing.module */ "RJwl");





let EditCategoryModule = class EditCategoryModule {
};
EditCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditCategoryRoutingModule"]
        ]
    })
], EditCategoryModule);



/***/ }),

/***/ "u0YZ":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.component.ts ***!
  \****************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-category.component.html */ "+uL8");
/* harmony import */ var _edit_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-category.component.css */ "SyVR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let EditCategoryComponent = class EditCategoryComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        this.router.navigate(['/admin/subscriptions']);
    }
};
EditCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-category',
        template: _raw_loader_edit_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditCategoryComponent);



/***/ })

}]);
//# sourceMappingURL=edit-category-edit-category-module-es2015.js.map