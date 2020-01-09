import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CountriesService } from '../service/countries.service';
import { CountryModel } from '../models/countries.models';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: [ './country.component.css' ]
})
export class CountryComponent implements OnInit {
  singleCountry: CountryModel[] = [];
  isCountry: boolean = false;
  constructor (private country: CountriesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit () {
    this.getCountry();
  }

  getCountry () {
    const name = this.route.snapshot.paramMap.get('name');
    this.country.getCountry(name).subscribe(response => {
      this.singleCountry = response
      this.isCountry = !this.isCountry;
      console.log(this.singleCountry)
    },
      error => {
        console.error({ error })
      }

    )

  }

  goBack (): void {
    this.location.back();
  }

}
