import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import Ruler, { RulerInterface, RulerProps, PROPERTIES } from '@scena/ruler';
import { IObject } from '@daybrush/utils';
import { NgxRulerInterface } from './ngx-ruler.interface';

@Component({
  selector: 'ngx-ruler',
  template: `
    <div class="ruler" #rulerRef></div>
  `,
  styles: []
})
export class NgxRulerComponent extends NgxRulerInterface implements RulerProps, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('rulerRef', { static: false }) private rulerRef: ElementRef;
  @Input() public type?: 'horizontal' | 'vertical';
  @Input() public width?: number;
  @Input() public height?: number;
  @Input() public unit?: number;
  @Input() public zoom?: number;
  @Input() public style: IObject<any> = { width: '100%', height: '100%' };
  @Input() public backgroundColor?: string;
  @Input() public lineColor?: string;
  @Input() public textColor?: string;
  @Input() public direction?: 'start' | 'end';
  @Input() public textFormat?: RulerProps['textFormat'];

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
        ruler[name] = currentValue;
      }
    }
  }
  ngAfterViewInit() {
    const el = this.rulerRef.nativeElement;
    const options = {};

    PROPERTIES.forEach(name => {
      if (name === 'style') {
        return;
      }
      options[name] = this[name];
    });
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
