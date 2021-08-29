import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';




@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() weather: any;
  @Input() cityInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cityInfo);

  }

  transformDate(date: number): string {

    const nowDate = new Date();
    nowDate.setTime(date * 1000);
    return nowDate.toString();
  }
  getRoundedTemp(temp: number): number {
    return Math.round(temp);
  }
  getDailyWeather(day: number): any {
    let res: any = null;
    if (this.weather.daily && this.weather.daily.length > 0 && this.weather.daily[day]) {
      res = this.weather.daily[day];
    }
    return res;
  }
}
