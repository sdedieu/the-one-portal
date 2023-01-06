import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { OnePortalShellLibraryModule } from '@the-one-portal/one-portal-shell-library';
import { OneUiLibraryModule } from '@the-one-portal/one-ui-library';
import { HomeComponent } from './home/home.component';

import { routes } from './routes';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortalShellComponent } from './the-one-portal-shell.component';

@NgModule({
  declarations: [
    PortalShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    OnePortalShellLibraryModule,
    OneUiLibraryModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [PortalShellComponent]
})
export class PortalShellModule { }
