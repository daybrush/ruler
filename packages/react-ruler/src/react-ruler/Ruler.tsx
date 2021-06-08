import * as React from "react";
import { ref } from "framework-utils";
import { RulerInterface, RulerProps } from "./types";
import { convertUnitSize } from "@daybrush/utils";

export default class Ruler extends React.PureComponent<RulerProps> implements RulerInterface {
    public static defaultProps: RulerProps = {
        type: "horizontal",
        zoom: 1,
        width: 0,
        height: 0,
        unit: 50,
        negativeRuler: true,
        mainLineSize: "100%",
        longLineSize: 10,
        shortLineSize: 7,
        segment: 10,
        direction: "end",
        style: { width: "100%", height: "100%" },
        backgroundColor: "#333333",
        font: "10px sans-serif",
        textColor: "#ffffff",
        lineColor: "#777777",
    };
    public divisionsElement!: HTMLElement;
    public state = {
        scrollPos: 0,
    };
    public canvasElement!: HTMLCanvasElement;
    private canvasContext!: CanvasRenderingContext2D;
    private width: number = 0;
    private height: number = 0;
    public render() {
        return (<canvas
            ref={ref(this, "canvasElement")}
            style={this.props.style} />);

    }
    public componentDidMount() {
        const canvas = this.canvasElement;
        const context = canvas.getContext("2d")!;

        this.canvasContext = context;

        this.resize();
    }
    public componentDidUpdate() {
        this.resize();
    }
    /**
     * @method Ruler#scroll
     * @param scrollPos
     */
    public scroll(scrollPos: number) {
        this.draw(scrollPos);
    }
    /**
     * @method Ruler#resize
     */
    public resize() {
        const canvas = this.canvasElement;
        const {
            width,
            height,
            scrollPos,
        } = this.props;

        this.width = width || canvas.offsetWidth;
        this.height = height || canvas.offsetHeight;
        canvas.width = this.width * 2;
        canvas.height = this.height * 2;
        this.draw(scrollPos);
    }
    private draw(scrollPos: number = this.state.scrollPos) {
        const props = this.props;
        const {
            unit,
            zoom,
            type,
            backgroundColor,
            lineColor,
            textColor,
            direction,
            negativeRuler = true,
            segment = 10,
            textFormat,
        } = props as Required<RulerProps>;
        const width = this.width;
        const height = this.height;
        const state = this.state;
        state.scrollPos = scrollPos;
        const context = this.canvasContext;
        const isHorizontal = type === "horizontal";
        const isDirectionStart = direction === "start";
        const isNegative = negativeRuler !== false;
        const font = props.font || "10px sans-serif";
        const textAlign = props.textAlign || "left";
        const textOffset = props.textOffset || [0, 0];
        const containerSize = isHorizontal ? height : width;
        const mainLineSize = convertUnitSize(`${props.mainLineSize || "100%"}`, containerSize);
        const longLineSize = convertUnitSize(`${props.longLineSize || 10}`, containerSize);
        const shortLineSize = convertUnitSize(`${props.shortLineSize || 7}`, containerSize);

        if (backgroundColor === "transparent") {
            // Clear existing paths & text
            context.clearRect(0, 0, width * 2, height * 2);
        } else {
            // Draw the background
            context.rect(0, 0, width * 2, height * 2);
            context.fillStyle = backgroundColor;
            context.fill();
        }

        context.save();
        context.scale(2, 2);
        context.strokeStyle = lineColor;
        context.lineWidth = 1;
        context.font = font;
        context.fillStyle = textColor;

        if (isDirectionStart) {
            context.textBaseline = "top";
        }
        context.translate(0.5, 0);
        context.beginPath();

        const size = isHorizontal ? width : height;
        const zoomUnit = zoom * unit;
        const minRange = Math.floor(scrollPos * zoom / zoomUnit);
        const maxRange = Math.ceil((scrollPos * zoom + size) / zoomUnit);
        const length = maxRange - minRange;
        const alignOffset = Math.max(["left", "center", "right"].indexOf(textAlign) - 1, -1);



        for (let i = 0; i <= length; ++i) {
            const value = i + minRange;

            if (!isNegative && value < 0) {
                continue;
            }
            const startPos = (value * unit - scrollPos) * zoom;
            for (let j = 0; j < segment; ++j) {
                const pos = startPos + j / segment * zoomUnit;

                if (pos < 0 || pos >= size) {
                    continue;
                }
                const lineSize = j === 0
                    ? mainLineSize
                    : (j % 2 === 0 ? longLineSize : shortLineSize);

                const [x1, y1] = isHorizontal
                    ? [pos, isDirectionStart ? 0 : height - lineSize]
                    : [isDirectionStart ? 0 : width - lineSize, pos];
                const [x2, y2] = isHorizontal ? [x1, y1 + lineSize] : [x1 + lineSize, y1];
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
            }

            if (startPos >= -zoomUnit && startPos < size + unit * zoom) {
                const [startX, startY] = isHorizontal
                    ? [startPos + alignOffset * -3, isDirectionStart ? 17 : height - 17]
                    : [isDirectionStart ? 17 : width - 17, startPos + alignOffset * 3];

                let text = `${value * unit}`;

                if (textFormat) {
                    text = textFormat(value * unit);
                }

                context.textAlign = textAlign;
                if (isHorizontal) {
                    context.fillText(text, startX + textOffset[0], startY + textOffset[1]);
                } else {
                    context.save();
                    context.translate(startX + textOffset[0], startY + textOffset[1]);
                    context.rotate(-Math.PI / 2);
                    context.fillText(text, 0, 0);
                    context.restore();
                }
            }
        }
        context.stroke();
        context.restore();
    }
}
