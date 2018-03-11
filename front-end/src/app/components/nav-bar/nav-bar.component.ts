import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenStorage} from "../../services/auth/token.storage";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(private token: TokenStorage, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.token.signOut();
    this.authService.setLoggedIn(false);
  }

}
