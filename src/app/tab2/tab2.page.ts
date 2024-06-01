import { Component, OnInit } from '@angular/core';
import { WeatherService, Forecast} from '../services/weather.service';
import { DatePipe } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [DatePipe]
})
export class Tab2Page implements OnInit{
  forecast: Forecast = {
    list: []
  };
  city: string = 'Sleman';

  constructor(private weatherService: WeatherService, private datePipe: DatePipe, private route: Router ) {}

  ngOnInit(): void {
    this.weatherService.getDatalist().subscribe(
      result => {
        this.forecast = result;
        console.log(this.forecast);
      }
    )
  }

  formatDate (dateString: string): string {
    return this.datePipe.transform(dateString, "dd MMM - hh a")!;
  }

  detailpage(w:any):void{
     let weather= {
      date: w.dt_txt,
      temp: w.main.temp,
      main: w.weather[0].main,
      desc: w.weather[0].description,
      icon: w.weather[0].icon
     }
     let extras: NavigationExtras = {
     queryParams: {
     special: JSON.stringify(weather)
     }
     };
    
     this.route.navigate(['/detail'], extras);
     } 
}
