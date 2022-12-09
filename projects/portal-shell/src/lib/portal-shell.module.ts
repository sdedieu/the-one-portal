import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalShellComponent } from './portal-shell.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CONFIG, Config } from './config/config';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { ApplicationCardComponent } from './ui/application-card/application-card.component';

@NgModule({
  declarations: [
    PortalShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatChipsModule,
    ApplicationCardComponent
  ],
  exports: [
    PortalShellComponent
  ]
})
export class PortalShellModule {
  static forRoot(config: Config): ModuleWithProviders<PortalShellModule> {
    return {
      ngModule: PortalShellModule,
      providers: [
        { provide: CONFIG, useValue: config },
      ]
    };
  }
}
