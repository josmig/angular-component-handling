import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgresiveBarComponent } from './progresive-bar/progresive-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgresiveBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
