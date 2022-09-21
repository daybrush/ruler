import { ref, Properties } from "framework-utils";
import * as React from "react";
import { render } from "react-dom";
import { PROPERTIES } from "./consts";
import { RulerInterface, RulerProps } from "@scena/react-ruler/declaration/types";
import InnerRuler from "./InnerRuler";


/**
 * A Ruler component that can draw grids and scroll infinitely.
 * @sort 1
 * @implements Ruler.RulerInterface
 */
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
    /**
     * @param - container
     * @param {$ts:Partial<Ruler.RulerProps>} options - options
     */
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
    /**
     * Remove Ruler
     */
    public destroy() {
        render(null, this.tempElement);
        this.tempElement = null;
        this.innerRuler = null;
    }
    private getRuler() {
        return this.innerRuler.ruler;
    }
}

export default Ruler;
