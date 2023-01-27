import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { combineLatest, EMPTY, fromEvent, Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { AuthService } from '../../auth';
import { User } from '../../auth/models/user';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'one-portal-shell-header',
  template: `
  <header>
    <ng-container *ngIf="(combined$ | async) as combined">
      <ng-container [ngSwitch]="combined.route">
        <ng-container *ngSwitchCase="'home'">
          <h1>Select your Application</h1>
        </ng-container>
        <ng-container *ngSwitchCase="'auth/login'">
          <h1>Login</h1>
        </ng-container>
        <ng-container *ngSwitchDefault>
        <a routerLink="home">
          <mat-icon aria-hidden="false" aria-label="home icon" class="material-icons-outlined">home</mat-icon>
        </a> 
        <a routerLink="">
          <ng-container *ngIf="combined.appName; else justHeader">
            <h1>Header of {{combined.appName}}</h1>
          </ng-container>
          <ng-template #justHeader>
            <h1>Header</h1>
          </ng-template>
        </a>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="user$ | async; else not_connected">
      <mat-icon aria-hidden="false" aria-label="logout icon" class="material-icons-outlined" (click)="logout()">logout</mat-icon>
    </ng-container>
    <ng-template #not_connected>
      <a routerLink="auth/login">
        <mat-icon aria-hidden="false" aria-label="user login icon" class="material-icons-outlined">person</mat-icon>
      </a> 
    </ng-template>
  </header>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  combined$: Observable<{appName: string, route: string}> = EMPTY;
  applicationName$: Observable<string> = EMPTY;

  user$: Observable<User | null> = EMPTY;
  route$: Observable<string> = EMPTY;

  private _authService = inject(AuthService);
  private _router = inject(Router);

  ngOnInit(): void {
    this.user$ = this._authService.getConnectedUser();
 
    this.applicationName$ = fromEvent<CustomEvent>(document, 'app-loaded').pipe(
      map(event => event.detail),
      startWith('')
    );

    this.route$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects.replace('/', ''))
    );

    this.combined$ = combineLatest([this.applicationName$, this.route$]).pipe(map(([appName, route]) => ({appName, route})))
  }

  logout() {
    this._authService.logout()
  }

}
