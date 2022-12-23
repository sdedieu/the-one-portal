import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesFilterComponent } from './races-filter.component';

describe('RacesFilterComponent', () => {
  let component: RacesFilterComponent;
  let fixture: ComponentFixture<RacesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RacesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
