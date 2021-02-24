import { Component } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  
  constructor(private readonly _appService: AppService){}

  public input: string = ''; 

  public onInput(a_oEvent): void {
    this.input = a_oEvent.currentTarget.value;
    this._appService.input = a_oEvent.currentTarget.value;
  }
}
