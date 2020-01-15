
import builder from "@daybrush/builder";
import reactCompat from "rollup-plugin-react-compat";

const external = {
    "react-simple-compat": "react-simple-compat",
    "@daybrush/utils": "utils",
    "css-styled": "css-styled",
    "framework-utils": "framework-utils",
    "@daybrush/drag": "Dragger",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
};


const reactPlugin = reactCompat({
    useReactCompat: true,
})



export default builder([
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/ruler.esm.js",
        exports: "default",
        format: "es",
        plugins: [reactPlugin],
        external,
    },
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        plugins: [reactPlugin],
        format: "cjs",
        external,
    },
]);
