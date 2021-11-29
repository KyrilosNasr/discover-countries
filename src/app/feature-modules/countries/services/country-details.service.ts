import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/feature-modules/countries/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  private _data = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }

  public getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this._data}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  public getCountriesByCodes(codes: string[]): Observable<Country[]> {
    console.log(`${this._data}alpha?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this._data}/alpha?codes=${codes.join(';')}`
    );
  }
}
