(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "026R":
/*!****************************************************!*\
  !*** ./src/app/admin/services/employee.service.ts ***!
  \****************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
    }
    getUnApprovedEmployee() {
        return this.http.get('http://162.240.5.234:3000/owner/list/employees/unapproved');
    }
    ApproveEmployee(id) {
        return this.http.post(`http://162.240.5.234:3000/owner/approve/employee/${id}`, id);
    }
    getAllEmployee() {
        return this.http.get('http://162.240.5.234:3000/owner/list/employees/all');
    }
    getApproveEmployee() {
        return this.http.get('http://162.240.5.234:3000/owner/list/employees/approved');
    }
    deleteEmployee(id) {
        return this.http.delete(`http://162.240.5.234:3000/owner/employee/delete/${id}`);
    }
    getEmployeeById(_id) {
        return this.http.get(`http://162.240.5.234:3000/owner/employee/${_id}`);
    }
    getUsersCount() {
        return this.http.get("http://162.240.5.234:3000/owner/usersCount");
    }
    getProductsCount() {
        return this.http.get("http://162.240.5.234:3000/owner/productsCount");
    }
    getTestsCount() {
        return this.http.get("http://162.240.5.234:3000/owner/testsCount");
    }
    getMaintainedCount() {
        return this.http.get("http://162.240.5.234:3000/owner/maintainedCount");
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], EmployeeService);



/***/ }),

/***/ "9q+E":
/*!************************************************!*\
  !*** ./src/app/admin/services/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let DataService = class DataService {
    constructor() {
        this.editDataDetails = [];
        this.testerId = '';
        this.loginData = '';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.editDataDetails);
        this.testerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.testerId);
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loginData);
        this.currentTesterId = this.testerSource.asObservable();
        this.currentMessage = this.messageSource.asObservable();
        this.currentLogindata = this.login.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    changeTesterid(id) {
        this.testerSource.next(id);
    }
    changelogin(data) {
        this.login.next(data);
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ "L8CM":
/*!**************************************************!*\
  !*** ./src/app/admin/services/models.service.ts ***!
  \**************************************************/
/*! exports provided: ModelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsService", function() { return ModelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ModelsService = class ModelsService {
    constructor(http) {
        this.http = http;
    }
    addNewModel(model) {
        return this.http.post(`http://162.240.5.234:3000/models/add`, model);
    }
    listModels() {
        return this.http.get('http://162.240.5.234:3000/models/all');
    }
    updateModel(model, id) {
        return this.http.put(`http://162.240.5.234:3000/models/update/${id}`, model);
    }
    deleteModel(id) {
        return this.http.delete(`http://162.240.5.234:3000/models/delete/${id}`);
    }
};
ModelsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ModelsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ModelsService);



/***/ }),

/***/ "lXKC":
/*!***************************************************!*\
  !*** ./src/app/admin/services/product.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    addNewProduct(_id, product) {
        return this.http.post(`http://162.240.5.234:3000/product/add/${_id}`, product);
    }
    getLastFiveProducts() {
        return this.http.get('http://162.240.5.234:3000/product/listLastFive');
    }
    getProductBrSerialnumber(serial) {
        return this.http.post('http://162.240.5.234:3000/product/getBySerialNum', { "serialNumber": serial });
    }
    getAllProduct() {
        return this.http.get('http://162.240.5.234:3000/product/list');
    }
    updateProduct(serialNumber, product) {
        return this.http.put(`http://162.240.5.234:3000/product/update/${serialNumber}`, product);
    }
    deleteProduct(serialNumber) {
        return this.http.delete(`http://162.240.5.234:3000/product/delete/${serialNumber}`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ProductService);



/***/ }),

/***/ "wSVp":
/*!****************************************************!*\
  !*** ./src/app/admin/services/invoices.service.ts ***!
  \****************************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InvoicesService = class InvoicesService {
    constructor(http) {
        this.http = http;
        this.id = {};
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.idOfEditPrice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.id);
        this.currentId = this.idOfEditPrice.asObservable();
    }
    addSaleInvoice(SaleInvoice) {
        return this.http.post('http://162.240.5.234:3000/sale/add', SaleInvoice);
    }
    listSaleInvoice() {
        return this.http.get('http://162.240.5.234:3000/sale/list');
    }
    addPurchuseInvoice(id, product) {
        return this.http.post(`http://162.240.5.234:3000/purchase/add/${id} `, product);
    }
    listPurshuseInvoice() {
        return this.http.get('http://162.240.5.234:3000/purchase/list');
    }
    listAllProductBySerial(serial) {
        return this.http.post(`http://162.240.5.234:3000/product/getBySerialNum`, serial);
    }
    AddSupplier(id, body) {
        return this.http.post(`http://162.240.5.234:3000/purchase/complete/pending/${id}`, body);
    }
    getSellerById(id) {
        return this.http.get(`http://162.240.5.234:3000/sale/getSeller/${id}`);
    }
    listSaleById(id) {
        return this.http.get(`http://162.240.5.234:3000/sale/list/${id}`);
    }
    listPurchaseById(id) {
        return this.http.get(`http://162.240.5.234:3000/purchase/list/${id}`);
    }
    changeidofEditPrice(id) {
        this.idOfEditPrice.next(id);
    }
};
InvoicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InvoicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    })
], InvoicesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map