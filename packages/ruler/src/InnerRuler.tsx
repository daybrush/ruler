import * as React from "react";
import { createPortal } from "react-dom";
import { ref } from "framework-utils";
import ReactRuler from "@scena/react-ruler";
import { InnerRulerProps } from "./types";

export default class InnerRuler extends React.Component<InnerRulerProps, InnerRulerProps> {
    public state: InnerRulerProps = {};
    public ruler: ReactRuler;
    constructor(props: InnerRulerProps) {
        super(props);
        this.state = this.props;
    }
    public render() {
        return <ReactRuler ref={ref(this, "ruler")} {...this.state} />;
    }
}
