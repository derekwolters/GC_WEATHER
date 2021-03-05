import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BACKGROUNDS, ACTIVE_BACKGROUND, Background } from '../background/symbols';

@Injectable()
export class BackgroundService {

  backgroundChange = new EventEmitter<Background>();

  constructor(
    @Inject(BACKGROUNDS) public backgrounds: Background[],
    @Inject(ACTIVE_BACKGROUND) public background: string
  ) {
  }

  getBackground(name: string): Background {
    const background = this.backgrounds.find(t => t.name === name);
    if (!background) {
      throw new Error(`Background not found: '${name}'`);
    }
    return background;
  }

  getActiveBackground(): Background {
    return this.getBackground(this.background);
  }

  getProperty(propName: string): string {
    return this.getActiveBackground().properties[propName];
  }

  setBackground(name: string): void {
    this.background = name;
    this.backgroundChange.emit( this.getActiveBackground());
  }

  registerBackground(background: Background): void {
    this.backgrounds.push(background);
  }

  updateBackground(name: string, properties: { [key: string]: string; }): void {
    const background = this.getBackground(name);
    background.properties = {
      ...background.properties,
      ...properties
    };

    if (name === this.background) {
      this.backgroundChange.emit(background);
    }
  }
}
