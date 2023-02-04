import { TestBed } from '@angular/core/testing';

import { LotrQuoteService } from './lotr-quote.service';

describe('LotrQuoteService', () => {
  let service: LotrQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotrQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
