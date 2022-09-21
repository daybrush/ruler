
import builder from "@daybrush/builder";
import compat from "rollup-plugin-react-compat";


const reactCompat = compat({
    useReactCompat: true,
    aliasModules: {
        "@scena/react-ruler": "react-compat-ruler",
    },
});
const resolveReactCompat = compat({
    useReactCompat: true,
    resolveCompat: true,
});

const external = {
    "react-simple-compat": "react-simple-compat",
    "react-compat-ruler": "react-compat-ruler",
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
