import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeaterApiService {
  constructor(private http: HttpClient) { }
  apiUrl:string;
  readonly apiKey: string = "a47fabc40cac354f1e7a9180343e4170";
  readonly appKeyMaster : string = "b6907d289e10d714a6e88b30761fae22";
  check: any;

  getWeather(city): Observable<City[]> {
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather/?appid=${this.apiKey}&q=${city}&units=metric`;
    return this.http.get<City[]>(this.apiUrl).pipe(
      catchError(err => {

        console.log(err);
        return of(null);
      })
    );
  }
}
