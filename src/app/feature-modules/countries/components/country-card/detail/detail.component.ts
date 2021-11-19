import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { CountryDetailsService } from './country-details.service';
import { Country } from 'src/app/feature-modules/countries/models/country';
import { currencies } from '../../../../../Shared/Interfaces/currency';
import { Languages } from '../../../../../Shared/Interfaces/language';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private country: CountryDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.country.getCountryByName(params.country).pipe(
        tap((res) => console.log(res.name)),
        mergeMap((res) => {
          this.borderCountries$ = this.country.getCountriesByCodes(res.borders);

          return of(res);
        })
      );
    });
  }

  public displayCurrencies(currencies: currencies[]): string {
    return currencies.map((currency) => currency.name).join(', ');
  }

  public displayLanguages(languages: Languages[]): string {
    return languages.map((language) => language).join(', ');
  }
}
