(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-category-add-category-module"],{

/***/ "8EdV":
/*!***********************************************************!*\
  !*** ./src/app/admin/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function() { return AddCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category-routing.module */ "ZnKg");




let AddCategoryModule = class AddCategoryModule {
};
AddCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCategoryRoutingModule"]
        ]
    })
], AddCategoryModule);



/***/ }),

/***/ "BN3u":
/*!***************************************************************!*\
  !*** ./src/app/admin/add-category/add-category.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ERE5":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-category/add-category.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-8 offset-xl-2\">\r\n    \r\n        <!-- Page Header -->\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h3 class=\"page-title\">Add Category</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">                    \r\n                <!-- Form -->\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label>Category Name</label>\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category Image</label>\r\n                        <input class=\"form-control\" type=\"file\">\r\n                    </div>\r\n                    <div class=\"mt-4\">\r\n                        <button (click)=\"submit()\" class=\"btn btn-primary\" type=\"button\">Add Category</button>\r\n                        <a (click)=\"submit()\" class=\"btn btn-link\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n                <!-- /Form -->                        \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "PUjz":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-category/add-category.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-category.component.html */ "ERE5");
/* harmony import */ var _add_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component.css */ "BN3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AddCategoryComponent = class AddCategoryComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        this.router.navigate(['/admin/categories']);
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-category',
        template: _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCategoryComponent);



/***/ }),

/***/ "ZnKg":
/*!*******************************************************************!*\
  !*** ./src/app/admin/add-category/add-category-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryRoutingModule", function() { return AddCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category.component */ "PUjz");




const routes = [
    {
        path: '',
        component: _add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"]
    }
];
let AddCategoryRoutingModule = class AddCategoryRoutingModule {
};
AddCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddCategoryRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-category-add-category-module-es2015.js.map