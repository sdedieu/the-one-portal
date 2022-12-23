import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, shareReplay, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Character, CharacterRaceFilter, CharacterRealm, Characters } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class LotrCharacterService {
  
  constructor(private _http: HttpClient){}
  
  private _cachedCharacters$!: Observable<Characters>;

  getAll(): Observable<Characters> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.secretToken}`
    })
    if(!this._cachedCharacters$) {
     this._cachedCharacters$ = this._http.get<{docs: Characters}>('https://the-one-api.dev/v2/character', {headers}).pipe(
        map(res => res.docs), 
        shareReplay(1)
      )
    }
    return this._cachedCharacters$;
  }

  getRaces(): Observable<CharacterRaceFilter[]> {
    return this.getAll().pipe(
      map(chars => chars.reduce((prev: CharacterRaceFilter[], curr: Character) => !curr.race || curr.race === 'NaN' || prev.includes(curr.race) ? prev : prev.concat(curr.race), []))
    )
  }

  getRealms(): Observable<CharacterRealm[]> {
    return this.getAll().pipe(
      map(chars => chars.reduce((prev: CharacterRealm[], curr: Character) => !curr.realm || curr.realm === 'NaN' || prev.includes(curr.realm) ? prev : prev.concat(curr.realm), []))
    )
  }
}

