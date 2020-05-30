import Ruler from "./Ruler.svelte";
import { METHODS } from "@scena/ruler";

export default /*#__PURE__*/ (() => {
    const prototype = Ruler.prototype;

    METHODS.forEach(name => {
        prototype[name] = function (...args) {
            const self = this.getInstance();
            const result = self[name](...args);

            if (result === self) {
                return this;
            } else {
                return result;
            }
        };
    });
    return Ruler;
})();
