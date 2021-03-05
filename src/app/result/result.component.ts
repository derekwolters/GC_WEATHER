import { Component } from '@angular/core';
import { Weather } from '../app.component';
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
  };

  public update(weather: Weather): void {
    this.weather = weather;
    this.backgroundUpdate(weather.icon);
  }

  private getIconName(url): string {
    const iconNameBegin = url.indexOf('w/') + 2;
    const iconNameEnd = url.indexOf('.png');
    const icon = url.substring(iconNameBegin, iconNameEnd);
    return icon;
  }

  backgroundUpdate(weatherIcon): void {
    const icon = this.getIconName(weatherIcon);

    // this can be done more efficiently
    if (icon === '01d' || icon === '01n') {
      this.backgroundService.setBackground('clearSky');
    } else if (icon === '02d' || icon === '02n') {
      this.backgroundService.setBackground('fewClouds');
    } else if (icon === '03d' || icon === '03n') {
      this.backgroundService.setBackground('scatteredClouds');
    } else if (icon === '04d' || icon === '04n') {
      this.backgroundService.setBackground('brokenClouds');
    } else if (icon === '09d' || icon === '09n') {
      this.backgroundService.setBackground('showerRain');
    } else if (icon === '10d' || icon === '10n') {
      this.backgroundService.setBackground('rain');
    } else if (icon === '11d' || icon === '11n') {
      this.backgroundService.setBackground('thunderstorm');
    } else if (icon === '13d' || icon === '13n') {
      this.backgroundService.setBackground('snow');
    } else if (icon === '50d' || icon === '50n') {
      this.backgroundService.setBackground('mist');
    } else {
      this.backgroundService.setBackground('dark');
    }
  }
}
