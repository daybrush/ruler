import { RulerProps, RulerInterface } from "@scena/react-ruler/declaration/types";

export const PROPERTIES: Array<keyof RulerProps> = [
    "type", "width", "height",
    "unit", "zoom", "style", "backgroundColor", "lineColor",
    "textColor", "direction",
    "textFormat",
];
export const METHODS: Array<keyof RulerInterface> = [
    "scroll", "resize",
];
