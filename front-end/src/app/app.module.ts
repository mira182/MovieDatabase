import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import { HomeComponent } from './components/home/home.component';
import {routing} from "./app.routing";
import {UrlPermission} from "./urlPermission/url.permission";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import {MovieService} from "./services/movie.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MoviesListComponent,
    ErrorComponent,
    NavBarComponent,
    MovieItemComponent,
  ],
  imports: [
    NgxCarouselModule, BrowserModule,HttpModule,FormsModule,routing, HttpClientModule
  ],
  providers: [MovieService, AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
