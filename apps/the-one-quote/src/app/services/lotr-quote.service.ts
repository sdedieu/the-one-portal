import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StorageService } from '@the-one-portal/shared-library';
import { concatMap, of, scan } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable, tap, shareReplay } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Quotes } from '../interfaces/quote';

@Injectable({
  providedIn: 'root'
})
export class LotrQuoteService {

  private _http = inject(HttpClient);
  private _localStorageService = inject(StorageService);

  private _cachedQuotes$!: Observable<Quotes>;

  getAll(): Observable<Quotes> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.secretToken}`
    })
    if (!this._cachedQuotes$) {
      const stored = this._localStorageService.get<Quotes>('quotes');

      const page$ = new BehaviorSubject(1);
      this._cachedQuotes$ = (stored
        ? of(stored)
        : page$.pipe(
          concatMap(page => this._http.get<{ docs: Quotes, pages: number }>(`https://the-one-api.dev/v2/quote?page=${page}`, { headers }).pipe(
            tap(res => { if (res.pages > page$.value) { page$.next(page$.value + 1) } })
          )),
          scan((acc: Quotes, res) => acc.concat(res.docs), []),
          filter(quotes => !!quotes.length),
          tap(quotes => this._localStorageService.set('quotes', quotes)),
        )).pipe(shareReplay(1))
    }
    return this._cachedQuotes$;
  }
}
