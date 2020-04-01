# NgxRulerApp

An Angular Ruler component that can draw grids and scroll infinitely.

## ⚙️ Installation
### npm
```sh
$ npm i ngx-ruler
```

## 🚀 How to use
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxRulerComponent, NgxRulerModule } from 'ngx-rulder';

@NgModule({
  declarations: [
    AppComponent,
    NgxRulerComponent,
  ],
  imports: [
    BrowserModule,
    // NgxRulerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Template
```html
<ngx-ruler
  [type]="type"
  [width]="width"
  [height]="height"
  [unit]="unit"
  [zoom]="zoom"
  [style]="style"
  [backgroundColor]="backgroundColor"
  [lineColor]="lineColor"
  [textColor]="textColor"
  [direction]="direction"
/>
```


```ts

export interface RulerInterface {
    scroll(scrollPos: number): any;
    resize(): any;
}

export interface RulerProps {
    type?: "horizontal" | "vertical";
    width?: number;
    height?: number;
    unit?: number;
    zoom?: number;
    direction?: "start" | "end";
    style?: IObject<any>;
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    textFormat?: (scale: number) => string;
}


```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
