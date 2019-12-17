import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import Ruler, { RulerInterface, RulerProps } from '@scena/ruler';
import { IObject } from '@daybrush/utils';

@Component({
  selector: 'ngx-ruler',
  template: `
    <div class="ruler" #rulerRef></div>
  `,
  styles: []
})
export class NgxRulerComponent implements OnInit, RulerInterface, RulerProps, AfterViewInit, OnChanges, OnDestroy {
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
  private ruler: Ruler;
  public scroll(scrollPos: number) {
    this.ruler.scroll(scrollPos);
  }
  public resize() {
    this.ruler.resize();
  }
  constructor() { }

  ngOnInit() {
  }
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
    this.ruler = new Ruler(el, {
      type: this.type,
      width: this.width,
      height: this.height,
      unit: this.unit,
      zoom: this.zoom,
    });
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
