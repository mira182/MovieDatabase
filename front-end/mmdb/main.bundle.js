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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_movies_movies_carousel_movies_carousel_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tvshows_tv_show_carousel_tv_show_carousel_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_movies_movies_page_movies_page_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_sidenav_service_service__ = __webpack_require__("../../../../../src/app/services/sidenav-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_tvshows_tvshows_page_tvshows_page_component__ = __webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_omdb_omdb_service_service__ = __webpack_require__("../../../../../src/app/services/omdb/omdb-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_error_error_snackbar_service_service__ = __webpack_require__("../../../../../src/app/services/error/error-snackbar-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_movies_movie_statistics_movie_statistics_component__ = __webpack_require__("../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_movies_movies_list_genre_movies_list_genre_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_movies_movie_list_item_movie_list_item_component__ = __webpack_require__("../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_movies_movie_genre_bar_movie_genre_bar_component__ = __webpack_require__("../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_movies_movie_utils_service_service__ = __webpack_require__("../../../../../src/app/services/movies/movie-utils-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_movies_movies_list_movies_list_component__ = __webpack_require__("../../../../../src/app/components/movies/movies-list/movies-list.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__components_movies_movies_carousel_movies_carousel_component__["a" /* MoviesCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_movies_movie_item_movie_item_component__["a" /* MovieItemComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_tvshows_tv_show_item_tv_show_item_component__["a" /* TvShowItemComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_tvshows_tv_show_carousel_tv_show_carousel_component__["a" /* TvShowCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_movies_movies_page_movies_page_component__["a" /* MoviesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_tvshows_tvshows_page_tvshows_page_component__["a" /* TvshowsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_movies_movie_statistics_movie_statistics_component__["a" /* MovieStatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_movies_movies_list_genre_movies_list_genre_component__["a" /* MoviesListGenreComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_movies_movie_list_item_movie_list_item_component__["a" /* MovieListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_movies_movie_genre_bar_movie_genre_bar_component__["a" /* MovieGenreBarComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_movies_movies_list_movies_list_component__["a" /* MoviesListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_carousel__["a" /* NgxCarouselModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_36__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatAutocompleteModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */], __WEBPACK_IMPORTED_MODULE_26__components_dialogs_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], __WEBPACK_IMPORTED_MODULE_30__components_dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */]
            ],
            // exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_39__services_movies_movie_utils_service_service__["a" /* MovieUtilsServiceService */], __WEBPACK_IMPORTED_MODULE_33__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_token_storage__["a" /* TokenStorage */],
                __WEBPACK_IMPORTED_MODULE_28__services_sidenav_service_service__["a" /* SidenavService */], __WEBPACK_IMPORTED_MODULE_31__services_omdb_omdb_service_service__["a" /* OmdbService */], __WEBPACK_IMPORTED_MODULE_32__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */],
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogRef */]])
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
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
            window.location.reload();
        }, function (err) {
            _this.messageSnackBarService.openMessageSnackBar("Error: " + err.message);
        });
    };
    GetOmdbMovieDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-omdb-movie-dialog',
            template: __webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
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

module.exports = "<div>\n  <header class=\"jumbotron my-4\">\n    <h1 class=\"display-3\">Welcome to your app </h1>\n  </header>\n</div>\n\n\n<!-- Movies -->\n<h2>Movies</h2><h4 style=\"color: #dddddd;\">({{allMovies.length}})</h4>\n<app-movies-carousel [movies]=\"allMovies\"></app-movies-carousel>\n\n<!--<mat-divider></mat-divider>-->\n\n<!-- TV shows-->\n<h2>TV Shows</h2><h4 style=\"color: #dddddd;\">({{allTvShows.length}})</h4>\n<app-tv-show-carousel [tvShows]=\"allTvShows\"></app-tv-show-carousel>\n\n\n\n\n\n\n\n"

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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
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
            _this.loginError = error.message;
            console.log("login failed: " + error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_token_storage__["a" /* TokenStorage */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<mat-card>\n  <div fxFlex=\"column\" fxLayoutAlign=\"space-evenly start\">\n    <mat-checkbox *ngFor=\"let genreMovies of moviesByGenre\"\n                  value=\"{{genreMovies.genre}}\"\n                  [checked]=\"true\"\n                  (change)=\"updateGenres(genreMovies.genre, $event)\">\n      {{genreMovies.genre}}\n    </mat-checkbox>\n  </div>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieGenreBarComponent; });
/* unused harmony export GenreChangedEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_genres__ = __webpack_require__("../../../../../src/app/model/genres.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieGenreBarComponent = (function () {
    function MovieGenreBarComponent() {
        this.genresChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.moviesByGenre = [];
        this.allGenres = __WEBPACK_IMPORTED_MODULE_1__model_genres__["a" /* Genres */].ALL_GENRES;
    }
    MovieGenreBarComponent.prototype.ngOnInit = function () {
    };
    MovieGenreBarComponent.prototype.updateGenres = function (genre, event) {
        this.genresChanged.next(new GenreChangedEvent(genre, event.source.checked));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MovieGenreBarComponent.prototype, "genresChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MovieGenreBarComponent.prototype, "moviesByGenre", void 0);
    MovieGenreBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-genre-bar',
            template: __webpack_require__("../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movie-genre-bar/movie-genre-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], MovieGenreBarComponent);
    return MovieGenreBarComponent;
}());

