import { Component } from '@angular/core';

export class Weather {
  city!: string;
  condition!: string;
  temperature!: number;
  feelsLike!: number;
  windSpeed!: number;
  icon!: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GC-WEATHER';
}
