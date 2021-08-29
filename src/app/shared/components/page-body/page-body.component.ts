import { WeatherService } from './../../../weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {
  private lat: number = 0;
  private lon: number = 0;
  weather: any;
  cityInfo: any;

  constructor(private weatherService: WeatherService) {
    this.weather = {
      name: 'receiving...',
      sys: {
        country: ''
      }
    };

  }

  async ngOnInit(): Promise<void> {
    await this.getLocation();
    await this.getCityInfo();
    await this.getForecast({ lat: this.lat, lon: this.lon });

  }


  getLocation() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition((success) => {
          this.lat = success.coords.latitude;
          this.lon = success.coords.longitude;
          return resolve({ lat: this.lat, lon: this.lon });
        });
      }
    })
  }

  async getCityInfo(cityName: string = ''): Promise<any> {
    const data = await this.weatherService.getCityInfoByCoords({ lat: this.lat, lon: this.lon, cityName }).toPromise();
    this.cityInfo = data;
    return data;
  }
  async getForecast({ lat = this.lat, lon = this.lon }) {
    const data = await this.weatherService.getForecastDataByCoords({ lat, lon }).toPromise();
    this.weather = data;
    this.weather.daily = this.weather.daily.sort((prev: any, next: any) => {
      return prev.dt - next.dt;
    })

  }
  async onChange(event: any): Promise<void> {
    const inputValue = event.target?.value
    if (inputValue) {
      const cityInfo = await this.getCityInfo(inputValue);
      await this.getForecast({ lat: cityInfo.coord.lat, lon: cityInfo.coord.lon });
    }
  }
}
