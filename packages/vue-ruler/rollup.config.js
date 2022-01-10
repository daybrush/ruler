
import builder from "@daybrush/builder";
import vuePlugin from "rollup-plugin-vue";

export default builder([
    {
        input: "src/components/index.ts",
        output: "./dist/ruler.esm.js",
        exports: "named",
        format: "es",
        plugins: [
            vuePlugin(),
        ],
    },
    {
        input: "src/components/index.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [
            vuePlugin(),
        ],
    },
]);
