import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ApplicationsCatalogModule } from '@the-one-portal/applications-catalog';

import { routes } from './routes';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortalShellComponent } from './the-one-portal-shell.component';
import { SharedLibraryModule } from '@the-one-portal/shared-library';

@NgModule({
  declarations: [
    PortalShellComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedLibraryModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ApplicationsCatalogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [PortalShellComponent]
})
export class PortalShellModule { }
