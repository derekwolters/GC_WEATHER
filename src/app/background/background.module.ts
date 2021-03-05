import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundService } from '../services/background.service';
import { BackgroundDirective } from './background.directive';
import { BACKGROUNDS, ACTIVE_BACKGROUND, BackgroundOptions } from './symbols';

@NgModule({
  imports: [CommonModule],
  providers: [BackgroundService],
  declarations: [BackgroundDirective],
  exports: [BackgroundDirective]
})
export class BackgroundModule {
  static forRoot(options: BackgroundOptions): ModuleWithProviders<BackgroundModule> {
    return {
      ngModule: BackgroundModule,
      providers: [
        {
          provide: BACKGROUNDS,
          useValue: options.backgrounds
        },
        {
          provide: ACTIVE_BACKGROUND,
          useValue: options.active
        }
      ]
    };
  }
}
