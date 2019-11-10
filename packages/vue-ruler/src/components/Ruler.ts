import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaRuler, { RulerInterface, RulerProps, PROPERTIES } from "@scena/ruler";
import { IObject } from "@daybrush/utils";

@Component({
})
export default class Ruler extends Vue implements RulerInterface, RulerProps {
    @Prop() public type?: "horizontal" | "vertical";
    @Prop() public width?: number;
    @Prop() public height?: number;
    @Prop() public unit?: number;
    @Prop() public zoom?: number;
    @Prop({ default: () => ({ width: "100%", height: "100%" }) }) public style?: IObject<any>;
    @Prop() public backgroundColor?: string;
    @Prop() public lineColor?: string;
    private ruler!: VanillaRuler;
    private options!: Partial<RulerProps>;

    public scroll(scrollPos: number) {
        this.ruler.scroll(scrollPos);
    }
    public resize() {
        this.ruler.resize();
    }
    public setStyle() {
        const el = this.$refs.rulerElement as HTMLElement;
        const elStyle = el.style as any;
        const style = this.style;

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
