import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { CountryDetailsService } from '../../services/country-details.service';
import { Country } from 'src/app/feature-modules/countries/models/country';

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
        mergeMap((res) => {
          this.borderCountries$ = this.country.getCountriesByCodes(res.borders.slice(res.borders.length - 1));
          return of(res);
        })
      );
    });
  }

  // public displayCurrencies(currencies: currencies[]): string {
  //   return currencies.map((currency) => currency.name).join(', ');
  // }

  // public displayLanguages(languages: Languages[]) {
  //   return languages.map((language) => language).join(', ');
  // }
}
