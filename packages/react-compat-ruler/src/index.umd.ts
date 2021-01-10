import Ruler, * as others from "./index";

for (const name in others) {
    (Ruler as any)[name] = (others as any)[name];
}

export default Ruler;
