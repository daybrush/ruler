import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaRuler, { RulerInterface, RulerProps, PROPERTIES, METHODS } from "@scena/ruler";
import { IObject } from "@daybrush/utils";
import { Properties, withMethods } from "framework-utils";

@Component({
})
@Properties(PROPERTIES as any, (prototype, name) => {
    Prop()(prototype, name);
})
export default class Ruler extends Vue {
    @withMethods(METHODS)
    private ruler!: VanillaRuler;
    private options!: Partial<RulerProps>;

    public setStyle() {
        const el = this.$refs.rulerElement as HTMLElement;
        const elStyle = el.style as any;
        const style = this.style || { width: "100%", height: "100%" };

        for (const name in style) {
            if (elStyle[name] === style[name]) {
                continue;
            }
            elStyle[name] = style[name];
        }
    }
    protected render(h: any) {
        return h("div", { ref: "rulerElement" });
      }
    protected updated() {
        this.updateOptions();
    }
    protected mounted() {
        this.ruler = new VanillaRuler(this.$refs.rulerElement as HTMLElement, {
            type: this.type,
            width: this.width,
            height: this.height,
            unit: this.unit,
            zoom: this.zoom,
        });
        this.setStyle();
    }
    protected beforeDestroy() {
        this.ruler.destroy();
    }
    private updateOptions() {
        const prevOptions: IObject<any> = this.options;
        const ruler: any = this.ruler;
        const options: IObject<any> = {};

        PROPERTIES.forEach(name => {
            if (name === "style") {
                return;
            }
            const value = this[name];
            options[name] = value;
            if (prevOptions[name] !== value) {
                ruler[name] = value;
            }
        });

        this.options = options;
        this.setStyle();
    }
}

export default interface Ruler extends RulerInterface, RulerProps {}
