import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryModel } from '../models/countries.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private Countries = 'https://restcountries.eu/rest/v2/all';

  constructor (private http: HttpClient) { }

  getCountries (): Observable<CountryModel> {
    return this.http.get<CountryModel>(this.Countries).pipe(
      map((response) => {
        if (response) {
          return response
        }
      },
        (error) => {
          console.error({ error })
          return error;
        })
    )
  }
}
