
import builder from "@daybrush/builder";
import compat from "rollup-plugin-react-compat";


const reactCompat = compat({
    useCroact: true,
    aliasModules: {
        "@scena/react-ruler": "croact-ruler",
    },
});
const resolveReactCompat = compat({
    useCroact: true,
    resolveCompat: true,
});

const external = {
    "croact": "croact",
    "croact-ruler": "croact-ruler",
    "@egjs/component": "@egjs/component",
    "@daybrush/utils": "@daybrush/utils",
    "@daybrush/drag": "@daybrush/drag",
    "framework-utils": "framework-utils",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
};
export default builder([
    {
        name: "Ruler",
        input: "src/index.umd.ts",
        output: "./dist/ruler.js",
        plugins: [resolveReactCompat],

    },
    {
        name: "Ruler",
        input: "src/index.umd.ts",
        output: "./dist/ruler.min.js",
        plugins: [resolveReactCompat],
        uglify: true,
    },
    {
        input: "src/index.esm.ts",
        output: "./dist/ruler.esm.js",
        exports: "named",
        format: "es",
        plugins: [reactCompat],
        external,
    },
    {
        input: "src/index.umd.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [reactCompat],
        external,
    },
]);
