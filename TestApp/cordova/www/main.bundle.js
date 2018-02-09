webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\" routerLinkActive=\"active\">Home</a> | \n<a routerLink=\"/herocreate\" routerLinkActive=\"active\">Create A Hero</a> | \n<a routerLink=\"/heros\" routerLinkActive=\"active\">Hero's List</a>\n<hr>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroform_heroform_component__ = __webpack_require__("../../../../../src/app/heroform/heroform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__encoded_string_pipe__ = __webpack_require__("../../../../../src/app/encoded-string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__heroskill_heroskill_component__ = __webpack_require__("../../../../../src/app/heroskill/heroskill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_hero_reducer__ = __webpack_require__("../../../../../src/app/reducers/hero.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__heroform_heroform_component__["a" /* HeroformComponent */],
                __WEBPACK_IMPORTED_MODULE_8__encoded_string_pipe__["a" /* EncodedStringPipe */],
                __WEBPACK_IMPORTED_MODULE_9__heroskill_heroskill_component__["a" /* HeroskillComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["b" /* StoreModule */].forRoot({ lastHero: __WEBPACK_IMPORTED_MODULE_10__reducers_hero_reducer__["a" /* heroReducer */] })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    /* HeroesComponent's private CSS styles */\n    .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n    .heroes li {\n        position: relative;\n        cursor: pointer;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n    .heroes li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n    .heroes a {\n        color: #888;\n        text-decoration: none;\n        position: relative;\n        display: block;\n        width: 250px;\n      }\n    .heroes a:hover {\n        color:#607D8B;\n      }\n    .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        min-width: 16px;\n        text-align: right;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    .button {\n        background-color: #eee;\n        border: none;\n        padding: 5px 10px;\n        border-radius: 4px;\n        cursor: pointer;\n        cursor: hand;\n        font-family: Arial;\n      }\n    button:hover {\n        background-color: #cfd8dc;\n      }\n    button.delete {\n        position: relative;\n        left: 194px;\n        top: -32px;\n        background-color: gray !important;\n        color: white;\n      }\n    /* DashboardComponent's private CSS styles */\n    [class*='col-'] {\n        float: left;\n        padding-right: 20px;\n        padding-bottom: 20px;\n      }\n    [class*='col-']:last-of-type {\n        padding-right: 0;\n      }\n    a {\n        text-decoration: none;\n      }\n    *, *:after, *:before {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n    h3 {\n        text-align: center; margin-bottom: 0;\n      }\n    h4 {\n        position: relative;\n      }\n    .grid {\n        margin: 0;\n      }\n    .col-1-4 {\n        width: 25%;\n      }\n    .module {\n        padding: 20px;\n        text-align: center;\n        color: #eee;\n        max-height: 120px;\n        min-width: 120px;\n        background-color: #607D8B;\n        border-radius: 2px;\n      }\n    .module:hover {\n        background-color: #EEE;\n        cursor: pointer;\n        color: #607d8b;\n      }\n    .grid-pad {\n        padding: 10px 0;\n      }\n    .grid-pad > [class*='col-']:last-of-type {\n        padding-right: 20px;\n      }\n    @media (max-width: 600px) {\n        .module {\n          font-size: 10px;\n          max-height: 75px; }\n      }\n    @media (max-width: 1024px) {\n        .grid {\n          margin: 0;\n        }\n        .module {\n          min-width: 60px;\n        }\n      }      ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\">\n        <a routerLink=\"/hero/{{hero.uuid | encodedString}}\">\n            {{hero.realName}}\n        </a>\n        <button class=\"delete\" (click)=\"delete(hero)\">x</button>\n    </li>\n</ul>\n<div *ngIf=\"lastModifiedHero != undefined;\">\n    <label for=\"lastHero\">Last Modified Hero:{{lastModifiedHero.realName }}\n    </label>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroService, router, route, store) {
        this.heroService = heroService;
        this.router = router;
        this.route = route;
        this.store = store;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHeroes();
        this.store.subscribe(function (state) {
            _this.lastModifiedHero = state.lastHero;
            if (_this.lastModifiedHero != undefined) {
                console.log("last modified hero:" + _this.lastModifiedHero.realName);
            }
            else {
                console.log("last modified hero is empty");
            }
        });
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) {
            _this.heroes = heroes;
        });
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this.heroService.deleteHero(id).subscribe(function (hero) {
            console.log("Deleted hero:" + id);
            _this.router.navigateByUrl("/heros");
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/encoded-string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncodedStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EncodedStringPipe = /** @class */ (function () {
    function EncodedStringPipe() {
    }
    EncodedStringPipe.prototype.transform = function (value, args) {
        return encodeURIComponent(value);
    };
    EncodedStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'encodedString'
        })
    ], EncodedStringPipe);
    return EncodedStringPipe;
}());



