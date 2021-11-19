import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Country } from 'src/app/feature-modules/countries/models/country';
import { AllCountriesService } from '../../services/all-countries.service';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public searchInput: FormGroup;
  public searchFilter?: string;
  public regionFilter?: string;
  public regionOptions = REGION_OPTIONS;
  public countries: Country[];

  constructor(private getCountries: AllCountriesService) { }

  ngOnInit(): void {
    this.getCountries.getCountries().subscribe((countries: Country[]) => {
      if (countries) {
        this.countries = countries;
        console.log(countries);

      }
    });
    this._searchValidation();
  }
  private get _searchData() {
    return this.searchInput.get('countryName') as FormControl;
  }
  private _searchValidation() {
    return this.searchInput = new FormGroup({
      searchFilter: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            UniversalValidators.noEmptyString
          ]
        }
      )
    });
  }

  private _mapCountries(): | any {
    if (this.searchInput.valid) {
      return this.countries.filter((country) =>
        this.searchFilter ? country.name.common.toLowerCase().includes(this.searchFilter.toLowerCase()) : country
      ).filter((country) =>
        this.regionFilter ? country.region.includes(this.regionFilter) : country
      )
    } else {
      return this.countries;
    }
  }
}
