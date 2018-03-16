import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {TokenStorage} from "../../services/auth/token.storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  errorMessage:string;
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['movies']);
        this.authService.setLoggedIn(true);
      },
      error => {
        console.log("login failed: " + error);
      }
    );
  }
}
