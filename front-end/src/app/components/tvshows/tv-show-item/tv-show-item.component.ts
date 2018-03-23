import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TvShow} from "../../../model/tvshow";
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";
import {MessageSnackbarService} from "../../../services/error/error-snackbar-service.service";
import {TvShowsService} from "../../../services/tvshows/tvshows.service";

@Component({
  selector: 'app-tv-show-item',
  animations: [SlideInOutAnimation, IndicatorRotate],
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvShowItemComponent implements OnInit {

  @Output() tvShowDeleteEvent = new EventEmitter<TvShow>();
  @Input() tvShow : TvShow;
  animationState = 'out';
  expanded = false;

  constructor(private tvShowService : TvShowsService, private messageSnackBar : MessageSnackbarService) { }

  ngOnInit() {
  }

  toggleShowDiv() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
    this.expanded = !this.expanded;
  }

  deleteTvShow() {
    this.tvShowService.deleteTvShow(this.tvShow.id).subscribe((result) => {
      this.messageSnackBar.openMessageSnackBar("TV show " + this.tvShow.name + " deleted successfully.");
      this.tvShowDeleteEvent.next(this.tvShow);
    }, (error) => {
      this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
    });
  }
}
