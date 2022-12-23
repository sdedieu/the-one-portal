import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, EMPTY, filter, map } from 'rxjs';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'one-portal-shell-footer',
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
      z-index: 10;
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

  version = packageJson.version;

  applicationNameAndVersion = '';
  route$: Observable<string> = EMPTY;
  
  private _router = inject(Router);

  ngOnInit(): void {
    this.route$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd), 
      map(event => (event as NavigationEnd).url.replace('/', ''))
    );
  }

}
