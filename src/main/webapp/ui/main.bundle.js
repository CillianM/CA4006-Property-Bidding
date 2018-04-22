webpackJsonp(["main"], {

    /***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
    /***/ (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncatched exception popping up in devtools
            return Promise.resolve().then(function () {
                throw new Error("Cannot find module '" + req + "'.");
            });
        }

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/ "../../../../../src/app/app-properties.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Globals;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };

        var Globals = (function () {
            function Globals() {
                this.endpoint = 'http://localhost:8080/CA4006/api';
                this.websocket = 'ws://localhost:8080/CA4006/bidSocket/';
                this.uiPath = '/CA4006/ui/';
            }

            Globals = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
            ], Globals);
            return Globals;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/app-routing.module.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__property_list_property_list_component__ = __webpack_require__("../../../../../src/app/property-list/property-list.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__property_view_property_view_component__ = __webpack_require__("../../../../../src/app/property-view/property-view.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };


        var appRoutes = [
            {path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]},
            {
                path: 'property',
                component: __WEBPACK_IMPORTED_MODULE_4__property_list_property_list_component__["a" /* PropertyListComponent */]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'property/:property',
                component: __WEBPACK_IMPORTED_MODULE_5__property_view_property_view_component__["a" /* PropertyViewComponent */]
            },
            {
                path: '',
                redirectTo: '/property',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
            }
        ];
        var AppRoutingModule = (function () {
            function AppRoutingModule() {
            }

            AppRoutingModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {enableTracing: false} // <-- debugging purposes only
                        )
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
                    ]
                })
            ], AppRoutingModule);
            return AppRoutingModule;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/app.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\nbody {\r\n    font-family: \"Roboto\", sans-serif;\r\n    margin: 0;\r\n}\r\n\r\nul.topnav {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #2f3136;\r\n}\r\n\r\nul.topnav li {float: left;}\r\n\r\nul.topnav li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nul.topnav li a.active {background-color: #3b3d44;}\r\n\r\nul.topnav li a.inactive {border-left: 1px solid #494a4d; border-right: 1px solid #3b3d44;}\r\n\r\nul.topnav li.right {\r\n    float: right;\r\n    background-color: #3b3d44;\r\n}\r\n\r\nul.table-title {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n  }\r\n\r\nul.table-title li {float: left;}\r\n\r\nul.table-title li.right {float: right;}\r\n\r\nul.table-title li button a {\r\n    display: block;\r\n    color: white;\r\n    text-decoration: none;\r\n  }\r\n\r\n.create-button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #2f3136;\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 15px;\r\n    color: #FFFFFF;\r\n    font-size: 14px;\r\n    -webkit-transition: all 0.3 ease;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n  }\r\n\r\n.create-button:hover,.create-button:active,.create-button:focus {\r\n    background: #3b3d44;\r\n  }\r\n\r\n@media screen and (max-width: 600px){\r\n      ul.topnav li.right,\r\n      ul.topnav li {float: none;}\r\n  }\r\n\r\n.table100.ver1 th {\r\n    font-family: Lato-Bold;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    line-height: 1.4;\r\n\r\n    background-color: #2f3136;\r\n  }\r\n\r\n.table100.ver1 td {\r\n    font-family: Lato-Regular;\r\n    font-size: 15px;\r\n    color: #808080;\r\n    line-height: 1.4;\r\n  }\r\n\r\n.table100.ver1 .table100-body tr:nth-child(even) {\r\n    background-color: #f8f6ff;\r\n  }\r\n\r\n/*---------------------------------------------*/\r\n\r\n.table100.ver1 {\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n\r\n.table100.ver1 .ps__rail-y {\r\n    right: 5px;\r\n  }\r\n\r\n.table100.ver1 .ps__rail-y::before {\r\n    background-color: #ebebeb;\r\n  }\r\n\r\n.table100.ver1 .ps__rail-y .ps__thumb-y::before {\r\n    background-color: #cccccc;\r\n  }\r\n\r\n.m-b-110 {margin-bottom: 110px;}\r\n\r\n.table100-head {\r\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n.modal {\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n.modal-dialog {\r\n    border-radius: 10px;\r\n    background: white;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n    -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n\r\n.modal-content {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/app.component.html":
    /***/ (function (module, exports) {

        module.exports = "<router-outlet></router-outlet>\r\n\r\n"

        /***/
    }),

    /***/ "../../../../../src/app/app.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return AppComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };

        var AppComponent = (function () {
            function AppComponent() {
            }

            AppComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-root',
                    template: __webpack_require__("../../../../../src/app/app.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/app.component.css")]
                })
            ], AppComponent);
            return AppComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/app.module.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return AppModule;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/services/user-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12__services_property_service__ = __webpack_require__("../../../../../src/app/services/property-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14__property_list_property_list_component__ = __webpack_require__("../../../../../src/app/property-list/property-list.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15__property_view_property_view_component__ = __webpack_require__("../../../../../src/app/property-view/property-view.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_17__services_booking_service__ = __webpack_require__("../../../../../src/app/services/booking-service.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };


        var AppModule = (function () {
            function AppModule() {
            }

            AppModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                        __WEBPACK_IMPORTED_MODULE_9__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                        __WEBPACK_IMPORTED_MODULE_14__property_list_property_list_component__["a" /* PropertyListComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__property_view_property_view_component__["a" /* PropertyViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                        __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
                        __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageModule"].withConfig({
                            prefix: 'ca4006',
                            storageType: 'localStorage'
                        })
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"],
                        __WEBPACK_IMPORTED_MODULE_12__services_property_service__["a" /* PropertyService */],
                        __WEBPACK_IMPORTED_MODULE_13__services_bid_service__["a" /* BidService */],
                        __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
                        __WEBPACK_IMPORTED_MODULE_17__services_booking_service__["a" /* BookingService */],
                        __WEBPACK_IMPORTED_MODULE_10__app_properties__["a" /* Globals */]
                    ],
                    bootstrap: [
                        __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
                    ]
                })
            ], AppModule);
            return AppModule;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/login/login.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.background {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/background.png")) + ");\r\n  background-size: cover;\r\n  display: block;\r\n  filter: blur(5px);\r\n  -webkit-filter: blur(5px);\r\n  height: 100%;\r\n  left: 0;\r\n  position: fixed;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.modal {\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.modal-dialog {\r\n  border-radius: 10px;\r\n  background: white;\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.modal-content {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.button-container {\r\n\ttext-align: center;\r\n}\r\n\r\n.name-input{\r\n  width: 100%;\r\n  height: 40px;\r\n  border:none;\r\n  border-bottom:1px solid #ccc;\r\n  text-align: center;\r\n}\r\n\r\n.create-button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #3666B8;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  -webkit-transition: all 0.3 ease;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}\r\n\r\n.create-button:hover,.create-button:active,.create-button:focus {\r\n  background: #F19030;\r\n}\r\n", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/login/login.component.html":
    /***/ (function (module, exports) {

        module.exports = "<div class=\"background\"></div>\r\n<div class=\"login-page\">\r\n\r\n  <div class=\"form\">\r\n    <img src=\"assets/logo.png\" style=\"width:60%; height:60%\">\r\n    <br><br>\r\n    <form class=\"login-form\">\r\n      <input #loginusername class=\"form-control\" type=\"text\" placeholder=\"username\"/><br>\r\n      <input #loginpassword class=\"form-control\" type=\"password\" placeholder=\"password\"/><br>\r\n      <button class=\"btn btn-primary btn-block\" (click)=\"loginUser(loginusername.value,loginpassword.value)\">Login\r\n      </button>\r\n      <button class=\"btn btn-secondary btn-block\" (click)=\"show()\">Create User</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\r\n      [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n            <h2>Create User</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                <input #username type=\"text\"class=\"name-input\" placeholder=\"Name\" >\r\n                <input #password type=\"password\"class=\"name-input\" placeholder=\"Password\" >\r\n              </div>\r\n            </form>\r\n            <div class=\"button-container\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-block\"\r\n                      (click)=\"createUser(username.value,password.value)\">\r\n                <span>Submit</span>\r\n              </button>\r\n            </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

        /***/
    }),

    /***/ "../../../../../src/app/login/login.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return LoginComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var LoginComponent = (function () {
            function LoginComponent(localStorageService, userService, cookieService, globals) {
                this.localStorageService = localStorageService;
                this.userService = userService;
                this.cookieService = cookieService;
                this.globals = globals;
                this.visible = false;
                this.visibleAnimate = false;
                this.visibleId = false;
                this.visibleAnimateId = false;
                this.visibleCreate = false;
                this.visibleAnimateCreate = false;
                this.selectedType = 0;
                this.selectedParty = 0;
                this.updated = false;
            }

            LoginComponent.prototype.updateSelectedType = function (i) {
                this.selectedType = i;
            };
            LoginComponent.prototype.updateParty = function (i) {
                this.selectedParty = i;
            };
            LoginComponent.prototype.updateSelectedTypes = function (i) {
                this.selectedTypes[i] = !this.selectedTypes[i];
            };
            LoginComponent.prototype.setClicked = function () {
                this.selectedTypes = new Array();
                for (var i = this.viewableRequestTypes.length - 1; i >= 0; i--) {
                    this.selectedTypes.push(false);
                }
            };
            LoginComponent.prototype.showCreate = function (mid) {
                var _this = this;
                this.mid = mid;
                this.visibleCreate = true;
                setTimeout(function () {
                    return _this.visibleAnimateCreate = true;
                }, 100);
                this.visibleAnimateId = false;
                setTimeout(function () {
                    return _this.visibleId = false;
                }, 300);
            };
            LoginComponent.prototype.hideCreate = function () {
                var _this = this;
                this.visibleAnimateCreate = false;
                setTimeout(function () {
                    return _this.visibleCreate = false;
                }, 300);
            };
            LoginComponent.prototype.show = function () {
                var _this = this;
                this.hideCreate();
                this.visible = true;
                setTimeout(function () {
                    return _this.visibleAnimate = true;
                }, 100);
                this.visibleId = true;
                setTimeout(function () {
                    return _this.visibleAnimateId = true;
                }, 100);
            };
            LoginComponent.prototype.hide = function () {
                var _this = this;
                this.visibleAnimate = false;
                setTimeout(function () {
                    return _this.visible = false;
                }, 300);
            };
            LoginComponent.prototype.onContainerClicked = function (event) {
                if (event.target.classList.contains('modal')) {
                    this.hide();
                }
            };
            LoginComponent.prototype.createUser = function (username, password) {
                var _this = this;
                this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */];
                this.user.name = username;
                this.user.password = password;
                this.userService.createUser(this.user)
                    .subscribe(function (returnedUser) {
                        _this.user = returnedUser,
                            console.log(returnedUser);
                        _this.hide();
                        _this.loginUser(username, password);
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            LoginComponent.prototype.loginUser = function (username, password) {
                var _this = this;
                this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */];
                this.user.name = username;
                this.user.password = password;
                this.userService.loginUser(username, password)
                    .subscribe(function (returnedToken) {
                        _this.token = returnedToken,
                            console.log(returnedToken);
                        _this.localStorageService.set("token", returnedToken);
                        _this.localStorageService.set("user", username);
                        window.location.href = _this.globals.uiPath + "property";
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            LoginComponent.prototype.ngOnInit = function () {
            };
            LoginComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-login',
                    template: __webpack_require__("../../../../../src/app/login/login.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"],
                    __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
                    __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"],
                    __WEBPACK_IMPORTED_MODULE_5__app_properties__["a" /* Globals */]])
            ], LoginComponent);
            return LoginComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/models/bid.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Bid;
        });
        var Bid = (function () {
            function Bid() {
            }

            return Bid;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/models/booking.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Booking;
        });
        var Booking = (function () {
            function Booking() {
            }

            return Booking;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/models/property.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Property;
        });
        var Property = (function () {
            function Property() {
            }

            return Property;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/models/user.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return User;
        });
        var User = (function () {
            function User() {
            }

            return User;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
    /***/ (function (module, exports) {

        module.exports = "<p>\r\n  pagenotfound works!\r\n</p>\r\n"

        /***/
    }),

    /***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return PagenotfoundComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var PagenotfoundComponent = (function () {
            function PagenotfoundComponent() {
            }

            PagenotfoundComponent.prototype.ngOnInit = function () {
            };
            PagenotfoundComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-pagenotfound',
                    template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                }),
                __metadata("design:paramtypes", [])
            ], PagenotfoundComponent);
            return PagenotfoundComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/profile/profile.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/profile/profile.component.html":
    /***/ (function (module, exports) {

        module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bidding Platform</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/property\" routerLinkActive=\"active\">Property Listing</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=\"userName != null\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" [hidden]=\"userName == null\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n           aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{userName}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logoutUser()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<br>\r\n<div style=\"padding:0 16px;\">\r\n  <ul class=\"table-title\">\r\n    <li><h2>Profile Page</h2></li>\r\n  </ul>\r\n</div>\r\n<br><br>\r\n\r\n<div style=\"padding:0 16px;\">\r\n\r\n  <ul class=\"table-title\">\r\n    <li><h2>Current Bids</h2></li>\r\n  </ul>\r\n  <table class=\"table\">\r\n    <thead class=\"thead\">\r\n    <tr>\r\n      <th class=\"col\">Property Id</th>\r\n      <th class=\"col\">Value</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let bid of bidList\">\r\n      <th scope=\"row\" class=\"column\"><a routerLink=\"/property/{{bid.propertyId}}\" routerLinkActive=\"active\">{{bid.propertyId}}</a>\r\n      </th>\r\n      <td class=\"column\">{{bid.value}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n<br>\r\n<div style=\"padding:0 16px;\">\r\n\r\n  <ul class=\"table-title\">\r\n    <li><h2>Current Bookings</h2></li>\r\n  </ul>\r\n  <table class=\"table\">\r\n    <thead class=\"thead\">\r\n    <tr>\r\n      <th class=\"col\">Name</th>\r\n      <th class=\"col\">Booking Time</th>\r\n      <th class=\"col\">Property Id</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let booking of bookingList; let i = index\">\r\n      <td class=\"column\">{{booking.userId}}</td>\r\n      <td class=\"column\">{{booking.bookingTime | date:\"dd/MM/yyyy 'at' h:mm:ssa\"}}</td>\r\n      <th scope=\"row\" class=\"column\"><a routerLink=\"/property/{{booking.propertyId}}\" routerLinkActive=\"active\">{{booking.propertyId}}</a></th>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>"

        /***/
    }),

    /***/ "../../../../../src/app/profile/profile.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return ProfileComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__services_property_service__ = __webpack_require__("../../../../../src/app/services/property-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__services_booking_service__ = __webpack_require__("../../../../../src/app/services/booking-service.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var ProfileComponent = (function () {
            function ProfileComponent(route, router, localStorageService, userService, propertyService, bidService, bookingService, globals) {
                this.route = route;
                this.router = router;
                this.localStorageService = localStorageService;
                this.userService = userService;
                this.propertyService = propertyService;
                this.bidService = bidService;
                this.bookingService = bookingService;
                this.globals = globals;
            }

            ProfileComponent.prototype.logoutUser = function () {
                var _this = this;
                this.userService.logoutUser(this.userName, this.userToken)
                    .subscribe(function (returnedToken) {
                        console.log(returnedToken);
                        _this.localStorageService.clearAll();
                        window.location.href = _this.globals.uiPath + "property";
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            ProfileComponent.prototype.getBookings = function () {
                var _this = this;
                this.bookingService.getUserBookings(this.userName, this.userToken)
                    .subscribe(function (returnedBookings) {
                        console.log(returnedBookings);
                        _this.bookingList = returnedBookings;
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            ProfileComponent.prototype.getBids = function () {
                var _this = this;
                this.bidService.getUserBids(this.userName, this.userToken)
                    .subscribe(function (returnedBids) {
                        console.log(returnedBids);
                        _this.bidList = returnedBids;
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            ProfileComponent.prototype.ngOnInit = function () {
                this.propertyId = this.route.snapshot.paramMap.get('property');
                this.userToken = this.localStorageService.get("token");
                this.userName = this.localStorageService.get("user");
                if (this.userToken == null)
                    window.location.href = this.globals.uiPath + "property";
                console.log(this.propertyId);
                this.getBids();
                this.getBookings();
                /*TODO
                Add header to property view and list pages (includes logout button) [Bidding Platform---------------------------------------------Logout]
                Add method to get this properties data
                Add method to get this properties bids
                  This can be messed around with filter-wise (my bids then a list of the rest of the bids including mine)
                Add create bid method
                Add websocket to get current bids from other users and add to page
                Add countdown on bids somewhere on the page
                */
            };
            ProfileComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-profile',
                    template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
                    __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"],
                    __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
                    __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */],
                    __WEBPACK_IMPORTED_MODULE_6__services_bid_service__["a" /* BidService */],
                    __WEBPACK_IMPORTED_MODULE_7__services_booking_service__["a" /* BookingService */],
                    __WEBPACK_IMPORTED_MODULE_5__app_properties__["a" /* Globals */]])
            ], ProfileComponent);
            return ProfileComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/property-list/property-list.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, ".button-container {\r\n  text-align: center;\r\n}\r\n\r\n.name-input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc\r\n}\r\n", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/property-list/property-list.component.html":
    /***/ (function (module, exports) {

        module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bidding Platform</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/property\" routerLinkActive=\"active\">Property Listing</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=\"userName != null\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" [hidden]=\"userName == null\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n           aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{userName}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logoutUser()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div style=\"padding:0 16px;\">\r\n  <ul class=\"table-title\">\r\n    <li><h2>Available Properties</h2></li>\r\n    <li class=\"right\" [hidden]=\"userName == null\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"show()\">Create Property</button>\r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let property of propertyList\">\r\n        <img [hidden]=\"property.propertyType == 'APARTMENT'\" class=\"card-img-top\" src=\"assets/house.jpeg\" alt=\"Card image cap\">\r\n        <img [hidden]=\"property.propertyType == 'HOUSE'\" class=\"card-img-top\" src=\"assets/apartment.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{property.name}}</h5>\r\n          <p class=\"card-text\">Type: {{property.propertyType}}<br>Area Code: {{property.areaCode}}<br>Price:\r\n            €{{property.price}}<br>Bedrooms:\r\n            {{property.bedroomCount}}</p>\r\n          <a [hidden]=\"userName == null\" href=\"#\" routerLink=\"{{property.id}}\" routerLinkActive=\"active\"\r\n             class=\"btn btn-primary\">View Property</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div>\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2>Create Property</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"propertyForm\" novalidate (ngSubmit)=\"save(propertyForm.value, propertyForm.valid)\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n            <small [hidden]=\"propertyForm.controls.name.valid || (propertyForm.controls.name.pristine && !submitted)\"\r\n                   class=\"text-danger\">\r\n              Name is required (minimum 5 characters).\r\n            </small>\r\n            <!--<pre class=\"margin-20\">{{ propertyForm.controls.name.errors | json }}</pre>-->\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Property Type</label>\r\n            <select class=\"form-control\" formControlName=\"propertyType\">\r\n              <option selected value=\"HOUSE\">House</option>\r\n              <option value=\"APARTMENT\">Apartment</option>\r\n            </select>\r\n            <small\r\n              [hidden]=\"propertyForm.controls.propertyType.valid || (propertyForm.controls.propertyType.pristine && !submitted)\"\r\n              class=\"text-danger\">\r\n              Property Type is required.\r\n            </small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Area Code</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"areaCode\">\r\n            <small\r\n              [hidden]=\"propertyForm.controls.areaCode.valid || (propertyForm.controls.areaCode.pristine && !submitted)\"\r\n              class=\"text-danger\">\r\n              Area Code Type is required (minimum 2 characters).\r\n            </small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Bedroom Count</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"bedroomCount\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Asking Price</label>\r\n            <input type=\"number\" min=\"0.01\" step=\"0.01\" class=\"form-control\" formControlName=\"price\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Bidding Expiry</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" formControlName=\"biddingExpiry\" value=\"2018-04-22\">\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n              <span>Submit</span>\r\n            </button>\r\n            <small [hidden]=\"propertyForm.valid\" class=\"text-danger\">Fields Empty!</small>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

        /***/
    }),

    /***/ "../../../../../src/app/property-list/property-list.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return PropertyListComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__models_property__ = __webpack_require__("../../../../../src/app/models/property.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var PropertyListComponent = (function () {
            function PropertyListComponent(formBuilder, localStorageService, userService, propertyService, globals) {
                this.formBuilder = formBuilder;
                this.localStorageService = localStorageService;
                this.userService = userService;
                this.propertyService = propertyService;
                this.globals = globals;
                this.events = [];
                this.visible = false;
                this.visibleAnimate = false;
            }

            PropertyListComponent.prototype.show = function () {
                var _this = this;
                if (this.userToken == null && this.userName == null) {
                    window.location.href = this.globals.uiPath + "login";
                }
                this.visible = true;
                setTimeout(function () {
                    return _this.visibleAnimate = true;
                }, 100);
            };
            PropertyListComponent.prototype.hide = function () {
                var _this = this;
                this.visibleAnimate = false;
                setTimeout(function () {
                    return _this.visible = false;
                }, 300);
            };
            PropertyListComponent.prototype.onContainerClicked = function (event) {
                if (event.target.classList.contains('modal')) {
                    this.hide();
                }
            };
            PropertyListComponent.prototype.getProperties = function () {
                var _this = this;
                this.propertyService.getProperties()
                    .subscribe(function (returnedPropertyList) {
                        _this.propertyList = returnedPropertyList,
                            console.log(returnedPropertyList);
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyListComponent.prototype.subscribeToFormChanges = function () {
                var _this = this;
                var myFormStatusChanges$ = this.propertyForm.statusChanges;
                var myFormValueChanges$ = this.propertyForm.valueChanges;
                myFormStatusChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'STATUS_CHANGED', object: x});
                });
                myFormValueChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'VALUE_CHANGED', object: x});
                });
            };
            PropertyListComponent.prototype.save = function (model, isValid) {
                var _this = this;
                console.log(model, isValid);
                if (isValid) {
                    var newProperty = new __WEBPACK_IMPORTED_MODULE_5__models_property__["a" /* Property */]();
                    newProperty.id = "";
                    newProperty.creator = this.userName;
                    newProperty.name = model.name;
                    newProperty.propertyType = model.propertyType;
                    newProperty.areaCode = model.areaCode;
                    newProperty.price = model.price;
                    newProperty.biddingExpiry = new Date(model.biddingExpiry);
                    newProperty.bedroomCount = model.bedroomCount;
                    this.propertyService.createProperty(newProperty, this.userName, this.userToken)
                        .subscribe(function (returnedProperty) {
                            _this.createdProperty = returnedProperty,
                                console.log(returnedProperty);
                            _this.propertyList.push(returnedProperty);
                            _this.hide();
                        });
                    (function (err) {
                        return console.log(err);
                    });
                }
            };
            PropertyListComponent.prototype.logoutUser = function () {
                var _this = this;
                this.userService.logoutUser(this.userName, this.userToken)
                    .subscribe(function (returnedToken) {
                        console.log(returnedToken);
                        _this.localStorageService.clearAll();
                        window.location.href = _this.globals.uiPath + "property";
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyListComponent.prototype.ngOnInit = function () {
                this.userToken = this.localStorageService.get("token");
                this.userName = this.localStorageService.get("user");
                console.log(this.userName + " " + this.userToken);
                var currentDate = new Date().toISOString().split('T')[0];
                var currentTime = new Date().getHours() + ":" + new Date().getMinutes();
                this.propertyForm = this.formBuilder.group({
                    name: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].minLength(5)]],
                    propertyType: ['HOUSE'],
                    areaCode: ['D13', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].minLength(2)]],
                    bedroomCount: [1, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
                    price: [100.00, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
                    biddingExpiry: [currentDate + "T" + currentTime, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
                });
                this.subscribeToFormChanges();
                this.getProperties();
            };
            PropertyListComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-property-list',
                    template: __webpack_require__("../../../../../src/app/property-list/property-list.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/property-list/property-list.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
                    __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"],
                    __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
                    __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */],
                    __WEBPACK_IMPORTED_MODULE_2__app_properties__["a" /* Globals */]])
            ], PropertyListComponent);
            return PropertyListComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/property-view/property-view.component.css":
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, ".button-container {\r\n  text-align: center;\r\n}\r\n\r\n.name-input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc\r\n}\r\n\r\n.timer {\r\n  font-family: Arial, sans-serif;\r\n  font-size: 20px;\r\n  color: #999;\r\n  letter-spacing: -1px;\r\n}\r\n", ""]);

// exports


        /*** EXPORTS FROM exports-loader ***/
        module.exports = module.exports.toString();

        /***/
    }),

    /***/ "../../../../../src/app/property-view/property-view.component.html":
    /***/ (function (module, exports) {

        module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bidding Platform</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/property\" routerLinkActive=\"active\">Property Listing</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=\"userName != null\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" [hidden]=\"userName == null\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n           aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{userName}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logoutUser()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<br><br>\r\n<div style=\"padding:0 16px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <img [hidden]=\"property.propertyType == 'APARTMENT'\" class=\"card-img-top img-fluid\" src=\"assets/house.jpeg\" alt=\"Card image cap\">\r\n      <img [hidden]=\"property.propertyType == 'HOUSE'\" class=\"card-img-top\" src=\"assets/apartment.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-lg-9\">\r\n      <div class=\"card-group\">\r\n        <div class=\"card mt-4\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"card-title\">{{property.name}}</h3>\r\n            <h4>€{{property.price}}</h4>\r\n            <p class=\"card-text\">Type: {{property.propertyType}}<br>Area Code: {{property.areaCode}}<br>Bedrooms:\r\n              {{property.bedroomCount}}</p>\r\n              <ul class=\"table-title\">\r\n                <li class=\"right\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"showBooking()\" [hidden]=\"!ready || seconds==-1\">\r\n                    Create\r\n                    Booking\r\n                  </button>\r\n                </li>\r\n              </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-4\">\r\n          <div class=\"card-body\" [hidden]=\"!ready\">\r\n            <h3 class=\"card-title\">Bidding Information</h3>\r\n            <div [hidden]=\"bidList?.length == 0\">\r\n              <p [hidden]=\"seconds==-1\" [style.color]=\"highestBid?.userId != userName ? 'red' : 'green'\">Current Highest\r\n                Bid: {{highestBid?.value}} ({{highestBid?.userId}})</p>\r\n              <p [hidden]=\"seconds!=-1 || bidList?.length == 0\"\r\n                 [style.color]=\"highestBid?.userId != userName ? 'red' : 'green'\">Highest Bidder:\r\n                {{highestBid?.userId}}</p>\r\n            </div>\r\n            <div class=\"timer\">\r\n              <span class=\"days\" [hidden]=\"days==-1\">{{days}} days</span>\r\n              <span class=\"hours\" [hidden]=\"hours==-1\">{{hours}} hours</span>\r\n              <span class=\"minutes\" [hidden]=\"minutes==-1\">{{minutes}} minutes</span>\r\n              <span class=\"seconds\" [hidden]=\"seconds==-1\">{{seconds}} seconds remaining</span>\r\n              <span class=\"seconds\" [hidden]=\"seconds!=-1\">Bidding Over!</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mt-4\">\r\n        <div style=\"padding: 16px\">\r\n          <ul class=\"table-title\">\r\n            <li><h2>Current Bids</h2></li>\r\n            <li class=\"right\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"show()\" [hidden]=\"!ready || seconds==-1\">\r\n                Create\r\n                Bid\r\n              </button>\r\n            </li>\r\n          </ul>\r\n          <table class=\"table\">\r\n            <thead class=\"thead\">\r\n            <tr>\r\n              <th class=\"col\">Name</th>\r\n              <th class=\"col\">Bid Price</th>\r\n              <th class=\"col\">Date</th>\r\n              <th class=\"col\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let bid of bidList; let i = index\">\r\n              <td class=\"column\">{{bid.userId}}</td>\r\n              <td class=\"column\">{{bid.value}}</td>\r\n              <td class=\"column\">{{bid.createdDate | date:\"dd/MM/yyyy 'at' h:mm:ssa\"}}</td>\r\n              <td class=\"column\" [hidden]=\"bid.userId != userName\">\r\n                <button [hidden]=\"!ready || seconds==-1\" type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                        (click)=\"deleteBid(i)\">Delete\r\n                  Bid\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <br><br>\r\n  <div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div>\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2>Create Bid</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"bidForm\" novalidate (ngSubmit)=\"save(bidForm.value, bidForm.valid)\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Bid Value</label>\r\n            <input type=\"number\" min=\"highestBid?.value\" step=\"0.01\" class=\"form-control\" formControlName=\"value\"\r\n                   value=\"highestBid?.value\">\r\n            <small [hidden]=\"!error\" class=\"text-danger\">Bid must be higher than current max bid</small>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n              <span>Submit</span>\r\n            </button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'show': visibleBookingAnimate}\"\r\n     [ngStyle]=\"{'display': visibleBooking ? 'block' : 'none', 'opacity': visibleBookingAnimate ? 1 : 0}\">\r\n  <div>\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2>Create Booking</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"bookingForm\" novalidate (ngSubmit)=\"saveBooking(bookingForm.value, bookingForm.valid)\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Bid Value</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" formControlName=\"bookingTime\">\r\n            <small [hidden]=\"!bookingError\" class=\"text-danger\">Booking Conflicts With Bidding Schedule Or Another Booking</small>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n              <span>Submit</span>\r\n            </button>\r\n          </div>\r\n        </form>\r\n        <ul class=\"table-title\">\r\n          <li><h2>Current Bookings</h2></li>\r\n        </ul>\r\n        <table class=\"table\">\r\n          <thead class=\"thead\">\r\n          <tr>\r\n            <th class=\"col\">Name</th>\r\n            <th class=\"col\">Booking Time</th>\r\n            <th class=\"col\"></th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let booking of bookingList; let i = index\">\r\n            <td class=\"column\">{{booking.userId}}</td>\r\n            <td class=\"column\">{{booking.bookingTime | date:\"dd/MM/yyyy 'at' h:mm:ssa\"}}</td>\r\n            <td class=\"column\" [hidden]=\"booking.userId != userName\">\r\n              <button [hidden]=\"!ready || seconds==-1\" type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                      (click)=\"deleteBooking(i)\">Delete\r\n                Booking\r\n              </button>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

        /***/
    }),

    /***/ "../../../../../src/app/property-view/property-view.component.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return PropertyViewComponent;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__services_property_service__ = __webpack_require__("../../../../../src/app/services/property-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__models_property__ = __webpack_require__("../../../../../src/app/models/property.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__models_bid__ = __webpack_require__("../../../../../src/app/models/bid.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__services_booking_service__ = __webpack_require__("../../../../../src/app/services/booking-service.ts");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__models_booking__ = __webpack_require__("../../../../../src/app/models/booking.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var PropertyViewComponent = (function () {
            function PropertyViewComponent(formBuilder, route, router, localStorageService, userService, propertyService, bidService, bookingService, globals) {
                this.formBuilder = formBuilder;
                this.route = route;
                this.router = router;
                this.localStorageService = localStorageService;
                this.userService = userService;
                this.propertyService = propertyService;
                this.bidService = bidService;
                this.bookingService = bookingService;
                this.globals = globals;
                this.events = [];
                this.visible = false;
                this.visibleAnimate = false;
                this.visibleBooking = false;
                this.visibleBookingAnimate = false;
            }

            PropertyViewComponent.prototype.show = function () {
                var _this = this;
                this.submitted = false;
                this.error = false;
                if (this.userToken == null && this.userName == null) {
                    window.location.href = this.globals.uiPath + "login";
                }
                this.visible = true;
                setTimeout(function () {
                    return _this.visibleAnimate = true;
                }, 100);
            };
            PropertyViewComponent.prototype.hide = function () {
                var _this = this;
                this.visibleAnimate = false;
                setTimeout(function () {
                    return _this.visible = false;
                }, 300);
            };
            PropertyViewComponent.prototype.showBooking = function () {
                var _this = this;
                this.submitted = false;
                this.error = false;
                if (this.userToken == null && this.userName == null) {
                    window.location.href = this.globals.uiPath + "login";
                }
                this.visibleBooking = true;
                setTimeout(function () {
                    return _this.visibleBookingAnimate = true;
                }, 100);
            };
            PropertyViewComponent.prototype.hideBooking = function () {
                var _this = this;
                this.visibleBookingAnimate = false;
                setTimeout(function () {
                    return _this.visibleBooking = false;
                }, 300);
            };
            PropertyViewComponent.prototype.onContainerClicked = function (event) {
                if (event.target.classList.contains('modal')) {
                    this.hide();
                    this.hideBooking();
                }
            };
            PropertyViewComponent.prototype.getProperty = function () {
                var _this = this;
                this.propertyService.getProperty(this.propertyId)
                    .subscribe(function (returnedProperty) {
                        console.log(returnedProperty);
                        _this.property = returnedProperty,
                            console.log(returnedProperty);
                        _this.setTimer(returnedProperty.biddingExpiry);
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyViewComponent.prototype.getPropertyBids = function () {
                var _this = this;
                this.bidService.getPropertyBids(this.propertyId, this.userName, this.userToken)
                    .subscribe(function (returnedBidList) {
                        _this.bidList = returnedBidList.sort(_this.compare);
                        _this.findHighestBidder();
                        console.log(returnedBidList);
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyViewComponent.prototype.getPropertyBookings = function () {
                var _this = this;
                this.bookingService.getPropertyBookings(this.propertyId, this.userName, this.userToken)
                    .subscribe(function (returnedBookingList) {
                        _this.bookingList = returnedBookingList.sort(_this.compareBooking);
                        console.log(returnedBookingList);
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyViewComponent.prototype.subscribeToFormChanges = function () {
                var _this = this;
                var myFormStatusChanges$ = this.bidForm.statusChanges;
                var myFormValueChanges$ = this.bidForm.valueChanges;
                myFormStatusChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'STATUS_CHANGED', object: x});
                });
                myFormValueChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'VALUE_CHANGED', object: x});
                });
            };
            PropertyViewComponent.prototype.subscribeToBookingFormChanges = function () {
                var _this = this;
                var myFormStatusChanges$ = this.bookingForm.statusChanges;
                var myFormValueChanges$ = this.bookingForm.valueChanges;
                myFormStatusChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'STATUS_CHANGED', object: x});
                });
                myFormValueChanges$.subscribe(function (x) {
                    return _this.events.push({event: 'VALUE_CHANGED', object: x});
                });
            };
            PropertyViewComponent.prototype.deleteBid = function (index) {
                console.log(index);
                if (this.bidList[index].userId == this.userName) {
                    this.bidService.deleteBid(this.propertyId, this.userName, this.userToken)
                        .subscribe(function (returnedBid) {
                            console.log(returnedBid);
                        });
                    (function (err) {
                        return console.log(err);
                    });
                }
            };
            PropertyViewComponent.prototype.deleteBooking = function (index) {
                var _this = this;
                console.log(index);
                if (this.bookingList[index].userId == this.userName) {
                    this.bookingService.deleteBooking(this.bookingList[index].id, this.userName, this.userToken)
                        .subscribe(function (returnedBid) {
                            console.log(returnedBid);
                            _this.bookingList.splice(index);
                        });
                    (function (err) {
                        return console.log(err);
                    });
                }
            };
            PropertyViewComponent.prototype.save = function (model, isValid) {
                var _this = this;
                console.log(model, isValid);
                var bidBoolean = this.bidList.length == 0 && model.value >= this.property.price;
                if (!bidBoolean) {
                    console.log("Not first bid");
                    bidBoolean = model.value > this.highestBid.value;
                }
                if (isValid && bidBoolean) {
                    this.error = false;
                    var newBid = new __WEBPACK_IMPORTED_MODULE_8__models_bid__["a" /* Bid */]();
                    newBid.userId = this.userName;
                    newBid.propertyId = this.propertyId;
                    newBid.value = model.value;
                    newBid.createdDate = new Date();
                    this.submitted = true;
                    this.bidService.createBid(newBid, this.userName, this.userToken)
                        .subscribe(function (returnedBid) {
                            _this.createdBid = returnedBid;
                            console.log(returnedBid);
                            _this.hide();
                        });
                    (function (err) {
                        return console.log(err);
                    });
                }
                else {
                    this.error = true;
                }
            };
            PropertyViewComponent.prototype.saveBooking = function (model, isValid) {
                var _this = this;
                console.log(model, isValid);
                var bookingDate = new Date(model.bookingTime);
                if (isValid && this.validBooking(bookingDate)) {
                    this.bookingError = false;
                    var newBooking_1 = new __WEBPACK_IMPORTED_MODULE_11__models_booking__["a" /* Booking */]();
                    newBooking_1.userId = this.userName;
                    newBooking_1.propertyId = this.propertyId;
                    newBooking_1.bookingTime = bookingDate;
                    newBooking_1.id = "";
                    this.submitted = true;
                    this.bookingService.createBooking(newBooking_1, this.userName, this.userToken)
                        .subscribe(function (returnedBooking) {
                            _this.bookingList.push(newBooking_1);
                            _this.bookingList.sort(_this.compareBooking);
                            console.log(returnedBooking);
                            _this.hideBooking();
                        });
                    (function (err) {
                        return console.log(err);
                    });
                }
                else {
                    this.bookingError = true;
                }
            };
            PropertyViewComponent.prototype.validBooking = function (potentialBooking) {
                console.log(potentialBooking);
                var propertyDate = new Date(this.property.biddingExpiry);
                console.log(propertyDate);
                if (potentialBooking <= propertyDate) {
                    for (var i = 0; i < this.bookingList.length; i++) {
                        var bookingDate = this.bookingList[i].bookingTime;
                        if (bookingDate == potentialBooking) {
                            return false;
                        }
                    }
                    return true;
                }
                else {
                    return false;
                }
            };
            PropertyViewComponent.prototype.findHighestBidder = function () {
                var higestBid = 0;
                for (var i = 0; i < this.bidList.length; i++) {
                    if (this.bidList[i].value > higestBid) {
                        this.highestBid = this.bidList[i];
                    }
                }
            };
            PropertyViewComponent.prototype.compareBooking = function (a, b) {
                if (a.bookingTime < b.bookingTime)
                    return -1;
                if (a.bookingTime > b.bookingTime)
                    return 1;
                return 0;
            };
            PropertyViewComponent.prototype.compare = function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            };
            PropertyViewComponent.prototype.logoutUser = function () {
                var _this = this;
                this.userService.logoutUser(this.userName, this.userToken)
                    .subscribe(function (returnedToken) {
                        console.log(returnedToken);
                        _this.localStorageService.clearAll();
                        window.location.href = _this.globals.uiPath + "property";
                    });
                (function (err) {
                    return console.log(err);
                });
            };
            PropertyViewComponent.prototype.setTimer = function (bidDate) {
                var globalScope = this;
                this.timer = setInterval(function () {
                    timeBetweenDates(bidDate);
                }, 1000);

                function timeBetweenDates(toDate) {
                    var dateEntered = new Date(toDate);
                    var now = new Date();
                    var difference = dateEntered.getTime() - now.getTime();
                    if (difference <= 0) {
                        clearInterval(globalScope.timer);
                        globalScope.seconds = -1;
                        globalScope.days = -1;
                        globalScope.hours = -1;
                        globalScope.minutes = -1;
                    }
                    else {
                        globalScope.seconds = Math.floor(difference / 1000);
                        globalScope.minutes = Math.floor(globalScope.seconds / 60);
                        globalScope.hours = Math.floor(globalScope.minutes / 60);
                        globalScope.days = Math.floor(globalScope.hours / 24);
                        globalScope.hours %= 24;
                        globalScope.minutes %= 60;
                        globalScope.seconds %= 60;
                    }
                    globalScope.ready = true;
                }
            };
            PropertyViewComponent.prototype.subscribeToBidSocket = function () {
                var address = this.globals.websocket + this.propertyId;
                var connection = new WebSocket(address);
                var globalScope = this;
                connection.onopen = function () {
                    console.log("Connected to " + address);
                };
                connection.onclose = function () {
                    console.log("Disconnected from to " + address);
                };
                connection.onerror = function (error) {
                    console.log("Error occured with " + address + ": " + error);
                };
                connection.onmessage = function (message) {
                    try {
                        console.log(message.data);
                        var json = JSON.parse(message.data);
                        console.log(json);
                        var audio = new Audio();
                        audio.src = globalScope.globals.uiPath + "assets/notification.mp3";
                        audio.load();
                        audio.play();
                        var newList = [];
                        newList = json;
                        newList.sort(globalScope.compare);
                        globalScope.bidList = newList;
                        globalScope.findHighestBidder();
                    }
                    catch (e) {
                        console.log('Error parsing JSON: ', message.data);
                        return;
                    }
                };
            };
            PropertyViewComponent.prototype.ngOnInit = function () {
                this.ready = false;
                this.propertyId = this.route.snapshot.paramMap.get('property');
                this.userToken = this.localStorageService.get("token");
                if (this.userToken == null)
                    window.location.href = this.globals.uiPath + "property";
                this.userName = this.localStorageService.get("user");
                console.log(this.propertyId);
                this.property = new __WEBPACK_IMPORTED_MODULE_6__models_property__["a" /* Property */]();
                this.getProperty();
                this.getPropertyBids();
                this.getPropertyBookings();
                this.error = false;
                this.bookingError = false;
                this.highestBid = new __WEBPACK_IMPORTED_MODULE_8__models_bid__["a" /* Bid */]();
                this.bidForm = this.formBuilder.group({
                    value: [this.highestBid.value, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* Validators */].min(this.highestBid.value)]],
                });
                this.bookingForm = this.formBuilder.group({
                    bookingTime: [new Date(), [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* Validators */].required]],
                });
                this.subscribeToFormChanges();
                this.subscribeToBookingFormChanges();
                this.subscribeToBidSocket();
                /*TODO
                Mess around with this properties bids filter-wise (my bids then a list of the rest of the bids including mine)
                Add websocket to get current bids from other users and add to page
                Add countdown on bids somewhere on the page
                */
            };
            PropertyViewComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
                    selector: 'app-property-view',
                    template: __webpack_require__("../../../../../src/app/property-view/property-view.component.html"),
                    styles: [__webpack_require__("../../../../../src/app/property-view/property-view.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
                }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
                    __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"],
                    __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
                    __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */],
                    __WEBPACK_IMPORTED_MODULE_7__services_bid_service__["a" /* BidService */],
                    __WEBPACK_IMPORTED_MODULE_10__services_booking_service__["a" /* BookingService */],
                    __WEBPACK_IMPORTED_MODULE_5__app_properties__["a" /* Globals */]])
            ], PropertyViewComponent);
            return PropertyViewComponent;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/services/bid-service.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return BidService;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var BidService = (function () {
            function BidService(http, globals) {
                this.http = http;
                this.globals = globals;
                this.ENDPOINT = this.globals.endpoint + "/bid";
            }

            BidService.prototype.getUserBids = function (username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/user/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BidService.prototype.getPropertyBids = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/" + propertyId, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BidService.prototype.getPropertyUserBid = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/" + propertyId + "/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BidService.prototype.createBid = function (body, username, token) {
                var bodyString = JSON.stringify(body);
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.post(this.ENDPOINT, body, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BidService.prototype.deleteBid = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.delete(this.ENDPOINT + "/" + propertyId + "/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BidService = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_properties__["a" /* Globals */]])
            ], BidService);
            return BidService;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/services/booking-service.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return BookingService;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var BookingService = (function () {
            function BookingService(http, globals) {
                this.http = http;
                this.globals = globals;
                this.ENDPOINT = this.globals.endpoint + "/booking";
            }

            BookingService.prototype.getUserBookings = function (username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/user/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BookingService.prototype.getPropertyBookings = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/" + propertyId, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BookingService.prototype.getPropertyUserBookings = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.get(this.ENDPOINT + "/" + propertyId + "/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BookingService.prototype.createBooking = function (body, username, token) {
                var bodyString = JSON.stringify(body);
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.post(this.ENDPOINT, body, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BookingService.prototype.deleteBooking = function (propertyId, username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.delete(this.ENDPOINT + "/" + propertyId + "/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            BookingService = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_properties__["a" /* Globals */]])
            ], BookingService);
            return BookingService;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/services/property-service.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return PropertyService;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var PropertyService = (function () {
            function PropertyService(http, globals) {
                this.http = http;
                this.globals = globals;
                this.ENDPOINT = this.globals.endpoint + "/property";
            }

            PropertyService.prototype.getProperties = function () {
                return this.http.get(this.ENDPOINT)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            PropertyService.prototype.getProperty = function (id) {
                return this.http.get(this.ENDPOINT + "/" + id)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            PropertyService.prototype.createProperty = function (body, username, token) {
                var bodyString = JSON.stringify(body);
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.post(this.ENDPOINT, body, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            PropertyService = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_properties__["a" /* Globals */]])
            ], PropertyService);
            return PropertyService;
        }());


        /***/
    }),

    /***/ "../../../../../src/app/services/user-service.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return UserService;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__app_properties__ = __webpack_require__("../../../../../src/app/app-properties.ts");
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var UserService = (function () {
            function UserService(http, globals) {
                this.http = http;
                this.globals = globals;
                this.ENDPOINT = this.globals.endpoint + "/user";
            }

            UserService.prototype.getUsers = function () {
                return this.http.get(this.ENDPOINT)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            UserService.prototype.getUser = function (username) {
                return this.http.get(this.ENDPOINT + "/" + username)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            UserService.prototype.loginUser = function (username, password) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + password);
                console.log(auth);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.post(this.ENDPOINT + "/login/" + username, null, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            UserService.prototype.logoutUser = function (username, token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                var auth = btoa(username + ":" + token);
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Basic ' + auth);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.delete(this.ENDPOINT + "/logout/" + username, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            UserService.prototype.createUser = function (body) {
                var bodyString = JSON.stringify(body);
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({'Content-Type': 'application/json'});
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({headers: headers});
                return this.http.post(this.ENDPOINT, body, options)
                    .map(function (res) {
                        return res.json();
                    })
                    .catch(function (error) {
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
                    });
            };
            UserService = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_properties__["a" /* Globals */]])
            ], UserService);
            return UserService;
        }());


        /***/
    }),

    /***/ "../../../../../src/assets/background.png":
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "background.dd08b6ceb22d99c33481.png";

        /***/
    }),

    /***/ "../../../../../src/main.ts":
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


        /***/
    }),

    /***/ 0:
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__("../../../../../src/main.ts");


        /***/
    })

}, [0]);
//# sourceMappingURL=main.bundle.js.map