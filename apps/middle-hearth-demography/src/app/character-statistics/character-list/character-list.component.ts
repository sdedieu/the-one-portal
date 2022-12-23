import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CharacterCardComponent } from '../../ui/character-card/character-card.component';
import { Characters } from '../../interfaces/character';

@Component({
  selector: 'mhd-character-list',
  standalone: true,
  imports: [NgFor, CharacterCardComponent],
  template: `
  <div class="grid">
    <mhd-character-card class="card" *ngFor="let character of characters" [character]="character"></mhd-character-card>
  </div>
  `,
  styles: [`
    div.grid {
        margin: 1rem 1rem 1rem 1rem;
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
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
    }

    .card {
      padding: 1rem 1rem 1rem 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {

  @Input() characters: Characters | null = [];

}
