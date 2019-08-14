import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-movie-listing]', //make this an attribute
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
