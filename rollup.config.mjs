// rollup.config.mjs

import fs from "fs";

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

const config = JSON.parse(fs.readFileSync("./package.json", "utf8"));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: config.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: config.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        modules: true,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        plugins: ["external-helpers"],
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: config.module,
    output: [{ file: config.types, format: "esm" }],
    plugins: [dts()],
  },
];
