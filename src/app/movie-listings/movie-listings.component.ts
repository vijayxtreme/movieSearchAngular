import { Component, OnInit, Input } from '@angular/core';
//import { MOVIES } from '../fakeMovies'; //move this out and use a service
import { SearchMoviesService } from '../search-movies.service';


@Component({
  selector: 'app-movie-listings',
  templateUrl: './movie-listings.component.html',
  styleUrls: ['./movie-listings.component.css']
})
export class MovieListingsComponent implements OnInit {
 // @Input() movies;
  movies;

  constructor(private movieService: SearchMoviesService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
