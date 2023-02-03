import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@the-one-portal/one-ui-library';
import { Observable, tap, map, shareReplay, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movies } from '../interfaces/movie';
import { LotrQuoteService } from './lotr-quote.service';

@Injectable({
  providedIn: 'root'
})
export class LotrMovieService {

  private _http = inject(HttpClient);
  private _lotrQuoteService = inject(LotrQuoteService);
  private _localStorageService = inject(LocalStorageService);

  private _cachedMovies$!: Observable<Movies>;

  getAll(): Observable<Movies> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    if (!this._cachedMovies$) {
      const stored = this._localStorageService.get<Movies>('movies');
      this._cachedMovies$ = (stored
        ? of(stored)
        : this._http.get<{ docs: Movies }>('http://localhost:3000/movies', { headers }).pipe(
          map(res => res.docs),
          tap(movies => this._localStorageService.set('movies', movies))
        )).pipe(shareReplay(1))
    }
    return this._cachedMovies$;
  }
}
