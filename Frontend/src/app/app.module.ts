import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StationeryCardComponent } from './stationery/stationery-card/stationery-card.component';
import { StationeryListComponent } from './stationery/stationery-list/stationery-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [	
    AppComponent,
    StationeryCardComponent,
    StationeryListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
