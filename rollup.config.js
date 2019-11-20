
import builder from "@daybrush/builder";
import preact from "rollup-plugin-preact";

const preactPlugin = preact({
    noPropTypes: true,
    usePreactX: true,
    // resolvePreactCompat: true,
});
const preactResolvePlugin = preact({
    noPropTypes: true,
    usePreactX: true,
    resolvePreactCompat: true,
});

const external = {
    "@egjs/component": "@egjs/component",
    "@daybrush/utils": "@daybrush/utils",
    "@daybrush/drag": "@daybrush/drag",
    "framework-utils": "framework-utils",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
    "preact": "preact",
    "preact/compat": "preact/compat",
    "preact-ruler": "preact-ruler",
};
export default builder([
    {
        name: "Ruler",
        input: "src/index.umd.ts",
        output: "./dist/ruler.js",
        plugins: [preactResolvePlugin],

    },
    {
        name: "Ruler",
        input: "src/index.umd.ts",
        output: "./dist/ruler.min.js",
        plugins: [preactResolvePlugin],
        uglify: true,
    },
    {
        input: "src/index.esm.ts",
        output: "./dist/ruler.esm.js",
        exports: "named",
        format: "es",
        plugins: [preactPlugin],
        external,
    },
    {
        input: "src/index.umd.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [preactPlugin],
        external,
    },
]);
