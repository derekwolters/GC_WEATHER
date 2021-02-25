import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
