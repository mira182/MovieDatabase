import { OnInit, Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'spring boot and angular 4 secure authentication';

  constructor(public authService: AuthService, public router: Router) {

  }

  ngOnInit() {
  }

  // login out from the app
  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.router.navigate(['/error']);
        });
  }
}
