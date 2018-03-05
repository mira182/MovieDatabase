import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '.././services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'

@Injectable()
export class UrlPermission implements CanActivate {

  constructor(private router: Router, private authService: AuthService,) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem('currentUser')) {
  //     // logged in so return true
  //     return true;
  //   }
  //
  //   // not logged in so redirect to login page with the return url
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      });
  }
}
