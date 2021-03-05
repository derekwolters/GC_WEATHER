import { Component, Output, EventEmitter} from "@angular/core";
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
  public input: String = ''; 
  public city: String = '';
  
  constructor(private _weatherData: WeatherService){}  

  public onInput(a_oEvent): void {
    this.input = a_oEvent.currentTarget.value;
  }

  public submit() {
    this._weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.condition = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.feelsLike = Math.round((data['main']['feels_like'] - 273.15)*1.8 + 32)
      this.weather.windSpeed = Math.round(data['wind']['speed'])
      this.weather.icon = this._weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }
}
