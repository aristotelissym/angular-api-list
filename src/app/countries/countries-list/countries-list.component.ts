import { Component, Injector, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ICountriesList } from './countries-list'

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }
  countries: Array<any>;

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data: any) => { 
      this.countries = data.map((it) => { return it })
     })
 }

}
