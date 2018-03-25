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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
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



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'spring boot and angular 4 secure authentication';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_movies_movies_list_movies_list_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-list/movies-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_error_error_component__ = __webpack_require__("../../../../../src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_movies_movie_item_movie_item_component__ = __webpack_require__("../../../../../src/app/components/movies/movie-item/movie-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_movies_movie_service__ = __webpack_require__("../../../../../src/app/services/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_interceptors_inteceptor__ = __webpack_require__("../../../../../src/app/services/interceptors/inteceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_token_storage__ = __webpack_require__("../../../../../src/app/services/auth/token.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dialogs_add_movie_dialog_add_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_tvshows_tv_show_item_tv_show_item_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tvshows_tv_show_list_tv_show_list_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_movies_movies_page_movies_page_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_sidenav_service_service__ = __webpack_require__("../../../../../src/app/services/sidenav-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_tvshows_tvshows_page_tvshows_page_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_omdb_omdb_service_service__ = __webpack_require__("../../../../../src/app/services/omdb/omdb-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_error_error_snackbar_service_service__ = __webpack_require__("../../../../../src/app/services/error/error-snackbar-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_movies_movies_list_movies_list_component__["a" /* MoviesListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_movies_movie_item_movie_item_component__["a" /* MovieItemComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_tvshows_tv_show_item_tv_show_item_component__["a" /* TvShowItemComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_tvshows_tv_show_list_tv_show_list_component__["a" /* TvShowListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_movies_movies_page_movies_page_component__["a" /* MoviesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_tvshows_tvshows_page_tvshows_page_component__["a" /* TvshowsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_carousel__["a" /* NgxCarouselModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressSpinnerModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */], __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */]
            ],
            // exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_33__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_token_storage__["a" /* TokenStorage */], __WEBPACK_IMPORTED_MODULE_28__services_sidenav_service_service__["a" /* SidenavService */], __WEBPACK_IMPORTED_MODULE_31__services_omdb_omdb_service_service__["a" /* OmdbService */], __WEBPACK_IMPORTED_MODULE_32__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */],
                { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__services_interceptors_inteceptor__["a" /* Interceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DIALOG_DEFAULT_OPTIONS */], useValue: { hasBackdrop: false } }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_movies_movies_page_movies_page_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tvshows_tvshows_page_tvshows_page_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.ts");






var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_4__components_movies_movies_page_movies_page_component__["a" /* MoviesPageComponent */], },
    { path: 'tvshows', component: __WEBPACK_IMPORTED_MODULE_5__components_tvshows_tvshows_page_tvshows_page_component__["a" /* TvshowsPageComponent */], },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    // otherwise redirect to profile
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_auth_guard_service__["a" /* AuthGuardService */]] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/animations/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SlideInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorRotate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var SlideInOutAnimation = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            'max-height': '1000px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'visibility': 'visible'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'max-height': '1000px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'opacity': '1'
                }))
            ])]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('in => out', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'max-height': '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('700ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    'visibility': 'hidden'
                }))
            ])])
    ]),
];
var IndicatorRotate = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('indicatorRotate', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'rotate(0deg)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'rotate(180deg)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ])
];


/***/ }),

