import * as React from "react";
import { ref } from "framework-utils";
import { RulerInterface, RulerProps } from "./types";

export default class Ruler extends React.PureComponent<RulerProps> implements RulerInterface {
    public static defaultProps = {
        type: "horizontal",
        zoom: 1,
        width: 0,
        height: 0,
        unit: 50,
        direction: "end",
        style: { width: "100%", height: "100%" },
        backgroundColor: "#333333",
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
    public scroll(scrollPos: number) {
        this.draw(scrollPos);
    }
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
        const {
            unit,
            zoom,
            type,
            backgroundColor,
            lineColor,
            textColor,
            direction,
            textFormat,
        } = this.props as Required<RulerProps>;
        const width = this.width;
        const height = this.height;
        const state = this.state;
        state.scrollPos = scrollPos;
        const context = this.canvasContext;
        const isHorizontal = type === "horizontal";
        const isDirectionStart = direction === "start";

        if (backgroundColor === 'transparent') {
            // Clear existing paths & text
            context.clearRect(0, 0, width * 2, height * 2);        
        }
        else {
            // Draw the background
            context.rect(0, 0, width * 2, height * 2);
            context.fillStyle = backgroundColor;
            context.fill();
        }
        
        context.save();
        context.scale(2, 2);
        context.strokeStyle = lineColor;
        context.lineWidth = 1;
        context.font = "10px sans-serif";
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

        for (let i = 0; i < length; ++i) {
            const startPos = ((i + minRange) * unit - scrollPos) * zoom;

            if (startPos >= -zoomUnit && startPos < size) {
                const [startX, startY] = isHorizontal
                    ? [startPos + 3, isDirectionStart ? 17 : height - 17]
                    : [isDirectionStart ? 17 : width - 17, startPos - 4];

                let text = `${(i + minRange) * unit}`;

                if (textFormat) {
                    text = textFormat((i + minRange) * unit);
                }
                if (isHorizontal) {
                    context.fillText(text, startX, startY);
                } else {
                    context.save();
                    context.translate(startX, startY);
                    context.rotate(-Math.PI / 2);
                    context.fillText(text, 0, 0);
                    context.restore();
                }
            }

            for (let j = 0; j < 10; ++j) {
                const pos = startPos + j / 10 * zoomUnit;

                if (pos < 0 || pos >= size) {
                    continue;
                }
                const lineSize = j === 0
                    ? isHorizontal ? height : width
                    : (j % 2 === 0 ? 10 : 7);

                const [x1, y1] = isHorizontal
                    ? [pos, isDirectionStart ? 0 : height - lineSize]
                    : [isDirectionStart ? 0 : width - lineSize, pos];
                const [x2, y2] = isHorizontal ? [x1, y1 + lineSize] : [x1 + lineSize, y1];
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
            }
        }
        context.stroke();
        context.restore();
    }
}
