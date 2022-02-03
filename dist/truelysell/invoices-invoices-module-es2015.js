(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"],{

/***/ "+VDC":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/pending-sale-invoice/pending-sale-invoice.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n        \r\n          <nz-table #basicTable [nzData]=\"pricing\">\r\n            <thead>\r\n              <tr>\r\n             \r\n              \r\n             \r\n                <th>Serial Number</th>\r\n                <th>Customer Name</th>\r\n                <th>Date</th>\r\n                <th class=\"text-right\">Add Price</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n      \r\n                <td>{{ data.SerialNumber }}</td>\r\n                <td>{{ data.customerName }}</td>\r\n                <td>{{ data.date  |date: 'dd/MM/yyyy' }}</td>\r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"AddPrice(data._id)\"\r\n                  >\r\n                    Add Price\r\n                  </a>\r\n                </td>\r\n            \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"row pricing-box\">\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Basic</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$0.00</h3>\r\n                    <p>Duration: <span>3 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 3 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Standard</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$50.00</h3>\r\n                    <p>Duration: <span>6 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 6 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Enterprice</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$1200.00</h3>\r\n                    <p>Duration: <span>One Year</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> One Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Gold</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$2000.00</h3>\r\n                    <p>Duration: <span>2 Years</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> Two Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n");

/***/ }),

/***/ "+ijF":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/invoices/add-price-pending-sale/add-price-pending-sale.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddPricePendingSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPricePendingSaleComponent", function() { return AddPricePendingSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_price_pending_sale_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-price-pending-sale.component.html */ "cMhz");
/* harmony import */ var _add_price_pending_sale_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-price-pending-sale.component.css */ "lgoI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_pending_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pending.service */ "yTIl");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);








let AddPricePendingSaleComponent = class AddPricePendingSaleComponent {
    constructor(modalService, activemodal, fromBuilder, PendingService) {
        this.modalService = modalService;
        this.activemodal = activemodal;
        this.fromBuilder = fromBuilder;
        this.PendingService = PendingService;
        this.addFormPrice = this.fromBuilder.group({
            price: [''],
        });
    }
    alertWithSuccess(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Done', msg, 'success').then((res) => {
            location.reload();
        });
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Failed', msg, 'error').then((res) => {
        });
    }
    addprice() {
        this.PendingService.currentId.subscribe((res) => {
            this.SelectedPending = res;
            console.log(' this.SelectedPending', this.SelectedPending, this.addFormPrice.value);
        });
        this.PendingService.addPriceForPending(this.SelectedPending, this.addFormPrice.value).subscribe((res) => {
            console.log(res);
            this.alertWithSuccess("Saved Successfully");
        }, (error) => {
            console.log(error);
            this.alertWithFail(error.error);
        });
    }
    ngOnInit() { }
};
AddPricePendingSaleComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_pending_service__WEBPACK_IMPORTED_MODULE_6__["PendingService"] }
];
AddPricePendingSaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-price-pending-sale',
        template: _raw_loader_add_price_pending_sale_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_price_pending_sale_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPricePendingSaleComponent);



/***/ }),

/***/ "/AqU":
/*!***********************************************************************!*\
  !*** ./src/app/admin/invoices/add-supplier/add-supplier.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierComponent", function() { return AddSupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_supplier_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-supplier.component.html */ "I48r");
/* harmony import */ var _add_supplier_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-supplier.component.css */ "BQXm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);








let AddSupplierComponent = class AddSupplierComponent {
    constructor(fromBuilder, ser, activemodal) {
        this.fromBuilder = fromBuilder;
        this.ser = ser;
        this.activemodal = activemodal;
        this.EditFormsupplier = this.fromBuilder.group({
            supplier: [''],
        });
    }
    alertWithSuccess(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Done', msg, 'success').then((res) => {
            location.reload();
        });
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Failed', msg, 'error').then((res) => {
        });
    }
    AddSupplier() {
        this.ser.currentId.subscribe((res) => {
            console.log(res);
            this.id = res;
        });
        this.ser
            .AddSupplier(this.id, this.EditFormsupplier.value)
            .subscribe((res) => {
            console.log(res, 'data of form');
            this.alertWithSuccess("Saved Successfully");
        }, (error) => {
            console.log('error', error);
            this.alertWithFail(error.error);
        });
    }
    ngOnInit() { }
};
AddSupplierComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
AddSupplierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-supplier',
        template: _raw_loader_add_supplier_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_supplier_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddSupplierComponent);



/***/ }),

/***/ "5Nn8":
/*!*****************************************************************!*\
  !*** ./src/app/admin/invoices/list-sale/list-sale.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSaleComponent", function() { return ListSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_sale_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-sale.component.html */ "NF1E");
/* harmony import */ var _list_sale_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sale.component.css */ "CPgm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");






let ListSaleComponent = class ListSaleComponent {
    constructor(ser, router) {
        this.ser = ser;
        this.router = router;
    }
    ngOnInit() {
        this.ser.listSaleInvoice().subscribe((res) => {
            console.log(res);
            this.invoices = res;
            // $(function () {
            //   $('table').DataTable();
            // });
            console.log('list sale invoice', res);
        });
    }
    viewDetails(id) {
        this.router.navigate(['admin/Invoices/sale/details', id]);
    }
};
ListSaleComponent.ctorParameters = () => [
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListSaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-sale',
        template: _raw_loader_list_sale_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_sale_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListSaleComponent);



/***/ }),

/***/ "7mta":
/*!***********************************************************!*\
  !*** ./src/app/admin/invoices/invoices-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesRoutingModule", function() { return InvoicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_purchase_invoice_add_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-purchase-invoice/add-purchase-invoice.component */ "OTxW");
/* harmony import */ var _add_sale_invoice_add_sale_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sale-invoice/add-sale-invoice.component */ "t5Gv");
/* harmony import */ var _edit_pricing_model_edit_pricing_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-pricing-model/edit-pricing-model.component */ "uaF6");
/* harmony import */ var _list_purchase_list_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-purchase/list-purchase.component */ "8nrr");
/* harmony import */ var _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-sale/list-sale.component */ "5Nn8");
/* harmony import */ var _pending_purchase_invoice_pending_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pending-purchase-invoice/pending-purchase-invoice.component */ "biym");
/* harmony import */ var _pending_sale_invoice_pending_sale_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pending-sale-invoice/pending-sale-invoice.component */ "GGNP");
/* harmony import */ var _purchase_details_purchase_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./purchase-details/purchase-details.component */ "wRsQ");
/* harmony import */ var _sale_details_sale_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sale-details/sale-details.component */ "urY9");












// import { PricingModelComponent } from './pricing-model/pricing-model.component';
const routes = [
    {
        path: 'add/sale',
        component: _add_sale_invoice_add_sale_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AddSaleInvoiceComponent"],
    },
    {
        path: 'list/sale',
        component: _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_7__["ListSaleComponent"],
    },
    {
        path: 'list/purchase',
        component: _list_purchase_list_purchase_component__WEBPACK_IMPORTED_MODULE_6__["ListPurchaseComponent"],
    },
    {
        path: 'add/purchase',
        component: _add_purchase_invoice_add_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_3__["AddPurchaseInvoiceComponent"],
    },
    {
        path: 'purchase/details/:_id',
        component: _purchase_details_purchase_details_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseDetailsComponent"],
    },
    {
        path: 'sale/details/:_id',
        component: _sale_details_sale_details_component__WEBPACK_IMPORTED_MODULE_11__["SaleDetailsComponent"],
    },
    {
        path: 'pending-sale-invoice',
        component: _pending_sale_invoice_pending_sale_invoice_component__WEBPACK_IMPORTED_MODULE_9__["PendingSaleInvoiceComponent"],
    },
    {
        path: 'edit-pricing-model',
        component: _edit_pricing_model_edit_pricing_model_component__WEBPACK_IMPORTED_MODULE_5__["EditPricingModelComponent"],
    },
    {
        path: 'pending-purchase-invoice',
        component: _pending_purchase_invoice_pending_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_8__["PendingPurchaseInvoiceComponent"],
    },
];
let InvoicesRoutingModule = class InvoicesRoutingModule {
};
InvoicesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicesRoutingModule);



/***/ }),

/***/ "8nrr":
/*!*************************************************************************!*\
  !*** ./src/app/admin/invoices/list-purchase/list-purchase.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPurchaseComponent", function() { return ListPurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_purchase_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-purchase.component.html */ "bDkD");
/* harmony import */ var _list_purchase_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-purchase.component.css */ "Dgp5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");






let ListPurchaseComponent = class ListPurchaseComponent {
    constructor(ser, router) {
        this.ser = ser;
        this.router = router;
    }
    ngOnInit() {
        this.ser.listPurshuseInvoice().subscribe((res) => {
            console.log(res);
            this.invoices = res;
            // $(function () {
            //   $('table').DataTable();
            // });
            console.log('list sale invoice', res);
        });
    }
    viewDetails(x) {
        this.router.navigate(["admin/Invoices/purchase/details", x]);
    }
};
ListPurchaseComponent.ctorParameters = () => [
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListPurchaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-purchase',
        template: _raw_loader_list_purchase_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_purchase_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListPurchaseComponent);



/***/ }),

