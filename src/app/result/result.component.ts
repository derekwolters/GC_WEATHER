import { Component, ElementRef } from '@angular/core';
import { Weather } from '../app.component'
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private backgroundService: BackgroundService) { }

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
    console.log('icon');
    console.log(weather.icon);
    this.backgroundUpdate(weather.icon);
  }  

  private getIconName(url): string {
    let icon;
    let iconNameBegin = url.indexOf('w/')+2;
    let iconNameEnd = url.indexOf('.png');
    icon = url.substring(iconNameBegin, iconNameEnd);
    console.log("Icon 1");
    console.log(icon);
    return icon;
  }

  backgroundUpdate(weatherIcon) {
    let icon = this.getIconName(weatherIcon);

    if (icon === '01d' || icon === '01n') {
      this.backgroundService.setTheme('clearSky');
    } else if (icon === '02d'|| icon === '02n') {
      this.backgroundService.setTheme('fewClouds')
    } else if (icon === '03d'|| icon === '03n') {
      this.backgroundService.setTheme('scatteredClouds')
    } else if (icon === '04d'|| icon === '04n') {
      this.backgroundService.setTheme('brokenClouds')
    } else if (icon === '09d'|| icon === '09n') {
      this.backgroundService.setTheme('showerRain')
    } else if (icon === '10d'|| icon === '10n') {
      this.backgroundService.setTheme('rain')
    } else if (icon === '11d'|| icon === '11n') {
      this.backgroundService.setTheme('thunderstorm')
    } else if (icon === '13d'|| icon === '13n') {
      this.backgroundService.setTheme('snow')
    } else if (icon === '50d'|| icon === '50n') {
      this.backgroundService.setTheme('mist')
    }
  }
}
