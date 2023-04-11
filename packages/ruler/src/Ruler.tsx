import { ref, Properties } from "framework-utils";
import * as React from "react";
import { PROPERTIES } from "./consts";
import { RulerInterface, RulerProps } from "@scena/react-ruler/declaration/types";
import InnerRuler from "./InnerRuler";
import { ContainerProvider, renderSelf } from "croact";


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
    private containerProvider: ContainerProvider | null = null;
    private selfElement: HTMLElement | null = null;
    private _warp = false;
    private innerRuler!: InnerRuler;
    /**
     * @param - container
     * @param {$ts:Partial<Ruler.RulerProps>} options - options
     */
    constructor(parentElement: HTMLElement, options: Partial<RulerProps> = {}) {
        let selfElement!: HTMLElement;

        if (options.warpSelf) {
            delete options.warpSelf;
            this._warp = true;
            selfElement = parentElement;
        } else {
            selfElement = document.createElement("canvas");
            parentElement.appendChild(selfElement);
        }
        renderSelf(
            <InnerRuler ref={ref(this, "innerRuler")}
                {...options} />,
            selfElement,
        );
    }
    public scroll(scrollPos: number) {
        this.getRuler().scroll(scrollPos);
    }
    public resize() {
        this.getRuler().resize();
    }
    public getScrollPos() {
        return this.getRuler().getScrollPos();
    }
    /**
     * Remove Ruler
     */
    public destroy() {
        const selfElement = this.selfElement!;

        renderSelf(
            null,
            selfElement!,
            this.containerProvider,
        );
        if (!this._warp) {
            selfElement?.parentElement?.removeChild(selfElement);
        }
        this.selfElement = null;
        this.innerRuler = null;
    }
    private getRuler() {
        return this.innerRuler.ruler;
    }
}

export default Ruler;
