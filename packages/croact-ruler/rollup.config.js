
import builder from "@daybrush/builder";
import reactCompat from "rollup-plugin-react-compat";

const external = {
    "croact": "croact",
    "@daybrush/utils": "utils",
    "css-styled": "css-styled",
    "framework-utils": "framework-utils",
    "@daybrush/drag": "Dragger",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
};


const reactPlugin = reactCompat({
    useCroact: true,
})



export default builder([
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/ruler.esm.js",
        exports: "named",
        format: "es",
        plugins: [reactPlugin],
        external,
    },
    {
        sourcemap: false,
        input: "src/index.umd.ts",
        output: "./dist/ruler.cjs.js",
        exports: "default",
        plugins: [reactPlugin],
        format: "cjs",
        external,
    },
]);
