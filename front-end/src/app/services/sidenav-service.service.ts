import { Injectable } from '@angular/core';
import {MatSidenav} from "@angular/material";

@Injectable()
export class SidenavServiceService {
  public sideNav: MatSidenav;
  constructor() { }

  setSideNav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }
}
