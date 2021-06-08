import { IObject } from "@daybrush/utils";

/**
 * @typedef
 * @memberof Ruler
 */
export interface RulerInterface {
    scroll(scrollPos: number): void;
    resize(): void;
}

/**
 * @typedef
 * @memberof Ruler
 * @property - ruler's direction
 * @property - ruler's width (default: offsetWidth)
 * @property - ruler's height (default: offsetheight)
 * @property - main scale unit (default: 50)
 * @property - zoom (default: 1)
 * @property - line's direction (default: "end")
 * @property - text align (default: "start")
 * @property - font and size  (default: "10px sans-serif")
 * @property - Number of areas to divide between two main lines (default: 10)
 * @property - main line size (default "100%")
 * @property - long line size (default: 10)
 * @property - short line size (default: 7)
 * @property - text's position offset (default: [0, 0])
 * @property - Whether to display the ruler in the negative direction (default: true)
 * @property - you can set scroll position by prop. If you use the scrollPos prop, you can't use the scroll method. (default: 0)
 * @property - ruler canvas style
 * @property - ruler's background color (default: "#333333")
 * @property - ruler's line color (default: "#777777")
 * @property - ruler's text color (default: "#ffffff")
 * @property - ruler's text format
 */
export interface RulerProps {
    type?: "horizontal" | "vertical";
    width?: number;
    height?: number;
    unit?: number;
    zoom?: number;
    direction?: "start" | "end";
    textAlign?: "left" | "center" | "right";
    font?: string;
    segment?: number;
    mainLineSize?: string | number;
    longLineSize?: string | number;
    shortLineSize?: string | number;
    textOffset?: number[];
    negativeRuler?: boolean;
    scrollPos?: number;
    style?: IObject<any>;
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    textFormat?: (scale: number) => string;
}
