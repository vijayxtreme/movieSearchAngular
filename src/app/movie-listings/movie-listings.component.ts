import { Component, OnInit, Input } from '@angular/core';
//import { MOVIES } from '../fakeMovies'; //move this out and use a service



@Component({
  selector: 'app-movie-listings',
  templateUrl: './movie-listings.component.html',
  styleUrls: ['./movie-listings.component.css']
})
export class MovieListingsComponent implements OnInit {
  @Input() movies;
  //movies;

  constructor() { }

  ngOnInit() {

  }
}
