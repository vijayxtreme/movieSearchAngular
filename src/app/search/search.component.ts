import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 // values = '';
  searchTerm = '';

  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.searchTerm = value;
    this.handle(this.searchTerm);
  }

  handle(value: string) {
    this.searchTerm = value
    console.log("Searching")

  }

}
