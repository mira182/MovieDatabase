import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatFormFieldModule, MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { routing } from "./app.routing";
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';
import { MovieService } from "./services/movies/movie.service";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/auth/auth-guard.service";
import { Interceptor } from "./services/interceptors/inteceptor";
import { TokenStorage } from "./services/auth/token.storage";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMovieDialogComponent } from './components/dialogs/add-movie-dialog/add-movie-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesListComponent,
    ErrorComponent,
    NavBarComponent,
    MovieItemComponent,
    AddMovieDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgxCarouselModule, BrowserModule,FormsModule,routing, HttpClientModule,
    CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatFormFieldModule
  ],
  entryComponents: [
    AddMovieDialogComponent
  ],
  // exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
  providers: [MovieService, AuthService, AuthGuardService, TokenStorage,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi : true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
