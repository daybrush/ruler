import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgxRulerComponent } from 'projects/ngx-ruler/src/public-api';
import Dragger from '@daybrush/drag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-ruler-app';
  @ViewChild('ruler1', { static: false }) ruler1: NgxRulerComponent;
  @ViewChild('ruler2', { static: false }) ruler2: NgxRulerComponent;
  private dragger: Dragger;
  ngAfterViewInit() {
    window.addEventListener('resize', this.onResize);

    let scrollX = 0;
    let scrollY = 0;
    this.dragger = new Dragger(document.body, {
      drag: e => {
        scrollX -= e.deltaX;
        scrollY -= e.deltaY;

        this.ruler1.scroll(scrollX);
        this.ruler2.scroll(scrollY);
      },
    });

    this.onResize();
  }
  onResize = () => {
    this.ruler1.resize();
    this.ruler2.resize();
  }
}
