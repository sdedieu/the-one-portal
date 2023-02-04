import { Component } from '@angular/core';

@Component({
  selector: 'one-ui-card',
  template: `
  <div class="card">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
    .card {
      padding: 0.25rem 0.5rem 0.25rem 0.5rem;
      border-radius: 0.25rem;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    @media (min-width: 640px) {
        .card {
            padding: 2rem 3rem 2rem 3rem;
        }
    }`
  ],
})
export class CardComponent { }
