(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "+YfB":
/*!*************************************************!*\
  !*** ./src/app/admin/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "Hg0R");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product/add-product.component */ "OSFQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_for_product_search_for_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-for-product/search-for-product.component */ "Pc9k");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/filter.pipe */ "I59L");
/* harmony import */ var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-products/list-products.component */ "NLhg");
/* harmony import */ var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/ng-zoro.module */ "LkBz");










let ProductModule = class ProductModule {
};
ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
            _search_for_product_search_for_product_component__WEBPACK_IMPORTED_MODULE_6__["SearchForProductComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"],
            _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_8__["ListProductsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_9__["DemoNgZorroAntdModule"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "0Ez2":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product/list-products/list-products.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-table #basicTable [nzData]=\"products\">\n    <thead>\n      <tr>\n        <th>Serial Number</th>\n        <th>Model</th>\n        <th>Status</th>\n       <th>Edit</th>\n       <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of basicTable.data\">\n        <td>{{ data.serialNumber}}</td>\n        <td>{{ data.model }}</td>\n        <td>{{ data.status }}</td>\n        <td>   <a\n          class=\"table-action-btn btn btn-sm bg-success-light\"\n          data-toggle=\"modal\" data-target=\"#exampleModal\"\n          (click)=\"Serial=data.serialNumber;model=data.model;purchaseSerialNumber=data.purchaseSerialNumber \"\n        >\n          Edit\n        </a></td>\n        <td>   <a\n          class=\"table-action-btn btn btn-sm bg-danger-light\"\n         \n          (click)=\"deleteProduct(data.serialNumber)\"\n\n        >\n          Delete\n        </a></td>\n   \n      </tr>\n    </tbody>\n  </nz-table>\n\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Model</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n       <!-- Row -->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Custom Boostrap Validation -->\n    <div class=\"card\">\n  \n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <form\n                class=\"needs-validation\"\n                [formGroup]=\"form\"\n                autocomplete=\"off\"\n              >\n                <div class=\"form-row\">\n                  <div class=\"col-md-8 mb-3\">\n                    <label for=\"validationCustom01\">Serial Number</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"Serial Number\"\n                      [ngModel]=\"Serial\"\n                      name=\"serialNumber\"formControlName=\"serialNumber\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.serialNumber.errors\n                      }\" \n                    />\n                    \n                    <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.serialNumber.errors\"\n                  >\n                   Field is required\n                  </div>\n                    <div class=\"valid-feedback\">Looks good!</div>\n                  </div>\n                  <div class=\"col-md-8 mb-3\">\n                    <label for=\"validationCustom01\">Model</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"Model\"\n                      name=\"model\"\n                      [ngModel]=\"model\"\n                      formControlName=\"model\" \n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.model.errors\n                      }\" \n                 \n                    />\n               \n                    <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.model.errors\"\n                  >\n                   Field is required\n                  </div>\n                    <div class=\"valid-feedback\">Looks good!</div>\n                  </div>\n                 \n                  <div class=\"col-md-8 mb-3\">\n                    <label for=\"validationCustom01\">Purchase Invoice Serial Number</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"Purchase Invoice Serial Number\"\n                      name=\"purchaseSerialNumber\"\n                      [ngModel]=\"purchaseSerialNumber\"\n                      formControlName=\"purchaseSerialNumber\" \n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.purchaseSerialNumber.errors\n                      }\" \n                    />\n                    <div class=\"valid-feedback\">Looks good!</div>\n                  </div>\n                 \n                </div>\n  \n             \n                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"EditProduct()\">Submit</button>\n              </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- /Validation Tooltips -->\n  </div>\n</div>\n<!-- /Row -->\n\n        </div>\n        <!-- <div class=\"modal-footer\">\n        </div> -->\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "7KRl":
/*!*************************************************************************!*\
  !*** ./src/app/admin/product/list-products/list-products.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Hg0R":
/*!*********************************************************!*\
  !*** ./src/app/admin/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product/add-product.component */ "OSFQ");
/* harmony import */ var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-products/list-products.component */ "NLhg");
/* harmony import */ var _search_for_product_search_for_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-for-product/search-for-product.component */ "Pc9k");






