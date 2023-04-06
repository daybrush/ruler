import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import Ruler, { PROPERTIES } from '@scena/ruler';
import { NgxRulerInterface } from './ngx-ruler.interface';
import { ANGULAR_RULER_INPUTS } from './consts';

@Component({
  selector: 'ngx-ruler',
  template: `
    <canvas #rulerRef></canvas>
  `,
  styles: [],
  inputs: ANGULAR_RULER_INPUTS,
})
export class NgxRulerComponent extends NgxRulerInterface implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('rulerRef', { static: false }) private rulerRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    const ruler = this.ruler;

    if (!ruler) {
      return;
    }
    for (const name in changes) {
      const { previousValue, currentValue } = changes[name];

      if (previousValue === currentValue) {
        continue;
      }
      if (name === 'style') {
        this.setStyle();
      } else {
        (ruler as any)[name] = currentValue;
      }
    }
  }
  ngAfterViewInit() {
    const el = this.rulerRef.nativeElement;
    const options: Record<string, any> = {};

    PROPERTIES.forEach(name => {
      if (name === 'style') {
        return;
      }
      (options as any)[name] = (this as any)[name];
    });

    options['warpSelf'] = true;
    this.ruler = new Ruler(el, options);
    this.setStyle();
  }
  ngOnDestroy() {
    this.ruler.destroy();
  }
  setStyle() {
    const el = this.rulerRef.nativeElement;
    const elStyle = el.style;
    const style = this.style;

    for (const name in style) {
      if (elStyle[name] === style[name]) {
        continue;
      }
      elStyle[name] = style[name];
    }
  }
}
