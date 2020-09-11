import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  readonly _url = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this._url);
  }
}
