import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LotrCharacterService } from '../services/lotr-character.service';
import { EMPTY, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { combineLatestWith, map, tap } from 'rxjs/operators';
import { CharacterRaceFilter, CharacterRealm, Characters } from '../interfaces/character';
import { RacesFilterComponent } from './races-filter/races-filter.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ChartModule } from 'primeng/chart';

const NAN = 'NaN';
const OTHERS = 'others'

@Component({
  selector: 'mhd-character-statistics',
  standalone: true,
  imports: [
    AsyncPipe,
    RacesFilterComponent,
    CharacterListComponent,
    ChartModule
  ], 
  template: `
  <div class="graph-container card">
  <p-chart height="400" type="bar" [data]="stackedData$ | async" [options]="stackedOptions"></p-chart>
  </div>
  <mhd-races-filter [raceList]="raceList$ | async" (racesChanges)="races$.next($event)"></mhd-races-filter>
  <mhd-character-list [characters]="characters$ | async"></mhd-character-list>
 `,
  styles: [`
    div.graph-container {
      width: 90%;
      margin: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterStatisticsComponent implements OnInit {

  characters$: Observable<Characters> = EMPTY;
  raceList$: Observable<CharacterRaceFilter[]> = EMPTY;
  realmList$: Observable<CharacterRealm[]> = EMPTY;

  stackedData$: Observable<any> = EMPTY;
  
  constructor(private _lotrCharService: LotrCharacterService){}

  private colours: string[] = [
    '#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac', '#b77322', '#16d620', '#b91383', '#f4359e', '#9c5935', '#a9c413', '#2a778d', '#668d1c', '#bea413', '#0c5922', '#743411', '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

  races$ = new BehaviorSubject<CharacterRaceFilter[]>([]);

  stackedData: any;

  stackedOptions: any;

  ngOnInit(): void {
    
    this.characters$ = this._lotrCharService.getAll().pipe(
      combineLatestWith(this.races$.asObservable()),
      map(([chars, races]) => chars.filter((c: any) => !races.length
        || races?.includes(OTHERS) && (!c.race || c.race === NAN)
        || races?.includes(c.race))
      )
    );
    this.raceList$ = this._lotrCharService.getRaces();
    this.realmList$ = this._lotrCharService.getRealms();

    this.stackedData$ =
      combineLatest([this.characters$, this.realmList$, this.raceList$]).pipe(
        map(([characters, realms, races]) => ({
          labels: realms,
          datasets: (races as CharacterRaceFilter[]).map((race, index) => ({
            type: 'bar',
            label: race,
            backgroundColor: this.colours[index],
            data: realms.map((realm: CharacterRealm) => (characters as Characters).filter(c => c.race === race && c.realm === realm).length)
          }))
        }))
      )

    this.stackedOptions = {
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        } 
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          stacked: true,
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }
}
