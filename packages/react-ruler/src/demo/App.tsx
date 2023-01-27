import * as React from "react";
import Scene from "scenejs";
import "./App.css";
import Ruler from "../react-ruler/Ruler";
import { ref } from "framework-utils";

export default class App extends React.Component {
    private scene: Scene = new Scene();
    private ruler1!: Ruler;
    private ruler2!: Ruler;
    private ruler3!: Ruler;
    private ruler4!: Ruler;
    private ruler5!: Ruler;
    private ruler6!: Ruler;
    private ruler7!: Ruler;
    private ruler8!: Ruler;
    private ruler9!: Ruler;
    private ruler10!: Ruler;
    private ruler11!: Ruler;
    private ruler12!: Ruler;

    state = {
        range: [0, 100]
    };

    public swapRange = () => {
        const newRange = [0, this.state.range[1] + 10];
        this.setState({
            range: newRange,
        });
    }

    render() {
        return (<div>
            <Ruler
                textAlign={"center"}
                segment={5}
                mainLineSize={12}
                shortLineSize={5}
                longLineSize={4}
                type="horizontal"
                useResizeObserver={true}
                style={{ display: "block", width: "100%", height: "50px" }}
            />
            <Ruler ref={ref(this, "ruler1")}
                negativeRuler={false}
                textAlign={"center"}
                segment={5}
                mainLineSize={12}
                shortLineSize={5}
                longLineSize={4}
                range={[0, 150]}
                type="horizontal" style={{ display: "block", width: "300px", height: "100px" }}
                font="15px sans-serif"
                lineWidth={1}
            />
            <Ruler ref={ref(this, "ruler2")}
                type="horizontal"
                direction="start"
                selectedRanges={[[-100, 250]]}
                style={{ display: "block", width: "400px", height: "30px" }}
                lineWidth={1}
                />
            <Ruler ref={ref(this, "ruler3")}
                negativeRuler={false}
                direction="start"
                type="vertical" style={{ display: "block", width: "30px", height: "100px" }} />
            <Ruler ref={ref(this, "ruler4")}
                negativeRuler={false}
                textAlign={"center"}
                textOffset={[0, 0]}
                type="vertical" direction="start" style={{ display: "block", width: "30px", height: "130px", transform: "translate(100px) rotate(90deg)" }} />
            <Ruler ref={ref(this, "ruler5")}
                type="horizontal" direction="start" style={{ display: "block", width: "130px", height: "30px" }}
                textFormat={this.textFormat.bind(this)}
                />
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler6")}
                    negativeRuler={false}
                    type="horizontal"
                    direction="start"
                    style={{ display: "block", width: "400px", height: "30px" }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler7")}
                    negativeRuler={false}
                    type="horizontal"
                    direction="center"
                    textAlign="center"
                    textBackgroundColor="#333333"
                    style={{ display: "block", width: "400px", height: "30px" }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler8")}
                    negativeRuler={false}
                    type="horizontal"
                    direction="end"
                    style={{ display: "block", width: "400px", height: "30px" }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler9")}
                    negativeRuler={false}
                    type="horizontal"
                    direction="end"
                    textAlign="center"
                    style={{ display: "block", width: "400px", height: "30px" }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler10")}
                    negativeRuler={false}
                    type="horizontal"
                    direction="end"
                    textAlign="center"
                    style={{ display: "block", width: "400px", height: "30px" }}
                    selectedRanges={[[-100, 100], [200, 300]]}
                    range={this.state.range as any}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler11")}
                    negativeRuler={false}
                    type="horizontal"
                    zoom={0.5}
                    direction="end"
                    textAlign="center"
                    rangeBackgroundColor="#555555"
                    range={[100, 300]}
                    style={{ display: "block", width: "400px", height: "30px" }}
                />
            </div>
            <div style={{ padding: 10 }}>
                <Ruler ref={ref(this, "ruler12")}
                    negativeRuler={false}
                    zoom={0.5}
                    type="vertical"
                    direction="end"
                    textAlign="center"
                    rangeBackgroundColor="#555555"
                    range={[300, 400]}
                    style={{ display: "block", width: "30px", height: "400px" }}
                />
            </div>
        </div>
        );
    }
    public textFormat(s: number): string {
        let t = "";
        if (s < 0) {
            s = 0;
        }
        const hour = Math.floor(s / 3600);
        const min = Math.floor(s / 60) % 60;
        const sec = s % 60;
        if (hour < 10) {
            t = "0" + hour + ":";
        } else {
            t = hour + ":";
        }

        if (min < 10) {
            t += "0";
        }
        t += min + ":";
        if (sec < 10) {
            t += "0";
        }
        t += sec;
        return t;
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
            this.ruler6.scroll(scrollX);
            this.ruler7.scroll(scrollX);
            this.ruler8.scroll(scrollX);
            this.ruler9.scroll(scrollX);
            this.ruler10.scroll(scrollX);
            this.ruler11.scroll(scrollX);
            this.ruler12.scroll(scrollY);
        });
        setInterval(this.swapRange, 1000);
    }
}
// export default function App() {
//     return <Ruler ref={ref(this, "ruler1")}
//                     negativeRuler={false}
//                     textAlign={"center"}
//                     segment={5}
//                     mainLineSize={12}
//                     shortLineSize={5}
//                     longLineSize={4}
//                     range={[0, 150]}
//                     type="horizontal" style={{ display: "block", width: "300px", height: "100px" }}
//                     font="15px sans-serif"
//                     />;
// }
// export default class App extends React.Component<{}> {
    // private scene: Scene = new Scene();
    // // private editor!: Editor;
    // private ruler1: Ruler;
    // private ruler2: Ruler;
    // private ruler3: Ruler;
    // private ruler4: Ruler;
    // private ruler5: Ruler;
    // private ruler6: Ruler;
    // private ruler7: Ruler;
    // private ruler8: Ruler;

    // state = {
    //     range: [0, 100] as [number, number],
    // }

    // public swapRange = () => {
    //     const newRange = [0, this.state.range[1] + 10];
    //     this.setState({
    //         range: newRange as [number, number],
    //     });
    // }

//     public render() {
//         // return null;
//         return (<div>
//             <Ruler ref={ref(this, "ruler1")}
//                 negativeRuler={false}
//                 textAlign={"center"}
//                 segment={5}
//                 mainLineSize={12}
//                 shortLineSize={5}
//                 longLineSize={4}
//                 range={[0, 150]}
//                 type="horizontal" style={{ display: "block", width: "300px", height: "100px" }}
//                 font="15px sans-serif"
//                 />
//             <Ruler ref={ref(this, "ruler2")}
//                 type="horizontal" direction="start" style={{ display: "block", width: "400px", height: "30px" }} />
//             <Ruler ref={ref(this, "ruler3")}
//                 negativeRuler={false}
//                 direction="start"
//                 type="vertical" style={{ display: "block", width: "30px", height: "100px" }} />
//             <Ruler ref={ref(this, "ruler4")}
//                 negativeRuler={false}
//                 textAlign={"center"}
//                 textOffset={[0, 0]}
//                 type="vertical" direction="start" style={{ display: "block", width: "30px", height: "130px", transform: "translate(100px) rotate(90deg)" }} />
//             <Ruler ref={ref(this, "ruler5")}
//                 type="horizontal" direction="start" style={{ display: "block", width: "130px", height: "30px" }}
//                 textFormat={this.textFormat.bind(this)} />
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler6")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     direction="start"
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler6")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     direction="center"
//                     textAlign="center"
//                     textBackgroundColor="#333333"
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler6")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     direction="end"
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler6")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     direction="end"
//                     textAlign="center"
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler6")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     direction="end"
//                     textAlign="center"
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                     range={this.state.range}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler7")}
//                     negativeRuler={false}
//                     type="horizontal"
//                     zoom={0.5}
//                     direction="end"
//                     textAlign="center"
//                     rangeBackgroundColor="#555555"
//                     range={[100, 300]}
//                     style={{ display: "block", width: "400px", height: "30px" }}
//                 />
//             </div>
//             <div style={{ padding: 10 }}>
//                 <Ruler ref={ref(this, "ruler8")}
//                     negativeRuler={false}
//                     zoom={0.5}
//                     type="vertical"
//                     direction="end"
//                     textAlign="center"
//                     rangeBackgroundColor="#555555"
//                     range={[300, 400]}
//                     style={{ display: "block", width: "30px", height: "400px" }}
//                 />
//             </div>
//         </div>
//         );
//     }
    // public textFormat(s: number): string {
    //     let t = "";
    //     if (s < 0) {
    //         s = 0;
    //     }
    //     const hour = Math.floor(s / 3600);
    //     const min = Math.floor(s / 60) % 60;
    //     const sec = s % 60;
    //     if (hour < 10) {
    //         t = "0" + hour + ":";
    //     } else {
    //         t = hour + ":";
    //     }

    //     if (min < 10) {
    //         t += "0";
    //     }
    //     t += min + ":";
    //     if (sec < 10) {
    //         t += "0";
    //     }
    //     t += sec;
    //     return t;
    // }
    // public componentDidMount() {
    //     let scrollX = 0;
    //     let scrollY = 0;
    //     window.addEventListener("wheel", e => {

    //         scrollX += e.deltaX;
    //         scrollY += e.deltaY;

    //         this.ruler1.scroll(scrollX);
    //         this.ruler2.scroll(scrollX);
    //         this.ruler3.scroll(scrollY);
    //         this.ruler4.scroll(scrollY);
    //         this.ruler6.scroll(scrollX);
    //         this.ruler7.scroll(scrollX);
    //         this.ruler8.scroll(scrollY);
    //     });
    //     setInterval(this.swapRange, 1000);
    // }
// }