/***/ }),

/***/ "../../../../../src/app/hero.abilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroAbilities; });
var HeroAbilities = /** @class */ (function () {
    function HeroAbilities(energyProjection, strength, fightingSkills, speed, intelligence, durability) {
        this.energyProjection = energyProjection;
        this.strength = strength;
        this.fightingSkills = fightingSkills;
        this.speed = speed;
        this.intelligence = intelligence;
        this.durability = durability;
    }
    return HeroAbilities;
}());



/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes';
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl);
    };
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (hero) { return _this.log("added hero w/ id=" + hero.uuid); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addHero')));
    };
    HeroService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched hero uiud=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'string' ? hero : hero.uuid;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        console.log('HeroService message: ' + message);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_abilities__ = __webpack_require__("../../../../../src/app/hero.abilities.ts");

var Hero = /** @class */ (function () {
    function Hero(groups, abilities, realName, s3ImageUrl, powers, uuid, heroName, signedAccords) {
        this.groups = groups;
        this.abilities = abilities;
        this.realName = realName;
        this.s3ImageUrl = s3ImageUrl;
        this.powers = powers;
        this.uuid = uuid;
        this.heroName = heroName;
        this.signedAccords = signedAccords;
        if (groups == null) {
            this.groups = ["Test Group"];
        }
        if (abilities == null) {
            this.abilities = new __WEBPACK_IMPORTED_MODULE_0__hero_abilities__["a" /* HeroAbilities */](1, 2, 3, 4, 5, 6);
        }
    }
    return Hero;
}());



/***/ }),

