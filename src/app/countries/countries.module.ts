import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesComponent } from './countries.component';



@NgModule({
  declarations: [CountriesListComponent, CountriesComponent],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
