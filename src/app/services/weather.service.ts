import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Weather } from '../weather';

let apiUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey = '7eff685950e68ebc7053c218450fc506'; //Move key to a secure location
let stateCode = 'MI';
let countryCode = 'US';

@Injectable({providedIn: 'root'})

export class WeatherService {

  constructor(private http: HttpClient) { }

  load(city: String) {
      return this.http.get(apiUrl + '?q=' + city + ',' + stateCode + ',' + countryCode + '&appid=' + apiKey)
  }
  
  getIconUrl(icon: String) {
      return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}