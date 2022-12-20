import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      rel="stylesheet">
    <lib-header></lib-header> 
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <lib-footer></lib-footer>
  `,
  styleUrls: ['./the-one-portal-shell.component.scss']
})
export class PortalShellComponent {
  title = 'the-one-portal-shell';
}
