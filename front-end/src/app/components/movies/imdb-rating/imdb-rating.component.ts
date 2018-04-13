import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-imdb-rating',
  templateUrl: './imdb-rating.component.html',
  styleUrls: ['./imdb-rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImdbRatingComponent implements OnInit {

  @Input()
  private imdbRating : number;

  constructor() { }

  ngOnInit() {
  }

}
