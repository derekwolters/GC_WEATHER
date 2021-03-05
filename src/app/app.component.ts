import { Component } from '@angular/core';
import { BackgroundService } from './services/background.service';
import { WeatherService } from './services/weather.service';

export class Weather {
  city!: String
  condition!: String
  temperature!: number
  feelsLike!: number
  windSpeed!: number
  icon!: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GC-WEATHER';

  constructor(private backgroundService: BackgroundService,
              private weatherService : WeatherService,
              ) {}

  toggle() {
    const active = this.backgroundService.getActiveTheme();
    if (active.name === 'light') {
      this.backgroundService.setTheme('dark');
    } else {
      this.backgroundService.setTheme('light');
    }
  }
}
