(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["models-models-module"], {
    /***/
    "5VIS":
    /*!*******************************************************!*\
      !*** ./src/app/admin/models/models-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ModelsRoutingModule */

    /***/
    function VIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelsRoutingModule", function () {
        return ModelsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_new_model_add_new_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-new-model/add-new-model.component */
      "5vWD");
      /* harmony import */


      var _models_details_models_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./models-details/models-details.component */
      "Prdo");

      var routes = [{
        path: 'details',
        component: _models_details_models_details_component__WEBPACK_IMPORTED_MODULE_4__["ModelsDetailsComponent"]
      }, {
        path: 'add-new-model',
        component: _add_new_model_add_new_model_component__WEBPACK_IMPORTED_MODULE_3__["AddNewModelComponent"]
      }];

      var ModelsRoutingModule = function ModelsRoutingModule() {
        _classCallCheck(this, ModelsRoutingModule);
      };

      ModelsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModelsRoutingModule);
      /***/
    },

    /***/
    "5vWD":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/models/add-new-model/add-new-model.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddNewModelComponent */

    /***/
    function vWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewModelComponent", function () {
        return AddNewModelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_model_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-model.component.html */
      "dvGZ");
      /* harmony import */


      var _add_new_model_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-model.component.css */
      "8Eyt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_models_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/models.service */
      "L8CM");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);

      var AddNewModelComponent = /*#__PURE__*/function () {
        function AddNewModelComponent(_fb, _ModelsService) {
          _classCallCheck(this, AddNewModelComponent);

          this._fb = _fb;
          this._ModelsService = _ModelsService;
        }

        _createClass(AddNewModelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.creteForm();
          }
        }, {
          key: "creteForm",
          value: function creteForm() {
            this.form = this._fb.group({
              model: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "alertWithFail",
          value: function alertWithFail(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Failed', msg, 'error').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "alertWithSuccess",
          value: function alertWithSuccess() {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved', "Saved Successfully", 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "saveModel",
          value: function saveModel() {
            var _this = this;

            this.submitted = true;

            if (this.form.valid) {
              console.log(this.form.value);

              this._ModelsService.addNewModel(this.form.value).subscribe(function (res) {
                _this.alertWithSuccess();
              }, function (error) {
                _this.alertWithFail(error.error);
              });
            }
          }
        }]);

        return AddNewModelComponent;
      }();

      AddNewModelComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_models_service__WEBPACK_IMPORTED_MODULE_5__["ModelsService"]
        }];
      };

      AddNewModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-model',
        template: _raw_loader_add_new_model_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_model_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddNewModelComponent);
      /***/
    },

    /***/
    "8Eyt":
    /*!************************************************************************!*\
      !*** ./src/app/admin/models/add-new-model/add-new-model.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Eyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LW1vZGVsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Prdo":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/models/models-details/models-details.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ModelsDetailsComponent */

    /***/
    function Prdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelsDetailsComponent", function () {
        return ModelsDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_models_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./models-details.component.html */
      "QASe");
      /* harmony import */


      var _models_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models-details.component.css */
      "nAxd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_models_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/models.service */
      "L8CM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);

      var ModelsDetailsComponent = /*#__PURE__*/function () {
        function ModelsDetailsComponent(_ModelsService, modalSer, active, _fb) {
          _classCallCheck(this, ModelsDetailsComponent);

          this._ModelsService = _ModelsService;
          this.modalSer = modalSer;
          this.active = active;
          this._fb = _fb;
        }

        _createClass(ModelsDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listModels();
            this.creteForm();
          }
        }, {
          key: "listModels",
          value: function listModels() {
            var _this2 = this;

            this._ModelsService.listModels().subscribe(function (res) {
              // $(function () {
              //   $('table').DataTable();
              // });
              console.log(res);
              _this2.pricing = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "alertWithFail",
          value: function alertWithFail(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Failed', msg, 'error').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "alertWithSuccess",
          value: function alertWithSuccess() {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Saved', "Saved Successfully", 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "alertWithSuccessDeleted",
          value: function alertWithSuccessDeleted() {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Deleted', "Deleted Successfully", 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "EditModel",
          value: function EditModel() {
            var _this3 = this;

            this.submitted = true;

            if (this.form.valid) {
              this._ModelsService.updateModel(this.form.value, this.modelId).subscribe(function (res) {
                _this3.alertWithSuccess();
              }, function (error) {
                _this3.alertWithFail("Try Again Later");
              });
            }
          }
        }, {
          key: "creteForm",
          value: function creteForm() {
            this.form = this._fb.group({
              model: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
          }
        }, {
          key: "deletemodel",
          value: function deletemodel(id) {
            var _this4 = this;

            this._ModelsService.deleteModel(id).subscribe(function (res) {
              _this4.alertWithSuccessDeleted();
            }, function (error) {
              _this4.alertWithFail("Try Again Later");
            });
          }
        }]);

        return ModelsDetailsComponent;
      }();

      ModelsDetailsComponent.ctorParameters = function () {
        return [{
          type: _services_models_service__WEBPACK_IMPORTED_MODULE_5__["ModelsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      ModelsDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-models-details',
        template: _raw_loader_models_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_models_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModelsDetailsComponent);
      /***/
    },

    /***/
    "QASe":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/models/models-details/models-details.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QASe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-table #basicTable [nzData]=\"pricing\">\r\n    <thead>\r\n      <tr>\r\n        <th>Model</th>\r\n        <th>Price</th>\r\n       <th>Edit</th>\r\n       <th>Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data.model }}</td>\r\n        <td>{{ data.price }}</td>\r\n        <td>   <a\r\n          class=\"table-action-btn btn btn-sm bg-success-light\"\r\n          data-toggle=\"modal\" data-target=\"#exampleModal\"\r\n          (click)=\"modelId=data._id;modelName=data.model;modelPrice=data.price\"\r\n        >\r\n          Edit\r\n        </a></td>\r\n        <td>   <a\r\n          class=\"table-action-btn btn btn-sm bg-danger-light\"\r\n         \r\n          (click)=\"deletemodel(data._id)\"\r\n\r\n        >\r\n          Delete\r\n        </a></td>\r\n   \r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Model</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n       <!-- Row -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Custom Boostrap Validation -->\r\n    <div class=\"card\">\r\n  \r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <form\r\n              class=\"needs-validation\"\r\n              [formGroup]=\"form\"\r\n              autocomplete=\"off\"\r\n            >\r\n              <div class=\"form-row\">\r\n             \r\n                <div class=\"col-md-6 mb-3\">\r\n                  <label for=\"validationCustom01\">Model</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"validationCustom01\"\r\n                    [ngModel]=\"modelName\"\r\n                    name=\"model\"formControlName=\"model\" \r\n                    [ngClass]=\"{\r\n                      'is-invalid': submitted && form.controls.model.errors\r\n                    }\" \r\n                  />\r\n                  <div\r\n                  class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                  *ngIf=\"submitted && form.controls.model.errors\"\r\n                >\r\n                 Field is required\r\n                </div>\r\n                  <div class=\"valid-feedback\">Looks good!</div>\r\n                </div>\r\n               \r\n          \r\n                <div class=\"col-md-6 mb-3\">\r\n                  <label for=\"validationCustom01\">Price</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"validationCustom01\"\r\n                    [ngModel]=\"modelPrice\"\r\n                    name=\"price\"formControlName=\"price\" \r\n                    [ngClass]=\"{\r\n                      'is-invalid': submitted && form.controls.price.errors\r\n                    }\" \r\n                  />\r\n                  <div\r\n                  class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n                  *ngIf=\"submitted && form.controls.price.errors\"\r\n                >\r\n                 Field is required\r\n                </div>\r\n                  <div class=\"valid-feedback\">Looks good!</div>\r\n                </div>\r\n               \r\n              \r\n              </div>\r\n\r\n           \r\n              <button type=\"button\" class=\"btn btn-primary mt-3\" (click)=\"EditModel()\">Save changes</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- /Validation Tooltips -->\r\n  </div>\r\n</div>\r\n<!-- /Row -->\r\n\r\n        </div>\r\n        <!-- <div class=\"modal-footer\">\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "dvGZ":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/models/add-new-model/add-new-model.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dvGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Row -->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <!-- Custom Boostrap Validation -->\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Add New Model Form</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <form\n                class=\"needs-validation\"\n                [formGroup]=\"form\"\n                autocomplete=\"off\"\n              >\n                <div class=\"form-row\">\n               \n                  <div class=\"col-md-4 mb-3\">\n                    <label for=\"validationCustom01\">Model</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"please add the model\"\n                      name=\"model\"formControlName=\"model\" \n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.model.errors\n                      }\" \n                    />\n                    <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.model.errors\"\n                  >\n                   Field is required\n                  </div>\n                    <div class=\"valid-feedback\">Looks good!</div>\n                  </div>\n                 \n            \n                  <div class=\"col-md-4 mb-3\">\n                    <label for=\"validationCustom01\">Price</label>\n                    <input\n                      type=\"number\"\n                      class=\"form-control\"\n                      id=\"validationCustom01\"\n                      placeholder=\"please add the price\"\n                      name=\"price\"formControlName=\"price\" \n                      [ngClass]=\"{\n                        'is-invalid': submitted && form.controls.price.errors\n                      }\" \n                    />\n                    <div\n                    class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                    *ngIf=\"submitted && form.controls.price.errors\"\n                  >\n                   Field is required\n                  </div>\n                    <div class=\"valid-feedback\">Looks good!</div>\n                  </div>\n                 \n                \n                </div>\n  \n             \n                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveModel()\">Submit</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n      <!-- /Validation Tooltips -->\n    </div>\n  </div>\n  <!-- /Row -->\n  ";
      /***/
    },

    /***/
    "nAxd":
    /*!**************************************************************************!*\
      !*** ./src/app/admin/models/models-details/models-details.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function nAxd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form nz-form-item {\r\n    margin-right: 16px;\r\n    margin-bottom: 8px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6Im1vZGVscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIG56LWZvcm0taXRlbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "vSBA":
    /*!***********************************************!*\
      !*** ./src/app/admin/models/models.module.ts ***!
      \***********************************************/

    /*! exports provided: ModelsModule */

    /***/
    function vSBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelsModule", function () {
        return ModelsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _models_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models-routing.module */
      "5VIS");
      /* harmony import */


      var _models_details_models_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./models-details/models-details.component */
      "Prdo");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _add_new_model_add_new_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-new-model/add-new-model.component */
      "5vWD");
      /* harmony import */


      var src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/ng-zoro.module */
      "LkBz");

      var ModelsModule = function ModelsModule() {
        _classCallCheck(this, ModelsModule);
      };

      ModelsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_models_details_models_details_component__WEBPACK_IMPORTED_MODULE_4__["ModelsDetailsComponent"], _add_new_model_add_new_model_component__WEBPACK_IMPORTED_MODULE_7__["AddNewModelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _models_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_ng_zoro_module__WEBPACK_IMPORTED_MODULE_8__["DemoNgZorroAntdModule"]],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]]
      })], ModelsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=models-models-module-es5.js.map