/***/ "../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add movie</h2>\n<mat-dialog-content class=\"full-width-input\">\n  <form>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Movie name\" [(ngModel)]=\"newMovie.name\" name=\"name\" required>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" min=\"0\" max=\"2150\" maxLength=\"4\" placeholder=\"Year\" [(ngModel)]=\"newMovie.year\" name=\"year\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Length\" [(ngModel)]=\"newMovie.length\" name=\"length\">\n      <span matSuffix>minutes</span>\n      <!--<mat-hint>Length ot he movie in minutes.</mat-hint>-->\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Genre\" [(ngModel)]=\"newMovie.genre\" name=\"genre\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Imdb rating\" [(ngModel)]=\"newMovie.imdbRating\" name=\"imdbRating\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Actors\" [(ngModel)]=\"newMovie.actors\" name=\"actors\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Directors\" [(ngModel)]=\"newMovie.directors\" name=\"directors\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Country\" [(ngModel)]=\"newMovie.country\" name=\"country\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Poster URL\" [(ngModel)]=\"newMovie.posterUrl\" name=\"posterUrl\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Description\" [(ngModel)]=\"newMovie.description\"\n                matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"description\"></textarea>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-raised-button color=\"primary\" mat-dialog-close>Cancel</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"newMovie\">Save</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMovieDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_movie__ = __webpack_require__("../../../../../src/app/model/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMovieDialogComponent = (function () {
    //noinspection JSAnnotator
    function AddMovieDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.newMovie = new __WEBPACK_IMPORTED_MODULE_1__model_movie__["a" /* Movie */]();
    }
    AddMovieDialogComponent.prototype.ngOnInit = function () {
    };
    AddMovieDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-movie-dialog',
            template: __webpack_require__("../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */]])
    ], AddMovieDialogComponent);
    return AddMovieDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Error</h2>\n<mat-dialog-content class=\"error\">{{error.message}}</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Ok</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_error__ = __webpack_require__("../../../../../src/app/model/error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(exceptionData) {
        this.exceptionData = exceptionData;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
        console.log(JSON.stringify(this.exceptionData));
    };
    ErrorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-dialog',
            template: __webpack_require__("../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_error__["a" /* Error */]])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 mat-dialog-title>Get movie</h2>\n<mat-dialog-content class=\"full-width-input\">\n  <form>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"omdbTitle\" name=\"omdbTitle\" required>\n    </mat-form-field>\n  </form>\n\n  <div *ngIf=\"omdbResult\">\n    <p>\n      {{omdbResult | json}}\n    </p>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-raised-button color=\"primary\" (click)=\"getOmdbMovie(omdbTitle)\">Get details</button>\n  <button mat-raised-button color=\"primary\" *ngIf=\"omdbResult\" mat-dialog-close (click)=\"storeOmdbMovie()\">Save</button>\n  <button mat-raised-button color=\"primary\" mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetOmdbMovieDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_omdb_omdb_service_service__ = __webpack_require__("../../../../../src/app/services/omdb/omdb-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_error_error_snackbar_service_service__ = __webpack_require__("../../../../../src/app/services/error/error-snackbar-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetOmdbMovieDialogComponent = (function () {
    function GetOmdbMovieDialogComponent(omdbService, messageSnackBarService) {
        this.omdbService = omdbService;
        this.messageSnackBarService = messageSnackBarService;
    }
    GetOmdbMovieDialogComponent.prototype.ngOnInit = function () {
    };
    GetOmdbMovieDialogComponent.prototype.getOmdbMovie = function (title) {
        var _this = this;
        this.omdbService.getOmdbMovie(title).subscribe(function (result) {
            if (result) {
                _this.omdbResult = result;
            }
        });
    };
    GetOmdbMovieDialogComponent.prototype.storeOmdbMovie = function () {
        var _this = this;
        this.omdbService.storeOmdbMovie(this.omdbResult).subscribe(function (result) {
            if (result) {
                _this.messageSnackBarService.openMessageSnackBar("Saving successfully. Result: " + result);
            }
            else {
                _this.messageSnackBarService.openMessageSnackBar("Saving failed. Result: " + result);
            }
        }, function (err) {
            _this.messageSnackBarService.openMessageSnackBar("Error: " + err.message);
        });
    };
    GetOmdbMovieDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-omdb-movie-dialog',
            template: __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_omdb_omdb_service_service__["a" /* OmdbService */], __WEBPACK_IMPORTED_MODULE_2__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], GetOmdbMovieDialogComponent);
    return GetOmdbMovieDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/components/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error/error.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <header class=\"jumbotron my-4\">\n    <h1 class=\"display-3\">Welcome to your app </h1>\n  </header>\n</div>\n\n\n<!-- Movies -->\n<h2>Movies</h2>\n<app-movies-list [movies]=\"allMovies\"></app-movies-list>\n\n<mat-divider></mat-divider>\n\n<!-- TV shows-->\n<h2>TV Shows</h2>\n<app-tv-show-list [tvShows]=\"allTvShows\"></app-tv-show-list>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_movie_service__ = __webpack_require__("../../../../../src/app/services/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(movieService, tvShowsService, dialog) {
        this.movieService = movieService;
        this.tvShowsService = tvShowsService;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getAllMovies().subscribe(function (allMovies) {
            _this.allMovies = allMovies;
        });
        this.tvShowsService.getAllTvShows().subscribe(function (data) {
            _this.allTvShows = data;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_4__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n.signin-content {\n  padding: 60px 1rem;\n}\n.full-width-input {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"signin-content\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"full-width-input\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <span><small>{{loginError}}</small></span>\n          </tr>\n        </table>\n      </form>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" type=\"submit\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_token_storage__ = __webpack_require__("../../../../../src/app/services/auth/token.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authService, token) {
        this.router = router;
        this.authService = authService;
        this.token = token;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.attemptAuth(this.username, this.password).subscribe(function (data) {
            _this.token.saveToken(data.token);
            _this.router.navigate(['movies']);
            _this.authService.setLoggedIn(true);
        }, function (error) {
            console.log("login failed: " + error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_token_storage__["a" /* TokenStorage */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movie-item/movie-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zoom:hover {\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.move-item {\n  margin-top: 20px;\n  padding-top: 20px;\n}\n\nmat-card-content {\n  width: calc(100% - 70px);\n  height: calc(100% - 70px);\n}\n\n.mat-tooltip {\n  font-size: 120%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-item/movie-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4 movie-item\" [ngClass]=\"{'zoom': !expanded }\">\n  <mat-card-title>\n    <span matTooltip=\"{{movie.name}}\" matTooltipShowDelay=\"1500\">\n      <a href=\"javascript:void(0);\" (click)=\"toggleShowDiv()\"><img mat-card-image src={{movie.posterUrl}} height=\"300px\"></a>\n    </span>\n  </mat-card-title>\n\n  <mat-card-content [@slideInOut]=\"animationState\">\n    <h2>{{movie.name}}</h2>\n    <h3>Year:</h3><p>{{movie.year}}</p>\n    <h3>Length:</h3><p>{{movie.length}}</p>\n    <h3>IMDB rating:</h3><p>{{movie.imdbRating}}</p>\n    <h3>Director:</h3><p>{{movie.directors}}</p>\n    <h3>Actors:</h3><p>{{movie.actors}}</p>\n    <h3>Country:</h3><p>{{movie.country}}</p>\n    <h3>Production:</h3><p>{{movie.production}}</p>\n    <h3>Genre:</h3><p>{{movie.genre}}</p>\n    <h3>Description:</h3><div>{{movie.description}}</div>\n  </mat-card-content>\n\n  <mat-card-actions align=\"end\">\n    <button mat-icon-button *ngIf=\"expanded\" (click)=\"deleteMovie()\"><mat-icon>delete</mat-icon></button>\n    <button mat-icon-button (click)=\"toggleShowDiv()\" [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\"><mat-icon>expand_more</mat-icon></button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-item/movie-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_movie__ = __webpack_require__("../../../../../src/app/model/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movies_movie_service__ = __webpack_require__("../../../../../src/app/services/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_error_error_snackbar_service_service__ = __webpack_require__("../../../../../src/app/services/error/error-snackbar-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieItemComponent = (function () {
    function MovieItemComponent(movieService, messageSnackBar) {
        this.movieService = movieService;
        this.messageSnackBar = messageSnackBar;
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.animationState = 'out';
        this.expanded = false;
    }
    MovieItemComponent.prototype.toggleShowDiv = function () {
        this.animationState = this.animationState === 'in' ? 'out' : 'in';
        this.expanded = !this.expanded;
    };
    MovieItemComponent.prototype.ngOnInit = function () {
    };
    MovieItemComponent.prototype.deleteMovie = function () {
        var _this = this;
        this.movieService.deleteMovie(this.movie.id).subscribe(function (result) {
            _this.messageSnackBar.openMessageSnackBar("Movie " + _this.movie.name + " deleted successfully.");
            _this.movieDeleteEvent.next(_this.movie);
        }, function (error) {
            _this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MovieItemComponent.prototype, "movieDeleteEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_movie__["a" /* Movie */])
    ], MovieItemComponent.prototype, "movie", void 0);
    MovieItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-item',
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_animations__["b" /* SlideInOutAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* IndicatorRotate */]],
            template: __webpack_require__("../../../../../src/app/components/movies/movie-item/movie-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movie-item/movie-item.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_4__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.leftRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*left: 0;*/\n/*color: red;*/\n/*}*/\n\n/*.rightRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*right: 0;*/\n/*color: red;*/\n/*}*/\n.leftRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  left: 10px;\n  color: red;\n  opacity: 0.5;\n  max-height: 300px;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.rightRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  right: 10px;\n  color: red;\n  opacity: 0.5;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.leftRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n.rightRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n/*.ngxcarouselPoint {*/\n/*list-style-type: none;*/\n/*text-align: center;*/\n/*padding: 12px;*/\n/*margin: 0;*/\n/*white-space: nowrap;*/\n/*overflow: auto;*/\n/*box-sizing: border-box;*/\n/*}*/\n/*.ngxcarouselPoint li {*/\n/*display: inline-block;*/\n/*border-radius: 50%;*/\n/*border: 2px solid rgba(0, 0, 0, 0.55);*/\n/*padding: 4px;*/\n/*margin: 0 3px;*/\n/*transition-timing-function: cubic-bezier(.17, .67, .83, .67);*/\n/*transition: .4s;*/\n/*}*/\n/*.ngxcarouselPoint li.active {*/\n/*background: #6b6b6b;*/\n/*transform: scale(1.2);*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ngx-carousel [inputs]=\"carouselTile\">\n  <ngx-tile NgxCarouselItem *ngFor=\"let movie of movies\">\n    <app-movie-item [movie]=\"movie\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movie-item>\n  </ngx-tile>\n\n  <button NgxCarouselPrev class=\"leftRs\"><i class=\"fa fa-angle-left fa-4x\"></i></button>\n  <button NgxCarouselNext class=\"rightRs\"><i class=\"fa fa-angle-right fa-4x\"></i></button>\n</ngx-carousel>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoviesListComponent = (function () {
    function MoviesListComponent() {
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        //noinspection TypeScriptValidateTypes
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 4, lg: 6, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
            },
            load: 2,
            touch: true,
            loop: true,
            easing: 'ease-in'
        };
    };
    MoviesListComponent.prototype.deleteMovie = function (movie) {
        this.movieDeleteEvent.next(movie);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MoviesListComponent.prototype, "movies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MoviesListComponent.prototype, "movieDeleteEvent", void 0);
    MoviesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies-list',
            template: __webpack_require__("../../../../../src/app/components/movies/movies-list/movies-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies-list/movies-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-page/movies-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.example-container {\n  min-height: 400px;\n}\n\n.rightAlignment {\n  position: absolute;\n  right: 10px;\n}\n\n.nested-list-item {\n  padding-left: 10px;\n  font-size: 80%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  /*overflow: show;*/\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-page/movies-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\">\n  <mat-spinner *ngIf=\"showSpinner\" style=\"margin:0 auto;\"></mat-spinner>\n</div>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sideNav mode=\"over\" opened=\"false\" class=\"example-container\">\n    <mat-toolbar color=\"primary\"><span>Sidenav toolbar</span></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item (click)=\"omdbMenuExpanded = !omdbMenuExpanded\">OMDB\n        <mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"omdbMenuExpanded ? 'expanded': 'collapsed'\">expand_more\n        </mat-icon>\n      </a>\n      <mat-nav-list *ngIf=\"omdbMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openGetOmdbMovieDialog()\">Get movie</a>\n        <a mat-list-item class=\"nested-list-item\" (click)=\"importMovies()\">Import movies</a>\n      </mat-nav-list>\n\n      <a mat-list-item (click)=\"moviesMenuExpanded = !moviesMenuExpanded\">Movies\n        <mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"moviesMenuExpanded ? 'expanded': 'collapsed'\">expand_more\n        </mat-icon>\n      </a>\n      <mat-nav-list *ngIf=\"moviesMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openAddMovieDialog()\">Add movie</a>\n      </mat-nav-list>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <header class=\"jumbotron my-4\">\n      <h1 class=\"display-3\">Movies</h1>\n    </header>\n    <mat-toolbar class=\"genre-toolbar\">\n      <mat-checkbox *ngFor=\"let genre of ALL_GENRES\"\n                    value=\"{{genre}}\"\n                    [checked]=\"true\"\n                    (change)=\"genresChanged(genre, $event)\">\n        {{genre}}\n      </mat-checkbox>\n    </mat-toolbar>\n\n    <div *ngFor=\"let genre of genresToShow\">\n      <div *ngIf=\"moviesByGenre[genre]\">\n        <h2>{{genre}}</h2>\n        <app-movies-list [movies]=\"moviesByGenre[genre]\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-list>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-page/movies-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_add_movie_dialog_add_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movies_movie_service__ = __webpack_require__("../../../../../src/app/services/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__ = __webpack_require__("../../../../../src/app/services/sidenav-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MoviesPageComponent = (function () {
    function MoviesPageComponent(movieService, dialog, sideNavService) {
        this.movieService = movieService;
        this.dialog = dialog;
        this.sideNavService = sideNavService;
        this.genresToShow = [];
        this.moviesByGenre = {};
        this.ALL_GENRES = [
            "Action",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Horror",
            "Music",
            "Mystery",
            "Sci-Fi",
            "Sport",
            "Thriller",
        ];
        this.genresMap = {
            "Action": true,
            "Adventure": true,
            "Animation": true,
            "Biography": true,
            "Comedy": true,
            "Crime": true,
            "Documentary": true,
            "Drama": true,
            "Family": true,
            "Fantasy": true,
            "Horror": true,
            "Music": true,
            "Mystery": true,
            "Sci-Fi": true,
            "Sport": true,
            "Thriller": true,
        };
    }
    MoviesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.sideNavService.setSideNav(this.movieSideNav);
        this.movieService.getAllMovies().subscribe(function (data) {
            _this.allMovies = data;
            _this.updateMoviesLists();
            _this.showSpinner = false;
        });
    };
    MoviesPageComponent.prototype.updateMoviesLists = function () {
        this.genresToShow = [];
        var tmpMoviesByGenre = [];
        for (var _i = 0, _a = this.ALL_GENRES; _i < _a.length; _i++) {
            var genre = _a[_i];
            if (this.genresMap[genre]) {
                this.genresToShow.push(genre);
                tmpMoviesByGenre = this.getMoviesByGenre(genre);
                if (tmpMoviesByGenre.length != 0)
                    this.moviesByGenre[genre] = tmpMoviesByGenre;
            }
        }
    };
    MoviesPageComponent.prototype.getMoviesByGenre = function (genre) {
        return this.allMovies.filter(function (movie) { return movie.genre.toLowerCase().includes(genre.toLowerCase()); });
    };
    MoviesPageComponent.prototype.openAddMovieDialog = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */], {
            height: 'auto',
            width: '500px',
            data: { newMovie: this.newMovie }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.newMovie = result;
            if (_this.newMovie) {
                _this.movieService.addMovie(_this.newMovie);
            }
        });
    };
    MoviesPageComponent.prototype.openGetOmdbMovieDialog = function () {
        //noinspection TypeScriptUnresolvedFunction
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */], {
            height: 'auto',
            width: '500px',
        });
    };
    MoviesPageComponent.prototype.importMovies = function () {
        this.showSpinner = true;
        this.movieService.importMovies();
        this.showSpinner = false;
        window.location.reload();
    };
    MoviesPageComponent.prototype.deleteMovie = function (movie) {
        // delete movie from list
        var index = this.allMovies.indexOf(movie);
        if (index > -1) {
            this.allMovies.splice(index, 1);
            this.updateMoviesLists();
        }
        console.log("Deleting event in movies page." + index);
    };
    MoviesPageComponent.prototype.genresChanged = function (genre, event) {
        var checked = event.source.checked;
        this.genresMap[genre] = checked;
        if (this.genresToShow.includes(genre)) {
            if (!checked) {
                var index = this.genresToShow.indexOf(genre);
                if (index > -1) {
                    this.genresToShow.splice(index, 1);
                }
            }
        }
        else {
            if (checked) {
                this.genresToShow.push(genre);
            }
        }
        this.genresToShow.sort();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sideNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSidenav */])
    ], MoviesPageComponent.prototype, "movieSideNav", void 0);
    MoviesPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies-page',
            template: __webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_5__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__["a" /* SidenavService */]])
    ], MoviesPageComponent);
    return MoviesPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.main-toolbar {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\" *ngIf=\"router.url != '/login'\" class=\"main-toolbar\">\n  <span>MMDB</span>\n  <button mat-icon-button (click)=\"toggleSideNav()\" *ngIf=\"router.url != '/home'\"><mat-icon>menu</mat-icon></button>\n  <button mat-button routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n  <button mat-button routerLink=\"/movies\" routerLinkActive=\"active\">Movies</button>\n  <button mat-button routerLink=\"/tvshows\" routerLinkActive=\"active\">Tv Shows</button>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <button mat-button routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logOut()\"><mat-icon>power</mat-icon><span>Logout</span></button>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_token_storage__ = __webpack_require__("../../../../../src/app/services/auth/token.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__ = __webpack_require__("../../../../../src/app/services/sidenav-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = (function () {
    function NavBarComponent(token, router, authService, sideNavService) {
        this.token = token;
        this.router = router;
        this.authService = authService;
        this.sideNavService = sideNavService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logOut = function () {
        this.token.signOut();
        this.authService.setLoggedIn(false);
    };
    NavBarComponent.prototype.toggleSideNav = function () {
        this.sideNavService.toggleSideNav();
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_token_storage__["a" /* TokenStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__["a" /* SidenavService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4 movie-item\" [ngClass]=\"{'zoom': !expanded }\">\n  <mat-card-title>\n    <span matTooltip=\"{{tvShow.name}}\" matTooltipShowDelay=\"1500\">\n      <a href=\"javascript:void(0);\" (click)=\"toggleShowDiv()\"><img mat-card-image src={{tvShow.posterUrl}} height=\"300px\"></a>\n    </span>\n  </mat-card-title>\n\n  <mat-card-content [@slideInOut]=\"animationState\">\n    <h2>{{tvShow.name}}</h2>\n    <h3>Year:</h3><p>{{tvShow.year}}</p>\n    <h3>Length:</h3><p>{{tvShow.length}}</p>\n    <h3>IMDB rating:</h3><p>{{tvShow.imdbRating}}</p>\n    <h3>Director:</h3><p>{{tvShow.directors}}</p>\n    <h3>Actors:</h3><p>{{tvShow.actors}}</p>\n    <h3>Country:</h3><p>{{tvShow.country}}</p>\n    <h3>Production:</h3><p>{{tvShow.production}}</p>\n    <h3>Genre:</h3><p>{{tvShow.genre}}</p>\n    <h3>Description:</h3><div>{{tvShow.description}}</div>\n  </mat-card-content>\n\n  <mat-card-actions align=\"end\">\n    <button mat-icon-button *ngIf=\"expanded\" (click)=\"deleteTvShow()\"><mat-icon>delete</mat-icon></button>\n    <button mat-icon-button (click)=\"toggleShowDiv()\" [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\"><mat-icon>expand_more</mat-icon></button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_tvshow__ = __webpack_require__("../../../../../src/app/model/tvshow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_error_snackbar_service_service__ = __webpack_require__("../../../../../src/app/services/error/error-snackbar-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowItemComponent = (function () {
    function TvShowItemComponent(tvShowService, messageSnackBar) {
        this.tvShowService = tvShowService;
        this.messageSnackBar = messageSnackBar;
        this.tvShowDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.animationState = 'out';
        this.expanded = false;
    }
    TvShowItemComponent.prototype.ngOnInit = function () {
    };
    TvShowItemComponent.prototype.toggleShowDiv = function () {
        this.animationState = this.animationState === 'in' ? 'out' : 'in';
        this.expanded = !this.expanded;
    };
    TvShowItemComponent.prototype.deleteTvShow = function () {
        var _this = this;
        this.tvShowService.deleteTvShow(this.tvShow.id).subscribe(function (result) {
            _this.messageSnackBar.openMessageSnackBar("TV show " + _this.tvShow.name + " deleted successfully.");
            _this.tvShowDeleteEvent.next(_this.tvShow);
        }, function (error) {
            _this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TvShowItemComponent.prototype, "tvShowDeleteEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_tvshow__["a" /* TvShow */])
    ], TvShowItemComponent.prototype, "tvShow", void 0);
    TvShowItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tv-show-item',
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_animations__["b" /* SlideInOutAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* IndicatorRotate */]],
            template: __webpack_require__("../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tvshows/tv-show-item/tv-show-item.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_3__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], TvShowItemComponent);
    return TvShowItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.leftRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*left: 0;*/\n/*color: red;*/\n/*}*/\n\n/*.rightRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*right: 0;*/\n/*color: red;*/\n/*}*/\n.leftRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  left: 10px;\n  color: red;\n  opacity: 0.5;\n  max-height: 300px;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.rightRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  right: 10px;\n  color: red;\n  opacity: 0.5;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.leftRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n.rightRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n/*.ngxcarouselPoint {*/\n/*list-style-type: none;*/\n/*text-align: center;*/\n/*padding: 12px;*/\n/*margin: 0;*/\n/*white-space: nowrap;*/\n/*overflow: auto;*/\n/*box-sizing: border-box;*/\n/*}*/\n/*.ngxcarouselPoint li {*/\n/*display: inline-block;*/\n/*border-radius: 50%;*/\n/*border: 2px solid rgba(0, 0, 0, 0.55);*/\n/*padding: 4px;*/\n/*margin: 0 3px;*/\n/*transition-timing-function: cubic-bezier(.17, .67, .83, .67);*/\n/*transition: .4s;*/\n/*}*/\n/*.ngxcarouselPoint li.active {*/\n/*background: #6b6b6b;*/\n/*transform: scale(1.2);*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ngx-carousel [inputs]=\"carouselTile\">\n  <ngx-tile NgxCarouselItem *ngFor=\"let tvShow of tvShows\">\n    <app-tv-show-item [tvShow]=\"tvShow\" (tvShowDeleteEvent)=\"deleteTvShow($event)\"></app-tv-show-item>\n  </ngx-tile>\n\n  <button NgxCarouselPrev class=\"leftRs\"><i class=\"fa fa-angle-left fa-4x\"></i></button>\n  <button NgxCarouselNext class=\"rightRs\"><i class=\"fa fa-angle-right fa-4x\"></i></button>\n</ngx-carousel>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvShowListComponent = (function () {
    function TvShowListComponent() {
        this.tvShowDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TvShowListComponent.prototype.ngOnInit = function () {
        //noinspection TypeScriptValidateTypes
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 4, lg: 6, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
            },
            load: 2,
            touch: true,
            loop: true,
            easing: 'ease-in'
        };
    };
    TvShowListComponent.prototype.deleteTvShow = function (tvShow) {
        this.tvShowDeleteEvent.next(tvShow);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TvShowListComponent.prototype, "tvShows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TvShowListComponent.prototype, "tvShowDeleteEvent", void 0);
    TvShowListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tv-show-list',
            template: __webpack_require__("../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tvshows/tv-show-list/tv-show-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], TvShowListComponent);
    return TvShowListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.example-container {\n  min-height: 400px;\n}\n\n.rightAlignment {\n  position: absolute;\n  right: 10px;\n}\n\n.nested-list-item {\n  padding-left: 10px;\n  font-size: 80%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\">\n  <mat-spinner *ngIf=\"showSpinner\" style=\"margin:0 auto;\"></mat-spinner>\n</div>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sideNav mode=\"over\" opened=\"false\" class=\"example-container\">\n    <mat-toolbar color=\"primary\"><span>Sidenav toolbar</span></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item (click)=\"omdbMenuExpanded = !omdbMenuExpanded\">OMDB<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"omdbMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"omdbMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openGetOmdbTvShowDialog()\">Get tvshow</a>\n        <a mat-list-item class=\"nested-list-item\" (click)=\"importTvShows()\">Import tvshows</a>\n      </mat-nav-list>\n\n      <a mat-list-item (click)=\"tvShowsMenuExpanded = !tvShowsMenuExpanded\">TV Shows<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"tvShowsMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"tvShowsMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openAddMovieDialog()\">Add movie</a>\n      </mat-nav-list>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <header class=\"jumbotron my-4\">\n      <h1 class=\"display-3\">TV Shows</h1>\n    </header>\n    <mat-toolbar class=\"genre-toolbar\">\n      <mat-checkbox *ngFor=\"let genre of ALL_GENRES\"\n                    value=\"{{genre}}\"\n                    [checked]=\"true\"\n                    (change)=\"genresChanged(genre, $event)\">\n        {{genre}}\n      </mat-checkbox>\n    </mat-toolbar>\n\n    <div *ngFor=\"let genre of genresToShow\">\n      <div *ngIf=\"tvShowsByGenre[genre]\">\n        <h2>{{genre}}</h2>\n        <app-tv-show-list [tvShows]=\"tvShowsByGenre[genre]\" (tvShowDeleteEvent)=\"deleteTvShow($event)\"></app-tv-show-list>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sidenav_service_service__ = __webpack_require__("../../../../../src/app/services/sidenav-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TvshowsPageComponent = (function () {
    function TvshowsPageComponent(tvShowsService, dialog, sideNavService) {
        this.tvShowsService = tvShowsService;
        this.dialog = dialog;
        this.sideNavService = sideNavService;
        this.genresToShow = [];
        this.tvShowsByGenre = {};
        this.ALL_GENRES = [
            "Action",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Horror",
            "Music",
            "Mystery",
            "Sci-Fi",
            "Sport",
            "Thriller",
        ];
        this.genresMap = {
            "Action": true,
            "Adventure": true,
            "Animation": true,
            "Biography": true,
            "Comedy": true,
            "Crime": true,
            "Documentary": true,
            "Drama": true,
            "Family": true,
            "Fantasy": true,
            "Horror": true,
            "Music": true,
            "Mystery": true,
            "Sci-Fi": true,
            "Sport": true,
            "Thriller": true,
        };
    }
    TvshowsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.sideNavService.setSideNav(this.tvShowSideNav);
        this.tvShowsService.getAllTvShows().subscribe(function (data) {
            _this.allTvShows = data;
            _this.updateTvShowsLists();
            _this.showSpinner = false;
        });
    };
    TvshowsPageComponent.prototype.updateTvShowsLists = function () {
        this.genresToShow = [];
        var tmpMoviesByGenre = [];
        for (var _i = 0, _a = this.ALL_GENRES; _i < _a.length; _i++) {
            var genre = _a[_i];
            if (this.genresMap[genre]) {
                this.genresToShow.push(genre);
                tmpMoviesByGenre = this.getTvShowsByGenre(genre);
                if (tmpMoviesByGenre.length != 0)
                    this.tvShowsByGenre[genre] = tmpMoviesByGenre;
            }
        }
    };
    TvshowsPageComponent.prototype.getTvShowsByGenre = function (genre) {
        return this.allTvShows.filter(function (tvShow) { return tvShow.genre.toLowerCase().includes(genre.toLowerCase()); });
    };
    // openAddMovieDialog() {
    //   //noinspection TypeScriptUnresolvedFunction
    //   let dialogRef = this.dialog.open(AddMovieDialogComponent, {
    //     height: 'auto',
    //     width: '500px',
    //     data : {newMovie: this.newTvShow}
    //   });
    //
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.newTvShow = result;
    //     if (this.newTvShow) {
    //       this.movieService.addTvShow(this.newTvShow);
    //     }
    //   });
    // }
    TvshowsPageComponent.prototype.openGetOmdbTvShowDialog = function () {
        //noinspection TypeScriptUnresolvedFunction
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */], {
            height: 'auto',
            width: '500px',
        });
    };
    TvshowsPageComponent.prototype.importTvShows = function () {
        this.showSpinner = true;
        this.tvShowsService.importTvShows().subscribe();
        this.showSpinner = false;
        window.location.reload();
    };
    TvshowsPageComponent.prototype.deleteTvShow = function (tvShow) {
        // delete tv show from list
        var index = this.allTvShows.indexOf(tvShow);
        if (index > -1) {
            this.allTvShows.splice(index, 1);
            this.updateTvShowsLists();
        }
        console.log("Deleting event in tv shows page." + index);
    };
    TvshowsPageComponent.prototype.genresChanged = function (genre, event) {
        var checked = event.source.checked;
        this.genresMap[genre] = checked;
        if (this.genresToShow.includes(genre)) {
            if (!checked) {
                var index = this.genresToShow.indexOf(genre);
                if (index > -1) {
                    this.genresToShow.splice(index, 1);
                }
            }
        }
        else {
            if (checked) {
                this.genresToShow.push(genre);
            }
        }
        this.genresToShow.sort();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sideNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSidenav */])
    ], TvshowsPageComponent.prototype, "tvShowSideNav", void 0);
    TvshowsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tvshows-page',
            template: __webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_sidenav_service_service__["a" /* SidenavService */]])
    ], TvshowsPageComponent);
    return TvshowsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/Urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urls; });
