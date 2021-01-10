import builder from "@daybrush/builder";
const preact = require("rollup-plugin-preact");


const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "@daybrush/drag": "Dragger",
        "preact": "Preact",
        "preact/compat": "Preact",
        "preact-compat": "preact-compat",
        "framework-utils": "framework-utils",
        "react-css-styled": "preact-css-styled",
        "@egjs/agent": "eg.Agent",
        "@egjs/children-differ": "eg.ChildrenDiffer",
    },
    exports: "named",
    plugins: [
        preact({
            noPropTypes: false,
            noEnv: false,
            noReactIs: false,
            usePreactX: true,
            aliasModules: {
                "react-css-styled": "preact-css-styled",
            },
        }),
    ],
};

export default builder([
    {
        ...defaultOptions,
        input: "src/preact-ruler/index.esm.ts",
        output: "./dist/ruler.esm.js",
        format: "es",
        exports: "named",
    },
    {
        ...defaultOptions,
        input: "src/preact-ruler/index.umd.ts",
        output: "./dist/ruler.cjs.js",
        format: "cjs",
        exports: "default",
    },
]);
