import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-the-one-portal-shell',
  template: `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      rel="stylesheet">
  <lib-header></lib-header> 
    <section class="content">
      <ng-content></ng-content>
    </section>
  <lib-footer></lib-footer>
  `,
  styleUrls: ['./the-one-portal-shell.component.scss'],
})
export class PortalShellComponent { }
