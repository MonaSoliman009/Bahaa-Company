(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "AucQ":
/*!****************************************************************!*\
  !*** ./src/app/admin/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "jZi3");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component.css */ "dRyS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "29WF");





let NotificationsComponent = class NotificationsComponent {
    constructor(_NotificationService) {
        this._NotificationService = _NotificationService;
    }
    ngOnInit() {
        this._NotificationService.getAllNotifications().subscribe((res) => {
            // console.log(res)
            this.notificationss = res;
            console.log(this.notificationss);
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationsComponent);



/***/ }),

/***/ "N0+i":
/*!*********************************************************************!*\
  !*** ./src/app/admin/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "AucQ");




const routes = [
    {
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
    }
];
let NotificationsRoutingModule = class NotificationsRoutingModule {
};
NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationsRoutingModule);



/***/ }),

/***/ "dRyS":
/*!*****************************************************************!*\
  !*** ./src/app/admin/notifications/notifications.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "jZi3":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/notifications/notifications.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-noti-wrapper\">\r\n    <div class=\"noti-list mb-2\" *ngFor=\"let notification of notificationss?.reverse().reverse()\">\r\n        <div class=\"noti-avatar\">\r\n            <img src=\"assets/img/user.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"noti-contents\">\r\n            <h3>\r\n                <span\r\n                    *ngIf=\"notification.notificationEmployee.length !== 0\">{{notification.notificationEmployee[0].name}}</span>\r\n                <span\r\n                    *ngIf=\"notification.notificationAccountant.length !== 0\">{{notification.notificationAccountant[0].name}}</span>\r\n\r\n                <!-- <span *ngIf=\"notification.notificationOwner.length !== 0 \">{{notification.notificationOwner[0].name}}</span> -->\r\n\r\n\r\n\r\n\r\n\r\n                {{notification.message}} on Product {{notification.productDetails[0].serialNumber}}\r\n            </h3>\r\n            <span style=\"color: #ff0080\">{{notification.currentDate | date:'medium'}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "l4oI":
/*!*************************************************************!*\
  !*** ./src/app/admin/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-routing.module */ "N0+i");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.component */ "AucQ");





let NotificationsModule = class NotificationsModule {
};
NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"]
        ]
    })
], NotificationsModule);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map