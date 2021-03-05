import { Component, Output, EventEmitter} from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();

  weather: Weather = new Weather();
  public city = '';

  constructor(private WEATHER_DATA: WeatherService){}

  public submit(): void {
    this.WEATHER_DATA.load(this.city).subscribe(data => {
      this.weather.city = data['name'];
      this.weather.condition = data['weather'][0]['main'];
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15) * 1.8 + 32);
      this.weather.feelsLike = Math.round((data['main']['feels_like'] - 273.15) * 1.8 + 32);
      this.weather.windSpeed = Math.round(data['wind']['speed']);
      this.weather.icon = this.WEATHER_DATA.getIconUrl(data['weather'][0]['icon']);
      this.onSelection.emit(this.weather);
    });
  }
}
