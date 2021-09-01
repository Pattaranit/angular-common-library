import { NgModule } from '@angular/core';
import { NgxCommonLibraryComponent } from './ngx-common-library.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgxCommonLibraryComponent,
    ButtonsComponent
  ],
  imports: [
    NgbModule,
    CommonModule
  ],
  exports: [
    NgxCommonLibraryComponent,
    ButtonsComponent
  ]
})
export class NgxCommonLibraryModule { }
