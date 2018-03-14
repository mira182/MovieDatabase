import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {TvShow} from "../../../model/tvshow";
import {SlideInOutAnimation} from "../../animations/animations";

@Component({
  selector: 'app-tv-show-item',
  animations: [SlideInOutAnimation],
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvShowItemComponent implements OnInit {

  @Input() tvShow : TvShow;
  animationState = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
}
