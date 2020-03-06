import Ruler, * as others from "./index.esm";

for (const name in others) {
    (Ruler as any)[name] = others[name];
}

export default Ruler;
