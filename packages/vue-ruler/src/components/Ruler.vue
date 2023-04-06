<template>
  <canvas ref="rulerElement"></canvas>
</template>
<script lang="ts">
import VanillaRuler, { RulerProps, PROPERTIES, METHODS } from "@scena/ruler";
import { isUndefined, IObject } from "@daybrush/utils";

const methods: Record<string, any> = {
    setStyle() {
        const el = this.$refs.rulerElement as HTMLElement;
        const elStyle = el.style as any;
        const style = this.$props.style || { width: "100%", height: "100%" };

        for (const name in style) {
            if (elStyle[name] === style[name]) {
                continue;
            }
            elStyle[name] = style[name];
        }
    },
};

METHODS.forEach((name) => {
  methods[name] = function (this: any, ...args: any[]) {
    return this.$_ruler[name](...args);
  };
});
const watch: Record<string, any> = {};

PROPERTIES.forEach((name) => {
  watch[name] = function (this: any, value: any) {
      if (name === "style") {
          this.setStyle();
      } else {
        this.$_ruler[name] = value;
      }
  };
});
export default {
  name: "ruler",
  methods,
  props: PROPERTIES,
  watch,
  mounted(this: any) {
    const options: Partial<RulerProps> = {};
    const props = this.$props;
    PROPERTIES.forEach((name) => {
      const value = props[name];

      if (!isUndefined(value)) {
        (options as any)[name] = props[name];
      }
    });
    options.warpSelf = true;
    const ruler = new VanillaRuler(this.$refs.rulerElement as HTMLElement, options);
    this.setStyle();

    this.$_ruler = ruler;
  },
  beforeDestroy(this: any) {
    this.$_ruler.destroy();
  },
};

</script>
