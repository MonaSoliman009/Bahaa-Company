(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-pages-maintenance-pages-module"], {
    /***/
    "/1cH":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
      \******************************************************************************/

    /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, getMatAutocompleteMissingPanelError */

    /***/
    function cH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
        return AUTOCOMPLETE_OPTION_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
        return AUTOCOMPLETE_PANEL_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
        return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
        return MatAutocomplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
        return MatAutocompleteModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
        return MatAutocompleteOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
        return MatAutocompleteSelectedEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
        return MatAutocompleteTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
        return getMatAutocompleteMissingPanelError;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/autocomplete/autocomplete.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       * @type {?}
       */


      var _c0 = ["panel"];

      function MatAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
        }
      }

      var _c1 = ["*"];
      var _uniqueAutocompleteIdCounter = 0;
      /**
       * Event object that is emitted when an autocomplete option is selected.
       */

      var MatAutocompleteSelectedEvent =
      /**
       * @param {?} source
       * @param {?} option
       */
      function MatAutocompleteSelectedEvent(source, option) {
        _classCallCheck(this, MatAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      };

      if (false) {}
      /**
       * Event object that is emitted when an autocomplete option is activated.
       * @record
       */


      function MatAutocompleteActivatedEvent() {}

      if (false) {} // Boilerplate for applying mixins to MatAutocomplete.

      /**
       * \@docs-private
       */


      var MatAutocompleteBase = function MatAutocompleteBase() {
        _classCallCheck(this, MatAutocompleteBase);
      };
      /** @type {?} */


      var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
      /**
       * Default `mat-autocomplete` options that can be overridden.
       * @record
       */


      function MatAutocompleteDefaultOptions() {}

      if (false) {}
      /**
       * Injection token to be used to override the default options for `mat-autocomplete`.
       * @type {?}
       */


      var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: false
        };
      }

      var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteMixin) {
        _inherits(MatAutocomplete, _MatAutocompleteMixin);

        var _super = _createSuper(MatAutocomplete);

        /**
         * @param {?} _changeDetectorRef
         * @param {?} _elementRef
         * @param {?} defaults
         */
        function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
          var _this;

          _classCallCheck(this, MatAutocomplete);

          _this = _super.call(this);
          _this._changeDetectorRef = _changeDetectorRef;
          _this._elementRef = _elementRef;
          _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Whether the autocomplete panel should be visible, depending on option length.
           */

          _this.showPanel = false;
          _this._isOpen = false;
          /**
           * Function that maps an option's control value to its display value in the trigger.
           */

          _this.displayWith = null;
          /**
           * Event that is emitted whenever an option from the list is selected.
           */

          _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is opened.
           */

          _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is closed.
           */

          _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Emits whenever an option is activated using the keyboard.
           */

          _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this._classList = {};
          /**
           * Unique ID to be used by autocomplete trigger's "aria-owns" property.
           */

          _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
          _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
          return _this;
        }
        /**
         * Whether the autocomplete panel is open.
         * @return {?}
         */


        _createClass(MatAutocomplete, [{
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           * @return {?}
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Takes classes set on the host mat-autocomplete element and applies them to the panel
           * inside the overlay container to allow for easy styling.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "classList",
          set: function set(value) {
            if (value && value.length) {
              this._classList = value.split(' ').reduce(
              /**
              * @param {?} classList
              * @param {?} className
              * @return {?}
              */
              function (classList, className) {
                classList[className.trim()] = true;
                return classList;
              },
              /** @type {?} */
              {});
            } else {
              this._classList = {};
            }

            this._setVisibilityClasses(this._classList);

            this._elementRef.nativeElement.className = '';
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
            this._activeOptionChanges = this._keyManager.change.subscribe(
            /**
            * @param {?} index
            * @return {?}
            */
            function (index) {
              _this2.optionActivated.emit({
                source: _this2,
                option: _this2.options.toArray()[index] || null
              });
            }); // Set the initial visibility state.

            this._setVisibility();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._activeOptionChanges.unsubscribe();
          }
          /**
           * Sets the panel scrollTop. This allows us to manually scroll to display options
           * above or below the fold, as they are not actually being focused when active.
           * @param {?} scrollTop
           * @return {?}
           */

        }, {
          key: "_setScrollTop",
          value: function _setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
          /**
           * Returns the panel's scrollTop.
           * @return {?}
           */

        }, {
          key: "_getScrollTop",
          value: function _getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
          /**
           * Panel should hide itself when the option list is empty.
           * @return {?}
           */

        }, {
          key: "_setVisibility",
          value: function _setVisibility() {
            this.showPanel = !!this.options.length;

            this._setVisibilityClasses(this._classList);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Emits the `select` event.
           * @param {?} option
           * @return {?}
           */

        }, {
          key: "_emitSelectEvent",
          value: function _emitSelectEvent(option) {
            /** @type {?} */
            var event = new MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
          /**
           * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
           * @private
           * @param {?} classList
           * @return {?}
           */

        }, {
          key: "_setVisibilityClasses",
          value: function _setVisibilityClasses(classList) {
            classList['mat-autocomplete-visible'] = this.showPanel;
            classList['mat-autocomplete-hidden'] = !this.showPanel;
          }
        }]);

        return MatAutocomplete;
      }(_MatAutocompleteMixinBase);

      MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
        return new (t || MatAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
      };

      MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatAutocomplete,
        selectors: [["mat-autocomplete"]],
        contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        viewQuery: function MatAutocomplete_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        hostAttrs: [1, "mat-autocomplete"],
        inputs: {
          disableRipple: "disableRipple",
          displayWith: "displayWith",
          autoActiveFirstOption: "autoActiveFirstOption",
          classList: ["class", "classList"],
          panelWidth: "panelWidth"
        },
        outputs: {
          optionSelected: "optionSelected",
          opened: "opened",
          closed: "closed",
          optionActivated: "optionActivated"
        },
        exportAs: ["matAutocomplete"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
        template: function MatAutocomplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatAutocomplete.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatAutocomplete.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-autocomplete',
            template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            exportAs: 'matAutocomplete',
            inputs: ['disableRipple'],
            host: {
              'class': 'mat-autocomplete'
            },
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatAutocomplete
            }],
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['class']
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }],
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
              descendants: true
            }]
          }],
          panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/autocomplete/autocomplete-origin.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Directive applied to an element to make it usable
       * as a connection point for an autocomplete panel.
       */


      var MatAutocompleteOrigin =
      /**
       * @param {?} elementRef
       */
      function MatAutocompleteOrigin(elementRef) {
        _classCallCheck(this, MatAutocompleteOrigin);

        this.elementRef = elementRef;
      };

      MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
        return new (t || MatAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteOrigin,
        selectors: [["", "matAutocompleteOrigin", ""]],
        exportAs: ["matAutocompleteOrigin"]
      });
      /** @nocollapse */

      MatAutocompleteOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matAutocompleteOrigin]',
            exportAs: 'matAutocompleteOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/autocomplete/autocomplete-trigger.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The height of each autocomplete option.
       * @type {?}
       */


      var AUTOCOMPLETE_OPTION_HEIGHT = 48;
      /**
       * The total height of the autocomplete panel.
       * @type {?}
       */

      var AUTOCOMPLETE_PANEL_HEIGHT = 256;
      /**
       * Injection token that determines the scroll handling while the autocomplete panel is open.
       * @type {?}
       */

      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
      /**
       * \@docs-private
       * @param {?} overlay
       * @return {?}
       */

      function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return (
          /**
          * @return {?}
          */
          function () {
            return overlay.scrollStrategies.reposition();
          }
        );
      }
      /**
       * \@docs-private
       * @type {?}
       */


      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
        useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * \@docs-private
       * @type {?}
       */

      var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * \@docs-private
       * @return {?}
       */

      function getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }

      var MatAutocompleteTrigger = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _overlay
         * @param {?} _viewContainerRef
         * @param {?} _zone
         * @param {?} _changeDetectorRef
         * @param {?} scrollStrategy
         * @param {?} _dir
         * @param {?} _formField
         * @param {?} _document
         * @param {?=} _viewportRuler
         */
        function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
          var _this3 = this;

          _classCallCheck(this, MatAutocompleteTrigger);

          this._element = _element;
          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this._zone = _zone;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._formField = _formField;
          this._document = _document;
          this._viewportRuler = _viewportRuler;
          this._componentDestroyed = false;
          this._autocompleteDisabled = false;
          /**
           * Whether or not the label state is being overridden.
           */

          this._manuallyFloatingLabel = false;
          /**
           * Subscription to viewport size changes.
           */

          this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
           * closed autocomplete from being reopened if the user switches to another browser tab and then
           * comes back.
           */

          this._canOpenOnNextFocus = true;
          /**
           * Stream of keyboard events that can close the panel.
           */

          this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */

          this._windowBlurHandler =
          /**
          * @return {?}
          */
          function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this3._canOpenOnNextFocus = _this3._document.activeElement !== _this3._element.nativeElement || _this3.panelOpen;
          };
          /**
           * `View -> model callback called when value changes`
           */


          this._onChange =
          /**
          * @return {?}
          */
          function () {};
          /**
           * `View -> model callback called when autocomplete has been touched`
           */


          this._onTouched =
          /**
          * @return {?}
          */
          function () {};
          /**
           * Position of the autocomplete panel relative to the trigger element. A position of `auto`
           * will render the panel underneath the trigger if there is enough space for it to fit in
           * the viewport, otherwise the panel will be shown above it. If the position is set to
           * `above` or `below`, the panel will always be shown above or below the trigger. no matter
           * whether it fits completely in the viewport.
           */


          this.position = 'auto';
          /**
           * `autocomplete` attribute to be set on the input element.
           * \@docs-private
           */

          this.autocompleteAttribute = 'off';
          this._overlayAttached = false;
          /**
           * Stream of autocomplete option selections.
           */

          this.optionSelections =
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(
          /**
          * @return {?}
          */
          function () {
            if (_this3.autocomplete && _this3.autocomplete.options) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this3.autocomplete.options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this3._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return _this3.optionSelections;
            }));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         * @return {?}
         */


        _createClass(MatAutocompleteTrigger, [{
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            /** @type {?} */
            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              this._zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                return window.addEventListener('blur', _this4._windowBlurHandler);
              });
            }
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['position'] && this._positionStrategy) {
              this._setStrategyPositions(this._positionStrategy);

              if (this.panelOpen) {
                /** @type {?} */
                this._overlayRef.updatePosition();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              window.removeEventListener('blur', this._windowBlurHandler);
            }

            this._viewportSubscription.unsubscribe();

            this._componentDestroyed = true;

            this._destroyPanel();

            this._closeKeyEventStream.complete();
          }
          /**
           * Whether or not the autocomplete panel is open.
           * @return {?}
           */

        }, {
          key: "panelOpen",
          get: function get() {
            return this._overlayAttached && this.autocomplete.showPanel;
          }
          /**
           * Opens the autocomplete suggestion panel.
           * @return {?}
           */

        }, {
          key: "openPanel",
          value: function openPanel() {
            this._attachOverlay();

            this._floatLabel();
          }
          /**
           * Closes the autocomplete suggestion panel.
           * @return {?}
           */

        }, {
          key: "closePanel",
          value: function closePanel() {
            this._resetLabel();

            if (!this._overlayAttached) {
              return;
            }

            if (this.panelOpen) {
              // Only emit if the panel was visible.
              this.autocomplete.closed.emit();
            }

            this.autocomplete._isOpen = this._overlayAttached = false;

            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();

              this._closingActionsSubscription.unsubscribe();
            } // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.


            if (!this._componentDestroyed) {
              // We need to trigger change detection manually, because
              // `fromEvent` doesn't seem to do it at the proper time.
              // This ensures that the label is reset when the
              // user clicks outside.
              this._changeDetectorRef.detectChanges();
            }
          }
          /**
           * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
           * within the viewport.
           * @return {?}
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._overlayAttached) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           * @return {?}
           */

        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this5 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this5._overlayAttached;
            })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this5._overlayAttached;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
            }));
          }
          /**
           * The currently active option, coerced to MatOption type.
           * @return {?}
           */

        }, {
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete._keyManager) {
              return this.autocomplete._keyManager.activeItem;
            }

            return null;
          }
          /**
           * Stream of clicks outside of the autocomplete panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_getOutsideClickStream",
          value: function _getOutsideClickStream() {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'),
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
              // fall back to check the first element in the path of the click event.

              /** @type {?} */
              var clickTarget =
              /** @type {?} */
              _this6._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
              /** @type {?} */

              var formField = _this6._formField ? _this6._formField._elementRef.nativeElement : null;
              return _this6._overlayAttached && clickTarget !== _this6._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this6._overlayRef && !_this6._overlayRef.overlayElement.contains(clickTarget);
            }));
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this7 = this;

            Promise.resolve(null).then(
            /**
            * @return {?}
            */
            function () {
              return _this7._setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            /** @type {?} */
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]) {
              event.preventDefault();
            }

            if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"] && this.panelOpen) {
              this.activeOption._selectViaInteraction();

              this._resetActiveItem();

              event.preventDefault();
            } else if (this.autocomplete) {
              /** @type {?} */
              var prevActiveItem = this.autocomplete._keyManager.activeItem;
              /** @type {?} */

              var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

              if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
              } else if (isArrowKey && this._canOpen()) {
                this.openPanel();
              }

              if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption();
              }
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleInput",
          value: function _handleInput(event) {
            /** @type {?} */
            var target =
            /** @type {?} */
            event.target;
            /** @type {?} */

            var value = target.value; // Based on `NumberValueAccessor` from forms.

            if (target.type === 'number') {
              value = value == '' ? null : parseFloat(value);
            } // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/


            if (this._previousValue !== value) {
              this._previousValue = value;

              this._onChange(value);

              if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            if (!this._canOpenOnNextFocus) {
              this._canOpenOnNextFocus = true;
            } else if (this._canOpen()) {
              this._previousValue = this._element.nativeElement.value;

              this._attachOverlay();

              this._floatLabel(true);
            }
          }
          /**
           * In "auto" mode, the label will animate down as soon as focus is lost.
           * This causes the value to jump when selecting an option with the mouse.
           * This method manually floats the label until the panel can be closed.
           * @private
           * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
           * @return {?}
           */

        }, {
          key: "_floatLabel",
          value: function _floatLabel() {
            var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this._formField && this._formField.floatLabel === 'auto') {
              if (shouldAnimate) {
                this._formField._animateAndLockLabel();
              } else {
                this._formField.floatLabel = 'always';
              }

              this._manuallyFloatingLabel = true;
            }
          }
          /**
           * If the label has been manually elevated, return it to its normal state.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetLabel",
          value: function _resetLabel() {
            if (this._manuallyFloatingLabel) {
              this._formField.floatLabel = 'auto';
              this._manuallyFloatingLabel = false;
            }
          }
          /**
           * Given that we are not actually focusing active options, we must manually adjust scroll
           * to reveal options below the fold. First, we find the offset of the option from the top
           * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
           * the panel height + the option height, so the active option will be just visible at the
           * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
           * will become the offset. If that offset is visible within the panel already, the scrollTop is
           * not adjusted.
           * @private
           * @return {?}
           */

        }, {
          key: "_scrollToOption",
          value: function _scrollToOption() {
            /** @type {?} */
            var index = this.autocomplete._keyManager.activeItemIndex || 0;
            /** @type {?} */

            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

            if (index === 0 && labelCount === 1) {
              // If we've got one group label before the option and we're at the top option,
              // scroll the list to the top. This is better UX than scrolling the list to the
              // top of the option, because it allows the user to read the top group's label.
              this.autocomplete._setScrollTop(0);
            } else {
              /** @type {?} */
              var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

              this.autocomplete._setScrollTop(newScrollPosition);
            }
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           * @private
           * @return {?}
           */

        }, {
          key: "_subscribeToClosingActions",
          value: function _subscribeToClosingActions() {
            var _this8 = this;

            /** @type {?} */
            var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
            /** @type {?} */


            var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return _this8._positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var wasOpen = _this8.panelOpen;

              _this8._resetActiveItem();

              _this8.autocomplete._setVisibility();

              if (_this8.panelOpen) {
                /** @type {?} */
                _this8._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this8.panelOpen) {
                  _this8.autocomplete.opened.emit();
                }
              }

              return _this8.panelClosingActions;
            }), // when the first closing event occurs...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
            .subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this8._setValueAndClose(event);
            });
          }
          /**
           * Destroys the autocomplete suggestion panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_destroyPanel",
          value: function _destroyPanel() {
            if (this._overlayRef) {
              this.closePanel();

              this._overlayRef.dispose();

              this._overlayRef = null;
            }
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setTriggerValue",
          value: function _setTriggerValue(value) {
            /** @type {?} */
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            /** @type {?} */

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.

            if (this._formField) {
              this._formField._control.value = inputValue;
            } else {
              this._element.nativeElement.value = inputValue;
            }

            this._previousValue = inputValue;
          }
          /**
           * This method closes the panel, and if a value is specified, also sets the associated
           * control to that value. It will also mark the control as dirty if this interaction
           * stemmed from the user.
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_setValueAndClose",
          value: function _setValueAndClose(event) {
            if (event && event.source) {
              this._clearPreviousSelectedOption(event.source);

              this._setTriggerValue(event.source.value);

              this._onChange(event.source.value);

              this._element.nativeElement.focus();

              this.autocomplete._emitSelectEvent(event.source);
            }

            this.closePanel();
          }
          /**
           * Clear any previous selected option and emit a selection change event for this option
           * @private
           * @param {?} skip
           * @return {?}
           */

        }, {
          key: "_clearPreviousSelectedOption",
          value: function _clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (option != skip && option.selected) {
                option.deselect();
              }
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this9 = this;

            if (!this.autocomplete) {
              throw getMatAutocompleteMissingPanelError();
            } // We want to resolve this once, as late as possible so that we can be
            // sure that the element has been moved into its final place in the DOM.


            if (this._isInsideShadowRoot == null) {
              this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["_getShadowRoot"])(this._element.nativeElement);
            }
            /** @type {?} */


            var overlayRef = this._overlayRef;

            if (!overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
              overlayRef = this._overlay.create(this._getOverlayConfig());
              this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] && event.altKey) {
                  _this9._resetActiveItem();

                  _this9._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                  // reach the input itself and cause the overlay to be reopened.


                  event.stopPropagation();
                  event.preventDefault();
                }
              });

              if (this._viewportRuler) {
                this._viewportSubscription = this._viewportRuler.change().subscribe(
                /**
                * @return {?}
                */
                function () {
                  if (_this9.panelOpen && overlayRef) {
                    overlayRef.updateSize({
                      width: _this9._getPanelWidth()
                    });
                  }
                });
              }
            } else {
              // Update the trigger, panel width and direction, in case anything has changed.
              this._positionStrategy.setOrigin(this._getConnectedElement());

              overlayRef.updateSize({
                width: this._getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this._portal);
              this._closingActionsSubscription = this._subscribeToClosingActions();
            }
            /** @type {?} */


            var wasOpen = this.panelOpen;

            this.autocomplete._setVisibility();

            this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
              positionStrategy: this._getOverlayPosition(),
              scrollStrategy: this._scrollStrategy(),
              width: this._getPanelWidth(),
              direction: this._dir
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            /** @type {?} */
            var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

            this._setStrategyPositions(strategy);

            this._positionStrategy = strategy;
            return strategy;
          }
          /**
           * Sets the positions on a position strategy based on the directive's input state.
           * @private
           * @param {?} positionStrategy
           * @return {?}
           */

        }, {
          key: "_setStrategyPositions",
          value: function _setStrategyPositions(positionStrategy) {
            // Note that we provide horizontal fallback positions, even though by default the dropdown
            // width matches the input, because consumers can override the width. See #18854.

            /** @type {?} */
            var belowPositions = [{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]; // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.

            /** @type {?} */

            var panelClass = 'mat-autocomplete-panel-above';
            /** @type {?} */

            var abovePositions = [{
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
              panelClass: panelClass
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
              panelClass: panelClass
            }];
            /** @type {?} */

            var positions;

            if (this.position === 'above') {
              positions = abovePositions;
            } else if (this.position === 'below') {
              positions = belowPositions;
            } else {
              positions = [].concat(belowPositions, abovePositions);
            }

            positionStrategy.withPositions(positions);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getConnectedElement",
          value: function _getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getPanelWidth",
          value: function _getPanelWidth() {
            return this.autocomplete.panelWidth || this._getHostWidth();
          }
          /**
           * Returns the width of the input element, so the panel width can match it.
           * @private
           * @return {?}
           */

        }, {
          key: "_getHostWidth",
          value: function _getHostWidth() {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetActiveItem",
          value: function _resetActiveItem() {
            this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
          }
          /**
           * Determines whether the panel can be opened.
           * @private
           * @return {?}
           */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            /** @type {?} */
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
          /**
           * Use defaultView of injected document if available or fallback to global window reference
           * @private
           * @return {?}
           */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var _a;

            return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
          }
        }]);

        return MatAutocompleteTrigger;
      }();

      MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
        return new (t || MatAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]));
      };

      MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteTrigger,
        selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
        hostAttrs: [1, "mat-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
              return ctx._onTouched();
            })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
              return ctx._handleInput($event);
            })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
          }
        },
        inputs: {
          position: ["matAutocompletePosition", "position"],
          autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
          autocomplete: ["matAutocomplete", "autocomplete"],
          connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
        },
        exportAs: ["matAutocompleteTrigger"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      MatAutocompleteTrigger.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }];
      };

      MatAutocompleteTrigger.propDecorators = {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "input[matAutocomplete], textarea[matAutocomplete]",
            host: {
              'class': 'mat-autocomplete-trigger',
              '[attr.autocomplete]': 'autocompleteAttribute',
              '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
              '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
              '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
              '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
              '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
              '[attr.aria-haspopup]': '!autocompleteDisabled',
              // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
              // a little earlier. This avoids issues where IE delays the focusing of the input.
              '(focusin)': '_handleFocus()',
              '(blur)': '_onTouched()',
              '(input)': '_handleInput($event)',
              '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'matAutocompleteTrigger',
            providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompletePosition']
          }],
          autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['autocomplete']
          }],
          autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteDisabled']
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocomplete']
          }],
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteConnectedTo']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/autocomplete/autocomplete-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatAutocompleteModule = function MatAutocompleteModule() {
        _classCallCheck(this, MatAutocompleteModule);
      };

      MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) {
        return new (t || MatAutocompleteModule)();
      };

      MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatAutocompleteModule
      });
      MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
          declarations: function declarations() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
            providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/autocomplete/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=autocomplete.js.map

      /***/

    },

    /***/
    "1vPI":
    /*!**********************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-outside/maintenance-outside.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: MaintenanceOutsideComponent */

    /***/
    function vPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceOutsideComponent", function () {
        return MaintenanceOutsideComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maintenance_outside_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maintenance-outside.component.html */
      "r/dU");
      /* harmony import */


      var _maintenance_outside_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./maintenance-outside.component.css */
      "v2DX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/maintenance.service */
      "xHYo");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/product.service */
      "lXKC");

      var MaintenanceOutsideComponent = /*#__PURE__*/function () {
        function MaintenanceOutsideComponent(_fb, _MaintenanceService, _ProductService) {
          _classCallCheck(this, MaintenanceOutsideComponent);

          this._fb = _fb;
          this._MaintenanceService = _MaintenanceService;
          this._ProductService = _ProductService;
          this.started = false;
          this.filter = '';
          this.displayRecomendedSerial = true;
          this.allSerialNumbers = new Array();
        }

        _createClass(MaintenanceOutsideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.creteForm();
            this.createmaintenanceForm();
            this.getAllproducts();
            setTimeout(function () {
              _this10.serial.nativeElement.focus();
            }, 0);
          }
        }, {
          key: "enterPressed",
          value: function enterPressed(e) {
            var code = e.keyCode ? e.keyCode : e.which;

            if (code == 13) {
              //Enter keycode
              this.onSubmit();
            }
          }
        }, {
          key: "createmaintenanceForm",
          value: function createmaintenanceForm() {
            this.maintenanceForm = this._fb.group({
              shopName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              recipient: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              deliveryMan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "creteForm",
          value: function creteForm() {
            this.form = this._fb.group({
              serialNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "alertWithFail",
          value: function alertWithFail(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Failed', msg, 'error').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "alertWithSuccess",
          value: function alertWithSuccess(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Done', msg, 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "Getserial",
          value: function Getserial() {
            var valueInput = this.serial.nativeElement.value;
            this.Serial = valueInput;
            return valueInput;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            console.log(this.Getserial());
            console.log(this.form.controls.serialNumber.errors);
            this.submitted = true;

            if (this.form.valid) {
              this._MaintenanceService.startMaitenanceOutsideStore(this.Getserial(), localStorage.getItem("id")).subscribe(function (res) {
                console.log(res);

                if (res.message == 'Maintainence Started successfully') {
                  _this11.started = true;
                } else {
                  _this11.alertWithFail(res.message);
                }
              }, function (err) {
                console.log(err);
              });

              console.log(this.form.value.serialNumber, localStorage.getItem("id"));
            }
          }
        }, {
          key: "submitMaitenanceOutside",
          value: function submitMaitenanceOutside() {
            var _this12 = this;

            this.submitted2 = true;

            if (this.maintenanceForm.valid) {
              this._MaintenanceService.submitMaintenanceOutsideStore(this.Getserial(), localStorage.getItem("id"), this.maintenanceForm.value).subscribe(function (res) {
                console.log(res);
                console.log("ccc");

                if (res.message == 'Maintainence Finished successfully') {
                  _this12.alertWithSuccess(res.message);
                } else {
                  _this12.alertWithFail(res.message);
                }
              }, function (err) {
                console.log(err);
              });

              console.log(this.maintenanceForm.value);
            }
          }
        }, {
          key: "getAllproducts",
          value: function getAllproducts() {
            var _this13 = this;

            this._ProductService.getAllProduct().subscribe(function (res) {
              _this13.products = res;

              var _iterator = _createForOfIteratorHelper(_this13.products),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var val = _step.value;
                  var stringSerial = val.serialNumber.toString();
                  console.log(stringSerial);

                  _this13.allSerialNumbers.push(val.serialNumber.toString());
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "selectedSerial",
          value: function selectedSerial(val) {
            this.serial.nativeElement.value = val;
            this.displayRecomendedSerial = true; // this.form.controls.serialNumber.valid;
          }
        }, {
          key: "data",
          value: function data(val) {
            return val;
          }
        }, {
          key: "searchSerial",
          value: function searchSerial(val) {
            this.displayRecomendedSerial = false;
            var filterd = this.allSerialNumbers.filter(this.data);
          }
        }]);

        return MaintenanceOutsideComponent;
      }();

      MaintenanceOutsideComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["MaintenanceService"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }];
      };

      MaintenanceOutsideComponent.propDecorators = {
        serial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Serial']
        }]
      };
      MaintenanceOutsideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maintenance-outside',
        template: _raw_loader_maintenance_outside_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maintenance_outside_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MaintenanceOutsideComponent);
      /***/
    },

    /***/
    "A5z7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule */

    /***/
    function A5z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
        return MAT_CHIPS_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChip", function () {
        return MatChip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
        return MatChipAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
        return MatChipInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
        return MatChipList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
        return MatChipListChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
        return MatChipRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
        return MatChipSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
        return MatChipTrailingIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
        return MatChipsModule;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/chip.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Represents an event fired on an individual `mat-chip`.
       * @record
       */


      var _c0 = ["*"];

      function MatChipEvent() {}

      if (false) {}
      /**
       * Event object emitted by MatChip when selected or deselected.
       */


      var MatChipSelectionChange =
      /**
       * @param {?} source
       * @param {?} selected
       * @param {?=} isUserInput
       */
      function MatChipSelectionChange(source, selected) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, MatChipSelectionChange);

        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
      };

      if (false) {} // Boilerplate for applying mixins to MatChip.

      /**
       * \@docs-private
       */


      var MatChipBase =
      /**
       * @param {?} _elementRef
       */
      function MatChipBase(_elementRef) {
        _classCallCheck(this, MatChipBase);

        this._elementRef = _elementRef;
      };

      if (false) {}
      /** @type {?} */


      var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
      /**
       * Dummy directive to add CSS class to chip avatar.
       * \@docs-private
       */


      var MatChipAvatar = function MatChipAvatar() {
        _classCallCheck(this, MatChipAvatar);
      };

      MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
        return new (t || MatChipAvatar)();
      };

      MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: [1, "mat-chip-avatar"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-avatar, [matChipAvatar]',
            host: {
              'class': 'mat-chip-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Dummy directive to add CSS class to chip trailing icon.
       * \@docs-private
       */


      var MatChipTrailingIcon = function MatChipTrailingIcon() {
        _classCallCheck(this, MatChipTrailingIcon);
      };

      MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
        return new (t || MatChipTrailingIcon)();
      };

      MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: [1, "mat-chip-trailing-icon"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
            host: {
              'class': 'mat-chip-trailing-icon'
            }
          }]
        }], null, null);
      })();
      /**
       * Material design styled Chip component. Used inside the MatChipList component.
       */


      var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
        _inherits(MatChip, _MatChipMixinBase2);

        var _super2 = _createSuper(MatChip);

        /**
         * @param {?} _elementRef
         * @param {?} _ngZone
         * @param {?} platform
         * @param {?} globalRippleOptions
         * @param {?=} animationMode
         * @param {?=} _changeDetectorRef
         * @param {?=} tabIndex
         * @param {?=} _document
         */
        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
        animationMode, _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
        _document) {
          var _this14;

          _classCallCheck(this, MatChip);

          _this14 = _super2.call(this, _elementRef);
          _this14._elementRef = _elementRef;
          _this14._ngZone = _ngZone;
          _this14._changeDetectorRef = _changeDetectorRef;
          /**
           * Whether the chip has focus.
           */

          _this14._hasFocus = false;
          /**
           * Whether the chip list is selectable
           */

          _this14.chipListSelectable = true;
          /**
           * Whether the chip list is in multi-selection mode.
           */

          _this14._chipListMultiple = false;
          /**
           * Whether the chip list as a whole is disabled.
           */

          _this14._chipListDisabled = false;
          _this14._selected = false;
          _this14._selectable = true;
          _this14._disabled = false;
          _this14._removable = true;
          /**
           * Emits when the chip is focused.
           */

          _this14._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Emits when the chip is blured.
           */

          _this14._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Emitted when the chip is selected or deselected.
           */

          _this14.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Emitted when the chip is destroyed.
           */

          _this14.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Emitted when a chip is to be removed.
           */

          _this14.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          _this14._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
          // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
          // the proper styles.


          _this14._chipRippleTarget = (_document || document).createElement('div');

          _this14._chipRippleTarget.classList.add('mat-chip-ripple');

          _this14._elementRef.nativeElement.appendChild(_this14._chipRippleTarget);

          _this14._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this14), _ngZone, _this14._chipRippleTarget, platform);

          _this14._chipRipple.setupTriggerEvents(_elementRef);

          _this14.rippleConfig = globalRippleOptions || {};
          _this14._animationsDisabled = animationMode === 'NoopAnimations';
          _this14.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
          return _this14;
        }
        /**
         * Whether ripples are disabled on interaction
         * \@docs-private
         * @return {?}
         */


        _createClass(MatChip, [{
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
          }
          /**
           * Whether the chip is selected.
           * @return {?}
           */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (coercedValue !== this._selected) {
              this._selected = coercedValue;

              this._dispatchSelectionChange();
            }
          }
          /**
           * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
           * @return {?}
           */

        }, {
          key: "value",
          get: function get() {
            return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._value = value;
          }
          /**
           * Whether or not the chip is selectable. When a chip is not selectable,
           * changes to its selected state are always ignored. By default a chip is
           * selectable, and it becomes non-selectable if its parent chip list is
           * not selectable.
           * @return {?}
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable && this.chipListSelectable;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the chip is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._chipListDisabled || this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Determines whether or not the chip displays the remove styling and emits (removed) events.
           * @return {?}
           */

        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * The ARIA selected applied to the chip.
           * @return {?}
           */

        }, {
          key: "ariaSelected",
          get: function get() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_addHostClassName",
          value: function _addHostClassName() {
            /** @type {?} */
            var basicChipAttrName = 'mat-basic-chip';
            /** @type {?} */

            var element =
            /** @type {?} */
            this._elementRef.nativeElement;

            if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
              element.classList.add(basicChipAttrName);
              return;
            } else {
              element.classList.add('mat-standard-chip');
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.emit({
              chip: this
            });

            this._chipRipple._removeTriggerEvents();
          }
          /**
           * Selects the chip.
           * @return {?}
           */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /**
           * Deselects the chip.
           * @return {?}
           */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /**
           * Select this chip and emit selected event
           * @return {?}
           */

        }, {
          key: "selectViaInteraction",
          value: function selectViaInteraction() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange(true);

              this._markForCheck();
            }
          }
          /**
           * Toggles the current selected state of this chip.
           * @param {?=} isUserInput
           * @return {?}
           */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this._selected = !this.selected;

            this._dispatchSelectionChange(isUserInput);

            this._markForCheck();

            return this.selected;
          }
          /**
           * Allows for programmatic focusing of the chip.
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            if (!this._hasFocus) {
              this._elementRef.nativeElement.focus();

              this._onFocus.next({
                chip: this
              });
            }

            this._hasFocus = true;
          }
          /**
           * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
           * BACKSPACE keys are pressed.
           *
           * Informs any listeners of the removal request. Does not remove the chip from the DOM.
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this.removable) {
              this.removed.emit({
                chip: this
              });
            }
          }
          /**
           * Handles click events on the chip.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.disabled) {
              event.preventDefault();
            } else {
              event.stopPropagation();
            }
          }
          /**
           * Handle custom key presses.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (this.disabled) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove(); // Always prevent so page navigation does not occur

                event.preventDefault();
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                  this.toggleSelected(true);
                } // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
                break;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this15 = this;

            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this15._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                _this15._hasFocus = false;

                _this15._onBlur.next({
                  chip: _this15
                });
              });
            });
          }
          /**
           * @private
           * @param {?=} isUserInput
           * @return {?}
           */

        }, {
          key: "_dispatchSelectionChange",
          value: function _dispatchSelectionChange() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.selectionChange.emit({
              source: this,
              isUserInput: isUserInput,
              selected: this._selected
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }]);

        return MatChip;
      }(_MatChipMixinBase);

      MatChip.ɵfac = function MatChip_Factory(t) {
        return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
      };

      MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipAvatar, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipTrailingIcon, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipRemove, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
        hostVars: 14,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatChip_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChip_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          selected: "selected",
          value: "value",
          selectable: "selectable",
          disabled: "disabled",
          removable: "removable"
        },
        outputs: {
          selectionChange: "selectionChange",
          destroyed: "destroyed",
          removed: "removed"
        },
        exportAs: ["matChip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      MatChip.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      MatChip.propDecorators = {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipAvatar]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipTrailingIcon]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatChipRemove;
          })]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
            inputs: ['color', 'disableRipple', 'tabIndex'],
            exportAs: 'matChip',
            host: {
              'class': 'mat-chip mat-focus-indicator',
              '[attr.tabindex]': 'disabled ? null : tabIndex',
              'role': 'option',
              '[class.mat-chip-selected]': 'selected',
              '[class.mat-chip-with-avatar]': 'avatar',
              '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
              '[class.mat-chip-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationsDisabled',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-selected]': 'ariaSelected',
              '(click)': '_handleClick($event)',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': 'focus()',
              '(blur)': '_blur()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatChipAvatar]
          }],
          trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatChipTrailingIcon]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatChipRemove;
            })]
          }]
        });
      })();

      if (false) {}
      /**
       * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
       * available at https://material.io/icons/#ic_cancel.
       *
       * Example:
       *
       *     `<mat-chip>
       *       <mat-icon matChipRemove>cancel</mat-icon>
       *     </mat-chip>`
       *
       * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
       * styles to properly center the icon within the chip.
       */


      var MatChipRemove = /*#__PURE__*/function () {
        /**
         * @param {?} _parentChip
         * @param {?=} elementRef
         */
        function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
        elementRef) {
          _classCallCheck(this, MatChipRemove);

          this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

          if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
          }
        }
        /**
         * Calls the parent chip's public `remove()` method if applicable.
         * @param {?} event
         * @return {?}
         */


        _createClass(MatChipRemove, [{
          key: "_handleClick",
          value: function _handleClick(event) {
            /** @type {?} */
            var parentChip = this._parentChip;

            if (parentChip.removable && !parentChip.disabled) {
              parentChip.remove();
            } // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.


            event.stopPropagation();
          }
        }]);

        return MatChipRemove;
      }();

      MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
        return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }
        }
      });
      /** @nocollapse */

      MatChipRemove.ctorParameters = function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[matChipRemove]',
            host: {
              'class': 'mat-chip-remove mat-chip-trailing-icon',
              '(click)': '_handleClick($event)'
            }
          }]
        }], function () {
          return [{
            type: MatChip
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/chip-default-options.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default options, for the chips module, that can be overridden.
       * @record
       */


      function MatChipsDefaultOptions() {}

      if (false) {}
      /**
       * Injection token to be used to override the default options for the chips module.
       * @type {?}
       */


      var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/chip-list.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Boilerplate for applying mixins to MatChipList.

      /**
       * \@docs-private
       */

      var MatChipListBase =
      /**
       * @param {?} _defaultErrorStateMatcher
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} ngControl
       */
      function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        _classCallCheck(this, MatChipListBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      if (false) {}
      /** @type {?} */


      var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.

      /** @type {?} */


      var nextUniqueId = 0;
      /**
       * Change event object that is emitted when the chip list value has changed.
       */

      var MatChipListChange =
      /**
       * @param {?} source
       * @param {?} value
       */
      function MatChipListChange(source, value) {
        _classCallCheck(this, MatChipListChange);

        this.source = source;
        this.value = value;
      };

      if (false) {}
      /**
       * A material design chips component (named ChipList for its similarity to the List component).
       */


      var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
        _inherits(MatChipList, _MatChipListMixinBase2);

        var _super3 = _createSuper(MatChipList);

        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} _dir
         * @param {?} _parentForm
         * @param {?} _parentFormGroup
         * @param {?} _defaultErrorStateMatcher
         * @param {?} ngControl
         */
        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
          var _this16;

          _classCallCheck(this, MatChipList);

          _this16 = _super3.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this16._elementRef = _elementRef;
          _this16._changeDetectorRef = _changeDetectorRef;
          _this16._dir = _dir;
          _this16.ngControl = ngControl;
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           */

          _this16.controlType = 'mat-chip-list';
          /**
           * When a chip is destroyed, we store the index of the destroyed chip until the chips
           * query list notifies about the update. This is necessary because we cannot determine an
           * appropriate chip that should receive focus until the array of chips updated completely.
           */

          _this16._lastDestroyedChipIndex = null;
          /**
           * Subject that emits when the component has been destroyed.
           */

          _this16._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Uid of the chip list
           */

          _this16._uid = "mat-chip-list-".concat(nextUniqueId++);
          /**
           * Tab index for the chip list.
           */

          _this16._tabIndex = 0;
          /**
           * User defined tab index.
           * When it is not null, use user defined tab index. Otherwise use _tabIndex
           */

          _this16._userTabIndex = null;
          /**
           * Function when touched
           */

          _this16._onTouched =
          /**
          * @return {?}
          */
          function () {};
          /**
           * Function when changed
           */


          _this16._onChange =
          /**
          * @return {?}
          */
          function () {};

          _this16._multiple = false;

          _this16._compareWith =
          /**
          * @param {?} o1
          * @param {?} o2
          * @return {?}
          */
          function (o1, o2) {
            return o1 === o2;
          };

          _this16._required = false;
          _this16._disabled = false;
          /**
           * Orientation of the chip list.
           */

          _this16.ariaOrientation = 'horizontal';
          _this16._selectable = true;
          /**
           * Event emitted when the selected chip list value has been changed by the user.
           */

          _this16.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the chip-list changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * \@docs-private
           */

          _this16.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_this16.ngControl) {
            _this16.ngControl.valueAccessor = _assertThisInitialized(_this16);
          }

          return _this16;
        }
        /**
         * The array of selected chips inside chip list.
         * @return {?}
         */


        _createClass(MatChipList, [{
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /**
           * The ARIA role applied to the chip list.
           * @return {?}
           */

        }, {
          key: "role",
          get: function get() {
            return this.empty ? null : 'listbox';
          }
          /**
           * Whether the user should be allowed to select multiple chips.
           * @return {?}
           */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * A function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           * @return {?}
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          }
          /**
           * @param {?} fn
           * @return {?}
           */
          ,
          set: function set(fn) {
            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.writeValue(value);
            this._value = value;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "id",
          get: function get() {
            return this._chipInput ? this._chipInput.id : this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "placeholder",
          get: function get() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /**
           * Whether any chips or the matChipInput inside of this chip-list has focus.
           * @return {?}
           */

        }, {
          key: "focused",
          get: function get() {
            return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "empty",
          get: function get() {
            return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return !this.empty || this.focused;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.ngControl ? !!this.ngControl.disabled : this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * Whether or not this chip list is selectable. When a chip list is not selectable,
           * the selected states for all the chips inside the chip list are always ignored.
           * @return {?}
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            var _this17 = this;

            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (this.chips) {
              this.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                return chip.chipListSelectable = _this17._selectable;
              });
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "tabIndex",
          set: function set(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
          }
          /**
           * Combined stream of all of the child chips' selection change events.
           * @return {?}
           */

        }, {
          key: "chipSelectionChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.selectionChange;
            })));
          }
          /**
           * Combined stream of all of the child chips' focus change events.
           * @return {?}
           */

        }, {
          key: "chipFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip._onFocus;
            })));
          }
          /**
           * Combined stream of all of the child chips' blur change events.
           * @return {?}
           */

        }, {
          key: "chipBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip._onBlur;
            })));
          }
          /**
           * Combined stream of all of the child chips' remove change events.
           * @return {?}
           */

        }, {
          key: "chipRemoveChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.destroyed;
            })));
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this18 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} dir
              * @return {?}
              */
              function (dir) {
                return _this18._keyManager.withHorizontalOrientation(dir);
              });
            }

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this18._allowFocusEscape();
            }); // When the list changes, re-subscribe


            this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this18.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(
                /**
                * @return {?}
                */
                function () {
                  _this18._syncChipsState();
                });
              }

              _this18._resetChips(); // Reset chips selected/deselected status


              _this18._initializeSelection(); // Check to see if we need to update our tab index


              _this18._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


              _this18._updateFocusForDestroyedChips();

              _this18.stateChanges.next();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
            this.stateChanges.next();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();

              if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this.stateChanges.complete();

            this._dropSubscriptions();
          }
          /**
           * Associates an HTML input element with this chip list.
           * @param {?} inputElement
           * @return {?}
           */

        }, {
          key: "registerInput",
          value: function registerInput(inputElement) {
            this._chipInput = inputElement;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @param {?} ids
           * @return {?}
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.chips) {
              this._setSelectionByValue(value, false);
            }
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * \@docs-private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
              this.focus();
            }
          }
          /**
           * Focuses the first non-disabled chip in this chip list, or the associated input when there
           * are no eligible chips.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(options) {
            if (this.disabled) {
              return;
            } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list


            if (this._chipInput && this._chipInput.focused) {// do nothing
            } else if (this.chips.length > 0) {
              this._keyManager.setFirstItemActive();

              this.stateChanges.next();
            } else {
              this._focusInput(options);

              this.stateChanges.next();
            }
          }
          /**
           * Attempt to focus an input if we have one.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "_focusInput",
          value: function _focusInput(options) {
            if (this._chipInput) {
              this._chipInput.focus(options);
            }
          }
          /**
           * Pass events to the keyboard manager. Available here for tests.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            /** @type {?} */
            var target =
            /** @type {?} */
            event.target; // If they are on an empty input and hit backspace, focus the last chip

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else if (target && target.classList.contains('mat-chip')) {
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["HOME"]) {
                this._keyManager.setFirstItemActive();

                event.preventDefault();
              } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["END"]) {
                this._keyManager.setLastItemActive();

                event.preventDefault();
              } else {
                this._keyManager.onKeydown(event);
              }

              this.stateChanges.next();
            }
          }
          /**
           * Check the tab index as you should not be allowed to focus an empty list.
           * @protected
           * @return {?}
           */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
          }
          /**
           * If the amount of chips changed, we need to update the
           * key manager state and focus the next closest chip.
           * @protected
           * @return {?}
           */

        }, {
          key: "_updateFocusForDestroyedChips",
          value: function _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
              if (this.chips.length) {
                /** @type {?} */
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

                this._keyManager.setActiveItem(newChipIndex);
              } else {
                this.focus();
              }
            }

            this._lastDestroyedChipIndex = null;
          }
          /**
           * Utility to ensure all indexes are valid.
           *
           * @private
           * @param {?} index The index to be checked.
           * @return {?} True if the index is valid for our list of chips.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
          }
          /**
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_isInputEmpty",
          value: function _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
              /** @type {?} */
              var input =
              /** @type {?} */
              element;
              return !input.value;
            }

            return false;
          }
          /**
           * @param {?} value
           * @param {?=} isUserInput
           * @return {?}
           */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this19 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this._clearSelection();

            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.deselect();
            });

            if (Array.isArray(value)) {
              value.forEach(
              /**
              * @param {?} currentValue
              * @return {?}
              */
              function (currentValue) {
                return _this19._selectValue(currentValue, isUserInput);
              });

              this._sortValues();
            } else {
              /** @type {?} */
              var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what chip the user interacted with last.


              if (correspondingChip) {
                if (isUserInput) {
                  this._keyManager.setActiveItem(correspondingChip);
                }
              }
            }
          }
          /**
           * Finds and selects the chip based on its value.
           * @private
           * @param {?} value
           * @param {?=} isUserInput
           * @return {?} Chip that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this20 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            /** @type {?} */
            var correspondingChip = this.chips.find(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.value != null && _this20._compareWith(chip.value, value);
            });

            if (correspondingChip) {
              isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

              this._selectionModel.select(correspondingChip);
            }

            return correspondingChip;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this21 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              if (_this21.ngControl || _this21._value) {
                _this21._setSelectionByValue(_this21.ngControl ? _this21.ngControl.value : _this21._value, false);

                _this21.stateChanges.next();
              }
            });
          }
          /**
           * Deselects every chip in the list.
           * @private
           * @param {?=} skip Chip that should not be deselected.
           * @return {?}
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection(skip) {
            this._selectionModel.clear();

            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              if (chip !== skip) {
                chip.deselect();
              }
            });
            this.stateChanges.next();
          }
          /**
           * Sorts the model values, ensuring that they keep the same
           * order that they have in the panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this22 = this;

            if (this._multiple) {
              this._selectionModel.clear();

              this.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                if (chip.selected) {
                  _this22._selectionModel.select(chip);
                }
              });
              this.stateChanges.next();
            }
          }
          /**
           * Emits change event to set the model value.
           * @private
           * @param {?=} fallbackValue
           * @return {?}
           */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            /** @type {?} */
            var valueToEmit = null;

            if (Array.isArray(this.selected)) {
              valueToEmit = this.selected.map(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                return chip.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * When blurred, mark the field as touched when focus moved outside the chip list.
           * @return {?}
           */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this23 = this;

            if (!this._hasFocusedChip()) {
              this._keyManager.setActiveItem(-1);
            }

            if (!this.disabled) {
              if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  if (!_this23.focused) {
                    _this23._markAsTouched();
                  }
                });
              } else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
              }
            }
          }
          /**
           * Mark the field as touched
           * @return {?}
           */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /**
           * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
           * user to tab out of it. This prevents the list from capturing focus and redirecting
           * it back to the first chip, creating a focus trap, if it user tries to tab away.
           * @return {?}
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this24 = this;

            if (this._tabIndex !== -1) {
              this._tabIndex = -1;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this24._tabIndex = _this24._userTabIndex || 0;

                _this24._changeDetectorRef.markForCheck();
              });
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_resetChips",
          value: function _resetChips() {
            this._dropSubscriptions();

            this._listenToChipsFocus();

            this._listenToChipsSelection();

            this._listenToChipsRemoved();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_dropSubscriptions",
          value: function _dropSubscriptions() {
            if (this._chipFocusSubscription) {
              this._chipFocusSubscription.unsubscribe();

              this._chipFocusSubscription = null;
            }

            if (this._chipBlurSubscription) {
              this._chipBlurSubscription.unsubscribe();

              this._chipBlurSubscription = null;
            }

            if (this._chipSelectionSubscription) {
              this._chipSelectionSubscription.unsubscribe();

              this._chipSelectionSubscription = null;
            }

            if (this._chipRemoveSubscription) {
              this._chipRemoveSubscription.unsubscribe();

              this._chipRemoveSubscription = null;
            }
          }
          /**
           * Listens to user-generated selection events on each chip.
           * @private
           * @return {?}
           */

        }, {
          key: "_listenToChipsSelection",
          value: function _listenToChipsSelection() {
            var _this25 = this;

            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              event.source.selected ? _this25._selectionModel.select(event.source) : _this25._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

              if (!_this25.multiple) {
                _this25.chips.forEach(
                /**
                * @param {?} chip
                * @return {?}
                */
                function (chip) {
                  if (!_this25._selectionModel.isSelected(chip) && chip.selected) {
                    chip.deselect();
                  }
                });
              }

              if (event.isUserInput) {
                _this25._propagateChanges();
              }
            });
          }
          /**
           * Listens to user-generated selection events on each chip.
           * @private
           * @return {?}
           */

        }, {
          key: "_listenToChipsFocus",
          value: function _listenToChipsFocus() {
            var _this26 = this;

            this._chipFocusSubscription = this.chipFocusChanges.subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var chipIndex = _this26.chips.toArray().indexOf(event.chip);

              if (_this26._isValidIndex(chipIndex)) {
                _this26._keyManager.updateActiveItem(chipIndex);
              }

              _this26.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this26._blur();

              _this26.stateChanges.next();
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_listenToChipsRemoved",
          value: function _listenToChipsRemoved() {
            var _this27 = this;

            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var chip = event.chip;
              /** @type {?} */

              var chipIndex = _this27.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
              // the index in order to be able to determine an appropriate sibling chip that will
              // receive focus.


              if (_this27._isValidIndex(chipIndex) && chip._hasFocus) {
                _this27._lastDestroyedChipIndex = chipIndex;
              }
            });
          }
          /**
           * Checks whether an event comes from inside a chip element.
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_originatesFromChip",
          value: function _originatesFromChip(event) {
            /** @type {?} */
            var currentElement =
            /** @type {?} */
            event.target;

            while (currentElement && currentElement !== this._elementRef.nativeElement) {
              if (currentElement.classList.contains('mat-chip')) {
                return true;
              }

              currentElement = currentElement.parentElement;
            }

            return false;
          }
          /**
           * Checks whether any of the chips is focused.
           * @private
           * @return {?}
           */

        }, {
          key: "_hasFocusedChip",
          value: function _hasFocusedChip() {
            return this.chips.some(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip._hasFocus;
            });
          }
          /**
           * Syncs the list's state with the individual chips.
           * @private
           * @return {?}
           */

        }, {
          key: "_syncChipsState",
          value: function _syncChipsState() {
            var _this28 = this;

            if (this.chips) {
              this.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                chip._chipListDisabled = _this28._disabled;
                chip._chipListMultiple = _this28.multiple;
              });
            }
          }
        }]);

        return MatChipList;
      }(_MatChipListMixinBase);

      MatChipList.ɵfac = function MatChipList_Factory(t) {
        return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
      };

      MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatChipList,
        selectors: [["mat-chip-list"]],
        contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
          }
        },
        hostAttrs: [1, "mat-chip-list"],
        hostVars: 15,
        hostBindings: function MatChipList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipList_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
          }
        },
        inputs: {
          ariaOrientation: ["aria-orientation", "ariaOrientation"],
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          required: "required",
          placeholder: "placeholder",
          disabled: "disabled",
          selectable: "selectable",
          tabIndex: "tabIndex",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        exportAs: ["matChipList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
          useExisting: MatChipList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-chip-list-wrapper"]],
        template: function MatChipList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatChipList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      MatChipList.propDecorators = {
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-chip-list',
            template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
            exportAs: 'matChipList',
            host: {
              '[attr.tabindex]': 'disabled ? null : _tabIndex',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-required]': 'role ? required : null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.role]': 'role',
              '[class.mat-chip-list-disabled]': 'disabled',
              '[class.mat-chip-list-invalid]': 'errorState',
              '[class.mat-chip-list-required]': 'required',
              '[attr.aria-orientation]': 'ariaOrientation',
              'class': 'mat-chip-list',
              '(focus)': 'focus()',
              '(blur)': '_blur()',
              '(keydown)': '_keydown($event)',
              '[id]': '_uid'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
              useExisting: MatChipList
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/chip-input.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Represents an input event on a `matChipInput`.
       * @record
       */


      function MatChipInputEvent() {}

      if (false) {} // Increasing integer for generating unique ids.

      /** @type {?} */


      var nextUniqueId$1 = 0;
      /**
       * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
       * May be placed inside or outside of an `<mat-chip-list>`.
       */

      var MatChipInput = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} _defaultOptions
         */
        function MatChipInput(_elementRef, _defaultOptions) {
          _classCallCheck(this, MatChipInput);

          this._elementRef = _elementRef;
          this._defaultOptions = _defaultOptions;
          /**
           * Whether the control is focused.
           */

          this.focused = false;
          this._addOnBlur = false;
          /**
           * The list of key codes that will trigger a chipEnd event.
           *
           * Defaults to `[ENTER]`.
           */

          this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
          /**
           * Emitted when a chip is to be added.
           */

          this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The input's placeholder text.
           */

          this.placeholder = '';
          /**
           * Unique id for the input.
           */

          this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
          this._disabled = false;
          this._inputElement =
          /** @type {?} */
          this._elementRef.nativeElement;
        }
        /**
         * Register input for chip list
         * @param {?} value
         * @return {?}
         */


        _createClass(MatChipInput, [{
          key: "chipList",
          set: function set(value) {
            if (value) {
              this._chipList = value;

              this._chipList.registerInput(this);
            }
          }
          /**
           * Whether or not the chipEnd event will be emitted when the input is blurred.
           * @return {?}
           */

        }, {
          key: "addOnBlur",
          get: function get() {
            return this._addOnBlur;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the input is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this._chipList && this._chipList.disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the input is empty.
           * @return {?}
           */

        }, {
          key: "empty",
          get: function get() {
            return !this._inputElement.value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._chipList.stateChanges.next();
          }
          /**
           * Utility method to make host definition/tests more clear.
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
              this._chipList._allowFocusEscape();
            }

            this._emitChipEnd(event);
          }
          /**
           * Checks to see if the blur should emit the (chipEnd) event.
           * @return {?}
           */

        }, {
          key: "_blur",
          value: function _blur() {
            if (this.addOnBlur) {
              this._emitChipEnd();
            }

            this.focused = false; // Blur the chip list if it is not focused

            if (!this._chipList.focused) {
              this._chipList._blur();
            }

            this._chipList.stateChanges.next();
          }
          /**
           * @return {?}
           */

        }, {
          key: "_focus",
          value: function _focus() {
            this.focused = true;

            this._chipList.stateChanges.next();
          }
          /**
           * Checks to see if the (chipEnd) event needs to be emitted.
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "_emitChipEnd",
          value: function _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
              this._chipList._keydown(event);
            }

            if (!event || this._isSeparatorKey(event)) {
              this.chipEnd.emit({
                input: this._inputElement,
                value: this._inputElement.value
              });

              if (event) {
                event.preventDefault();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onInput",
          value: function _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
          }
          /**
           * Focuses the input.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputElement.focus(options);
          }
          /**
           * Checks whether a keycode is one of the configured separators.
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_isSeparatorKey",
          value: function _isSeparatorKey(event) {
            if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event)) {
              return false;
            }
            /** @type {?} */


            var separators = this.separatorKeyCodes;
            /** @type {?} */

            var keyCode = event.keyCode;
            return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
          }
        }]);

        return MatChipInput;
      }();

      MatChipInput.ɵfac = function MatChipInput_Factory(t) {
        return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
      };

      MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-chip-input", "mat-input-element"],
        hostVars: 5,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
          }
        },
        inputs: {
          separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          chipList: ["matChipInputFor", "chipList"],
          addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
          disabled: "disabled"
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      MatChipInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatChipInput.propDecorators = {
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'input[matChipInputFor]',
            exportAs: 'matChipInput, matChipInputFor',
            host: {
              'class': 'mat-chip-input mat-input-element',
              '(keydown)': '_keydown($event)',
              '(blur)': '_blur()',
              '(focus)': '_focus()',
              '(input)': '_onInput()',
              '[id]': 'id',
              '[attr.disabled]': 'disabled || null',
              '[attr.placeholder]': 'placeholder || null',
              '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
              '[attr.aria-required]': '_chipList && _chipList.required || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
          }],
          chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/chips-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
      var ɵ0 = {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
      };

      var MatChipsModule = function MatChipsModule() {
        _classCallCheck(this, MatChipsModule);
      };

      MatChipsModule.ɵfac = function MatChipsModule_Factory(t) {
        return new (t || MatChipsModule)();
      };

      MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatChipsModule
      });
      MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue:
          /** @type {?} */
          ɵ0
        }]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
          declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
          exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: CHIP_DECLARATIONS,
            declarations: CHIP_DECLARATIONS,
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
              provide: MAT_CHIPS_DEFAULT_OPTIONS,
              useValue:
              /** @type {?} */
              ɵ0
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/chips/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=chips.js.map

      /***/

    },

    /***/
    "BLzX":
    /*!*********************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-inside/maintenance-inside.component.css ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function BLzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n     background-color: rgb(249 244 249);\r\n  }\r\n  \r\n   a:hover {\r\n    background-color: rgb(179, 177, 177);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLWluc2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztLQUNiLGtDQUFrQztFQUNyQzs7R0FFQztJQUNDLG9DQUFvQztFQUN0QyIsImZpbGUiOiJtYWludGVuYW5jZS1pbnNpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAyNDQgMjQ5KTtcclxuICB9XHJcbiAgXHJcbiAgIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc3LCAxNzcpO1xyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    "FKr1":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
      \**********************************************************************/

    /*! exports provided: APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, GestureConfig, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, MAT_HAMMER_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, SEP, ShowOnDirtyErrorStateMatcher, VERSION, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵangular_material_src_material_core_core_a */

    /***/
    function FKr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APR", function () {
        return APR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUG", function () {
        return AUG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
        return AnimationCurves;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
        return AnimationDurations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEC", function () {
        return DEC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
        return ErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FEB", function () {
        return FEB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
        return GestureConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JAN", function () {
        return JAN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUL", function () {
        return JUL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUN", function () {
        return JUN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAR", function () {
        return MAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
        return MATERIAL_SANITY_CHECKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
        return MAT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
        return MAT_DATE_LOCALE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
        return MAT_DATE_LOCALE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
        return MAT_DATE_LOCALE_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
        return MAT_HAMMER_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
        return MAT_LABEL_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
        return MAT_NATIVE_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
        return MAT_OPTION_PARENT_COMPONENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
        return MAT_RIPPLE_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAY", function () {
        return MAY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
        return MatCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLine", function () {
        return MatLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
        return MatLineModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
        return MatLineSetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
        return MatNativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
        return MatOptgroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOption", function () {
        return MatOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
        return MatOptionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
        return MatOptionSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
        return MatPseudoCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
        return MatPseudoCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
        return MatRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
        return MatRippleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NOV", function () {
        return NOV;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
        return NativeDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
        return NativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OCT", function () {
        return OCT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
        return RippleRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
        return RippleRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEP", function () {
        return SEP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
        return ShowOnDirtyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
        return _countGroupLabelsBeforeOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
        return _getOptionScrollPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
        return defaultRippleAnimationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
        return mixinColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
        return mixinDisableRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
        return mixinDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
        return mixinErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
        return mixinInitialized;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
        return mixinTabIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLines", function () {
        return setLines;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function () {
        return MATERIAL_SANITY_CHECKS_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk */
      "xz+E");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/version.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of Angular Material.
       * @type {?}
       */


      var _c0 = ["*", [["mat-option"], ["ng-container"]]];
      var _c1 = ["*", "mat-option, ng-container"];

      function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c2 = ["*"];
      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/animation/animation.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * \@docs-private
       */

      var AnimationCurves = function AnimationCurves() {
        _classCallCheck(this, AnimationCurves);
      };

      AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
      AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
      AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
      AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';

      if (false) {}
      /**
       * \@docs-private
       */


      var AnimationDurations = function AnimationDurations() {
        _classCallCheck(this, AnimationDurations);
      };

      AnimationDurations.COMPLEX = '375ms';
      AnimationDurations.ENTERING = '225ms';
      AnimationDurations.EXITING = '195ms';

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/common-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Private version constant to circumvent test/build issues,
      // i.e. avoid core to depend on the @angular/material primary entry-point
      // Can be removed once the Material primary entry-point no longer
      // re-exports all secondary entry-points

      /** @type {?} */


      var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
      /**
       * \@docs-private
       * @return {?}
       */

      function MATERIAL_SANITY_CHECKS_FACTORY() {
        return true;
      }
      /**
       * Injection token that configures whether the Material sanity checks are enabled.
       * @type {?}
       */


      var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
        providedIn: 'root',
        factory: MATERIAL_SANITY_CHECKS_FACTORY
      });
      /**
       * Object that can be used to configure the sanity checks granularly.
       * @record
       */

      function GranularSanityChecks() {}

      if (false) {}
      /**
       * Module that captures anything that should be loaded and/or run for *all* Angular Material
       * components. This includes Bidi, etc.
       *
       * This module should be imported to each top-level component module (e.g., MatTabsModule).
       */


      var MatCommonModule = /*#__PURE__*/function () {
        /**
         * @param {?} highContrastModeDetector
         * @param {?} sanityChecks
         * @param {?=} document
         */
        function MatCommonModule(highContrastModeDetector, sanityChecks,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, MatCommonModule);

          /**
           * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
           */
          this._hasDoneGlobalChecks = false;
          this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
          // in MatCommonModule.

          highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
          // throws an error if we use the `SanityChecks` type directly.


          this._sanityChecks = sanityChecks;

          if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();

            this._checkThemeIsPresent();

            this._checkCdkVersionMatch();

            this._hasDoneGlobalChecks = true;
          }
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */


        _createClass(MatCommonModule, [{
          key: "_getDocument",
          value: function _getDocument() {
            /** @type {?} */
            var doc = this._document || document;
            return typeof doc === 'object' && doc ? doc : null;
          }
          /**
           * Use defaultView of injected document if available or fallback to global window reference
           * @private
           * @return {?}
           */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            /** @type {?} */
            var doc = this._getDocument();
            /** @type {?} */


            var win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
            return typeof win === 'object' && win ? win : null;
          }
          /**
           * Whether any sanity checks are enabled.
           * @private
           * @return {?}
           */

        }, {
          key: "_checksAreEnabled",
          value: function _checksAreEnabled() {
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
          }
          /**
           * Whether the code is running in tests.
           * @private
           * @return {?}
           */

        }, {
          key: "_isTestEnv",
          value: function _isTestEnv() {
            /** @type {?} */
            var window =
            /** @type {?} */
            this._getWindow();

            return window && (window.__karma__ || window.jasmine);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_checkDoctypeIsDefined",
          value: function _checkDoctypeIsDefined() {
            /** @type {?} */
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
            /** @type {?} */
            this._sanityChecks.doctype);
            /** @type {?} */


            var document = this._getDocument();

            if (isEnabled && document && !document.doctype) {
              console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_checkThemeIsPresent",
          value: function _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.

            /** @type {?} */
            var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !
            /** @type {?} */
            this._sanityChecks.theme;
            /** @type {?} */

            var document = this._getDocument();

            if (isDisabled || !document || !document.body || typeof getComputedStyle !== 'function') {
              return;
            }
            /** @type {?} */


            var testElement = document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            document.body.appendChild(testElement);
            /** @type {?} */

            var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

            if (computedStyle && computedStyle.display !== 'none') {
              console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
            }

            document.body.removeChild(testElement);
          }
          /**
           * Checks whether the material version matches the cdk version
           * @private
           * @return {?}
           */

        }, {
          key: "_checkCdkVersionMatch",
          value: function _checkCdkVersionMatch() {
            /** @type {?} */
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
            /** @type {?} */
            this._sanityChecks.version);

            if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
              console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
            }
          }
        }]);

        return MatCommonModule;
      }();

      MatCommonModule.ɵfac = function MatCommonModule_Factory(t) {
        return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
      };

      MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
      MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      });
      /** @nocollapse */

      MatCommonModule.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MATERIAL_SANITY_CHECKS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/disabled.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@docs-private
       * @record
       */


      function CanDisable() {}

      if (false) {}
      /**
       * Mixin to augment a directive with a `disabled` property.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinDisabled(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super4 = _createSuper(_class);

          /**
           * @param {...?} args
           */
          function _class() {
            var _this29;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this29 = _super4.call.apply(_super4, [this].concat(args));
            _this29._disabled = false;
            return _this29;
          }
          /**
           * @return {?}
           */


          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/color.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * \@docs-private
       * @record
       */


      function CanColor() {}

      if (false) {}
      /**
       * \@docs-private
       * @record
       */


      function HasElementRef() {}

      if (false) {}
      /**
       * Mixin to augment a directive with a `color` property.
       * @template T
       * @param {?} base
       * @param {?=} defaultColor
       * @return {?}
       */


      function mixinColor(base, defaultColor) {
        return /*#__PURE__*/function (_base2) {
          _inherits(_class2, _base2);

          var _super5 = _createSuper(_class2);

          /**
           * @param {...?} args
           */
          function _class2() {
            var _this30;

            _classCallCheck(this, _class2);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this30 = _super5.call.apply(_super5, [this].concat(args)); // Set the default color that can be specified from the mixin.

            _this30.color = defaultColor;
            return _this30;
          }
          /**
           * @return {?}
           */


          _createClass(_class2, [{
            key: "color",
            get: function get() {
              return this._color;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              /** @type {?} */
              var colorPalette = value || defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
          }]);

          return _class2;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/disable-ripple.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@docs-private
       * @record
       */


      function CanDisableRipple() {}

      if (false) {}
      /**
       * Mixin to augment a directive with a `disableRipple` property.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinDisableRipple(base) {
        return /*#__PURE__*/function (_base3) {
          _inherits(_class3, _base3);

          var _super6 = _createSuper(_class3);

          /**
           * @param {...?} args
           */
          function _class3() {
            var _this31;

            _classCallCheck(this, _class3);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this31 = _super6.call.apply(_super6, [this].concat(args));
            _this31._disableRipple = false;
            return _this31;
          }
          /**
           * Whether the ripple effect is disabled or not.
           * @return {?}
           */


          _createClass(_class3, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class3;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/tabindex.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * \@docs-private
       * @record
       */


      function HasTabIndex() {}

      if (false) {}
      /**
       * Mixin to augment a directive with a `tabIndex` property.
       * @template T
       * @param {?} base
       * @param {?=} defaultTabIndex
       * @return {?}
       */


      function mixinTabIndex(base) {
        var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return /*#__PURE__*/function (_base4) {
          _inherits(_class4, _base4);

          var _super7 = _createSuper(_class4);

          /**
           * @param {...?} args
           */
          function _class4() {
            var _this32;

            _classCallCheck(this, _class4);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this32 = _super7.call.apply(_super7, [this].concat(args));
            _this32._tabIndex = defaultTabIndex;
            return _this32;
          }
          /**
           * @return {?}
           */


          _createClass(_class4, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? value : defaultTabIndex;
            }
          }]);

          return _class4;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/error-state.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@docs-private
       * @record
       */


      function CanUpdateErrorState() {}

      if (false) {}
      /**
       * \@docs-private
       * @record
       */


      function HasErrorState() {}

      if (false) {}
      /**
       * Mixin to augment a directive with updateErrorState method.
       * For component with `errorState` and need to update `errorState`.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinErrorState(base) {
        return /*#__PURE__*/function (_base5) {
          _inherits(_class5, _base5);

          var _super8 = _createSuper(_class5);

          /**
           * @param {...?} args
           */
          function _class5() {
            var _this33;

            _classCallCheck(this, _class5);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this33 = _super8.call.apply(_super8, [this].concat(args));
            /**
             * Whether the component is in an error state.
             */

            _this33.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this33.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            return _this33;
          }
          /**
           * @return {?}
           */


          _createClass(_class5, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              /** @type {?} */
              var oldState = this.errorState;
              /** @type {?} */

              var parent = this._parentFormGroup || this._parentForm;
              /** @type {?} */

              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              /** @type {?} */

              var control = this.ngControl ?
              /** @type {?} */
              this.ngControl.control : null;
              /** @type {?} */

              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class5;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/initialized.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin that adds an initialized property to a directive which, when subscribed to, will emit a
       * value once markInitialized has been called, which should be done during the ngOnInit function.
       * If the subscription is made after it has already been marked as initialized, then it will trigger
       * an emit immediately.
       * \@docs-private
       * @record
       */


      function HasInitialized() {}

      if (false) {}
      /**
       * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinInitialized(base) {
        return /*#__PURE__*/function (_base6) {
          _inherits(_class6, _base6);

          var _super9 = _createSuper(_class6);

          /**
           * @param {...?} args
           */
          function _class6() {
            var _this34;

            _classCallCheck(this, _class6);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this34 = _super9.call.apply(_super9, [this].concat(args));
            /**
             * Whether this directive has been marked as initialized.
             */

            _this34._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this34._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this34.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](
            /**
            * @param {?} subscriber
            * @return {?}
            */
            function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this34._isInitialized) {
                _this34._notifySubscriber(subscriber);
              } else {
                /** @type {?} */
                _this34._pendingSubscribers.push(subscriber);
              }
            });
            return _this34;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * \@docs-private
           * @return {?}
           */


          _createClass(_class6, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              /** @type {?} */
              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /**
             * Emits and completes the subscriber stream (should only emit once).
             * @param {?} subscriber
             * @return {?}
             */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class6;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/common-behaviors/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/datetime/date-adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * InjectionToken for datepicker that can be used to override default locale code.
       * @type {?}
       */


      var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
        providedIn: 'root',
        factory: MAT_DATE_LOCALE_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function MAT_DATE_LOCALE_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
      }
      /**
       * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
       * If you are importing and providing this in your code you can simply remove it.
       * @deprecated
       * \@breaking-change 8.0.0
       * @type {?}
       */


      var MAT_DATE_LOCALE_PROVIDER = {
        provide: MAT_DATE_LOCALE,
        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
      };
      /**
       * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
       * @abstract
       * @template D
       */

      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /**
         * A stream that emits when the locale changes.
         * @return {?}
         */


        _createClass(DateAdapter, [{
          key: "localeChanges",
          get: function get() {
            return this._localeChanges;
          }
          /**
           * Attempts to deserialize a value to a valid date object. This is different from parsing in that
           * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
           * string). The default implementation does not allow any deserialization, it simply checks that
           * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
           * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
           * support passing values from your backend directly to these properties by overriding this method
           * to also deserialize the format used by your backend.
           * @param {?} value The value to be deserialized into a date object.
           * @return {?} The deserialized date object, either a valid date, null if the value can be
           *     deserialized into a null date (e.g. the empty string), or an invalid date.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (value == null || this.isDateInstance(value) && this.isValid(value)) {
              return value;
            }

            return this.invalid();
          }
          /**
           * Sets the locale used for all dates.
           * @param {?} locale The new locale.
           * @return {?}
           */

        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;

            this._localeChanges.next();
          }
          /**
           * Compares two dates.
           * @param {?} first The first date to compare.
           * @param {?} second The second date to compare.
           * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
           *     a number greater than 0 if the first date is later.
           */

        }, {
          key: "compareDate",
          value: function compareDate(first, second) {
            return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
          }
          /**
           * Checks if two dates are equal.
           * @param {?} first The first date to check.
           * @param {?} second The second date to check.
           * @return {?} Whether the two dates are equal.
           *     Null dates are considered equal to other null dates.
           */

        }, {
          key: "sameDate",
          value: function sameDate(first, second) {
            if (first && second) {
              /** @type {?} */
              var firstValid = this.isValid(first);
              /** @type {?} */

              var secondValid = this.isValid(second);

              if (firstValid && secondValid) {
                return !this.compareDate(first, second);
              }

              return firstValid == secondValid;
            }

            return first == second;
          }
          /**
           * Clamp the given date between min and max dates.
           * @param {?} date The date to clamp.
           * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
           * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
           * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
           *     otherwise `date`.
           */

        }, {
          key: "clampDate",
          value: function clampDate(date, min, max) {
            if (min && this.compareDate(date, min) < 0) {
              return min;
            }

            if (max && this.compareDate(date, max) > 0) {
              return max;
            }

            return date;
          }
        }]);

        return DateAdapter;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/datetime/date-formats.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/datetime/native-date-adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO(mmalerba): Remove when we no longer support safari 9.

      /**
       * Whether the browser supports the Intl API.
       * @type {?}
       */

      var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
      } catch (_a) {
        SUPPORTS_INTL_API = false;
      }
      /**
       * The default month names to use if Intl API is not available.
       * @type {?}
       */


      var DEFAULT_MONTH_NAMES = {
        'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      };

      var ɵ0 =
      /**
      * @param {?} i
      * @return {?}
      */
      function ɵ0(i) {
        return String(i + 1);
      };
      /**
       * The default date names to use if Intl API is not available.
       * @type {?}
       */


      var DEFAULT_DATE_NAMES = range(31, ɵ0);
      /**
       * The default day of the week names to use if Intl API is not available.
       * @type {?}
       */

      var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      /**
       * Matches strings that have the form of a valid RFC 3339 string
       * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
       * because the regex will match strings an with out of bounds month, date, etc.
       * @type {?}
       */

      var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      /**
       * Creates an array and fills it with values.
       * @template T
       * @param {?} length
       * @param {?} valueFunction
       * @return {?}
       */

      function range(length, valueFunction) {
        /** @type {?} */
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      }
      /**
       * Adapts the native JS Date for use with cdk-based components that work with dates.
       */


      var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
        _inherits(NativeDateAdapter, _DateAdapter);

        var _super10 = _createSuper(NativeDateAdapter);

        /**
         * @param {?} matDateLocale
         * @param {?} platform
         */
        function NativeDateAdapter(matDateLocale, platform) {
          var _thisSuper, _this35;

          _classCallCheck(this, NativeDateAdapter);

          _this35 = _super10.call(this);
          /**
           * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
           * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
           * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
           * will produce `'8/13/1800'`.
           *
           * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
           * getting the string representation of a Date object from its utc representation. We're keeping
           * it here for sometime, just for precaution, in case we decide to revert some of these changes
           * though.
           */

          _this35.useUtcForDisplay = true;

          _get((_thisSuper = _assertThisInitialized(_this35), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


          _this35.useUtcForDisplay = !platform.TRIDENT;
          _this35._clampDate = platform.TRIDENT || platform.EDGE;
          return _this35;
        }
        /**
         * @param {?} date
         * @return {?}
         */


        _createClass(NativeDateAdapter, [{
          key: "getYear",
          value: function getYear(date) {
            return date.getFullYear();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return date.getMonth();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getDate",
          value: function getDate(date) {
            return date.getDate();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return date.getDay();
          }
          /**
           * @param {?} style
           * @return {?}
           */

        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            var _this36 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
              });
              return range(12,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this36._stripDirectionalityCharacters(_this36._format(dtf, new Date(2017, i, 1)));
              });
            }

            return DEFAULT_MONTH_NAMES[style];
          }
          /**
           * @return {?}
           */

        }, {
          key: "getDateNames",
          value: function getDateNames() {
            var _this37 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
              });
              return range(31,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this37._stripDirectionalityCharacters(_this37._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DATE_NAMES;
          }
          /**
           * @param {?} style
           * @return {?}
           */

        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            var _this38 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
              });
              return range(7,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this38._stripDirectionalityCharacters(_this38._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DAY_OF_WEEK_NAMES[style];
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getYearName",
          value: function getYearName(date) {
            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
              });
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return String(this.getYear(date));
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "clone",
          value: function clone(date) {
            return new Date(date.getTime());
          }
          /**
           * @param {?} year
           * @param {?} month
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "createDate",
          value: function createDate(year, month, date) {
            // Check for invalid month and date (except upper bound on date which we have to check after
            // creating the Date).
            if (month < 0 || month > 11) {
              throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
            }

            if (date < 1) {
              throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
            }
            /** @type {?} */


            var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


            if (result.getMonth() != month) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "today",
          value: function today() {
            return new Date();
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "parse",
          value: function parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
              return new Date(value);
            }

            return value ? new Date(Date.parse(value)) : null;
          }
          /**
           * @param {?} date
           * @param {?} displayFormat
           * @return {?}
           */

        }, {
          key: "format",
          value: function format(date, displayFormat) {
            if (!this.isValid(date)) {
              throw Error('NativeDateAdapter: Cannot format invalid date.');
            }

            if (SUPPORTS_INTL_API) {
              // On IE and Edge the i18n API will throw a hard error that can crash the entire app
              // if we attempt to format a date whose year is less than 1 or greater than 9999.
              if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
              }

              displayFormat = Object.assign(Object.assign({}, displayFormat), {
                timeZone: 'utc'
              });
              /** @type {?} */

              var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return this._stripDirectionalityCharacters(date.toDateString());
          }
          /**
           * @param {?} date
           * @param {?} years
           * @return {?}
           */

        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
          }
          /**
           * @param {?} date
           * @param {?} months
           * @return {?}
           */

        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            /** @type {?} */
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.


            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
              newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }

            return newDate;
          }
          /**
           * @param {?} date
           * @param {?} days
           * @return {?}
           */

        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
          }
          /**
           * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
           * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
           * invalid date for all other values.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (typeof value === 'string') {
              if (!value) {
                return null;
              } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
              // string is the right format first.


              if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                var date = new Date(value);

                if (this.isValid(date)) {
                  return date;
                }
              }
            }

            return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
          }
          /**
           * @param {?} obj
           * @return {?}
           */

        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return obj instanceof Date;
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "isValid",
          value: function isValid(date) {
            return !isNaN(date.getTime());
          }
          /**
           * @return {?}
           */

        }, {
          key: "invalid",
          value: function invalid() {
            return new Date(NaN);
          }
          /**
           * Creates a date but allows the month and date to overflow.
           * @private
           * @param {?} year
           * @param {?} month
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "_createDateWithOverflow",
          value: function _createDateWithOverflow(year, month, date) {
            /** @type {?} */
            var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
            // abbreviations for 19xx.

            if (year >= 0 && year < 100) {
              result.setFullYear(this.getYear(result) - 1900);
            }

            return result;
          }
          /**
           * Pads a number to make it two digits.
           * @private
           * @param {?} n The number to pad.
           * @return {?} The padded number.
           */

        }, {
          key: "_2digit",
          value: function _2digit(n) {
            return ('00' + n).slice(-2);
          }
          /**
           * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
           * other browsers do not. We remove them to make output consistent and because they interfere with
           * date parsing.
           * @private
           * @param {?} str The string to strip direction characters from.
           * @return {?} The stripped string.
           */

        }, {
          key: "_stripDirectionalityCharacters",
          value: function _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
          }
          /**
           * When converting Date object to string, javascript built-in functions may return wrong
           * results because it applies its internal DST rules. The DST rules around the world change
           * very frequently, and the current valid rule is not always valid in previous years though.
           * We work around this problem building a new Date object which has its internal UTC
           * representation with the local date and time.
           * @private
           * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
           *    timeZone set to 'utc' to work fine.
           * @param {?} date Date from which we want to get the string representation according to dtf
           * @return {?} A Date object with its UTC representation based on the passed in date info
           */

        }, {
          key: "_format",
          value: function _format(dtf, date) {
            /** @type {?} */
            var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            return dtf.format(d);
          }
        }]);

        return NativeDateAdapter;
      }(DateAdapter);

      NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
        return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
      };

      NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });
      /** @nocollapse */

      NativeDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_DATE_LOCALE]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/datetime/native-date-formats.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @type {?} */


      var MAT_NATIVE_DATE_FORMATS = {
        parse: {
          dateInput: null
        },
        display: {
          dateInput: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          monthYearLabel: {
            year: 'numeric',
            month: 'short'
          },
          dateA11yLabel: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          monthYearA11yLabel: {
            year: 'numeric',
            month: 'long'
          }
        }
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/datetime/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var NativeDateModule = function NativeDateModule() {
        _classCallCheck(this, NativeDateModule);
      };

      NativeDateModule.ɵfac = function NativeDateModule_Factory(t) {
        return new (t || NativeDateModule)();
      };

      NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
      NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }],
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            providers: [{
              provide: DateAdapter,
              useClass: NativeDateAdapter
            }]
          }]
        }], null, null);
      })();

      var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

      var MatNativeDateModule = function MatNativeDateModule() {
        _classCallCheck(this, MatNativeDateModule);
      };

      MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) {
        return new (t || MatNativeDateModule)();
      };

      MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
      MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }],
        imports: [[NativeDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
          imports: [NativeDateModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [NativeDateModule],
            providers: [{
              provide: MAT_DATE_FORMATS,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/error/error-options.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Error state matcher that matches when a control is invalid and dirty.
       */


      var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
        function ShowOnDirtyErrorStateMatcher() {
          _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
        }

        _createClass(ShowOnDirtyErrorStateMatcher, [{
          key: "isErrorState",
          value:
          /**
           * @param {?} control
           * @param {?} form
           * @return {?}
           */
          function isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || form && form.submitted));
          }
        }]);

        return ShowOnDirtyErrorStateMatcher;
      }();

      ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
        return new (t || ShowOnDirtyErrorStateMatcher)();
      };

      ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * Provider that defines how form controls behave with regards to displaying error messages.
       */


      var ErrorStateMatcher = /*#__PURE__*/function () {
        function ErrorStateMatcher() {
          _classCallCheck(this, ErrorStateMatcher);
        }

        _createClass(ErrorStateMatcher, [{
          key: "isErrorState",
          value:
          /**
           * @param {?} control
           * @param {?} form
           * @return {?}
           */
          function isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || form && form.submitted));
          }
        }]);

        return ErrorStateMatcher;
      }();

      ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
        return new (t || ErrorStateMatcher)();
      };
      /** @nocollapse */


      ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ErrorStateMatcher_Factory() {
          return new ErrorStateMatcher();
        },
        token: ErrorStateMatcher,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/gestures/gesture-annotations.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Stripped-down HammerJS annotations to be used within Material, which are necessary,
       * because HammerJS is an optional dependency. For the full annotations see:
       * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hammerjs/index.d.ts
       */

      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function HammerInput() {}

      if (false) {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function HammerStatic() {}

      if (false) {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function Recognizer() {}

      if (false) {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function RecognizerStatic() {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function HammerInstance() {}

      if (false) {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function HammerManager() {}

      if (false) {}
      /**
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * \@docs-private
       * @record
       */


      function HammerOptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/gestures/gesture-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Injection token that can be used to provide options to the Hammerjs instance.
       * More info at http://hammerjs.github.io/api/.
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       * @type {?}
       */


      var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
      /** @type {?} */

      var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

      var ɵ0$2 =
      /**
      * @return {?}
      */
      function ɵ0$2() {},
          ɵ1 =
      /**
      * @return {?}
      */
      function ɵ1() {};
      /**
       * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
       * been loaded on the page.
       * @type {?}
       */


      var noopHammerInstance = {
        on: ɵ0$2,
        off: ɵ1
      };
      /**
       * Adjusts configuration of our gesture library, Hammer.
       * @deprecated No longer being used. To be removed.
       * \@breaking-change 10.0.0
       */

      var GestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
        _inherits(GestureConfig, _angular_platform_bro);

        var _super11 = _createSuper(GestureConfig);

        /**
         * @param {?=} _hammerOptions
         * @param {?=} _commonModule
         */
        function GestureConfig(_hammerOptions, _commonModule) {
          var _this39;

          _classCallCheck(this, GestureConfig);

          _this39 = _super11.call(this);
          _this39._hammerOptions = _hammerOptions;
          /**
           * List of new event names to add to the gesture support list
           */

          _this39.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
          return _this39;
        }
        /**
         * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
         *
         * Our gesture names come from the Material Design gestures spec:
         * https://material.io/design/#gestures-touch-mechanics
         *
         * More information on default recognizers can be found in Hammer docs:
         * http://hammerjs.github.io/recognizer-pan/
         * http://hammerjs.github.io/recognizer-press/
         *
         * @param {?} element Element to which to assign the new HammerJS gestures.
         * @return {?} Newly-created HammerJS instance.
         */


        _createClass(GestureConfig, [{
          key: "buildHammer",
          value: function buildHammer(element) {
            /** @type {?} */
            var hammer = typeof window !== 'undefined' ?
            /** @type {?} */
            window.Hammer : null;

            if (!hammer) {
              // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
              // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
              // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
              // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
              // `this.events` to the set we support, instead of conditionally setting it to `[]` if
              // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
              // undefined).
              // @breaking-change 8.0.0
              return noopHammerInstance;
            }
            /** @type {?} */


            var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

            /** @type {?} */

            var pan = new hammer.Pan();
            /** @type {?} */

            var swipe = new hammer.Swipe();
            /** @type {?} */

            var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
            // Otherwise the previous `recognizeWith` will be dropped.
            // TODO: Confirm threshold numbers with Material Design UX Team

            /** @type {?} */

            var slide = this._createRecognizer(pan, {
              event: 'slide',
              threshold: 0
            }, swipe);
            /** @type {?} */


            var longpress = this._createRecognizer(press, {
              event: 'longpress',
              time: 500
            }); // Overwrite the default `pan` event to use the swipe event.


            pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
            // accidentally reset the longpress recognizer. In order to make sure that the two
            // recognizers can run simultaneously but don't affect each other, we allow the slide
            // recognizer to recognize while a longpress is being processed.
            // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

            longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

            mc.add([swipe, press, pan, slide, longpress]);
            return (
              /** @type {?} */
              mc
            );
          }
          /**
           * Creates a new recognizer, without affecting the default recognizers of HammerJS
           * @private
           * @param {?} base
           * @param {?} options
           * @param {...?} inheritances
           * @return {?}
           */

        }, {
          key: "_createRecognizer",
          value: function _createRecognizer(base, options) {
            /** @type {?} */
            var recognizer = new
            /** @type {?} */
            base.constructor(options);

            for (var _len7 = arguments.length, inheritances = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
              inheritances[_key7 - 2] = arguments[_key7];
            }

            inheritances.push(base);
            inheritances.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return recognizer.recognizeWith(item);
            });
            return recognizer;
          }
        }]);

        return GestureConfig;
      }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"]);

      GestureConfig.ɵfac = function GestureConfig_Factory(t) {
        return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatCommonModule, 8));
      };

      GestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GestureConfig,
        factory: GestureConfig.ɵfac
      });
      /** @nocollapse */

      GestureConfig.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_HAMMER_OPTIONS]
          }]
        }, {
          type: MatCommonModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestureConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_HAMMER_OPTIONS]
            }]
          }, {
            type: MatCommonModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/line/line.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Shared directive to count lines inside a text area, such as a list item.
       * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
       * counted by checking the query list's length.
       */


      var MatLine = function MatLine() {
        _classCallCheck(this, MatLine);
      };

      MatLine.ɵfac = function MatLine_Factory(t) {
        return new (t || MatLine)();
      };

      MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-line], [matLine]',
            host: {
              'class': 'mat-line'
            }
          }]
        }], null, null);
      })();
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * \@docs-private
       * @param {?} lines
       * @param {?} element
       * @param {?=} prefix
       * @return {?}
       */


      function setLines(lines, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
        // Note: doesn't need to unsubscribe, because `changes`
        // gets completed by Angular when the view is destroyed.
        lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(lines)).subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var length = _ref.length;
          setClass(element, "".concat(prefix, "-2-line"), false);
          setClass(element, "".concat(prefix, "-3-line"), false);
          setClass(element, "".concat(prefix, "-multi-line"), false);

          if (length === 2 || length === 3) {
            setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
          } else if (length > 3) {
            setClass(element, "".concat(prefix, "-multi-line"), true);
          }
        });
      }
      /**
       * Adds or removes a class from an element.
       * @param {?} element
       * @param {?} className
       * @param {?} isAdd
       * @return {?}
       */


      function setClass(element, className, isAdd) {
        /** @type {?} */
        var classList = element.nativeElement.classList;
        isAdd ? classList.add(className) : classList.remove(className);
      }
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * \@docs-private
       * @deprecated Use `setLines` instead.
       * \@breaking-change 8.0.0
       */


      var MatLineSetter =
      /**
       * @param {?} lines
       * @param {?} element
       */
      function MatLineSetter(lines, element) {
        _classCallCheck(this, MatLineSetter);

        setLines(lines, element);
      };

      var MatLineModule = function MatLineModule() {
        _classCallCheck(this, MatLineModule);
      };

      MatLineModule.ɵfac = function MatLineModule_Factory(t) {
        return new (t || MatLineModule)();
      };

      MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
      MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatCommonModule], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
          declarations: [MatLine],
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatLine, MatCommonModule],
            declarations: [MatLine]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/ripple/ripple-ref.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @enum {number} */


      var RippleState = {
        FADING_IN: 0,
        VISIBLE: 1,
        FADING_OUT: 2,
        HIDDEN: 3
      };
      /**
       * Reference to a previously launched ripple element.
       */

      var RippleRef = /*#__PURE__*/function () {
        /**
         * @param {?} _renderer
         * @param {?} element
         * @param {?} config
         */
        function RippleRef(_renderer, element, config) {
          _classCallCheck(this, RippleRef);

          this._renderer = _renderer;
          this.element = element;
          this.config = config;
          /**
           * Current state of the ripple.
           */

          this.state = 3
          /* HIDDEN */
          ;
        }
        /**
         * Fades out the ripple element.
         * @return {?}
         */


        _createClass(RippleRef, [{
          key: "fadeOut",
          value: function fadeOut() {
            this._renderer.fadeOutRipple(this);
          }
        }]);

        return RippleRef;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/ripple/ripple-renderer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Interface that describes the configuration for the animation of a ripple.
       * There are two animation phases with different durations for the ripples.
       * @record
       */


      function RippleAnimationConfig() {}

      if (false) {}
      /**
       * Interface that describes the target for launching ripples.
       * It defines the ripple configuration and disabled state for interaction ripples.
       * \@docs-private
       * @record
       */


      function RippleTarget() {}

      if (false) {}
      /**
       * Default ripple animation configuration for ripples without an explicit
       * animation config specified.
       * @type {?}
       */


      var defaultRippleAnimationConfig = {
        enterDuration: 450,
        exitDuration: 400
      };
      /**
       * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
       * events to avoid synthetic mouse events.
       * @type {?}
       */

      var ignoreMouseEventsTimeout = 800;
      /**
       * Options that apply to all the event listeners that are bound by the ripple renderer.
       * @type {?}
       */

      var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * Events that signal that the pointer is down.
       * @type {?}
       */

      var pointerDownEvents = ['mousedown', 'touchstart'];
      /**
       * Events that signal that the pointer is up.
       * @type {?}
       */

      var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      /**
       * Helper service that performs DOM manipulations. Not intended to be used outside this module.
       * The constructor takes a reference to the ripple directive's host element and a map of DOM
       * event handlers to be installed on the element that triggers ripple animations.
       * This will eventually become a custom renderer once Angular support exists.
       * \@docs-private
       */

      var RippleRenderer = /*#__PURE__*/function () {
        /**
         * @param {?} _target
         * @param {?} _ngZone
         * @param {?} elementOrElementRef
         * @param {?} platform
         */
        function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
          _classCallCheck(this, RippleRenderer);

          this._target = _target;
          this._ngZone = _ngZone;
          /**
           * Whether the pointer is currently down or not.
           */

          this._isPointerDown = false;
          /**
           * Set of currently active ripple references.
           */

          this._activeRipples = new Set();
          /**
           * Whether pointer-up event listeners have been registered.
           */

          this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

          if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
          }
        }
        /**
         * Fades in a ripple at the given coordinates.
         * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
         * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
         * @param {?=} config Extra ripple options.
         * @return {?}
         */


        _createClass(RippleRenderer, [{
          key: "fadeInRipple",
          value: function fadeInRipple(x, y) {
            var _this40 = this;

            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            /** @type {?} */
            var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
            /** @type {?} */


            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

            if (config.centered) {
              x = containerRect.left + containerRect.width / 2;
              y = containerRect.top + containerRect.height / 2;
            }
            /** @type {?} */


            var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
            /** @type {?} */

            var offsetX = x - containerRect.left;
            /** @type {?} */

            var offsetY = y - containerRect.top;
            /** @type {?} */

            var duration = animationConfig.enterDuration;
            /** @type {?} */

            var ripple = document.createElement('div');
            ripple.classList.add('mat-ripple-element');
            ripple.style.left = "".concat(offsetX - radius, "px");
            ripple.style.top = "".concat(offsetY - radius, "px");
            ripple.style.height = "".concat(radius * 2, "px");
            ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
            // set, the default color will be applied through the ripple theme styles.

            if (config.color != null) {
              ripple.style.backgroundColor = config.color;
            }

            ripple.style.transitionDuration = "".concat(duration, "ms");

            this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
            // ripple elements. This is critical because then the `scale` would not animate properly.


            enforceStyleRecalculation(ripple);
            ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

            /** @type {?} */

            var rippleRef = new RippleRef(this, ripple, config);
            rippleRef.state = 0
            /* FADING_IN */
            ; // Add the ripple reference to the list of all active ripples.

            this._activeRipples.add(rippleRef);

            if (!config.persistent) {
              this._mostRecentTransientRipple = rippleRef;
            } // Wait for the ripple element to be completely faded in.
            // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


            this._runTimeoutOutsideZone(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var isMostRecentTransientRipple = rippleRef === _this40._mostRecentTransientRipple;
              rippleRef.state = 1
              /* VISIBLE */
              ; // When the timer runs out while the user has kept their pointer down, we want to
              // keep only the persistent ripples and the latest transient ripple. We do this,
              // because we don't want stacked transient ripples to appear after their enter
              // animation has finished.

              if (!config.persistent && (!isMostRecentTransientRipple || !_this40._isPointerDown)) {
                rippleRef.fadeOut();
              }
            }, duration);

            return rippleRef;
          }
          /**
           * Fades out a ripple reference.
           * @param {?} rippleRef
           * @return {?}
           */

        }, {
          key: "fadeOutRipple",
          value: function fadeOutRipple(rippleRef) {
            /** @type {?} */
            var wasActive = this._activeRipples["delete"](rippleRef);

            if (rippleRef === this._mostRecentTransientRipple) {
              this._mostRecentTransientRipple = null;
            } // Clear out the cached bounding rect if we have no more ripples.


            if (!this._activeRipples.size) {
              this._containerRect = null;
            } // For ripples that are not active anymore, don't re-run the fade-out animation.


            if (!wasActive) {
              return;
            }
            /** @type {?} */


            var rippleEl = rippleRef.element;
            /** @type {?} */

            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
            rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
            rippleEl.style.opacity = '0';
            rippleRef.state = 2
            /* FADING_OUT */
            ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

            this._runTimeoutOutsideZone(
            /**
            * @return {?}
            */
            function () {
              rippleRef.state = 3
              /* HIDDEN */
              ;

              /** @type {?} */
              rippleEl.parentNode.removeChild(rippleEl);
            }, animationConfig.exitDuration);
          }
          /**
           * Fades out all currently active ripples.
           * @return {?}
           */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._activeRipples.forEach(
            /**
            * @param {?} ripple
            * @return {?}
            */
            function (ripple) {
              return ripple.fadeOut();
            });
          }
          /**
           * Sets up the trigger event listeners
           * @param {?} elementOrElementRef
           * @return {?}
           */

        }, {
          key: "setupTriggerEvents",
          value: function setupTriggerEvents(elementOrElementRef) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

            if (!element || element === this._triggerElement) {
              return;
            } // Remove all previously registered event listeners from the trigger element.


            this._removeTriggerEvents();

            this._triggerElement = element;

            this._registerEvents(pointerDownEvents);
          }
          /**
           * Handles all registered events.
           * \@docs-private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (event.type === 'mousedown') {
              this._onMousedown(
              /** @type {?} */
              event);
            } else if (event.type === 'touchstart') {
              this._onTouchStart(
              /** @type {?} */
              event);
            } else {
              this._onPointerUp();
            } // If pointer-up events haven't been registered yet, do so now.
            // We do this on-demand in order to reduce the total number of event listeners
            // registered by the ripples, which speeds up the rendering time for large UIs.


            if (!this._pointerUpEventsRegistered) {
              this._registerEvents(pointerUpEvents);

              this._pointerUpEventsRegistered = true;
            }
          }
          /**
           * Function being called whenever the trigger is being pressed using mouse.
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onMousedown",
          value: function _onMousedown(event) {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.

            /** @type {?} */
            var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
            /** @type {?} */

            var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
              this._isPointerDown = true;
              this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
          }
          /**
           * Function being called whenever the trigger is being pressed using touch.
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onTouchStart",
          value: function _onTouchStart(event) {
            if (!this._target.rippleDisabled) {
              // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
              // events will launch a second ripple if we don't ignore mouse events for a specific
              // time after a touchstart event.
              this._lastTouchStartEvent = Date.now();
              this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
              // their finger down, but used another finger to tap the element again.

              /** @type {?} */

              var touches = event.changedTouches;

              for (var i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
              }
            }
          }
          /**
           * Function being called whenever the trigger is being released.
           * @private
           * @return {?}
           */

        }, {
          key: "_onPointerUp",
          value: function _onPointerUp() {
            if (!this._isPointerDown) {
              return;
            }

            this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

            this._activeRipples.forEach(
            /**
            * @param {?} ripple
            * @return {?}
            */
            function (ripple) {
              // By default, only ripples that are completely visible will fade out on pointer release.
              // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

              /** @type {?} */
              var isVisible = ripple.state === 1
              /* VISIBLE */
              || ripple.config.terminateOnPointerUp && ripple.state === 0
              /* FADING_IN */
              ;

              if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
              }
            });
          }
          /**
           * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
           * @private
           * @param {?} fn
           * @param {?=} delay
           * @return {?}
           */

        }, {
          key: "_runTimeoutOutsideZone",
          value: function _runTimeoutOutsideZone(fn) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return setTimeout(fn, delay);
            });
          }
          /**
           * Registers event listeners for a given list of events.
           * @private
           * @param {?} eventTypes
           * @return {?}
           */

        }, {
          key: "_registerEvents",
          value: function _registerEvents(eventTypes) {
            var _this41 = this;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              eventTypes.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                /** @type {?} */
                _this41._triggerElement.addEventListener(type, _this41, passiveEventOptions);
              });
            });
          }
          /**
           * Removes previously registered event listeners from the trigger element.
           * @return {?}
           */

        }, {
          key: "_removeTriggerEvents",
          value: function _removeTriggerEvents() {
            var _this42 = this;

            if (this._triggerElement) {
              pointerDownEvents.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                /** @type {?} */
                _this42._triggerElement.removeEventListener(type, _this42, passiveEventOptions);
              });

              if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach(
                /**
                * @param {?} type
                * @return {?}
                */
                function (type) {
                  /** @type {?} */
                  _this42._triggerElement.removeEventListener(type, _this42, passiveEventOptions);
                });
              }
            }
          }
        }]);

        return RippleRenderer;
      }();

      if (false) {}
      /**
       * Enforces a style recalculation of a DOM element by computing its styles.
       * @param {?} element
       * @return {?}
       */


      function enforceStyleRecalculation(element) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
      }
      /**
       * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
       * @param {?} x
       * @param {?} y
       * @param {?} rect
       * @return {?}
       */


      function distanceToFurthestCorner(x, y, rect) {
        /** @type {?} */
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        /** @type {?} */

        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/ripple/ripple.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Configurable options for `matRipple`.
       * @record
       */


      function RippleGlobalOptions() {}

      if (false) {}
      /**
       * Injection token that can be used to specify the global ripple options.
       * @type {?}
       */


      var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

      var MatRipple = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} ngZone
         * @param {?} platform
         * @param {?=} globalOptions
         * @param {?=} _animationMode
         */
        function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
          _classCallCheck(this, MatRipple);

          this._elementRef = _elementRef;
          this._animationMode = _animationMode;
          /**
           * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
           * will be the distance from the center of the ripple to the furthest corner of the host element's
           * bounding rectangle.
           */

          this.radius = 0;
          this._disabled = false;
          /**
           * Whether ripple directive is initialized and the input bindings are set.
           */

          this._isInitialized = false;
          this._globalOptions = globalOptions || {};
          this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         * @return {?}
         */


        _createClass(MatRipple, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = value;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * The element that triggers the ripple when click events are received.
           * Defaults to the directive's host element.
           * @return {?}
           */

        }, {
          key: "trigger",
          get: function get() {
            return this._trigger || this._elementRef.nativeElement;
          }
          /**
           * @param {?} trigger
           * @return {?}
           */
          ,
          set: function set(trigger) {
            this._trigger = trigger;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
          }
          /**
           * Fades out all currently showing ripple elements.
           * @return {?}
           */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
          }
          /**
           * Ripple configuration from the directive's input values.
           * \@docs-private Implemented as part of RippleTarget
           * @return {?}
           */

        }, {
          key: "rippleConfig",
          get: function get() {
            return {
              centered: this.centered,
              radius: this.radius,
              color: this.color,
              animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
                enterDuration: 0,
                exitDuration: 0
              } : {}), this.animation),
              terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            };
          }
          /**
           * Whether ripples on pointer-down are disabled or not.
           * \@docs-private Implemented as part of RippleTarget
           * @return {?}
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || !!this._globalOptions.disabled;
          }
          /**
           * Sets up the trigger event listeners if ripples are enabled.
           * @private
           * @return {?}
           */

        }, {
          key: "_setupTriggerEventsIfEnabled",
          value: function _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
              this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
          }
          /**
           * Launches a manual ripple at the specified coordinated or just by the ripple config.
           * @param {?} configOrX
           * @param {?=} y
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "launch",
          value: function launch(configOrX) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var config = arguments.length > 2 ? arguments[2] : undefined;

            if (typeof configOrX === 'number') {
              return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
            } else {
              return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
            }
          }
        }]);

        return MatRipple;
      }();

      MatRipple.ɵfac = function MatRipple_Factory(t) {
        return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          radius: ["matRippleRadius", "radius"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          animation: ["matRippleAnimation", "animation"]
        },
        exportAs: ["matRipple"]
      });
      /** @nocollapse */

      MatRipple.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatRipple.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              'class': 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
          }],
          unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
          }],
          centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/ripple/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatRippleModule = function MatRippleModule() {
        _classCallCheck(this, MatRippleModule);
      };

      MatRippleModule.ɵfac = function MatRippleModule_Factory(t) {
        return new (t || MatRippleModule)();
      };

      MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
      MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
          declarations: function declarations() {
            return [MatRipple];
          },
          imports: function imports() {
            return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          },
          exports: function exports() {
            return [MatRipple, MatCommonModule];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            exports: [MatRipple, MatCommonModule],
            declarations: [MatRipple]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/selection/pseudo-checkbox/pseudo-checkbox.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Component that shows a simplified checkbox without including any kind of "real" checkbox.
       * Meant to be used when the checkbox is purely decorative and a large number of them will be
       * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
       * Note that theming is meant to be handled by the parent element, e.g.
       * `mat-primary .mat-pseudo-checkbox`.
       *
       * Note that this component will be completely invisible to screen-reader users. This is *not*
       * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
       * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
       * of more complex components that appropriately handle selected / checked state.
       * \@docs-private
       */


      var MatPseudoCheckbox =
      /**
       * @param {?=} _animationMode
       */
      function MatPseudoCheckbox(_animationMode) {
        _classCallCheck(this, MatPseudoCheckbox);

        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */

        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */

        this.disabled = false;
      };

      MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
        return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 8,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatPseudoCheckbox.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPseudoCheckbox.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'mat-pseudo-checkbox',
            template: '',
            host: {
              'class': 'mat-pseudo-checkbox',
              '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
              '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
              '[class.mat-pseudo-checkbox-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/selection/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
        _classCallCheck(this, MatPseudoCheckboxModule);
      };

      MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) {
        return new (t || MatPseudoCheckboxModule)();
      };

      MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
      MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
          declarations: [MatPseudoCheckbox],
          exports: [MatPseudoCheckbox]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [MatPseudoCheckbox],
            declarations: [MatPseudoCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/option/optgroup.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Boilerplate for applying mixins to MatOptgroup.

      /**
       * \@docs-private
       */


      var MatOptgroupBase = function MatOptgroupBase() {
        _classCallCheck(this, MatOptgroupBase);
      };
      /** @type {?} */


      var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

      /** @type {?} */


      var _uniqueOptgroupIdCounter = 0;
      /**
       * Component that is used to group instances of `mat-option`.
       */

      var MatOptgroup = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
        _inherits(MatOptgroup, _MatOptgroupMixinBase2);

        var _super12 = _createSuper(MatOptgroup);

        function MatOptgroup() {
          var _this43;

          _classCallCheck(this, MatOptgroup);

          _this43 = _super12.apply(this, arguments);
          /**
           * Unique id for the underlying label.
           */

          _this43._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
          return _this43;
        }

        return MatOptgroup;
      }(_MatOptgroupMixinBase);

      MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
        return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
      };

      MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: ["role", "group", 1, "mat-optgroup"],
        hostVars: 4,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          label: "label"
        },
        exportAs: ["matOptgroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-optgroup-label", 3, "id"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
          }
        },
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatOptgroup.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            host: {
              'class': 'mat-optgroup',
              'role': 'group',
              '[class.mat-optgroup-disabled]': 'disabled',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-labelledby]': '_labelId'
            },
            styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
          }]
        }], null, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/option/option.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Option IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       * @type {?}
       */


      var _uniqueIdCounter = 0;
      /**
       * Event object emitted by MatOption when selected or deselected.
       */

      var MatOptionSelectionChange =
      /**
       * @param {?} source
       * @param {?=} isUserInput
       */
      function MatOptionSelectionChange(source) {
        var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, MatOptionSelectionChange);

        this.source = source;
        this.isUserInput = isUserInput;
      };

      if (false) {}
      /**
       * Describes a parent component that manages a list of options.
       * Contains properties that the options can inherit.
       * \@docs-private
       * @record
       */


      function MatOptionParentComponent() {}

      if (false) {}
      /**
       * Injection token used to provide the parent component to options.
       * @type {?}
       */


      var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
      /**
       * Single option inside of a `<mat-select>` element.
       */

      var MatOption = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _changeDetectorRef
         * @param {?} _parent
         * @param {?} group
         */
        function MatOption(_element, _changeDetectorRef, _parent, group) {
          _classCallCheck(this, MatOption);

          this._element = _element;
          this._changeDetectorRef = _changeDetectorRef;
          this._parent = _parent;
          this.group = group;
          this._selected = false;
          this._active = false;
          this._disabled = false;
          this._mostRecentViewValue = '';
          /**
           * The unique ID of the option.
           */

          this.id = "mat-option-".concat(_uniqueIdCounter++);
          /**
           * Event emitted when the option is selected or deselected.
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the state of the option changes and any parents have to be notified.
           */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /**
         * Whether the wrapping component is in multiple selection mode.
         * @return {?}
         */


        _createClass(MatOption, [{
          key: "multiple",
          get: function get() {
            return this._parent && this._parent.multiple;
          }
          /**
           * Whether or not the option is currently selected.
           * @return {?}
           */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /**
           * Whether the option is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.group && this.group.disabled || this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether ripples for the option are disabled.
           * @return {?}
           */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._parent && this._parent.disableRipple;
          }
          /**
           * Whether or not the option is currently active and ready to be selected.
           * An active option displays styles as if it is focused, but the
           * focus is actually retained somewhere else. This comes in handy
           * for components like autocomplete where focus must remain on the input.
           * @return {?}
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * The displayed value of the option. It is necessary to show the selected option in the
           * select's trigger.
           * @return {?}
           */

        }, {
          key: "viewValue",
          get: function get() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
          }
          /**
           * Selects the option.
           * @return {?}
           */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /**
           * Deselects the option.
           * @return {?}
           */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /**
           * Sets focus onto this option.
           * @param {?=} _origin
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

            /** @type {?} */
            var element = this._getHostElement();

            if (typeof element.focus === 'function') {
              element.focus(options);
            }
          }
          /**
           * This method sets display styles on the option to make it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           * @return {?}
           */

        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            if (!this._active) {
              this._active = true;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * This method removes display styles on the option that made it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           * @return {?}
           */

        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            if (this._active) {
              this._active = false;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Gets the label to be used when determining whether the option should be focused.
           * @return {?}
           */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.viewValue;
          }
          /**
           * Ensures the option is selected when activated from the keyboard.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
              this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


              event.preventDefault();
            }
          }
          /**
           * `Selects the option while indicating the selection came from the user. Used to
           * determine if the select's view -> model callback should be invoked.`
           * @return {?}
           */

        }, {
          key: "_selectViaInteraction",
          value: function _selectViaInteraction() {
            if (!this.disabled) {
              this._selected = this.multiple ? !this._selected : true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent(true);
            }
          }
          /**
           * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
           * attribute from single-selection, unselected options. Including the `aria-selected="false"`
           * attributes adds a significant amount of noise to screen-reader users without providing useful
           * information.
           * @return {?}
           */

        }, {
          key: "_getAriaSelected",
          value: function _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
          }
          /**
           * Returns the correct tabindex for the option depending on disabled state.
           * @return {?}
           */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /**
           * Gets the host DOM element.
           * @return {?}
           */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
              /** @type {?} */
              var viewValue = this.viewValue;

              if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;

                this._stateChanges.next();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
          /**
           * Emits the selection change event.
           * @private
           * @param {?=} isUserInput
           * @return {?}
           */

        }, {
          key: "_emitSelectionChangeEvent",
          value: function _emitSelectionChangeEvent() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
          }
        }]);

        return MatOption;
      }();

      MatOption.ɵfac = function MatOption_Factory(t) {
        return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatOptgroup, 8));
      };

      MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
        hostVars: 12,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          value: "value"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        },
        exportAs: ["matOption"],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 3,
        consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatOption.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              'role': 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': '_getAriaSelected()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              'class': 'mat-option mat-focus-indicator'
            },
            template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }]
          }, {
            type: MatOptgroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * Counts the amount of option group labels that precede the specified option.
       * \@docs-private
       * @param {?} optionIndex Index of the option at which to start counting.
       * @param {?} options Flat list of all of the options.
       * @param {?} optionGroups Flat list of all of the option groups.
       * @return {?}
       */


      function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
        if (optionGroups.length) {
          /** @type {?} */
          var optionsArray = options.toArray();
          /** @type {?} */

          var groups = optionGroups.toArray();
          /** @type {?} */

          var groupCounter = 0;

          for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
              groupCounter++;
            }
          }

          return groupCounter;
        }

        return 0;
      }
      /**
       * Determines the position to which to scroll a panel in order for an option to be into view.
       * \@docs-private
       * @param {?} optionIndex Index of the option to be scrolled into the view.
       * @param {?} optionHeight Height of the options.
       * @param {?} currentScrollPosition Current scroll position of the panel.
       * @param {?} panelHeight Height of the panel.
       * @return {?}
       */


      function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
        /** @type {?} */
        var optionOffset = optionIndex * optionHeight;

        if (optionOffset < currentScrollPosition) {
          return optionOffset;
        }

        if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
          return Math.max(0, optionOffset - panelHeight + optionHeight);
        }

        return currentScrollPosition;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/option/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatOptionModule = function MatOptionModule() {
        _classCallCheck(this, MatOptionModule);
      };

      MatOptionModule.ɵfac = function MatOptionModule_Factory(t) {
        return new (t || MatOptionModule)();
      };

      MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
      MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
          declarations: function declarations() {
            return [MatOption, MatOptgroup];
          },
          imports: function imports() {
            return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule];
          },
          exports: function exports() {
            return [MatOption, MatOptgroup];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule],
            exports: [MatOption, MatOptgroup],
            declarations: [MatOption, MatOptgroup]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/label/label-options.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * InjectionToken that can be used to specify the global label options.
       * @deprecated Use `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token from
       *     `\@angular/material/form-field` instead.
       * \@breaking-change 11.0.0
       * @type {?}
       */


      var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
      /**
       * Configurable options for floating labels.
       * @deprecated Use `MatFormFieldDefaultOptions` from `\@angular/material/form-field` instead.
       * \@breaking-change 11.0.0
       * @record
       */

      function LabelOptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/month-constants.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * When constructing a Date, the month is zero-based. This can be confusing, since people are
       * used to seeing them one-based. So we create these aliases to make writing the tests easier.
       * \@docs-private
       * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
       * @type {?}
       */


      var JAN = 0;
      /** @type {?} */

      var FEB = 1;
      /** @type {?} */

      var MAR = 2;
      /** @type {?} */

      var APR = 3;
      /** @type {?} */

      var MAY = 4;
      /** @type {?} */

      var JUN = 5;
      /** @type {?} */

      var JUL = 6;
      /** @type {?} */

      var AUG = 7;
      /** @type {?} */

      var SEP = 8;
      /** @type {?} */

      var OCT = 9;
      /** @type {?} */

      var NOV = 10;
      /** @type {?} */

      var DEC = 11;
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/core/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/
    "OUpF":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-outside-after/maintenance-outside-after.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: MaintenanceOutsideAfterComponent */

    /***/
    function OUpF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceOutsideAfterComponent", function () {
        return MaintenanceOutsideAfterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maintenance_outside_after_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maintenance-outside-after.component.html */
      "j0i+");
      /* harmony import */


      var _maintenance_outside_after_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./maintenance-outside-after.component.css */
      "xukY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/maintenance.service */
      "xHYo");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/product.service */
      "lXKC");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);

      var MaintenanceOutsideAfterComponent = /*#__PURE__*/function () {
        function MaintenanceOutsideAfterComponent(_fb, _MaintenanceService, _ProductService) {
          _classCallCheck(this, MaintenanceOutsideAfterComponent);

          this._fb = _fb;
          this._MaintenanceService = _MaintenanceService;
          this._ProductService = _ProductService;
          this.displayRecomendedSerial = true;
          this.allSerialNumbers = new Array();
          this.started = false;
          this.filter = '';
        }

        _createClass(MaintenanceOutsideAfterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createmaintenanceForm();
            this.getAllproducts();
          }
        }, {
          key: "createmaintenanceForm",
          value: function createmaintenanceForm() {
            this.maintenanceForm = this._fb.group({
              serialNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              repaired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "Getserial",
          value: function Getserial() {
            var valueInput = this.serial.nativeElement.value;
            this.Serial = valueInput;
            return valueInput;
          }
        }, {
          key: "getAllproducts",
          value: function getAllproducts() {
            var _this44 = this;

            this._ProductService.getAllProduct().subscribe(function (res) {
              _this44.products = res;

              var _iterator2 = _createForOfIteratorHelper(_this44.products),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var val = _step2.value;
                  var stringSerial = val.serialNumber.toString();
                  console.log(stringSerial);

                  _this44.allSerialNumbers.push(val.serialNumber.toString());
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
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
          value: function alertWithSuccess(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Done', msg, 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "submitMaitenanceOutside",
          value: function submitMaitenanceOutside() {
            var _this45 = this;

            this.submitted2 = true;

            if (this.maintenanceForm.valid) {
              this._MaintenanceService.submitMaintenanceOutsideStoreAfter(this.Getserial(), localStorage.getItem("id"), this.maintenanceForm.value).subscribe(function (res) {
                console.log(res);
                console.log("ccc");

                if (res.message == 'Maintainence Finished successfully') {
                  _this45.alertWithSuccess(res.message);
                } else {
                  _this45.alertWithFail(res.message);
                }
              }, function (err) {
                console.log(err);
              });

              console.log(this.maintenanceForm.value);
            }
          }
        }, {
          key: "selectedSerial",
          value: function selectedSerial(val) {
            this.serial.nativeElement.value = val;
            this.displayRecomendedSerial = true; // this.form.controls.serialNumber.valid;
          }
        }, {
          key: "data",
          value: function data(val) {
            return val;
          }
        }, {
          key: "searchSerial",
          value: function searchSerial(val) {
            this.displayRecomendedSerial = false;
            var filterd = this.allSerialNumbers.filter(this.data);
          }
        }]);

        return MaintenanceOutsideAfterComponent;
      }();

      MaintenanceOutsideAfterComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_5__["MaintenanceService"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }];
      };

      MaintenanceOutsideAfterComponent.propDecorators = {
        serial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Serial']
        }]
      };
      MaintenanceOutsideAfterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maintenance-outside-after',
        template: _raw_loader_maintenance_outside_after_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maintenance_outside_after_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MaintenanceOutsideAfterComponent);
      /***/
    },

    /***/
    "eNw9":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/maintenance-pages/maintenance-inside/maintenance-inside.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eNw9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-9\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Maintenance Inside Store Form</h4>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\">\n          <div class=\"form-group\">\n            <label for=\"serialNumber\">Product Serial Number:</label>\n            <input\n              autocomplete=\"off\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"serialNumber\"\n              name=\"serialNumber\"\n              placeholder=\"Enter Product Serial Number\"\n              [ngClass]=\"{\n                'is-invalid': submitted && form.controls.serialNumber.errors\n              }\"\n              #Serial\n              [(ngModel)]=\"search\"\n              (keypress)=\"enterPressed($event)\"\n              (keyup)=\"searchSerial(search)\"\n            />\n            <div\n              class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n              *ngIf=\"submitted && form.controls.serialNumber.errors\"\n            >\n              Enter Valid serial Number\n            </div>\n            <div *ngFor=\"let post of allSerialNumbers | filter: search\">\n              <a\n                (click)=\"selectedSerial(post)\"\n                *ngIf=\"!displayRecomendedSerial\"\n                >{{ post }}</a\n              >\n            </div>\n          </div>\n          <div class=\"text-right\">\n            <button\n              type=\"button\"\n              *ngIf=\"!started\"\n              class=\"btn btn-primary\"\n              (click)=\"onStart()\"\n            >\n              Start Maintenance\n            </button>\n          </div>\n        </form>\n        <form *ngIf=\"started\" [formGroup]=\"MaintenanceInsideForm\">\n          <div class=\"form-group\">\n            <label class=\"d-block\">Spare Parts Added:</label>\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                formControlName=\"isAdded\"\n                [(ngModel)]=\"type\"\n                type=\"radio\"\n                value=\"true\"\n                name=\"isAdded\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    submitted2 && MaintenanceInsideForm.controls.isAdded.errors\n                }\"\n              />\n              <label class=\"form-check-label\" for=\"gender_male\">Yes</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                formControlName=\"isAdded\"\n                [(ngModel)]=\"type\"\n                type=\"radio\"\n                value=\"false\"\n                name=\"isAdded\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    submitted2 && MaintenanceInsideForm.controls.isAdded.errors\n                }\"\n              />\n              <label class=\"form-check-label\" for=\"gender_female\">No</label>\n            </div>\n            <div\n              class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n              *ngIf=\"\n                submitted2 && MaintenanceInsideForm.controls.isAdded.errors\n              \"\n            >\n              Please Choose Yes or No\n            </div>\n          </div>\n          <div *ngIf=\"type == 'true'\">\n            <div class=\"form-group\">\n              <label class=\"d-block\">Existence:</label>\n              <div class=\"form-check form-check-inline\">\n                <input\n                  class=\"form-check-input\"\n                  [(ngModel)]=\"existence\"\n                  type=\"radio\"\n                  formControlName=\"Existence\"\n                  value=\"true\"\n                  name=\"Existence\"\n                  [ngClass]=\"{\n                    'is-invalid':\n                      submitted2 &&\n                      MaintenanceInsideForm.controls.Existence.errors\n                  }\"\n                  (change)=\"onItemChange($event.target.value)\"\n                />\n                <label class=\"form-check-label\">Yes</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input\n                  class=\"form-check-input\"\n                  [(ngModel)]=\"existence\"\n                  formControlName=\"Existence\"\n                  type=\"radio\"\n                  value=\"false\"\n                  name=\"Existence\"\n                  [ngClass]=\"{\n                    'is-invalid':\n                      submitted2 &&\n                      MaintenanceInsideForm.controls.Existence.errors\n                  }\"\n                  (change)=\"onItemChange2($event.target.value)\"\n                />\n                <label class=\"form-check-label\">No</label>\n              </div>\n              <div\n                class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                *ngIf=\"\n                  submitted2 && MaintenanceInsideForm.controls.Existence.errors\n                \"\n              >\n                Please Choose Yes or No\n              </div>\n            </div>\n            <div *ngIf=\"existence == 'true'\">\n              <div formArrayName=\"MaintenanceData\">\n                <div\n                  class=\"form-group\"\n                  *ngFor=\"\n                    let element of MaintenanceData.controls;\n                    let x = index\n                  \"\n                >\n                  <div [formGroupName]=\"x\">\n                    <label>Part Serial Number:</label>\n                    <input\n                      formControlName=\"sparePartNumber\"\n                      type=\"text\"\n                      class=\"form-control\"\n                    />\n                  </div>\n                </div>\n              </div>\n              <div class=\"text-right mb-5\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  (click)=\"addNewSection()\"\n                >\n                  Add Another Part\n                </button>\n              </div>\n            </div>\n            <div *ngIf=\"existence == 'false'\">\n              <div formArrayName=\"sparePartsData\">\n                <div\n                  *ngFor=\"let element of sparePartsData.controls; let x = index\"\n                >\n                  <div [formGroupName]=\"x\">\n                    <div class=\"form-group\">\n                      <label>Part Serial Number:</label>\n                      <input\n                        type=\"text\"\n                        formControlName=\"serialNumber\"\n                        class=\"form-control\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"d-block\">Inside Product:</label>\n                      <div class=\"form-check form-check-inline\">\n                        <input\n                          class=\"form-check-input\"\n                          type=\"radio\"\n                          value=\"true\"\n                          formControlName=\"isInside\"\n                          [(ngModel)]=\"newPart[x]\"\n                          [name]=\"x\"\n                        />\n                        <label class=\"form-check-label\">Yes</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input\n                          class=\"form-check-input\"\n                          type=\"radio\"\n                          value=\"false\"\n                          formControlName=\"isInside\"\n                          [(ngModel)]=\"newPart[x]\"\n                          [name]=\"x\"\n                        />\n                        <label class=\"form-check-label\">No</label>\n                      </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"newPart[x] == 'true'\">\n                      <label>Product Serial Number:</label>\n                      <input\n                        type=\"text\"\n                        formControlName=\"product\"\n                        class=\"form-control\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"text-right\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary mb-5\"\n                  (click)=\"addNewPart()\"\n                >\n                  Add Another Spare Part\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"d-block\">Repaired:</label>\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                formControlName=\"repaired\"\n                value=\"true\"\n                name=\"repaired\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    submitted2 && MaintenanceInsideForm.controls.repaired.errors\n                }\"\n              />\n              <label class=\"form-check-label\">Yes</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                formControlName=\"repaired\"\n                type=\"radio\"\n                value=\"false\"\n                name=\"repaired\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    submitted2 && MaintenanceInsideForm.controls.repaired.errors\n                }\"\n              />\n              <label class=\"form-check-label\">No</label>\n            </div>\n            <div\n              class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n              *ngIf=\"\n                submitted2 && MaintenanceInsideForm.controls.repaired.errors\n              \"\n            >\n              Please Choose Yes or No\n            </div>\n          </div>\n          <div class=\"text-right\">\n            <button (click)=\"onSubmit()\" type=\"button\" class=\"btn btn-primary\">\n              Submit\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n</div>\n\n";
      /***/
    },

    /***/
    "hb26":
    /*!********************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-inside/maintenance-inside.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: MaintenanceInsideComponent */

    /***/
    function hb26(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceInsideComponent", function () {
        return MaintenanceInsideComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maintenance_inside_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maintenance-inside.component.html */
      "eNw9");
      /* harmony import */


      var _maintenance_inside_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./maintenance-inside.component.css */
      "BLzX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/maintenance.service */
      "xHYo");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/product.service */
      "lXKC");

      var MaintenanceInsideComponent = /*#__PURE__*/function () {
        function MaintenanceInsideComponent(_fb, _MaintenanceService, _ProductService) {
          _classCallCheck(this, MaintenanceInsideComponent);

          this._fb = _fb;
          this._MaintenanceService = _MaintenanceService;
          this._ProductService = _ProductService;
          this.started = false;
          this.newSection = [0];
          this.newPart = [0];
          this.i = 1;
          this.displayRecomendedSerial = true;
          this.allSerialNumbers = new Array();
        }

        _createClass(MaintenanceInsideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            this.creteForm();
            this.creteMaintenanceInsideForm();
            this.getAllproducts();
            setTimeout(function () {
              _this46.serial.nativeElement.focus();
            }, 0);
          }
        }, {
          key: "enterPressed",
          value: function enterPressed(e) {
            var code = e.keyCode ? e.keyCode : e.which;

            if (code == 13) {
              //Enter keycode
              this.onStart();
            }
          }
        }, {
          key: "addNewSection",
          value: function addNewSection() {
            this.MaintenanceData.push(this.newMaintenanceData());
            this.newSection.push(2);
          }
        }, {
          key: "addNewPart",
          value: function addNewPart() {
            this.sparePartsData.push(this.newsparePartsData());
            this.newPart.push(1);
            console.log(this.newPart);
          }
        }, {
          key: "onItemChange",
          value: function onItemChange(value) {
            for (var i = this.MaintenanceData.value.length; i > 0; i--) {
              this.MaintenanceData.removeAt(i - 1);
            }

            for (var i = this.sparePartsData.value.length; i > 0; i--) {
              this.sparePartsData.removeAt(i - 1);
            }

            this.MaintenanceData.push(this.newMaintenanceData());
            console.log(" Value is : ", this.MaintenanceData.value);
          }
        }, {
          key: "onItemChange2",
          value: function onItemChange2(value) {
            for (var i = this.sparePartsData.value.length; i > 0; i--) {
              this.sparePartsData.removeAt(i - 1);
            }

            for (var i = this.MaintenanceData.value.length; i > 0; i--) {
              this.MaintenanceData.removeAt(i - 1);
            }

            this.sparePartsData.push(this.newsparePartsData());
            console.log(" Value is : ", this.sparePartsData.value);
          }
        }, {
          key: "creteForm",
          value: function creteForm() {
            this.form = this._fb.group({
              serialNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "creteMaintenanceInsideForm",
          value: function creteMaintenanceInsideForm() {
            this.MaintenanceInsideForm = this._fb.group({
              isAdded: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              Existence: [''],
              sparePartsData: this._fb.array([]),
              MaintenanceData: this._fb.array([]),
              // Existence: new FormControl(''),
              // inside:new FormControl(''),
              repaired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            }); // this.sparePartsData.push(this.newsparePartsData())
            // this.MaintenanceData.push(this.newMaintenanceData())
          }
        }, {
          key: "sparePartsData",
          get: function get() {
            return this.MaintenanceInsideForm.get("sparePartsData");
          }
        }, {
          key: "MaintenanceData",
          get: function get() {
            return this.MaintenanceInsideForm.get("MaintenanceData");
          }
        }, {
          key: "newsparePartsData",
          value: function newsparePartsData() {
            return this._fb.group({
              serialNumber: [''],
              isInside: [''],
              product: ['']
            });
          }
        }, {
          key: "newMaintenanceData",
          value: function newMaintenanceData() {
            return this._fb.group({
              sparePartNumber: ['']
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
          key: "onStart",
          value: function onStart() {
            var _this47 = this;

            this.submitted = true; // this.started = true;

            if (this.form.valid) {
              this._MaintenanceService.startMaitenanceInsideStore(this.Getserial(), localStorage.getItem("id")).subscribe(function (res) {
                console.log(res);

                if (res.message == 'Maintainence Started successfully') {
                  _this47.started = true;
                } else {
                  _this47.alertWithFail(res.message);
                }
              }, function (err) {
                _this47.alertWithFail(err);
              });

              console.log(this.form.value.serialNumber, localStorage.getItem("emp"));
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this48 = this;

            this.submitted2 = true; // console.log(this.MaintenanceInsideForm.value)

            if (this.MaintenanceInsideForm.valid) {
              console.log(this.MaintenanceInsideForm.value);
              var spareData = [];

              for (var i = 0; i < this.MaintenanceInsideForm.value.sparePartsData.length; i++) {
                spareData.push({
                  serialNumber: this.MaintenanceInsideForm.value.sparePartsData[i].serialNumber,
                  insideProduct: {
                    isInside: this.MaintenanceInsideForm.value.sparePartsData[i].isInside,
                    product: this.MaintenanceInsideForm.value.sparePartsData[i].product
                  }
                });
              }

              console.log(spareData);
              var Maintenancedata = {
                isAdded: this.MaintenanceInsideForm.value.isAdded,
                sparePartNumber: []
              };

              for (var i = 0; i < this.MaintenanceInsideForm.value.MaintenanceData.length; i++) {
                Maintenancedata.sparePartNumber.push(this.MaintenanceInsideForm.value.MaintenanceData[i].sparePartNumber);
              }

              for (var i = 0; i < this.MaintenanceInsideForm.value.sparePartsData.length; i++) {
                Maintenancedata.sparePartNumber.push(this.MaintenanceInsideForm.value.sparePartsData[i].serialNumber);
              }

              console.log(Maintenancedata);

              this._MaintenanceService.submitMaintenanceInsideStore(this.Getserial(), localStorage.getItem("id"), spareData, Maintenancedata, this.MaintenanceInsideForm.value.repaired).subscribe(function (res) {
                console.log(res);

                if (res.message == 'Maintainence Finished successfully') {
                  _this48.alertWithSuccess(res.message);
                } else {
                  _this48.alertWithFail(res.message);
                }
              }, function (err) {
                console.log(err);

                _this48.alertWithFail(err);
              });
            }
          }
        }, {
          key: "alertWithSuccess",
          value: function alertWithSuccess(msg) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Done', msg, 'success').then(function (res) {
              location.reload();
            });
          }
        }, {
          key: "getAllproducts",
          value: function getAllproducts() {
            var _this49 = this;

            this._ProductService.getAllProduct().subscribe(function (res) {
              _this49.products = res;

              var _iterator3 = _createForOfIteratorHelper(_this49.products),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var val = _step3.value;
                  var stringSerial = val.serialNumber.toString();
                  console.log(stringSerial);

                  _this49.allSerialNumbers.push(val.serialNumber.toString());
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            });
          }
        }, {
          key: "selectedSerial",
          value: function selectedSerial(val) {
            this.serial.nativeElement.value = val;
            this.displayRecomendedSerial = true; // this.form.controls.serialNumber.valid;
          }
        }, {
          key: "data",
          value: function data(val) {
            return val;
          }
        }, {
          key: "searchSerial",
          value: function searchSerial(val) {
            this.displayRecomendedSerial = false;
            var filterd = this.allSerialNumbers.filter(this.data);
          }
        }, {
          key: "Getserial",
          value: function Getserial() {
            var valueInput = this.serial.nativeElement.value;
            this.Serial = valueInput;
            return valueInput;
          }
        }]);

        return MaintenanceInsideComponent;
      }();

      MaintenanceInsideComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_5__["MaintenanceService"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }];
      };

      MaintenanceInsideComponent.propDecorators = {
        serial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Serial']
        }]
      };
      MaintenanceInsideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maintenance-inside',
        template: _raw_loader_maintenance_inside_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maintenance_inside_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MaintenanceInsideComponent);
      /***/
    },

    /***/
    "j0i+":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/maintenance-pages/maintenance-outside-after/maintenance-outside-after.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\t\t<!-- Page Header -->\n     \n          <!-- /Page Header -->\n      \n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Maintenance Outside Store After Delivery :</h4>\n                </div>\n                <div class=\"card-body\">\n                \n                    <div >\n                      <form [formGroup]=\"maintenanceForm\">\n                \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-4\">Product Serial Number:</label>\n                            <div class=\"col-md-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Product Serial Number\"\n                              #Serial [(ngModel)]=\"search\"\n                      \n                              (keyup)=\"searchSerial(search)\"\n                               formControlName=\"serialNumber\"[ngClass]=\"{\n                                'is-invalid': submitted2 && maintenanceForm.controls.serialNumber.errors\n                              }\">\n                              <div\n                              class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                              *ngIf=\"submitted2 && maintenanceForm.controls.serialNumber.errors\"\n                            >\n                             Enter Valid serial Number\n                            </div>\n                            <div  *ngFor=\"let post of allSerialNumbers | filter:search \">\n                              <a (click)=\"selectedSerial(post)\" *ngIf='!displayRecomendedSerial'>{{post}}</a>\n                          </div>\n                            </div>\n                       \n                          </div>\n               \n                 \n                  \n                      <div class=\"form-group row\" >\n                        <label class=\"col-form-label col-md-4\">Cost:</label>\n                        <div class=\"col-md-10\">\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Please Enter Cost\"formControlName=\"cost\" [ngClass]=\"{\n                            'is-invalid': submitted2 && maintenanceForm.controls.cost.errors\n                          }\" >\n                          <div\n                          class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                          *ngIf=\"submitted2 && maintenanceForm.controls.cost.errors\"\n                        >\n                         Field is required\n                        </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\" >\n                        <label class=\"d-block\">Repaired:</label>\n                        <div class=\"form-check form-check-inline\">\n                          <input class=\"form-check-input\"  type=\"radio\" \n                           value=\"true\" name=\"repaired\"formControlName=\"repaired\" [ngClass]=\"{\n                            'is-invalid':\n                              submitted2 && maintenanceForm.controls.repaired.errors\n                          }\"  >\n                          <label class=\"form-check-label\" >Yes</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                          <input class=\"form-check-input\"   \n                          type=\"radio\" value=\"false\" name=\"repaired\"formControlName=\"repaired\" [ngClass]=\"{\n                            'is-invalid':\n                              submitted2 && maintenanceForm.controls.repaired.errors\n                          }\"    >\n                          <label class=\"form-check-label\" >No</label>\n                        </div>\n                        <div\n                        class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                        *ngIf=\"submitted2 && maintenanceForm.controls.repaired.errors\"\n                      >\n                        Please Choose Yes or No\n                      </div>\n                      </div>\n                      <div class=\"text-right\">\n                        <button  type=\"submit\" (click)=\"submitMaitenanceOutside()\" class=\"btn btn-primary\">Submit</button>\n                      </div>\n                    </form>\n                    </div>\n\n\n                 \n                </div>\n              </div>\n             \n            </div>\n          </div>\n      ";
      /***/
    },

    /***/
    "kmnG":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
      \****************************************************************************/

    /*! exports provided: MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function kmnG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/error.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Single error message to be shown underneath the form field.
       */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        }
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            }
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/form-field-animations.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Animations used by the MatFormField.
       * \@docs-private
       * @type {?}
       */


      var matFormFieldAnimations = {
        /**
         * Animation that transitions the form field's error and hint messages.
         */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/form-field-control.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * An interface which allows a control to work inside of a `MatFormField`.
       * @abstract
       * @template T
       */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/form-field-errors.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * \@docs-private
       * @return {?}
       */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /**
       * \@docs-private
       * @param {?} align
       * @return {?}
       */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /**
       * \@docs-private
       * @return {?}
       */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/hint.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var nextUniqueId$1 = 0;
      /**
       * Hint text to be shown underneath the form field control.
       */

      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-right", ctx.align == "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        }
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-right]': 'align == "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/label.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The floating label for a `mat-form-field`.
       */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/placeholder.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * \@breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/prefix.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Prefix to be placed in front of the form field.
       */


      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/suffix.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Suffix to be placed at the end of the form field.
       */


      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/form-field.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var nextUniqueId$2 = 0;
      /** @type {?} */

      var floatingLabelScale = 0.75;
      /** @type {?} */

      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * \@docs-private
       */

      var MatFormFieldBase =
      /**
       * @param {?} _elementRef
       */
      function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };

      if (false) {}
      /**
       * Base class to which we're applying the form field mixins.
       * \@docs-private
       * @type {?}
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Represents the default options for the form field that can be configured
       * using the `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token.
       * @record
       */


      function MatFormFieldDefaultOptions() {}

      if (false) {}
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       * @type {?}
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       * @type {?}
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /**
       * Container for form controls that applies Material Design styling and behavior.
       */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super13 = _createSuper(MatFormField);

        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} labelOptions
         * @param {?} _dir
         * @param {?} _defaults
         * @param {?} _platform
         * @param {?} _ngZone
         * @param {?} _animationMode
         */
        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this50;

          _classCallCheck(this, MatFormField);

          _this50 = _super13.call(this, _elementRef);
          _this50._elementRef = _elementRef;
          _this50._changeDetectorRef = _changeDetectorRef;
          _this50._dir = _dir;
          _this50._defaults = _defaults;
          _this50._platform = _platform;
          _this50._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this50._outlineGapCalculationNeededImmediately = false;
          /**
           * Whether the outline gap needs to be calculated next time the zone has stabilized.
           */

          _this50._outlineGapCalculationNeededOnStable = false;
          _this50._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Override for the logic that disables the label animation in certain cases.
           */

          _this50._showAlwaysAnimate = false;
          /**
           * State of the mat-hint and mat-error animations.
           */

          _this50._subscriptAnimationState = '';
          _this50._hintLabel = ''; // Unique id for the hint label.

          _this50._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

          _this50._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this50._labelOptions = labelOptions ? labelOptions : {};
          _this50.floatLabel = _this50._getDefaultFloatLabelState();
          _this50._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this50.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this50._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this50;
        }
        /**
         * The form-field appearance style.
         * @return {?}
         */


        _createClass(MatFormField, [{
          key: "appearance",
          get: function get() {
            return this._appearance;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /**
           * Whether the required marker should be hidden.
           * @return {?}
           */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the floating label should always float or not.
           * @return {?}
           */

        }, {
          key: "_shouldAlwaysFloat",
          get: function get() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /**
           * Whether the label can float or not.
           * @return {?}
           */

        }, {
          key: "_canLabelFloat",
          get: function get() {
            return this.floatLabel !== 'never';
          }
          /**
           * Text for the form field hint.
           * @return {?}
           */

        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           * @return {?}
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_labelChild",
          get: function get() {
            return this._labelChildNonStatic || this._labelChildStatic;
          }
          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           * @return {?}
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this51 = this;

            this._validateControlChild();
            /** @type {?} */


            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
            /** @type {?} */
            null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this51._validatePlaceholders();

              _this51._syncDescribedByIds();

              _this51._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this51._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this51._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this51._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this51._outlineGapCalculationNeededOnStable) {
                  _this51.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this51._outlineGapCalculationNeededOnStable = true;

              _this51._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this51._processHints();

              _this51._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this51._syncDescribedByIds();

              _this51._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this51._ngZone.runOutsideAngular(
                  /**
                  * @return {?}
                  */
                  function () {
                    requestAnimationFrame(
                    /**
                    * @return {?}
                    */
                    function () {
                      return _this51.updateOutlineGap();
                    });
                  });
                } else {
                  _this51.updateOutlineGap();
                }
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Determines whether a class from the NgControl should be forwarded to the host element.
           * @param {?} prop
           * @return {?}
           */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            /** @type {?} */
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!this._labelChild;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /**
           * Determines whether to display hints or errors.
           * @return {?}
           */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /**
           * Animates the placeholder up and locks it in position.
           * @return {?}
           */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this52 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  _this52._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           * @private
           * @return {?}
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /**
           * Does any extra processing that is required when handling the hints.
           * @private
           * @return {?}
           */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           * @private
           * @return {?}
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this53 = this;

            if (this._hintChildren) {
              /** @type {?} */
              var startHint;
              /** @type {?} */

              var endHint;

              this._hintChildren.forEach(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this53.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /**
           * Gets the default float label state.
           * @private
           * @return {?}
           */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           * @private
           * @return {?}
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              /** @type {?} */
              var ids = [];

              if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                var startHint = this._hintChildren ? this._hintChildren.find(
                /**
                * @param {?} hint
                * @return {?}
                */
                function (hint) {
                  return hint.align === 'start';
                }) : null;
                /** @type {?} */

                var endHint = this._hintChildren ? this._hintChildren.find(
                /**
                * @param {?} hint
                * @return {?}
                */
                function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids = this._errorChildren.map(
                /**
                * @param {?} error
                * @return {?}
                */
                function (error) {
                  return error.id;
                });
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /**
           * Throws an error if the form field's control is missing.
           * @protected
           * @return {?}
           */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           * @return {?}
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            /** @type {?} */
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }
            /** @type {?} */


            var startWidth = 0;
            /** @type {?} */

            var gapWidth = 0;
            /** @type {?} */

            var container = this._connectionContainerRef.nativeElement;
            /** @type {?} */

            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            /** @type {?} */

            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              /** @type {?} */
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }
              /** @type {?} */


              var containerStart = this._getStartEnd(containerRect);
              /** @type {?} */


              var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
              /** @type {?} */


              var labelWidth = 0;

              var _iterator4 = _createForOfIteratorHelper(labelEl.children),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var child = _step4.value;
                  labelWidth += child.offsetWidth;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var i = 0; i < startEls.length; i++) {
              startEls[i].style.width = "".concat(startWidth, "px");
            }

            for (var _i = 0; _i < gapEls.length; _i++) {
              gapEls[_i].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /**
           * Gets the start end of the rect considering the current directionality.
           * @private
           * @param {?} rect
           * @return {?}
           */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /**
           * Checks whether the form field is attached to the DOM.
           * @private
           * @return {?}
           */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            /** @type {?} */
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              /** @type {?} */
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return (
              /** @type {?} */
              document.documentElement.contains(element)
            );
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatError, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatHint, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPrefix, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatSuffix, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat)("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatError, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatHint, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatPrefix, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MatSuffix, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatError, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatHint, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatPrefix, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MatSuffix, {
              descendants: true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/form-field-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵfac = function MatFormFieldModule_Factory(t) {
        return new (t || MatFormFieldModule)();
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/form-field/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "mdGr":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-pages.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MaintenancePagesModule */

    /***/
    function mdGr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePagesModule", function () {
        return MaintenancePagesModule;
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


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _maintenance_pages_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./maintenance-pages-routing.module */
      "tfzV");
      /* harmony import */


      var _maintenance_inside_maintenance_inside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./maintenance-inside/maintenance-inside.component */
      "hb26");
      /* harmony import */


      var _maintenance_outside_maintenance_outside_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./maintenance-outside/maintenance-outside.component */
      "1vPI");
      /* harmony import */


      var _maintenance_outside_after_maintenance_outside_after_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./maintenance-outside-after/maintenance-outside-after.component */
      "OUpF");

      var MaintenancePagesModule = function MaintenancePagesModule() {
        _classCallCheck(this, MaintenancePagesModule);
      };

      MaintenancePagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_maintenance_inside_maintenance_inside_component__WEBPACK_IMPORTED_MODULE_8__["MaintenanceInsideComponent"], _maintenance_outside_maintenance_outside_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceOutsideComponent"], _maintenance_outside_after_maintenance_outside_after_component__WEBPACK_IMPORTED_MODULE_10__["MaintenanceOutsideAfterComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _maintenance_pages_routing_module__WEBPACK_IMPORTED_MODULE_7__["MaintenancePagesRoutingModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]]
      })], MaintenancePagesModule);
      /***/
    },

    /***/
    "r/dU":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/maintenance-pages/maintenance-outside/maintenance-outside.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\t\t<!-- Page Header -->\n     \n          <!-- /Page Header -->\n      \n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Maintenance Outside Store Before Delivery :</h4>\n                </div>\n                <div class=\"card-body\">\n                  <form [formGroup]=\"form\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-form-label\">Product Serial Number:</label>\n                      <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Product Serial Number\"\n                        #Serial [(ngModel)]=\"search\"\n                        (keypress)=\"enterPressed($event)\"\n                        (keyup)=\"searchSerial(search)\"\n                         formControlName=\"serialNumber\"[ngClass]=\"{\n                          'is-invalid': submitted && form.controls.serialNumber.errors\n                        }\">\n                        <div\n                        class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                        *ngIf=\"submitted && form.controls.serialNumber.errors\"\n                      >\n                       Enter Valid serial Number\n                      </div>\n                      <div  *ngFor=\"let post of allSerialNumbers | filter:search \">\n                        <a (click)=\"selectedSerial(post)\" *ngIf='!displayRecomendedSerial'>{{post}}</a>\n                    </div>\n                      </div>\n                 \n                    </div>\n                    <div class=\"text-right\">\n                      <button type=\"button\" class=\"btn btn-primary mb-3\"(click)=\"onSubmit()\" *ngIf=\"!started\">Start Maintenance</button>\n                    </div>\n                  </form>\n                    <div *ngIf=\"started\">\n                      <form [formGroup]=\"maintenanceForm\">\n                    <div class=\"form-group row\" >\n                      <label class=\"col-form-label col-md-2\">Shop Name:</label>\n                      <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\"placeholder=\"Please Enter Shop Name\"formControlName=\"shopName\" [ngClass]=\"{\n                          'is-invalid': submitted2 && maintenanceForm.controls.shopName.errors\n                        }\">\n                        <div\n                        class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                        *ngIf=\"submitted2 && maintenanceForm.controls.shopName.errors\"\n                      >\n                       Field is required\n                      </div>\n                      </div>\n                    </div>\n                 \n               \n                    <div class=\"form-group row\" >\n                      <label class=\"col-form-label col-md-2\">Recipient:</label>\n                      <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\"placeholder=\"Please Enter Recipient\"formControlName=\"recipient\" [ngClass]=\"{\n                          'is-invalid': submitted2 && maintenanceForm.controls.recipient.errors\n                        }\" >\n                        <div\n                        class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                        *ngIf=\"submitted2 && maintenanceForm.controls.recipient.errors\"\n                      >\n                       Field is required\n                      </div>\n                      </div>\n                    </div>\n                  \n                    <div class=\"form-group row\" >\n                        <label class=\"col-form-label col-md-2\">Delivery Man:</label>\n                        <div class=\"col-md-10\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Please Enter Delivery Man\"formControlName=\"deliveryMan\" [ngClass]=\"{\n                            'is-invalid': submitted2 && maintenanceForm.controls.deliveryMan.errors\n                          }\" >\n                          <div\n                          class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                          *ngIf=\"submitted2 && maintenanceForm.controls.deliveryMan.errors\"\n                        >\n                         Field is required\n                        </div>\n                        </div>\n                      </div>\n                  \n                      <!-- <div class=\"form-group row\" >\n                        <label class=\"col-form-label col-md-2\">Cost:</label>\n                        <div class=\"col-md-10\">\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Please Enter Cost\"formControlName=\"cost\" [ngClass]=\"{\n                            'is-invalid': submitted2 && maintenanceForm.controls.cost.errors\n                          }\" >\n                          <div\n                          class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                          *ngIf=\"submitted2 && maintenanceForm.controls.cost.errors\"\n                        >\n                         Field is required\n                        </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\" >\n                        <label class=\"d-block\">Repaired:</label>\n                        <div class=\"form-check form-check-inline\">\n                          <input class=\"form-check-input\"  type=\"radio\" \n                           value=\"true\" name=\"repaired\"formControlName=\"repaired\" [ngClass]=\"{\n                            'is-invalid':\n                              submitted2 && maintenanceForm.controls.repaired.errors\n                          }\"  >\n                          <label class=\"form-check-label\" >Yes</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                          <input class=\"form-check-input\"   \n                          type=\"radio\" value=\"false\" name=\"repaired\"formControlName=\"repaired\" [ngClass]=\"{\n                            'is-invalid':\n                              submitted2 && maintenanceForm.controls.repaired.errors\n                          }\"    >\n                          <label class=\"form-check-label\" >No</label>\n                        </div>\n                        <div\n                        class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\n                        *ngIf=\"submitted2 && maintenanceForm.controls.repaired.errors\"\n                      >\n                        Please Choose Yes or No\n                      </div>\n                      </div> -->\n                      <div class=\"text-right\">\n                        <button  type=\"submit\" (click)=\"submitMaitenanceOutside()\" class=\"btn btn-primary\">Submit</button>\n                      </div>\n                    </form>\n                    </div>\n\n\n                 \n                </div>\n              </div>\n             \n            </div>\n          </div>\n      ";
      /***/
    },

    /***/
    "tfzV":
    /*!*****************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-pages-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MaintenancePagesRoutingModule */

    /***/
    function tfzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePagesRoutingModule", function () {
        return MaintenancePagesRoutingModule;
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


      var _maintenance_inside_maintenance_inside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maintenance-inside/maintenance-inside.component */
      "hb26");
      /* harmony import */


      var _maintenance_outside_after_maintenance_outside_after_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./maintenance-outside-after/maintenance-outside-after.component */
      "OUpF");
      /* harmony import */


      var _maintenance_outside_maintenance_outside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maintenance-outside/maintenance-outside.component */
      "1vPI");

      var routes = [{
        path: 'inside',
        component: _maintenance_inside_maintenance_inside_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceInsideComponent"]
      }, {
        path: 'outside-before',
        component: _maintenance_outside_maintenance_outside_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceOutsideComponent"]
      }, {
        path: 'outside-after',
        component: _maintenance_outside_after_maintenance_outside_after_component__WEBPACK_IMPORTED_MODULE_4__["MaintenanceOutsideAfterComponent"]
      }];

      var MaintenancePagesRoutingModule = function MaintenancePagesRoutingModule() {
        _classCallCheck(this, MaintenancePagesRoutingModule);
      };

      MaintenancePagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MaintenancePagesRoutingModule);
      /***/
    },

    /***/
    "v2DX":
    /*!***********************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-outside/maintenance-outside.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function v2DX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n     background-color: rgb(249 244 249);\r\n  }\r\n  \r\n   a:hover {\r\n    background-color: rgb(179, 177, 177);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLW91dHNpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7S0FDYixrQ0FBa0M7RUFDckM7O0dBRUM7SUFDQyxvQ0FBb0M7RUFDdEMiLCJmaWxlIjoibWFpbnRlbmFuY2Utb3V0c2lkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5IDI0NCAyNDkpO1xyXG4gIH1cclxuICBcclxuICAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzcsIDE3Nyk7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "xHYo":
    /*!*******************************************************!*\
      !*** ./src/app/admin/services/maintenance.service.ts ***!
      \*******************************************************/

    /*! exports provided: MaintenanceService */

    /***/
    function xHYo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceService", function () {
        return MaintenanceService;
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

      var MaintenanceService = /*#__PURE__*/function () {
        function MaintenanceService() {
          _classCallCheck(this, MaintenanceService);

          this.url = "http://162.240.5.234:3000";
          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_3__["io"])(this.url);
          this.socket.on("connect", function () {
            console.log("connect");
          });
        }

        _createClass(MaintenanceService, [{
          key: "startMaitenanceInsideStore",
          value: function startMaitenanceInsideStore(productserialNumber, maintainererId) {
            var _this54 = this;

            this.socket.emit("startMaintenanceInsideStore", productserialNumber, maintainererId);
            var message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this54.socket.on("startMaintenanceInsideStore", function (comment) {
                observer.next(comment);
              });
            });
            return message;
          }
        }, {
          key: "submitMaintenanceInsideStore",
          value: function submitMaintenanceInsideStore(productserialNumber, maintainererId, sparePartsData, MaintenanceData, repaired) {
            var _this55 = this;

            this.socket.emit("submitMaintenanceInsideStore", productserialNumber, maintainererId, sparePartsData, MaintenanceData, repaired);
            var message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this55.socket.on("submitMaintenanceInsideStore", function (comment) {
                observer.next(comment);
              });
            });
            return message;
          }
        }, {
          key: "startMaitenanceOutsideStore",
          value: function startMaitenanceOutsideStore(productserialNumber, maintainererId) {
            var _this56 = this;

            this.socket.emit("startMaintenanceOutsideStore", productserialNumber, maintainererId);
            var message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this56.socket.on("startMaintenanceOutsideStore", function (comment) {
                observer.next(comment);
              });
            });
            return message;
          }
        }, {
          key: "submitMaintenanceOutsideStore",
          value: function submitMaintenanceOutsideStore(productserialNumber, maintainererId, MaintenanceData) {
            var _this57 = this;

            this.socket.emit("submitMaintenanceOutsideStoreBeforeRepaired", productserialNumber, maintainererId, MaintenanceData);
            var message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this57.socket.on("submitMaintenanceOutsideStoreBeforeRepaired", function (comment) {
                observer.next(comment);
              });
            });
            return message;
          }
        }, {
          key: "submitMaintenanceOutsideStoreAfter",
          value: function submitMaintenanceOutsideStoreAfter(productserialNumber, maintainererId, MaintenanceData) {
            var _this58 = this;

            this.socket.emit("submitMaintenanceOutsideStoreAfterRepaired", productserialNumber, maintainererId, MaintenanceData);
            var message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this58.socket.on("submitMaintenanceOutsideStoreAfterRepaired", function (comment) {
                observer.next(comment);
              });
            });
            return message;
          }
        }]);

        return MaintenanceService;
      }();

      MaintenanceService.ctorParameters = function () {
        return [];
      };

      MaintenanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MaintenanceService);
      /***/
    },

    /***/
    "xukY":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/admin/maintenance-pages/maintenance-outside-after/maintenance-outside-after.component.css ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xukY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n     background-color: rgb(249 244 249);\r\n  }\r\n  \r\n   a:hover {\r\n    background-color: rgb(179, 177, 177);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLW91dHNpZGUtYWZ0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7S0FDYixrQ0FBa0M7RUFDckM7O0dBRUM7SUFDQyxvQ0FBb0M7RUFDdEMiLCJmaWxlIjoibWFpbnRlbmFuY2Utb3V0c2lkZS1hZnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5IDI0NCAyNDkpO1xyXG4gIH1cclxuICBcclxuICAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzcsIDE3Nyk7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "xz+E":
    /*!***************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
      \***************************************************/

    /*! exports provided: VERSION */

    /***/
    function xzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of the Angular Component Development Kit. */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.13');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=cdk.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=maintenance-pages-maintenance-pages-module-es5.js.map