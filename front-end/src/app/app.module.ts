import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {routing} from "./app.routing";
import {MoviesCarouselComponent} from './components/movies/movies-carousel/movies-carousel.component';
import {ErrorComponent} from './components/error/error.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MovieItemComponent} from './components/movies/movie-item/movie-item.component';
import {MovieService} from "./services/movies/movie.service";
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth/auth.service";
import {AuthGuardService} from "./services/auth/auth-guard.service";
import {Interceptor} from "./services/interceptors/inteceptor";
import {TokenStorage} from "./services/auth/token.storage";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddMovieDialogComponent} from './components/dialogs/add-movie-dialog/add-movie-dialog.component';
import {TvShowItemComponent} from './components/tvshows/tv-show-item/tv-show-item.component';
import {TvShowCarouselComponent} from './components/tvshows/tv-show-carousel/tv-show-carousel.component';
import {ErrorDialogComponent} from './components/dialogs/error-dialog/error-dialog.component';
import {MoviesPageComponent} from './components/movies/movies-page/movies-page.component';
import {SidenavService} from "./services/sidenav-service.service";
import {TvshowsPageComponent} from './components/tvshows/tvshows-page/tvshows-page.component';
import {GetOmdbMovieDialogComponent} from './components/dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component';
import {OmdbService} from "./services/omdb/omdb-service.service";
import {MessageSnackbarService} from "./services/error/error-snackbar-service.service";
import {TvShowsService} from "./services/tvshows/tvshows.service";
import {MovieStatisticsComponent} from './components/movies/movie-statistics/movie-statistics.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MovieListItemComponent } from './components/movies/movie-list-item/movie-list-item.component';
import { MovieGenreBarComponent } from './components/movies/movie-genre-bar/movie-genre-bar.component';
import {MovieUtilsServiceService} from "./services/movies/movie-utils-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesCarouselComponent,
    ErrorComponent,
    NavBarComponent,
    MovieItemComponent,
    AddMovieDialogComponent,
    TvShowItemComponent,
    TvShowCarouselComponent,
    ErrorDialogComponent,
    MoviesPageComponent,
    TvshowsPageComponent,
    GetOmdbMovieDialogComponent,
    MovieStatisticsComponent,
    MoviesListComponent,
    MovieListItemComponent,
    MovieGenreBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, NgbModule,
    NgxCarouselModule, BrowserModule,FormsModule,routing, HttpClientModule,
    CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatFormFieldModule, MatIconModule, MatSidenavModule, MatMenuModule, MatExpansionModule, MatDividerModule, MatListModule,
    MatTooltipModule, MatSnackBarModule, MatButtonToggleModule, MatCheckboxModule, MatProgressSpinnerModule, MatGridListModule,
    MatSortModule, MatSelectModule, MatTabsModule, FlexLayoutModule, MatAutocompleteModule
  ],
  entryComponents: [
    AddMovieDialogComponent, ErrorDialogComponent, GetOmdbMovieDialogComponent
  ],
  // exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
  providers: [MovieService, MovieUtilsServiceService, TvShowsService, AuthService, AuthGuardService, TokenStorage,
    SidenavService, OmdbService, MessageSnackbarService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi : true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
