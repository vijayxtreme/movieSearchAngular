import { TestBed } from '@angular/core/testing';

import { SearchMoviesService } from './search-movies.service';

describe('SearchMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchMoviesService = TestBed.get(SearchMoviesService);
    expect(service).toBeTruthy();
  });
});
