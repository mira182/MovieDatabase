import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-movie-statistics',
  templateUrl: './movie-statistics.component.html',
  styleUrls: ['./movie-statistics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieStatisticsComponent implements OnInit {

  @Input() moviesList : Array<Movie>;
  displayedColumns = ['genre', 'count'];
  private data : Array<StatisticsRow>;
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    for (let movie of this.moviesList) {
      this.data.push({
        genre: movie.genre,
        count: this.moviesList.filter(movie => movie.genre.toLowerCase().includes(movie.genre.toLowerCase())).length
      });
    }
    console.log(this.data);
    this.dataSource.data = this.data;
  }

}

export interface StatisticsRow {
  genre : string;
  count : number;
}
