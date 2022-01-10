<template>
  <div class="page">
    <div class="box"></div>
    <div class="ruler horizontal">
      <Ruler type="horizontal" ref="ruler1" />
    </div>
    <div class="ruler vertical">
      <Ruler type="vertical" ref="ruler2" />
    </div>

    <div class="container">
      <img src="https://daybrush.com/ruler/images/ruler.png" width="200" alt="ruler" />
      <p class="dragit">Drag Screen!</p>
      <p class="badges">
        <a href="https://www.npmjs.com/package/vue-ruler" target="_blank">
          <img
            src="https://img.shields.io/npm/v/vue-ruler.svg?style=flat-square&color=007acc&label=version"
            alt="npm version"
          />
        </a>
        <a href="https://github.com/daybrush/ruler" target="_blank">
          <img
            src="https://img.shields.io/github/stars/daybrush/ruler.svg?color=42b883&style=flat-square"
          />
        </a>
        <a href="https://github.com/daybrush/ruler" target="_blank">
          <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" />
        </a>
        <a href="https://github.com/daybrush/ruler/blob/master/LICENSE" target="_blank">
          <img
            src="https://img.shields.io/github/license/daybrush/ruler.svg?style=flat-square&label=license&color=08CE5D"
          />
        </a>
        <a
          href="https://github.com/daybrush/ruler/tree/master/packages/react-ruler"
          target="_blank"
        >
          <img
            alt="React"
            src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"
          />
        </a>
        <a
          href="https://github.com/daybrush/ruler/tree/master/packages/preact-ruler"
          target="_blank"
        >
          <img
            alt="Preact"
            src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"
          />
        </a>
        <a href="https://github.com/daybrush/ruler/tree/master/packages/ngx-ruler" target="_blank">
          <img
            alt="Angular"
            src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38"
          />
        </a>
        <a href="https://github.com/daybrush/ruler/tree/master/packages/vue-ruler" target="_blank">
          <img
            alt="Vue"
            src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"
          />
        </a>
        <a
          href="https://github.com/daybrush/ruler/tree/master/packages/svelte-ruler"
          target="_blank"
        >
          <img
            alt="Svelte"
            src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&color=C82B38"
          />
        </a>
      </p>
      <p class="description">A Ruler component that can draw grids and scroll infinitely.</p>
      <div class="buttons">
        <a
          href="https://github.com/daybrush/ruler/tree/master/packages/svelte-ruler"
          target="_blank"
        >Download</a>
        <!-- <a href="./release/latest/doc" target="_blank">API</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dragger from "@daybrush/drag";
import Ruler from "./components/Ruler.vue";

@Component({
  components: {
    Ruler
  }
})
export default class App extends Vue {
  protected mounted() {
    const ruler1 = this.$refs.ruler1 as any;
    const ruler2 = this.$refs.ruler2 as any;
    this.onResize();

    let scrollX = 0;
    let scrollY = 0;

    new Dragger(document.body, {
      drag: e => {
        scrollX -= e.deltaX;
        scrollY -= e.deltaY;

        ruler1.scroll(scrollX);
        ruler2.scroll(scrollY);
      }
    });
    window.addEventListener("resize", this.onResize);
  }
  onResize = () => {
    const ruler1 = this.$refs.ruler1 as any;
    const ruler2 = this.$refs.ruler2 as any;

    ruler1.resize();
    ruler2.resize();
  };
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:100&display=swap");

html,
body {
  font-family: "Open Sans", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  color: #333;
  letter-spacing: 1px;
  background: #f5f5f5;
  font-weight: 300;
  touch-action: manipulation;
}

a {
  text-decoration: none;
  color: #333;
}
.ruler {
  position: absolute;
  top: 0;
  left: 0;
}
.ruler.horizontal {
  left: 30px;
  width: calc(100% - 30px);
  height: 30px;
}
.ruler.vertical {
  top: 30px;
  width: 30px;
  height: calc(100% - 30px);
}

.box {
  position: relative;
  width: 30px;
  height: 30px;
  background: #444;
  box-sizing: border-box;
  z-index: 21;
}
.box:before,
.box:after {
  position: absolute;
  content: "";
  background: #777;
}
.box:before {
  width: 1px;
  height: 100%;
  left: 100%;
}
.box:after {
  height: 1px;
  width: 100%;
  top: 100%;
}

.container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: calc(100% - 60px);
  width: 100%;
}

.badges {
  padding: 10px;
}
.badges img {
  height: 20px;
}
.buttons {
  text-align: center;
  margin: 0;
  padding: 10px;
}
.buttons a {
  margin: 0;
  position: relative;
  text-decoration: none;
  color: #333;
  border: 1px solid #333;
  padding: 12px 30px;
  min-width: 140px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  margin: 5px;
  transition: all ease 0.5s;
}
.buttons a:hover {
  background: #333;
  color: #fff;
}

p {
  padding: 0;
  margin: 0;
}

.dragit {
  font-weight: bold;
}
.badges a {
  margin: 0px 2px;
}
</style>
