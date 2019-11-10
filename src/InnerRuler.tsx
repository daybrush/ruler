import { Component, h } from "preact";
import { createPortal } from "preact/compat";
import { ref } from "framework-utils";
import PreactRuler from "preact-ruler";
import { InnerRulerProps } from "./types";

export default class InnerRuler extends Component<InnerRulerProps, InnerRulerProps> {
    public state: InnerRulerProps = {};
    public preactRuler: PreactRuler;
    constructor(props: InnerRulerProps) {
        super(props);
        this.state = this.props;
    }
    public render() {
        const { parentElement, ...state } = this.state;
        return createPortal(<PreactRuler ref={ref(this, "preactRuler")} {...state} />, parentElement);
    }
}
