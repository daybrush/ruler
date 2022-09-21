const path = require("path");
const { convertProperties } = require("@daybrush/release/angular");
const { PROPERTIES } = require("../packages/react-ruler/dist/ruler.cjs.js");

convertProperties(
    {
        ANGULAR_RULER_INPUTS: PROPERTIES,
    },
    [
        path.resolve(__dirname, "../packages/ngx-ruler/projects/ngx-ruler/src/public-api.ts"),
    ],
);