/***/ "9oDe":
/*!************************************************************************!*\
  !*** ./src/app/admin/invoices/sale-details/sale-details.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "BQXm":
/*!************************************************************************!*\
  !*** ./src/app/admin/invoices/add-supplier/add-supplier.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3VwcGxpZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "CPgm":
/*!******************************************************************!*\
  !*** ./src/app/admin/invoices/list-sale/list-sale.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNhbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Dgp5":
/*!**************************************************************************!*\
  !*** ./src/app/admin/invoices/list-purchase/list-purchase.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXB1cmNoYXNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "EnvP":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/add-sale-invoice/add-sale-invoice.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5 class=\"card-title\">Add Sale Invoice Form</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <form\r\n              class=\"needs-validation\"\r\n              novalidate\r\n              [formGroup]=\"saleInvoiceForm\"\r\n              autocomplete=\"off\"\r\n            >\r\n              <div class=\"form-row\">\r\n                <div class=\"col-md-4 mb-3\">\r\n                  <label for=\"validationCustom01\">Customer Name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"validationCustom01\"\r\n                    placeholder=\"Customer Name\"\r\n                    formControlName=\"customerName\"\r\n                    required\r\n                  />\r\n                  <div class=\"valid-feedback\">Looks good!</div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-3\" *ngIf=\"showPriceInput\">\r\n                  <label for=\"validationCustom01\">Price</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"validationCustom01\"\r\n                    placeholder=\"Price\"\r\n                    formControlName=\"price\"\r\n                  />\r\n                  <div class=\"valid-feedback\">Looks good!</div>\r\n                </div>\r\n\r\n           \r\n              </div>\r\n\r\n              <div class=\"card-header col-md-4 mb-3\">\r\n                <h5 class=\"card-title\">Products</h5>\r\n              </div>\r\n              <ng-container formArrayName=\"Products\">\r\n                <div *ngFor=\"let product of Products.controls;let i=index \">\r\n                  <div class=\"form-row\">\r\n                    <ng-container\r\n                    [formGroupName]=\"i\"\r\n                 \r\n                    >\r\n               \r\n                      <div class=\"col-md-6 mb-3\">\r\n                        <label for=\"validationCustom02\">Serial Number</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"Serial Number\"\r\n                          formControlName=\"productSerialNumber\"\r\n                         \r\n                       \r\n                          \r\n                        />\r\n                    \r\n\r\n                   \r\n                      </div>\r\n                      <div class=\"col-md-9\" *ngIf=\"showdata\">\r\n                        <div class=\"display-flex\">\r\n                          <p>\r\n                            <span style=\"color: #ff0080\"> Serial Number:</span\r\n                            ><span>{{ dataOnBlur?.serialNumber }} </span>\r\n                          </p>\r\n                          <p>\r\n                            <span style=\"color: #ff0080\"> Model:</span\r\n                            ><span>{{ dataOnBlur?.model }} </span>\r\n                          </p>\r\n                          <p>\r\n                            <span style=\"color: #ff0080\"> Status:</span\r\n                            ><span>{{ dataOnBlur?.status }} </span>\r\n                          </p>\r\n\r\n                          <span></span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-row\">\r\n                        <ng-container formGroupName=\"configuration\">\r\n                          <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"validationCustom02\">CPU</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              id=\"validationCustom02\"\r\n                              placeholder=\"CPU\"\r\n                              formControlName=\"cpu\"\r\n                              required\r\n                            />\r\n                            <div class=\"valid-feedback\">Looks good!</div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"validationCustom02\">RAM</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              id=\"validationCustom02\"\r\n                              placeholder=\"RAM\"\r\n                              required\r\n                              formControlName=\"ram\"\r\n                            />\r\n                            <div class=\"valid-feedback\">Looks good!</div>\r\n                          </div>\r\n                          <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"validationCustom02\">Hard</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              id=\"validationCustom02\"\r\n                              placeholder=\"Hard\"\r\n                              formControlName=\"hard\"\r\n                              required\r\n                            />\r\n                            <div class=\"valid-feedback\">Looks good!</div>\r\n                          </div>\r\n                          <div class=\"col-md-4 mb-3\">\r\n                            <label class=\"d-block\">With Charger</label>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input\r\n                                class=\"form-check-input\"\r\n                                type=\"radio\"\r\n                                [name]=\"i\"\r\n                                id=\"withCharger_male\"\r\n                                formControlName=\"withCharger\"\r\n                                value=\"true\"\r\n                              />\r\n                              <label class=\"form-check-label\" for=\"withCharger\"\r\n                                >Yes</label\r\n                              >\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input\r\n                                class=\"form-check-input\"\r\n                                type=\"radio\"\r\n                                [name]=\"i\"\r\n                                id=\"withCharger_female\"\r\n                                formControlName=\"withCharger\"\r\n                                value=\"false\"\r\n                              />\r\n                              <label\r\n                                class=\"form-check-label\"\r\n                                for=\"gender_female\"\r\n                                >No</label\r\n                              >\r\n                            </div>\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n              <div class=\"text-right\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"addNewSection()\"\r\n                >\r\n                  Add Product\r\n                </button>\r\n              </div>\r\n              <button\r\n                class=\"btn btn-primary\"\r\n                type=\"button\"\r\n                (click)=\"onSubmit()\"\r\n              >\r\n                Submit form\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div> \r\n");

/***/ }),

/***/ "GGNP":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/invoices/pending-sale-invoice/pending-sale-invoice.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PendingSaleInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingSaleInvoiceComponent", function() { return PendingSaleInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pending_sale_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pending-sale-invoice.component.html */ "+VDC");
/* harmony import */ var _pending_sale_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pending-sale-invoice.component.css */ "Kegi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_pending_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pending.service */ "yTIl");
/* harmony import */ var _add_price_pending_sale_add_price_pending_sale_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-price-pending-sale/add-price-pending-sale.component */ "+ijF");







let PendingSaleInvoiceComponent = class PendingSaleInvoiceComponent {
    constructor(modalSer, activeModal, serSale) {
        this.modalSer = modalSer;
        this.activeModal = activeModal;
        this.serSale = serSale;
        this.pricing = Array();
    }
    ngOnInit() {
        this.serSale.listPendingSale().subscribe((res) => {
            console.log(res, 'res for pending sale');
            this.pricing = res;
        });
    }
    AddPrice(id) {
        console.log(id);
        this.serSale.changeidofpendingPrice(id);
        const modelRef = this.modalSer.open(_add_price_pending_sale_add_price_pending_sale_component__WEBPACK_IMPORTED_MODULE_6__["AddPricePendingSaleComponent"]);
        modelRef.componentInstance.id = 0;
        modelRef.componentInstance.data = {};
        modelRef.result.then((res) => {
            console.log(res);
        });
    }
};
PendingSaleInvoiceComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _services_pending_service__WEBPACK_IMPORTED_MODULE_5__["PendingService"] }
];
PendingSaleInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pending-sale-invoice',
        template: _raw_loader_pending_sale_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pending_sale_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PendingSaleInvoiceComponent);



/***/ }),

/***/ "I48r":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/add-supplier/add-supplier.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Model</h4>\r\n  <button\r\n    type=\"button\"\r\n    class=\"close\"\r\n    aria-label=\"Close\"\r\n    (click)=\"activemodal.dismiss('cross click')\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"EditFormsupplier\" autocomplete=\"off\">\r\n    <div class=\"form-group\">\r\n      <label for=\"dateOfBirth\">Supplier</label>\r\n      <div class=\"input-group\">\r\n        <input\r\n          id=\"model\"\r\n          class=\"form-control\"\r\n          placeholder=\"Supplier\"\r\n          name=\"model\"\r\n          formControlName=\"supplier\"\r\n        />\r\n      </div>\r\n      <br />\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddSupplier()\">\r\n    Save\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "Kegi":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/invoices/pending-sale-invoice/pending-sale-invoice.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5kaW5nLXNhbGUtaW52b2ljZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "LbZR":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/purchase-details/purchase-details.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n  <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"pricing-header\">\n          <h3 style=\"color: #ff0080\">Invoice Details</h3>\n\n          <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n          <!-- <p>Monthly Price</p> -->\n        </div>\n        <div class=\"row\">\n          <div class=\"pricing-card-price col-md-4\">\n            <h6 class=\"heading2 price\">Invoice Number</h6>\n            <span>{{ invoiceDetails.purchaseNumber }}</span>\n            <hr />\n          </div>\n          <div class=\"col-md-4\">\n            <h6 class=\"heading2 price\">Date</h6>\n            <span>{{ invoiceDetails.purchaseDate |date: 'dd/MM/yyyy'}}</span>\n            <hr />\n          </div>\n          <div class=\"col-md-4\">\n            <h6 class=\"heading2 price\">Supplier</h6>\n            <span>{{ invoiceDetails.supplier }}</span>\n            <hr />\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-5\" *ngIf=\"invoiceDetails.purchaseCartProducts.length\">\n            <ul class=\"pricing-options\">\n              <h6 class=\"heading2 price\">Products</h6>\n              <li *ngFor=\"let product of invoiceDetails.purchaseCartProducts\">\n                <i class=\"far fa-check-circle\"></i> {{ product.productId }}\n              </li>\n            </ul>\n          </div>\n\n          <hr />\n          <div class=\"col-md-5\" *ngIf=\"invoiceDetails.purchaseCartAccessories.length\">\n            <ul class=\"pricing-options\">\n              <h6 class=\"heading2 price\">Accessories</h6>\n              <li *ngFor=\"let product of invoiceDetails.purchaseCartAccessories\">\n                <i class=\"far fa-check-circle\"></i> {{ product.type }}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <a\n          [routerLink]=\"'/admin/Invoices/list/purchase'\"\n          class=\"btn btn-primary btn-block\"\n          >Back</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "MjzG":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/model-price.service.ts ***!
  \*******************************************************/
/*! exports provided: ModelPriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelPriceService", function() { return ModelPriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let ModelPriceService = class ModelPriceService {
    constructor(http) {
        this.http = http;
        this.id = {};
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.idOfEditPrice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.id);
        this.currentId = this.idOfEditPrice.asObservable();
    }
    listMissingPiecesReport() {
        return this.http.get('http://162.240.5.234:3000/models/all');
    }
    EditPrice(id, body) {
        return this.http.put(`http://162.240.5.234:3000/models/update/:${id}`, body);
    }
    // changeidofEditPrice(id: any) {
    //   this.idOfEditPrice.next(id);
    // }
    DeleteModel(id) {
        return this.http.delete(`http://162.240.5.234:3000/models/delete/:${id}`);
    }
    listPendingSale() {
        return this.http.get('http://162.240.5.234:3000/sale/list/pending');
    }
    addPriceForPending() {
        return;
    }
};
ModelPriceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ModelPriceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ModelPriceService);



/***/ }),

/***/ "NF1E":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/list-sale/list-sale.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <nz-table #basicTable [nzData]=\"invoices\">\r\n            <thead>\r\n              <tr>\r\n             \r\n                <th>Serial Number</th>\r\n                <th>Customer Name</th>\r\n                <th>Price</th>\r\n                <th class=\"text-right\">Details</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n               \r\n                <td>{{ data.SerialNumber }}</td>\r\n                <td>{{ data.customerName }}</td>\r\n                <td>{{data.date |date: 'dd/MM/yyyy'}}</td>\r\n                <td class=\"text-right\">\r\n                  <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewDetails(data._id)\">\r\n                    View all details\r\n                  </a>\r\n                </td>\r\n            \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"row pricing-box\">\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Basic</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$0.00</h3>\r\n                    <p>Duration: <span>3 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 3 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Standard</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$50.00</h3>\r\n                    <p>Duration: <span>6 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 6 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Enterprice</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$1200.00</h3>\r\n                    <p>Duration: <span>One Year</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> One Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Gold</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$2000.00</h3>\r\n                    <p>Duration: <span>2 Years</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> Two Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n");

/***/ }),

/***/ "OTxW":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/invoices/add-purchase-invoice/add-purchase-invoice.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddPurchaseInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPurchaseInvoiceComponent", function() { return AddPurchaseInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_purchase_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-purchase-invoice.component.html */ "xLGX");
/* harmony import */ var _add_purchase_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-purchase-invoice.component.css */ "o955");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");
/* harmony import */ var _services_model_price_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/model-price.service */ "MjzG");








