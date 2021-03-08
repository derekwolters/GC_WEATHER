import { InjectionToken } from '@angular/core';

export const BACKGROUNDS = new InjectionToken('BACKGROUNDS');
export const ACTIVE_BACKGROUND = new InjectionToken('ACTIVE_BACKGROUND');

export interface Background {
    name: string;
    properties: any;
}

export interface BackgroundOptions {
    backgrounds: Background[];
    active: string;
}
