import { Injectable } from '@angular/core';
import {MatSidenav} from "@angular/material";

@Injectable()
export class SidenavService {
  public sideNav: MatSidenav;
  constructor() { }

  setSideNav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }

  getSideNav() {
    return this.sideNav;
  }

  toggleSideNav() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }
}
