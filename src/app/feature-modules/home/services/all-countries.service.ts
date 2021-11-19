import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/feature-modules/countries/models/country';

@Injectable({
  providedIn: 'root'
})
export class AllCountriesService {
  private _api = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._api}`);
  }
}
