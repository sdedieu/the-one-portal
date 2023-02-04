import { TestBed } from '@angular/core/testing';

import { LotrMovieService } from './lotr-movie.service';

describe('LotrMovieService', () => {
  let service: LotrMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotrMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
