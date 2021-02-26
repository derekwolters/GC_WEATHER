import { Component } from '@angular/core';
import { Weather } from '../app.component'
import { AppService } from '../app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private readonly _appService: AppService) { }

  weather: Weather = {
    city: '',
    condition: '-',
    temperature: 0,
    feelsLike: 0,
    windSpeed: 0,
    icon: ''
  }

  update(weather: Weather) {
    this.weather = weather
    console.log('weather');
    console.log(weather);
  }  

  public get value(): string {
    return this._appService.input;
  }
}
