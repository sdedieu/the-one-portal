import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Application } from '../../models/application';

@Component({
  selector: 'one-portal-shell-card',
  template: `
  <one-ui-card>
  <div class="container">
    <div class="overlay">
      <h1>{{application.name}}</h1>
    </div>
    <img [src]="application.img" width="100%" />
  </div>
  </one-ui-card>
  `,
  styles: [`
    div.container {
      position: relative;
      display: flex;
      align-items: stretch;
      justify-content: stretch;
    }

    div.container:hover > div.overlay {
      opacity: 0.7;
    }

    div.overlay {
      position: absolute;
      opacity: 0;
      background-color: rgba(255, 255, 255);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationCardComponent {

  @Input() application!: Application

}
