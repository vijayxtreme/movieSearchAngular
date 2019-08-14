import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from '../search-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 // values = '';
  searchTerm = '';
  foundMovies;

  constructor(private movieService: SearchMoviesService) { }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.searchTerm = value;
    this.handle(this.searchTerm);
  }

  handle(value: string) {
    this.searchTerm = value
    console.log("Searching")
    this.movieService.getMovieByTerm(this.searchTerm)
     .subscribe(movies => {
      console.log(movies);
      let foundMovies = movies.Search.map(item => {
        return { poster: item.Poster, name: item.Title, year: item.Year, imdb_url: item.imdbID }
      })
      this.foundMovies = foundMovies;
     });
  }

}