const routes = [
    {
        path: 'add',
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"],
    },
    {
        path: 'search',
        component: _search_for_product_search_for_product_component__WEBPACK_IMPORTED_MODULE_5__["SearchForProductComponent"],
    },
    {
        path: 'all-product',
        component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_4__["ListProductsComponent"]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "MFX/":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product/search-for-product/search-for-product.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-9\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Test Phase Form</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label>Product Serial Number:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            #Serial\n            [(ngModel)]=\"search\"\n            (keyup)=\"searchSerial(search)\"\n          />\n          <!-- {{allSerialNumbers | filterSerialnumber:search}} -->\n          <div *ngFor=\"let post of allSerialNumbers | filter: search\">\n            <a\n              (click)=\"selectedSerial(post)\"\n              *ngIf=\"!displayRecomendedSerial\"\n              >{{ post }}</a\n            >\n          </div>\n        </div>\n\n        <div class=\"text-right\">\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"searchForProduct()\"\n          >\n            Search\n          </button>\n        </div>\n        <div class=\"pricing-box\" *ngIf=\"toggle\">\n          <div class=\"col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <ul class=\"pricing-options\">\n                  <li style=\"font-size: 17px; font-weight: 400\">\n                    Serial Number:<span> {{ product?.serialNumber }}</span>\n                  </li>\n                  <li style=\"font-size: 17px; font-weight: 400\">\n                    Model:<span> {{ product?.model }}</span>\n                  </li>\n                  <li\n                    style=\"font-size: 17px; font-weight: 400\"\n                    *ngIf=\"product?.purchaseSerialNumber\"\n                  >\n                    it's Purchase invoice is:<span>\n                      {{ product?.purchaseSerialNumber }}</span\n                    >\n                  </li>\n                  <li\n                  style=\"font-size: 17px; font-weight: 400\"\n                >\n                  Added At:<span>\n                    {{ product?.addedAt |date:'medium' }}</span\n                  >\n                </li>\n                  <li style=\"font-size: 17px; font-weight: 400\">\n                    Status:<span class=\"badge bg-success inv-badge\">{{\n                      product?.status\n                    }}</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "MjCr":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/product/search-for-product/search-for-product.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n     background-color: rgb(249 244 249);\r\n  }\r\n  \r\n   a:hover {\r\n    background-color: rgb(179, 177, 177);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb3ItcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztLQUNiLGtDQUFrQztFQUNyQzs7R0FFQztJQUNDLG9DQUFvQztFQUN0QyIsImZpbGUiOiJzZWFyY2gtZm9yLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAyNDQgMjQ5KTtcclxuICB9XHJcbiAgXHJcbiAgIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc3LCAxNzcpO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "NLhg":
/*!************************************************************************!*\
  !*** ./src/app/admin/product/list-products/list-products.component.ts ***!
  \************************************************************************/
/*! exports provided: ListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function() { return ListProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-products.component.html */ "0Ez2");
/* harmony import */ var _list_products_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-products.component.css */ "7KRl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "lXKC");







let ListProductsComponent = class ListProductsComponent {
    constructor(_ProductService, _fb) {
        this._ProductService = _ProductService;
        this._fb = _fb;
    }
    ngOnInit() {
        this.allProducts();
        this.creteForm();
    }
    allProducts() {
        this._ProductService.getAllProduct().subscribe((res) => {
            this.products = res;
        }, (error) => {
        });
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', msg, 'error').then((res) => {
            location.reload();
        });
    }
    ;
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Saved', "Saved Successfully", 'success').then((res) => {
            location.reload();
        });
    }
    alertWithSuccessDeleted() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted', "Deleted Successfully", 'success').then((res) => {
            location.reload();
        });
    }
    creteForm() {
        this.form = this._fb.group({
            serialNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            purchaseSerialNumber: [''],
        });
    }
    EditProduct() {
        this.submitted = true;
        if (this.form.valid) {
            this._ProductService.updateProduct(this.Serial, this.form.value).subscribe((res) => {
                this.alertWithSuccess();
            }, (error) => {
                this.alertWithFail(error.error);
            });
        }
    }
    deleteProduct(serialNumber) {
        this._ProductService.deleteProduct(serialNumber).subscribe((res) => {
            this.alertWithSuccessDeleted();
        }, (error) => {
            this.alertWithFail("Try Again Later");
        });
    }
};
ListProductsComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ListProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-products',
        template: _raw_loader_list_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_products_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListProductsComponent);



/***/ }),

/***/ "OSFQ":
/*!********************************************************************!*\
  !*** ./src/app/admin/product/add-product/add-product.component.ts ***!
  \********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-product.component.html */ "r5tG");
/* harmony import */ var _add_product_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.component.css */ "SEbv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.service */ "lXKC");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_models_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/models.service */ "L8CM");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");









