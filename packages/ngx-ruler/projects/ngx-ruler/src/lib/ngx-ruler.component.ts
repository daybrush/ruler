import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import Ruler, { RulerProps, PROPERTIES } from '@scena/ruler';
import { IObject } from '@daybrush/utils';
import { NgxRulerInterface } from './ngx-ruler.interface';

@Component({
  selector: 'ngx-ruler',
  template: `
    <div class="ruler" #rulerRef></div>
  `,
  styles: []
})
export class NgxRulerComponent extends NgxRulerInterface implements Required<RulerProps>, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('rulerRef', { static: false }) private rulerRef: ElementRef;
  @Input() public font!: RulerProps['font'];
  @Input() public segment!: RulerProps['segment'];
  @Input() public type!: RulerProps['type'];
  @Input() public width!: RulerProps['width'];
  @Input() public height!: RulerProps['height'];
  @Input() public unit!: RulerProps['unit'];
  @Input() public zoom!: RulerProps['zoom'];
  @Input() public style!: RulerProps['style'];
  @Input() public backgroundColor!: RulerProps['backgroundColor'];
  @Input() public lineColor!: RulerProps['lineColor'];
  @Input() public textColor!: RulerProps['textColor'];
  @Input() public direction!: RulerProps['direction'];
  @Input() public textFormat!: RulerProps['textFormat'];
  @Input() public scrollPos!: RulerProps['scrollPos'];
  @Input() public textAlign!: RulerProps['textAlign'];
  @Input() public mainLineSize!: RulerProps['mainLineSize'];
  @Input() public longLineSize!: RulerProps['longLineSize'];
  @Input() public shortLineSize!: RulerProps['shortLineSize'];
  @Input() public textOffset!: RulerProps['textOffset'];
  @Input() public negativeRuler!: RulerProps['negativeRuler'];
  @Input() public range!: RulerProps['range'];
  @Input() public lineOffset!: RulerProps['lineOffset'];
  @Input() public rangeBackgroundColor!: RulerProps['rangeBackgroundColor'];
  @Input() public textBackgroundColor!: RulerProps['textBackgroundColor'];

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
