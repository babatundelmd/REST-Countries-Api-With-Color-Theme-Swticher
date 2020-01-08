import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../service/countries.service';
import { CountryModel } from '../models/countries.models';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: [ './countries.component.css' ]
})
export class CountriesComponent implements OnInit {
  public AllCountries: CountryModel[] = [];

  constructor (private countries: CountriesService) { }

  ngOnInit () {
    this.getCountries();

  }

  getCountries () {
    this.countries.getCountries().subscribe(result => {
      this.AllCountries = result

      console.log(this.AllCountries)
    },
      error => {
        console.error({ error })
      }
    )
  }

}