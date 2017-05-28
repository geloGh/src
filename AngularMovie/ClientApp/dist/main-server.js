(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("zone.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("@angular/core");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(16);
	var fetchdata_component_1 = __webpack_require__(18);
	var counter_component_1 = __webpack_require__(21);
	var movie_component_1 = __webpack_require__(23);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            movie_component_1.MovieComponent,
	            home_component_1.HomeComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'movies', component: movie_component_1.MovieComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("@angular/router");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(13),
	        styles: [__webpack_require__(14)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Movie Cards</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <!--<li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/counter']\">\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>-->\n                \n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/movies']\">\r\n                        <span class='glyphicon glyphicon-play'></span> Movies\r\n                    </a>\r\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(15);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(17)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(20)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("@angular/http");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(22)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
	var MovieComponent = (function () {
	    function MovieComponent(http) {
	        var _this = this;
	        http.get('/api/movies/list').subscribe(function (result) {
	            _this.films = result.json();
	        });
	    }
	    return MovieComponent;
	}());
	MovieComponent = __decorate([
	    core_1.Component({
	        selector: 'movies',
	        template: __webpack_require__(24)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], MovieComponent);
	exports.MovieComponent = MovieComponent;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<h1>Cards</h1>\n\n<p *ngIf=\"!films\"><em>Loading...</em></p>\n\n<table class='table table-striped table-responsive table-hover' *ngIf=\"films\">\n    <thead>\n        <tr>           \n            <th>Title</th>\n            <th>Released on</th>            \n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let film of films\">            \n            <td>{{ film.title}}</td>\n            <td>{{ film.dateFormatted }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNjNWZjN2Y4ZTY2NTc0ZDIwY2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2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Ozs7QUNBQSxzZEFBcWQsMEJBQTBCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLCtDOzs7Ozs7Ozs7Ozs7OztBQ0Fob0IscUNBQTBDO0FBTTFDLEtBQWEsZ0JBQWdCO0tBSjdCO1NBS1csaUJBQVksR0FBRyxDQUFDLENBQUM7S0FLNUIsQ0FBQztLQUhVLDJDQUFnQixHQUF2QjtTQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4QixDQUFDO0tBQ0wsdUJBQUM7QUFBRCxFQUFDO0FBTlksaUJBQWdCO0tBSjVCLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsU0FBUztTQUNuQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUEwQixDQUFDO01BQ2hELENBQUM7SUFDVyxnQkFBZ0IsQ0FNNUI7QUFOWSw2Q0FBZ0I7Ozs7Ozs7QUNON0IsaUlBQWdJLGdCQUFnQiw2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaEoscUNBQTBDO0FBQzFDLHNDQUFxQztBQU1yQyxLQUFhLGNBQWM7S0FHdkIsd0JBQVksSUFBVTtTQUF0QixpQkFJQztTQUhHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQU07YUFDekMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0IsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBQ0wscUJBQUM7QUFBRCxFQUFDO0FBUlksZUFBYztLQUoxQixnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLFFBQVE7U0FDbEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBd0IsQ0FBQztNQUM5QyxDQUFDO3NDQUlvQixXQUFJO0lBSGIsY0FBYyxDQVExQjtBQVJZLHlDQUFjOzs7Ozs7O0FDUDNCLHlZQUF3WSxhQUFhLHlCQUF5QixzQkFBc0IsK0MiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3M2M1ZmM3ZjhlNjY1NzRkMjBjZCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb3ZpZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb3ZpZXMvbW92aWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxuICAgICAgICBNb3ZpZUNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdjb3VudGVyJywgY29tcG9uZW50OiBDb3VudGVyQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ21vdmllcycsIGNvbXBvbmVudDogTW92aWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPk1vdmllIENhcmRzPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8IS0tPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPi0tPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbW92aWVzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBsYXknPjwvc3Bhbj4gTW92aWVzXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5IZWxsbywgd29ybGQhPC9oMT5cXG48cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cXG48dWw+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2dldC5hc3AubmV0Lyc+QVNQLk5FVCBDb3JlPC9hPiBhbmQgPGEgaHJlZj0naHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS82N2VmOHNiZC5hc3B4Jz5DIzwvYT4gZm9yIGNyb3NzLXBsYXRmb3JtIHNlcnZlci1zaWRlIGNvZGU8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9hbmd1bGFyLmlvLyc+QW5ndWxhciAyPC9hPiBhbmQgPGEgaHJlZj0naHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJz5UeXBlU2NyaXB0PC9hPiBmb3IgY2xpZW50LXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3dlYnBhY2suZ2l0aHViLmlvLyc+V2VicGFjazwvYT4gZm9yIGJ1aWxkaW5nIGFuZCBidW5kbGluZyBjbGllbnQtc2lkZSByZXNvdXJjZXM8L2xpPlxcbiAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxcbjwvdWw+XFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXG48dWw+XFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcbjwvdWw+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZldGNoZGF0YScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRmV0Y2hEYXRhQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcbiAgICAgICAgaHR0cC5nZXQoJy9hcGkvU2FtcGxlRGF0YS9XZWF0aGVyRm9yZWNhc3RzJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xuICAgIHRlbXBlcmF0dXJlRjogbnVtYmVyO1xuICAgIHN1bW1hcnk6IHN0cmluZztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XFxuXFxuPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLjwvcD5cXG5cXG48cCAqbmdJZj1cXFwiIWZvcmVjYXN0c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXG5cXG48dGFibGUgY2xhc3M9J3RhYmxlJyAqbmdJZj1cXFwiZm9yZWNhc3RzXFxcIj5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cXG4gICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3RoZWFkPlxcbiAgICA8dGJvZHk+XFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZm9yZWNhc3Qgb2YgZm9yZWNhc3RzXFxcIj5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnN1bW1hcnkgfX08L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY291bnRlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQge1xuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xuXG4gICAgcHVibGljIGluY3JlbWVudENvdW50ZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcblxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXG5cXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXG5cXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vdmllcycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbW92aWUuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZpZUNvbXBvbmVudCB7XG4gICAgcHVibGljIGZpbG1zOiBGaWxtW107XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL21vdmllcy9saXN0Jykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbG1zID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRmlsbSB7XG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+Q2FyZHM8L2gxPlxcblxcbjxwICpuZ0lmPVxcXCIhZmlsbXNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxuXFxuPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtaG92ZXInICpuZ0lmPVxcXCJmaWxtc1xcXCI+XFxuICAgIDx0aGVhZD5cXG4gICAgICAgIDx0cj4gICAgICAgICAgIFxcbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XFxuICAgICAgICAgICAgPHRoPlJlbGVhc2VkIG9uPC90aD4gICAgICAgICAgICBcXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmaWxtIG9mIGZpbG1zXFxcIj4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8dGQ+e3sgZmlsbS50aXRsZX19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZmlsbS5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==