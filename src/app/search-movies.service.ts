import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from './fakeMovies';
import { Movie } from './movie';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchMoviesService {
  

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]>{
    //do some API calls
    return of (MOVIES);
  }
  getMovieByTerm(term: string): Observable<any> {
    let url=`http://www.omdbapi.com/?s=${term}&r=json&apikey=e93bd1`
    return this.http.get<Movie[]>(url)
  }
}
