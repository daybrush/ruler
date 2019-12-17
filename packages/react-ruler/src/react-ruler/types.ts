import { IObject } from "@daybrush/utils";

export interface RulerInterface {
    scroll(scrollPos: number): any;
    resize(): any;
}
export interface RulerProps {
    type?: "horizontal" | "vertical";
    width?: number;
    height?: number;
    unit?: number;
    zoom?: number;
    style?: IObject<any>;
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
}
