import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuardService} from "./services/auth/auth-guard.service";
import {MoviesPageComponent} from "./components/movies/movies-page/movies-page.component";
import {TvshowsPageComponent} from "./components/tvshows/tvshows-page/tvshows-page.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, // canActivate: [AuthGuardService]
  { path: 'movies', component: MoviesPageComponent }, // canActivate: [AuthGuardService]
  { path: 'tvshows', component: TvshowsPageComponent }, // canActivate: [AuthGuardService]
  { path: 'login', component: LoginComponent },

  // otherwise redirect to profile
  {path : '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuardService] }
];

export const routing = RouterModule.forRoot(appRoutes);