/***/ "../../../../../src/app/heroform/heroform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    /* HeroesComponent's private CSS styles */\n    .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n    .heroes li {\n        position: relative;\n        cursor: pointer;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n    .heroes li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n    .heroes a {\n        color: #888;\n        text-decoration: none;\n        position: relative;\n        display: block;\n        width: 250px;\n      }\n    .heroes a:hover {\n        color:#607D8B;\n      }\n    .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        min-width: 16px;\n        text-align: right;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    .button {\n        background-color: #eee;\n        border: none;\n        padding: 5px 10px;\n        border-radius: 4px;\n        cursor: pointer;\n        cursor: hand;\n        font-family: Arial;\n      }\n    button:hover {\n        background-color: #cfd8dc;\n      }\n    button.delete {\n        position: relative;\n        left: 194px;\n        top: -32px;\n        background-color: gray !important;\n        color: white;\n      }\n    /* DashboardComponent's private CSS styles */\n    [class*='col-'] {\n        float: left;\n        padding-right: 20px;\n        padding-bottom: 20px;\n      }\n    [class*='col-']:last-of-type {\n        padding-right: 0;\n      }\n    a {\n        text-decoration: none;\n      }\n    *, *:after, *:before {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n    h3 {\n        text-align: center; margin-bottom: 0;\n      }\n    h4 {\n        position: relative;\n      }\n    .grid {\n        margin: 0;\n      }\n    .col-1-4 {\n        width: 25%;\n      }\n    .module {\n        padding: 20px;\n        text-align: center;\n        color: #eee;\n        max-height: 120px;\n        min-width: 120px;\n        background-color: #607D8B;\n        border-radius: 2px;\n      }\n    .module:hover {\n        background-color: #EEE;\n        cursor: pointer;\n        color: #607d8b;\n      }\n    .grid-pad {\n        padding: 10px 0;\n      }\n    .grid-pad > [class*='col-']:last-of-type {\n        padding-right: 20px;\n      }\n    @media (max-width: 600px) {\n        .module {\n          font-size: 10px;\n          max-height: 75px; }\n      }\n    @media (max-width: 1024px) {\n        .grid {\n          margin: 0;\n        }\n        .module {\n          min-width: 60px;\n        }\n      }      ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroform/heroform.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n      <div class=\"form-group row\">\n        <label for=\"realName\" class=\"col-sm-2 col-form-label\">Real Name</label>\n        <input type=\"text\" required minlength=\"4\" [(ngModel)]=\"model.realName\" name=\"realName\" #realName=\"ngModel\">\n        <div [hidden]=\"realName.valid || realName.pristine\" class=\"alert alert-danger\">\n          Name is required\n        </div>\n      </div>\n\n      <div class=\"form-group row\"> \n        <label for=\"s3ImageUrl\" class=\"col-sm-2 col-form-label\">Image Url</label>\n        <input type=\"text\" [(ngModel)]=\"model.s3ImageUrl\" name=\"s3ImageUrl\" #s3ImageUrl=\"ngModel\">\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"uuid\" class=\"col-sm-2 col-form-label\">UUID</label>\n        <input type=\"text\" required minlength=\"4\" [(ngModel)]=\"model.uuid\" name=\"uuid\" #uuid=\"ngModel\">\n        <div [hidden]=\"uuid.valid || uuid.pristine\" class=\"alert alert-danger\">\n          UUID is required\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"powers\" class=\"col-sm-2 col-form-label\">Powers</label>\n        <input type=\"text\" [(ngModel)]=\"model.powers\" name=\"powers\" #powers=\"ngModel\">\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"heroName\" class=\"col-sm-2 col-form-label\">Hero Name</label>\n        <input type=\"text\" required minlength=\"4\" [(ngModel)]=\"model.heroName\" name=\"heroName\" #heroName=\"ngModel\">\n        <div [hidden]=\"heroName.valid || heroName.pristine\" class=\"alert alert-danger\">\n          Hero Name is required\n        </div>\n      </div>\n\n      <fieldset class=\"form-group\">\n      <div class=\"row\">\n        <label class=\"col-sm-2 col-form-label \">Signed Accord</label>\n        <div class=\"col-sm-10\">\n            <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" id=\"signedAccordsYes\" name=\"signedAccords\" [(ngModel)]=\"model.signedAccords\"  #signedAccords=\"ngModel\" value=\"Yes\">\n            <label class=\"form-check-label\" for=\"signedAccordsYes\">Yes</label>\n            </div>\n            <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"radio\" id=\"signedAccordsNo\" name=\"signedAccords\" [(ngModel)]=\"model.signedAccords\"  #signedAccords=\"ngModel\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"signedAccordsNo\">No</label>\n            </div>\n        </div>\n      </div>\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n    <div class=\"row\">\n        <label for=\"groups\" class=\"col-sm-2 col-form-label\">Groups</label>\n        <div class=\"col-sm-10\">\n             <div class=\"form-check\" *ngFor=\"let group of groups;let i = index\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"group.name\" [checked]=\"group.checked\" (change)=\"group.checked = !group.checked\" id=\"groups_{{i}}\">\n                  <label class=\"form-check-label\" for=\"groups_{{i}}\">{{group.value}}</label>\n            </div>\n        </div>\n    </div>\n    </fieldset>\n\n      <div class=\"form-group row\">\n      <button type=\"submit\" [disabled]=\"!heroForm.form.valid\" class=\"btn btn-primary\">\n          <div *ngIf=\"isLoaded;then content else other_content\">Something is Wrong</div>\n      </button>\n      <ng-template #content>Update Hero</ng-template>\n      <ng-template #other_content>Create Hero</ng-template> &nbsp;&nbsp;\n      <div *ngIf=\"isLoaded;\"><button (click)=\"addSkill(model)\" class=\"btn btn-secondary\"> Add Skill</button></div>\n      </div>\n\n      <div *ngIf=\"lastModifiedHero != undefined;\" class=\"form-group row\">\n          <label for=\"lastHero\">Last Modified Hero:{{lastModifiedHero.realName }}\n          </label>\n        </div>\n  \n    </form>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/heroform/heroform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroformComponent; });
/* unused harmony export HeroGroup */
/* unused harmony export HeroGroupEnum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("../../../../../src/app/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroformComponent = /** @class */ (function () {
    function HeroformComponent(heroService, router, route, store) {
        this.heroService = heroService;
        this.router = router;
        this.route = route;
        this.store = store;
        this.groups = [];
        this.isLoaded = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */]();
    }
    HeroformComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateGroups();
        console.log(this.model);
        this.heroService.addHero(this.model).subscribe(function (data) {
            _this.store.dispatch({ type: "Update", payload: _this.model });
            _this.router.navigateByUrl('/heros');
        });
    };
    HeroformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            var uuid = params.get('id');
            if (uuid != null) {
                _this.heroService.getHero(uuid).subscribe(function (hero) {
                    _this.model = hero;
                    _this.isLoaded = true;
                    _this.initGroups(hero);
                });
            }
            else {
                _this.initGroups(_this.model);
            }
        });
        this.store.subscribe(function (state) {
            _this.lastModifiedHero = state.lastHero;
            if (_this.lastModifiedHero != undefined) {
                console.log("last modified hero:" + _this.lastModifiedHero.realName);
            }
            else {
                console.log("last modified hero is empty");
            }
        });
    };
    HeroformComponent.prototype.initGroups = function (hero) {
        var keys = Object.keys(HeroGroupEnum);
        this.groups = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var group = new HeroGroup();
            group.name = key;
            group.value = HeroGroupEnum[key];
            if (hero != undefined && hero.groups != undefined) {
                if (hero.groups.indexOf(key) >= 0) {
                    group.checked = true;
                }
                else {
                    group.checked = false;
                }
            }
            this.groups.push(group);
        }
    };
    HeroformComponent.prototype.updateGroups = function () {
        this.model.groups = [];
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.checked == true) {
                this.model.groups.push(group.name);
            }
        }
    };
    HeroformComponent.prototype.addSkill = function (hero) {
        this.router.navigateByUrl('/skill/' + hero.uuid);
    };
    HeroformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroform',
            template: __webpack_require__("../../../../../src/app/heroform/heroform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroform/heroform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
    ], HeroformComponent);
    return HeroformComponent;
}());

