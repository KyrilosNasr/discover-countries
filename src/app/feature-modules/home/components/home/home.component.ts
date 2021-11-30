import { Component, OnChanges, OnInit } from '@angular/core';
import { Country } from 'src/app/feature-modules/countries/models/country';
import { AllCountriesService } from '../../services/all-countries.service';

const REGION_OPTIONS = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  public countriesList: Country[];
  public countriesListFiltered: Country[];
  searchInput: string = '';
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;

  constructor(private getCountries: AllCountriesService) {}

  ngOnChanges() {
    console.log(this.searchInput);
  }
  ngOnInit() {
    this.getCountries.getCountries().subscribe((countries: Country[]) => {
      this.countriesList = countries;
      this.countriesListFiltered = countries;
    });
  }
  filter(input: string) {
    if (this.countriesList) {
      if (input == 'All') {
        this.countriesListFiltered = this.countriesList;
      } else {
        this.countriesListFiltered = this.countriesList.filter((country) => {
          return country.region
            .toLowerCase()
            .includes(input.toLocaleLowerCase());
        });
      }
    }
  }
  // search(data: string) {
  //   if (this.searchInput) {
  //     if (data !== '') {
  //       this.countriesListFiltered = this.countriesList;
  //     } else {
  //       this.countriesListFiltered = this.countriesList.filter((country) => {
  //         return country.name.common
  //           .toLowerCase()
  //           .includes(data.toLocaleLowerCase());
  //       });
  //     }
  //   }
  // }
  searchData() {
    if (this.searchInput !== '') {
      return this.countriesList.filter((country) => {
        country.name.common
          .toLowerCase()
          .includes(this.searchInput.toLocaleLowerCase());
        console.log(this.searchInput);
      });
    } else {
      return this.countriesList;
    }
  }
}
