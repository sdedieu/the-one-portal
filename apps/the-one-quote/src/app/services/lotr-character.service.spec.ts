import { TestBed } from '@angular/core/testing';

import { LotrCharacterService } from './lotr-character.service';

describe('LotrCharacterService', () => {
  let service: LotrCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotrCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
