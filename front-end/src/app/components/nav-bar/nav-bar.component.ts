import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenStorage} from "../../services/auth/token.storage";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {SidenavService} from "../../services/sidenav-service.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(private token: TokenStorage, private router: Router, private authService: AuthService, private sideNavService : SidenavService) { }

  ngOnInit() {
  }

  logOut() {
    this.token.signOut();
    this.authService.setLoggedIn(false);
  }

  toggleSideNav() {
    this.sideNavService.toggleSideNav();
  }

}
