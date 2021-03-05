import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { BackgroundService } from '../services/background.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Background } from './symbols';

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit, OnDestroy {

private DESTROY$ = new Subject();

constructor(
    private ELEMENT_REF: ElementRef,
    private BACKGROUND_SERVICE: BackgroundService
) {}

ngOnInit(): void {

    this.BACKGROUND_SERVICE.backgroundChange
        .pipe(takeUntil(this.DESTROY$))
        .subscribe((background: Background) => this.updateBackground(background));
    }

    ngOnDestroy(): void {
        this.DESTROY$.next();
        this.DESTROY$.complete();
    }

    updateBackground(background: Background): void {
        // project properties onto the element
        for (const key in background.properties) {
            if (background.properties.hasOwnProperty(key)){
                this.ELEMENT_REF.nativeElement.style.setProperty(key, background.properties[key]);
            }
        }

        // remove old background
        for (const name of this.BACKGROUND_SERVICE.background) {
            this.ELEMENT_REF.nativeElement.classList.remove(`${name}-background`);
        }

        // alias element with background name
        this.ELEMENT_REF.nativeElement.classList.add(`${background.name}-background`);
    }

}