let AddPurchaseInvoiceComponent = class AddPurchaseInvoiceComponent {
    constructor(serInvoices, _ModelPriceService, _fb) {
        this.serInvoices = serInvoices;
        this._ModelPriceService = _ModelPriceService;
        this._fb = _fb;
        this.newSection = [0];
        this.showSupplierInput = true;
        this.displayAccesoryField = false;
        this.allModels = new Array();
        this.filter = '';
        this.displayRecomendedSerial = true;
    }
    ngOnInit() {
        let typeOfperson = localStorage.getItem('name');
        console.log(typeOfperson);
        if (typeOfperson === 'employee') {
            this.showSupplierInput = false;
        }
        this.createForm();
    }
    createForm() {
        this.purchuseInvoiceForm = this._fb.group({
            supplier: [''],
            purchaseCartProducts: this._fb.array([]),
            purchaseCartAccessories: this._fb.array([]),
        });
    }
    get purchaseCartProducts() {
        return this.purchuseInvoiceForm.get('purchaseCartProducts');
    }
    get purchaseCartAccessories() {
        return this.purchuseInvoiceForm.get('purchaseCartAccessories');
    }
    newproductsData() {
        return this._fb.group({
            serialNumber: [''],
            model: [''],
        });
    }
    newaccessoriesData() {
        return this._fb.group({
            type: [''],
            price: [''],
            quantity: [''],
        });
    }
    setRadio(val) {
        console.log(val);
        this.accesoriesOptions = val;
        if (val == 1) {
            this.displayAccesoryField = true;
        }
        else {
            this.displayAccesoryField = false;
            this.purchuseInvoiceForm.value.purchaseCartAccessories = [];
        }
    }
    adddNewSection() {
        // console.log(array);
        this.purchaseCartProducts.push(this.newproductsData());
    }
    addAccessories() {
        this.purchaseCartAccessories.push(this.newaccessoriesData());
    }
    alertWithSuccess(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Done', msg, 'success').then((res) => {
            location.reload();
        });
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', msg, 'error').then((res) => {
        });
    }
    onSubmit() {
        this.id = localStorage.getItem('id');
        console.log('idt', this.id);
        console.log('form', this.purchuseInvoiceForm.value);
        this.serInvoices
            .addPurchuseInvoice(this.id, this.purchuseInvoiceForm.value)
            .subscribe((res) => {
            console.log('form', this.purchuseInvoiceForm.value);
            console.log('response', res);
            this.alertWithSuccess("Saved Successfully");
        }, (error) => {
            console.log('error', error);
            this.alertWithFail(error.error);
        });
    }
};
AddPurchaseInvoiceComponent.ctorParameters = () => [
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"] },
    { type: _services_model_price_service__WEBPACK_IMPORTED_MODULE_7__["ModelPriceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddPurchaseInvoiceComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['Model',] }]
};
AddPurchaseInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-purchase-invoice',
        template: _raw_loader_add_purchase_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_purchase_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPurchaseInvoiceComponent);



/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DataService = class DataService {
    constructor() { }
    createDb() {
        let services = [
            {
                id: 1,
                service_img: 'assets/img/services/service-01.jpg',
                user_img: 'assets/img/customer/user-01.jpg',
                service_name: 'Toughened Glass Fitting Services',
                user_name: 'Jeffrey Akridge',
                name: 'Cleaning',
                country: 'Wayne, New Jersey ',
                amount: '$25',
                mobile: 'xxxxxxxx49',
                date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'User Rejected',
            },
            {
                id: 2,
                service_img: 'assets/img/services/service-02.jpg',
                user_img: 'assets/img/customer/user-02.jpg',
                service_name: 'Car Repair Services',
                user_name: 'Nancy Olson',
                name: 'Automobile',
                country: 'Hanover, Maryland ',
                amount: '$50',
                mobile: 'xxxxxxxx85',
                date: 'Wed Jul 21 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Payment Completed',
            },
            {
                id: 3,
                service_img: 'assets/img/services/service-03.jpg',
                user_img: 'assets/img/customer/user-03.jpg',
                service_name: 'Electric Panel Repairing Service',
                user_name: 'Ramona Kingsley',
                name: 'Electrical',
                country: 'Kalispell, Montana ',
                amount: '$45',
                mobile: 'xxxxxxxx30',
                date: 'Wed Jul 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Provider Rejected',
            },
            {
                id: 4,
                service_img: 'assets/img/services/service-04.jpg',
                user_img: 'assets/img/customer/user-04.jpg',
                service_name: 'Steam Car Wash',
                user_name: 'Ricardo Lung',
                name: 'Car Wash',
                country: 'Electra, Texas',
                amount: '$14',
                mobile: 'xxxxxxxx74',
                date: 'Wed Jul 14 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Payment Completed',
            },
            {
                id: 5,
                service_img: 'assets/img/services/service-05.jpg',
                user_img: 'assets/img/customer/user-05.jpg',
                service_name: 'House Cleaning Services',
                user_name: 'Annette Silva',
                name: 'Cleaning',
                country: 'Sylvester, Georgia',
                amount: '$100',
                mobile: 'xxxxxxxx91',
                date: 'Wed Jul 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Payment Completed',
            },
            {
                id: 6,
                service_img: 'assets/img/services/service-06.jpg',
                user_img: 'assets/img/customer/user-06.jpg',
                service_name: 'Computer & Server AMC Service',
                user_name: 'Stephen Wilson',
                name: 'Computer',
                country: 'Los Angeles, California',
                amount: '$80',
                mobile: 'xxxxxxxx92',
                date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Provider Rejected',
            },
            {
                id: 7,
                service_img: 'assets/img/services/service-07.jpg',
                user_img: 'assets/img/customer/user-07.jpg',
                service_name: 'Interior Designing',
                user_name: ' Ryan Rodriguez',
                name: 'Interior',
                country: 'Hanover, Maryland',
                amount: '$5',
                mobile: 'xxxxxxxx28',
                date: 'Wed Jul 24 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Provider Rejected',
            },
            {
                id: 8,
                service_img: 'assets/img/services/service-08.jpg',
                user_img: 'assets/img/customer/user-08.jpg',
                service_name: 'Building Construction Services',
                user_name: 'Lucile Devera',
                name: 'Construction',
                country: 'Burr Ridge, Illinois',
                amount: '$75',
                mobile: 'xxxxxxxx62',
                date: 'Wed Jul 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Provider Rejected',
            },
            {
                id: 9,
                service_img: 'assets/img/services/service-09.jpg',
                user_img: 'assets/img/customer/user-09.jpg',
                service_name: 'Commercial Painting Services',
                user_name: ' Jeffrey Akridge',
                name: 'Painting',
                country: 'Huntsville, Alabama',
                amount: '$500',
                mobile: 'xxxxxxxx75',
                date: 'Wed Jul 25 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'User Rejected',
            },
            {
                id: 10,
                service_img: 'assets/img/services/service-10.jpg',
                user_img: 'assets/img/customer/user-10.jpg',
                service_name: 'Plumbing Services',
                user_name: ' Jeffrey Akridge',
                name: 'Plumbing',
                country: 'Richmond, Virginia',
                amount: '$150',
                mobile: 'xxxxxxxx13',
                date: 'Wed Jul 03 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'User Rejected',
            },
        ];
        let specialityList = [
            {
                id: 1,
                key: '1',
                speciality: 'Computer',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-01.jpg',
                ratings: '21',
                checked: true,
            },
            {
                id: 2,
                key: '2',
                speciality: 'Interior',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-02.jpg',
                ratings: '14',
                checked: true,
            },
            {
                id: 3,
                key: '3',
                speciality: 'Car Wash',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-03.jpg',
                ratings: '15',
                checked: false,
            },
            {
                id: 4,
                key: '4',
                speciality: 'Cleaning',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-04.jpg',
                ratings: '13',
                checked: false,
            },
            {
                id: 5,
                key: '5',
                speciality: 'Electrical',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-05.jpg',
                ratings: '10',
                checked: true,
            },
            {
                id: 5,
                key: '6',
                speciality: 'Construction',
                date: 'Wed Mar 07 2020 10:04:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/category/category-06.jpg',
                ratings: '8',
                checked: true,
            },
        ];
        let appointments = [
            {
                id: 1,
                service_name: 'Car Repair Services',
                img: 'assets/img/services/service-02.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                user_id: '1',
                booking_date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                booking_time: '13:00:00 - 14:00:00',
                phone: '410-242-3850',
                location: '223 Jehovah Drive Roanoke',
                status: 'Complete request sent to user',
                amount: '$200.00',
                option1: '',
                option2: '',
                option3: '',
            },
            {
                id: 2,
                service_name: 'Electric Panel Repairing Service',
                img: 'assets/img/services/service-03.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                user_id: '2',
                booking_date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                booking_time: '13:00:00 - 14:00:00',
                phone: '410-242-3850',
                location: '223 Jehovah Drive Roanoke',
                status: 'Inprogress',
                amount: '$300.00',
                option1: 'Chat',
                option2: 'User request accept',
                option3: 'Cancel the service',
            },
            {
                id: 3,
                service_name: 'Steam Car Wash',
                img: 'assets/img/services/service-04.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                user_id: '3',
                booking_date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                booking_time: '13:00:00 - 14:00:00',
                phone: '410-242-3850',
                location: '223 Jehovah Drive Roanoke',
                status: 'Rejected by user',
                amount: '$150.00',
                option1: '',
                option2: 'Reason',
                option3: '',
            },
            {
                id: 4,
                service_name: 'House Cleaning Services',
                user_id: '4',
                img: 'assets/img/services/service-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-01.jpg',
                booking_date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                booking_time: '13:00:00 - 14:00:00',
                phone: '410-242-3850',
                location: '223 Jehovah Drive Roanoke',
                status: 'Pending',
                amount: '$150.00',
                option1: '',
                option2: 'User request accept',
                option3: 'Cancel the service',
            },
            {
                id: 5,
                service_name: 'Interior Designing',
                user_id: '5',
                img: 'assets/img/services/service-05.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                booking_date: 'Wed Jul 23 2020 09:41:48 GMT+0530 (India Standard Time)',
                booking_time: '13:00:00 - 14:00:00',
                phone: '410-242-3850',
                location: '223 Jehovah Drive Roanoke',
                status: 'Pending',
                amount: '$200.00',
                option1: '',
                option2: 'User request accept',
                option3: 'Cancel the service',
            },
        ];
        let reviews = [
            {
                id: 1,
                service_img: 'assets/img/services/service-08.jpg',
                user_img: 'assets/img/customer/user-01.jpg',
                user_name: 'Jeffrey Akridge',
                ratings: '5',
                description: 'Building Construction Services',
                date: 'Wed Jul 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Good Work',
            },
            {
                id: 2,
                service_img: 'assets/img/services/service-09.jpg',
                user_img: 'assets/img/customer/user-02.jpg',
                user_name: 'Nancy Olson',
                ratings: '5',
                description: 'Commercial Painting Services',
                date: 'Wed Jul 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Best Work',
            },
            {
                id: 3,
                service_img: 'assets/img/services/service-10.jpg',
                user_img: 'assets/img/customer/user-03.jpg',
                user_name: 'Ramona Kingsley',
                ratings: '4',
                description: 'Plumbing Services',
                date: 'Wed Jul 29 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Excellent Service',
            },
            {
                id: 4,
                service_img: 'assets/img/services/service-11.jpg',
                user_img: 'assets/img/customer/user-04.jpg',
                user_name: 'Jeffrey Akridge',
                ratings: '5',
                description: 'Wooden Carpentry Work',
                date: 'Wed Jul 26 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Thanks',
            },
            {
                id: 5,
                service_img: 'assets/img/services/service-12.jpg',
                user_img: 'assets/img/customer/user-05.jpg',
                user_name: 'Annette Silva',
                ratings: '5',
                description: 'Air Conditioner Service',
                date: 'Wed Jul 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Good Work',
            },
            {
                id: 6,
                service_img: 'assets/img/services/service-01.jpg',
                user_img: 'assets/img/customer/user-06.jpg',
                user_name: 'Stephen Wilson',
                ratings: '5',
                description: 'Toughened Glass Fitting Services',
                date: 'Wed Jul 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Great',
            },
            {
                id: 7,
                service_img: 'assets/img/services/service-02.jpg',
                user_img: 'assets/img/customer/user-07.jpg',
                user_name: 'Ryan Rodriguez',
                ratings: '5',
                description: 'Car Repair Services',
                date: 'Wed Jul 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Good Support',
            },
            {
                id: 8,
                service_img: 'assets/img/services/service-03.jpg',
                user_img: 'assets/img/customer/user-08.jpg',
                user_name: 'Jeffrey Akridge',
                ratings: '5',
                description: 'Electric Panel Repairing Service',
                date: 'Wed Jul 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                commands: 'Good Work',
            },
        ];
        let comments = [
            {
                name: 'Michelle Fairfax',
                email: 'Fairfax@example.com',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                name: 'Elsie Gilley',
                email: 'Fairfax@example.com',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
        ];
        let plans = [
            {
                id: 1,
                name: 'Basic',
                price: '0.00',
                duration: '3',
                expiry: '90',
                start_date: '03-04-2020',
                end_date: '02-07-2020',
                status: 'paid',
            },
            {
                id: 2,
                name: 'Standard',
                price: '50.00',
                duration: '6',
                expiry: '180',
                start_date: '03-04-2020',
                end_date: '02-07-2020',
                status: 'paid',
            },
            {
                id: 3,
                name: 'Enterprice',
                price: '1200.00',
                duration: '12',
                expiry: '360',
                start_date: '03-04-2020',
                end_date: '02-07-2020',
                status: 'paid',
            },
        ];
        let available_days = [
            {
                id: 1,
                day: 'All Days',
            },
            {
                id: 2,
                day: 'Monday',
            },
            {
                id: 3,
                day: 'Tuesday',
            },
            {
                id: 4,
                day: 'Wednesday',
            },
            {
                id: 5,
                day: 'Thursday',
            },
            {
                id: 6,
                day: 'Friday',
            },
            {
                id: 7,
                day: 'Saturday',
            },
            {
                id: 8,
                day: 'Sunday',
            },
        ];
        let transactions = [
            {
                id: 1,
                user_id: '1',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3486',
                credit: '399',
                tax_amount: '0',
                debit: '0',
                available: '3885',
                reason: 'Complete the Service',
                status: 'Credit',
            },
            {
                id: 2,
                user_id: '2',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3386',
                credit: '100',
                tax_amount: '0',
                debit: '0',
                available: '3486',
                reason: 'Complete the Service',
                status: 'Credit',
            },
            {
                id: 3,
                user_id: '3',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3236',
                credit: '150',
                tax_amount: '0',
                debit: '100',
                available: '3286',
                reason: 'Withdraw',
                status: 'Debit',
            },
            {
                id: 4,
                user_id: '4',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3211',
                credit: '25',
                tax_amount: '0',
                debit: '0',
                available: '3236',
                reason: 'Complete the Service',
                status: 'Credit',
            },
            {
                id: 5,
                user_id: '5',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3186',
                credit: '25',
                tax_amount: '0',
                debit: '100',
                available: '3111',
                reason: 'Withdraw',
                status: 'Debit',
            },
            {
                id: 6,
                user_id: '6',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3236',
                credit: '0',
                tax_amount: '0',
                debit: '50',
                available: '3186',
                reason: 'Withdraw',
                status: 'Debit',
            },
            {
                id: 7,
                user_id: '7',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3136',
                credit: '100',
                tax_amount: '0',
                debit: '100',
                available: '3136',
                reason: 'Withdraw',
                status: 'Debit',
            },
            {
                id: 8,
                user_id: '8',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3036',
                credit: '100',
                tax_amount: '0',
                debit: '0',
                available: '3136',
                reason: 'Complete the Service',
                status: 'Credit',
            },
            {
                id: 9,
                user_id: '9',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3136',
                credit: '4',
                tax_amount: '0',
                debit: '0',
                available: '3036',
                reason: 'Complete the Service',
                status: 'Credit',
            },
            {
                id: 10,
                user_id: '10',
                date: 'Wed Jul 18 2020 09:41:48 GMT+0530 (India Standard Time)',
                wallet: '3028',
                credit: '4',
                tax_amount: '0',
                debit: '0',
                available: '3032',
                reason: 'Complete the Service',
                status: 'Credit',
            },
        ];
        let notifications = [
            {
                id: 1,
                text: 'Jeffrey Akridge has booked your service',
                date: 'Wed Oct 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-01.jpg',
            },
            {
                id: 2,
                text: 'Nancy Olson booked your service',
                date: 'Wed Oct 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
            },
            {
                id: 3,
                text: 'Ramona Kingsley booked your service',
                date: 'Wed Oct 9 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-03.jpg',
            },
            {
                id: 4,
                text: 'Ricardo Lung have rejected the service',
                date: 'Wed Oct 8 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-04.jpg',
            },
            {
                id: 5,
                text: 'Annette Silva has booked your service',
                date: 'Wed Oct 7 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-05.jpg',
            },
            {
                id: 6,
                text: 'Stephen Wilson has booked your service',
                date: 'Wed Oct 6 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-06.jpg',
            },
            {
                id: 7,
                text: 'Ryan Rodriguez has booked your service',
                date: 'Wed Oct 5 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-07.jpg',
            },
            {
                id: 8,
                text: 'Lucile Devera booked your service',
                date: 'Wed oct 4 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-08.jpg',
            },
            {
                id: 9,
                text: 'Roland Storey has booked your service',
                date: 'Wed Oct 3 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-09.jpg',
            },
            {
                id: 10,
                text: 'Lindsey Parmley has cancelled the service',
                date: 'Wed oct 2 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-10.jpg',
            },
        ];
        let categories = [
            {
                id: 1,
                name: 'Computer',
                img: 'assets/img/category/category-01.jpg',
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 2,
                name: 'Interior',
                img: 'assets/img/category/category-02.jpg',
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 3,
                name: 'Car Wash',
                img: 'assets/img/category/category-03.jpg',
                date: 'Wed Sep 9 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 4,
                name: 'Cleaning',
                img: 'assets/img/category/category-04.jpg',
                date: 'Wed Sep 8 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 5,
                name: 'Electrical',
                img: 'assets/img/category/category-05.jpg',
                date: 'Wed Sep 7 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 6,
                name: 'Construction',
                img: 'assets/img/category/category-06.jpg',
                date: 'Wed Sep 6 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 7,
                name: 'Plumbing',
                img: 'assets/img/category/category-07.jpg',
                date: 'Wed Sep 5 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 8,
                name: 'Carpentry',
                img: 'assets/img/category/category-08.jpg',
                date: 'Wed Sep 4 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 9,
                name: 'Appliance',
                img: 'assets/img/category/category-09.jpg',
                date: 'Wed Sep 3 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 10,
                name: 'Auto Mobile',
                img: 'assets/img/category/category-09.jpg',
                date: 'Wed Sep 3 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 11,
                name: 'Painting',
                img: 'assets/img/category/category-09.jpg',
                date: 'Wed Sep 3 2020 09:41:48 GMT+0530 (India Standard Time)',
            }
        ];
        let sub_categories = [
            {
                id: 1,
                name: 'Bus Service',
                cat_id: 7,
                img: 'assets/img/sub-category/sub-category-01.jpg',
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 2,
                name: 'Office Construction',
                cat_id: 6,
                img: 'assets/img/sub-category/sub-category-02.jpg',
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 3,
                name: 'Indoor Interior',
                cat_id: 2,
                img: 'assets/img/sub-category/sub-category-03.jpg',
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 4,
                name: 'House Cleaning',
                cat_id: 4,
                img: 'assets/img/sub-category/sub-category-04.jpg',
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 5,
                name: 'Office Electrical',
                cat_id: 5,
                img: 'assets/img/sub-category/sub-category-05.jpg',
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 6,
                name: 'Home Carpentry',
                cat_id: 8,
                img: 'assets/img/sub-category/sub-category-06.jpg',
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 7,
                name: 'Hardware',
                cat_id: 1,
                img: 'assets/img/sub-category/sub-category-07.jpg',
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 8,
                name: 'Software',
                cat_id: 1,
                img: 'assets/img/sub-category/sub-category-08.jpg',
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 9,
                name: 'Wall Painting',
                cat_id: 11,
                img: 'assets/img/sub-category/sub-category-09.jpg',
                date: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
            },
            {
                id: 10,
                name: 'Body Wash',
                cat_id: 3,
                img: 'assets/img/sub-category/sub-category-10.jpg',
                date: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
            }
        ];
        let all_reports = [
            {
                id: 1,
                date: 'Wed Sep 16 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$25',
                status: 'Pending',
                updated: 'Today 01:38 PM'
            },
            {
                id: 2,
                date: 'Wed Sep 15 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$50',
                status: 'Complete Request',
                updated: 'Yesterday 01:35 PM'
            },
            {
                id: 3,
                date: 'Wed Sep 14 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ramona Kingsley',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$45',
                status: 'Inprogress',
                updated: 'Yesterday 01:31 PM'
            },
            {
                id: 4,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: 'Steam Car Wash',
                amount: '$14',
                status: 'Pending',
                updated: 'Yesterday 01:29 PM'
            },
            {
                id: 5,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silva',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Rejected by User',
                updated: 'Yesterday 01:21 PM'
            },
            {
                id: 6,
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$25',
                status: 'Pending',
                updated: 'Yesterday 01:03 PM'
            },
            {
                id: 7,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: '	Interior Designing',
                amount: '$5',
                status: 'Pending',
                updated: '10 Sep 2020 08:03 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$75',
                status: 'Complete Request',
                updated: '9 Sep 2020 09:38 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$75',
                status: 'Inprogress',
                updated: '8 Sep 2020 09:37 PM'
            },
            {
                id: 9,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Commercial Painting Services',
                amount: '$500',
                status: 'Pending',
                updated: '7 Sep 2020 06:27 PM'
            },
            {
                id: 10,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$75',
                status: 'Cancelled by Provider',
                updated: '6 Sep 2020 04:27 PM'
            },
        ];
        let pending_reports = [
            {
                id: 1,
                date: 'Wed Sep 15 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$75',
                status: 'Pending',
                updated: 'Yesterday 01:35 PM'
            },
            {
                id: 2,
                date: 'Wed Sep 14 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ramona Kingsley',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$45',
                status: 'Pending',
                updated: 'Yesterday 01:31 PM'
            },
            {
                id: 3,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: '	Steam Car Wash',
                amount: '$75',
                status: 'Pending',
                updated: 'Yesterday 01:29 PM'
            },
            {
                id: 4,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silva',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Pending',
                updated: 'Yesterday 01:21 PM'
            },
            {
                id: 5,
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$100',
                status: 'Pending',
                updated: 'Yesterday 01:03 PM'
            },
            {
                id: 6,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: 'Interior Designing',
                amount: '$10',
                status: 'Pending',
                updated: '10 Sep 2020 08:03 PM'
            },
            {
                id: 7,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Building Construction Services',
                amount: '$100',
                status: 'Pending',
                updated: '9 Sep 2020 09:38 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Commercial Painting Services',
                amount: '$500',
                status: 'Pending',
                updated: '8 Sep 2020 09:37 PM'
            },
            {
                id: 9,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$100',
                status: 'Pending',
                updated: '7 Sep 2020 06:27 PM'
            },
            {
                id: 10,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$100',
                status: 'Pending',
                updated: 'Today 01:38 PM'
            }
        ];
        let inprogress_reports = [
            {
                id: 1,
                date: 'Wed Sep 14 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$45',
                status: 'Inprogress',
                updated: 'Yesterday 01:31 PM'
            },
            {
                id: 2,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: 'Steam Car Wash',
                amount: '$14',
                status: 'Inprogress',
                updated: 'Yesterday 01:29 PM'
            },
            {
                id: 3,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silva',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Inprogress',
                updated: 'Yesterday 01:21 PM'
            },
            {
                id: 4,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$80',
                status: 'Inprogress',
                updated: 'Yesterday 01:03 PM'
            },
            {
                id: 5,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: 'Interior Designing',
                amount: '$50',
                status: 'Inprogress',
                updated: '10 Sep 2020 08:03 PM'
            },
            {
                id: 6,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Building Construction Services',
                amount: '$75',
                status: 'Inprogress',
                updated: '09 Sep 2020 09:38 PM'
            },
            {
                id: 7,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Commercial Painting Services',
                amount: '$500',
                status: 'Inprogress',
                updated: '8 Sep 2020 09:37 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$100',
                status: 'Inprogress',
                updated: '7 Sep 2020 06:27 PM'
            },
            {
                id: 9,
                date: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$100',
                status: 'Inprogress',
                updated: 'Today 01:38 PM'
            },
            {
                id: 10,
                date: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$100',
                status: 'Inprogress',
                updated: 'Yesterday 01:35 PM'
            }
        ];
        let completed_reports = [
            {
                id: 1,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: 'Steam Car Wash',
                amount: '$45',
                status: 'Completed',
                updated: 'Yesterday 01:29 PM',
                type_name: 'Normal',
                ratings: '4.0',
                commands: 'Good Work'
            },
            {
                id: 2,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silvaw',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Completed',
                updated: 'Yesterday 01:21 PM',
                type_name: 'Excellent',
                ratings: '5.0',
                commands: 'Best Work'
            },
            {
                id: 3,
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$80',
                status: 'Completed',
                updated: 'Yesterday 01:03 PM',
                type_name: 'Excellent',
                ratings: '5.0',
                commands: 'Excellent Service'
            },
            {
                id: 4,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: 'Interior Designing',
                amount: '$55',
                status: 'Completed',
                updated: '10 Sep 2020 08:03 PM',
                type_name: 'Excellent',
                ratings: '5.0',
                commands: 'Thanks'
            },
            {
                id: 5,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Building Construction Services',
                amount: '$75',
                status: 'Completed',
                updated: '09 Sep 2020 09:38 PM',
                type_name: 'Excellent',
                ratings: '5.0',
                commands: 'Amazing'
            },
            {
                id: 6,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Building Construction Services',
                amount: '$500',
                status: 'Completed',
                updated: '8 Sep 2020 09:37 PM',
                type_name: 'Normal',
                ratings: '4.0',
                commands: 'Great'
            },
            {
                id: 7,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$150',
                status: 'Completed',
                updated: '7 Sep 2020 06:27 PM',
                type_name: 'Good',
                ratings: '4.0',
                commands: 'Good Support'
            },
            {
                id: 8,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$100',
                status: 'Completed',
                updated: 'Today 01:38 PM',
                type_name: 'Good',
                ratings: '4.0',
                commands: 'Good Work'
            },
            {
                id: 9,
                date: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$50',
                status: 'Completed',
                updated: 'Yesterday 01:35 PM',
                type_name: 'Normal',
                ratings: '4.0',
                commands: 'Great'
            },
            {
                id: 10,
                date: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ramona Kingsley',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$100',
                status: 'Completed',
                updated: 'Yesterday 01:31 PM',
                type_name: 'Normal',
                ratings: '4.0',
                commands: '-'
            }
        ];
        let rejected_reports = [
            {
                id: 1,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silvaw',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Rejected',
                updated: 'Yesterday 01:21 PM'
            },
            {
                id: 2,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$80',
                status: 'Amount refund to Provider',
                updated: 'Yesterday 01:03 PM'
            },
            {
                id: 3,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: 'Interior Designing',
                amount: '$55',
                status: 'Amount refund to Provider',
                updated: '10 Sep 2020 08:03 PM'
            },
            {
                id: 4,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Building Construction Services',
                amount: '$75',
                status: 'Rejected',
                updated: '09 Sep 2020 09:38 PM'
            },
            {
                id: 5,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Building Construction Services',
                amount: '$500',
                status: 'Amount refund to Provider',
                updated: '8 Sep 2020 09:37 PM'
            },
            {
                id: 6,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$150',
                status: 'Amount refund to Provider',
                updated: '7 Sep 2020 06:27 PM'
            },
            {
                id: 7,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$100',
                status: 'Rejected',
                updated: 'Today 01:38 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$50',
                status: 'Amount refund to Provider',
                updated: 'Yesterday 01:35 PM'
            },
            {
                id: 9,
                date: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ramona Kingsley',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$100',
                status: 'Rejected',
                updated: 'Yesterday 01:31 PM'
            },
            {
                id: 10,
                date: 'Wed Sep 03 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: 'Steam Car Wash',
                amount: '$45',
                status: 'Amount refund to Provider',
                updated: 'Yesterday 01:29 PM'
            },
        ];
        let canceled_reports = [
            {
                id: 1,
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Stephen Wilson',
                user_img: 'assets/img/customer/user-06.jpg',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                service: 'Computer & Server AMC Service',
                amount: '$80',
                status: 'Canceled',
                updated: 'Yesterday 01:03 PM'
            },
            {
                id: 2,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ryan Rodriguez',
                user_img: 'assets/img/customer/user-07.jpg',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                service: 'Interior Designing',
                amount: '$55',
                status: 'Canceled',
                updated: '10 Sep 2020 08:03 PM'
            },
            {
                id: 3,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lucile Devera',
                user_img: 'assets/img/customer/user-08.jpg',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                service: 'Building Construction Services',
                amount: '$75',
                status: 'Canceled',
                updated: '9 Sep 2020 09:38 PM'
            },
            {
                id: 4,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Roland Storey',
                user_img: 'assets/img/customer/user-09.jpg',
                provider_name: 'David Morrison',
                provider_img: 'assets/img/provider/provider-09.jpg',
                service: 'Building Construction Services',
                amount: '$500',
                status: 'Canceled',
                updated: '8 Sep 2020 09:37 PM'
            },
            {
                id: 5,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Lindsey Parmley',
                user_img: 'assets/img/customer/user-10.jpg',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-10.jpg',
                service: 'Plumbing Services',
                amount: '$150',
                status: 'Canceled',
                updated: '7 Sep 2020 06:27 PM'
            },
            {
                id: 6,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Jeffrey Akridge',
                user_img: 'assets/img/customer/user-01.jpg',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                service: 'Toughened Glass Fitting Services',
                amount: '$100',
                status: 'Canceled',
                updated: 'Today 01:38 PM'
            },
            {
                id: 7,
                date: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Nancy Olson',
                user_img: 'assets/img/customer/user-02.jpg',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                service: 'Car Repair Services',
                amount: '$50',
                status: 'Canceled',
                updated: 'Yesterday 01:35 PM'
            },
            {
                id: 8,
                date: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ramona Kingsley',
                user_img: 'assets/img/customer/user-03.jpg',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                service: 'Electric Panel Repairing Service',
                amount: '$100',
                status: 'Canceled',
                updated: 'Yesterday 01:31 PM'
            },
            {
                id: 9,
                date: 'Wed Sep 03 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Ricardo Lung',
                user_img: 'assets/img/customer/user-04.jpg',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                service: 'Steam Car Wash',
                amount: '$45',
                status: 'Amount refund to Provider',
                updated: 'Yesterday 01:29 PM'
            },
            {
                id: 10,
                date: 'Wed Sep 02 2020 09:41:48 GMT+0530 (India Standard Time)',
                user_name: 'Annette Silvaw',
                user_img: 'assets/img/customer/user-05.jpg',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                service: 'House Cleaning Services',
                amount: '$100',
                status: 'Canceled',
                updated: 'Yesterday 01:21 PM'
            },
        ];
        let ratings = [
            {
                id: 1,
                commands: 'Good',
                status: 'Active'
            },
            {
                id: 2,
                commands: 'Very Good',
                status: 'Active'
            },
            {
                id: 3,
                commands: 'Poor',
                status: 'Active'
            },
            {
                id: 4,
                commands: 'Fair',
                status: 'Inactive'
            },
            {
                id: 5,
                commands: 'Excellent',
                status: 'Inactive'
            },
        ];
        let wallet_report = [
            {
                id: 1,
                date: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/provider/provider-01.jpg',
                name: 'Thomas Herzberg',
                mobile: '832-212-0082',
                amount: '3885',
                role: 'Provider'
            },
            {
                id: 2,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-01.jpg',
                name: 'Jeffrey Akridge',
                mobile: '850-847-0459',
                amount: '1047',
                role: 'User'
            },
            {
                id: 3,
                date: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/provider/provider-02.jpg',
                name: 'Matthew Garcia',
                mobile: '918-454-4561',
                amount: '500',
                role: 'Provider'
            },
            {
                id: 4,
                date: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/provider/provider-03.jpg',
                name: 'Yolanda Potter',
                mobile: '360-281-3619',
                amount: '183',
                role: 'Provider'
            },
            {
                id: 5,
                date: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
                name: 'Nancy Olson',
                mobile: '901-690-8272',
                amount: '960',
                role: 'User'
            },
            {
                id: 6,
                date: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-03.jpg',
                name: 'Ramona Kingsley',
                mobile: '608-712-2413',
                amount: '718',
                role: 'User'
            },
            {
                id: 7,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/provider/provider-04.jpg',
                name: 'Ricardo Flemings',
                mobile: '631-374-3243',
                amount: '699',
                role: 'Provider'
            },
            {
                id: 8,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-04.jpg',
                name: 'Ricardo Lung',
                mobile: '714-564-6443',
                amount: '4422',
                role: 'User'
            },
        ];
        let wallet_history = [
            {
                id: 1,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-01.jpg',
                name: 'Jeffrey Akridge',
                current_amt: '1061',
                credit_amt: '-',
                debit_amt: '14',
                fee_amt: '-',
                available_amt: '1047',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 2,
                date: 'Wed Sep 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-01.jpg',
                name: 'Jeffrey Akridge',
                current_amt: '1111',
                credit_amt: '-',
                debit_amt: '50',
                fee_amt: '-',
                available_amt: '1061',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 3,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
                name: 'Ramona Kingsley',
                current_amt: '1211',
                credit_amt: '-',
                debit_amt: '100',
                fee_amt: '-',
                available_amt: '1111',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 4,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-04.jpg',
                name: 'Ricardo Lung',
                current_amt: '1461',
                credit_amt: '-',
                debit_amt: '250',
                fee_amt: '-',
                available_amt: '1211',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 5,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
                name: 'Annette Silva',
                current_amt: '1711',
                credit_amt: '-',
                debit_amt: '250',
                fee_amt: '-',
                available_amt: '1461',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 6,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
                name: 'Stephen Wilson',
                current_amt: '2211',
                credit_amt: '-',
                debit_amt: '500',
                fee_amt: '-',
                available_amt: '1711',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
            {
                id: 7,
                date: 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard Time)',
                img: 'assets/img/customer/user-02.jpg',
                name: 'Ryan Rodriguez',
                current_amt: '2711',
                credit_amt: '-',
                debit_amt: '500',
                fee_amt: '-',
                available_amt: '2211',
                reason: 'Booked a Service',
                pay_type: 'Debit',
                role: 'User'
            },
        ];
        let subscriptions = [
            {
                id: 1,
                date: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Thomas Herzberg',
                provider_img: 'assets/img/provider/provider-01.jpg',
                subscription: 'Enterprice',
                email: 'thomasherzberg@example.com',
                mobile: '832-212-0082',
                status: 'Pending',
            },
            {
                id: 2,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Matthew Garcia',
                provider_img: 'assets/img/provider/provider-02.jpg',
                subscription: 'Enterprice',
                email: 'matthewgarcia@example.com',
                mobile: '918-454-4561',
                status: 'Standard',
            },
            {
                id: 3,
                date: 'Wed Sep 20 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Yolanda Potter',
                provider_img: 'assets/img/provider/provider-03.jpg',
                subscription: 'Basic',
                email: 'yolandapotter@example.com',
                mobile: '360-281-3619',
                status: 'Pending',
            },
            {
                id: 4,
                date: 'Wed Sep 15 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Ricardo Flemings',
                provider_img: 'assets/img/provider/provider-04.jpg',
                subscription: 'Standard',
                email: 'ricardoflemings@example.com',
                mobile: '631-374-3243',
                status: 'Pending',
            },
            {
                id: 5,
                date: 'Wed Sep 01 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Maritza Wasson',
                provider_img: 'assets/img/provider/provider-05.jpg',
                subscription: 'Basic',
                email: 'maritzawasson@example.com',
                mobile: '979-844-9766',
                status: 'Pending',
            },
            {
                id: 6,
                date: 'Wed Jul 24 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Marya Ruiz',
                provider_img: 'assets/img/provider/provider-06.jpg',
                subscription: 'Enterprice',
                email: 'maryaruiz@example.com',
                mobile: '814-537-9709',
                status: 'Pending',
            },
            {
                id: 7,
                date: 'Wed Sep 21 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Richard Hughes',
                provider_img: 'assets/img/provider/provider-07.jpg',
                subscription: 'Standard',
                email: 'richardhughes@example.com',
                mobile: '937-846-6789',
                status: 'Pending',
            },
            {
                id: 8,
                date: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                subscription: 'Basic',
                email: 'ninawilson@example.com',
                mobile: '419-523-6835',
                status: 'Pending',
            },
            {
                id: 9,
                date: 'Wed Sep 30 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Nina Wilson',
                provider_img: 'assets/img/provider/provider-08.jpg',
                subscription: 'Enterprice',
                email: 'davidmorrison@example.com',
                mobile: '703-214-9351',
                status: 'Pending',
            },
            {
                id: 10,
                date: 'Wed Sep 28 2020 09:41:48 GMT+0530 (India Standard Time)',
                provider_name: 'Linda Brooks',
                provider_img: 'assets/img/provider/provider-09.jpg',
                subscription: 'Basic',
                email: 'lindabrooks@example.com',
                mobile: '512-243-2686',
                status: 'Pending',
            },
        ];
        let users = [
            {
                id: 1,
                name: 'Jeffrey Akridge',
                img: 'assets/img/customer/user-01.jpg',
                email: 'jeffreyakridge@example.com',
                mobile: '850-847-0459',
                signup: 'Wed Sep 10 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 2,
                name: 'Nancy Olson',
                img: 'assets/img/customer/user-02.jpg',
                email: 'nancyolson@example.com',
                mobile: '901-690-8272',
                signup: 'Wed Sep 08 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 3,
                name: 'Ramona Kingsley',
                img: 'assets/img/customer/user-03.jpg',
                email: 'ramonakingsley@example.com',
                mobile: '608-712-2413',
                signup: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 07 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 4,
                name: 'Ricardo Lung',
                img: 'assets/img/customer/user-04.jpg',
                email: 'ricardolung@example.com',
                mobile: '714-564-6443',
                signup: 'Wed Sep 03 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 5,
                name: 'Annette Silva',
                img: 'assets/img/customer/user-05.jpg',
                email: 'annettesilva@example.com',
                mobile: '517-697-4628',
                signup: 'Wed Aug 31 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 04 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 6,
                name: 'Stephen Wilson',
                img: 'assets/img/customer/user-06.jpg',
                email: 'stephenwilson@example.com',
                mobile: '903-367-8263',
                signup: 'Wed Aug 19 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Aug 29 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 7,
                name: 'Ryan Rodriguez',
                img: 'assets/img/customer/user-07.jpg',
                email: 'ryanrodriguez@example.com',
                mobile: '	912-748-9361',
                signup: 'Wed Aug 15 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 8,
                name: 'Lucile Devera',
                img: 'assets/img/customer/user-08.jpg',
                email: 'luciledevera@example.com',
                mobile: '817-913-0462',
                signup: 'Wed Aug 06 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Aug 13 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 9,
                name: 'Roland Storey',
                img: 'assets/img/customer/user-09.jpg',
                email: 'rolandstorey@example.com',
                mobile: '201-929-0473',
                signup: 'Wed Jun 27 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
            {
                id: 10,
                name: 'Lindsey Parmley',
                img: 'assets/img/customer/user-10.jpg',
                email: 'lindseyparmley@example.com',
                mobile: '740-485-5513',
                signup: 'Wed Sep 09 2020 09:41:48 GMT+0530 (India Standard Time)',
                last_login: 'Wed Sep 05 2020 09:41:48 GMT+0530 (India Standard Time)',
                status: 'Pending',
            },
        ];
        return {
            transactions: transactions,
            comments: comments,
            specialityList: specialityList,
            appointments: appointments,
            reviews: reviews,
            services: services,
            plans: plans,
            available_days: available_days,
            notifications: notifications,
            categories: categories,
            sub_categories: sub_categories,
            all_reports: all_reports,
            pending_reports: pending_reports,
            inprogress_reports: inprogress_reports,
            completed_reports: completed_reports,
            rejected_reports: rejected_reports,
            canceled_reports: canceled_reports,
            ratings: ratings,
            wallet_history: wallet_history,
            wallet_report: wallet_report,
            subscriptions: subscriptions,
            users: users,
        };
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ "ZnuR":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/pending-purchase-invoice/pending-purchase-invoice.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n   \r\n          <nz-table #basicTable [nzData]=\"pending\">\r\n            <thead>\r\n              <tr>\r\n             \r\n              \r\n             \r\n                <th>Purchase Number</th>\r\n                <th>Status</th>\r\n                <th class=\"text-right\">Add Supplier</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n      \r\n                <td>{{ data.purchaseNumber }}</td>\r\n                <td>{{ data.status }}</td>\r\n                <td class=\"text-right\">\r\n                  <a\r\n                    class=\"table-action-btn btn btn-sm bg-success-light\"\r\n                    (click)=\"AddSupplier(data._id)\"\r\n                  >\r\n                    Add Supplier\r\n                  </a>\r\n                </td>\r\n            \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"row pricing-box\">\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Basic</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$0.00</h3>\r\n                    <p>Duration: <span>3 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 3 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Standard</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$50.00</h3>\r\n                    <p>Duration: <span>6 Months</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> 6 Months expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Enterprice</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$1200.00</h3>\r\n                    <p>Duration: <span>One Year</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> One Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"pricing-header\">\r\n                    <h2>Gold</h2>\r\n                    <p>Monthly Price</p>\r\n                </div>\r\n                <div class=\"pricing-card-price\">\r\n                    <h3 class=\"heading2 price\">$2000.00</h3>\r\n                    <p>Duration: <span>2 Years</span></p>\r\n                </div>\r\n                <ul class=\"pricing-options\">\r\n                    <li><i class=\"far fa-check-circle\"></i> One listing submission</li>\r\n                    <li><i class=\"far fa-check-circle\"></i> Two Year expiration</li>\r\n                </ul>\r\n                <a [routerLink]=\"'/admin/edit-subscription'\" class=\"btn btn-primary btn-block\">View</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n");

/***/ }),

/***/ "ao+c":
/*!***************************************************!*\
  !*** ./src/app/admin/invoices/invoices.module.ts ***!
  \***************************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoices-routing.module */ "7mta");
/* harmony import */ var _add_sale_invoice_add_sale_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sale-invoice/add-sale-invoice.component */ "t5Gv");
/* harmony import */ var _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sale/list-sale.component */ "5Nn8");
/* harmony import */ var _list_purchase_list_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-purchase/list-purchase.component */ "8nrr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "koPj");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _add_purchase_invoice_add_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-purchase-invoice/add-purchase-invoice.component */ "OTxW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pending_sale_invoice_pending_sale_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pending-sale-invoice/pending-sale-invoice.component */ "GGNP");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/filter.pipe */ "I59L");
/* harmony import */ var _edit_pricing_model_edit_pricing_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-pricing-model/edit-pricing-model.component */ "uaF6");
/* harmony import */ var _add_price_pending_sale_add_price_pending_sale_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-price-pending-sale/add-price-pending-sale.component */ "+ijF");
/* harmony import */ var _pending_purchase_invoice_pending_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pending-purchase-invoice/pending-purchase-invoice.component */ "biym");
/* harmony import */ var _add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-supplier/add-supplier.component */ "/AqU");
/* harmony import */ var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/ng-zoro.module */ "LkBz");
/* harmony import */ var _purchase_details_purchase_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./purchase-details/purchase-details.component */ "wRsQ");
/* harmony import */ var _sale_details_sale_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sale-details/sale-details.component */ "urY9");














