import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Weather } from '../weather';
// import { isContext } from 'vm';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '7eff685950e68ebc7053c218450fc506'; // Move key to a secure location
const stateCode = 'MI';
const countryCode = 'US';

@Injectable({providedIn: 'root'})

export class WeatherService {

  constructor(private http: HttpClient) { }

  load(city: string) {
      return this.http.get(apiUrl + '?q=' + city + ',' + stateCode + ',' + countryCode + '&appid=' + apiKey);
  }

  getIconUrl(icon: string) {
      return 'http://openweathermap.org/img/w/' + icon + '.png';
  }
}
