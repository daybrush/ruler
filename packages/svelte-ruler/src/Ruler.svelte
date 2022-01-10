<script>
  import VanillaRuler, {
    PROPERTIES
  } from "@scena/ruler";

  import {
    onMount,
    onDestroy,
    beforeUpdate,
  } from "svelte";

  export let style = { width: "100%", height: "100%"};

  let options = {};
  let ruler;
  let rulerElement;

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
        options[name] = props[name];
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

  export function getInstance() {
    return ruler;
  }
</script>

<div class="ruler" bind:this={rulerElement} />
