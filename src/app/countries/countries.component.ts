import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../service/countries.service';
import { CountryModel } from '../models/countries.models';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: [ './countries.component.css' ]
})
export class CountriesComponent implements OnInit {
  values: CountryModel[] = [];
  getCountry = '';
  hide: boolean = false;
  public AllCountries: CountryModel[] = [];

  constructor (private countries: CountriesService) { }

  ngOnInit () {
    this.getCountries();

  }

  getCountries () {
    this.countries.getCountries().subscribe(result => {
      this.AllCountries = result
    },
      error => {
        console.error({ error })
      }
    )
  }


  onKey (event: any) {
    this.hide = !this.hide;
    this.countries.getCountry(event.target.value)
      .subscribe(res => {
        this.values = res;
        this.getCountry = this.values[ 0 ].name
        console.log(this.values[ 0 ].name)
      })
  }
}