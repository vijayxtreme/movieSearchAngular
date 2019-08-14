import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from './fakeMovies';


@Injectable({
  providedIn: 'root'
})

export class SearchMoviesService {

  constructor() { }

  getMovies(): Observable<any[]>{
    //do some API calls
    return of (MOVIES);
  }
}
