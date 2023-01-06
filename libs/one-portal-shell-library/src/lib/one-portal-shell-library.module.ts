import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationCardComponent } from './ui/application-card/application-card.component';
import { OneUiLibraryModule } from '@the-one-portal/one-ui-library';

@NgModule({
  imports: [CommonModule, OneUiLibraryModule],
  declarations: [ApplicationCardComponent],
  exports: [ApplicationCardComponent]
})
export class OnePortalShellLibraryModule {}
