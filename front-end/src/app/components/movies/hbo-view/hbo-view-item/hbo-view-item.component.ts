import {Component, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Item} from "../../../../model/item";

@Component({
  selector: 'app-hbo-view-item',
  templateUrl: './hbo-view-item.component.html',
  styleUrls: ['./hbo-view-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HboViewItemComponent implements OnInit {

  @Input() movie : Item;

  constructor(private renderer2: Renderer2, private router : Router) { }

  ngOnInit() {
  }

  mouseenter (event) {
    this.renderer2.addClass(event.target, 'mat-elevation-z12')
  }

  mouseleave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z12')
  }

  showDetails() {
      if (this.router.url.includes('tvshows')) {
        this.router.navigateByUrl('tvshows/' + this.movie.id);
      } else {
        this.router.navigateByUrl('movies/' + this.movie.id);
      }
  }
}