var GenreChangedEvent = (function () {
    function GenreChangedEvent(genre, selected) {
        this.genre = genre;
        this.selected = selected;
    }
    return GenreChangedEvent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movie-item/movie-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zoom:hover {\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.move-item {\n  margin-top: 20px;\n  padding-top: 20px;\n}\n\n.mat-tooltip {\n  font-size: 120%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-item/movie-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4 movie-item\" [ngClass]=\"{'zoom': !expanded }\">\n  <mat-card-title>\n    <span matTooltip=\"{{movie.name}}\" matTooltipShowDelay=\"1500\">\n      <a href=\"javascript:void(0);\" (click)=\"toggleShowDiv()\"><img mat-card-image src={{movie.posterUrl}} height=\"300px\"></a>\n    </span>\n  </mat-card-title>\n\n  <mat-card-content *ngIf=\"expanded\" [@slideInOut]=\"animationState\">\n    <h2>{{movie.name}}</h2>\n    <h3>Year:</h3><p>{{movie.year}}</p>\n    <h3>Length:</h3><p>{{movie.length}}</p>\n    <h3>IMDB rating:</h3><p>{{movie.imdbRating}}</p>\n    <h3>Director:</h3><p>{{movie.directors}}</p>\n    <h3>Actors:</h3><p>{{movie.actors}}</p>\n    <h3>Country:</h3><p>{{movie.country}}</p>\n    <h3>Production:</h3><p>{{movie.production}}</p>\n    <h3>Genre:</h3><p>{{movie.genre}}</p>\n    <h3>Description:</h3><div>{{movie.description}}</div>\n  </mat-card-content>\n\n  <mat-card-actions align=\"end\">\n    <button mat-icon-button *ngIf=\"expanded\" (click)=\"deleteMovie()\"><mat-icon>delete</mat-icon></button>\n    <button mat-icon-button (click)=\"toggleShowDiv()\" [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\"><mat-icon>expand_more</mat-icon></button>\n  </mat-card-actions>\n</mat-card>\n"

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
            selector: 'app-movie-carousel-item',
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_animations__["b" /* SlideInOutAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* IndicatorRotate */]],
            template: __webpack_require__("../../../../../src/app/components/movies/movie-item/movie-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movie-item/movie-item.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_4__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rightAlignment {\n  position: absolute;\n  right: 10px;\n}\n\n.zoom:hover {\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n/deep/ .mat-card-header-text {\n  width: 100%;\n  text-align: center;\n}\n\nmat-card-header {\n  cursor: pointer;\n}\n\n.movie-list-item {\n  max-width: 500px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movie-list-item mat-elevation-z4\" [ngClass]=\"{'zoom': !expanded }\">\n  <mat-card-header>\n    <div fxFlex=\"row\" (click)=\"toggleShowDiv()\">\n      <img mat-card-sm-image src={{movie.posterUrl}}/>\n      <h4 fxFlex=\"auto\" fxFlexOffset=\"5\">{{movie.name}}</h4>\n    </div>\n    <button mat-icon-button *ngIf=\"expanded\" (click)=\"deleteMovie()\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"toggleShowDiv()\" [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\n      <mat-icon>expand_more</mat-icon>\n    </button>\n  </mat-card-header>\n  <mat-card-content *ngIf=\"expanded\" [@slideInOut]=\"animationState\">\n    <h2 style=\"padding-top: 20px;\">{{movie.name}}</h2>\n    <h3>Year:</h3>\n    <p>{{movie.year}}</p>\n    <h3>Length:</h3>\n    <p>{{movie.length}}</p>\n    <h3>IMDB rating:</h3>\n    <p>{{movie.imdbRating}}</p>\n    <h3>Director:</h3>\n    <p>{{movie.directors}}</p>\n    <h3>Actors:</h3>\n    <p>{{movie.actors}}</p>\n    <h3>Country:</h3>\n    <p>{{movie.country}}</p>\n    <h3>Production:</h3>\n    <p>{{movie.production}}</p>\n    <h3>Genre:</h3>\n    <p>{{movie.genre}}</p>\n    <h3>Description:</h3>\n    <p>{{movie.description}}</p>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListItemComponent; });
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





var MovieListItemComponent = (function () {
    function MovieListItemComponent(movieService, messageSnackBar) {
        this.movieService = movieService;
        this.messageSnackBar = messageSnackBar;
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.expanded = false;
        this.animationState = 'out';
    }
    MovieListItemComponent.prototype.ngOnInit = function () {
    };
    MovieListItemComponent.prototype.toggleShowDiv = function () {
        this.animationState = this.animationState === 'in' ? 'out' : 'in';
        this.expanded = !this.expanded;
    };
    MovieListItemComponent.prototype.deleteMovie = function () {
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
    ], MovieListItemComponent.prototype, "movieDeleteEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_movie__["a" /* Movie */])
    ], MovieListItemComponent.prototype, "movie", void 0);
    MovieListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-list-item',
            template: __webpack_require__("../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movie-list-item/movie-list-item.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_animations__["b" /* SlideInOutAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_4__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], MovieListItemComponent);
    return MovieListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Genre</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.genre}}</mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.count}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieStatisticsComponent; });
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


