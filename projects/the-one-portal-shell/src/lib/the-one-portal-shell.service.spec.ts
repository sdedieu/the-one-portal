import { TestBed } from '@angular/core/testing';

import { PortalShellService } from './the-one-portal-shell.service';

describe('PortalShellService', () => {
  let service: PortalShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
