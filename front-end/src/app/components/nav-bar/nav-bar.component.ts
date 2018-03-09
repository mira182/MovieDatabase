import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenStorage} from "../../services/token.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  constructor(private token: TokenStorage, private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.token.signOut();
  }

}
