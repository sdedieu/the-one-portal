import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalShellComponent } from './the-one-portal-shell.component';

describe('PortalShellComponent', () => {
  let component: PortalShellComponent;
  let fixture: ComponentFixture<PortalShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalShellComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortalShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
