import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService } from '../../auth';
import { User } from '../../auth/models/user';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'lib-header',
  template: `
  <header>
    <ng-container *ngIf="(route$ | async) !== 'home' else home_title">
      <a routerLink="home">
          <mat-icon aria-hidden="false" aria-label="home icon" class="material-icons-outlined">home</mat-icon>
      </a> 
      <a routerLink="">
        <ng-container *ngIf="applicationName; else justHeader">
          <h1>Header of {{applicationName}}</h1>
        </ng-container>
        <ng-template #justHeader>
          <h1>Header</h1>
        </ng-template>
      </a>
    </ng-container>
    <ng-template #home_title>
      <h1>Select your Application</h1>
    </ng-template>
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

  applicationName: string = '';

  user$: Observable<User | null> = EMPTY;
  route$: Observable<string> = EMPTY;

//  private _config = inject(CONFIG);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  ngOnInit(): void {
  //  this.applicationName = this._config.appName;
    this.user$ = this._authService.getConnectedUser();
    this.route$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd), 
      map(event => (event as NavigationEnd).url.replace('/', ''))
    );
  }

  logout() {
    this._authService.logout()
  }

}