// import { PricingModelComponent } from './pricing-model/pricing-model.component';










let InvoicesModule = class InvoicesModule {
};
InvoicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_sale_invoice_add_sale_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AddSaleInvoiceComponent"],
            _list_sale_list_sale_component__WEBPACK_IMPORTED_MODULE_5__["ListSaleComponent"],
            _list_purchase_list_purchase_component__WEBPACK_IMPORTED_MODULE_6__["ListPurchaseComponent"],
            _add_purchase_invoice_add_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_12__["AddPurchaseInvoiceComponent"],
            // PricingModelComponent,
            _pending_sale_invoice_pending_sale_invoice_component__WEBPACK_IMPORTED_MODULE_14__["PendingSaleInvoiceComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
            _edit_pricing_model_edit_pricing_model_component__WEBPACK_IMPORTED_MODULE_16__["EditPricingModelComponent"],
            _add_price_pending_sale_add_price_pending_sale_component__WEBPACK_IMPORTED_MODULE_17__["AddPricePendingSaleComponent"],
            _pending_purchase_invoice_pending_purchase_invoice_component__WEBPACK_IMPORTED_MODULE_18__["PendingPurchaseInvoiceComponent"],
            _add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_19__["AddSupplierComponent"],
            _purchase_details_purchase_details_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseDetailsComponent"],
            _sale_details_sale_details_component__WEBPACK_IMPORTED_MODULE_22__["SaleDetailsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _invoices_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoicesRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_8__["NgSelect2Module"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["InMemoryWebApiModule"].forRoot(src_app_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
            src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_20__["DemoNgZorroAntdModule"]
        ],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]],
    })
], InvoicesModule);



