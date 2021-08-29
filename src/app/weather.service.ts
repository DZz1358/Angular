import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'ec5d9934ec52dbba4d7ecab44706b0ca'

  url = `https://api.openweathermap.org/data/2.5/weather`;
  forecastUrl = `https://api.openweathermap.org/data/2.5/onecall`;

  constructor(private http: HttpClient) { }



  getCityInfoByCoords(searchParams: { lat: number; lon: number; cityName: string; }) {
    return this.callApi(this.url, searchParams);
  }

  getForecastDataByCoords(searchParams: { lat: number; lon: number; }) {
    return this.callApi(this.forecastUrl, { ...searchParams, cityName: '' });
  }
  callApi(url: string, { lat, lon, cityName = null }: { lat: number; lon: number; cityName: string | null; }) {
    let queryParams;
    if (cityName) {
      queryParams = new HttpParams()
        .set('units', 'metric')
        .set('appid', this.apiKey)
        .set('q', cityName);
      console.log('cityName', cityName)
    } else {
      console.log('lat', lat)
      queryParams = new HttpParams()
        .set('units', 'metric')
        .set('appid', this.apiKey)
        .set('lat', lat)
        .set('lon', lon);
    }

    return this.http.get(url, { params: queryParams });
  }
}

// .set('lat', lat)
// .set('lon', lon)