var HeroGroup = /** @class */ (function () {
    function HeroGroup(checked, name, value) {
        this.checked = checked;
        this.name = name;
        this.value = value;
    }
    ;
    return HeroGroup;
}());

var HeroGroupEnum;
(function (HeroGroupEnum) {
    HeroGroupEnum["avenger"] = "Avengers";
    HeroGroupEnum["xmen"] = "X-men";
    HeroGroupEnum["local"] = "Local";
    HeroGroupEnum["columbus"] = "Columbus  Heros";
})(HeroGroupEnum || (HeroGroupEnum = {}));


/***/ }),

/***/ "../../../../../src/app/heroskill/heroskill.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroskill/heroskill.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/skins/common/shared.css?207\" type=\"text/css\" media=\"screen\">\n<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/skins/common/commonPrint.css?207\" type=\"text/css\" media=\"print\">\n<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/skins/marvel/styles.css\" type=\"text/css\">\n<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/skins/marvel/screen.css\" type=\"text/css\">\n<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/skins/marvel/mu_wiki.css\" type=\"text/css\">\n<link rel=\"stylesheet\" href=\"http://marvel.com/universe3zx/extensions/FlaggedRevs/flaggedrevs.css?56\" type=\"text/css\">\n\n<div class=\"module-body powergrid clear\" style=\"width:320px;\">\n    <div\n        id=\"powergrid-holder\"\n        style=\"visibility: visible;width:300px;\"\n    >\n        <div\n            class=\"powergrid-row\"\n            style=\"border-top:none;\"\n        >\n            <div\n                class=\"p-left\"\n                style=\"font-size:15px;\"\n            >\n                <p>POWERGRID</p>\n            </div>\n            <div class=\"p-right p-top\">1</div>\n            <div class=\"p-right p-top\">2</div>\n            <div class=\"p-right p-top\">3</div>\n            <div class=\"p-right p-top\">4</div>\n            <div class=\"p-right p-top\">5</div>\n            <div class=\"p-right p-top\">6</div>\n            <div\n                class=\"p-right p-top\"\n                style=\"border-right:none;\"\n            >\n                7\n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>durability</p>\n            </div>\n            <div\n                style=\"width:84px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>energy</p>\n            </div>\n            <div\n                style=\"width:21px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>fighting</p>\n            </div>\n            <div\n                style=\"width:84px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>intelligence</p>\n            </div>\n            <div\n                style=\"width:42px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>speed</p>\n            </div>\n            <div\n                style=\"width:63px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n        <div class=\"powergrid-row\">\n            <div class=\"p-left\">\n                <p>strength</p>\n            </div>\n            <div\n                style=\"width:84px;\"\n                class=\"p-right ratingvalue\"\n            > \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroskill/heroskill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroskillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_abilities__ = __webpack_require__("../../../../../src/app/hero.abilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroskillComponent = /** @class */ (function () {
    function HeroskillComponent(route, router) {
        this.route = route;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero_abilities__["a" /* HeroAbilities */](0, 0, 0, 0, 0, 0);
    }
    HeroskillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.heroUuid = params.get('id');
        });
    };
    HeroskillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroskill',
            template: __webpack_require__("../../../../../src/app/heroskill/heroskill.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroskill/heroskill.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeroskillComponent);
    return HeroskillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/hero.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroReducer; });
var heroReducer = function (state, action) {
    switch (action.type) {
        case 'Update':
            return action.payload;
        case 'Delete':
            return action.payload;
        default:
    }
    return state;
};


/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroform_heroform_component__ = __webpack_require__("../../../../../src/app/heroform/heroform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroskill_heroskill_component__ = __webpack_require__("../../../../../src/app/heroskill/heroskill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'heros', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'hero/:id', component: __WEBPACK_IMPORTED_MODULE_4__heroform_heroform_component__["a" /* HeroformComponent */] },
    { path: 'herocreate', component: __WEBPACK_IMPORTED_MODULE_4__heroform_heroform_component__["a" /* HeroformComponent */] },
    { path: 'skill/:id', component: __WEBPACK_IMPORTED_MODULE_5__heroskill_heroskill_component__["a" /* HeroskillComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map