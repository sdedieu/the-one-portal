import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatestWith, tap, map, shareReplay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { LotrQuoteService } from './lotr-quote.service';
import { Character, Characters } from '../interfaces/character';
import { Quote } from '../interfaces/quote';
import { LocalStorageService } from '@the-one-portal/one-ui-library';

@Injectable({
  providedIn: 'root'
})
export class LotrCharacterService {

  private _http = inject(HttpClient);
  private _lotrQuoteService = inject(LotrQuoteService);
  private _localStorageService = inject(LocalStorageService);
  
  private _cachedCharacters$!: Observable<Characters>;

  getAllWithQuotes(): Observable<Characters> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.secretToken}`
    })
    if (!this._cachedCharacters$) {
      const stored = this._localStorageService.get<Characters>('characters');
      this._cachedCharacters$ = (stored
        ? of(stored)
        : this._http.get<{ docs: Characters }>('https://the-one-api.dev/v2/character', { headers }).pipe(
          map(res => res.docs.map(c => ({ ...c, quotes: [] }))),
          combineLatestWith(this._lotrQuoteService.getAll()),
          map(([characters, quotes]) => quotes.reduce((prev: Characters, curr: Quote) => {
            const charIndex = prev.findIndex((char: Character) => char._id === curr.character);
            if (charIndex > -1) prev[charIndex].quotes.push(curr);
            return prev;
          }, characters)),
          tap(characters => this._localStorageService.set('characters', characters))
        )
      ).pipe(shareReplay(1))
    }
    return this._cachedCharacters$;
  }
}