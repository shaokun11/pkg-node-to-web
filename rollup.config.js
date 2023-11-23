// rollup.config.js
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const nodePolyfills = require("rollup-plugin-polyfill-node");
const terser = require("@rollup/plugin-terser");

exports.default = {
    input: "app.js",
    output: {
        file: "sign.min.js",
        format: "iife",
        name: "EthSignUtils",
    },
    plugins: [commonjs(), nodePolyfills(), resolve(), terser()],
};
