import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalShellComponent } from './the-one-portal-shell.component';

describe('PortalShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PortalShellComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortalShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'the-one-portal-shell'`, () => {
    const fixture = TestBed.createComponent(PortalShellComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('the-one-portal-shell');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PortalShellComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('the-one-portal-shell app is running!');
  });
});
