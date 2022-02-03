(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
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


      var src_guards_owner_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/guards/owner-auth.guard */
      "EcPD");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");

      var routes = [{
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-dashboard-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboard/dashboard.module */
            "pBKm")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'add-category',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-category-add-category-module */
            "add-category-add-category-module").then(__webpack_require__.bind(null,
            /*! ./add-category/add-category.module */
            "8EdV")).then(function (m) {
              return m.AddCategoryModule;
            });
          }
        }, {
          path: 'edit-category',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | edit-category-edit-category-module */
            "edit-category-edit-category-module").then(__webpack_require__.bind(null,
            /*! ./edit-category/edit-category.module */
            "ZRd8")).then(function (m) {
              return m.EditCategoryModule;
            });
          }
        }, {
          path: 'sub-categories',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | sub-categories-sub-categories-module */
            "sub-categories-sub-categories-module").then(__webpack_require__.bind(null,
            /*! ./sub-categories/sub-categories.module */
            "UZKq")).then(function (m) {
              return m.SubCategoriesModule;
            });
          }
        }, {
          path: 'add-sub-category',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-sub-category-add-sub-category-module */
            "add-sub-category-add-sub-category-module").then(__webpack_require__.bind(null,
            /*! ./add-sub-category/add-sub-category.module */
            "pQlW")).then(function (m) {
              return m.AdminInvoiceModule;
            });
          }
        }, {
          path: 'edit-sub-category',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | edit-sub-category-edit-sub-category-module */
            "edit-sub-category-edit-sub-category-module").then(__webpack_require__.bind(null,
            /*! ./edit-sub-category/edit-sub-category.module */
            "Spci")).then(function (m) {
              return m.EditSubCategoryModule;
            });
          }
        }, {
          path: 'approval',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | approval-approval-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("approval-approval-module")]).then(__webpack_require__.bind(null,
            /*! ./approval/approval.module */
            "yFsF")).then(function (m) {
              return m.ApprovalModule;
            });
          },
          canActivate: [src_guards_owner_auth_guard__WEBPACK_IMPORTED_MODULE_3__["OwnerAuthGuard"]]
        }, {
          path: 'product',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | product-product-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null,
            /*! ./product/product.module */
            "+YfB")).then(function (m) {
              return m.ProductModule;
            });
          }
        }, {
          path: 'services',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | services-services-module */
            "services-services-module").then(__webpack_require__.bind(null,
            /*! ./services/services.module */
            "GCaP")).then(function (m) {
              return m.SpecialitiesModule;
            });
          }
        }, {
          path: 'components',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | components-components-module */
            "components-components-module").then(__webpack_require__.bind(null,
            /*! ./components/components.module */
            "I75K")).then(function (m) {
              return m.ComponetsModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | settings-settings-module */
            "settings-settings-module").then(__webpack_require__.bind(null,
            /*! ./settings/settings.module */
            "zwdw")).then(function (m) {
              return m.SettingsModule;
            });
          }
        }, {
          path: 'register',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | register-register-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("default~invoices-invoices-module~register-register-module"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
            /*! ./register/register.module */
            "U2fE")).then(function (m) {
              return m.RegisterModule;
            });
          }
        }, {
          path: 'forget-password',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | forget-password-forget-password-module */
            "forget-password-forget-password-module").then(__webpack_require__.bind(null,
            /*! ./forget-password/forget-password.module */
            "gSUA")).then(function (m) {
              return m.ForgetPasswordModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./profile/profile.module */
            "UuuG")).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'maintenance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | maintenance-pages-maintenance-pages-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("maintenance-pages-maintenance-pages-module")]).then(__webpack_require__.bind(null,
            /*! ./maintenance-pages/maintenance-pages.module */
            "mdGr")).then(function (m) {
              return m.MaintenancePagesModule;
            });
          }
        }, {
          path: 'Invoices',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | invoices-invoices-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("default~invoices-invoices-module~register-register-module"), __webpack_require__.e("common"), __webpack_require__.e("invoices-invoices-module")]).then(__webpack_require__.bind(null,
            /*! ./invoices/invoices.module */
            "ao+c")).then(function (m) {
              return m.InvoicesModule;
            });
          }
        }, {
          path: 'Models',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | models-models-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("models-models-module")]).then(__webpack_require__.bind(null,
            /*! ./models/models.module */
            "vSBA")).then(function (m) {
              return m.ModelsModule;
            });
          }
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | reports-reports-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("common"), __webpack_require__.e("reports-reports-module")]).then(__webpack_require__.bind(null,
            /*! ./reports/reports.module */
            "7K70")).then(function (m) {
              return m.ReportsModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~admin-login-login-module~approval-approval-module~dashboard-dashboard-module~invoices-invoic~04d53dc6"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./profile/profile.module */
            "UuuG")).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'all-notifications',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notifications-notifications-module */
            "notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ./notifications/notifications.module */
            "l4oI")).then(function (m) {
              return m.NotificationsModule;
            });
          }
        }]
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminRoutingModule);
      /***/
    },

    /***/
    "0z79":
    /*!*********************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function z79(module, exports, __webpack_require__) {
      /* global attachEvent */
      var XMLHttpRequest = __webpack_require__(
      /*! xmlhttprequest-ssl */
      "AdPF");

      var Polling = __webpack_require__(
      /*! ./polling */
      "CUme");

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");

      var _webpack_require__ = __webpack_require__(
      /*! ../util */
      "Eexf"),
          pick = _webpack_require__.pick,
          installTimerFunctions = _webpack_require__.installTimerFunctions;

      var globalThis = __webpack_require__(
      /*! ../globalThis */
      "2UHX");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("engine.io-client:polling-xhr");
      /**
       * Empty function
       */


      function empty() {}

      var hasXHR2 = function () {
        var xhr = new XMLHttpRequest({
          xdomain: false
        });
        return null != xhr.responseType;
      }();

      var XHR = /*#__PURE__*/function (_Polling) {
        _inherits(XHR, _Polling);

        var _super = _createSuper(XHR);

        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @api public
         */
        function XHR(opts) {
          var _this;

          _classCallCheck(this, XHR);

          _this = _super.call(this, opts);

          if (typeof location !== "undefined") {
            var isSSL = "https:" === location.protocol;
            var port = location.port; // some user agents have empty `location.port`

            if (!port) {
              port = isSSL ? 443 : 80;
            }

            _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
            _this.xs = opts.secure !== isSSL;
          }
          /**
           * XHR supports binary
           */


          var forceBase64 = opts && opts.forceBase64;
          _this.supportsBinary = hasXHR2 && !forceBase64;
          return _this;
        }
        /**
         * Creates a request.
         *
         * @param {String} method
         * @api private
         */


        _createClass(XHR, [{
          key: "request",
          value: function request() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            Object.assign(opts, {
              xd: this.xd,
              xs: this.xs
            }, this.opts);
            return new Request(this.uri(), opts);
          }
          /**
           * Sends data.
           *
           * @param {String} data to send.
           * @param {Function} called upon flush.
           * @api private
           */

        }, {
          key: "doWrite",
          value: function doWrite(data, fn) {
            var _this2 = this;

            var req = this.request({
              method: "POST",
              data: data
            });
            req.on("success", fn);
            req.on("error", function (err) {
              _this2.onError("xhr post error", err);
            });
          }
          /**
           * Starts a poll cycle.
           *
           * @api private
           */

        }, {
          key: "doPoll",
          value: function doPoll() {
            var _this3 = this;

            debug("xhr poll");
            var req = this.request();
            req.on("data", this.onData.bind(this));
            req.on("error", function (err) {
              _this3.onError("xhr poll error", err);
            });
            this.pollXhr = req;
          }
        }]);

        return XHR;
      }(Polling);

      var Request = /*#__PURE__*/function (_Emitter) {
        _inherits(Request, _Emitter);

        var _super2 = _createSuper(Request);

        /**
         * Request constructor
         *
         * @param {Object} options
         * @api public
         */
        function Request(uri, opts) {
          var _this4;

          _classCallCheck(this, Request);

          _this4 = _super2.call(this);
          installTimerFunctions(_assertThisInitialized(_this4), opts);
          _this4.opts = opts;
          _this4.method = opts.method || "GET";
          _this4.uri = uri;
          _this4.async = false !== opts.async;
          _this4.data = undefined !== opts.data ? opts.data : null;

          _this4.create();

          return _this4;
        }
        /**
         * Creates the XHR object and sends the request.
         *
         * @api private
         */


        _createClass(Request, [{
          key: "create",
          value: function create() {
            var _this5 = this;

            var opts = pick(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            opts.xdomain = !!this.opts.xd;
            opts.xscheme = !!this.opts.xs;
            var xhr = this.xhr = new XMLHttpRequest(opts);

            try {
              debug("xhr open %s: %s", this.method, this.uri);
              xhr.open(this.method, this.uri, this.async);

              try {
                if (this.opts.extraHeaders) {
                  xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

                  for (var i in this.opts.extraHeaders) {
                    if (this.opts.extraHeaders.hasOwnProperty(i)) {
                      xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                    }
                  }
                }
              } catch (e) {}

              if ("POST" === this.method) {
                try {
                  xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (e) {}
              }

              try {
                xhr.setRequestHeader("Accept", "*/*");
              } catch (e) {} // ie6 check


              if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
              }

              if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
              }

              if (this.hasXDR()) {
                xhr.onload = function () {
                  _this5.onLoad();
                };

                xhr.onerror = function () {
                  _this5.onError(xhr.responseText);
                };
              } else {
                xhr.onreadystatechange = function () {
                  if (4 !== xhr.readyState) return;

                  if (200 === xhr.status || 1223 === xhr.status) {
                    _this5.onLoad();
                  } else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    _this5.setTimeoutFn(function () {
                      _this5.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                  }
                };
              }

              debug("xhr data %s", this.data);
              xhr.send(this.data);
            } catch (e) {
              // Need to defer since .create() is called directly from the constructor
              // and thus the 'error' event can only be only bound *after* this exception
              // occurs.  Therefore, also, we cannot throw here at all.
              this.setTimeoutFn(function () {
                _this5.onError(e);
              }, 0);
              return;
            }

            if (typeof document !== "undefined") {
              this.index = Request.requestsCount++;
              Request.requests[this.index] = this;
            }
          }
          /**
           * Called upon successful response.
           *
           * @api private
           */

        }, {
          key: "onSuccess",
          value: function onSuccess() {
            this.emit("success");
            this.cleanup();
          }
          /**
           * Called if we have data.
           *
           * @api private
           */

        }, {
          key: "onData",
          value: function onData(data) {
            this.emit("data", data);
            this.onSuccess();
          }
          /**
           * Called upon error.
           *
           * @api private
           */

        }, {
          key: "onError",
          value: function onError(err) {
            this.emit("error", err);
            this.cleanup(true);
          }
          /**
           * Cleans up house.
           *
           * @api private
           */

        }, {
          key: "cleanup",
          value: function cleanup(fromError) {
            if ("undefined" === typeof this.xhr || null === this.xhr) {
              return;
            } // xmlhttprequest


            if (this.hasXDR()) {
              this.xhr.onload = this.xhr.onerror = empty;
            } else {
              this.xhr.onreadystatechange = empty;
            }

            if (fromError) {
              try {
                this.xhr.abort();
              } catch (e) {}
            }

            if (typeof document !== "undefined") {
              delete Request.requests[this.index];
            }

            this.xhr = null;
          }
          /**
           * Called upon load.
           *
           * @api private
           */

        }, {
          key: "onLoad",
          value: function onLoad() {
            var data = this.xhr.responseText;

            if (data !== null) {
              this.onData(data);
            }
          }
          /**
           * Check if it has XDomainRequest.
           *
           * @api private
           */

        }, {
          key: "hasXDR",
          value: function hasXDR() {
            return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
          }
          /**
           * Aborts the request.
           *
           * @api public
           */

        }, {
          key: "abort",
          value: function abort() {
            this.cleanup();
          }
        }]);

        return Request;
      }(Emitter);
      /**
       * Aborts pending requests when unloading the window. This is needed to prevent
       * memory leaks (e.g. when using IE) and to ensure that no spurious error is
       * emitted.
       */


      Request.requestsCount = 0;
      Request.requests = {};

      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", unloadHandler);
        } else if (typeof addEventListener === "function") {
          var terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
          addEventListener(terminationEvent, unloadHandler, false);
        }
      }

      function unloadHandler() {
        for (var i in Request.requests) {
          if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
          }
        }
      }

      module.exports = XHR;
      module.exports.Request = Request;
      /***/
    },

    /***/
    "29WF":
    /*!********************************************************!*\
      !*** ./src/app/admin/services/notification.service.ts ***!
      \********************************************************/

    /*! exports provided: NotificationService */

    /***/
    function WF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! socket.io-client */
      "jifJ");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService() {
          _classCallCheck(this, NotificationService);

          this.url = "http://162.240.5.234:3000";
          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_3__["io"])(this.url);
          this.socket.on("connect", function () {
            console.log("connect");
          });
        }

        _createClass(NotificationService, [{
          key: "getAllNotifications",
          value: function getAllNotifications() {
            var _this6 = this;

            this.socket.emit("getAllNotifications");
            var notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this6.socket.on("notifications", function (notification) {
                observer.next(notification);
              });
            });
            return notifications;
          }
        }, {
          key: "newNotifications",
          value: function newNotifications() {
            var _this7 = this;

            var notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this7.socket.on("notification", function (notification) {
                observer.next(notification);
              });
            });
            return notifications;
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationService);
      /***/
    },

    /***/
    "2UHX":
    /*!*****************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function UHX(module, exports) {
      module.exports = function () {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      }();
      /***/

    },

    /***/
    "2pII":
    /*!*****************************************************!*\
      !*** ./node_modules/engine.io-client/lib/socket.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function pII(module, exports, __webpack_require__) {
      var transports = __webpack_require__(
      /*! ./transports/index */
      "akSB");

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("engine.io-client:socket");

      var parser = __webpack_require__(
      /*! engine.io-parser */
      "KoVT");

      var parseuri = __webpack_require__(
      /*! parseuri */
      "Uxeu");

      var parseqs = __webpack_require__(
      /*! parseqs */
      "TypT");

      var _webpack_require__2 = __webpack_require__(
      /*! ./util */
      "Eexf"),
          installTimerFunctions = _webpack_require__2.installTimerFunctions;

      var Socket = /*#__PURE__*/function (_Emitter2) {
        _inherits(Socket, _Emitter2);

        var _super3 = _createSuper(Socket);

        /**
         * Socket constructor.
         *
         * @param {String|Object} uri or options
         * @param {Object} options
         * @api public
         */
        function Socket(uri) {
          var _this8;

          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Socket);

          _this8 = _super3.call(this);

          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
          }

          if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = parseuri(opts.host).host;
          }

          installTimerFunctions(_assertThisInitialized(_this8), opts);
          _this8.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

          if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = _this8.secure ? "443" : "80";
          }

          _this8.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          _this8.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this8.secure ? 443 : 80);
          _this8.transports = opts.transports || ["polling", "websocket"];
          _this8.readyState = "";
          _this8.writeBuffer = [];
          _this8.prevBufferLen = 0;
          _this8.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            jsonp: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: true
          }, opts);
          _this8.opts.path = _this8.opts.path.replace(/\/$/, "") + "/";

          if (typeof _this8.opts.query === "string") {
            _this8.opts.query = parseqs.decode(_this8.opts.query);
          } // set on handshake


          _this8.id = null;
          _this8.upgrades = null;
          _this8.pingInterval = null;
          _this8.pingTimeout = null; // set on heartbeat

          _this8.pingTimeoutTimer = null;

          if (typeof addEventListener === "function") {
            if (_this8.opts.closeOnBeforeunload) {
              // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
              // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
              // closed/reloaded)
              addEventListener("beforeunload", function () {
                if (_this8.transport) {
                  // silently close the transport
                  _this8.transport.removeAllListeners();

                  _this8.transport.close();
                }
              }, false);
            }

            if (_this8.hostname !== "localhost") {
              _this8.offlineEventListener = function () {
                _this8.onClose("transport close");
              };

              addEventListener("offline", _this8.offlineEventListener, false);
            }
          }

          _this8.open();

          return _this8;
        }
        /**
         * Creates transport of the given type.
         *
         * @param {String} transport name
         * @return {Transport}
         * @api private
         */


        _createClass(Socket, [{
          key: "createTransport",
          value: function createTransport(name) {
            debug('creating transport "%s"', name);
            var query = clone(this.opts.query); // append engine.io protocol identifier

            query.EIO = parser.protocol; // transport name

            query.transport = name; // session id if we already have one

            if (this.id) query.sid = this.id;
            var opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
              query: query,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port
            });
            debug("options: %j", opts);
            return new transports[name](opts);
          }
          /**
           * Initializes transport to use and starts probe.
           *
           * @api private
           */

        }, {
          key: "open",
          value: function open() {
            var _this9 = this;

            var transport;

            if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
              transport = "websocket";
            } else if (0 === this.transports.length) {
              // Emit error on next tick so it can be listened to
              this.setTimeoutFn(function () {
                _this9.emit("error", "No transports available");
              }, 0);
              return;
            } else {
              transport = this.transports[0];
            }

            this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

            try {
              transport = this.createTransport(transport);
            } catch (e) {
              debug("error while creating transport: %s", e);
              this.transports.shift();
              this.open();
              return;
            }

            transport.open();
            this.setTransport(transport);
          }
          /**
           * Sets the current transport. Disables the existing one (if any).
           *
           * @api private
           */

        }, {
          key: "setTransport",
          value: function setTransport(transport) {
            var _this10 = this;

            debug("setting transport %s", transport.name);

            if (this.transport) {
              debug("clearing existing transport %s", this.transport.name);
              this.transport.removeAllListeners();
            } // set up transport


            this.transport = transport; // set up transport listeners

            transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function () {
              _this10.onClose("transport close");
            });
          }
          /**
           * Probes a transport.
           *
           * @param {String} transport name
           * @api private
           */

        }, {
          key: "probe",
          value: function probe(name) {
            var _this11 = this;

            debug('probing transport "%s"', name);
            var transport = this.createTransport(name, {
              probe: 1
            });
            var failed = false;
            Socket.priorWebsocketSuccess = false;

            var onTransportOpen = function onTransportOpen() {
              if (failed) return;
              debug('probe transport "%s" opened', name);
              transport.send([{
                type: "ping",
                data: "probe"
              }]);
              transport.once("packet", function (msg) {
                if (failed) return;

                if ("pong" === msg.type && "probe" === msg.data) {
                  debug('probe transport "%s" pong', name);
                  _this11.upgrading = true;

                  _this11.emit("upgrading", transport);

                  if (!transport) return;
                  Socket.priorWebsocketSuccess = "websocket" === transport.name;
                  debug('pausing current transport "%s"', _this11.transport.name);

                  _this11.transport.pause(function () {
                    if (failed) return;
                    if ("closed" === _this11.readyState) return;
                    debug("changing transport and sending upgrade packet");
                    cleanup();

                    _this11.setTransport(transport);

                    transport.send([{
                      type: "upgrade"
                    }]);

                    _this11.emit("upgrade", transport);

                    transport = null;
                    _this11.upgrading = false;

                    _this11.flush();
                  });
                } else {
                  debug('probe transport "%s" failed', name);
                  var err = new Error("probe error");
                  err.transport = transport.name;

                  _this11.emit("upgradeError", err);
                }
              });
            };

            function freezeTransport() {
              if (failed) return; // Any callback called by transport should be ignored since now

              failed = true;
              cleanup();
              transport.close();
              transport = null;
            } // Handle any error that happens while probing


            var onerror = function onerror(err) {
              var error = new Error("probe error: " + err);
              error.transport = transport.name;
              freezeTransport();
              debug('probe transport "%s" failed because of error: %s', name, err);

              _this11.emit("upgradeError", error);
            };

            function onTransportClose() {
              onerror("transport closed");
            } // When the socket is closed while we're probing


            function onclose() {
              onerror("socket closed");
            } // When the socket is upgraded while we're probing


            function onupgrade(to) {
              if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
              }
            } // Remove all listeners on the transport and on self


            var cleanup = function cleanup() {
              transport.removeListener("open", onTransportOpen);
              transport.removeListener("error", onerror);
              transport.removeListener("close", onTransportClose);

              _this11.removeListener("close", onclose);

              _this11.removeListener("upgrading", onupgrade);
            };

            transport.once("open", onTransportOpen);
            transport.once("error", onerror);
            transport.once("close", onTransportClose);
            this.once("close", onclose);
            this.once("upgrading", onupgrade);
            transport.open();
          }
          /**
           * Called when connection is deemed open.
           *
           * @api public
           */

        }, {
          key: "onOpen",
          value: function onOpen() {
            debug("socket open");
            this.readyState = "open";
            Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
            this.emit("open");
            this.flush(); // we check for `readyState` in case an `open`
            // listener already closed the socket

            if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
              debug("starting upgrade probes");
              var i = 0;
              var l = this.upgrades.length;

              for (; i < l; i++) {
                this.probe(this.upgrades[i]);
              }
            }
          }
          /**
           * Handles a packet.
           *
           * @api private
           */

        }, {
          key: "onPacket",
          value: function onPacket(packet) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
              this.emit("packet", packet); // Socket is live - any packet counts

              this.emit("heartbeat");

              switch (packet.type) {
                case "open":
                  this.onHandshake(JSON.parse(packet.data));
                  break;

                case "ping":
                  this.resetPingTimeout();
                  this.sendPacket("pong");
                  this.emit("ping");
                  this.emit("pong");
                  break;

                case "error":
                  var err = new Error("server error");
                  err.code = packet.data;
                  this.onError(err);
                  break;

                case "message":
                  this.emit("data", packet.data);
                  this.emit("message", packet.data);
                  break;
              }
            } else {
              debug('packet received with socket readyState "%s"', this.readyState);
            }
          }
          /**
           * Called upon handshake completion.
           *
           * @param {Object} handshake obj
           * @api private
           */

        }, {
          key: "onHandshake",
          value: function onHandshake(data) {
            this.emit("handshake", data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.onOpen(); // In case open handler closes socket

            if ("closed" === this.readyState) return;
            this.resetPingTimeout();
          }
          /**
           * Sets and resets ping timeout timer based on server pings.
           *
           * @api private
           */

        }, {
          key: "resetPingTimeout",
          value: function resetPingTimeout() {
            var _this12 = this;

            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.pingTimeoutTimer = this.setTimeoutFn(function () {
              _this12.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout);

            if (this.opts.autoUnref) {
              this.pingTimeoutTimer.unref();
            }
          }
          /**
           * Called on `drain` event
           *
           * @api private
           */

        }, {
          key: "onDrain",
          value: function onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`

            this.prevBufferLen = 0;

            if (0 === this.writeBuffer.length) {
              this.emit("drain");
            } else {
              this.flush();
            }
          }
          /**
           * Flush write buffers.
           *
           * @api private
           */

        }, {
          key: "flush",
          value: function flush() {
            if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              debug("flushing %d packets in socket", this.writeBuffer.length);
              this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
              // splice writeBuffer and callbackBuffer on `drain`

              this.prevBufferLen = this.writeBuffer.length;
              this.emit("flush");
            }
          }
          /**
           * Sends a message.
           *
           * @param {String} message.
           * @param {Function} callback function.
           * @param {Object} options.
           * @return {Socket} for chaining.
           * @api public
           */

        }, {
          key: "write",
          value: function write(msg, options, fn) {
            this.sendPacket("message", msg, options, fn);
            return this;
          }
        }, {
          key: "send",
          value: function send(msg, options, fn) {
            this.sendPacket("message", msg, options, fn);
            return this;
          }
          /**
           * Sends a packet.
           *
           * @param {String} packet type.
           * @param {String} data.
           * @param {Object} options.
           * @param {Function} callback function.
           * @api private
           */

        }, {
          key: "sendPacket",
          value: function sendPacket(type, data, options, fn) {
            if ("function" === typeof data) {
              fn = data;
              data = undefined;
            }

            if ("function" === typeof options) {
              fn = options;
              options = null;
            }

            if ("closing" === this.readyState || "closed" === this.readyState) {
              return;
            }

            options = options || {};
            options.compress = false !== options.compress;
            var packet = {
              type: type,
              data: data,
              options: options
            };
            this.emit("packetCreate", packet);
            this.writeBuffer.push(packet);
            if (fn) this.once("flush", fn);
            this.flush();
          }
          /**
           * Closes the connection.
           *
           * @api private
           */

        }, {
          key: "close",
          value: function close() {
            var _this13 = this;

            var close = function close() {
              _this13.onClose("forced close");

              debug("socket closing - telling transport to close");

              _this13.transport.close();
            };

            var cleanupAndClose = function cleanupAndClose() {
              _this13.removeListener("upgrade", cleanupAndClose);

              _this13.removeListener("upgradeError", cleanupAndClose);

              close();
            };

            var waitForUpgrade = function waitForUpgrade() {
              // wait for upgrade to finish since we can't send packets while pausing a transport
              _this13.once("upgrade", cleanupAndClose);

              _this13.once("upgradeError", cleanupAndClose);
            };

            if ("opening" === this.readyState || "open" === this.readyState) {
              this.readyState = "closing";

              if (this.writeBuffer.length) {
                this.once("drain", function () {
                  if (_this13.upgrading) {
                    waitForUpgrade();
                  } else {
                    close();
                  }
                });
              } else if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            }

            return this;
          }
          /**
           * Called upon transport error
           *
           * @api private
           */

        }, {
          key: "onError",
          value: function onError(err) {
            debug("socket error %j", err);
            Socket.priorWebsocketSuccess = false;
            this.emit("error", err);
            this.onClose("transport error", err);
          }
          /**
           * Called upon transport close.
           *
           * @api private
           */

        }, {
          key: "onClose",
          value: function onClose(reason, desc) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              debug('socket close with reason: "%s"', reason); // clear timers

              this.clearTimeoutFn(this.pingIntervalTimer);
              this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport

              this.transport.removeAllListeners("close"); // ensure transport won't stay open

              this.transport.close(); // ignore further transport communication

              this.transport.removeAllListeners();

              if (typeof removeEventListener === "function") {
                removeEventListener("offline", this.offlineEventListener, false);
              } // set ready state


              this.readyState = "closed"; // clear session id

              this.id = null; // emit close event

              this.emit("close", reason, desc); // clean buffers after, so users can still
              // grab the buffers on `close` event

              this.writeBuffer = [];
              this.prevBufferLen = 0;
            }
          }
          /**
           * Filters upgrades, returning only those matching client transports.
           *
           * @param {Array} server upgrades
           * @api private
           *
           */

        }, {
          key: "filterUpgrades",
          value: function filterUpgrades(upgrades) {
            var filteredUpgrades = [];
            var i = 0;
            var j = upgrades.length;

            for (; i < j; i++) {
              if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
            }

            return filteredUpgrades;
          }
        }]);

        return Socket;
      }(Emitter);

      Socket.priorWebsocketSuccess = false;
      /**
       * Protocol version.
       *
       * @api public
       */

      Socket.protocol = parser.protocol; // this is an int

      function clone(obj) {
        var o = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            o[i] = obj[i];
          }
        }

        return o;
      }

      module.exports = Socket;
      /***/
    },

    /***/
    "3JDX":
    /*!******************************************!*\
      !*** ./node_modules/debug/src/common.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function JDX(module, exports, __webpack_require__) {
      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       */
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug["default"] = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = __webpack_require__(
        /*! ms */
        "FGiv");
        createDebug.destroy = destroy;
        Object.keys(env).forEach(function (key) {
          createDebug[key] = env[key];
        });
        /**
        * The currently active debug mode names, and names to skip.
        */

        createDebug.names = [];
        createDebug.skips = [];
        /**
        * Map of special "%n" handling functions, for the debug "format" argument.
        *
        * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
        */

        createDebug.formatters = {};
        /**
        * Selects a color for a debug namespace
        * @param {String} namespace The namespace string for the for the debug instance to be colored
        * @return {Number|String} An ANSI color code for the given namespace
        * @api private
        */

        function selectColor(namespace) {
          var hash = 0;

          for (var i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
        * Create a debugger with the given `namespace`.
        *
        * @param {String} namespace
        * @return {Function}
        * @api public
        */

        function createDebug(namespace) {
          var prevTime;
          var enableOverride = null;
          var namespacesCache;
          var enabledCache;

          function debug() {
            for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              args[_key2] = arguments[_key2];
            }

            // Disabled?
            if (!debug.enabled) {
              return;
            }

            var self = debug; // Set `diff` timestamp

            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== 'string') {
              // Anything else let's inspect with %O
              args.unshift('%O');
            } // Apply any `formatters` transformations


            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
              // If we encounter an escaped % then don't increase the array index
              if (match === '%%') {
                return '%';
              }

              index++;
              var formatter = createDebug.formatters[format];

              if (typeof formatter === 'function') {
                var val = args[index];
                match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                args.splice(index, 1);
                index--;
              }

              return match;
            }); // Apply env-specific formatting (colors, etc.)

            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend;
          debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

          Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: function get() {
              if (enableOverride !== null) {
                return enableOverride;
              }

              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }

              return enabledCache;
            },
            set: function set(v) {
              enableOverride = v;
            }
          }); // Env-specific initialization logic for debug instances

          if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
          }

          return debug;
        }

        function extend(namespace, delimiter) {
          var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        /**
        * Enables a debug mode by namespaces. This can include modes
        * separated by a colon and wildcards.
        *
        * @param {String} namespaces
        * @api public
        */


        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          var i;
          var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
          var len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              // ignore empty strings
              continue;
            }

            namespaces = split[i].replace(/\*/g, '.*?');

            if (namespaces[0] === '-') {
              createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
              createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
          }
        }
        /**
        * Disable debug output.
        *
        * @return {String} namespaces
        * @api public
        */


        function disable() {
          var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
            return '-' + namespace;
          }))).join(',');
          createDebug.enable('');
          return namespaces;
        }
        /**
        * Returns true if the given mode name is enabled, false otherwise.
        *
        * @param {String} name
        * @return {Boolean}
        * @api public
        */


        function enabled(name) {
          if (name[name.length - 1] === '*') {
            return true;
          }

          var i;
          var len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
        * Convert regexp to namespace
        *
        * @param {RegExp} regxep
        * @return {String} namespace
        * @api private
        */


        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
        }
        /**
        * Coerce `val`.
        *
        * @param {Mixed} val
        * @return {Mixed}
        * @api private
        */


        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }
        /**
        * XXX DO NOT USE. This is a temporary stub function.
        * XXX It WILL be removed in the next major release.
        */


        function destroy() {
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;
      /***/
    },

    /***/
    "3XJ7":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
      \*************************************************************************************************************/

    /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */

    /***/
    function XJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsComponentRef", function () {
        return BsComponentRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentLoader", function () {
        return ComponentLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function () {
        return ComponentLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentRef", function () {
        return ContentRef;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "lUod");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "WyaX");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var BsComponentRef = function BsComponentRef() {
        _classCallCheck(this, BsComponentRef);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @copyright Valor Software
       * @copyright Angular ng-bootstrap team
       */


      var ContentRef =
      /**
       * @param {?} nodes
       * @param {?=} viewRef
       * @param {?=} componentRef
       */
      function ContentRef(
      /* tslint:disable-next-line: no-any */
      nodes, viewRef,
      /* tslint:disable-next-line: no-any */
      componentRef) {
        _classCallCheck(this, ContentRef);

        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var ComponentLoader = /*#__PURE__*/function () {
        /**
         * Do not use this directly, it should be instanced via
         * `ComponentLoadFactory.attach`
         * \@internal
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _injector
         * @param {?} _componentFactoryResolver
         * @param {?} _ngZone
         * @param {?} _applicationRef
         * @param {?} _posService
         */
        // tslint:disable-next-line
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
          _classCallCheck(this, ComponentLoader);

          this._viewContainerRef = _viewContainerRef;
          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._injector = _injector;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._ngZone = _ngZone;
          this._applicationRef = _applicationRef;
          this._posService = _posService;
          this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /* tslint:disable-next-line: no-any*/

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /* tslint:disable-next-line: no-any*/

          this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._providers = [];
          this._isHiding = false;
          /**
           * A selector used if container element was not found
           */

          this.containerDefaultSelector = 'body';
          this._listenOpts = {};
          this._globalListener = Function.prototype;
        }
        /**
         * @return {?}
         */


        _createClass(ComponentLoader, [{
          key: "isShown",
          get: function get() {
            if (this._isHiding) {
              return false;
            }

            return !!this._componentRef;
          }
          /**
           * @param {?} compType
           * @return {?}
           */

        }, {
          key: "attach",
          value: function attach(compType) {
            this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
            return this;
          } // todo: add behaviour: to target element, `body`, custom element

          /**
           * @param {?=} container
           * @return {?}
           */

        }, {
          key: "to",
          value: function to(container) {
            this.container = container || this.container;
            return this;
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "position",
          value: function position(opts) {
            this.attachment = opts.attachment || this.attachment;
            /* tslint:disable-next-line: no-unnecessary-type-assertion */

            this._elementRef =
            /** @type {?} */
            opts.target || this._elementRef;
            return this;
          }
          /**
           * @param {?} provider
           * @return {?}
           */

        }, {
          key: "provide",
          value: function provide(provider) {
            this._providers.push(provider);

            return this;
          } // todo: appendChild to element or document.querySelector(this.container)

          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._subscribePositioning();

            this._innerComponent = null;

            if (!this._componentRef) {
              this.onBeforeShow.emit();
              this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
              /** @type {?} */

              var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
              });

              this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

              this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
              //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


              this.instance = this._componentRef.instance;
              Object.assign(this._componentRef.instance, opts);

              if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
              }

              if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
                selectedElement.appendChild(this._componentRef.location.nativeElement);
              }

              if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
              } // we need to manually invoke change detection since events registered
              // via
              // Renderer::listen() are not picked up by change detection with the
              // OnPush strategy


              if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;

                this._contentRef.componentRef.changeDetectorRef.markForCheck();

                this._contentRef.componentRef.changeDetectorRef.detectChanges();
              }

              this._componentRef.changeDetectorRef.markForCheck();

              this._componentRef.changeDetectorRef.detectChanges();

              this.onShown.emit(this._componentRef.instance);
            }

            this._registerOutsideClick();

            return this._componentRef;
          }
          /**
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (!this._componentRef) {
              return this;
            }

            this._posService.deletePositionElement(this._componentRef.location);

            this.onBeforeHide.emit(this._componentRef.instance);
            /** @type {?} */

            var componentEl = this._componentRef.location.nativeElement;
            componentEl.parentNode.removeChild(componentEl);

            if (this._contentRef.componentRef) {
              this._contentRef.componentRef.destroy();
            }

            this._componentRef.destroy();

            if (this._viewContainerRef && this._contentRef.viewRef) {
              this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
            }

            if (this._contentRef.viewRef) {
              this._contentRef.viewRef.destroy();
            }

            this._contentRef = null;
            this._componentRef = null;

            this._removeGlobalListener();

            this.onHidden.emit();
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isShown) {
              this.hide();
              return;
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.isShown) {
              this.hide();
            }

            this._unsubscribePositioning();

            if (this._unregisterListenersFn) {
              this._unregisterListenersFn();
            }
          }
          /**
           * @param {?} listenOpts
           * @return {?}
           */

        }, {
          key: "listen",
          value: function listen(listenOpts) {
            var _this14 = this;

            this.triggers = listenOpts.triggers || this.triggers;
            this._listenOpts.outsideClick = listenOpts.outsideClick;
            this._listenOpts.outsideEsc = listenOpts.outsideEsc;
            listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
            /** @type {?} */

            var hide = this._listenOpts.hide =
            /**
            * @return {?}
            */
            function () {
              return listenOpts.hide ? listenOpts.hide() : void _this14.hide();
            };
            /** @type {?} */


            var show = this._listenOpts.show =
            /**
            * @param {?} registerHide
            * @return {?}
            */
            function (registerHide) {
              listenOpts.show ? listenOpts.show(registerHide) : _this14.show(registerHide);
              registerHide();
            };
            /** @type {?} */


            var toggle =
            /**
            * @param {?} registerHide
            * @return {?}
            */
            function toggle(registerHide) {
              _this14.isShown ? hide() : show(registerHide);
            };

            this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
              target: listenOpts.target,
              triggers: listenOpts.triggers,
              show: show,
              hide: hide,
              toggle: toggle
            });
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalListener) {
              this._globalListener();

              this._globalListener = null;
            }
          }
          /**
           * @param {?} vRef
           * @param {?} template
           * @return {?}
           */

        }, {
          key: "attachInline",
          value: function attachInline(vRef,
          /* tslint:disable-next-line: no-any*/
          template) {
            this._inlineViewRef = vRef.createEmbeddedView(template);
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_registerOutsideClick",
          value: function _registerOutsideClick() {
            var _this15 = this;

            if (!this._componentRef || !this._componentRef.location) {
              return;
            } // why: should run after first event bubble


            if (this._listenOpts.outsideClick) {
              /** @type {?} */
              var target = this._componentRef.location.nativeElement;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this15._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this15._renderer, {
                  targets: [target, _this15._elementRef.nativeElement],
                  outsideClick: _this15._listenOpts.outsideClick,
                  hide:
                  /**
                  * @return {?}
                  */
                  function hide() {
                    return _this15._listenOpts.hide();
                  }
                });
              });
            }

            if (this._listenOpts.outsideEsc) {
              /** @type {?} */
              var _target = this._componentRef.location.nativeElement;
              this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
                targets: [_target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide:
                /**
                * @return {?}
                */
                function hide() {
                  return _this15._listenOpts.hide();
                }
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getInnerComponent",
          value: function getInnerComponent() {
            return this._innerComponent;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_subscribePositioning",
          value: function _subscribePositioning() {
            var _this16 = this;

            if (this._zoneSubscription || !this.attachment) {
              return;
            }

            this.onShown.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this16._posService.position({
                element: _this16._componentRef.location,
                target: _this16._elementRef,
                attachment: _this16.attachment,
                appendToBody: _this16.container === 'body'
              });
            });
            this._zoneSubscription = this._ngZone.onStable.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (!_this16._componentRef) {
                return;
              }

              _this16._posService.calcPosition();
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_unsubscribePositioning",
          value: function _unsubscribePositioning() {
            if (!this._zoneSubscription) {
              return;
            }

            this._zoneSubscription.unsubscribe();

            this._zoneSubscription = null;
          }
          /**
           * @private
           * @param {?} content
           * @param {?=} context
           * @param {?=} initialState
           * @return {?}
           */

        }, {
          key: "_getContentRef",
          value: function _getContentRef(
          /* tslint:disable-next-line: no-any*/
          content,
          /* tslint:disable-next-line: no-any*/
          context,
          /* tslint:disable-next-line: no-any*/
          initialState) {
            if (!content) {
              return new ContentRef([]);
            }

            if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
              if (this._viewContainerRef) {
                /** @type {?} */
                var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

                _viewRef.markForCheck();

                return new ContentRef([_viewRef.rootNodes], _viewRef);
              }
              /** @type {?} */


              var viewRef = content.createEmbeddedView({});

              this._applicationRef.attachView(viewRef);

              return new ContentRef([viewRef.rootNodes], viewRef);
            }

            if (typeof content === 'function') {
              /** @type {?} */
              var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
              /** @type {?} */


              var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
              });
              /** @type {?} */


              var componentRef = contentCmptFactory.create(modalContentInjector);
              Object.assign(componentRef.instance, initialState);

              this._applicationRef.attachView(componentRef.hostView);

              return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
            }

            return new ContentRef([[this._renderer.createText("".concat(content))]]);
          }
        }]);

        return ComponentLoader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ComponentLoaderFactory = /*#__PURE__*/function () {
        /**
         * @param {?} _componentFactoryResolver
         * @param {?} _ngZone
         * @param {?} _injector
         * @param {?} _posService
         * @param {?} _applicationRef
         */
        function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
          _classCallCheck(this, ComponentLoaderFactory);

          this._componentFactoryResolver = _componentFactoryResolver;
          this._ngZone = _ngZone;
          this._injector = _injector;
          this._posService = _posService;
          this._applicationRef = _applicationRef;
        }
        /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */


        _createClass(ComponentLoaderFactory, [{
          key: "createLoader",
          value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
            return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
          }
        }]);

        return ComponentLoaderFactory;
      }();

      ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
        return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
      };

      ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ComponentLoaderFactory,
        factory: ComponentLoaderFactory.ɵfac
      });
      /** @nocollapse */

      ComponentLoaderFactory.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

      /***/

    },

    /***/
    "4Trj":
    /*!*************************************************************!*\
      !*** ./node_modules/socket.io-client/build/typed-events.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Trj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StrictEventEmitter = void 0;

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");
      /**
       * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
       * parameters for mappings of event names to event data types, and strictly
       * types method calls to the `EventEmitter` according to these event maps.
       *
       * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
       * listened to with `on` or `once`
       * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
       * emitted with `emit`
       * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
       * emitted by socket.io with `emitReserved`, and can be listened to with
       * `listen`.
       */


      var StrictEventEmitter = /*#__PURE__*/function (_Emitter3) {
        _inherits(StrictEventEmitter, _Emitter3);

        var _super4 = _createSuper(StrictEventEmitter);

        function StrictEventEmitter() {
          _classCallCheck(this, StrictEventEmitter);

          return _super4.apply(this, arguments);
        }

        _createClass(StrictEventEmitter, [{
          key: "on",
          value:
          /**
           * Adds the `listener` function as an event listener for `ev`.
           *
           * @param ev Name of the event
           * @param listener Callback function
           */
          function on(ev, listener) {
            _get(_getPrototypeOf(StrictEventEmitter.prototype), "on", this).call(this, ev, listener);

            return this;
          }
          /**
           * Adds a one-time `listener` function as an event listener for `ev`.
           *
           * @param ev Name of the event
           * @param listener Callback function
           */

        }, {
          key: "once",
          value: function once(ev, listener) {
            _get(_getPrototypeOf(StrictEventEmitter.prototype), "once", this).call(this, ev, listener);

            return this;
          }
          /**
           * Emits an event.
           *
           * @param ev Name of the event
           * @param args Values to send to listeners of this event
           */

        }, {
          key: "emit",
          value: function emit(ev) {
            var _get2;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            (_get2 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get2, [this, ev].concat(args));

            return this;
          }
          /**
           * Emits a reserved event.
           *
           * This method is `protected`, so that only a class extending
           * `StrictEventEmitter` can emit its own reserved events.
           *
           * @param ev Reserved event name
           * @param args Arguments to emit along with the event
           */

        }, {
          key: "emitReserved",
          value: function emitReserved(ev) {
            var _get3;

            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }

            (_get3 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get3, [this, ev].concat(args));

            return this;
          }
          /**
           * Returns the listeners listening to an event.
           *
           * @param event Event name
           * @returns Array of listeners subscribed to `event`
           */

        }, {
          key: "listeners",
          value: function listeners(event) {
            return _get(_getPrototypeOf(StrictEventEmitter.prototype), "listeners", this).call(this, event);
          }
        }]);

        return StrictEventEmitter;
      }(Emitter);

      exports.StrictEventEmitter = StrictEventEmitter;
      /***/
    },

    /***/
    "6uiR":
    /*!*******************************************************!*\
      !*** ./src/app/admin/sidemenu/sidemenu.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function uiR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#collapseExample1 {\r\n\tposition: absolute;\r\n    will-change: transform;\r\n    left: 0px;\r\n    transform: translate3d(-233px, 5px, 0px);\r\n}\r\n#collapseExample2 {\r\n\tposition: absolute;\r\n    will-change: transform;\r\n    top: 0px;\r\n    left: 0px;\r\n    transform: translate3d(-127px, 60px, 0px);\r\n}\r\n.sidebar-menu .menu-arrow {\r\n\ttransition: transform .15s;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n\tdisplay: inline-block;\r\n\tfont-family: 'FontAwesome';\r\n\ttext-rendering: auto;\r\n\tline-height: 40px;\r\n\tfont-size: 16px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\ttransform: translate(0, 0);\r\n\tline-height: 18px;\r\n\ttop: 11px;\r\n}\r\n.sidebar-menu .menu-arrow:before {\r\n\tcontent: \"\\f105\";\r\n}\r\n.sidebar-menu li a.subdrop .menu-arrow {\r\n\ttransform: rotate(90deg);\r\n}\r\n.sidebar-menu ul ul a .menu-arrow {\r\n\ttop: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7SUFDZixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHdDQUF3QztBQUM1QztBQUNBO0NBQ0Msa0JBQWtCO0lBQ2Ysc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0FBQzdDO0FBQ0E7Q0FHQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsMEJBQTBCO0NBQzFCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLG1DQUFtQztDQUNuQyxrQ0FBa0M7Q0FJbEMsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBSUMsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic2lkZW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2xsYXBzZUV4YW1wbGUxIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjMzcHgsIDVweCwgMHB4KTtcclxufVxyXG4jY29sbGFwc2VFeGFtcGxlMiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTI3cHgsIDYwcHgsIDBweCk7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cztcclxuXHQtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4xNXM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXM7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxNXB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHR0b3A6IDExcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdzpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhLnN1YmRyb3AgLm1lbnUtYXJyb3cge1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEgLm1lbnUtYXJyb3cge1xyXG5cdHRvcDogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "7Nvg":
    /*!******************************************************!*\
      !*** ./src/app/admin/sidemenu/sidemenu.component.ts ***!
      \******************************************************/

    /*! exports provided: SidemenuComponent */

    /***/
    function Nvg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () {
        return SidemenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidemenu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidemenu.component.html */
      "ISO2");
      /* harmony import */


      var _sidemenu_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidemenu.component.css */
      "6uiR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common-service.service */
      "1+kh");

      var SidemenuComponent = /*#__PURE__*/function () {
        function SidemenuComponent(document, router, commonService) {
          _classCallCheck(this, SidemenuComponent);

          this.document = document;
          this.router = router;
          this.commonService = commonService;
          this.showDropdown = true;
          this.bellCollapsed = true;
          this.userCollapsed = true;
          this.base = '';
          this.page = '';
          this.owner = false;
          this.accountant = false;
        }

        _createClass(SidemenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            if (localStorage.getItem('name') == 'owner') {
              this.owner = true;
            }

            if (localStorage.getItem('name') == 'accountant') {
              this.accountant = true;
            }

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                _this17.splitVal = event.url.split('/');
                _this17.base = _this17.splitVal[1];
                _this17.page = _this17.splitVal[2];
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.loadDynmicallyScript('assets/js/admin.js');
          }
        }, {
          key: "loadDynmicallyScript",
          value: function loadDynmicallyScript(js) {
            var _this18 = this;

            var script = document.createElement('script');
            script.src = js;
            script.async = false;
            document.head.appendChild(script);

            script.onload = function () {
              return _this18.doSomethingWhenScriptIsLoaded();
            };
          }
        }, {
          key: "doSomethingWhenScriptIsLoaded",
          value: function doSomethingWhenScriptIsLoaded() {}
        }, {
          key: "change",
          value: function change(name) {
            this.page = name;
            this.commonService.nextmessage('admin');
          }
        }, {
          key: "home",
          value: function home() {
            // this.router.navigate(['/index']);
            window.location.href = '/index';
          }
        }, {
          key: "main",
          value: function main() {
            this.commonService.nextmessage('main');
          }
        }, {
          key: "clickLogout",
          value: function clickLogout() {
            window.location.href = '/index';
          }
        }, {
          key: "bell",
          value: function bell() {
            this.bellCollapsed = !this.bellCollapsed;

            if (!this.userCollapsed) {
              this.userCollapsed = true;
            }
          }
        }, {
          key: "user",
          value: function user() {
            this.userCollapsed = !this.userCollapsed;

            if (!this.bellCollapsed) {
              this.bellCollapsed = true;
            }
          }
        }]);

        return SidemenuComponent;
      }();

      SidemenuComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceService"]
        }];
      };

      SidemenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidemenu',
        template: _raw_loader_sidemenu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidemenu_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidemenuComponent);
      /***/
    },

    /***/
    "ABg6":
    /*!**************************************************!*\
      !*** ./src/app/admin/header/header.component.ts ***!
      \**************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function ABg6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "wJwY");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "hP8I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/notification.service */
      "29WF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(_NotificationService, router, _UserService) {
          _classCallCheck(this, HeaderComponent);

          this._NotificationService = _NotificationService;
          this.router = router;
          this._UserService = _UserService;
          this.showDropdown = true;
          this.bellCollapsed = true;
          this.userCollapsed = true;
          this.flag = false;
          this.toggle = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this._UserService.getProfile({
              id: localStorage.getItem('id'),
              type: localStorage.getItem('name')
            }).subscribe(function (res) {
              console.log(res);
              _this19.userr = res;
            }, function (error) {});

            this._NotificationService.getAllNotifications().subscribe(function (res) {
              _this19.notifications = res;

              _this19.notifications.reverse();

              _this19.numOfNotifications = _this19.notifications.length;
              console.log(_this19.notifications);
            });

            this._NotificationService.newNotifications().subscribe(function (res) {
              var _a, _b, _c;

              _this19.notifications = res;
              console.log(_this19.notifications.length - 1);
              var x = localStorage.getItem('id');

              if (((_a = _this19.notifications[_this19.notifications.length - 1].notificationOwner[0]) === null || _a === void 0 ? void 0 : _a._id) == x || ((_b = _this19.notifications[_this19.notifications.length - 1].notificationAccountant[0]) === null || _b === void 0 ? void 0 : _b._id) == x || ((_c = _this19.notifications[_this19.notifications.length - 1].notificationEmployee[0]) === null || _c === void 0 ? void 0 : _c._id) == x) {} else {
                _this19.lastNotification = _this19.notifications[_this19.notifications.length - 1];
                console.log(_this19.lastNotification);

                _this19.notifications.reverse();

                _this19.toggle = true;
                $('.toast').toast({
                  delay: 4000
                });
                $('.toast').toast('show');
              } // this.numOfNotifications = this.notifications.length;


              console.log(res);
            });
          }
        }, {
          key: "bell",
          value: function bell() {
            this.bellCollapsed = !this.bellCollapsed;

            if (!this.userCollapsed) {
              this.userCollapsed = true;
            }
          }
        }, {
          key: "user",
          value: function user() {
            this.userCollapsed = !this.userCollapsed;

            if (!this.bellCollapsed) {
              this.bellCollapsed = true;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("id");
            this.router.navigate(['./login']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "AdPF":
    /*!*************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function AdPF(module, exports, __webpack_require__) {
      // browser shim for xmlhttprequest module
      var hasCORS = __webpack_require__(
      /*! has-cors */
      "yeub");

      var globalThis = __webpack_require__(
      /*! ./globalThis */
      "2UHX");

      module.exports = function (opts) {
        var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
        // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

        var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
        // https://github.com/Automattic/engine.io-client/pull/217

        var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

        try {
          if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
        // because loading bar keeps flashing when using jsonp-polling
        // https://github.com/yujiosaka/socke.io-ie8-loading-example


        try {
          if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
            return new XDomainRequest();
          }
        } catch (e) {}

        if (!xdomain) {
          try {
            return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      };
      /***/

    },

    /***/
    "Aplp":
    /*!*************************************!*\
      !*** ./node_modules/yeast/index.js ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function Aplp(module, exports, __webpack_require__) {
      "use strict";

      var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
          length = 64,
          map = {},
          seed = 0,
          i = 0,
          prev;
      /**
       * Return a string representing the specified number.
       *
       * @param {Number} num The number to convert.
       * @returns {String} The string representation of the number.
       * @api public
       */

      function encode(num) {
        var encoded = '';

        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);

        return encoded;
      }
      /**
       * Return the integer value specified by the given string.
       *
       * @param {String} str The string to convert.
       * @returns {Number} The integer value represented by the string.
       * @api public
       */


      function decode(str) {
        var decoded = 0;

        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }

        return decoded;
      }
      /**
       * Yeast: A tiny growing id generator.
       *
       * @returns {String} A unique id.
       * @api public
       */


      function yeast() {
        var now = encode(+new Date());
        if (now !== prev) return seed = 0, prev = now;
        return now + '.' + encode(seed++);
      } //
      // Map each character to its index.
      //


      for (; i < length; i++) {
        map[alphabet[i]] = i;
      } //
      // Expose the `yeast`, `encode` and `decode` functions.
      //


      yeast.encode = encode;
      yeast.decode = decode;
      module.exports = yeast;
      /***/
    },

    /***/
    "Byvj":
    /*!***************************************************!*\
      !*** ./node_modules/socket.io-client/build/on.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Byvj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.on = void 0;

      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
          obj.off(ev, fn);
        };
      }

      exports.on = on;
      /***/
    },

    /***/
    "C2QD":
    /*!**************************************!*\
      !*** ./node_modules/backo2/index.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function C2QD(module, exports) {
      /**
       * Expose `Backoff`.
       */
      module.exports = Backoff;
      /**
       * Initialize backoff timer with `opts`.
       *
       * - `min` initial timeout in milliseconds [100]
       * - `max` max timeout [10000]
       * - `jitter` [0]
       * - `factor` [2]
       *
       * @param {Object} opts
       * @api public
       */

      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      /**
       * Return the backoff duration.
       *
       * @return {Number}
       * @api public
       */


      Backoff.prototype.duration = function () {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);

        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }

        return Math.min(ms, this.max) | 0;
      };
      /**
       * Reset the number of attempts.
       *
       * @api public
       */


      Backoff.prototype.reset = function () {
        this.attempts = 0;
      };
      /**
       * Set the minimum duration
       *
       * @api public
       */


      Backoff.prototype.setMin = function (min) {
        this.ms = min;
      };
      /**
       * Set the maximum duration
       *
       * @api public
       */


      Backoff.prototype.setMax = function (max) {
        this.max = max;
      };
      /**
       * Set the jitter
       *
       * @api public
       */


      Backoff.prototype.setJitter = function (jitter) {
        this.jitter = jitter;
      };
      /***/

    },

    /***/
    "CHqn":
    /*!************************************************!*\
      !*** ./src/app/admin/services/user.service.ts ***!
      \************************************************/

    /*! exports provided: UserService */

    /***/
    function CHqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "getProfile",
          value: function getProfile(data) {
            return this.http.post('http://162.240.5.234:3000/user/profile', data);
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(data) {
            return this.http.post('http://162.240.5.234:3000/upload/api/images', data);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(id, data) {
            return this.http.post('http://162.240.5.234:3000/user/resetPassword/' + id, data);
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "CIKq":
    /*!*******************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function CIKq(module, exports, __webpack_require__) {
      var Transport = __webpack_require__(
      /*! ../transport */
      "Gbct");

      var parser = __webpack_require__(
      /*! engine.io-parser */
      "KoVT");

      var parseqs = __webpack_require__(
      /*! parseqs */
      "TypT");

      var yeast = __webpack_require__(
      /*! yeast */
      "Aplp");

      var _webpack_require__3 = __webpack_require__(
      /*! ../util */
      "Eexf"),
          pick = _webpack_require__3.pick;

      var _webpack_require__4 = __webpack_require__(
      /*! ./websocket-constructor */
      "X071"),
          WebSocket = _webpack_require__4.WebSocket,
          usingBrowserWebSocket = _webpack_require__4.usingBrowserWebSocket,
          defaultBinaryType = _webpack_require__4.defaultBinaryType,
          nextTick = _webpack_require__4.nextTick;

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("engine.io-client:websocket"); // detect ReactNative environment


      var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

      var WS = /*#__PURE__*/function (_Transport) {
        _inherits(WS, _Transport);

        var _super5 = _createSuper(WS);

        /**
         * WebSocket transport constructor.
         *
         * @api {Object} connection options
         * @api public
         */
        function WS(opts) {
          var _this20;

          _classCallCheck(this, WS);

          _this20 = _super5.call(this, opts);
          _this20.supportsBinary = !opts.forceBase64;
          return _this20;
        }
        /**
         * Transport name.
         *
         * @api public
         */


        _createClass(WS, [{
          key: "name",
          get: function get() {
            return "websocket";
          }
          /**
           * Opens socket.
           *
           * @api private
           */

        }, {
          key: "doOpen",
          value: function doOpen() {
            if (!this.check()) {
              // let probe timeout
              return;
            }

            var uri = this.uri();
            var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

            var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

            if (this.opts.extraHeaders) {
              opts.headers = this.opts.extraHeaders;
            }

            try {
              this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
            } catch (err) {
              return this.emit("error", err);
            }

            this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
            this.addEventListeners();
          }
          /**
           * Adds event listeners to the socket
           *
           * @api private
           */

        }, {
          key: "addEventListeners",
          value: function addEventListeners() {
            var _this21 = this;

            this.ws.onopen = function () {
              if (_this21.opts.autoUnref) {
                _this21.ws._socket.unref();
              }

              _this21.onOpen();
            };

            this.ws.onclose = this.onClose.bind(this);

            this.ws.onmessage = function (ev) {
              return _this21.onData(ev.data);
            };

            this.ws.onerror = function (e) {
              return _this21.onError("websocket error", e);
            };
          }
          /**
           * Writes data to socket.
           *
           * @param {Array} array of packets.
           * @api private
           */

        }, {
          key: "write",
          value: function write(packets) {
            var _this22 = this;

            this.writable = false; // encodePacket efficient as it uses WS framing
            // no need for encodePayload

            var _loop = function _loop(i) {
              var packet = packets[i];
              var lastPacket = i === packets.length - 1;
              parser.encodePacket(packet, _this22.supportsBinary, function (data) {
                // always create a new object (GH-437)
                var opts = {};

                if (!usingBrowserWebSocket) {
                  if (packet.options) {
                    opts.compress = packet.options.compress;
                  }

                  if (_this22.opts.perMessageDeflate) {
                    var len = "string" === typeof data ? Buffer.byteLength(data) : data.length;

                    if (len < _this22.opts.perMessageDeflate.threshold) {
                      opts.compress = false;
                    }
                  }
                } // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error


                try {
                  if (usingBrowserWebSocket) {
                    // TypeError is thrown when passing the second argument on Safari
                    _this22.ws.send(data);
                  } else {
                    _this22.ws.send(data, opts);
                  }
                } catch (e) {
                  debug("websocket closed before onclose event");
                }

                if (lastPacket) {
                  // fake drain
                  // defer to next tick to allow Socket to clear writeBuffer
                  nextTick(function () {
                    _this22.writable = true;

                    _this22.emit("drain");
                  }, _this22.setTimeoutFn);
                }
              });
            };

            for (var i = 0; i < packets.length; i++) {
              _loop(i);
            }
          }
          /**
           * Called upon close
           *
           * @api private
           */

        }, {
          key: "onClose",
          value: function onClose() {
            Transport.prototype.onClose.call(this);
          }
          /**
           * Closes socket.
           *
           * @api private
           */

        }, {
          key: "doClose",
          value: function doClose() {
            if (typeof this.ws !== "undefined") {
              this.ws.close();
              this.ws = null;
            }
          }
          /**
           * Generates uri for connection.
           *
           * @api private
           */

        }, {
          key: "uri",
          value: function uri() {
            var query = this.query || {};
            var schema = this.opts.secure ? "wss" : "ws";
            var port = ""; // avoid port if default for schema

            if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
              port = ":" + this.opts.port;
            } // append timestamp to URI


            if (this.opts.timestampRequests) {
              query[this.opts.timestampParam] = yeast();
            } // communicate binary support capabilities


            if (!this.supportsBinary) {
              query.b64 = 1;
            }

            query = parseqs.encode(query); // prepend ? to query

            if (query.length) {
              query = "?" + query;
            }

            var ipv6 = this.opts.hostname.indexOf(":") !== -1;
            return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
          }
          /**
           * Feature detection for WebSocket.
           *
           * @return {Boolean} whether this transport is available.
           * @api public
           */

        }, {
          key: "check",
          value: function check() {
            return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
          }
        }]);

        return WS;
      }(Transport);

      module.exports = WS;
      /***/
    },

    /***/
    "CUme":
    /*!*****************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function CUme(module, exports, __webpack_require__) {
      var Transport = __webpack_require__(
      /*! ../transport */
      "Gbct");

      var parseqs = __webpack_require__(
      /*! parseqs */
      "TypT");

      var parser = __webpack_require__(
      /*! engine.io-parser */
      "KoVT");

      var yeast = __webpack_require__(
      /*! yeast */
      "Aplp");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("engine.io-client:polling");

      var Polling = /*#__PURE__*/function (_Transport2) {
        _inherits(Polling, _Transport2);

        var _super6 = _createSuper(Polling);

        function Polling() {
          _classCallCheck(this, Polling);

          return _super6.apply(this, arguments);
        }

        _createClass(Polling, [{
          key: "name",
          get:
          /**
           * Transport name.
           */
          function get() {
            return "polling";
          }
          /**
           * Opens the socket (triggers polling). We write a PING message to determine
           * when the transport is open.
           *
           * @api private
           */

        }, {
          key: "doOpen",
          value: function doOpen() {
            this.poll();
          }
          /**
           * Pauses polling.
           *
           * @param {Function} callback upon buffers are flushed and transport is paused
           * @api private
           */

        }, {
          key: "pause",
          value: function pause(onPause) {
            var _this23 = this;

            this.readyState = "pausing";

            var pause = function pause() {
              debug("paused");
              _this23.readyState = "paused";
              onPause();
            };

            if (this.polling || !this.writable) {
              var total = 0;

              if (this.polling) {
                debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function () {
                  debug("pre-pause polling complete");
                  --total || pause();
                });
              }

              if (!this.writable) {
                debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function () {
                  debug("pre-pause writing complete");
                  --total || pause();
                });
              }
            } else {
              pause();
            }
          }
          /**
           * Starts polling cycle.
           *
           * @api public
           */

        }, {
          key: "poll",
          value: function poll() {
            debug("polling");
            this.polling = true;
            this.doPoll();
            this.emit("poll");
          }
          /**
           * Overloads onData to detect payloads.
           *
           * @api private
           */

        }, {
          key: "onData",
          value: function onData(data) {
            var _this24 = this;

            debug("polling got data %s", data);

            var callback = function callback(packet) {
              // if its the first message we consider the transport open
              if ("opening" === _this24.readyState && packet.type === "open") {
                _this24.onOpen();
              } // if its a close packet, we close the ongoing requests


              if ("close" === packet.type) {
                _this24.onClose();

                return false;
              } // otherwise bypass onData and handle the message


              _this24.onPacket(packet);
            }; // decode payload


            parser.decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

            if ("closed" !== this.readyState) {
              // if we got data we're not polling
              this.polling = false;
              this.emit("pollComplete");

              if ("open" === this.readyState) {
                this.poll();
              } else {
                debug('ignoring poll - transport state "%s"', this.readyState);
              }
            }
          }
          /**
           * For polling, send a close packet.
           *
           * @api private
           */

        }, {
          key: "doClose",
          value: function doClose() {
            var _this25 = this;

            var close = function close() {
              debug("writing close packet");

              _this25.write([{
                type: "close"
              }]);
            };

            if ("open" === this.readyState) {
              debug("transport open - closing");
              close();
            } else {
              // in case we're trying to close while
              // handshaking is in progress (GH-164)
              debug("transport not open - deferring close");
              this.once("open", close);
            }
          }
          /**
           * Writes a packets payload.
           *
           * @param {Array} data packets
           * @param {Function} drain callback
           * @api private
           */

        }, {
          key: "write",
          value: function write(packets) {
            var _this26 = this;

            this.writable = false;
            parser.encodePayload(packets, function (data) {
              _this26.doWrite(data, function () {
                _this26.writable = true;

                _this26.emit("drain");
              });
            });
          }
          /**
           * Generates uri for connection.
           *
           * @api private
           */

        }, {
          key: "uri",
          value: function uri() {
            var query = this.query || {};
            var schema = this.opts.secure ? "https" : "http";
            var port = ""; // cache busting is forced

            if (false !== this.opts.timestampRequests) {
              query[this.opts.timestampParam] = yeast();
            }

            if (!this.supportsBinary && !query.sid) {
              query.b64 = 1;
            }

            query = parseqs.encode(query); // avoid port if default for schema

            if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
              port = ":" + this.opts.port;
            } // prepend ? to query


            if (query.length) {
              query = "?" + query;
            }

            var ipv6 = this.opts.hostname.indexOf(":") !== -1;
            return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
          }
        }]);

        return Polling;
      }(Transport);

      module.exports = Polling;
      /***/
    },

    /***/
    "Cl5A":
    /*!***********************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function Cl5A(module, exports, __webpack_require__) {
      var Polling = __webpack_require__(
      /*! ./polling */
      "CUme");

      var globalThis = __webpack_require__(
      /*! ../globalThis */
      "2UHX");

      var rNewline = /\n/g;
      var rEscapedNewline = /\\n/g;
      /**
       * Global JSONP callbacks.
       */

      var callbacks;

      var JSONPPolling = /*#__PURE__*/function (_Polling2) {
        _inherits(JSONPPolling, _Polling2);

        var _super7 = _createSuper(JSONPPolling);

        /**
         * JSONP Polling constructor.
         *
         * @param {Object} opts.
         * @api public
         */
        function JSONPPolling(opts) {
          var _this27;

          _classCallCheck(this, JSONPPolling);

          _this27 = _super7.call(this, opts);
          _this27.query = _this27.query || {}; // define global callbacks array if not present
          // we do this here (lazily) to avoid unneeded global pollution

          if (!callbacks) {
            // we need to consider multiple engines in the same page
            callbacks = globalThis.___eio = globalThis.___eio || [];
          } // callback identifier


          _this27.index = callbacks.length; // add callback to jsonp global

          callbacks.push(_this27.onData.bind(_assertThisInitialized(_this27))); // append to query string

          _this27.query.j = _this27.index;
          return _this27;
        }
        /**
         * JSONP only supports binary as base64 encoded strings
         */


        _createClass(JSONPPolling, [{
          key: "supportsBinary",
          get: function get() {
            return false;
          }
          /**
           * Closes the socket.
           *
           * @api private
           */

        }, {
          key: "doClose",
          value: function doClose() {
            if (this.script) {
              // prevent spurious errors from being emitted when the window is unloaded
              this.script.onerror = function () {};

              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            if (this.form) {
              this.form.parentNode.removeChild(this.form);
              this.form = null;
              this.iframe = null;
            }

            _get(_getPrototypeOf(JSONPPolling.prototype), "doClose", this).call(this);
          }
          /**
           * Starts a poll cycle.
           *
           * @api private
           */

        }, {
          key: "doPoll",
          value: function doPoll() {
            var _this28 = this;

            var script = document.createElement("script");

            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            script.async = true;
            script.src = this.uri();

            script.onerror = function (e) {
              _this28.onError("jsonp poll error", e);
            };

            var insertAt = document.getElementsByTagName("script")[0];

            if (insertAt) {
              insertAt.parentNode.insertBefore(script, insertAt);
            } else {
              (document.head || document.body).appendChild(script);
            }

            this.script = script;
            var isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

            if (isUAgecko) {
              this.setTimeoutFn(function () {
                var iframe = document.createElement("iframe");
                document.body.appendChild(iframe);
                document.body.removeChild(iframe);
              }, 100);
            }
          }
          /**
           * Writes with a hidden iframe.
           *
           * @param {String} data to send
           * @param {Function} called upon flush.
           * @api private
           */

        }, {
          key: "doWrite",
          value: function doWrite(data, fn) {
            var _this29 = this;

            var iframe;

            if (!this.form) {
              var form = document.createElement("form");
              var area = document.createElement("textarea");
              var id = this.iframeId = "eio_iframe_" + this.index;
              form.className = "socketio";
              form.style.position = "absolute";
              form.style.top = "-1000px";
              form.style.left = "-1000px";
              form.target = id;
              form.method = "POST";
              form.setAttribute("accept-charset", "utf-8");
              area.name = "d";
              form.appendChild(area);
              document.body.appendChild(form);
              this.form = form;
              this.area = area;
            }

            this.form.action = this.uri();

            function complete() {
              initIframe();
              fn();
            }

            var initIframe = function initIframe() {
              if (_this29.iframe) {
                try {
                  _this29.form.removeChild(_this29.iframe);
                } catch (e) {
                  _this29.onError("jsonp polling iframe removal error", e);
                }
              }

              try {
                // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                var html = '<iframe src="javascript:0" name="' + _this29.iframeId + '">';
                iframe = document.createElement(html);
              } catch (e) {
                iframe = document.createElement("iframe");
                iframe.name = _this29.iframeId;
                iframe.src = "javascript:0";
              }

              iframe.id = _this29.iframeId;

              _this29.form.appendChild(iframe);

              _this29.iframe = iframe;
            };

            initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
            // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

            data = data.replace(rEscapedNewline, "\\\n");
            this.area.value = data.replace(rNewline, "\\n");

            try {
              this.form.submit();
            } catch (e) {}

            if (this.iframe.attachEvent) {
              this.iframe.onreadystatechange = function () {
                if (_this29.iframe.readyState === "complete") {
                  complete();
                }
              };
            } else {
              this.iframe.onload = complete;
            }
          }
        }]);

        return JSONPPolling;
      }(Polling);

      module.exports = JSONPPolling;
      /***/
    },

    /***/
    "EcPD":
    /*!****************************************!*\
      !*** ./src/guards/owner-auth.guard.ts ***!
      \****************************************/

    /*! exports provided: OwnerAuthGuard */

    /***/
    function EcPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerAuthGuard", function () {
        return OwnerAuthGuard;
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

      var OwnerAuthGuard = /*#__PURE__*/function () {
        function OwnerAuthGuard(router) {
          _classCallCheck(this, OwnerAuthGuard);

          this.router = router;
        }

        _createClass(OwnerAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('name') == 'owner') {
              return true;
            } else {
              this.router.navigate(["/admin/pages/error404"]);
            }
          }
        }]);

        return OwnerAuthGuard;
      }();

      OwnerAuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      OwnerAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OwnerAuthGuard);
      /***/
    },

    /***/
    "Eexf":
    /*!***************************************************!*\
      !*** ./node_modules/engine.io-client/lib/util.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Eexf(module, exports, __webpack_require__) {
      var globalThis = __webpack_require__(
      /*! ./globalThis */
      "2UHX");

      module.exports.pick = function (obj) {
        for (var _len4 = arguments.length, attr = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
          attr[_key5 - 1] = arguments[_key5];
        }

        return attr.reduce(function (acc, k) {
          if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
          }

          return acc;
        }, {});
      }; // Keep a reference to the real timeout functions so they can be used when overridden


      var NATIVE_SET_TIMEOUT = setTimeout;
      var NATIVE_CLEAR_TIMEOUT = clearTimeout;

      module.exports.installTimerFunctions = function (obj, opts) {
        if (opts.useNativeTimers) {
          obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis);
          obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis);
        } else {
          obj.setTimeoutFn = setTimeout.bind(globalThis);
          obj.clearTimeoutFn = clearTimeout.bind(globalThis);
        }
      };
      /***/

    },

    /***/
    "FGiv":
    /*!**********************************!*\
      !*** ./node_modules/ms/index.js ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function FGiv(module, exports) {
      /**
       * Helpers.
       */
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val;

        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isFinite(val)) {
          return options["long"] ? fmtLong(val) : fmtShort(val);
        }

        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
      };
      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */


      function parse(str) {
        str = String(str);

        if (str.length > 100) {
          return;
        }

        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

        if (!match) {
          return;
        }

        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();

        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;

          case 'weeks':
          case 'week':
          case 'w':
            return n * w;

          case 'days':
          case 'day':
          case 'd':
            return n * d;

          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;

          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;

          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;

          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;

          default:
            return undefined;
        }
      }
      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */


      function fmtShort(ms) {
        var msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return Math.round(ms / d) + 'd';
        }

        if (msAbs >= h) {
          return Math.round(ms / h) + 'h';
        }

        if (msAbs >= m) {
          return Math.round(ms / m) + 'm';
        }

        if (msAbs >= s) {
          return Math.round(ms / s) + 's';
        }

        return ms + 'ms';
      }
      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */


      function fmtLong(ms) {
        var msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return plural(ms, msAbs, d, 'day');
        }

        if (msAbs >= h) {
          return plural(ms, msAbs, h, 'hour');
        }

        if (msAbs >= m) {
          return plural(ms, msAbs, m, 'minute');
        }

        if (msAbs >= s) {
          return plural(ms, msAbs, s, 'second');
        }

        return ms + ' ms';
      }
      /**
       * Pluralization helper.
       */


      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
      }
      /***/

    },

    /***/
    "Gbct":
    /*!********************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transport.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function Gbct(module, exports, __webpack_require__) {
      var parser = __webpack_require__(
      /*! engine.io-parser */
      "KoVT");

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");

      var _webpack_require__5 = __webpack_require__(
      /*! ./util */
      "Eexf"),
          installTimerFunctions = _webpack_require__5.installTimerFunctions;

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("engine.io-client:transport");

      var Transport = /*#__PURE__*/function (_Emitter4) {
        _inherits(Transport, _Emitter4);

        var _super8 = _createSuper(Transport);

        /**
         * Transport abstract constructor.
         *
         * @param {Object} options.
         * @api private
         */
        function Transport(opts) {
          var _this30;

          _classCallCheck(this, Transport);

          _this30 = _super8.call(this);
          installTimerFunctions(_assertThisInitialized(_this30), opts);
          _this30.opts = opts;
          _this30.query = opts.query;
          _this30.readyState = "";
          _this30.socket = opts.socket;
          return _this30;
        }
        /**
         * Emits an error.
         *
         * @param {String} str
         * @return {Transport} for chaining
         * @api public
         */


        _createClass(Transport, [{
          key: "onError",
          value: function onError(msg, desc) {
            var err = new Error(msg);
            err.type = "TransportError";
            err.description = desc;
            this.emit("error", err);
            return this;
          }
          /**
           * Opens the transport.
           *
           * @api public
           */

        }, {
          key: "open",
          value: function open() {
            if ("closed" === this.readyState || "" === this.readyState) {
              this.readyState = "opening";
              this.doOpen();
            }

            return this;
          }
          /**
           * Closes the transport.
           *
           * @api private
           */

        }, {
          key: "close",
          value: function close() {
            if ("opening" === this.readyState || "open" === this.readyState) {
              this.doClose();
              this.onClose();
            }

            return this;
          }
          /**
           * Sends multiple packets.
           *
           * @param {Array} packets
           * @api private
           */

        }, {
          key: "send",
          value: function send(packets) {
            if ("open" === this.readyState) {
              this.write(packets);
            } else {
              // this might happen if the transport was silently closed in the beforeunload event handler
              debug("transport is not open, discarding packets");
            }
          }
          /**
           * Called upon open
           *
           * @api private
           */

        }, {
          key: "onOpen",
          value: function onOpen() {
            this.readyState = "open";
            this.writable = true;
            this.emit("open");
          }
          /**
           * Called with data.
           *
           * @param {String} data
           * @api private
           */

        }, {
          key: "onData",
          value: function onData(data) {
            var packet = parser.decodePacket(data, this.socket.binaryType);
            this.onPacket(packet);
          }
          /**
           * Called with a decoded packet.
           */

        }, {
          key: "onPacket",
          value: function onPacket(packet) {
            this.emit("packet", packet);
          }
          /**
           * Called upon close.
           *
           * @api private
           */

        }, {
          key: "onClose",
          value: function onClose() {
            this.readyState = "closed";
            this.emit("close");
          }
        }]);

        return Transport;
      }(Emitter);

      module.exports = Transport;
      /***/
    },

    /***/
    "I59L":
    /*!********************************************!*\
      !*** ./src/app/admin/pipes/filter.pipe.ts ***!
      \********************************************/

    /*! exports provided: FilterPipe */

    /***/
    function I59L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(value, searchCharactre) {
            if (!searchCharactre) {
              return [];
            } else {
              //       return value.filter((item) => {
              //      value.includes(item) === true
              //         console.log(data);
              // // return data
              //       })
              var found = value.filter(function (v) {
                return v.includes(searchCharactre);
              });
              return found; // return value.find()
            }
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], FilterPipe);
      /***/
    },

    /***/
    "ISO2":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidemenu/sidemenu.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ISO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Sidebar -->\r\n<div class=\"sidebar\" id=\"sidebar\">\r\n  <div class=\"sidebar-logo\">\r\n    <a [routerLink]=\"'/admin'\">\r\n      <img src=\"assets/img/logo-icon.png\" class=\"img-fluid\" alt=\"\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"sidebar-inner slimscroll\">\r\n    <div id=\"sidebar-menu\" class=\"sidebar-menu\">\r\n      <ul>\r\n        <li [className]=\"page === 'dashboard' ? 'active' : ''\">\r\n          <a [routerLink]=\"'/admin'\"\r\n            ><i class=\"fas fa-columns\"></i> <span>Dashboard</span></a\r\n          >\r\n        </li>\r\n       \r\n        <li class=\"menu-title\">\r\n          <span>Product</span>\r\n        </li>\r\n\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"fas fa-laptop\"></i> <span>Product</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li [className]=\"page === 'addProduct' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/product/add'\">Add New One</a>\r\n            </li>\r\n            <li *ngIf=\"owner||accountant\" [className]=\"page === 'searchProduct' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/product/all-product'\"\r\n                >All Products</a\r\n              >\r\n            </li>\r\n            <li [className]=\"page === 'searchProduct' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/product/search'\"\r\n                >Search For Product</a\r\n              >\r\n            </li>\r\n            <!-- <li [className]=\"page === 'outside'? 'active' : ''\"><a [routerLink]=\"'/admin/maintenance/outside'\">Outside Store</a></li> -->\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"menu-title\">\r\n          <span>Test Phase</span>\r\n        </li>\r\n\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"fas fa-cog\"></i> <span> Test Phase</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li [className]=\"page === 'test' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/test'\">Start Test</a>\r\n            </li>\r\n            <!-- <li [className]=\"page === 'outside'? 'active' : ''\"><a [routerLink]=\"'/admin/maintenance/outside'\">Outside Store</a></li> -->\r\n          </ul>\r\n        </li>\r\n        <li class=\"menu-title\">\r\n          <span>Maintenance</span>\r\n        </li>\r\n\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"fas fa-cog\"></i> <span> Maintenance</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li [className]=\"page === 'inside' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/maintenance/inside'\">Inside Store</a>\r\n            </li>\r\n            <!-- <li [className]=\"page === 'outside' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/maintenance/outside'\">Outside Store</a>\r\n            </li> -->\r\n            <li class=\"submenu\">\r\n              <a href=\"javascript:void(0);\">\r\n                <span>Outside Store</span> <span class=\"menu-arrow\"></span\r\n              ></a>\r\n              <ul style=\"display: none\">\r\n                <li [className]=\"page === 'inside' ? 'active' : ''\">\r\n                  <a [routerLink]=\"'/admin/maintenance/outside-before'\"\r\n                    ><span>Before Delivery</span></a\r\n                  >\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"'/admin/maintenance/outside-after'\">\r\n                    <span>After Delivery</span></a\r\n                  >\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"menu-title\">\r\n          <span>Invocies</span>\r\n        </li>\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"fab fa-wpforms\"></i> <span> Invoices</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li class=\"submenu\">\r\n              <a href=\"javascript:void(0);\">\r\n                <span>Sale Invoices</span> <span class=\"menu-arrow\"></span\r\n              ></a>\r\n              <ul style=\"display: none\">\r\n                <li [className]=\"page === 'inside' ? 'active' : ''\">\r\n                  <a [routerLink]=\"'/admin/Invoices/add/sale'\"\r\n                    ><span>Add Sale Invoice</span></a\r\n                  >\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"'/admin/Invoices/list/sale'\">\r\n                    <span>Completed Invoices</span></a\r\n                  >\r\n                </li>\r\n                <li  *ngIf=\"owner||accountant\">\r\n                  <a [routerLink]=\"'/admin/Invoices/pending-sale-invoice'\">\r\n                    <span>Pending Invoices</span></a\r\n                  >\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"submenu\">\r\n              <a href=\"javascript:void(0);\">\r\n                <span>Purchase Invoices</span> <span class=\"menu-arrow\"></span\r\n              ></a>\r\n              <ul style=\"display: none\">\r\n                <li>\r\n                  <a [routerLink]=\"'/admin/Invoices/add/purchase'\"\r\n                    ><span>Add purchase invoice</span></a\r\n                  >\r\n                </li>\r\n\r\n                <li>\r\n                  <a [routerLink]=\"'/admin/Invoices/list/purchase'\">\r\n                    <span>Completed invoices</span></a\r\n                  >\r\n                </li>\r\n                <li *ngIf=\"owner||accountant\">\r\n                  <a [routerLink]=\"'/admin/Invoices/pending-purchase-invoice'\">\r\n                    <span>Pending Invoices</span></a\r\n                  >\r\n                </li>\r\n                <!-- pending-purchase-invoice -->\r\n              </ul>\r\n            </li>\r\n            <!--  -->\r\n            <!-- <li>\r\n              <a [routerLink]=\"'/admin/Invoices/pricing_model'\"\r\n                ><span>Pricing Model</span></a\r\n              >\r\n            </li> -->\r\n          </ul>\r\n        </li>\r\n        <li class=\"menu-title\">\r\n          <span>Reports</span>\r\n        </li>\r\n\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"fas fa-layer-group\"></i> <span> Reports</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li [className]=\"page === 'error404' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/reports/good-products'\"\r\n                >Good Products Report</a\r\n              >\r\n            </li>\r\n            <li [className]=\"page === 'error500' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/reports/defective-products'\"\r\n                >Defective Products Report</a\r\n              >\r\n            </li>\r\n            <li [className]=\"page === 'error500' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/reports/missing-pieces'\"\r\n                >Missing Pieces Report</a\r\n              >\r\n            </li>\r\n            <li [className]=\"page === 'error500' ? 'active' : ''\">\r\n              <a [routerLink]=\"'/admin/reports/sold-products'\"\r\n                >Sold Products Report</a\r\n              >\r\n            </li>\r\n            <li [className]=\"page === 'error500' ? 'active' : ''\"  *ngIf=\"owner\">\r\n              <a [routerLink]=\"'/admin/reports/employees'\">Employees Report</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"menu-title\" *ngIf=\"owner\">\r\n          <span>Approve Accounts</span>\r\n        </li>\r\n\r\n        <li class=\"submenu\" *ngIf=\"owner\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"far fa-user-circle\"></i> <span> Approve Accounts</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li>\r\n              <a [routerLink]=\"'/admin/approval/employees'\"\r\n                >Approve Employees</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"'/admin/approval/accountants'\"\r\n                >Approve Accountants</a\r\n              >\r\n            </li>\r\n\r\n            <li>\r\n              <a [routerLink]=\"'/admin/approval/Unapproveemployees'\"\r\n                >Delete Employees</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <a\r\n                style=\"z-index: 8857858785758758\"\r\n                [routerLink]=\"'/admin/approval/Unapproveaccountants'\"\r\n                >Delete Accountants</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"menu-title\" *ngIf=\"owner || accountant\">\r\n          <span>Models</span>\r\n        </li>\r\n        <li class=\"submenu\" *ngIf=\"owner || accountant\">\r\n          <a href=\"javascript:void(0);\"\r\n            ><i class=\"far fa-user-circle\"></i> <span>Models</span>\r\n            <span class=\"menu-arrow\"></span\r\n          ></a>\r\n          <ul style=\"display: none\">\r\n            <li>\r\n              <a [routerLink]=\"'/admin/Models/add-new-model'\">Add New Model</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"'/admin/Models/details'\">View Models Details</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <!-- <li [className]=\"page === 'users'? 'active' : ''\">\r\n          <a [routerLink]=\"'/admin/users'\"><i class=\"fas fa-users\"></i> <span>Users</span></a>\r\n        </li>\r\n        <li [className]=\"page === 'blank'? 'active' : ''\">\r\n          <a [routerLink]=\"'/admin/blank'\"><i class=\"far fa-file\"></i> <span>Blank Page</span></a>\r\n        </li>\r\n        <li [className]=\"page === 'vector-map'? 'active' : ''\">\r\n          <a [routerLink]=\"'/admin/vector-map'\"><i class=\"far fa-map\"></i> <span>Vector Maps</span></a>\r\n        </li>\r\n        <li [className]=\"page === 'components'? 'active' : ''\">\r\n          <a [routerLink]=\"'/admin/components'\"><i class=\"fas fa-vector-square\"></i> <span>Components</span></a>\r\n        </li>\r\n        <li class=\"submenu\">\r\n          <a href=\"#\"><i class=\"fab fa-wpforms\"></i> <span> Forms</span> <span class=\"menu-arrow\"></span></a>\r\n          <ul style=\"display: none;\">\r\n            <li [className]=\"page === 'basic-input'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/basic-input'\">Basic Input</a></li>\r\n            <li [className]=\"page === 'input-groups'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/input-groups'\">Input Groups</a></li>\r\n            <li [className]=\"page === 'horizontal-form'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/horizontal-form'\">Horizontal form</a></li>\r\n            <li [className]=\"page === 'vertical-form'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/vertical-form'\">Vertical form</a></li>\r\n            <li [className]=\"page === 'form-mask'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/form-mask'\">Form Mask</a></li>\r\n            <li [className]=\"page === 'form-validation'? 'active' : ''\"><a [routerLink]=\"'/admin/forms/form-validation'\">Form Validation</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"submenu\">\r\n          <a href=\"#\"><i class=\"fas fa-table\"></i> <span>Tables</span> <span class=\"menu-arrow\"></span></a>\r\n          <ul style=\"display: none;\">\r\n            <li [className]=\"page === 'basic-table'? 'active' : ''\"><a [routerLink]=\"'/admin/tables/basic-table'\">Basic Table</a></li>\r\n            <li [className]=\"page === 'default-table'? 'active' : ''\"><a [routerLink]=\"'/admin/tables/default-table'\">Default Table</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"submenu\">\r\n          <a href=\"javascript:void(0);\"><i class=\"fas fa-code\"></i> <span>Multi Level</span> <span class=\"menu-arrow\"></span></a>\r\n          <ul style=\"display: none;\">\r\n            <li class=\"submenu\">\r\n              <a href=\"javascript:void(0);\"> <span>Level 1</span> <span class=\"menu-arrow\"></span></a>\r\n              <ul style=\"display: none;\">\r\n                <li><a href=\"javascript:void(0);\"><span>Level 2</span></a></li>\r\n                <li class=\"submenu\">\r\n                  <a href=\"javascript:void(0);\"> <span> Level 2</span> <span class=\"menu-arrow\"></span></a>\r\n                  <ul style=\"display: none;\">\r\n                    <li><a href=\"javascript:void(0);\">Level 3</a></li>\r\n                    <li><a href=\"javascript:void(0);\">Level 3</a></li>\r\n                  </ul>\r\n                </li>\r\n                <li><a href=\"javascript:void(0);\"> <span>Level 2</span></a></li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0);\"> <span>Level 1</span></a>\r\n            </li>\r\n          </ul>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Sidebar -->\r\n";
      /***/
    },

    /***/
    "K3ix":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
      \***************************************************************************************/

    /*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */

    /***/
    function K3ix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsModalRef", function () {
        return BsModalRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsModalService", function () {
        return BsModalService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function () {
        return ModalBackdropComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function () {
        return ModalBackdropOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () {
        return ModalContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
        return ModalDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
        return ModalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
        return ModalOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CLASS_NAME;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "lUod");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "3XJ7");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "WyaX");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["*"];

      var BsModalRef = function BsModalRef() {
        _classCallCheck(this, BsModalRef);

        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */

        this.setClass = Function;
      };

      BsModalRef.ɵfac = function BsModalRef_Factory(t) {
        return new (t || BsModalRef)();
      };

      BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BsModalRef,
        factory: BsModalRef.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ModalBackdropOptions =
      /**
       * @param {?} options
       */
      function ModalBackdropOptions(options) {
        _classCallCheck(this, ModalBackdropOptions);

        this.animate = true;
        Object.assign(this, options);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ModalOptions = function ModalOptions() {
        _classCallCheck(this, ModalOptions);
      };

      ModalOptions.ɵfac = function ModalOptions_Factory(t) {
        return new (t || ModalOptions)();
      };

      ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ModalOptions,
        factory: ModalOptions.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      if (false) {}
      /** @type {?} */


      var modalConfigDefaults = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        "class": '',
        animated: true,
        initialState: {}
      };
      /** @type {?} */

      var CLASS_NAME = {
        SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
        BACKDROP: 'modal-backdrop',
        OPEN: 'modal-open',
        FADE: 'fade',
        IN: 'in',
        // bs3
        SHOW: 'show' // bs4

      };
      /** @type {?} */

      var SELECTOR = {
        DIALOG: '.modal-dialog',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
      };
      /** @type {?} */

      var TRANSITION_DURATIONS = {
        MODAL: 300,
        BACKDROP: 150
      };
      /** @type {?} */

      var DISMISS_REASONS = {
        BACKRDOP: 'backdrop-click',
        ESC: 'esc'
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ModalContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} options
         * @param {?} _element
         * @param {?} _renderer
         */
        function ModalContainerComponent(options, _element, _renderer) {
          _classCallCheck(this, ModalContainerComponent);

          this._element = _element;
          this._renderer = _renderer;
          this.isShown = false;
          this.isModalHiding = false;
          this.clickStartedInContent = false;
          this.config = Object.assign({}, options);
        }
        /**
         * @return {?}
         */


        _createClass(ModalContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            if (this.isAnimated) {
              this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
            }

            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this31.isShown = true;

              _this31._renderer.addClass(_this31._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
            }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

            if (document && document.body) {
              if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
              }

              this._renderer.addClass(document.body, CLASS_NAME.OPEN);
            }

            if (this._element.nativeElement) {
              this._element.nativeElement.focus();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStarted",
          value: function onClickStarted(event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStop",
          value: function onClickStop(event) {
            /** @type {?} */
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

            if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
              this.clickStartedInContent = false;
              return;
            }

            this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
            this.hide();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc(event) {
            if (!this.isShown) {
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 27 || event.key === 'Escape') {
              event.preventDefault();
            }

            if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
              this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.isShown) {
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this32 = this;

            if (this.isModalHiding || !this.isShown) {
              return;
            }

            this.isModalHiding = true;

            this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this32.isShown = false;

              if (document && document.body && _this32.bsModalService.getModalsCount() === 1) {
                _this32._renderer.removeClass(document.body, CLASS_NAME.OPEN);
              }

              _this32.bsModalService.hide(_this32.level);

              _this32.isModalHiding = false;
            }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
          }
        }]);

        return ModalContainerComponent;
      }();

      ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
        return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalContainerComponent,
        selectors: [["modal-container"]],
        hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
        hostVars: 3,
        hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
              return ctx.onClickStarted($event);
            })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) {
              return ctx.onClickStop($event);
            })("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
              return ctx.onEsc($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
          }
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 2,
        consts: [["role", "document"], [1, "modal-content"]],
        template: function ModalContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config["class"] ? " " + ctx.config["class"] : ""));
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      ModalContainerComponent.ctorParameters = function () {
        return [{
          type: ModalOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      ModalContainerComponent.propDecorators = {
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown.esc', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'modal-container',
            template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            host: {
              "class": 'modal',
              role: 'dialog',
              tabindex: '-1',
              '[attr.aria-modal]': 'true',
              '[attr.aria-labelledby]': 'config.ariaLabelledBy',
              '[attr.aria-describedby]': 'config.ariaDescribedby'
            }
          }]
        }], function () {
          return [{
            type: ModalOptions
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          /**
           * @param {?} event
           * @return {?}
           */
          onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.esc', ['$event']]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * This component will be added as background layout for modals if enabled
       */


      var ModalBackdropComponent = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} renderer
         */
        function ModalBackdropComponent(element, renderer) {
          _classCallCheck(this, ModalBackdropComponent);

          this._isShown = false;
          this.element = element;
          this.renderer = renderer;
        }
        /**
         * @return {?}
         */


        _createClass(ModalBackdropComponent, [{
          key: "isAnimated",
          get: function get() {
            return this._isAnimated;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isShown",
          get: function get() {
            return this._isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isShown = value;

            if (value) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
            } else {
              this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
            }

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              if (value) {
                this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
              } else {
                this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isAnimated) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
            }

            this.isShown = true;
          }
        }]);

        return ModalBackdropComponent;
      }();

      ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
        return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalBackdropComponent,
        selectors: [["bs-modal-backdrop"]],
        hostAttrs: [1, "modal-backdrop"],
        decls: 0,
        vars: 0,
        template: function ModalBackdropComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      ModalBackdropComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-modal-backdrop',
            template: ' ',
            host: {
              "class": CLASS_NAME.BACKDROP
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var TRANSITION_DURATION = 300;
      /** @type {?} */

      var BACKDROP_TRANSITION_DURATION = 150;
      /**
       * Mark any code with directive to show it's content in modal
       */

      var ModalDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @param {?} clf
         */
        function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
          _classCallCheck(this, ModalDirective);

          this._element = _element;
          this._renderer = _renderer;
          /**
           * This event fires immediately when the `show` instance method is called.
           */

          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired when the modal has been made visible to the user
           * (will wait for CSS transitions to complete)
           */

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired immediately when
           * the hide instance method has been called.
           */

          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This event is fired when the modal has finished being
           * hidden from the user (will wait for CSS transitions to complete).
           */

          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._isShown = false;
          this.isBodyOverflowing = false;
          this.originalBodyPadding = 0;
          this.scrollbarWidth = 0;
          this.timerHideModal = 0;
          this.timerRmBackDrop = 0;
          this.isNested = false;
          this.clickStartedInContent = false;
          this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
        }
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */


        _createClass(ModalDirective, [{
          key: "config",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._config;
          }
          /**
           * @return {?}
           */
          ,
          set: function set(conf) {
            this._config = this.getConfig(conf);
          }
        }, {
          key: "isShown",
          get: function get() {
            return this._isShown;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStarted",
          value: function onClickStarted(event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClickStop",
          value: function onClickStop(event) {
            /** @type {?} */
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

            if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
              this.clickStartedInContent = false;
              return;
            }

            this.dismissReason = DISMISS_REASONS.BACKRDOP;
            this.hide(event);
          } // todo: consider preventing default and stopping propagation

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc(event) {
            if (!this._isShown) {
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 27 || event.key === 'Escape') {
              event.preventDefault();
            }

            if (this.config.keyboard) {
              this.dismissReason = DISMISS_REASONS.ESC;
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.config = void 0;

            if (this._isShown) {
              this._isShown = false;
              this.hideModal();

              this._backdrop.dispose();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this._config = this._config || this.getConfig();
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (_this33._config.show) {
                _this33.show();
              }
            }, 0);
          }
          /* Public methods */

          /**
           * Allows to manually toggle modal visibility
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            return this._isShown ? this.hide() : this.show();
          }
          /**
           * Allows to manually open modal
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this34 = this;

            this.dismissReason = null;
            this.onShow.emit(this);

            if (this._isShown) {
              return;
            }

            clearTimeout(this.timerHideModal);
            clearTimeout(this.timerRmBackDrop);
            this._isShown = true;
            this.checkScrollbar();
            this.setScrollbar();

            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
              } else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
              }
            }

            this.showBackdrop(
            /**
            * @return {?}
            */
            function () {
              _this34.showElement();
            });
          }
          /**
           * Allows to manually close modal
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(event) {
            var _this35 = this;

            if (event) {
              event.preventDefault();
            }

            this.onHide.emit(this); // todo: add an option to prevent hiding

            if (!this._isShown) {
              return;
            }

            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
            this._isShown = false;

            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
            } // this._addClassIn = false;


            if (this._config.animated) {
              this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this35.hideModal();
              }, TRANSITION_DURATION);
            } else {
              this.hideModal();
            }
          }
          /**
           * Private methods \@internal
           * @protected
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "getConfig",
          value: function getConfig(config) {
            return Object.assign({}, modalConfigDefaults, config);
          }
          /**
           *  Show dialog
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "showElement",
          value: function showElement() {
            var _this36 = this;

            // todo: replace this with component loader usage
            if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
              // don't move modals dom position
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
              }
            }

            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

            this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

            this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

            if (this._config.animated) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
            } // this._addClassIn = true;


            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
              this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
            }
            /** @type {?} */


            var transitionComplete =
            /**
            * @return {?}
            */
            function transitionComplete() {
              if (_this36._config.focus) {
                _this36._element.nativeElement.focus();
              }

              _this36.onShown.emit(_this36);
            };

            if (this._config.animated) {
              setTimeout(transitionComplete, TRANSITION_DURATION);
            } else {
              transitionComplete();
            }
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "hideModal",
          value: function hideModal() {
            var _this37 = this;

            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

            this.showBackdrop(
            /**
            * @return {?}
            */
            function () {
              if (!_this37.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                  _this37._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }

                _this37.resetScrollbar();
              }

              _this37.resetAdjustments();

              _this37.focusOtherModal();

              _this37.onHidden.emit(_this37);
            });
          } // todo: original show was calling a callback when done, but we can use
          // promise

          /**
           * \@internal
           * @protected
           * @param {?=} callback
           * @return {?}
           */

        }, {
          key: "showBackdrop",
          value: function showBackdrop(callback) {
            var _this38 = this;

            if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
              this.removeBackdrop();

              this._backdrop.attach(ModalBackdropComponent).to('body').show({
                isAnimated: this._config.animated
              });

              this.backdrop = this._backdrop._componentRef;

              if (!callback) {
                return;
              }

              if (!this._config.animated) {
                callback();
                return;
              }

              setTimeout(callback, BACKDROP_TRANSITION_DURATION);
            } else if (!this._isShown && this.backdrop) {
              this.backdrop.instance.isShown = false;
              /** @type {?} */

              var callbackRemove =
              /**
              * @return {?}
              */
              function callbackRemove() {
                _this38.removeBackdrop();

                if (callback) {
                  callback();
                }
              };

              if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
              } else {
                callbackRemove();
              }
            } else if (callback) {
              callback();
            }
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "removeBackdrop",
          value: function removeBackdrop() {
            this._backdrop.hide();
          }
          /**
           * Events tricks
           * @protected
           * @return {?}
           */
          // no need for it
          // protected setEscapeEvent():void {
          //   if (this._isShown && this._config.keyboard) {
          //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          //       if (event.which === 27) {
          //         this.hide()
          //       }
          //     })
          //
          //   } else if (!this._isShown) {
          //     $(this._element).off(Event.KEYDOWN_DISMISS)
          //   }
          // }
          // protected setResizeEvent():void {
          // console.log(this.renderer.listenGlobal('', Event.RESIZE));
          // if (this._isShown) {
          //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
          // } else {
          //   $(window).off(Event.RESIZE)
          // }
          // }

        }, {
          key: "focusOtherModal",
          value: function focusOtherModal() {
            if (this._element.nativeElement.parentElement == null) {
              return;
            }
            /** @type {?} */


            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

            if (!otherOpenedModals.length) {
              return;
            }

            otherOpenedModals[otherOpenedModals.length - 1].focus();
          }
          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "resetAdjustments",
          value: function resetAdjustments() {
            this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

            this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
          }
          /** Scroll bar tricks */

          /**
           * \@internal
           * @protected
           * @return {?}
           */

        }, {
          key: "checkScrollbar",
          value: function checkScrollbar() {
            this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "setScrollbar",
          value: function setScrollbar() {
            if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
              return;
            }

            this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue('padding-right') || 0, 10);

            if (this.isBodyOverflowing) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "resetScrollbar",
          value: function resetScrollbar() {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
          } // thx d.walsh

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollbarWidth",
          value: function getScrollbarWidth() {
            /** @type {?} */
            var scrollDiv = this._renderer.createElement('div');

            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

            this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
            /** @type {?} */


            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);

            return scrollbarWidth;
          }
        }]);

        return ModalDirective;
      }();

      ModalDirective.ɵfac = function ModalDirective_Factory(t) {
        return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
      };

      ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ModalDirective,
        selectors: [["", "bsModal", ""]],
        hostBindings: function ModalDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
              return ctx.onClickStarted($event);
            })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
              return ctx.onClickStop($event);
            })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
              return ctx.onEsc($event);
            });
          }
        },
        inputs: {
          config: "config"
        },
        outputs: {
          onShow: "onShow",
          onShown: "onShown",
          onHide: "onHide",
          onHidden: "onHidden"
        },
        exportAs: ["bs-modal"]
      });
      /** @nocollapse */

      ModalDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      };

      ModalDirective.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.esc', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsModal]',
            exportAs: 'bs-modal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
          }];
        }, {
          onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
          }],
          // todo: consider preventing default and stopping propagation

          /**
           * @param {?} event
           * @return {?}
           */
          onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.esc', ['$event']]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsModalService = /*#__PURE__*/function () {
        /**
         * @param {?} rendererFactory
         * @param {?} clf
         */
        function BsModalService(rendererFactory, clf) {
          _classCallCheck(this, BsModalService);

          this.clf = clf; // constructor props

          this.config = modalConfigDefaults; // tslint:disable-next-line:no-any

          this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isBodyOverflowing = false;
          this.originalBodyPadding = 0;
          this.scrollbarWidth = 0;
          this.modalsCount = 0;
          this.lastDismissReason = '';
          this.loaders = [];
          this._backdropLoader = this.clf.createLoader(null, null, null);
          this._renderer = rendererFactory.createRenderer(null, null);
        }
        /**
         * Shows a modal
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */
        // tslint:disable-next-line:no-any


        _createClass(BsModalService, [{
          key: "show",
          value: function show(content, config) {
            this.modalsCount++;

            this._createLoaders();

            this.config = Object.assign({}, modalConfigDefaults, config);

            this._showBackdrop();

            this.lastDismissReason = null;
            return this._showModal(content);
          }
          /**
           * @param {?} level
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(level) {
            var _this39 = this;

            if (this.modalsCount === 1) {
              this._hideBackdrop();

              this.resetScrollbar();
            }

            this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this39._hideModal(level);

              _this39.removeLoaders(level);
            }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_showBackdrop",
          value: function _showBackdrop() {
            /** @type {?} */
            var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
            /** @type {?} */

            var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

            if (this.modalsCount === 1) {
              this.removeBackdrop();

              if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
                  isAnimated: this.config.animated
                });

                this.backdropRef = this._backdropLoader._componentRef;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hideBackdrop",
          value: function _hideBackdrop() {
            var _this40 = this;

            if (!this.backdropRef) {
              return;
            }

            this.backdropRef.instance.isShown = false;
            /** @type {?} */

            var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this40.removeBackdrop();
            }, duration);
          } // tslint:disable-next-line:no-any

          /**
           * @param {?} content
           * @return {?}
           */

        }, {
          key: "_showModal",
          value: function _showModal(content) {
            var _this41 = this;

            /** @type {?} */
            var modalLoader = this.loaders[this.loaders.length - 1];

            if (this.config && this.config.providers) {
              var _iterator = _createForOfIteratorHelper(this.config.providers),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var provider = _step.value;
                  modalLoader.provide(provider);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            /** @type {?} */


            var bsModalRef = new BsModalRef();
            /** @type {?} */

            var modalContainerRef = modalLoader.provide({
              provide: ModalOptions,
              useValue: this.config
            }).provide({
              provide: BsModalRef,
              useValue: bsModalRef
            }).attach(ModalContainerComponent).to('body').show({
              content: content,
              isAnimated: this.config.animated,
              initialState: this.config.initialState,
              bsModalService: this
            });
            modalContainerRef.instance.level = this.getModalsCount();

            bsModalRef.hide =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var duration = _this41.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return modalContainerRef.instance.hide();
              }, duration);
            };

            bsModalRef.content = modalLoader.getInnerComponent() || null;

            bsModalRef.setClass =
            /**
            * @param {?} newClass
            * @return {?}
            */
            function (newClass) {
              modalContainerRef.instance.config["class"] = newClass;
            };

            return bsModalRef;
          }
          /**
           * @param {?} level
           * @return {?}
           */

        }, {
          key: "_hideModal",
          value: function _hideModal(level) {
            /** @type {?} */
            var modalLoader = this.loaders[level - 1];

            if (modalLoader) {
              modalLoader.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getModalsCount",
          value: function getModalsCount() {
            return this.modalsCount;
          }
          /**
           * @param {?} reason
           * @return {?}
           */

        }, {
          key: "setDismissReason",
          value: function setDismissReason(reason) {
            this.lastDismissReason = reason;
          }
          /**
           * @return {?}
           */

        }, {
          key: "removeBackdrop",
          value: function removeBackdrop() {
            this._backdropLoader.hide();

            this.backdropRef = null;
          }
          /** Checks if the body is overflowing and sets scrollbar width */

          /**
           * \@internal
           * @return {?}
           */

        }, {
          key: "checkScrollbar",
          value: function checkScrollbar() {
            this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
          }
          /**
           * @return {?}
           */

        }, {
          key: "setScrollbar",
          value: function setScrollbar() {
            if (!document) {
              return;
            }

            this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

            if (this.isBodyOverflowing) {
              document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "resetScrollbar",
          value: function resetScrollbar() {
            document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
          } // thx d.walsh

          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollbarWidth",
          value: function getScrollbarWidth() {
            /** @type {?} */
            var scrollDiv = this._renderer.createElement('div');

            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

            this._renderer.appendChild(document.body, scrollDiv);
            /** @type {?} */


            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            this._renderer.removeChild(document.body, scrollDiv);

            return scrollbarWidth;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_createLoaders",
          value: function _createLoaders() {
            /** @type {?} */
            var loader = this.clf.createLoader(null, null, null);
            this.copyEvent(loader.onBeforeShow, this.onShow);
            this.copyEvent(loader.onShown, this.onShown);
            this.copyEvent(loader.onBeforeHide, this.onHide);
            this.copyEvent(loader.onHidden, this.onHidden);
            this.loaders.push(loader);
          }
          /**
           * @private
           * @param {?} level
           * @return {?}
           */

        }, {
          key: "removeLoaders",
          value: function removeLoaders(level) {
            this.loaders.splice(level - 1, 1);
            this.loaders.forEach(
            /**
            * @param {?} loader
            * @param {?} i
            * @return {?}
            */
            function (loader, i) {
              loader.instance.level = i + 1;
            });
          } // tslint:disable-next-line:no-any

          /**
           * @private
           * @param {?} from
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "copyEvent",
          value: function copyEvent(from, to) {
            var _this42 = this;

            from.subscribe(
            /**
            * @return {?}
            */
            function () {
              to.emit(_this42.lastDismissReason);
            });
          }
        }]);

        return BsModalService;
      }();

      BsModalService.ɵfac = function BsModalService_Factory(t) {
        return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
      };

      BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BsModalService,
        factory: BsModalService.ɵfac
      });
      /** @nocollapse */

      BsModalService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ModalModule = /*#__PURE__*/function () {
        function ModalModule() {
          _classCallCheck(this, ModalModule);
        }

        _createClass(ModalModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ModalModule,
              providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: ModalModule,
              providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
        }]);

        return ModalModule;
      }();

      ModalModule.ɵfac = function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      };

      ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ModalModule
      });
      ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
          declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
          exports: [ModalBackdropComponent, ModalDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
            exports: [ModalBackdropComponent, ModalDirective],
            entryComponents: [ModalBackdropComponent, ModalContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-modal.js.map

      /***/

    },

    /***/
    "KFhd":
    /*!*******************************************************************!*\
      !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function KFhd(module, exports, __webpack_require__) {
      var _webpack_require__6 = __webpack_require__(
      /*! ./commons */
      "gC2B"),
          PACKET_TYPES = _webpack_require__6.PACKET_TYPES;

      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

      var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
      };

      var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
        var type = _ref.type,
            data = _ref.data;

        if (withNativeBlob && data instanceof Blob) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(data, callback);
          }
        } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(new Blob([data]), callback);
          }
        } // plain string


        return callback(PACKET_TYPES[type] + (data || ""));
      };

      var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
        var fileReader = new FileReader();

        fileReader.onload = function () {
          var content = fileReader.result.split(",")[1];
          callback("b" + content);
        };

        return fileReader.readAsDataURL(data);
      };

      module.exports = encodePacket;
      /***/
    },

    /***/
    "KoVT":
    /*!****************************************************!*\
      !*** ./node_modules/engine.io-parser/lib/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function KoVT(module, exports, __webpack_require__) {
      var encodePacket = __webpack_require__(
      /*! ./encodePacket */
      "KFhd");

      var decodePacket = __webpack_require__(
      /*! ./decodePacket */
      "fP3r");

      var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

      var encodePayload = function encodePayload(packets, callback) {
        // some packets may be added to the array while encoding, so the initial length must be saved
        var length = packets.length;
        var encodedPackets = new Array(length);
        var count = 0;
        packets.forEach(function (packet, i) {
          // force base64 encoding for binary packets
          encodePacket(packet, false, function (encodedPacket) {
            encodedPackets[i] = encodedPacket;

            if (++count === length) {
              callback(encodedPackets.join(SEPARATOR));
            }
          });
        });
      };

      var decodePayload = function decodePayload(encodedPayload, binaryType) {
        var encodedPackets = encodedPayload.split(SEPARATOR);
        var packets = [];

        for (var i = 0; i < encodedPackets.length; i++) {
          var decodedPacket = decodePacket(encodedPackets[i], binaryType);
          packets.push(decodedPacket);

          if (decodedPacket.type === "error") {
            break;
          }
        }

        return packets;
      };

      module.exports = {
        protocol: 4,
        encodePacket: encodePacket,
        encodePayload: encodePayload,
        decodePacket: decodePacket,
        decodePayload: decodePayload
      };
      /***/
    },

    /***/
    "MIMc":
    /*!*************************************************************!*\
      !*** ./src/app/admin/page-header/page-header.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function MIMc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "NOtv":
    /*!*******************************************!*\
      !*** ./node_modules/debug/src/browser.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function NOtv(module, exports, __webpack_require__) {
      /* eslint-env browser */

      /**
       * This is the web browser implementation of `debug()`.
       */
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();

      exports.destroy = function () {
        var warned = false;
        return function () {
          if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
          }
        };
      }();
      /**
       * Colors.
       */


      exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
      /**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */
      // eslint-disable-next-line complexity

      function useColors() {
        // NB: In an Electron preload script, document will be defined but not fully
        // initialized. Since we know we're in Chrome, we'll just detect this case
        // explicitly
        if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
          return true;
        } // Internet Explorer and Edge do not support colors.


        if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        } // Is webkit? http://stackoverflow.com/a/16459606/376773
        // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


        return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      /**
       * Colorize log arguments if enabled.
       *
       * @api public
       */


      function formatArgs(args) {
        args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

        if (!this.useColors) {
          return;
        }

        var c = 'color: ' + this.color;
        args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
        // arguments passed either before or after the %c, so we need to
        // figure out the correct index to insert the CSS into

        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function (match) {
          if (match === '%%') {
            return;
          }

          index++;

          if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      /**
       * Invokes `console.debug()` when available.
       * No-op when `console.debug` is not a "function".
       * If `console.debug` is not available, falls back
       * to `console.log`.
       *
       * @api public
       */


      exports.log = console.debug || console.log || function () {};
      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */


      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem('debug', namespaces);
          } else {
            exports.storage.removeItem('debug');
          }
        } catch (error) {// Swallow
          // XXX (@Qix-) should we be logging these?
        }
      }
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */


      function load() {
        var r;

        try {
          r = exports.storage.getItem('debug');
        } catch (error) {// Swallow
          // XXX (@Qix-) should we be logging these?
        } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


        if (!r && typeof process !== 'undefined' && 'env' in process) {
          r = process.env.DEBUG;
        }

        return r;
      }
      /**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */


      function localstorage() {
        try {
          // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
          // The Browser also has localStorage in the global context.
          return localStorage;
        } catch (error) {// Swallow
          // XXX (@Qix-) should we be logging these?
        }
      }

      module.exports = __webpack_require__(
      /*! ./common */
      "3JDX")(exports);
      var formatters = module.exports.formatters;
      /**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */

      formatters.j = function (v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return '[UnexpectedJSONParseError]: ' + error.message;
        }
      };
      /***/

    },

    /***/
    "PVQj":
    /*!********************************************************!*\
      !*** ./node_modules/socket.io-client/build/manager.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function PVQj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Manager = void 0;

      var eio = __webpack_require__(
      /*! engine.io-client */
      "lKxJ");

      var util_1 = __webpack_require__(
      /*! engine.io-client/lib/util */
      "Eexf");

      var socket_1 = __webpack_require__(
      /*! ./socket */
      "eFEk");

      var parser = __webpack_require__(
      /*! socket.io-parser */
      "ggWO");

      var on_1 = __webpack_require__(
      /*! ./on */
      "Byvj");

      var Backoff = __webpack_require__(
      /*! backo2 */
      "C2QD");

      var typed_events_1 = __webpack_require__(
      /*! ./typed-events */
      "4Trj");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("socket.io-client:manager");

      var Manager = /*#__PURE__*/function (_typed_events_1$Stric) {
        _inherits(Manager, _typed_events_1$Stric);

        var _super9 = _createSuper(Manager);

        function Manager(uri, opts) {
          var _this43;

          _classCallCheck(this, Manager);

          var _a;

          _this43 = _super9.call(this);
          _this43.nsps = {};
          _this43.subs = [];

          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
          }

          opts = opts || {};
          opts.path = opts.path || "/socket.io";
          _this43.opts = opts;
          (0, util_1.installTimerFunctions)(_assertThisInitialized(_this43), opts);

          _this43.reconnection(opts.reconnection !== false);

          _this43.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

          _this43.reconnectionDelay(opts.reconnectionDelay || 1000);

          _this43.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

          _this43.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);

          _this43.backoff = new Backoff({
            min: _this43.reconnectionDelay(),
            max: _this43.reconnectionDelayMax(),
            jitter: _this43.randomizationFactor()
          });

          _this43.timeout(null == opts.timeout ? 20000 : opts.timeout);

          _this43._readyState = "closed";
          _this43.uri = uri;

          var _parser = opts.parser || parser;

          _this43.encoder = new _parser.Encoder();
          _this43.decoder = new _parser.Decoder();
          _this43._autoConnect = opts.autoConnect !== false;
          if (_this43._autoConnect) _this43.open();
          return _this43;
        }

        _createClass(Manager, [{
          key: "reconnection",
          value: function reconnection(v) {
            if (!arguments.length) return this._reconnection;
            this._reconnection = !!v;
            return this;
          }
        }, {
          key: "reconnectionAttempts",
          value: function reconnectionAttempts(v) {
            if (v === undefined) return this._reconnectionAttempts;
            this._reconnectionAttempts = v;
            return this;
          }
        }, {
          key: "reconnectionDelay",
          value: function reconnectionDelay(v) {
            var _a;

            if (v === undefined) return this._reconnectionDelay;
            this._reconnectionDelay = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
            return this;
          }
        }, {
          key: "randomizationFactor",
          value: function randomizationFactor(v) {
            var _a;

            if (v === undefined) return this._randomizationFactor;
            this._randomizationFactor = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
            return this;
          }
        }, {
          key: "reconnectionDelayMax",
          value: function reconnectionDelayMax(v) {
            var _a;

            if (v === undefined) return this._reconnectionDelayMax;
            this._reconnectionDelayMax = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
            return this;
          }
        }, {
          key: "timeout",
          value: function timeout(v) {
            if (!arguments.length) return this._timeout;
            this._timeout = v;
            return this;
          }
          /**
           * Starts trying to reconnect if reconnection is enabled and we have not
           * started reconnecting yet
           *
           * @private
           */

        }, {
          key: "maybeReconnectOnOpen",
          value: function maybeReconnectOnOpen() {
            // Only try to reconnect if it's the first time we're connecting
            if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
              // keeps reconnection from firing twice for the same reconnection loop
              this.reconnect();
            }
          }
          /**
           * Sets the current transport `socket`.
           *
           * @param {Function} fn - optional, callback
           * @return self
           * @public
           */

        }, {
          key: "open",
          value: function open(fn) {
            var _this44 = this;

            debug("readyState %s", this._readyState);
            if (~this._readyState.indexOf("open")) return this;
            debug("opening %s", this.uri);
            this.engine = eio(this.uri, this.opts);
            var socket = this.engine;
            var self = this;
            this._readyState = "opening";
            this.skipReconnect = false; // emit `open`

            var openSubDestroy = (0, on_1.on)(socket, "open", function () {
              self.onopen();
              fn && fn();
            }); // emit `error`

            var errorSub = (0, on_1.on)(socket, "error", function (err) {
              debug("error");
              self.cleanup();
              self._readyState = "closed";

              _this44.emitReserved("error", err);

              if (fn) {
                fn(err);
              } else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
              }
            });

            if (false !== this._timeout) {
              var timeout = this._timeout;
              debug("connect attempt will timeout after %d", timeout);

              if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
              } // set timer


              var timer = this.setTimeoutFn(function () {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                socket.emit("error", new Error("timeout"));
              }, timeout);

              if (this.opts.autoUnref) {
                timer.unref();
              }

              this.subs.push(function subDestroy() {
                clearTimeout(timer);
              });
            }

            this.subs.push(openSubDestroy);
            this.subs.push(errorSub);
            return this;
          }
          /**
           * Alias for open()
           *
           * @return self
           * @public
           */

        }, {
          key: "connect",
          value: function connect(fn) {
            return this.open(fn);
          }
          /**
           * Called upon transport open.
           *
           * @private
           */

        }, {
          key: "onopen",
          value: function onopen() {
            debug("open"); // clear old subs

            this.cleanup(); // mark as open

            this._readyState = "open";
            this.emitReserved("open"); // add new subs

            var socket = this.engine;
            this.subs.push((0, on_1.on)(socket, "ping", this.onping.bind(this)), (0, on_1.on)(socket, "data", this.ondata.bind(this)), (0, on_1.on)(socket, "error", this.onerror.bind(this)), (0, on_1.on)(socket, "close", this.onclose.bind(this)), (0, on_1.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          /**
           * Called upon a ping.
           *
           * @private
           */

        }, {
          key: "onping",
          value: function onping() {
            this.emitReserved("ping");
          }
          /**
           * Called with data.
           *
           * @private
           */

        }, {
          key: "ondata",
          value: function ondata(data) {
            this.decoder.add(data);
          }
          /**
           * Called when parser fully decodes a packet.
           *
           * @private
           */

        }, {
          key: "ondecoded",
          value: function ondecoded(packet) {
            this.emitReserved("packet", packet);
          }
          /**
           * Called upon socket error.
           *
           * @private
           */

        }, {
          key: "onerror",
          value: function onerror(err) {
            debug("error", err);
            this.emitReserved("error", err);
          }
          /**
           * Creates a new socket for the given `nsp`.
           *
           * @return {Socket}
           * @public
           */

        }, {
          key: "socket",
          value: function socket(nsp, opts) {
            var socket = this.nsps[nsp];

            if (!socket) {
              socket = new socket_1.Socket(this, nsp, opts);
              this.nsps[nsp] = socket;
            }

            return socket;
          }
          /**
           * Called upon a socket close.
           *
           * @param socket
           * @private
           */

        }, {
          key: "_destroy",
          value: function _destroy(socket) {
            var nsps = Object.keys(this.nsps);

            for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
              var nsp = _nsps[_i];
              var _socket = this.nsps[nsp];

              if (_socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
              }
            }

            this._close();
          }
          /**
           * Writes a packet.
           *
           * @param packet
           * @private
           */

        }, {
          key: "_packet",
          value: function _packet(packet) {
            debug("writing packet %j", packet);
            var encodedPackets = this.encoder.encode(packet);

            for (var i = 0; i < encodedPackets.length; i++) {
              this.engine.write(encodedPackets[i], packet.options);
            }
          }
          /**
           * Clean up transport subscriptions and packet buffer.
           *
           * @private
           */

        }, {
          key: "cleanup",
          value: function cleanup() {
            debug("cleanup");
            this.subs.forEach(function (subDestroy) {
              return subDestroy();
            });
            this.subs.length = 0;
            this.decoder.destroy();
          }
          /**
           * Close the current socket.
           *
           * @private
           */

        }, {
          key: "_close",
          value: function _close() {
            debug("disconnect");
            this.skipReconnect = true;
            this._reconnecting = false;

            if ("opening" === this._readyState) {
              // `onclose` will not fire because
              // an open event never happened
              this.cleanup();
            }

            this.backoff.reset();
            this._readyState = "closed";
            if (this.engine) this.engine.close();
          }
          /**
           * Alias for close()
           *
           * @private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            return this._close();
          }
          /**
           * Called upon engine close.
           *
           * @private
           */

        }, {
          key: "onclose",
          value: function onclose(reason) {
            debug("onclose");
            this.cleanup();
            this.backoff.reset();
            this._readyState = "closed";
            this.emitReserved("close", reason);

            if (this._reconnection && !this.skipReconnect) {
              this.reconnect();
            }
          }
          /**
           * Attempt a reconnection.
           *
           * @private
           */

        }, {
          key: "reconnect",
          value: function reconnect() {
            var _this45 = this;

            if (this._reconnecting || this.skipReconnect) return this;
            var self = this;

            if (this.backoff.attempts >= this._reconnectionAttempts) {
              debug("reconnect failed");
              this.backoff.reset();
              this.emitReserved("reconnect_failed");
              this._reconnecting = false;
            } else {
              var delay = this.backoff.duration();
              debug("will wait %dms before reconnect attempt", delay);
              this._reconnecting = true;
              var timer = this.setTimeoutFn(function () {
                if (self.skipReconnect) return;
                debug("attempting reconnect");

                _this45.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


                if (self.skipReconnect) return;
                self.open(function (err) {
                  if (err) {
                    debug("reconnect attempt error");
                    self._reconnecting = false;
                    self.reconnect();

                    _this45.emitReserved("reconnect_error", err);
                  } else {
                    debug("reconnect success");
                    self.onreconnect();
                  }
                });
              }, delay);

              if (this.opts.autoUnref) {
                timer.unref();
              }

              this.subs.push(function subDestroy() {
                clearTimeout(timer);
              });
            }
          }
          /**
           * Called upon successful reconnect.
           *
           * @private
           */

        }, {
          key: "onreconnect",
          value: function onreconnect() {
            var attempt = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();
            this.emitReserved("reconnect", attempt);
          }
        }]);

        return Manager;
      }(typed_events_1.StrictEventEmitter);

      exports.Manager = Manager;
      /***/
    },

    /***/
    "SL0s":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function SL0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"adminShow\">\r\n    <app-header></app-header>\r\n    <app-sidemenu></app-sidemenu>\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"content container-fluid\">\r\n            <app-page-header [hidden]=\"!filterShow\"></app-page-header>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!adminShow\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "TRGY":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function TRGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "SL0s");
      /* harmony import */


      var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.component.css */
      "yP50");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common-service.service */
      "1+kh");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(document, commonService, route, Router) {
          var _this46 = this;

          _classCallCheck(this, AdminComponent);

          this.document = document;
          this.commonService = commonService;
          this.route = route;
          this.Router = Router;
          this.filterShow = true;
          this.adminShow = true;
          Router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
              if (event.url === '/admin/login' || event.url === '/admin/register' || event.url === '/admin/forget-password' || event.url === '/admin/lock-screen' || event.url === '/admin/pages/error404' || event.url === '/admin/pages/error500') {
                _this46.adminShow = false;
              } else if (event.url === '/admin/dashboard' || event.url === '/admin') {
                _this46.filterShow = false;
                _this46.adminShow = true;
              } else if (event.url === '/admin/add-category' || event.url === '/admin/edit-category' || event.url === '/admin/add-sub-category' || event.url === '/admin/edit-sub-category' || event.url === '/admin/add-rating-type' || event.url === '/admin/edit-rating-type' || event.url === '/admin/add-subscription' || event.url === '/admin/edit-subscription') {
                _this46.filterShow = false;
                _this46.adminShow = true;
              } else {
                _this46.filterShow = true;
                _this46.adminShow = true;
              }
            }
          });
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.commonService.nextmessage('admin');
            // let scope = this;
            // setTimeout(() => {
            //   scope.Router.navigateByUrl('/admin/dashboard');
            // }, 100);
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminComponent);
      /***/
    },

    /***/
    "TypT":
    /*!***************************************!*\
      !*** ./node_modules/parseqs/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function TypT(module, exports) {
      /**
       * Compiles a querystring
       * Returns string representation of the object
       *
       * @param {Object}
       * @api private
       */
      exports.encode = function (obj) {
        var str = '';

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }

        return str;
      };
      /**
       * Parses a simple querystring into an object
       *
       * @param {String} qs
       * @api private
       */


      exports.decode = function (qs) {
        var qry = {};
        var pairs = qs.split('&');

        for (var i = 0, l = pairs.length; i < l; i++) {
          var pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }

        return qry;
      };
      /***/

    },

    /***/
    "Uxeu":
    /*!****************************************!*\
      !*** ./node_modules/parseuri/index.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function Uxeu(module, exports) {
      /**
       * Parses an URI
       *
       * @author Steven Levithan <stevenlevithan.com> (MIT license)
       * @api private
       */
      var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

      module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');

        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }

        var m = re.exec(str || ''),
            uri = {},
            i = 14;

        while (i--) {
          uri[parts[i]] = m[i] || '';
        }

        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }

        uri.pathNames = pathNames(uri, uri['path']);
        uri.queryKey = queryKey(uri, uri['query']);
        return uri;
      };

      function pathNames(obj, path) {
        var regx = /\/{2,9}/g,
            names = path.replace(regx, "/").split("/");

        if (path.substr(0, 1) == '/' || path.length === 0) {
          names.splice(0, 1);
        }

        if (path.substr(path.length - 1, 1) == '/') {
          names.splice(names.length - 1, 1);
        }

        return names;
      }

      function queryKey(uri, query) {
        var data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
          if ($1) {
            data[$1] = $2;
          }
        });
        return data;
      }
      /***/

    },

    /***/
    "WyaX":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
      \***************************************************************************************************/

    /*! exports provided: Positioning, PositioningService, positionElements */

    /***/
    function WyaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Positioning", function () {
        return Positioning;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositioningService", function () {
        return PositioningService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "positionElements", function () {
        return positionElements;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get CSS computed property of the given element
       * @param {?} element
       * @param {?=} property
       * @return {?}
       */


      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        } // NOTE: 1 DOM access here

        /** @type {?} */


        var window = element.ownerDocument.defaultView;
        /** @type {?} */

        var css = window.getComputedStyle(element, null);
        return property ? css[
        /** @type {?} */
        property] : css;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Returns the parentNode or the host of the element
       * @param {?} element
       * @return {?}
       */


      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }

        return element.parentNode || element.host;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
          return document.body;
        }

        switch (element.nodeName) {
          case 'HTML':
          case 'BODY':
            return element.ownerDocument.body;

          case '#document':
            return element.body;

          default:
        } // Firefox want us to check `-x` and `-y` variations as well


        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var isIE11 = isBrowser && !!(
      /** @type {?} */
      window.MSInputMethodContext &&
      /** @type {?} */
      document.documentMode);
      /** @type {?} */

      var isIE10 = isBrowser && !!(
      /** @type {?} */
      window.MSInputMethodContext && /MSIE 10/.test(
      /** @type {?} */
      navigator.userAgent));
      /**
       * @param {?=} version
       * @return {?}
       */

      function isIE(version) {
        if (version === 11) {
          return isIE11;
        }

        if (version === 10) {
          return isIE10;
        }

        return isIE11 || isIE10;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }
        /** @type {?} */


        var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

        /** @type {?} */

        var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

        /** @type {?} */

        var sibling;

        while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
          sibling = element.nextElementSibling;
          offsetParent = sibling.offsetParent;
        }
        /** @type {?} */


        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
        } // .offsetParent will return the closest TH, TD or TABLE in case


        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }

        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @param {?} node
       * @return {?}
       */


      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element1
       * @param {?} element2
       * @return {?}
       */


      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        } // Here we make sure to give as "start" the element that comes first in the DOM

        /* tslint:disable-next-line: no-bitwise */

        /** @type {?} */


        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        /** @type {?} */

        var start = order ? element1 : element2;
        /** @type {?} */

        var end = order ? element2 : element1; // Get common ancestor container

        /** @type {?} */

        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        } // one of the nodes is inside shadowDOM, find which one

        /** @type {?} */


        var element1root = getRoot(element1);

        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Helper to detect borders of a given element
       */

      /**
       * @param {?} styles
       * @param {?} axis
       * @return {?}
       */


      function getBordersSize(styles, axis) {
        /** @type {?} */
        var sideA = axis === 'x' ? 'Left' : 'Top';
        /** @type {?} */

        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return parseFloat(styles[
        /** @type {?} */
        "border".concat(sideA, "Width")]) + parseFloat(styles[
        /** @type {?} */
        "border".concat(sideB, "Width")]);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} axis
       * @param {?} body
       * @param {?} html
       * @param {?} computedStyle
       * @return {?}
       */


      function getSize(axis, body, html, computedStyle) {
        return Math.max(
        /** @type {?} */
        body["offset".concat(axis)],
        /** @type {?} */
        body["scroll".concat(axis)],
        /** @type {?} */
        html["client".concat(axis)],
        /** @type {?} */
        html["offset".concat(axis)],
        /** @type {?} */
        html["scroll".concat(axis)], isIE(10) ? parseInt(
        /** @type {?} */
        html["offset".concat(axis)], 10) + parseInt(computedStyle[
        /** @type {?} */
        "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
        /** @type {?} */
        "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
      }
      /**
       * @param {?} document
       * @return {?}
       */


      function getWindowSizes(document) {
        /** @type {?} */
        var body = document.body;
        /** @type {?} */

        var html = document.documentElement;
        /** @type {?} */

        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @param {?} element
       * @param {?=} side
       * @return {?}
       */


      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

        /** @type {?} */
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */

        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          /** @type {?} */
          var html = element.ownerDocument.documentElement;
          /** @type {?} */

          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} offsets
       * @return {?}
       */


      function getClientRect(offsets) {
        return Object.assign({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getBoundingClientRect(element) {
        /** @type {?} */
        var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11

        try {
          if (isIE(10)) {
            rect = element.getBoundingClientRect();
            /** @type {?} */

            var scrollTop = getScroll(element, 'top');
            /** @type {?} */

            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {
          return undefined;
        }
        /** @type {?} */


        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        }; // subtract scrollbar size from sizes

        /** @type {?} */

        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        /** @type {?} */

        var width = sizes.width || element.clientWidth || result.right - result.left;
        /** @type {?} */

        var height = sizes.height || element.clientHeight || result.bottom - result.top;
        /** @type {?} */

        var horizScrollbar = element.offsetWidth - width;
        /** @type {?} */

        var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons

        if (horizScrollbar || vertScrollbar) {
          /** @type {?} */
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');
          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} rect
       * @param {?} element
       * @param {?=} subtract
       * @return {?}
       */


      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var scrollTop = getScroll(element, 'top');
        /** @type {?} */

        var scrollLeft = getScroll(element, 'left');
        /** @type {?} */

        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} children
       * @param {?} parent
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var isIE10 = isIE(10);
        /** @type {?} */

        var isHTML = parent.nodeName === 'HTML';
        /** @type {?} */

        var childrenRect = getBoundingClientRect(children);
        /** @type {?} */

        var parentRect = getBoundingClientRect(parent);
        /** @type {?} */

        var scrollParent = getScrollParent(children);
        /** @type {?} */

        var styles = getStyleComputedProperty(parent);
        /** @type {?} */

        var borderTopWidth = parseFloat(styles.borderTopWidth);
        /** @type {?} */

        var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

        if (fixedPosition && isHTML) {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }
        /** @type {?} */


        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.

        if (!isIE10 && isHTML) {
          /** @type {?} */
          var marginTop = parseFloat(styles.marginTop);
          /** @type {?} */

          var marginLeft = parseFloat(styles.marginLeft);
          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @param {?=} excludeScroll
       * @return {?}
       */


      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        /** @type {?} */

        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        /** @type {?} */

        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        /** @type {?} */

        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        /** @type {?} */

        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        /** @type {?} */

        var offset = {
          top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
          left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
          width: width,
          height: height
        };
        return getClientRect(offset);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function isFixed(element) {
        /** @type {?} */
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }

        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }

        return isFixed(getParentNode(element));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
          return document.documentElement;
        }
        /** @type {?} */


        var el = element.parentElement;

        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
          el = el.parentElement;
        }

        return el || document.documentElement;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} host
       * @param {?=} padding
       * @param {?=} boundariesElement
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getBoundaries(target, host) {
        var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
        var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        // NOTE: 1 DOM access here
        // NOTE: 1 DOM access here

        /** @type {?} */
        var boundaries = {
          top: 0,
          left: 0
        };
        /** @type {?} */

        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          // Handle other cases based on DOM element used as boundaries

          /** @type {?} */
          var boundariesNode;

          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));

            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = target.ownerDocument.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }
          /** @type {?} */


          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(target.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        } // Add paddings


        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;
        return boundaries;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} __0
       * @return {?}
       */


      function getArea(_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width * height;
      }
      /**
       * @param {?} placement
       * @param {?} refRect
       * @param {?} target
       * @param {?} host
       * @param {?=} allowedPositions
       * @param {?=} boundariesElement
       * @param {?=} padding
       * @return {?}
       */


      function computeAutoPlacement(placement, refRect, target, host) {
        var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
        var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
        var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }
        /** @type {?} */


        var boundaries = getBoundaries(target, host, padding, boundariesElement);
        /** @type {?} */

        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };
        /** @type {?} */

        var sortedAreas = Object.keys(rects).map(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return Object.assign({
            key: key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(
        /**
        * @param {?} a
        * @param {?} b
        * @return {?}
        */
        function (a, b) {
          return b.area - a.area;
        });
        /** @type {?} */

        var filteredAreas = sortedAreas.filter(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref3) {
          var width = _ref3.width,
              height = _ref3.height;
          return width >= target.clientWidth && height >= target.clientHeight;
        });
        filteredAreas = filteredAreas.filter(
        /**
        * @param {?} position
        * @return {?}
        */
        function (position) {
          return allowedPositions.some(
          /**
          * @param {?} allowedPosition
          * @return {?}
          */
          function (allowedPosition) {
            return allowedPosition === position.key;
          });
        });
        /** @type {?} */

        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
        /** @type {?} */

        var variation = placement.split(' ')[1]; // for tooltip on auto position

        target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
        return computedPlacement + (variation ? "-".concat(variation) : '');
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function getOffsets(data) {
        return {
          width: data.offsets.target.width,
          height: data.offsets.target.height,
          left: Math.floor(data.offsets.target.left),
          top: Math.round(data.offsets.target.top),
          bottom: Math.round(data.offsets.target.bottom),
          right: Math.floor(data.offsets.target.right)
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the opposite placement of the given one
       * @param {?} placement
       * @return {?}
       */


      function getOppositePlacement(placement) {
        /** @type {?} */
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g,
        /**
        * @param {?} matched
        * @return {?}
        */
        function (matched) {
          return (
            /** @type {?} */
            hash[matched]
          );
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the opposite placement variation of the given one
       * @param {?} variation
       * @return {?}
       */


      function getOppositeVariation(variation) {
        if (variation === 'right') {
          return 'left';
        } else if (variation === 'left') {
          return 'right';
        }

        return variation;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @param {?} element
       * @return {?}
       */


      function getOuterSizes(element) {
        /** @type {?} */
        var window = element.ownerDocument.defaultView;
        /** @type {?} */

        var styles = window.getComputedStyle(element);
        /** @type {?} */

        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        /** @type {?} */

        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        return {
          width: Number(element.offsetWidth) + y,
          height: Number(element.offsetHeight) + x
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} host
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getReferenceOffsets(target, host) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        /** @type {?} */
        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
        return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} hostOffsets
       * @param {?} position
       * @return {?}
       */


      function getTargetOffsets(target, hostOffsets, position) {
        /** @type {?} */
        var placement = position.split(' ')[0]; // Get target node sizes

        /** @type {?} */

        var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

        /** @type {?} */

        var targetOffsets = {
          width: targetRect.width,
          height: targetRect.height
        }; // depending by the target placement we have to compute its offsets slightly differently

        /** @type {?} */

        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        /** @type {?} */

        var mainSide = isHoriz ? 'top' : 'left';
        /** @type {?} */

        var secondarySide = isHoriz ? 'left' : 'top';
        /** @type {?} */

        var measurement = isHoriz ? 'height' : 'width';
        /** @type {?} */

        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

        /** @type {?} */
        targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

        /** @type {?} */
        targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
        /** @type {?} */
        hostOffsets[getOppositePlacement(secondarySide)];
        return targetOffsets;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Helper used to know if the given modifier is enabled.
       * @param {?} options
       * @param {?} modifierName
       * @return {?}
       */


      function isModifierEnabled(options, modifierName) {
        return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Tells if a given input is a number
       * @param {?} n
       * @return {?}
       */


      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @param {?=} renderer
       * @return {?}
       */


      function updateContainerClass(data, renderer) {
        /** @type {?} */
        var target = data.instance.target;
        /** @type {?} */

        var containerClass = target.className;

        if (data.placementAuto) {
          containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
          containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
          containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

          if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
          }

          if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
          }
        }

        containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

        if (renderer) {
          renderer.setAttribute(target, 'class', containerClass);
          return;
        }

        target.className = containerClass;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @param {?} styles
       * @param {?=} renderer
       * @return {?}
       */


      function setStyles(element, styles, renderer) {
        Object.keys(styles).forEach(
        /**
        * @param {?} prop
        * @return {?}
        */
        function (prop) {
          /** @type {?} */
          var unit = ''; // add unit if the value is numeric and is one of the following

          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }

          if (renderer) {
            renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
            return;
          }

          element.style[prop] = String(styles[prop]) + unit;
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function arrow(data) {
        var _data$offsets$arrow;

        /** @type {?} */
        var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

        /** @type {?} */

        var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

        if (!arrowElement) {
          return data;
        }
        /** @type {?} */


        var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
        /** @type {?} */

        var len = isVertical ? 'height' : 'width';
        /** @type {?} */

        var sideCapitalized = isVertical ? 'Top' : 'Left';
        /** @type {?} */

        var side = sideCapitalized.toLowerCase();
        /** @type {?} */

        var altSide = isVertical ? 'left' : 'top';
        /** @type {?} */

        var opSide = isVertical ? 'bottom' : 'right';
        /** @type {?} */

        var arrowElementSize = getOuterSizes(arrowElement)[len];
        /** @type {?} */

        var placementVariation = data.placement.split(' ')[1]; // top/left side

        if (data.offsets.host[opSide] - arrowElementSize <
        /** @type {?} */
        targetOffsets[side]) {
          /** @type {?} */
          targetOffsets[side] -=
          /** @type {?} */
          targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
        } // bottom/right side


        if (Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) >
        /** @type {?} */
        targetOffsets[opSide]) {
          /** @type {?} */
          targetOffsets[side] += Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(arrowElementSize) - Number(
          /** @type {?} */
          targetOffsets[opSide]);
        }

        targetOffsets = getClientRect(targetOffsets); // Compute the sideValue using the updated target offsets
        // take target margin in account because we don't have this info available

        /** @type {?} */

        var css = getStyleComputedProperty(data.instance.target);
        /** @type {?} */

        var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
        /** @type {?} */

        var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]); // compute center of the target

        /** @type {?} */

        var center;

        if (!placementVariation) {
          center = Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
        } else {
          /** @type {?} */
          var targetBorderRadius = parseFloat(css.borderRadius);
          /** @type {?} */

          var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
          center = side === placementVariation ? Number(
          /** @type {?} */
          data.offsets.host[side]) + targetSideArrowOffset : Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
        }
        /** @type {?} */


        var sideValue = center -
        /** @type {?} */
        targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

        sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
        data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
        data.instance.arrow = arrowElement;
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function flip(data) {
        data.offsets.target = getClientRect(data.offsets.target);

        if (!isModifierEnabled(data.options, 'flip')) {
          data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
          return data;
        }
        /** @type {?} */


        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'viewport', false // positionFixed
        );
        /** @type {?} */

        var placement = data.placement.split(' ')[0];
        /** @type {?} */

        var variation = data.placement.split(' ')[1] || '';
        /** @type {?} */

        var offsetsHost = data.offsets.host;
        /** @type {?} */

        var target = data.instance.target;
        /** @type {?} */

        var host = data.instance.host;
        /** @type {?} */

        var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
        /** @type {?} */

        var flipOrder = [placement, adaptivePosition];
        /* tslint:disable-next-line: cyclomatic-complexity */

        flipOrder.forEach(
        /**
        * @param {?} step
        * @param {?} index
        * @return {?}
        */
        function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

          /** @type {?} */

          var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
          /** @type {?} */

          var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
          /** @type {?} */

          var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
          /** @type {?} */

          var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
          /** @type {?} */

          var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
          /** @type {?} */

          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

          /** @type {?} */

          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
          /** @type {?} */

          var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? " ".concat(variation) : '');
            data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
          }
        });
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} targetElement
       * @param {?} hostElement
       * @param {?} position
       * @param {?} options
       * @return {?}
       */


      function initData(targetElement, hostElement, position, options) {
        /** @type {?} */
        var hostElPosition = getReferenceOffsets(targetElement, hostElement);

        if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
          /* tslint:disable-next-line: no-parameter-reassignment */
          position = 'auto';
        }
        /** @type {?} */


        var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

        /** @type {?} */

        var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position; // Normalize placements that have identical main placement and variation ("right right" => "right").

        /** @type {?} */

        var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);

        if (matches) {
          placement = matches[1] + (matches[2] ? " ".concat(matches[2]) : '');
        } // "left right", "top bottom" etc. placements also considered incorrect.


        if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
          placement = 'auto';
        }
        /** @type {?} */


        var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
        placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
        return {
          options: options,
          instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
          },
          offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
          },
          positionFixed: false,
          placement: placement,
          placementAuto: placementAuto
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function preventOverflow(data) {
        if (!isModifierEnabled(data.options, 'preventOverflow')) {
          return data;
        } // NOTE: DOM access here
        // resets the targetOffsets's position so that the document size can be calculated excluding
        // the size of the targetOffsets element itself

        /** @type {?} */


        var transformProp = 'transform';
        /** @type {?} */

        var targetStyles = data.instance.target.style; // assignment to help minification

        var top = targetStyles.top,
            left = targetStyles.left,
            transform = targetStyles[transformProp];
        targetStyles.top = '';
        targetStyles.left = '';
        targetStyles[transformProp] = '';
        /** @type {?} */

        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'scrollParent', false // positionFixed
        ); // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed

        targetStyles.top = top;
        targetStyles.left = left;
        targetStyles[transformProp] = transform;
        /** @type {?} */

        var order = ['left', 'right', 'top', 'bottom'];
        /** @type {?} */

        var check = {
          /**
           * @param {?} placement
           * @return {?}
           */
          primary: function primary(placement) {
            /** @type {?} */
            var value =
            /** @type {?} */
            data.offsets.target[placement];

            if (
            /** @type {?} */
            data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
            ) {
                value = Math.max(
                /** @type {?} */
                data.offsets.target[placement], boundaries[placement]);
              }

            return _defineProperty({}, placement, value);
          },

          /**
           * @param {?} placement
           * @return {?}
           */
          secondary: function secondary(placement) {
            /** @type {?} */
            var mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */

            var value = data.offsets.target[mainSide];

            if (
            /** @type {?} */
            data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
              }

            return _defineProperty({}, mainSide, value);
          }
        };
        /** @type {?} */

        var side;
        order.forEach(
        /**
        * @param {?} placement
        * @return {?}
        */
        function (placement) {
          side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          data.offsets.target = Object.assign({}, data.offsets.target,
          /** @type {?} */
          check[side](placement));
        });
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function shift(data) {
        /** @type {?} */
        var placement = data.placement;
        /** @type {?} */

        var basePlacement = placement.split(' ')[0];
        /** @type {?} */

        var shiftVariation = placement.split(' ')[1];

        if (shiftVariation) {
          var _data$offsets = data.offsets,
              host = _data$offsets.host,
              target = _data$offsets.target;
          /** @type {?} */

          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          /** @type {?} */

          var side = isVertical ? 'left' : 'top';
          /** @type {?} */

          var measurement = isVertical ? 'width' : 'height';
          /** @type {?} */

          var shiftOffsets = {
            start: _defineProperty({}, side, host[side]),
            end: _defineProperty({}, side, host[side] + host[measurement] - target[measurement])
          };
          data.offsets.target = Object.assign({}, target, _defineProperty({}, side, side === shiftVariation ?
          /** @type {?} */
          shiftOffsets.start[side] :
          /** @type {?} */
          shiftOffsets.end[side]));
        }

        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Positioning = /*#__PURE__*/function () {
        function Positioning() {
          _classCallCheck(this, Positioning);
        }

        _createClass(Positioning, [{
          key: "position",
          value:
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?=} round
           * @return {?}
           */
          function position(hostElement, targetElement) {
            var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return this.offset(hostElement, targetElement, false);
          }
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?=} round
           * @return {?}
           */

        }, {
          key: "offset",
          value: function offset(hostElement, targetElement) {
            var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return getReferenceOffsets(targetElement, hostElement);
          }
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?} position
           * @param {?=} appendToBody
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "positionElements",
          value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
            /** @type {?} */
            var chainOfModifiers = [flip, shift, preventOverflow, arrow];
            return chainOfModifiers.reduce(
            /**
            * @param {?} modifiedData
            * @param {?} modifier
            * @return {?}
            */
            function (modifiedData, modifier) {
              return modifier(modifiedData);
            }, initData(targetElement, hostElement, position, options));
          }
        }]);

        return Positioning;
      }();
      /** @type {?} */


      var positionService = new Positioning();
      /**
       * @param {?} hostElement
       * @param {?} targetElement
       * @param {?} placement
       * @param {?=} appendToBody
       * @param {?=} options
       * @param {?=} renderer
       * @return {?}
       */

      function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
        /** @type {?} */
        var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
        /** @type {?} */

        var offsets = getOffsets(data);
        setStyles(targetElement, {
          'will-change': 'transform',
          top: '0px',
          left: '0px',
          transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
        }, renderer);

        if (data.instance.arrow) {
          setStyles(data.instance.arrow, data.offsets.arrow, renderer);
        }

        updateContainerClass(data, renderer);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function PositioningOptions() {}

      if (false) {}

      var PositioningService = /*#__PURE__*/function () {
        /**
         * @param {?} ngZone
         * @param {?} rendererFactory
         * @param {?} platformId
         */
        function PositioningService(ngZone, rendererFactory, platformId) {
          var _this47 = this;

          _classCallCheck(this, PositioningService);

          this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.positionElements = new Map();
          this.isDisabled = false;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this47.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', {
                passive: true
              }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', {
                passive: true
              }),
              /* tslint:disable-next-line: deprecation */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), _this47.update$$);

              _this47.triggerEvent$.subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this47.isDisabled) {
                  return;
                }

                _this47.positionElements
                /* tslint:disable-next-line: no-any */
                .forEach(
                /**
                * @param {?} positionElement
                * @return {?}
                */
                function (positionElement) {
                  positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this47.options, rendererFactory.createRenderer(null, null));
                });
              });
            });
          }
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(PositioningService, [{
          key: "position",
          value: function position(options) {
            this.addPositionElement(options);
          }
          /**
           * @return {?}
           */

        }, {
          key: "event$",
          get: function get() {
            return this.triggerEvent$;
          }
          /**
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {
            this.isDisabled = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "enable",
          value: function enable() {
            this.isDisabled = false;
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "addPositionElement",
          value: function addPositionElement(options) {
            this.positionElements.set(_getHtmlElement(options.element), options);
          }
          /**
           * @return {?}
           */

        }, {
          key: "calcPosition",
          value: function calcPosition() {
            this.update$$.next();
          }
          /**
           * @param {?} elRef
           * @return {?}
           */

        }, {
          key: "deletePositionElement",
          value: function deletePositionElement(elRef) {
            this.positionElements["delete"](_getHtmlElement(elRef));
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "setOptions",
          value: function setOptions(options) {
            this.options = options;
          }
        }]);

        return PositioningService;
      }();

      PositioningService.ɵfac = function PositioningService_Factory(t) {
        return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PositioningService,
        factory: PositioningService.ɵfac
      });
      /** @nocollapse */

      PositioningService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: Number,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }, {
            type: Number,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @param {?} element
       * @return {?}
       */


      function _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
          return document.querySelector(element);
        }

        if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
          return element.nativeElement;
        }

        return element;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-positioning.js.map

      /***/

    },

    /***/
    "X071":
    /*!***************************************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function X071(module, exports, __webpack_require__) {
      var globalThis = __webpack_require__(
      /*! ../globalThis */
      "2UHX");

      var nextTick = function () {
        var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

        if (isPromiseAvailable) {
          return function (cb) {
            return Promise.resolve().then(cb);
          };
        } else {
          return function (cb, setTimeoutFn) {
            return setTimeoutFn(cb, 0);
          };
        }
      }();

      module.exports = {
        WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
        usingBrowserWebSocket: true,
        defaultBinaryType: "arraybuffer",
        nextTick: nextTick
      };
      /***/
    },

    /***/
    "akSB":
    /*!***************************************************************!*\
      !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function akSB(module, exports, __webpack_require__) {
      var XMLHttpRequest = __webpack_require__(
      /*! xmlhttprequest-ssl */
      "AdPF");

      var XHR = __webpack_require__(
      /*! ./polling-xhr */
      "0z79");

      var JSONP = __webpack_require__(
      /*! ./polling-jsonp */
      "Cl5A");

      var websocket = __webpack_require__(
      /*! ./websocket */
      "CIKq");

      exports.polling = polling;
      exports.websocket = websocket;
      /**
       * Polling transport polymorphic constructor.
       * Decides on xhr vs jsonp based on feature detection.
       *
       * @api private
       */

      function polling(opts) {
        var xhr;
        var xd = false;
        var xs = false;
        var jsonp = false !== opts.jsonp;

        if (typeof location !== "undefined") {
          var isSSL = "https:" === location.protocol;
          var port = location.port; // some user agents have empty `location.port`

          if (!port) {
            port = isSSL ? 443 : 80;
          }

          xd = opts.hostname !== location.hostname || port !== opts.port;
          xs = opts.secure !== isSSL;
        }

        opts.xdomain = xd;
        opts.xscheme = xs;
        xhr = new XMLHttpRequest(opts);

        if ("open" in xhr && !opts.forceJSONP) {
          return new XHR(opts);
        } else {
          if (!jsonp) throw new Error("JSONP disabled");
          return new JSONP(opts);
        }
      }
      /***/

    },

    /***/
    "cpc2":
    /*!*************************************************!*\
      !*** ./node_modules/component-emitter/index.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function cpc2(module, exports, __webpack_require__) {
      /**
       * Expose `Emitter`.
       */
      if (true) {
        module.exports = Emitter;
      }
      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */


      function Emitter(obj) {
        if (obj) return mixin(obj);
      }

      ;
      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }

        return obj;
      }
      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };
      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };
      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {}; // all

        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        } // specific event


        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this; // remove all handlers

        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        } // remove specific handler


        var cb;

        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];

          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        } // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.


        if (callbacks.length === 0) {
          delete this._callbacks['$' + event];
        }

        return this;
      };
      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */


      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1),
            callbacks = this._callbacks['$' + event];

        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }

        if (callbacks) {
          callbacks = callbacks.slice(0);

          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };
      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */


      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };
      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */


      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
      /***/

    },

    /***/
    "eFEk":
    /*!*******************************************************!*\
      !*** ./node_modules/socket.io-client/build/socket.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function eFEk(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Socket = void 0;

      var socket_io_parser_1 = __webpack_require__(
      /*! socket.io-parser */
      "ggWO");

      var on_1 = __webpack_require__(
      /*! ./on */
      "Byvj");

      var typed_events_1 = __webpack_require__(
      /*! ./typed-events */
      "4Trj");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("socket.io-client:socket");
      /**
       * Internal events.
       * These events can't be emitted by the user.
       */


      var RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
      });

      var Socket = /*#__PURE__*/function (_typed_events_1$Stric2) {
        _inherits(Socket, _typed_events_1$Stric2);

        var _super10 = _createSuper(Socket);

        /**
         * `Socket` constructor.
         *
         * @public
         */
        function Socket(io, nsp, opts) {
          var _this48;

          _classCallCheck(this, Socket);

          _this48 = _super10.call(this);
          _this48.connected = false;
          _this48.disconnected = true;
          _this48.receiveBuffer = [];
          _this48.sendBuffer = [];
          _this48.ids = 0;
          _this48.acks = {};
          _this48.flags = {};
          _this48.io = io;
          _this48.nsp = nsp;

          if (opts && opts.auth) {
            _this48.auth = opts.auth;
          }

          if (_this48.io._autoConnect) _this48.open();
          return _this48;
        }
        /**
         * Subscribe to open, close and packet events
         *
         * @private
         */


        _createClass(Socket, [{
          key: "subEvents",
          value: function subEvents() {
            if (this.subs) return;
            var io = this.io;
            this.subs = [(0, on_1.on)(io, "open", this.onopen.bind(this)), (0, on_1.on)(io, "packet", this.onpacket.bind(this)), (0, on_1.on)(io, "error", this.onerror.bind(this)), (0, on_1.on)(io, "close", this.onclose.bind(this))];
          }
          /**
           * Whether the Socket will try to reconnect when its Manager connects or reconnects
           */

        }, {
          key: "active",
          get: function get() {
            return !!this.subs;
          }
          /**
           * "Opens" the socket.
           *
           * @public
           */

        }, {
          key: "connect",
          value: function connect() {
            if (this.connected) return this;
            this.subEvents();
            if (!this.io["_reconnecting"]) this.io.open(); // ensure open

            if ("open" === this.io._readyState) this.onopen();
            return this;
          }
          /**
           * Alias for connect()
           */

        }, {
          key: "open",
          value: function open() {
            return this.connect();
          }
          /**
           * Sends a `message` event.
           *
           * @return self
           * @public
           */

        }, {
          key: "send",
          value: function send() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
              args[_key6] = arguments[_key6];
            }

            args.unshift("message");
            this.emit.apply(this, args);
            return this;
          }
          /**
           * Override `emit`.
           * If the event is in `events`, it's emitted normally.
           *
           * @return self
           * @public
           */

        }, {
          key: "emit",
          value: function emit(ev) {
            if (RESERVED_EVENTS.hasOwnProperty(ev)) {
              throw new Error('"' + ev + '" is a reserved event name');
            }

            for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key7 = 1; _key7 < _len6; _key7++) {
              args[_key7 - 1] = arguments[_key7];
            }

            args.unshift(ev);
            var packet = {
              type: socket_io_parser_1.PacketType.EVENT,
              data: args
            };
            packet.options = {};
            packet.options.compress = this.flags.compress !== false; // event ack callback

            if ("function" === typeof args[args.length - 1]) {
              debug("emitting packet with ack id %d", this.ids);
              this.acks[this.ids] = args.pop();
              packet.id = this.ids++;
            }

            var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);

            if (discardPacket) {
              debug("discard packet as the transport is not currently writable");
            } else if (this.connected) {
              this.packet(packet);
            } else {
              this.sendBuffer.push(packet);
            }

            this.flags = {};
            return this;
          }
          /**
           * Sends a packet.
           *
           * @param packet
           * @private
           */

        }, {
          key: "packet",
          value: function packet(_packet2) {
            _packet2.nsp = this.nsp;

            this.io._packet(_packet2);
          }
          /**
           * Called upon engine `open`.
           *
           * @private
           */

        }, {
          key: "onopen",
          value: function onopen() {
            var _this49 = this;

            debug("transport is open - connecting");

            if (typeof this.auth == "function") {
              this.auth(function (data) {
                _this49.packet({
                  type: socket_io_parser_1.PacketType.CONNECT,
                  data: data
                });
              });
            } else {
              this.packet({
                type: socket_io_parser_1.PacketType.CONNECT,
                data: this.auth
              });
            }
          }
          /**
           * Called upon engine or manager `error`.
           *
           * @param err
           * @private
           */

        }, {
          key: "onerror",
          value: function onerror(err) {
            if (!this.connected) {
              this.emitReserved("connect_error", err);
            }
          }
          /**
           * Called upon engine `close`.
           *
           * @param reason
           * @private
           */

        }, {
          key: "onclose",
          value: function onclose(reason) {
            debug("close (%s)", reason);
            this.connected = false;
            this.disconnected = true;
            delete this.id;
            this.emitReserved("disconnect", reason);
          }
          /**
           * Called with socket packet.
           *
           * @param packet
           * @private
           */

        }, {
          key: "onpacket",
          value: function onpacket(packet) {
            var sameNamespace = packet.nsp === this.nsp;
            if (!sameNamespace) return;

            switch (packet.type) {
              case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                  var id = packet.data.sid;
                  this.onconnect(id);
                } else {
                  this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }

                break;

              case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;

              case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;

              case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;

              case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;

              case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;

              case socket_io_parser_1.PacketType.CONNECT_ERROR:
                var err = new Error(packet.data.message); // @ts-ignore

                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
            }
          }
          /**
           * Called upon a server event.
           *
           * @param packet
           * @private
           */

        }, {
          key: "onevent",
          value: function onevent(packet) {
            var args = packet.data || [];
            debug("emitting event %j", args);

            if (null != packet.id) {
              debug("attaching ack callback to event");
              args.push(this.ack(packet.id));
            }

            if (this.connected) {
              this.emitEvent(args);
            } else {
              this.receiveBuffer.push(Object.freeze(args));
            }
          }
        }, {
          key: "emitEvent",
          value: function emitEvent(args) {
            if (this._anyListeners && this._anyListeners.length) {
              var listeners = this._anyListeners.slice();

              var _iterator2 = _createForOfIteratorHelper(listeners),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var listener = _step2.value;
                  listener.apply(this, args);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
          }
          /**
           * Produces an ack callback to emit with an event.
           *
           * @private
           */

        }, {
          key: "ack",
          value: function ack(id) {
            var self = this;
            var sent = false;
            return function () {
              // prevent double callbacks
              if (sent) return;
              sent = true;

              for (var _len7 = arguments.length, args = new Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
                args[_key8] = arguments[_key8];
              }

              debug("sending ack %j", args);
              self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args
              });
            };
          }
          /**
           * Called upon a server acknowlegement.
           *
           * @param packet
           * @private
           */

        }, {
          key: "onack",
          value: function onack(packet) {
            var ack = this.acks[packet.id];

            if ("function" === typeof ack) {
              debug("calling ack %s with %j", packet.id, packet.data);
              ack.apply(this, packet.data);
              delete this.acks[packet.id];
            } else {
              debug("bad ack %s", packet.id);
            }
          }
          /**
           * Called upon server connect.
           *
           * @private
           */

        }, {
          key: "onconnect",
          value: function onconnect(id) {
            debug("socket connected with id %s", id);
            this.id = id;
            this.connected = true;
            this.disconnected = false;
            this.emitBuffered();
            this.emitReserved("connect");
          }
          /**
           * Emit buffered events (received and emitted).
           *
           * @private
           */

        }, {
          key: "emitBuffered",
          value: function emitBuffered() {
            var _this50 = this;

            this.receiveBuffer.forEach(function (args) {
              return _this50.emitEvent(args);
            });
            this.receiveBuffer = [];
            this.sendBuffer.forEach(function (packet) {
              return _this50.packet(packet);
            });
            this.sendBuffer = [];
          }
          /**
           * Called upon server disconnect.
           *
           * @private
           */

        }, {
          key: "ondisconnect",
          value: function ondisconnect() {
            debug("server disconnect (%s)", this.nsp);
            this.destroy();
            this.onclose("io server disconnect");
          }
          /**
           * Called upon forced client/server side disconnections,
           * this method ensures the manager stops tracking us and
           * that reconnections don't get triggered for this.
           *
           * @private
           */

        }, {
          key: "destroy",
          value: function destroy() {
            if (this.subs) {
              // clean subscriptions to avoid reconnections
              this.subs.forEach(function (subDestroy) {
                return subDestroy();
              });
              this.subs = undefined;
            }

            this.io["_destroy"](this);
          }
          /**
           * Disconnects the socket manually.
           *
           * @return self
           * @public
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            if (this.connected) {
              debug("performing disconnect (%s)", this.nsp);
              this.packet({
                type: socket_io_parser_1.PacketType.DISCONNECT
              });
            } // remove socket from pool


            this.destroy();

            if (this.connected) {
              // fire events
              this.onclose("io client disconnect");
            }

            return this;
          }
          /**
           * Alias for disconnect()
           *
           * @return self
           * @public
           */

        }, {
          key: "close",
          value: function close() {
            return this.disconnect();
          }
          /**
           * Sets the compress flag.
           *
           * @param compress - if `true`, compresses the sending data
           * @return self
           * @public
           */

        }, {
          key: "compress",
          value: function compress(_compress) {
            this.flags.compress = _compress;
            return this;
          }
          /**
           * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
           * ready to send messages.
           *
           * @returns self
           * @public
           */

        }, {
          key: "volatile",
          get: function get() {
            this.flags["volatile"] = true;
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback.
           *
           * @param listener
           * @public
           */

        }, {
          key: "onAny",
          value: function onAny(listener) {
            this._anyListeners = this._anyListeners || [];

            this._anyListeners.push(listener);

            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback. The listener is added to the beginning of the listeners array.
           *
           * @param listener
           * @public
           */

        }, {
          key: "prependAny",
          value: function prependAny(listener) {
            this._anyListeners = this._anyListeners || [];

            this._anyListeners.unshift(listener);

            return this;
          }
          /**
           * Removes the listener that will be fired when any event is emitted.
           *
           * @param listener
           * @public
           */

        }, {
          key: "offAny",
          value: function offAny(listener) {
            if (!this._anyListeners) {
              return this;
            }

            if (listener) {
              var listeners = this._anyListeners;

              for (var i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
              }
            } else {
              this._anyListeners = [];
            }

            return this;
          }
          /**
           * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
           * e.g. to remove listeners.
           *
           * @public
           */

        }, {
          key: "listenersAny",
          value: function listenersAny() {
            return this._anyListeners || [];
          }
        }]);

        return Socket;
      }(typed_events_1.StrictEventEmitter);

      exports.Socket = Socket;
      /***/
    },

    /***/
    "f7yz":
    /*!****************************************************!*\
      !*** ./node_modules/socket.io-client/build/url.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function f7yz(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.url = void 0;

      var parseuri = __webpack_require__(
      /*! parseuri */
      "Uxeu");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("socket.io-client:url");
      /**
       * URL parser.
       *
       * @param uri - url
       * @param path - the request path of the connection
       * @param loc - An object meant to mimic window.location.
       *        Defaults to window.location.
       * @public
       */


      function url(uri) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var loc = arguments.length > 2 ? arguments[2] : undefined;
        var obj = uri; // default to window.location

        loc = loc || typeof location !== "undefined" && location;
        if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

        if (typeof uri === "string") {
          if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
              uri = loc.protocol + uri;
            } else {
              uri = loc.host + uri;
            }
          }

          if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);

            if ("undefined" !== typeof loc) {
              uri = loc.protocol + "//" + uri;
            } else {
              uri = "https://" + uri;
            }
          } // parse


          debug("parse %s", uri);
          obj = parseuri(uri);
        } // make sure we treat `localhost:80` and `localhost` equally


        if (!obj.port) {
          if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
          } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
          }
        }

        obj.path = obj.path || "/";
        var ipv6 = obj.host.indexOf(":") !== -1;
        var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

        obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
      }

      exports.url = url;
      /***/
    },

    /***/
    "fP3r":
    /*!*******************************************************************!*\
      !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function fP3r(module, exports, __webpack_require__) {
      var _webpack_require__7 = __webpack_require__(
      /*! ./commons */
      "gC2B"),
          PACKET_TYPES_REVERSE = _webpack_require__7.PACKET_TYPES_REVERSE,
          ERROR_PACKET = _webpack_require__7.ERROR_PACKET;

      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var base64decoder;

      if (withNativeArrayBuffer) {
        base64decoder = __webpack_require__(
        /*! base64-arraybuffer */
        "g5Dd");
      }

      var decodePacket = function decodePacket(encodedPacket, binaryType) {
        if (typeof encodedPacket !== "string") {
          return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
          };
        }

        var type = encodedPacket.charAt(0);

        if (type === "b") {
          return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
          };
        }

        var packetType = PACKET_TYPES_REVERSE[type];

        if (!packetType) {
          return ERROR_PACKET;
        }

        return encodedPacket.length > 1 ? {
          type: PACKET_TYPES_REVERSE[type],
          data: encodedPacket.substring(1)
        } : {
          type: PACKET_TYPES_REVERSE[type]
        };
      };

      var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
        if (base64decoder) {
          var decoded = base64decoder.decode(data);
          return mapBinary(decoded, binaryType);
        } else {
          return {
            base64: true,
            data: data
          }; // fallback for old browsers
        }
      };

      var mapBinary = function mapBinary(data, binaryType) {
        switch (binaryType) {
          case "blob":
            return data instanceof ArrayBuffer ? new Blob([data]) : data;

          case "arraybuffer":
          default:
            return data;
          // assuming the data is already an ArrayBuffer
        }
      };

      module.exports = decodePacket;
      /***/
    },

    /***/
    "g5Dd":
    /*!*******************************************************************!*\
      !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function g5Dd(module, exports) {
      /*
       * base64-arraybuffer
       * https://github.com/niklasvh/base64-arraybuffer
       *
       * Copyright (c) 2012 Niklas von Hertzen
       * Licensed under the MIT license.
       */
      (function (chars) {
        "use strict";

        exports.encode = function (arraybuffer) {
          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";

          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
          }

          if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
          }

          return base64;
        };

        exports.decode = function (base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;

          if (base64[base64.length - 1] === "=") {
            bufferLength--;

            if (base64[base64.length - 2] === "=") {
              bufferLength--;
            }
          }

          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = chars.indexOf(base64[i]);
            encoded2 = chars.indexOf(base64[i + 1]);
            encoded3 = chars.indexOf(base64[i + 2]);
            encoded4 = chars.indexOf(base64[i + 3]);
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return arraybuffer;
        };
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      /***/

    },

    /***/
    "gC2B":
    /*!******************************************************!*\
      !*** ./node_modules/engine.io-parser/lib/commons.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function gC2B(module, exports) {
      var PACKET_TYPES = Object.create(null); // no Map = no polyfill

      PACKET_TYPES["open"] = "0";
      PACKET_TYPES["close"] = "1";
      PACKET_TYPES["ping"] = "2";
      PACKET_TYPES["pong"] = "3";
      PACKET_TYPES["message"] = "4";
      PACKET_TYPES["upgrade"] = "5";
      PACKET_TYPES["noop"] = "6";
      var PACKET_TYPES_REVERSE = Object.create(null);
      Object.keys(PACKET_TYPES).forEach(function (key) {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
      });
      var ERROR_PACKET = {
        type: "error",
        data: "parser error"
      };
      module.exports = {
        PACKET_TYPES: PACKET_TYPES,
        PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
        ERROR_PACKET: ERROR_PACKET
      };
      /***/
    },

    /***/
    "ggWO":
    /*!*****************************************************!*\
      !*** ./node_modules/socket.io-parser/dist/index.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ggWO(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");

      var binary_1 = __webpack_require__(
      /*! ./binary */
      "qKib");

      var is_binary_1 = __webpack_require__(
      /*! ./is-binary */
      "ymUC");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("socket.io-parser");
      /**
       * Protocol version.
       *
       * @public
       */


      exports.protocol = 5;
      var PacketType;

      (function (PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
      })(PacketType = exports.PacketType || (exports.PacketType = {}));
      /**
       * A socket.io Encoder instance
       */


      var Encoder = /*#__PURE__*/function () {
        function Encoder() {
          _classCallCheck(this, Encoder);
        }

        _createClass(Encoder, [{
          key: "encode",
          value:
          /**
           * Encode a packet as a single string if non-binary, or as a
           * buffer sequence, depending on packet type.
           *
           * @param {Object} obj - packet object
           */
          function encode(obj) {
            debug("encoding packet %j", obj);

            if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
              if (is_binary_1.hasBinary(obj)) {
                obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
              }
            }

            return [this.encodeAsString(obj)];
          }
          /**
           * Encode packet as string.
           */

        }, {
          key: "encodeAsString",
          value: function encodeAsString(obj) {
            // first is type
            var str = "" + obj.type; // attachments if we have them

            if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
              str += obj.attachments + "-";
            } // if we have a namespace other than `/`
            // we append it followed by a comma `,`


            if (obj.nsp && "/" !== obj.nsp) {
              str += obj.nsp + ",";
            } // immediately followed by the id


            if (null != obj.id) {
              str += obj.id;
            } // json data


            if (null != obj.data) {
              str += JSON.stringify(obj.data);
            }

            debug("encoded %j as %s", obj, str);
            return str;
          }
          /**
           * Encode packet as 'buffer sequence' by removing blobs, and
           * deconstructing packet into object with placeholders and
           * a list of buffers.
           */

        }, {
          key: "encodeAsBinary",
          value: function encodeAsBinary(obj) {
            var deconstruction = binary_1.deconstructPacket(obj);
            var pack = this.encodeAsString(deconstruction.packet);
            var buffers = deconstruction.buffers;
            buffers.unshift(pack); // add packet info to beginning of data list

            return buffers; // write all the buffers
          }
        }]);

        return Encoder;
      }();

      exports.Encoder = Encoder;
      /**
       * A socket.io Decoder instance
       *
       * @return {Object} decoder
       */

      var Decoder = /*#__PURE__*/function (_Emitter5) {
        _inherits(Decoder, _Emitter5);

        var _super11 = _createSuper(Decoder);

        function Decoder() {
          _classCallCheck(this, Decoder);

          return _super11.call(this);
        }
        /**
         * Decodes an encoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         */


        _createClass(Decoder, [{
          key: "add",
          value: function add(obj) {
            var packet;

            if (typeof obj === "string") {
              packet = this.decodeString(obj);

              if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

                if (packet.attachments === 0) {
                  _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
                }
              } else {
                // non-binary full packet
                _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
              }
            } else if (is_binary_1.isBinary(obj) || obj.base64) {
              // raw binary data
              if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
              } else {
                packet = this.reconstructor.takeBinaryData(obj);

                if (packet) {
                  // received final buffer
                  this.reconstructor = null;

                  _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
                }
              }
            } else {
              throw new Error("Unknown type: " + obj);
            }
          }
          /**
           * Decode a packet String (JSON data)
           *
           * @param {String} str
           * @return {Object} packet
           */

        }, {
          key: "decodeString",
          value: function decodeString(str) {
            var i = 0; // look up type

            var p = {
              type: Number(str.charAt(0))
            };

            if (PacketType[p.type] === undefined) {
              throw new Error("unknown packet type " + p.type);
            } // look up attachments if type binary


            if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
              var start = i + 1;

              while (str.charAt(++i) !== "-" && i != str.length) {}

              var buf = str.substring(start, i);

              if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
              }

              p.attachments = Number(buf);
            } // look up namespace (if any)


            if ("/" === str.charAt(i + 1)) {
              var _start2 = i + 1;

              while (++i) {
                var c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
              }

              p.nsp = str.substring(_start2, i);
            } else {
              p.nsp = "/";
            } // look up id


            var next = str.charAt(i + 1);

            if ("" !== next && Number(next) == next) {
              var _start3 = i + 1;

              while (++i) {
                var _c2 = str.charAt(i);

                if (null == _c2 || Number(_c2) != _c2) {
                  --i;
                  break;
                }

                if (i === str.length) break;
              }

              p.id = Number(str.substring(_start3, i + 1));
            } // look up json data


            if (str.charAt(++i)) {
              var payload = tryParse(str.substr(i));

              if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
              } else {
                throw new Error("invalid payload");
              }
            }

            debug("decoded %s as %j", str, p);
            return p;
          }
        }, {
          key: "destroy",
          value:
          /**
           * Deallocates a parser's resources
           */
          function destroy() {
            if (this.reconstructor) {
              this.reconstructor.finishedReconstruction();
            }
          }
        }], [{
          key: "isPayloadValid",
          value: function isPayloadValid(type, payload) {
            switch (type) {
              case PacketType.CONNECT:
                return typeof payload === "object";

              case PacketType.DISCONNECT:
                return payload === undefined;

              case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";

              case PacketType.EVENT:
              case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;

              case PacketType.ACK:
              case PacketType.BINARY_ACK:
                return Array.isArray(payload);
            }
          }
        }]);

        return Decoder;
      }(Emitter);

      exports.Decoder = Decoder;

      function tryParse(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return false;
        }
      }
      /**
       * A manager of a binary event's 'buffer sequence'. Should
       * be constructed whenever a packet of type BINARY_EVENT is
       * decoded.
       *
       * @param {Object} packet
       * @return {BinaryReconstructor} initialized reconstructor
       */


      var BinaryReconstructor = /*#__PURE__*/function () {
        function BinaryReconstructor(packet) {
          _classCallCheck(this, BinaryReconstructor);

          this.packet = packet;
          this.buffers = [];
          this.reconPack = packet;
        }
        /**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         */


        _createClass(BinaryReconstructor, [{
          key: "takeBinaryData",
          value: function takeBinaryData(binData) {
            this.buffers.push(binData);

            if (this.buffers.length === this.reconPack.attachments) {
              // done with buffer list
              var packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
              this.finishedReconstruction();
              return packet;
            }

            return null;
          }
          /**
           * Cleans up binary packet reconstruction variables.
           */

        }, {
          key: "finishedReconstruction",
          value: function finishedReconstruction() {
            this.reconPack = null;
            this.buffers = [];
          }
        }]);

        return BinaryReconstructor;
      }();
      /***/

    },

    /***/
    "hP8I":
    /*!***************************************************!*\
      !*** ./src/app/admin/header/header.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function hP8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "jifJ":
    /*!******************************************************!*\
      !*** ./node_modules/socket.io-client/build/index.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function jifJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;

      var url_1 = __webpack_require__(
      /*! ./url */
      "f7yz");

      var manager_1 = __webpack_require__(
      /*! ./manager */
      "PVQj");

      var debug = __webpack_require__(
      /*! debug */
      "NOtv")("socket.io-client");
      /**
       * Module exports.
       */


      module.exports = exports = lookup;
      /**
       * Managers cache.
       */

      var cache = exports.managers = {};

      function lookup(uri, opts) {
        if (typeof uri === "object") {
          opts = uri;
          uri = undefined;
        }

        opts = opts || {};
        var parsed = (0, url_1.url)(uri, opts.path || "/socket.io");
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id]["nsps"];
        var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        var io;

        if (newConnection) {
          debug("ignoring socket cache for %s", source);
          io = new manager_1.Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_1.Manager(source, opts);
          }

          io = cache[id];
        }

        if (parsed.query && !opts.query) {
          opts.query = parsed.queryKey;
        }

        return io.socket(parsed.path, opts);
      }

      exports.io = lookup;
      /**
       * Protocol version.
       *
       * @public
       */

      var socket_io_parser_1 = __webpack_require__(
      /*! socket.io-parser */
      "ggWO");

      Object.defineProperty(exports, "protocol", {
        enumerable: true,
        get: function get() {
          return socket_io_parser_1.protocol;
        }
      });
      /**
       * `connect`.
       *
       * @param {String} uri
       * @public
       */

      exports.connect = lookup;
      /**
       * Expose constructors for standalone build.
       *
       * @public
       */

      var manager_2 = __webpack_require__(
      /*! ./manager */
      "PVQj");

      Object.defineProperty(exports, "Manager", {
        enumerable: true,
        get: function get() {
          return manager_2.Manager;
        }
      });

      var socket_1 = __webpack_require__(
      /*! ./socket */
      "eFEk");

      Object.defineProperty(exports, "Socket", {
        enumerable: true,
        get: function get() {
          return socket_1.Socket;
        }
      });
      exports["default"] = lookup;
      /***/
    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
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


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-routing.module */
      "0Em7");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.component */
      "TRGY");
      /* harmony import */


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidemenu/sidemenu.component */
      "7Nvg");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/header.component */
      "ABg6");
      /* harmony import */


      var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./page-header/page-header.component */
      "sYf+");
      /* harmony import */


      var ng_select2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-select2 */
      "eSIH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pipes/filter.pipe */
      "I59L"); // import { FilterSerialnumberPipe } from "./pipes/FilterSerialnumberPipe";
      // import { FilterPipe } from './pipes/filter.pipe';


      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_select2__WEBPACK_IMPORTED_MODULE_10__["NgSelect2Module"], // InMemoryWebApiModule.forRoot(DataService),
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]]
      })], AdminModule);
      /***/
    },

    /***/
    "lKxJ":
    /*!****************************************************!*\
      !*** ./node_modules/engine.io-client/lib/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function lKxJ(module, exports, __webpack_require__) {
      var Socket = __webpack_require__(
      /*! ./socket */
      "2pII");

      module.exports = function (uri, opts) {
        return new Socket(uri, opts);
      };
      /**
       * Expose deps for legacy compatibility
       * and standalone browser access.
       */


      module.exports.Socket = Socket;
      module.exports.protocol = Socket.protocol; // this is an int

      module.exports.Transport = __webpack_require__(
      /*! ./transport */
      "Gbct");
      module.exports.transports = __webpack_require__(
      /*! ./transports/index */
      "akSB");
      module.exports.parser = __webpack_require__(
      /*! engine.io-parser */
      "KoVT");
      /***/
    },

    /***/
    "lUod":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
      \***************************************************************************************/

    /*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */

    /***/
    function lUod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
        return LinkedList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnChange", function () {
        return OnChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Trigger", function () {
        return Trigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Utils", function () {
        return Utils;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "document", function () {
        return document$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBs3", function () {
        return isBs3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listenToTriggers", function () {
        return listenToTriggers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function () {
        return listenToTriggersV2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseTriggers", function () {
        return parseTriggers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerEscClick", function () {
        return registerEscClick;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function () {
        return registerOutsideClick;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setTheme", function () {
        return setTheme;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "warnOnce", function () {
        return warnOnce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "window", function () {
        return win;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @copyright Valor Software
       * @copyright Angular ng-bootstrap team
       */


      var Trigger = /*#__PURE__*/function () {
        /**
         * @param {?} open
         * @param {?=} close
         */
        function Trigger(open, close) {
          _classCallCheck(this, Trigger);

          this.open = open;
          this.close = close || open;
        }
        /**
         * @return {?}
         */


        _createClass(Trigger, [{
          key: "isManual",
          value: function isManual() {
            return this.open === 'manual' || this.close === 'manual';
          }
        }]);

        return Trigger;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function ListenOptions() {}

      if (false) {}
      /** @type {?} */


      var DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
      };
      /* tslint:disable-next-line: no-any */

      /**
       * @param {?} triggers
       * @param {?=} aliases
       * @return {?}
       */

      function parseTriggers(triggers) {
        var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

        /** @type {?} */
        var trimmedTriggers = (triggers || '').trim();

        if (trimmedTriggers.length === 0) {
          return [];
        }
        /** @type {?} */


        var parsedTriggers = trimmedTriggers.split(/\s+/).map(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          return trigger.split(':');
        }).map(
        /**
        * @param {?} triggerPair
        * @return {?}
        */
        function (triggerPair) {
          /** @type {?} */
          var alias = aliases[triggerPair[0]] || triggerPair;
          return new Trigger(alias[0], alias[1]);
        });
        /** @type {?} */

        var manualTriggers = parsedTriggers.filter(
        /**
        * @param {?} triggerPair
        * @return {?}
        */
        function (triggerPair) {
          return triggerPair.isManual();
        });

        if (manualTriggers.length > 1) {
          throw new Error('Triggers parse error: only one manual trigger is allowed');
        }

        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
          throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }

        return parsedTriggers;
      }
      /**
       * @param {?} renderer
       * @param {?} target
       * @param {?} triggers
       * @param {?} showFn
       * @param {?} hideFn
       * @param {?} toggleFn
       * @return {?}
       */


      function listenToTriggers(renderer,
      /* tslint:disable-next-line: no-any */
      target, triggers, showFn, hideFn, toggleFn) {
        /** @type {?} */
        var parsedTriggers = parseTriggers(triggers);
        /* tslint:disable-next-line: no-any */

        /** @type {?} */

        var listeners = [];

        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
          return Function.prototype;
        }

        parsedTriggers.forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
          }

          listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
        });
        return (
          /**
          * @return {?}
          */
          function () {
            listeners.forEach(
            /**
            * @param {?} unsubscribeFn
            * @return {?}
            */
            function (unsubscribeFn) {
              return unsubscribeFn();
            });
          }
        );
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function listenToTriggersV2(renderer, options) {
        /** @type {?} */
        var parsedTriggers = parseTriggers(options.triggers);
        /** @type {?} */

        var target = options.target; // do nothing

        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
          return Function.prototype;
        } // all listeners

        /* tslint:disable-next-line: no-any */

        /** @type {?} */


        var listeners = []; // lazy listeners registration

        /** @type {?} */

        var _registerHide = [];
        /** @type {?} */

        var registerHide =
        /**
        * @return {?}
        */
        function registerHide() {
          // add hide listeners to unregister array
          _registerHide.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return listeners.push(fn());
          }); // register hide events only once


          _registerHide.length = 0;
        }; // register open\close\toggle listeners


        parsedTriggers.forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          /** @type {?} */
          var useToggle = trigger.open === trigger.close;
          /** @type {?} */

          var showFn = useToggle ? options.toggle : options.show;

          if (!useToggle) {
            _registerHide.push(
            /**
            * @return {?}
            */
            function () {
              return renderer.listen(target, trigger.close, options.hide);
            });
          }

          listeners.push(renderer.listen(target, trigger.open,
          /**
          * @return {?}
          */
          function () {
            return showFn(registerHide);
          }));
        });
        return (
          /**
          * @return {?}
          */
          function () {
            listeners.forEach(
            /**
            * @param {?} unsubscribeFn
            * @return {?}
            */
            function (unsubscribeFn) {
              return unsubscribeFn();
            });
          }
        );
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function registerOutsideClick(renderer, options) {
        if (!options.outsideClick) {
          return Function.prototype;
        }
        /* tslint:disable-next-line: no-any */


        return renderer.listen('document', 'click',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (options.target && options.target.contains(event.target)) {
            return undefined;
          }

          if (options.targets && options.targets.some(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return target.contains(event.target);
          })) {
            return undefined;
          }

          options.hide();
        });
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function registerEscClick(renderer, options) {
        if (!options.outsideEsc) {
          return Function.prototype;
        }

        return renderer.listen('document', 'keyup.esc',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (options.target && options.target.contains(event.target)) {
            return undefined;
          }

          if (options.targets && options.targets.some(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return target.contains(event.target);
          })) {
            return undefined;
          }

          options.hide();
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * JS version of browser APIs. This library can only run in the browser.
       * @type {?}
       */


      var win = typeof window !== 'undefined' && window ||
      /** @type {?} */
      {};
      /** @type {?} */

      var document$1 = win.document;
      /** @type {?} */

      var location = win.location;
      /** @type {?} */

      var gc = win.gc ?
      /**
      * @return {?}
      */
      function () {
        return win.gc();
      } :
      /**
      * @return {?}
      */
      function () {
        return null;
      };
      /** @type {?} */

      var performance = win.performance ? win.performance : null;
      /** @type {?} */

      var Event = win.Event;
      /** @type {?} */

      var MouseEvent = win.MouseEvent;
      /** @type {?} */

      var KeyboardEvent = win.KeyboardEvent;
      /** @type {?} */

      var EventTarget = win.EventTarget;
      /** @type {?} */

      var History = win.History;
      /** @type {?} */

      var Location = win.Location;
      /** @type {?} */

      var EventListener = win.EventListener;
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var guessedVersion;
      /**
       * @return {?}
       */

      function _guessBsVersion() {
        if (typeof document === 'undefined') {
          return null;
        }
        /** @type {?} */


        var spanEl = document.createElement('span');
        spanEl.innerText = 'test bs version';
        document.body.appendChild(spanEl);
        spanEl.classList.add('d-none');
        /** @type {?} */

        var rect = spanEl.getBoundingClientRect();
        document.body.removeChild(spanEl);

        if (!rect) {
          return 'bs3';
        }

        return rect.top === 0 ? 'bs4' : 'bs3';
      }
      /**
       * @param {?} theme
       * @return {?}
       */


      function setTheme(theme) {
        guessedVersion = theme;
      } // todo: in ngx-bootstrap, bs4 will became a default one

      /**
       * @return {?}
       */


      function isBs3() {
        if (typeof win === 'undefined') {
          return true;
        }

        if (typeof win.__theme === 'undefined') {
          if (guessedVersion) {
            return guessedVersion === 'bs3';
          }

          guessedVersion = _guessBsVersion();
          return guessedVersion === 'bs3';
        }

        return win.__theme !== 'bs4';
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var LinkedList = /*#__PURE__*/function () {
        function LinkedList() {
          _classCallCheck(this, LinkedList);

          this.length = 0;
          this.asArray = []; // Array methods overriding END
        }
        /**
         * @param {?} position
         * @return {?}
         */


        _createClass(LinkedList, [{
          key: "get",
          value: function get(position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              return void 0;
            }
            /** @type {?} */


            var current = this.head;

            for (var index = 0; index < position; index++) {
              current = current.next;
            }

            return current.value;
          }
          /**
           * @param {?} value
           * @param {?=} position
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(value) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

            if (position < 0 || position > this.length) {
              throw new Error('Position is out of the list');
            }
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */


            var node = {
              value: value,
              next: undefined,
              previous: undefined
            };

            if (this.length === 0) {
              this.head = node;
              this.tail = node;
              this.current = node;
            } else {
              if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
              } else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
              } else {
                // node in middle

                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */

                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
              }
            }

            this.length++;
            this.createInternalArrayRepresentation();
          }
          /**
           * @param {?=} position
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }

            if (position === 0) {
              // first node
              this.head = this.head.next;

              if (this.head) {
                // there is no second node
                this.head.previous = undefined;
              } else {
                // there is no second node
                this.tail = undefined;
              }
            } else if (position === this.length - 1) {
              // last node
              this.tail = this.tail.previous;
              this.tail.next = undefined;
            } else {
              // middle node

              /** @type {?} */
              var removedNode = this.getNode(position);
              removedNode.next.previous = removedNode.previous;
              removedNode.previous.next = removedNode.next;
            }

            this.length--;
            this.createInternalArrayRepresentation();
          }
          /**
           * @param {?} position
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "set",
          value: function set(position, value) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }
            /** @type {?} */


            var node = this.getNode(position);
            node.value = value;
            this.createInternalArrayRepresentation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "toArray",
          value: function toArray() {
            return this.asArray;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "findAll",
          value: function findAll(fn) {
            /** @type {?} */
            var current = this.head;
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */

            var result = [];

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result.push({
                  index: index,
                  value: current.value
                });
              }

              current = current.next;
            }

            return result;
          } // Array methods overriding start

          /**
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "push",
          value: function push() {
            var _this51 = this;

            for (var _len8 = arguments.length, args = new Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
              args[_key9] = arguments[_key9];
            }

            /* tslint:disable-next-line: no-any*/
            args.forEach(
            /**
            * @param {?} arg
            * @return {?}
            */
            function (arg) {
              _this51.add(arg);
            });
            return this.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "pop",
          value: function pop() {
            if (this.length === 0) {
              return undefined;
            }
            /** @type {?} */


            var last = this.tail;
            this.remove(this.length - 1);
            return last.value;
          }
          /**
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "unshift",
          value: function unshift() {
            var _this52 = this;

            for (var _len9 = arguments.length, args = new Array(_len9), _key10 = 0; _key10 < _len9; _key10++) {
              args[_key10] = arguments[_key10];
            }

            args.reverse();
            /* tslint:disable-next-line: no-any*/

            args.forEach(
            /**
            * @param {?} arg
            * @return {?}
            */
            function (arg) {
              _this52.add(arg, 0);
            });
            return this.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0) {
              return undefined;
            }
            /** @type {?} */


            var lastItem = this.head.value;
            this.remove();
            return lastItem;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "forEach",
          value: function forEach(fn) {
            /** @type {?} */
            var current = this.head;

            for (var index = 0; index < this.length; index++) {
              fn(current.value, index);
              current = current.next;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "indexOf",
          value: function indexOf(value) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var position = 0;

            for (var index = 0; index < this.length; index++) {
              if (current.value === value) {
                position = index;
                break;
              }

              current = current.next;
            }

            return position;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "some",
          value: function some(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result = false;

            while (current && !result) {
              if (fn(current.value)) {
                result = true;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "every",
          value: function every(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result = true;

            while (current && result) {
              if (!fn(current.value)) {
                result = false;
              }

              current = current.next;
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toString",
          value: function toString() {
            return '[Linked List]';
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "find",
          value: function find(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result;

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result = current.value;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "findIndex",
          value: function findIndex(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result;

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result = index;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @protected
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "getNode",
          value: function getNode(position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }
            /** @type {?} */


            var current = this.head;

            for (var index = 0; index < position; index++) {
              current = current.next;
            }

            return current;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "createInternalArrayRepresentation",
          value: function createInternalArrayRepresentation() {
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */
            var outArray = [];
            /** @type {?} */

            var current = this.head;

            while (current) {
              outArray.push(current.value);
              current = current.next;
            }

            this.asArray = outArray;
          }
        }]);

        return LinkedList;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /*tslint:disable:no-invalid-this */

      /* tslint:disable-next-line: no-any */

      /**
       * @param {?=} defaultValue
       * @return {?}
       */


      function OnChange(defaultValue) {
        /** @type {?} */
        var sufix = 'Change';
        /* tslint:disable-next-line: no-any */

        return (
          /**
          * @param {?} target
          * @param {?} propertyKey
          * @return {?}
          */
          function OnChangeHandler(target, propertyKey) {
            /** @type {?} */
            var _key = " __".concat(propertyKey, "Value");

            Object.defineProperty(target, propertyKey, {
              /* tslint:disable-next-line: no-any */

              /**
               * @return {?}
               */
              get: function get() {
                return this[_key];
              },

              /* tslint:disable-next-line: no-any */

              /**
               * @param {?} value
               * @return {?}
               */
              set: function set(value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;

                if (prevValue !== value && this[propertyKey + sufix]) {
                  this[propertyKey + sufix].emit(value);
                }
              }
            });
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Utils = /*#__PURE__*/function () {
        function Utils() {
          _classCallCheck(this, Utils);
        }

        _createClass(Utils, null, [{
          key: "reflow",
          value:
          /* tslint:disable-next-line: no-any */

          /**
           * @param {?} element
           * @return {?}
           */
          function reflow(element) {
            /* tslint:disable-next-line: no-any */
            (
            /**
            * @param {?} bs
            * @return {?}
            */
            function (bs) {
              return bs;
            })(element.offsetHeight);
          } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

          /* tslint:disable-next-line: no-any */

          /**
           * @param {?} elem
           * @return {?}
           */

        }, {
          key: "getStyles",
          value: function getStyles(elem) {
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

            /** @type {?} */
            var view = elem.ownerDocument.defaultView;

            if (!view || !view.opener) {
              view = win;
            }

            return view.getComputedStyle(elem);
          }
        }]);

        return Utils;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _messagesHash = {};
      /** @type {?} */

      var _hideMsg = typeof console === 'undefined' || !('warn' in console);
      /**
       * @param {?} msg
       * @return {?}
       */


      function warnOnce(msg) {
        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
          return;
        }

        _messagesHash[msg] = true;
        /*tslint:disable-next-line*/

        console.warn(msg);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-utils.js.map

      /***/

    },

    /***/
    "o4Bq":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/page-header/page-header.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o4Bq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Header -->\r\n<div class=\"page-header\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h3 class=\"page-title\">{{pageName | titlecase}}</h3>\r\n        </div>\r\n        <div class=\"col-auto text-right\">\r\n            <a class=\"btn btn-white filter-btn\" *ngIf=\"isFilter\" href=\"javascript:void(0);\" id=\"filter_search\"  [attr.aria-expanded]=\"!bellCollapsed\" aria-controls=\"collapseExample1\">\r\n                <i class=\"fas fa-filter\"></i>\r\n            </a>\r\n            <a [routerLink]=\"'/admin/add-category'\" *ngIf=\"isAdd && page === 'categories'\" class=\"btn btn-primary add-button ml-3\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </a>\r\n            <a [routerLink]=\"'/admin/add-sub-category'\" *ngIf=\"isAdd && page === 'sub-categories'\" class=\"btn btn-primary add-button ml-3\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </a>\r\n            <a [routerLink]=\"'/admin/add-rating-type'\" *ngIf=\"isAdd && page === 'rating-type'\" class=\"btn btn-primary add-button ml-3\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </a>\r\n            <a [routerLink]=\"'/admin/add-subscription'\" *ngIf=\"isAdd && page === 'subscriptions'\" class=\"btn btn-primary add-button ml-3\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Header -->\r\n\r\n<!-- Search Filter -->\r\n<div class=\"card filter-card\" id=\"filter_inputs\" [ngbCollapse]=\"bellCollapsed\">\r\n    <div class=\"card-body pb-0\">\r\n        <form action=\"#\" method=\"post\">\r\n            <div class=\"row filter-row\">\r\n                <div *ngIf=\"page === 'categories'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Category</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Category</option>\r\n                            <option>Automobile</option>\r\n                            <option>Construction</option>\r\n                            <option>Interior</option>\r\n                            <option>Cleaning</option>\r\n                            <option>Electrical</option>\r\n                            <option>Carpentry</option>\r\n                            <option>Computer</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'sub-categories'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Sub Category</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Sub Category</option>\r\n                            <option>Automobile</option>\r\n                            <option>Construction</option>\r\n                            <option>Interior</option>\r\n                            <option>Cleaning</option>\r\n                            <option>Electrical</option>\r\n                            <option>Carpentry</option>\r\n                            <option>Computer</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'services'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Service</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Service</option>\r\n                            <option>Automobile</option>\r\n                            <option>Car Wash</option>\r\n                            <option>Interior</option>\r\n                            <option>Cleaning</option>\r\n                            <option>Electrical</option>\r\n                            <option>Carpentry</option>\r\n                            <option>Computer</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'payments'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Provider</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Provider</option>\r\n                            <option>Thomas Herzberg</option>\r\n                            <option>Matthew Garcia</option>\r\n                            <option>Yolanda Potter</option>\r\n                            <option>Ricardo Flemings</option>\r\n                            <option>Maritza Wasson</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'payments'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Service</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Service</option>\r\n                            <option>Automobile</option>\r\n                            <option>Car Wash</option>\r\n                            <option>Interior</option>\r\n                            <option>Cleaning</option>\r\n                            <option>Electrical</option>\r\n                            <option>Carpentry</option>\r\n                            <option>Computer</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'ratings'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Type</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select type</option>\r\n                            <option>Good</option>\r\n                            <option>Very Good</option>\r\n                            <option>Poor</option>\r\n                            <option>Fair</option>\r\n                            <option>Excellent</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'ratings'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Status</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Status</option>\r\n                            <option>Pending</option>\r\n                            <option>Inprogress</option>\r\n                            <option>Completed (Provider)</option>\r\n                            <option>Accepted</option>\r\n                            <option>Rejected</option>\r\n                            <option>Cancelled (Provider)</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'wallet'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Name</option>\r\n                            <option>Thomas Herzberg</option>\r\n                            <option>Matthew Garcia</option>\r\n                            <option>Yolanda Potter</option>\r\n                            <option>Ricardo Flemings</option>\r\n                            <option>Maritza Wasson</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'service-providers'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Provider</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Provider</option>\r\n                            <option>Thomas Herzberg</option>\r\n                            <option>Matthew Garcia</option>\r\n                            <option>Yolanda Potter</option>\r\n                            <option>Ricardo Flemings</option>\r\n                            <option>Maritza Wasson</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"page === 'users'\" class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <ng-select2  width=\"100%\">\r\n                            <option>Select Name</option>\r\n                            <option>Thomas Herzberg</option>\r\n                            <option>Matthew Garcia</option>\r\n                            <option>Yolanda Potter</option>\r\n                            <option>Ricardo Flemings</option>\r\n                            <option>Maritza Wasson</option>\r\n                        </ng-select2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>From Date</label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" type=\"text\" >\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>To Date</label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-primary btn-block\" type=\"button\" (click)=\"closeFilter()\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- /Search Filter -->";
      /***/
    },

    /***/
    "qKib":
    /*!******************************************************!*\
      !*** ./node_modules/socket.io-parser/dist/binary.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function qKib(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.reconstructPacket = exports.deconstructPacket = void 0;

      var is_binary_1 = __webpack_require__(
      /*! ./is-binary */
      "ymUC");
      /**
       * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
       *
       * @param {Object} packet - socket.io event packet
       * @return {Object} with deconstructed packet and list of buffers
       * @public
       */


      function deconstructPacket(packet) {
        var buffers = [];
        var packetData = packet.data;
        var pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'

        return {
          packet: pack,
          buffers: buffers
        };
      }

      exports.deconstructPacket = deconstructPacket;

      function _deconstructPacket(data, buffers) {
        if (!data) return data;

        if (is_binary_1.isBinary(data)) {
          var placeholder = {
            _placeholder: true,
            num: buffers.length
          };
          buffers.push(data);
          return placeholder;
        } else if (Array.isArray(data)) {
          var newData = new Array(data.length);

          for (var i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
          }

          return newData;
        } else if (typeof data === "object" && !(data instanceof Date)) {
          var _newData = {};

          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              _newData[key] = _deconstructPacket(data[key], buffers);
            }
          }

          return _newData;
        }

        return data;
      }
      /**
       * Reconstructs a binary packet from its placeholder packet and buffers
       *
       * @param {Object} packet - event packet with placeholders
       * @param {Array} buffers - binary buffers to put in placeholder positions
       * @return {Object} reconstructed packet
       * @public
       */


      function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        packet.attachments = undefined; // no longer useful

        return packet;
      }

      exports.reconstructPacket = reconstructPacket;

      function _reconstructPacket(data, buffers) {
        if (!data) return data;

        if (data && data._placeholder) {
          return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        } else if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
          }
        } else if (typeof data === "object") {
          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              data[key] = _reconstructPacket(data[key], buffers);
            }
          }
        }

        return data;
      }
      /***/

    },

    /***/
    "sYf+":
    /*!************************************************************!*\
      !*** ./src/app/admin/page-header/page-header.component.ts ***!
      \************************************************************/

    /*! exports provided: PageHeaderComponent */

    /***/
    function sYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
        return PageHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "o4Bq");
      /* harmony import */


      var _page_header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-header.component.css */
      "MIMc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PageHeaderComponent = /*#__PURE__*/function () {
        function PageHeaderComponent(router) {
          _classCallCheck(this, PageHeaderComponent);

          this.router = router;
          this.bellCollapsed = true;
          this.isFilter = false;
          this.isAdd = false;
          this.base = '';
          this.page = '';
          this.addPage = '';
          this.pageName = '';
        }

        _createClass(PageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this53 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this53.splitVal = event.url.split('/');
                _this53.base = _this53.splitVal[1];
                _this53.page = _this53.splitVal[2];

                if (_this53.page === 'categories' || _this53.page === 'sub-categories') {
                  _this53.isAdd = true;
                  _this53.isFilter = true;
                } else if (_this53.page === 'services' || _this53.page === 'booking-list' || _this53.page === 'payments' || _this53.page === 'ratings' || _this53.page === 'wallet' || _this53.page === 'service-providers' || _this53.page === 'users') {
                  _this53.isFilter = true;
                  _this53.isAdd = false;
                } else if (_this53.page === 'rating-type' || _this53.page === 'subscriptions') {
                  _this53.isFilter = false;
                  _this53.isAdd = true;
                } else {
                  _this53.isAdd = false;
                  _this53.isFilter = false;
                }

                if (_this53.page) {
                  if (_this53.page.includes('-')) {
                    var x = _this53.page.split('-');

                    if (x[1].includes('?') === true) {
                      x[1] = x[1].split('?')[0];
                    }

                    if (x[2]) {
                      _this53.pageName = x[0] + ' ' + x[1] + ' ' + x[2];
                    } else {
                      _this53.pageName = x[0] + ' ' + x[1];
                    }
                  } else {
                    _this53.pageName = _this53.page;
                  }
                }
              }
            });
          }
        }, {
          key: "closeFilter",
          value: function closeFilter() {
            var filter = document.getElementById('filter_inputs');
            filter.removeAttribute("style");
          }
        }]);

        return PageHeaderComponent;
      }();

      PageHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageHeaderComponent);
      /***/
    },

    /***/
    "wJwY":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function wJwY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\r\n\r\n<div class=\"header\">\r\n  <div class=\"header-left\">\r\n    <a class=\"logo logo-small\">\r\n      <img src=\"assets/img/logo-icon.png\" alt=\"Logo\" width=\"30\" height=\"30\" />\r\n    </a>\r\n  </div>\r\n  <a href=\"javascript:void(0);\" id=\"toggle_btn\">\r\n    <i class=\"fas fa-align-left\"></i>\r\n  </a>\r\n  <a class=\"mobile_btn\" id=\"mobile_btn\" href=\"javascript:void(0);\">\r\n    <i class=\"fas fa-align-left\"></i>\r\n  </a>\r\n\r\n  <ul class=\"nav user-menu\">\r\n    <!-- Notifications -->\r\n    <li class=\"nav-item dropdown noti-dropdown\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        class=\"dropdown-toggle nav-link\"\r\n        (click)=\"bell();this.toggle=false\"\r\n        [attr.aria-expanded]=\"!bellCollapsed\"\r\n        aria-controls=\"collapseExample1\"\r\n      >\r\n        <i class=\"far fa-bell\"></i>\r\n        \r\n         <span *ngIf=\"toggle\"class=\"badge badge-pill\" ></span>\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right notifications\"\r\n        id=\"collapseExample1\"\r\n        [ngbCollapse]=\"bellCollapsed\"\r\n      >\r\n        <div class=\"topnav-dropdown-header\">\r\n          <span class=\"notification-title\">Notifications</span>\r\n          <!-- <a\r\n            href=\"javascript:void(0)\"\r\n            class=\"clear-noti\"\r\n            (click)=\"bellCollapsed = !bellCollapsed\"\r\n          >\r\n            Clear All\r\n          </a> -->\r\n        </div>\r\n        <div class=\"noti-content\">\r\n          <ul class=\"notification-list\">\r\n            <li *ngFor=\"let notification of notifications\"\r\n              class=\"notification-message\"\r\n              (click)=\"bellCollapsed = !bellCollapsed\"\r\n            >\r\n              <a [routerLink]=\"'/admin/all-notifications'\">\r\n                <div class=\"media\">\r\n                  <span class=\"avatar avatar-sm\">\r\n                    <img\r\n                      class=\"avatar-img rounded-circle\"\r\n                      alt=\"\"\r\n                      src=\"assets/img/provider/provider-01.jpg\"\r\n                    />\r\n                  </span>\r\n                  <div class=\"media-body\">\r\n                    <p class=\"noti-details\">\r\n                      <span class=\"noti-title\" *ngIf=\"notification.notificationEmployee.length !== 0\">{{notification.notificationEmployee[0].name}}</span>\r\n                      <span  class=\"noti-title\" *ngIf=\"notification.notificationAccountant.length !== 0\">{{notification.notificationAccountant[0].name}}</span>\r\n      \r\n                      <span class=\"noti-title\"\r\n                        > {{notification.message}} on Product {{notification.productDetails[0].serialNumber}}</span\r\n                      >\r\n                    </p>\r\n                    <p class=\"noti-time\">\r\n                      <span class=\"notification-time\" style=\"color: #ff0080\"\r\n                        >{{notification.currentDate | date:'medium'}}</span\r\n                      >\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          \r\n          </ul>\r\n        </div>\r\n        <div class=\"topnav-dropdown-footer\">\r\n          <a\r\n            [routerLink]=\"'/admin/all-notifications'\"\r\n            (click)=\"bellCollapsed = !bellCollapsed\"\r\n            >View all Notifications</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <!-- /Notifications -->\r\n\r\n    <!-- User Menu -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        class=\"dropdown-toggle user-link nav-link\"\r\n        class=\"dropdown-toggle nav-link\"\r\n        (click)=\"user()\"\r\n        [attr.aria-expanded]=\"!userCollapsed\"\r\n        aria-controls=\"collapseExample2\"\r\n      >\r\n        <span class=\"user-img\">\r\n          <img\r\n            class=\"rounded-circle\"\r\n            [src]=\"(userr?.img||userr?.image)?(userr?.img||userr?.image):'assets/img/user.jpg'\"\r\n            width=\"40\"\r\n            alt=\"Admin\"\r\n          />\r\n        </span>\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right\"\r\n        id=\"collapseExample2\"\r\n        [ngbCollapse]=\"userCollapsed\"\r\n      >\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\" [routerLink]=\"'/admin/profile'\">Profile</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"logout()\">Logout</a>\r\n      </div>\r\n    </li>\r\n    <!-- /User Menu -->\r\n  </ul>\r\n</div>\r\n<!-- /Header -->\r\n<div class=\"toast  \"  style=\"position:fixed;bottom:20px;right:25px;z-index: 57587587575;\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n    <div class=\"toast-header\" style=\"border-color: #ff0080;\">\r\n      <strong class=\"mr-auto\" style=\"color: #ff0080;\">New Notification</strong>\r\n      <small style=\"color: #ff0080;\">{{lastNotification?.currentDate| date:'medium'}}</small>\r\n      <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      <span  *ngIf=\"lastNotification?.notificationEmployee.length !== 0\">{{lastNotification?.notificationEmployee[0].name}}</span>\r\n     <span   *ngIf=\"lastNotification?.notificationAccountant.length !== 0\">{{lastNotification?.notificationAccountant[0].name}}</span>\r\n      \r\n     {{lastNotification?.message}} on Product {{lastNotification?.productDetails[0].serialNumber}}\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "yP50":
    /*!*******************************************!*\
      !*** ./src/app/admin/admin.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function yP50(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*@import './../../assets/admin/css/bootstrap.min.css';*/\r\n\r\n/*@import './../../assets/css/font-awesome.min.css';*/\r\n\r\n/*\r\nAuthor       : Dreamguys\r\nTemplate Name: Truelysell - Bootstrap Html Template\r\nVersion      : 1.0\r\n*/\r\n\r\n/*============================\r\n [Table of CSS]\r\n\r\n1. General\r\n2. Table\r\n3. Bootstrap Classes\r\n4. Select2\r\n5. Nav Tabs\r\n6. Components\r\n7. Avatar\r\n8. Header\r\n9. Sidebar\r\n10. Content\r\n11. Toggle Button\r\n12. Login\r\n13. Notifications\r\n14. Dashboard\r\n15. Profile\r\n16. Responsive\r\n\r\n========================================*/\r\n\r\n/*-----------------\r\n\t1. General\r\n-----------------------*/\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tsrc: local('Circular Std Book'), url('CircularStd-Book.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: italic;\r\n\tfont-weight: 400;\r\n\tsrc: local('Circular Std Book Italic'), url('CircularStd-BookItalic.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: normal;\r\n\tfont-weight: 500;\r\n\tsrc: local('Circular Std Medium'), url('CircularStd-Medium.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: italic;\r\n\tfont-weight: 500;\r\n\tsrc: local('Circular Std Medium Italic'), url('CircularStd-MediumItalic.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: normal;\r\n\tfont-weight: 600;\r\n\tsrc: local('Circular Std Bold'), url('CircularStd-Bold.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: italic;\r\n\tfont-weight: 600;\r\n\tsrc: local('Circular Std Bold Italic'), url('CircularStd-BoldItalic.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: normal;\r\n\tfont-weight: 800;\r\n\tsrc: local('Circular Std Black'), url('CircularStd-Black.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CircularStd';\r\n\tfont-style: italic;\r\n\tfont-weight: 800;\r\n\tsrc: local('Circular Std Black Italic'), url('CircularStd-BlackItalic.woff') format('woff');\r\n}\r\n\r\nhtml {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #f8f9fa;\r\n\tcolor: #333;\r\n\tfont-family: 'CircularStd', sans-serif;\r\n\tfont-size: 1rem;\r\n\theight: 100%;\r\n\tline-height: 1.5;\r\n\toverflow-x: hidden;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-family: 'CircularStd', sans-serif;\r\n\tmargin-top: 0;\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n\toutline: none;\r\n\ttext-decoration: none;\r\n}\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus {\r\n    -webkit-box-shadow: 0 0 0px 1000px white inset !important;\r\n}\r\n\r\n.table-responsive{\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.form-control {\r\n    border: 1px solid #ddd;\r\n    box-shadow: none;\r\n    color: #333;\r\n    font-size: 15px;\r\n    height: 40px;\r\n}\r\n\r\n.form-control:focus {\r\n\tborder-color: #bbb;\r\n\tbox-shadow: none;\r\n\toutline: 0 none;\r\n}\r\n\r\n.form-control.form-control-sm {\r\n\theight: calc(1.5em + .5rem + 2px);\r\n}\r\n\r\n.form-control.form-control-lg {\r\n\theight: calc(1.5em + 1rem + 2px);\r\n}\r\n\r\na {\r\n\tcolor: #009ce7;\r\n}\r\n\r\ninput,\r\nbutton,\r\na {\r\n\ttransition: all 0.4s ease;\r\n\t-moz-transition: all 0.4s ease;\r\n\t-o-transition: all 0.4s ease;\r\n\t-ms-transition: all 0.4s ease;\r\n\t-webkit-transition: all 0.4s ease;\r\n}\r\n\r\ninput, input:focus,\r\nbutton, button:focus {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    height: auto;\r\n    min-height: calc(1.5em + .75rem + 2px);\r\n}\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\ntextarea.form-control {\r\n\tresize: vertical;\r\n}\r\n\r\n.navbar-nav > li {\r\n\tfloat: left;\r\n}\r\n\r\n.form-group {\r\n\tmargin-bottom: 1.25rem;\r\n}\r\n\r\n.input-group .form-control {\r\n\theight: 40px;\r\n}\r\n\r\n.nav .open > a,\r\n.nav .open > a:focus,\r\n.nav .open > a:hover {\r\n\tbackground-color: rgba(0, 0, 0, 0.1);\r\n\tborder-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.font-weight-600 {\r\n\tfont-weight: 600;\r\n}\r\n\r\n/*-----------------\r\n\t2. Table\r\n-----------------------*/\r\n\r\n/* .table {\r\n\tcolor: #333;\r\n\tmax-width: 100%;\r\n\tmargin-bottom: 0;\r\n\twidth: 100%;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n+1) {\r\n\tbackground-color: #f8f9fa;\r\n}\r\n.table.no-border > tbody > tr > td,\r\n.table > tbody > tr > th,\r\n.table.no-border > tfoot > tr > td,\r\n.table.no-border > tfoot > tr > th,\r\n.table.no-border > thead > tr > td,\r\n.table.no-border > thead > tr > th {\r\n\tborder-top: 0;\r\n\tpadding: 10px 8px;\r\n}\r\n.table-nowrap td,\r\n.table-nowrap th {\r\n\twhite-space: nowrap\r\n} */\r\n\r\n/* .table.dataTable {\r\n\tborder-collapse: collapse !important;\r\n} */\r\n\r\n/* .table td a {\r\n    color: #333;\r\n} */\r\n\r\n/* table.table td h2 {\r\n\tdisplay: inline-block;\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tvertical-align: middle;\r\n}\r\ntable.table td h2.table-avatar {\r\n    align-items: center;\r\n    display: inline-flex;\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n\twhite-space: nowrap;\r\n}\r\ntable.table td h2 a {\r\n\tcolor: #333;\r\n}\r\ntable.table td h2 a:hover {\r\n\tcolor: #ff0080;\r\n}\r\ntable.table td h2 span {\r\n\tcolor: #888;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin-top: 3px;\r\n}\r\n.table thead tr th {\r\n\tfont-weight: 600;\r\n\tborder: 0;\r\n} */\r\n\r\n/* .table tbody tr {\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n.table tbody tr:last-child {\r\n\tborder-color: transparent;\r\n}\r\n.table.table-center td,\r\n.table.table-center th {\r\n\tvertical-align: middle;\r\n}\r\n.table-hover tbody tr:hover {\r\n\tbackground-color: #f7f7f7;\r\n}\r\n.table-hover tbody tr:hover td {\r\n\tcolor: #474648;\r\n} */\r\n\r\n/* .table-striped thead tr {\r\n\tborder-color: transparent;\r\n}\r\n.table-striped tbody tr {\r\n\tborder-color: transparent;\r\n}\r\n.table-striped tbody tr:nth-of-type(even) {\r\n\tbackground-color: rgba(255, 255, 255, 0.3);\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n\tbackground-color: rgba(235, 235, 235, 0.4);\r\n}\r\n.table-bordered {\r\n\tborder: 1px solid rgba(0, 0, 0, 0.05) !important;\r\n}\r\n.table-bordered th,\r\n.table-bordered td {\r\n\tborder-color: rgba(0, 0, 0, 0.05);\r\n}\r\ntable.dataTable tbody th, table.dataTable tbody td {\r\n\tpadding:.75rem;\r\n} */\r\n\r\n/* .admin_dash .dataTables_length {\r\n\tdisplay: none;\r\n}\r\n.dataTables_filter {\r\n\tdisplay: none;\r\n}\r\n.dataTables_length select {\r\n    height: calc(1.5em + .5rem + 2px);\r\n    padding-top: .25rem;\r\n    padding-bottom: .25rem;\r\n    padding-left: .5rem;\r\n    font-weight: 400;\r\n    color: #495057;\r\n    vertical-align: middle;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    -moz-appearance: none;\r\n    text-transform: none;\r\n    outline: none;\r\n} */\r\n\r\n/* .card-table .card-body {\r\n    padding: 0;\r\n}\r\n.card-table .card-body .table > thead > tr > th {\r\n    border-top: 0;\r\n}\r\n.card-table .card-body .table tr td:first-child,\r\n.card-table .card-body .table tr th:first-child {\r\n    padding-left: 1.5rem;\r\n}\r\n.card-table .card-body .table tr td:last-child,\r\n.card-table .card-body .table tr th:last-child {\r\n    padding-right: 1.5rem;\r\n}\r\n.card-table .table td, .card-table .table th {\r\n    border-top: 1px solid #e2e5e8;\r\n    padding: 1rem 0.75rem;\r\n    white-space: nowrap;\r\n} \r\n.actions a {\r\n\twidth: 85px;\r\n}\r\n.cal-icon {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n}\r\n.cal-icon:after {\r\n\tcolor: #979797;\r\n\tcontent: \"\\f073\";\r\n\tdisplay: block;\r\n\tfont-family: \"FontAwesome\";\r\n    font-size: 15px;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n}\r\n\r\n/*-----------------\r\n\t3. Bootstrap Classes\r\n-----------------------*/\r\n\r\n.btn.focus, .btn:focus {\r\n    box-shadow: unset;\r\n}\r\n\r\n.btn-white {\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #ccc;\r\n\tcolor: #333;\r\n}\r\n\r\n.btn.btn-rounded {\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.bg-primary,\r\n.badge-primary {\r\n\tbackground-color: #ff0080 !important;\r\n}\r\n\r\na.bg-primary:focus, \r\na.bg-primary:hover, \r\nbutton.bg-primary:focus, \r\nbutton.bg-primary:hover {\r\n    background-color:  #e60073 !important;\r\n}\r\n\r\n.bg-success,\r\n.badge-success {\r\n\tbackground-color: #27c24c !important;\r\n}\r\n\r\na.bg-success:focus, \r\na.bg-success:hover, \r\nbutton.bg-success:focus, \r\nbutton.bg-success:hover {\r\n    background-color: #23ad44 !important;\r\n}\r\n\r\n.bg-info,\r\n.badge-info {\r\n\tbackground-color: #009efb !important;\r\n}\r\n\r\na.bg-info:focus, \r\na.bg-info:hover, \r\nbutton.bg-info:focus, \r\nbutton.bg-info:hover {\r\n    background-color: #028ee1 !important;\r\n}\r\n\r\n.bg-warning,\r\n.badge-warning {\r\n\tbackground-color: #ffbc34 !important;\r\n}\r\n\r\na.bg-warning:focus, \r\na.bg-warning:hover, \r\nbutton.bg-warning:focus, \r\nbutton.bg-warning:hover {\r\n    background-color: #e9ab2e !important;\r\n}\r\n\r\n.bg-danger,\r\n.badge-danger {\r\n\tbackground-color: #f05050 !important;\r\n}\r\n\r\na.bg-danger:focus, \r\na.bg-danger:hover, \r\nbutton.bg-danger:focus, \r\nbutton.bg-danger:hover {\r\n    background-color: #ee3939 !important;\r\n}\r\n\r\n.bg-white {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.bg-purple,\r\n.badge-purple {\r\n    background-color: #9368e9 !important;\r\n}\r\n\r\n.text-primary,\r\n.dropdown-menu > li > a.text-primary {\r\n\tcolor: #ff0080 !important;\r\n}\r\n\r\n.text-success,\r\n.dropdown-menu > li > a.text-success {\r\n\tcolor: #23ad44 !important;\r\n}\r\n\r\n.text-danger,\r\n.dropdown-menu > li > a.text-danger {\r\n\tcolor: #f05050 !important;\r\n}\r\n\r\n.text-info,\r\n.dropdown-menu > li > a.text-info {\r\n\tcolor: #009efb !important;\r\n}\r\n\r\n.text-warning,\r\n.dropdown-menu > li > a.text-warning {\r\n\tcolor: #ffbc34 !important;\r\n}\r\n\r\n.text-purple,\r\n.dropdown-menu > li > a.text-purple {\r\n\tcolor: #7460ee !important;\r\n}\r\n\r\n.text-muted {\r\n    color: #757575 !important;\r\n}\r\n\r\n.btn-primary {\r\n\tbackground-color: #ff0080;\r\n\tborder: 1px solid #ff0080;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary.active,\r\n.btn-primary:active,\r\n.open > .dropdown-toggle.btn-primary {\r\n\tbackground-color:  #e60073;\r\n\tborder: 1px solid  #e60073;\r\n}\r\n\r\n.btn-primary.active.focus,\r\n.btn-primary.active:focus,\r\n.btn-primary.active:hover,\r\n.btn-primary.focus:active,\r\n.btn-primary:active:focus,\r\n.btn-primary:active:hover,\r\n.open > .dropdown-toggle.btn-primary.focus,\r\n.open > .dropdown-toggle.btn-primary:focus,\r\n.open > .dropdown-toggle.btn-primary:hover {\r\n\tbackground-color:  #e60073;\r\n\tborder: 1px solid  #e60073;\r\n}\r\n\r\n.btn-primary.active:not(:disabled):not(.disabled),\r\n.btn-primary:active:not(:disabled):not(.disabled),\r\n.show > .btn-primary.dropdown-toggle {\r\n\tbackground-color:  #e60073;\r\n\tborder-color:  #e60073;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-primary.active:focus:not(:disabled):not(.disabled), \r\n.btn-primary:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-primary.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-primary.disabled, .btn-primary:disabled {\r\n    background-color: #ff0080;\r\n    border-color: #ff0080;\r\n    color: #fff;\r\n}\r\n\r\n.btn-secondary.active:focus:not(:disabled):not(.disabled), \r\n.btn-secondary:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-secondary.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-success {\r\n\tbackground-color: #27c24c;\r\n\tborder: 1px solid #27c24c\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success.active,\r\n.btn-success:active,\r\n.open > .dropdown-toggle.btn-success {\r\n\tbackground-color: #23ad44;\r\n\tborder: 1px solid #23ad44;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-success.active.focus,\r\n.btn-success.active:focus,\r\n.btn-success.active:hover,\r\n.btn-success.focus:active,\r\n.btn-success:active:focus,\r\n.btn-success:active:hover,\r\n.open > .dropdown-toggle.btn-success.focus,\r\n.open > .dropdown-toggle.btn-success:focus,\r\n.open > .dropdown-toggle.btn-success:hover {\r\n\tbackground-color: #23ad44;\r\n\tborder: 1px solid #23ad44\r\n}\r\n\r\n.btn-success.active:not(:disabled):not(.disabled),\r\n.btn-success:active:not(:disabled):not(.disabled),\r\n.show > .btn-success.dropdown-toggle {\r\n\tbackground-color: #23ad44;\r\n\tborder-color: #23ad44;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-success.active:focus:not(:disabled):not(.disabled), \r\n.btn-success:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-success.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-success.disabled, .btn-success:disabled {\r\n    background-color: #27c24c;\r\n    border-color: #27c24c;\r\n    color: #fff;\r\n}\r\n\r\n.btn-info {\r\n\tbackground-color: #009efb;\r\n\tborder: 1px solid #009efb\r\n}\r\n\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info.active,\r\n.btn-info:active,\r\n.open > .dropdown-toggle.btn-info {\r\n\tbackground-color: #028ee1;\r\n\tborder: 1px solid #028ee1\r\n}\r\n\r\n.btn-info.active.focus,\r\n.btn-info.active:focus,\r\n.btn-info.active:hover,\r\n.btn-info.focus:active,\r\n.btn-info:active:focus,\r\n.btn-info:active:hover,\r\n.open > .dropdown-toggle.btn-info.focus,\r\n.open > .dropdown-toggle.btn-info:focus,\r\n.open > .dropdown-toggle.btn-info:hover {\r\n\tbackground-color: #028ee1;\r\n\tborder: 1px solid #028ee1\r\n}\r\n\r\n.btn-info.active:not(:disabled):not(.disabled),\r\n.btn-info:active:not(:disabled):not(.disabled),\r\n.show > .btn-info.dropdown-toggle {\r\n\tbackground-color: #028ee1;\r\n\tborder-color: #028ee1;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-info.active:focus:not(:disabled):not(.disabled), \r\n.btn-info:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-info.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-info.disabled, .btn-info:disabled {\r\n    background-color: #009efb;\r\n    border-color: #009efb;\r\n    color: #fff;\r\n}\r\n\r\n.btn-warning {\r\n\tbackground-color: #ffbc34;\r\n\tborder: 1px solid #ffbc34\r\n}\r\n\r\n.btn-warning:hover,\r\n.btn-warning:focus,\r\n.btn-warning.active,\r\n.btn-warning:active,\r\n.open > .dropdown-toggle.btn-warning {\r\n\tbackground-color: #e9ab2e;\r\n\tborder: 1px solid #e9ab2e\r\n}\r\n\r\n.btn-warning.active.focus,\r\n.btn-warning.active:focus,\r\n.btn-warning.active:hover,\r\n.btn-warning.focus:active,\r\n.btn-warning:active:focus,\r\n.btn-warning:active:hover,\r\n.open > .dropdown-toggle.btn-warning.focus,\r\n.open > .dropdown-toggle.btn-warning:focus,\r\n.open > .dropdown-toggle.btn-warning:hover {\r\n\tbackground-color: #e9ab2e;\r\n\tborder: 1px solid #e9ab2e\r\n}\r\n\r\n.btn-warning.active:not(:disabled):not(.disabled),\r\n.btn-warning:active:not(:disabled):not(.disabled),\r\n.show > .btn-warning.dropdown-toggle {\r\n\tbackground-color: #e9ab2e;\r\n\tborder-color: #e9ab2e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-warning.active:focus:not(:disabled):not(.disabled), \r\n.btn-warning:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-warning.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-warning.disabled, .btn-warning:disabled {\r\n    background-color: #ffbc34;\r\n    border-color: #ffbc34;\r\n    color: #fff;\r\n}\r\n\r\n.btn-danger {\r\n\tbackground-color: #f05050;\r\n\tborder: 1px solid #f05050;\r\n}\r\n\r\n.btn-danger:hover,\r\n.btn-danger:focus,\r\n.btn-danger.active,\r\n.btn-danger:active,\r\n.open > .dropdown-toggle.btn-danger {\r\n\tbackground-color: #ee3939;\r\n\tborder: 1px solid #ee3939;\r\n}\r\n\r\n.btn-danger.active.focus,\r\n.btn-danger.active:focus,\r\n.btn-danger.active:hover,\r\n.btn-danger.focus:active,\r\n.btn-danger:active:focus,\r\n.btn-danger:active:hover,\r\n.open > .dropdown-toggle.btn-danger.focus,\r\n.open > .dropdown-toggle.btn-danger:focus,\r\n.open > .dropdown-toggle.btn-danger:hover {\r\n\tbackground-color: #ee3939;\r\n\tborder: 1px solid #ee3939;\r\n}\r\n\r\n.btn-danger.active:not(:disabled):not(.disabled),\r\n.btn-danger:active:not(:disabled):not(.disabled),\r\n.show > .btn-danger.dropdown-toggle {\r\n\tbackground-color: #ee3939;\r\n\tborder-color: #ee3939;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-danger.active:focus:not(:disabled):not(.disabled), \r\n.btn-danger:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-danger.dropdown-toggle:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.btn-danger.disabled, .btn-danger:disabled {\r\n    background-color: #f62d51;\r\n    border-color: #f62d51;\r\n    color: #fff;\r\n}\r\n\r\n.btn-light.active:focus:not(:disabled):not(.disabled), \r\n.btn-light:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-light.dropdown-toggle:focus {\r\n    box-shadow: unset;\r\n}\r\n\r\n.btn-dark.active:focus:not(:disabled):not(.disabled), \r\n.btn-dark:active:focus:not(:disabled):not(.disabled), \r\n.show > .btn-dark.dropdown-toggle:focus {\r\n    box-shadow: unset;\r\n}\r\n\r\n.btn-outline-primary {\r\n\tcolor: #ff0080;\r\n\tborder-color: #ff0080;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n}\r\n\r\n.btn-outline-primary:focus, \r\n.btn-outline-primary.focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-primary.disabled, \r\n.btn-outline-primary:disabled {\r\n\tcolor: #ff0080;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active, \r\n.btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, \r\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-success {\r\n\tcolor: #27c24c;\r\n\tborder-color: #27c24c;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n\tbackground-color: #27c24c;\r\n\tborder-color: #27c24c;\r\n}\r\n\r\n.btn-outline-success:focus, .btn-outline-success.focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-success.disabled, .btn-outline-success:disabled {\r\n\tcolor: #27c24c;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active, \r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n\tbackground-color: #27c24c;\r\n\tborder-color: #27c24c;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, \r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-info {\r\n\tcolor: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.btn-outline-info:hover {\r\n\tcolor: #fff;\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.btn-outline-info:focus, .btn-outline-info.focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-info.disabled, .btn-outline-info:disabled {\r\n\tbackground-color: transparent;\r\n\tcolor: #009efb;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active, \r\n.btn-outline-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-info.dropdown-toggle {\r\n\tbackground-color: #009efb;\r\n\tborder-color: #009efb;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, \r\n.btn-outline-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-info.dropdown-toggle:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-warning {\r\n\tcolor: #ffbc34;\r\n\tborder-color: #ffbc34;\r\n}\r\n\r\n.btn-outline-warning:hover {\r\n\tcolor: #212529;\r\n\tbackground-color: #ffbc34;\r\n\tborder-color: #ffbc34;\r\n}\r\n\r\n.btn-outline-warning:focus, .btn-outline-warning.focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n\tbackground-color: transparent;\r\n\tcolor: #ffbc34;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active, \r\n.btn-outline-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-warning.dropdown-toggle {\r\n\tcolor: #212529;\r\n\tbackground-color: #ffbc34;\r\n\tborder-color: #ffbc34;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, \r\n.btn-outline-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-warning.dropdown-toggle:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-danger {\r\n\tcolor: #f05050;\r\n\tborder-color: #f05050;\r\n}\r\n\r\n.btn-outline-danger:hover {\r\n\tcolor: #fff;\r\n\tbackground-color: #f05050;\r\n\tborder-color: #f05050;\r\n}\r\n\r\n.btn-outline-danger:focus, .btn-outline-danger.focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n\tbackground-color: transparent;\r\n\tcolor: #f05050;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active, \r\n.btn-outline-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-danger.dropdown-toggle {\r\n\tbackground-color: #f05050;\r\n\tborder-color: #f05050;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, \r\n.btn-outline-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-danger.dropdown-toggle:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-outline-light {\r\n    color: #ababab;\r\n    border-color: #e6e6e6;\r\n}\r\n\r\n.btn-outline-light.disabled, .btn-outline-light:disabled {\r\n    color: #ababab;\r\n}\r\n\r\n/* .dataTables_paginate.paging_simple_numbers {\r\n\tborder: 1px solid #e5e8eb;\r\n\tborder-radius:.25rem;\r\n\tpadding-top:0;\r\n} */\r\n\r\n/* .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {\r\n\tcolor: #fff !important;\r\n    border: 1px solid #ff0080;\r\n    background-color: #ff0080;\r\n\tbackground:#ff0080;\r\n\tborder-radius:0;\r\n}\r\n.dataTables_wrapper .dataTables_paginate .paginate_button {\r\n    padding: 0.3em .7em;\r\n} */\r\n\r\n.pagination > .active > a, \r\n.pagination > .active > a:focus,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span,\r\n.pagination > .active > span:focus,\r\n.pagination > .active > span:hover {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n}\r\n\r\n.pagination > li > a, \r\n.pagination > li > span {\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.page-link:hover {\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.page-link:focus {\r\n\tbox-shadow: unset;\r\n}\r\n\r\n.page-item.active .page-link {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n}\r\n\r\n.dropdown-menu {\r\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\r\n\tborder-radius: 3px;\r\n\ttransform-origin: left top 0;\r\n\tbox-shadow: inherit;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.dropdown-item.active, .dropdown-item:active {\r\n    background-color: #ff0080;\r\n}\r\n\r\n.navbar-nav .open .dropdown-menu {\r\n\tborder: 0;\r\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.settings-tab .nav .nav-link {\r\n\tmargin-bottom: 15px;\r\n\tcolor: #333;\r\n}\r\n\r\n.settings-tab .nav .nav-link:hover {\r\n\tbackground: #e8e8e8;\r\n\tcolor: #333;\r\n}\r\n\r\n.settings-tab .nav .nav-link.active, .settings-tab .nav .show > .nav-link {\r\n\tbackground: #ff0080;\r\n\tcolor: #fff;\r\n}\r\n\r\n.dropdown-menu {\r\n\tfont-size: 14px;\r\n}\r\n\r\n.card {\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 1.875rem;\r\n}\r\n\r\n.card-body {\r\n\tpadding: 1.5rem;\r\n}\r\n\r\n.card-header {\r\n\tborder-bottom: 1px solid #e6e6e6;\r\n\tpadding: 1rem 1.5rem;\r\n}\r\n\r\n.card-footer {\r\n\tbackground-color: #fff;\r\n\tborder-top: 1px solid #e6e6e6;\r\n\tpadding: 1rem 1.5rem;\r\n}\r\n\r\n.card .card-header {\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #eaeaea !important;\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0 !important;\r\n}\r\n\r\n.card .card-header .card-title {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.modal-footer.text-left {\r\n\ttext-align: left;\r\n}\r\n\r\n.modal-footer.text-center {\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-light {\r\n\tborder-color: #e6e6e6;\r\n\tcolor: #a6a6a6;\r\n}\r\n\r\n.bootstrap-datetimepicker-widget table td.active, .bootstrap-datetimepicker-widget table td.active:hover {\r\n\tbackground-color: #ff0080;\r\n\ttext-shadow: unset;\r\n}\r\n\r\n.bootstrap-datetimepicker-widget table td.today:before{\r\n\tborder-bottom-color:#ff0080;\r\n}\r\n\r\n.bg-info-light{\r\n\tbackground-color:rgba(2, 182, 179,0.12) !important;\r\n\tcolor:#1db9aa !important;\r\n}\r\n\r\n.bg-primary-light{\r\n\tbackground-color:rgba(17, 148, 247,0.12) !important;\r\n\tcolor:#2196f3 !important;\r\n}\r\n\r\n.bg-danger-light{\r\n\tbackground-color:rgba(242, 17, 54,0.12) !important;\r\n\tcolor:#e63c3c !important;\r\n}\r\n\r\n.bg-warning-light{\r\n\tbackground-color:rgba(255, 152, 0,0.12) !important;\r\n\tcolor:#f39c12 !important;\r\n}\r\n\r\n.bg-success-light{\r\n\tbackground-color:rgba(15, 183, 107,0.12) !important;\r\n\tcolor:#26af48 !important;\r\n}\r\n\r\n.bg-purple-light{\r\n\tbackground-color:rgba(197, 128, 255,0.12) !important;\r\n\tcolor:#c580ff !important;\r\n}\r\n\r\n.bg-default-light{\r\n\tbackground-color:rgba(40, 52, 71,0.12) !important;\r\n\tcolor:#283447 !important;\r\n}\r\n\r\n/*-----------------\r\n\t4. Select2\r\n-----------------------*/\r\n\r\n.select2-container .select2-selection--single {\r\n\tborder: 1px solid #ddd;\r\n\theight: 40px;\r\n}\r\n\r\n.select2-container--default .select2-selection--single .select2-selection__arrow {\r\n\theight: 38px;\r\n\tright: 7px;\r\n}\r\n\r\n.select2-container--default .select2-selection--single .select2-selection__arrow b {\r\n\tborder-color: #ddd transparent transparent;\r\n\tborder-style: solid;\r\n\tborder-width: 6px 6px 0;\r\n\theight: 0;\r\n\tleft: 50%;\r\n\tmargin-left: -10px;\r\n\tmargin-top: -2px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\twidth: 0;\r\n}\r\n\r\n.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {\r\n\tborder-color: transparent transparent #ddd;\r\n\tborder-width: 0 6px 6px;\r\n}\r\n\r\n.select2-container .select2-selection--single .select2-selection__rendered {\r\n\tpadding-right: 30px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n.select2-container--default .select2-selection--single .select2-selection__rendered {\r\n\tcolor: #333;\r\n\tfont-size: 15px;\r\n\tfont-weight: normal;\r\n\tline-height: 25px;\r\n}\r\n\r\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\r\n\tbackground-color: #ff0080;\r\n}\r\n\r\n.select2-container--default .select2-selection--multiple {\r\n\tborder: 1px solid #ddd;\r\n\tmin-height: 40px;\r\n}\r\n\r\n/*-----------------\r\n\t5. Nav Tabs\r\n-----------------------*/\r\n\r\n.nav-tabs {\r\n\tborder-bottom: 1px solid #e6e6e6;\r\n}\r\n\r\n.card-header-tabs {\r\n    border-bottom: 0;\r\n}\r\n\r\n.nav-tabs > li > a {\r\n\tmargin-right: 0;\r\n\tcolor: #888;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.nav-tabs > li > a:hover,\r\n.nav-tabs > li > a:focus {\r\n\tborder-color: transparent;\r\n\tcolor: #333;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li > a {\r\n\tcolor: #333;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > .active > a,\r\n.nav-tabs.nav-tabs-solid > .active > a:hover,\r\n.nav-tabs.nav-tabs-solid > .active > a:focus {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n\tcolor: #fff;\r\n}\r\n\r\n.tab-content {\r\n\tpadding-top: 20px;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n\tborder-radius: 0;\r\n}\r\n\r\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\r\n    background-color: #eee;\r\n    border-color: transparent;\r\n\tcolor: #333;\r\n}\r\n\r\n.nav-tabs.nav-justified > li > a {\r\n\tborder-radius: 0;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.nav-tabs.nav-justified > li > a:hover,\r\n.nav-tabs.nav-justified > li > a:focus {\r\n\tborder-bottom-color: #ddd;\r\n}\r\n\r\n.nav-tabs.nav-justified.nav-tabs-solid > li > a {\r\n\tborder-color: transparent;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li > a {\r\n\tcolor: #333;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li > a.active,\r\n.nav-tabs.nav-tabs-solid > li > a.active:hover,\r\n.nav-tabs.nav-tabs-solid > li > a.active:focus {\r\n\tbackground-color: #ff0080;\r\n\tborder-color: #ff0080;\r\n\tcolor: #fff;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid.nav-tabs-rounded {\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a {\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active,\r\n.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active:hover,\r\n.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active:focus {\r\n\tborder-radius: 50px;\r\n}\r\n\r\n.nav-tabs-justified > li > a {\r\n\tborder-radius: 0;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.nav-tabs-justified > li > a:hover,\r\n.nav-tabs-justified > li > a:focus {\r\n\tborder-bottom-color: #ddd;\r\n}\r\n\r\n.nav-tabs-justified.nav-tabs-solid > li > a {\r\n\tborder-color: transparent;\r\n}\r\n\r\n.nav-tabs.nav-justified.nav-tabs-top {\r\n\tborder-bottom: 1px solid #ddd;\r\n}\r\n\r\n.nav-tabs.nav-justified.nav-tabs-top > li > a,\r\n.nav-tabs.nav-justified.nav-tabs-top > li > a:hover,\r\n.nav-tabs.nav-justified.nav-tabs-top > li > a:focus {\r\n\tborder-width: 2px 0 0 0;\r\n}\r\n\r\n.nav-tabs.nav-tabs-top > li {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.nav-tabs.nav-tabs-top > li > a,\r\n.nav-tabs.nav-tabs-top > li > a:hover,\r\n.nav-tabs.nav-tabs-top > li > a:focus {\r\n\tborder-width: 2px 0 0 0;\r\n}\r\n\r\n.nav-tabs.nav-tabs-top > li.open > a,\r\n.nav-tabs.nav-tabs-top > li > a:hover,\r\n.nav-tabs.nav-tabs-top > li > a:focus {\r\n\tborder-top-color: #ddd;\r\n}\r\n\r\n.nav-tabs.nav-tabs-top > li+li > a {\r\n\tmargin-left: 1px;\r\n}\r\n\r\n.nav-tabs.nav-tabs-top > li > a.active,\r\n.nav-tabs.nav-tabs-top > li > a.active:hover,\r\n.nav-tabs.nav-tabs-top > li > a.active:focus {\r\n\tborder-top-color: #ff0080;\r\n}\r\n\r\n.nav-tabs.nav-tabs-bottom > li {\r\n\tmargin-bottom: -1px;\r\n\tfont-weight:700;\r\n}\r\n\r\n.nav-tabs.nav-tabs-bottom > li > a.active, \r\n.nav-tabs.nav-tabs-bottom > li > a.active:hover, \r\n.nav-tabs.nav-tabs-bottom > li > a.active:focus {\r\n\tborder-bottom-width: 2px;\r\n\tborder-color: transparent;\r\n\tborder-bottom-color: #ff0080;\r\n\tbackground-color: transparent;\r\n\ttransition: none 0s ease 0s; \r\n\t-moz-transition: none 0s ease 0s; \r\n\t-o-transition: none 0s ease 0s; \r\n\t-ms-transition: none 0s ease 0s; \r\n\t-webkit-transition: none 0s ease 0s;\r\n\tcolor:#ff0080;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid {\r\n\tbackground-color: #fafafa;\r\n\tborder: 0;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li > a {\r\n\tborder-color: transparent;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > li > a:hover,\r\n.nav-tabs.nav-tabs-solid > li > a:focus {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.nav-tabs.nav-tabs-solid > .open:not(.active) > a {\r\n\tbackground-color: #f5f5f5;\r\n\tborder-color: transparent;\r\n}\r\n\r\n.nav-tabs-justified.nav-tabs-top {\r\n\tborder-bottom: 1px solid #ddd;\r\n}\r\n\r\n.nav-tabs-justified.nav-tabs-top > li > a,\r\n.nav-tabs-justified.nav-tabs-top > li > a:hover,\r\n.nav-tabs-justified.nav-tabs-top > li > a:focus {\r\n\tborder-width: 2px 0 0 0;\r\n}\r\n\r\n/*-----------------\r\n\t6. Components\r\n-----------------------*/\r\n\r\n.progress-xs {\r\n\theight: 4px;\r\n}\r\n\r\n.progress-sm {\r\n\theight: 15px;\r\n}\r\n\r\n.progress.progress-sm {\r\n\theight: 6px;\r\n}\r\n\r\n.progress.progress-md {\r\n\theight: 8px;\r\n}\r\n\r\n.progress.progress-lg {\r\n\theight: 18px;\r\n}\r\n\r\n.row.row-sm {\r\n    margin-left: -3px;\r\n    margin-right: -3px;\r\n}\r\n\r\n.row.row-sm > div {\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n}\r\n\r\n/*-----------------\r\n\t7. Avatar\r\n-----------------------*/\r\n\r\n.avatar {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 3rem;\r\n\theight: 3rem\r\n}\r\n\r\n.avatar > img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-o-object-fit: cover;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.avatar-title {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #ff0080;\r\n\tcolor: #fff;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.avatar-away:before,\r\n.avatar-offline:before,\r\n.avatar-online:before {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\twidth: 25%;\r\n\theight: 25%;\r\n\tborder-radius: 50%;\r\n\tcontent: '';\r\n\tborder: 2px solid #fff;\r\n}\r\n\r\n.avatar-online:before {\r\n\tbackground-color: #27c24c;\r\n}\r\n\r\n.avatar-offline:before {\r\n\tbackground-color: #f05050;\r\n}\r\n\r\n.avatar-away:before {\r\n\tbackground-color: #ffbc34;\r\n}\r\n\r\n.avatar .border {\r\n\tborder-width: 3px !important;\r\n}\r\n\r\n.avatar .rounded {\r\n\tborder-radius: 6px !important;\r\n}\r\n\r\n.avatar .avatar-title {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.avatar-xs {\r\n\twidth: 1.65rem;\r\n\theight: 1.65rem;\r\n}\r\n\r\n.avatar-xs .border {\r\n\tborder-width: 2px !important;\r\n}\r\n\r\n.avatar-xs .rounded {\r\n\tborder-radius: 4px !important;\r\n}\r\n\r\n.avatar-xs .avatar-title {\r\n\tfont-size: 12px;\r\n}\r\n\r\n.avatar-xs.avatar-away:before,\r\n.avatar-xs.avatar-offline:before,\r\n.avatar-xs.avatar-online:before {\r\n\tborder-width: 1px;\r\n}\r\n\r\n.avatar-sm {\r\n\twidth: 2.5rem;\r\n\theight: 2.5rem;\r\n}\r\n\r\n.avatar-sm .border {\r\n\tborder-width: 3px !important;\r\n}\r\n\r\n.avatar-sm .rounded {\r\n\tborder-radius: 4px !important;\r\n}\r\n\r\n.avatar-sm .avatar-title {\r\n\tfont-size: 15px;\r\n}\r\n\r\n.avatar-sm.avatar-away:before,\r\n.avatar-sm.avatar-offline:before,\r\n.avatar-sm.avatar-online:before {\r\n\tborder-width: 2px;\r\n}\r\n\r\n/*-----------------\r\n\t8. Header\r\n-----------------------*/\r\n\r\n.header {\r\n\tbackground: #3b3b3b;\r\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n\tleft: 0;\r\n\tposition: fixed;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tz-index: 999;\r\n\theight: 60px;\r\n\ttransition: all 0.45s ease 0s;\r\n\twidth: auto;\r\n}\r\n\r\n.header .header-left {\r\n\tfloat: left;\r\n\theight: 60px;\r\n\tpadding: 0 20px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\twidth: 280px;\r\n\tz-index: 1;\r\n\ttransition: all 0.2s ease-in-out;\r\n\tdisplay: none;\r\n}\r\n\r\n.header .header-left .logo {\r\n\tdisplay: inline-block;\r\n\tline-height: 60px;\r\n}\r\n\r\n.header .header-left .logo img {\r\n    max-height: 24px;\r\n    width: auto;\r\n}\r\n\r\n.header-left .logo.logo-small {\r\n    display: none;\r\n}\r\n\r\n.header .dropdown-menu > li > a {\r\n\tposition: relative;\r\n}\r\n\r\n.header .dropdown-toggle:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.header .has-arrow .dropdown-toggle:after {\r\n\tborder-top: 0;\r\n\tborder-left: 0;\r\n\tborder-bottom: 2px solid #fff;\r\n\tborder-right: 2px solid #fff;\r\n\tcontent: '';\r\n\theight: 8px;\r\n\tdisplay: inline-block;\r\n\tpointer-events: none;\r\n\ttransform-origin: 66% 66%;\r\n\ttransform: rotate(45deg);\r\n\ttransition: all 0.15s ease-in-out;\r\n\twidth: 8px;\r\n\tvertical-align: 2px;\r\n}\r\n\r\n.header .has-arrow .dropdown-toggle[aria-expanded=\"true\"]:after {\r\n\ttransform: rotate(-135deg);\r\n}\r\n\r\n.user-menu {\r\n    float: right;\r\n    margin: 0;\r\n    position: relative;\r\n    z-index: 99;\r\n    padding: 0;\r\n}\r\n\r\n.user-menu.nav > li > a {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.user-menu.nav > li > a:hover,\r\n.user-menu.nav > li > a:focus {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.user-menu.nav > li > a:hover i,\r\n.user-menu.nav > li > a:focus i {\r\n\tcolor: #333;\r\n}\r\n\r\n.user-img {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 3px;\r\n\tposition: relative;\r\n}\r\n\r\n.user-img img {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\t-o-object-fit: cover;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.user-menu.nav > li > a.mobile_btn {\r\n\tborder: 0;\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tcursor: pointer\r\n}\r\n\r\n.user-menu .dropdown-menu {\r\n    min-width: 200px;\r\n\tpadding: 0;\r\n\tleft: -20px!important;\r\n}\r\n\r\n.dropdown-menu.notifications.collapse.show, .dropdown-menu.dropdown-menu-right.collapse.show {\r\n\tright: 0;\r\n    left: unset !important;\r\n}\r\n\r\n.user-menu .dropdown-menu .dropdown-item {\r\n    padding: 7px 15px;\r\n}\r\n\r\n.user-menu .dropdown-menu .dropdown-item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-top: 1px solid #e3e3e3;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.user-menu .dropdown-menu .dropdown-item:hover {\r\n    color: #ff0080;\r\n}\r\n\r\n.header .dropdown-menu > li > a:focus,\r\n.header .dropdown-menu > li > a:hover {\r\n\tbackground-color: #ff0080;\r\n\tcolor: #fff;\r\n}\r\n\r\n.header .dropdown-menu > li > a:focus i,\r\n.header .dropdown-menu > li > a:hover i {\r\n\tcolor: #fff;\r\n}\r\n\r\n.header .dropdown-menu > li > a {\r\n\tpadding: 10px 18px;\r\n}\r\n\r\n.header .dropdown-menu > li > a i {\r\n\tcolor: #ff0080;\r\n\tmargin-right: 10px;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n}\r\n\r\n.header .user-menu .dropdown-menu > li > a i {\r\n\tcolor: #ff0080;\r\n\tfont-size: 16px;\r\n\tmargin-right: 10px;\r\n\tmin-width: 18px;\r\n\ttext-align: center;\r\n}\r\n\r\n.header .user-menu .dropdown-menu > li > a:focus i,\r\n.header .user-menu .dropdown-menu > li > a:hover i {\r\n\tcolor: #fff;\r\n}\r\n\r\n.mobile_btn {\r\n\tdisplay: none;\r\n\tfloat: left;\r\n}\r\n\r\n.slide-nav .sidebar {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.user-header {\r\n    background-color: #f9f9f9;\r\n    display: flex;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.user-header .user-text {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.user-header .user-text h6 {\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.menu-title {\r\n    color: #a3a3a3;\r\n    display: block;\r\n    font-size: 14px;\r\n    margin-bottom: 5px;\r\n    padding: 0 25px;\r\n}\r\n\r\n.sidebar-overlay {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    display: none;\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n.sidebar-overlay.opened {\r\n    display: block;\r\n}\r\n\r\nhtml.menu-opened {\r\n\toverflow: hidden;\r\n}\r\n\r\nhtml.menu-opened body {\r\n\toverflow: hidden;\r\n}\r\n\r\n/*-----------------\r\n\t9. Sidebar\r\n-----------------------*/\r\n\r\n.sidebar {\r\n    background-color: #fff;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin-top: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    transition: all 0.2s ease-in-out 0s;\r\n    width: 280px;\r\n    z-index: 1001;\r\n}\r\n\r\n.sidebar.opened {\r\n\ttransition: all 0.4s ease;\r\n}\r\n\r\n.sidebar-inner {\r\n\theight: 100%;\r\n\tmin-height: 100%;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n\r\n.sidebar-menu {\r\n    padding: 15px;\r\n}\r\n\r\n.sidebar-menu ul {\r\n\tfont-size: 15px;\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tposition: relative;\r\n}\r\n\r\n.sidebar-menu li a {\r\n\tcolor: #333;\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\theight: auto;\r\n\tpadding: 0 20px;\r\n}\r\n\r\n.sidebar-menu li a:hover {\r\n    color: #ff0080;\r\n}\r\n\r\n.sidebar-menu > ul > li > a:hover {\r\n    background-color: #e8e8e8;\r\n    color: #000;\r\n}\r\n\r\n.sidebar-menu > ul > li.active > a:hover {\r\n    background-color:  #e60073;\r\n    color: #fff;\r\n}\r\n\r\n.sidebar-menu li.active a {\r\n    background-color: #ff0080;\r\n    color: #fff;\r\n}\r\n\r\n.menu-title {\r\n    color: #9e9e9e;\r\n    display: flex;\r\n    font-size: 14px;\r\n    opacity: 1;\r\n    padding: 5px 15px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.menu-title > i {\r\n\tfloat: right;\r\n\tline-height: 40px;\r\n}\r\n\r\n.sidebar-menu li.menu-title a {\r\n    color: #ff9b44;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-menu li.menu-title a.btn {\r\n    color: #fff;\r\n    display: block;\r\n    float: none;\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.sidebar-menu ul ul a.active {\r\n\tcolor: #ff0080;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.mobile_btn {\r\n\tdisplay: none;\r\n\tfloat: left;\r\n}\r\n\r\n.sidebar .sidebar-menu > ul > li > a span {\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.sidebar .sidebar-menu > ul > li > a span.chat-user {\r\n    margin-left: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.sidebar .sidebar-menu > ul > li > a span.badge {\r\n\tmargin-left: auto;\r\n}\r\n\r\n.sidebar-menu ul ul a {\r\n    display: block;\r\n    font-size: 15px;\r\n    padding: 7px 10px 7px 45px;\r\n    position: relative;\r\n}\r\n\r\n.sidebar-menu ul ul {\r\n\tdisplay: none;\r\n}\r\n\r\n.sidebar-menu ul ul ul a {\r\n\tpadding-left: 65px;\r\n}\r\n\r\n.sidebar-menu ul ul ul ul a {\r\n\tpadding-left: 85px;\r\n}\r\n\r\n.sidebar-menu > ul > li {\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n}\r\n\r\n.sidebar-menu > ul > li:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sidebar-menu .menu-arrow {\r\n\ttransition: transform .15s;\r\n\tposition: absolute;\r\n\tright: 15px;\r\n\tdisplay: inline-block;\r\n\tfont-family: 'FontAwesome';\r\n\ttext-rendering: auto;\r\n\tline-height: 40px;\r\n\tfont-size: 16px;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\ttransform: translate(0, 0);\r\n\tline-height: 18px;\r\n\ttop: 11px;\r\n}\r\n\r\n.sidebar-menu .menu-arrow:before {\r\n\tcontent: \"\\f105\";\r\n}\r\n\r\n.sidebar-menu li a.subdrop .menu-arrow {\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.sidebar-menu ul ul a .menu-arrow {\r\n\ttop: 10px;\r\n}\r\n\r\n.sidebar-menu > ul > li > a {\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    padding: 10px 20px;\r\n    position: relative;\r\n    transition: all 0.2s ease-in-out 0s;\r\n}\r\n\r\n.sidebar-menu ul li a i {\r\n\tdisplay: inline-block;\r\n\tfont-size: 20px;\r\n\tline-height: 24px;\r\n\ttext-align: left;\r\n\tvertical-align: middle;\r\n\twidth: 20px;\r\n\ttransition: all 0.2s ease-in-out 0s;\r\n}\r\n\r\n.sidebar-menu ul li.menu-title a i {\r\n\tfont-size: 16px !important;\r\n\tmargin-right: 0;\r\n\ttext-align: right;\r\n\twidth: auto;\r\n}\r\n\r\n.sidebar-menu li a > .badge {\r\n    color: #fff;\r\n}\r\n\r\n/*-----------------\r\n\t10. Content\r\n-----------------------*/\r\n\r\n.main-wrapper {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.page-wrapper {\r\n\tmargin-left: 280px;\r\n\tpadding-top: 60px;\r\n\tposition: relative;\r\n\ttransition: all 0.4s ease;\r\n}\r\n\r\n.page-wrapper > .content {\r\n\tpadding: 1.875rem 1.875rem 0;\r\n}\r\n\r\n.page-header {\r\n\tmargin-bottom: 1.875rem;\r\n}\r\n\r\n.page-header .breadcrumb {\r\n    background-color: transparent;\r\n    color: #6c757d;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n}\r\n\r\n.page-header .breadcrumb a {\r\n\tcolor: #333;\r\n}\r\n\r\n.page-title {\r\n    color: #333;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/*-----------------\r\n\t11. Toggle Button\r\n-----------------------*/\r\n\r\n.check {\r\n\tdisplay: block;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\tposition: absolute;\r\n}\r\n\r\n.checktoggle {\r\n    background-color: #e0001a;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-size: 0;\r\n    height: 24px;\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    width: 48px;\r\n}\r\n\r\n.checktoggle:after {\r\n\tcontent: ' ';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\ttransform: translate(5px, -50%);\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 50%;\r\n\ttransition: left 300ms ease, transform 300ms ease;\r\n}\r\n\r\n.check:checked + .checktoggle {\r\n\tbackground-color: #55ce63;\r\n}\r\n\r\n.check:checked + .checktoggle:after {\r\n\tleft: 100%;\r\n\ttransform: translate(calc(-100% - 5px), -50%);\r\n}\r\n\r\n.onoffswitch {\r\n\tmargin-left: auto;\r\n    position: relative;\r\n\twidth: 73px;\r\n    -webkit-user-select:none;\r\n\t-moz-user-select:none;\r\n\t-ms-user-select: none;\r\n}\r\n\r\n.onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n\r\n.onoffswitch-label {\r\n    display: block; \r\n\toverflow: hidden; \r\n\tcursor: pointer;\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.onoffswitch-inner {\r\n\tdisplay: block;\r\n    margin-left: -100%;\r\n    transition: margin 0.3s ease-in 0s;\r\n    width: 200%;\r\n}\r\n\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    display: block;\r\n    float: left;\r\n    font-size: 16px;\r\n    height: 30px;\r\n    line-height: 32px;\r\n    padding: 0;\r\n    width: 50%;\r\n}\r\n\r\n.onoffswitch-inner:before {\r\n\tbackground-color: #55ce63;\r\n    color: #fff;\r\n    content: \"ON\";\r\n    padding-left: 14px;\r\n}\r\n\r\n.onoffswitch-inner:after {\r\n    content: \"OFF\";\r\n    padding-right: 14px;\r\n    background-color: #ccc;\r\n    color: #fff;\r\n    text-align: right;\r\n}\r\n\r\n.onoffswitch-switch {\r\n    background: #fff;\r\n    border-radius: 20px;\r\n    bottom: 0;\r\n    display: block;\r\n\theight: 20px;\r\n    margin: 5px;\r\n    position: absolute;\r\n    right: 43px;\r\n    top: 0;\r\n    transition: all 0.3s ease-in 0s;\r\n    width: 20px;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px; \r\n}\r\n\r\n.custom-modal .modal-body {\r\n    padding: 30px;\r\n}\r\n\r\n/*-----------------\r\n\t12. Login\r\n-----------------------*/\r\n\r\n.login-wrapper {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.loginbox {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 12px 0px rgba(55, 73, 72, 0.02);\r\n    max-width: 500px;\r\n\tpadding: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.account-logo img {\r\n\tmax-height: 80px;\r\n\twidth: auto;\r\n}\r\n\r\n/*-----------------\r\n\t13. Notifications\r\n-----------------------*/\r\n\r\n.notifications {\r\n\tpadding: 0;\r\n}\r\n\r\n.notifications .notification-time {\r\n\tfont-size: 12px;\r\n\tline-height: 1.35;\r\n\tcolor: #bdbdbd;\r\n}\r\n\r\n.notifications .media {\r\n\tmargin-top: 0;\r\n\tborder-bottom: 1px solid #f5f5f5;\r\n}\r\n\r\n.notifications .media:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.notifications .media a {\r\n\tdisplay: block;\r\n\tpadding: 10px 15px;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.notifications .media a:hover {\r\n\tbackground-color: #fafafa;\r\n}\r\n\r\n.notifications .media > .avatar {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.notifications .media-list .media-left {\r\n\tpadding-right: 8px;\r\n}\r\n\r\n.topnav-dropdown-header {\r\n\tborder-bottom: 1px solid #eee;\r\n\ttext-align: center;\r\n}\r\n\r\n.topnav-dropdown-header, \r\n.topnav-dropdown-footer {\r\n    font-size: 14px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.topnav-dropdown-footer {\r\n\tborder-top: 1px solid #eee;\r\n}\r\n\r\n.topnav-dropdown-footer a {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #333;\r\n}\r\n\r\n.user-menu.nav > li > a .badge {\r\n    background-color: #f43f3f;\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    height: 10px;\r\n    width: 10px;\r\n    position: absolute;\r\n    right: 7px;\r\n    top: 19px;\r\n    border: 2px solid #fff;\r\n    line-height: unset;\r\n    padding: 0;\r\n\tmin-height:unset;\r\n\tmin-width:unset;\r\n}\r\n\r\n.user-menu.nav > li > a > i {\r\n\tfont-size: 1.5rem;\r\n\tcolor:#333;\r\n}\r\n\r\n.noti-details {\r\n\tcolor: #989c9e;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.noti-title {\r\n\tcolor: #333;\r\n}\r\n\r\n.notifications .noti-content {\r\n\theight: 290px;\r\n\twidth: 350px;\r\n\toverflow-y: auto;\r\n\tposition: relative;\r\n}\r\n\r\n.notification-list {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n.notifications ul.notification-list > li{\r\n\tmargin-top: 0;\r\n\tborder-bottom: 1px solid #f5f5f5;\r\n}\r\n\r\n.notifications ul.notification-list > li:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.notifications ul.notification-list > li a {\r\n\tdisplay: block;\r\n\tpadding: 10px 15px;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.notifications ul.notification-list > li a:hover {\r\n\tbackground-color: #fafafa;\r\n}\r\n\r\n.notifications ul.notification-list > li .list-item {\r\n    border: 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.topnav-dropdown-header .notification-title {\r\n    color: #333;\r\n    display: block;\r\n    float: left;\r\n    font-size: 14px;\r\n}\r\n\r\n.topnav-dropdown-header .clear-noti {\r\n    color: #f83f37;\r\n    float: right;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.noti-time {\r\n    margin: 0;\r\n}\r\n\r\n/*-----------------\r\n\t14. Dashboard\r\n-----------------------*/\r\n\r\n.dash-widget-icon {\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    display: inline-flex;\r\n    font-size: 40px;\r\n    height: 80px;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 80px;\r\n\tmin-width:80px;\r\n    background-color: #ff0080;\r\n}\r\n\r\n.dash-count {\r\n    font-size: 18px;\r\n    margin-left: auto;\r\n}\r\n\r\n.dash-widget-info {\r\n    margin-left: auto;\r\n    text-align: right;\r\n}\r\n\r\n.dash-widget-info h3 {\r\n    margin-bottom: 10px;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.dash-widget-info h6 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.dash-widget-header {\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.submit-section {\r\n\ttext-align: center;\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.submit-btn {\r\n    border-radius: 50px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    min-width: 200px;\r\n    padding: 10px 20px;\r\n}\r\n\r\n/*-----------------\r\n\t15. Profile\r\n-----------------------*/\r\n\r\n.profile-menu {\r\n    background-color: #fff;\r\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\r\n    padding: 0.9375rem 1.5rem;\r\n}\r\n\r\n.profile-menu .nav-tabs.nav-tabs-solid {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.cal-icon {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n}\r\n\r\n.cal-icon:after {\r\n\tcolor: #979797;\r\n\tcontent: \"\\f073\";\r\n\tdisplay: block;\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n}\r\n\r\n.main-wrapper app-header > .header {\r\n    background: #fff;\r\n    box-shadow: 0px 0px 12px 0px rgba(55, 73, 72, 0.02);\r\n    left: 310px;\r\n    position: fixed;\r\n    right: 50px;\r\n    top: 50px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.page-wrapper {\r\n\tborder-radius: 25px;\r\n\tbackground-color: #f5f5f5;\r\n\tpadding-top: 90px;\r\n\tmin-height: calc(100vh - 40px);\r\n}\r\n\r\n.main-wrapper {\r\n\tbackground-color: #fff;\r\n\theight: auto;\r\n\tpadding: 20px 20px 20px 0;\r\n}\r\n\r\n.card {\r\n    border: 0;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 12px 0px rgba(55, 73, 72, 0.02);\r\n}\r\n\r\n.main-wrapper app-header > .header.fixed-header {\r\n    margin: 0;\r\n    right: 0;\r\n    border-radius: 0;\r\n    transition: all 0.45s ease 0s;\r\n    top: 0;\r\n    left: 280px;\r\n    background-color: #ff0080;\r\n}\r\n\r\n.sidebar-logo {\r\n    display: flex;\r\n    padding: 20px 20px 0;\r\n    justify-content: center;\r\n}\r\n\r\n.sidebar-logo img {\r\n\tmax-height: 46px;\r\n\twidth: auto;\r\n}\r\n\r\n.pricing-box .pricing-selected .card {\r\n    background-color: #ff0080;\r\n    border-color: #ff0080;\r\n    color: #fff;\r\n}\r\n\r\n.pricing-box .pricing-selected .pricing-header h2 {\r\n    color: #fff;\r\n}\r\n\r\n.pricing-box .pricing-selected .pricing-header p {\r\n\tcolor: #fff;\r\n}\r\n\r\n.pricing-box .pricing-selected .pricing-card-price .heading2 {\r\n\tcolor: #fff;\r\n}\r\n\r\n.pricing-box .pricing-selected .pricing-card-price p {\r\n\tcolor: #fff;\r\n}\r\n\r\n.pricing-box .pricing-selected .btn {\r\n\tbackground-color: #fff;\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.pricing-box .pricing-selected .pricing-options li {\r\n\tcolor: #fff;\r\n}\r\n\r\n.pricing-box .pricing-header {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.pricing-box .pricing-header h2 {\r\n\tmargin-bottom: 0;\r\n\tfont-size: 1.25rem;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2;\r\n}\r\n\r\n.pricing-box .pricing-header p {\r\n\tcolor: #9b9b9b;\r\n\tfont-size: .875rem;\r\n\tline-height: 1.43;\r\n}\r\n\r\n.pricing-box .pricing-card-price {\r\n\tmargin-bottom: 1.563rem;\r\n}\r\n\r\n.pricing-box .pricing-card-price .heading2 {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.pricing-box .pricing-card-price p {\r\n\tcolor: #9b9b9b;\r\n}\r\n\r\n.pricing-box .pricing-card-price p + p {\r\n\tmargin: 0;\r\n}\r\n\r\n.pricing-box .pricing-options {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: 1.875rem;\r\n}\r\n\r\n.pricing-box .pricing-options li {\r\n\tmargin-bottom: 12px;\r\n\tfont-size: 0.875rem;\r\n\tline-height: 1.43;\r\n\tposition: relative;\r\n}\r\n\r\n.add-button {\r\n    box-shadow: 0px 0px 12px 0px rgba(255, 0, 128, 0.2);\r\n    width: 45px;\r\n    height: 45px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.filter-btn {\r\n    box-shadow: 0px 0px 12px 0px rgba(55, 73, 72, 0.02);\r\n    border: 0;\r\n    width: 45px;\r\n    height: 45px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #ff0080;\r\n    border-radius: 10px;\r\n}\r\n\r\n.filter-btn:hover, .filter-btn:focus {\r\n    background-color: #ff0080;\r\n\tcolor: #fff;\r\n}\r\n\r\n.filter-btn:hover i , .filter-btn:focus i {\r\n\tcolor:#fff;\r\n}\r\n\r\n.filter-card .form-group {\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\n.has-error .help-block {\r\n\tcolor: red;\r\n}\r\n\r\nsmall.help-block {\r\n   color: #F44336 !important;\r\n}\r\n\r\n.toggle.ios, .toggle-on.ios, .toggle-off.ios {\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.toggle.ios .toggle-handle {\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.service-header {\r\n    margin-bottom: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.service-header h2 {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.service-cate a {\r\n    color: #fff;\r\n    padding: 2px 10px;\r\n    text-transform: uppercase;\r\n    background: #d9c505;\r\n    border-radius: 4px;\r\n    font-size: 13px;\r\n    display: inline-block;\r\n}\r\n\r\n.service-images {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.widget {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.service-amount {\r\n    color: #ff0080;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    line-height: 40px;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.about-author {\r\n    min-height: 80px;\r\n}\r\n\r\n.about-provider-img {\r\n    background-color: #fff;\r\n    height: 80px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 80px;\r\n}\r\n\r\n.provider-details {\r\n    margin-left: 100px;\r\n}\r\n\r\n.ser-provider-name {\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    color: #272b41;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.last-seen {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.last-seen i {\r\n    color: #ffbc34;\r\n    margin-right: 5px;\r\n    font-size: 12px;\r\n}\r\n\r\n.last-seen i.online {\r\n    color: #00e65b;\r\n}\r\n\r\n.provider-info {\r\n    background-color: #f9f9f9;\r\n    padding: 15px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.available-widget ul {\r\n\tpadding-left: 0;\r\n\tmargin-bottom: 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.available-widget ul li {\r\n    color: #858585;\r\n    overflow: hidden;\r\n    text-align: right;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.available-widget ul li span {\r\n\tfloat: left;\r\n}\r\n\r\n.available-widget ul li:first-child {\r\n\tpadding-top: 0;\r\n}\r\n\r\n.available-widget ul li:last-child {\r\n\tborder-bottom: none;\r\n\tpadding-bottom: 0;\r\n}\r\n\r\n.rating {\r\n    list-style: none;\r\n    margin: 0 0 7px;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.rating i {\r\n    color: #dedfe0;\r\n}\r\n\r\n.rating i.filled {\r\n    color: #fbc418;\r\n}\r\n\r\n.service-widget .rating {\r\n    color: #757575;\r\n    font-size: 14px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.service-widget .rating i {\r\n\tfont-size: 14px;\r\n}\r\n\r\n.nav-tabs.menu-tabs {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-item.active .nav-link {\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-item {\r\n\tpadding-right: 2.25rem;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link {\r\n\tpadding: 0 0 1rem;\r\n\tfont-weight: 700;\r\n\tposition: relative;\r\n\tborder: none;\r\n\toutline: none;\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tbackground: transparent;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link::before, .nav-tabs .nav-link::after {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link::after {\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\theight: 3px;\r\n\tbackground: #ff0080;\r\n\topacity: 0;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-item.active .nav-link::after {\r\n\topacity: 1;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\r\n\tbackground: transparent;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link:focus {\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.nav-tabs.menu-tabs .nav-link .badge {\r\n    margin-left: 0.25rem;\r\n}\r\n\r\n.noti-dropdown > a {\r\n    display: inline-flex;\r\n    position: relative;\r\n    z-index: 1;\r\n    padding: 6px !important;\r\n    min-width: 36px;\r\n\talign-items: center;\r\n}\r\n\r\n.noti-dropdown > a::before {\r\n    position: absolute;\r\n    z-index: -1;\r\n    height: 20px;\r\n    width: 20px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    transform-origin: 50% 50%;\r\n    content: '';\r\n    background-color: #e5e5e5;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    transition: all .3s;\r\n}\r\n\r\n.noti-dropdown > a:hover::before {\r\n    opacity: 1;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.login-page::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n    pointer-events: none;\r\n    height: 50vh;\r\n    background-color: #ff0080;\r\n    border-radius: 0 0 2.5rem 2.5rem;\r\n\tz-index: 0;\r\n}\r\n\r\n.login-page {\r\n\tbackground-color: #f5f5f5;\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tmargin: -20px -20px -20px 0;\r\n}\r\n\r\n.login-body {\r\n    z-index: 10;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 15px;\r\n    min-height: 100vh;\r\n    display: flex;\r\n}\r\n\r\n.login-header {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.login-header p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.login-header h3 {\r\n    font-size: 20px;\r\n    margin-bottom: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.login-header h3 span {\r\n\tcolor: #ff0080;\r\n}\r\n\r\n.login-body .form-control {\r\n\theight: 50px;\r\n}\r\n\r\n.account-btn {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    display: block;\r\n    width: 100%;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.login-body .form-control::-moz-placeholder{color:#bbb;opacity:1}\r\n\r\n.login-body .form-control::placeholder{color:#bbb;opacity:1}\r\n\r\n.filter-card .form-group {\r\n\r\n    margin-bottom: 1.5rem;\r\n    position: relative;\r\n}\r\n\r\n.filter-card .form-group label {\r\n    position: absolute;\r\n    background: white;\r\n    font-size: 12px;\r\n    left: 10px;\r\n    top: -7px;\r\n    padding: 0 7px;\r\n    color: #858585;\r\n\tz-index: 1;\r\n}\r\n\r\n.filter-card .form-control {\r\n\theight: 48px;\r\n}\r\n\r\n.filter-card .btn {\r\n\theight: 48px;\r\n}\r\n\r\n.filter-card .select2-container .select2-selection--single {\r\n    height: 48px;\r\n}\r\n\r\n.filter-card .select2-container--default .select2-selection--single .select2-selection__rendered {\r\n    line-height: 30px;\r\n}\r\n\r\n.filter-card .select2-container--default .select2-selection--single .select2-selection__arrow {\r\n    height: 46px;\r\n}\r\n\r\n#toggle_btn {\r\n\talign-items: center;\r\n\tcolor: #333;\r\n\tdisplay: inline-flex;\r\n\tfloat: left;\r\n\tfont-size: 26px;\r\n\theight: 60px;\r\n\tjustify-content: center;\r\n\tpadding: 0 20px;\r\n}\r\n\r\n.service-carousel .owl-nav {\r\n\twidth: 100%;\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition: all 0.3s ease;\r\n\tmargin: 0;\r\n}\r\n\r\n.service-carousel:hover .owl-nav{\r\n\topacity:1;\r\n\tvisibility:visible;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav div {\r\n\theight: 48px;\r\n\twidth: 48px;\r\n\tline-height: 48px;\r\n\ttop: 50%;\r\n\tbackground: #666;\r\n\tcolor: #fff;\r\n\tfont-size: 25px;\r\n\tposition: absolute;\r\n\tborder: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttransition: all 0.4s ease;\r\n\tborder-radius: 100%;\r\n\tmargin-top: -24px;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav div:hover{\r\n\tcolor:#fff;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav .owl-prev{\r\n\tleft:-75px;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav .owl-prev:hover{\r\n\tleft:-65px;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav .owl-next{\r\n\tright:-75px;\r\n}\r\n\r\n.service-carousel .owl-carousel .owl-nav .owl-next:hover{\r\n\tright:-65px;\r\n}\r\n\r\n.service-carousel .owl-dots{\r\n\tmargin-top:50px;\r\n}\r\n\r\n.service-carousel .owl-dots .owl-dot{\r\n\tmargin-right:5px;\r\n}\r\n\r\n.service-carousel .owl-dots .owl-dot:last-child{\r\n\tmargin-right:0px;\r\n}\r\n\r\n.service-carousel .owl-dots .owl-dot span{\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tline-height: 12px;\r\n\tmargin:0;\r\n\ttransition:all 0.4s ease;\r\n}\r\n\r\n.service-carousel .owl-dots .owl-dot.active span {\r\n\tborder-color: transparent;\r\n\twidth: 30px;\r\n\theight: 12px;\r\n}\r\n\r\n.check {\r\n\tdisplay: block;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\tposition: absolute;\r\n}\r\n\r\n.checktoggle {\r\n    background-color: #e0001a;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-size: 0;\r\n    height: 24px;\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    width: 48px;\r\n}\r\n\r\n.checktoggle:after {\r\n\tcontent: ' ';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\ttransform: translate(5px, -50%);\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 50%;\r\n\ttransition: left 300ms ease, transform 300ms ease;\r\n}\r\n\r\n.check:checked + .checktoggle {\r\n\tbackground-color: #55ce63;\r\n}\r\n\r\n.check:checked + .checktoggle:after {\r\n\tleft: 100%;\r\n\ttransform: translate(calc(-100% - 5px), -50%);\r\n}\r\n\r\n.onoffswitch {\r\n\tmargin-left: auto;\r\n    position: relative;\r\n\twidth: 73px;\r\n    -webkit-user-select:none;\r\n\t-moz-user-select:none;\r\n\t-ms-user-select: none;\r\n}\r\n\r\n.onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n\r\n.onoffswitch-label {\r\n    display: block; \r\n\toverflow: hidden; \r\n\tcursor: pointer;\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.onoffswitch-inner {\r\n\tdisplay: block;\r\n    margin-left: -100%;\r\n    transition: margin 0.3s ease-in 0s;\r\n    width: 200%;\r\n}\r\n\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    display: block;\r\n    float: left;\r\n    font-size: 16px;\r\n    height: 30px;\r\n    line-height: 32px;\r\n    padding: 0;\r\n    width: 50%;\r\n}\r\n\r\n.onoffswitch-inner:before {\r\n\tbackground-color: #55ce63;\r\n    color: #fff;\r\n    content: \"ON\";\r\n    padding-left: 14px;\r\n}\r\n\r\n.onoffswitch-inner:after {\r\n    content: \"OFF\";\r\n    padding-right: 14px;\r\n    background-color: #ccc;\r\n    color: #fff;\r\n    text-align: right;\r\n}\r\n\r\n.onoffswitch-switch {\r\n    background: #fff;\r\n    border-radius: 20px;\r\n    bottom: 0;\r\n    display: block;\r\n\theight: 20px;\r\n    margin: 5px;\r\n    position: absolute;\r\n    right: 43px;\r\n    top: 0;\r\n    transition: all 0.3s ease-in 0s;\r\n    width: 20px;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px; \r\n}\r\n\r\n.noti-contents {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n    margin-left: 15px;\r\n    color: #a1a1a1;\r\n    justify-content: center;\r\n}\r\n\r\n#filter_inputs {\r\n\tdisplay: none;\r\n}\r\n\r\n.service-img {\r\n\twidth: 60px;\r\n}\r\n\r\n.content-textarea {\r\n\theight: 300px;\r\n}\r\n\r\n.fav-icon {\r\n\twidth: 32px;\r\n}\r\n\r\n.site-logo {\r\n\tmax-height: 32px;\r\n    width: auto;\r\n}\r\n\r\n.admin-noti-wrapper .noti-list {\r\n    padding: 7px 10px;\r\n    transition: 0.2s ease;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n}\r\n\r\n.admin-noti-wrapper .noti-list .noti-avatar {\r\n    left: auto;\r\n    height: 40px;\r\n    width: 40px;\r\n    position: absolute;\r\n}\r\n\r\n.admin-noti-wrapper .noti-list .noti-avatar img {\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.admin-noti-wrapper .noti-list .noti-contents {\r\n    margin-left: 50px;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.admin-noti-wrapper .noti-list .noti-contents h3 {\r\n\tcolor: #333;\r\n    font-size: 16px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n/*-----------------\r\n\t16. Responsive\r\n-----------------------*/\r\n\r\n@media only screen and (min-width: 992px) {\r\n\t.header.fixed-header #toggle_btn {\r\n\t\talign-items: center;\r\n\t\tcolor: #fff;\r\n\t\tdisplay: inline-flex;\r\n\t\tfloat: left;\r\n\t\tfont-size: 30px;\r\n\t\theight: 60px;\r\n\t\tmargin-left: 15px;\r\n\t\tjustify-content: center;\r\n\t\tpadding: 0 20px;\r\n\t}\r\n\t.mini-sidebar .header-left .logo img {\r\n\t\theight: auto;\r\n\t\tmax-height: 24px;\r\n\t\twidth: auto;\r\n\t}\r\n\t.mini-sidebar .header .header-left .logo {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.mini-sidebar .header-left .logo.logo-small {\r\n\t\tdisplay: block;\r\n\t}\r\n\t.mini-sidebar .header .header-left {\r\n\t\tpadding: 0 5px;\r\n\t\twidth: 90px;\r\n\t}\r\n\t.mini-sidebar .sidebar {\r\n\t\twidth: 90px;\r\n\t}\r\n\t.mini-sidebar.expand-menu .sidebar {\r\n\t\twidth: 280px;\r\n\t}\r\n\t.mini-sidebar .sidebar-menu {\r\n\t\tpadding: 15px 19px;\r\n\t}\r\n\t.mini-sidebar .menu-title {\r\n\t\tvisibility: hidden;\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\t.mini-sidebar.expand-menu .menu-title {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t.mini-sidebar .menu-title a {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t.mini-sidebar.expand-menu .menu-title a {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t.modal-open.mini-sidebar .sidebar {\r\n\t\tz-index: 1051;\r\n\t}\r\n\t.mini-sidebar .sidebar .sidebar-menu ul > li > a span {\r\n\t\tdisplay: none;\r\n\t\ttransition: all 0.2s ease-in-out;\r\n\t\topacity: 0;\r\n\t}\r\n\t.mini-sidebar.expand-menu .sidebar .sidebar-menu ul > li > a span {\r\n\t\tdisplay: inline;\r\n\t\topacity: 1;\r\n\t}\r\n\t.mini-sidebar .page-wrapper {\r\n\t\tmargin-left: 90px;\r\n\t}\r\n\t.mini-sidebar.expand-menu .page-wrapper {\r\n\t\tmargin-left: 280px;\r\n\t}\r\n\t.mini-sidebar .main-wrapper > .header {\r\n\t\tleft: 120px;\r\n\t}\r\n\t.mini-sidebar .header.fixed-header {\r\n\t\tleft: 90px;\r\n\t}\r\n\t.mini-sidebar .sidebar-menu > ul > li > a {\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 10px 16px;\r\n\t}\r\n\t.mini-sidebar.expand-menu .main-wrapper > .header {\r\n\t\tleft: 310px;\r\n\t}\r\n\t.mini-sidebar.expand-menu .main-wrapper > .header.fixed-header {\r\n\t\tleft: 280px;\r\n\t}\r\n\t.mini-sidebar  .main-wrapper app-header > .header {\r\n\t\tleft: 120px;\r\n\t}\r\n\t.mini-sidebar .main-wrapper app-header > .header.fixed-header {\r\n\t\tleft: 90px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 991.98px) {\r\n\t.header .header-left {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\tdisplay: block;\r\n\t}\r\n\t.mobile_btn {\r\n\t\tcolor: #333;\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex !important;\r\n\t\tfont-size: 26px;\r\n\t\theight: 60px;\r\n\t\tleft: 0;\r\n\t\tpadding: 0 15px;\r\n\t\tposition: absolute;\r\n\t\ttext-align: center;\r\n\t\ttop: 0;\r\n\t\tz-index: 10;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n\t#toggle_btn {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.header .header-left .logo {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.header-left .logo.logo-small {\r\n\t\tdisplay: block;\r\n\t}\r\n\t.header .header-left .logo img {\r\n\t\tmax-height: 36px;\r\n\t\theight: 36px;\r\n\t}\r\n\t.main-wrapper > .header {\r\n\t\tleft: 50px;\r\n\t}\r\n\t.main-wrapper > .header.fixed-header {\r\n\t\tleft: 0;\r\n\t}\r\n\t.main-wrapper {\r\n\t\tpadding: 20px;\r\n\t}\r\n\t.sidebar {\r\n\t\tmargin-left: -225px;\r\n\t\twidth: 225px;\r\n\t\ttransition: all 0.4s ease;\r\n\t\tz-index: 1041;\r\n\t}\r\n\t.page-wrapper {\r\n\t\tmargin-left: 0;\r\n\t\tpadding-left: 0;\r\n\t\tpadding-right: 0;\r\n\t\ttransition: all 0.4s ease;\r\n\t}\r\n\t.nav-tabs.menu-tabs .nav-item {\r\n\t\tpadding-right: 1.25rem;\r\n\t}\r\n\t.main-wrapper app-header > .header.fixed-header {\r\n\t\tleft: 0;\r\n\t\tright: 35px;\r\n    \ttop: 35px;\r\n\t}\r\n\t.main-wrapper app-header >  .header {\r\n\t\tleft: 50px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 767.98px) {\r\n\tbody {\r\n\t\tfont-size: 0.9375rem;\r\n\t}\r\n\th1, .h1 {\r\n\t\tfont-size: 2rem;\r\n\t}\r\n\th2, .h2 {\r\n\t\tfont-size: 1.75rem;\r\n\t}\r\n\th3, .h3 {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\th4, .h4 {\r\n\t\tfont-size: 1.125rem;\r\n\t}\r\n\th5, .h5 {\r\n\t\tfont-size: 1rem;\r\n\t}\r\n\th6, .h6 {\r\n\t\tfont-size: 0.875rem;\r\n\t}\r\n\t.header .has-arrow .dropdown-toggle:after {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.user-menu.nav > li > a > span:not(.user-img) {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-nav .open .dropdown-menu {\r\n\t\tfloat: left;\r\n\t\tposition: absolute;\r\n\t}\r\n\t.navbar-nav.user-menu .open .dropdown-menu {\r\n\t\tleft: auto;\r\n\t\tright: 0;\r\n\t}\r\n\t.header .header-left {\r\n\t\tpadding: 0 15px;\r\n\t}\r\n\t.header .header-left .logo {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.header-left .logo.logo-small {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.login-wrapper .loginbox {\r\n\t\tmax-width: 450px;\r\n\t\tmin-height: unset;\r\n\t}\r\n\t.error-box h1 {\r\n\t\tfont-size: 6em;\r\n\t}\r\n\t.error-box .btn {\r\n\t\tfont-size: 15px;\r\n\t\tmin-width: 150px;\r\n\t\tpadding: 8px 20px;\r\n\t}\r\n\t.dash-count {\r\n\t\tfont-size: 16px;\r\n\t}\r\n\t.nav-tabs.menu-tabs {\r\n\t\tmargin-top: -15px;\r\n\t}\t\r\n\t.nav-tabs.menu-tabs .nav-item {\r\n\t\tmargin-top: 20px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 575.98px) {\r\n\t.main-wrapper  app-header > .header {\r\n\t\tright: 35px;\r\n\t\ttop: 35px;\r\n\t\tleft: 35px;\r\n\t}\r\n\t.card {\r\n\t\tmargin-bottom: 0.9375rem;\r\n\t}\r\n\t.page-wrapper > .content {\r\n\t\tpadding: 0.9375rem 0.9375rem 0;\r\n\t}\r\n\t.card-body {\r\n\t\tpadding: 1.25rem;\r\n\t}\r\n\t.card-header {\r\n\t\tpadding: .75rem 1.25rem;\r\n\t}\r\n\t.card-footer {\r\n\t\tpadding: .75rem 1.25rem;\r\n\t}\r\n\t.page-header {\r\n\t\tmargin-bottom: 0.9375rem;\r\n\t}\r\n\t.loginbox {\r\n\t\tpadding: 1.25rem;\r\n\t}\r\n\t#mobile_btn {\r\n\t\talign-items: center;\r\n    \tdisplay: flex;\r\n\t}\r\n\r\n}\r\n\r\n/*@import './../../assets/admin/css/admin.css';*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiLCIuLi8uLi9hc3NldHMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7O0FBRXhELHFEQUFxRDs7QUNGckQ7Ozs7Q0FJQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBb0J5Qzs7QUFFekM7O3dCQUV3Qjs7QUFFeEI7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0RUFBcUY7QUFDdEY7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix5RkFBa0c7QUFDbkc7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixnRkFBeUY7QUFDMUY7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw2RkFBc0c7QUFDdkc7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0RUFBcUY7QUFDdEY7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix5RkFBa0c7QUFDbkc7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw4RUFBdUY7QUFDeEY7O0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiwyRkFBb0c7QUFDckc7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLHNDQUFzQztDQUN0QyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Ozs7OztDQU1DLHNDQUFzQztDQUN0QyxhQUFhO0FBQ2Q7O0FBQ0E7OztDQUdDLGFBQWE7Q0FDYixxQkFBcUI7QUFDdEI7O0FBQ0E7OztJQUdJLHlEQUF5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Z0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7Q0FDWDtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQyw4QkFBOEI7Q0FDL0I7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxtQkFBbUI7S0FDaEIsYUFBYTtDQUNqQjs7QUFFRDs7QUQ5NEZBLGdEQUFnRCIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0ICcuLy4uLy4uL2Fzc2V0cy9hZG1pbi9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnOyovXHJcblxyXG4vKkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7Ki9cclxuXHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxuLypAaW1wb3J0ICcuLy4uLy4uL2Fzc2V0cy9hZG1pbi9jc3MvYWRtaW4uY3NzJzsqL1xyXG5cclxuIiwiLypcclxuQXV0aG9yICAgICAgIDogRHJlYW1ndXlzXHJcblRlbXBsYXRlIE5hbWU6IFRydWVseXNlbGwgLSBCb290c3RyYXAgSHRtbCBUZW1wbGF0ZVxyXG5WZXJzaW9uICAgICAgOiAxLjBcclxuKi9cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gW1RhYmxlIG9mIENTU11cclxuXHJcbjEuIEdlbmVyYWxcclxuMi4gVGFibGVcclxuMy4gQm9vdHN0cmFwIENsYXNzZXNcclxuNC4gU2VsZWN0MlxyXG41LiBOYXYgVGFic1xyXG42LiBDb21wb25lbnRzXHJcbjcuIEF2YXRhclxyXG44LiBIZWFkZXJcclxuOS4gU2lkZWJhclxyXG4xMC4gQ29udGVudFxyXG4xMS4gVG9nZ2xlIEJ1dHRvblxyXG4xMi4gTG9naW5cclxuMTMuIE5vdGlmaWNhdGlvbnNcclxuMTQuIERhc2hib2FyZFxyXG4xNS4gUHJvZmlsZVxyXG4xNi4gUmVzcG9uc2l2ZVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MS4gR2VuZXJhbFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0NpcmN1bGFyU3RkJztcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRzcmM6IGxvY2FsKCdDaXJjdWxhciBTdGQgQm9vaycpLCB1cmwoJy4uL2ZvbnRzL0NpcmN1bGFyU3RkLUJvb2sud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHNyYzogbG9jYWwoJ0NpcmN1bGFyIFN0ZCBCb29rIEl0YWxpYycpLCB1cmwoJy4uL2ZvbnRzL0NpcmN1bGFyU3RkLUJvb2tJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHNyYzogbG9jYWwoJ0NpcmN1bGFyIFN0ZCBNZWRpdW0nKSwgdXJsKCcuLi9mb250cy9DaXJjdWxhclN0ZC1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHNyYzogbG9jYWwoJ0NpcmN1bGFyIFN0ZCBNZWRpdW0gSXRhbGljJyksIHVybCgnLi4vZm9udHMvQ2lyY3VsYXJTdGQtTWVkaXVtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0NpcmN1bGFyU3RkJztcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRzcmM6IGxvY2FsKCdDaXJjdWxhciBTdGQgQm9sZCcpLCB1cmwoJy4uL2ZvbnRzL0NpcmN1bGFyU3RkLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHNyYzogbG9jYWwoJ0NpcmN1bGFyIFN0ZCBCb2xkIEl0YWxpYycpLCB1cmwoJy4uL2ZvbnRzL0NpcmN1bGFyU3RkLUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdHNyYzogbG9jYWwoJ0NpcmN1bGFyIFN0ZCBCbGFjaycpLCB1cmwoJy4uL2ZvbnRzL0NpcmN1bGFyU3RkLUJsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0NpcmN1bGFyU3RkJztcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRzcmM6IGxvY2FsKCdDaXJjdWxhciBTdGQgQmxhY2sgSXRhbGljJyksIHVybCgnLi4vZm9udHMvQ2lyY3VsYXJTdGQtQmxhY2tJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcbmh0bWwge1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJTdGQnLCBzYW5zLXNlcmlmO1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcbn1cclxuYTpob3ZlcixcclxuYTphY3RpdmUsXHJcbmE6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2JiYjtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdG91dGxpbmU6IDAgbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1zbSB7XHJcblx0aGVpZ2h0OiBjYWxjKDEuNWVtICsgLjVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1sZyB7XHJcblx0aGVpZ2h0OiBjYWxjKDEuNWVtICsgMXJlbSArIDJweCk7XHJcbn1cclxuYSB7XHJcblx0Y29sb3I6ICMwMDljZTc7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuYSB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuaW5wdXQsIGlucHV0OmZvY3VzLFxyXG5idXR0b24sIGJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxufVxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXYgLm9wZW4gPiBhLFxyXG4ubmF2IC5vcGVuID4gYTpmb2N1cyxcclxuLm5hdiAub3BlbiA+IGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uZm9udC13ZWlnaHQtNjAwIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Mi4gVGFibGVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyogLnRhYmxlIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoMm4rMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuLnRhYmxlLm5vLWJvcmRlciA+IHRib2R5ID4gdHIgPiB0ZCxcclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxyXG4udGFibGUubm8tYm9yZGVyID4gdGZvb3QgPiB0ciA+IHRkLFxyXG4udGFibGUubm8tYm9yZGVyID4gdGZvb3QgPiB0ciA+IHRoLFxyXG4udGFibGUubm8tYm9yZGVyID4gdGhlYWQgPiB0ciA+IHRkLFxyXG4udGFibGUubm8tYm9yZGVyID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuXHRib3JkZXItdG9wOiAwO1xyXG5cdHBhZGRpbmc6IDEwcHggOHB4O1xyXG59XHJcbi50YWJsZS1ub3dyYXAgdGQsXHJcbi50YWJsZS1ub3dyYXAgdGgge1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXBcclxufSAqL1xyXG4vKiAudGFibGUuZGF0YVRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogLnRhYmxlIHRkIGEge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn0gKi9cclxuLyogdGFibGUudGFibGUgdGQgaDIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IGluaGVyaXQ7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGgyLnRhYmxlLWF2YXRhciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhIHtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBhOmhvdmVyIHtcclxuXHRjb2xvcjogI2ZmMDA4MDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBoMiBzcGFuIHtcclxuXHRjb2xvcjogIzg4ODtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ciB0aCB7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRib3JkZXI6IDA7XHJcbn0gKi9cclxuLyogLnRhYmxlIHRib2R5IHRyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4udGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGFibGUudGFibGUtY2VudGVyIHRkLFxyXG4udGFibGUudGFibGUtY2VudGVyIHRoIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxufVxyXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGQge1xyXG5cdGNvbG9yOiAjNDc0NjQ4O1xyXG59ICovXHJcbi8qIC50YWJsZS1zdHJpcGVkIHRoZWFkIHRyIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjQpO1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLCB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG5cdHBhZGRpbmc6Ljc1cmVtO1xyXG59ICovXHJcblxyXG4vKiAuYWRtaW5fZGFzaCAuZGF0YVRhYmxlc19sZW5ndGgge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRhdGFUYWJsZXNfZmlsdGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0gKi9cclxuLyogLmNhcmQtdGFibGUgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jYXJkLXRhYmxlIC5jYXJkLWJvZHkgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbn1cclxuLmNhcmQtdGFibGUgLmNhcmQtYm9keSAudGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQsXHJcbi5jYXJkLXRhYmxlIC5jYXJkLWJvZHkgLnRhYmxlIHRyIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcbi5jYXJkLXRhYmxlIC5jYXJkLWJvZHkgLnRhYmxlIHRyIHRkOmxhc3QtY2hpbGQsXHJcbi5jYXJkLXRhYmxlIC5jYXJkLWJvZHkgLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59XHJcbi5jYXJkLXRhYmxlIC50YWJsZSB0ZCwgLmNhcmQtdGFibGUgLnRhYmxlIHRoIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlNWU4O1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSBcclxuLmFjdGlvbnMgYSB7XHJcblx0d2lkdGg6IDg1cHg7XHJcbn1cclxuLmNhbC1pY29uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhbC1pY29uOmFmdGVyIHtcclxuXHRjb2xvcjogIzk3OTc5NztcclxuXHRjb250ZW50OiBcIlxcZjA3M1wiO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDMuIEJvb3RzdHJhcCBDbGFzc2VzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4uZm9jdXMsIC5idG46Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuLmJ0bi13aGl0ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG59XHJcbi5idG4uYnRuLXJvdW5kZWQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmJnLXByaW1hcnksXHJcbi5iYWRnZS1wcmltYXJ5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuYS5iZy1wcmltYXJ5OmZvY3VzLCBcclxuYS5iZy1wcmltYXJ5OmhvdmVyLCBcclxuYnV0dG9uLmJnLXByaW1hcnk6Zm9jdXMsIFxyXG5idXR0b24uYmctcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2U2MDA3MyAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1zdWNjZXNzLFxyXG4uYmFkZ2Utc3VjY2VzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI3YzI0YyAhaW1wb3J0YW50O1xyXG59XHJcbmEuYmctc3VjY2Vzczpmb2N1cywgXHJcbmEuYmctc3VjY2Vzczpob3ZlciwgXHJcbmJ1dHRvbi5iZy1zdWNjZXNzOmZvY3VzLCBcclxuYnV0dG9uLmJnLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzYWQ0NCAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1pbmZvLFxyXG4uYmFkZ2UtaW5mbyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYiAhaW1wb3J0YW50O1xyXG59XHJcbmEuYmctaW5mbzpmb2N1cywgXHJcbmEuYmctaW5mbzpob3ZlciwgXHJcbmJ1dHRvbi5iZy1pbmZvOmZvY3VzLCBcclxuYnV0dG9uLmJnLWluZm86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOGVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy13YXJuaW5nLFxyXG4uYmFkZ2Utd2FybmluZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYmMzNCAhaW1wb3J0YW50O1xyXG59XHJcbmEuYmctd2FybmluZzpmb2N1cywgXHJcbmEuYmctd2FybmluZzpob3ZlciwgXHJcbmJ1dHRvbi5iZy13YXJuaW5nOmZvY3VzLCBcclxuYnV0dG9uLmJnLXdhcm5pbmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YWIyZSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1kYW5nZXIsXHJcbi5iYWRnZS1kYW5nZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMDUwNTAgIWltcG9ydGFudDtcclxufVxyXG5hLmJnLWRhbmdlcjpmb2N1cywgXHJcbmEuYmctZGFuZ2VyOmhvdmVyLCBcclxuYnV0dG9uLmJnLWRhbmdlcjpmb2N1cywgXHJcbmJ1dHRvbi5iZy1kYW5nZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzkzOSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy13aGl0ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uYmctcHVycGxlLFxyXG4uYmFkZ2UtcHVycGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzY4ZTkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1wcmltYXJ5LFxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYS50ZXh0LXByaW1hcnkge1xyXG5cdGNvbG9yOiAjZmYwMDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtc3VjY2VzcyxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEudGV4dC1zdWNjZXNzIHtcclxuXHRjb2xvcjogIzIzYWQ0NCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWRhbmdlcixcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEudGV4dC1kYW5nZXIge1xyXG5cdGNvbG9yOiAjZjA1MDUwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtaW5mbyxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEudGV4dC1pbmZvIHtcclxuXHRjb2xvcjogIzAwOWVmYiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXdhcm5pbmcsXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhLnRleHQtd2FybmluZyB7XHJcblx0Y29sb3I6ICNmZmJjMzQgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1wdXJwbGUsXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhLnRleHQtcHVycGxlIHtcclxuXHRjb2xvcjogIzc0NjBlZSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjNzU3NTc1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZjAwODA7XHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeS5hY3RpdmUsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogICNlNjAwNzM7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgICNlNjAwNzM7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5LmZvY3VzOmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpob3ZlcixcclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5LmZvY3VzLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogICNlNjAwNzM7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgICNlNjAwNzM7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSxcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAgI2U2MDA3MztcclxuXHRib3JkZXItY29sb3I6ICAjZTYwMDczO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG4tcHJpbWFyeS5hY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlOmZvY3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLCBcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYwMDgwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnkuYWN0aXZlOmZvY3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLCBcclxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlOmZvY3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLCBcclxuLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI3YzI0YztcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjdjMjRjXHJcbn1cclxuLmJ0bi1zdWNjZXNzOmhvdmVyLFxyXG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tc3VjY2Vzcy5hY3RpdmUsXHJcbi5idG4tc3VjY2VzczphY3RpdmUsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2VzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIzYWQ0NDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMjNhZDQ0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG4tc3VjY2Vzcy5hY3RpdmUuZm9jdXMsXHJcbi5idG4tc3VjY2Vzcy5hY3RpdmU6Zm9jdXMsXHJcbi5idG4tc3VjY2Vzcy5hY3RpdmU6aG92ZXIsXHJcbi5idG4tc3VjY2Vzcy5mb2N1czphY3RpdmUsXHJcbi5idG4tc3VjY2VzczphY3RpdmU6Zm9jdXMsXHJcbi5idG4tc3VjY2VzczphY3RpdmU6aG92ZXIsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzcy5mb2N1cyxcclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzOmZvY3VzLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyM2FkNDQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzIzYWQ0NFxyXG59XHJcbi5idG4tc3VjY2Vzcy5hY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5idG4tc3VjY2VzczphY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIzYWQ0NDtcclxuXHRib3JkZXItY29sb3I6ICMyM2FkNDQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1zdWNjZXNzLmFjdGl2ZTpmb2N1czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSwgXHJcbi5idG4tc3VjY2VzczphY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5idG4tc3VjY2Vzcy5kaXNhYmxlZCwgLmJ0bi1zdWNjZXNzOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2MyNGM7XHJcbiAgICBib3JkZXItY29sb3I6ICMyN2MyNGM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLWluZm8ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWVmYlxyXG59XHJcbi5idG4taW5mbzpob3ZlcixcclxuLmJ0bi1pbmZvOmZvY3VzLFxyXG4uYnRuLWluZm8uYWN0aXZlLFxyXG4uYnRuLWluZm86YWN0aXZlLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjhlZTE7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAyOGVlMVxyXG59XHJcbi5idG4taW5mby5hY3RpdmUuZm9jdXMsXHJcbi5idG4taW5mby5hY3RpdmU6Zm9jdXMsXHJcbi5idG4taW5mby5hY3RpdmU6aG92ZXIsXHJcbi5idG4taW5mby5mb2N1czphY3RpdmUsXHJcbi5idG4taW5mbzphY3RpdmU6Zm9jdXMsXHJcbi5idG4taW5mbzphY3RpdmU6aG92ZXIsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mby5mb2N1cyxcclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZvOmZvY3VzLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm86aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjhlZTE7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAyOGVlMVxyXG59XHJcbi5idG4taW5mby5hY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5idG4taW5mbzphY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5zaG93ID4gLmJ0bi1pbmZvLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAyOGVlMTtcclxuXHRib3JkZXItY29sb3I6ICMwMjhlZTE7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1pbmZvLmFjdGl2ZTpmb2N1czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSwgXHJcbi5idG4taW5mbzphY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uc2hvdyA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5idG4taW5mby5kaXNhYmxlZCwgLmJ0bi1pbmZvOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLXdhcm5pbmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmJjMzQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmYmMzNFxyXG59XHJcbi5idG4td2FybmluZzpob3ZlcixcclxuLmJ0bi13YXJuaW5nOmZvY3VzLFxyXG4uYnRuLXdhcm5pbmcuYWN0aXZlLFxyXG4uYnRuLXdhcm5pbmc6YWN0aXZlLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWFiMmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U5YWIyZVxyXG59XHJcbi5idG4td2FybmluZy5hY3RpdmUuZm9jdXMsXHJcbi5idG4td2FybmluZy5hY3RpdmU6Zm9jdXMsXHJcbi5idG4td2FybmluZy5hY3RpdmU6aG92ZXIsXHJcbi5idG4td2FybmluZy5mb2N1czphY3RpdmUsXHJcbi5idG4td2FybmluZzphY3RpdmU6Zm9jdXMsXHJcbi5idG4td2FybmluZzphY3RpdmU6aG92ZXIsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZy5mb2N1cyxcclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5nOmZvY3VzLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmc6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWFiMmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U5YWIyZVxyXG59XHJcbi5idG4td2FybmluZy5hY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5idG4td2FybmluZzphY3RpdmU6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksXHJcbi5zaG93ID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U5YWIyZTtcclxuXHRib3JkZXItY29sb3I6ICNlOWFiMmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi13YXJuaW5nLmFjdGl2ZTpmb2N1czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSwgXHJcbi5idG4td2FybmluZzphY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uc2hvdyA+IC5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5idG4td2FybmluZy5kaXNhYmxlZCwgLmJ0bi13YXJuaW5nOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJjMzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmJjMzQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLWRhbmdlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YwNTA1MDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjA1MDUwO1xyXG59XHJcbi5idG4tZGFuZ2VyOmhvdmVyLFxyXG4uYnRuLWRhbmdlcjpmb2N1cyxcclxuLmJ0bi1kYW5nZXIuYWN0aXZlLFxyXG4uYnRuLWRhbmdlcjphY3RpdmUsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzOTM5O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZTM5Mzk7XHJcbn1cclxuLmJ0bi1kYW5nZXIuYWN0aXZlLmZvY3VzLFxyXG4uYnRuLWRhbmdlci5hY3RpdmU6Zm9jdXMsXHJcbi5idG4tZGFuZ2VyLmFjdGl2ZTpob3ZlcixcclxuLmJ0bi1kYW5nZXIuZm9jdXM6YWN0aXZlLFxyXG4uYnRuLWRhbmdlcjphY3RpdmU6Zm9jdXMsXHJcbi5idG4tZGFuZ2VyOmFjdGl2ZTpob3ZlcixcclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYW5nZXIuZm9jdXMsXHJcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyOmZvY3VzLFxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlMzkzOTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWUzOTM5O1xyXG59XHJcbi5idG4tZGFuZ2VyLmFjdGl2ZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSxcclxuLmJ0bi1kYW5nZXI6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLFxyXG4uc2hvdyA+IC5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlMzkzOTtcclxuXHRib3JkZXItY29sb3I6ICNlZTM5Mzk7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1kYW5nZXIuYWN0aXZlOmZvY3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLCBcclxuLmJ0bi1kYW5nZXI6YWN0aXZlOmZvY3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLCBcclxuLnNob3cgPiAuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5idG4tZGFuZ2VyLmRpc2FibGVkLCAuYnRuLWRhbmdlcjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYyZDUxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjYyZDUxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi1saWdodC5hY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uYnRuLWxpZ2h0OmFjdGl2ZTpmb2N1czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSwgXHJcbi5zaG93ID4gLmJ0bi1saWdodC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuLmJ0bi1kYXJrLmFjdGl2ZTpmb2N1czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSwgXHJcbi5idG4tZGFyazphY3RpdmU6Zm9jdXM6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCksIFxyXG4uc2hvdyA+IC5idG4tZGFyay5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmMDA4MDtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4MDtcclxuXHRib3JkZXItY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6Zm9jdXMsIFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5mb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZCwgXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkIHtcclxuXHRjb2xvcjogI2ZmMDA4MDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmMDA4MDtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuXHRjb2xvcjogIzI3YzI0YztcclxuXHRib3JkZXItY29sb3I6ICMyN2MyNGM7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyN2MyNGM7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMjdjMjRjO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmZvY3VzLCAuYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG5cdGNvbG9yOiAjMjdjMjRjO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyN2MyNGM7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMjdjMjRjO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG5cdGNvbG9yOiAjMDA5ZWZiO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwOWVmYjtcclxufVxyXG4uYnRuLW91dGxpbmUtaW5mbzpob3ZlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLWluZm86Zm9jdXMsIC5idG4tb3V0bGluZS1pbmZvLmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG4tb3V0bGluZS1pbmZvLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtaW5mbzpkaXNhYmxlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICMwMDllZmI7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCBcclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWVmYjtcclxuXHRib3JkZXItY29sb3I6ICMwMDllZmI7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCBcclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLW91dGxpbmUtd2FybmluZyB7XHJcblx0Y29sb3I6ICNmZmJjMzQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmZiYzM0O1xyXG59XHJcbi5idG4tb3V0bGluZS13YXJuaW5nOmhvdmVyIHtcclxuXHRjb2xvcjogIzIxMjUyOTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYzM0O1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmYmMzNDtcclxufVxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpmb2N1cywgLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZGlzYWJsZWQsIC5idG4tb3V0bGluZS13YXJuaW5nOmRpc2FibGVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogI2ZmYmMzNDtcclxufVxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIFxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRjb2xvcjogIzIxMjUyOTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYzM0O1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmYmMzNDtcclxufVxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIFxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG5cdGNvbG9yOiAjZjA1MDUwO1xyXG5cdGJvcmRlci1jb2xvcjogI2YwNTA1MDtcclxufVxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDUwO1xyXG5cdGJvcmRlci1jb2xvcjogI2YwNTA1MDtcclxufVxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmZvY3VzLCAuYnRuLW91dGxpbmUtZGFuZ2VyLmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG4tb3V0bGluZS1kYW5nZXIuZGlzYWJsZWQsIC5idG4tb3V0bGluZS1kYW5nZXI6ZGlzYWJsZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjZjA1MDUwO1xyXG59XHJcbi5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCBcclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMDUwNTA7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZjA1MDUwO1xyXG59XHJcbi5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCBcclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0IHtcclxuICAgIGNvbG9yOiAjYWJhYmFiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcbi5idG4tb3V0bGluZS1saWdodC5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWxpZ2h0OmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAjYWJhYmFiO1xyXG59XHJcbi8qIC5kYXRhVGFibGVzX3BhZ2luYXRlLnBhZ2luZ19zaW1wbGVfbnVtYmVycyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U1ZThlYjtcclxuXHRib3JkZXItcmFkaXVzOi4yNXJlbTtcclxuXHRwYWRkaW5nLXRvcDowO1xyXG59ICovXHJcbi8qIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbi5jdXJyZW50LCAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b24uY3VycmVudDpob3ZlciB7XHJcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwODA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG5cdGJhY2tncm91bmQ6I2ZmMDA4MDtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuM2VtIC43ZW07XHJcbn0gKi9cclxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSwgXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6Zm9jdXMsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6aG92ZXIsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW4sXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW46Zm9jdXMsXHJcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW46aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5wYWdpbmF0aW9uID4gbGkgPiBhLCBcclxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW4ge1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5wYWdlLWxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5wYWdlLWxpbms6Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XHJcblx0Ym94LXNoYWRvdzogaW5oZXJpdDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xyXG5cdGJvcmRlcjogMDtcclxuXHRib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uc2V0dGluZ3MtdGFiIC5uYXYgLm5hdi1saW5rIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG59XHJcbi5zZXR0aW5ncy10YWIgLm5hdiAubmF2LWxpbms6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcblx0Y29sb3I6ICMzMzM7XHJcbn1cclxuLnNldHRpbmdzLXRhYiAubmF2IC5uYXYtbGluay5hY3RpdmUsIC5zZXR0aW5ncy10YWIgLm5hdiAuc2hvdyA+IC5uYXYtbGluayB7XHJcblx0YmFja2dyb3VuZDogI2ZmMDA4MDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxuXHRwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxufVxyXG4uY2FyZC1mb290ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XHJcblx0cGFkZGluZzogMXJlbSAxLjVyZW07XHJcbn1cclxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKC4yNXJlbSAtIDFweCkgY2FsYyguMjVyZW0gLSAxcHgpIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1sZWZ0IHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1mb290ZXIudGV4dC1jZW50ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWxpZ2h0IHtcclxuXHRib3JkZXItY29sb3I6ICNlNmU2ZTY7XHJcblx0Y29sb3I6ICNhNmE2YTY7XHJcbn1cclxuLmJvb3RzdHJhcC1kYXRldGltZXBpY2tlci13aWRnZXQgdGFibGUgdGQuYWN0aXZlLCAuYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLXdpZGdldCB0YWJsZSB0ZC5hY3RpdmU6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcblx0dGV4dC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXItd2lkZ2V0IHRhYmxlIHRkLnRvZGF5OmJlZm9yZXtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiNmZjAwODA7XHJcbn1cclxuLmJnLWluZm8tbGlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIsIDE4MiwgMTc5LDAuMTIpICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IzFkYjlhYSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1wcmltYXJ5LWxpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgxNywgMTQ4LCAyNDcsMC4xMikgIWltcG9ydGFudDtcclxuXHRjb2xvcjojMjE5NmYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLWRhbmdlci1saWdodHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLCAxNywgNTQsMC4xMikgIWltcG9ydGFudDtcclxuXHRjb2xvcjojZTYzYzNjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXdhcm5pbmctbGlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMTUyLCAwLDAuMTIpICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6I2YzOWMxMiAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1zdWNjZXNzLWxpZ2h0e1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgxNSwgMTgzLCAxMDcsMC4xMikgIWltcG9ydGFudDtcclxuXHRjb2xvcjojMjZhZjQ4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXB1cnBsZS1saWdodHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LCAxMjgsIDI1NSwwLjEyKSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiNjNTgwZmYgIWltcG9ydGFudDtcclxufVxyXG4uYmctZGVmYXVsdC1saWdodHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDAsIDUyLCA3MSwwLjEyKSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiMyODM0NDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDQuIFNlbGVjdDJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdGhlaWdodDogNDBweDtcclxufVxyXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XHJcblx0aGVpZ2h0OiAzOHB4O1xyXG5cdHJpZ2h0OiA3cHg7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYiB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGRkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiA2cHggNnB4IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTEwcHg7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0d2lkdGg6IDA7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYiB7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZGRkO1xyXG5cdGJvcmRlci13aWR0aDogMCA2cHggNnB4O1xyXG59XHJcbi5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWRbYXJpYS1zZWxlY3RlZF0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0bWluLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDUuIE5hdiBUYWJzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5uYXYtdGFicyB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbn1cclxuLmNhcmQtaGVhZGVyLXRhYnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG4ubmF2LXRhYnMgPiBsaSA+IGEge1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxuXHRjb2xvcjogIzg4ODtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5uYXYtdGFicyA+IGxpID4gYTpob3ZlcixcclxuLm5hdi10YWJzID4gbGkgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG59XHJcbi5uYXYtdGFicy5uYXYtdGFicy1zb2xpZCA+IGxpID4gYSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkID4gLmFjdGl2ZSA+IGEsXHJcbi5uYXYtdGFicy5uYXYtdGFicy1zb2xpZCA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4MDtcclxuXHRib3JkZXItY29sb3I6ICNmZjAwODA7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLnRhYi1jb250ZW50IHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbms6Zm9jdXMsIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICMzMzM7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IGxpID4gYTpob3ZlcixcclxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQubmF2LXRhYnMtc29saWQgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkID4gbGkgPiBhIHtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSA+IGEuYWN0aXZlLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSA+IGEuYWN0aXZlOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSA+IGEuYWN0aXZlOmZvY3VzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmMDA4MDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQubmF2LXRhYnMtcm91bmRlZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQubmF2LXRhYnMtcm91bmRlZCA+IGxpID4gYSB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQubmF2LXRhYnMtcm91bmRlZCA+IGxpID4gYS5hY3RpdmUsXHJcbi5uYXYtdGFicy5uYXYtdGFicy1zb2xpZC5uYXYtdGFicy1yb3VuZGVkID4gbGkgPiBhLmFjdGl2ZTpob3ZlcixcclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkLm5hdi10YWJzLXJvdW5kZWQgPiBsaSA+IGEuYWN0aXZlOmZvY3VzIHtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5uYXYtdGFicy1qdXN0aWZpZWQgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubmF2LXRhYnMtanVzdGlmaWVkID4gbGkgPiBhOmhvdmVyLFxyXG4ubmF2LXRhYnMtanVzdGlmaWVkID4gbGkgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5uYXYtdGFicy1qdXN0aWZpZWQubmF2LXRhYnMtc29saWQgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQubmF2LXRhYnMtdG9wIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZC5uYXYtdGFicy10b3AgPiBsaSA+IGEsXHJcbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkLm5hdi10YWJzLXRvcCA+IGxpID4gYTpob3ZlcixcclxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQubmF2LXRhYnMtdG9wID4gbGkgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItd2lkdGg6IDJweCAwIDAgMDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtdG9wID4gbGkge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXRvcCA+IGxpID4gYSxcclxuLm5hdi10YWJzLm5hdi10YWJzLXRvcCA+IGxpID4gYTpob3ZlcixcclxuLm5hdi10YWJzLm5hdi10YWJzLXRvcCA+IGxpID4gYTpmb2N1cyB7XHJcblx0Ym9yZGVyLXdpZHRoOiAycHggMCAwIDA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXRvcCA+IGxpLm9wZW4gPiBhLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtdG9wID4gbGkgPiBhOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtdG9wID4gbGkgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5uYXYtdGFicy5uYXYtdGFicy10b3AgPiBsaStsaSA+IGEge1xyXG5cdG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXRvcCA+IGxpID4gYS5hY3RpdmUsXHJcbi5uYXYtdGFicy5uYXYtdGFicy10b3AgPiBsaSA+IGEuYWN0aXZlOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtdG9wID4gbGkgPiBhLmFjdGl2ZTpmb2N1cyB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmMDA4MDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtYm90dG9tID4gbGkge1xyXG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XHJcblx0Zm9udC13ZWlnaHQ6NzAwO1xyXG59XHJcbi5uYXYtdGFicy5uYXYtdGFicy1ib3R0b20gPiBsaSA+IGEuYWN0aXZlLCBcclxuLm5hdi10YWJzLm5hdi10YWJzLWJvdHRvbSA+IGxpID4gYS5hY3RpdmU6aG92ZXIsIFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtYm90dG9tID4gbGkgPiBhLmFjdGl2ZTpmb2N1cyB7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmMDA4MDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7IFxyXG5cdC1tb3otdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzOyBcclxuXHQtby10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7IFxyXG5cdC1tcy10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7IFxyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xyXG5cdGNvbG9yOiNmZjAwODA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG5cdGJvcmRlcjogMDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSA+IGEge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkID4gbGkgPiBhOmhvdmVyLFxyXG4ubmF2LXRhYnMubmF2LXRhYnMtc29saWQgPiBsaSA+IGE6Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkID4gLm9wZW46bm90KC5hY3RpdmUpID4gYSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXYtdGFicy1qdXN0aWZpZWQubmF2LXRhYnMtdG9wIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4ubmF2LXRhYnMtanVzdGlmaWVkLm5hdi10YWJzLXRvcCA+IGxpID4gYSxcclxuLm5hdi10YWJzLWp1c3RpZmllZC5uYXYtdGFicy10b3AgPiBsaSA+IGE6aG92ZXIsXHJcbi5uYXYtdGFicy1qdXN0aWZpZWQubmF2LXRhYnMtdG9wID4gbGkgPiBhOmZvY3VzIHtcclxuXHRib3JkZXItd2lkdGg6IDJweCAwIDAgMDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDYuIENvbXBvbmVudHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnByb2dyZXNzLXhzIHtcclxuXHRoZWlnaHQ6IDRweDtcclxufVxyXG4ucHJvZ3Jlc3Mtc20ge1xyXG5cdGhlaWdodDogMTVweDtcclxufVxyXG4ucHJvZ3Jlc3MucHJvZ3Jlc3Mtc20ge1xyXG5cdGhlaWdodDogNnB4O1xyXG59XHJcbi5wcm9ncmVzcy5wcm9ncmVzcy1tZCB7XHJcblx0aGVpZ2h0OiA4cHg7XHJcbn1cclxuLnByb2dyZXNzLnByb2dyZXNzLWxnIHtcclxuXHRoZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnJvdy5yb3ctc20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcHg7XHJcbn1cclxuLnJvdy5yb3ctc20gPiBkaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQ3LiBBdmF0YXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmF2YXRhciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogM3JlbTtcclxuXHRoZWlnaHQ6IDNyZW1cclxufVxyXG4uYXZhdGFyID4gaW1nIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0LW8tb2JqZWN0LWZpdDogY292ZXI7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmF2YXRhci10aXRsZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hdmF0YXItYXdheTpiZWZvcmUsXHJcbi5hdmF0YXItb2ZmbGluZTpiZWZvcmUsXHJcbi5hdmF0YXItb25saW5lOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogMjUlO1xyXG5cdGhlaWdodDogMjUlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb250ZW50OiAnJztcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5hdmF0YXItb25saW5lOmJlZm9yZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI3YzI0YztcclxufVxyXG4uYXZhdGFyLW9mZmxpbmU6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDUwO1xyXG59XHJcbi5hdmF0YXItYXdheTpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmJjMzQ7XHJcbn1cclxuLmF2YXRhciAuYm9yZGVyIHtcclxuXHRib3JkZXItd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdmF0YXIgLnJvdW5kZWQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdmF0YXIgLmF2YXRhci10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5hdmF0YXIteHMge1xyXG5cdHdpZHRoOiAxLjY1cmVtO1xyXG5cdGhlaWdodDogMS42NXJlbTtcclxufVxyXG4uYXZhdGFyLXhzIC5ib3JkZXIge1xyXG5cdGJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhci14cyAucm91bmRlZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhci14cyAuYXZhdGFyLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmF2YXRhci14cy5hdmF0YXItYXdheTpiZWZvcmUsXHJcbi5hdmF0YXIteHMuYXZhdGFyLW9mZmxpbmU6YmVmb3JlLFxyXG4uYXZhdGFyLXhzLmF2YXRhci1vbmxpbmU6YmVmb3JlIHtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG4uYXZhdGFyLXNtIHtcclxuXHR3aWR0aDogMi41cmVtO1xyXG5cdGhlaWdodDogMi41cmVtO1xyXG59XHJcbi5hdmF0YXItc20gLmJvcmRlciB7XHJcblx0Ym9yZGVyLXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFyLXNtIC5yb3VuZGVkIHtcclxuXHRib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFyLXNtIC5hdmF0YXItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYXZhdGFyLXNtLmF2YXRhci1hd2F5OmJlZm9yZSxcclxuLmF2YXRhci1zbS5hdmF0YXItb2ZmbGluZTpiZWZvcmUsXHJcbi5hdmF0YXItc20uYXZhdGFyLW9ubGluZTpiZWZvcmUge1xyXG5cdGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0OC4gSGVhZGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6ICMzYjNiM2I7XHJcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGxlZnQ6IDA7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlIDBzO1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcbi5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDI4MHB4O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uaGVhZGVyIC5oZWFkZXItbGVmdCAubG9nbyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5oZWFkZXIgLmhlYWRlci1sZWZ0IC5sb2dvIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmhlYWRlci1sZWZ0IC5sb2dvLmxvZ28tc21hbGwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaGVhZGVyIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlciAuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oZWFkZXIgLmhhcy1hcnJvdyAuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcclxuXHRib3JkZXItdG9wOiAwO1xyXG5cdGJvcmRlci1sZWZ0OiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XHJcblx0Y29udGVudDogJyc7XHJcblx0aGVpZ2h0OiA4cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNjYlIDY2JTtcclxuXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogNjYlIDY2JTtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiA2NiUgNjYlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuXHR3aWR0aDogOHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiAycHg7XHJcbn1cclxuLmhlYWRlciAuaGFzLWFycm93IC5kcm9wZG93bi10b2dnbGVbYXJpYS1leHBhbmRlZD1cInRydWVcIl06YWZ0ZXIge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG59XHJcbi51c2VyLW1lbnUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi51c2VyLW1lbnUubmF2ID4gbGkgPiBhIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogMCAxNXB4O1xyXG59XHJcbi51c2VyLW1lbnUubmF2ID4gbGkgPiBhOmhvdmVyLFxyXG4udXNlci1tZW51Lm5hdiA+IGxpID4gYTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnVzZXItbWVudS5uYXYgPiBsaSA+IGE6aG92ZXIgaSxcclxuLnVzZXItbWVudS5uYXYgPiBsaSA+IGE6Zm9jdXMgaSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcbn1cclxuLnVzZXItaW1nIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi51c2VyLWltZyBpbWcge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHQtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4udXNlci1tZW51Lm5hdiA+IGxpID4gYS5tb2JpbGVfYnRuIHtcclxuXHRib3JkZXI6IDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGN1cnNvcjogcG9pbnRlclxyXG59XHJcbi51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGxlZnQ6IC0yMHB4IWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd24tbWVudS5ub3RpZmljYXRpb25zLmNvbGxhcHNlLnNob3csIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtcmlnaHQuY29sbGFwc2Uuc2hvdyB7XHJcblx0cmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XHJcbn1cclxuLnVzZXItbWVudSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcbi51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLmhlYWRlciAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyxcclxuLmhlYWRlciAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4MDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4uaGVhZGVyIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIGksXHJcbi5oZWFkZXIgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIgaSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmhlYWRlciAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XHJcblx0cGFkZGluZzogMTBweCAxOHB4O1xyXG59XHJcbi5oZWFkZXIgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEgaSB7XHJcblx0Y29sb3I6ICNmZjAwODA7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxufVxyXG4uaGVhZGVyIC51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEgaSB7XHJcblx0Y29sb3I6ICNmZjAwODA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRtaW4td2lkdGg6IDE4cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXIgLnVzZXItbWVudSAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyBpLFxyXG4uaGVhZGVyIC51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIgaSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLm1vYmlsZV9idG4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNsaWRlLW5hdiAuc2lkZWJhciB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnVzZXItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcbi51c2VyLWhlYWRlciAudXNlci10ZXh0IHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udXNlci1oZWFkZXIgLnVzZXItdGV4dCBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLm1lbnUtdGl0bGUge1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG4uc2lkZWJhci1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG4uc2lkZWJhci1vdmVybGF5Lm9wZW5lZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5odG1sLm1lbnUtb3BlbmVkIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmh0bWwubWVudS1vcGVuZWQgYm9keSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDkuIFNpZGViYXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG59XHJcbi5zaWRlYmFyLm9wZW5lZCB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLWlubmVyIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWluLWhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uc2lkZWJhci1tZW51IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnNpZGViYXItbWVudSB1bCB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLnNpZGViYXItbWVudSA+IHVsID4gbGkgPiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uc2lkZWJhci1tZW51ID4gdWwgPiBsaS5hY3RpdmUgPiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZTYwMDczO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaS5hY3RpdmUgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm1lbnUtdGl0bGUge1xyXG4gICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubWVudS10aXRsZSA+IGkge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpLm1lbnUtdGl0bGUgYSB7XHJcbiAgICBjb2xvcjogI2ZmOWI0NDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpLm1lbnUtdGl0bGUgYS5idG4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEuYWN0aXZlIHtcclxuXHRjb2xvcjogI2ZmMDA4MDtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubW9iaWxlX2J0biB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4uc2lkZWJhciAuc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEgc3BhbiB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLnNpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIHNwYW4uY2hhdC11c2VyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSBzcGFuLmJhZGdlIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTBweCA3cHggNDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgdWwgYSB7XHJcblx0cGFkZGluZy1sZWZ0OiA2NXB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgdWwgdWwgdWwgYSB7XHJcblx0cGFkZGluZy1sZWZ0OiA4NXB4O1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2lkZWJhci1tZW51ID4gdWwgPiBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cztcclxuXHQtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4xNXM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXM7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxNXB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHR0b3A6IDExcHg7XHJcbn1cclxuLnNpZGViYXItbWVudSAubWVudS1hcnJvdzpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbn1cclxuLnNpZGViYXItbWVudSBsaSBhLnN1YmRyb3AgLm1lbnUtYXJyb3cge1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4uc2lkZWJhci1tZW51IHVsIHVsIGEgLm1lbnUtYXJyb3cge1xyXG5cdHRvcDogMTBweDtcclxufVxyXG4uc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuLnNpZGViYXItbWVudSB1bCBsaSBhIGkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5zaWRlYmFyLW1lbnUgdWwgbGkubWVudS10aXRsZSBhIGkge1xyXG5cdGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR3aWR0aDogYXV0bztcclxufVxyXG4uc2lkZWJhci1tZW51IGxpIGEgPiAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQxMC4gQ29udGVudFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5wYWdlLXdyYXBwZXIge1xyXG5cdG1hcmdpbi1sZWZ0OiAyODBweDtcclxuXHRwYWRkaW5nLXRvcDogNjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4ucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDEuODc1cmVtIDEuODc1cmVtIDA7XHJcbn1cclxuLnBhZ2UtaGVhZGVyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG4ucGFnZS1oZWFkZXIgLmJyZWFkY3J1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucGFnZS1oZWFkZXIgLmJyZWFkY3J1bWIgYSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQxMS4gVG9nZ2xlIEJ1dHRvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY2hlY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNoZWNrdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDAwMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuLmNoZWNrdG9nZ2xlOmFmdGVyIHtcclxuXHRjb250ZW50OiAnICc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNTAlKTtcclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0dHJhbnNpdGlvbjogbGVmdCAzMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG4uY2hlY2s6Y2hlY2tlZCArIC5jaGVja3RvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1Y2U2MztcclxufVxyXG4uY2hlY2s6Y2hlY2tlZCArIC5jaGVja3RvZ2dsZTphZnRlciB7XHJcblx0bGVmdDogMTAwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gNXB4KSwgLTUwJSk7XHJcbn1cclxuLm9ub2Zmc3dpdGNoIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNzNweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0Om5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcblx0b3ZlcmZsb3c6IGhpZGRlbjsgXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ub25vZmZzd2l0Y2gtaW5uZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcclxuICAgIHdpZHRoOiAyMDAlO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUsIC5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ub25vZmZzd2l0Y2gtaW5uZXI6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjZTYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjb250ZW50OiBcIk9OXCI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiT0ZGXCI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLXN3aXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQzcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94OmNoZWNrZWQgKyAub25vZmZzd2l0Y2gtbGFiZWwgLm9ub2Zmc3dpdGNoLWlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkICsgLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xyXG4gICAgcmlnaHQ6IDBweDsgXHJcbn1cclxuLmN1c3RvbS1tb2RhbCAubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MTIuIExvZ2luXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5sb2dpbmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSg1NSwgNzMsIDcyLCAwLjAyKTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hY2NvdW50LWxvZ28gaW1nIHtcclxuXHRtYXgtaGVpZ2h0OiA4MHB4O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblx0MTMuIE5vdGlmaWNhdGlvbnNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm5vdGlmaWNhdGlvbnMge1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbi10aW1lIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMzU7XHJcblx0Y29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMgLm1lZGlhIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG59XHJcbi5ub3RpZmljYXRpb25zIC5tZWRpYTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5ub3RpZmljYXRpb25zIC5tZWRpYSBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5ub3RpZmljYXRpb25zIC5tZWRpYSBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbi5ub3RpZmljYXRpb25zIC5tZWRpYSA+IC5hdmF0YXIge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubm90aWZpY2F0aW9ucyAubWVkaWEtbGlzdCAubWVkaWEtbGVmdCB7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi50b3BuYXYtZHJvcGRvd24taGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRvcG5hdi1kcm9wZG93bi1oZWFkZXIsIFxyXG4udG9wbmF2LWRyb3Bkb3duLWZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnRvcG5hdi1kcm9wZG93bi1mb290ZXIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi50b3BuYXYtZHJvcGRvd24tZm9vdGVyIGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG4udXNlci1tZW51Lm5hdiA+IGxpID4gYSAuYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0M2YzZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICB0b3A6IDE5cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHRtaW4taGVpZ2h0OnVuc2V0O1xyXG5cdG1pbi13aWR0aDp1bnNldDtcclxufVxyXG4udXNlci1tZW51Lm5hdiA+IGxpID4gYSA+IGkge1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGNvbG9yOiMzMzM7XHJcbn1cclxuLm5vdGktZGV0YWlscyB7XHJcblx0Y29sb3I6ICM5ODljOWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5ub3RpLXRpdGxlIHtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG4ubm90aWZpY2F0aW9ucyAubm90aS1jb250ZW50IHtcclxuXHRoZWlnaHQ6IDI5MHB4O1xyXG5cdHdpZHRoOiAzNTBweDtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubm90aWZpY2F0aW9uLWxpc3Qge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMgdWwubm90aWZpY2F0aW9uLWxpc3QgPiBsaXtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG59XHJcbi5ub3RpZmljYXRpb25zIHVsLm5vdGlmaWNhdGlvbi1saXN0ID4gbGk6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubm90aWZpY2F0aW9ucyB1bC5ub3RpZmljYXRpb24tbGlzdCA+IGxpIGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbnMgdWwubm90aWZpY2F0aW9uLWxpc3QgPiBsaSBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbi5ub3RpZmljYXRpb25zIHVsLm5vdGlmaWNhdGlvbi1saXN0ID4gbGkgLmxpc3QtaXRlbSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50b3BuYXYtZHJvcGRvd24taGVhZGVyIC5ub3RpZmljYXRpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50b3BuYXYtZHJvcGRvd24taGVhZGVyIC5jbGVhci1ub3RpIHtcclxuICAgIGNvbG9yOiAjZjgzZjM3O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubm90aS10aW1lIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDE0LiBEYXNoYm9hcmRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmRhc2gtd2lkZ2V0LWljb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHRtaW4td2lkdGg6ODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLmRhc2gtY291bnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmRhc2gtd2lkZ2V0LWluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZGFzaC13aWRnZXQtaW5mbyBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5kYXNoLXdpZGdldC1pbmZvIGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmRhc2gtd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc3VibWl0LXNlY3Rpb24ge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDE1LiBQcm9maWxlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5wcm9maWxlLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAwLjkzNzVyZW0gMS41cmVtO1xyXG59XHJcbi5wcm9maWxlLW1lbnUgLm5hdi10YWJzLm5hdi10YWJzLXNvbGlkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY2FsLWljb24ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uY2FsLWljb246YWZ0ZXIge1xyXG5cdGNvbG9yOiAjOTc5Nzk3O1xyXG5cdGNvbnRlbnQ6IFwiXFxmMDczXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLm1haW4td3JhcHBlciBhcHAtaGVhZGVyID4gLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDU1LCA3MywgNzIsIDAuMDIpO1xyXG4gICAgbGVmdDogMzEwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBhZ2Utd3JhcHBlciB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdHBhZGRpbmctdG9wOiA5MHB4O1xyXG5cdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxufVxyXG4ubWFpbi13cmFwcGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoNTUsIDczLCA3MiwgMC4wMik7XHJcbn1cclxuLm1haW4td3JhcHBlciBhcHAtaGVhZGVyID4gLmhlYWRlci5maXhlZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2UgMHM7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcbn1cclxuLnNpZGViYXItbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2lkZWJhci1sb2dvIGltZyB7XHJcblx0bWF4LWhlaWdodDogNDZweDtcclxuXHR3aWR0aDogYXV0bztcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctc2VsZWN0ZWQgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4MDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmMDA4MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1zZWxlY3RlZCAucHJpY2luZy1oZWFkZXIgaDIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnByaWNpbmctYm94IC5wcmljaW5nLXNlbGVjdGVkIC5wcmljaW5nLWhlYWRlciBwIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctc2VsZWN0ZWQgLnByaWNpbmctY2FyZC1wcmljZSAuaGVhZGluZzIge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1zZWxlY3RlZCAucHJpY2luZy1jYXJkLXByaWNlIHAge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1zZWxlY3RlZCAuYnRuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1zZWxlY3RlZCAucHJpY2luZy1vcHRpb25zIGxpIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctaGVhZGVyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1oZWFkZXIgaDIge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctaGVhZGVyIHAge1xyXG5cdGNvbG9yOiAjOWI5YjliO1xyXG5cdGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS40MztcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctY2FyZC1wcmljZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMS41NjNyZW07XHJcbn1cclxuLnByaWNpbmctYm94IC5wcmljaW5nLWNhcmQtcHJpY2UgLmhlYWRpbmcyIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnByaWNpbmctYm94IC5wcmljaW5nLWNhcmQtcHJpY2UgcCB7XHJcblx0Y29sb3I6ICM5YjliOWI7XHJcbn1cclxuLnByaWNpbmctYm94IC5wcmljaW5nLWNhcmQtcHJpY2UgcCArIHAge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4ucHJpY2luZy1ib3ggLnByaWNpbmctb3B0aW9ucyB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xyXG59XHJcbi5wcmljaW5nLWJveCAucHJpY2luZy1vcHRpb25zIGxpIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNDM7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hZGQtYnV0dG9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyNTUsIDAsIDEyOCwgMC4yKTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5maWx0ZXItYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSg1NSwgNzMsIDcyLCAwLjAyKTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmMDA4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmZpbHRlci1idG46aG92ZXIsIC5maWx0ZXItYnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmZpbHRlci1idG46aG92ZXIgaSAsIC5maWx0ZXItYnRuOmZvY3VzIGkge1xyXG5cdGNvbG9yOiNmZmY7XHJcbn1cclxuLmZpbHRlci1jYXJkIC5mb3JtLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmhhcy1lcnJvciAuaGVscC1ibG9jayB7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG5zbWFsbC5oZWxwLWJsb2NrIHtcclxuICAgY29sb3I6ICNGNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG4udG9nZ2xlLmlvcywgLnRvZ2dsZS1vbi5pb3MsIC50b2dnbGUtb2ZmLmlvcyB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4udG9nZ2xlLmlvcyAudG9nZ2xlLWhhbmRsZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uc2VydmljZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZXJ2aWNlLWhlYWRlciBoMiB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNlcnZpY2UtY2F0ZSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2Q5YzUwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc2VydmljZS1pbWFnZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ud2lkZ2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnNlcnZpY2UtYW1vdW50IHtcclxuICAgIGNvbG9yOiAjZmYwMDgwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5hYm91dC1hdXRob3Ige1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxufVxyXG4uYWJvdXQtcHJvdmlkZXItaW1nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuLnByb3ZpZGVyLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5zZXItcHJvdmlkZXItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjogIzI3MmI0MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxhc3Qtc2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubGFzdC1zZWVuIGkge1xyXG4gICAgY29sb3I6ICNmZmJjMzQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubGFzdC1zZWVuIGkub25saW5lIHtcclxuICAgIGNvbG9yOiAjMDBlNjViO1xyXG59XHJcbi5wcm92aWRlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hdmFpbGFibGUtd2lkZ2V0IHVsIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmF2YWlsYWJsZS13aWRnZXQgdWwgbGkge1xyXG4gICAgY29sb3I6ICM4NTg1ODU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5hdmFpbGFibGUtd2lkZ2V0IHVsIGxpIHNwYW4ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5hdmFpbGFibGUtd2lkZ2V0IHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uYXZhaWxhYmxlLXdpZGdldCB1bCBsaTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5yYXRpbmcge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwIDdweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmF0aW5nIGkge1xyXG4gICAgY29sb3I6ICNkZWRmZTA7XHJcbn1cclxuLnJhdGluZyBpLmZpbGxlZCB7XHJcbiAgICBjb2xvcjogI2ZiYzQxODtcclxufVxyXG4uc2VydmljZS13aWRnZXQgLnJhdGluZyB7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnNlcnZpY2Utd2lkZ2V0IC5yYXRpbmcgaSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5uYXYtdGFicy5tZW51LXRhYnMge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLm5hdi10YWJzLm1lbnUtdGFicyAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XHJcblx0Y29sb3I6ICNmZjAwODA7XHJcbn1cclxuLm5hdi10YWJzLm1lbnUtdGFicyAubmF2LWl0ZW0ge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIuMjVyZW07XHJcbn1cclxuLm5hdi10YWJzLm1lbnUtdGFicyAubmF2LWxpbmsge1xyXG5cdHBhZGRpbmc6IDAgMCAxcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdi10YWJzLm1lbnUtdGFicyAubmF2LWxpbms6OmJlZm9yZSwgLm5hdi10YWJzIC5uYXYtbGluazo6YWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiAnJztcclxufVxyXG4ubmF2LXRhYnMubWVudS10YWJzIC5uYXYtbGluazo6YWZ0ZXIge1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGhlaWdodDogM3B4O1xyXG5cdGJhY2tncm91bmQ6ICNmZjAwODA7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG4ubmF2LXRhYnMubWVudS10YWJzIC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rOjphZnRlciB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG4ubmF2LXRhYnMubWVudS10YWJzIC5uYXYtbGluazpmb2N1cywgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdi10YWJzLm1lbnUtdGFicyAubmF2LWxpbms6Zm9jdXMge1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5uYXYtdGFicy5tZW51LXRhYnMgLm5hdi1saW5rIC5iYWRnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxufVxyXG4ubm90aS1kcm9wZG93biA+IGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubm90aS1kcm9wZG93biA+IGE6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG4ubm90aS1kcm9wZG93biA+IGE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLmxvZ2luLXBhZ2U6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMi41cmVtIDIuNXJlbTtcclxuXHR6LWluZGV4OiAwO1xyXG59XHJcbi5sb2dpbi1wYWdlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogLTIwcHggLTIwcHggLTIwcHggMDtcclxufVxyXG4ubG9naW4tYm9keSB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxvZ2luLWhlYWRlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9naW4taGVhZGVyIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmxvZ2luLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubG9naW4taGVhZGVyIGgzIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmYwMDgwO1xyXG59XHJcbi5sb2dpbi1ib2R5IC5mb3JtLWNvbnRyb2wge1xyXG5cdGhlaWdodDogNTBweDtcclxufVxyXG4uYWNjb3VudC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW4tYm9keSAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntjb2xvcjojYmJiO29wYWNpdHk6MX1cclxuLmZpbHRlci1jYXJkIC5mb3JtLWdyb3VwIHtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZpbHRlci1jYXJkIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogLTdweDtcclxuICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgY29sb3I6ICM4NTg1ODU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG4uZmlsdGVyLWNhcmQgLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5maWx0ZXItY2FyZCAuYnRuIHtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmZpbHRlci1jYXJkIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmZpbHRlci1jYXJkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5maWx0ZXItY2FyZCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbn1cclxuI3RvZ2dsZV9idG4ge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1uYXYge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWw6aG92ZXIgLm93bC1uYXZ7XHJcblx0b3BhY2l0eToxO1xyXG5cdHZpc2liaWxpdHk6dmlzaWJsZTtcclxufVxyXG4uc2VydmljZS1jYXJvdXNlbCAub3dsLWNhcm91c2VsIC5vd2wtbmF2IGRpdiB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICM2NjY7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogLTI0cHg7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1jYXJvdXNlbCAub3dsLW5hdiBkaXY6aG92ZXJ7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG4uc2VydmljZS1jYXJvdXNlbCAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldntcclxuXHRsZWZ0Oi03NXB4O1xyXG59XHJcbi5zZXJ2aWNlLWNhcm91c2VsIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2OmhvdmVye1xyXG5cdGxlZnQ6LTY1cHg7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHR7XHJcblx0cmlnaHQ6LTc1cHg7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQ6aG92ZXJ7XHJcblx0cmlnaHQ6LTY1cHg7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1kb3Rze1xyXG5cdG1hcmdpbi10b3A6NTBweDtcclxufVxyXG4uc2VydmljZS1jYXJvdXNlbCAub3dsLWRvdHMgLm93bC1kb3R7XHJcblx0bWFyZ2luLXJpZ2h0OjVweDtcclxufVxyXG4uc2VydmljZS1jYXJvdXNlbCAub3dsLWRvdHMgLm93bC1kb3Q6bGFzdC1jaGlsZHtcclxuXHRtYXJnaW4tcmlnaHQ6MHB4O1xyXG59XHJcbi5zZXJ2aWNlLWNhcm91c2VsIC5vd2wtZG90cyAub3dsLWRvdCBzcGFue1xyXG5cdHdpZHRoOiAxMnB4O1xyXG5cdGhlaWdodDogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMTJweDtcclxuXHRtYXJnaW46MDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246YWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOmFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnNlcnZpY2UtY2Fyb3VzZWwgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMTJweDtcclxufVxyXG4uY2hlY2sge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNoZWNrdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDAwMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuLmNoZWNrdG9nZ2xlOmFmdGVyIHtcclxuXHRjb250ZW50OiAnICc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNTAlKTtcclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0dHJhbnNpdGlvbjogbGVmdCAzMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG4uY2hlY2s6Y2hlY2tlZCArIC5jaGVja3RvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1Y2U2MztcclxufVxyXG4uY2hlY2s6Y2hlY2tlZCArIC5jaGVja3RvZ2dsZTphZnRlciB7XHJcblx0bGVmdDogMTAwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gNXB4KSwgLTUwJSk7XHJcbn1cclxuLm9ub2Zmc3dpdGNoIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNzNweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0Om5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcblx0b3ZlcmZsb3c6IGhpZGRlbjsgXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ub25vZmZzd2l0Y2gtaW5uZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcclxuICAgIHdpZHRoOiAyMDAlO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUsIC5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ub25vZmZzd2l0Y2gtaW5uZXI6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjZTYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjb250ZW50OiBcIk9OXCI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiT0ZGXCI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLXN3aXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQzcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94OmNoZWNrZWQgKyAub25vZmZzd2l0Y2gtbGFiZWwgLm9ub2Zmc3dpdGNoLWlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkICsgLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xyXG4gICAgcmlnaHQ6IDBweDsgXHJcbn1cclxuLm5vdGktY29udGVudHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6ICNhMWExYTE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jZmlsdGVyX2lucHV0cyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2VydmljZS1pbWcge1xyXG5cdHdpZHRoOiA2MHB4O1xyXG59XHJcbi5jb250ZW50LXRleHRhcmVhIHtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5mYXYtaWNvbiB7XHJcblx0d2lkdGg6IDMycHg7XHJcbn1cclxuLnNpdGUtbG9nbyB7XHJcblx0bWF4LWhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5hZG1pbi1ub3RpLXdyYXBwZXIgLm5vdGktbGlzdCB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWRtaW4tbm90aS13cmFwcGVyIC5ub3RpLWxpc3QgLm5vdGktYXZhdGFyIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYWRtaW4tbm90aS13cmFwcGVyIC5ub3RpLWxpc3QgLm5vdGktYXZhdGFyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4uYWRtaW4tbm90aS13cmFwcGVyIC5ub3RpLWxpc3QgLm5vdGktY29udGVudHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5hZG1pbi1ub3RpLXdyYXBwZXIgLm5vdGktbGlzdCAubm90aS1jb250ZW50cyBoMyB7XHJcblx0Y29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5cdDE2LiBSZXNwb25zaXZlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHQuaGVhZGVyLmZpeGVkLWhlYWRlciAjdG9nZ2xlX2J0biB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMjBweDtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhciAuaGVhZGVyLWxlZnQgLmxvZ28gaW1nIHtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdG1heC1oZWlnaHQ6IDI0cHg7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhciAuaGVhZGVyIC5oZWFkZXItbGVmdCAubG9nbyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5oZWFkZXItbGVmdCAubG9nby5sb2dvLXNtYWxsIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcclxuXHRcdHBhZGRpbmc6IDAgNXB4O1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIgLnNpZGViYXIge1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIuZXhwYW5kLW1lbnUgLnNpZGViYXIge1xyXG5cdFx0d2lkdGg6IDI4MHB4O1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUge1xyXG5cdFx0cGFkZGluZzogMTVweCAxOXB4O1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5tZW51LXRpdGxlIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIuZXhwYW5kLW1lbnUgLm1lbnUtdGl0bGUge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhciAubWVudS10aXRsZSBhIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhci5leHBhbmQtbWVudSAubWVudS10aXRsZSBhIHtcclxuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0fVxyXG5cdC5tb2RhbC1vcGVuLm1pbmktc2lkZWJhciAuc2lkZWJhciB7XHJcblx0XHR6LWluZGV4OiAxMDUxO1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgdWwgPiBsaSA+IGEgc3BhbiB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyLmV4cGFuZC1tZW51IC5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgdWwgPiBsaSA+IGEgc3BhbiB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHQubWluaS1zaWRlYmFyIC5wYWdlLXdyYXBwZXIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDkwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIuZXhwYW5kLW1lbnUgLnBhZ2Utd3JhcHBlciB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjgwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIgLm1haW4td3JhcHBlciA+IC5oZWFkZXIge1xyXG5cdFx0bGVmdDogMTIwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIgLmhlYWRlci5maXhlZC1oZWFkZXIge1xyXG5cdFx0bGVmdDogOTBweDtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhciAuc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHggMTZweDtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhci5leHBhbmQtbWVudSAubWFpbi13cmFwcGVyID4gLmhlYWRlciB7XHJcblx0XHRsZWZ0OiAzMTBweDtcclxuXHR9XHJcblx0Lm1pbmktc2lkZWJhci5leHBhbmQtbWVudSAubWFpbi13cmFwcGVyID4gLmhlYWRlci5maXhlZC1oZWFkZXIge1xyXG5cdFx0bGVmdDogMjgwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIgIC5tYWluLXdyYXBwZXIgYXBwLWhlYWRlciA+IC5oZWFkZXIge1xyXG5cdFx0bGVmdDogMTIwcHg7XHJcblx0fVxyXG5cdC5taW5pLXNpZGViYXIgLm1haW4td3JhcHBlciBhcHAtaGVhZGVyID4gLmhlYWRlci5maXhlZC1oZWFkZXIge1xyXG5cdFx0bGVmdDogOTBweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG5cdC5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5tb2JpbGVfYnRuIHtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRvcDogMDtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQjdG9nZ2xlX2J0biB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuaGVhZGVyIC5oZWFkZXItbGVmdCAubG9nbyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuaGVhZGVyLWxlZnQgLmxvZ28ubG9nby1zbWFsbCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0LmhlYWRlciAuaGVhZGVyLWxlZnQgLmxvZ28gaW1nIHtcclxuXHRcdG1heC1oZWlnaHQ6IDM2cHg7XHJcblx0XHRoZWlnaHQ6IDM2cHg7XHJcblx0fVxyXG5cdC5tYWluLXdyYXBwZXIgPiAuaGVhZGVyIHtcclxuXHRcdGxlZnQ6IDUwcHg7XHJcblx0fVxyXG5cdC5tYWluLXdyYXBwZXIgPiAuaGVhZGVyLmZpeGVkLWhlYWRlciB7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHQubWFpbi13cmFwcGVyIHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cdC5zaWRlYmFyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcblx0XHR3aWR0aDogMjI1cHg7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0XHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdFx0ei1pbmRleDogMTA0MTtcclxuXHR9XHJcblx0LnBhZ2Utd3JhcHBlciB7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0XHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdH1cclxuXHQubmF2LXRhYnMubWVudS10YWJzIC5uYXYtaXRlbSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xyXG5cdH1cclxuXHQubWFpbi13cmFwcGVyIGFwcC1oZWFkZXIgPiAuaGVhZGVyLmZpeGVkLWhlYWRlciB7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDM1cHg7XHJcbiAgICBcdHRvcDogMzVweDtcclxuXHR9XHJcblx0Lm1haW4td3JhcHBlciBhcHAtaGVhZGVyID4gIC5oZWFkZXIge1xyXG5cdFx0bGVmdDogNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuXHRib2R5IHtcclxuXHRcdGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG5cdH1cclxuXHRoMSwgLmgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuXHR9XHJcblx0aDIsIC5oMiB7XHJcblx0XHRmb250LXNpemU6IDEuNzVyZW07XHJcblx0fVxyXG5cdGgzLCAuaDMge1xyXG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0fVxyXG5cdGg0LCAuaDQge1xyXG5cdFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcclxuXHR9XHJcblx0aDUsIC5oNSB7XHJcblx0XHRmb250LXNpemU6IDFyZW07XHJcblx0fVxyXG5cdGg2LCAuaDYge1xyXG5cdFx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHR9XHJcblx0LmhlYWRlciAuaGFzLWFycm93IC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LnVzZXItbWVudS5uYXYgPiBsaSA+IGEgPiBzcGFuOm5vdCgudXNlci1pbWcpIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHQubmF2YmFyLW5hdi51c2VyLW1lbnUgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0bGVmdDogYXV0bztcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdH1cclxuXHQuaGVhZGVyIC5oZWFkZXItbGVmdCB7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0fVxyXG5cdC5oZWFkZXIgLmhlYWRlci1sZWZ0IC5sb2dvIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5oZWFkZXItbGVmdCAubG9nby5sb2dvLXNtYWxsIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR9XHJcblx0LmxvZ2luLXdyYXBwZXIgLmxvZ2luYm94IHtcclxuXHRcdG1heC13aWR0aDogNDUwcHg7XHJcblx0XHRtaW4taGVpZ2h0OiB1bnNldDtcclxuXHR9XHJcblx0LmVycm9yLWJveCBoMSB7XHJcblx0XHRmb250LXNpemU6IDZlbTtcclxuXHR9XHJcblx0LmVycm9yLWJveCAuYnRuIHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdG1pbi13aWR0aDogMTUwcHg7XHJcblx0XHRwYWRkaW5nOiA4cHggMjBweDtcclxuXHR9XHJcblx0LmRhc2gtY291bnQge1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHQubmF2LXRhYnMubWVudS10YWJzIHtcclxuXHRcdG1hcmdpbi10b3A6IC0xNXB4O1xyXG5cdH1cdFxyXG5cdC5uYXYtdGFicy5tZW51LXRhYnMgLm5hdi1pdGVtIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblx0Lm1haW4td3JhcHBlciAgYXBwLWhlYWRlciA+IC5oZWFkZXIge1xyXG5cdFx0cmlnaHQ6IDM1cHg7XHJcblx0XHR0b3A6IDM1cHg7XHJcblx0XHRsZWZ0OiAzNXB4O1xyXG5cdH1cclxuXHQuY2FyZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XHJcblx0fVxyXG5cdC5wYWdlLXdyYXBwZXIgPiAuY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAwLjkzNzVyZW0gMC45Mzc1cmVtIDA7XHJcblx0fVxyXG5cdC5jYXJkLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMS4yNXJlbTtcclxuXHR9XHJcblx0LmNhcmQtaGVhZGVyIHtcclxuXHRcdHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xyXG5cdH1cclxuXHQuY2FyZC1mb290ZXIge1xyXG5cdFx0cGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcblx0fVxyXG5cdC5wYWdlLWhlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XHJcblx0fVxyXG5cdC5sb2dpbmJveCB7XHJcblx0XHRwYWRkaW5nOiAxLjI1cmVtO1xyXG5cdH1cclxuXHQjbW9iaWxlX2J0biB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "yeub":
    /*!****************************************!*\
      !*** ./node_modules/has-cors/index.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function yeub(module, exports) {
      /**
       * Module exports.
       *
       * Logic borrowed from Modernizr:
       *
       *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
       */
      try {
        module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        // if XMLHttp support is disabled in IE then it will throw
        // when trying to create
        module.exports = false;
      }
      /***/

    },

    /***/
    "ymUC":
    /*!*********************************************************!*\
      !*** ./node_modules/socket.io-parser/dist/is-binary.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function ymUC(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hasBinary = exports.isBinary = void 0;
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";

      var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };

      var toString = Object.prototype.toString;
      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
      var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
      /**
       * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
       *
       * @private
       */

      function isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
      }

      exports.isBinary = isBinary;

      function hasBinary(obj, toJSON) {
        if (!obj || typeof obj !== "object") {
          return false;
        }

        if (Array.isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
              return true;
            }
          }

          return false;
        }

        if (isBinary(obj)) {
          return true;
        }

        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
          return hasBinary(obj.toJSON(), true);
        }

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
          }
        }

        return false;
      }

      exports.hasBinary = hasBinary;
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map