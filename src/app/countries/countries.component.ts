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
  search: string = '';
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


  onKey () {
    const searching = this.AllCountries.filter(res => !this.search || res.name.toLocaleLowerCase().includes(this.search.toLowerCase()));
    this.search.length > 2 ? (this.AllCountries = searching) : this.getCountries();
  }
}
