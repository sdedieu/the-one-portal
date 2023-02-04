import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesSearchComponent } from './quotes-search.component';

describe('QuotesSearchComponent', () => {
  let component: QuotesSearchComponent;
  let fixture: ComponentFixture<QuotesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuotesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
