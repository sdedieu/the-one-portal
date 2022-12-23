import { Component } from '@angular/core';

@Component({
  selector: 'one-portal-shell-root',
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      rel="stylesheet">
    <one-portal-shell-header></one-portal-shell-header> 
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <one-portal-shell-footer></one-portal-shell-footer>
  `,
  styleUrls: ['./the-one-portal-shell.component.scss']
})
export class PortalShellComponent {
  title = 'the-one-portal-shell';
}
