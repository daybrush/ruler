

<p align="middle" ><img src="https://raw.githubusercontent.com/daybrush/ruler/master/demo/images/ruler.png"/></p>
<h2 align="middle">React Ruler</h2>
<p align="middle">
<a href="https://www.npmjs.com/package/@scena/react-ruler" target="_blank"><img src="https://img.shields.io/npm/v/@scena/react-ruler.svg?style=flat-square&color=007acc&label=version" alt="npm version" /></a>
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/ruler/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/daybrush/ruler.svg?style=flat-square&label=license&color=08CE5D"/></a>
<a href="https://github.com/daybrush/ruler/tree/master/packages/react-ruler" target="_blank"><img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"></a>
<a href="https://github.com/daybrush/ruler/tree/master/packages/preact-ruler" target="_blank"><img alt="Preact" src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"></a>
<a href="https://github.com/daybrush/ruler/tree/master/packages/ngx-ruler" target="_blank"><img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38"></a>
<a href="https://github.com/daybrush/ruler/tree/master/packages/vue-ruler" target="_blank"><img
    alt="Vue"
    src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"></a>
<a href="https://github.com/daybrush/ruler/tree/master/packages/svelte-ruler" target="_blank"><img
    alt="Vue"
    src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&color=C82B38"></a>
</p>
<p align="middle">A React Ruler component that can draw grids and scroll infinitely.</p>
<p align="middle">
    <a href="https://daybrush.com/ruler" target="_blank"><strong>Demo</strong></a> /
    <a href="https://daybrush.com/ruler/release/latest/doc/" target="_blank"><strong>API</strong></a> /
    <a href="https://github.com/daybrush/guides" target="_blank"><strong>Guides</strong></a> /
    <a href="https://github.com/daybrush/scena" target="_blank"><strong>Main Project</strong></a>
</p>


## ⚙️ Installation
### npm
```sh
$ npm i @scena/react-ruler
```

## 🚀 How to use
```tsx

import * as React from "react";
import Ruler from "@scena/react-ruler";

export default class App extends React.Component {
    render() {
        return (<Ruler type="horizontal" ref={e => {
            this.ruler = e;
        }}/>);
    }
    componentDidMount() {
        this.ruler.resize();

        window.addEventListener("resize", () => {
            this.ruler.resize();
        });
    }
}

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



## ⚙️ Developments
### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to `ruler` or other packages, please write the [issue](https://github.com/daybrush/ruler/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/daybrush/ruler/issues) on GitHub.


## 📝 License

This project is [MIT](https://github.com/daybrush/ruler/blob/master/LICENSE) licensed.

```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
