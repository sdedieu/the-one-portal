import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationCardComponent } from './ui/application-card/application-card.component';
import { OneUiLibraryModule } from '@the-one-portal/one-ui-library';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  imports: [
    CommonModule, 
    OneUiLibraryModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ApplicationCardComponent, CatalogComponent]
})
export class ApplicationsCatalogModule {}
