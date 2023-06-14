import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, EMPTY, filter, map } from 'rxjs';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'lib-footer',
  template: `
   <footer>
    <span>Footer</span>
    <span *ngIf="(route$ | async) !== 'home' && applicationNameAndVersion">{{applicationNameAndVersion}}</span>
    <span>Portal: {{version}}</span>
   </footer>
  `,
  styles: [
    `:host {
      width: 100%;
      background-color: rgb(241 245 249);
      position: fixed;
      bottom: 0;
    }
    footer {
      display: flex;
      align-items: center;
      padding: 1rem 2rem 1rem 2rem;
    }
    span {
      margin-left: 0.5rem;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  version = 'v1.1.1';
  applicationNameAndVersion: string = '';
  route$: Observable<string> = EMPTY;

  private _config = inject(CONFIG);
  private _router = inject(Router);

  ngOnInit(): void {
    this.route$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd), 
      map(event => (event as NavigationEnd).url.replace('/', ''))
    );
    this.applicationNameAndVersion = `${this._config.appName}: v${this._config.version}`
  }

}
