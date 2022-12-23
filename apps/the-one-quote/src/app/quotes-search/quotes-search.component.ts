import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotrMovieService } from '../services/lotr-movie.service';
import { LotrCharacterService } from '../services/lotr-character.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, Characters } from '../interfaces/character';
import { Movie, Movies } from '../interfaces/movie';
import { Quotes } from '../interfaces/quote';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'toq-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  template: `
    <section>
     <form [formGroup]="filters" class="filter-area">
      <mat-form-field appearance="outline">
        <mat-label>Characters</mat-label>
        <select matNativeControl formControlName='selectedCharacter'>
          <option *ngFor="let character of characters$ | async" [ngValue]="character"
          >{{character.name}}</option>
        </select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Movies</mat-label>
        <select matNativeControl formControlName='selectedMovie'>
          <option *ngFor="let movie of movies$ | async" [ngValue]="movie">{{movie.name}}</option>
        </select>
      </mat-form-field>
      </form>
    </section>

    <section class="card-list">
      <div class="card" *ngFor="let quote of quotes$ | async">{{quote.dialog}}</div>
    </section>
  `,
  styles: [`
    form.filter-area {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    form.filter-area > mat-form-field {
      padding: 0.5rem 1rem 0.5rem 1rem;
      width: 100%;
    }

    section.card-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    section.card-list > div.card {
      padding: 1rem 2rem 1rem 2rem;
      margin-bottom: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesSearchComponent implements OnInit {

  private _lotrMovieService = inject(LotrMovieService);
  private _lotrCharacterService = inject(LotrCharacterService);

  filters = new FormGroup({
    selectedCharacter: new FormControl<Character | null>(null),
    selectedMovie: new FormControl<Movie | null>(null)
  })

  characters$: Observable<Characters> = EMPTY;
  movies$: Observable<Movies> = EMPTY;
  quotes$: Observable<Quotes> = EMPTY;

  ngOnInit(): void {
    this.characters$ = this._lotrCharacterService.getAllWithQuotes();
    this.movies$ = this._lotrMovieService.getAll();

    this.quotes$ = this.filters.valueChanges.pipe(
      map(filters => {
        if (!filters.selectedCharacter || !filters.selectedMovie) return [];
        return filters.selectedCharacter?.quotes.filter(quote => filters.selectedMovie?._id === quote.movie)
      })
    )
  }
}
