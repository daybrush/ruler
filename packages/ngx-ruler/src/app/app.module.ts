import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRulerModule } from 'projects/ngx-ruler/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRulerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
