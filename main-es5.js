(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\developer\angular\appTorreProject\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0z2C":
    /*!****************************************************!*\
      !*** ./src/app/components/home/home.component.css ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function z2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".jumbotron {\r\n    margin-bottom: 0px;\r\n    background-image: url('Deal.jpg');\r\n    background-position: 0% 25%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    color: white;\r\n    text-shadow: black 0.3em 0.3em 0.3em;\r\n}\r\n\r\n.EncabezadoBanner {\r\n    background-image: url(/src/assets/img/Buttons/Banner.jpg);\r\n    height: 100px;\r\n    width: 889px;\r\n    margin-top: 3%;\r\n    margin-left: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBbUQ7SUFDbkQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvRGVhbC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMC4zZW0gMC4zZW0gMC4zZW07XHJcbn1cclxuXHJcbi5FbmNhYmV6YWRvQmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWcvQnV0dG9ucy9CYW5uZXIuanBnKTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogODg5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "1W3u":
    /*!******************************************!*\
      !*** ./src/app/services/area.service.ts ***!
      \******************************************/

    /*! exports provided: AreaService */

    /***/
    function W3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaService", function () {
        return AreaService;
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/globals */
      "guJ4");

      var AreaService = /*#__PURE__*/function () {
        function AreaService(http, _router) {
          _classCallCheck(this, AreaService);

          this.http = http;
          this._router = _router;
          this.urlEndPoint = _common_globals__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BASE_API_URL + '/api/Area';
        }

        _createClass(AreaService, [{
          key: "getAreas",
          value: function getAreas() {
            return this.http.get(this.urlEndPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }]);

        return AreaService;
      }();

      AreaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AreaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AreaService);
      /***/
    },

    /***/
    "3F0J":
    /*!**************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function F0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "pbNA");
      /* harmony import */


      var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.css */
      "VRjR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(_router) {
          _classCallCheck(this, NavbarComponent);

          this._router = _router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-navbar",
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "6yyQ":
    /*!****************************************!*\
      !*** ./src/app/pipes/paginate.pipe.ts ***!
      \****************************************/

    /*! exports provided: PaginatePipe */

    /***/
    function yyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
        return PaginatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaginatePipe = /*#__PURE__*/function () {
        function PaginatePipe() {
          _classCallCheck(this, PaginatePipe);
        }

        _createClass(PaginatePipe, [{
          key: "transform",
          value: function transform(array, page_size, page_number) {
            if (!array.length) return [];

            if (page_size === "all") {
              return array;
            }

            page_size = page_size || 5;
            page_number = page_number || 1;
            --page_number;
            return array.slice(page_number * page_size, (page_number + 1) * page_size);
          }
        }]);

        return PaginatePipe;
      }();

      PaginatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "paginate"
      })], PaginatePipe);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BdNj":
    /*!**************************************!*\
      !*** ./src/app/classes/Necessity.ts ***!
      \**************************************/

    /*! exports provided: Necessity */

    /***/
    function BdNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Necessity", function () {
        return Necessity;
      });
      /* harmony import */


      var _Area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Area */
      "EsNt");
      /* harmony import */


      var _Organization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Organization */
      "tBvB");

      var Necessity = function Necessity() {
        _classCallCheck(this, Necessity);

        this.Organization = new _Organization__WEBPACK_IMPORTED_MODULE_1__["Organization"]();
        this.Area = new _Area__WEBPACK_IMPORTED_MODULE_0__["Area"]();
      };
      /***/

    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "tXZI");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "0z2C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "CYpv":
    /*!***********************************!*\
      !*** ./src/app/classes/Person.ts ***!
      \***********************************/

    /*! exports provided: Person */

    /***/
    function CYpv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Person", function () {
        return Person;
      });

      var Person = function Person() {
        _classCallCheck(this, Person);
      };
      /***/

    },

    /***/
    "E/iw":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization/organization.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EIw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"animated fadeIn\">Welcome {{infoOrg.organizations[0].name}}</h1>\n<hr />\n\n\n<div class=\"animated fadeIn card text-white bg-dark mb-3\">\n    <div class=\"card-header\">\n        Reason\n    </div>\n    <div class=\"card-body\">\n        <p class=\"card-text\">{{infoOrg.details[0].content}}</p>\n        <button class=\"btn btn-secondary btn-block\" (click)=\"openNewModal(content)\">New Need</button>\n    </div>\n</div>\n\n\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{titulo}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss(closeModal())\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #formulario=\"ngForm\">\n            <div class=\"form-group row\">\n                <label for=\"DescriptionTxt\" class=\"col-form-label col-sm-5\">Description:</label>\n                <div class=\"col-sm-6\">\n                    <textarea class=\"form-control\" id=\"DescriptionTxt\" rows=\"3\" [(ngModel)]=\"need.Description\" name=\"Description\" required></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"location\" class=\"col-form-label col-sm-5\">Location:</label>\n                <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"need.Location\" name=\"location\" required>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"nroProposals\" class=\"col-form-label col-sm-5\">Max Proposals:</label>\n                <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"need.MaxProposals\" name=\"nroProposals\" required>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary btn-block\" role=\"button\" (click)=\"modal.close(create())\" *ngIf=\"!need.Id; else elseBlock\" [disabled]=\"!formulario.form.valid\">Crear</button>\n        <ng-template #elseBlock>\n            <button class=\"btn btn-primary btn-block\" role=\"button\" (click)=\"modal.close(update())\" [disabled]=\"!formulario.form.valid\">Editar</button>\n        </ng-template>\n    </div>\n</ng-template>";
      /***/
    },

    /***/
    "EsNt":
    /*!*********************************!*\
      !*** ./src/app/classes/Area.ts ***!
      \*********************************/

    /*! exports provided: Area */

    /***/
    function EsNt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Area", function () {
        return Area;
      });

      var Area = function Area() {
        _classCallCheck(this, Area);
      };
      /***/

    },

    /***/
    "FJUx":
    /*!*********************************************************!*\
      !*** ./src/app/components/persons/persons.component.ts ***!
      \*********************************************************/

    /*! exports provided: PersonsComponent */

    /***/
    function FJUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonsComponent", function () {
        return PersonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_persons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./persons.component.html */
      "KdA/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/person.service */
      "TmGi");
      /* harmony import */


      var src_app_classes_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/classes/Person */
      "CYpv");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _classes_Necessity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../classes/Necessity */
      "BdNj");
      /* harmony import */


      var _services_necessity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/necessity.service */
      "Jczs");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _classes_Proposal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../classes/Proposal */
      "VX3T");
      /* harmony import */


      var _services_proposal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/proposal.service */
      "PpgC");

      var PersonsComponent = /*#__PURE__*/function () {
        function PersonsComponent(_personService, _needService, _proposalService, modalService, config) {
          _classCallCheck(this, PersonsComponent);

          this._personService = _personService;
          this._needService = _needService;
          this._proposalService = _proposalService;
          this.modalService = modalService;
          this.user = "davidmontes";
          this.user2 = "andresgarcia";
          this.needs = [];
          this.page_size = 5;
          this.page_number = 1;
          this.pageSizeOptions = [5, 10, 20, 50, 100];
          this.showNeeds = false;
          this.necessity = new _classes_Necessity__WEBPACK_IMPORTED_MODULE_6__["Necessity"]();
          this.person = new src_app_classes_Person__WEBPACK_IMPORTED_MODULE_4__["Person"]();
          this.loading = true;
        }

        _createClass(PersonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginUser();
          }
        }, {
          key: "loadNeeds",
          value: function loadNeeds() {
            var _this = this;

            this._needService.getNeeds().subscribe(function (result) {
              if (result) {
                _this.needs = result;

                if (!_this.infoPerson) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Error", "Failed to retrieve information", "error");
                } else {
                  _this.loading = false;
                }
              }
            });
          }
        }, {
          key: "loginUser",
          value: function loginUser() {
            var _this2 = this;

            this._personService.getPersonOfTorre(this.user).subscribe(function (result) {
              if (result) {
                _this2.infoPerson = result;
              }

              if (!_this2.infoPerson) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Error", "Failed to retrieve information", "error");
              } else {
                _this2.loading = false;
              }
            });
          }
        }, {
          key: "seeNeeds",
          value: function seeNeeds() {
            if (this.showNeeds === true) {
              this.showNeeds = false;
              this.needs = [];
            } else {
              this.showNeeds = true;
              this.showProposals = false;
              this.proposals = [];
              this.loadNeeds();
            }
          }
        }, {
          key: "seeProposals",
          value: function seeProposals() {
            if (this.showProposals === true) {
              this.showProposals = false;
              this.proposals = [];
            } else {
              this.showProposals = true;
              this.showNeeds = false;
              this.needs = [];
              this.loadProsals();
            }
          }
        }, {
          key: "loadProsals",
          value: function loadProsals() {
            var _this3 = this;

            this._proposalService.getProposals().subscribe(function (result) {
              if (result) {
                _this3.proposals = result;

                if (!_this3.infoPerson) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Error", "Failed to retrieve information", "error");
                } else {
                  _this3.loading = false;
                }
              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.page_size = e.pageSize;
            this.page_number = e.pageIndex + 1;
          }
        }, {
          key: "openNewModal",
          value: function openNewModal(content, info) {
            this.modalService.open(content);
            this.need = info;
            this.proposal = new _classes_Proposal__WEBPACK_IMPORTED_MODULE_9__["Proposal"]();
            this.titulo = "New Proposal";
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalService.dismissAll();
            this.loadNeeds();
          }
        }, {
          key: "create",
          value: function create() {
            var _this4 = this;

            this.proposal.Necessity = this.need;
            this.proposal.CreateDate = new Date();

            this._proposalService.create(this.proposal).subscribe(function (proposal) {
              _this4.modalService.dismissAll();

              _this4.proposals.push(proposal);

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("New Proposal", "The record was saved successfully!", "success");
            });
          }
        }]);

        return PersonsComponent;
      }();

      PersonsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]
        }, {
          type: _services_necessity_service__WEBPACK_IMPORTED_MODULE_7__["NecessityService"]
        }, {
          type: _services_proposal_service__WEBPACK_IMPORTED_MODULE_10__["ProposalService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalConfig"]
        }];
      };

      PersonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-persons",
        template: _raw_loader_persons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PersonsComponent);
      /***/
    },

    /***/
    "Fa25":
    /*!*********************************!*\
      !*** ./src/app/paginator-es.ts ***!
      \*********************************/

    /*! exports provided: CustomMatPaginatorIntl */

    /***/
    function Fa25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomMatPaginatorIntl", function () {
        return CustomMatPaginatorIntl;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomMatPaginatorIntl = /*#__PURE__*/function (_angular_material_pag) {
        _inherits(CustomMatPaginatorIntl, _angular_material_pag);

        var _super = _createSuper(CustomMatPaginatorIntl);

        function CustomMatPaginatorIntl() {
          var _this5;

          _classCallCheck(this, CustomMatPaginatorIntl);

          _this5 = _super.apply(this, arguments);
          _this5.itemsPerPageLabel = "Registros por Pagina";
          _this5.nextPageLabel = "Siguiente";
          _this5.previousPageLabel = "Anterior";
          _this5.firstPageLabel = "Primera Página";
          _this5.lastPageLabel = "última Página";

          _this5.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
              return "0 od " + length;
            }

            length = Math.max(length, 0);
            var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " de " + length;
          };

          return _this5;
        }

        return CustomMatPaginatorIntl;
      }(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]);

      CustomMatPaginatorIntl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomMatPaginatorIntl);
      /***/
    },

    /***/
    "Jczs":
    /*!***********************************************!*\
      !*** ./src/app/services/necessity.service.ts ***!
      \***********************************************/

    /*! exports provided: NecessityService */

    /***/
    function Jczs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NecessityService", function () {
        return NecessityService;
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/globals */
      "guJ4");

      var NecessityService = /*#__PURE__*/function () {
        function NecessityService(http, _router) {
          _classCallCheck(this, NecessityService);

          this.http = http;
          this._router = _router;
          this.urlEndPoint = _common_globals__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BASE_API_URL + '/api/Necessity';
        }

        _createClass(NecessityService, [{
          key: "getNeeds",
          value: function getNeeds() {
            return this.http.get(this.urlEndPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "getNeedById",
          value: function getNeedById(id) {
            return this.http.get("".concat(this.urlEndPoint, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "create",
          value: function create(info) {
            return this.http.post(this.urlEndPoint, info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "update",
          value: function update(info) {
            return this.http.put("".concat(this.urlEndPoint, "/").concat(info.Id), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.urlEndPoint, "/").concat(id));
          }
        }]);

        return NecessityService;
      }();

      NecessityService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      NecessityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], NecessityService);
      /***/
    },

    /***/
    "KdA/":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/persons/persons.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"animated fadeIn\">Hello {{infoPerson.person.name}}!!!</h1>\n<hr />\n\n<div class=\"card text-white bg-dark mb-3\">\n    <div class=\"card-header\">Information</div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ infoPerson.person.professionalHeadline }}</h5>\n        <h6 class=\"card-title\">{{ infoPerson.person.links[0].address }}</h6>\n        <h6 class=\"card-title\"> <small>{{ infoPerson.person.location.name }}</small></h6>\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"btn btn-secondary btn-block\" role=\"button\" (click)=\"seeNeeds()\">\n            See Needs\n        </button>\n        <button class=\"btn btn-secondary btn-block\" role=\"button\" (click)=\"seeProposals()\">\n            My proposals\n        </button>\n    </div>\n</div>\n\n\n<div class=\"card mb-3\" *ngIf=\"showNeeds && !showProposals\">\n    <div class=\"card-header\">Needs</div>\n    <div class=\"card-body text-primary\">\n        <ng-template #sinDatos>\n            <div class=\"alert alert-info\">\n                There are no records in the database\n            </div>\n        </ng-template>\n\n        <table class=\"table\" *ngIf=\"needs?.length > 0; else sinDatos\">\n            <thead>\n                <tr>\n                    <th>Conmpany</th>\n                    <th>Need</th>\n                    <th>Proposal</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let need of needs | paginate:page_size:page_number\">\n                    <td>\n                        Torre Labs\n                    </td>\n                    <td>\n                        {{ need.description}}\n                    </td>\n\n                    <td>\n                        <!-- [routerLink]=\"['/person/personform', person.idPerson]\" -->\n                        <button type=\"button\" name=\"newProposal\" class=\"btn btn-primary btn-sm\" (click)=\"openNewModal(content, need)\"> <i class=\"far fa-hand-point-up\"></i> </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <mat-paginator [length]=\"needs.length\" [pageSize]=\"page_size\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"handlePage($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </div>\n\n    <div class=\"text-center\">\n        <div class=\"spinner-grow text-primary\" style=\"width: 3rem; height: 3rem;\" role=\"status\" *ngIf=\"loading\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"card mb-3\" *ngIf=\"!showNeeds && showProposals\">\n    <div class=\"card-header\">My Proposals</div>\n    <div class=\"card-body text-primary\">\n        <ng-template #sinDatos>\n            <div class=\"alert alert-info\">\n                There are no records in the database\n            </div>\n        </ng-template>\n\n        <table class=\"table\" *ngIf=\"proposals?.length > 0; else sinDatos\">\n            <thead>\n                <tr>\n                    <th>Company</th>\n                    <th>Proposal</th>\n                    <th>Create At</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let p of proposals | paginate:page_size:page_number\">\n                    <td>\n                        Torre Labs\n                    </td>\n                    <td>\n                        {{ p.description}}\n                    </td>\n                    <td>\n                        {{ p.createDate | date }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <mat-paginator [length]=\"proposals.length\" [pageSize]=\"page_size\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"handlePage($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </div>\n\n    <div class=\"text-center\">\n        <div class=\"spinner-grow text-primary\" style=\"width: 3rem; height: 3rem;\" role=\"status\" *ngIf=\"loading\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{titulo}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss(closeModal())\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #formulario=\"ngForm\">\n            <div class=\"form-group row\">\n                <label for=\"DescriptionTxt\" class=\"col-form-label col-sm-5\">Description:</label>\n                <div class=\"col-sm-6\">\n                    <textarea class=\"form-control\" id=\"DescriptionTxt\" rows=\"3\" [(ngModel)]=\"proposal.Description\" name=\"Description\" required></textarea>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary btn-block\" role=\"button\" (click)=\"modal.close(create())\" *ngIf=\"!proposal.Id; else elseBlock\" [disabled]=\"!formulario.form.valid\">Crear</button>\n        <ng-template #elseBlock>\n            <button class=\"btn btn-primary btn-block\" role=\"button\" (click)=\"modal.close(update())\" [disabled]=\"!formulario.form.valid\">Editar</button>\n        </ng-template>\n    </div>\n</ng-template>";
      /***/
    },

    /***/
    "PpgC":
    /*!**********************************************!*\
      !*** ./src/app/services/proposal.service.ts ***!
      \**********************************************/

    /*! exports provided: ProposalService */

    /***/
    function PpgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProposalService", function () {
        return ProposalService;
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/globals */
      "guJ4");

      var ProposalService = /*#__PURE__*/function () {
        function ProposalService(http, _router) {
          _classCallCheck(this, ProposalService);

          this.http = http;
          this._router = _router;
          this.urlEndPoint = _common_globals__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BASE_API_URL + '/api/Proposal';
        }

        _createClass(ProposalService, [{
          key: "getProposals",
          value: function getProposals() {
            return this.http.get(this.urlEndPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "getProposalById",
          value: function getProposalById(id) {
            return this.http.get("".concat(this.urlEndPoint, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "create",
          value: function create(info) {
            return this.http.post(this.urlEndPoint, info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "update",
          value: function update(info) {
            return this.http.put("".concat(this.urlEndPoint, "/").concat(info.Id), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.urlEndPoint, "/").concat(id));
          }
        }]);

        return ProposalService;
      }();

      ProposalService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ProposalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProposalService);
      /***/
    },

    /***/
    "RUEf":
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /*! exports provided: APP_ROUTING */

    /***/
    function RUEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function () {
        return APP_ROUTING;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_persons_persons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/persons/persons.component */
      "FJUx");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/organization/organization.component */
      "qCZc"); //Components AppDocumentsAdministrator


      var APP_ROUTES = [// { path: 'recoverPass', component: PasswordRecoverComponent },
      // { path: 'login', component: LoginComponent },
      // { path: 'paymentsMethods', component: PaymentMethodsComponent , canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},
      // { path: 'processStates', component: ProcessStatesComponent },
      // { path: 'productionProcess', component: ProductionProcessComponent },
      // { path: 'files/:id', component: FilesComponent },
      // { path: 'orders', component: OrdersComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO','ROLE_PRODUCCION']}},
      // { path: 'orders/orderform', component: OrderformComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
      // { path: 'orders/orderform/:id', component: OrderformComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
      // { path: 'orders/manage/:id', component: OrdermanageComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
      // { path: 'services', component: ServicesComponent,  canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO']}},
      // { path: 'products', component: ProductsComponent,  canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO']}},
      // { path: 'usersManagement', component: UsersmanagementComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']} },
      // { path: 'documentType', component: DocumentTypesComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},
      // { path: 'movementType', component: MovementTypesComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},
      // { path: 'cashMovements', component: CashMovementsComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
      // { path: 'profile', component: PasswordChangeComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_PRODUCCION','ROLE_APOYO']}},
      // { path: 'invoice', component: InvoiceComponent},
      // { path: 'invoice/form/:id', component: InvoiceformComponent},
      // { path: 'serviceorder', component: ServiceOrderComponent},
      // { path: 'serviceorder/form/:id', component: ServiceOrderFormComponent},
      {
        path: 'persons',
        component: _components_persons_persons_component__WEBPACK_IMPORTED_MODULE_1__["PersonsComponent"]
      }, // { path: 'person/personform', component: PersonformComponent},
      // { path: 'person/personform/:id', component: PersonformComponent},
      {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'organization',
        component: _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationComponent"]
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }]; // {useHash: true} es para utilizar el hashtag (#) --> es mas eficiente.

      var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, {
        useHash: true
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'AppTorreProject';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TmGi":
    /*!********************************************!*\
      !*** ./src/app/services/person.service.ts ***!
      \********************************************/

    /*! exports provided: PersonService */

    /***/
    function TmGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonService", function () {
        return PersonService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/globals */
      "guJ4");

      var PersonService = /*#__PURE__*/function () {
        function PersonService(http, _router) {
          _classCallCheck(this, PersonService);

          this.http = http;
          this._router = _router;
          this.urlcors = 'https://cors-anywhere.herokuapp.com';
          this.urlEndPointOfTorre = 'https://torre.bio/api/bios';
          this.urlEndPoint = _common_globals__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BASE_API_URL + '/api/persons';
        }

        _createClass(PersonService, [{
          key: "getPersonOfTorre",
          value: function getPersonOfTorre(publicId) {
            return this.http.get("".concat(this.urlcors, "/").concat(this.urlEndPointOfTorre, "/").concat(publicId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }, {
          key: "getPersons",
          value: function getPersons() {
            return this.http.get(this.urlEndPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }, {
          key: "getPersonById",
          value: function getPersonById(id) {
            return this.http.get("".concat(this.urlEndPoint, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }]);

        return PersonService;
      }();

      PersonService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      PersonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PersonService);
      /***/
    },

    /***/
    "VRjR":
    /*!***************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function VRjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "VX3T":
    /*!*************************************!*\
      !*** ./src/app/classes/Proposal.ts ***!
      \*************************************/

    /*! exports provided: Proposal */

    /***/
    function VX3T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Proposal", function () {
        return Proposal;
      });
      /* harmony import */


      var _Necessity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Necessity */
      "BdNj");
      /* harmony import */


      var _Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Person */
      "CYpv");

      var Proposal = function Proposal() {
        _classCallCheck(this, Proposal);

        this.person = new _Person__WEBPACK_IMPORTED_MODULE_1__["Person"]();
        this.Necessity = new _Necessity__WEBPACK_IMPORTED_MODULE_0__["Necessity"]();
      };
      /***/

    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<div class=\"container main-container\">\r\n    <router-outlet></router-outlet>\r\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-paginate */
      "vQ/P");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "oW1M");
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/locales/es */
      "2Yyj");
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! pdfmake-wrapper */
      "oNuZ");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./app.routes */
      "RUEf");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/shared/navbar/navbar.component */
      "3F0J");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_persons_persons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/persons/persons.component */
      "FJUx");
      /* harmony import */


      var _services_person_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./services/person.service */
      "TmGi");
      /* harmony import */


      var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pipes/paginate.pipe */
      "6yyQ");
      /* harmony import */


      var _paginator_es__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./paginator-es */
      "Fa25");
      /* harmony import */


      var _services_necessity_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/necessity.service */
      "Jczs");
      /* harmony import */


      var _services_organization_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./services/organization.service */
      "q+QX");
      /* harmony import */


      var _services_proposal_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./services/proposal.service */
      "PpgC");
      /* harmony import */


      var _services_area_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./services/area.service */
      "1W3u");
      /* harmony import */


      var _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/organization/organization.component */
      "qCZc"); // fonts provided for pdfmake
      // Set the fonts to use


      pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_10__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default.a); // Rutas
      //Components
      //Services
      //Pipes
      //Directives

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a, "es_co");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_26__["PaginatePipe"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_persons_persons_component__WEBPACK_IMPORTED_MODULE_24__["PersonsComponent"], _components_organization_organization_component__WEBPACK_IMPORTED_MODULE_32__["OrganizationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_paginate__WEBPACK_IMPORTED_MODULE_3__["NgxPaginateModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _app_routes__WEBPACK_IMPORTED_MODULE_20__["APP_ROUTING"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
          useValue: "es_co"
        }, {
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorIntl"],
          useClass: _paginator_es__WEBPACK_IMPORTED_MODULE_27__["CustomMatPaginatorIntl"]
        }, _services_person_service__WEBPACK_IMPORTED_MODULE_25__["PersonService"], _services_necessity_service__WEBPACK_IMPORTED_MODULE_28__["NecessityService"], _services_organization_service__WEBPACK_IMPORTED_MODULE_29__["OrganizationService"], _services_proposal_service__WEBPACK_IMPORTED_MODULE_30__["ProposalService"], _services_area_service__WEBPACK_IMPORTED_MODULE_31__["AreaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbActiveModal"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "guJ4":
    /*!***********************************!*\
      !*** ./src/app/common/globals.ts ***!
      \***********************************/

    /*! exports provided: GlobalVariable */

    /***/
    function guJ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariable", function () {
        return GlobalVariable;
      });

      var GlobalVariable = Object.freeze({
        //Production
        BASE_API_URL: 'https://torreproject.azurewebsites.net'
      });
      /***/
    },

    /***/
    "pbNA":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pbNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- *ngIf=\"_loginService.isAuthenticated()\" -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\">\n        <img src=\"/assets/img/Logo.jpg\" width=\"100px\" height=\"100px\" alt=\"\" />\n\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Inicio\n                <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link dropdown-item bg-dark\" [routerLink]=\"['/persons']\"><i class=\"fas fa-users\"></i> Persons</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link dropdown-item bg-dark\" [routerLink]=\"['/organization']\"><i class=\"far fa-building\"></i> Companies</a>\n            </li>\n        </ul>\n\n    </div>\n</nav>";
      /***/
    },

    /***/
    "q+QX":
    /*!**************************************************!*\
      !*** ./src/app/services/organization.service.ts ***!
      \**************************************************/

    /*! exports provided: OrganizationService */

    /***/
    function qQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
        return OrganizationService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _common_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/globals */
      "guJ4");

      var OrganizationService = /*#__PURE__*/function () {
        function OrganizationService(http, _router) {
          _classCallCheck(this, OrganizationService);

          this.http = http;
          this._router = _router;
          this.urlcors = 'https://cors-anywhere.herokuapp.com';
          this.urlEndPointOfTorre = 'https://torre.co/api/opportunities';
          this.urlEndPoint = _common_globals__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BASE_API_URL + '/api/Organization';
        }

        _createClass(OrganizationService, [{
          key: "getOrgOfTorre",
          value: function getOrgOfTorre(opp) {
            return this.http.get("".concat(this.urlEndPointOfTorre, "/").concat(opp)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }, {
          key: "getOrganization",
          value: function getOrganization() {
            return this.http.get(this.urlEndPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }, {
          key: "getOrganizationById",
          value: function getOrganizationById(id) {
            return this.http.get("".concat(this.urlEndPoint, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(e.error.mensaje, e.error.error, 'error');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }));
          }
        }]);

        return OrganizationService;
      }();

      OrganizationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      OrganizationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrganizationService);
      /***/
    },

    /***/
    "qCZc":
    /*!*******************************************************************!*\
      !*** ./src/app/components/organization/organization.component.ts ***!
      \*******************************************************************/

    /*! exports provided: OrganizationComponent */

    /***/
    function qCZc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function () {
        return OrganizationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./organization.component.html */
      "E/iw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/organization.service */
      "q+QX");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _classes_Necessity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../classes/Necessity */
      "BdNj");
      /* harmony import */


      var _services_necessity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/necessity.service */
      "Jczs");
      /* harmony import */


      var src_app_classes_Area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/classes/Area */
      "EsNt");
      /* harmony import */


      var src_app_classes_Organization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/classes/Organization */
      "tBvB");

      var OrganizationComponent = /*#__PURE__*/function () {
        function OrganizationComponent(_orgService, _needService, modalService, config) {
          _classCallCheck(this, OrganizationComponent);

          this._orgService = _orgService;
          this._needService = _needService;
          this.modalService = modalService;
          this.opp = "ZW2aEzr7";
          this.area = new src_app_classes_Area__WEBPACK_IMPORTED_MODULE_8__["Area"]();
          this.organization = new src_app_classes_Organization__WEBPACK_IMPORTED_MODULE_9__["Organization"]();
        }

        _createClass(OrganizationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginOrganization();
          }
        }, {
          key: "loginOrganization",
          value: function loginOrganization() {
            var _this6 = this;

            this._orgService.getOrgOfTorre(this.opp).subscribe(function (result) {
              if (result) {
                _this6.infoOrg = result;
              }

              if (!_this6.infoOrg) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Error", "Failed to retrieve information", "error");
              } else {
                _this6.loadNeeds();
              }
            });
          }
        }, {
          key: "openNewModal",
          value: function openNewModal(content) {
            this.modalService.open(content);
            this.need = new _classes_Necessity__WEBPACK_IMPORTED_MODULE_6__["Necessity"]();
            this.titulo = "New Need";
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalService.dismissAll();
            this.loadNeeds();
          }
        }, {
          key: "create",
          value: function create() {
            var _this7 = this;

            this.area.Id = 1;
            this.area.Description = "Health";
            this.organization.Id = 1;
            this.organization.Name = "Torre Labs";
            this.need.Area = this.area;
            this.need.Organization = this.organization;
            this.need.CreateDate = new Date();

            this._needService.create(this.need).subscribe(function (need) {
              _this7.modalService.dismissAll();

              _this7.needs.push(need);

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('New Need', "The record was saved successfully!", 'success');

              _this7.loadNeeds();
            });
          }
        }, {
          key: "loadNeeds",
          value: function loadNeeds() {
            var _this8 = this;

            this._needService.getNeeds().subscribe(function (result) {
              _this8.needs = result;

              if (!_this8.needs) {
                alert('Failed to retrieve information');
              }
            });
          }
        }]);

        return OrganizationComponent;
      }();

      OrganizationComponent.ctorParameters = function () {
        return [{
          type: _services_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
        }, {
          type: _services_necessity_service__WEBPACK_IMPORTED_MODULE_7__["NecessityService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }];
      };

      OrganizationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-organization",
        template: _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], OrganizationComponent);
      /***/
    },

    /***/
    "tBvB":
    /*!*****************************************!*\
      !*** ./src/app/classes/Organization.ts ***!
      \*****************************************/

    /*! exports provided: Organization */

    /***/
    function tBvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Organization", function () {
        return Organization;
      });

      var Organization = function Organization() {
        _classCallCheck(this, Organization);
      };
      /***/

    },

    /***/
    "tXZI":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function tXZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid animated fadeIn\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Torre Project</h1>\n        <p class=\"lead\">A New Way To Apply A Job</p>\n    </div>\n</div>\n<p></p>\n<div class=\"card-deck\">\n    <div class=\"card\">\n        <img src=\"../../../assets/img/Company.jpg\" class=\"card-img-top\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Company</h5>\n            <p class=\"card-text\">My company has some needs to solve.</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n    </div>\n    <div class=\"card\">\n        <img src=\"../../../assets/img/Person.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Person</h5>\n            <p class=\"card-text\">I can solve your needs!</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- <div class=\"jumbotron text-center\">\n    <div class=\"view overlay my-5\">\n        <img src=\"/assets/img/Buttons/Banner2.jpeg\" class=\"img-fluid\" alt=\"\" />\n        <a href=\"#\">\n            <div class=\"mask rgba-white-slight\"></div>\n        </a>\n    </div>\n    <div class=\"container\">\n        <div class=\"row my-3\">\n            <div class=\"col\">\n                <a [routerLink]=\"['/orders']\">\n                    <img src=\"/assets/img/Buttons/BtnPedidos.png \" width=\"200px\" /></a>\n            </div>\n            <div class=\"col\">\n                <a [routerLink]=\"['/productionProcess']\">\n                    <img src=\"/assets/img/Buttons/BtnProcesos.png \" width=\"200px \" /></a>\n            </div>\n            <div class=\"col\">\n                <a [routerLink]=\"['/cashMovements']\">\n                    <img src=\"/assets/img/Buttons/BtnCaja.png \" width=\"200px \" /></a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <a [routerLink]=\"['/persons']\"><img src=\"/assets/img/Buttons/BtnPersonas.png \" width=\"200px \" /></a>\n            </div>\n            <div class=\"col\">\n                <a [routerLink]=\"['/products']\"><img src=\"/assets/img/Buttons/BtnProductos.png \" width=\"200px \" /></a>\n            </div>\n            <div class=\"col\">\n                <a [routerLink]=\"['/services']\"><img src=\"/assets/img/Buttons/BtnServicios.png \" width=\"200px \" /></a>\n            </div>\n        </div>\n    </div>\n</div> -->";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map