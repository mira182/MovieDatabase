import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {ActivatedRoute} from "@angular/router";
import {TvShowsService} from "../../../services/tvshows/tvshows.service";
import {TvShow} from "../../../model/tvshow";

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvshowDetailsComponent implements OnInit {

  private tvShow : TvShow = new TvShow();

  constructor(private tvShowService : TvShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(pathParams => {
      this.tvShowService.getTvShow(pathParams['id']).subscribe(tvShow => {
        this.tvShow = tvShow;
      });
    });
  }

}
