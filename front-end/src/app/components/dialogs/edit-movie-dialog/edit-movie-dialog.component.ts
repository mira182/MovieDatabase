import {Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatChipInputEvent, MatDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MovieService} from "../../../services/movies/movie.service";
import {Observable} from "rxjs/Observable";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-edit-movie-dialog',
  templateUrl: './edit-movie-dialog.component.html',
  styleUrls: ['./edit-movie-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditMovieDialogComponent implements OnInit {

  private editFormGroup : FormGroup;
  private allActors : string[];
  private displayActors : string[];
  selectable = true;
  removable = true;
  addOnBlur = true;
  filteredActors : Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  // @ViewChild('actorsInput') actorsInput: ElementRef<HTMLInputElement>;

  constructor(public dialogRef: MatDialogRef<EditMovieDialogComponent>, @Inject(MAT_DIALOG_DATA) public data,
              public movieService : MovieService) {
  }

  ngOnInit() {
    this.editFormGroup = new FormGroup({
      title: new FormControl(this.data.movie.name, Validators.required),
      year: new FormControl(this.data.movie.year, Validators.required),
      director: new FormControl(this.data.movie.directors, Validators.required),
      actors: new FormControl(this.data.movie.actors, Validators.required),
      country: new FormControl(this.data.movie.country, Validators.required),
      production: new FormControl(this.data.movie.production, Validators.required),
      genre: new FormControl(this.data.movie.genre, Validators.required),
      description: new FormControl(this.data.movie.description, Validators.required)
    });
    this.movieService.getAllActors().subscribe(actors => {
      this.allActors = actors;
      // filtering on typing in autocomplete input
      this.filteredActors = this.editFormGroup.get("actors").valueChanges.pipe(startWith(null),
        map((actor: string | null) => actor ? this._filter(actor) : this.allActors.slice()));
    });
    this.displayActors = this.editFormGroup.get("actors").value;
  }

  saveMovie() {
    this.dialogRef.close();
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our actor
    if ((value || '').trim()) {
      this.displayActors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.editFormGroup.get("actors").setValue(null);
    console.log("add");
    console.log(this.displayActors);
  }

  remove(fruit: string): void {
    const index = this.displayActors.indexOf(fruit);
    if (index >= 0) {
      this.displayActors.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log("selected");
    console.log(event.option.viewValue);
    this.displayActors.push(event.option.viewValue);
    // this.actorsInput.nativeElement.value = '';
    this.editFormGroup.get("actors").setValue(null);
    // let option = event.option;
    // let value = option.value;
    // if ((value || '').trim()) {
    //   this.displayActors.push(value.trim());
    // }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allActors.filter(actor => actor.toLowerCase().indexOf(filterValue) === 0);
  }
}
