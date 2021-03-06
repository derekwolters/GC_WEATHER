import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { BackgroundModule, darkBackground, clearSkyBackground, fewCloudsBackground, scatteredCloudsBackground, brokenCloudsBackground,
  showerRainBackground, rainBackground, thunderstormBackground, snowBackground, mistBackground } from './background';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    BackgroundModule.forRoot({
      backgrounds: [darkBackground, clearSkyBackground, fewCloudsBackground, scatteredCloudsBackground, brokenCloudsBackground,
        showerRainBackground, rainBackground, thunderstormBackground, snowBackground, mistBackground],
      active: 'dark'
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
