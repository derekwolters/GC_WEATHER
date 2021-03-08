import { Component, Output, EventEmitter} from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherModel } from '../models/weatherModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  @Output() Selection: EventEmitter<WeatherModel> = new EventEmitter<WeatherModel>();

  weather: WeatherModel = new WeatherModel();
  public city = '';

  constructor(private WEATHER_DATA: WeatherService){}

  public submit(): void {
    this.WEATHER_DATA.load(this.city).subscribe(data => {
      const weatherDetails = new WeatherModel();

      weatherDetails.city = data.name;
      weatherDetails.condition = data.weather[0].main;
      weatherDetails.temperature = Math.round((data.main.temp - 273.15) * 1.8 + 32);
      weatherDetails.feelsLike = Math.round((data.main.feels_like - 273.15) * 1.8 + 32);
      weatherDetails.windSpeed = Math.round(data.wind.speed);
      weatherDetails.icon = this.WEATHER_DATA.getIconUrl(data.weather[0].icon);

      this.Selection.emit(weatherDetails);
    });
  }
}
