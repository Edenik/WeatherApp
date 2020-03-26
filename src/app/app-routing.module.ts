import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCityComponent } from './by-city/by-city.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ByUserLocalComponent } from './by-user-local/by-user-local.component';
import { RandomCountriesComponent } from './random-countries/random-countries.component';
import { FullDetailesComponent } from './full-detailes/full-detailes.component';

const routes: Routes = [
  {path: '' , component: ByCityComponent},
  {path: 'byCity' , component: ByCityComponent},
  // {path: 'fullDetailes/:name/:temp/:country/:clouds/:humidity/:wind/:icon/:descripton/:feels_like/:temp_min/:temp_max/:pressure' , component: FullDetailesComponent},
  {path: 'fullDetailes/:name' , component: FullDetailesComponent},
  {path: 'citiesList' , component: CitiesListComponent},
  {path: 'byUser' , component: ByUserLocalComponent},
  {path: 'byRandom' , component: RandomCountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
