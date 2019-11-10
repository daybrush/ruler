
import { Component } from "react";
import * as React from "react";
import Scene from "scenejs";
import "./App.css";
import Ruler from "../react-ruler/Ruler";
import { ref } from "framework-utils";

export default class App extends Component<{}> {
    private scene: Scene = new Scene();
    // private editor!: Editor;
    private ruler1: Ruler;
    private ruler2: Ruler;
    private ruler3: Ruler;
    private ruler4: Ruler;
    public render() {
        return (<div>
            <Ruler ref={ref(this, "ruler1")}
                 type="horizontal" style={{ display: "block", width: "300px", height: "100px" }}/>
            <Ruler ref={ref(this, "ruler2")}
                type="horizontal" style={{ display: "block", width: "400px", height: "30px" }}/>
            <Ruler ref={ref(this, "ruler3")}
                type="vertical" style={{ display: "block", width: "400px", height: "30px" }}/>
            <Ruler ref={ref(this, "ruler4")}
                type="vertical" style={{ display: "block",  width: "30px", height: "130px" }}/>
        </div>
        );
    }
    public componentDidMount() {
        let scrollX = 0;
        let scrollY = 0;
        window.addEventListener("wheel", e => {

            scrollX += e.deltaX;
            scrollY += e.deltaY;

            this.ruler1.scroll(scrollX);
            this.ruler2.scroll(scrollX);
            this.ruler3.scroll(scrollY);
            this.ruler4.scroll(scrollY);
        });
    }
}
