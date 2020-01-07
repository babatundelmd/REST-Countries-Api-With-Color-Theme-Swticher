import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../service/countries.service';
import { error } from 'protractor';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: [ './world.component.css' ]
})
export class WorldComponent implements OnInit {

  constructor (private countries: CountriesService) { }

  ngOnInit () {
    this.getCountries();

  }

  getCountries () {
    this.countries.getCountries().subscribe(result => {
      console.log({ result })
    },
      error => {
        console.error({ error })
      }
    )
  }

}
