import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { StorageService } from '@the-one-portal/shared-library';
import { User } from './models/user';

const USER_TOKEN_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _connectedUser: BehaviorSubject<null | User>;
  private _connectedUserToken: BehaviorSubject<null | string>;

  constructor(private _http: HttpClient, 
    private _storage: StorageService,
    private _router: Router) {
      this._connectedUser = new BehaviorSubject<null | User>(null);
      const storedUserToken = this._storage.get<string | null>(USER_TOKEN_STORAGE_KEY);
      this._connectedUserToken = new BehaviorSubject<null | string>(storedUserToken);

      this._connectedUserToken.pipe(
        distinctUntilChanged(),
        tap(token => {
          this._storage.set(USER_TOKEN_STORAGE_KEY, token);
          if(token)
            this._router.navigateByUrl('/');
          else {
            this._router.navigateByUrl('/auth');
            this._connectedUser.next(null)
          }
        }),
        filter(token => !!token),
        switchMap(token => this.getUser(token as string))
      ).subscribe(
        user => this._connectedUser.next(user)
      );
  }

  getConnectedUserToken(): Observable<string | null> {
    return this._connectedUserToken.asObservable();
  }

  getConnectedUser(): Observable<User | null> {
    return this._connectedUser.asObservable();
  }

  login(login: string, password: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this._http.post<{ token: string }>('http://localhost:3000/login', { login, password }, { headers }).pipe(
      map(response => response.token),
      tap(token => this._connectedUserToken.next(token))
    );
  }

  logout(): void {
    this._connectedUserToken.next(null)
  }

  getUser(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this._http.get<{ user: User }>(`http://localhost:3000/user?token=${token}`, {headers}).pipe(
      map(response => response.user)
    )
  }
}
