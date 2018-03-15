import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../../model/movie";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {TvShow} from "../../model/tvshow";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class MovieService {

  private readonly URL = "http://localhost:8080/movies";
  private MOVIES = "John Wick  ,300 ,300 Rise of an Empire ,Alien vs Predator ,Aliens vs Predator Requiem,Assassin's Creed  ,Batman,Batman ,Batman Begins ,The Dark Knight ,The Dark Knight Rises ,Blade,Blade ,Blade II ,Blade III - Trinity ,Constantine ,Dracula Untold ,Fearless,Immortals ,IP Man ,Ip Man 2 ,IP Man 3 - The Final Fight,John Wick Chapter 2  ,Kingsman The Secret Service ,Law Abiding Citizen ,Mad Max Fury Road ,Ninja Assassin ,Predators ,Punisher War Zone ,Taken  Extended Cut,Teenage Mutant Ninja Turtles ,Teenage Mutant Ninja Turtles Out Of The Shadows  ,Teenage.Mutant.Ninja.Turtles,Teenage.Mutant.Ninja.Turtles.2,Teenage.Mutant.Ninja.Turtles.3,The A Team,The Chronicles of Riddick ,The Last Boy Scout ,The Magnificent Seven  ,The Raid 2  ,The Raid Redemption ,Troy ,Wanted ,American Pie  ,American Pie 2  ,Clerks 2 ,Clerks THEATRICAL  ,Deathgasm  ,Fack ju Gothe - 2013,Horrible Bosses 2 ,Sausage.Party,Ted.2,The Edge Of Seventeen  ,The Waterboy ,The Wolf of Wall Street ,Reign Of Fire ,The.Harry.Potter.Movies,Lord of the rings The.Fellowship.of.the.Ring,Lord of the rings The.Two.Towers,Lord of the rings The.Return.of.the.King,Twilight.Saga.Complete.2008-2012.1080p.Rifftrax.6ch.2ch.v2,Underworld,Underworld - Extended Edition ,Underworld - Rise of the Lycans ,Underworld Awakening  ,Underworld Evolution ,Warcraft  ,Iron Man 1,Iron Man 2,Iron.Man.3,Man of Steel ,Spider Man Trilogy ,Spiderman ,Spiderman 2 ,Spiderman 3 ,Spider-Man Homecoming  ,Suicide Squad  ,The Amazing Spider Man 2  ,The Amazing Spiderman ,The Avengers ,Thor ,Thor Ragnarok  ,Thor The Dark World ,X-Men Complete 720p BD-Rips Eng],X Men Days of Future Past ,X Men First Class ,X-Men ,X-Men 2 ,X-Men Apocalypse  ,X-Men Origins Wolverine ,X-Men The Last Stand ,X-Men The Wolverine ,Ant-Man ,Avengers Age of Ultron ,Batman.v.Superman.Dawn.of.Justice,Captain America - The First Avenger ,Captain.America.The.Winter.Soldier,Deadpool,Doctor Strange  ,Fantastic Four ,Guardians of the Galaxy ,Guardians Of The Galaxy Vol. 2  ,Cast Away ,Hair,Lords.of.Dogtown,October Sky ,The Blind Side ,The School of Rock ,Sphere ,Star Trek Compleate,Star Trek ,Star Trek Beyond  ,Star Trek Into Darkness ,Star Wars Episode 1,Star Wars Episode 2,Star Wars Episode 3,Star Wars Episode 4,Star Wars Episode 5,Star Wars Episode 6,Star Wars Episode VII - The Force Awakens  ,Stargate The Ark of Truth,Stargate.Continuum,Starship Troopers ,Starship Troopers 3 Marauder ,Starship Troopers Invasion ,Terminator ,Terminator 2 Judgement Day ,Terminator Genisys ,The Martian  ,The Matrix,The Matrix Reload,The Matrix Revolution,Time Lapse ,War For The Planet Of The Apes  ,Arrival  ,Back to the Future 1,Back to the Future 2,Back to the Future 3,Battle - Los Angeles ,Dawn of the Planet of the Apes ,District 9 ,Edge of Tomorrow ,Equilibrium ,Ex Machina ,Independence Day,Independence.Day.Resurgence,Interstellar ,Men In Black ,Men In Black II ,Men In Black III ,Phenomenon,Project Almanac ,Rise of the Planet of the Apes ,Star wars Rogue.One,Donnie Darko,Exam ,Identity ,Into The Wild ,K-PAX ,Predestination ,Revolver ,The Man From the Earth ,The Mist ,Triangle ,Whiplash,Zeitgeist Addendum ,Love,10 Things I Hate About You  ,500 Days Of Summer ,A Lot Like Love ,A Walk to Remember ,About Time ,Before Midnight ,Before Sunrise,Before Sunset ,Blue Valentine ,Blue.Is.the.Warmest.Color,Chasing Liberty,Cruel Intentions ,Flipped ,Good Will Hunting,I Origins ,Its Kind of a Funny Story ,Love Actually ,Love Rosie ,Match.Point,No Strings Attached ,Once ,One Day ,Pretty Woman ,Ruby.Sparks,Scott Pilgrim vs the World  ,She's All That ,Sing street,Stuck in Love ,The Breakfast Club ,The Graduate,The Spectacular Now  ,The.Perks.Of.Being.A.Wallflower,Valentine's Day ,What If,Wicker.Park";

  constructor(protected httpClient: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.URL, {responseType: 'json'});
  }

  public addMovie(movie : Movie) {
    this.httpClient.post<Movie>(this.URL, JSON.stringify(movie), {responseType: 'json'})
      .subscribe(data => {
        console.log('Add movie: ' + JSON.stringify(data));
      });
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:8080/omdb/omdbMovie', {params: new HttpParams().set('title', title)});
  }

  public importMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:8080/omdb/importMovie', {params: new HttpParams().set('title', title)});
  }

  public importMovies() {
    this.httpClient.post<any>('http://localhost:8080/omdb/importMovies', this.MOVIES, {responseType: 'json'})
      .subscribe(data => {
        console.log('response: ' + data);
      });

    // this.httpClient.post<any>('http://www.omdbapi.com/?t=supermans&apikey=PlsBanMe', {responseType: 'json'})
    //   .subscribe(data => {
    //     console.log('response: ' + data);
    //   });
  }

  getAllTvShows(): Observable<TvShow[]> {
    return this.httpClient.get<TvShow[]>(this.URL, {responseType: 'json'});
  }
}
