import builder from "@daybrush/builder";

const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "@daybrush/drag": "utils",
        "@egjs/axes": "eg.Axes",
        "react": "React",
        "keycon": "KeyController",
        "react-dom": "ReactDOM",
        "react-css-styler": "styled"
    },
};

export default builder([
    {
        ...defaultOptions,
        input: "src/react-ruler/index.ts",
        output: "./dist/ruler.esm.js",
        format: "es",
    },
    {
        ...defaultOptions,
        input: "src/react-ruler/index.ts",
        output: "./dist/ruler.cjs.js",
        format: "cjs",
    },
]);
