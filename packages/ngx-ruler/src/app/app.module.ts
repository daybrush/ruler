import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRulerModule } from '../../projects/ngx-ruler/src/public-api';

import { AppComponent } from './app.component';

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