var Urls = (function () {
    function Urls() {
    }
    Urls.MOVIES_LIST = "John Wick  ,300 ,300 Rise of an Empire ,Alien vs Predator ,Aliens vs Predator Requiem,Assassin's Creed  ,Batman,Batman ,Batman Begins ,The Dark Knight ,The Dark Knight Rises ,Blade,Blade ,Blade II ,Blade III - Trinity ,Constantine ,Dracula Untold ,Fearless,Immortals ,IP Man ,Ip Man 2 ,IP Man 3 - The Final Fight,John Wick Chapter 2  ,Kingsman The Secret Service ,Law Abiding Citizen ,Mad Max Fury Road ,Ninja Assassin ,Predators ,Punisher War Zone ,Taken  Extended Cut,Teenage Mutant Ninja Turtles ,Teenage Mutant Ninja Turtles Out Of The Shadows  ,Teenage.Mutant.Ninja.Turtles,Teenage.Mutant.Ninja.Turtles.2,Teenage.Mutant.Ninja.Turtles.3,The A Team,The Chronicles of Riddick ,The Last Boy Scout ,The Magnificent Seven  ,The Raid 2  ,The Raid Redemption ,Troy ,Wanted ,American Pie  ,American Pie 2  ,Clerks 2 ,Clerks THEATRICAL  ,Deathgasm  ,Fack ju Gothe - 2013,Horrible Bosses 2 ,Sausage.Party,Ted.2,The Edge Of Seventeen  ,The Waterboy ,The Wolf of Wall Street ,Reign Of Fire ,The.Harry.Potter.Movies,Lord of the rings The.Fellowship.of.the.Ring,Lord of the rings The.Two.Towers,Lord of the rings The.Return.of.the.King, Twilight 1, Twilight 2, Twilight 3, Twilight 4,Underworld,Underworld - Extended Edition ,Underworld - Rise of the Lycans ,Underworld Awakening  ,Underworld Evolution ,Warcraft  ,Iron Man 1,Iron Man 2,Iron.Man.3,Man of Steel ,Spider Man Trilogy ,Spiderman ,Spiderman 2 ,Spiderman 3 ,Spider-Man Homecoming  ,Suicide Squad  ,The Amazing Spider Man 2  ,The Amazing Spiderman ,The Avengers ,Thor ,Thor Ragnarok  ,Thor The Dark World ,X-Men Complete 720p BD-Rips Eng],X Men Days of Future Past ,X Men First Class ,X-Men ,X-Men 2 ,X-Men Apocalypse  ,X-Men Origins Wolverine ,X-Men The Last Stand ,X-Men The Wolverine ,Ant-Man ,Avengers Age of Ultron ,Batman.v.Superman.Dawn.of.Justice,Captain America - The First Avenger ,Captain.America.The.Winter.Soldier,Deadpool,Doctor Strange  ,Fantastic Four ,Guardians of the Galaxy ,Guardians Of The Galaxy Vol. 2  ,Cast Away ,Hair,Lords.of.Dogtown,October Sky ,The Blind Side ,The School of Rock ,Sphere ,Star Trek Compleate,Star Trek ,Star Trek Beyond  ,Star Trek Into Darkness ,Star Wars Episode 1,Star Wars Episode 2,Star Wars Episode 3,Star Wars Episode 4,Star Wars Episode 5,Star Wars Episode 6,Star Wars Episode VII - The Force Awakens  ,Stargate The Ark of Truth,Stargate.Continuum,Starship Troopers ,Starship Troopers 3 Marauder ,Starship Troopers Invasion ,Terminator ,Terminator 2 Judgement Day ,Terminator Genisys ,The Martian  ,The Matrix,The Matrix Reload,The Matrix Revolution,Time Lapse ,War For The Planet Of The Apes  ,Arrival  ,Back to the Future 1,Back to the Future 2,Back to the Future 3,Battle - Los Angeles ,Dawn of the Planet of the Apes ,District 9 ,Edge of Tomorrow ,Equilibrium ,Ex Machina ,Independence Day,Independence.Day.Resurgence,Interstellar ,Men In Black ,Men In Black II ,Men In Black III ,Phenomenon,Project Almanac ,Rise of the Planet of the Apes ,Star wars Rogue.One,Donnie Darko,Exam ,Identity ,Into The Wild ,K-PAX ,Predestination ,Revolver ,The Man From the Earth ,The Mist ,Triangle ,Whiplash,Zeitgeist Addendum ,Love,10 Things I Hate About You  ,500 Days Of Summer ,A Lot Like Love ,A Walk to Remember ,About Time ,Before Midnight ,Before Sunrise,Before Sunset ,Blue Valentine ,Blue.Is.the.Warmest.Color,Chasing Liberty,Cruel Intentions ,Flipped ,Good Will Hunting,I Origins ,Its Kind of a Funny Story ,Love Actually ,Love Rosie ,Match.Point,No Strings Attached ,Once ,One Day ,Pretty Woman ,Ruby.Sparks,Scott Pilgrim vs the World  ,She's All That ,Sing street,Stuck in Love ,The Breakfast Club ,The Graduate,The Spectacular Now  ,The.Perks.Of.Being.A.Wallflower,Valentine's Day ,What If,Wicker.Park";
    Urls.MOVIES_URL = "http://localhost:8080/movies";
    Urls.OMDB_STORE_URL = "http://localhost:8080/omdb/storeOmdbMovie";
    Urls.OMDB_IMPORT_MOVIE_URL = "http://localhost:8080/omdb/importMovie";
    Urls.OMDB_IMPORT_MOVIES_URL = "http://localhost:8080/omdb/importMovies";
    Urls.OMDB_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";
    Urls.TV_SHOWS_LIST = "13 Reasons Why, 4400, Andromeda, Archer, Battlestar Galactica, Black Books, Breaking Bad, Brooklyn Nine Nine, Dark Angel, Eureka, Fargo, Friends, Game of Thrones, Heroes, How Not to Live Your Life, Jericho, Jessica Jones, Legend of the Seeker, Lois and Clark The New Adventures of Superman, Marvels Daredevil, Marvels Jessica Jones, MASH, Merlin, Misfits, Peaky Blinders, Preacher, RED DWARF, Rome, Roswell, Sense8, Sherlock, SkinsUK, Sliders, Smallville, Sons of Anarchy, Spartacus Season, Spiderman 90's Animated, Stargate Atlantis, Stargate SG-1, Star Trek DS9, Star Trek Enterprise, Star Trek The Next Generation, Supernatural Season, Survivors, That 70's Show, The IT Crowd, The Wire Ultimate, VEEP, Vikings, Youre the worst";
    Urls.TV_SHOWS_URL = "http://localhost:8080/tvshows";
    Urls.OMDB_IMPORT_TV_SHOWS_URL = "http://localhost:8080/omdb/importTvShows";
    return Urls;
}());



