import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasboarAdminComponent } from './dasboar-admin/dasboar-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DasboarAdminComponent,

  ],
  imports: [
    BrowserModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
