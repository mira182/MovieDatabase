export class Urls {

  // MOVIES
  public static readonly MOVIES_LIST = "John Wick  ,300 ,300 Rise of an Empire ,Alien vs Predator ,Aliens vs Predator Requiem,Assassin's Creed  ,Batman,Batman ,Batman Begins ,The Dark Knight ,The Dark Knight Rises ,Blade,Blade ,Blade II ,Blade III - Trinity ,Constantine ,Dracula Untold ,Fearless,Immortals ,IP Man ,Ip Man 2 ,IP Man 3 - The Final Fight,John Wick Chapter 2  ,Kingsman The Secret Service ,Law Abiding Citizen ,Mad Max Fury Road ,Ninja Assassin ,Predators ,Punisher War Zone ,Taken  Extended Cut,Teenage Mutant Ninja Turtles ,Teenage Mutant Ninja Turtles Out Of The Shadows  ,Teenage.Mutant.Ninja.Turtles,Teenage.Mutant.Ninja.Turtles.2,Teenage.Mutant.Ninja.Turtles.3,The A Team,The Chronicles of Riddick ,The Last Boy Scout ,The Magnificent Seven  ,The Raid 2  ,The Raid Redemption ,Troy ,Wanted ,American Pie  ,American Pie 2  ,Clerks 2 ,Clerks THEATRICAL  ,Deathgasm  ,Fack ju Gothe - 2013,Horrible Bosses 2 ,Sausage.Party,Ted.2,The Edge Of Seventeen  ,The Waterboy ,The Wolf of Wall Street ,Reign Of Fire ,The.Harry.Potter.Movies,Lord of the rings The.Fellowship.of.the.Ring,Lord of the rings The.Two.Towers,Lord of the rings The.Return.of.the.King, Twilight 1, Twilight 2, Twilight 3, Twilight 4,Underworld,Underworld - Extended Edition ,Underworld - Rise of the Lycans ,Underworld Awakening  ,Underworld Evolution ,Warcraft  ,Iron Man 1,Iron Man 2,Iron.Man.3,Man of Steel ,Spider Man Trilogy ,Spiderman ,Spiderman 2 ,Spiderman 3 ,Spider-Man Homecoming  ,Suicide Squad  ,The Amazing Spider Man 2  ,The Amazing Spiderman ,The Avengers ,Thor ,Thor Ragnarok  ,Thor The Dark World ,X-Men Complete 720p BD-Rips Eng],X Men Days of Future Past ,X Men First Class ,X-Men ,X-Men 2 ,X-Men Apocalypse  ,X-Men Origins Wolverine ,X-Men The Last Stand ,X-Men The Wolverine ,Ant-Man ,Avengers Age of Ultron ,Batman.v.Superman.Dawn.of.Justice,Captain America - The First Avenger ,Captain.America.The.Winter.Soldier,Deadpool,Doctor Strange  ,Fantastic Four ,Guardians of the Galaxy ,Guardians Of The Galaxy Vol. 2  ,Cast Away ,Hair,Lords.of.Dogtown,October Sky ,The Blind Side ,The School of Rock ,Sphere ,Star Trek Compleate,Star Trek ,Star Trek Beyond  ,Star Trek Into Darkness ,Star Wars Episode 1,Star Wars Episode 2,Star Wars Episode 3,Star Wars Episode 4,Star Wars Episode 5,Star Wars Episode 6,Star Wars Episode VII - The Force Awakens  ,Stargate The Ark of Truth,Stargate.Continuum,Starship Troopers ,Starship Troopers 3 Marauder ,Starship Troopers Invasion ,Terminator ,Terminator 2 Judgement Day ,Terminator Genisys ,The Martian  ,The Matrix,The Matrix Reload,The Matrix Revolution,Time Lapse ,War For The Planet Of The Apes  ,Arrival  ,Back to the Future 1,Back to the Future 2,Back to the Future 3,Battle - Los Angeles ,Dawn of the Planet of the Apes ,District 9 ,Edge of Tomorrow ,Equilibrium ,Ex Machina ,Independence Day,Independence.Day.Resurgence,Interstellar ,Men In Black ,Men In Black II ,Men In Black III ,Phenomenon,Project Almanac ,Rise of the Planet of the Apes ,Star wars Rogue.One,Donnie Darko,Exam ,Identity ,Into The Wild ,K-PAX ,Predestination ,Revolver ,The Man From the Earth ,The Mist ,Triangle ,Whiplash,Zeitgeist Addendum ,Love,10 Things I Hate About You  ,500 Days Of Summer ,A Lot Like Love ,A Walk to Remember ,About Time ,Before Midnight ,Before Sunrise,Before Sunset ,Blue Valentine ,Blue.Is.the.Warmest.Color,Chasing Liberty,Cruel Intentions ,Flipped ,Good Will Hunting,I Origins ,Its Kind of a Funny Story ,Love Actually ,Love Rosie ,Match.Point,No Strings Attached ,Once ,One Day ,Pretty Woman ,Ruby.Sparks,Scott Pilgrim vs the World  ,She's All That ,Sing street,Stuck in Love ,The Breakfast Club ,The Graduate,The Spectacular Now  ,The.Perks.Of.Being.A.Wallflower,Valentine's Day ,What If,Wicker.Park";
  public static readonly MOVIES_URL = "http://localhost:8080/movies";

  // OMDB
  public static readonly OMDB_STORE_URL = "http://localhost:8080/omdb/storeOmdbMovie";
  public static readonly OMDB_IMPORT_MOVIES_URL = "http://localhost:8080/omdb/importMovies";
  public static OMDB_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";

  // TV SHOWS
  public static readonly TV_SHOWS_LIST = "13 Reasons Why, 4400, Andromeda, Archer, Battlestar Galactica, Black Books, Breaking Bad, Brooklyn Nine Nine, Dark Angel, Eureka, Fargo, Friends, Game of Thrones, Heroes, How Not to Live Your Life, Jericho, Jessica Jones, Legend of the Seeker, Lois and Clark The New Adventures of Superman, Marvels Daredevil, Marvels Jessica Jones, MASH, Merlin, Misfits, Peaky Blinders, Preacher, RED DWARF, Rome, Roswell, Sense8, Sherlock, SkinsUK, Sliders, Smallville, Sons of Anarchy, Spartacus Season, Spiderman 90's Animated, Stargate Atlantis, Stargate SG-1, Star Trek DS9, Star Trek Enterprise, Star Trek The Next Generation, Supernatural Season, Survivors, That 70's Show, The IT Crowd, The Wire Ultimate, VEEP, Vikings, Youre the worst";
  public static readonly TV_SHOWS_URL = "http://localhost:8080/tvshows";
  public static readonly OMDB_IMPORT_TV_SHOWS_URL = "http://localhost:8080/omdb/importTvShows";
}
