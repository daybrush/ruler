import { RulerInterface, RulerProps } from "./types";

export const PROPERTIES: Array<keyof RulerProps> = [
    "type", "width", "height",
    "unit", "zoom", "style", "backgroundColor", "lineColor",
    "textColor", "direction",
    "textFormat", "scrollPos",
    "textAlign",
    "mainLineSize", "longLineSize",
    "shortLineSize", "negativeRuler",
    "textOffset",
    "font",
    "segment",
];
export const METHODS: Array<keyof RulerInterface> = [
    "scroll", "resize",
];
