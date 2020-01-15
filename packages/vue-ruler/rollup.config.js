
import builder from "@daybrush/builder";

export default builder([
    {
        input: "src/components/Ruler.ts",
        output: "./dist/ruler.esm.js",
        exports: "named",
        format: "es",
        plugins: [],
    },
    {
        input: "src/components/Ruler.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [],
    },
]);
