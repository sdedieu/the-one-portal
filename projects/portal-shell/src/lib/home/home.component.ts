import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthService, User } from '../auth';

@Component({
  selector: 'lib-home',
  template: `
  <ng-container *ngIf="connectedUser$ | async as user">
    <div class="grid">
      <a class="card" [href]="application.url" *ngFor="let application of user.applications">
        <lib-application-card [application]="application"></lib-application-card>
      </a>
    </div>
  </ng-container>
  `,
  styles: [`
    div.grid {
      margin: 5rem 1rem 1rem 1rem;
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 0.5rem;
    }

    @media (min-width: 640px) {
      div.grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (min-width: 768px) { 
      div.grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) { 
      div.grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    a.card {
      padding: 0;
      text-decoration: none;
      color: inherit;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  connectedUser$: Observable<User | null> = EMPTY; 

  private _authService = inject(AuthService); 

  ngOnInit() {
    this.connectedUser$ = this._authService.getConnectedUser();
  }
}
