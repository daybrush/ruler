import Ruler from "../../src/Ruler";
import Dragger from "@daybrush/drag";
import "./index.css";

const ruler1 = new Ruler(document.querySelector(".ruler.horizontal"), {
    type: "horizontal",
});
const ruler2 = new Ruler(document.querySelector(".ruler.vertical"), {
    type: "vertical",
});

window.addEventListener("resize", () => {
    ruler1.resize();
    ruler2.resize();
});
let scrollX = 0;
let scrollY = 0;

new Dragger(document.body, {
    drag: e => {
        scrollX -= e.deltaX;
        scrollY -= e.deltaY;

        ruler1.scroll(scrollX);
        ruler2.scroll(scrollY);
    },
});
