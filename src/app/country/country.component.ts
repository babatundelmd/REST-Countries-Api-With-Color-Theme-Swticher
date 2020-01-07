import { Component, OnInit } from '@angular/core';
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

  constructor (private country: CountriesService, private route: ActivatedRoute) { }

  ngOnInit () {
  }

  getCountry () {
    const name = this.route.snapshot.paramMap.get('name');
    this.country.getCountry(name).subscribe(response => {
      console.log(response)
    },
      error => {
        console.error({ error })
      }

    )

  }

}
