import { Component } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private readonly _appService: AppService) { }

  public get value(): string {
    return this._appService.input;
  }

}
