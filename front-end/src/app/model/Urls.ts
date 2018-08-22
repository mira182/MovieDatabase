export class Urls {

  // AUTH
  public static readonly GENERATE_TOKEN = 'http://localhost:8080/token/generate-token';

  // MOVIES
  public static readonly MOVIES_LIST = "John Wick, 300, 300 Rise of an Empire, Alien vs Predator, Aliens vs Predator Requiem, Assassin's Creed, Batman, Batman Begins, The Dark Knight, The Dark Knight Rises, Blade, Blade 2, Blade Trinity, Boyka Undisputed IV, Constantine, Dracula Untold, Fearless, Immortals, Ip Man, Ip Man 2, IP Man The Final Fight, John Wick: Chapter 2, Kingsman The Secret Service, Law Abiding Citizen, Mad Max Fury Road, Ninja Assassin, Predators, Punisher, Taken, Teenage Mutant Ninja Turtles, Teenage Mutant Ninja Turtles Out Of The Shadows, Teenage Mutant Ninja Turtles, Teenage Mutant Ninja Turtles The Secret Of The Ooze, Teenage Mutant Ninja Turtles 3, The A Team, The_Chronicles_of_Riddick, The Last Boy Scout, The Magnificent Seven, The Raid 2, The Raid Redemption, Troy, Wanted, American Pie, American Pie 2, Clerks 2, Clerks, Deathgasm, Fack ju Goethe, Horrible Bosses 2, Sausage Party, Ted 2, The Edge Of Seventeen, The Waterboy, The Wolf of Wall Street, How To Train Your Dragon, How to Train Your Dragon 2, Reign Of Fire, Harry Potter And The Philosopher's Stone, Harry Potter And The Chamber Of Secrets, Harry Potter And The Prisoner Of Azkaban, Harry Potter And The Goblet Of Fire, Harry Potter And The Order Of The Phoenix, Harry Potter And The Half-Blood Prince, Harry Potter And The Deathly Hallows Part One, Harry Potter And The Deathly Hallows Part Two, Lord of the Rings The Fellowship of the Ring, Lord of the Rings The Two Towers, Lord of the Rings The Return of the King, Twilight, Twilight New Moon, Twilight Eclipse, Twilight Breaking Dawn Part1, Twilight Breaking Dawn Part2, Underworld, Underworld Rise of the Lycans, Underworld Awakening, Underworld Evolution, Underworld Blood Wars, Warcraft, Iron Man, Iron Man 2, iron man 3, Man of Steel, SpiderMan, Spider Man 2, SpiderMan 3, Spider-Man Homecoming, Suicide Squad, The Amazing Spider Man 2, The Amazing Spiderman, The Avengers, Thor, Thor Ragnarok, Thor The Dark World, X-Men Days of Future Past, X-Men First Class, X-Men, X-Men 2, X-Men Apocalypse, X-Men Origins Wolverine, X-Men The Last Stand, The Wolverine, Ant-Man, Avengers Age of Ultron, Batman v Superman Dawn of Justice, Captain America, Captain America Civil War, captain america the winter soldier, Deadpool, Doctor Strange, Fantastic Four, Guardians of the Galaxy, Guardians Of The Galaxy Vol  2, Cast Away, Hair, Lords of Dogtown, October Sky, The Blind Side, The School Of Rock, Sphere, Star Trek, Star Trek - The Motion Picture, Star Trek Beyond, Star Trek The Wrath of Khan, Star Trek The Search For Spock, Star Trek Into Darkness, Star Trek The Voyage Home, Star Trek Insurrection, Star Trek The Final Frontier, Star Trek The Undiscovered Country, Star Trek Generations, Star Trek First Contact, Star Trek Nemesis, Star Wars Episode The Phantom Menace, Star Wars Episode Attack Of The Clones, Star Wars Episode Revenge of the Sith, Star Wars Episode A New Hope, Star Wars Episode The Empire Strikes Back, Star Wars Episode Return Of The Jedi, Star Wars Episode The Force Awakens, Star Wars Episode The Force Awakens, Stargate The Ark of Truth, Stargate continuum, Starship Troopers, Starship Troopers 3, Starship Troopers Invasion, Terminator, Terminator 2: Judgment Day, Terminator Genisys, The Martian, The Matrix, The Matrix Reloaded, The Matrix Revolutions, Time Lapse, War For The Planet Of The Apes, Arrival, Back to the Future, Back to the Future Part II, Back to the Future Part III, battle los angeles, Dawn of the Planet of the Apes, District, Edge of Tomorrow, Equilibrium , Ex Machina, Independence Day, Independence Day Resurgence, Interstellar, Men In Black, Men In Black 2, Men In Black 3, Phenomenon, Project Almanac, Rise of the Planet of the Apes 2011, Rogue One, Donnie Darko, Exam, Identity, Into The Wild, K-PAX, Predestination, The Man From Earth, The Mist, Triangle, Whiplash, Zeitgeist Addendum, Love, 10 Things I Hate About You, 500 Days Of Summer, A Lot Like Love, A Walk to Remember, About Time, Before Midnight, Before Sunrise, Before Sunset, Blue Valentine, Blue Is the Warmest Color, Chasing Liberty, Cruel Intentions, Flipped, Good Will Hunting, I Origins, It's Kind of a Funny Story, Love Actually, Love Rosie, Match Point, No Strings Attached, Once, One Day, Pretty Woman, Ruby Sparks, Scott Pilgrim vs the World, Shes All That, sing street, Stuck in Love, The Breakfast Club, The Graduate, The Spectacular Now, The Perks Of Being A Wallflower, Valentine's Day, What If, Wicker Park";
  // public static readonly MOVIES_LIST = "John Wick, 300, 300 Rise of an Empire, Alien vs Predator, Wicker Park";
  public static readonly MOVIES_URL = "http://localhost:8080/movies";
  public static readonly OMDB_MOVIE_STORE_URL = "http://localhost:8080/omdb/storeOmdbMovie";
  public static readonly OMDB_MOVIES_STORE_URL = "http://localhost:8080/omdb/storeOmdbMovies";
  public static readonly OMDB_IMPORT_MOVIES_URL = "http://localhost:8080/omdb/importMovies";

  // OMDB
  public static OMDB_MOVIE_GET_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";
  public static OMDB_TVSHOW_GET_URL = "http://www.omdbapi.com/?t=%s&type=series&apikey=3534d3d7";

  // TV SHOWS
  public static readonly TV_SHOWS_LIST = "13 Reasons Why, 4400, Andromeda, Archer, Battlestar Galactica, Black Books, Breaking Bad, Brooklyn Nine Nine, Dark Angel, Eureka, Fargo, Friends, Game of Thrones, Heroes, How Not to Live Your Life, Jericho, Jessica Jones, Legend of the Seeker, Lois and Clark The New Adventures of Superman, Marvels Daredevil, Marvels Jessica Jones, MASH, Merlin, Misfits, Peaky Blinders, Preacher, RED DWARF, Rome, Roswell, Sense8, Sherlock, SkinsUK, Sliders, Smallville, Sons of Anarchy, Spartacus Season, Spiderman 90's Animated, Stargate Atlantis, Stargate SG1, Star Trek DS9, Star Trek Enterprise, Star Trek The Next Generation, Supernatural Season, Survivors, That 70's Show, The IT Crowd, The Wire Ultimate, VEEP, Vikings, You're the worst";
  public static readonly TV_SHOWS_URL = "http://localhost:8080/tvshows";
  public static readonly OMDB_IMPORT_TV_SHOWS_URL = "http://localhost:8080/omdb/importTvShows";
  public static readonly OMDB_TVSHOW_STORE_URL = "http://localhost:8080/omdb/storeOmdbTvShow";
  public static readonly OMDB_TVSHOWS_STORE_URL = "http://localhost:8080/omdb/storeOmdbTvShows";
}
