import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@the-one-portal/one-ui-library';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Quotes } from '../interfaces/quote';

@Injectable({
  providedIn: 'root'
})
export class LotrQuoteService {

  private _http = inject(HttpClient);
  private _localStorageService = inject(LocalStorageService);

  private _cachedQuotes$!: Observable<Quotes>;

  getAll(): Observable<Quotes> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    if (!this._cachedQuotes$) {
      const stored = this._localStorageService.get<Quotes>('quotes');
      this._cachedQuotes$ = (stored
        ? of(stored)
        : this._http.get<{ docs: Quotes }>(`http://localhost:3000/quotes`, { headers }).pipe(
          map(res => res.docs),
          tap(quotes => this._localStorageService.set('quotes', quotes)),
        )).pipe(shareReplay(1))
    }
    return this._cachedQuotes$;
  }
}
