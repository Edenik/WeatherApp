import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByCityComponent } from './by-city/by-city.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ByUserLocalComponent } from './by-user-local/by-user-local.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomCountriesComponent } from './random-countries/random-countries.component';
import { FullDetailesComponent } from './full-detailes/full-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    ByCityComponent,
    CitiesListComponent,
    ByUserLocalComponent,
    NavComponent,
    RandomCountriesComponent,
    FullDetailesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
