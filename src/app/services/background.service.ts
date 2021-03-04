import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BACKGROUNDS, ACTIVE_BACKGROUND, Background } from '../background/symbols';

@Injectable()
export class BackgroundService {

  themeChange = new EventEmitter<Background>();

  constructor(
    @Inject(BACKGROUNDS) public themes: Background[],
    @Inject(ACTIVE_BACKGROUND) public theme: string
  ) {
  }

  getTheme(name: string) {
    const theme = this.themes.find(t => t.name === name);
    if (!theme) {
      throw new Error(`Theme not found: '${name}'`);
    }
    return theme;
  }

  getActiveTheme() {
    return this.getTheme(this.theme);
  }

  getProperty(propName: string) {
    return this.getActiveTheme().properties[propName];
  }

  setTheme(name: string) {
    this.theme = name;
    this.themeChange.emit( this.getActiveTheme());
  }

  registerTheme(theme: Background) {
    this.themes.push(theme);
  }

  updateTheme(name: string, properties: { [key: string]: string; }) {
    const theme = this.getTheme(name);
    theme.properties = {
      ...theme.properties,
      ...properties
    };

    if (name === this.theme) {
      this.themeChange.emit(theme);
    }
  }

}
