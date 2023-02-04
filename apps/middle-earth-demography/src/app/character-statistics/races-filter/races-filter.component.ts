import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { CharacterRaceFilter } from '../../interfaces/character';

@Component({
  selector: 'mhd-races-filter',
  standalone: true,
  imports: [
    NgFor, 
    ReactiveFormsModule,
    MatSelectModule, 
    MatFormFieldModule,
  ],
  template: `
  <div class="filters-grid">
    <mat-form-field appearance="outline">
      <mat-label>Races</mat-label>
      <mat-select [formControl]="races" name="races" multiple>
        <mat-option *ngFor="let race of raceList" [value]="race">{{race}}</mat-option>
        <mat-option value="others">Others</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  `,
  styles: [`
    div.filters-grid {
      margin: 1rem 1rem 1rem 1rem;
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacesFilterComponent implements OnInit, OnDestroy {

  @Input() raceList: CharacterRaceFilter[] | null = [];
  @Output() racesChanges = new EventEmitter<CharacterRaceFilter[]>();

  races = new FormControl<CharacterRaceFilter[]>([]);

  private _destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.races.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(
      races => this.racesChanges.emit(races as CharacterRaceFilter[]))
  }

  ngOnDestroy(): void {
      this._destroy$.next()
      this._destroy$.complete()
  }
}