/***/ }),

/***/ "../../../../../src/app/model/error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = (function () {
    function Error() {
    }
    return Error;
}());



/***/ }),

/***/ "../../../../../src/app/model/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "../../../../../src/app/model/tvshow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShow; });
var TvShow = (function () {
    function TvShow() {
    }
    return TvShow;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.attemptAuth = function (ussername, password) {
        var credentials = { username: ussername, password: password };
        console.log('attempAuth ::');
        return this.http.post('http://localhost:8080/token/generate-token', credentials);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.setLoggedIn = function (loggedIn) {
        this.loggedIn = loggedIn;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/token.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var TokenStorage = (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };
    TokenStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "../../../../../src/app/services/error/error-snackbar-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageSnackbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageSnackbarService = (function () {
    function MessageSnackbarService(messageSnackBar) {
        this.messageSnackBar = messageSnackBar;
    }
    MessageSnackbarService.prototype.openMessageSnackBar = function (message) {
        this.messageSnackBar.open(message, "Close", { duration: 6000 });
    };
    MessageSnackbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSnackBar */]])
    ], MessageSnackbarService);
    return MessageSnackbarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interceptors/inteceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_token_storage__ = __webpack_require__("../../../../../src/app/services/auth/token.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialogs_error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Observable } from 'rxjs/Observable';








var TOKEN_HEADER_KEY = 'Authorization';
var Interceptor = (function () {
    function Interceptor(token, router, dialog) {
        this.token = token;
        this.router = router;
        this.dialog = dialog;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var token = this.token.getToken();
        if (!req.url.includes("omdbapi.com")) {
            if (token) {
                req = req.clone({
                    headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
                        .set('Content-Type', 'application/json')
                });
            }
        }
        console.log("Request intercepted: " + JSON.stringify(req));
        return next.handle(req)
            .catch(function (err) {
            console.log("http response error: " + JSON.stringify(err));
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error('Backend returned code ' + err.status + ' body was: ' + JSON.stringify(err.error));
                // if (err.status == 500) {
                //   err.error = new Error("")
                // }
                // is NOT login request
                if (!req.url.endsWith("generate-token")) {
                    if (err.status == 401) {
                        _this.token.signOut();
                        _this.router.navigate(['/login']);
                    }
                    else {
                        // this.openDialog(err.error);
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(err.error);
                    }
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(err.error);
                }
            }
            // ...optionally return a default fallback value so app can continue (pick one)
            // which could be a default value
            // return Observable.of<any>({my: "default value..."});
            // or simply an empty observable
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].empty();
        });
    };
    Interceptor.prototype.openDialog = function (apiError) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialogs_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                exceptionData: apiError
            }
        });
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_token_storage__["a" /* TokenStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDialog */]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/movies/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Urls__ = __webpack_require__("../../../../../src/app/model/Urls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = (function () {
    function MovieService(httpClient) {
        this.httpClient = httpClient;
    }
    MovieService.prototype.getAllMovies = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_URL, { responseType: 'json' });
    };
    MovieService.prototype.setAllMovies = function (allMovies) {
        this.allMovies = allMovies;
    };
    MovieService.prototype.getMoviesByGenre = function (genre) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_URL, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('genre', genre) });
    };
    MovieService.prototype.addMovie = function (movie) {
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_URL, JSON.stringify(movie), { responseType: 'json' })
            .subscribe(function (data) {
            console.log('Add movie: ' + JSON.stringify(data));
        });
    };
    MovieService.prototype.importMovies = function () {
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].OMDB_IMPORT_MOVIES_URL, __WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_LIST, { responseType: 'json' })
            .subscribe(function (data) {
            console.log('response: ' + data);
        });
    };
    MovieService.prototype.deleteMovie = function (id) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_URL, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', id) });
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "../../../../../src/app/services/omdb/omdb-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Urls__ = __webpack_require__("../../../../../src/app/model/Urls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OmdbService = (function () {
    function OmdbService(httpClient) {
        this.httpClient = httpClient;
    }
    OmdbService.prototype.storeOmdbMovie = function (movie) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__model_Urls__["a" /* Urls */].OMDB_STORE_URL, movie, { responseType: 'json' });
    };
    OmdbService.prototype.getOmdbMovie = function (title) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__model_Urls__["a" /* Urls */].OMDB_URL.replace("%s", title), { responseType: 'json' });
    };
    OmdbService.prototype.importMovie = function (title) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__model_Urls__["a" /* Urls */].OMDB_IMPORT_MOVIE_URL, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('title', title) });
    };
    OmdbService.prototype.importMovies = function () {
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__model_Urls__["a" /* Urls */].OMDB_IMPORT_MOVIES_URL, __WEBPACK_IMPORTED_MODULE_3__model_Urls__["a" /* Urls */].MOVIES_LIST, { responseType: 'json' })
            .subscribe(function (data) {
            console.log('response: ' + data);
        });
        // this.httpClient.post<any>('http://www.omdbapi.com/?t=supermans&apikey=PlsBanMe', {responseType: 'deserializers'})
        //   .subscribe(data => {
        //     console.log('response: ' + data);
        //   });
    };
    OmdbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], OmdbService);
    return OmdbService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sidenav-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavService = (function () {
    function SidenavService() {
    }
    SidenavService.prototype.setSideNav = function (sideNav) {
        this.sideNav = sideNav;
    };
    SidenavService.prototype.getSideNav = function () {
        return this.sideNav;
    };
    SidenavService.prototype.toggleSideNav = function () {
        if (this.sideNav) {
            this.sideNav.toggle();
        }
    };
    SidenavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tvshows/tvshows.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Urls__ = __webpack_require__("../../../../../src/app/model/Urls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TvShowsService = (function () {
    function TvShowsService(httpClient) {
        this.httpClient = httpClient;
    }
    TvShowsService.prototype.getAllTvShows = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].TV_SHOWS_URL, { responseType: 'json' });
    };
    TvShowsService.prototype.importTvShows = function () {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].OMDB_IMPORT_TV_SHOWS_URL, __WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].TV_SHOWS_LIST, { responseType: 'json', reportProgress: true });
    };
    TvShowsService.prototype.deleteTvShow = function (id) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].TV_SHOWS_URL, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('id', id) });
    };
    TvShowsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TvShowsService);
    return TvShowsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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