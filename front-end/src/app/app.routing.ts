import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {MoviesListComponent} from "./components/movies/movies-list/movies-list.component";
import {AuthGuardService} from "./services/auth/auth-guard.service";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'movies', component: MoviesListComponent, }, // canActivate: [AuthGuardService]
  { path: 'login', component: LoginComponent },

  // otherwise redirect to profile
  {path : '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuardService] }
];

export const routing = RouterModule.forRoot(appRoutes);
