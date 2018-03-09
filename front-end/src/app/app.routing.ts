import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to profile
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
