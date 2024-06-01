import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  weather: Weather = {
    weather: [],
    main: {
      temp: 0
    },
    name: ''
  };
  temp: number = 0;
  city: string = 'Sleman';
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().subscribe(
      result => {
        this.weather = result;
        this.temp = result.main.temp;
        console.log(this.weather);
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
