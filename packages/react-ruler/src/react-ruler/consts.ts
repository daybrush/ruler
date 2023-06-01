import { RulerInterface, RulerProps } from "./types";

export const PROPERTIES: Array<keyof RulerProps> = [
    "type",
    "width",
    "height",
    "unit",
    "zoom",
    "direction",
    "textAlign",
    "font",
    "segment",
    "mainLineSize",
    "longLineSize",
    "shortLineSize",
    "lineOffset",
    "textOffset",
    "negativeRuler",
    "range",
    "scrollPos",
    "defaultScrollPos",
    "style",
    "backgroundColor",
    "rangeBackgroundColor",
    "lineColor",
    "textColor",
    "textBackgroundColor",
    "textFormat",
    "warpSelf",
    "selectedBackgroundColor",
    "selectedRanges",
    "defaultPixelScale",
    "useResizeObserver",
    "selectedRangesText",
    "selectedRangesTextColor",
    "selectedRangesTextOffset",
    "marks",
    "markColor",
];
export const METHODS: Array<keyof RulerInterface> = [
    "scroll",
    "resize",
    "getScrollPos",
];