/***/ }),

/***/ "asHu":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/invoices/pending-purchase-invoice/pending-purchase-invoice.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5kaW5nLXB1cmNoYXNlLWludm9pY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "bDkD":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/list-purchase/list-purchase.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n      \r\n\r\n          <nz-table #basicTable [nzData]=\"invoices\">\r\n            <thead>\r\n              <tr>\r\n             \r\n              \r\n                <th>Purchase Number</th>\r\n                <th>Supplier</th>\r\n                <th>Date</th>\r\n                <th class=\"text-right\">Details</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of basicTable.data\">\r\n               \r\n                <td>{{ data.purchaseNumber }}</td>\r\n                <td>{{ data.supplier }}</td>\r\n                <td>{{data.purchaseDate |date: 'dd/MM/yyyy'}}</td>\r\n                <td class=\"text-right\">\r\n                  <a class=\"table-action-btn btn btn-sm bg-success-light\" (click)=\"viewDetails(data._id)\">\r\n                    View all details\r\n                  </a>\r\n                </td>\r\n            \r\n              </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "biym":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/invoices/pending-purchase-invoice/pending-purchase-invoice.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PendingPurchaseInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPurchaseInvoiceComponent", function() { return PendingPurchaseInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pending_purchase_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pending-purchase-invoice.component.html */ "ZnuR");
/* harmony import */ var _pending_purchase_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pending-purchase-invoice.component.css */ "asHu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");
/* harmony import */ var _services_pending_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pending.service */ "yTIl");
/* harmony import */ var _add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-supplier/add-supplier.component */ "/AqU");