let AddProductComponent = class AddProductComponent {
    constructor(_fb, _ProductService, _ModelsService, invoices) {
        this._fb = _fb;
        this._ProductService = _ProductService;
        this._ModelsService = _ModelsService;
        this.invoices = invoices;
        this.listOfModels = new Array();
        this.listAllPurchaseNumber = new Array();
        // location = new Array();
        this.displayRecomendedSerial = false;
        this.allSerialNumbers = new Array();
    }
    ngOnInit() {
        this.creteForm();
        this.listModels();
        this.listAllPurchaseInvoices();
    }
    listModels() {
        this._ModelsService.listModels().subscribe((res) => {
            this.AllProduct = res;
            for (let val of this.AllProduct) {
                // console.log(val.serialNumber);
                console.log(val.model);
                this.listOfModels.push(val.model);
                // let stringSerial = val.model.toString();
                // console.log(stringSerial);
                // this.allSerialNumbers.push(val.model.toString());
                // console.log('array of serial', this.allSerialNumbers);
            }
        }, (err) => {
            console.log(err);
        });
    }
    listAllPurchaseInvoices() {
        this.invoices.listPurshuseInvoice().subscribe((res) => {
            console.log(res, 'res all invoices');
            for (let val of res) {
                this.listAllPurchaseNumber.push(val.purchaseNumber);
            }
        });
    }
    creteForm() {
        this.form = this._fb.group({
            serialNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            purchaseSerialNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    selectedSerial(val) {
        this.Model.nativeElement.value = val;
        this.displayRecomendedSerial = true;
    }
    selectedItem(item) {
        console.log(item);
    }
    data(val) {
        return val;
    }
    // Getserial() {
    //   const valueInput = this.Model.nativeElement.value;
    //   this.Serial = valueInput;
    //   return this.Serial;
    // }
    searchSerial(val) {
        // console.log(data);
        this.displayRecomendedSerial = false;
        // let index = this.allSerialNumbers.indexOf(123);
        // console.log(index);
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', msg, 'error').then((res) => {
            location.reload();
        });
    }
    alertWithSuccess() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saves', 'Saved Successfully', 'success').then((res) => {
            location.reload();
        });
    }
    saveProduct() {
        this.submitted = true;
        console.log(this.form.value);
        if (this.form.valid) {
            // this.form.value.model = this.Getserial();
            // this.Getserial()
            if (this.form.value.purchaseSerialNumber != '') {
                console.log('hey');
                var product = {
                    serialNumber: this.form.value.serialNumber,
                    model: this.form.value.model,
                    purchaseSerialNumber: this.form.value.purchaseSerialNumber,
                };
            }
            else {
                product = {
                    serialNumber: this.form.value.serialNumber,
                    model: this.form.value.model,
                };
            }
            console.log(product);
            this._ProductService
                .addNewProduct(localStorage.getItem('id'), product)
                .subscribe((res) => {
                console.log(res);
                this.alertWithSuccess();
            }, (err) => {
                console.log(err);
                this.alertWithFail(err.error);
            });
        }
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_models_service__WEBPACK_IMPORTED_MODULE_7__["ModelsService"] },
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_8__["InvoicesService"] }
];
AddProductComponent.propDecorators = {
    Model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['Model',] }]
};
AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-product',
        template: _raw_loader_add_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_product_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddProductComponent);



/***/ }),

/***/ "Pc9k":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/product/search-for-product/search-for-product.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SearchForProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchForProductComponent", function() { return SearchForProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_for_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-for-product.component.html */ "MFX/");
/* harmony import */ var _search_for_product_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-for-product.component.css */ "MjCr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "lXKC");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);






let SearchForProductComponent = class SearchForProductComponent {
    constructor(_ProductService) {
        this._ProductService = _ProductService;
        this.filter = '';
        this.toggle = false;
        this.displayRecomendedSerial = false;
        this.allSerialNumbers = new Array();
    }
    ngOnInit() {
        this.getAllproducts();
    }
    getAllproducts() {
        this._ProductService.getAllProduct().subscribe((res) => {
            this.products = res;
            for (let val of this.products) {
                console.log(val.serialNumber);
                let stringSerial = val.serialNumber.toString();
                console.log(stringSerial);
                this.allSerialNumbers.push(val.serialNumber.toString());
            }
        });
    }
    selectedSerial(val) {
        this.serial.nativeElement.value = val;
        this.displayRecomendedSerial = true;
    }
    data(val) {
        return val;
    }
    searchSerial(val) {
        this.displayRecomendedSerial = false;
        let filterd = this.allSerialNumbers.filter(this.data);
    }
    alertWithFail() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', 'Please Try Again', 'error').then((res) => {
            location.reload();
        });
    }
    searchForProduct() {
        const valueInput = this.serial.nativeElement.value;
        console.log('Serial numer', valueInput);
        this._ProductService.getProductBrSerialnumber(valueInput).subscribe((res) => {
            console.log(res);
            this.product = res;
            this.toggle = true;
        }, (error) => {
            this.alertWithFail();
        });
    }
};
SearchForProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
SearchForProductComponent.propDecorators = {
    serial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['Serial',] }]
};
SearchForProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-for-product',
        template: _raw_loader_search_for_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_for_product_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchForProductComponent);



