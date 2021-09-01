import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxLibraryTestModule } from 'ngx-library-test';
// import { ButtonsModule } from 'ngx-library-test';
import { NgxCommonLibraryModule } from 'ngx-common-library';
import { ButtonsModule } from 'ngx-common-library';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCommonLibraryModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