let PendingPurchaseInvoiceComponent = class PendingPurchaseInvoiceComponent {
    constructor(modalSer, activeModal, purchase, ser) {
        this.modalSer = modalSer;
        this.activeModal = activeModal;
        this.purchase = purchase;
        this.ser = ser;
        this.pending = Array();
    }
    ngOnInit() {
        this.purchase.listPendingPurchase().subscribe((res) => {
            console.log(res, 'pending purchase invoices');
            this.pending = res;
        });
    }
    AddSupplier(id) {
        this.idOfEditPrice = id;
        this.ser.changeidofEditPrice(this.idOfEditPrice);
        const modelRef = this.modalSer.open(_add_supplier_add_supplier_component__WEBPACK_IMPORTED_MODULE_7__["AddSupplierComponent"]);
        modelRef.componentInstance.id = 0;
        modelRef.componentInstance.data = {};
        modelRef.result.then((res) => {
            console.log(res);
        });
    }
};
PendingPurchaseInvoiceComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _services_pending_service__WEBPACK_IMPORTED_MODULE_6__["PendingService"] },
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] }
];
PendingPurchaseInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pending-purchase-invoice',
        template: _raw_loader_pending_purchase_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pending_purchase_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PendingPurchaseInvoiceComponent);



/***/ }),