/***/ }),

/***/ "SEbv":
/*!*********************************************************************!*\
  !*** ./src/app/admin/product/add-product/add-product.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n   background-color: rgb(249 244 249);\r\n}\r\n\r\n a:hover {\r\n  background-color: rgb(179, 177, 177);\r\n}\r\n\r\n .widthOfinput{\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0dBQ2Isa0NBQWtDO0FBQ3JDOztDQUVDO0VBQ0Msb0NBQW9DO0FBQ3RDOztDQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAyNDQgMjQ5KTtcclxufVxyXG5cclxuIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE3NywgMTc3KTtcclxufVxyXG4ud2lkdGhPZmlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "r5tG":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product/add-product/add-product.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Custom Boostrap Validation -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Add New Product Form</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <form\n              class=\"needs-validation\"\n              [formGroup]=\"form\"\n              autocomplete=\"off\"\n            >\n              <div class=\"form-row\">\n                <div class=\"col-md-4 mb-3\">\n                  <label for=\"validationCustom01\">Serial Number</label>\n                  <!-- <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"validationCustom01\"\n                    placeholder=\"Serial Number\"\n                    name=\"serialNumber\"\n                    formControlName=\"serialNumber\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted && form.controls.serialNumber.errors\n                    }\"\n                  /> -->\n                  <input\n                    nz-input\n                    placeholder=\"Serial Number\"\n                    id=\"validationCustom01\"\n                    name=\"serialNumber\"\n                    formControlName=\"serialNumber\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted && form.controls.serialNumber.errors\n                    }\"\n                  />\n                  <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.serialNumber.errors\"\n                  >\n                    Field is required\n                  </div>\n                  <div class=\"valid-feedback\">Looks good!</div>\n                </div>\n                <div class=\"col-md-4 mb-3\">\n                  <label for=\"validationCustom01\">Model</label>\n                  <nz-select\n                    nzPlaceHolder=\"Select Model\"\n                    formControlName=\"model\"\n                    class=\"widthOfinput\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of listOfModels\"\n                      [nzLabel]=\"option\"\n                      [nzValue]=\"option\"\n                    ></nz-option>\n                  </nz-select>\n                  <!-- <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"Model\"\n                      name=\"model\"\n                      formControlName=\"model\"\n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.model.errors\n                      }\"\n                      #Model\n                      [(ngModel)]=\"search\"\n                      (keyup)=\"searchSerial(search)\"\n                    />\n                    <div *ngFor=\"let serial of allSerialNumbers | filter: search\">\n                      <a\n                        (click)=\"selectedSerial(serial)\"\n                        *ngIf=\"!displayRecomendedSerial\"\n                        >{{ serial }}</a\n                      >\n                    </div> -->\n                  <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.model.errors\"\n                  >\n                    Field is required\n                  </div>\n                  <div class=\"valid-feedback\">Looks good!</div>\n                </div>\n\n                <div class=\"col-md-4 mb-3\">\n                  <label for=\"validationCustom01\"\n                    >Purchase Invoice Serial Number</label\n                  >\n\n                  <nz-select\n                    nzPlaceHolder=\"Purchase Invoice\"\n                    formControlName=\"purchaseSerialNumber\"\n                    class=\"widthOfinput\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of listAllPurchaseNumber\"\n                      [nzLabel]=\"option\"\n                      [nzValue]=\"option\"\n                    ></nz-option>\n                  </nz-select>\n                  <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"\n                      submitted && form.controls.purchaseSerialNumber.errors\n                    \"\n                  >\n                    Field is required\n                  </div>\n                </div>\n              </div>\n\n              <button\n                class=\"btn btn-primary\"\n                type=\"submit\"\n                (click)=\"saveProduct()\"\n              >\n                Submit\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map