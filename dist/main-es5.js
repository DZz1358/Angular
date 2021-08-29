(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkambmrxerdre_angular"] = self["webpackChunkambmrxerdre_angular"] || []).push([["main"], {
    /***/
    8255: function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      1106);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      1249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _shared_components_page_body_page_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/components/page-body/page-body.component */
      4539);
      /* harmony import */


      var _shared_components_page_body_top_page_body_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/components/page-body-top/page-body-top.component */
      1883);
      /* harmony import */


      var _shared_components_page_body_footer_page_body_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/page-body-footer/page-body-footer.component */
      2657);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/tabs/tabs.component */
      4336);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      5939);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _shared_components_page_body_page_body_component__WEBPACK_IMPORTED_MODULE_1__.PageBodyComponent, _shared_components_page_body_top_page_body_top_component__WEBPACK_IMPORTED_MODULE_2__.PageBodyTopComponent, _shared_components_page_body_footer_page_body_footer_component__WEBPACK_IMPORTED_MODULE_3__.PageBodyFooterComponent, _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__.TabsComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    2657: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageBodyFooterComponent": function PageBodyFooterComponent() {
          return (
            /* binding */
            _PageBodyFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_page_body_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./page-body-footer.component.html */
      4271);
      /* harmony import */


      var _page_body_footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-body-footer.component.css */
      4940);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PageBodyFooterComponent = /*#__PURE__*/function () {
        function PageBodyFooterComponent() {
          _classCallCheck(this, PageBodyFooterComponent);
        }

        _createClass(PageBodyFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageBodyFooterComponent;
      }();

      _PageBodyFooterComponent.ctorParameters = function () {
        return [];
      };

      _PageBodyFooterComponent.propDecorators = {
        weather: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _PageBodyFooterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-body-footer',
        template: _raw_loader_page_body_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_body_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PageBodyFooterComponent);
      /***/
    },

    /***/
    1883: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageBodyTopComponent": function PageBodyTopComponent() {
          return (
            /* binding */
            _PageBodyTopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_page_body_top_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./page-body-top.component.html */
      436);
      /* harmony import */


      var _page_body_top_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-body-top.component.css */
      7970);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PageBodyTopComponent = /*#__PURE__*/function () {
        function PageBodyTopComponent() {
          _classCallCheck(this, PageBodyTopComponent);
        }

        _createClass(PageBodyTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageBodyTopComponent;
      }();

      _PageBodyTopComponent.ctorParameters = function () {
        return [];
      };

      _PageBodyTopComponent.propDecorators = {
        weather: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        cityInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _PageBodyTopComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-body-top',
        template: _raw_loader_page_body_top_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_body_top_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PageBodyTopComponent);
      /***/
    },

    /***/
    4539: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageBodyComponent": function PageBodyComponent() {
          return (
            /* binding */
            _PageBodyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_page_body_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./page-body.component.html */
      1742);
      /* harmony import */


      var _page_body_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-body.component.css */
      7542);
      /* harmony import */


      var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../weather.service */
      7187);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PageBodyComponent = /*#__PURE__*/function () {
        function PageBodyComponent(weatherService) {
          _classCallCheck(this, PageBodyComponent);

          this.weatherService = weatherService;
          this.lat = 0;
          this.lon = 0;
          this.weather = {
            name: 'receiving...',
            sys: {
              country: ''
            }
          };
        }

        _createClass(PageBodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getLocation();

                    case 2:
                      _context.next = 4;
                      return this.getCityInfo();

                    case 4:
                      _context.next = 6;
                      return this.getForecast({
                        lat: this.lat,
                        lon: this.lon
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              if ("geolocation" in navigator) {
                navigator.geolocation.watchPosition(function (success) {
                  _this.lat = success.coords.latitude;
                  _this.lon = success.coords.longitude;
                  return resolve({
                    lat: _this.lat,
                    lon: _this.lon
                  });
                });
              }
            });
          }
        }, {
          key: "getCityInfo",
          value: function getCityInfo() {
            var cityName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.weatherService.getCityInfoByCoords({
                        lat: this.lat,
                        lon: this.lon,
                        cityName: cityName
                      }).toPromise();

                    case 2:
                      data = _context2.sent;
                      this.cityInfo = data;
                      return _context2.abrupt("return", data);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getForecast",
          value: function getForecast(_ref) {
            var _ref$lat = _ref.lat,
                lat = _ref$lat === void 0 ? this.lat : _ref$lat,
                _ref$lon = _ref.lon,
                lon = _ref$lon === void 0 ? this.lon : _ref$lon;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.weatherService.getForecastDataByCoords({
                        lat: lat,
                        lon: lon
                      }).toPromise();

                    case 2:
                      data = _context3.sent;
                      this.weather = data;
                      this.weather.daily = this.weather.daily.sort(function (prev, next) {
                        return prev.dt - next.dt;
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var inputValue, cityInfo;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      inputValue = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;

                      if (!inputValue) {
                        _context4.next = 7;
                        break;
                      }

                      _context4.next = 4;
                      return this.getCityInfo(inputValue);

                    case 4:
                      cityInfo = _context4.sent;
                      _context4.next = 7;
                      return this.getForecast({
                        lat: cityInfo.coord.lat,
                        lon: cityInfo.coord.lon
                      });

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return PageBodyComponent;
      }();

      _PageBodyComponent.ctorParameters = function () {
        return [{
          type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
        }];
      };

      _PageBodyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-page-body',
        template: _raw_loader_page_body_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_body_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PageBodyComponent);
      /***/
    },

    /***/
    4336: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsComponent": function TabsComponent() {
          return (
            /* binding */
            _TabsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.component.html */
      7566);
      /* harmony import */


      var _tabs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.component.css */
      305);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _TabsComponent = /*#__PURE__*/function () {
        function TabsComponent() {
          _classCallCheck(this, TabsComponent);
        }

        _createClass(TabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.cityInfo);
          }
        }, {
          key: "transformDate",
          value: function transformDate(date) {
            var nowDate = new Date();
            nowDate.setTime(date * 1000);
            return nowDate.toString();
          }
        }, {
          key: "getRoundedTemp",
          value: function getRoundedTemp(temp) {
            return Math.round(temp);
          }
        }, {
          key: "getDailyWeather",
          value: function getDailyWeather(day) {
            var res = null;

            if (this.weather.daily && this.weather.daily.length > 0 && this.weather.daily[day]) {
              res = this.weather.daily[day];
            }

            return res;
          }
        }]);

        return TabsComponent;
      }();

      _TabsComponent.ctorParameters = function () {
        return [];
      };

      _TabsComponent.propDecorators = {
        weather: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        cityInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _TabsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsComponent);
      /***/
    },

    /***/
    7187: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WeatherService": function WeatherService() {
          return (
            /* binding */
            _WeatherService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _WeatherService = /*#__PURE__*/function () {
        function WeatherService(http) {
          _classCallCheck(this, WeatherService);

          this.http = http;
          this.apiKey = 'ec5d9934ec52dbba4d7ecab44706b0ca';
          this.url = "http://api.openweathermap.org/data/2.5/weather";
          this.forecastUrl = "http://api.openweathermap.org/data/2.5/onecall";
        }

        _createClass(WeatherService, [{
          key: "getCityInfoByCoords",
          value: function getCityInfoByCoords(searchParams) {
            return this.callApi(this.url, searchParams);
          }
        }, {
          key: "getForecastDataByCoords",
          value: function getForecastDataByCoords(searchParams) {
            return this.callApi(this.forecastUrl, Object.assign(Object.assign({}, searchParams), {
              cityName: ''
            }));
          }
        }, {
          key: "callApi",
          value: function callApi(url, _ref2) {
            var lat = _ref2.lat,
                lon = _ref2.lon,
                _ref2$cityName = _ref2.cityName,
                cityName = _ref2$cityName === void 0 ? null : _ref2$cityName;
            var queryParams;

            if (cityName) {
              queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('units', 'metric').set('appid', this.apiKey).set('q', cityName);
              console.log('cityName', cityName);
            } else {
              console.log('lat', lat);
              queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('units', 'metric').set('appid', this.apiKey).set('lat', lat).set('lon', lon);
            }

            return this.http.get(url, {
              params: queryParams
            });
          }
        }]);

        return WeatherService;
      }();

      _WeatherService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _WeatherService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _WeatherService); // .set('lat', lat)
      // .set('lon', lon)

      /***/
    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    1249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    4940: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJvZHktZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    7970: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJvZHktdG9wLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    7542: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\r\n    max-width: 875px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    margin-top: 20px;\r\n}\r\n\r\n.header_input {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJwYWdlLWJvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4NzVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    305: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".info_location {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.location_date {\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n\r\n.location_city {\r\n    font-size: 22px;\r\n    margin: 0;\r\n}\r\n\r\n.location_country {\r\n    font-weight: bold;\r\n}\r\n\r\n.weather_info {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.weather_info-text {\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}\r\n\r\n.weather_img {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.weather_img-icon {\r\n    width: 30%;\r\n    height: 30%;\r\n}\r\n\r\n.page_info {\r\n    padding: 5%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.weather_temp {\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n}\r\n\r\n.weather_list {\r\n    list-style: none;\r\n    padding: 5%;\r\n}\r\n\r\n.weather_item {\r\n    margin-bottom: 5px;\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoidGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9fbG9jYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmxvY2F0aW9uX2RhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxvY2F0aW9uX2NpdHkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5sb2NhdGlvbl9jb3VudHJ5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53ZWF0aGVyX2luZm8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbi53ZWF0aGVyX2luZm8tdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi53ZWF0aGVyX2ltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLndlYXRoZXJfaW1nLWljb24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcbi5wYWdlX2luZm8ge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ud2VhdGhlcl90ZW1wIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi53ZWF0aGVyX2xpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ud2VhdGhlcl9pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    1106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n    <app-page-body></app-page-body>\r\n</div>";
      /***/
    },

    /***/
    4271: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    436: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <app-tabs [cityInfo]=\"cityInfo\" [weather]=\"weather\"></app-tabs>\n</div>";
      /***/
    },

    /***/
    1742: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"header\">\n        <input class=\"header_input\" type=\"text\" (change)=\"onChange($event)\" placeholder=\"Enter city name\">\n    </div>\n\n    <div>\n        <app-page-body-top *ngIf=\"cityInfo && weather\" [weather]=\"weather\" [cityInfo]=\"cityInfo\"></app-page-body-top>\n        <app-page-body-footer *ngIf=\"weather\" [weather]=\"weather\"></app-page-body-footer>\n    </div>\n\n</div>";
      /***/
    },

    /***/
    7566: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-tab-group mat-align-tabs=\"center\" mat-stretch-tabs class=\"example-stretched-tabs\" animationDuration=\"0ms\">\n    <mat-tab label=\"Today\">\n        <div class=\"page_info  example-large-box mat-elevation-z4\">\n            <div class=\"info_location\">\n                <div>\n                    <p class=\"location_date\" *ngIf=\"cityInfo.dt\">{{ transformDate(cityInfo.dt) | date:'EEEE, d LLL'}}\n                    </p>\n                    <p class=\"location_city\">{{ cityInfo.name }}</p>\n                    <p class=\"location_country\">{{ cityInfo.sys.country }}</p>\n                </div>\n                <div class=\"weather_info\" *ngIf=\"getDailyWeather(0) && getDailyWeather(0).weather.length\">\n                    <p class=\"weather_info-text\">{{ getDailyWeather(0).weather[0].description }}</p>\n                </div>\n            </div>\n            <div class=\"weather_img\">\n                <img class=\"weather_img-icon\"\n                    src=\"http://openweathermap.org/img/wn/{{getDailyWeather(0).weather[0].icon}}@2x.png\"\n                    alt=\"weather icon\">\n            </div>\n            <div *ngIf=\"getDailyWeather(0)\">\n                <p class=\"weather_temp\">{{ getRoundedTemp(getDailyWeather(0).temp.day) }} &#8451; </p>\n            </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Tomorrow\">\n        <div class=\"page_info example-large-box mat-elevation-z4\">\n            <div class=\"info_location\">\n                <div>\n                    <p class=\"location_date\" *ngIf=\"getDailyWeather(1)\">{{ transformDate(getDailyWeather(1).dt) |\n                        date:'EEEE, d LLL'}}</p>\n                    <p class=\"location_city\">{{ cityInfo.name }}</p>\n                    <p class=\"location_country\">{{ cityInfo.sys.country }}</p>\n                </div>\n                <div class=\"weather_info\" *ngIf=\"getDailyWeather(1) && getDailyWeather(1).weather.length\">\n                    <p class=\"weather_info-text\">{{ getDailyWeather(1).weather[0].description }}</p>\n                </div>\n            </div>\n            <div class=\"weather_img\">\n                <img class=\"weather_img-icon\"\n                    src=\"http://openweathermap.org/img/wn/{{getDailyWeather(1).weather[0].icon}}@2x.png\"\n                    alt=\"weather icon\">\n            </div>\n\n            <div *ngIf=\"getDailyWeather(1)\">\n                <p class=\"weather_temp\">{{ getRoundedTemp(getDailyWeather(1).temp.day) }} &#8451;</p>\n            </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"5 days\">\n        <div class=\"example-large-box mat-elevation-z4\">\n            <ul class=\"weather_list\">\n                <li class=\"weather_item\" *ngFor=\"let day of weather.daily\">\n                    <div>\n                        <p>{{ getRoundedTemp(day.temp.day) }} &#8451;</p>\n                        <p>{{ transformDate(day.dt) | date:'EEEE, d LLL'}}</p>\n                    </div>\n                    <div>\n                        <img src=\"http://openweathermap.org/img/wn/{{ day.weather[0].icon }}@2x.png\" alt=\"weather icon\">\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </mat-tab>\n</mat-tab-group>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map