/***/ "cMhz":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/add-price-pending-sale/add-price-pending-sale.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Price</h4>\r\n  <button\r\n    type=\"button\"\r\n    class=\"close\"\r\n    aria-label=\"Close\"\r\n    (click)=\"activemodal.dismiss('cross click')\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"addFormPrice\">\r\n    <div class=\"form-group\">\r\n      <br />\r\n      <label for=\"price\">Price</label>\r\n\r\n      <div class=\"input-group\">\r\n        <input\r\n          id=\"price\"\r\n          class=\"form-control\"\r\n          placeholder=\"Price..\"\r\n          name=\"peice\"\r\n          formControlName=\"price\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button\r\n    type=\"button\"\r\n    class=\"btn btn-primary\"\r\n    (click)=\"addprice(); activemodal.dismiss('cross click')\"\r\n  >\r\n    Save\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "hq7R":
/*!********************************************************************************!*\
  !*** ./src/app/admin/invoices/add-sale-invoice/add-sale-invoice.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-flex{\r\n  display: flex;\r\nflex-flow: column;\r\n}\r\na {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n   background-color: rgb(249 244 249);\r\n}\r\na:hover {\r\n  background-color: rgb(179, 177, 177);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zYWxlLWludm9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7R0FDYixrQ0FBa0M7QUFDckM7QUFFQztFQUNDLG9DQUFvQztBQUN0QyIsImZpbGUiOiJhZGQtc2FsZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5IDI0NCAyNDkpO1xyXG59XHJcblxyXG4gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc3LCAxNzcpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "jDPD":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/sale-details/sale-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pricing-box\">\n    <div class=\"col-md-8 col-lg-8 col-xl-8 m-auto\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"pricing-header\">\n            <h3 style=\"color: #ff0080\">Invoice Details</h3>\n  \n            <!-- <h4>{{goodProductDetails.ProductDetails[0].serialNumber}}</h4> -->\n            <!-- <p>Monthly Price</p> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"pricing-card-price col-md-4\">\n              <h6 class=\"heading2 price\">Customer Name</h6>\n              <span>{{ invoiceDetails?.customerName }}</span>\n              <hr />\n            </div>\n            <div class=\"col-md-4\">\n              <h6 class=\"heading2 price\">Date</h6>\n              <span>{{ invoiceDetails?.date | date: \"dd/MM/yyyy\" }}</span>\n              <hr />\n            </div>\n            <div class=\"col-md-4\">\n              <h6 class=\"heading2 price\">Seller Name</h6>\n              <span>{{ sellerName }}</span>\n              <hr />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-5\" *ngIf=\"invoiceDetails?.Products.length\">\n              <ul class=\"pricing-options\">\n                <h6 class=\"heading2 price\">All Products</h6>\n                <li *ngFor=\"let product of invoiceDetails?.Products; index as i\">\n                  <h6>\n                    <i class=\"far fa-check-circle\"></i> Serial Number:{{\n                      product.productSerialNumber\n                    }}\n                  </h6>\n                  <div>\n                    <p>Configration for this product</p>\n  \n                    <p>CPU: {{ product?.configuration?.cpu }}</p>\n                    <p>Hard: {{ product?.configuration?.hard }}</p>\n                    <p>RAM: {{ product?.configuration?.ram }}</p>\n                    <p>\n                      With charger:\n                      {{\n                        product?.configuration?.withCharger === true\n                          ? \"Yes\"\n                          : \"No\"\n                      }}\n                    </p>\n                    <p>\n                      <!-- Seller:\n                      {{\n  \n                      }} -->\n                    </p>\n                  </div>\n                  <!-- CPU:\n                  {{ product?.configuration?.cpu }}\n                  <i class=\"far fa-check-circle\"></i>\n                  {{ product?.configuration?.hard }}\n                  <i class=\"far fa-check-circle\"></i>\n                  {{ product?.configuration?.ram }}\n                  <i class=\"far fa-check-circle\"></i>\n                  {{ product?.configuration?.withCharger }} -->\n                </li>\n              </ul>\n            </div>\n          </div>\n  \n          <a\n            [routerLink]=\"'/admin/Invoices/list/sale'\"\n            class=\"btn btn-primary btn-block\"\n            >Back</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "kqSM":
/*!************************************************************************************!*\
  !*** ./src/app/admin/invoices/edit-pricing-model/edit-pricing-model.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByaWNpbmctbW9kZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "lgoI":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/invoices/add-price-pending-sale/add-price-pending-sale.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJpY2UtcGVuZGluZy1zYWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "o955":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/invoices/add-purchase-invoice/add-purchase-invoice.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".accsosories {\r\n      position: relative;\r\n      right: -79%;\r\n}\r\na {\r\n      color: black;\r\n      padding: 12px 16px;\r\n      text-decoration: none;\r\n      display: block;\r\n       background-color: rgb(249 244 249);\r\n    }\r\na:hover {\r\n      background-color: rgb(179, 177, 177);\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wdXJjaGFzZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxrQkFBa0I7TUFDbEIsV0FBVztBQUNqQjtBQUNBO01BQ00sWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsY0FBYztPQUNiLGtDQUFrQztJQUNyQztBQUVDO01BQ0Msb0NBQW9DO0lBQ3RDIiwiZmlsZSI6ImFkZC1wdXJjaGFzZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjc29zb3JpZXMge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHJpZ2h0OiAtNzklO1xyXG59XHJcbmEge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMjQ0IDI0OSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc3LCAxNzcpO1xyXG4gICAgfVxyXG4gICAgIl19 */");

/***/ }),

/***/ "qWhx":
/*!********************************************************************************!*\
  !*** ./src/app/admin/invoices/purchase-details/purchase-details.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "t5Gv":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/invoices/add-sale-invoice/add-sale-invoice.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddSaleInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaleInvoiceComponent", function() { return AddSaleInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_sale_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-sale-invoice.component.html */ "EnvP");
/* harmony import */ var _add_sale_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-sale-invoice.component.css */ "hq7R");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/product.service */ "lXKC");









let AddSaleInvoiceComponent = class AddSaleInvoiceComponent {
    // @ViewChild('Serial') serial: ElementRef;
    constructor(serInvoices, _ProductService, _fb) {
        this.serInvoices = serInvoices;
        this._ProductService = _ProductService;
        this._fb = _fb;
        this.newSection = [0];
        this.showdata = false;
        this.showPriceInput = true;
        this.displayRecomendedSerial = false;
        this.allSerialNumbers = new Array();
    }
    ngOnInit() {
        let typeOfperson = localStorage.getItem('name');
        console.log(typeOfperson);
        if (typeOfperson === 'employee') {
            this.showPriceInput = false;
        }
        // setTimeout(() => {
        //   // this will make the execution after the above boolean has changed
        //   this.serial.nativeElement.focus();
        // }, 0);
        this.getAllproducts();
        this.createSaleForm();
    }
    createSaleForm() {
        this.saleInvoiceForm = this._fb.group({
            customerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: [""],
            seller: [""],
            Products: this._fb.array([])
        });
    }
    get Products() {
        return this.saleInvoiceForm.get("Products");
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
    // selectedSerial(val,e) {
    //   this.serial.nativeElement.value = val;
    //   this.displayRecomendedSerial = true;
    //   this.getAllData();
    // }
    data(val) {
        return val;
    }
    searchSerial(val, e) {
        this.displayRecomendedSerial = false;
        var code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
            //Enter keycode
            this.displayRecomendedSerial = true;
        }
        let filterd = this.allSerialNumbers.filter(this.data);
        this.Serial = e.target.value;
    }
    // Getserial() {
    //   const valueInput = this.serial.nativeElement.value;
    //   this.Serial = valueInput;
    //   return this.Serial;
    // }
    alertWithSuccess(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Done', msg, 'success').then((res) => {
            location.reload();
        });
    }
    alertWithFail(msg) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', msg, 'error').then((res) => {
        });
    }
    onSubmit() {
        this.saleInvoiceForm.patchValue({
            seller: localStorage.getItem('id'),
        });
        let typeOfperson = localStorage.getItem('name');
        console.log(typeOfperson);
        if (typeOfperson === 'employee') {
            this.saleInvoiceForm.patchValue({
                price: null,
            });
        }
        console.log('value of form', this.saleInvoiceForm.value);
        this.serInvoices
            .addSaleInvoice(this.saleInvoiceForm.value)
            .subscribe((res) => {
            console.log('success');
            this.alertWithSuccess(res);
            console.log(res);
        }, (error) => {
            this.alertWithFail(error.error);
        });
    }
    getAllData() {
        console.log(this.Serial);
        this.serInvoices
            .listAllProductBySerial({ serialNumber: this.Serial })
            .subscribe((res) => {
            this.dataOnBlur = res;
            this.showdata = true;
            console.log(res, 'data fron blur');
        });
    }
    enterPressed(e) {
        console.log(e);
        var code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
            //Enter keycode
            this.Serial = e.target.value;
            e.target.blur();
            this.getAllData();
            this.displayRecomendedSerial = true;
        }
    }
    newProductData() {
        return this._fb.group({
            productSerialNumber: [""],
            configuration: this._fb.group({
                cpu: [""],
                withCharger: [""],
                ram: [""],
                hard: [""]
            })
        });
    }
    addNewSection() {
        // console.log(array);
        this.Products.push(this.newProductData());
        // this.newSection.push(1);
    }
};
AddSaleInvoiceComponent.ctorParameters = () => [
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddSaleInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-sale-invoice',
        template: _raw_loader_add_sale_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_sale_invoice_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddSaleInvoiceComponent);



