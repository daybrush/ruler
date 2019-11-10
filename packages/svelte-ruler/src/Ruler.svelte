<script lang="ts">
  import VanillaRuler, {
    RulerProps,
    PROPERTIES
  } from "@scena/ruler";

  import {
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
    tick
  } from "svelte";

  export let style = { width: "100%", height: "100%"};

  declare var $$props: any;
  let options: Partial<RulerProps> = {};
  let ruler: VanillaRuler;
  let rulerElement: HTMLElement;

  function setStyle() {
    const elStyle = rulerElement.style;

    for (const name in style) {
      if (elStyle[name] === style[name]) {
        continue;
      }
      elStyle[name] = style[name];
    }
  }
  beforeUpdate(() => {
    const props = $$props;

    options = {};
    PROPERTIES.forEach(name => {
      if (name === "style") {
        return;
      }
      if (name in props) {
        (options as any)[name] = props[name];
      }
    });
    if (ruler) {
      for (const name in options) {
        ruler[name] = options[name];
      }
      setStyle();
    }
  });
  onMount(() => {
    setStyle();
    ruler = new VanillaRuler(rulerElement, options);
  });
  onDestroy(() => {
    ruler.destroy();
  });

  export function resize() {
    ruler.resize();
  }
  export function scroll(scrollPos: number) {
    ruler.scroll(scrollPos);
  }
</script>

<div class="ruler" bind:this={rulerElement} />
