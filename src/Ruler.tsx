import { ref, Properties } from "framework-utils";
import { h, render } from "preact";
import { PROPERTIES } from "./consts";
import { RulerInterface, RulerProps } from "@scena/react-ruler/declaration/types";
import InnerRuler from "./InnerRuler";

@Properties(PROPERTIES, (prototype, property) => {
    Object.defineProperty(prototype, property, {
        get() {
            return this.getRuler().props[property];
        },
        set(value) {
            this.innerRuler.setState({
                [property]: value,
            });
        },
        enumerable: true,
        configurable: true,
    });
})
class Ruler implements RulerInterface {
    private tempElement = document.createElement("div");
    private innerRuler!: InnerRuler;

    constructor(parentElement: HTMLElement, options: Partial<RulerProps> = {}) {
        render(
            <InnerRuler ref={ref(this, "innerRuler")}
                {...options} parentElement={parentElement} />,
            this.tempElement,
        );
    }
    public scroll(scrollPos: number) {
        this.getRuler().scroll(scrollPos);
    }
    public resize() {
        this.getRuler().resize();
    }
    public destroy() {
        render("", this.tempElement);
        this.tempElement = null;
        this.innerRuler = null;
    }
    private getRuler() {
        return this.innerRuler.preactRuler;
    }
}

export default Ruler;