/***/ }),

/***/ "uaF6":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/invoices/edit-pricing-model/edit-pricing-model.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditPricingModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPricingModelComponent", function() { return EditPricingModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_pricing_model_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-pricing-model.component.html */ "v5fs");
/* harmony import */ var _edit_pricing_model_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-pricing-model.component.css */ "kqSM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_model_price_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/model-price.service */ "MjzG");







let EditPricingModelComponent = class EditPricingModelComponent {
    constructor(modalService, activemodal, fromBuilder, serModel) {
        this.modalService = modalService;
        this.activemodal = activemodal;
        this.fromBuilder = fromBuilder;
        this.serModel = serModel;
        this.closeResult = '';
        this.EditFormPrice = this.fromBuilder.group({
            price: [''],
            model: [''],
        });
    }
    ngOnInit() {
        this.serModel.currentId.subscribe((res) => {
            console.log('id is', res);
            this.SelectedId = res[0];
            this.EditFormPrice.patchValue({
                model: this.SelectedId.model,
                price: this.SelectedId.price,
            });
        });
    }
    EditPrice() {
        console.log(this.EditFormPrice.value);
        this.serModel
            .EditPrice(this.SelectedId._id, this.EditFormPrice.value)
            .subscribe((res) => {
            console.log(res);
        });
    }
};
EditPricingModelComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_model_price_service__WEBPACK_IMPORTED_MODULE_6__["ModelPriceService"] }
];
EditPricingModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-pricing-model',
        template: _raw_loader_edit_pricing_model_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_pricing_model_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPricingModelComponent);



/***/ }),

/***/ "urY9":
/*!***********************************************************************!*\
  !*** ./src/app/admin/invoices/sale-details/sale-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: SaleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleDetailsComponent", function() { return SaleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sale_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sale-details.component.html */ "jDPD");
/* harmony import */ var _sale_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale-details.component.css */ "9oDe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");






let SaleDetailsComponent = class SaleDetailsComponent {
    constructor(route, _InvoicesService) {
        this.route = route;
        this._InvoicesService = _InvoicesService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get('_id');
        });
        this.getDetails(this.code);
    }
    getDetails(id) {
        this._InvoicesService.listSaleById(id).subscribe((res) => {
            console.log(res, 'sale details');
            this.invoiceDetails = res;
            console.log(this.invoiceDetails.seller);
            this._InvoicesService
                .getSellerById(this.invoiceDetails.seller)
                .subscribe((res) => {
                this.sellerName = res.name;
                console.log(res, 'seller');
                console.log('hello');
            }, (error) => {
                console.log(error, 'error');
            });
        }, (error) => {
            console.log(error);
        });
    }
};
SaleDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] }
];
SaleDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sale-details',
        template: _raw_loader_sale_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sale_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SaleDetailsComponent);



/***/ }),

/***/ "v5fs":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/edit-pricing-model/edit-pricing-model.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Model</h4>\r\n  <button\r\n    type=\"button\"\r\n    class=\"close\"\r\n    aria-label=\"Close\"\r\n    (click)=\"activemodal.dismiss('cross click')\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"EditFormPrice\">\r\n    <div class=\"form-group\">\r\n      <label for=\"dateOfBirth\">Model</label>\r\n      <div class=\"input-group\">\r\n        <input\r\n          id=\"model\"\r\n          class=\"form-control\"\r\n          placeholder=\"Model..\"\r\n          name=\"model\"\r\n          formControlName=\"model\"\r\n        />\r\n      </div>\r\n      <br />\r\n      <label for=\"price\">Price</label>\r\n\r\n      <div class=\"input-group\">\r\n        <input\r\n          id=\"price\"\r\n          class=\"form-control\"\r\n          placeholder=\"Price..\"\r\n          name=\"peice\"\r\n          formControlName=\"price\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"EditPrice()\">\r\n    Save\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "wRsQ":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/invoices/purchase-details/purchase-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PurchaseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseDetailsComponent", function() { return PurchaseDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_purchase_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./purchase-details.component.html */ "LbZR");
/* harmony import */ var _purchase_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-details.component.css */ "qWhx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/invoices.service */ "wSVp");






let PurchaseDetailsComponent = class PurchaseDetailsComponent {
    constructor(route, _InvoicesService) {
        this.route = route;
        this._InvoicesService = _InvoicesService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.code = params.get("_id");
        });
        this.getDetails(this.code);
    }
    getDetails(id) {
        this._InvoicesService.listPurchaseById(id).subscribe((res) => {
            console.log(res);
            this.invoiceDetails = res;
        }, (error) => {
            console.log(error);
        });
    }
};
PurchaseDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_invoices_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesService"] }
];
PurchaseDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-purchase-details',
        template: _raw_loader_purchase_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_purchase_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PurchaseDetailsComponent);



/***/ }),

/***/ "xLGX":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/invoices/add-purchase-invoice/add-purchase-invoice.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Row -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5 class=\"card-title\">Add Purchase Invoice Form</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <form\r\n            autocomplete=\"off\"\r\n              class=\"needs-validation\"\r\n              novalidate\r\n              [formGroup]=\"purchuseInvoiceForm\"\r\n              (ngSubmit)=\"onSubmit()\"\r\n            >\r\n              <div class=\"form-row\">\r\n          \r\n\r\n                <div class=\"col-md-4 mb-3\" *ngIf=\"showSupplierInput\">\r\n                  <label>Supplier</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"purchaseNumber\"\r\n                    placeholder=\"supplier\"\r\n                    formControlName=\"supplier\"\r\n                    required\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"card-header col-md-4 mb-3\">\r\n                <h5 class=\"card-title\">Products</h5>\r\n              </div>\r\n\r\n              <ng-container formArrayName=\"purchaseCartProducts\">\r\n                <div  *ngFor=\"let element of purchaseCartProducts.controls; let x = index\">\r\n                  <div class=\"form-row\">\r\n                    <ng-container\r\n                      [formGroupName]=\"x\"\r\n                \r\n                    >\r\n                      <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"validationCustom02\">Serial Number</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"Serial Number\"\r\n                          formControlName=\"serialNumber\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"validationCustom02\">Model</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"model\"\r\n                          formControlName=\"model\"\r\n                          required\r\n                         \r\n                          autocomplete=\"off\"\r\n                        />\r\n                     \r\n                      </div>\r\n                 \r\n                \r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n              <div class=\"text-right\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"adddNewSection()\"\r\n                >\r\n                  Add Product\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"d-block\">Add Accessories:</label>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <input\r\n                      class=\"form-check-input\"\r\n                      type=\"radio\"\r\n                      name=\"avaliable_yes_apart\"\r\n                      id=\"apart\"\r\n                      [value]=\"true\"\r\n                      (click)=\"setRadio(1)\"\r\n                    />\r\n                    <label class=\"form-check-label\" for=\"apart\"\r\n                      >Yes</label\r\n                    >\r\n                  </div>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <input\r\n                      class=\"form-check-input\"\r\n                      type=\"radio\"\r\n                      name=\"avaliable_yes_apart\"\r\n                      id=\"avaliable_no_apart\"\r\n                      [value]=\"false\"\r\n                      (click)=\"setRadio(0)\"\r\n                    />\r\n                    <label\r\n                      class=\"form-check-label\"\r\n                      for=\"avaliable_no_apart\"\r\n                      >No</label\r\n                    >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <button type=\"button\" class=\"btn btn-primary accsosories\">Add Accessories</button> -->\r\n              <ng-container\r\n                formArrayName=\"purchaseCartAccessories\"\r\n                *ngIf=\"displayAccesoryField\"\r\n              >\r\n                <hr />\r\n\r\n                <div  *ngFor=\"let element of purchaseCartAccessories.controls; let x = index\">\r\n                  <div class=\"form-row\">\r\n                    <ng-container\r\n                      [formGroupName]=\"x\"\r\n                     \r\n                    >\r\n                      <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"validationCustom02\">Type</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"Type\"\r\n                          formControlName=\"type\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"validationCustom02\">Price</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"price\"\r\n                          formControlName=\"price\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4 mb-3\">\r\n                        <label for=\"validationCustom02\">Quantity</label>\r\n                        <input\r\n                          type=\"number\"\r\n                          class=\"form-control\"\r\n                          id=\"validationCustom02\"\r\n                          placeholder=\"Quantity\"\r\n                          formControlName=\"quantity\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-right\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-primary\"\r\n                    (click)=\"addAccessories()\"\r\n                  >\r\n                    Add Accessory\r\n                  </button>\r\n                </div>\r\n              </ng-container>\r\n\r\n              <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- /Validation Tooltips -->\r\n  </div>\r\n</div>\r\n<!-- /Row -->\r\n");

/***/ }),

/***/ "yTIl":
/*!***************************************************!*\
  !*** ./src/app/admin/services/pending.service.ts ***!
  \***************************************************/
/*! exports provided: PendingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingService", function() { return PendingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let PendingService = class PendingService {
    constructor(http) {
        this.http = http;
        this.id = {};
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.IdOfpendingPrice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.id);
        this.currentId = this.IdOfpendingPrice.asObservable();
    }
    changeidofpendingPrice(id) {
        this.IdOfpendingPrice.next(id);
    }
    listPendingSale() {
        return this.http.get('http://162.240.5.234:3000/sale/list/pending');
    }
    addPriceForPending(id, body) {
        return this.http.post(`http://162.240.5.234:3000/sale/complete/pending/${id}`, body);
    }
    listPendingPurchase() {
        return this.http.get('http://162.240.5.234:3000/purchase/list/pending');
    }
};
PendingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PendingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], PendingService);



/***/ })

}]);
//# sourceMappingURL=invoices-invoices-module-es2015.js.map