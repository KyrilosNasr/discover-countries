import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/feature-modules/countries/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  private _data = 'http://api.countrylayer.com/v2/all?access_key=b6aa5d578de0e033e16c53ac06db960d';
  constructor(private http: HttpClient) { }

  public getCountryByName(name: string): Observable<Country> {
    return this.http
      .get<Country[]>(`$/name/${this._data}`)
      .pipe(map(([res]) => res));
  }

  public getCountriesByCodes(codes: string[]): Observable<Country[]> {
    console.log(`${this._data}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this._data}/alpha?codes=${codes.join(';')}`
    );
  }
}