var MovieStatisticsComponent = (function () {
    function MovieStatisticsComponent() {
        this.displayedColumns = ['genre', 'count'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTableDataSource */]();
    }
    MovieStatisticsComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.moviesList; _i < _a.length; _i++) {
            var movie = _a[_i];
            this.data.push({
                genre: movie.genre,
                count: this.moviesList.filter(function (movie) { return movie.genre.toLowerCase().includes(movie.genre.toLowerCase()); }).length
            });
        }
        console.log(this.data);
        this.dataSource.data = this.data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MovieStatisticsComponent.prototype, "moviesList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSort */])
    ], MovieStatisticsComponent.prototype, "sort", void 0);
    MovieStatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-statistics',
            template: __webpack_require__("../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movie-statistics/movie-statistics.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], MovieStatisticsComponent);
    return MovieStatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.leftRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  left: 10px;\n  color: red;\n  opacity: 0.5;\n  max-height: 300px;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.rightRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  right: 10px;\n  color: red;\n  opacity: 0.5;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.leftRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n.rightRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n.movie-carousel {\n  max-width: 80%;\n}\n\n/*.ngxcarouselPoint {*/\n/*list-style-type: none;*/\n/*text-align: center;*/\n/*padding: 12px;*/\n/*margin: 0;*/\n/*white-space: nowrap;*/\n/*overflow: auto;*/\n/*box-sizing: border-box;*/\n/*}*/\n/*.ngxcarouselPoint li {*/\n/*display: inline-block;*/\n/*border-radius: 50%;*/\n/*border: 2px solid rgba(0, 0, 0, 0.55);*/\n/*padding: 4px;*/\n/*margin: 0 3px;*/\n/*transition-timing-function: cubic-bezier(.17, .67, .83, .67);*/\n/*transition: .4s;*/\n/*}*/\n/*.ngxcarouselPoint li.active {*/\n/*background: #6b6b6b;*/\n/*transform: scale(1.2);*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 *ngIf=\"movies.length > 0\">{{genre}}</h2>\n<ngx-carousel [inputs]=\"carouselTile\">\n  <ngx-tile NgxCarouselItem *ngFor=\"let movie of movies\">\n    <app-movie-carousel-item [movie]=\"movie\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movie-carousel-item>\n  </ngx-tile>\n\n  <button NgxCarouselPrev class=\"leftRs\"><i class=\"fa fa-angle-left fa-4x\"></i></button>\n  <button NgxCarouselNext class=\"rightRs\"><i class=\"fa fa-angle-right fa-4x\"></i></button>\n</ngx-carousel>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesCarouselComponent; });
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

var MoviesCarouselComponent = (function () {
    function MoviesCarouselComponent() {
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MoviesCarouselComponent.prototype.ngOnInit = function () {
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
    MoviesCarouselComponent.prototype.deleteMovie = function (movie) {
        this.movieDeleteEvent.next(movie);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MoviesCarouselComponent.prototype, "genre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MoviesCarouselComponent.prototype, "movies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MoviesCarouselComponent.prototype, "movieDeleteEvent", void 0);
    MoviesCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies-carousel',
            template: __webpack_require__("../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies-carousel/movies-carousel.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], MoviesCarouselComponent);
    return MoviesCarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.movie-list-genre-settings {\n  min-width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"\n     fxLayoutGap.xs=\"0\"\n     fxLayoutAlign=\"space-between center\">\n<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n      <mat-select placeholder=\"Sort by:\" [(value)]=\"selectedSortingType\">\n        <mat-option value=\"sortByName\" (click)=\"sortMoviesByName()\">Name</mat-option>\n        <mat-option value=\"sortByImdbRating\" (click)=\"sortMoviesByImdb()\">IMDB rating</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>\n\n<mat-list class=\"movie-list-genre-settings\">\n  <div *ngFor=\"let genreMovies of moviesByGenre\">\n    <div *ngIf=\"genreMovies.movies.length > 0\">\n      <h3 mat-subheader>{{genreMovies.genre}}</h3>\n      <app-movie-list-item *ngFor=\"let movie of genreMovies.movies\" [movie]=\"movie\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movie-list-item>\n    </div>\n  </div>\n </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesListGenreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__("../../../../../src/app/components/animations/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_genres__ = __webpack_require__("../../../../../src/app/model/genres.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movies_movie_utils_service_service__ = __webpack_require__("../../../../../src/app/services/movies/movie-utils-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesListGenreComponent = (function () {
    function MoviesListGenreComponent(movieUtils) {
        this.movieUtils = movieUtils;
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.moviesByGenre = [];
    }
    MoviesListGenreComponent.prototype.ngOnInit = function () {
    };
    MoviesListGenreComponent.prototype.sortMoviesByName = function () {
        this.movieUtils.sortMoviesByName(this.movies);
        this.loadMoviesByGenre();
    };
    MoviesListGenreComponent.prototype.sortMoviesByImdb = function () {
        this.movieUtils.sortMoviesByImdb(this.movies);
        this.loadMoviesByGenre();
    };
    MoviesListGenreComponent.prototype.loadMoviesByGenre = function () {
        this.moviesByGenre = [];
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_2__model_genres__["a" /* Genres */].ALL_GENRES; _i < _a.length; _i++) {
            var genre = _a[_i];
            var moviesByGenre = this.movieUtils.filterMoviesByGenre(this.movies, genre);
            if (moviesByGenre.length > 0)
                this.moviesByGenre.push({ 'genre': genre, 'movies': moviesByGenre });
        }
    };
    MoviesListGenreComponent.prototype.deleteMovie = function (movie) {
        this.movieDeleteEvent.next(movie);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MoviesListGenreComponent.prototype, "movieDeleteEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MoviesListGenreComponent.prototype, "moviesByGenre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MoviesListGenreComponent.prototype, "movies", void 0);
    MoviesListGenreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies-list-genre',
            template: __webpack_require__("../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies-list-genre/movies-list-genre.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["b" /* SlideInOutAnimation */], __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_movies_movie_utils_service_service__["a" /* MovieUtilsServiceService */]])
    ], MoviesListGenreComponent);
    return MoviesListGenreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.movie-list-settings {\n  min-width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"\n     fxLayoutGap.xs=\"0\"\n     fxLayoutAlign=\"space-between center\">\n  <mat-card>\n    <mat-card-content>\n      <mat-form-field>\n        <mat-select placeholder=\"Sort by:\" [(value)]=\"selectedSortingType\">\n          <mat-option value=\"sortByName\" (click)=\"sortMoviesByName()\">Name</mat-option>\n          <mat-option value=\"sortByImdbRating\" (click)=\"sortMoviesByImdb()\">IMDB rating</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-list class=\"movie-list-settings\">\n      <div *ngIf=\"movies.length > 0\">\n        <app-movie-list-item *ngFor=\"let movie of movies\" [movie]=\"movie\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movie-list-item>\n      </div>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-list/movies-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_movie_utils_service_service__ = __webpack_require__("../../../../../src/app/services/movies/movie-utils-service.service.ts");
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
    function MoviesListComponent(movieUtilsService) {
        this.movieUtilsService = movieUtilsService;
        this.movieDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MoviesListComponent.prototype.ngOnInit = function () {
    };
    MoviesListComponent.prototype.sortMoviesByName = function () {
        this.movieUtilsService.sortMoviesByName(this.movies);
    };
    MoviesListComponent.prototype.sortMoviesByImdb = function () {
        this.movieUtilsService.sortMoviesByImdb(this.movies);
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movies_movie_utils_service_service__["a" /* MovieUtilsServiceService */]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/movies/movies-page/movies-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*.example-container {*/\n  /*min-height: 400px;*/\n/*}*/\n\n.genre-toolbar {\n  min-height: 100px;\n}\n\n.sidenav-content {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n}\n\n.rightAlignment {\n  position: absolute;\n  right: 10px;\n}\n\n.nested-list-item {\n  padding-left: 10px;\n  font-size: 80%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  /*overflow: show;*/\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.img {\n  width: 100%;\n  margin-bottom: 18%;\n}\n.card-picture {\n  width: 23%;\n  margin-bottom: 2%;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n}\n\n.search-form {\n  width: 90%;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies-page/movies-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\">\n  <mat-spinner *ngIf=\"showSpinner\" style=\"margin:0 auto;\"></mat-spinner>\n</div>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sideNav mode=\"over\">\n    <mat-toolbar color=\"primary\" class=\"sidenav-content\"><span>Sidenav toolbar</span></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item (click)=\"omdbMenuExpanded = !omdbMenuExpanded\">OMDB<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"omdbMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"omdbMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openGetOmdbMovieDialog()\">Get movie</a>\n        <a mat-list-item class=\"nested-list-item\" (click)=\"importMovies()\">Import movies</a>\n      </mat-nav-list>\n\n      <a mat-list-item (click)=\"moviesMenuExpanded = !moviesMenuExpanded\">Movies<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"moviesMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"moviesMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openAddMovieDialog()\">Add movie</a>\n      </mat-nav-list>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <header class=\"jumbotron my-4\">\n      <h1 class=\"display-3\">Movies</h1>\n      <span class=\"example-fill-remaining-space\"></span>\n    </header>\n\n    <app-movie-genre-bar [moviesByGenre]=\"moviesByGenre\" (genresChanged)=\"updateGenres($event)\"></app-movie-genre-bar>\n\n    <mat-tab-group>\n      <mat-tab label=\"Carousel view\">\n        <div *ngFor=\"let genreMovies of moviesByGenre\">\n          <app-movies-carousel [movies]=\"genreMovies.movies\" [genre]=\"genreMovies.genre\"\n                               (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-carousel>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Genre list view\">\n        <div *ngIf=\"allMovies\">\n          <app-movies-list-genre [movies]=\"allMovies\" [moviesByGenre]=\"moviesByGenre\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-list-genre>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Plain list view\">\n        <div *ngIf=\"allMovies\">\n          <app-movies-list [movies]=\"allMovies\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-list>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_genres__ = __webpack_require__("../../../../../src/app/model/genres.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_movies_movie_utils_service_service__ = __webpack_require__("../../../../../src/app/services/movies/movie-utils-service.service.ts");
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
    function MoviesPageComponent(movieService, movieUtils, dialog, sideNavService) {
        this.movieService = movieService;
        this.movieUtils = movieUtils;
        this.dialog = dialog;
        this.sideNavService = sideNavService;
        this.moviesByGenre = [];
        this.value = '';
    }
    MoviesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.sideNavService.setSideNav(this.movieSideNav);
        this.movieService.getAllMovies().subscribe(function (data) {
            _this.allMovies = data;
            _this.loadMoviesByGenre();
            _this.movieUtils.sortMoviesByName(_this.allMovies);
            _this.showSpinner = false;
        });
    };
    MoviesPageComponent.prototype.loadMoviesByGenre = function () {
        this.moviesByGenre = [];
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_7__model_genres__["a" /* Genres */].ALL_GENRES; _i < _a.length; _i++) {
            var genre = _a[_i];
            var moviesByGenre = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
            if (moviesByGenre.length > 0) {
                moviesByGenre.sort();
                this.moviesByGenre.push({ 'genre': genre, 'movies': moviesByGenre });
            }
        }
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
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */], {
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
            this.loadMoviesByGenre();
        }
        console.log("Deleting event in movies page." + index);
    };
    MoviesPageComponent.prototype.updateGenres = function (event) {
        var checked = event.selected;
        var genre = event.genre;
        if (!checked) {
            this.getMoviesByGenre(genre).movies = [];
        }
        else if (checked) {
            this.getMoviesByGenre(genre).movies = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
        }
    };
    MoviesPageComponent.prototype.getMoviesByGenre = function (genre) {
        return this.moviesByGenre.find(function (item, index) {
            if (item.genre == genre) {
                return true;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('sideNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatSidenav */])
    ], MoviesPageComponent.prototype, "movieSideNav", void 0);
    MoviesPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies-page',
            template: __webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies-page/movies-page.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_5__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_movies_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_8__services_movies_movie_utils_service_service__["a" /* MovieUtilsServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__["a" /* SidenavService */]])
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

module.exports = "\n<mat-toolbar color=\"primary\" *ngIf=\"router.url != '/login'\" class=\"main-toolbar\">\n  <span>MMDB</span>\n  <button mat-icon-button (click)=\"toggleSideNav()\" *ngIf=\"router.url != '/home'\"><mat-icon>menu</mat-icon></button>\n  <button mat-button routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n  <button mat-button routerLink=\"/movies\" routerLinkActive=\"active\">Movies</button>\n  <button mat-button routerLink=\"/tvshows\" routerLinkActive=\"active\">TV Shows</button>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n    <form>\n    <mat-form-field color=\"accent\">\n      <input type=\"text\" placeholder=\"search title\" aria-label=\"Number\" matInput [formControl]=\"searchTerm\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of searchResult\" [value]=\"item\">\n          {{ item }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  <mat-icon>search</mat-icon>\n    </form>\n\n  <button mat-button routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logOut()\"><mat-icon>power</mat-icon><span>Logout</span></button>\n</mat-toolbar>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movies_movie_service__ = __webpack_require__("../../../../../src/app/services/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tvshows_tvshows_service__ = __webpack_require__("../../../../../src/app/services/tvshows/tvshows.service.ts");
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
    function NavBarComponent(token, router, authService, sideNavService, movieService, tvShowsService) {
        this.token = token;
        this.router = router;
        this.authService = authService;
        this.sideNavService = sideNavService;
        this.movieService = movieService;
        this.tvShowsService = tvShowsService;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.searchResult = [];
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerm.valueChanges
            .debounceTime(400)
            .subscribe(function (data) {
            _this.movieService.getAllMovies().subscribe(function (movies) {
                _this.tvShowsService.getAllTvShows().subscribe(function (tvShows) {
                    var foundMovies = movies.filter(function (movie, index, movies) {
                        if (movie.name.toLocaleLowerCase().includes(data)) {
                            return true;
                        }
                    });
                    var foundTvShows = tvShows.filter(function (tvShow, index, tvShows) {
                        if (tvShow.name.toLocaleLowerCase().includes(data)) {
                            return true;
                        }
                    });
                    _this.searchResult = [];
                    for (var _i = 0, foundMovies_1 = foundMovies; _i < foundMovies_1.length; _i++) {
                        var movie = foundMovies_1[_i];
                        _this.searchResult.push(movie.name);
                    }
                    for (var _a = 0, foundTvShows_1 = foundTvShows; _a < foundTvShows_1.length; _a++) {
                        var tvShow = foundTvShows_1[_a];
                        _this.searchResult.push(tvShow.name);
                    }
                });
            });
        });
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_token_storage__["a" /* TokenStorage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service_service__["a" /* SidenavService */],
            __WEBPACK_IMPORTED_MODULE_5__services_movies_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_7__services_tvshows_tvshows_service__["a" /* TvShowsService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.leftRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*left: 0;*/\n/*color: red;*/\n/*}*/\n\n/*.rightRs {*/\n/*background-color: Transparent;*/\n/*position: absolute;*/\n/*margin: auto;*/\n/*top: 0;*/\n/*bottom: 0;*/\n/*width: 50px;*/\n/*height: 50px;*/\n/*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n/*border-radius: 999px;*/\n/*right: 0;*/\n/*color: red;*/\n/*}*/\n.leftRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  left: 10px;\n  color: red;\n  opacity: 0.5;\n  max-height: 300px;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.rightRs {\n  background-color: Transparent;\n  position: absolute;\n  top: 50px;\n  bottom: 90px;\n  right: 10px;\n  color: red;\n  opacity: 0.5;\n  /*box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);*/\n  border: none;\n}\n\n.leftRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n.rightRs:hover {\n  /*background-color: lightgrey;*/\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  opacity: 1;\n  border: none;\n}\n\n/*.ngxcarouselPoint {*/\n/*list-style-type: none;*/\n/*text-align: center;*/\n/*padding: 12px;*/\n/*margin: 0;*/\n/*white-space: nowrap;*/\n/*overflow: auto;*/\n/*box-sizing: border-box;*/\n/*}*/\n/*.ngxcarouselPoint li {*/\n/*display: inline-block;*/\n/*border-radius: 50%;*/\n/*border: 2px solid rgba(0, 0, 0, 0.55);*/\n/*padding: 4px;*/\n/*margin: 0 3px;*/\n/*transition-timing-function: cubic-bezier(.17, .67, .83, .67);*/\n/*transition: .4s;*/\n/*}*/\n/*.ngxcarouselPoint li.active {*/\n/*background: #6b6b6b;*/\n/*transform: scale(1.2);*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"tvShows.length > 0\">{{genre}}</h2>\n<ngx-carousel [inputs]=\"carouselTile\">\n  <ngx-tile NgxCarouselItem *ngFor=\"let tvShow of tvShows\">\n    <app-movie-carousel-item [movie]=\"tvShow\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movie-carousel-item>\n  </ngx-tile>\n\n  <button NgxCarouselPrev class=\"leftRs\"><i class=\"fa fa-angle-left fa-4x\"></i></button>\n  <button NgxCarouselNext class=\"rightRs\"><i class=\"fa fa-angle-right fa-4x\"></i></button>\n</ngx-carousel>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowCarouselComponent; });
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

var TvShowCarouselComponent = (function () {
    function TvShowCarouselComponent() {
        this.tvShowDeleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TvShowCarouselComponent.prototype.ngOnInit = function () {
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
    TvShowCarouselComponent.prototype.deleteTvShow = function (tvShow) {
        this.tvShowDeleteEvent.next(tvShow);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TvShowCarouselComponent.prototype, "tvShows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TvShowCarouselComponent.prototype, "tvShowDeleteEvent", void 0);
    TvShowCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tv-show-carousel',
            template: __webpack_require__("../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tvshows/tv-show-carousel/tv-show-carousel.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], TvShowCarouselComponent);
    return TvShowCarouselComponent;
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
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_3__services_error_error_snackbar_service_service__["a" /* MessageSnackbarService */]])
    ], TvShowItemComponent);
    return TvShowItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.example-container {\n  min-height: 400px;\n}\n\n.rightAlignment {\n  position: absolute;\n  right: 10px;\n}\n\n.nested-list-item {\n  padding-left: 10px;\n  font-size: 80%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  /*overflow: show;*/\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\">\n  <mat-spinner *ngIf=\"showSpinner\" style=\"margin:0 auto;\"></mat-spinner>\n</div>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sideNav mode=\"over\">\n    <mat-toolbar color=\"primary\" class=\"sidenav-content\"><span>Sidenav toolbar</span></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item (click)=\"omdbMenuExpanded = !omdbMenuExpanded\">OMDB<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"omdbMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"omdbMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openGetOmdbMovieDialog()\">Get TV Show</a>\n        <a mat-list-item class=\"nested-list-item\" (click)=\"importTvShows()\">Import TV Show</a>\n      </mat-nav-list>\n\n      <a mat-list-item (click)=\"moviesMenuExpanded = !moviesMenuExpanded\">Movies<mat-icon class=\"rightAlignment\" [@indicatorRotate]=\"moviesMenuExpanded ? 'expanded': 'collapsed'\">expand_more</mat-icon></a>\n      <mat-nav-list *ngIf=\"moviesMenuExpanded\">\n        <a mat-list-item class=\"nested-list-item\" (click)=\"openAddMovieDialog()\">Add movie</a>\n      </mat-nav-list>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <header class=\"jumbotron my-4\">\n      <h1 class=\"display-3\">TV Shows</h1>\n      <span class=\"example-fill-remaining-space\"></span>\n    </header>\n\n    <app-movie-genre-bar [moviesByGenre]=\"tvShowsByGenre\" (genresChanged)=\"updateGenres($event)\"></app-movie-genre-bar>\n\n    <mat-tab-group>\n      <mat-tab label=\"Carousel view\">\n        <div *ngFor=\"let genreTvShows of tvShowsByGenre\">\n          <app-movies-carousel [movies]=\"genreTvShows.movies\" [genre]=\"genreTvShows.genre\"\n                               (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-carousel>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"List view\">\n        <div *ngIf=\"allTvShows\">\n          <app-movies-list-genre [movies]=\"allTvShows\" [moviesByGenre]=\"tvShowsByGenre\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-list-genre>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Plain list view\">\n        <div *ngIf=\"allTvShows\">\n          <app-movies-list [movies]=\"allTvShows\" (movieDeleteEvent)=\"deleteMovie($event)\"></app-movies-list>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_movies_movie_utils_service_service__ = __webpack_require__("../../../../../src/app/services/movies/movie-utils-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_add_movie_dialog_add_movie_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialogs/add-movie-dialog/add-movie-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_genres__ = __webpack_require__("../../../../../src/app/model/genres.ts");
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
    function TvshowsPageComponent(tvShowsService, movieUtils, dialog, sideNavService) {
        this.tvShowsService = tvShowsService;
        this.movieUtils = movieUtils;
        this.dialog = dialog;
        this.sideNavService = sideNavService;
        this.showAsCarousel = true;
        this.tvShowsByGenre = [];
    }
    TvshowsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.sideNavService.setSideNav(this.movieSideNav);
        this.tvShowsService.getAllTvShows().subscribe(function (data) {
            _this.allTvShows = data;
            _this.loadMoviesByGenre();
            _this.sortAllMoviesByName();
            _this.showSpinner = false;
        });
    };
    TvshowsPageComponent.prototype.sortAllMoviesByName = function () {
        this.allTvShows.sort(function (movie1, movie2) {
            if (movie1.name > movie2.name) {
                return 1;
            }
            if (movie1.name < movie2.name) {
                return -1;
            }
            return 0;
        });
    };
    TvshowsPageComponent.prototype.loadMoviesByGenre = function () {
        this.tvShowsByGenre = [];
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_8__model_genres__["a" /* Genres */].ALL_GENRES; _i < _a.length; _i++) {
            var genre = _a[_i];
            var tvShowsByGenre = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
            if (tvShowsByGenre.length > 0) {
                tvShowsByGenre.sort();
                this.tvShowsByGenre.push({ 'genre': genre, 'movies': tvShowsByGenre });
            }
        }
    };
    TvshowsPageComponent.prototype.openAddMovieDialog = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_add_movie_dialog_add_movie_dialog_component__["a" /* AddMovieDialogComponent */], {
            height: 'auto',
            width: '500px',
            data: { newMovie: this.newTvShow }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.newTvShow = result;
            if (_this.newTvShow) {
                _this.tvShowsService.addTvShow(_this.newTvShow);
            }
        });
    };
    TvshowsPageComponent.prototype.openGetOmdbMovieDialog = function () {
        //noinspection TypeScriptUnresolvedFunction
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_get_omdb_movie_dialog_get_omdb_movie_dialog_component__["a" /* GetOmdbMovieDialogComponent */], {
            height: 'auto',
            width: '500px',
        });
    };
    TvshowsPageComponent.prototype.importTvShows = function () {
        this.showSpinner = true;
        this.tvShowsService.importTvShows();
        this.showSpinner = false;
        window.location.reload();
    };
    TvshowsPageComponent.prototype.deleteMovie = function (tvShow) {
        // delete movie from list
        var index = this.allTvShows.indexOf(tvShow);
        if (index > -1) {
            this.allTvShows.splice(index, 1);
            this.loadMoviesByGenre();
        }
        console.log("Deleting event in movies page." + index);
    };
    TvshowsPageComponent.prototype.updateGenres = function (event) {
        var checked = event.selected;
        var genre = event.genre;
        if (!checked) {
            this.getMoviesByGenre(genre).movies = [];
        }
        else if (checked) {
            this.getMoviesByGenre(genre).movies = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
        }
    };
    TvshowsPageComponent.prototype.getMoviesByGenre = function (genre) {
        return this.tvShowsByGenre.find(function (item, index) {
            if (item.genre == genre) {
                return true;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('sideNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSidenav */])
    ], TvshowsPageComponent.prototype, "movieSideNav", void 0);
    TvshowsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tvshows-page',
            template: __webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tvshows/tvshows-page/tvshows-page.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations_animations__["a" /* IndicatorRotate */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_tvshows_tvshows_service__["a" /* TvShowsService */], __WEBPACK_IMPORTED_MODULE_6__services_movies_movie_utils_service_service__["a" /* MovieUtilsServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_sidenav_service_service__["a" /* SidenavService */]])
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
    // MOVIES
    Urls.MOVIES_LIST = "John Wick  ,300 ,300 Rise of an Empire ,Alien vs Predator ,Aliens vs Predator Requiem,Assassin's Creed  ,Batman,Batman ,Batman Begins ,The Dark Knight ,The Dark Knight Rises ,Blade,Blade ,Blade II ,Blade III - Trinity ,Constantine ,Dracula Untold ,Fearless,Immortals ,IP Man ,Ip Man 2 ,IP Man 3 - The Final Fight,John Wick Chapter 2  ,Kingsman The Secret Service ,Law Abiding Citizen ,Mad Max Fury Road ,Ninja Assassin ,Predators ,Punisher War Zone ,Taken  Extended Cut,Teenage Mutant Ninja Turtles ,Teenage Mutant Ninja Turtles Out Of The Shadows  ,Teenage.Mutant.Ninja.Turtles,Teenage.Mutant.Ninja.Turtles.2,Teenage.Mutant.Ninja.Turtles.3,The A Team,The Chronicles of Riddick ,The Last Boy Scout ,The Magnificent Seven  ,The Raid 2  ,The Raid Redemption ,Troy ,Wanted ,American Pie  ,American Pie 2  ,Clerks 2 ,Clerks THEATRICAL  ,Deathgasm  ,Fack ju Gothe - 2013,Horrible Bosses 2 ,Sausage.Party,Ted.2,The Edge Of Seventeen  ,The Waterboy ,The Wolf of Wall Street ,Reign Of Fire ,The.Harry.Potter.Movies,Lord of the rings The.Fellowship.of.the.Ring,Lord of the rings The.Two.Towers,Lord of the rings The.Return.of.the.King, Twilight 1, Twilight 2, Twilight 3, Twilight 4,Underworld,Underworld - Extended Edition ,Underworld - Rise of the Lycans ,Underworld Awakening  ,Underworld Evolution ,Warcraft  ,Iron Man 1,Iron Man 2,Iron.Man.3,Man of Steel ,Spider Man Trilogy ,Spiderman ,Spiderman 2 ,Spiderman 3 ,Spider-Man Homecoming  ,Suicide Squad  ,The Amazing Spider Man 2  ,The Amazing Spiderman ,The Avengers ,Thor ,Thor Ragnarok  ,Thor The Dark World ,X-Men Complete 720p BD-Rips Eng],X Men Days of Future Past ,X Men First Class ,X-Men ,X-Men 2 ,X-Men Apocalypse  ,X-Men Origins Wolverine ,X-Men The Last Stand ,X-Men The Wolverine ,Ant-Man ,Avengers Age of Ultron ,Batman.v.Superman.Dawn.of.Justice,Captain America - The First Avenger ,Captain.America.The.Winter.Soldier,Deadpool,Doctor Strange  ,Fantastic Four ,Guardians of the Galaxy ,Guardians Of The Galaxy Vol. 2  ,Cast Away ,Hair,Lords.of.Dogtown,October Sky ,The Blind Side ,The School of Rock ,Sphere ,Star Trek Compleate,Star Trek ,Star Trek Beyond  ,Star Trek Into Darkness ,Star Wars Episode 1,Star Wars Episode 2,Star Wars Episode 3,Star Wars Episode 4,Star Wars Episode 5,Star Wars Episode 6,Star Wars Episode VII - The Force Awakens  ,Stargate The Ark of Truth,Stargate.Continuum,Starship Troopers ,Starship Troopers 3 Marauder ,Starship Troopers Invasion ,Terminator ,Terminator 2 Judgement Day ,Terminator Genisys ,The Martian  ,The Matrix,The Matrix Reload,The Matrix Revolution,Time Lapse ,War For The Planet Of The Apes  ,Arrival  ,Back to the Future 1,Back to the Future 2,Back to the Future 3,Battle - Los Angeles ,Dawn of the Planet of the Apes ,District 9 ,Edge of Tomorrow ,Equilibrium ,Ex Machina ,Independence Day,Independence.Day.Resurgence,Interstellar ,Men In Black ,Men In Black II ,Men In Black III ,Phenomenon,Project Almanac ,Rise of the Planet of the Apes ,Star wars Rogue.One,Donnie Darko,Exam ,Identity ,Into The Wild ,K-PAX ,Predestination ,Revolver ,The Man From the Earth ,The Mist ,Triangle ,Whiplash,Zeitgeist Addendum ,Love,10 Things I Hate About You  ,500 Days Of Summer ,A Lot Like Love ,A Walk to Remember ,About Time ,Before Midnight ,Before Sunrise,Before Sunset ,Blue Valentine ,Blue.Is.the.Warmest.Color,Chasing Liberty,Cruel Intentions ,Flipped ,Good Will Hunting,I Origins ,Its Kind of a Funny Story ,Love Actually ,Love Rosie ,Match.Point,No Strings Attached ,Once ,One Day ,Pretty Woman ,Ruby.Sparks,Scott Pilgrim vs the World  ,She's All That ,Sing street,Stuck in Love ,The Breakfast Club ,The Graduate,The Spectacular Now  ,The.Perks.Of.Being.A.Wallflower,Valentine's Day ,What If,Wicker.Park";
    Urls.MOVIES_URL = "http://localhost:8080/movies";
    // OMDB
    Urls.OMDB_STORE_URL = "http://localhost:8080/omdb/storeOmdbMovie";
    Urls.OMDB_IMPORT_MOVIES_URL = "http://localhost:8080/omdb/importMovies";
    Urls.OMDB_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";
    // TV SHOWS
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

/***/ "../../../../../src/app/model/genres.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genres; });
// export enum Genres {
//   ACTION = "Action",
//   COMEDY = "Comedy",
//   DRAMA = "Drama",
//   FANTASY = "Fantasy",
//   ADVENTURE = "Adventure",
//   HORROR = "Horror",
//   SCIFI = "Sci-Fi",
//   CRIME = "Crime",
//   THRILLER = "Thriller",
//   BIOGRAPHY = "Biography",
//   MUSIC = "Music",
//   ANIMATION = "Animation",
//   DOCUMENTARY = "Documentary",
//   FAMILY = "Family",
//   SPORT = "Sport",
//   MYSTERY = "Mystery"
// }
// public const ALL_GENRES = [
//   "Action",
//   "Adventure",
//   "Animation",
//   "Biography",
//   "Comedy",
//   "Crime",
//   "Documentary",
//   "Drama",
//   "Family",
//   "Fantasy",
//   "Horror",
//   "Music",
//   "Mystery",
//   "Sci-Fi",
//   "Sport",
//   "Thriller",
// ];
var Genres = (function () {
    function Genres() {
    }
    Genres.ALL_GENRES = [
        "Action",
        "Comedy",
        "Drama",
        "Fantasy",
        "Adventure",
        "Horror",
        "Sci-Fi",
        "Crime",
        "Thriller",
        "Biography",
        "Music",
        "Animation",
        "Documentary",
        "Family",
        "Sport",
        "Mystery"
    ];
    return Genres;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSnackBar */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_token_storage__["a" /* TokenStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDialog */]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/movies/movie-utils-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieUtilsServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MovieUtilsServiceService = (function () {
    function MovieUtilsServiceService() {
    }
    MovieUtilsServiceService.prototype.filterMoviesByGenre = function (movies, genre) {
        return movies.filter(function (movie) { return movie.genre.toLowerCase().includes(genre.toLowerCase()); });
    };
    MovieUtilsServiceService.prototype.sortMoviesByName = function (movies) {
        movies.sort(function (movie1, movie2) {
            if (movie1.name > movie2.name) {
                return 1;
            }
            if (movie1.name < movie2.name) {
                return -1;
            }
            return 0;
        });
    };
    MovieUtilsServiceService.prototype.sortMoviesByImdb = function (movies) {
        movies.sort(function (movie1, movie2) {
            if (movie1.imdbRating < movie2.imdbRating) {
                return 1;
            }
            if (movie1.imdbRating > movie2.imdbRating) {
                return -1;
            }
            return 0;
        });
    };
    MovieUtilsServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MovieUtilsServiceService);
    return MovieUtilsServiceService;
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
    TvShowsService.prototype.addTvShow = function (tvShow) {
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__model_Urls__["a" /* Urls */].MOVIES_URL, JSON.stringify(tvShow), { responseType: 'json' })
            .subscribe(function (data) {
            console.log('Add tv show: ' + JSON.stringify(data));
        });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
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