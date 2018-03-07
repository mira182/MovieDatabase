import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
