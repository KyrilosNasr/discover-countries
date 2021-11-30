import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/feature-modules/countries/models/country';
import { AllCountriesService } from '../../services/all-countries.service';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public countriesList: Country[];
  searchInput?: string;
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;

  constructor(private getCountries: AllCountriesService) { }

  ngOnInit() {
    this.getCountries.getCountries().subscribe((countries: Country[]) => {
      this.countriesList = countries;
    });
  }
  searchData() {
    this.countriesList ? this.countriesList.filter((country) => {
      if (this.searchInput) {
        country.name.official.toLowerCase()
          .includes(this.searchInput.toLocaleLowerCase())
        console.log(this.searchInput);
      } else {
        country
        console.log(country);
      }
        }
      )
      .filter((country) =>
        this.regionFilter?.toLocaleLowerCase()
          ? country.region.includes(this.regionFilter.toLowerCase())
          : country
      )
      : this.countriesList;
  }
}
