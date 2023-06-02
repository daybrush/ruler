import * as React from "react";
import { ref } from "framework-utils";
import { DrawRulerOptions, RulerInterface, RulerProps } from "./types";
import { convertUnitSize, findLast } from "@daybrush/utils";

export default class Ruler extends React.PureComponent<RulerProps> implements RulerInterface {
    public static defaultProps: Partial<RulerProps> = {
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
        textBackgroundColor: 'transparent',
        lineColor: "#777777",
        range: [-Infinity, Infinity],
        rangeBackgroundColor: 'transparent',
        lineWidth: 1,
        selectedBackgroundColor: "#555555",
        defaultScrollPos: 0,
        markColor: "#f55",
        marks: [],
    };
    public divisionsElement!: HTMLElement;
    public state = {
        scrollPos: 0,
    };
    public canvasElement!: HTMLCanvasElement;
    private canvasContext!: CanvasRenderingContext2D;
    private width: number = 0;
    private height: number = 0;
    private _zoom = 0;
    private _rulerScale = 0;
    private _observer: ResizeObserver | null = null;

    public render() {
        const props = this.props;
        this._zoom = props.zoom!;

        return <canvas
            ref={ref(this, "canvasElement")}
            style={this.props.style} />;

    }
    public componentDidMount() {
        const props = this.props;
        this.state.scrollPos = props.defaultScrollPos || 0;
        const canvas = this.canvasElement;
        const context = canvas.getContext("2d", { alpha: true })!;

        this.canvasContext = context;

        if (props.useResizeObserver) {
            this._observer = new ResizeObserver(this._checkResize);

            this._observer.observe(canvas, {
                box: "border-box",
            });
        } else {
            this.resize();
        }
    }
    public componentDidUpdate() {
        this.resize();
    }
    public componentWillUnmount(): void {
        this.state.scrollPos = 0;
        this._observer?.disconnect();
    }
    /**
     * Gets the scroll position of the ruler.
     */
    public getScrollPos() {
        return this.state.scrollPos;
    }
    /**
     * @method Ruler#scroll
     * @param scrollPos
     */
    public scroll(scrollPos: number, zoom?: number) {
        this.draw({
            scrollPos,
            zoom,
        });
    }
    /**
     * @method Ruler#resize
     */
    public resize(nextZoom?: number) {
        const canvas = this.canvasElement;
        const {
            width,
            height,
            scrollPos,
        } = this.props;
        const rulerScale = this._getRulerScale();

        this.width = width || canvas.offsetWidth;
        this.height = height || canvas.offsetHeight;
        canvas.width = this.width * rulerScale;
        canvas.height = this.height * rulerScale;

        this.draw({
            scrollPos,
            zoom: nextZoom,
        });
    }
    /**
     * draw a ruler
     * @param options - It is drawn with an external value, not the existing state.
     */
    public draw(options: DrawRulerOptions = {}) {
        const props = this.props;
        const {
            zoom: nextZoom = this._zoom,
            scrollPos = this.state.scrollPos,
            marks = props.marks,
            selectedRanges = props.selectedRanges!,
            segment = props.segment || 10,
            unit = props.unit!,
        } = options;

        this._zoom = nextZoom;

        const {
            type,
            backgroundColor,
            lineColor,
            textColor,
            textBackgroundColor,
            direction,
            negativeRuler = true,
            textFormat,
            range = [-Infinity, Infinity],
            rangeBackgroundColor,
            selectedBackgroundColor,
            lineWidth = 1,
            selectedRangesText,
            selectedRangesTextColor = "#44aaff",
            selectedRangesTextOffset = [0, 0],
            markColor = "#ff5",
        } = props as Required<RulerProps>;

        const rulerScale = this._getRulerScale();
        const width = this.width;
        const height = this.height;
        const state = this.state;
        state.scrollPos = scrollPos;
        const context = this.canvasContext;
        const isHorizontal = type === "horizontal";
        const isNegative = negativeRuler !== false;
        const font = props.font || "10px sans-serif";
        const textAlign = props.textAlign || "left";
        const textOffset = props.textOffset || [0, 0];
        const containerSize = isHorizontal ? height : width;
        const mainLineSize = convertUnitSize(`${props.mainLineSize || "100%"}`, containerSize);
        const longLineSize = convertUnitSize(`${props.longLineSize || 10}`, containerSize);
        const shortLineSize = convertUnitSize(`${props.shortLineSize || 7}`, containerSize);
        const lineOffset = props.lineOffset || [0, 0];

        if (backgroundColor === "transparent") {
            // Clear existing paths & text
            context.clearRect(0, 0, width * rulerScale, height * rulerScale);
        } else {
            // Draw the background
            context.rect(0, 0, width * rulerScale, height * rulerScale);
            context.fillStyle = backgroundColor;
            context.fill();
        }


        context.save();
        context.scale(rulerScale, rulerScale);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.font = font;
        context.fillStyle = textColor;
        context.textAlign = textAlign;

        switch (direction) {
            case "start":
                context.textBaseline = "top";
                break;
            case "center":
                context.textBaseline = "middle";
                break;
            case "end":
                context.textBaseline = "bottom";
                break;
        }

        context.translate(0.5, 0);
        context.beginPath();

        const size = isHorizontal ? width : height;
        const zoomUnit = nextZoom * unit;
        const minRange = Math.floor(scrollPos * nextZoom / zoomUnit);
        const maxRange = Math.ceil((scrollPos * nextZoom + size) / zoomUnit);
        const length = maxRange - minRange;
        const alignOffset = Math.max(["left", "center", "right"].indexOf(textAlign) - 1, -1);
        const barSize = isHorizontal ? height : width;
        const values: Array<{
            color: string;
            backgroundColor?: string;
            offset: number[];
            value: number;
            text: string;
            textSize: number;
        }> = [];

        for (let i = 0; i <= length; ++i) {
            const value = (i + minRange) * unit;
            let text = `${value}`;

            if (textFormat) {
                text = textFormat(value);
            }
            const textSize = context.measureText(text).width;

            values.push({
                color: textColor,
                offset: textOffset,
                backgroundColor: textBackgroundColor,
                value,
                text,
                textSize: textSize,
            });
        }


        // Draw Selected Range Background
        if (selectedBackgroundColor !== "transparent" && selectedRanges?.length) {
            selectedRanges.forEach(selectedRange => {
                const rangeStart = Math.max(selectedRange[0], range[0], negativeRuler ? -Infinity : 0);
                const rangeEnd = Math.min(selectedRange[1], range[1]);
                const rangeX = (rangeStart - scrollPos) * nextZoom;
                const rangeWidth = ((rangeEnd - rangeStart) * nextZoom);

                if (selectedRangesText) {
                    selectedRange.forEach(value => {
                        let text = `${value}`;

                        if (textFormat) {
                            text = textFormat(value);
                        }
                        const textSize = context.measureText(text).width;

                        const startPos = value * nextZoom;
                        const endPos = startPos + textSize;

                        findLast(values, ({ value: prevValue, textSize: prevTextSize }, index) => {
                            const prevStartPos = prevValue * nextZoom;
                            const prevEndPos = prevStartPos + prevTextSize;

                            if (prevStartPos <= endPos && startPos <= prevEndPos) {
                                values.splice(index, 1);
                            }
                        });
                        values.push({
                            value,
                            color: selectedRangesTextColor,
                            offset: selectedRangesTextOffset,
                            text,
                            textSize,
                        });
                    });
                }

                if (rangeWidth <= 0) {
                    return;
                }
                context.save();
                context.fillStyle = selectedBackgroundColor;

                if (isHorizontal) {
                    context.fillRect(rangeX, 0, rangeWidth, barSize);
                } else {
                    context.fillRect(0, rangeX, barSize, rangeWidth);
                }
                context.restore();
            });
        }
        // Draw Range Background
        if (rangeBackgroundColor !== "transparent" && range[0] !== -Infinity && range[1] !== Infinity) {
            const rangeStart = (range[0] - scrollPos) * nextZoom;
            const rangeEnd = ((range[1] - range[0]) * nextZoom);
            context.save();
            context.fillStyle = rangeBackgroundColor;
            if (isHorizontal) {
                context.fillRect(rangeStart, 0, rangeEnd, barSize);
            } else {
                context.fillRect(0, rangeStart, barSize, rangeEnd);
            }

            context.restore();
        }

        // Render Segments First

        for (let i = 0; i <= length; ++i) {
            const value = i + minRange;

            if (!isNegative && value < 0) {
                continue;
            }
            const startValue = value * unit;
            const startPos = (startValue - scrollPos) * nextZoom;

            for (let j = 0; j < segment; ++j) {
                const pos = startPos + j / segment * zoomUnit;
                const value = startValue + j / segment * unit;

                if (pos < 0 || pos >= size || value < range[0] || value > range[1]) {
                    continue;
                }

                const lineSize = j === 0
                    ? mainLineSize
                    : (j % 2 === 0 ? longLineSize : shortLineSize);

                let origin = 0
                switch (direction) {
                    case "start":
                        origin = 0;
                        break;
                    case "center":
                        origin = barSize / 2 - lineSize / 2;
                        break;
                    case "end":
                        origin = barSize - lineSize;
                        break;
                }

                const [x1, y1] = isHorizontal ?
                    [pos + lineOffset[0], origin + lineOffset[1]] :
                    [origin + lineOffset[0], pos + lineOffset[1]];

                const [x2, y2] = isHorizontal ? [x1, y1 + lineSize] : [x1 + lineSize, y1];

                context.moveTo(x1 + lineOffset[0], y1 + lineOffset[1]);
                context.lineTo(x2 + lineOffset[0], y2 + lineOffset[1]);
            }
        }
        context.stroke();

        context.beginPath();
        // Render marks
        context.strokeStyle = markColor;
        context.lineWidth = 1;
        (marks || []).forEach(value => {
            const pos = (-scrollPos + value) * nextZoom;

            if (pos < 0 || pos >= size || value < range[0] || value > range[1]) {
                return;
            }
            const [x1, y1] = isHorizontal ?
                [pos + lineOffset[0], lineOffset[1]] :
                [lineOffset[0], pos + lineOffset[1]];
            const [x2, y2] = isHorizontal ? [x1, y1 + containerSize] : [x1 + containerSize, y1];

            context.moveTo(x1 + lineOffset[0], y1 + lineOffset[1]);
            context.lineTo(x2 + lineOffset[0], y2 + lineOffset[1]);
        });
        context.stroke();

        // Render Labels

        values.forEach(({ value, offset, backgroundColor, color, text, textSize }) => {
            if (!isNegative && value < 0) {
                return;
            }
            const startPos = (value - scrollPos) * nextZoom;

            if (startPos < -zoomUnit || startPos >= size + unit * nextZoom || value < range[0] || value > range[1]) {
                return;
            }

            let origin = 0
            switch (direction) {
                case "start":
                    origin = 17;
                    break;
                case "center":
                    origin = barSize / 2;
                    break;
                case "end":
                    origin = barSize - 17;
                    break;
            }

            const [startX, startY] = isHorizontal
                ? [startPos + alignOffset * -3, origin]
                : [origin, startPos + alignOffset * 3];

            if (backgroundColor) {
                let backgroundOffset = 0
                switch (textAlign) {
                    case "left":
                        backgroundOffset = 0;
                        break;
                    case "center":
                        backgroundOffset = -textSize / 2;
                        break;
                    case "right":
                        backgroundOffset = -textSize;
                        break;
                }
                context.save();
                context.fillStyle = backgroundColor;
                if (isHorizontal) {
                    context.fillRect(startX + offset[0] + backgroundOffset, 0, textSize, mainLineSize);
                } else {
                    context.translate(0, startY + offset[1]);
                    context.rotate(-Math.PI / 2);
                    context.fillRect(backgroundOffset, 0, textSize, mainLineSize);
                }
                context.restore();
            }

            context.save();
            context.fillStyle = color;
            if (isHorizontal) {
                context.fillText(text, startX + offset[0], startY + offset[1]);
            } else {
                context.translate(startX + offset[0], startY + offset[1]);
                context.rotate(-Math.PI / 2);
                context.fillText(text, 0, 0);
            }
            context.restore();
        });

        context.restore();
    }
    private _getRulerScale() {
        const defaultPixelScale = this.props.defaultPixelScale || 2;

        if (!this._rulerScale) {
            let isHighDensity = window.devicePixelRatio > 1;

            if (!isHighDensity && window.matchMedia) {
                const mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
                isHighDensity = mq && mq.matches;
            }
            this._rulerScale = isHighDensity ? 3 : defaultPixelScale;
        }
        return this._rulerScale;
    }
    private _checkResize = () => {
        this.resize();
    }
}
