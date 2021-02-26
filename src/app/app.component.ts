import { Component } from '@angular/core';

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
}
