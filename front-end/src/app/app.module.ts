import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {routing} from "./app.routing";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import {MovieService} from "./services/movie.service";
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {Interceptor} from "./services/inteceptor";
import {TokenStorage} from "./services/token.storage";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesListComponent,
    ErrorComponent,
    NavBarComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgxCarouselModule, BrowserModule,FormsModule,routing, HttpClientModule,
    CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule
  ],
  // exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
  providers: [MovieService, AuthService, TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
